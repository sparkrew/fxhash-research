function getBackground() {
  seed = fxrand();
  if (seed < 0.075) return "light";
  else return "dark";
}

function getLoops() {
  seed = fxrand();
  if (seed < 0.3) return "low";
  if (seed < 0.6) return "medium";
  else return "high";
}

function getScanLines() {
  seed = fxrand();
  if (seed < 0.55) return "horizontal";
  if (seed < 0.9) return "vertical";
  else return "none";
}

function getObjectSize() {
  seed = fxrand();
  if (seed < 0.15) return "small";
  if (seed < 0.55) return "medium";
  else return "large";
}

function getObjectParam() {
  pv = [];
  objWidth = 0;
  objHeight = 0;

  x = fxrand() * canvasWidth;
  y = fxrand() * canvasHeight;

  if (objectSize == "small") {
    objWidth = canvasWidth * 0.03;
    objHeight = canvasHeight * 0.025;
  } else if (objectSize == "medium") {
    objWidth = canvasWidth * 0.06;
    objHeight = canvasHeight * 0.055;
  } else if (objectSize == "large") {
    objWidth = canvasWidth * 0.08;
    objHeight = canvasHeight * 0.075;
  }

  adjMarginX = margin + objWidth;
  adjMarginY = margin + objHeight;

  if (x < margin) {
    x = x + adjMarginX;
  }
  
  if (x > canvasWidth - adjMarginX) {
    x = x - adjMarginX;
  }
  
  if (y < margin) {
    y = y + adjMarginY;
  }
  
  if (y > canvasHeight - adjMarginY) {
    y = y - adjMarginY;
  }

  pv = [x, y, objWidth, objHeight];

  return pv;
}

function buildBackground(selBkg) {
  if (selBkg == "light") {
    pg.background(230, 230, 230);
  } else {
    pg.background(56, 56, 56);
  }
}
function addRect(iteration, color) {
  seed = fxrand();
  pg.stroke(200 + seed * 55, 10 + seed * 10);
  pg.strokeWeight(seed * 100);

  if (iteration == 1) {
    pg.fill(color);
  } else if (iteration == 2) {
    pg.fill(seed * 55, seed * 55, seed * 55, seed * 40);
  }

  pv = getObjectParam(objectSize);
  pg.rect(pv[0], pv[1], pv[2], pv[3]);
}

function buildPattern() {
  seed = fxrand();
  selColor = colorList[parseInt(seed * colorList.length)];

  if (loops == "low") {
    selLoops = canvasWidth * 0.25;
  } else if (loops == "medium") {
    selLoops = canvasWidth * 0.45;
  } else if (loops == "high") {
    selLoops = canvasWidth * 0.5;
  }

  for (i = 0; i < selLoops; i++) {
    if (seed <= 0.5) {
      addRect(1, selColor);
      addRect(2, selColor);
    } else {
      addRect(1, selColor);
      addRect(2, selColor);
    }
  }
}

function addScanLines(scanLines) {
  pg.stroke(0, 0, 0, 30);

  if (scanLines == "horizontal") {
    for (i = 0; i < canvasHeight; i = i + 10) {
      pg.strokeWeight(fxrand() * 50);
      pg.line(0, i, canvasWidth, i);
    }
  } else if (scanLines == "vertical") {
    for (i = 0; i < canvasWidth; i = i + 10) {
      pg.strokeWeight(fxrand() * 50);
      pg.line(i, 0, i, canvasWidth);
    }
  }
}

var colorList = [
  [245, 55, 50, 40], //redish
  [112, 192, 182, 40], //greenish blue
  [245, 198, 66, 40], //yellowish
  [245, 149, 66, 40], //orangeish
  [5, 101, 140, 40], //blueish
  [46, 160, 46, 40], //greenish
  [102, 58, 182, 40], //purplish
  [248, 52, 114, 40], //pinklish
];

function setup() {
  randomSeed(fxrand() * 9999999);
  noiseSeed(fxrand() * 9999999);
  canvasWidth = 2048;
  canvasHeight = 2048;

  pg = createGraphics(canvasWidth, canvasHeight);
  margin = canvasWidth * 0.05;
  createCanvas(windowWidth, windowHeight);

  selBkg = getBackground();
  buildBackground(selBkg);

  loops = getLoops();
  scanLines = getScanLines();
  objectSize = getObjectSize();

  addScanLines(scanLines);
  buildPattern();

  window.$fxhashFeatures = {
    background: selBkg,
    noise: loops,
    signal: scanLines,
    scale: objectSize,
  };

  image(pg, 0, 0, windowWidth, windowHeight);
  fxpreview();
}
