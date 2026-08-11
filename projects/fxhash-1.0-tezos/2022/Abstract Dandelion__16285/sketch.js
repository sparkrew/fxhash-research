// Abstract Dandelion - by ArtLife
// ArtLife on fxhash: https://www.fxhash.xyz/u/ArtLife
// instagram: https://www.instagram.com/generativeartlife/
// ArtLife Twitter: https://twitter.com/iamPraveenIN
// Credit to p5js: https://p5js.org/
// Credit to p5.pattern: https://github.com/SYM380/p5.pattern
// Credit to kgolid chromotome: https://github.com/kgolid/chromotome


let head1,
  head1L,
  head2,
  head2L,
  headS,
  headSL,
  palette, p, bg, g, seed, ox, oy, size, singleP, singlePattern, c, d_, pp5, pp4, pp6;

let colors, rc, border = true, counter, isSingle, paletteName = [];
let total = [];

function ri(a, b) {
  return Math.floor(rn(a, b + 1));
}

function rn(a, b) {
  return a + (b - a) * Math.random();
}

setsize(window.innerHeight - (window.innerHeight - window.innerHeight / 1.333333333), window.innerHeight);

function windowResized(sw, sh) {
  if (sw == undefined || sh == undefined) {
    sw = windowHeight - (windowHeight - windowHeight / 1.333333333);
    sh = windowHeight;
  }
  fxrand = sfc32(...hashes)
  setsize(sw, sh);
  setup();
}

function setsize(sw, sh) {
  wh = sh;
  ww = sw;
}

function setup() {
  seed = int(fxrand() * 1000000);
  randomSeed(seed);

  // some styling for canvas
  let myCanvas = createCanvas(ww, wh, P2D);
  myCanvas.parent("canvas");
  myCanvas.position((window.innerWidth - ww) * 0.5, 0);

  g = createGraphics(width, height);

  head1 = [];
  head1L = [];
  head2 = [];
  head2L = [];
  headS = [];
  headSL = [];

  angleMode(DEGREES);
  stroke(40)
  isSingle = fxrand();

  if (isSingle < 1 / 3) {
    singlePattern = true;
    singleP = int(1 + fxrand() * 17);
  } else {
    singlePattern = false;
  }

  p = c[int(fxrand() * c.length)];
  palette = p.colors;
  patternColors(palette);
  paletteName[0] = (p.name);

  if (p.background !== undefined || p.background == '#000000') bg = color(p.background);
  else bg = color(255);
  background(bg);
  document.body.style.backgroundColor = color(bg);

  pp5 = fxrand();
  pp4 = fxrand();
  pp6 = fxrand();

  // adding waves
  for (let i = 0; i < 10; i++) {
    const l = height / 8.3 - height / 83.3 * i;
    addWave(l)
  }

  // flower
  ox = width / 2;
  oy = height / 2.8;
  size = width / 1.6686;
  h1Lines = int(10 + fxrand() * 7);
  h2Lines = int(6 + fxrand() * 7);
  hSLines = int(40 + fxrand() * 60);
  root = height - oy;
  flower(ox, oy, size, h1Lines, h2Lines, hSLines, root);

  myDraw()
  noLoop()
}


function myDraw() {

  // paper texture
  g.stroke(0, 10);
  let w = g.width;
  let h = g.height;
  let M = g.width / 2000;
  g.strokeWeight(width / 484.44);
  for (let i = 0; i < 500000 * M; i++) {
    p = [ri(0, w), ri(0, h + 100)];
    np = [p[0], p[1] - noise(p[0] * 0.04 * M, p[1] * 0.4 * M) * 50.0];
    g.point(...np);
  }

  g.filter(BLUR, width / 323);
  image(g, 0, 0)
  addGrain(12)

  if (border) {
    push()
    stroke(bg)
    strokeWeight(width / 25)
    noFill()
    rect(0, 0, width, height)
    pop()
  }

  load()
  fxpreview()
}

// head seed, line, and layer
function addHeadSeed(x, y, d, steps) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 360 - 1; i += 360 / steps) {
    const s = sin(i) * d;
    const c = cos(i) * d;
    headS.push(createVector(s, c));
  }
  endShape(CLOSE);
  pop();
}

