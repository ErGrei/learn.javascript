// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
// Завершите решение так, чтобы оно вернуло сумму всех чисел, кратных 3 или 5, ниже введенного числа.
// Кроме того, если число отрицательное, верните 0.
// Примечание. Если число кратно 3 и 5, посчитайте его только один раз .
function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let res = null;
  // const originalArr = [];

  //Вариант 1
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }

  //Вариант 2
  // for (let i = 0; i < number; i++) {
  //   originalArr.push(i);
  // }
  // for (let i = 0; i < originalArr.length; i++) {
  //   if (originalArr[i] % 3 === 0 || originalArr[i] % 5 === 0) {
  //     res += +originalArr[i];
  //   }
  // }

  //Вариант 3
  //  const res = originalArr.filter((item) => item % 3 === 0 || item % 5 === 0).reduce((acum, item) => (acum += item), 0);
  console.log(res);
  return res;
}
solution(10);

//Перевернуть строку

function reverse(str) {
  //Вариант 1
  let res = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   res += str[i];
  // }

  //Вариант 2
  // res = str.split("").reverse().join("");

  //Вариант 3
  // for (let i = 0; i < str.length; i++) {
  //   res += str[str.length - 1 - i];
  // }

  //Вариант 4
  let arr = str.split("");
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  res = arr.join("");
  console.log(res);
  return res;
}
reverse("hello world");

//Палиндром
function palindrome(str) {
  const checkedStr = str.toLowerCase().replace(/[!,' '?.]/g, "");
  let res = true;
  //Вариант 1
  // let intermediateLine = checkedStr.split("").reverse().join("");
  // if (intermediateLine === checkedStr) {
  //   res = true;
  // } else {
  //   res = false;
  // }

  //Вариант 2
  let intermediateLine = checkedStr.split("");
  for (let i = 0; i < checkedStr.length; i++) {
    if (intermediateLine[i] !== intermediateLine[checkedStr.length - 1 - i]) {
      res = false;
    }
  }

  //Вариант 3
  // let intermediateLine = checkedStr.split("").reverse()
  // for (let i = 0; i < checkedStr.length; i++) {
  //   if (intermediateLine[i] !== checkedStr[i]) {
  //     res = false;
  //   }
  // }
  console.log(res);
  return res;
}
palindrome("ll!asdf dS?.al l !");

/////////////////////////////////////////////////////////////////////////////////////
//Задачи learn.javascript

//Какое последнее значение выведет этот код? Почему?
//ответ 3,2,1 потом i=0 проверка не пройдет

let w = 3;
while (w) {
  console.log(w);
  w--;
}

//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет?

// Префиксный вариант ++i:
// 1,2,3,4 потом цыкл завершится
let i = 0;
while (++i < 5) console.log(i);

// Постфиксный вариант i++
//1,2,3,4,5 потом цыкл завершится

let q = 0;
while (q++ < 5) console.log(q);

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет?

// Постфиксная форма:

for (let i = 0; i < 5; i++) console.log(i);

// Префиксная форма:

for (let i = 0; i < 5; ++i) console.log(i);
//Оба цыкла выведут 0,1,2,3,4 потом цыкл завершится поскольку объявляется переменная, потом проходит проверка,
//потом выполняется тело цыкла, потом происходит увеличение переменной i, потом проверяется условие цыкла.

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}

let cur = 0;
while (cur < 3) {
  console.log(`number ${cur}!`);
  cur++;
}

//Напишите код, который выводит все простые числа из интервала от 2 до n.

let num = [];

for (let i = 2; i <= 10; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    num.push(i);
    console.log(num);
  }
}
//Напишите if..else, соответствующий следующему switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser = "Safari";
if (browser === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

// Перепишите код с использованием одной конструкции switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
const number = 3;

switch (number) {
  case 0:
    console.log("Вы ввели число 0");
    break;

  case 1:
    console.log("Вы ввели число 1");
    break;

  case 2:
  case 3:
    console.log("Вы ввели число 2, а может и 3");
    break;
}

