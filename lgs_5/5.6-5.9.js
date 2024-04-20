// Задача из таблицы
// вход
// customers: массив положительных целых чисел, представляющих очередь. Каждое целое число представляет клиента, а его значение — это количество времени, необходимое ему для оформления заказа.
// n: положительное целое число, количество касс.
// выход
// Функция должна возвращать целое число — общее требуемое время.

function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  let res = customers.reduce((acc, item) => (acc += item), 0);
  return Math.floor(res / n);
}

//   assert.strictEqual(queueTime([], 1), 0);
//   assert.strictEqual(queueTime([1,2,3,4], 1), 10);
//   assert.strictEqual(queueTime([2,2,3,3,4,4], 2), 9);
//   assert.strictEqual(queueTime([1,2,3,4,5], 100), 5); непроходит

//   assert.strictEqual(queueTime([5,3,4],    1), 12);
//   assert.strictEqual(queueTime([10,2,3,3], 2), 10); непроходит
//   assert.strictEqual(queueTime([2,3,10,2], 2), 12);непроходит

// Мутабельные методы массивов

//push, pop, shift, unshift, splice, sort, reverse

//  Не мутабельные методы массивов

//forEach, map, filter, reduce, some, every, slice, find, findIndex, toSpliced, toSorted, toReversed, join, indexOf, lastIndexOf

let arr = [11, 2, 5, 7, 4, 0, 6, 7, 8, 9];

let arr2 = arr.toSpliced(1, 5);

console.log(arr2);
console.log(arr);

arr.splice(1, 5);

console.log(arr);

let arrSort = arr.toSorted((a, b) => b - a);
console.log(arrSort);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

let arrReverse = arr.toReversed();
console.log(arrReverse);
console.log(arr);

const obj = {
  mame: "John",
  age: 23,
  city: "London",
  friends: ["Pete", "Sam"],
};
function toIterator(obj) {
  return {
    ...obj,
    [Symbol.iterator]() {
      const self = this;
      const keys = Object.keys(this);
      let counter = 0;

      return {
        next() {
          if (counter < keys.length) {
            return { value: self[keys[counter++]], done: false };
          }
          return {
            done: true,
          };
        },
      };
    },
  };
}

//   for (let value of toIterator(obj)) {
//   console.log(value);
// }

for (let value of Object.values(obj)) {
  console.log(value);
}

for (let key of Object.keys(obj)) {
  console.log(key);
}

for (let entry of Object.entries(obj)) {
  console.log(entry);
}

/**
 * @param {number[]} nums
 * @return {Array<number>}
 */
var removeDuplicates = function (nums) {
  // вариант 1
  // const res = nums.filter((item, index) => nums.indexOf(item) === index);

  // вариант 2
  // return [...new Set(nums)];

  // вариант 3
  let res = nums.reduce((acc, i) => {
    if (!acc.includes(i)) {
      acc.push(i);
    }
    return acc;
  }, []);
  return res;
};
console.log(removeDuplicates([1, 2, 3, 3, 2, 1]));

// Given an array of the weather conditions, your task is to work out the minimum number of umbrellas he needs to start with in order that he never gets wet. He can start with some umbrellas at home and some at work, but the output is a single integer, the minimum total number.

// The input is an array/list of consecutive half-day weather forecasts. So, e.g. the first value is the 1st day's morning weather and the second value is the 1st day's afternoon weather. The options are:

// Without umbrella:

// "clear",
// "sunny",
// "cloudy",
// "overcast",
// "windy".
// With umbrella:

// "rainy",
// "thunderstorms".
// e.g. for three days, 6 values:

function minUmbrellas(weather) {
  let count = 0;
  const uniqueArr = new Set(weather);
  uniqueArr.forEach((item) => {
    if (item === "rainy" || item === "thunderstorms") {
      count += 1;
    }
  });
  return count;
}
console.log(minUmbrellas(["cloudy"]), 0);
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]), 1);
console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]), 2);

// Никита Хубаев, [19.04.2024 16:39]
// Вот такую задачу после просмотра видео по базе JS можно решить?

// Задача на собеседование: Создание и анализ сетки температур
// Описание задачи:
// Разработайте программу на JavaScript, которая создает и анализирует двухмерный массив данных о температуре.
// Каждый элемент массива представляет собой температуру в определенной точке сетки.

// Требования к задаче:
// Инициализация сетки:
// Создайте функцию initializeGrid, которая принимает два параметра: rows (количество строк) и cols (количество столбцов).
// Функция должна создать и вернуть двухмерный массив размером rows x cols, где каждый элемент сетки инициализируется
// случайной температурой от -10 до 40 градусов Цельсия.
// Анализ сетки:
// Создайте функцию analyzeGrid, которая принимает двухмерный массив температур и выполняет следующие аналитические задачи:
// Найдите и верните максимальную температуру в сетке.
// Найдите и верните минимальную температуру в сетке.
// Вычислите и верните среднюю температуру по всей сетке.
// Вывод результатов:
// Функция analyzeGrid должна возвращать объект с тремя свойствами: maxTemp, minTemp, и averageTemp,
// содержащими соответствующие аналитические результаты.

function Temper(rows, cols) {
  this.maxTemp = 0;
  this.minTemp = 0;
  this.averageTemp = 0;

  this.random = function (a = -10, b = 40) {
    return Math.round(Math.random() * (b - a) + a);
  };

  this.initializeGrid = function (rows, cols) {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => this.random())
    );
  };
  this.grid = this.initializeGrid(rows, cols);
 
  this.analyzeGrid = function () {
    this.maxTemp = findMaxTemp(this.grid);
    this.minTemp = findMinTemp(this.grid);
    this.averageTemp = averageTemp(this.grid);
    return {
      maxTemp: this.maxTemp,
      minTemp: this.minTemp,
      averageTemp: this.averageTemp,
    };
  };
  this.analyzeGrid();

  function findMaxTemp(grid) {
    let maxTemp = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] > maxTemp) {
          maxTemp = grid[i][j];
        }
      }
    }
    return maxTemp;
  }

  function findMinTemp(grid) {
    let minTemp = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] < minTemp) {
          minTemp = grid[i][j];
        }
      }
    }
    return minTemp;
  }

  function averageTemp (grid){
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        sum += grid[i][j];
      }
    }
    return  Number((sum / (grid.length * grid[0].length)).toFixed(2));
  }

  // вариант 2
  
   // this.analyzeGrid = function () {
  //   this.maxTemp = this.grid.flat().reduce((a, b) => Math.max(a, b));
  //   this.minTemp = this.grid.flat().reduce((a, b) => Math.min(a, b));
  //   this.averageTemp =
  //     this.grid.flat().reduce((a, b) => a + b) / this.grid.flat().length;
  //   return {
  //     maxTemp: this.maxTemp,
  //     minTemp: this.minTemp,
  //     averageTemp: this.averageTemp,
  //   };
  // };
  // this.analyzeGrid();
}

let temper = new Temper(3, 3);
console.log(temper.analyzeGrid());
