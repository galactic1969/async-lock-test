const express = require('express');
const router = express.Router();

const Devices = require('../lib/globals').LockDevices;

router.get('/:deviceId/poweron', async (req, res, next) => {
  const id = req.params.deviceId;
  if (Devices[id]) {
    const status = await Devices[id].powerOn();
    console.log('on route');
    res.send({ [id]: status });
  } else {
    next();
  }
});

router.get('/:deviceId/poweroff', async (req, res, next) => {
  const id = req.params.deviceId;
  if (Devices[id]) {
    const status = await Devices[id].powerOff();
    res.send({ [id]: status });
  } else {
    next();
  }
});

router.get('/:deviceId/status', async (req, res, next) => {
  const id = req.params.deviceId;
  if (Devices[id]) {
    const status = await Devices[id].getPowerStatus();
    res.send({ [id]: status });
  } else {
    next();
  }
});

module.exports = router;
