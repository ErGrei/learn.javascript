/**
 * Задача 1: Удаление свойств объекта
Напишите функцию removeProperties, которая принимает объект и массив строк. Функция должна удалить все свойства объекта, ключи которых содержатся в массиве.
 */

const obj = {
  name: "John",
  age: 25,
  city: "New York",
  occupation: "Developer",
};

const keysToRemove = ["age", "city"];

function removeProperties(obj, keysToRemove) {
  for (let key of keysToRemove) {
    delete obj[key];
  }
}

removeProperties(obj, keysToRemove);

console.log(obj);
// Ожидаемый результат: { name: "John", occupation: "Developer" }

/**
   * Задача 2: Объединение объектов с приоритетом значений
Напишите функцию mergeObjects, которая принимает два объекта. Необходимо объединить их так, чтобы при наличии одинаковых ключей приоритет имели значения из второго объекта.
   */

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 25, city: "New York" };

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const result = mergeObjects(obj1, obj2);

console.log(result);
// Ожидаемый результат: { name: "John", age: 25, city: "New York" }

/**
 * Задача 3: Подсчет повторяющихся значений
Напишите функцию countOccurrences, которая принимает массив объектов и строку. Функция должна вернуть количество объектов, у которых значение свойства с именем, указанным в строке, встречается более одного раза.
 */

const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "John", age: 22 },
  { name: "Mike", age: 30 },
  { name: "Jane", age: 40 },
];

function countOccurrences(arr, prop) {
const result = arr.reduce((acc, obj) => {
    if (obj[prop] in acc) {
      acc[obj[prop]]++;
    } else {
      acc[obj[prop]] = 1;
    }
    return acc;
  }, {});



  return result;
}


const people2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "John", age: 22 },
    { name: "Mike", age: 30 },
    { name: "Jane", age: 40 }
  ];
const result2 = countOccurrences(people2, "name");
console.log(result2);
// Ожидаемый результат: { John: 2, Jane: 2, Mike: 1 }


/**
 * Задача 4: Сравнение объектов по ключам
Напишите функцию compareObjects, которая принимает два объекта и массив ключей. Функция должна вернуть true, если значения объектов по всем указанным ключам совпадают, иначе false.
 */

const obj3 = { name: "John", age: 30, city: "New York" };
const obj4 = { name: "John", age: 30, city: "Los Angeles" };
const keys = ["name", "age"];

function compareObjects(obj1, obj2, keys) {
  return keys.every((key) => obj1[key] === obj2[key]);
}

const result3 = compareObjects(obj3, obj4, keys);

console.log(result3);
// Ожидаемый результат: true


/**
 * Задача 5: Преобразование объекта в массив
Напишите функцию objectToArray, которая принимает объект, в котором значения являются объектами. Необходимо преобразовать его в массив объектов, где каждый объект будет иметь ключи "key" и "value", где "value" — это изначальный объект.
 */

const data = {
    a: { id: 1, name: "John" },
    b: { id: 2, name: "Jane" },
    c: { id: 3, name: "Mike" }
  };

  function objectToArray(obj) {
    return Object.keys(obj).map((key) => ({
      key,
      value: obj[key]
    }));
  }
  
  const result5 = objectToArray(data);
  
  console.log(result5);
  // Ожидаемый результат:
  // [
  //   { key: "a", value: { id: 1, name: "John" } },
  //   { key: "b", value: { id: 2, name: "Jane" } },
  //   { key: "c", value: { id: 3, name: "Mike" } }
  // ]
  

  /**Задача 6: Глубокое клонирование объекта
   * Напишите функцию deepClone, которая принимает объект и возвращает его глубокую копию. Для решения задачи не используйте библиотеку lodash или аналогичные утилиты.
   */

  const obj8 = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      street: "5th Avenue"
    }
  };

  function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  const clone = deepClone(obj8);
  
  clone.address.city = "Los Angeles";
  
  console.log(obj.address.city); // Ожидаемый результат: "New York"
  console.log(clone.address.city); // Ожидаемый результат: "Los Angeles"
  