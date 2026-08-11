function setup() {
  let seed = fxrand() * 999999;
  randomSeed(seed);
  noiseSeed(seed);
  fxpreview();
  createCanvas(windowWidth, windowHeight);
  // noLoop();
  frameRate(5);
  let blendModes = ["DIFFERENCE", "MULTIPLY"];
  let currentBlendMode = random(blendModes);
  blendMode(window[currentBlendMode]);
  setTimeout(stopDrawing, 1000);
}

function draw() {
  background(0, 1);

  for (let i = 0; i < random(100); i++) {
    // Generate random properties for the circle
    let x = random(random(800), random(800));
    let y = random(random(800), random(800));
    let diameter = random(10, 50);
    let colors = color(random(255), random(255), random(255));
    let noiseScale = random(0.005, 0.05);

    let noiseVal = noise(x * noiseScale, y * noiseScale);
    let pixelSize = map(noiseVal, random(0.1, 1), 1, 1, diameter * random(1));

    fill(colors);
    ellipse(x, y, diameter, diameter);
    fill(255);
    ellipse(x, y, pixelSize, pixelSize);
  }
}

function stopDrawing() {
  noLoop();
}
