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
function GetHtmlKontent(btn) {
  this.wraper = document.createElement("div");
  this.wraper.classList.add("wraper");
  bodi.appendChild(this.wraper);
  this.calcScreen = document.createElement("div");
  this.calcScreen.classList.add("calc-screen");
  this.calcScreen.textContent = "0";
  this.wraper.appendChild(this.calcScreen);
  this.button = null;

  this.createButton = function (arr) {
    arr.forEach((element) => {
      this.wraperBtn = document.createElement("div");
      this.wraperBtn.classList.add("wraper-btn");
      this.button = document.createElement("button");
      this.button.classList.add("btn");
      this.button.textContent = element;
      this.wraperBtn.appendChild(this.button);
      this.wraper.appendChild(this.wraperBtn);
    });
  };
  createButton(btn);
}
GetHtmlKontent(btn);
