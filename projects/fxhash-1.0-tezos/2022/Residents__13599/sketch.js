
let z;
let p;
let q;

let bg;
let satR;
let eyelidR;

function setitup() {
  bg = fxrand();
  eyelidR = fxrand();
  satR = Math.pow(Math.floor(fxrand()*100/70+65/70), 5);
}

setitup();



let seed = 0;
let out; //outline graphics
let eyelid; //eyelid graphics
// let eyelidR;
let i;
// let bg;
let palette;
//COL
let col; //hue
let sat = 0.35; //saturation
// let satR;
//HEAD
let a; //head height
let b; //a - b = head width
//EYES
let x;
let y;
let eyeHeight;
let eyeDis;
let eyeSize;
let pupilSize;
//NOSE
let noseHeight; //nose Y position
let c; //nose height
let d; //c - d = nose width
//BODY
let bodyW; //body width
//EYEBROWS
let eyebrowHeight1;
let eyebrowHeight2;
let e; //eyebrow thickness
//MOUTH
let m; //mouth shape
let f; //mouth thickness
//EARS
let g;
let earHeight;
let earOffset;
function setup() {
  cursor(CROSS);
  seed=int(fxrand() * 100000000);
  randomSeed(seed); 
  createCanvas(windowWidth, windowHeight);
  out = createGraphics(width, height);
  eyelid = createGraphics(width, height);
  // eyelidR = random();
  // bg = random();
  palette = 0.5;
//COL
  col = random();
  // satR = pow(floor(random(65 / 70, 165 / 70)), 5);
//HEAD
  a = height * 0.75; //head height
  b = map(random(), 0, 1, 0.3, 0.75) * a;
//NOSE
  noseHeight = map(random(), 0, 1, -(a / 2 - (a - b) / 2), a / 2 - (a - b) / 2);
  c = map(random(), 0, 1, height * 0.1, a / 2 - abs(noseHeight)); //nose height
  d = map(random(), 0, 1, 0.6, 0.85) * c;
//EYES
  eyeHeight = map(random(), 0, 1, noseHeight + c / 10, noseHeight - c / 4);
  eyeSize = map(random(), 0, 1, (a - b) / 3, (a - b) / 1.5);
  eyeDis = map(random(), 0, 1, eyeSize / 2 + (c - d) / 3, (a - b) / 2.5);
  pupilSize = map(random(), 0, 1, eyeSize * 0.3, eyeSize * 0.7);
//BODY
  bodyW = map(random(), 0, 1, (a - b) / 4, (a - b) / 1.5);
//EYEBROWS
  eyebrowHeight1 = map(random(), 0, 1, -height / 2 + (a - b) / 2, eyeHeight - eyeSize / 2 - height / 20);
  eyebrowHeight2 = map(random(), 0, 1, eyebrowHeight1 - height / 15, eyebrowHeight1 + height / 20);
  e = map(random(), 0, 1, height / 35, height / 20);
//MOUTH
  f = map(random(), 0, 1, height / 35, height / 30);
  m = (floor(random(0, 2)) * 2 - 1) * map(random(), 0, 1, height / 150, height / 30);
//EARS
  g = map(random(), 0, 1, height / 6.5, height / 3.5);
  earHeight = map(random(), 0, 1, -(a / 2 - (a - b) / 2) + g / 2, a / 2 - (a - b) / 2 - g / 2);
  earOffset = map(random(), 0, 1, 0, height / 15);
}
function mouseClicked() {
  palette = palette + 0.5;
}
function draw() {
  translate(width / 2, height / 2);
  colorMode(HSB, 1, 1, 1);
  eyelid.colorMode(HSB, 1, 1, 1);
  out.colorMode(HSB, 1, 1, 1);
  out.rectMode(CENTER);
  angleMode(DEGREES);
  eyelid.translate(width / 2, height / 2);
  rectMode(CENTER);
  out.strokeWeight(height / 12);
  out.stroke(col, sat * satR, 0.15);
  out.fill(col, sat * satR, 0.15);
//BACKGROUNDS
  i = 0;
  if (bg < 0.5) {
    //console.log('I');
    background(fract(col + 0.5), sat * satR, 0.9);
    while (i <= width / 2) {
      fill(fract(col + 0.5), sat * satR, 0.65);
      noStroke();
      rect(i, 0, height / 60, height);
      i = i + height / 15;
      rect(-i, 0, height / 60, height);
    }
  } else if (0.5 <= bg && bg < 0.8) {
    //console.log('II');
    background(fract(col + 0.5), sat * satR, 0.9);
    while (i <= width * 2) {
      strokeWeight(height / 45);
      stroke(fract(col + 0.5), sat * satR, 0.65);
      line(i, -height / 2, i - height, height / 2);
      line(i, -height / 2, i + height, height / 2);
      i = i + height / 10;
      line(-i, -height / 2, -i - height, height / 2);
      line(-i, -height / 2, -i + height, height / 2);
    }
  } else {
    //console.log('III');
    background(fract(col + 0.5), sat * satR, 0.65);
    while (i <= width * 2) {
      strokeWeight(height / 25);
      stroke(fract(col + 0.5), sat * satR, 0.9);
      line(i, -height / 2, i - height, height / 2);
      line(i, -height / 2, i + height, height / 2);
      i = i + height / 10;
      line(-i, -height / 2, -i - height, height / 2);
      line(-i, -height / 2, -i + height, height / 2);
    }
}
//OTHER
  image(out, -width / 2, -height / 2);
//BODY
  noStroke();
  fill(col, sat * satR, 0.65);
  triangle(-bodyW, height / 2, bodyW, height / 2, 0, b / 2);
  out.triangle(
    width / 2 - bodyW,
    height,
    width / 2 + bodyW,
    height,
    width / 2,
    height / 2 + b / 2
  );
//EARS
  fill(col, sat * satR, 0.65);
  noStroke();
  ellipse((a - b) / 2 + earOffset, earHeight, g);
  rect((a - b) / 2 - g / 4 + earOffset, earHeight + g / 4, g / 2);
  ellipse(-(a - b) / 2 - earOffset, earHeight, g);
  rect(-(a - b) / 2 + g / 4 - earOffset, earHeight + g / 4, g / 2);
  out.ellipse(width / 2 + (a - b) / 2 + earOffset, height / 2 + earHeight, g);
  //out.rect(width/2 + (a - b)/2 - g/4 + earOffset,height/2 + earHeight + g/4, g/2);
  out.ellipse(width / 2 - (a - b) / 2 - earOffset, height / 2 + earHeight, g);
  //out.rect(width/2-(a - b)/2 + g/4 - earOffset,height/2 + earHeight + g/4, g/2);
//HEAD
  fill(col, sat * satR, 0.9);
  ellipse(0, b / 2, a - b);
  ellipse(0, b / -2, a - b);
  rectMode(CENTER);
  rect(0, 0, a - b, b);

  out.ellipse(width / 2, height / 2 + b / 2, a - b);
  out.ellipse(width / 2, height / 2 + b / -2, a - b);
  out.rect(width / 2, height / 2, a - b, b - height * 0.1);
//EYES
  fill(1);
  ellipse(eyeDis, eyeHeight, eyeSize);
  ellipse(-eyeDis, eyeHeight, eyeSize);
  if (eyelidR > 0.75) {
    eyelid.stroke(col, sat * satR, 0.65);
    eyelid.strokeWeight(2);
    eyelid.fill(col, sat * satR, 0.65);
    eyelid.ellipse(eyeDis, eyeHeight, eyeSize);
    eyelid.ellipse(-eyeDis, eyeHeight, eyeSize);
    eyelid.erase();
    eyelid.rect(-width / 2, eyeHeight, width, height);
    eyelid.noErase();
  }
  out.ellipse(width / 2 + eyeDis, height / 2 + eyeHeight, eyeSize);
  out.ellipse(width / 2 - eyeDis, height / 2 + eyeHeight, eyeSize);
  fill(col, sat * satR, 0.15);
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    x = map(mouseX, 0, width, -eyeSize / 10, eyeSize / 8);
    y = map(mouseY, 0, height, -eyeSize / 10, eyeSize / 8);
  } else {
    x = 0;
    y = 0;
  }
  ellipse(eyeDis + x, eyeHeight + y, pupilSize);
  ellipse(-eyeDis + x, eyeHeight + y, pupilSize);
  image(eyelid, -width / 2, -height / 2);
  //NOSE
  rotate(0);
  fill(col, sat * satR, 0.65);
  ellipse(0, d / 2 + noseHeight, c - d);
  ellipse(0, d / -2 + noseHeight, c - d);
  rectMode(CENTER);
  rect(0, noseHeight, c - d, d);
  //EYEBROWS
  stroke(col, sat * satR, 0.4);
  strokeWeight(e);
  line(
    -(eyeSize / 2 + eyeDis),
    eyebrowHeight1,
    eyeSize / 2 - eyeDis - eyeSize / 8,
    eyebrowHeight2
  );
  line(
    eyeSize / 2 + eyeDis,
    eyebrowHeight1,
    -(eyeSize / 2 - eyeDis) + eyeSize / 8,
    eyebrowHeight2
  );
  noStroke();
  out.strokeWeight(height / 10 + e);
  out.line(
    width / 2 - (eyeSize / 2 + eyeDis),
    height / 2 + eyebrowHeight1,
    width / 2 + (eyeSize / 2 - eyeDis),
    height / 2 + eyebrowHeight2
  );
  out.line(
    width / 2 + eyeSize / 2 + eyeDis,
    height / 2 + eyebrowHeight1,
    width / 2 - (eyeSize / 2 - eyeDis),
    height / 2 + eyebrowHeight2
  );
  //MOUTH
  noFill();
  strokeWeight(f);
  stroke(col, sat * satR, 0.4);
  bezier(
    -(height/17) + abs(m) / -2,
    max(noseHeight + c / 2, eyeHeight + eyeSize / 2) + m + f / 2 + abs(m),
    -(height/17),
    max(noseHeight + c / 2, eyeHeight + eyeSize / 2) - m + f / 2 + abs(m),
    (height/17),
    max(noseHeight + c / 2, eyeHeight + eyeSize / 2) - m + f / 2 + abs(m),
    (height/17) - abs(m) / -2,
    max(noseHeight + c / 2, eyeHeight + eyeSize / 2) + m + f / 2 + abs(m)
  );
