
function getN(max) {
    return Math.floor(fxrand() * (max + 1));
}
  
let r = getN(255);
let g = getN(255);
let b = getN(255);

let t = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  noStroke();
  fill(r, g, b);
}

function draw() {
  background(10, 55);

  for (let x = 0; x <= width; x = x + 20) {
    for (let y = 0; y <= height; y = y + 30) {
      const xAngle = map(450, 0, width, -10 * PI, 4 * PI, true);
      const yAngle = map(900, 0, height, -10 * PI, 4 * PI, true);
      const angle = xAngle * (x / width) + yAngle * (y / height);
      const myX = x + 10 * cos(5 * PI * t + angle);
      const myY = y + 25 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 12);
    }
  }

  t = t + 0.01;
}