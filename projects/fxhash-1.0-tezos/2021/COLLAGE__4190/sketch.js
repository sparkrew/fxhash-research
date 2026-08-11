let refHeight = 1024;
let w;
let h;
let points = [];
let tree;

let border;
let outlineWeight;
let outlineColor = "black";
let outlines = initOutlines();
let treeDepth = initTreeDepth();
let patternGridSteps = initPatternGridSteps();
let globalSeed;

// graphics
let colorGraphics;
let bwGraphics;
let outlinesGraphics;

window.$fxhashFeatures = {
  Outlines: outlines,
  "Quad Tree Depth": treeDepth,
  "Pattern Grid Steps": patternGridSteps,
};

function setup() {
  globalSeed = getSeed();
  windowResized();
  noLoop();
  printFeatures();
}

function draw() {
  randomSeed(globalSeed);
  setupGraphics();
}

function setupGraphics() {
  background("white");

  border = scaledValue(20);
  outlineWeight = scaledValue(1.5);

  colorGraphics = colorCirclesGraphics(
    random(-w, 2 * w),
    random(-h, 2 * h),
    w - 2 * border,
    h - 2 * border
  );
  bwGraphics = bwCirclesGraphics(
    random(-w, 2 * w),
    random(-h, 2 * h),
    w - 2 * border,
    h - 2 * border
  );
  outlinesGraphics = createGraphics(w, h);

  points = randomPoints(20, 140, scaledValue(80));

  tree = new QuadTree(border, border, w - 2 * border, h - 2 * border);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    tree.addPoint(p.x, p.y);
  }

  tree.draw();
  image(outlinesGraphics, 0, 0, w, h);
}

function randomPoints(minPoints, maxPoints, offset) {
  let points = [];
  let p = createVector(w / 2, h / 2);
  let nPoints = floor(random(minPoints, maxPoints));
  for (let i = 0; i < nPoints; i++) {
    p = p.add(offset * random(-1, 1), offset * random(-1, 1));
    points.push(createVector(p.x, p.y));
  }
  return points;
}

function colorCirclesGraphics(cx, cy, w, h) {
  let pg = createGraphics(w, h);
  pg.background("white");
  pg.noFill();
  for (let i = 1; i < 364; i++) {
    let r = (i * w) / 32;
    let sw = random([outlineWeight, w / 64 - outlineWeight]);
    let c = random([
      "lightred",
      "red",
      "darkred",
      "purple",
      "pink",
      "lightblue",
      "blue",
      "darkblue",
      "lightgreen",
      "green",
      "darkgreen",
      "yellow",
      "orange",
      "black",
      "lightgrey",
    ]);
    pg.push();
    pg.stroke(c);
    pg.strokeWeight(sw);
    pg.circle(cx, cy, r);
    pg.pop();
  }

  return pg;
}

function bwCirclesGraphics(cx, cy, w, h) {
  let pg = createGraphics(w, h);
  pg.background("white");
  pg.noFill();
  for (let i = 1; i < 364; i++) {
    let r = (i * w) / 32;
    let sw = outlineWeight;
    pg.push();
    pg.stroke("black");
    pg.strokeWeight(sw);
    pg.circle(cx, cy, r);
    pg.pop();
  }

  return pg;
}

function scaledValue(v) {
  return (h * v) / refHeight;
}

