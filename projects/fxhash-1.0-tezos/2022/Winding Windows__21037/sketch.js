//Created by kusakari

let _palette;
let _aryPalette = [
  ["0085b6","ec7287","fff687","00afb0","003151","ffffff","f4cac9","32936F"]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 255);
  
  setObject();
}

let _minW;
let _rectangle;
let _bgCol;
let _isVariedCol;
let _numInner;

function setObject() {
  randomSeed(10000 * fxrand());
  _minW = min(width, height) * 0.9;

  let tempPalette = random(_aryPalette);
  _palette = [];
  for (let i = 0; i < tempPalette.length; i++) {
    _palette[i] = tempPalette[i];
  }
  shuffle(_palette, true);
  while (_palette.length > 4) {
    _palette.pop();
  }
  _bgCol = color(random([10, 70]));

  let w = _minW * 1;
  let h = _minW * 1;
  let posXy = createVector(0, 0);//center vector
  let maxLevel = random([3, 3 , 4, 4, 4, 4, 5, 5, 5, 5, 6]);
  _numInner = random([6, 8, 8, 10, 10, 10, 10, 12]);
  _rectangle = new Rectangle(posXy, w, h, 1, maxLevel);

  strokeWeight(_minW / 550);
  strokeCap(SQUARE);
  noFill();

  _isVariedCol = false;
  if (fxrand() < 0.05) { _isVariedCol = true; }
}

class Rectangle {
  constructor(posXy, w, h, level, maxLevel) {
    this.posXy = posXy;//center vector
    this.w = w;
    this.h = h;
    this.level = level;
    this.maxLevel = maxLevel;
    this.childGapSpace = _minW * 0.04;
    this.hasChildren == false;
    if (this.level < this.maxLevel && fxrand() < (0.95**this.level - (this.level - 1) * 0.02)) {
      this.hasChildren = true;
      this.splitRectangle();
    } else {
      this.CurveLine = new CurveLine(this.posXy, this.w, this.h, this.level);
    }
  }

  splitRectangle() {
    let splitDirection;
    if (this.level >= 4) {
      if (this.w > this.h) {
        splitDirection = "vertical";
      } else if (this.w < this.h) {
        splitDirection = "horisontal";
      } else {
        splitDirection = random(["horisontal", "vertical"]);
      }
    } else {
      splitDirection = random(["horisontal", "vertical"]);
    }
    let newPosXy;
    if (splitDirection == "horisontal") {
      newPosXy = createVector(this.posXy.x, this.posXy.y - this.h / 4 - this.childGapSpace / 4);
      this.children_1 = new Rectangle(newPosXy, this.w, this.h / 2 - this.childGapSpace / 2, this.level + 1, this.maxLevel);
      newPosXy = createVector(this.posXy.x, this.posXy.y + this.h / 4 + this.childGapSpace / 4);
      this.children_2 = new Rectangle(newPosXy, this.w, this.h / 2 - this.childGapSpace / 2, this.level + 1, this.maxLevel);
    } else if (splitDirection == "vertical") {
      newPosXy = createVector(this.posXy.x - this.w / 4 - this.childGapSpace / 4, this.posXy.y);
      this.children_1 = new Rectangle(newPosXy, this.w / 2 - this.childGapSpace / 2, this.h, this.level + 1, this.maxLevel);
      newPosXy = createVector(this.posXy.x + this.w / 4 + this.childGapSpace / 4, this.posXy.y);
      this.children_2 = new Rectangle(newPosXy, this.w / 2 - this.childGapSpace / 2, this.h, this.level + 1, this.maxLevel);
    }
  }

  draw() {
    if (this.hasChildren == true) {
      this.children_1.draw();
      this.children_2.draw();
    } else {
      push();
      translate(this.posXy.x, this.posXy.y);
      this.CurveLine.draw();
      pop();
    }
  }
}

