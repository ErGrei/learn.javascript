/**
 * скопировать массив [1, 'test':'123']
 */

Array.prototype[Symbol.iterator] = function () {
  const self = this;
  const keys = Object.keys(this);
  let counter = 0;
  return {
    next() {
      if (counter < keys.length) {
        return { value: self[keys[counter++]], done: false };
      }
      return {
        done: true,
      };
    },
  };
};

let arr = [1];
arr.test = "123";
let arr2 = [...arr];
console.log(arr);

/**
 * Итератор объекта должен возвращать следующий член геометрической прогресиии
 * резельтат не должен превышать const MAX_SAFE_INTEGER
 * для объекта
 * const obj = {
 * current: 0,
 * last: 10,
 * }
 */

const obj = {
  current: 0,
  last: 13,
};

obj[Symbol.iterator] = function () {
  const self = this;
  const denominator = 2;
  const MaxSafeInteger = Number.MAX_SAFE_INTEGER;
  function geometricProgression () {
    return Math.pow(denominator, self.current-1);
  }
  return {
    next() {
      if (self.current <= self.last && self.last < MaxSafeInteger) {
        return { value: geometricProgression (self.current++), done: false };
      }
      return {
        done: true,
      };
    },
  };
}

for (let value of obj) {
  console.log(value);
}