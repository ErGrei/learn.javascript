// let arr = [1,2,3,4,5,[30,[40,[50]]],6,7,8,5,4,3,2,1];

// console.log(arr.flat(5));

// let obj = {
//     a:12,
//     b:10
// }

// let arrObj = Object.values(obj);

//push, pop, shift, unshift
// console.log(arr.push(100));

//splice, sort, reverse, fill
//toSpliced, toSorted, toReversed

// arr.splice(3, 4, ...["a", "a"] )
// console.log(arr);

// let arrAcc = arr.reduce((acc, elem, index, arr) => {
//   acc[index] = elem;

//   if (index === arr.length-1){
//     acc.length = arr.length;
//   }
//   return acc;
// }, {});

// console.log(arrAcc);

// let arr = [60, 1,   2, 2, 3, 4, 50, 60, -40];

// arr.sort((a = 1, b = -60) => {
//    -61
// });

// function func(acc, elem, index, arr){

// }

// Array.prototype.reduce(func(acc, elem, index, arr))

//indexOf(2), findIndex(()=>{})
let obj = {
  a: 12,
  b: 10,
};

let arr = [60, obj, 1, 2, 2, 3, 4, 50, 60, -40];

let arrObj = arr.find((elem, index) => {
  if (typeof elem === "object") {
    return elem;
  }
});

console.log(arrObj);

arr.filter()