class CurveLine {
  constructor(posXy, w, h, level) {
    this.posXy = posXy;//center vector
    this.w = w;
    this.h = h;
    this.level = level;
    if (this.w < this.h) { this.direction = "vertical"; }
    else if (this.w > this.h) { this.direction = "horizontal"; }
    else { this.direction = random(["horisontal", "vertical"]); }
    if (this.direction == "vertical") {
      let new_w = this.h;
      let new_h = this.w;
      this.w = new_w;
      this.h = new_h;
    }

    this.stepX = _minW / 200 / 1.5;
    this.xiMin = Math.round(-this.w / 2 / this.stepX);
    this.xiMax = -this.xiMin;

    this.ampY = this.h;

    this.numFunction = 4;
    this.aryFunctionParameter = [];
    this.aryFunctionParameter_2 = [];
    for (let i = 0; i < this.numFunction; i++) {
      this.aryFunctionParameter[i] = [
        fxrand() * 2 * PI, //init
        fxrand() * (3 - 1) + 1,//random(1, 3), //freq
        (fxrand() * (15 - 1) + 1) * 0.0003 * random([-1, 1]),//random(1, 15) * 0.0003 * random([-1, 1]), //stepSpeed
        (fxrand() * (3 - 1) + 1) * 0.01,//random(1, 3) * 0.01, //timeSpeed
        int(random([1, 3])) //order of function
      ];

      this.aryFunctionParameter_2[i] = [
        this.aryFunctionParameter[i][0],
        this.aryFunctionParameter[i][1],
        this.aryFunctionParameter[i][2] * (-1),
        this.aryFunctionParameter[i][3],
        this.aryFunctionParameter[i][4]
      ];
    }

    //Object_1

    let numBlock;
    if (this.level >= 6) {
      numBlock = int((fxrand() * (3 - 1) + 1)) * 2;// random(1, 3)) * 2;
    } else if (this.level >= 5) {
      numBlock = int((fxrand() * (4 - 1) + 1)) * 2;//  random(1, 4)) * 2;
    } else {
      numBlock = int((fxrand() * (6 - 1) + 1)) * 2;// random(1, 6)) * 2;
    }
    this.numSeriesXi = int((this.xiMax - this.xiMin) / numBlock);
    this.aryChildren = [];

    let aryXi = [];
    let xi = 0;
    aryXi.unshift(xi); // xi=0
    xi--;
    let col;
    let col2;
    while (xi >= this.xiMin) { // minXi <= xi <= -1
      aryXi.unshift(xi);
      if (xi % this.numSeriesXi == 0) {
        col = color("#" + random(_palette));
        if (this.aryChildren.length > 0) {
          while (red(this.aryChildren[0].col) == red(col) && green(this.aryChildren[0].col) == green(col) && blue(this.aryChildren[0].col) == blue(col)) {
            col = color("#" + random(_palette));
          }
        }
        col2 = color("#" + random(_palette));
        while (red(col) == red(col2) && green(col) == green(col2) && blue(col) == blue(col2)) {
          col2 = color("#" + random(_palette));
        }
        this.aryChildren.unshift(new ChildCurveLine(aryXi, this.stepX, this.ampY, this.aryFunctionParameter, col, col2, this.id, this.h, false));
        aryXi = [];
        aryXi.unshift(xi);
      }
      xi--;
    }

    aryXi = [];
    xi = 0;
    aryXi.push(xi); // xi=0
    xi++;
    while (xi <= this.xiMax) { // 1 <= xi <= xiMax
      aryXi.push(xi);
      if (xi % this.numSeriesXi == 0) {
        col = color("#" + random(_palette));
        if (this.aryChildren.length > 0) {
          while (red(this.aryChildren[this.aryChildren.length-1].col) == red(col) && green(this.aryChildren[this.aryChildren.length-1].col) == green(col) && blue(this.aryChildren[this.aryChildren.length-1].col) == blue(col)) {
            col = color("#" + random(_palette));
          }
        }
        col2 = color("#" + random(_palette));
        while (red(col) == red(col2) && green(col) == green(col2) && blue(col) == blue(col2)) {
          col2 = color("#" + random(_palette));
        }
        this.aryChildren.push(new ChildCurveLine(aryXi, this.stepX, this.ampY, this.aryFunctionParameter, col, col2, this.id, this.h, false));
        aryXi = [];
        aryXi.push(xi);
      }
      xi++;
    }

    //Object_2

    if (this.level >= 6) {
      numBlock = int((fxrand() * (3 - 1) + 1)) * 2;// random(1, 3)) * 2;
    } else if (this.level >= 5) {
      numBlock = int((fxrand() * (4 - 1) + 1)) * 2;//  random(1, 4)) * 2;
    } else {
      numBlock = int((fxrand() * (6 - 1) + 1)) * 2;// random(1, 6)) * 2;
    }
    this.numSeriesXi = int((this.xiMax - this.xiMin) / numBlock);
    this.aryChildren_2 = [];

    aryXi = [];
    xi = 0;
    aryXi.unshift(xi); // xi=0
    xi--;
    while (xi >= this.xiMin) { // minXi <= xi <= -1
      aryXi.unshift(xi);
      if (xi % this.numSeriesXi == 0) {
        col = color("#" + random(_palette));
        if (this.aryChildren_2.length > 0) {
          while (red(this.aryChildren_2[0].col) == red(col) && green(this.aryChildren_2[0].col) == green(col) && blue(this.aryChildren_2[0].col) == blue(col)) {
            col = color("#" + random(_palette));
          }
        }
        col2 = color("#" + random(_palette));
        while (red(col) == red(col2) && green(col) == green(col2) && blue(col) == blue(col2)) {
          col2 = color("#" + random(_palette));
        }
        this.aryChildren_2.unshift(new ChildCurveLine(aryXi, this.stepX, this.ampY, this.aryFunctionParameter_2, col, col2, this.id, this.h, true));
        aryXi = [];
        aryXi.unshift(xi);
      }
      xi--;
    }

    aryXi = [];
    xi = 0;
    aryXi.push(xi); // xi=0
    xi++;
    while (xi <= this.xiMax) { // 1 <= xi <= xiMax
      aryXi.push(xi);
      if (xi % this.numSeriesXi == 0) {
        col = color("#" + random(_palette));
        if (this.aryChildren_2.length > 0) {
          while (red(this.aryChildren_2[this.aryChildren_2.length-1].col) == red(col) && green(this.aryChildren_2[this.aryChildren_2.length-1].col) == green(col) && blue(this.aryChildren_2[this.aryChildren_2.length-1].col) == blue(col)) {
            col = color("#" + random(_palette));
          }
        }
        col2 = color("#" + random(_palette));
        while (red(col) == red(col2) && green(col) == green(col2) && blue(col) == blue(col2)) {
          col2 = color("#" + random(_palette));
        }
        this.aryChildren_2.push(new ChildCurveLine(aryXi, this.stepX, this.ampY, this.aryFunctionParameter_2, col, col2, this.id, this.h, true));
        aryXi = [];
        aryXi.push(xi);
      }
      xi++;
    }

    this.col = color("#" + random(_palette));
    this.col2 = color("#" + random(_palette));
    while (red(this.col) == red(this.col2) && green(this.col) == green(this.col2) && blue(this.col) == blue(this.col2)) {
      this.col2 = color("#" + random(_palette));
    }
  }

