class castomPromise {
  PANDING = "pending";
  RESOLVED = "resolved";
  REJECTED = "rejected";
  constructor() {
    this.state = PANDING;
    this.value = null;
    this.callbacks = [];
  }
}
