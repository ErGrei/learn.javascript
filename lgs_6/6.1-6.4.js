// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

function sumToRec(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRec(n - 1);
  }
}

console.log(sumToRec(100));

function sumToArithProg(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToArithProg(100));

/**
 * Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
 */

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

/**
 * Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

*Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

*Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

*Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

*Пример работы:

*function fib(n) { /* ваш код } 

*alert(fib(3)); // 2
* alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.
 */

function fib(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log("fib", fib(7));

/**
 * Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

console.log("printList", printList(list));

function printListRec(list) {
  if (list) {
    console.log(list.value);
    printListRec(list.next);
  }
}

console.log("printListRec", printListRec(list));

// Рекурсия сохранит в кэш

const arr = [1, 2, 3, 4, 5];



function sumArr(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    return arr[0] + sumArr(arr.slice(1));
  }
  
}

function sumArrKesh(sumArr) {
  const ceche = {};

  return function (arr) {
    if (arr.length == 1) {
      return arr[0];
    } else if (ceche[arr]) {
      return ceche[arr];
    } else {
      ceche[arr] = arr[0] + sumArr(arr.slice(1));
      return ceche[arr];
    }
  }
}