// Можно ли "перевыполнить" промис?
// Что выведет код ниже

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

//нет промис не может перевыполниться поскольку статус промиса fulfilled и его нельзя больше поменять
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log("выполнилось через 3 секунды"));


// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

// Новое использование:

// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });


// function showCircle(x, y, r) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = x - r + 'px';
//   div.style.top = y - r + 'px';
//   div.style.backgroundColor = 'transparent';
//   div.style.border = r + 'px solid red';
//   return new Promise((resolve) => {
//     div.onclick = () => resolve(div);
//     document.body.append(div);
//   });
// }

const btn =document.querySelector('.wrapper')
btn.eddEventListener('click',()=>{
  
})