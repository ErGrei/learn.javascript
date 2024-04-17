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
// function toIterator(obj) {
//     return {
//       ...obj,
//       [Symbol.iterator]() {
//         const self = this;
//         const keys = Object.keys(this);
//         let counter = 0;

//         return {
//           next() {
//             if (counter < keys.length) {
//               return { value: self[keys[counter++]], done: false };
//             }
//             return {
//               done: true,
//             };
//           },
//         };
//       },
//     };
//   }

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
