var dotArray = [],
    effectiveRadius = 0,
    myObj = { nums: 150, numsName: "", randPos: { x: 0, y: 0, name: "Init" }, isStoped: !1, colorBg: "", colorsDots: [], colorsBgName: "", colorsDotsName: "", displaySize: 2, displaySizeName: "", speed: 25, speedName: "" };
class Dot {
    constructor() {
        (this.position = createVector(0, 0)),
            (this.targetPosition = createVector(0, 0)),
            (this.relayPointPosition = createVector(0, 0)),
            (this.startPointPosition = createVector(0, 0)),
            (this.endPointPosition = createVector(0, 0)),
            (this.displayColor = color(255)),
            (this.displaySize = 5),
            (this.currentMoveFrameCount = 0),
            (this.relayPointRatio = 0),
            (this.startPointRatio = 0),
            (this.endPointRatio = 0),
            (this.isMoving = !1);
    }
    setTarget(t, o) {
        var i, s;
        this.isMoving && this.position.set(this.endPointPosition.x, this.endPointPosition.y),
            this.targetPosition.set(t, o),
            (this.currentMoveFrameCount = 0),
            (this.isMoving = !0),
            (i = t - this.position.x),
            (s = o - this.position.y),
            Math.random() < 0.5
                ? ((this.relayPointRatio = abs(i) / (abs(i) + abs(s))), this.relayPointPosition.set(this.position.x + i, this.position.y))
                : ((this.relayPointRatio = abs(s) / (abs(i) + abs(s))), this.relayPointPosition.set(this.position.x, this.position.y + s));
    }
    update() {
        var t, o, i, s, e;
        this.isMoving &&
            (this.currentMoveFrameCount++,
            (this.startPointRatio = this.getStartPointRatio()),
            (this.endPointRatio = this.getEndPointRatio()),
            this.startPointRatio < this.relayPointRatio
                ? ((i = this.startPointRatio / this.relayPointRatio), (s = this.position.x + i * (this.relayPointPosition.x - this.position.x)), (e = this.position.y + i * (this.relayPointPosition.y - this.position.y)))
                : ((i = (this.startPointRatio - this.relayPointRatio) / (1 - this.relayPointRatio)),
                  (s = this.relayPointPosition.x + i * (this.targetPosition.x - this.relayPointPosition.x)),
                  (e = this.relayPointPosition.y + i * (this.targetPosition.y - this.relayPointPosition.y))),
            this.startPointPosition.set(s, e),
            this.endPointRatio < this.relayPointRatio
                ? ((i = this.endPointRatio / this.relayPointRatio), (t = this.position.x + i * (this.relayPointPosition.x - this.position.x)), (o = this.position.y + i * (this.relayPointPosition.y - this.position.y)))
                : ((i = (this.endPointRatio - this.relayPointRatio) / (1 - this.relayPointRatio)),
                  (t = this.relayPointPosition.x + i * (this.targetPosition.x - this.relayPointPosition.x)),
                  (o = this.relayPointPosition.y + i * (this.targetPosition.y - this.relayPointPosition.y))),
            this.endPointPosition.set(t, o),
            this.currentMoveFrameCount >= this.moveDurationFrameCount && (this.position.set(this.targetPosition.x, this.targetPosition.y), (this.isMoving = !1)));
    }
    display() {
        this.isMoving
            ? (strokeWeight(this.displaySize),
              stroke(this.displayColor),
              noFill(),
              beginShape(),
              vertex(this.startPointPosition.x, this.startPointPosition.y),
              this.startPointRatio < this.relayPointRatio && this.relayPointRatio < this.endPointRatio && vertex(this.relayPointPosition.x, this.relayPointPosition.y),
              vertex(this.endPointPosition.x, this.endPointPosition.y),
              endShape())
            : (noStroke(), fill(this.displayColor), ellipse(this.position.x, this.position.y, this.displaySize, this.displaySize));
    }
    getMoveProgressRatio() {
        return min(1, this.currentMoveFrameCount / this.moveDurationFrameCount);
    }
    getStartPointRatio() {
        return 1 - Math.pow(this.getMoveProgressRatio() - 1, 2);
    }
    getEndPointRatio() {
        return 1 - Math.pow(this.getMoveProgressRatio() - 1, 4);
    }
    getDistance(t, o) {
        return dist(t, o, this.position.x, this.position.y);
    }
}
const randInt = function (t, o) {
        return (t = Math.ceil(t)), (o = Math.floor(o)), Math.floor(Math.random() * (o - t)) + t;
    },
    setColorBg = function () {
        let t = fxrand(),
            o = "#000000,#1d013d,#001255,#241100,#0d2404,#262323".split(",").map((t) => t);
        t <= 0.16
            ? ((myObj.colorBg = o[0]), (myObj.colorsBgName = "Carbon"))
            : t <= 0.32
            ? ((myObj.colorBg = o[1]), (myObj.colorsBgName = "Manganese"))
            : t <= 0.48
            ? ((myObj.colorBg = o[2]), (myObj.colorsBgName = "Cobalt"))
            : t <= 0.64
            ? ((myObj.colorBg = o[3]), (myObj.colorsBgName = "Iron"))
            : t <= 0.82
            ? ((myObj.colorBg = o[4]), (myObj.colorsBgName = "Nickel"))
            : ((myObj.colorBg = o[5]), (myObj.colorsBgName = "Lead"));
    },
    setColorDots = function () {
        let t = fxrand();
        t <= 0.25
            ? ((myObj.colorsDots = "#00BFFF,#ff3def,#3afc71,#000080,#FFFFFF,#00FFFF".split(",").map((t) => t)), (myObj.colorsDotsName = "Aurora"))
            : t <= 0.5
            ? ((myObj.colorsDots = "#a6fff9,#b0a6ff,#a6ffd3,#d0ffa6,#fff2a6,#ffaaa6".split(",").map((t) => t)), (myObj.colorsDotsName = "Bubble Gum"))
            : t <= 0.75
            ? ((myObj.colorsDots = "#a8a7a7,#636161,#a9d9cf,#05b5f5,#ff000d,#fbff00".split(",").map((t) => t)), (myObj.colorsDotsName = "Lego Bricks"))
            : ((myObj.colorsDots = "#8B4513,#F5DEB3,#A9A9A9,#556B2F,#CD853F,#FFFAFA".split(",").map((t) => t)), (myObj.colorsDotsName = "Clay"));
    },
    setDisplaySize = function () {
        let t = fxrand();
        t <= 0.33 ? ((myObj.displaySize = 2), (myObj.displaySizeName = "Tiny 🤏🏽")) : t <= 0.64 ? ((myObj.displaySize = 4), (myObj.displaySizeName = "Medium 🤙🏽")) : ((myObj.displaySize = 6), (myObj.displaySizeName = "Large 🙌🏽"));
    },
    setSpeed = function () {
        let t = fxrand();
        t <= 0.33 ? ((myObj.speed = 25), (myObj.speedName = "Keep calm 🐌")) : t <= 0.64 ? ((myObj.speed = 50), (myObj.speedName = "I'm going! 🚶🏽‍♂️")) : ((myObj.speed = 100), (myObj.speedName = "To the moon! 🚀"));
    },
    setNums = function () {
        let t = fxrand();
        t <= 0.33 ? ((myObj.nums = 150), (myObj.numsName = "150")) : t <= 0.64 ? ((myObj.nums = 300), (myObj.numsName = "300")) : ((myObj.nums = 600), (myObj.numsName = "600"));
    },
    setLocation = function () {
        let t = window.innerWidth - 16,
            o = window.innerHeight - 20;
        (myObj.randPos.x = t * fxrand()), (myObj.randPos.y = o * fxrand());
        let i = 0,
            s = 0;
        (s = myObj.randPos.x < 0.333 * t ? 0 : myObj.randPos.x < 0.666 * t ? 1 : 2),
            (i = myObj.randPos.y < 0.333 * o ? 0 : myObj.randPos.y < 0.666 * o ? 1 : 2),
            (myObj.randPos.name = [
                ["Northwest ↖️", "North ⬆️", "Northeast ↗️"],
                ["West ⬅️", "Center ⏺", "East ➡️"],
                ["Southwest ↙️", "South ⬇️", "Southeast ↘️"],
            ][i][s]);
    },
    setNegative = function () {
        myObj.isNegative = fxrand() > 0.95;
    },
    createRandomDot = function () {
        let t;
        return (t = new Dot()), (t.position = createVector(random(width), random(height))), (t.displaySize = myObj.displaySize), (t.displayColor = color(myObj.colorsDots[randInt(0, 6)])), t;
    },
    createRandomColor = function (t, o) {
        var i;
        return colorMode(HSB), (i = color(random(360), t, o)), colorMode(RGB), i;
    },
    processDots = function (t, o, i) {
        var s, e, a;
        for (e = 0, a = dotArray.length; e < a; e++) (s = dotArray[e]).isMoving || (Math.random() < i && t(s, o));
    },
    awayFromMouse = function (t, o) {
        t.getDistance(myObj.randPos.x, myObj.randPos.y) < o && t.setTarget(random(width), random(height));
    },
    attractToMouse = function (t, o) {
        var i, s, e, a;
        (s = Math.random() * o),
            (i = Math.random() * TWO_PI),
            (e = myObj.randPos.x + s * cos(i)) < 0 ? (e = -e) : e > width && (e = width - (e - width)),
            (a = myObj.randPos.y + s * sin(i)) < 0 ? (a = -a) : a > height && (a = height - (a - height)),
            t.setTarget(e, a);
    };
