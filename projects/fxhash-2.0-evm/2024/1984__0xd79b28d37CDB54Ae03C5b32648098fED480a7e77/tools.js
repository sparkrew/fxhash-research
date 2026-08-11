function setupNoise(t) {
  randomSeed(t),
  noiseSeed(t)
}
function setupCanvas(t, s) {
  let e = Math.min(window.innerWidth, window.innerHeight);
  colorMode(RGB, 255, 255, 255, 100),
  createCanvas(e, e),
  pixelDensity(s),
  background(120),
  noLoop(),
  pg = createGraphics(t, t),
  pg.colorMode(RGB),
  pg.background(125),
  pg.pixelDensity(s),
  pg.angleMode(DEGREES)
}

function keyPressed() {
  83 === keyCode && done && saveImage()
}

function saveImage() {
  pg.save("Obsukiy_" + seed + "_dens" + pds + ".png")
}
function nrand(t, s) {
  return t + (s - t) * random()
}
function windowResized() {
  background(255);
  redraw();
}

function etoile(t, s, e, i, h) {
  pg.push(),
  pg.stroke(h),
  pg.strokeWeight(1),
  pg.translate(t, s),
  pg.rotate(random(360));
  for (let t = 0; t < i; t++)
      pg.line(0, 0, noise(t) * e, 0),
      pg.rotate(360 / i);
  pg.pop()
}

