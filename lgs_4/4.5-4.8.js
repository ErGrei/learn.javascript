// символ Итератор

const obj = {
  mame: "John",
  age: 23,
  city: "London",
  friends: ["Pete", "Sam"],
};

/**
 * Converts an object into an iterator.
 *
 * @param {Object} obj - The object to be converted into an iterator.
 * @return {Object} - The iterator object with the following properties:
 *   - The properties of the input object.
 *   - A `[Symbol.iterator]` method that returns an iterator object with a `next` method.
 *   - The `next` method returns an object with the following properties:
 *     - `value`: The value of the current property in the iteration.
 *     - `done`: A boolean indicating if the iteration is complete.
 */
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
