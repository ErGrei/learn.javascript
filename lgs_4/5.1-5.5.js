


// Методы массивов
//Мутабельные методы массивов
let arrWorck = [1, 2, 3, 4, 5];

arrWorck.push(6, 7); // [1, 2, 3, 4, 5, 6, 7]
arrWorck.pop(); // [1, 2, 3, 4, 5, 6]
arrWorck.shift(); // [2, 3, 4, 5, 6]
arrWorck.unshift(0); // [0, 2, 3, 4, 5, 6]
arrWorck.splice(0, 1); // [1, 2, 3, 4, 5, 6]
arrWorck.reverse(); // [6, 5, 4, 3, 2]
// НЕ МУТАБЕЛЬНЫЕ

arrWorck.forEach((index) => {
    console.log(index);
});

let newArr = arrWorck.map((index) => {
    return index * 2
})

newArr = arrWorck.filter((index) => {
    return index % 2 === 0
})

newArr = arrWorck.reduce((acc, index) => {
    return acc + index
}, 0)

newArr = arrWorck.indexOf(2);

newArr = arrWorck.lastIndexOf(2);

newArr = arrWorck.join('-'); // '1-2-3-4-5-6'

newArr = arrWorck.slice(1, 3);

newArr = arrWorck.concat([6, 7]);

newArr = arrWorck.find((index) => index === 2);

newArr = arrWorck.findIndex((index) => index === 2);

Array.isArray(arrWorck)


//СТРОКИ
// length(): Возвращает длину строки.

let str = "Hello";
letngth = str.length(); // length is 5

// charAt(int index): Возвращает символ по указанному индексу.

str = "Hello";
let ch = str.charAt(1); // ch is 'e'

// substring(int beginIndex): Возвращает подстроку, начиная с указанного индекса.

str = "Hello";
let sub = str.substring(2); // sub is "llo"

// substring(int beginIndex, int endIndex): Возвращает подстроку, начиная с указанного индекса и заканчивая указанным индексом (не включая его).

str = "Hello";
sub = str.substring(2, 4); // sub is "ll"

// indexOf(String str): Возвращает индекс первого вхождения указанной подстроки.

str = "Hello";
let index = str.indexOf("lo"); // index is 3

// toUpperCase(): Возвращает строку в верхнем регистре.

let str1 = "Hello";
let str2 = "hello";
let isEqual = str1.equals(str2); // isEqual is false

// equalsIgnoreCase(String anotherString): Сравнивает строки без учета регистра.

str1 = "Hello";
str2 = "hello";
let isual = str1.equalsIgnoreCase(str2); // isEqual is true

// replace(char oldChar, char newChar): Заменяет все вхождения указанного символа на другой символ.

str = "Hello";
let newStr = str.replace("l", "w"); // newStr is "Hewwo"

// replaceAll(String regex, String replacement): Заменяет все вхождения указанного регулярного выражения на указанную строку.

str = "Hello 123";
newStr = str.replaceAll("[0-9]", "X"); // newStr is "Hello XXX"

// toLowerCase(): Возвращает строку в нижнем регистре.

str = "HELLO";
let lowerCaseStr = str.toLowerCase(); // lowerCaseStr is "hello"

// toUpperCase(): Возвращает строку в верхнем регистре.

str = "hello";
let upperCaseStr = str.toUpperCase(); // upperCaseStr is "HELLO"

// trim(): Удаляет начальные и конечные пробелы.

str = "  Hello  ";
let trimmedStr = str.trim(); // trimmedStr is "Hello"

// startsWith(String prefix): Проверяет, начинается ли строка с указанного префикса.

str = "Hello";
let startsWith = str.startsWith("He"); // startsWith is true


// endsWith(String suffix): Проверяет, заканчивается ли строка указанным суффиксом.

str = "Hello";
let endsWith = str.endsWith("lo"); // endsWith is true

// contains(CharSequence s): Проверяет, содержит ли строка указанную последовательность символов.

str = "Hello";
let contains = str.contains("ell"); // contain

// str.split(): приобразует строку в массив по указанному разделителю.

str = "Hello world";
let arr = str.split(" "); // arr is ["Hello", "world"]

//ЧИСЛА

//toFixed() - округляет число до указанного количества знаков после запятой:

let num = 10.456;
console.log(num.toFixed(2)); // выводит 10.46

//parseInt() - преобразует строку в целое число:

let numStr = "10";
num = parseInt(numStr);
console.log(num); // выводит 10

//parseFloat() - преобразует строку в число с плавающей запятой:

 numStr = "10.5";
 num = parseFloat(numStr);
console.log(num); // выводит 10.5

//Math.round() - округляет число до ближайшего целого:

 num = 10.6;
console.log(Math.round(num)); // выводит 11

//Math.ceil() - округляет число до ближайшего большего целого:

 num = 10.4;
console.log(Math.ceil(num)); // выводит 11

//Math.floor() - округляет число до ближайшего меньшего целого:

 num = 10.6;
console.log(Math.floor(num)); // выводит 10

//Math.trunc() - округляет число до ближайшего меньшего целого:

 num = 10.6;
console.log(Math.trunc(num)); // выводит 10

//Math.sign() - возвращает знак числа:

 num = 10;
 console.log(Math.sign(num)); // выводит 1

 num = -10;
 console.log(Math.sign(num)); // выводит -1

 num = 0;
 console.log(Math.sign(num)); // выводит 0

 //Math.sqrt() - вычисляет квадратный корень числа:

 num = 25;
 console.log(Math.sqrt(num)); // выводит 5

 //И ЕЩЕ Дофига чего, все есть на странице https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math