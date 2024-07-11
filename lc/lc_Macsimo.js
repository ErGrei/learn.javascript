// prompt() принимать арифметику
// если все ок, вывести результат
// если выражение некорретно то сказать через alert() что чето не то
// '2+2' ok
// '2' ok
// '2 + 2 * 2' ok
// '2 + 2 * 2 ' ok
// '2   +    2 ** 2 ' ok
// '2 + 2 *** 2 ' error
// '+' // error
// '+1' ok
// '1+' error
// '1 + 2 + "test" + 3' // error
// '1 + 2 + {} + 3'

// const resPromt = prompt("введите матиматическое выражение");

// console.log(resPromt);

function randomMatem() {
  try {
    const resFunc = new Function(`return ${resPromt}`)();
    if (typeof resFunc !== "number") {
      throw new SyntaxError();
    }
    alert(resFunc);
  } catch (e) {
    alert(`Error: введены некорректные значения ${e.name}`);
  }
}

// randomMatem();

// Создайте класс FormatError, который наследует от встроенного класса SyntaxError.

// Класс должен поддерживать свойства message, name и stack.

// Пример использования:

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = 'FormatError';
  }
}


let err = new FormatError("ошибка форматирования");

console.log( err.name ); // FormatError
console.log( err.message ); // ошибка форматирования
console.log( err.stack ); // stack

console.log( err instanceof FormatError ); // true
console.log( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)
