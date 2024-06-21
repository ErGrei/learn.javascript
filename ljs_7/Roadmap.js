// Реализация forEach на прототипе массива
// Array.prototype.forEachCustom = function (callback, thisArg) {
//   for (let i = 0; i < this.length; i++) {
//     callback.call(thisArg, this[i], i, this);
//   }
// };

Array.prototype.forEachCustom = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }
  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = O.length;

  let i = 0;

  while (i < len) {
    if (i in O) {
      callback.call(context, this[i], i, O);
    }

    i++;
  }
};

arr.forEach2.call(1, (item, index, array) => {
  console.log({ item, index });
});

// Реализация map на прототипе массива
// Array.prototype.mapCustom = function (callback, thisArg) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback.call(thisArg, this[i], i, this));
//   }
//   return result;
// };

Array.prototype.mapCustom = function (callback, thisArg) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }
  let context = this;

  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let len = O.length;

  let newArray = [];

  let i = 0;

  while (i < len) {
    if (i in O) {
      newArray[i] = callback.call(context, this[i], i, O);
    }

    i++;
  }

  return newArray;
};


// Реализация reduce на прототипе массива
// Array.prototype.reduceCustom = function (callback, initialValue) {
//   let accumulator = initialValue || this[0];
//   for (let i = initialValue ? 0 : 1; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };


Array.prototype.reduceCustom = function (callback, initialValue) {
  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  let result;
  let i = 0;

  let O = Object(this);
  let len = O.length;

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    if (len === 0) {
      throw new Error("Reduce of empty array with no initial value");
    }
    result = O[i];
    i++;
  }

  for (; i < this.length; i++) {
    if (i in O) {
      result = callback(result, O[i], i, O);
    }
  }

  return result;
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
