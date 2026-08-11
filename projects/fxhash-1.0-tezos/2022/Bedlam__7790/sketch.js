w = window.innerHeight * 0.6;
h = window.innerHeight;
canv = (w + h) * 0.5;
scl = canv * 0.025;
cols = w / scl;
rows = h / scl;

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(fxrand() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function randomVal(min, max) {
  return fxrand() * (max - min) + min;
}
function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

const bgCols = [
  "black",
  "white",
  "#A69586",
  "#F2E8DF",
];

const pal = [
  ["#FFF1E8", "#194973", "#FFCCAA", "#FF77A8"],//yes
  ["#5a189a", "#c77dff", "#6c9e75", "#edf2f4"],//hulk sure
  ["#0F0F0F", "#3A3A3A", "#292929", "#F0F0F0"],//monochrome stays
  ["#261B12", "#A66C4B", "#A6948A", "#73261F"],//edited
  ["#59878A", "#C64C3F", "#657A65", "#1E3B46"],//sure
  ["#D9BBB0", "#BF8173", "#A62929", "#401010"],// start of new palettes
  ["#4971A6", "#6093BF", "#F2F0F0", "#D9756C"],//chilly
  ["#4971A6", "#D9D8D7", "#F29F8D", "#A64138"],//sure
  ["#365073", "#222F40", "#F2F2F2", "#7A643F"],//stays, nice n simple
  ["#F2D750", "#F29F05", "#BF6B04", "#260801"],//yes
  ["#A6323B", "#F29422", "#F2D9D0", "#F28E85"],//yee
  ["#401122", "#0E0F26", "#0C2059", "#D8D9D7"],//maybe
  ["#79818C", "#98A2A6", "#590202", "#0D0000"],//yes
  ["#455E3E", "#685C44", "#5F7343", "#3F4027"],//green and earthy
  ["#032026", "#01403A", "#F2E4C9", "#A63126"],//sure yeah
  ["#B4B79D", "#232617", "#0D0D0B", "#736938"],//deeeep, slightly ugly but charming
  ["#5A668C", "#9CABD9", "#D9AC84", "#8C3503"],//medium
  ["#59180e", "#F4F6F5", "#386D8F", "#AF4530"],//icy with some fire
  ["#1D2C40", "#2D5967", "#F2E8DF", "#A75F49"],//good
  ["#025959", "#F2F2F2", "#E9A147", "#A63429"],
  ["#92A69E", "#F2CDAC", "#8C5B3F", "#0D0D0D"],
  ["#F3C5C5", "#C1A3A3", "#886F6F", "#694E4E"],
  ["#FEF5ED", "#D3E4CD", "#ADC2A9", "#99A799"],
  ["#DBD0C0", "#181D31", "#F9E4C8", "#F9CF93"],
  ["#FCF8E8", "#D4E2D4", "#ECB390", "#DF7861"],

];

pall = randomInt(0, 24);

colA = pal[pall][randomInt(0, 3)];
colB = pal[pall][randomInt(0, 3)];
colC = pal[pall][randomInt(0, 3)];
colD = pal[pall][randomInt(0, 3)];
accentCol = pal[pall][randomInt(0, 3)];
bgcNum = randomInt(0, 3);
bgc = bgCols[bgcNum];

angScale = 5;
let zoff = 0;
vectorNum = cols * rows;
vectors = [];
brshs = [];
spdL = randomVal(canv * 0.002, canv * 0.005);
let splatMult = 1;
let splats = 0;
strokePtsA = [];
strokePtsB = [];
strokePtsC = [];
strokePtsD = [];
accPts = [];
sizeA = randomVal(2, 3);
sizeB = randomVal(1.5, 2);
sizeC = randomVal(1, 1.5);
sizeD = randomVal(0.05, 0.5);
sizeAcc = 0.03
ptsAcc = 0.03
strokeNum = 0;
maxStrokes = randomInt(5, 30);
strokeLength = randomInt(300, 600);

//deciders
deciderA = randomInt(1, 5)
deciderB = randomInt(1, 5)
deciderC = randomInt(1, 5)
deciderD = randomInt(1, 5)

window.$fxhashFeatures = {
  "Background": bgcNum + 1,
  "# of Strokes": maxStrokes * 5,
  "Palette": pall + 1,
  "Stroke Length": Math.round(map_range(strokeLength, 300, 600, 1, 10)),
  "Intensity": Math.round(map_range(spdL, canv*0.002, canv*0.005, 1, 10))
};

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  for (let i = 0; i < maxStrokes; i++) {
    strokePtsA[i] = new brush();
    strokePtsB[i] = new brush();
    strokePtsC[i] = new brush();
    strokePtsD[i] = new brush();
    accPts[i] = new brush();
  }
}

