//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())

let x = fxrand() * 50;
let y = fxrand() * 35;
let spacing = 20;

function setup() {
  frameRate(80000);
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw() {
  strokeWeight(10);
  stroke(random(200,255),random(0,50),random(20,30));
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y);
  } else {
    255, y + spacing, x + spacing, y;
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}