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

/**
 * A function that creates a calculator interface.
 *
 * @param {array} arr - array of elements for the calculator buttons
 * 
 */
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

/**
 * Handles the click event for the calculator buttons, updating the calculator display and performing arithmetic operations.
 *
 * @param {}
 * @return {}
 */
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

  /**
   * Handles the click event on a calculator button and performs the corresponding operation.
   *
   * @return {void} This function does not return a value.
   */
  function click() {
    this.out = document.querySelector(".calc-screen");
    this.value = this.textContent;
    console.log(this.value);
    if (this.value === "ac") {
      a = "";
      b = "";
      operator = "";
      this.out.textContent = "0";
      this.dotCount = 0;
    }
    if (!isNaN(+this.value) || this.value === ".") {
      if (this.value === "." && this.dotCount > 0) {
        return;
      } else if (this.value === ".") {
        this.dotCount++;
      }
      if (b === "" && operator === "") {
        a += this.value;
        this.out.textContent = a;
      } else if (a !== "" && b !== "" && finish) {
      } else {
        b += this.value;
        this.out.textContent = b;
      }
    }

    if (this.value === "+/-") {
      if (a !== "" && b === "" && operator === "") {
        a = +a * -1;
        this.out.textContent = a;
      } else if (a !== "" && b !== "" && operator !== "") {
        b = +b * -1;
        this.out.textContent = b;
      }
    }
    if (
      this.value === "+" ||
      this.value === "-" ||
      this.value === "*" ||
      this.value === "/"
    ) {
      operator = this.value;
      this.out.textContent = this.value;
    }
    if (this.value === "=") {
      switch (operator) {
        case "%":
          a = +(Math.round((+a / 100) * +b + "e+5") + "e-5");
        case "+":
          a = +(Math.round(+(a + +b) + "e+5") + "e-5");
          break;
        case "-":
          a = +(Math.round(+a - +b + "e+5") + "e-5");
          break;
        case "*":
          a = +(Math.round(+a * +b + "e+5") + "e-5");
          break;
        case "/":
          if (+b === 0) {
            this.out.textContent = "Делить на 0 нельзя!";
            a = "";
            b = "";
            operator = "";
          } else {
            a = +(Math.round(+a / +b + "e+5") + "e-5");
            break;
          }
        default:
          break;
      }
      this.out.textContent = a;
      b = "";
      operator = "";
      this.dotCount = 0;
    }
  }
};

const calc = new Calc(btn);
