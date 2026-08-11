// =====================================================
// fxhash utils
// =====================================================
let seed = Math.floor(fxrand() * 999999999);

function fxRandom(min = 1, max = null) {
  if (max === null) return fxrand() * min;
  return fxrand() * (max - min) + min;
}

// =====================================================
// globals
// =====================================================
let stones = [];
let fs, gr,er;

let br, bg, bb;
let flr, flg, flb;
let blr, blg, blb;

let ls, fls, bls;
let fn, pn, bn, ln;

let bw, sw, rw, bss, rbss;

const BASE_SIZE = 1000;
let cnv;

// =====================================================

function setup() {
  cnv = createCanvas(BASE_SIZE, BASE_SIZE);
 pixelDensity(Math.min(window.devicePixelRatio, 2));


  randomSeed(seed);
  noiseSeed(seed);

  noLoop();
  strokeCap(ROUND);

  fitCanvas();
  window.addEventListener("resize", fitCanvas);
  
  // ---------------- parameters ----------------
  fs = floor(fxRandom(6));
  gr = fxRandom();
    er = fxRandom();

  bw = fxRandom(30, 50);
  rw = bw * 0.35;
  sw = fxRandom(0.4, 0.6);

  bss = fxRandom(1.1, 1.7);
  rbss = fxRandom(1.1, 1.7);

  br = fxRandom(20, 80);
  bg = fxRandom(10, 60);
  bb = fxRandom(20, 60);

  flr = fxRandom(180, 255);
  flg = fxRandom(10, 180);
  flb = fxRandom(10, 180);

  blr = fxRandom(180, 255);
  blg = fxRandom(100, 255);
  blb = fxRandom(100, 200);

  ls = fxRandom(0.5, 2.5);
  fls = fxRandom(1, 3);
  bls = fxRandom(5, 25);

  fn = fxRandom();
  pn = floor(fxRandom(3, 9));
  bn = fxRandom();
  ln = fxRandom();

  stones = [];
  generateStones();
  
  
window.$fxhashFeatures = {
  "Form": ["Leafy","Green","Autumn","Dry","Sparse","Bloom"][fs],

  "Trunk Thickness": bw < 18 ? "Thin" : bw < 28 ? "Medium" : "Thick",
  "Branch Spread": sw < 0.45 ? "Narrow" : "Wide",

  "Leaves Density": ln < 0.4 ? "Sparse" : ln < 0.8 ? "Normal" : "Dense",
  "Fruits": fn < 0.3 ? "Few" : fn < 0.7 ? "Some" : "Many",
  "Flowers": bn < 0.3 ? "Rare" : bn < 0.7 ? "Occasional" : "Abundant",

  "Petals": Math.floor(pn),

  "Grass": gr > 0.9 ? "Yes" : "No",

  "Branch Color": `rgb(${Math.floor(br)},${Math.floor(bg)},${Math.floor(bb)})`,
  "Fruit Color": `rgb(${Math.floor(flr)},${Math.floor(flg)},${Math.floor(flb)})`,
  "Flower Color": `rgb(${Math.floor(blr)},${Math.floor(blg)},${Math.floor(blb)})`
}
}

// =====================================================

function draw() {
  drawArtwork();

  if (typeof fxpreview === "function") {
    fxpreview();
  }
}

function fitCanvas() {
  if (!cnv) return;

  let w = window.innerWidth;
  let h = window.innerHeight;

  let scale = Math.min(w / BASE_SIZE, h / BASE_SIZE);
  let displaySize = BASE_SIZE * scale;

  cnv.style("width", displaySize + "px");
  cnv.style("height", displaySize + "px");

  cnv.style("display", "block");
  cnv.style("margin", "auto");
}




