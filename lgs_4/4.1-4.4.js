//сщзжать объект
let obj = {
  a: 5,
  b: 2,
  c: 3,
  e: {
    a: 5,
    b: 2,
    c: [1, 2, 3],
  },
  foo: function () {
    return 1 + 2;
  },
};
console.log(obj);

let obj2 = new Object();

//можно передать объект тогда будет одна ссылка
let obj3 = new Object(obj);
obj3.d = 6;
// console.log(obj3 === obj);

//если ничего не передат TypeError: Object prototype may only be an Object or null: undefined
//создает объект на основе прототипа другово объекта
let obj4 = Object.create(obj);
console.log(obj4.e);
obj4.e.c[1] = 7;
obj4.name = "John";

// копирование объектов
let obj5 = Object.assign({}, obj);
// console.log(obj5);

let obj6 = { ...obj };
// console.log(obj6);
obj6.e.c[0] = 6;
// console.log(obj6);
// console.log(obj6.foo());
// console.log(obj);

// console.log(obj4);
let obj7 = JSON.parse(JSON.stringify(obj));
obj7.e.c[2] = 10;
// console.log(obj7);
// console.log(obj);
// console.log(obj.foo());
// console.log(obj7.foo()); TypeError: obj7.foo is not a function

// Если есть функция то будет ошибка DOMException [DataCloneError]: foo () {
//     return 1 + 2;} could not be cloned.

// let obj8 = structuredClone(obj);
// obj8.e.c[3] = 11;
// console.log(obj8);
// console.log(obj);
//  console.log(obj8.foo())

function cloneObj (obj) {
    const clone = {};
    for (let key in obj) {
        if (obj[key] instanceof Object) {
            clone[key] = cloneObj(obj[key]);
            continue
        } else {
            clone[key] = obj[key];
        }
    }
    return clone
}
let obj9 = cloneObj(obj);

obj9.e.c[2] = 11;
console.log(obj9);
// console.log(obj9.foo()); TypeError: obj9.foo is not a function, массив стал объектом
// console.log(obj);

function cloneObjFoo (obj) {
    const clone = {};
    for (let key in obj) {
        if (typeof obj[key] === "Object") {
            clone[key] = cloneObjFoo(obj[key]);
            continue
        } else {
            clone[key] = obj[key];
        }
    }
    return clone
}

let obj10 = cloneObjFoo(obj);
obj10.e.c[2] = 11;
console.log(obj10);
// console.log(obj10.foo()); 
// console.log(obj);