function addHeadSeedL(x, y, d, steps) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 360 - 1; i += 360 / steps) {
    const s = sin(i) * d + ((-d / 6) + fxrand() * (d / 3));
    const c = cos(i) * d + ((-d / 6) + fxrand() * (d / 3));
    headSL.push(createVector(s, c));
  }
  endShape(CLOSE);
  pop();
}

function headSeedLine(x, y, d) {
  push();
  translate(x, y);
  fill(palette[int(fxrand() * palette.length)]);
  for (let i = 0; i < headS.length; i++) {
    strokeWeight(size / 133.33);
    line(headS[i].x, headS[i].y, headSL[i].x, headSL[i].y);
    circle(headSL[i].x, headSL[i].y, d);
  }
  pop();
}

// adding stem to flower
function addStem(x, y, w, h) {
  push();
  translate(x, y);
  strokeWeight(size / 66.67);
  if (fxrand() < 2 / 3) pattern(PTN.wave(h / 4 / 2, h / 4 / 10, h / 4 / 5, h / 4 / 10));
  else choosePattern(8);
  if (fxrand() < 1 / 2) {
    quad(-w / 2, 0, w / 2, 0, w * 2, h, w, h);
    quadPattern(-w / 2, 0, w / 2, 0, w * 2, h, w, h);
  } else {
    quad(-w / 2, 0, w / 2, 0, -w, h, -w * 2, h);
    quadPattern(-w / 2, 0, w / 2, 0, -w, h, -w * 2, h);
  }
  pop();
}

// head one line, layer and circle
function addFlowerHead1(x, y, d, steps) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 360 - 1; i += 360 / steps) {
    const s = sin(i) * d + ((-d / 10) + fxrand() * (d / 5));
    const c = cos(i) * d + ((-d / 10) + fxrand() * (d / 5));
    head1.push(createVector(s, c));
  }
  endShape(CLOSE);
  pop();
}

function addHead1Layer(x, y, d, steps) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 360 - 1; i += 360 / steps) {
    const s = sin(i) * d + ((-d / 6) + fxrand() * (d / 3));
    const c = cos(i) * d + ((-d / 6) + fxrand() * (d / 3));
    head1L.push(createVector(s, c));
  }
  endShape(CLOSE);
  pop();
}

function head1Line(x, y) {
  push();
  translate(x, y);

  for (let i = 0; i < head1.length; i++) {
    strokeWeight(size / 133.33);
    line(head1[i].x, head1[i].y, head1L[i].x, head1L[i].y);

    d_ = (size / 8) + fxrand() * ((size / 4) - (size / 8));
    push();
    choosePattern(d_);
    strokeWeight(size / 66.67);
    circle(head1L[i].x, head1L[i].y, d_);
    circlePattern(head1L[i].x, head1L[i].y, d_);
    pop();
  }
  pop();
}

// head two line, layer and circle
function addFlowerHead2(x, y, d, steps) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 360 - 1; i += 360 / steps) {
    const s = sin(i) * d;
    const c = cos(i) * d;
    head2.push(createVector(s, c));
  }
  endShape(CLOSE);
  pop();
}

function addHead2Layer(x, y, d, steps) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i < 360 - 1; i += 360 / steps) {
    const s = sin(i) * d + ((-d / 16) + fxrand() * (d / 8));
    const c = cos(i) * d + ((-d / 16) + fxrand() * (d / 8));
    head2L.push(createVector(s, c));
  }
  endShape(CLOSE);
  pop();
}

function head2Line(x, y) {
  push();
  translate(x, y);
  for (let i = 0; i < head2.length; i++) {
    strokeWeight(size / 133.33);
    line(head2[i].x, head2[i].y, head2L[i].x, head2L[i].y);

    d_ = (size / 8) + fxrand() * ((size / 3.34) - (size / 8));
    push();
    choosePattern(d_);
    strokeWeight(size / 66.67);

    circle(head2L[i].x, head2L[i].y, d_);
    circlePattern(head2L[i].x, head2L[i].y, d_);
    pop();
  }
  pop();
}

// seed middle part of the flower
function addSeed(x, y, d) {
  push();
  translate(x, y);
  fill(palette[int(fxrand() * palette.length)]);
  strokeWeight(size / 133.33)

  seedType = int(1 + fxrand() * 3); // 2,3,4
  circle(0, 0, d * 2);

  for (let i = 0; i < 1e3; i++) {
    let a = fxrand() * 360;
    let r;
    if (seedType == 1) r = d * (1 - fxrand() * fxrand());
    else if (seedType == 2) r = d * (1 - fxrand() * fxrand() * fxrand());
    else if (seedType == 3) r = d * (1 - fxrand() * fxrand() * fxrand() * fxrand());
    point(cos(a) * r, sin(a) * r);
  }
  pop();
}

