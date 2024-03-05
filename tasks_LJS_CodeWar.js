// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
// Завершите решение так, чтобы оно вернуло сумму всех чисел, кратных 3 или 5, ниже введенного числа.
// Кроме того, если число отрицательное, верните 0.
// Примечание. Если число кратно 3 и 5, посчитайте его только один раз .
function solution(number) {
  if (number <= 0) {
    return 0;
  }
  let res = null;
  // const originalArr = [];

  //Вариант 1
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }

  //Вариант 2
  // for (let i = 0; i < number; i++) {
  //   originalArr.push(i);
  // }
  // for (let i = 0; i < originalArr.length; i++) {
  //   if (originalArr[i] % 3 === 0 || originalArr[i] % 5 === 0) {
  //     res += +originalArr[i];
  //   }
  // }

  //Вариант 3
  //  const res = originalArr.filter((item) => item % 3 === 0 || item % 5 === 0).reduce((acum, item) => (acum += item), 0);
  console.log(res);
  return res;
}
solution(10);

//Перевернуть строку

function reverse(str) {
  //Вариант 1
  let res = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   res += str[i];
  // }

  //Вариант 2
  // res = str.split("").reverse().join("");

  //Вариант 3
  // for (let i = 0; i < str.length; i++) {
  //   res += str[str.length - 1 - i];
  // }

  //Вариант 4
  let arr = str.split("");
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  res = arr.join("");
  console.log(res);
  return res;
}
reverse("hello world");