function setup() {
    for (createCanvas(windowWidth - 16, windowHeight - 20), myObj.isNegative && document.getElementsByTagName("canvas")[0].classList.add("negative"), i = 0; i < myObj.nums; i++) dotArray.push(createRandomDot());
    effectiveRadius = 0.25 * width;
}
function draw() {
    background(color(myObj.colorBg));
    for (let t = 0; t < dotArray.length; t++) dotArray[t].update(), dotArray[t].display();
    processDots(awayFromMouse, effectiveRadius, 1), processDots(attractToMouse, effectiveRadius, 0.01);
}
function keyPressed() {
    "o" === key && ((myObj.isStoped = !myObj.isStoped), myObj.isStoped ? noLoop() : loop());
}
setColorBg(),
    setColorDots(),
    setDisplaySize(),
    setSpeed(),
    setNums(),
    setLocation(),
    (myObj.isNegative = fxrand() > 0.95),
    (Dot.prototype.moveDurationFrameCount = myObj.speed),
    (window.$fxhashFeatures = {
        Particles: myObj.nums,
        "Dots Colors Palette": myObj.colorsDotsName,
        "Background Color": myObj.colorsBgName,
        "Dots Size": myObj.displaySizeName,
        Speed: myObj.speedName,
        Location: myObj.randPos.name,
        Negative: myObj.isNegative ? "🟢 ON" : "🔴 OFF",
    });
