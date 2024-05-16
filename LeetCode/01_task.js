// Учитывая целочисленный массив  arr и функцию сопоставления  fn, верните новый массив с преобразованием, примененным к каждому элементу.

// Возвращаемый массив должен быть создан таким образом, чтобы  returnedArray[i] = fn(arr[i], i).
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resultArr = [];
    arr.forEach((item, index) => resultArr.push(fn(item, index)))

    return resultArr;
};

// Пример 1:

// Ввод: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
//  Вывод: [2,3,4]
//  Объяснение:
// const newArray = карта (arr, plusone); // [2,3,4]
// Функция увеличивает каждое значение массива на единицу.



// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const res = []
    for(let i = 0; i<arr.length; i++){
       if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
    }
    return res
};

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    res = []
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
              res.push(i, j); 
              break        
              }
        }
    }
    return res
};

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const strNumber = String(x);
    const center = (strNumber.length/2).toFixed()
    for (let i = 0; i < center; i++){
        if (strNumber[i] !== strNumber[strNumber.length-1-i]){
            return false;
        }
    }
    return true
};

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.