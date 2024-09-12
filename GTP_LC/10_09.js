/**
 * Удаление дубликатов строк в массиве
Условие: Напиши функцию, которая принимает массив строк и возвращает новый массив, в котором сохранены только уникальные строки из исходного массива.
 */

removeDuplicates(["apple", "banana", "apple", "orange", "banana"]);
// ["apple", "banana", "orange"]

// решение 1
const removeDuplicates = (arr) => [...new Set(arr)];
// решение 2 
function removeDuplicates  (arr) {
return arr.filter((item, index)=> arr.indexOf(item) === index);
}

/**
 * Удаление элементов, не присутствующих в обоих массивах
Условие: Напиши функцию, которая принимает два массива чисел и возвращает массив, содержащий только те числа, которые присутствуют в обоих массивах, но без дубликатов.
 */

commonElements([1, 2, 3, 4], [3, 4, 5, 6]);
// [3, 4]

function commonElements (arr1, arr2){
    return [...new Set (arr1.filter((item)=> arr2.includes(item) ))]
    }

//оптимальное решение чатика
function commonElements(arr1, arr2) {
    const set2 = new Set(arr2);
    return [...new Set(arr1.filter(item => set2.has(item)))];
}


/**
 * Фильтрация массива объектов по значению ключа
Условие: Напиши функцию, которая принимает массив объектов и два параметра: ключ и значение. Функция должна возвращать новый массив, содержащий только те объекты, у которых значение по указанному ключу совпадает с переданным значением.
 */

const arr = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
];

filterByKey(arr, 'age', 25);
// [
//     { name: 'Alice', age: 25 },
//     { name: 'Charlie', age: 25 }
// ]


function filterByKey (arr, key, value){
    const res = arr.filter((item)=> item[key] === value);
    return res;
  }

