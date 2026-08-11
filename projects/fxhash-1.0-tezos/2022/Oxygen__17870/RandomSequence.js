class RandomSequence {
    constructor(numItems) {
        this.numItems = numItems;
        this.cursor = 0;
        this.numberArr = new Float32Array(numItems);
        for (let i = 0; i < this.numItems; i++) {
            this.numberArr[i] = fxrand();
        }
    }

    // Adding a method to the constructor
    next() {
        this.cursor = this.cursor + 1;
        if (this.cursor >= this.numItems) {
            this.cursor = 0;
        }

        return this.numberArr[this.cursor];
    }

    reset() {
        this.cursor = 0;
    }
}
