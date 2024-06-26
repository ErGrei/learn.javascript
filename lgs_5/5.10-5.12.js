// У вас есть двумерный список в следующем формате:
// data = [[2, 5], [3, 4], [8, 7]]
// Каждый подсписок содержит два элемента, и каждый элемент в подсписках представляет собой целое число.
// Напишите функцию process_data()/ processData(), которая обрабатывает каждый подсписок следующим образом:
// [2, 5]--> 2 - 5-->-3
// [3, 4]--> 3 - 4-->-1
// [8, 7]--> 8 - 7-->1
// а затем возвращает произведение всех обработанных подсписков: -3 * -1 * 1--> 3.

// Что касается ввода, вы можете быть уверены, что ни основной список, ни подсписки не будут пустыми.

function processData(data) {
  let result = data.map((item) => {
    let [num1, num2] = item;
    return num1 - num2;
  });
  result = result.reduce((acc, item) => acc * item);
  return result;
}

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);

// Чтобы решить эту ката, выполните функцию CalculateHypotenuse(a,b), которая вернет длину гиптенузы прямоугольного треугольника, при этом две другие стороны будут иметь длину, равную входным параметрам. Более подробная информация:

// Возвращаемое значение должно быть числом, округленным до трех знаков после запятой.
// Ошибка ( ArgumentExceptionв C#) должна быть выдана, если предоставлены недопустимые входные данные (оба входных данных должны быть числами выше нуля).
// calculateHypotenuse(1,1); // returns 1.414
// calculateHypotenuse(3,4); // returns 5
// calculateHypotenuse(-2,1); // throws error
// calculateHypotenuse("one", "two"); // throws error

function calculateHypotenuse(a, b) {
  if (
    a <= 0 ||
    b <= 0 ||
    typeof a !== "number" ||
    typeof b !== "number" ||
    isNaN(a) ||
    isNaN(b)
  ) {
    throw new Error("Invalid input");
  }
  return Number(Math.sqrt(a * a + b * b).toFixed(3));
}

console.log(calculateHypotenuse(1, 1));

// Вот новое ката, которое Codewars попросили меня выполнить, связанное с собеседованием и работой на производстве.

// Возможно, вы знакомы и использовали Angular.js. Помимо прочего, он позволяет создавать собственные фильтры, работающие как функции. Затем вы можете поместить их на страницу, чтобы внести определенные изменения в данные, например сократить число для отображения более краткой записи.

// В этом ката мы создадим функцию, которая возвращает другую функцию (или процесс в Ruby), которая сокращает очень длинные числа. Учитывая исходный массив значений, замените X-ю степень заданной базы. Если входные данные возвращаемой функции не являются числовой строкой, она должна возвращать сами входные данные в виде строки.

// Вот пример, который стоит тысячи слов:

// filter1 = shortenNumber(['','k','m'],1000);
// filter1('234324') == '234k';
// filter1('98234324') == '98m';
// filter1([1,2,3]) == '1,2,3';
// filter2 = shortenNumber(['B','KB','MB','GB'],1024);
// filter2('32') == '32B';
// filter2('2100') == '2KB';
// filter2('pippi') == 'pippi';

function shortenNumber(base, power) {
  return (num = power) => {
    if (typeof num !== "number") {
      return String(num);
    }
    let res = num;
    while (res >= power) {
      res /= power;
    }
    return `${res}${base[0]}`;
  };
}

console.log(shortenNumber(["", "k", "m"], 1000)("234324"));

/**
 * Меняет местами начало и конец указанного массива:
 * голова (первая половина) массива перемещается в конец, хвост (последняя половина) перемещается в начало.
 * Средний элемент (если существует) оставьте на том же месте. *
 *
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(arr) {
  const head = arr.slice(0, Math.floor(arr.length / 2));
  const middle = arr.slice(
    Math.floor(arr.length / 2),
    Math.floor(arr.length / 2) + (arr.length % 2 ? 1 : 0)
  );
  const tail = arr.slice(
    Math.floor(arr.length / 2) + (arr.length % 2 ? 1 : 0),
    arr.length
  );
  return [tail, middle, head].flat(Infinity);
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]));