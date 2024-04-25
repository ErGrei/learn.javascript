// У нас есть объект:

let user = {
  name: "John",
  years: 30,
};
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

function getProperties(obj) {
  let { name, years: age, isAdmin = false } = user;
  return { name, age, isAdmin };
}

console.log(getProperties(user));

// У нас есть объект salaries с зарплатами:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }

  return maxSalaryName;
}

console.log(topSalary(salaries));

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

// Для вывода используйте alert.

// решение
// Конструктор new Date стандартно использует местную временную зону. Единственная важная вещь, которую нужно запомнить – это то, что месяцы начинаются с нуля.

// Поэтому февраль обозначается числом 1.

let d = new Date(2012, 1, 20, 3, 12);
console.log(d);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date();
console.log(getWeekDay(date));

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}

console.log(getLocalDay(date));
