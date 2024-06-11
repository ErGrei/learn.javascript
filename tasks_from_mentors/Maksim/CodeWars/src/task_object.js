export const tasks = new Map();

tasks.set(
  {
    name: "task_1",
    description: `Returns an area of a rectangle given by width and height.
    
     @param {number} width
     @param {number} height
     @return {number}
    
     @example:
       5, 10 => 50
       5, 5  => 25`,
    solution: function getRectangleArea(width, height) {
      return width * height;
    },
    
  },
  {
    test: `describe("тест 1", function () {
      it("should return the area of a rectangle with positive width and height", function () {
        assert.equal(val(5, 10), 50);
      });
  
      it("should return the area of a rectangle with negative width and height", function () {
        assert.equal(val(-5, -10), 50);
      });
  
      it("should return the area of a rectangle with zero width and height", function () {
        assert.equal(val(0, 0), 0);
      });
    });
    `,

    func: function getRectangleArea(width, height) {},
  }
);
tasks.set(
  {
    name: "task_2",
    description: ` Inverts the case of each character in the given string.
      
       @param {string} str - The input string.
       @returns {string} - The string with the case of each character inverted.
      
       @example
         invertCase('Hello, World!') =>  'hELLO, wORLD!'
         invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
         invertCase('12345') => '12345'`,

    solution: function invertCase(str) {
      let res = "";
      for (let i = 0; i < str.length; i += 1) {
        if (str[i] === str[i].toLowerCase()) {
          res += str[i].toUpperCase();
        } else {
          res += str[i].toLowerCase();
        }
      }
      return res;
    },
  },
  {
    test: `function () {

      it("возвращает строку с обратным регистром", function () {
        assert.equal(val('Hello, World!'), 'hELLO, wORLD!');
      });
  
      it("should return the area of a rectangle with negative width and height", function () {
        assert.equal(val('JavaScript is Fun'), 'jAVAsCRIPT IS fUN');
      });
  
      it("should return the area of a rectangle with zero width and height", function () {
        assert.equal(val('12345'), '12345');
        assert.equal(val('!@#$'), '!@#$');
        assert.equal(val(''), '');
        assert.equal(val('Hello, 12345!'), 'hELLO, 12345!');
        assert.equal(val('1a2b3c4d5'), '1A2B3C4D5');
      });
    }`,

    func: function invertCase(str) {},
  }
);
tasks.set(
  {
    name: "task_3",
    description:
      "Напишите функцию которая должна делить первое число на второе и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a / b,
  },

  function division(a, b) {}
);
tasks.set(
  {
    name: "task_4",
    description:
      "Напишите функцию которая должна умножать первое число на второе и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a * b,
  },

  function multiplication(a, b) {}
);
tasks.set(
  {
    name: "task_5",
    description:
      "Напишите функцию которая должна найти остаток от деления двух чисел и вернуть результат. В качестве аргументов функция должна принимать два числа.",
    example: { a: 5, b: 2 },
    solution: (a, b) => a % b,
  },

  function remainder(a, b) {}
);
