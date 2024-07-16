function A(x) {
  function B(y) {
    function C(z) {
      function D(w) {
        function E(q) {
          function F(r) {
            console.log(x + y + z + w + q + r); //вернет 123215
          }
          F(5);
        }
        E(1);
      }
      D(2);
    }
    C(3);
  }
  B(2);
}
A("1");

new Promise((resolve, reject) => {
  resolve("1");
})
  .then((val) => {
    return val + 2;
  })
  .then((val) => {
    return val + 3;
  })
  .then((val) => {
    return val + 2;
  })
  .then((val) => {
    return val + 1;
  })
  .then((val) => {
    console.log(val + 5); //вернет 123215
  })
  .catch((err) => {
    console.log(err);
  });

// ******************************************************************************

const block = document.querySelector(".block");

let item = 0;

function add() {
  do {
    item++;
    block.value = item;
  } while (item < 10);

  if (item < 1000) {
    // setTimeout(add);
    // Promise.resolve().then(add);
  }
}
setTimeout(() => {
  console.log(item);
})
add();

