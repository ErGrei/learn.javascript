export const tasks = new Map();

tasks.set(
  {
    name: "task_1",
    description: `Returns an area of a rectangle given by width and height.
    
     @param {number} width
     @param {number} height
     @return {number}
    
     @example:
       5, 10 => 50
       5, 5  => 25`,
    example: { a: 5, b: 2 },
    solution: function getRectangleArea(width, height) {
      const area = width * height;
      return area;
    },
  },
  function getRectangleArea(a, b) {

  }
);
tasks.set(
  {
    name: "task_2",
    description:
      "Напишите функцию которая должна вычесть из первого числа второе и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a - b,
  },

  function subtraction(a, b) {}
);
tasks.set(
  {
    name: "task_3",
    description:
      "Напишите функцию которая должна делить первое число на второе и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a / b,
  },

  function division(a, b) {}
);
tasks.set(
  {
    name: "task_4",
    description:
      "Напишите функцию которая должна умножать первое число на второе и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a * b,
  },

  function multiplication(a, b) {}
);
tasks.set(
  {
    name: "task_5",
    description:
      "Напишите функцию которая должна найти остаток от деления двух чисел и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a % b,
  },

  function remainder(a, b) {}
);
