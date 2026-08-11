let gradientCount = 3; // Number of gradient colors (2, 3, or 4)
let borderColor;
let borderOn = true;
let fxSeed;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  colorMode(HSB, 360, 100, 100, 255); // Use HSB for vibrant colors with alpha
  rectMode(CENTER);
  imageMode(CENTER);
  noLoop();

  // Lock the random generator to the fxhash so each mint is reproducible
  fxSeed = floor($fx.rand() * 1000000);
  randomSeed(fxSeed);
  noiseSeed(fxSeed);

  // Set the border color to gray (keep the frame gray)
  borderColor = color(0, 0, 50, 200); // Gray with some transparency
  background(0, 0, 100); // White background (area outside the frame)

  drawArtwork();
  applyBlurEffect();
}

function drawArtwork() {
  // Draw the main border rectangle
  if (borderOn) {
    stroke(borderColor);
    strokeWeight(4);
  } else {
    noStroke();
  }
  rect(width / 2, height / 2, 600, 700);

  // Draw vertical rectangles with gradient tiles
  for (let i = 0; i < 3; i++) {
    let x = 200 + 200 * i;
    let y = height / 2;

    // Draw base rectangles with white color
    noStroke();
    fill(0, 0, 100, 255); // White fill
    rect(x, y, 200, 700);

    // Add gradient tiles
    for (let j = 0; j < 3; j++) {
      let tileY = map(j, 0, 3, 166, 863);
      let colors = getRandomColors(gradientCount);
      drawGradientTile(x, tileY, colors);
    }
  }
}

function drawGradientTile(x, y, colors) {
  let cnv = createGraphics(150, 233);
  cnv.colorMode(HSB, 360, 100, 100, 255); // Match main canvas color mode
  cnv.background(0, 0, 100); // White background behind the gradient colors
  cnv.noStroke();
  cnv.loadPixels();

  for (let i = 0; i < cnv.width; i++) {
    for (let j = 0; j < cnv.height; j++) {
      let index = (i + j * cnv.width) * 4;
      let colorValue = interpolateColors(colors, i);

      // Adjust transparency for very translucent gradients
      let alpha = map(j, 0, cnv.height, 20, 100); // Reduced alpha for more transparency
      cnv.pixels[index] = red(colorValue);
      cnv.pixels[index + 1] = green(colorValue);
      cnv.pixels[index + 2] = blue(colorValue);
      cnv.pixels[index + 3] = alpha;
    }
  }

  cnv.updatePixels();
  image(cnv, x, y);
}

function interpolateColors(colors, x) {
  let segmentLength = 150 / (colors.length - 1);
  let segmentIndex = floor(x / segmentLength);
  let startColor = colors[segmentIndex];
  let endColor = colors[segmentIndex + 1];
  let t = (x % segmentLength) / segmentLength;

  return lerpColor(startColor, endColor, t);
}

function getRandomColors(count) {
  let colors = [];
  for (let i = 0; i < count; i++) {
    let hue = random([0, 30, 210]); // Red, yellow, blue hues
    let saturation = random(80, 100); // High saturation
    let brightness = random(80, 100); // High brightness
    colors.push(color(hue, saturation, brightness, 120)); // Increased transparency
  }
  return colors;
}

function applyBlurEffect() {
  for (let i = 0; i < 3; i++) {
    let x = 200 + 200 * i;
    let y = height / 2;
    let img = get(x - 50, y - 350, 100, 700); // Capture vertical section
    img.filter(BLUR, 10); // Apply blur effect
    image(img, x, y);
  }
}