// символ Итератор

const obj = {
  mame: "John",
  age: 23,
  city: "London",
  friends: ["Pete", "Sam"],
};

function toIterator(obj) {
  return {
    ...obj,
    [Symbol.iterator]() {
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
    },
  };
}

for (let value of toIterator(obj)) {
  console.log(value);
}
