import { tasks } from "./src/task_object.js";
import { runTests } from "./src/test.js";
const assert = chai.assert;
// const assertEqual = assert.equal;
// import { describe, it, expect } from './node_modules/@jest';

// taskInit(0);
class TaskInit {
  constructor(value) {
    this.taskValue = Array.from(tasks.keys())[value];
    this.inputTaskElement = document.querySelector(".input_task");
    this.btnTaskElement = document.querySelector(".btn_task");
    this.btnSolutionElement = document.querySelector(".solution__btn");
    this.solutionDivElement = document.querySelector(".solution");
    this.descriptionElement = document.querySelector(".description");
    this.inputValueElement = document.querySelector(".input_value");
    this.mochaElement = document.querySelector(".mocha");
    this.testsElement = document.querySelector(".tests");

    this.init();
    this.initSolution()
    // this.initTest();
  }

  init() {
    const { test: testValue, func } = tasks.get(this.taskValue);
    this.inputTaskElement.value = func;

    this.btnTaskElement.addEventListener("click", () => {
      const task = this.inputTaskElement.value;
      const test = this.testsElement.value;

      const result = new Function("return " + task)();
      // let resultValue = result(this.taskValue.example.a, this.taskValue.example.b);

      //Решение с использованием функции eval
      
      // const testing = eval(test);

      const testing = new Function('assert', 'result', "return " + test)(assert, result);
      // console.log(testing);

      runTests(result, testing);
    });

    this.descriptionElement.innerHTML = this.taskValue.description;
    this.testsElement.innerHTML = testValue;
  }

  initSolution() {
    this.btnSolutionElement.addEventListener("click", () => {
      // console.log('работает')
      this.solutionDivElement.innerHTML = this.taskValue.solution;
    });
  }

  // initTest() {
  //    this.tests.innerHTML = this.taskValue.tests;
  // }

  // runTests(result) {
  //     this.mochaElement.innerHTML = "";
  //     runTests(result);
  // }
}

class SelectTask {
  constructor() {
    this.selectElement = document.querySelector(".select_task");
    this.initChangeEvent();
  }

  initChangeEvent() {
    this.selectElement.addEventListener("change", () => this.onChange());
  }

  onChange() {
    const selectedValue = Number(this.selectElement.value);
    new TaskInit(selectedValue);
    this.clearSolution();
  }

  clearSolution() {
    const solutionDivElement = document.querySelector(".solution");
    solutionDivElement.innerHTML = "";
  }
}

new SelectTask();
