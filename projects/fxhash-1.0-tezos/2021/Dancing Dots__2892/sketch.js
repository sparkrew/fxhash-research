let size;

let dotsQty = Math.floor(fxrand() * 16 + 20);

let sequenceLength = Math.floor(fxrand() * 5 + 3);


let colorPattern =
  Math.floor(fxrand() * 6) + (fxrand() < 0.05 ? 1 : 0);
// greatly reduce the probability of grey palette
if (!colorPattern) colorPattern = Math.floor(fxrand() * 6) + (fxrand() < 0.05 ? 1 : 0);
if (colorPattern == 6) tz++


let hueOffset = fxrand() * 360;
let colorDist = fxrand() * 120 + 60;
let bicolorThickness = Math.floor(fxrand() * 3 + 1);

let squares = fxrand() < 0.1;

let contourLines = fxrand() < 0.2;

let trails = fxrand() < 0.05;

let scalex = 1;
let scaley = 1;
if (colorPattern != 6) {
  scalex = fxrand() < 0.5 ? -1 : 1;
  scaley = fxrand() < 0.5 ? -1 : 1;
}

let tezosImg;

let allFormulas = [
  v1,
  v2,
  v3,
  v4,
  v5,
  v6,
  v7,
  v8,
  v9,
  v10,
  v11,
  v12,
  v13,
  v14,
  v15,
  v16,
  v17,
  v18,
  v19,
  v20,
  v21,
  v22,
  v23,
  v24,
  v25,
  v26,
  v27,
  v28,
  v29,
  v30,
  // v31,
  // v32,
  // v33,
  // v34,
  // v35,
];

let formulasSequence = []; // = [[v17, v9], [v14, v1], [v13, v5], [v0]];

for (let i = 0; i < sequenceLength; i++) {
  let fs = [];
  let c = Math.floor(fxrand() * 4 + 2);
  for (let j = 0; j < c; j++) {
    fs.push(allFormulas[Math.floor(fxrand() * allFormulas.length)]);
  }
  formulasSequence.push(fs);
}
formulasSequence.push([v0]);

let diamChange = true;
let framesPerFormula = 150;

let formulas = [];
for (let formula of formulasSequence) {
  formulas.push(function (x, y) {
    let p = { x: x, y: y };
    for (let f of formula) {
      p = f(p.x, p.y);
    }
    return p;
  });
}

let startDots;
let inputDots;
let outputDots;
let boundaries = { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 };

let formulaId = 0;
let formula = formulas[formulaId];

let precalcDots = [];

let features = {};
features.Sequence_Length = formulasSequence.length;
features.Palette = ['Monochrome', 'Rainbow', 'Rainbow', 'Rainbow', 'Bicolor', 'Bicolor', 'Tezos Logo'][colorPattern];
features.Grid_Size = dotsQty + 'x' + dotsQty;
features.Dots_Shape = squares ? 'Squares' : 'Circles';
features.Contour_Line = contourLines ? 'Yes' : 'No';
features.Blurry = trails ? 'Yes' : 'No';

window.$fxhashFeatures = features;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  size = min(width, height);
}

