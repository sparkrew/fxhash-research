class RandomLine {
    static lineNumber = 0;

    constructor(baseColor, maxLineWidth, type, speedMult = 1) {
        RandomLine.lineNumber++;
        this._lineNumber = RandomLine.lineNumber;
        this._maxLineWidth = maxLineWidth;
        this._type = type // 0 - rect, 1 - circle.

        this._withoutShader = maxLineWidth <= 0.002;

        this._speedMult = speedMult;
        this._baseColor = {
            hue: hue(baseColor),
            saturation: saturation(baseColor),
            brightness: brightness(baseColor)
        };

        this._points = [];
        this._numOfSteps = 0;
        this._step = 0;

        this._skipRate = random(0.36);
        this._isDrawn = false;

        this.#makeLine();
    }

    #makeLine() {
        push();
        this._numOfSteps = int(random(8, 60)) * 100;
        let fieldType = this._withoutShader ? 0 : random([0, 1]);

        let xMult = (fieldType === 0) ? 0.05 * random(0.0001, 0.08) : random(0.0001, 10);
        let yMult = (fieldType === 0) ? 0.05 * random(0.0001, 0.08) : random(0.0001, 10);

        let margin = random(-0.05, 0.25);
        let x = random(margin, 1 - margin) * width;
        let y = random(margin, 1 - margin) * height;
        let stepSize = minSide * 0.0002;

        let angleAdd = random(TWO_PI) * random([-1, 1]);

        let shiftX = random(-0.5, 0.5);
        let shiftY = random(-0.5, 0.5);

        let angle = 0;
        for (let j = 0; j < this._numOfSteps; j++) {
            if (noise(j * 0.001, this._lineNumber * 13) < this._skipRate) {
                continue;
            }

            angle = (fieldType === 0)
                ? map(noise(x * xMult, y * yMult, this._lineNumber * 37),
                0, 1, -TWO_PI, TWO_PI) + angleAdd
                : atan2(x * xMult + width * shiftX,
                y * yMult + height * shiftY) + angleAdd;

            x += (stepSize) * cos(angle);
            y += (stepSize) * sin(angle);
            this._points.push({x, y, angle});

            if ((x < margin * width) || (x > width * (1 - margin))) {
                x = random(margin, 1 - margin) * width;
            }
            if ((y < margin * height) || (y > height * (1 - margin))) {
                y = random(margin, 1 - margin) * height;
            }
        }

        this._numOfSteps = this._points.length;
        pop();
    }

    #drawPoint() {
        if ((this._numOfSteps - this._step) <= 0) {
            this._isDrawn = true;
            return;
        }

        pushAll();
        let x = this._points[this._step].x;
        let y = this._points[this._step].y;

        translateAll(x, y);

        rotateAll(-this._points[this._step].angle);

        let size = minSide * map(noise(this._step * 0.003, this._lineNumber * 7),
            0, 1, this._maxLineWidth * 0.3, this._maxLineWidth);
        let alpha = (this._step === 0 || this._step >= this._numOfSteps - 3 || this._withoutShader)
            ? 0.8 : random(0.15, 0.35);

        let c;
        for (let i = 1; i <= 2; i++) {
            let px = randomGaussian(0, minSide * 0.0006);
            let py = randomGaussian(0, minSide * 0.0006);

            c = color((this._baseColor.hue + map(noise(this._step * 0.009, this._lineNumber * 3, 12 * i),
                0, 1, -8, 2)) % 360,
                this._baseColor.saturation * map(noise(this._step * 0.009, this._lineNumber * 3, 2),
                    0, 1, 0.92, 1.06),
                this._baseColor.brightness * map(noise(this._step * 0.015, this._lineNumber * 3, 13),
                    0, 1, 0.92, 1.08),
                alpha);

            strokeAll(c);
            noFillAll();
            strokeWeightAll(strokeW * 0.14);

            if (this._withoutShader) {
                px = randomGaussian(0, minSide * 0.00035);
                py = randomGaussian(0, minSide * 0.00035);
                circle(px, py, size);
                mainLayer.circle(px, py, size);
                continue;
            }

            if (this._type === 0) {
                square(px, py, size, minSide * 0.014);
                lineLayer.square(px, py, size, minSide * 0.014);
            } else {
                circle(px, py, size);
                lineLayer.circle(px, py, size);
            }
        }

        if (random() > 0.98) {
            let a = random(0.1, 0.9);
            noStrokeAll();
            fillAll(color(hue(c), saturation(c), brightness(c), a));
            let px = randomGaussian(0, minSide * 0.2);
            let py = randomGaussian(0, minSide * 0.2);
            let d = random(0.0001, 0.0025) * minSide;
            circle(px, py, d);
            lineLayer.circle(px, py, d);
        }

        this._step++;
        if ((this._numOfSteps - this._step) <= 0) {
            this._isDrawn = true;
        }

        popAll();
    }
    pointsDrawn() {
        return this._step;
    }

    pointsToDraw() {
        return this._numOfSteps;
    }

    getCurrentSpeed() {
        return getSpeed(this.pointsDrawn(), this.pointsToDraw(), 2, 10) * this._speedMult;
    }

    useShader() {
        return !this._withoutShader;
    }

    drawPoints() {
        if (this._isDrawn) {
            return;
        }

        let speed = this.getCurrentSpeed() * this._speedMult;
        for (let i = 0; i < speed; i++) {
            if (this._isDrawn) {
                break;
            }
            this.#drawPoint();
        }
    }

    isDrawn() {
        return this._isDrawn;
    }
}