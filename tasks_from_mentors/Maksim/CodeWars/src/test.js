// import { describe, it, expect } from '../node_modules/jest';

// import { test, expect } from '@jest/globals';
const assert = chai.assert;
function getRectangleArea(width, height) {
  return width * height;
}

// export let resultTest = function (val){
//   // console.log(val(5,10))
//   return val

// }

// describe("resultTest", function () {
//   it("возводит в n-ю степень", function () {
//     assert.equal(resultTest(5, 10), 50);
//     assert.equal(resultTest(3, 4), 81);
//   });
// });

export function runTests(result, testing) {
  // console.log(val);
  testing;
  mocha.run();
}
