//features
const FEATURES = {
  BACKGROUND: [
    {
      label: "Solid",
      value: "solid"
    },
    {
      label: "Gradient",
      value: "gradient"
    },
  ],
  SHAPE: [
    {
      label: "Square",
      value: "square"
    },
    {
      label: "Round",
      value: "round"
    }
  ],
  SECTION: [
    {
      label: "Inner",
      value: "inner"
    },
    {
      label: "Horizotal",
      value: "horizontal"
    },
    {
      label: "Vertical",
      value: "vertical"
    },
    {
      label: "Center Vertical",
      value: "centerv"
    },
    {
      label: "Center Horizontal",
      value: "centerh"
    },
    {
      label: "Quadrant",
      value: "quadrant"
    },
    {
      label: "Positive Diagonal",
      value: "diagonalp"
    },
    {
      label: "Negative Diagonal",
      value: "diagonaln"
    }
  ],
  ANGLES: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, "random"],
  HUES: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
};

//hash constants
const chosenBg = selectRandomFromArray(fxrand(), FEATURES.BACKGROUND);
const chosenShape = selectRandomFromArray(fxrand(), FEATURES.SHAPE);
const chosenSection = selectRandomFromArray(fxrand(), FEATURES.SECTION);
const chosenAngle1 = selectRandomFromArray(fxrand(), FEATURES.ANGLES);
const filteredAngles = FEATURES.ANGLES.filter((value) => value != chosenAngle1);
const chosenAngle2 = selectRandomFromArray(fxrand(), filteredAngles);
const chosenHue = selectRandomFromArray(fxrand(), FEATURES.HUES);
const rSeed = fxrand() * 10000;

window.$fxhashFeatures = {
  "Background Type": chosenBg.label,
  "Background Hue": chosenHue,
  Shape: chosenShape.label,
  Section: chosenSection.label,
  Angle1: chosenAngle1,
  Angle2: chosenAngle2,
};
//console.log(window.$fxhashFeatures);

//constants
const totalTries = 5000;
const totalSizes = 10;
const cubeColor = ["#dddddd", "#999999", "#444444"];
const borderP = 0.1;
const areaRadiusP = 0.4;
const innerRadiusP = 0.25;
const gWidth = 4000;
const gHeight = 4000;

//runtime variables
const isFullViewport = false;
const cubes = [];
let startSizeP = 0.03;
let pg;

function setup() {
  if (isFullViewport) {
    //if canvas is full viewport
    createCanvas(windowWidth, windowHeight);
  } else {
    //if canvas is a square
    windowSizeMin = windowWidth < windowHeight ? windowWidth : windowHeight;
    createCanvas(windowSizeMin, windowSizeMin);
  }
  pg = createGraphics(gWidth, gHeight);

  angleMode(DEGREES);
  //colorMode(HSL, 360, 100, 100, 1)
  colorMode(HSL);
  randomSeed(rSeed);

  for (let i = 0; i < totalTries; i++) {
    const sizeP = computeSize(i);
    const xyP = computeXYP();
    const angle = computeAngle(xyP);
    const willInclude = computeWillInclude(xyP.xP, xyP.yP, sizeP);
    if (willInclude) {
      //compute angle
      cubes.push(new Cube(xyP.xP, xyP.yP, sizeP, angle));
    }
  }

  noLoop();
}

function windowResized() {
  if (isFullViewport) {
    //if canvas is full viewport
    resizeCanvas(windowWidth, windowHeight);
  } else {
    //if canvas is a square
    windowSizeMin = windowWidth < windowHeight ? windowWidth : windowHeight;
    resizeCanvas(windowSizeMin, windowSizeMin);
  }
}

function draw() {
  createBg();

  cubes.forEach((el) => {
    el.render();
  });

  image(pg, 0, 0, width, height);

  fxpreview();
}

function computeSize(count) {
  const d = totalTries / totalSizes;
  if (count % d === 0) {
    startSizeP = startSizeP * 0.8;
  }
  return startSizeP;
}

function computeWillInclude(xP, yP, rP) {
  let include = true;
  cubes.forEach((el) => {
    const d = dist(xP, yP, el.xP, el.yP);
    if (d < rP + el.rP) {
      include = false;
    }
  });
  return include;
}

