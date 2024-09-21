/**
 * Фильтрация массива объектов по значению ключа
Условие: Напиши функцию, которая принимает массив объектов и два параметра: ключ и значение. Функция должна возвращать новый массив, содержащий только те объекты, у которых значение по указанному ключу совпадает с переданным значением.
 */

const arr = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

filterByKey(arr, "age", 25);
// [
//     { name: 'Alice', age: 25 },
//     { name: 'Charlie', age: 25 }
// ]

function filterByKey(arr, key, value) {
  const res = arr.filter((item) => {
    return item[key] === value});
  return res;
}

/**
   * Проверка, содержат ли все объекты массивы значений
Условие: Напиши функцию, которая принимает массив объектов и массив ключей. Функция должна возвращать новый массив, содержащий только те объекты, у которых все ключи из массива ключей содержат непустые массивы в качестве значений.
   */

const arr3 = [
  { name: "Alice", hobbies: ["reading"], age: [] },
  { name: "Bob", hobbies: ["sports"], age: [30] },
  { name: "Charlie", hobbies: [], age: [25] },
];

filterByNonEmptyArrays(arr3, ["hobbies", "age"]);
// [{ name: 'Bob', hobbies: ['sports'], age: [30] }]

function filterByNonEmptyArrays(arr, arrKey) {
  return arr.filter((obj) =>
    arrKey.every((key) => Array.isArray(obj[key]) && obj[key].length !== 0)
  );
}

/**
 * Слияние объектов по ключу
Условие: Напиши функцию, которая принимает два массива объектов и ключ. Функция должна возвращать массив, содержащий объекты, которые являются результатом слияния объектов из первого и второго массива с одинаковыми значениями по указанному ключу. Если для объекта из первого массива нет совпадения во втором массиве — он не включается в результат.
 */

const arr1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const arr2 = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
  { id: 4, age: 40 },
];

mergeByKey(arr1, arr2, "id");
// [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 }
// ]

function mergeByKey(arr1, arr2, key) {
  return arr1
    .map((obj1) => {
      const obj2 = arr2.find((obj2) => obj2[key] === obj1[key]);
      return obj2 ? { ...obj1, ...obj2 } : null;
    })
    .filter((obj) => obj !== null);
}

/**
   * Фильтрация объектов с уникальными значениями по ключу
Условие: Напиши функцию, которая принимает массив объектов и ключ. Функция должна вернуть новый массив, содержащий только те объекты, значения которых по указанному ключу уникальны в массиве.
   */

const arr4 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Alice" },
  { id: 4, name: "Charlie" },
];

filterUniqueByKey(arr4, "name");
// [
//     { id: 2, name: 'Bob' },
//     { id: 4, name: 'Charlie' }
// ]

function filterUniqueByKey(arr, key) {
  const count = arr.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || 0) + 1;
    return acc;
  }, {});

  return arr.filter((obj) => count[obj[key]] === 1);
}
