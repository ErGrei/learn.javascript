const arr = [-2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 22];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

// bubbleSort(arr);

function selectedSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[i] !== arr[min]) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

// selectedSort(arr);

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const index = Math.floor(Math.random() * arr.length);

  const pivot = arr[index];
  const left = [];
  const right = [];
  const a = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      a.push(arr[i]);
    }
  }
  const res = [...quickSort(left), ...a, ...quickSort(right)];
  return res;
}

// arr.sort((a, b) => {
//   a - b;
// });

// console.log(quickSort(arr));

 

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
}

// console.log(search(arr, 7));

/**
 * 
 * @param {number[]} arr 
 * @param {number} num 
 * @returns 
 */

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  arr.length
  while (left <= right) {

    let mid = (left + right) / 2|0; //(right - left) / 2 + left
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 7));

export default null
