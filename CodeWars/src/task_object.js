export const tasks = new Map();

tasks.set(
  {
    name: "task_1",
    description: `Верните площадь прямоугольника, заданную шириной и высотой.
    
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
    test: `describe("Результаты тестов", function () {
    before(() => {
       console.log(result)
    }) 
      it("Проверяем, что функция возвращает правильную область прямоугольника при положительных параметрах", function () {
        assert.equal(result(5, 10), 50);
      });
  
      it("Проверяем, что функция возвращает правильную область прямоугольника при отрицательных параметрах", function () {
        assert.equal(result(-5, -10), 50);
      });
  
      it("Проверяем, что функция возвращает правильную область прямоугольника при нулевых параметрах", function () {
        assert.equal(result(0, 0), 0);
      });
    });
    `,

    func: function getRectangleArea(width, height) {

    },
  }
);
tasks.set(
  {
    name: "task_2",
    description: ` Инвертируйте регистр каждого символа в заданной строке.
      
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
    test: `describe("Результаты тестов", function () {
    before(() => {
       console.log(result)
    }) 
       it("возвращает строку с обратным регистром", function () {
        // Проверяем, что функция возвращает строку с обратным регистром
        assert.equal(result('Hello, World!'), 'hELLO, wORLD!');
      });
  
      it("возвращает строку с обратным регистром символов из строки 'JavaScript is Fun'", function () {
        assert.equal(result('JavaScript is Fun'), 'jAVAsCRIPT IS fUN');
      });
  
      it("возвращает одинаковую строку, если входная строка не содержит символов нижнего регистра", function () {
        assert.equal(result('12345'), '12345');
        assert.equal(result('!@#$'), '!@#$');
        assert.equal(result(''), '');
      });
  
      it("возвращает строку с обратным регистром символов из строки 'Hello, 12345!'", function () {
        assert.equal(result('Hello, 12345!'), 'hELLO, 12345!');
      });
  
      it("возвращает строку с обратным регистром символов из строки '1a2b3c4d5'", function () {
        assert.equal(result('1a2b3c4d5'), '1A2B3C4D5');
      });
    });
    `,

    func: function invertCase(str) {

    },
  }
);
tasks.set(
  {
    name: "task_3",
    description:` Дана матрица, прямоугольная матрица целых чисел,
 просто сложите все значения, которые не отображаются ниже «0».
 
 @param {Array<Array>} matrix
 @return {Number}

 @example
 matrix = [
[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3]
]

The result should be 9`,

    solution: function getMatrixElementsSum(matrix) {
      let sum = 0;
      for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1){
        const row = matrix[rowIndex];
        for (let columnIndex = 0; columnIndex < row.length; columnIndex += 1){
          sum += row[columnIndex];
        }
        if (row[row.length - 1] === 0){
           break;
        }
      }
     return sum;
    }
  },
  {
    test: `describe("Результаты тестов", function () {
    before(() => {
       console.log(result)
    }) 
       it("возвращает сумму элементов матрицы, исключая элементы, которые находятся под нулевыми элементами", function () {
        assert.equal(result([
      [0, 1, 1, 2],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ]), 9);
      });
  
      it("возвращает сумму элементов матрицы, исключая элементы, которые находятся под нулевыми элементами", function () {
        assert.equal(result([
      [1, 2, 3, 4],
      [0, 5, 0, 0],
      [2, 0, 3, 3],
    ]), 15);
      });
  
      it("возвращает сумму элементов матрицы, исключая элементы, которые находятся под нулевыми элементами", function () {
        assert.equal(result([
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]), 18);
      });
    });
    `,

    func: function rotateMatrix(matrix) {

    },
  }
);