function preload() {
  tezosImg = loadImage("tezos.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //pixelDensity(1);
  size = min(width, height);
  tezosImg.resize(dotsQty + 1, dotsQty + 1);
  tezosImg.loadPixels();
  startDots = createDots(-1, 1, dotsQty, -1, 1, dotsQty, 0.8);
  inputDots = startDots;

  precalcDots.push(inputDots);
  for (let f of formulas) {
    precalcDots.push(convertDots(startDots, f));
  }
  outputDots = precalcDots[1];
  fill(255);
  noStroke();
  rectMode(CENTER);
  //noLoop();
}

function draw() {
  blendMode(BLEND);
  if (trails) {
    background(0, 20);
  } else {
    background(0)
  }


  blendMode(SCREEN);

  translate(width / 2, height / 2);
  scale(scalex, scaley);

  let lerpVal = ease((frameCount % framesPerFormula) / framesPerFormula);

  if (lerpVal == 0) {
    formulaId++;
    formulaId %= formulas.length;
    inputDots = outputDots;
    outputDots = precalcDots[formulaId + 1];
  }

  for (let i = 0; i < outputDots.length; i++) {
    fill(outputDots[i].col);
    if (squares) {
      rect(
        (lerp(inputDots[i].x, outputDots[i].x, lerpVal) * size) / 3,
        (lerp(inputDots[i].y, outputDots[i].y, lerpVal) * size) / 3,
        (lerp(inputDots[i].diam, outputDots[i].diam, lerpVal) * size) / 3,
        (lerp(inputDots[i].diam, outputDots[i].diam, lerpVal) * size) / 3
      );
    } else {
      circle(
        (lerp(inputDots[i].x, outputDots[i].x, lerpVal) * size) / 3,
        (lerp(inputDots[i].y, outputDots[i].y, lerpVal) * size) / 3,
        (lerp(inputDots[i].diam, outputDots[i].diam, lerpVal) * size) / 3
      );
    }
  }

  if (contourLines) {
    push();
    noFill();
    stroke(255, 127);
    strokeWeight(size / 200);
    beginShape();
    let i = 0;
    vertex(
      (lerp(inputDots[i].x, outputDots[i].x, lerpVal) * size) / 3,
      (lerp(inputDots[i].y, outputDots[i].y, lerpVal) * size) / 3
    );
    i = dotsQty;
    vertex(
      (lerp(inputDots[i].x, outputDots[i].x, lerpVal) * size) / 3,
      (lerp(inputDots[i].y, outputDots[i].y, lerpVal) * size) / 3
    );
    i = inputDots.length - 1;
    vertex(
      (lerp(inputDots[i].x, outputDots[i].x, lerpVal) * size) / 3,
      (lerp(inputDots[i].y, outputDots[i].y, lerpVal) * size) / 3
    );
    i = inputDots.length - dotsQty - 1;
    vertex(
      (lerp(inputDots[i].x, outputDots[i].x, lerpVal) * size) / 3,
      (lerp(inputDots[i].y, outputDots[i].y, lerpVal) * size) / 3
    );
    endShape(CLOSE);
    pop();
  }
}

function createDots(xmin, xmax, xsteps, ymin, ymax, ysteps, diamRatio = 1) {
  let dots = [];
  let diam = min((xmax - xmin) / xsteps, (ymax - ymin) / ysteps) * diamRatio;
  for (let j = 0; j < ysteps + 1; j++) {
    for (let i = 0; i < xsteps + 1; i++) {
      let x = xmin + (i * (xmax - xmin)) / xsteps;
      let y = ymin + (j * (ymax - ymin)) / ysteps;
      let xn = i / xsteps;
      let yn = j / ysteps;

      // Coloring
      let col;
      if (colorPattern == 0) {
        // grey white
        col = color(150);
      } else if (colorPattern == 1) {
        // rainbow gradient
        col = color(255 - yn * 255, 255 - xn * 255, yn * 255);
      } else if (colorPattern == 2) {
        // circular rainbow
        push();
        colorMode(HSB);
        col = color((dist(0.5, 0.5, xn, yn) * 500 + hueOffset) % 360, 100, 100);
        pop();
      } else if (colorPattern == 3) {
        // radial rainbow
        push();
        colorMode(HSB);
        col = color(
          (360 + (atan2(yn - 0.5, xn - 0.5) * 360) / TWO_PI + hueOffset) % 360,
          dist(0.5, 0.5, xn, yn) * 200,
          100
        );
        pop();
      } else if (colorPattern == 4) {
        // bicolor vert
        push();
        colorMode(HSB);
        col = color(
          Math.floor(i / bicolorThickness) % 2 == 0
            ? hueOffset
            : (hueOffset + colorDist) % 360,
          100,
          100
        );
        pop();
      } else if (colorPattern == 5) {
        // bicolor horiz
        push();
        colorMode(HSB);
        col = color(
          Math.floor(j / bicolorThickness) % 2 == 0
            ? hueOffset
            : (hueOffset + colorDist) % 360,
          100,
          100
        );
        pop();
      } else if (colorPattern == 6) {
        // tezos logo!!! \o/
        push();
        let index = 4 * (i + j * (dotsQty + 1));
        let pix = tezosImg.pixels;
        col = color(pix[index], pix[index + 1], pix[index + 2]);
        pop();
      }

      dots.push({ x: x + 0.0001, y: y + 0.0001, diam: diam, col: col });
    }
  }
  return dots;
}

function convertDots(dots, v) {
  let constrainVal = 8;
  let dotsOut = [];
  for (let dot of dots) {
    let d = v(dot.x, dot.y);
    d.x = constrain(d.x, -constrainVal, constrainVal);
    d.y = constrain(d.y, -constrainVal, constrainVal);
    let r = diamChange ? min(getRatio(dot.x, dot.y, dot.diam, v), 5) : 1;
    dotsOut.push({ x: d.x, y: d.y, diam: dot.diam * r, col: dot.col });
  }
  return dotsOut;
}

function getRatio(x, y, d, v) {
  let p0 = v(x, y);
  let p1 = v(x - d, y);
  let p2 = v(x + d, y);
  let p3 = v(x, y - d);
  let p4 = v(x, y + d);
  let p5 = v(x + d, y + d);
  let p6 = v(x - d, y + d);
  let p7 = v(x + d, y - d);
  let p8 = v(x - d, y - d);

  return (
    min([
      dist(p0.x, p0.y, p1.x, p1.y),
      dist(p0.x, p0.y, p2.x, p2.y),
      dist(p0.x, p0.y, p3.x, p3.y),
      dist(p0.x, p0.y, p4.x, p4.y),
      dist(p0.x, p0.y, p5.x, p5.y),
      dist(p0.x, p0.y, p6.x, p6.y),
      dist(p0.x, p0.y, p7.x, p7.y),
      dist(p0.x, p0.y, p8.x, p8.y),
    ]) / d
  );
}

function createCircle(x, y, r, pts) {
  let path = [];
  for (let i = 0; i < pts + 1; i++) {
    let a = (i * TWO_PI) / pts;
    path.push({ x: x + r * cos(a), y: y + r * sin(a) });
  }
  return path;
}

function ease(x) {
  return -(cos(PI * x) - 1) / 2;
}

//====================================
//    VARIATIONS
//====================================

// Linear
function v0(x, y) {
  return { x: x, y: y };
}

// Sinusoidal
function v1(x, y) {
  return { x: sin(x), y: sin(y) };
}

// Spherical
function v2(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  return { x: x / r ** 2, y: y / r ** 2 };
}

// Swirl
function v3(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  return {
    x: x * sin(r ** 2) - y * cos(r ** 2),
    y: x * cos(r ** 2) + y * sin(r ** 2),
  };
}

// Horseshoe
function v4(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  return { x: ((x - y) * (x + y)) / r, y: (2 * x * y) / r };
}

// Polar
function v5(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return { x: theta / PI, y: r - 1 };
}

// Handkerchief
function v6(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return {
    x: r * sin(theta + r),
    y: r * cos(theta - r),
  };
}

// Heart
function v7(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return {
    x: r * sin(theta * r),
    y: -r * cos(theta * r),
  };
}

// Disc
function v8(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return {
    x: (theta * sin(PI * r)) / PI,
    y: (theta * cos(PI * r)) / PI,
  };
}

// Spiral
function v9(x, y) {
  x *= 4;
  y *= 4;
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return {
    x: (cos(theta) + sin(r)) / r,
    y: (sin(theta) - cos(r)) / r,
  };
}

// Hyperbolic
function v10(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return { x: sin(theta) / r, y: r * cos(theta) };
}

// Diamond
function v11(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return {
    x: sin(theta) * cos(r),
    y: cos(theta) * sin(r),
  };
}

// Ex
function v12(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  let p0 = sin(theta + r);
  let p1 = cos(theta - r);
  return {
    x: (r * (p0 ** 3 + p1 ** 3)) / 1.4,
    y: r * (p0 ** 3 - p1 ** 3),
  };
}

// Julia
function v13(x, y, omega = 0) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return {
    x: sqrt(r) * cos(theta / 2 + omega),
    y: sqrt(r) * sin(theta / 2 + omega),
  };
}

