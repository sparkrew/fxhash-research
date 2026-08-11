class InkLine {
    static lineNumber = 0;

    constructor(x0, y0, x1, y1, baseColor, pointWeightMult = 0.1, speedMult = 2) {
        InkLine.lineNumber++;
        this._speedMult = speedMult;

        let c = random(PALETTE.elementColors);
        this._skipPoint = new InkPoint(baseColor, c, pointWeightMult);
        this._x = x0;
        this._y = y0;
        this._stepSize = fl(minSide * 0.0003);
        this._lineLength = fl(sqrt(fl(sq(x1 - x0) + sq(y1 - y0))));
        this.#initLine(x0, y0, x1, y1);

        this._breakIndex = 0;

        this._step = 0;

        this._isDrawn = false;
    }

    #initLine(x0, y0, x1, y1) {
        this._angle = atan2((y1 - y0), (x1 - x0));

        this._startAddLength = min(random(this._lineLength * random(0.1)), minSide * random(0.1));
        this._endAddLength = min(random(this._lineLength * random(0.1)), minSide * random(0.1));
        this._numOfSteps = int((this._lineLength + this._startAddLength + this._endAddLength) / this._stepSize);

        let wholeLength = this._lineLength + this._startAddLength + this._endAddLength;

        let breakPointsNum = int(random(4));
        this._breakPoints = [];
        for (let i = 0; i < breakPointsNum; i++) {
            let breakStep = int(random(this._numOfSteps));
            this._breakPoints.push({
                step: breakStep,
                y: strokeW * random(-0.8, 0.8),
                angle: radians(random(-0.5, 0.5)),
                addLength: random(0.02, 0.1) * this._lineLength
            });
            wholeLength += this._breakPoints[i].addLength;
        }

        this._numOfSteps = int(wholeLength / this._stepSize);
    }

    pointsDrawn() {
        return this._step;
    }

    pointsToDraw() {
        return this._numOfSteps;
    }

    getCurrentSpeed() {
        return getSpeed(this.pointsDrawn(), this.pointsToDraw(), 1, 12) * this._speedMult;
    }


    drawWholeLine() {
        while(!this._isDrawn) {
            this.drawPoints();
        }
    }

    useShader() {
        return false;
    }

    drawPoints() {
        if (this._isDrawn) {
            return;
        }

        let speed = this.getCurrentSpeed();
        for (let i = 0; i < int(speed); i++) {
            if (this._isDrawn) {
                break;
            }

            pushAll();
            translateAll(this._x, this._y);
            this._step++;

            if ((this._breakIndex < this._breakPoints.length - 1)
                && (this._step >= this._breakPoints[this._breakIndex + 1].step)) {
                this._breakIndex++;
            }

            if ((this._breakPoints.length !== 0) && (this._step > this._breakPoints[this._breakIndex].step)) {
                rotateAll(this._angle + this._breakPoints[this._breakIndex].angle);
                this._skipPoint.drawPoint(this._step * this._stepSize
                    - this._startAddLength - this._breakPoints[this._breakIndex].addLength,
                    this._breakPoints[this._breakIndex].y);
            } else {
                rotateAll(this._angle);
                this._skipPoint.drawPoint(this._step * this._stepSize - this._startAddLength, 0);
            }

            if ((this._numOfSteps - this._step) <= 0) {
                this._isDrawn = true;
            }

            popAll();
        }


    }

    isDrawn() {
        return this._isDrawn;
    }
}