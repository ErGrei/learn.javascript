//Цыклы
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//Можно убрать аргументы и использовать внешнюю переменную,
//Фактически это цыкл while
let i = 0;
for (; i < 5; ) {
  console.log(i);
  i++;
}

//можно вызвать без переменных
//!!!Бесконечный цыкл!!!!
//for (;;) {
//    console.log(i);
//}

//цикл while
let w = 0;
while (w < 5) {
  console.log(i);
  w++;
}

//цикл do while
let q = 0;
do {
  console.log(q);
  q++;
} while (q < 5);

// прерывание цикла
//цикл будет прерван и выполнение дальше не пойдет
let r = 0;
do {
  console.log(r);
  r++;
  if (r === 3) {
    break;
  }
} while (r < 5);

//цикл прервет операцию если i===3, увеличет счетчик и продолжит
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// возврат значения и прирывание цикла
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    return console.log('все');
  }
  console.log('привет');
}
// конструкция swith case
let a = 2;
switch (a) {
  case 1:
    console.log('1');
    break;
  case 2:
    console.log('2');
    break;
  case 3:
    console.log('3');
    break;
  default:
    console.log('default');
}

//если нет break, то выведет все значения до конца
switch (a) {
  case 1:
    console.log('1');
  case 2:
    console.log('2');
  case 3:
    console.log('3');
  default:
    console.log('default');
}

// если default без break в начале то выведет и следующее значение
switch (a) {
  default:
    console.log('default');
  case 1:
    console.log('один');
    break;
  case 2:
    console.log('два');
    break;
  case 3:
    console.log('три');
    break;  
}

//если return, то выведет VM83:5 Uncaught SyntaxError: Illegal return statement
switch (a) {
  case 1:
    console.log('1');
    return;
  case 2:
    console.log('2');
    return;
  case 3:
    console.log('3');
    return;
  default:
    console.log('default');
}
//групировка case
switch (a) {
  case 1:
  case 2:
  case 3:
    console.log('1,2,3');
    break;
  case 4:
  case 5:
  case 6:
    console.log('4,5,6');
    break;
  default:
    console.log('default');
}

//Функции
//объявление функции
function foo() {
  console.log('foo');
}
foo();

//параметры функции
function bar(a, b) {
  console.log(a + b);
}
bar(1, 2);

//параметры по умолчанию
function baz(a = 1, b = 2) {
  console.log(a + b);
}
baz(1, 2);
baz(1);
baz();
baz(1, 2, 3);

//return
function qux(a, b) {
  return a + b;
}
let result = qux(1, 2);
console.log(result);

//function expression
let quxx = function (a, b) {
  return a + b;
};
let resultx = quxx(1, 2);
console.log(resultx);