// Bent
function v14(x, y) {
  if (y >= 0) {
    if (x >= 0) {
      return { x: x, y: y };
    } else {
      return { x: 2 * x, y: y };
    }
  } else {
    if (x >= 0) {
      return { x: x, y: y / 2 };
    } else {
      return { x: 2 * x + 0.5, y: y / 2 };
    }
  }
}

// Wave
function v15(x, y, b = 0.1, c = 0.4, e = 0.6, f = 0.5) {
  return { x: x + b * sin(y / c ** 2), y: y + e * sin(x / f ** 2) };
}

// Fisheye
function v16(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  return { x: (2 * y) / (r + 1), y: (2 * x) / (r + 1) };
}

// Popcorn
function v17(x, y, c = 0.2, f = 0.2) {
  return { x: x + c * sin(tan(3 * y)), y: y + f * sin(tan(3 * x)) };
}

// Exponential
function v18(x, y) {
  return { x: exp(x - 1) * cos(PI * y), y: exp(x - 1) * sin(PI * y) };
}

// Power
function v19(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  return { x: r ** sin(theta) * cos(theta), y: r ** sin(theta) * sin(theta) };
}

// Cosine
function v20(x, y) {
  return { x: cos(PI * x) * Math.cosh(y), y: -sin(PI * x) * Math.sinh(y) };
}

