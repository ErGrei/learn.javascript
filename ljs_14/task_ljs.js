// Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности.

// Вот как это должно работать:

let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    /* ваш код */
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует

const wrap = (target) =>
  new Proxy(target, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      throw new Error("такого свойства нет");
    },
  });

//   В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

// Вот так:

// let array = [1, 2, 3];

// array[-1]; // 3, последний элемент
// array[-2]; // 2, предпоследний элемент
// array[-3]; // 1, за два элемента до последнего
// Другими словами, array[-N] – это то же, что и array[array.length - N].

// Создайте прокси, который реализовывал бы такое поведение.

// Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    prop < 0
      ? (prop = target.length + +prop)
      : Reflect.get(target, prop, receiver);
    return target[prop];
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// Observable
// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

// Вот как это должно работать:

function makeObservable(target) {
  /* ваш код */
}

user = {};
user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
// Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

// При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

// P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.
