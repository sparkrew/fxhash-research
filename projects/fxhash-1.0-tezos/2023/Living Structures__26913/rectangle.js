class Rectangle {
    constructor(minX, minY, maxX, maxY) {
        // constructor(min, max) {
        this.min = createVector(minX, minY);
        this.max = createVector(maxX, maxY);
        this.w = this.max.x - this.min.x;
        this.h = this.max.y - this.min.y;
        this.center = createVector(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2
        );
        this.isSplit = false;

        this.hatchType = random(["line", "quadratic", "cubic"]);
    }

    split(xPad, yPad) {
        let r1, r2;
        if (this.w > this.h) {
            let x = round(random(this.min.x + xPad, this.max.x - xPad));
            r1 = new Rectangle(this.min.x, this.min.y, x, this.max.y);
            r2 = new Rectangle(x, this.min.y, this.max.x, this.max.y);
        } else {
            let y = round(random(this.min.y + yPad, this.max.y - yPad));
            r1 = new Rectangle(this.min.x, this.min.y, this.max.x, y);
            r2 = new Rectangle(this.min.x, y, this.max.x, this.max.y);
        }
        return [r1, r2];
    }

    show(col, nShift, threshold, nFactor, aMode, hatchType) {
        const { x, y } = this.center;

        if (hatchType == "various") {
            hatchType = this.hatchType;
        } //else {
        //   hatchType = options.hatchType;
        // }

        if (!options.enableNoiseShift) {
            nShift = 0;
        }

        let n = noise((x + nShift) / nFactor, (y + nShift) / nFactor);

        let spacing = random(options.spacingMin, options.spacingMax);

        let thick = random(options.thickMin, options.thickMax);

        let angle;
        if (aMode == "random") {
            angle = random(options.maxAngle);
        }

        if (aMode == "axis") {
            angle = map(y, 0, height, 0, options.maxAngle);
        }

        if (aMode == "noise") {
            angle = map(n, 0, 1, 0, options.maxAngle);
        }
        if (aMode == "fixed") {
            angle = options.maxAngle;
        }

        thick = map(n, 0.2, 0.8, options.thickMin, options.thickMax);
        spacing = map(n, 0.2, 0.8, options.spacingMax, options.spacingMin);

        if (n < threshold) {
            clippedHatch(
                this,
                spacing,
                angle,
                options.angleVariation,
                thick,
                col,
                hatchType,
                options.curvature,
                options.clipped
            );
        }
        // buff.noFill();
        // buff.strokeWeight(3.5);
        // buff.rect(this.min.x, this.min.y, this.w, this.h);
    }
}