function drawArtwork() {

  let startX = BASE_SIZE / 2;
  let startY = BASE_SIZE * 0.9;

   if (er > 0.5)drawGround(startX, startY);

  //grass in bg
 if(gr>0.9){ 
    gh=fxRandom(BASE_SIZE*0.87,BASE_SIZE*0.92); 
   for(let i=0;i<5;i++){ // 
  gh=gh+fxRandom(-10,10); 
     grass(3,gh); } }

  // roots
  if (fxRandom() < 0.5) {
    let numBranches = floor(fxRandom(4, 7));
    let range = PI * 0.8;
    let startA = PI / 2 - range / 2;
    let spacing = range / (numBranches - 1);

    for (let i = 0; i < numBranches; i++) {
      let t = i / (numBranches - 1);
      let len = 0.6 + 0.5 * abs(2 * t - 1);
      roots(startX, startY, startA + spacing * i, rw * len);
    }
  }

  // trunk
  stroke(br, bg, bb);
  strokeWeight(bw);
  line(startX, startY, startX, startY - 30);

  createBranch(startX, startY - 30, -PI / 2, bw);

  //grass in fg
if(gr>0.9){ 
   gh=fxRandom(BASE_SIZE*0.91,BASE_SIZE*0.92); 
  for(let i=0;i<5;i++){ 
    gh=gh+fxRandom(20); 
    grass(6,gh); } }

  
} 
// =====================================================
// ground & stones
// =====================================================
function generateStones() {
  stones = [];
  let cx = BASE_SIZE / 2;
  let cy = BASE_SIZE * 0.9;

  for (let i = 0; i < 150; i++) {
    let a = fxRandom(TWO_PI);
    stones.push({
      x: cx + cos(a) * fxRandom(BASE_SIZE * 0.25),
      y: cy + bw / 2 + sin(a) * fxRandom(40),
      s: fxRandom(1, 5),
      c: [fxRandom(120, 150), fxRandom(120, 150), 120],
      r: fxRandom() > 0.5
    });
  }
}

function drawGround(x, y) {
  noStroke();
  fill(210, 180, 140, 15);
  ellipse(x, y + bw / 2, BASE_SIZE * 0.1, 60);
  ellipse(x, y + bw / 2, BASE_SIZE * 0.2, 70);
  ellipse(x, y + bw / 2, BASE_SIZE * 0.3, 80);
  ellipse(x, y + bw / 2, BASE_SIZE * 0.4, 90);
  ellipse(x, y + bw / 2, BASE_SIZE * 0.5, 100);
  ellipse(x, y + bw / 2, BASE_SIZE * 0.6, 110);

  for (let s of stones) {
    fill(...s.c);
    s.r ? (ellipse(s.x, s.y, s.x / 100, s.s), ellipse(s.x, s.y, s.s))
    :rect(s.x, s.y, s.s, s.s);
  }
}

// =====================================================
// tree / branch
// =====================================================
function createBranch(x, y, angle, weight) {

  if (weight < 1.3) {
    if (fs < 4) {
      for (let i = 0; i < 4 * ln; i++) {
        drawLeaf(fxRandom(15, 25), x, y, angle + fxRandom(-0.5, 0.5));
      }
    }

    if (fxRandom() < fn) {
      line(x, y, x, y + 10 * fls);
      noStroke();
      fill(flr + fxRandom(30), flg + fxRandom(20), flb + fxRandom(10));
      circle(x, y + 10 * fls, fxRandom(4, 8) * fls);
    }

    if (fs == 5 && fxRandom() < bn) {
      let flr = fxRandom(-4, 4);
      line(x, y, x + flr, y - 4);
      bloom(x + flr, y - 4);
    }
    return;
  }

  let stepSize = weight * bss;
  if (stepSize < 6) stepSize = 6;

  let currentAngle = angle + fxRandom(-0.1, 0.1);
  if (fxRandom(1) < 0.05) currentAngle += fxRandom(-0.3, 0.3);

  let nextX = x + cos(currentAngle) * stepSize;
  let nextY = y + sin(currentAngle) * stepSize;

  // 
  if (weight > 12 && fxRandom(1) < 0.01) {
    strokeCap(SQUARE);          
    stroke(br, bg, bb);
    strokeWeight(weight);
    line(x, y, nextX, nextY);   
    drawStump(nextX, nextY, angle, weight);
    return;                    
  }

  // 
  strokeCap(ROUND);
  stroke(br, bg, bb);
  strokeWeight(weight);
  line(x, y, nextX, nextY);

  if (fxRandom(1) < 0.3) {
    let sign = fxRandom() < 0.5 ? 1 : -1;
    let branchAngle = currentAngle + fxRandom(PI / 8, PI / 3) * sign;
    createBranch(nextX, nextY, branchAngle, weight * sw);
  }

  createBranch(nextX, nextY, currentAngle, weight * 0.94);
}


