class castomPromise {
  #PANDING = "pending";
  #RESOLVED = "fulfilled";
  #REJECTED = "rejected";
  constructor(executor) {
    this.state = this.#PANDING;
    this.value = null;
    this.callbacks = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve = (value) => {
    if (this.state === this.#PANDING) {
      this.state = this.#RESOLVED;
      this.value = value;

      this.callbacks.forEach((callback) => {
        callback.onFulfilled(this.value);
      });
    }
  };

  reject = (error) => {
    if (this.state === this.#PANDING) {
      this.state = this.#REJECTED;
      this.value = error;

      this.callbacks.forEach((callback) => {
        callback.onRejected(this.value);
      });
    }
  };

  then(onFulfilled, onRejected) {
    return new castomPromise((resolve, reject) => {
      if (this.state === this.#RESOLVED) {
        onFulfilled(this.value);
      } else if (this.state === this.#REJECTED) {
        onRejected(this.value);
      } else {
        this.callbacks.push({ onFulfilled, onRejected });
      }
    });
  }
}
// Кейс 1 промис вызывается, состояние меняется
const promise = new castomPromise((resolve, reject) => {
  resolve("1");
});
console.log("кейс 1 ", promise);

// Кейс 2 поменять состояние промиса можно только 1 раз

const promise2 = new castomPromise((resolve, reject) => {
  resolve("1");
  reject("2");
  resolve("3");
});
console.log("кейс 2 ", promise2);

// Кейс 3 если прокинуть ошибку код не падает

const promise3 = new castomPromise((resolve, reject) => {
  throw new Error("1");
});
console.log("кейс 3 ", promise3);

// Кейс 4 реализован метод then перехватывает значение resolved и rejected, при этом возвращается новый промис.
// Промис накапливает вызовы onFulfilled и onRejected в случае асинхронной задачи
// then вторым колбеком перехватывает ошибку

const promise4 = new castomPromise((resolve, reject) => {
  setTimeout(() => resolve("1"), 1000);
}).then((value) => {
  console.log("кейс 4 ", value);
});

const promise5 = new castomPromise((resolve, reject) => {
  setTimeout(() => reject(new Error("Ошибочка")), 1000);
}).then(
  (value) => {
    console.log("кейс 5 ", value);
  },
  (error) => {
    console.log("кейс 5 error", error);
  }
);
