// Реализуйте функцию getNumbersByParity, которая принимает массив чисел в 
// качестве первого аргумента и строку "even" или "odd" в качестве второго.
//  Функция должна вернуть новый массив, состоящий из четных чисел, если
//   вторым аргументом было передано "even" и нечетных, если было передано 
//   "odd". Оба аргумента функции обязательны. Первый обязательно будет массивом,
//    а второй - строкой "even"/"odd".
function getNumbersByParity (data, par) {
    let arr = [...data]
    if (par === "even") {
        return arr.filter(num => num % 2 === 0)
    } else {
        return arr.filter(num => num % 2 !== 0)
    }
}

// Реализуйте функцию hasArrays, которая принимает массив данных разных типов и 
// возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.
function hasArrays (arr) {
if (arr.lehght === 0) {
    return false
}
for (let i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]) ? true : false
}

}