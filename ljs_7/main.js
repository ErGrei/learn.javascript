// приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

let aaa ={
  __proto__: animal
}

console.log(rabbit.jumps); // true(1)

 rabbit.jumps = 'aaa';

 console.log(aaa.jumps); 
console.log(animal.jumps); // null (2)

animal.jumps = 'aboba';

console.log(rabbit.jumps); // undefined (3)

//   С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen);
console.log(bed.glasses);

//   Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal2 = {
  eat() {
    this.full = true;
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit2.eat();
console.log(rabbit2.full);

// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let hamster2 = {
  stomach: [],
  eat(food) {
    this.stomach = [...this.stomach];
    this.stomach.push(food);
  },
};

let speedy2 = {
  __proto__: hamster2,
};

let lazy2 = {
  __proto__: hamster2,
};

speedy2.eat("apple");
speedy2.eat("orange");
speedy2.eat("banana");
console.log(speedy2.stomach);

console.log(lazy2.stomach);


// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

// После этого должен работать такой код:

function f() {
  console.log("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

f.defer(1000);


// Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

// Например, должно работать так:

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

Function.prototype.defer = function (ms) {
  let that = this;
  return function (...args) {
    setTimeout(() => that.apply(this, args), ms);
  }
}