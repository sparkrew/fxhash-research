class BufferPainter {
    setMargins(left, top, right, bottom) {
        this.P_EDGE_LEFT = left;
        this.P_EDGE_TOP = top;
        this.P_EDGE_RIGHT = right;
        this.P_EDGE_BOTTOM = bottom;
    }

    setFrameCount(frameCount) {
        this.frameCount = frameCount;
    }

    constructor(P_WIDTH, P_HEIGHT, DOTS_MULT, DOTS_OPACITY, randS) {
        this.buffer = new Float32Array(P_WIDTH * P_HEIGHT * 3);
        this.P_WIDTH = P_WIDTH;
        this.P_HEIGHT = P_HEIGHT;
        this.DOTS_MULT = DOTS_MULT;
        this.DOTS_OPACITY = DOTS_OPACITY;
        this.randS = randS;
    }

    emptyBuf(bgCol) {
        let loc;

        for (let x = 0; x < this.P_WIDTH; x++) {
            for (let y = 0; y < this.P_HEIGHT; y++) {
                loc = (y * this.P_WIDTH + x) * 3;

                this.buffer[loc] = bgCol[0] / 255;
                this.buffer[loc + 1] = bgCol[1] / 255;
                this.buffer[loc + 2] = bgCol[2] / 255;
            }
        }
    }

    gradientBgWithMargins(bgCol, marginCol) {
        const parent = this;

        return {
            step: function () {
                for (let x = 0; x < P_WIDTH; x++) {
                    for (let y = 0; y < P_HEIGHT; y++) {
                        const loc = (y * P_WIDTH + x) * 3;

                        const offset = map(noise(x, y), 0, 1, -0.5, 0.5) * 10;

                        if (
                            x + offset > parent.P_EDGE_LEFT &&
                            x + offset < parent.P_EDGE_RIGHT &&
                            y + offset > parent.P_EDGE_TOP &&
                            y + offset < parent.P_EDGE_BOTTOM
                        ) {
                            parent.buffer[loc] =
                                bgCol[0] / 255 -
                                (y / parent.P_HEIGHT) * 0.05 -
                                (x / parent.P_WIDTH) * 0.03 +
                                noise(
                                    (y / parent.P_HEIGHT) * 100,
                                    (x / parent.P_WIDTH) * 50
                                ) *
                                    0.02;
                            parent.buffer[loc + 1] =
                                bgCol[1] / 255 -
                                (y / parent.P_HEIGHT) * 0.05 -
                                (x / parent.P_WIDTH) * 0.03 +
                                noise(
                                    (y / parent.P_HEIGHT) * 100,
                                    (x / parent.P_WIDTH) * 50
                                ) *
                                    0.02;
                            parent.buffer[loc + 2] =
                                bgCol[2] / 255 -
                                (y / parent.P_HEIGHT) * 0.05 -
                                (x / parent.P_WIDTH) * 0.03 +
                                noise(
                                    (y / parent.P_HEIGHT) * 100,
                                    (x / parent.P_WIDTH) * 50
                                ) *
                                    0.02;
                        } else {
                            parent.buffer[loc] = marginCol[0] / 255;
                            parent.buffer[loc + 1] = marginCol[1] / 255;
                            parent.buffer[loc + 2] = marginCol[2] / 255;
                        }
                    }
                }
                return true;
            },
        };
    }

    bumpMapBgWithMargins(bgCol, marginCol, phase1 = 0, phase2 = 0) {
        const parent = this;

        const dots = parent.P_WIDTH * parent.P_HEIGHT;

        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            noiseMapDotCount: 0,
            lightMapDotCount: 0,
            drawDotCount: 0,
            stage: 0,
            noiseMap: new Float32Array(parent.P_WIDTH * parent.P_HEIGHT),
            lightMap: new Float32Array(parent.P_WIDTH * parent.P_HEIGHT),

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (this.stage === 2 && this.drawDotCount >= this.maxNumDots)
                    return true;

                // FIRST STAGE: CALCULATE NOISE MAP
                if (this.stage === 0) {
                    let numdots;

                    if (stepSize > 0) {
                        numdots = Math.min(
                            stepSize,
                            this.maxNumDots - this.noiseMapDotCount
                        );
                    } else {
                        numdots = Math.min(
                            this.defaultStepSize,
                            this.maxNumDots - this.noiseMapDotCount
                        );
                    }

                    numdots = numdots + this.noiseMapDotCount;

                    for (
                        let loc = this.noiseMapDotCount;
                        loc < numdots;
                        loc++
                    ) {
                        const y = Math.floor(loc / P_WIDTH);
                        const x = loc % P_WIDTH;

                        // let loc = (y*P_WIDTH+x);

                        const yRel = y / P_HEIGHT;
                        const xRel = x / P_WIDTH;

                        let freq = 1.5;
                        let amp = 1;
                        const ampMult = 0.5;
                        const freqMult = 4;

                        let p = 0;

                        for (let l = 0; l < 15; l++) {
                            p = p + noise(yRel * freq, xRel * freq) * amp;
                            freq = freq * freqMult;
                            amp = amp * ampMult;
                        }

                        p =
                            p +
                            0.05 *
                                Math.cos(
                                    phase1 +
                                        (xRel * 10 + phase1) *
                                            (10 * yRel + phase2) +
                                        yRel * 10 * 10 * xRel +
                                        20 * yRel * Math.sin(yRel * 10 + phase2)
                                );

                        let lightSpot = noise(xRel * 40, yRel * 40);
                        lightSpot = lightSpot * lightSpot * lightSpot;
                        lightSpot = 0.05 - min(lightSpot, 0.05);

                        this.noiseMap[loc] = p - lightSpot * 5;

                        this.noiseMapDotCount = this.noiseMapDotCount + 1;
                    }

                    if (this.noiseMapDotCount >= this.maxNumDots) {
                        this.stage = this.stage + 1;
                    }
                }

                // SECOND STAGE: CALCULATE LIGHT MAP
                if (this.stage === 1) {
                    let numdots;

                    if (stepSize > 0) {
                        numdots = Math.min(
                            stepSize,
                            this.maxNumDots - this.lightMapDotCount
                        );
                    } else {
                        numdots = Math.min(
                            this.defaultStepSize,
                            this.maxNumDots - this.lightMapDotCount
                        );
                    }

                    numdots = numdots + this.lightMapDotCount;

                    for (
                        let loc = this.lightMapDotCount;
                        loc < numdots;
                        loc++
                    ) {
                        const y = Math.floor(loc / P_WIDTH);
                        const x = loc % P_WIDTH;

                        if (
                            x > 0 &&
                            y > 0 &&
                            x < P_WIDTH - 1 &&
                            y < P_HEIGHT - 1
                        ) {
                            let dx =
                                (this.noiseMap[y * P_WIDTH + x + 1] -
                                    this.noiseMap[y * P_WIDTH + x - 1]) /
                                2;
                            let dy =
                                (this.noiseMap[(y + 1) * P_WIDTH + x + 1] -
                                    this.noiseMap[(y - 1) * P_WIDTH + x - 1]) /
                                2;

                            const gradln = sqrt(dx * dx + dy * dy);

                            dx = dx / gradln;
                            dy = dy / gradln;

                            const dotprod = -dx * 0.71 + dy * 0.71;

                            this.lightMap[loc] = dotprod;
                        }
                        this.lightMapDotCount = this.lightMapDotCount + 1;
                    }

                    if (this.lightMapDotCount >= this.maxNumDots) {
                        this.stage = this.stage + 1;
                    }
                }

                // THIRD STAGE: DRAW
                if (this.stage == 2) {
                    let numdots;

                    if (stepSize > 0) {
                        numdots = Math.min(
                            stepSize,
                            this.maxNumDots - this.drawDotCount
                        );
                    } else {
                        numdots = Math.min(
                            this.defaultStepSize,
                            this.maxNumDots - this.drawDotCount
                        );
                    }

                    numdots = numdots + this.drawDotCount;

                    for (let nloc = this.drawDotCount; nloc < numdots; nloc++) {
                        const y = Math.floor(nloc / P_WIDTH);
                        const x = nloc % P_WIDTH;

                        const loc = (y * P_WIDTH + x) * 3;

                        const yRel = y / P_HEIGHT;
                        const yRel2 = yRel * yRel;
                        const xRel = x / P_WIDTH;

                        const offset =
                            map(
                                noise(xRel * 2000, yRel * 2000),
                                0,
                                1,
                                -0.5,
                                0.5
                            ) * 10;

                        let lightSpot = noise(
                            (1 + xRel + 0.05 * sin(1 + 10 * xRel)) * 20,
                            (yRel + 0.2 * cos(4 * yRel)) * 30
                        );
                        lightSpot = lightSpot * lightSpot * lightSpot;
                        lightSpot = 0.05 - min(lightSpot, 0.05);

                        if (
                            x + offset > parent.P_EDGE_LEFT &&
                            x + offset < parent.P_EDGE_RIGHT &&
                            y + offset > parent.P_EDGE_TOP &&
                            y + offset < parent.P_EDGE_BOTTOM
                        ) {
                            const lightAdd =
                                -yRel * 0.12 -
                                xRel * 0.03 +
                                (yRel2 * 0.05 + 0.02) * this.lightMap[nloc] +
                                (yRel2 * 0.05 + 0.02) *
                                    lightSpot *
                                    yRel2 *
                                    yRel *
                                    2.1;

                            parent.buffer[loc] = bgCol[0] / 255 + lightAdd;
                            parent.buffer[loc + 1] = bgCol[1] / 255 + lightAdd;
                            parent.buffer[loc + 2] = bgCol[2] / 255 + lightAdd;
                        } else {
                            parent.buffer[loc] = marginCol[0] / 255;
                            parent.buffer[loc + 1] = marginCol[1] / 255;
                            parent.buffer[loc + 2] = marginCol[2] / 255;
                        }

                        this.drawDotCount = this.drawDotCount + 1;
                    }
                }

                return this.stage === 2 && this.drawDotCount >= this.maxNumDots;
            },
        };
    }

    drawDirectedRectBrushBuf(cx, cy, dx, dy, size, w, col, strength) {
        const vecmag = Math.sqrt(dx * dx + dy * dy);
        const normdx = dx / vecmag;
        const normdy = dy / vecmag;

        const numdots = size * w * this.DOTS_MULT * 0.05 * strength;

        let u, v, x, y, loc, op, negOp;

        const brushArr = Array();
        for (let i = 0; i < 100; i++) {
            brushArr[i] = noise((i / 100) * 30, this.frameCount / 20) / 5;
        }

        for (let i = 0; i < numdots; i++) {
            u = this.randS.next();

            op = brushArr[floor(u * 100)];
            negOp = 1 - op;

            if (op > 0.02) {
                u = -size / 2 + size * u;
                v = -w / 2 + w * randS.next();

                x = Math.floor(cx + u * normdy + v * normdx);
                y = Math.floor(cy - u * normdx + v * normdy);

                if (
                    x > this.P_EDGE_LEFT &&
                    x < this.P_EDGE_RIGHT &&
                    y > this.P_EDGE_TOP &&
                    y < this.P_EDGE_BOTTOM
                ) {
                    loc = (y * this.P_WIDTH + x) * 3;

                    this.buffer[loc] =
                        negOp * this.buffer[loc] + op * (col[0] + op / 1.5);
                    this.buffer[loc + 1] =
                        negOp * this.buffer[loc + 1] + op * (col[1] + op / 2.5);
                    this.buffer[loc + 2] =
                        negOp * this.buffer[loc + 2] + op * (col[2] + op / 1.7);
                }
            }
            this.dotCount = this.dotCount + 1;
        }
    }

    drawVerticalBrushBuf(cx, cy, size, w, col) {
        const numdots = (size * w * this.DOTS_MULT) / 5;

        let x, y, op, loc;

        for (let i = 0; i < numdots; i++) {
            x = map(this.randS.next(), 0, 1, -w / 2, w / 2);
            y = map(this.randS.next(), 0, 1, -size / 2, size / 2);

            op = noise((y / P_HEIGHT) * 200, this.frameCount / 200) / 20;

            x = Math.floor(cx + x);
            y = Math.floor(cy + y);

            if (op > 0.007) {
                if (
                    x > this.P_EDGE_LEFT &&
                    x < this.P_EDGE_RIGHT &&
                    y > this.P_EDGE_TOP &&
                    y < this.P_EDGE_BOTTOM
                ) {
                    loc = (y * this.P_WIDTH + x) * 3;

                    this.buffer[loc] =
                        (1 - op) * this.buffer[loc] + op * col[0];
                    this.buffer[loc + 1] =
                        (1 - op) * this.buffer[loc + 1] + op * col[1];
                    this.buffer[loc + 2] =
                        (1 - op) * this.buffer[loc + 2] + op * col[2];
                }
            }
            this.dotCount = this.dotCount + 1;
        }
    }

    drawCircleBuf(
        cx,
        cy,
        radius,
        angleOffset,
        col,
        distortField = null,
        distortStrength = 0
    ) {
        const parent = this;
        let dots = radius * radius * Math.PI * parent.DOTS_MULT * 0.4;
        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            dotCount: 0,
            op: parent.DOTS_OPACITY,
            negOp: 1 - parent.DOTS_OPACITY,

            setOpacity(opacity) {
                this.op = opacity;
                this.negOp = 1 - opacity;
                return this;
            },

            setDotsMult(mult) {
                dots = radius * radius * Math.PI * parent.DOTS_MULT * 0.4;
                this.maxNumDots = dots;
                this.defaultStepSize = dots;
                return this;
            },

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (this.dotCount >= this.maxNumDots) return true;

                let numdots;

                if (stepSize > 0) {
                    numdots = Math.min(
                        stepSize,
                        this.maxNumDots - this.dotCount
                    );
                } else {
                    numdots = Math.min(
                        this.defaultStepSize,
                        this.maxNumDots - this.dotCount
                    );
                }

                let ng, angle, rad, x, y, loc;

                for (let i = 0; i < numdots; i++) {
                    ng = parent.randS.next();
                    angle =
                        Math.log(ng / (1 - ng)) * 0.1 * Math.PI - angleOffset;

                    rad = Math.pow(parent.randS.next(), 0.2) * radius;

                    x = cx + Math.cos(angle) * rad;
                    y = cy + Math.sin(angle) * rad;

                    if (distortField) {
                        x =
                            x +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2
                            ] *
                                distortStrength;

                        y =
                            y +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2 +
                                    1
                            ] *
                                distortStrength;
                    }

                    x = Math.floor(x);
                    y = Math.floor(y);

                    if (
                        x > parent.P_EDGE_LEFT &&
                        x < parent.P_EDGE_RIGHT &&
                        y > parent.P_EDGE_TOP &&
                        y < parent.P_EDGE_BOTTOM
                    ) {
                        loc = (y * parent.P_WIDTH + x) * 3;

                        parent.buffer[loc] =
                            this.negOp * parent.buffer[loc] + this.op * col[0];
                        parent.buffer[loc + 1] =
                            this.negOp * parent.buffer[loc + 1] +
                            this.op * col[1];
                        parent.buffer[loc + 2] =
                            this.negOp * parent.buffer[loc + 2] +
                            this.op * col[2];
                    }
                    this.dotCount = this.dotCount + 1;
                }

                return this.dotCount >= this.maxNumDots;
            },
        };
    }

    drawRoundGlowBuf(cx, cy, radius, col) {
        const parent = this;
        let dots = radius * radius * Math.PI * parent.DOTS_MULT * 0.2;
        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            dotCount: 0,
            op: parent.DOTS_OPACITY,
            negOp: 1 - parent.DOTS_OPACITY,

            setOpacity(opacity) {
                this.op = opacity;
                this.negOp = 1 - opacity;
                return this;
            },

            setDotsMult(mult) {
                dots = radius * radius * Math.PI * parent.DOTS_MULT * 0.2;
                this.maxNumDots = dots;
                this.defaultStepSize = dots;
                return this;
            },

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (this.dotCount >= this.maxNumDots) return true;

                let numdots;

                if (stepSize > 0) {
                    numdots = Math.min(
                        stepSize,
                        this.maxNumDots - this.dotCount
                    );
                } else {
                    numdots = Math.min(
                        this.defaultStepSize,
                        this.maxNumDots - this.dotCount
                    );
                }

                let ng, angle, rad, x, y, loc;

                for (let i = 0; i < numdots; i++) {
                    ng = parent.randS.next();
                    angle = ng * 2 * Math.PI;

                    rad = Math.pow(parent.randS.next() - 0.1, 1.2) * radius;

                    x = Math.floor(cx + Math.cos(angle) * rad);
                    y = Math.floor(cy + Math.sin(angle) * rad);

                    if (
                        x > parent.P_EDGE_LEFT &&
                        x < parent.P_EDGE_RIGHT &&
                        y > parent.P_EDGE_TOP &&
                        y < parent.P_EDGE_BOTTOM
                    ) {
                        loc = (y * parent.P_WIDTH + x) * 3;

                        parent.buffer[loc] =
                            this.negOp * parent.buffer[loc] + this.op * col[0];
                        parent.buffer[loc + 1] =
                            this.negOp * parent.buffer[loc + 1] +
                            this.op * col[1];
                        parent.buffer[loc + 2] =
                            this.negOp * parent.buffer[loc + 2] +
                            this.op * col[2];
                    }
                    this.dotCount = this.dotCount + 1;
                }

                return this.dotCount >= this.maxNumDots;
            },
        };
    }

    drawSpiralBuf(x1, y1, radius, sw, turns, angleOffset, col) {
        const op = this.DOTS_OPACITY;
        const negOp = 1 - op;

        for (let i = 0; i < 2 * Math.PI * turns; i += 0.001) {
            const lw =
                sw +
                map(
                    noise(Math.sin(i / 2) * 2, Math.cos(i / 2) * 2, i / 10),
                    0,
                    1,
                    -0.7 * sw,
                    0.7 * sw
                );
            let rad = radius; // + map(noise(sin(i/2)*2,cos(i/2)*2,i/20),0,1,-0.05*radius,0.05*radius);

            rad = rad - (i / (2 * Math.PI)) * sw * 2;

            for (let k = 0; k < rad * 0.003 * lw; k++) {
                const ng =
                    angleOffset + i + map(this.randS.next(), 0, 1, -0.01, 0.01);
                let x = x1 + Math.sin(ng) * rad;
                let y = y1 + Math.cos(ng) * rad;

                const spread = this.randS.next() * lw;

                x = x + spread * Math.sin(ng);
                y = y + spread * Math.cos(ng);

                if (
                    x > this.P_EDGE_LEFT &&
                    x < this.P_EDGE_RIGHT &&
                    y > this.P_EDGE_TOP &&
                    y < P_EDGE_BOTTOM
                ) {
                    const loc = (Math.floor(y) * P_WIDTH + Math.floor(x)) * 3;

                    this.buffer[loc] = negOp * this.buffer[loc] + op * col[0];
                    this.buffer[loc + 1] =
                        negOp * this.buffer[loc + 1] + op * col[1];
                    this.buffer[loc + 2] =
                        negOp * this.buffer[loc + 2] + op * col[2];
                }
            }
        }
    }

    drawRectBuf(
        x1,
        y1,
        w,
        h,
        sw,
        col,
        distortField = null,
        distortStrength = 0
    ) {
        const parent = this;
        let dots = (w * 2 + h * 2) * sw * parent.DOTS_MULT;

        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            dotCount: 0,
            op: parent.DOTS_OPACITY,
            negOp: 1 - parent.DOTS_OPACITY,

            setOpacity(opacity) {
                this.op = opacity;
                this.negOp = 1 - opacity;
                return this;
            },

            setDotsMult(mult) {
                dots = (w * 2 + h * 2) * sw * mult;
                this.maxNumDots = dots;
                this.defaultStepSize = dots;
                return this;
            },

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (this.dotCount >= this.maxNumDots) return true;

                let numdots;

                if (stepSize > 0) {
                    numdots = min(stepSize, this.maxNumDots - this.dotCount);
                } else {
                    numdots = min(
                        this.defaultStepSize,
                        this.maxNumDots - this.dotCount
                    );
                }

                const startFrac = this.dotCount / this.maxNumDots;
                const endFrac = (this.dotCount + numdots) / this.maxNumDots;
                const deltaFrac = endFrac - startFrac;

                for (let i = 0; i < numdots; i++) {
                    const u = startFrac + parent.randS.next() * deltaFrac;
                    const v = parent.randS.next();
                    let x = 0;
                    let y = 0;

                    if (u >= 0.5 && v >= 0.5) {
                        x = Math.floor(map(u, 0.5, 1, x1 + w - sw, x1 + w));
                        y = Math.floor(map(v, 0.5, 1, y1 + sw, y1 + h - sw));
                    } // right side
                    else if (u >= 0.5 && v < 0.5) {
                        x = Math.floor(map(u, 0.5, 1, x1, x1 + w));
                        y = Math.floor(map(v, 0, 0.5, y1, y1 + sw));
                    } // top
                    else if (u < 0.5 && v >= 0.5) {
                        x = Math.floor(map(u, 0, 0.5, x1, x1 + sw));
                        y = Math.floor(map(v, 0.5, 1, y1 + sw, y1 + h - sw));
                    } // left
                    else if (u < 0.5 && v < 0.5) {
                        x = Math.floor(map(u, 0, 0.5, x1, x1 + w));
                        y = Math.floor(map(v, 0, 0.5, y1 + h, y1 + h - sw));
                    } // bottom

                    if (distortField) {
                        x =
                            x +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2
                            ] *
                                distortStrength;

                        y =
                            y +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2 +
                                    1
                            ] *
                                distortStrength;
                    }

                    x = Math.floor(x);
                    y = Math.floor(y);

                    if (
                        x > parent.P_EDGE_LEFT &&
                        x < parent.P_EDGE_RIGHT &&
                        y > parent.P_EDGE_TOP &&
                        y < P_EDGE_BOTTOM
                    ) {
                        const loc = (y * parent.P_WIDTH + x) * 3;

                        parent.buffer[loc] =
                            this.negOp * parent.buffer[loc] + this.op * col[0];
                        parent.buffer[loc + 1] =
                            this.negOp * parent.buffer[loc + 1] +
                            this.op * col[1];
                        parent.buffer[loc + 2] =
                            this.negOp * parent.buffer[loc + 2] +
                            this.op * col[2];
                    }
                    this.dotCount = this.dotCount + 1;
                }

                return this.dotCount >= this.maxNumDots;
            },
        };
    }

    drawRingBuf(
        cx,
        cy,
        radius,
        sw,
        col,
        distortField = null,
        distortStrength = 0
    ) {
        const parent = this;
        const dots = sw * radius * Math.PI * parent.DOTS_MULT;

        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            dotCount: 0,
            op: parent.DOTS_OPACITY,
            negOp: 1 - parent.DOTS_OPACITY,

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (this.dotCount >= this.maxNumDots) return true;
                let numdots;

                if (stepSize > 0) {
                    numdots = Math.min(
                        stepSize,
                        this.maxNumDots - this.dotCount
                    );
                } else {
                    numdots = Math.min(
                        this.defaultStepSize,
                        this.maxNumDots - this.dotCount
                    );
                }

                const startFrac = this.dotCount / this.maxNumDots;
                const endFrac = (this.dotCount + numdots) / this.maxNumDots;
                const deltaFrac = endFrac - startFrac;

                for (let i = 0; i < numdots; i++) {
                    const angle = parent.randS.next() * 2 * Math.PI;

                    const rad = map(
                        Math.pow(
                            parent.randS.next() * deltaFrac + startFrac,
                            0.6
                        ),
                        0,
                        1,
                        radius - sw,
                        radius
                    );

                    let x = cx + Math.cos(angle) * rad;
                    let y = cy + Math.sin(angle) * rad;

                    if (distortField) {
                        x =
                            x +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2
                            ] *
                                distortStrength;

                        y =
                            y +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2 +
                                    1
                            ] *
                                distortStrength;
                    }

                    x = Math.floor(x);
                    y = Math.floor(y);

                    if (
                        x > parent.P_EDGE_LEFT &&
                        x < parent.P_EDGE_RIGHT &&
                        y > parent.P_EDGE_TOP &&
                        y < parent.P_EDGE_BOTTOM
                    ) {
                        const loc = (y * parent.P_WIDTH + x) * 3;

                        parent.buffer[loc] =
                            this.negOp * parent.buffer[loc] + this.op * col[0];
                        parent.buffer[loc + 1] =
                            this.negOp * parent.buffer[loc + 1] +
                            this.op * col[1];
                        parent.buffer[loc + 2] =
                            this.negOp * parent.buffer[loc + 2] +
                            this.op * col[2];
                    }
                    this.dotCount = this.dotCount + 1;
                }

                return this.dotCount >= this.maxNumDots;
            },
        };
    }

    drawLineBuf(
        x1,
        y1,
        x2,
        y2,
        w,
        col,
        distortField = null,
        distortStrength = 0
    ) {
        const parent = this;

        let dx = x2 - x1;
        let dy = y2 - y1;

        const vecLength = Math.sqrt(dx * dx + dy * dy);

        dx = dx / vecLength;
        dy = dy / vecLength;

        let dots = vecLength * w * parent.DOTS_MULT;

        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            dotCount: 0,
            op: parent.DOTS_OPACITY,
            negOp: 1 - parent.DOTS_OPACITY,

            setOpacity(opacity) {
                this.op = opacity;
                this.negOp = 1 - opacity;
                return this;
            },

            setDotsMult(mult) {
                dots = vecLength * w * parent.DOTS_MULT;
                this.maxNumDots = dots;
                this.defaultStepSize = dots;
                return this;
            },

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;

                return this;
            },

            step: function (stepSize = -1) {
                if (this.dotCount >= this.maxNumDots) return true;
                let numdots;

                if (stepSize > 0) {
                    numdots = Math.min(
                        stepSize,
                        this.maxNumDots - this.dotCount
                    );
                } else {
                    numdots = Math.min(
                        this.defaultStepSize,
                        this.maxNumDots - this.dotCount
                    );
                }

                const startFrac = this.dotCount / this.maxNumDots;
                const endFrac = (this.dotCount + numdots) / this.maxNumDots;
                const deltaFrac = endFrac - startFrac;

                for (let i = 0; i < numdots; i++) {
                    const u = Math.pow(
                        startFrac + parent.randS.next() * deltaFrac,
                        1.5
                    );
                    const v = Math.pow(parent.randS.next(), 1) - 0.5;

                    let x = x1 + u * dx * vecLength + v * dy * w;
                    let y = y1 + u * dy * vecLength - v * dx * w;

                    if (distortField) {
                        x =
                            x +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2
                            ] *
                                distortStrength;

                        y =
                            y +
                            distortField[
                                (Math.floor(y) * parent.P_WIDTH +
                                    Math.floor(x)) *
                                    2 +
                                    1
                            ] *
                                distortStrength;
                    }

                    x = Math.floor(x);
                    y = Math.floor(y);

                    if (
                        x > parent.P_EDGE_LEFT &&
                        x < parent.P_EDGE_RIGHT &&
                        y > parent.P_EDGE_TOP &&
                        y < parent.P_EDGE_BOTTOM
                    ) {
                        const loc = (y * parent.P_WIDTH + x) * 3;

                        parent.buffer[loc] =
                            this.negOp * parent.buffer[loc] + this.op * col[0];
                        parent.buffer[loc + 1] =
                            this.negOp * parent.buffer[loc + 1] +
                            this.op * col[1];
                        parent.buffer[loc + 2] =
                            this.negOp * parent.buffer[loc + 2] +
                            this.op * col[2];
                    }
                    this.dotCount = this.dotCount + 1;
                }
                return this.dotCount >= this.maxNumDots;
            },
        };
    }

    drawSparkleBuf(x1, y1, ir, or, sw, nspikes, nradsec, colors) {
        const parent = this;

        const dots = nspikes * (or - ir) * sw * this.DOTS_MULT * 0.5;

        return {
            maxNumDots: dots,
            defaultStepSize: dots,
            dotCount: 0,
            op: parent.DOTS_OPACITY,
            negOp: 1 - parent.DOTS_OPACITY,

            dotsCount: function (frac) {
                this.maxNumDots = this.maxNumDots * frac;
                return this;
            },

            stepSize: function (frac) {
                this.defaultStepSize = this.maxNumDots * frac;
                return this;
            },

            step: function (stepSize = -1) {
                if (this.dotCount >= this.maxNumDots - 1) return true;

                let numdots;

                if (stepSize > 0) {
                    numdots = min(stepSize, this.maxNumDots - this.dotCount);
                } else {
                    numdots = min(
                        this.defaultStepSize,
                        this.maxNumDots - this.dotCount
                    );
                }

                const startFrac = this.dotCount / this.maxNumDots;
                const endFrac = (this.dotCount + numdots) / this.maxNumDots;

                let uplusvlow, uplusvhigh;

                if (startFrac < 0.5) {
                    uplusvlow = Math.sqrt(2 * startFrac);
                } else if (startFrac === 0.5) {
                    uplusvlow = 1;
                } else {
                    uplusvlow = 2 - Math.sqrt(2 * (1 - startFrac));
                }

                if (endFrac < 0.5) {
                    uplusvhigh = Math.sqrt(2 * endFrac);
                } else if (endFrac === 0.5) {
                    uplusvhigh = 1;
                } else {
                    uplusvhigh = 2 - Math.sqrt(2 * (1 - endFrac));
                }

                let u, v, w;
                let spike, spikesec, angle, rad, spikeposx, spikeposy;
                let x, y;
                let col;
                let loc;

                let uplusv;
                const uplusvdelta = uplusvhigh - uplusvlow;
                let z;
                let h;
                let Qlength;
                const SQRT2 = Math.sqrt(2);
                const invSQRT2 = 1 / Math.sqrt(2);
                const HALFPI = Math.PI / 2;

                for (let i = 0; i < numdots; i++) {
                    uplusv = uplusvlow + randS.next() * uplusvdelta;

                    Qlength = (SQRT2 * uplusv) / 2;

                    h = randS.next() * 2 - 1;

                    if (uplusv <= 1) {
                        z = Qlength * h;
                    } else {
                        z = (SQRT2 - Qlength) * h;
                    }

                    u = invSQRT2 * Qlength + z * invSQRT2;
                    v = invSQRT2 * Qlength - z * invSQRT2;

                    w = parent.randS.next();

                    spike = Math.floor(u * nspikes * 0.9999);
                    spikesec = Math.floor(v * nradsec * 0.9999);

                    angle = ((2 * Math.PI) / nspikes) * spike;

                    rad = ir + v * (or - ir);

                    spikeposx = Math.cos(angle) * rad;
                    spikeposy = Math.sin(angle) * rad;

                    x = Math.floor(
                        x1 +
                            spikeposx +
                            Math.cos(angle + HALFPI) * (w - 0.5) * sw
                    );
                    y = Math.floor(
                        y1 +
                            spikeposy +
                            Math.sin(angle + HALFPI) * (w - 0.5) * sw
                    );

                    col = colors[spike][spikesec].map((x) => x / 255);

                    if (
                        x > parent.P_EDGE_LEFT &&
                        x < parent.P_EDGE_RIGHT &&
                        y > parent.P_EDGE_TOP &&
                        y < parent.P_EDGE_BOTTOM
                    ) {
                        loc = Math.floor(y * parent.P_WIDTH + x) * 3;

                        parent.buffer[loc] =
                            this.negOp * parent.buffer[loc] + this.op * col[0];
                        parent.buffer[loc + 1] =
                            this.negOp * parent.buffer[loc + 1] +
                            this.op * col[1];
                        parent.buffer[loc + 2] =
                            this.negOp * parent.buffer[loc + 2] +
                            this.op * col[2];
                    }
                    this.dotCount = this.dotCount + 1;
                }

                return this.dotCount >= this.maxNumDots - 1;
            },
        };
    }
}
