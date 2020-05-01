const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

class Device {
  power = 'off'
  timeToStart = 100

  static getId () {
    return new this().id;
  }

  async powerOn () {
    await sleep(this.timeToStart);
    this.power = 'on';
  }

  async powerOff () {
    await sleep(this.timeToStart);
    this.power = 'off';
  }

  getPowerStatus () {
    return this.power;
  }
}


class HogeDevice extends Device {
  id = 'Hoge'
  timeToStart = 100
}

class FugaDevice extends Device {
  id = 'Fuga'
  timeToStart = 5000
}

module.exports = { HogeDevice, FugaDevice };

