// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

function ClockF({ template }) {
  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  this.stop = function () {
    clearInterval(timer);
  };

  this.start = function () {
    render();
    timer = setInterval(render, 1000);
  };
}

let clockF = new ClockF({ template: "h:m:s" });
// clockF.start();

class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer = null;
  }

  render() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const mins = date.getMinutes().toString().padStart(2, "0");
    const secs = date.getSeconds().toString().padStart(2, "0");
    const output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
// clock.start();

//   В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    // this.name = name;
    super(name);
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
console.log(rabbit.name);

// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.1

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

//   Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

// В чем разница?

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

class Rabbit1 extends Object {
  constructor(name) {
    super(); //!!!!!!!!!!
    this.name = name;
  }
}

let rabbit1 = new Rabbit1("Кроль");

console.log(rabbit1.hasOwnProperty("name"));

class Kettle {
  #id = null;
  constructor() {
    this.on = false;
    this.power = 0;
    this.volume = 0;
  }

  setId(id) {
    this.#id = id;
  }

  getId() { 
    return this.#id;
  }
  turnOn() {
    this.on = true;
  }

  turnOff() {
    this.on = false;
  }

  setPower(power) {
    this.power = power;
  }

  setVolume(volume) {
    this.volume = volume;
  }
  getPower() {
    return this.power;
  }

  getVolume() {
    return this.volume;
  }
}

class CoffeeMachine extends Kettle {
  // constructor() {
  //   super();
  // }

  makeCoffee() {
    super.turnOn()

    if (!this.on) {
      console.log("Кофемашина не включена!");
      return;
    }

    if (this.power <= 0) {
      console.log("Кофемашина слишком мало мощности!");
      return;
    }

    if (this.volume <= 0) {
      console.log("Кофемашина слишком мало объёма!");
      return;
    }

    console.log("Кофе готов!");
  }
}

const coffeeMachine = new CoffeeMachine();
coffeeMachine.setPower(100);
coffeeMachine.setVolume(100);
coffeeMachine.setId(1);
// coffeeMachine.turnOn();

console.log(coffeeMachine);


/////////////так нельзя!!!!!!!!
class CoffeeMachine2 extends coffeeMachine {
  constructor() {
    super();

    this.coffeeBeans = 0;
  }


}

const coffeeMachine2 = new CoffeeMachine2();

console.log(coffeeMachine2.makeCoffee());
console.log(coffeeMachine2.coffeeBeans);
