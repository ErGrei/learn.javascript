function task1() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  console.log("3");
}

// task1();

//2

function task2() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  Promise.resolve().then(() => {
    console.log("3");
  });

  console.log("4");
}

// task2();

//3

function task3() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  setTimeout(() => {
    console.log("3");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("4");
    })
    .then(() => {
      console.log("5");
    });

  console.log("6");
}

// task3();
//4

function task4() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("3");
    })
    .then(() => {
      console.log("4");
    });

  console.log("5");

  setTimeout(() => {
    console.log("6");
  }, 100);
}

// task4();
//5

function task5() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  setTimeout(() => {
    console.log("3");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("4");
    })
    .then(() => {
      console.log("5");
    });

  Promise.resolve().then(() => {
    console.log("6");
  });

  console.log("7");
}
// task5();
//6

function task6() {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 0);

  async function asyncFunc() {
    console.log("3");
    await Promise.resolve();
    console.log("4");
  }

  asyncFunc();

  setTimeout(() => {
    console.log("5");
  }, 0);
 
  console.log("6");
}

// task6();
//7

function task7() {
  console.log("1");

  async function asyncFunc1() {
    console.log("2");
    await asyncFunc2();
    console.log("3");
  }

  async function asyncFunc2() {
    console.log("4");
    return Promise.resolve().then(() => {
      console.log("5");
    });
  }

  asyncFunc1();

  setTimeout(() => {
    console.log("6");
  }, 0);

  Promise.resolve().then(() => {
    console.log("7");
  });

  console.log("8");
}

// task7();
//8

function task8() {
 console.log("1");

  async function asyncFunc1() {
    console.log("2");
    await asyncFunc2();
    console.log("3");
  }

  async function asyncFunc2() {
    console.log("4");
    await Promise.resolve();
    console.log("5");
  }

  asyncFunc1();

  setTimeout(() => {
    console.log("6");
  }, 0);

  Promise.resolve()
    .then(() => {
      console.log("7");
    })
    .then(() => {
      console.log("8");
    });

  console.log("9");
}

// task8();
//9

function task9() {
  console.log("1");
  async function asyncFunc1() {
    console.log("2");
    await asyncFunc2();
    console.log("3");
  }
  async function asyncFunc2() {
    console.log("4");
    await Promise.resolve();
    console.log("5");
  }
  asyncFunc1();
  setTimeout(() => {
    console.log("6");
  }, 0);
  Promise.resolve()
    .then(() => {
      console.log("7");
    })
    .then(() => {
      console.log("8");
    });
  setTimeout(() => {
    console.log("9");
  }, 0);
  console.log("10");
}

// task9();

//10

function task10() {
    console.log('1');
async function asyncFunc1() {
  console.log('2');
  await asyncFunc2();
  console.log('3');
}
async function asyncFunc2() {
  console.log('4');
  await new Promise(resolve => {
    console.log('5');
    resolve();
  });
  console.log('6');
}
setTimeout(() => {
  console.log('7');
}, 100);
asyncFunc1();
new Promise((resolve) => {
  console.log('8');
  resolve();
}).then(() => {
  console.log('9');
}).then(() => {
  console.log('10');
});
setTimeout(() => {
  console.log('11');
}, 0);
console.log('12');
};

task10();