// штаты, которые нужно покрыть
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "са", "az"]);

// радиостанции и их покрытие
const stations = {
  kone: new Set(["id", "nv", "ut"]),
  ktwo: new Set(["wa", "id", "mt"]),
  kthree: new Set(["or", "nv", "са"]),
  kfour: new Set(["nv", "ut"]),
  kfive: new Set(["ca", "az"]),
};

let getIntersection = function getIntersection(set1, set2) {
  return new Set([...set1].filter((x) => set2.has(x)));
};

let getDifference = function getDifference(set1, set2) {
  return new Set([...set1].filter((x) => !set2.has(x)));
};

// функция для выбора лучшей станции
// выбирает подмножество,
// в которое входит больше всего непокрытых элементов
const getBestSubset = (setToCover, subsets) => {
  let bestSubset = undefined;
  let covered = new Set();

  Object.keys(subsets).forEach((subset) => {
    // сколько еще непокрытых штатов обслуживает станция
    let subsetCovered = getIntersection(setToCover, subsets[subset]);
    if (subsetCovered.size > covered.size) {
      bestSubset = subset;
      covered = subsetCovered;
    }
  });

  return bestSubset;
};
const greedySet = (set, subsets) => {
  let setToCover = new Set([...set]);
  // оптимальный набор подмножеств
  const finalSet = new Set();

  while (setToCover.size) {
    // получить лучшую станцию
    let bestSubset = getBestSubset(setToCover, subsets);
    // добавить ее в финальный набор
    finalSet.add(bestSubset);
    // убрать из набора штатов уже покрытые
    setToCover = getDifference(setToCover, subsets[bestSubset]);
  }

  return finalSet;
};

console.log(greedySet(statesNeeded, stations)); // { 'kone', 'ktwo', 'kthree', 'kfive' }

// адача о выборе оптимальной комбинации монет:
// Предположим, у вас есть набор монет разных номиналов, а также нужно набрать определенную сумму денег. Вам нужно выбрать наименьшее количество монет таким образом, чтобы сумма, которую они образуют, была равной или близкой к заданной сумме.

// Массив монет:
// const coins = [1, 2, 5, 10, 20, 50, 100]; // Номиналы доступных монет
// const targetSum = 73; // Целевая сумма, которую нужно набрать

// Вы можете использовать этот объект и жадный алгоритм, чтобы выбрать оптимальную комбинацию монет для набора суммы 73 (или любой другой целевой суммы).

const coins = [1, 2, 5, 10, 20, 50, 100];
const targetSum = 152;



const greedyAlgorithm = (coins, targetSum) => {
  let currentSum = 0;
  let filteredCoins = coins.sort((a,b) => b - a);
  console.log(filteredCoins)
  let greedySet = new Set();
  for (const coin of filteredCoins) {
    if (currentSum + coin <= targetSum) {
      currentSum += coin;
      greedySet.add(coin);
    }
  }
  return greedySet;
};

console.log(greedyAlgorithm(coins, targetSum));