//PALETTE
  if (fract(palette) === 0) {
    noStroke();
    fill(1);
    rectMode(CORNER);
    rect(
      -width / 2 + height / 33,
      -height / 2 + height / 33,
      6 * (height / 33),
      31 * (height / 33),
      2 * (height / 33)
    );
    fill(col, sat * satR, 0.9);
    rect(
      -width / 2 + 2 * (height / 33),
      -height / 2 + 2 * (height / 33),
      4 * (height / 33),
      4 * (height / 33),
      height / 33
    );
    fill(col, sat * satR, 0.65);
    rect(
      -width / 2 + 2 * (height / 33),
      -height / 2 + 7 * (height / 33),
      4 * (height / 33),
      4 * (height / 33),
      height / 33
    );
    fill(col, sat * satR, 0.4);
    rect(
      -width / 2 + 2 * (height / 33),
      -height / 2 + 12 * (height / 33),
      4 * (height / 33),
      4 * (height / 33),
      height / 33
    );
    fill(col, sat * satR, 0.15);
    rect(
      -width / 2 + 2 * (height / 33),
      -height / 2 + 17 * (height / 33),
      4 * (height / 33),
      4 * (height / 33),
      height / 33
    );
    fill(fract(col + 0.5), sat * satR, 0.9);
    rect(
      -width / 2 + 2 * (height / 33),
      -height / 2 + 22 * (height / 33),
      4 * (height / 33),
      4 * (height / 33),
      height / 33
    );
    fill(fract(col + 0.5), sat * satR, 0.65);
    rect(
      -width / 2 + 2 * (height / 33),
      -height / 2 + 27 * (height / 33),
      4 * (height / 33),
      4 * (height / 33),
      height / 33
    );
  }
  eyelid.translate(-width / 2, -height / 2);
}

if (satR === 0) {
  z = "Black & White";
} else if (satR === 1) {
  z = "Dull";
} else {
  z = "Bright";
}

if (bg < 0.5) {
  p = "Stripes"
} else if (bg > 0.8) {
  p = "Diamonds";
} else {
  p = "Waffles";
}

if (eyelidR > 0.75) {
  q = "Closed";
} else {
  q = "Opened";
}

  let featureVal1 = z;
  let featureVal2 = p;
  let featureVal3 = q;

window.$fxhashFeatures = {
  "Color mode": featureVal1,
  "Background mode": featureVal2,
  "Eyelid status": featureVal3,
}