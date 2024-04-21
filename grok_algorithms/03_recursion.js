// Задание: Реализовать рекурсивный таймер обратного отсчета
// Цель:
// Необходимо написать функцию на JavaScript, которая реализует рекурсивный таймер обратного отсчета.
// Функция должна выводить оставшееся время каждую секунду, и, когда время истечет, выводить сообщение о завершении отсчета.

// Задачи:
// Реализовать функцию recursiveCountdown, которая начинает обратный отсчет с заданного времени или с 10 секунд по умолчанию.
// Гарантировать, что рекурсивные вызовы функции корректно управляются с задержкой в одну секунду.
// Обеспечить чистоту вывода: функция должна четко сообщать пользователю о каждой секунде отсчета и о завершении отсчета.

// function recursiveCountdown(seconds = 10, count ) {
// if (seconds === 0){
//   console.log('Отсчет завершен!')
// } else {
//   console.log(`Осталось секунд: ${seconds}`)
//   setTimeout(()=>recursiveCountdown(--seconds),1000)
// }
// }

// recursiveCountdown();

// Ваша задача:
// Написать функцию calculateAverageSalaries, которая принимает объект company и
// возвращает новый объект, где ключи — это названия отделов, а значения — средняя
// зарплата сотрудников этих отделов.
// Если отдел содержит вложенные отделы, средняя зарплата должна учитывать сотрудников
// всех вложенных отделов.

// Результат должен быть представлен в формате:
// {
//     "sales": 800,       // средняя зарплата в отделе продаж
//     "development": 1700 // средняя зарплата в отделе разработки, включая все подотделы
// }

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: {
      sites: [
        {
          name: "Peter",
          salary: 2000,
        },

        {
          name: "Alex",
          salary: 1800,
        },
      ],

      internals: [
        {
          name: "Jack",
          salary: 1300,
        },
      ],
    },
  },
};

function calculateAverageSalaries(obj, result = {}) {
  for (const key in obj) {
    const value = obj[key];

    if (Array.isArray(value)) {
      result[key] =
        value.reduce((acc, { salary }) => acc + salary, 0) / value.length;
    } else {
      result[key] = calculateAverageSalaries(value, {});
    }
  }

  return result;
}

// console.log(calculateAverageSalaries(company));

// const data = calculateAverageSalaries(company);

// function formattedSalary(data, level = 0) {
//   const averageSalary = {};

//   const getNestedSalaries = (obj, currentLevel) =>
//     Object.values(obj).reduce((acc, value) => {
//       if (currentLevel < level || typeof value === "number") {
//         return acc + value;
//       } else if (typeof value === "object") {
//         return acc + getNestedSalaries(value, currentLevel + 1);
//       }
//       return acc;
//     }, 0);

//   for (const [key, value] of Object.entries(data)) {
//     if (typeof value === "number") {
//       averageSalary[key] = value;
//     } else if (typeof value === "object") {
//       const nestedSalaries = getNestedSalaries(value, level + 1);
//       averageSalary[key] = nestedSalaries / Object.values(value).length;
//     }
//   }

//   return averageSalary;
// }

// console.log(formattedSalary(calculateAverageSalaries(company)));

// function factorial(num, kesh = { 0: 1 }) {
  //Хвостовая рекурсия



 //Кеширование

  // if (kesh.hasOwnProperty(num)) {
  //   return kesh[num];
  // }

  // kesh[num] = num * factorial(num -1, kesh);
  // return kesh[num];

// рекурсия

  // if (num === 1) {
  //   return 1;
  // } else {
  //   return num * factorial(--num);
  // }
// }

// console.log(factorial(3));


function fibonacciTail(n, a = 0, b = 1) {
  if (n === 0) return a;
  if (n === 1) return b;
  return fibonacciTail(n - 1, b, a + b);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMemo(n, memo = {}) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

console.log(fibonacciMemo(10000));