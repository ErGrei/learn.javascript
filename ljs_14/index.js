//каррирование

function sum(a, b, c) {
  return a + b + c;
}

//функция каррирования
function carrySum(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

const sumCarry = carrySum(sum);
console.log(sumCarry(1)(2)(3));

// сокращенная запись с использованием стрелочной функции

const carrySum2 = (f) => (a) => (b) => (c) => f(a, b, c);

const sumCarry2 = carrySum2(sum);
console.log(sumCarry2(1)(2)(3));

// превратить функцию в каррированную

function carry(func) {
  return function (...args) {
    if (args.length >= func.length) {
      return func(...args);
    }
    return function (...args2) {
      return carry(func)(...args, ...args2);
    };
  };
}
const carrySum3 = carry(sum);
console.log(carrySum3(1)(2)(3));
console.log(carrySum3(1, 2)(3));
console.log(carrySum3(1, 2, 3));

// бесконечное каррирование с неизвестным числом аргументов

function currySum4(arg1) {
  let sum = arg1;

  function curried(arg2) {
    if (arg2 !== undefined) {
      sum += arg2;
      return curried;
    }
    return sum;
  }

  return curried;
}

console.log(currySum4(1)(2)(0)(3)(10)());

// сколько раз вызвана функция

function countCall() {
  let count = 1;
  function func() {
    count++;
    return func;
  }

  func.toString = function () {
    return count;
  };

  func.valueOf = function() {
    return count;
  };
  return func;
}

console.log(+countCall()()()()()());
console.log(String(countCall()()()()));


// можно установить id в качестве индекса в массиве и получить объект по id при этом не проходить по всему массиву

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
      const index = {};
      args.forEach(item => (index[item.id] = item));
  
      return new Proxy(new target(...args), {
        get(arr, prop, receiver) {
          if (prop === 'push') {
            return item => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          } else if (prop === 'indexId') {
            return id => index[id];
          } else {
            return Reflect.get(arr, prop, receiver);
          }
        }
      });
    }
  });
  
  const users = new IndexedArray([
    { id: 5, name: 'Ivan', age: 36 },
    { id: 7, name: 'Aboba', age: 42 },
    { id: 10, name: 'Maksim', age: 13 },
    { id: 22, name: 'Anatoliy', age: 84 }
  ])

  console.log(users.indexId(22));