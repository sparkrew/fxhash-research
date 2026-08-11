var t = 0;
var can;
var fr = 255;
var seed;
var ts;

function setup() {
  blendMode(REPLACE);
  let e = 1 * window.innerHeight;
  can = createCanvas(e, e);
  let can_x = (windowWidth - width) / 2;
  let can_y = (windowHeight - height) / 2;
  can.position(can_x, can_y);
  pixelDensity();
  background(255);
  frameRate(fr);
  let seed = int(fxrand() * 100000000);
  randomSeed(seed);
  ts = int(random(1, 6));
  tt = int(random(1, 5));
  tb = int(random(4, 18));
  
  
}

function draw() {
  let rad = millis() / 1000;
  let ct = cos(rad);
  let st = sin(rad);
  //noiseSeed(20);
  strokeWeight(0.21);
  t += 0.001;
  drawingContext.filter = "saturate(85) drop-shadow(8 6 4Q#0400)";
  drawingContext.setLineDash([2, 70, 22.5, 5]);
  for (i = 1; i; i--) {
    beginShape();
    for (r = 1; r < 2 + 2 * TAU; r += 0.05)
      curveVertex(
        sin(r * ts) *
          (D =
            (noise(-sin(r * 4), i ^ (0 * 9.99), t * 1.5) / i) *
            145 *
            (cos(r / 8) ** 1.2 * ct + 3.5)) +
          460,
        cos(r - tb) * -D + 560
      );
    let arr = 355 * noise(t * ts);
    let g = 355 * noise(t * tt);
    let b = 555 * noise(t * tb);
    let z = 15 * noise(t + 400);
    fill(arr, g, b, z);
    t = t + 0.000000000001;
    endShape(CLOSE);
    fxpreview();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255);
  rate();
}

function rate() {
  frameRate();
}
