// напиши софт на тостер:

// setPower() принимает число от 1 до 10, устанавливает мощность нагрева (по умолчанию мощность 5)

// setTimeLeft() принимает число от 0 до 90, устанавливает время в секундах сколько будет идти нагрев. То есть если осталось 5 секунд до остановки работы, changeTime(30) должен сделать 30 сек, а если потом сделать changeTime(0) то это должно остановить тостер. Установка значения в положительное запускает таймер на это время, установка назад в 0 останавливает и само вызывает ejectBread(). Если мы поставим время на 10 сек, через 10 сек тостер должен выключиться

// insertBread() кладет хлеб в тостер - но нельзя положить хлеб в тостер если там уже есть хлеб

// ejectBread() изъять хлеб из тостера, также метод может быть вызван автоматически при нагреве

// logStat() выводит всю информацию о тостере - мощность, время нагрева, есть ли сейчас нагрев, есть ли хлеб внутри, сколько уже хлеб греется времени, сколько мощности ушло на хлебушек

// logPower() вывести сколько мощности ушло на хлеб за время его работы (например 20 сек работали с мощностью 5, а потом 10 сек работали с мощностью 3 - получится 20 * 5 + 10 * 3 = 130). Нужна как общая сумма за все запуски так и сумма за последний. при ejectBread() или insertBread() - то есть когда у нас новый хлебушек вставился - счетчик обнуляется

// код должан правильно работать с точки зрения того что я могу вызвать любой метод в любое время и получить правильный результат. Например я могу увеличить мощность во время рабоыт тостера или установить время в 40 сек, а через 20 сек установить время на 10 сек. Суммарное время работы должно быть 30 сек в этом случае, а не. 40 тк я поменял время а тостер не прекращал работу.
// Код должен работать так что я могу действовать нерационально нелогично вызывая разные методы но все равно все будет работать каким либо образом и выводить достоверные логи

function Toster() {

  /**
   * Sets the power of the object.
   *
   * @param {number} [param=5] - The power value to set. Defaults to 5.
   * @return {number|string} - The power value if it is between 1 and 10, otherwise a message indicating the invalid input.
   */
  this.setPower = function (param = 5) {
    if (param >= 1 && param <= 10) {
      return param;
    }
    return "введите число от 1 до 10";
  };

  /**
   * Sets the time left based on the provided parameter.
   *
   * @param {number} param - The parameter representing the time left.
   * @return {number|string} - The time left if it is between 0 and 90, otherwise a message indicating the invalid input.
   */
  this.setTimeLeft = function (param = 0) {
    if (param >= 0 && param <= 90) {
      return param;
    }
    return "введите число от 0 до 90";
  };

  this.changeTime = function (param = this.setTimeLeft) {
    let caunt = param;
    let decreaseСaunt = () => {
      return caunt--;
    };
    if (param > 0) {
      setInterval(decreaseСaunt, 1000);
    } else {
        clearInterval(decreaseСaunt);
    }
    return caunt;
  };
}

let toster = new Toster();
console.log(toster.setPower(4));
console.log(toster.setTimeLeft(20));
console.log(toster.changeTime())