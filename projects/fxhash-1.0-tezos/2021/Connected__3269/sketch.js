let seed = fxrand() * 7177131.14651;
let sample = false;

let size;
let particlesQty = 5000;
let margin = 50;
let attractorsPadding = 50;
let showSeed = true;

let attractorsQty = Math.round(fxrand() * 13 + 3);
let lerpValue = fxrand() * 0.7 + 0.2;
let curvature = fxrand() ** 0.5;
let pathColor;

let attractorType = Math.floor(fxrand() * 3);

let borderLineWeight;
let borderLineColor;

let showAttractors = fxrand() < 0.5;
let attractorsRectSize;
let attractorsRectColor;
let attractorsRectWeight;

let colorRamp;
let colorRampColor2;
let colorRampColor1;

let generateAttractorsName = ["Random", "Circle", "Sinewave"][attractorType];
let   negativeImage = fxrand() < 0.1;
let col1, col2;
let hue1 = fxrand() * 360;
let hue2 = (720 + hue1 + (fxrand() * 240 - 120)) % 360;

let attractors = [];
let particles = [];
let traits = {};
updateTraits();

window.$fxhashFeatures = traits;

function setup() {
  size = min(windowWidth, windowHeight);

  createCanvas(size, size);

  if (seed == 0) seed = floor(random(99999));
  randomSeed(seed);
  updateMarginPadding();
  randomizer();
  console.log(traits);

  // set the path curvature
  curveTightness(1 - curvature);

  // generate the particles
  particles = generateParticles(particlesQty);

  // calculate the path of each particle
  calculatePath();

  noLoop();
}

function draw() {
  background(255);
  noFill();

  // trace the particles paths
  push();
  stroke(...pathColor);
  for (let particle of particles) {
    beginShape();
    curveVertex(particle.path[0].x, particle.path[0].y);
    for (let position of particle.path) {
      curveVertex(position.x, position.y);
    }
    curveVertex(
      particle.path[particle.path.length - 1].x,
      particle.path [particle.path.length - 1].y
    );
    endShape();
  }
  pop();

  // traces the attractors positions
  if (showAttractors) {
    push();
    stroke(...attractorsRectColor);
    strokeWeight(attractorsRectWeight);
    rectMode(CENTER);
    for (let attractor of attractors) {
      rect(attractor.x, attractor.y, attractorsRectSize);
    }
    pop();
  }

  // traces the border
  push();
  stroke(...borderLineColor);
  strokeWeight(borderLineWeight);
  rectMode(CENTER);
  rect(size / 2, size / 2, size - 2 * margin, size - 2 * margin);
  pop();

  // Show the seed number
  if (showSeed) {
    push();
    noStroke();
    fill(borderLineColor);
    textAlign(RIGHT, TOP);
    textSize(size / 30);
    // text(seed, size - margin, 1.01 * size - margin);
    pop();
  }

  if (colorRamp) {
    img = imageColorRamp(
      get(),
      color(...colorRampColor1),
      color(...colorRampColor2),
      1,
      HSL
    );
    image(img, 0, 0);
  }

  if (sample) {
    resetMatrix();
    textAlign(CENTER, CENTER);
    translate(width / 2, height / 2);
    rotate(-PI / 4);
    textStyle(BOLD);
    textSize(width / 4);
    noStroke();
    fill(255, 50);
    text("SAMPLE", 0, 0);
  }
}

function generateParticles(qty) {
  let particules = [];
  for (let i = 0; i < particlesQty; i++) {
    let initialPosition = createVector(
      random(margin, size - margin),
      random(margin, size - margin)
    );
    // particle object with complete path and visited attractors list
    let p = {
      path: [initialPosition],
      visitedAttractors: [],
    };

    particles.push(p);
  }
  return particles;
}

function generateAttractorsRandom(qty) {
  let attractors = [];
  for (let i = 0; i < qty; i++) {
    let a = createVector(
      random(margin + attractorsPadding, size - margin - attractorsPadding),
      random(margin + attractorsPadding, size - margin - attractorsPadding)
    );
    attractors.push(a);
  }
  return attractors;
}

function clearPath() {
  for (let p of particles) {
    p.path = [p.path[0]];
    p.visitedAttractors = [];
  }
}

function calculatePath() {
  for (let n = 0; n < attractorsQty; n++) {
    for (let p of particles) {
      let lastPosition = p.path[p.path.length - 1];

      let closestIndex = getClosestAttractorIndex(
        lastPosition,
        p.visitedAttractors
      );

      let newPosition = p5.Vector.lerp(
        lastPosition,
        attractors[closestIndex],
        lerpValue
      );

      p.visitedAttractors.push(closestIndex);

      p.path.push(newPosition);
    }
  }
}

function generateAttractorsCircle(
  qty,
  radius,
  radiusNoise = 0,
  angleNoise = 0
) {
  let attractors = [];
  let angleOffset = -PI / 2; // We want the first point at the top
  for (let i = 0; i < qty; i++) {
    let rNoise = random(-radiusNoise * radius, radiusNoise * radius);
    let aNoise = random((-angleNoise * PI) / qty, (angleNoise * PI) / qty);
    let a = p5.Vector.fromAngle(
      angleOffset + (TWO_PI * i) / qty + aNoise,
      radius + rNoise
    ).add(createVector(size / 2, size / 2));
    attractors.push(a);
  }
  return attractors;
}

