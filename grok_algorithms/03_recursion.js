// Задание: Реализовать рекурсивный таймер обратного отсчета
// Цель:
// Необходимо написать функцию на JavaScript, которая реализует рекурсивный таймер обратного отсчета.
// Функция должна выводить оставшееся время каждую секунду, и, когда время истечет, выводить сообщение о завершении отсчета.

// Задачи:
// Реализовать функцию recursiveCountdown, которая начинает обратный отсчет с заданного времени или с 10 секунд по умолчанию.
// Гарантировать, что рекурсивные вызовы функции корректно управляются с задержкой в одну секунду.
// Обеспечить чистоту вывода: функция должна четко сообщать пользователю о каждой секунде отсчета и о завершении отсчета.

function recursiveCountdown(seconds = 10) {
  console.log(`Осталось времени: ${seconds} секунд`);
  return seconds === 0
    ? console.log("Отсчет завершен!")
    : setTimeout(recursiveCountdown, 1000, seconds - 1);

  // if (seconds > 0) {
  //     console.log(`Осталось времени: ${seconds} секунд`);
  //     setTimeout(() => recursiveCountdown(seconds - 1), 1000);
  // } else {
  //     console.log("Отсчет завершен!");
  // }
}

// recursiveCountdown(5);

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

console.log(calculateAverageSalaries(company));

const data = calculateAverageSalaries(company);

function formattedSalary(data, level = 0) {
  const averageSalary = {};

  const getNestedSalaries = (obj, currentLevel) =>
    Object.values(obj).reduce((acc, value) => {
      if (currentLevel < level || typeof value === "number") {
        return acc + value;
      } else if (typeof value === "object") {
        return acc + getNestedSalaries(value, currentLevel + 1);
      }
      return acc;
    }, 0);

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "number") {
      averageSalary[key] = value;
    } else if (typeof value === "object") {
      const nestedSalaries = getNestedSalaries(value, level + 1);
      averageSalary[key] = nestedSalaries / Object.values(value).length;
    }
  }

  return averageSalary;
}




console.log(formattedSalary(calculateAverageSalaries(company)));
