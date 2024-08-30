function search() {
    // таблица с расстояниями между городами
let towns = [
	[0, 5, 6, 14, 15],
	[5, 0, 7, 10, 6],
	[6, 7, 0, 8, 7],
	[14, 10, 8, 0, 9],
	[15, 6, 7, 9, 0]
];

// массив, где будут храниться все просчитанные маршруты
  let path = [];

  // порядковый номер текущего маршрута
  let counter = 0;

  // самый короткий путь — сразу ставим заведомо большим, чтобы уменьшать его по мере работы алгоритма
  let minPath = 10000;

  // номер самого короткого маршрута
  let minCounter;

  // перебираем все варианты перемещения по городам
  for (let i1 = 0; i1 <= 4; i1++) {
    for (let i2 = 0; i2 <= 4; i2++) {
      for (let i3 = 0; i3 <= 4; i3++) {
        for (let i4 = 0; i4 <= 4; i4++) {
          for (let i5 = 0; i5 <= 4; i5++) {
            // нельзя посещать один и тот же город больше одного раза
            if (
              i1 != i2 &&
              i1 != i3 &&
              i1 != i4 &&
              i1 != i5 &&
              i2 != i3 &&
              i2 != i4 &&
              i2 != i5 &&
              i3 != i4 &&
              i3 != i5 &&
              i4 != i5
            ) {
              // запоминаем текущий путь
              path[counter] =
                i1 +
                1 +
                " → " +
                (i2 + 1) +
                " → " +
                (i3 + 1) +
                " → " +
                (i4 + 1) +
                " → " +
                (i5 + 1);
              // выводим его в консоль
              console.log(path[counter]);
              // если общее расстоения этого пути меньше минимального
              if (
                towns[i1][i2] + towns[i2][i3] + towns[i3][i4] + towns[i4][i5] <
                minPath
              ) {
                // то мы запоминаем это минимальное расстояние
                minPath =
                  towns[i1][i2] + towns[i2][i3] + towns[i3][i4] + towns[i4][i5];
                // выводим его в консоль
                console.log(minPath);
                // запоминаем номер этого маршрута с минимальным расстоянием
                minCounter = counter;
              }
              // когда всё сделали, увеличиваем номер маршрута
              counter += 1;
            }
          }
        }
      }
    }
  }
  console.log('Путь с самой короткой длиной маршрута: ' + path[minCounter] + '(' + minPath + ' км.)');
}
// search()

let arr = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
};

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let step = 0;
function quickSearch(arr, num) {
  //[10,20,30,40]
  let left = 0;
  let right = arr.length - 1; //3
  while (left <= right) {
    step += 1;
    let middle = Math.floor((left + right) / 2); //1
    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] < num){
        left = middle + 1;
    } else {
        right = middle - 1;
    }
  }
  return -1;
}

console.log(quickSearch(arr(10000000), 10000), step);