// Rings
function v21(x, y, c = 0.5) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  let n = ((r + c ** 2) % (2 * c ** 2)) - c ** 2 + r * (1 - c ** 2);
  return { x: n * cos(theta), y: n * sin(theta) };
}

// Fan
function v22(x, y, c = 0.5, f = 3) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  let t = PI * c ** 2;
  if ((theta + f) % t > t / 2)
    return { x: r * cos(theta - t / 2), y: r * sin(theta - t / 2) };
  else return { x: r * cos(theta + t / 2), y: r * sin(theta + t / 2) };
}

// Blob
function v23(x, y, p1_high = 1, p2_low = 0.5, p3_waves = 5) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  let p = p2_low + ((p1_high - p2_low) / 2) * (sin(p3_waves * theta) + 1);
  return { x: r * p * cos(theta), y: r * p * sin(theta) };
}

// PDJ
function v24(x, y, p1 = 2, p2 = 1, p3 = 1, p4 = 1) {
  return {
    x: sin(p1 * y) - cos(p2 * x) + 0.7,
    y: sin(p3 * x) - cos(p4 * y) + 0.7,
  };
}

// Fan 2
function v25(x, y, fan2x = 0.56, fan2y = 0.52) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  let p1 = PI * fan2x ** 2;
  let p2 = fan2y;
  let t = theta + p2 - p1 * Math.trunc((2 * theta * p2) / p1);
  if (t > p1 / 2)
    return { x: r * sin(theta - p1 / 2), y: r * cos(theta - p1 / 2) };
  else return { x: r * sin(theta + p1 / 2), y: r * cos(theta + p1 / 2) };
}

// Rings 2
function v26(x, y, rings2val = 0.5) {
  let r = sqrt(x ** 2 + y ** 2);
  let theta = atan2(y, x);
  let p = rings2val ** 2;
  let t = r - 2 * p * Math.trunc((r + p) / (2 * p)) + r * (1 - p);
  return { x: t * sin(theta), y: t * cos(theta) };
}

// Eyefish
function v27(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  return { x: (2 / (r + 1)) * x, y: (2 / (r + 1)) * y };
}

// Bubble
function v28(x, y) {
  let r = sqrt(x ** 2 + y ** 2);
  return { x: (4 / (r ** 2 + 4)) * x, y: (4 / (r ** 2 + 4)) * y };
}

// Cylinder
function v29(x, y) {
  return { x: sin(x), y: y };
}

// Perspective
function v30(x, y, perspectiveAngle = 1, perspectiveDist = 2) {
  let p = perspectiveDist / (perspectiveDist - y * sin(perspectiveAngle));
  return { x: p * x, y: p * y * cos(perspectiveAngle) };
}

// Noise
function v31(x, y) {
  let psi1 = random();
  let psi2 = random();
  return { x: psi1 * x * cos(TWO_PI * psi2), y: psi1 * y * sin(TWO_PI * psi2) };
}

// JuliaN
function v32(x, y, juliaNPower = 3, juliaNDist = 1) {
  let r = sqrt(x ** 2 + y ** 2);
  let phi = atan2(x, y);
  let psi = random();
  let p3 = Math.trunc(abs(juliaNPower) * psi);
  let t = (phi + TWO_PI * p3) / juliaNPower;
  return {
    x: r ** (juliaNDist / juliaNPower) * cos(t),
    y: r ** (juliaNDist / juliaNPower) * sin(t),
  };
}

// JuliaScope
function v33(x, y, juliaScopePower = 3, juliaScopeDist = 1) {
  let r = sqrt(x ** 2 + y ** 2);
  let phi = atan2(x, y);
  let psi = random();
  let alpha = random([-1, 1]);
  let p3 = Math.trunc(abs(juliaScopePower) * psi);
  let t = (phi + TWO_PI * p3) / juliaScopePower;
  return {
    x: r ** (juliaScopeDist / juliaScopePower) * cos(t),
    y: r ** (juliaScopeDist / juliaScopePower) * sin(t),
  };
}

// Blur
function v34(x, y) {
  let psi1 = random();
  let psi2 = random();
  return { x: psi1 * cos(TWO_PI * psi2), y: psi1 * sin(TWO_PI * psi2) };
}

// Gaussian
function v35(x, y) {
  let psiSum = random() + random() + random() + random() - 2;
  let psi = random();
  return { x: psiSum * cos(TWO_PI * psi), y: psiSum * sin(TWO_PI * psi) };
}
