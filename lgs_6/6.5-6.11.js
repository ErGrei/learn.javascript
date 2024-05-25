// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

console.log(printNumbers(10, 20));


// Свой счетчик рекурсией

function recursiveCountdown(seconds = 10, count ) {
  if (seconds === 0){
    console.log('Отсчет завершен!')
  } else {
    console.log(`Осталось секунд: ${seconds}`)
    setTimeout(()=>recursiveCountdown(--seconds),1000)
  }
  }
  
  recursiveCountdown();


// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

// Каждый вызов должен сохраняться как массив аргументов.
function work(a, b) {
   console.log( a + b ); 
  }
  
  work = spy(work);
  
  work(1, 2); 
  work(4, 5); 
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); 
  }

  function spy(func) {

    function wrapper(...args) {
      
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
  }


//   Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

// function f(x) {
//   alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
  }
  
  let f1000 = delay(console.log, 1000);
  
  f1000("test");

//   function delay(f, ms) {

//     return function(...args) {
//       let savedThis = this; 
//       setTimeout(function() {
//         f.apply(savedThis, args); 
//       }, ms);
//     };
  
//   }

// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));