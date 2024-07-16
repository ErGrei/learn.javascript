class castomPromise {
  #PANDING = "pending";
  #RESOLVED = "resolved";
  #REJECTED = "rejected";
  constructor(executor) {
    this.state = this.#PANDING;
    this.value = null;
    this.callbacks = [];
  }

  resolve = (value) => {
    if (this.state === this.#PANDING) {
      this.state = this.#RESOLVED;
      this.value = value;
    }
  };

  reject = (error) => {
    if (this.state === this.#PANDING) {
      this.state = this.#REJECTED;
      this.value = error;
    }
  };
}
