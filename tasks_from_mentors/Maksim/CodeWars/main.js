import { tasks } from "./src/task_object.js";
// taskInit(0);
function taskInit(value) {
  let taskValue = Array.from(tasks.keys())[value];

  document.querySelector(".input_task").value = tasks.get(taskValue);

  let { a, b } = taskValue.example;

  document.querySelector(".btn_task").addEventListener("click", () => {
    const task = document.querySelector(".input_task").value;

    const result = new Function("return " + task)();
    let resultValue = result(a, b);

    resultTask(resultValue, taskValue);
  });
  document.querySelector(".description").innerHTML = taskValue.description;
}

function resultTask(resultValue, taskValue) {
  let { a, b } = taskValue.example;
  if (resultValue === taskValue.solution(a, b)) {
    document.querySelector(
      ".input_value"
    ).value = `ожидаемое значение ${taskValue.solution(
      a,
      b
    )}, полученное значение ${resultValue} вы молодец`;
  } else {
    document.querySelector(
      ".input_value"
    ).value = `ожидаемое значение ${taskValue.solution(
      a,
      b
    )}, полученное значение ${resultValue} подумайте еще`;
  }
}

function selectTask() {
  const selectElement = document.querySelector(".select_task");
  selectElement.addEventListener("change", () => {
    console.log(Number(selectElement.value));
    let selectedValue = selectElement.value;
    taskInit(Number(selectElement.value));
  });
}
selectTask();