function draw() {
  noiseSeed(randomInt(1000000));
  noiseDetail(24);
  popPop = map(noise(frameCount*0.1), 0, 1, 0.005, 1.5)


  if (frameCount < 2) {
    background(bgc);
  }

  for (x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      strokeWeight(canv * 0.005);
      nAng = map(noise(x * angScale, y * angScale, zoff), 0, 1, 0, 360);
      index = x + y * cols;
      v = p5.Vector.fromAngle(nAng);
      v.setMag(popPop);
      vectors[index] = v;
    }
  }

  if (frameCount < strokeLength) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colA);
      fill(colA)
      startFrame = frameCount;
      strokePtsA[i].follow(vectors);
      strokePtsA[i].update();
      strokePtsA[i].bounce();

      if(deciderA === 1) {
        strokePtsA[i].dispFlatVert(sizeA, sizeA)
      }else if (deciderA === 2) {
        strokePtsA[i].dispSquare(sizeA, sizeA)
      } else if(deciderA === 3) {
        strokePtsA[i].dispSwirl(sizeA, sizeA)
      } else if (deciderA === 4) {
        strokePtsA[i].dispFlatHoriz(sizeA, sizeA)
      } else if (deciderA === 5) {
        strokePtsA[i].dispRoundLine(sizeA, sizeA)
      }


    }
  }

  if (frameCount > strokeLength * 1 && frameCount < strokeLength * 2.5) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colB);
      fill(colB)
      startFrame = frameCount;
      strokePtsB[i].follow(vectors);
      strokePtsB[i].update();
      strokePtsB[i].bounce();
      if(deciderB === 1) {
        strokePtsB[i].dispFlatVert(sizeB, sizeB)
      }else if (deciderB === 2) {
        strokePtsB[i].dispSquare(sizeB, sizeB)
      } else if(deciderB === 3) {
        strokePtsB[i].dispSwirl(sizeB, sizeB)
      } else if (deciderB === 4) {
        strokePtsB[i].dispFlatHoriz(sizeB, sizeB)
      } else if (deciderB === 5) {
        strokePtsB[i].dispRoundLine(sizeB, sizeB)
      }

    }
  }

  if (frameCount > strokeLength * 2.5 && frameCount < strokeLength * 3.25) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colC);
      fill(colC)
      startFrame = frameCount;
      strokePtsC[i].follow(vectors);
      strokePtsC[i].update();
      strokePtsC[i].bounce();
      if(deciderC === 1) {
        strokePtsC[i].dispFlatVert(sizeC, sizeC)
      } else if (deciderC === 2) {
        strokePtsC[i].dispSquare(sizeC, sizeC)
      } else if(deciderC === 3) {
        strokePtsC[i].dispSwirl(sizeC, sizeC)
      } else if (deciderC === 4) {
        strokePtsC[i].dispFlatHoriz(sizeC, sizeC)
      } else if (deciderC === 5) {
        strokePtsC[i].dispRoundLine(sizeC, sizeC)
      }

    }
  }

  if (frameCount > strokeLength * 3.25 && frameCount < strokeLength * 3.75) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(colD);
      fill(colD)
      startFrame = frameCount;
      strokePtsD[i].follow(vectors);
      strokePtsD[i].update();
      strokePtsD[i].bounce();
      if(deciderD === 1) {
        strokePtsD[i].dispFlatVert(sizeD, sizeD)
      } else if (deciderD === 2) {
        strokePtsD[i].dispSquare(sizeD, sizeD)
      } else if(deciderD === 3) {
        strokePtsD[i].dispSwirl(sizeD, sizeD)
      } else if (deciderD === 4) {
        strokePtsD[i].dispFlatHoriz(sizeD, sizeD)
      } else if (deciderD === 5) {
        strokePtsD[i].dispRoundLine(sizeD, sizeD)
      }

    }
  }

  if (frameCount > strokeLength * 3.75 && frameCount < strokeLength * 4) {
    for (let i = 0; i < maxStrokes; i++) {
      stroke(accentCol);
      fill(accentCol)
      startFrame = frameCount;
      accPts[i].follow(vectors);
      accPts[i].update();
      accPts[i].bounce();
      accPts[i].dispRoundLine(sizeAcc, ptsAcc);

    }
  }

  // BORDER
  push();
  marg = canv * 0.01;

  blendMode(BLEND);
  fill('white');
  stroke('white');
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
    l = randomInt(canv*0.005, canv*0.01)
    xa = randomInt(0, w)
    ya = randomInt(0, h)
    xb = xa + randomInt(-l, l)
    yb = ya + randomInt(-l, l)
    push()
    strokeWeight(canv*0.001)
    line(xa, ya, xb, yb);
    pop()
    splatMult += 1;
    splats += 1;
  }
  zoff += 0.1;

  if (frameCount === strokeLength * 4) {
    fxpreview();
  }
}

function keyTyped() {
  if (key === "s") {
    save("Bedlam.png");
  }
}
