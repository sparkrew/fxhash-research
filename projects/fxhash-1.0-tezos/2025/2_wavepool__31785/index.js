// Single randomness method:
function randomNumber() {
  // If fxrand is defined (fxhash), use it, otherwise Math.random()
  return (typeof fxrand === "function") ? fxrand() : Math.random();
}

// ASCII character set
const CHARS = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"];

function setup() {
  createCanvas(1000, 1000);
  textFont("Courier");
  textSize(14);
  frameRate(30);
}

function draw() {
  background(0);
  const t = frameCount * 0.03;

  const cols = floor(width / 14);
  const rows = floor(height / 14);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // Wave generation
      const wave = Math.sin(x * 0.1 + t + y * 0.25) + Math.cos(y * 0.1 + t);

      // Map wave [-2,2] -> [0, CHARS.length-1]
      let index = Math.floor(((wave + 2) / 4) * (CHARS.length - 1));
      index = Math.max(0, Math.min(index, CHARS.length - 1));

      // Random character "mutation"
      if (randomNumber() < 0.005) {
        index = Math.floor(randomNumber() * CHARS.length);
      }

      const character = CHARS[index];
      fill(255);
      text(character, x * 14, y * 14);
    }
  }
}
