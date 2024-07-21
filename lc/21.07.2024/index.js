// Найти в матрице целое число, евли число есть вернуть true, иначе false

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

function searchMatrix(matrix, target) {
  if ((matrix.length === 0, matrix[0].length === 0)) {
    return false;
  }

  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
}

/**
 *Поверните матрицу на месте на 90 градусов по часовой стрелке.
 * Учитывайте, что размер матрицы может быть очень большим. Подумайте, как можно оптимизировать свое решение.
 * В этой задаче не допускается использование методов классов String и Array.
 *
 * *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix(matrix) {
  const newMatrix = [];
  const result = matrix;
  for (let i = 0; i < matrix.length; i += 1) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      newMatrix[i][j] = matrix[i][j];
    }
  }
  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      result[i][j] = newMatrix[matrix.length - 1 - j][i];
    }
  }
  return result;
}
console.table(rotateMatrix(matrix2));

/** 
* Найти сумму чисел каждого столбца матрицы:
* 1 с низу в верх
* 2 с права на лево
* функция должна возвращать новый массив с суммами для каждого условия
* 
* SumMatrixTopDown [12, 15, 18]
* sumMatrixRightLeft [6, 15, 24]
*/

const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumMatrixTopDown(matrix) {
  let sum = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    sum[i] = 0;
    for (let j = 0; j < matrix.length; j += 1) {
      sum[i] += matrix[j][i];
    }
  }
  return sum;
}

function sumMatrixRightLeft(matrix) {
  let sum = [];
  for (let i = 0; i < matrix.length; i += 1) {
    sum[i] = 0;
    for (let j = 0; j < matrix[i].length; j += 1) {
      sum[i] += matrix[i][j];
    }
  }
  return sum;
}

console.log(sumMatrixTopDown(matrix3));
console.log(sumMatrixRightLeft(matrix3));


//https://ya.cc/t/5KxpwoWl5ErKfg