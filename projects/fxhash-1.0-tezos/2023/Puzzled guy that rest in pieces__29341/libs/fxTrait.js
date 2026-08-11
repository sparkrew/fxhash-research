// class to represent an enumaration trait
class EnumTrait {

    cancelProba = false;

    tableValue = [];
    tableDescription = null;
    tableWeight = null;

    index = -1;
    currentValue = null;

    currentImage = null;
    currentImagePath = "";

    // a name for the trait
    nickname;

    constructor(table, weights) {
        this.tableValue = table;
        this.tableWeight = weights

        // can happen for derived constructed
        if (this.tableValue != null) {

            this.reroll();
        }
    }

    // for the index
    setIndex(newIndex) {
        if (newIndex < 0) {
            newIndex = 0;
        }

        if (newIndex >= this.tableValue.length) {
            newIndex = this.tableValue.length - 1;
        }

        this.index = newIndex;
        this.currentValue = this.tableValue[newIndex];
    }

    // cycle through the value
    cycle() {
        let newValue = this.index + 1;
        newValue = newValue % this.tableValue.length;
        this.setIndex(newValue);
    }

    // reroll the params
    reroll() {
        let index = 0;
        if (this.tableWeight != null && !this.cancelProba) {
            let aggregateList = []
            let sum = this.tableWeight.reduce((a, b) => a + b);
            let aggregate = 0;
            for (let i = 0; i < this.tableWeight.length; i++) {
                aggregate += this.tableWeight[i] / sum;
                aggregateList.push(aggregate);
            }

            let randTest = fxrand();
            while (randTest > aggregateList[index] && index < aggregateList.length) {
                index++;
            }
        }
        else {
            // equi proba
            index = fxrandIntMax(this.tableValue.length);
        }

        this.setIndex(index);
    }

    // if the current value is an image path will load the image
    // and return the image loaded
    loadImageFile() {
        if (this.currentValue != null && this.currentValue != "") {
            this.currentImage = loadImage(this.currentImagePath + this.currentValue);
        }

        return this.currentImage;
    }

    // display string for the trait
    // return the value if table description is not defined
    getTraitString() {
        if (this.tableDescription == null) {
            return this.currentValue
        };

        return this.tableDescription[this.index];
    }
}

class SequentialTrait extends EnumTrait {
    constructor(name, count) {
        super([]);

        this.tableDescription = [];

        for (let i = 0; i < count; i++) {
            this.tableValue[i] = name.replace("?", i);
            this.tableDescription[i] = i;
        }

        this.reroll();
    }
}