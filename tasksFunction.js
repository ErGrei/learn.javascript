//Обязателен ли "else"? нет, если условее верное выполнение функции остановится
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}

// //Перепишите функцию, используя оператор '?' или '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?"); // обязательно 2условия иначе ошибка
}

function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?"); // проверка вернет true поэтому допускается 1 условие
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// // Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
//Для возведения в степень можно использовать операцию **
function pow(x, n) {
  return x ** n;
}
console.log(pow(2, 2));


// Замените код Function Expression стрелочной функцией:

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

// // или так
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение."),
// );
