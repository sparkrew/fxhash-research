var xoff = 0;
var ayoff = 0.01;
function setup() {
  createCanvas(4960, 7016);
  pixelDensity(1);
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);
}
function draw() {
  background(160);
  for (let i = 0; i < width / random(0.9, 1.5); i++) {
    stroke(25, 45);
    strokeWeight(width * 0.0005);
    let x = map(noise(xoff), 0, 1, width * 0.0825, width - width * 0.0625);
    xoff += 0.01;
    let y = random(height * 0.05, height - height * 0.1);
    let cc = random(width * 0.35, width * 0.55);
    let vv = random(height * 0.25, height * 0.5);
    let ax = random(width * 0.0025, width * 0.01875);
    let ay = noise(ayoff) * (height * 0.0025, height * 0.0625);
    ayoff += 0.0001;
    line(cc, vv, x, y);
    line(cc, vv, x + ax, y);
    line(cc, vv, x, y + ay);
    line(cc, vv, x + ax, y + ay);
    rect(x, y, ax, ay);
  }
  noLoop();
  fxpreview();
}
function keyPressed() {
  if (key == "s") {
    save("hfp.png");
  }
}
