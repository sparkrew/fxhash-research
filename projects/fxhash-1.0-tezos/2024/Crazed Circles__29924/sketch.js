let numLayers;
let numPoints;
let baseRadius;

function setup() {
  createCanvas(2000, 2000);
  randomizeParameters();
  background($fx.rand()*256);
  noFill();
}

function draw() {
  translate(width / 2, height / 2);

  let useFirstConfig = $fx.rand();

  if (useFirstConfig  > 0.15) {
    drawPattern1();
  } else {
    drawPattern2();
  }

  noLoop(); // Uncomment this line to make it a static image
}

function drawPattern1() {
  for (let layer = 0; layer < numLayers; layer++) {
    let layerRadius = baseRadius + layer * $fx.rand()*40 +20;
    let layerColor = color($fx.rand()*256, $fx.rand()*256, $fx.rand()*256, $fx.rand()*100 +50);
    let layerWeight = $fx.rand()*4+0.5;
    stroke(layerColor);
    strokeWeight(layerWeight);

    beginShape();
    for (let i = 0; i < numPoints; i++) {
      let angle = map(i, 0, numPoints, 0, TWO_PI);
      let x = cos(angle) * (layerRadius + cos(frameCount * 0.02 * (layer + 1) * i) * $fx.rand()*40 +30);
      let y = sin(angle) * (layerRadius + sin(frameCount * 0.02 * (layer + 1) * i) * $fx.rand()*40 +30);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function drawPattern2() {
  for (let layer = 0; layer < numLayers; layer++) {
    let layerRadius = baseRadius + layer * 40;
    let layerColor = color($fx.rand()*256, $fx.rand()*256, $fx.rand()*256, $fx.rand()*100 +50);
    let layerWeight = $fx.rand()*4+0.5;
    stroke(layerColor);
    strokeWeight(layerWeight);

    beginShape();
    for (let i = 0; i < numPoints; i++) {
      let angle = map(i, 0, numPoints, 0, TWO_PI);
      let x = cos(angle) * (layerRadius + cos(frameCount * 0.02 * (layer + 1) * i) * 50);
      let y = sin(angle) * (layerRadius + sin(frameCount * 0.02 * (layer + 1) * i) * 50);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

function randomizeParameters() {
  numLayers = ($fx.rand()*12+5);
  numPoints = ($fx.rand()*600+200);
  baseRadius = ($fx.rand()*200+100);
}
