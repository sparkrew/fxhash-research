"use strict";
let w = 1024;
let a = [];
let p = [];
let rec = [];
let limit;
let thetaMode;
let mainTheta;
let WhiteBGOn = false;
let nscl = 0.0008;
let oneSidedCut = 0;
let probOfDivison;
function setup() {
    preDraw();
    for (let i = 0; i < 100 * f(); i++)
        f();
    thetaMode = 1 + (7 * f()) | 0;
    for (let i = 0; i < 100 * f(); i++)
        f();
    mainTheta = PI * f();
    for (let i = 0; i < 100 * f(); i++)
        f();
    if (f() < .2) {
        for (let i = 0; i < 100 * f(); i++)
            f();
        if (f() < .5)
            oneSidedCut = 1;
        else
            oneSidedCut = 2;
    }
    for (let i = 0; i < 100 * f(); i++)
        f();
    if (f() < .5)
        probOfDivison = 1;
    else {
        for (let i = 0; i < 100 * f(); i++)
            f();
        probOfDivison = .5 + .5 * f();
    }
    for (let i = 0; i < 100 * f(); i++)
        f();
    if (f() < .5)
        WhiteBGOn = true;
    for (let i = 0; i < 100 * f(); i++)
        f();
    while (true) {
        p = [[w * f(), w * f()], [w * f(), w * f()], [w * f(), w * f()]];
        a = findCircle(p[0][0], p[0][1], p[1][0], p[1][1], p[2][0], p[2][1]);
        if (a[2] * 2 < w)
            break;
    }
    limit = w / 6;
    noFill();
    stroke(400);
    genRects(w / 2, w / 2, w, w);
    noLoop();
}
function draw() {
    background(0);
    if (WhiteBGOn)
        background('#f4f5e2');
    for (let r of rec)
        r.show();
    genCircle();
    postDraw();
}
function genCircle() {
    if (WhiteBGOn) {
        fill('#f4f5e2');
        stroke(0);
    }
    else {
        stroke(100);
        fill(0);
    }
    for (let i = 0; i < 100 * f(); i++)
        f();
    let i = (rec.length * f()) | 0;
    for (let k = 0; k < 100 * f(); k++)
        f();
    if (f() < 0.33)
        a[0] = rec[i].x - rec[i].wi / 2;
    else if (f() < 0.5)
        a[0] = rec[i].x + rec[i].wi / 2;
    else
        a[0] = rec[i].x;
    for (let i = 0; i < 100 * f(); i++)
        f();
    let j = (rec.length * f()) | 0;
    for (let k = 0; k < 100 * f(); k++)
        f();
    if (f() < 0.5)
        a[1] = rec[j].y - rec[j].he / 2;
    else if (f() < .5)
        a[1] = rec[j].y + rec[j].he / 2;
    else
        a[1] = rec[j].y;
    push();
    noStroke();
    circle(a[0], a[1], a[2] * 2);
    pop();
    for (let i = a[2] / 25; i < a[2]; i += a[2] / 25) {
        gcircle(a[0], a[1], i * 2);
    }
    gcircle(a[0], a[1], a[2] * 2);
}
function gcircle(x, y, r) {
    r = r / 2;
    let inc = 0.03;
    let off = 10000 * f();
    let xp;
    let yp;
    let n = map(2 * PI * r, 0, 4 * w, 0, 2000);
    while (true) {
        if (abs(noise(off + n * inc) - noise(off)) < 0.00001)
            break;
        off = 10000 * f();
    }
    for (let i = 0; i < 2 * PI; i += (2 * PI) / n) {
        xp = x + r * cos(i);
        yp = y + r * sin(i);
        let offset = 5 * (noise(off) ** 2);
        off += inc;
        for (let j = 0; j < offset * 5; j++) {
            point(xp - offset + 2 * offset * f(), yp - offset + 2 * offset * f());
        }
    }
}
function genRects(x, y, wi, he) {
    if (wi < limit || he < limit) {
        rec.push(new recta(x, y, wi, he));
    }
    else {
        if (f() < probOfDivison || (wi == w && he == w)) {
            let l = max(wi, he);
            if (wi == he)
                l = f() < .5 ? wi : he;
            if (oneSidedCut == 1)
                l = wi;
            else if (oneSidedCut == 2)
                l = he;
            if (l == wi && oneSidedCut != 2) {
                let newWi = wi * (0.25 + .5 * f());
                let newWi2 = wi - newWi;
                let newX = (x - wi / 2) + newWi / 2;
                let newX2 = (x + wi / 2) - newWi2 / 2;
                genRects(newX, y, newWi, he);
                genRects(newX2, y, newWi2, he);
            }
            else {
                let newHe = he * (0.25 + .5 * f());
                let newHe2 = he - newHe;
                let newY = (y - he / 2) + newHe / 2;
                let newY2 = (y + he / 2) - newHe2 / 2;
                genRects(x, newY, wi, newHe);
                genRects(x, newY2, wi, newHe2);
            }
        }
        else
            rec.push(new recta(x, y, wi, he));
    }
}
class recta {
    constructor(x, y, wi, he) {
        this.x = x;
        this.y = y;
        this.wi = wi;
        this.he = he;
        this.c = 360 * f();
        this.theta = PI * f();
        this.chooseTheta(thetaMode);
    }
    show() {
        if (WhiteBGOn)
            stroke(50 * this.c / 360);
        else
            stroke(50 + 50 * this.c / 360);
        grect(this.x, this.y, this.wi, this.he);
        this.genRotatedLines();
    }
    chooseTheta(j) {
        switch (j) {
            case 1:
                this.theta = PI * f();
                break;
            case 2:
                this.theta = f() < .5 ? 0 : PI / 2;
                break;
            case 3:
                this.theta = mainTheta;
                break;
            case 4:
                this.theta = f() < .5 ? mainTheta : (mainTheta + PI / 2) % (PI);
                break;
            case 5:
                this.theta = PI * noise(this.x * nscl, this.y * nscl);
                break;
            case 6:
                this.theta = (atan((this.y - a[1]) / (this.x - a[0]))) % PI;
                break;
            case 7:
                this.theta = (atan((this.y - a[1]) / (this.x - a[0])) + PI / 2) % PI;
                break;
        }
    }
    genRotatedLines() {
        let n = map((this.wi + this.he), 0, 2 * w, 10, 5);
        if (this.theta == PI / 2) {
            for (let d = 0; d < this.wi / 2; d += n) {
                gline(this.x + d, this.y - this.he / 2, this.x + d, this.y + this.he / 2);
            }
            for (let d = -n; d > -this.wi / 2; d -= n) {
                gline(this.x + d, this.y - this.he / 2, this.x + d, this.y + this.he / 2);
            }
        }
        else {
            for (let dd = 0; dd < 10000; dd += n) {
                let d = dd / sin(PI / 2 - this.theta);
                let ynew = tan(this.theta) * (-this.wi / 2);
                ynew += this.y + d;
                let xnew = (this.he / 2 - d) / (tan(this.theta));
                xnew += this.x;
                if (xnew >= this.x - this.wi / 2 && xnew <= this.x + this.wi / 2) {
                    let newx2 = this.x + (-this.he / 2 - d) / tan(this.theta);
                    if (newx2 >= this.x - this.wi / 2 && newx2 <= this.x + this.wi / 2)
                        gline(newx2, this.y - this.he / 2, xnew, this.y + this.he / 2);
                    else if (newx2 < this.x - this.wi / 2)
                        gline(this.x - this.wi / 2, this.y + d + tan(this.theta) * (-this.wi / 2), xnew, this.y + this.he / 2);
                    else if (newx2 > this.x + this.wi / 2)
                        gline(this.x + this.wi / 2, this.y + d + tan(this.theta) * (+this.wi / 2), xnew, this.y + this.he / 2);
                    else
                        print(1);
                }
                else if (ynew >= this.y - this.he / 2 && ynew <= this.y + this.he / 2) {
                    let newy2 = this.y + d + tan(this.theta) * (this.wi / 2);
                    if (newy2 >= this.y - this.he / 2 && newy2 <= this.y + this.he / 2)
                        gline(this.x + this.wi / 2, newy2, this.x - this.wi / 2, ynew);
                    else if (newy2 > this.y + this.he / 2)
                        gline(this.x + this.wi / 2, newy2, this.x + (this.he / 2 - d) / tan(this.theta), this.y + this.he / 2);
                    else if (newy2 < this.y - this.he / 2)
                        gline(this.x - this.wi / 2, ynew, this.x + (-this.he / 2 - d) / tan(this.theta), this.y - this.he / 2);
                    else
                        print(2);
                }
                else
                    break;
            }
            for (let dd = -n; dd > -10000; dd -= n) {
                let d = dd / sin(PI / 2 - this.theta);
                let ynew = tan(this.theta) * (-this.wi / 2);
                ynew += this.y + d;
                let xnew = (this.he / 2 - d) / (tan(this.theta));
                xnew += this.x;
                if (xnew >= this.x - this.wi / 2 && xnew <= this.x + this.wi / 2) {
                    let newx2 = this.x + (-this.he / 2 - d) / tan(this.theta);
                    if (newx2 >= this.x - this.wi / 2 && newx2 <= this.x + this.wi / 2)
                        gline(newx2, this.y - this.he / 2, xnew, this.y + this.he / 2);
                    else if (newx2 < this.x - this.wi / 2)
                        gline(this.x - this.wi / 2, this.y + d + tan(this.theta) * (-this.wi / 2), xnew, this.y + this.he / 2);
                    else if (newx2 > this.x + this.wi / 2)
                        gline(this.x + this.wi / 2, this.y + d + tan(this.theta) * (+this.wi / 2), xnew, this.y + this.he / 2);
                    else
                        print(1);
                }
                else if (ynew >= this.y - this.he / 2 && ynew <= this.y + this.he / 2) {
                    let newy2 = this.y + d + tan(this.theta) * (this.wi / 2);
                    if (newy2 >= this.y - this.he / 2 && newy2 <= this.y + this.he / 2)
                        gline(this.x + this.wi / 2, newy2, this.x - this.wi / 2, ynew);
                    else if (newy2 > this.y + this.he / 2)
                        gline(this.x + this.wi / 2, newy2, this.x + (this.he / 2 - d) / tan(this.theta), this.y + this.he / 2);
                    else if (newy2 < this.y - this.he / 2)
                        gline(this.x - this.wi / 2, ynew, this.x + (-this.he / 2 - d) / tan(this.theta), this.y - this.he / 2);
                    else
                        print(2);
                }
                else {
                    ynew = tan(this.theta) * (this.wi / 2);
                    ynew += this.y + d;
                    xnew = (this.he / 2 - d) / (tan(this.theta));
                    xnew += this.x;
                    if (xnew >= this.x - this.wi / 2 && xnew <= this.x + this.wi / 2) {
                    }
                    else if (ynew >= this.y - this.he / 2 && ynew <= this.y + this.he / 2) {
                        let newy2 = this.y + d + tan(this.theta) * (-this.wi / 2);
                        if (newy2 >= this.y - this.he / 2 && newy2 <= this.y + this.he / 2)
                            gline(this.x + this.wi / 2, newy2, this.x - this.wi / 2, ynew);
                        else if (newy2 < this.y - this.he / 2)
                            gline(this.x + this.wi / 2, ynew, this.x + (-this.he / 2 - d) / tan(this.theta), this.y - this.he / 2);
                        else
                            print(2);
                    }
                    else
                        break;
                }
            }
        }
    }
}
function grect(x, y, wi, he) {
    gline(x - wi / 2, y - he / 2, x + wi / 2, y - he / 2);
    gline(x + wi / 2, y - he / 2, x + wi / 2, y + he / 2);
    gline(x + wi / 2, y + he / 2, x - wi / 2, y + he / 2);
    gline(x - wi / 2, y + he / 2, x - wi / 2, y - he / 2);
}
function gline(x, y, xx, yy) {
    let inc = 0.03;
    let off = 10000 * f();
    let d = dist(x, y, xx, yy);
    let xp;
    let yp;
    for (let i = 0; i < d; i++) {
        xp = x + (i * (xx - x)) / d;
        if (x != xx)
            yp = y + ((xp - x) * (yy - y)) / (xx - x);
        else
            yp = y + i * (yy - y) / d;
        let offset = 5 * (noise(off) ** 2);
        off += inc;
        for (let j = 0; j < offset * 5; j++) {
            point(xp - offset + 2 * offset * f(), yp - offset + 2 * offset * f());
        }
    }
}
function findCircle(x1, y1, x2, y2, x3, y3) {
    let x12 = x1 - x2;
    let x13 = x1 - x3;
    let y12 = y1 - y2;
    let y13 = y1 - y3;
    let y31 = y3 - y1;
    let y21 = y2 - y1;
    let x31 = x3 - x1;
    let x21 = x2 - x1;
    let sx13 = pow(x1, 2) - pow(x3, 2);
    let sy13 = pow(y1, 2) - pow(y3, 2);
    let sx21 = pow(x2, 2) - pow(x1, 2);
    let sy21 = pow(y2, 2) - pow(y1, 2);
    let f = (sx13 * x12 + sy13 * x12 + sx21 * x13 + sy21 * x13) /
        (2 * (y31 * x12 - y21 * x13));
    let g = (sx13 * y12 + sy13 * y12 + sx21 * y13 + sy21 * y13) /
        (2 * (x31 * y12 - x21 * y13));
    let c = -pow(x1, 2) - pow(y1, 2) - 2 * g * x1 - 2 * f * y1;
    let h = -g;
    let k = -f;
    let sqr_of_r = h * h + k * k - c;
    let r = sqrt(sqr_of_r);
    return [h, k, r];
}
function f() {
    return fxrand();
}
function preDraw() {
    let seed = floor(999999 * f());
    randomSeed(seed);
    noiseSeed(seed);
    for (let i = 0; i < 10000 * f(); i++)
        f();
    let tempcan = createCanvas(w, w);
    tempcan.parent('fullscreen');
    rectMode(CENTER);
    pixelDensity(1);
    colorMode(HSB);
}
function postDraw() {
    print('Rings of Order by Azeem');
    print('twitter.com/azeemstweet');
    print('fxhash.xyz/u/Azeem');
    fxpreview();
}