  draw() {
    push();

    if (this.direction == "vertical") {
      rotate(PI / 2);
    }
    
    push();
    translate(0, - this.h / 2);
    stroke(this.col);
    for (let i = 0; i < this.aryChildren.length; i++) {
      this.aryChildren[i].draw();
    }
    pop();

    push();
    translate(0, this.h / 2);
    rotate(PI);
    stroke(this.col2);
    for (let i = 0; i < this.aryChildren_2.length; i++) {
      this.aryChildren_2[i].draw();
    }
    pop();

    pop();
  }
}

class ChildCurveLine {
  constructor(aryXi, stepX, ampY, aryFunctionParameter, col, col2, id, h, inverse) {
    this.aryXi = aryXi;
    this.stepX = stepX;
    this.ampY = ampY;
    this.aryFunctionParameter = aryFunctionParameter;
    this.numFunction = this.aryFunctionParameter.length;
    this.col = col;
    this.col2 = col2;
    this.id = id;
    this.h = h;
    this.inverse = inverse;
    this.numInner = _numInner;
    this.count = 0;
    this.areaX = random(["left", "right"]);
    this.areaY = random(["upper", "lower"]);
  }

  draw() {
    let aryVal = [];
    for (let i = 0; i < this.aryXi.length; i++) {
      let xi = this.aryXi[i];
      let val = calcVal(xi, this.aryFunctionParameter, this.numFunction, this.count, this.inverse);
      aryVal[xi] = val;
    }

    let aryAryX = [];
    let aryAryY = [];
    let startInner_i = 2;

    if (this.areaY == "lower") {
      for (let i = 0; i < this.numInner; i++) {
        aryAryX[i] = [];
        aryAryY[i] = [];
        let newAmpY = this.ampY * (1 - i / this.numInner);
  
        if (this.areaX == "left") {
          let lastXi = this.aryXi[this.aryXi.length-1 - startInner_i] - (this.aryXi[this.aryXi.length-1 - startInner_i] - this.aryXi[startInner_i]) / this.numInner * i;
          let val;

          let xi = this.aryXi[startInner_i];
          while (xi < lastXi) {
            aryAryX[i].push(xi);
            val = aryVal[xi];
            aryAryY[i].push(val * newAmpY);
  
            xi++;
          }

          xi = lastXi;
          aryAryX[i].push(xi);
          val = calcVal(xi, this.aryFunctionParameter, this.numFunction, this.count, this.inverse);
          aryAryY[i].push(val * newAmpY);

          aryAryX[i].push(xi);
          aryAryY[i].push(0);

          if (i == 0) {
            xi = this.aryXi[startInner_i];
            aryAryX[i].unshift(xi);
            aryAryY[i].unshift(0);
          }
  
        } else if (this.areaX == "right") {
          let minXi = this.aryXi[startInner_i] + (this.aryXi[this.aryXi.length-1 - startInner_i] - this.aryXi[startInner_i]) / this.numInner * i;
          let val;

          let xi = this.aryXi[this.aryXi.length-1 - startInner_i];
          while (xi > minXi) {
            aryAryX[i].unshift(xi);
            val = aryVal[xi];
            aryAryY[i].unshift(val * newAmpY);
  
            xi--;
          }

          xi = minXi;
          aryAryX[i].unshift(xi);
          val = calcVal(xi, this.aryFunctionParameter, this.numFunction, this.count, this.inverse);
          aryAryY[i].unshift(val * newAmpY);

          aryAryX[i].unshift(xi);
          aryAryY[i].unshift(0);

          if (i == 0) {
            xi = this.aryXi[this.aryXi.length-1 - startInner_i];
            aryAryX[i].unshift(xi);
            aryAryY[i].unshift(0);
          }
        }
      }
    } else if (this.areaY == "upper") {
      for (let i = 0; i < this.numInner; i++) {
        aryAryX[i] = [];
        aryAryY[i] = [];
        let newAmpY = this.ampY * i / this.numInner;
  
        if (this.areaX == "left") {
          let lastXi = this.aryXi[this.aryXi.length-1 - startInner_i] - (this.aryXi[this.aryXi.length-1 - startInner_i] - this.aryXi[startInner_i]) / this.numInner * i;
          let val;
          let xi = this.aryXi[startInner_i];
          while (xi < lastXi) {
            aryAryX[i].push(xi);
            val = aryVal[xi];
            aryAryY[i].push(val * newAmpY);
  
            xi++;
          }

          xi = lastXi;
          aryAryX[i].push(xi);
          val = calcVal(xi, this.aryFunctionParameter, this.numFunction, this.count, this.inverse);
          aryAryY[i].push(val * newAmpY);

          aryAryX[i].push(xi);
          aryAryY[i].push(val * this.ampY);

          if (i == 0) {
            xi = int(lastXi);
            while (xi >= this.aryXi[startInner_i]) {
              aryAryX[i].push(xi);
              val = aryVal[xi];
              aryAryY[i].push(val * this.ampY);
    
              xi--;
            }
          }

        } else if (this.areaX == "right") {
          let minXi = this.aryXi[startInner_i] + (this.aryXi[this.aryXi.length-1 - startInner_i] - this.aryXi[startInner_i]) / this.numInner * i;
          let val;

          let xi = this.aryXi[this.aryXi.length-1 - startInner_i];
          while (xi > minXi) {
            aryAryX[i].unshift(xi);
            val = aryVal[xi];
            aryAryY[i].unshift(val * newAmpY);
  
            xi--;
          }

          xi = minXi;
          aryAryX[i].unshift(xi);
          val = calcVal(xi, this.aryFunctionParameter, this.numFunction, this.count, this.inverse);
          aryAryY[i].unshift(val * newAmpY);

          aryAryX[i].unshift(xi);
          aryAryY[i].unshift(val * this.ampY);

          if (i == 0) {
            xi = this.aryXi[this.aryXi.length-1 - startInner_i];
            aryAryX[i].push(xi);
            val = aryVal[xi];
            aryAryY[i].push(val * this.ampY);
          }
        }
      }
    }

    if (_isVariedCol == true) { stroke(this.col); }

    for (let i = 0; i < this.numInner; i++) {
      beginShape();
      for (let j = 0; j < aryAryX[i].length; j++) {
        vertex(this.stepX * aryAryX[i][j], aryAryY[i][j]);
      }
      endShape();
    }

    this.count++;
  }
}

function calcVal(xi, aryFunctionParameter, numFunction, count, inverse) {
  let val = 0;
  for (let j = 0; j < numFunction; j++) {
    let tempVal = sin(aryFunctionParameter[j][0] + 2 * PI * aryFunctionParameter[j][1] * aryFunctionParameter[j][2] * xi + aryFunctionParameter[j][3] * count)**aryFunctionParameter[j][4];
    tempVal = tempVal * 0.5 + 0.5; //0 to 1
    val += tempVal;
  }
  val /= numFunction; //0 to 1
  if (inverse == true) {
    val = 1 - val;
  }
  val = val * 0.95;

  return val;
}

function draw() {
  translate(width/2, height/2);
  background(_bgCol);

  _rectangle.draw();
}