function computeXYP() {
  let xyP = {};
  if (chosenShape.value === "square") {
    //square
    xyP = {
      xP: random(borderP, 1 - borderP),
      yP: random(borderP, 1 - borderP)
    };
  } else {
    //circle
    const angle = random(0, 360);
    xyP = {
      xP: 0.5 + random(0, areaRadiusP) * cos(angle),
      yP: 0.5 + random(0, areaRadiusP) * sin(angle)
    };
  }

  return xyP;
}

function computeAngle(xyP) {
  let angle = 0;
  let angle1 = chosenAngle1 === "random" ? random(0, 360) : chosenAngle1;
  let angle2 = chosenAngle2 === "random" ? random(0, 360) : chosenAngle2;
  switch (chosenSection.value) {
    case "inner":
      if (dist(xyP.xP, xyP.yP, 0.5, 0.5) < innerRadiusP) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "horizontal":
      if (xyP.yP > 0.5) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "vertical":
      if (xyP.xP < 0.5) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "centerv":
      if (xyP.xP > 0.3 && xyP.xP < 0.7) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "centerh":
      if (xyP.yP > 0.3 && xyP.yP < 0.7) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "quadrant":
      if ((xyP.xP < 0.5 && xyP.yP < 0.5) || (xyP.xP > 0.5 && xyP.yP > 0.5)) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "diagonalp":
      if (xyP.xP > 1 - xyP.yP) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    case "diagonaln":
      if (xyP.xP < xyP.yP) {
        angle = angle1;
      } else {
        angle = angle2;
      }
      break;
    default:
      angle = random(FEATURES.ANGLES);
  }
  return angle;
}

function getRandomAngle() {
  return random(FEATURES.ANGLES);
}

class Cube {
  constructor(xP, yP, rP, angle) {
    this.xP = xP;
    this.yP = yP;
    this.rP = rP;
    this.angle = angle;
  }
  render() {
    const radius = this.rP * gWidth;
    const center = {
      x: this.xP * gWidth,
      y: this.yP * gWidth
    };
    const pts = [];

    const angles = [0, 60, 120, 180, 240, 300].map((el) => el + this.angle);

    angles.forEach((el) => {
      pts.push({
        x: center.x + radius * cos(el),
        y: center.y + radius * sin(el)
      });
    });

    pg.noStroke();
    pg.fill(cubeColor[0]);
    pg.beginShape();
    pg.vertex(pts[5].x, pts[5].y);
    pg.vertex(pts[0].x, pts[0].y);
    pg.vertex(pts[1].x, pts[1].y);
    pg.vertex(center.x, center.y);
    pg.endShape();

    pg.fill(cubeColor[1]);
    pg.beginShape();
    pg.vertex(pts[1].x, pts[1].y);
    pg.vertex(pts[2].x, pts[2].y);
    pg.vertex(pts[3].x, pts[3].y);
    pg.vertex(center.x, center.y);
    pg.endShape();

    pg.fill(cubeColor[2]);
    pg.beginShape();
    pg.vertex(pts[3].x, pts[3].y);
    pg.vertex(pts[4].x, pts[4].y);
    pg.vertex(pts[5].x, pts[5].y);
    pg.vertex(center.x, center.y);
    pg.endShape();
  }
}

function createBg() {
  pg.noStroke();
  if (chosenBg.value === "gradient") {
    const clr1 = color(chosenHue, 100, 100, 1);
    const clr2 = color(chosenHue, 100, 30, 1);
    const gradient = pg.drawingContext.createRadialGradient(
      gWidth / 2,
      gHeight / 2,
      0,
      gWidth / 2,
      gHeight / 2,
      gWidth
    );
    gradient.addColorStop(0, clr1);
    gradient.addColorStop(1, clr2);
    pg.drawingContext.fillStyle = gradient;
    pg.rect(0, 0, gWidth, gHeight);
  } else {
    const clr = color(chosenHue, 60, 90, 1);
    pg.fill(clr);
    pg.rect(0, 0, gWidth, gHeight);
  }
  
}

function selectRandomFromArray(val, arr) {
  const idx = Math.floor(val * arr.length);
  return arr[idx];
}

function keyTyped() {
  if (key === "s") {
    pg.save("canvas.png");
  }
}