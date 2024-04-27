newGame();
let xIsNext = true;
let step = [];
function newGame() {
  const bodi = document.querySelector(".body");
  const wraper = document.createElement("div");
  bodi.append(wraper);
  wraper.classList.add("wraper");
  createElements(wraper);
  eventListener();
}
function createElements(wraper) {
  const arrField = Array(9).fill(null);

  arrField.forEach((element, index) => {
    const cell = document.createElement("div");
    cell.setAttribute("data-n", index);
    cell.classList.add("cell");
    wraper.append(cell);
  });
  // console.log(arrField);
}

function clickCell(e) {
  const cell = e.target;
  const index = cell.getAttribute("data-n");
  gameMoves(cell);
  checkWin(index);
}

function eventListener() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", clickCell);
  });
}

function gameMoves(cell) {
  // console.log(xIsNext);
  toggle();
  function toggle() {
    if (cell.textContent !== "") {
      return;
    }
    if (xIsNext) {
      cell.textContent = "O";
      xIsNext = false;
    } else {
      cell.textContent = "X";
      xIsNext = true;
    }
  }
}

function checkWin(indexStep) {
  const wim = ["012", "345", "678", "036", "147", "258", "048", "246"];

  // console.log(indexStep);
  if (xIsNext) {
    step.push(indexStep);
    console.log(step);
  }

  for (let i = 0; i < wim.length; i++) {
    const winPattern = wim[i];
    let count = 0;
    winPattern.split("").forEach((char) => {
      if (step.includes(char)) {
        count++;
      }
    });
    if (count === 3) {
      console.log('win');
    }
  }
}
