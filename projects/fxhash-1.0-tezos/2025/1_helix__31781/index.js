const W = 1000;
const H = 1000;

function setup() {
  createCanvas(W, H);
  frameRate(60);
  textSize(24);
  noCursor();
  console.log("setup called");
}

function draw() {
  console.log("drawing frame");
  background(0);
  fill(255);
  noStroke();

  let t = frameCount * 0.05;

  for (let y = 0; y < H; y += 20) {
    for (let x = 0; x < W; x += 19) {
      let dx = 100 * Math.sin(t + y * 0.3);
      let dy = 150 * Math.cos(t + x * 0.3);

      let chars = '~*-+,.~*-+,.~-+,.~*-+,.~*-+,.';
      let index = Math.floor(x / 20 + y / 30) % chars.length;
      let char = chars.charAt(index);

      text(char, x + dx, y + dy);
    }
  }
}
