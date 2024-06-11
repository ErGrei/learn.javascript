// import { describe, it, expect } from '../node_modules/jest';

// import { test, expect } from '@jest/globals';
const assert = chai.assert;
function getRectangleArea(width, height) {
  const area = width * height;
  return area;
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

export function runTests(val) {
  console.log(val);
  describe("pow", function () {
    it("should return the area of a rectangle with positive width and height", function () {
      assert.equal(val(5, 10), 50);
    });

    it("should return the area of a rectangle with negative width and height", function () {
      assert.equal(val(-5, -10), 50);
    });

    it("should return the area of a rectangle with zero width and height", function () {
      assert.equal(val(0, 0), 0);
    });

    it("should return the area of a rectangle with decimal width and height", () => {
      assert.equal(val(3.5, 6.2), 22.1);
    });

    it("should return the area of a rectangle with width and height as floating point numbers", () => {
      assert.equal(val(3.14, 2.71), 9.07);
    });
  });
  mocha.run();
}
