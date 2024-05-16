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
  
  let f1000 = delay(alert, 1000);
  
  f1000("test");

//   function delay(f, ms) {

//     return function(...args) {
//       let savedThis = this; 
//       setTimeout(function() {
//         f.apply(savedThis, args); 
//       }, ms);
//     };
  
//   }

