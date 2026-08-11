let pd = 1; //pixel density
let mainCanvas, seed, cnv2, padding;
let table, tileType, lineNum1, lineNum2;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  seed = int(fxrand() * 9999999); //fxrand must be used to generate randomness on fxhash.  Making this a seed allows you to keep using p5 random and noise function (see below). Seeding also allows you to resize the canvas or change pixel densities and (hopefully) get the same output.
  restart();
}

function restart() {
  pixelDensity(pd);
  randomSeed(seed);
  noiseSeed(seed);
  maxCanv = min(windowWidth, windowHeight);
  mainCanvas = createCanvas(maxCanv, maxCanv); //naming it mainCanvas for the grain shader
  grainBuffer = createGraphics(width, height, WEBGL);
  grainShader = grainBuffer.createShader(vert, frag);
  palette = floor(random(31));
  colorMode(HSB, 360, 120, 100, 255);
  tileType = floor(random(9));
  while (tileType==4){ //eliminate type 4
    tileType = floor(random(9));
  }
  getColor(floor(random(2)));
  background(h, s+10, b-10);
  randomSeed(seed);
  noiseSeed(seed);
  if (tileType < 5) {
    lineNum1 = 30; //30
    lineNum2 = 5; //5
    if (random(3) < 2) {
      makeLines();
    } else {
      makeCircles();
    }
    if (random(3)<1){
      smallCircles();
    }
  } else if (tileType == 5) {
    lineNum1 = 13;
    lineNum2 = 13;
    makeLines();
    if (random(3) < 1) {
      makeCircles();
    }
    if (random(3) < 1) {
      smallCircles();
    }
  } else {
    lineNum1 = 12;
    lineNum2 = 12;
    makeLines();
    makeCircles();
    smallCircles();
  }
  if (
    (tileType == 0 && random(3) < 2) ||
    (tileType == 1 && random(4) < 3) ||
    (tileType == 2 && random(3) < 2) ||
    (tileType == 3 && random(3) < 1) ||
    (tileType > 4 && tileType < 8) ||
    (tileType == 8 && random(4) < 4)
  ) {
    paperTexture();
  }
  applyGrain();
  cnv2 = createGraphics(width, height);
  cnv2.image(get(), 0, 0);
  randomSeed(seed);
  noiseSeed(seed);
  tiling();
  randomSeed(seed);
  noiseSeed(seed);
  if (tileType > 6) {
    addCurve();
  }
  if (tileType > 5) {
    addCircle();
  }
  if (tileType == 0 || tileType > 6) {
    noFill();
    stroke(0);
    strokeWeight(padding * 2);
    rect(0, 0, width, height);
  }
  fxpreview(); //creates token image on fxhash
}

function makeLines() {
  randomSeed(seed);
  noiseSeed(seed);
  for (i = 0; i < lineNum1; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(floor(random(8)) * PI * 0.25);
    translate(0, random(-width * 0.4, width * 0.4));
    strokeWeight(width * 0.03);
    getColor(floor(random(2, 7)));
    for (j = 0; j < lineNum2; j++) {
      if (random(4) < 1) {
        getColor(floor(random(2, 7)));
      }
      stroke(h + random(-6, 6), s + random(-10, 10), b + random(-10, 10), 150);
      lineHeight = random(-width * 0.04, width * 0.04);
      line(
        -width * 0.75,
        lineHeight,
        width * 0.75,
        lineHeight + random(-width * 0.05, width * 0.05)
      );
    }
    pop();
  }
}

function makeCircles() {
  randomSeed(seed);
  noiseSeed(seed);
  strokeWeight(width * random(0.02,0.04)); //.03
  noFill();
  x = width*random(0.2,0.8);
    y = height * random(0.2,0.8);
  vary = width*0.007;
  for (i = 0; i < 45; i++) {
    if (random(5)<1){
    x = width*random(0.2,0.8);
    y = height * random(0.2,0.8);
    }
    if (random(4)<1){
    getColor(floor(random(2, 7)));
    }
    stroke(h+random(-4,4), s+random(-5,5), b+random(-5,5), 150);
    circle(x+random(-vary,vary),y+random(-vary,vary), width * random(0.05, 0.5));
  }
}