class QuadTree {
  constructor(x, y, w, h) {
    this.level = 0;
    this.isSplit = false;
    this.children = [];
    this.points = [];
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  isInside(x, y) {
    if (
      x >= this.x &&
      x < this.x + this.w &&
      y >= this.y &&
      y < this.y + this.h
    ) {
      return true;
    }
    return false;
  }

  addPoint(x, y) {
    if (this.isSplit == false) {
      if (this.isInside(x, y)) {
        let p = createVector(x, y);
        this.points.push(p);
      }
      if (this.points.length == 4 && this.level < treeDepth) {
        this.split();
      }
    } else {
      for (let i = 0; i < this.children.length; i++) {
        let c = this.children[i];
        c.addPoint(x, y);
      }
    }
  }

  split() {
    let upperLeft = new QuadTree(this.x, this.y, this.w / 2, this.h / 2);
    let upperRight = new QuadTree(
      this.x + this.w / 2,
      this.y,
      this.w / 2,
      this.h / 2
    );
    let lowerLeft = new QuadTree(
      this.x,
      this.y + this.h / 2,
      this.w / 2,
      this.h / 2
    );
    let lowerRight = new QuadTree(
      this.x + this.w / 2,
      this.y + this.h / 2,
      this.w / 2,
      this.h / 2
    );
    this.children = [upperLeft, upperRight, lowerLeft, lowerRight];
    for (let j = 0; j < this.children.length; j++) {
      let c = this.children[j];
      c.level = this.level + 1;
      for (let i = 0; i < this.points.length; i++) {
        let p = this.points[i];
        c.addPoint(p.x, p.y);
      }
    }
    this.points = [];
    this.isSplit = true;
  }

  draw() {
    if (this.isSplit == false) {
      this.fillQuad();
    } else {
      for (let i = 0; i < this.children.length; i++) {
        let c = this.children[i];
        c.draw();
      }
    }

    if (outlines == true && this.level >= treeDepth - 1) {
      this.drawOutline();
    }
  }

  drawOutline() {
    outlinesGraphics.push();
    outlinesGraphics.stroke(outlineColor);
    outlinesGraphics.strokeWeight(outlineWeight);
    outlinesGraphics.noFill();
    outlinesGraphics.rect(this.x, this.y, this.w, this.h);
    outlinesGraphics.pop();
  }

  fillQuad() {
    let dir = random() > 0.5 ? 0 : 1;
    if (dir == 0) {
      // horizontal lines
      let step = this.h / (random() > 0.5 ? 2 : 4);
      for (let y = this.y; y < this.y + this.h; y += step) {
        push();
        noFill();
        image(
          random() > 0.05 ? colorGraphics : bwGraphics,
          this.x,
          y,
          this.w,
          step,
          snapValue(random(0, colorGraphics.width - this.w), colorGraphics.width, patternGridSteps),
          snapValue(random(0, colorGraphics.height - step), colorGraphics.height, patternGridSteps),
          this.w,
          step
        );

        if (outlines == true && this.level >= treeDepth - 1) {
          outlinesGraphics.push();
          outlinesGraphics.stroke(outlineColor);
          outlinesGraphics.strokeWeight(outlineWeight);
          outlinesGraphics.line(this.x, y, this.x + this.w, y);
          outlinesGraphics.pop();
        }
        pop();
      }
    } else {
      // vertical lines
      let step = this.w / (random() > 0.5 ? 2 : 4);
      for (let x = this.x; x < this.x + this.w; x += step) {
        push();
        noFill();
        image(
          random() > 0.05 ? colorGraphics : bwGraphics,
          x,
          this.y,
          step,
          this.h,
          snapValue(random(0, colorGraphics.width - step), colorGraphics.width, patternGridSteps),
          snapValue(random(0, colorGraphics.height - this.h), colorGraphics.height, patternGridSteps),
          step,
          this.h
        );

        if (outlines == true && this.level >= treeDepth - 1) {
          outlinesGraphics.push();
          outlinesGraphics.stroke(outlineColor);
          outlinesGraphics.strokeWeight(outlineWeight);
          outlinesGraphics.line(x, this.y, x, this.y + this.h);
          outlinesGraphics.pop();
        }
        pop();
      }
    }
  }

  drawPoints() {
    if (this.isSplit == false) {
      for (let i = 0; i < this.points.length; i++) {
        let p = this.points[i];
        push();
        noStroke();
        fill("black");
        circle(p.x, p.y, scaledValue(10));
        pop();
      }
    } else {
      for (let i = 0; i < this.children.length; i++) {
        let c = this.children[i];
        c.drawPoints();
      }
    }
  }
}

function snapValue(val, maxVal, stepCount) {
  return maxVal * floor(stepCount * val / maxVal) / stepCount;
}

function windowResized() {
  let canvasSize = min(windowWidth, windowHeight);
  w = canvasSize;
  h = canvasSize;
  resizeCanvas(w, h);
}

function getSeed(n) {
  if (n === undefined) {
    n = Math.floor(fxrand() * pow(2, 32));
  }
  return n;
}

function rand2(a, b) {
  return a + fxrand() * (b - a);
}

function choice(arr) {
  return arr[Math.floor(fxrand() * arr.length)];
}

function initOutlines() {
  return fxrand() < 0.9;
}

function initTreeDepth() {
  if (fxrand() < 0.9) {
    return choice([2, 3, 4]);
  }
  return choice([0, 1]);
}

function initPatternGridSteps() {
  return Math.pow(2, choice([0, 1, 2, 3, 4, 5, 6, 7, 8]));
}

function printFeatures() {
  print("fxhash : ", fxhash);
  print("Random Seed : ", globalSeed);
  print("Outlines : ", outlines);
  print("Quad Tree Depth : ", treeDepth);
  print("Pattern Grid Steps : ", patternGridSteps);
}
