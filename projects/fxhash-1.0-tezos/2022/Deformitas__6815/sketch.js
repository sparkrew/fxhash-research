w = window.innerHeight * 0.8;
h = window.innerHeight;
canv = (w + h) * 0.5;
scl = canv * 0.05;
cols = w / scl;
rows = h / scl;

let img;
function preload() {
  img = loadImage("fineGrain2.jpg");
}

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function randomVal(min, max) {
  return fxrand() * (max - min) + min;
}
function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

const bgCols = [
  "#C7B198",
  "#DFD3C3",
  "#F0ECE3",
  "#EEC373",
  "#FFE6BC",
  "#C56824",
  "#1A374D",
  '#121212',
  
];

const pal = [
  ["#66806A", "#B4C6A6", "#FFC286", "#FFF1AF"],
  ["#FEF5ED", "#D3E4CD", "#ADC2A9", "#99A799"],
  ["#402218", "#865439", "#C68B59", "#D7B19D"],
  ["#F8F5F1", "#F8A488", "#5AA897", "#45526C"],
  ["#BFCBA8", "#5B8A72", "#56776C", "#464F41"],
  ["#CC7351", "#E08F62", "#DED7B1", "#9DAB86"],
  ["#FFCB74", "#B1B493", "#4F8A8B", "#07031A"],
  ["#565D47", "#B49C73", "#EAAC9D", "#F0DAA4"],
  ["#EFFCEF", "#CCEDD2", "#94D3AC", "#655C56"],
  ["#E6F0B6", "#B8E9C0", "#6384B3", "#684949"],
  ["#F0E9E9", "#C19191", "#AA7070", "#8B5D5D"],
  ["#DBE9B7", "#FDFDF6", "#F4DADA", "#B8B2A6"],
  ["#6E3B3B", "#AC3F21", "#BE6A15", "#F3CF7A"],
  ["#393939", "#849561", "#EED690", "#ECEFD8"],
  ["#97BFB4", "#F5EEDC", "#DD4A48", "#4F091D"],
  ["#F688BB", "#E8F9E9", "#BAF1A1", "#9DE3D0"],
];

pall = randomInt(0, 15);

colA = pal[pall][randomInt(0, 3)];
colB = pal[pall][randomInt(0, 3)];
colC = pal[pall][randomInt(0, 3)];
bgcNum = randomInt(0, 7);
bgc = bgCols[bgcNum];

angScale = 5;
let zoff = 0;
vectorNum = cols * rows;
vectors = [];
spdL = randomVal(canv * 0.001, canv * 0.0025);
let splatMult = 1;
let splats = 0;
strokePtsA = [];
strokePtsB = [];
strokePtsC = [];
sizeA = randomInt(1, 4);
sizeB = randomInt(1, 4);
sizeC = randomInt(1, 4);
popPop = randomVal(0.1, 0.15)
strokeNum = 0;
maxStrokes = randomInt(10, 30);
strokeLength = randomInt(500, 900);

window.$fxhashFeatures = {
  "Background": bgcNum + 1,
  "# of Strokes": maxStrokes * 3,
  "Palette": pall + 1,
  "Stroke Length": Math.round(map_range(strokeLength, 500, 900, 1, 100)),
  "First Color": colA,
  "First Brush Size": sizeA + 1,
  "Second Color": colB,
  "Second Brush Size": sizeB + 1,
  "Third Color": colC,
  "Third Brush Size": sizeC + 1,
};

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);

  for (let i = 0; i < maxStrokes; i++) {
    strokePtsA[i] = new brush();
    strokePtsB[i] = new brush();
    strokePtsC[i] = new brush();
  }
}

function draw() {
  noiseSeed(randomVal(1000000));
  noiseDetail(24);
  if (frameCount < 2) {
    background(bgc);
    blendMode(HARD_LIGHT);
    image(img, 0, 0, width, height);
  }

  for (x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      strokeWeight(canv * 0.005);
      nCol = map(noise(x * angScale, y * angScale, zoff), 0, 1, 0, 255);
      nAng = map(noise(x * angScale, y * angScale, zoff), 0, 1, 0, 360);
      index = x + y * cols;
      v = p5.Vector.fromAngle(nAng);
      v.setMag(popPop);
      vectors[index] = v;
      stroke(nCol);
      //point(x * scl + scl / 2, y * scl + scl / 2);
    }
  }

  if (frameCount < strokeLength) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colA);
      startFrame = frameCount;
      strokePtsA[i].update();
      strokePtsA[i].disp(sizeA);
      strokePtsA[i].follow(vectors);
    }
  }

  if (frameCount > strokeLength * 1 && frameCount < strokeLength * 2) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colB);
      startFrame = frameCount;
      strokePtsB[i].update();
      strokePtsB[i].disp(sizeB);
      strokePtsB[i].follow(vectors);
    }
  }

  if (frameCount > strokeLength * 2 && frameCount < strokeLength * 3) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colC);
      startFrame = frameCount;
      strokePtsC[i].update();
      strokePtsC[i].disp(sizeC);
      strokePtsC[i].follow(vectors);
    }
  }

  // BORDER
  push();
  marg = width * 0.025;

  blendMode(BLEND);
  fill("white");
  stroke("white");
  beginShape();
  vertex(0, 0);
  vertex(width, 0);
  vertex(width, height);
  vertex(0, height);
  beginContour();
  vertex(marg, marg);
  vertex(marg, height - marg);
  vertex(width - marg, height - marg);
  vertex(width - marg, marg);

  endContour();
  endShape(CLOSE);
  pop();

  // SPLATTER
  blendMode(BLEND);
  if (
    frameCount === splatMult * 5 &&
    splats < 500 &&
    frameCount < strokeLength * 3
  ) {
    splatDecider = fxrand();
    weight = randomVal(canv * 0.005, canv * 0.001);
    strokeWeight(weight);
    point(randomInt(0, w), randomInt(0, h));
    splatMult += 1;
    splats += 1;
  }
  zoff += 0.01;

  if (frameCount === 2700) {
    fxpreview();
  }
}

function keyTyped() {
  if (key === "s") {
    save("Deformitas.png");
  }
}
