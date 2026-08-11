

let pinkPalette = ['#42002f', '#59254a','#aa4c90','	#cc6888','#800f2f','#b9375e','#820263','#e574bc','#7e007b'];
let orangePalette = ["#4f000b", "#720026", "#ce4257", "#ff7f51", "#ff9b54", "#8c1c13", "#bf4342", "#e7d7c1", "#a78a7f", "#735751", "#780116", "#f7b538", "#db7c26", "#d8572a", "#c32f27", "#f7b267", "#f79d65", "#f4845f", "#f27059", "#f25c54"];
let bluePalette = ["#c9e4ca", "#87bba2", "#55828b", "#3b6064", "#364958", "#07beb8", "#3dccc7", "#68d8d6", "#9ceaef", "#c4fff9", "#22577a", "#38a3a5", "#57cc99", "#80ed99", "#c7f9cc", "#5465ff", "#788bff", "#9bb1ff", "#bfd7ff", "#e2fdff"];
let rosePalette = ['#eeddd0', '#ddbcb3', '#d0a7a0', '#677469', '#94b0a2', '#C3E2C2', '#EAECCC', '#DBCC95', '#CD8D7A', "cebebe", "#ece2d0", "#d5b9b2", "#a26769", "#6d2e46"];
let greenPalette = ["#dde5b6", "#adc178", "#a98467", "#6c584c", "#606c38", "#283618", "#fefae0", "#dda15e", "#bc6c25"];
let warmPalette = ["#7D0A0A", "#BF3131", "#EAD196", "#F3EDC8", "#5F0F40", "#FB8B24", "#E3641", "#9A031E", "#952323", "#A73121", "#DAD4B5", "#F2E8C6"];
let drarkBluePalette = ["#023e7d", "#002855", "#001845", "#001233", "#33415c", "#5c677d", "#7d8597", "#979dac"];
let darkPinkPalette = ['#572649', '#79305a', '#8e3563', '#461959', '#7A316F'];
let darkRosePalette = ["#0a0908", "#49111c",  "#a9927d", "#5e503f"];
let darkWarmPalette = ["#780000", "#660000", "#520000", "#3d0000", "#290000", "#4f000b", "#720026", "#ce4257","#d8572a"];
let darkGreenPalette = ["#588157","#31572c","#373d20","#588157",'#6c584c',"#6f732f"];
let blobRad;
let res;
let angle;
let blobObj = [];
let totalBlobCount = 0;

let nowObjPalette;
let nowBlobPalette;

// paste to your sketch.js
let originalWidth = 400;
let originalHeight = 800;
let densityRatio = 1.0;

function setupDensity () {
  let originalRatio = originalWidth / originalHeight;
  let windowRatio = windowWidth / windowHeight;

  if (windowRatio > originalRatio) {
    densityRatio = windowHeight / originalHeight;
  } else {
    densityRatio = windowWidth / originalWidth;
  }

  densityRatio = max(2.0, densityRatio);
  console.log("densityRatio: " + densityRatio);
}

function keyPressed (e) {
  if(e.key == 's' || e.key == 'S')
  {
    let fileName = 'Ealaíne' + $fx.hash + '.png';
    save(fileName);
  }
}
// paste to your sketch.js

function setup() {
  console.log($fx.hash);
  randomSeed($fx.rand() * 10000000);
  noiseSeed($fx.rand()* 1000000);

  originalWidth = 400;
  originalHeight = 600;
  setupDensity();
  createCanvas(originalWidth, originalHeight);
  pixelDensity(densityRatio);

  flex();
 
  background(random(0, 50));
  angleMode(DEGREES);
  let colorRandom = random(0, 1);
  if (colorRandom < 0.1667)
    nowObjPalette = pinkPalette;
  else if (colorRandom < 0.3333)
    nowObjPalette = orangePalette;
  else if (colorRandom < 0.5)
    nowObjPalette = bluePalette;
  else if (colorRandom < 0.6667)
    nowObjPalette = warmPalette;
  else if (colorRandom < 0.8333)
    nowObjPalette = greenPalette;
  else
    nowObjPalette = rosePalette;

  let allBlobPalette = [];
  allBlobPalette[0] = drarkBluePalette;
  allBlobPalette[1] = darkPinkPalette;
  allBlobPalette[2] = darkRosePalette;
  allBlobPalette[3] = darkWarmPalette;
  allBlobPalette[4] = darkGreenPalette;

  nowBlobPalette = random(allBlobPalette);


  bufferCanv();
  noFill();
  // image(cnv,0,0);
  makeObjects();



  applyGranulate(45);

}

