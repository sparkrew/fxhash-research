class Packer {
    constructor(w, h, randO) {
        this.P_WIDTH = w;
        this.P_HEIGHT = h;
        this.Circles = Array();
        this.Lines = Array();
        this.MAX_TRIES = 2000;
        this.randO = randO;
    }

    getRandomPointInsideCanvas(margin) {
        let topb = 0;
        let rightb = 0;
        let bottomb = 0;
        let leftb = 0;
        if (Array.isArray(margin)) {
            [topb, rightb, bottomb, leftb] = margin;
        } else {
            topb = this.P_HEIGHT * margin;
            leftb = this.P_WIDTH * margin;
            rightb = this.P_WIDTH * (1 - margin);
            bottomb = this.P_HEIGHT * (1 - margin);
        }

        const effectiveWidth = rightb - leftb;
        const effectiveHeight = bottomb - topb;

        const x = leftb + randO.next() * effectiveWidth;
        const y = topb + randO.next() * effectiveHeight;

        return [x, y];
    }

    addLine(ls) {
        this.Lines.push(ls);
    }

    addCircle(cs) {
        this.Circles.push(cs);
    }

    findSpaceForCircle(
        radrange,
        bounds,
        dodgeLines = true,
        dodgeCircles = true,
        margin = 0,
        allowShrinkage = false,
        minimumRadius = 0
    ) {
        let topB = 0;
        let rightB = 0;
        let bottomB = 0;
        let leftB = 0;
        if (bounds) {
            [topB, rightB, bottomB, leftB] = bounds;
        }

        let x = -1;
        let y = -1;
        let rad = -1;

        let collides = true;

        let counter = 0;

        let shrinkCounter = 0;

        while (collides && counter < this.MAX_TRIES) {
            x = -1;
            y = -1;
            rad = -1;

            while (
                rad + x > rightB ||
                x - rad < leftB ||
                rad + y > bottomB ||
                y - rad < topB
            ) {
                rad = radrange[0] + randO.next() * (radrange[1] - radrange[0]);
                [x, y] = LayOut.getRandomPointInsideCanvas(0);
            }

            collides = false;
            if (dodgeLines) {
                for (let l = 0; l < this.Lines.length; l++) {
                    const lineObj = this.Lines[l];
                    collides = lineCircle(
                        lineObj.x1,
                        lineObj.y1,
                        lineObj.x2,
                        lineObj.y2,
                        x,
                        y,
                        rad + margin
                    );
                    if (collides) break;
                }
            }

            if (!collides && dodgeCircles) {
                for (let l = 0; l < this.Circles.length; l++) {
                    const circleObj = this.Circles[l];
                    collides = circleCircle(
                        circleObj.x,
                        circleObj.y,
                        circleObj.radius,
                        x,
                        y,
                        rad + margin
                    );
                    if (collides) break;
                }
            }

            counter = counter + 1;

            if (
                counter == this.MAX_TRIES - 2 &&
                collides &&
                rad > minimumRadius
            ) {
                radrange[0] = max(radrange[0] * 0.5, minimumRadius);
                radrange[1] = max(radrange[1] * 0.5, minimumRadius);
                counter = 0;
                shrinkCounter = shrinkCounter + 1;
                if (shrinkCounter > 4) {
                    throw Error("does not fit");
                    return;
                }
            }
        }

        if (counter < this.MAX_TRIES) {
            return [x, y, rad];
        } else {
            throw Error("Did not fit!");
        }
    }

    findSpaceForLine(bounds) {
        let topB = 0;
        let rightB = 0;
        let bottomB = 0;
        let leftB = 0;
        if (bounds) {
            [topB, rightB, bottomB, leftB] = bounds;
        }

        let x1, y1, x2, y2;

        let collides = true;

        let counter = 0;

        while (collides && counter < this.MAX_TRIES) {
            [x1, y1] = LayOut.getRandomPointInsideCanvas(bounds);
            [x2, y2] = LayOut.getRandomPointInsideCanvas(bounds);

            collides = false;

            for (let l = 0; l < this.Circles.length; l++) {
                const circleObj = this.Circles[l];
                collides = lineCircle(
                    x1,
                    y1,
                    x2,
                    y2,
                    circleObj.x,
                    circleObj.y,
                    circleObj.radius
                );
                if (collides) break;
            }

            counter = counter + 1;
        }

        if (counter < this.MAX_TRIES) {
            return [x1, y1, x2, y2];
        } else {
            throw Error("Did not fit!");
        }
    }

    findSpaceForRectangle(
        widthrange,
        heightrange,
        bounds,
        dodgeLines = true,
        dodgleCircles = true
    ) {
        let topB = 0;
        let rightB = 0;
        let bottomB = 0;
        let leftB = 0;
        if (bounds) {
            [topB, rightB, bottomB, leftB] = bounds;
        }

        let x = -1;
        let y = -1;
        let w = -1;
        let h = -1;
        let x1, y1, x2, y2;

        let collides = true;

        let counter = 0;

        while (collides && counter < this.MAX_TRIES) {
            w = -1;
            h = -1;
            while (
                w < widthrange[0] ||
                h < heightrange[0] ||
                x + w > rightB ||
                y + h > bottomB
            ) {
                [x, y] = LayOut.getRandomPointInsideCanvas([
                    topB,
                    rightB - widthrange[0],
                    bottomB - heightrange[0],
                    leftB,
                ]);

                w =
                    widthrange[0] +
                    randO.next() * (widthrange[1] - widthrange[0]);
                h =
                    heightrange[0] +
                    randO.next() * (heightrange[1] - heightrange[0]);
            }

            collides = false;
            for (let l = 0; l < this.Circles.length; l++) {
                const circleObj = this.Circles[l];

                x1 = x;
                y1 = y;
                x2 = x + w;
                y2 = y;
                collides = lineCircle(
                    x1,
                    y1,
                    x2,
                    y2,
                    circleObj.x,
                    circleObj.y,
                    circleObj.radius + 0.01 * P_WIDTH
                );
                if (collides) break;

                x1 = x;
                y1 = y;
                x2 = x;
                y2 = y + h;
                collides = lineCircle(
                    x1,
                    y1,
                    x2,
                    y2,
                    circleObj.x,
                    circleObj.y,
                    circleObj.radius + 0.01 * P_WIDTH
                );
                if (collides) break;

                x1 = x + w;
                y1 = y;
                x2 = x + w;
                y2 = y + h;
                collides = lineCircle(
                    x1,
                    y1,
                    x2,
                    y2,
                    circleObj.x,
                    circleObj.y,
                    circleObj.radius + 0.01 * P_WIDTH
                );
                if (collides) break;

                x1 = x;
                y1 = y + h;
                x2 = x + w;
                y2 = y + h;
                collides = lineCircle(
                    x1,
                    y1,
                    x2,
                    y2,
                    circleObj.x,
                    circleObj.y,
                    circleObj.radius + 0.01 * P_WIDTH
                );
                if (collides) break;
            }

            counter = counter + 1;
        }

        if (counter < this.MAX_TRIES) {
            return [x, y, w, h];
        } else {
            throw Error("Did not fit!");
        }
    }
}

class CircleSpacer {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
}

class LineSpacer {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}
