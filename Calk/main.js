const bodi = document.body;
const btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "c", "+", "-", "*", "/"];
function GetHtmlKontent(btn) {
  this.wraper = document.createElement("div");
  bodi.appendChild(this.wraper);
  this.button = null;

  this.createButton = function (arr) {
    arr.forEach((element) => {
      this.button = document.createElement("button");
      this.button.textContent = element;
      this.wraper.appendChild(this.button);
    });
  };
  createButton(btn)
}
GetHtmlKontent(btn);
