let statesNeeded = new Set([
  "California",
  "Nevada",
  "Utah",
  "Oregon",
  "Washington",
  "Idaho",
  "New York",
  "New Jersey",
  "Pennsylvania",
  "Texas",
  "Oklahoma",
  "Louisiana",
  "Florida",
  "Georgia",
  "Alabama",
  "Illinois",
  "Indiana",
  "Ohio",
  "Colorado",
  "Wyoming",
  "Nebraska",
  "Arizona",
  "New Mexico",
  "Massachusetts",
  "Connecticut",
  "Rhode Island",
  "Minnesota",
  "Wisconsin",
  "Iowa",
  "Montana",
  "North Dakota",
  "South Dakota",
  "Michigan",
  "Kentucky",
  "Tennessee",
  "West Virginia",
  "North Carolina",
  "South Carolina",
  "Virginia",
  "Maine",
  "New Hampshire",
  "Vermont",
  "Arkansas",
  "Missouri",
  "Kansas",
  "Mississippi",
  "Hawaii",
  "Alaska",
  "Maryland",
  "Delaware",
]);

// штаты, которые нужно покрыть
// let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "са", "az"]);

const stations = {
  station1: new Set(["California", "Nevada", "Utah"]),
  station2: new Set(["Oregon", "Washington", "Idaho"]),
  station3: new Set(["New York"]),
  station4: new Set(["Texas"]),
  station5: new Set(["Florida", "Georgia", "Alabama"]),
  station6: new Set(["Illinois"]),
  station7: new Set(["Colorado", "Wyoming", "Nebraska"]),
  station8: new Set(["Arizona", "New Mexico", "Nevada"]),
  station9: new Set(["Massachusetts"]),
  station10: new Set(["Minnesota", "Wisconsin", "Iowa"]),
  station11: new Set(["Montana"]),
  station12: new Set(["Michigan", "Wisconsin"]),
  station13: new Set(["Kentucky", "Tennessee"]),
  station14: new Set(["North Carolina"]),
  station15: new Set(["Maine", "Vermont"]),
  station16: new Set(["Arkansas", "Missouri"]),
  station17: new Set(["Mississippi", "Louisiana"]),
  station18: new Set(["Hawaii", "Alaska", "Washington"]),
  station19: new Set(["Maryland"]),
  station20: new Set(["Nevada", "California", "Arizona"])
};

// радиостанции и их покрытие
// const stations = {
//   kone: new Set(["id", "nv", "ut"]),
//   ktwo: new Set(["wa", "id", "mt"]),
//   kthree: new Set(["or", "nv", "са"]),
//   kfour: new Set(["nv", "ut"]),
//   kfive: new Set(["ca", "az"]),
// };

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
  console.log(bestSubset);
  return bestSubset;
};


const greedySet = (set, subsets) => {
  let setToCover = new Set([...set]);
  // оптимальный набор подмножеств
  const finalSet = new Set();

  while (setToCover.size > 0) {
    // получить лучшую станцию
    let bestSubset = getBestSubset(setToCover, subsets);
    // добавить ее в финальный набор
    finalSet.add(bestSubset);
    // убрать из набора штатов уже покрытые
    setToCover = getDifference(setToCover, subsets[bestSubset]);
    if (statesNeeded.size === initialSize) {
      console.log('Не удается покрыть оставшиеся штаты: ', [...statesNeeded]);
      break; // Выход из цикла, если оставшиеся штаты не изменились
  }
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
const targetSum = 73;

const greedyAlgorithm = (coins, targetSum) => {
  let res = new Set();
  let sum = 0;
  for (let i = coins.length - 1; i >= 0; i--) {
    if (sum + coins[i] <= targetSum) {
      sum += coins[i];
      res.add(coins[i]);
    }
  }
  return [...res];
};

// console.log(greedyAlgorithm(coins, targetSum));


/**function findBestStations(stations) {
      let statesNeeded = new Set([...]);

      const finalStations = new Set();

      while (statesNeeded.size > 0) {
          let bestStation = null;
          let statesCovered = new Set();
          let initialSize = statesNeeded.size;

          for (let [station, states] of Object.entries(stations)) {
              let covered = new Set(states.filter(state => statesNeeded.has(state)));

              if (covered.size > statesCovered.size) {
                  bestStation = station;
                  statesCovered = covered;
              }
          }

          statesNeeded = new Set([...statesNeeded].filter(state => !statesCovered.has(state)));

          if (bestStation) {
              finalStations.add(bestStation);
          }

          if (statesNeeded.size === initialSize) {
              console.log('Не удается покрыть оставшиеся штаты: ', [...statesNeeded]);
              break; // Выход из цикла, если оставшиеся штаты не изменились
          }
      }

      return finalStations;
  }

  console.log(findBestStations(stations)); */