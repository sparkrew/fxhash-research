const info = {
    title: "Complementary Opposites",
    date: "October 2024",
    artist: "_md",
    website: "https://marcduiker.dev",
}

let lines = [];
let nrOfSegments = 100;
let segmentLength = 2;
let yTime= 0;
let fps = 30;
let skipX;
const skipXMin = 1;
const skipXMax = 30;
let fade = 120;
let yTimeIncr;
const yTimeIncrMin = 0.000001;
const yTimeIncrMax = 0.0001;
let cycleTime;
const cycleTimeMin = 0.25;
const cycleTimeMax = 4;
let xNoiseScale;
const xNoiseScaleMin = 20;
const xNoiseScaleMax = 200;
let maxW, maxH;
let W, H;
let isSolid = false;

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
    id: "solid",
    name: "Solid",
    type: "boolean",
    default: false,
  }
]);
let seed = $fx.rand() * 1e9;

$fx.features({
  "Solid": `${$fx.getParam("solid")}`,
  "Vertical mouse movement": "Changes the speed of the noise and the cycle time between the white and red.",
  "Horizontal mouse movement": "Changes the number of segments (when solid is false) and the zoom level of the noise.",
});

function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  frameRate(fps);
  isSolid = $fx.getParam("solid");
  noiseDetail(4, 0.2);
  maxW = windowWidth;
  maxH = windowHeight;
  init(maxW, maxH);
}

function init(sizeW, sizeH) {
  lines = [];
  H = sizeH;
  W = sizeW;
  createCanvas(W, H);
  skipX = floor(random(skipXMin, skipXMax/5));
  nrOfSegments = floor(W / skipX);
  segmentLength = sizeW / nrOfSegments;
  lines.push(new WobblyLine(nrOfSegments, segmentLength));
  yTimeIncr = 0.00005;
  xNoiseScale = random(xNoiseScaleMin, xNoiseScaleMax / 2);
  cycleTime = 2;
  newCycleTime = 2;
}

function draw() {
  background(10,fade);
  lines.forEach(l => {
    l.update();
    l.draw();
  });
}

class WobblyLine {
  constructor(nrOfSegments, segmentLength) {
    this.nrOfSegments = nrOfSegments;
    this.segmentLength = segmentLength;
    this.scale = H/4;
    this.x = 0;
    this.y = H/2 - this.scale/4;
    this.totalHeight = H/8;
    this.height1 = this.totalHeight/2 + sin(frameCount / fps * cycleTime) * this.totalHeight/2;
    this.height2 = this.totalHeight - this.height1;
  }
  
  update() {
    this.nrOfSegments = W / skipX;
    this.segmentLength = W / this.nrOfSegments;
    this.height1 = this.totalHeight/2 + sin(frameCount / fps * cycleTime) * this.totalHeight/2;
    this.height2 = this.totalHeight - this.height1;
  }
  
  draw() {
    strokeWeight(1);
    noFill();
    for (let s = 0; s <= this.nrOfSegments; s++) {
      let x = this.x + s * this.segmentLength;
      let y = this.y + noise(x/xNoiseScale, yTime) * this.scale;

      stroke(palette.colors[0]);
      line(x, y, x, y - this.height2);
      stroke(palette.colors[1]);
      line(x, y, x, y + this.height1);
      
      yTime += yTimeIncr;
    }
  }
}

function mouseMoved() {
  if (!isSolid) {
    skipX = floor(map(mouseX, 0, W, skipXMin, skipXMax));
  } else {
    skipX = 1;
  }
  fade = map(mouseY, 0, H, 10, 255);
  yTimeIncr = map(mouseY, 0, H, yTimeIncrMax, yTimeIncrMin);
  xNoiseScale = map(mouseX, 0, W, xNoiseScaleMin, xNoiseScaleMax);
  cycleTime = map(mouseY, 0, H, cycleTimeMax, cycleTimeMin);
}

function windowResized() {
  init(windowWidth, windowHeight);
}

function keyPressed() {
  const fileName = `${info.artist}_${info.title}`;
  if (key === 'g') {
    saveGif(`${fileName}`, 6);
  } else if (key === 's') {
    saveCanvas(`${fileName}`, 'png');
  } else if (key === '0') {
    init(windowWidth, windowHeight);
  } else if (key === '1') {
    init(1024, 1024);
  } else if (key === '2') {
    init(2048, 2048);
  } else if (key === '3') {
    init(4096, 4096);
  }
}

