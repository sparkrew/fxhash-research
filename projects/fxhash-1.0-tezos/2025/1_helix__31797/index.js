let W, H;
let waveSpeed;
let waveScale;
let bgColor;
let textColor;
let chars;

function setup() {
  createCanvas(windowWidth, windowHeight);
  W = width;
  H = height;

  frameRate(60);
  textFont("monospace");
  textSize(16);
  noCursor();

  // fxhash randomness via $fx.rand()
  waveSpeed = $fx.rand() * 0.1 + 0.01;
  waveScale = $fx.rand() * 100 + 50;

  const r = Math.floor($fx.rand() * 228);
  const g = Math.floor($fx.rand() * 228);
  const b = Math.floor($fx.rand() * 228);
  bgColor = color(r, g, b);
  textColor = color(255 - r, 255 - g, 255 - b);

  // Choose between character sets
  chars = $fx.rand() < 0.5
    ? "~*-+,.~*-+,.~-+,.~*-+,.~*-+,."
    : "☷◊·.•,~*☷-+,.◊·.•,~☷*-+,.•";
}

function draw() {
  background(bgColor);
  fill(textColor);
  noStroke();

  let t = frameCount * waveSpeed;

  for (let y = 0; y < H; y += 20) {
    for (let x = 0; x < W; x += 19) {
      let dx = waveScale * Math.sin(t + y * 0.3);
      let dy = waveScale * 1.5 * Math.cos(t + x * 0.3);

      let index = Math.floor(x / 20 + y / 30) % chars.length;
      let char = chars.charAt(index);

      text(char, x + dx, y + dy);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  W = width;
  H = height;
}
