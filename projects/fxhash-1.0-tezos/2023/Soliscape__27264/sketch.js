let timer;
let silhouetteColor = 255;
let noiseScale = 0.01;
function setup() {
  let seed = fxrand() * 999999;
  randomSeed(seed);
  noiseSeed(seed);
  fxpreview();
  createCanvas(1000, 1000);
  noLoop();
  noStroke();
  // blendMode(DIFFERENCE);
  timer = setTimeout(stopNoise, 2000); // Stop the noise after 2 seconds
}

let mountainColors = [
  "#000000", // Black
  "#654321", // Dark Brown
  "#A0522D", // Sienna
  "#8B4513", // Saddle Brown
  "#CD853F", // Peru
  "#F4A460", // Sandy Brown
  "#D2B48C", // Tan
  "#DEB887", // Burlywood
  "#FFDEAD", // Navajo White
  "#F5F5DC", // Beige
];

function getRandomMountainColor() {
  let randomIndex = Math.floor(fxrand() * mountainColors.length);
  return mountainColors[randomIndex];
}

function stopNoise() {
  noLoop(); // Stop looping
}
function draw() {
  shapes();
  noisee();
}
function noisee() {
  background(0);

  let gridSize = 3;
  let rows = floor(width / gridSize);
  let cols = floor(height / gridSize);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * gridSize;
      let y = i * gridSize;

      let c =
        noise(x * floor(random(0.01, 1)), y * floor(random(0.2, 3))) * 255;

      fill(c);
      rect(x, y, gridSize, gridSize);
    }
  }

  blendMode(DIFFERENCE);

  setTimeout(mountain, 0);
}

function mountain() {
  let randomColor = getRandomMountainColor();
  fill(randomColor);

  let numMountains = 5;
  let mountainSpacing = Math.round(width / (numMountains - 1)); // Round the mountain spacing

  for (let i = 0; i < numMountains; i++) {
    let mountainHeight = random(height * 0.2, height * 0.5);
    let mountainX = Math.round(i * mountainSpacing);
    beginShape();
    vertex(mountainX, height);

    for (let x = mountainX; x <= mountainX + mountainSpacing; x++) {
      let noiseValue = noise(x * noiseScale, frameCount * noiseScale);
      let y = map(noiseValue, 0, 1, mountainHeight, height);
      vertex(x, y);
    }

    vertex(mountainX + mountainSpacing, height);
    endShape(CLOSE);
  }

  let shadowColor = color(255);
  drawingContext.shadowColor = shadowColor;
  drawingContext.shadowBlur = 1500;
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  setTimeout(shapes, 0);
}

function shapes() {
  let shape = random(["ellipse"]);

  let x = width / 2 + random(-500, 500);
  let y = height / 2 + random(-150, -200);

  let size = random(70, 600);

  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);

  if (shape === "rectangle") {
    rect(x, y, size, size);
  } else if (shape === "ellipse") {
    ellipse(x, y, size, size);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('Soliscape', 'png');
  }
}

