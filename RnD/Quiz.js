// //1

// const roo = +[] == +![];
// // console.log(roo);
// false
// true
// undefined
// //2

// let a = "abc" == new String("abc");

// let b = "abc" === new String("abc");

// // console.log(a, b);

// //3

// let obj = {
//   a: 1,
//   b: { n: 2 },
// };

// let obj1 = JSON.parse(JSON.stringify(obj));

// obj1.b.n = 3;

// // console.log(obj);
// // console.log(obj1);

// //4

// for (let a = 0; a <= 1; a++) {
//   //   console.log(a);
// }
// // console.log(a);

// //5

// let arr = [1, 2, 3];
// arr["3"] = 4;
// arr.last = 5;

// // console.log(arr);
// // console.log(arr.length);

// //6

// class Foo {
//   static baz() {
//     return 1;
//   }

//   metod() {
//     return 1;
//   }
// }

// const bar = new Foo();

// // console.log(typeof Foo.baz)
// // console.log(typeof bar.baz)

// // console.log(bar)
// // console.log(Foo)

// //7

// function Foo() {
//   if (!new.target) {
//     console.log(1);
//     return false;
//   }

//   console.log(2);
// }

// // new Foo();
// // Foo();

// //8

// const a = [1, 2];
// const b = [1, 2];

// // console.log(a * b);

// //9

// const a = [1, 2];
// const b = [3, 4];

// // console.log(a + b);

// //10

// // (function () {
// //   console.log(this == 5);
// //   console.log(this === 5);
// // }).call(5)

// //11

// let a = (2,5 - 1);

// // console.log(a);

// //12

// const s1 = "hello";

// const s2 = Array.prototype.reverse(s1);

// // console.log(s1, s2)

// //13

// let a = Array.from({ length: 5 }, (v, k) => k);

// // console.log(a)

// //14

// const s = "B" + "a" + +"A" + "a";

// // console.log(s.toLowerCase());

// //15

// const arr = [1, 2, 3];

// delete arr[1];

// // console.log(arr.length)

// //16

// const obj = {
//   bar: foo,
//   a: "hello",
// };
// let a = "6Seniors";

// function foo() {
//   console.log(this.a);
// }

// // obj.bar();
// // foo();

// //17

// let arr = new Array(1, 2);
// let arr1 = new Array(3);

// // console.log(arr[0] + arr1[0]);

// //18

// ("use strict");

// const obj = {
//   foo() {
//     console.log(this);
//   },
// };

// // (obj.bar = obj.foo)();

// //19

// // console.log(12 && 21 && null && 0 && undefined && "Hello");

// //20

// let obj = {
//   name: "Tom",
// };

// // console.log(obj.'name')

// //21

// const obj = {
//   _name: "Tom",
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     this._name = value;
//   },
// };

// obj.name = "Bob";

// // console.log(obj.name);

// //22

// function foo() {
//   console.log(typeof arguments);
// }
  
// // foo(1, 2, 3);

// //23

// ("use strict");

// const obj = {
//   get name() {
//     return "Ivan";
//   },
// };

// // obj.name = "Pete";

// // console.log(obj.name);

// //24

// const a = [7];
// const b = [7];

// // console.log(a * b);
