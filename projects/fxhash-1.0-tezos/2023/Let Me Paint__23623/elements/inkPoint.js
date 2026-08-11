class InkPoint {
    static lineNumber = 0;

    constructor(baseColor, c, pointWeightMult = 0.1) {
        InkPoint.lineNumber++;
        this._pointWeight = pointWeightMult * strokeW;
        this._baseColor = baseColor;
        this._pointNumber = 0;
        this._lineNumber = InkPoint.lineNumber;
        this._skipRate = 0.35;
        this._drawOutline = random() > 0.0;
    }

    drawPoint(x, y) {
        this._pointNumber++;
        pushAll();

        let lineWeight = this._pointWeight * map(noise(this._pointNumber * 0.01, this._lineNumber * 7),
            0, 1, 0.1, 2.2);

        let c = color(hue(this._baseColor),
            saturation(this._baseColor) * map(noise(this._pointNumber * 0.005, this._lineNumber * 12),
                0, 1, 0.95, 1.05),
            brightness(this._baseColor) * map(noise(this._pointNumber * 0.007, this._lineNumber * 3),
                0, 1, 0.95, 1.05),
            random(0.6, 1));
        strokeAll(c);
        strokeWeightAll(lineWeight);

        if ((this._drawOutline) && (noise(this._pointNumber * 0.06, this._lineNumber * 5) >= this._skipRate)) {
            for (let i = 0; i < 3; i++) {
                let pY = y + randomGaussian(0, strokeW * 0.02);
                let pX = x + randomGaussian(0, strokeW * 0.02);
                mainLayer.point(pX, pY);
                point(pX, pY);
            }
        }

        popAll();
    }

}