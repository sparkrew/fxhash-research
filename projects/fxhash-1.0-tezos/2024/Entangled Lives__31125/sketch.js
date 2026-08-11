const info = {
    title: "Entangled lives",
    date: "August 2024",
    artist: "_md",
    website: "https://marcduiker.dev",
}

let minW, minH;
let maxW, maxH;
let wobblyLines = [];
let fixedSize, stepSize;
let leftMargin, topMargin;
let initLeftMargin, initTopMargin;
const fps = 30;
const initPointsPerLine = 25;
const maxPointsPerLine = 50;
const minPointsPerLine = 10;
const initVertexIncrement = 1;
const minVertexIncrement = 1;
const maxVertexIncrement = 5;
let vertexIncrement = initVertexIncrement;
let pointsPerLine = initPointsPerLine;
let isSynced = true;
let isFlip;
let bgColor, bgColor1, bgColor2;
let yScale = 3;
let gridSize = 11;
const palette = {
    name: 'ink-crimson',
    colors: [
        '#ffffff',
        '#ff0546',
        '#9c173b',
        '#660f31',
        '#450327',
        '#270022',
        '#17001d',
        '#09010d',
        '#0ce6f2',
        '#0098db',
        '#1e579c',
    ]
};

$fx.params([
  {
    id: "gridSize",
    name: "Grid size",
    type: "number",
    default: 11,
    options: {
      min: 5,
      max: 15,
      step: 1,
    },
  },
  {
    id: "synced",
    name: "Synced",
    type: "boolean",
    default: true,
  }
]);
let seed = $fx.rand() * 1e9;
$fx.features({
  "Grid size": `${$fx.getParam("gridSize")} x ${$fx.getParam("gridSize")}`,
  "Sync mode": `Synced=${$fx.getParam("synced")}. In synced mode the modulation of the lines is synced, they all flip direction at the same time, and the background color alternates between black and white. In unsynced mode the lines flip direction at random times and the background stays black.`,
  "Interactive": 'Click or touch across the x-axis to control the maximum length of the lines. Click or touch across the y-axis to control the level of detail in the lines (only in unsynced mode).',
});

function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  gridSize = $fx.getParam("gridSize");
  isSynced = $fx.getParam("synced");
  frameRate(fps);
  minW = 0;
  minH = 0;
  maxW = windowWidth;
  maxH = windowHeight;
  init(maxW, maxH);
}

function init(sizeW, sizeH) {
  noiseDetail(4, 2);
  isFlip = false;
  bgColor1 = palette.colors[7];
  bgColor2 = palette.colors[0];
  bgColor = bgColor1;
  wobblyLines = [];
  fixedSize = min(sizeW, sizeH);
  const margin = fixedSize / 5;
  stepSize = (fixedSize - margin) / gridSize;
  initleftMargin = (sizeW - (gridSize * stepSize) + stepSize) / 2;
  initTopMargin = (sizeH - (gridSize * stepSize) + stepSize) / 2;
  topMargin = initTopMargin;
  leftMargin = initleftMargin;
  createCanvas(sizeW, sizeH);
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      let wobbly = new WobblyLine(x, y);
      wobblyLines.push(wobbly);
    }
  }
}

function draw() {
  if (isSynced && isFlip) {
    bgColor = bgColor === bgColor1 ? bgColor2 : bgColor1;
    isFlip = false;
  } 
  if (!isSynced) {
    bgColor = bgColor1;
  }
  background(bgColor);
  yScale = 2 + sin(frameCount / fps / 4) * 8;
  topMargin = map(yScale, 2, 10, initTopMargin, initTopMargin / 1.5);
  wobblyLines.forEach(w => {
    w.update();
    w.draw();
  });
}

class WobblyLine {
  constructor(x, y){
    this.init(x, y);
  }
  
  init(x, y) {
    this.x = x;
    this.y = y;
    this.isAlt = (x + y) % 2 === 0;
    this.xPos = this.x * stepSize;
    this.yPos = this.y * stepSize;
    this.thickness = 1;
    this.scale = 6;
    this.whiteColor = color(palette.colors[0]);
    this.redColor = color(palette.colors[1]);
    this.blueColor = color(palette.colors[9]);
    this.blackColor = color(palette.colors[7]);
    this.lineColor = this.isAlt ? this.redColor : this.whiteColor;
    this.time = isSynced ? 0 : random(-fps * 2, fps * 2);
    this.initVertexIncrement = !isSynced ? random(minVertexIncrement, maxVertexIncrement) : maxVertexIncrement;
    this.pointsPerLine = pointsPerLine;
    this.initLineLength = this.isAlt ? -stepSize / initPointsPerLine : stepSize / initPointsPerLine;
    this.prevLineLength = this.initLineLength;
    this.noiseTime = random(0, 1000);
  }

  update() {
    this.time++;
    this.noiseTime++;
    this.scale = yScale;
    this.pointsPerLine = pointsPerLine;
    if (isSynced) {
      this.vertexIncrement = map(cos(this.time / fps / 3), -1, 1, minVertexIncrement, this.initVertexIncrement);
    } else {
      this.vertexIncrement = vertexIncrement;
    }
    this.lineLength = sin(this.time / fps / 2) * this.initLineLength;
    if (this.lineLength >= 0 && this.prevLineLength < 0) {
      if (isSynced) {
        this.lineColor = bgColor === bgColor1 ? this.blackColor : this.whiteColor;
      } else {
        this.lineColor = this.whiteColor;
      }
      isFlip = true;
    } else if (this.lineLength <= 0 && this.prevLineLength > 0) {
      this.lineColor = this.redColor;
      isFlip = true;
    } else {
      isFlip = false;
    }
    this.prevLineLength = this.lineLength;
  }
  
  draw() {
    noFill();

    push();
      translate(this.xPos + leftMargin, this.yPos + topMargin);
      stroke(this.lineColor);
      strokeWeight(this.thickness);
      let noiseTime = this.noiseTime; 
      
      beginShape();
      
      for (let c = 0; c < this.pointsPerLine; c+=this.vertexIncrement) {
        vertex(c * this.lineLength, noise(0.02 * noiseTime) * this.scale);
        noiseTime+=1;
      }
      
      endShape();
      fill(this.lineColor);
      circle((this.pointsPerLine) * this.lineLength, noise(0.02 * noiseTime) * this.scale, 3);
    pop();
    
  }
}

function mouseMoved() {
  pointsPerLine = map(mouseX, 0, maxW, minPointsPerLine, maxPointsPerLine);
  vertexIncrement = map(mouseY, 0, maxH, minVertexIncrement, maxVertexIncrement);
}

function windowResized() {
  init(windowWidth, windowHeight);
}

function keyPressed() {
  const fileName = `${info.artist}_${info.title}_${fixedSize}`;
  if (key === 'g') {
    saveGif(`${fileName}`, 9);
  } else if (key === 's') {
    saveCanvas(`${fileName}`, 'png');
  } else if (key === '0') {
    init(windowWidth, windowHeight);
  } else if (key === '1') {
    init(1024, 1024);
  } else if (key === '2') {
    init(2048, 2048);
  }
}

