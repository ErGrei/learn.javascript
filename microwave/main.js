class Microwave {
  static maximumNumberOfStarts = 1;
  #interval;
  _maxPower = 90;
  constructor() {
    this.on = false;
    this.time = 0;
    this.power = 0;
  }

  static getMaximumNumberOfStarts() {
    return Microwave.maximumNumberOfStarts;
  }

  static setMaximumNumberOfStarts(number) {
    Microwave.maximumNumberOfStarts = number;
  }

  static resetMaximumNumberOfStarts() {
    Microwave.maximumNumberOfStarts = 5;
  }

  setMaxPower(power) {
    this._maxPower = power;
    return this._maxPower;
  }

  getMaxPower() {
    return this._maxPower;
  }
  setPower(power) {
    if (power >= 1 && power <= this.setMaxPower()) {
      this.power = power;
      return this.power;
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
    return this.power;
  }

  getTime() {
    return this.time;
  }

  turnOn() {
    if (Microwave.maximumNumberOfStarts === 0) {
      console.error("contact the service center");
      return;
    } else if (this.on === false) {
      this.on = true;
      this.timeCountDown(this.time);
      Microwave.maximumNumberOfStarts--;
    } else {
      console.log("Microwave already on");
    }
  }

  turnOff() {
    if (this.on === true) {
      this.on = false;
      this.time = 0;
      clearTimeout(this.#interval);
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
      this.#interval = setTimeout(() => {
        this.time = --this.time;
        this.timeCountDown(--seconds);
      }, 1000);
    }
  }
  pause() {
    if (this.on === true) {
      this.on = false;
      clearTimeout(this.#interval);
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

class castomMicrowave extends Microwave {
  constructor(color, manufacturer) {
    super();
    this.color = color;
    this.manufacturer = manufacturer;
  }
  getColor() {
    return this.color;
  }
  getManufacturer() {
    return this.manufacturer;
  }
  bakeBread() {
    if (this.getMaxPower() < 50) {
      console.log("this function is not available");
    } else {
      this.power = 60;
      this.time = 5;
      this.turnOn();
    }
  }
}

const myMicrowave1 = new castomMicrowave("black", "Tefal");

myMicrowave1.setPower(5);
myMicrowave1.setTime(5);
myMicrowave1.bakeBread();
setTimeout(() => myMicrowave1.pause(), 2000);
setTimeout(() => myMicrowave1.resume(), 4000);
setTimeout(() => {
  myMicrowave1.setPower(5);
  myMicrowave1.setTime(5);
  myMicrowave1.turnOn();
}, 10000);

setTimeout(() => console.log("qqqq"), 12000);
