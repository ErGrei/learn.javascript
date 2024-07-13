class Microwave {
  #power = 0;
  constructor() {
    this.on = false;
    this.time = 0;
    this.interval;
  }

  setPower(power) {
    if (power >= 1 && power <= 10) {
      this.#power = power;
      return this.#power;
    }
    console.log("Enter a number between 1 and 10 for power");
  }

  setTime(time) {
    if (time >= 0 && time <= 90) {
      this.time = time;
      return this.time;
    }
    console.log("Enter a number between 0 and 90 for time left");
  }
  getPower() {
    return this.#power;
  }

  getTime() {
    return this.time;
  }

  turnOn() {
    if (this.on === false) {
      this.on = true;
      this.timeCountDown(this.time);
    } else {
      console.log("Microwave already on");
    }
  }
  turnOff() {
    if (this.on === true) {
      this.on = false;
      this.time = 0;
      clearTimeout(this.interval);
      console.log("Microwave turned off");
    } else {
      console.log("Microwave already off");
    }
  }
  timeCountDown(seconds) {
    if (seconds === 0) {
      this.turnOff();
      console.log("Time is up!");
      this.time = 0;
    } else {
      console.log(`Time left:  ${seconds}  seconds`);
      this.interval = setTimeout(() => {
        this.time = --this.time;
        this.timeCountDown(--seconds)}, 1000);
    }
  }
  pause() {
    if (this.on === true) {
      this.on = false;
      clearTimeout(this.interval);
      console.log("Microwave paused");
    } else {
      console.log("Microwave already paused");
    }
  }

  resume() {
    if (this.on === false) {
      this.on = true;
      this.timeCountDown(this.time);
      console.log("Microwave resumed");
    } else {
      console.log("Microwave already on");
    }
  }

}

const myMicrowave1 = new Microwave();
myMicrowave1.setPower(5);
myMicrowave1.setTime(20);
myMicrowave1.turnOn();
setTimeout(() => myMicrowave1.pause(), 5000);
setTimeout(() => myMicrowave1.resume(), 7000);
