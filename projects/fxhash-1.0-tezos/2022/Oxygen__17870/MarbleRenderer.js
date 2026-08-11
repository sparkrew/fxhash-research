class MarbleRenderer {
    constructor(tree, colorMap) {
        this.tree = tree;
        this.func = new Function("x", "y", "return " + tree.expr());
        this.colorMap = colorMap;
    }

    init(tlx, tly, w, h) {
        this.pixelQueue = Array();

        const cx = w / 2;
        const cy = h / 2;

        this.tlx = tlx;
        this.tly = tly;
        this.w = w;
        this.h = h;
        this.cx = cx;
        this.cy = cy;

        for (let x = 0; x < w; x++) {
            for (let y = 0; y < h; y++) {
                if (
                    (x - cx) * (x - cx) + (y - cy) * (y - cy) >
                    (w / 2) * (w / 2)
                ) {
                    continue;
                } else {
                    this.pixelQueue.push([x + tlx, y + tly]);
                }
            }
        }

        this.pixelQueue = shuffleArray(this.pixelQueue);
    }

    draw(pixelArr, distortField = null, distortStrength = 0) {
        const parent = this;

        const dots = parent.pixelQueue.length;

        return {
            maxNumbDots: dots,
            defaultStepSize: dots,

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumbDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (parent.pixelQueue.length == 0) {
                    return true;
                }

                let numdots;

                if (stepSize > 0) {
                    numdots = min(stepSize, parent.pixelQueue.length);
                } else {
                    numdots = min(
                        this.defaultStepSize,
                        parent.pixelQueue.length
                    );
                }

                const op = 0.3;
                const negOp = 1 - op;

                for (let c = 0; c < numdots; c++) {
                    if (parent.pixelQueue.length == 0) {
                        return true;
                    }

                    const pointsTuple = parent.pixelQueue.pop();

                    let x = pointsTuple[0];
                    let y = pointsTuple[1];

                    const val = map(
                        parent.func(
                            map(x, parent.tlx, parent.tlx + parent.w, -2, 2),
                            map(y, parent.tly, parent.tly + parent.h, -2, 2)
                        ) || 0,
                        parent.tree.minval,
                        parent.tree.maxval,
                        1,
                        999,
                        true
                    );

                    const c = parent.colorMap[Math.floor(val)];

                    if (distortField) {
                        x =
                            x +
                            distortField[(floor(y) * P_WIDTH + floor(x)) * 2] *
                                distortStrength;
                        y =
                            y +
                            distortField[
                                (floor(y) * P_WIDTH + floor(x)) * 2 + 1
                            ] *
                                distortStrength;
                    }

                    x = floor(x);
                    y = floor(y);

                    const t = Math.floor(3 * (y * P_WIDTH + x));

                    pixelArr[t] = pixelArr[t] * negOp + (op * red(c)) / 255; // + floor(randS.next()*20);
                    pixelArr[t + 1] =
                        pixelArr[t + 1] * negOp + (op * green(c)) / 255; // + floor(randS.next()*20);
                    pixelArr[t + 2] =
                        pixelArr[t + 2] * negOp + (op * blue(c)) / 255; // + floor(randS.next()*20);
                }

                return false;
            },
        };
    }
}
