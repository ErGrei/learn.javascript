/**
 * Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.
 */

function* pseudoRandom(seed) {
  let value = seed;
  while (true) {
    value = (value * 16807) % 2147483647;
    yield value;
  }
}
let generator = pseudoRandom(1);

console.log(generator.next().value);
console.log(generator.next(55).value);
console.log(generator.next().value);

//Напишите генератор, который будет возвращать числа Фибоначчи.

function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let num of fibonacci()) {
  if (num > 1000) break;
  console.log(num);
}

const fib = fibonacci();
console.log(fib.next().value);
console.log(fib.next().value);
console.log(fib.next().value);

function* idGenerator(num = 1) {
  let index = num;
  while (true) {
    yield index++;
  }
}

let gen = idGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


//Напишите генератор, который будет возвращать циклические значения по массиву.

function* cyclicGen(array) {
  let index = 0;
  while (true) {
      yield array[index];
      index = (index + 1) % array.length;
  }
}


const cyclGen = cyclicGen([1,2,3]);
console.log(cyclGen.next().value); 
console.log(cyclGen.next().value); 
console.log(cyclGen.next().value); 
console.log(cyclGen.next().value); 
console.log(cyclGen.next().value); 