function bufferCanv() {
  cnv = createGraphics(width, height);
  cnv.noStroke();
  cnv.fill(200);

  let angle = radians(60);


  let rectWidth = random(width * 1, width * 5);
  let rectHeight = random(200, 400);



  cnv.translate(width * 0.5, height * 0.5);
  cnv.rotate(angle);

  cnv.rect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
}

function makeObjects() {
  let rectCount = 0;

  //  ellipses
  for (let i = 0; i < 400; i++) {
    x = random(0, 660);
    y = random(height);
    size = random(10, 50);
    col = cnv.get(x, y);

    if (col[0] === 0 || col[0] != 0) { 
      noStroke();

      let objColor = color(random(nowObjPalette));
      objColor.setAlpha(170);

      fill(objColor);
      ellipse(x, y, size, size);
      for (let j = 0; j < 3; j++) {
        let whiteEllipseX = x + random(-20, 20);
        let whiteEllipseY = y + random(-20, 20);
        let whiteEllipseSize = random(5, 15);

        stroke(255);
        noFill();
        ellipse(whiteEllipseX, whiteEllipseY, whiteEllipseSize, whiteEllipseSize);
      }
    }
  }

  // blob
  for (let i = 0; i < 60 && rectCount < 100; i++) {
    x = random(100, 500);
    y = random(-100, 800);

    col = cnv.get(x, y);

    if (col[0] !== 0) {
      fill(0);
      createBlob(x, y);
    }
  }
}

function createBlob(xPos, yPos) {
  let blobRad = 50;
  let angle = 360 / res;
  let blobObj = [];

  push();
  let blobColor = (color(random(nowBlobPalette)));
  blobColor.setAlpha(190);
  fill(blobColor, 20);
  translate(xPos, yPos);
  beginShape();

  noStroke();
  res = 10;

  for (let i = 0; i < res; i++) {
    blobRad += random(-20, 20);

    blobObj.push({
      "blobRad": blobRad,
      "x": blobRad * cos(angle * i),
      "y": blobRad * sin(angle * i)
    });
    curveVertex(blobObj[i].x, blobObj[i].y);
  }
  curveVertex(blobObj[0].x, blobObj[0].y);
  curveVertex(blobObj[1].x, blobObj[1].y);
  curveVertex(blobObj[2].x, blobObj[2].y);
  endShape();
  pop();

  if (random() > 0.1) {
    drawSmallPattern(xPos, yPos, angle, blobRad);
  }
}

function applyGranulate(amount) {
  loadPixels();
  const d = pixelDensity();
  const pixelsCount = 4 * (width * d) * (height * d);
  for (let i = 0; i < pixelsCount; i += 4) {
    const grainAmount = random(-amount, amount);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
  }
  updatePixels();
}

function drawSmallPattern(x, y, angle, size) {
  push();
  translate(x, y);

  // Hollow circle 
  ellipse(0, 0, size * 0.1); 

  for (let i = 0; i < 360; i += 20) {
    let x1 = cos(angle + i) * size * 0.1;
    let y1 = sin(angle + i) * size * 0.1;
    let x2 = cos(angle + i) * size * 0.75;
    let y2 = sin(angle + i) * size * 0.75 + random(-1.5, 1.5); // Adjust scale

    beginShape();
    for (let j = 0; j <= 1; j += 0.1) {
      let px = lerp(x1, x2, j);
      let py = lerp(y1, y2, j) + random(-1, 1);
      vertex(px, py);
    }
    endShape();
  }

  angle += 1;
  pop();
}


function drawCluster(x, y, numCircles, clusterSize) {
  let offsetX = random(clusterSize);
  let offsetY = random(clusterSize);

  //cluster
  for (let i = 0; i < numCircles; i++) {
    let diameter = random(10, 50);
    ellipse(x + offsetX, y + offsetY, diameter, diameter);
    offsetX += random(-20, 20);
    offsetY += random(-20, 10);
  }
}