function generateAttractorsSinewave(
  qty,
  amplitude,
  frequency = 1,
  amplitudeNoise = 0,
  offset = 0
) {
  let attractors = [];
  for (let i = 0; i < qty; i++) {
    let a = createVector(
      map(
        i,
        0,
        qty - 1,
        margin + attractorsPadding,
        size - margin - attractorsPadding
      ),
      size / 2 -
        amplitude *
          random(1 - amplitudeNoise, 1 + amplitudeNoise) *
          sin(offset + map(i, 0, qty - 1, 0, frequency * TWO_PI))
    );
    attractors.push(a);
  }
  return attractors;
}

function getClosestAttractorIndex(pos, visitedAttractors) {
  let closestIndex;
  let closestDistance = Infinity;

  for (let i = 0; i < attractors.length; i++) {
    let d = pos.dist(attractors[i]);
    if (d < closestDistance && !visitedAttractors.includes(i)) {
      closestIndex = i;
      closestDistance = d;
    }
  }

  return closestIndex;
}

/**
 * Apply a color ramp to the image
 * @param {p5.Image} img - Input image
 * @param {p5.Color} [col1 = color(0)] - Dark color
 * @param {p5.Color} [col2 = color(255)] - Light color
 * @param {number} [intensity = 0.5] - Intensity from 0 to 1
 * @param {p5.ColorMode} [colorMode = HSL] - colorMode used by the lerpColor
 * @returns {p5.Image} Returns the image with the color ramp applied
 */
function imageColorRamp(
  img,
  col1 = color(0),
  col2 = color(255),
  intensity = 0.5,
  colMode = HSL
) {
  let imgIn = img.get();
  imgIn.loadPixels();
  let imgOut = createImage(img.width, img.height);
  imgOut.loadPixels();
  let grad = [];
  push();
  colorMode(colMode);
  for (let i = 0; i < 256; i++) {
    let c = lerpColor(col1, col2, i / 255);
    grad.push([red(c), green(c), blue(c)]);
  }
  pop();
  for (let i = 0; i < imgIn.pixels.length; i += 4) {
    let r = imgIn.pixels[i];
    let g = imgIn.pixels[i + 1];
    let b = imgIn.pixels[i + 2];
    let bright = round((r + g + b) / 3);
    imgOut.pixels[i] = lerp(r, grad[bright][0], intensity);
    imgOut.pixels[i + 1] = lerp(g, grad[bright][1], intensity);
    imgOut.pixels[i + 2] = lerp(b, grad[bright][2], intensity);
    imgOut.pixels[i + 3] = 255;
  }
  imgOut.updatePixels();
  return imgOut;
}

function updateMarginPadding() {
  margin *= size / 600;
  attractorsPadding *= size / 600;
}

function getColorName(h) {
  let name;
  if (h < 10) {
    name = "Red";
  } else if (h < 40) {
    name = "Orange";
  } else if (h < 65) {
    name = "Yellow";
  } else if (h < 160) {
    name = "Green";
  } else if (h < 187) {
    name = "Cyan";
  } else if (h < 255) {
    name = "Blue";
  } else if (h < 305) {
    name = "Purple";
  } else if (h < 345) {
    name = "Magenta";
  } else {
    name = "Red";
  }
  return name;
}

function randomizer() {
  let opacity = map(size / 600, 1, 2, 5, 10);
  pathColor = [0, opacity];

  borderLineWeight = (2 * size) / 600;
  borderLineColor = [0];

  // generate the attractors
  switch (attractorType) {
    case 0:
      attractors = generateAttractorsRandom(attractorsQty);
      break;
    case 1:
      attractors = generateAttractorsCircle(
        attractorsQty,
        random(size / 6, size / 3),
        random(0.5),
        random(0.7)
      );
      break;
    case 2:
      attractors = generateAttractorsSinewave(
        attractorsQty,
        random(size / 6, size / 3),
        random(1, 2),
        random(0.3),
        random(TWO_PI)
      );
      break;
  }

  attractorsRectSize = (10 * size) / 600;
  attractorsRectColor = [0, 200];
  attractorsRectWeight = (1 * size) / 600;

  colorRamp = true;

  push();
  colorMode(HSB);
  col1 = color(hue1, random(30, 100), random(15));
  col2 = color(hue2, random(70, 100), random(90, 100));
  pop();

  if (negativeImage) {
    [col1, col2] = [col2, col1];
  }
  colorRampColor2 = [red(col1), green(col1), blue(col1)];
  colorRampColor1 = [red(col2), green(col2), blue(col2)];

  // console.log(hue(col1), hue(col2));
}

function updateTraits() {
  traits["Color"] = getColorName(hue2);
  traits["Attractors Quantity [3-15]"] = attractorsQty;
  traits["Attractors Force [2 - 9]"] = Math.round(lerpValue * 10);
  traits["Attractors Distribution"] = generateAttractorsName;
  traits["Attractors Visible"] = showAttractors;
  traits["Inverted Colors"] = negativeImage;
}