function choosePattern(d_) {
  push();

  if (singlePattern) patternNum = singleP;
  else patternNum = int(1 + fxrand() * 16); // 1 to 16
  patternAngle(-360 + fxrand() * 360);

  if (patternNum == 1) {
    pattern(PTN.dot(d_ / 10, d_ / 20));
  } else if (patternNum == 2) {
    pattern(PTN.wave(d_ / 2, d_ / 10, d_ / 5, d_ / 10));
  } else if (patternNum == 3) {
    pattern(PTN.checked(d_ / 10));
  } else if (patternNum == 4) {
    if (pp4 < 2 / 3) {
      pattern(PTN.checked(d_ / 8, d_ / 3));
    } else {
      let c = d_ / 10;
      pattern(myLineOne(10, 10, width / 242.25, width / 96.9, pp6));
    }
  } else if (patternNum == 5) {
    if (pp5 < 2 / 3) {
      a = [5, 10, 15];
      pattern(PTN.stripeRadial(360 / a[int(fxrand() * a.length)]));
    } else {
      let c = d_ / 10;
      pattern(myLineOne(10, 10, width / 242.25, width / 96.9, pp6));
    }
  } else if (patternNum == 6) {
    a = [6, 10, 15, 20, 25], b = [6, 12, 18];
    pattern(
      PTN.stripePolygon(a[int(fxrand() * a.length)], d_ / b[int(fxrand() * b.length)])
    );
  } else if (patternNum == 7) {
    a = [6, 12, 18];
    pattern(PTN.stripeCircle(d_ / a[int(fxrand() * a.length)]));
  } else if (patternNum == 8) {
    a = [4, 8, 12, 16];
    pattern(PTN.stripe(d_ / a[int(fxrand() * a.length)]));
  } else if (patternNum == 9) {
    a = [5, 10, 15, 20], b = [30, 40];
    pattern(PTN.cross(d_ / a[int(fxrand() * a.length)], d_ / b[int(fxrand() * b.length)]));
  } else if (patternNum == 10) {
    a = [5, 10, 15], b = [10, 20, 30];
    pattern(
      PTN.triangle(d_ / a[int(fxrand() * a.length)], d_ / b[int(fxrand() * b.length)])
    );
  } else if (patternNum == 11) {
    a = [0.3, 0.4, 0.5]
    pattern(PTN.noise(a[int(fxrand() * a.length)]));
  } else if (patternNum == 12) {
    a = [0.3, 0.4, 0.5]
    pattern(PTN.noiseGrad(a[int(fxrand() * a.length)]));
  } else if (patternNum == 13) {
    let c = d_ / 10;
    pattern(myLineOne(10, 10, width / 242.25, width / 96.9, pp6));
  } else if (patternNum == 14) {
    a = [2, 4, 5, 6];
    pattern(waveCPattern(a[int(fxrand() * a.length)], width / 323));
  } else if (patternNum == 15) {
    a = [3, 4, 5, 6];
    pattern(circleShape(a[int(fxrand() * a.length)], width / 323));
  } else if (patternNum == 16) {
    a = [6, 8, 10, 12];
    pattern(myLineWave(a[int(fxrand() * a.length)], width / 323, width / 242.25));
  } else {

  }
  pop();
}


function flower(ox, oy, size, h1Lines, h2Lines, hSLines, root) {

  // add stem
  addStem(ox, oy, size / 8, root);

  // main flower
  // seed lines
  addHeadSeed(ox, oy, size / 8, hSLines);
  addHeadSeedL(ox, oy, size / 3.34, hSLines);
  headSeedLine(ox, oy, size / 40);

  // head two
  addHead2Layer(ox, oy, size / 1.6, h2Lines);
  addFlowerHead2(ox, oy, size / 8, h2Lines);
  //head two lines
  head2Line(ox, oy);

  addSeed(ox, oy, size / 5);

  // head one
  addHead1Layer(ox, oy, size / 2, h1Lines);
  addFlowerHead1(ox, oy, size / 8, h1Lines);
  //head one lines
  head1Line(ox, oy);
}