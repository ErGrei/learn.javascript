// Реализация forEach на прототипе массива
Array.prototype.forEachCustom = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    callback.call(thisArg, this[i], i, this);
  }
};

// Реализация map на прототипе массива
Array.prototype.mapCustom = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArg, this[i], i, this));
  }
  return result;
};

// Реализация reduce на прототипе массива
Array.prototype.reduceCustom = function (callback, initialValue) {
  let accumulator = initialValue || this[0];
  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

const numbers = [1, 2, 3, 4, 5];

numbers.forEachCustom((number) => {
  console.log(number);
});

const doubledNumbers = numbers.mapCustom((number) => {
  return number * 2;
});

console.log(doubledNumbers);

const sum = numbers.reduceCustom((accumulator, number) => {
  return accumulator + number;
});

console.log(sum);