// =====================================================
// leaf
// =====================================================
function drawLeaf(size, x, y, angle) {
  push();
  translate(x, y);
  rotate(angle + PI / 3);
  size *= ls;

  let r = fxRandom(200, 250);
  let g = fxRandom(200, 250);
  let b = fxRandom(30, 80);

  if (fs === 0) { r = fxRandom(100,180); g = fxRandom(150,220); b = fxRandom(10,30); }
  if (fs === 1) { r = fxRandom(40,60); g = fxRandom(120,180); b = fxRandom(30,60); }
  if (fs === 2) { r = fxRandom(120,230); g = fxRandom(60,120); b = fxRandom(0,30); }

  fill(r, g, b);
  noStroke();

  beginShape();
  vertex(0, 0);
  bezierVertex(-size/2, -size/4, -size/2, -3*size/4, 0, -size);
  bezierVertex(size/2, -3*size/4, size/2, -size/4, 0, 0);
  endShape(CLOSE);
  pop();
}

// =====================================================
// bloom
// =====================================================
function bloom(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(blr, blg, blb, 200);

  for (let i = 0; i < pn; i++) {
    push();
    rotate((TWO_PI * i) / pn);
    ellipse(2, 0, fxRandom(bls * 0.2, bls * 0.7), bls);
    pop();
  }

  fill(blr * 0.9, blg * 0.8, blb * 0.8);
  circle(0, 0, bls * 0.3);
  pop();
}

// =====================================================
// roots
// =====================================================
function roots(x, y, angle, weight) {
  if (weight < 2) return;

  let step = weight * rbss;
  let nx = x + cos(angle) * step;
  let ny = y + sin(angle) * step;

  stroke(br, bg, bb);
  strokeWeight(weight);
  line(x, y, nx, ny);

  if (fxRandom() < 0.09) {
    let sign = fxRandom() < 0.5 ? -1 : 1;
    roots(nx, ny, angle + fxRandom(PI/8, PI/3) * sign, weight * 0.5);
  }

  roots(nx, ny, angle + fxRandom(-0.1, 0.1), weight * 0.8);
}

// =====================================================
// stump
// =====================================================
function drawStump(x, y, angle, weight) {
  push();
  translate(x, y);
  rotate(angle + PI / 2);

  stroke(br, bg, bb);
  strokeWeight(2);
  fill(br * 3, bg * 3, bb * 3);
  ellipse(0, 0, weight * 0.9, weight * 0.4);

  noFill();
  stroke(br, bg, bb, 100);
  ellipse(0, 0, weight * 0.65, weight * 0.25);
  ellipse(0, 0, weight * 0.3, weight * 0.1);
  pop();
}

// =====================================================
// grass
// =====================================================
function grass(n, y) {
  for (let i = 0; i < n; i++) {
    drawGrassLayer(y, fxRandom(BASE_SIZE * 0.25, BASE_SIZE * 0.75));
  }
}

function drawGrassLayer(yBase, block) {
  for (let i = 0; i < 10; i++) {
    let x = block + fxRandom(-20, 20);
    let y = yBase + fxRandom(-15, 15);
    drawSingleBlade(x, y, fxRandom(20, 60), fxRandom(-10, 10));
  }
}

function drawSingleBlade(x, y, h, tilt) {
  let cx = x;
  let cy = y;
  let segments = 6;

  for (let i = 0; i < segments; i++) {
    let nx = cx + tilt * 0.1;
    let ny = cy - h / segments;

    strokeWeight(map(i, 0, segments, 3, 0.5));
    stroke(80, 180, 80);
    if(fs==2){stroke(180, 140, 60)}  
    if(fs==3){stroke(180, 200, 50)}
    line(cx, cy, nx, ny);

    cx = nx;
    cy = ny;
  }
}
