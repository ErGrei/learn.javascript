console.clear();
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
let str = "строка"; // string
let bool = true; // boolean
let undef = undefined; // undefined
let nul = null; // null
let simbol = Symbol(); // symbol
let bigNum = 10n; // bigint
let obj = {} || [] || function () {}; // object

console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof bool); //boolean
console.log(typeof undef); //undefined
console.log(typeof nul); //object 2 варианта!!
console.log(typeof simbol); //symbol
console.log(typeof bigNum); //bigint
console.log(typeof obj); //object
let foo = function () {};
console.log(typeof foo); //function
console.log(typeof NaN); //number
1 / 0;

// Преобразование типов
//строковое преобразование

const а = 1;
const b = a.toString();
console.log(typeof b); //string
const c = 1;
const d = String(c);
console.log(typeof d); //string

//Числовое преобразование

const e = "1";
const t = Number(e);
console.log(typeof t); //number

const f = "1";
const g = parseInt(f);
console.log(g); //255 при 16//495 при 32
console.log(typeof g); //number

const h = "1";
const j = +h;
console.log(typeof j); //number

const k = "1";
const l = a * 1;
console.log(typeof l); //number

const q = "1";
const w = q / 1;
console.log(typeof w); //number

const z = null;
const x = +z; // 0 при null
console.log(typeof x);

const v = undefined;
const m = +v; // NaN при undefined
console.log(typeof m);

const aa = "";
const bb = +aa; // 0 при пустой строке
console.log(typeof bb);

const cc = true;
const dd = +cc; // 1 при true
console.log(typeof dd);

const ee = false;
const ff = +ee; // 0 при false
console.log(typeof ff);

// Булевое преобразование

const qq = "1";
const ww = Boolean(qq);
console.log(ww); //true

const rr = "0";
const tt = Boolean(rr);
console.log(tt); //true

const yy = 0;
const uu = Boolean(yy);
console.log(uu); //false

const oo = 1;
const pp = Boolean(oo);
console.log(pp); //true

const mm = null;
const nn = Boolean(mm);
console.log(nn); //false

const jj = undefined;
const kk = Boolean(jj);
console.log(kk); //false

const ll = "";
const ss = Boolean(ll);
console.log(ss); //false

const hh = NaN;
const gg = Boolean(hh);
console.log(gg); //false

console.log(typeof -"2"); //number

//Математические операторы
// +
// -
// *
// /
// % остаток от деления
// ** возведение в степень
// var++ постфиксная форма
// ++var префиксная форма
//++ декремент
//-- инкремент


let sum = "1"+ 1;
console.log(sum);// 11 !Я не дурак, у меня просто папа програмист

//Условные прераторы ветвления
// if
// if else
// if else if
//? : (тернарный оператор)

//Логические операторы
// && -- и
// || -- или
// ! -- отрицание


console.log(0 || 1 || 2);//1
console.log(0 && 1 && 2);//0
console.log(0 || 1 && 2);//2
console.log(1 || 1 && 0);//1
console.log(Boolean(-1 || 0));// -1 --- true



