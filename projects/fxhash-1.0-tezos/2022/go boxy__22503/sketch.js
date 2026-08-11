Math.random = fxrand;
let go = Math.random() * 10 +7 ;

function setup() {
  if (go % 2 > 1) {
    createCanvas(97 * go, 60 * go);
  } else {
    createCanvas(60 * go, 97 * go);
  }
  pixelDensity(2);
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);
  stroke(10+go);
  strokeWeight(0.3);
  fill(10+go);
  window.$fxhashFeatures = { 
  width: width,
  height: height,
  boxy: go
};
}

function draw() {
  background(245);
  w();
  border();
  let s = height;
  if (height > width) {
    s = width / 2;
  }
  for (let i = 0; i < s * go; i++) {
    let h = map(noise(i), 0, 1, 0, go);
    let c = floor(random(width / go)) * go;
    let c1 = floor(random(height / go)) * go;
    rect(c, c1, h);
    line(c, c1, c + go, c1 + go);
    line(c + h, c1, c + go, c1 + go - h);
    line(c, c1 + h, c + go - h, c1 + go);
  }
  noLoop();
  fxpreview();
  print(height, width)
}

function w() {
  for (let i = 0; i < height + width; i += go) {
    line(i, 0, i, height);
    line(0, i, width, i);
  }
}

function border() {
  let r = 3 * go;
  rect(0, 0, width, r);
  rect(0, 0, r, height);
  rect(0, height - r, width, height);
  rect(width - r, 0, r, height - r);
}
function keyPressed() {
  if (key == "s") {
    save("boxy.png");
  }
}
