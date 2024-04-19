// напиши софт на тостер:

// setPower() принимает число от 1 до 10, устанавливает мощность нагрева (по умолчанию мощность 5)

// setTimeLeft() принимает число от 0 до 90, устанавливает время в секундах сколько будет идти нагрев. То есть если осталось 5 секунд до остановки работы, changeTime(30) должен сделать 30 сек, а если потом сделать changeTime(0) то это должно остановить тостер. Установка значения в положительное запускает таймер на это время, установка назад в 0 останавливает и само вызывает ejectBread(). Если мы поставим время на 10 сек, через 10 сек тостер должен выключиться

// insertBread() кладет хлеб в тостер - но нельзя положить хлеб в тостер если там уже есть хлеб

// ejectBread() изъять хлеб из тостера, также метод может быть вызван автоматически при нагреве

// logStat() выводит всю информацию о тостере - мощность, время нагрева, есть ли сейчас нагрев, есть ли хлеб внутри, сколько уже хлеб греется времени, сколько мощности ушло на хлебушек

// logPower() вывести сколько мощности ушло на хлеб за время его работы (например 20 сек работали с мощностью 5, а потом 10 сек работали с мощностью 3 - получится 20 * 5 + 10 * 3 = 130). Нужна как общая сумма за все запуски так и сумма за последний. при ejectBread() или insertBread() - то есть когда у нас новый хлебушек вставился - счетчик обнуляется

// код должан правильно работать с точки зрения того что я могу вызвать любой метод в любое время и получить правильный результат. Например я могу увеличить мощность во время рабоыт тостера или установить время в 40 сек, а через 20 сек установить время на 10 сек. Суммарное время работы должно быть 30 сек в этом случае, а не. 40 тк я поменял время а тостер не прекращал работу.
// Код должен работать так что я могу действовать нерационально нелогично вызывая разные методы но все равно все будет работать каким либо образом и выводить достоверные логи

function Toaster() {
  let power = 5;
  let timeLeft = 0;
  let heating = false;
  let breadInside = false;
  let heatingTime = 0;
  let powerConsumed = 0;

  this.setPower = function (param = 5) {
    if (param >= 1 && param <= 10) {
      power = param;
      return power;
    }
    return "Enter a number between 1 and 10 for power.";
  };

  this.setTimeLeft = function (param = 0) {
    if (param >= 0 && param <= 90) {
      timeLeft = param;
      return timeLeft;
    }
    return "Enter a number between 0 and 90 for time left.";
  };

  this.changeTime = function (param) {
    let count = param;
    let intervalId;

    const decreaseCount = () => {
      count--;
      heatingTime++;
      powerConsumed += power;
      if (count === 0) {
        clearInterval(intervalId);
        this.ejectBread();
      }
    };

    if (param > 0) {
      intervalId = setInterval(decreaseCount, 1000);
      heating = true;
    } else {
      clearInterval(intervalId);
      heating = false;
    }

    return count;
  };

  this.insertBread = function () {
    if (!breadInside) {
      breadInside = true;
      heatingTime = 0;
      powerConsumed = 0;
    } else {
      return "Bread already inside, cannot insert more.";
    }
  };

  this.ejectBread = function () {
    breadInside = false;
    powerConsumed = 0;
    heatingTime = 0;
  };

  this.logStat = function () {
    return {
      power,
      timeLeft,
      heating,
      breadInside,
      heatingTime,
      powerConsumed,
    };
  };

  this.logPower = function () {
    return `Total power consumed: ${powerConsumed}, Power consumed in last cycle: ${powerConsumed}`;
  };
}

let toaster = new Toaster();
console.log(toaster.setPower(4));
console.log(toaster.setTimeLeft(20));
console.log(toaster.changeTime())