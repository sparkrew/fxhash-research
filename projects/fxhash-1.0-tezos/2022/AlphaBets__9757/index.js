/**
 * AlphaBets
 *
 * Ddego 2021
 *
 * Fonts: Google Fonts 
 *
 **/
let click = 0,
  c1 = c[Math.floor(fxrand() * c.length)],
  primaryColor,
  speedAmount,
  colorAmount,
  seed,
  g,
  randomGrid,
  string,
  stringCount,
  numSteps,
  cellSize,
  defaultAngle,
  noiseScale,
  noiseOffset,
  seeds,
  angleScale,
  hasShadow,
  offsetImage;
function preload() {
  // Set Seeds
  seed = Math.floor(fxrand() * 16000000);
  randomSeed(seed);
  noiseSeed(seed);
  // Load font
  theFont = loadFont(
    [
      "./font/Major_Mono_Display/MajorMonoDisplay-Regular.ttf",
      "./font/Noto_Sans_Mono/NotoSansMono-Medium.ttf",
      "./font/Nova_Mono/NovaMono-Regular.ttf",
      "./font/Red_Hat_Mono/RedHatMono-Regular.ttf",
      "./font/Share_Tech_Mono/ShareTechMono-Regular.ttf",
      "./font/Syne_Mono/SyneMono-Regular.ttf",
      "./font/VT323/VT323-Regular.ttf",
    ][Math.floor(random() * 7)]
  );
  string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // Load Variables
  cellSize = Math.floor(random(10, 100));
  numSteps = Math.floor(random(5, 100));
  defaultAngle = Math.PI * random();
  noiseScale = Math.floor(random(5));
  noiseOffset = Math.floor(random(5));
  seeds = [random(), random()];
  angleScale = Math.floor(random(5));
  stringCount = Math.floor(random(100, 500));
  hasShadow = random() > 0.5 ? true : false;
  offsetImage = random() > 0.5 ? true : false;
  hasStroke = random() > 0.5 ? true : false;
  bgTheme = random(1) < 0.5 ? "Dark" : "Light";
  features = {
    "Background Color": bgTheme,
    Curves: stringCount,
    Cellsize: cellSize,
    "String length": numSteps,
    "String background": hasStroke,
    Offset: offsetImage,
  };
  window.$fxhashFeatures = features;
  console.table(features);
}
function setup() {
  square = Math.min(windowWidth, windowHeight);
  unit = square * 0.001;
  createCanvas(square, square);
  colorMode(HSB);
  pixelDensity(4);
  textAlign(CENTER, CENTER);
  if (offsetImage) p1 = createGraphics(square, square);
  else p1 = createGraphics(square - 100 * unit, square - 100 * unit);
  p1.textFont(theFont);
  console.log("%cAlphabets", "font-family:monospace; font-size: 20px");
  console.log("Don Di-Ego 2022");
  grid = createField(
    1000,
    1000,
    cellSize,
    noiseScale,
    noiseOffset,
    seeds,
    angleScale
  );
  randomGrid = [...createStrings(stringCount, grid.width, grid.height)];
  background(bgTheme !== "Dark" ? c1[0] : color(255));  
  fill(bgTheme == "Dark" ? c1[0] : color(255));
  rect(50 * unit, 50 * unit, width - 100 * unit, height - 100 * unit);
  if (offsetImage) {
    p1.translate(50 * unit, 50 * unit);
  } else {
    p1.background(bgTheme == "Dark" ? color(0) : color(255));
  }
  c1.splice(0, 1);
  document.body.style.backgroundColor =
    bgTheme == "Dark" ? "#000000" : "#ffffff";
  let i = 0;
  for (let [x, y] of randomGrid) {
    let fillColor = color(c1[i % c1.length]);
    fillColor.setAlpha(map(i, 0, randomGrid.length, 0, 1));
    let strokeColor = color(bgTheme == "Dark" ? color(0) : color(255));
    if (hasStroke) {
      if (hasShadow) {
        stringBack(grid, x, y, cellSize, numSteps, fillColor);
      }
      stringBack(grid, x, y, cellSize * 0.8, numSteps, strokeColor);
    }
    alphaBets(grid, x, y, cellSize * 0.8, numSteps, fillColor);
    i++;
  }
  if (offsetImage) image(p1, 0, 0);
  else image(p1, 50 * unit, 50 * unit);
}
function draw() {
  fxpreview();
  noLoop();
}
let angleLerp = (a0, a1, t) => {
  var max = Math.PI * 2;
  function shortAngleDist(a0, a1) {
    var da = Math.sign(a1 - a0) * (Math.abs(a1 - a0) % max);
    return Math.sign(a1 - a0) * ((2 * Math.abs(da)) % max) - da;
  }
  return a0 + shortAngleDist(a0, a1) * t;
};
function stringBack(g, x, y, stepLength, numSteps, fillColor) {
  let p = p1.createVector(x, y);
  let n = numSteps >> 1;
  p1.noFill();
  p1.stroke(fillColor);
  p1.strokeWeight(stepLength*unit);
  p1.strokeCap(PROJECT);
  p1.beginShape();
  p1.vertex(p.x * unit, p.y * unit);
  while (--n > 0) {
    let angle = g.getField(p.x, p.y);
    let v1 = p1.createVector(1, 0).rotate(angle);
    let v2 = p1.createVector(v1.x * stepLength, v1.y * stepLength);
    p = p.add(v2);
    p1.curveVertex(p.x * unit, p.y * unit);
  }
  p1.vertex(p.x * unit, p.y * unit);
  p1.endShape();
}
function alphaBets(g, x, y, stepLength, numSteps, fillColor) {
  let p = p1.createVector(x, y);
  let n = numSteps >> 1;
  let index = 0;
  while (--n > 0) {
    let angle = g.getField(p.x, p.y);
    let v1 = p1.createVector(1, 0).rotate(angle);
    let v2 = p1.createVector(v1.x * stepLength, v1.y * stepLength);
    p = p.add(v2);
    p1.push();
    p1.translate(p.x * unit, p.y * unit);
    p1.rotate(angle);
    p1.noStroke();
    p1.fill(fillColor);
    p1.textSize(stepLength*unit);
    p1.text(string[index], 0, (stepLength / 3) * unit);
    p1.pop();
    index++;
  }
}
class Grid {
  constructor(width, height, cellSize) {
    Object.assign(this, { width, height, cellSize });
    this.nx = Math.round(width / cellSize);
    this.ny = Math.round(height / cellSize);
    this.grid = Array.from(Array(this.nx), (_) =>
      Array(this.ny).fill(defaultAngle)
    );
  }
  getCell(ix, iy) {
    ix = Math.min(this.nx - 1, Math.max(0, ix));
    iy = Math.min(this.ny - 1, Math.max(0, iy));
    return this.grid[ix][iy];
  }
  setCell(ix, iy, angle) {
    if (ix < this.nx && ix >= 0 && iy < this.ny && iy >= 0)
      this.grid[ix][iy] = angle;
  }
  getCellIndex(x, y) {
    return [~~(x / this.cellSize), ~~(y / this.cellSize)];
  }
  getField(x, y) {
    let [ix, iy] = this.getCellIndex(x, y);
    let alphax = (x % this.cellSize) / this.cellSize;
    let alphay = (y % this.cellSize) / this.cellSize;
    return angleLerp(
      angleLerp(this.getCell(ix, iy), this.getCell(ix + 1, iy), alphax),
      angleLerp(this.getCell(ix, iy + 1), this.getCell(ix + 1, iy + 1), alphax),
      alphay
    );
  }
}
function createField(
  width,
  height,
  cellSize,
  noiseScale = 1,
  noiseOffset = 0,
  seeds = [0, 0],
  angleScale = 4
) {
  let g = new Grid(width, height, cellSize);
  let [seedX, seedY] = seeds;
  for (let i = 0; i < g.nx; i++) {
    for (let j = 0; j < g.ny; j++) {
      let angle =
        (noiseOffset +
          noise(
            (seedX + i / g.nx) * noiseScale,
            (seedY + j / g.ny) * noiseScale
          )) *
        Math.PI *
        0.7 *
        angleScale;
      g.setCell(i, j, angle);
    }
  }
  return g;
}
function* createStrings(n, width, height) {
  while (n-- > 0) {
    yield [width * random(), height * random()];
  }
}
