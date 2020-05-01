const AsyncLock = require('async-lock');
const lock = new AsyncLock();

const express = require('express');
const router = express.Router();

const Devices = require('../lib/globals').Devices;

router.get('/:deviceId/poweron', async (req, res, next) => {
  const id = req.params.deviceId;
  if (Devices[id]) {
    lock.acquire(id, async () => {
      await Devices[id].powerOn();
      res.send({ [id]: 'on' });
    });
  } else {
    next();
  }
});

router.get('/:deviceId/poweroff', async (req, res, next) => {
  const id = req.params.deviceId;
  if (Devices[id]) {
    lock.acquire(id, async () => {
      await Devices[id].powerOff();
      res.send({ [id]: 'off' });
    });
  } else {
    next();
  }
});

router.get('/:deviceId/status', async (req, res, next) => {
  const id = req.params.deviceId;
  if (Devices[id]) {
    lock.acquire(id, () => {
      const status = Devices[id].getPowerStatus();
      res.send({ [id]: status });
    });
  } else {
    next();
  }
});

module.exports = router;
