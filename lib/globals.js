const Devices = require('../models/devices');
const LockDevices = require('../models/lockdevices');

const GLOBAL_VAR = {
  Devices: {},
  LockDevices: {}
};

for (const device of Object.values(Devices)) {
  GLOBAL_VAR.Devices[device.getId()] = new device();
}

for (const device of Object.values(LockDevices)) {
  GLOBAL_VAR.LockDevices[device.getId()] = new device();
}
module.exports = GLOBAL_VAR;
