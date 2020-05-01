const AsyncLock = require('async-lock');

const lock = new AsyncLock();
const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));


class Device {
  id = '';
  power = 'off';
  timeToStart = 100;

  static getId () {
    return new this().id;
  }

  async powerOn () {
    return await lock.acquire(this.id, async (done) => {
      await sleep(this.timeToStart);
      this.power = 'on';

      done(null, 'on');
    });
  }

  async powerOff () {
    return await lock.acquire(this.id, async (done) => {
      await sleep(this.timeToStart);
      this.power = 'off';

      done(null, 'off');
    });
  }

  async getPowerStatus () {
    return await lock.acquire(this.id, async (done) => {
      done(null, this.power);
    });
  }
}


class HogeDevice extends Device {
  id = 'Hoge';
  timeToStart = 100;
}

class FugaDevice extends Device {
  id = 'Fuga';
  timeToStart = 5000;
}

module.exports = { HogeDevice, FugaDevice };

