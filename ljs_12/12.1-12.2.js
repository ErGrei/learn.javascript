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
console.log(generator.next().value);
console.log(generator.next().value);

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

function* idMaker() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

let gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


