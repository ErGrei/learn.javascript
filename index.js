// 'use strict';
//  a =1;
//  console.log(a); reference error

// function sum() {
//     'use strict';
//     a = 1;
//     b = 2;
//     return a + b
// }
// console.log(sum()); ReferenceError: a is not defined

// console.log(a);
// let a = 1; ReferenceError: Cannot access 'a' before initialization

console.log(a); // undefined
var a = 1;
console.log(a); // 1

/**
 * Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).
 */

// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin);

/**
 * Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
 */

let planetName;
let visitorName;

// код лернJS
let ourPlanetName = "Земля";
let currentUserName = "Джон";

/**
 * Какие буквы (заглавные или строчные) использовать для имён констант?
 */

// const BIRTHDAY = '18.04.1982';
// const age = someCode(birthday);


//Типы данных

let num = 10; // number
let str = 'строка'; // string
let bool = true; // boolean
let undef = undefined; // undefined
let nul = null; // null
let simbol = Symbol(); // symbol
let bigNum = 10n; // bigint
let obj = {} || [] || function(){}; // object


console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof bool); //boolean
console.log(typeof undef); //undefined
console.log(typeof nul); //object 2 варианта!!
console.log(typeof simbol); //symbol
console.log(typeof bigNum); //bigint
console.log(typeof obj); //object
let foo = function(){};
console.log(typeof foo); //function
console.log(typeof NaN); //number
1 / 0