class castomPromise {
    PANDING = 'pending';
    RESOLVED = 'resolved';
    REJECTED = 'rejected';
    constructor() {
        this.state = PANDING;
        this.value = null;
        this.callbacks = [];
    }

    then(onFulfilled, onRejected) {
        if (this.state === PANDING) {
            this.callbacks.push({
                onFulfilled,
                onRejected
            })
        }
    }

    resolve(value) {
        if (this.state === PANDING) {
            this.state = RESOLVED;  
            this.value = value;
            setTimeout(() => {
                this.callbacks.forEach(callback => {
                    callback.onFulfilled(this.value);
                })
            })
        }
    }
}