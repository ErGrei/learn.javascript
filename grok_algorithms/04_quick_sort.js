let arr = (length, max) => {
  return [...new Array(length)].map(() => Math.round(Math.random() * max));
};

// console.log(arr(100, 100));

function quickSort(arr) {
  //   console.log(arr);
  if (arr.length < 2) {
    return arr;
  }
  const index = Math.floor(Math.random() * arr.length);
  const pivot = arr[index];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot && i !== index) {
      left.push(arr[i]);
    } else if (arr[i] >= pivot && i !== index) {
      right.push(arr[i]);
    } 
    // else {
    //   continue;
    // }
  }
  //   console.log(left);
  //   console.log(right);
  const res = [...quickSort(left), pivot, ...quickSort(right)];
  //   console.log(res);
  return res;
}

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

let arr2 = [1, 1, 1, 1, 1, 12, 2, , 33, 5, 5, 5, 8, 8, 8, 8];
console.log(selectionSort(arr(100_000, 100)));
// console.log(quickSort(arr(100_000, 100)));