function smallCircles() {
  randomSeed(seed);
  noiseSeed(seed);
  for (i = 0; i < 40; i++) {
    getColor(floor(random(2, 7)));
    noStroke();
    fill(h + random(-8, 8), s + random(-15, 15), b + random(-15, 15), 160);
    circle(random(width), random(height), width * random(0.02, 0.06));
  }
}

function paperTexture() {
  //based on color present
  noFill();
  colorMode(RGB);
  colVary = 20;
  strokeWeight(width * random(0.013, 0.029));
  alph = random(13, 28);
  gap = width / 95;
  for (x = 0; x < width; x += gap) {
    for (y = 0; y < height; y += gap) {
      col = get(x, y);
      stroke(
        col[0] + random(-colVary, colVary),
        col[1] + random(-colVary, colVary),
        col[2] + random(-colVary, colVary),
        alph
      );
      push();
      translate(x, y);
      rotate(random(PI * 2));
      curve(
        height * random(0.035, 0.14),
        0,
        0,
        height * random(-0.03, 0.03),
        height * random(-0.03, 0.03),
        height * random(0.035, 0.07),
        height * random(0.035, 0.07),
        height * random(0.035, 0.14)
      );
      pop();
    }
  }
  colorMode(HSB, 360, 120, 100, 255);
  //filter(BLUR,0.5);
}

function addCurve() {
  cnv3 = createGraphics(width, height);
  cnv3.colorMode(HSB, 360, 120, 100, 255);
  cnv3.push();
  cnv3.translate(width / 2, height / 2);
  cnv3.rotate(PI * 0.5 * floor(random(4)));
  cnv3.translate(-width / 2, -height / 2);
  cnv3.strokeWeight(padding * 2);
  let midMax;
  if (tileType == 7) {
    midMax = 0.22;
  } else if (tileType == 8) {
    midMax = 0.15;
  }
  let mid = height * random(0.05, midMax);
  let qtr1 = mid + height * random(-0.1, 0.1);
  let qtr2 = mid + height * random(-0.1, 0.1);
  let strt = qtr1 + height * random(-0.1, 0.1);
  let ending = qtr2 + height * random(-0.1, 0.1);
  cnv3.beginShape();
  cnv3.curveVertex(0, 0);
  cnv3.curveVertex(0, strt);
  cnv3.curveVertex(width * 0.25, qtr1);
  cnv3.curveVertex(width * 0.5, mid);
  cnv3.curveVertex(width * 0.75, qtr2);
  cnv3.curveVertex(width, ending);
  cnv3.curveVertex(width, 0);
  cnv3.endShape(CLOSE);
  ctx = cnv3.canvas.getContext("2d");
  ctx.clip();
  cnv3.image(cnv2, 0, -height * 0.5);
  getColor(floor(random(6)));
  cnv3.tint(h, s - 20, b + 10, 170);
  cnv3.image(cnv2, 0, -height * 0.5);
  cnv3.noTint();
  noTint();
  image(cnv3, 0, 0);
}

function addCircle() {
  cnv3 = createGraphics(width, height);
  cnv3.colorMode(HSB, 360, 120, 100, 255);
  x = (width / 3) * floor(random(1, 3));
  y = (height / 3) * floor(random(1, 3));
  cnv3.strokeWeight(padding * 2);
  size = width * random(0.25, 0.55);
  cnv3.circle(x, y, size);
  ctx = cnv3.canvas.getContext("2d");
  ctx.clip();
  cnv3.image(cnv2, 0, 0);
  getColor(6);
  cnv3.tint(h, s, b + 40, 190);
  cnv3.image(cnv2, 0, 0);
  noStroke();
  fill(0, 80);
  circle(x + width * 0.012, y + height * 0.012, size);
  noTint();
  image(cnv3, 0, 0);
}

function getColor(col1) {
  h = int(table.get(palette, col1 * 3)) + random(-8, 8);
  s = int(table.get(palette, col1 * 3 + 1)) + random(-10, 10);
  b = int(table.get(palette, col1 * 3 + 2)) + random(-10, 10);
}

function keyTyped() {
  if (key === "s") {
    save(palette + "-" + tileType + "-" + seed + ".png");
  }
  if (key === "2") {
    pd = 2;
    restart();
  }
  if (key === "3") {
    pd = 3;
    restart();
  }
  if (key === "4") {
    pd = 4;
    restart();
  }
  if (key === "5") {
    pd = 5;
    restart();
  }
}

function windowResized() {
  pd = 1;
  restart();
}
