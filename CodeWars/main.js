document.querySelector(".input_task").value = `function sum (a, b) { 

   };`;

let a = 1;
let b = 2;
document.querySelector(".btn_task").addEventListener("click", () => {
  const task = document.querySelector(".input_task").value;
  console.log(task);
  const result = new Function('return ' + task)();
  resultValue = result(a,b)
  console.log(result(a,b));
  resultTask(result(a,b))
//   document.querySelector(".input_task").value = result;
});

function resultTask (resultValue){
if (resultValue === 3){
  document.querySelector(".input_value").value = `'ожидаемое значение 3, полеченное значение' ${resultValue} 'вы молодец'`;
} else {document.querySelector(".input_value").value = `'ожидаемое значение 3, полеченное значение' ${resultValue} 'подумайте еще'`;}
}
