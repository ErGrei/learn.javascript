const bodi = document.body;
const btn = [
  "ac",
  "+/-",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  0,
  ".",
  "=",
];

function Calc(arr) {
  this.wraper = document.createElement("div");
  this.wraper.classList.add("wraper");
  bodi.appendChild(this.wraper);
  this.createScreen();
  this.createButton(arr);
  this.addEvent();
}

/**
 * Creates a new calculation screen element, sets its initial value to "0", and appends it to the wrapper element.
 *
 * @return {Element} The newly created calculation screen element.
 */
Calc.prototype.createScreen = function () {
  this.createScreen = document.createElement("div");
  this.createScreen.classList.add("calc-screen");
  this.createScreen.textContent = "0";
  this.wraper.appendChild(this.createScreen);
  return this.createScreen;
};

/**
 * Creates a button for each element in the given array and appends them to the wrapper div.
 *
 * @param {Array} arr - the array of elements to create buttons for
 * @return {HTMLElement} the wrapper div containing the created buttons
 */
Calc.prototype.createButton = function (arr) {
  this.wraperBtn = document.createElement("div");
  this.wraperBtn.classList.add("wraper-btn");
  arr.forEach((element) => {
    this.button = document.createElement("button");
    this.button.classList.add("btn");
    this.button.textContent = element;
    this.wraperBtn.appendChild(this.button);
    this.wraper.appendChild(this.wraperBtn);
  });
  return this.wraperBtn;
};

Calc.prototype.addEvent = function () {
  let a = "";
  let b = "";
  let operator = "";
  // this.firstNumber = "";
  // this.secondNumber = "";
  // this.result = "";
  // this.operator = "";
  let finish = false;
  let button = document.querySelectorAll("button");

  button.forEach((element) => {
    element.addEventListener("click", click);
  });

  function click() {
    this.out = document.querySelector(".calc-screen");
    this.value = this.textContent;
    console.log(this.value);
    if (this.value === "ac") {
      a = "";
      this.out.textContent = "0";
    }
    if (!isNaN(+this.value) || this.value === ".") {
      if (b === "" && operator === "") {
        a += this.value;
        this.out.textContent = a;
      }
      if (a !== "" && b !== "" && finish === false) {
        this.out.textContent = this.value;
      }
    }
    if (
      this.value === "+" ||
      this.value === "-" ||
      this.value === "*" ||
      this.value === "/"
    ) {
      operator = this.value;
      this.out.textContent = this.operator;
    }
  }
};
const calc = new Calc(btn);
