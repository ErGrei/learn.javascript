//Функции
//объявление функции
function foo() {
  console.log("foo");
}
foo();

//параметры функции
function bar(a, b) {
  console.log(a + b);
}
bar(1, 2);

//параметры по умолчанию
function baz(a = 1, b = 2) {
  console.log(a + b);
}
baz(1, 2);
baz(1);
baz();
baz(1, 2, 3);

//return
function qux(a, b) {
  return a + b;
}
let result = qux(1, 2);
console.log(result);

//function expression
// !!!!!!!!!!!!!!!!
//console.log(quxx(1, 2));// Uncaught ReferenceError: quxx is not defined
let quxx = function (a, b) {
  return a + b;
};

console.log(quxx(1, 2));

//аргументы в функциях при передачи неограниченного числа агрументов в функцию
//1 способ, !!! псевдомассив, нет методов массивов
function sum() {
  return arguments[0] + arguments[1];
}
sum(1, 2);

//2 способ можно применить методы массивов
function sum2(...args) {
  return args.reduce((acc, i) => (acc += i), 0);

  
}
sum2(1, 2, 1, 3, 4);
//////////////////////////////////////////

//самовызаваемая функция
(function sum (){
  console.log(1+2);
})()

//sum() !!!sum is not defined

////////////////////////////////////////////
// функция передается в функцию
const sum = function (a, b) {
  return a + b;
};
function count(a, b) {
  return sum(a, b) + 1;
}
console.log(count(1, 2));
//функция возвращает функцию

const makeCounter = function () {
  let count = 0;
  return function () {
    return count++;
  };
};
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//callback функция, которая выполняется после выполнения другой функции.
//любая функция, которая передаётся в другую функцию в качестве аргумента

const sum2 = function (a, b) {
  return a + b;
};
const calc = function (a, b, callback) {
  return callback(a, b);
};
console.log(calc(1, 2, sum2));

//callback hall так делать не нужно!
function A(x) {
  function B(y) {
    function C(z) {
      function D(w) {
        function E(q) {
          function F(r) {
            console.log(x + y + z + w + q + r);//вернет 1+2+3+2+1+5
          }
          F(5);
        }
        E(1);
      }
      D(2);
    }
    C(3);
  }
  B(2);
}
A('1');

//функция не возвращающая ничего - процедура ВОПРОС парвильно ли понял?
let a = null;
const arr = [1, 2, 3, 4, 5, 6];
function sumArr() {
  let b = null;
  array.forEach((element) => {
    a += element;
  });
}
sumArr();
console.log(a);

// funktion expression и рекурсия
const sum3 = function sum4 () {
  let a = 1 + 2;
console.log(sum3());
console.log(sum4());
return a;
}// RangeError: Maximum call stack size exceeded нет выхода из рекурсии
console.log(sum3());
console.log(sum4());// ReferenceError: sum4 is not defined

