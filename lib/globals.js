const Devices = require('../models/devices');

const GLOBAL_VAR = {
  Devices: {}
};

for (const device of Object.values(Devices)) {
  GLOBAL_VAR.Devices[device.getId()] = new device();
}

module.exports = GLOBAL_VAR;
