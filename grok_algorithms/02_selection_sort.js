let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//O(n) = 9
//O(1) = const
//O(logn) = 3 (3 ** 2 = 9)

arr.splice(5,0,100);
arr.splice(5,1)

console.log(arr);

arr = (length, max) => {
  return [...new Array(length)].map(() => Math.round(Math.random() * max));
};

// console.log(arr(10, 100));



let arr2 = [5, 4, 5, 4, 3, 3, 2, 2, 9, 9, 10, 1, 0];
console.log(selectionSort(arr2));

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr(10,50)));
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // console.log(min)
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
function quickSort(arr) {
  //   console.log(arr);
  if (arr.length < 2) {
    return arr;
  }
  const index = Math.floor(Math.random() * arr.length);
  const pivot = arr[index];
  const left = [];
  const right = [];
  const equal = []; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    //   continue;
    }
  }
  const res = [...quickSort(left), ...equal, ...quickSort(right)];
  return res;
}
const arr3 = [5, 4, 5, 4, 3, 3, 2, 2, 9, 9, 10, 1, 0];
console.log(quickSort(arr3)); 