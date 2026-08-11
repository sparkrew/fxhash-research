function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

r = rnd_btw(0, 255)
g = rnd_btw(0, 255)
b = rnd_btw(0, 255)
 stroke1 = rnd_btw(1,5)
 speed = rnd_btw(0.01, 0.8)
let angle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(stroke1);
  angleMode(DEGREES);
}

function draw() {
  background(r);

  
    
   
  translate(width / 2, height / 2);

  frameRate(60);
  for (let i = 0; i < 70; i++) {
    rotate(angle);

    
    fill(r,g,b)
    bezier(
      frameCount / 25,
      frameCount / 10,
      -frameCount / 100,
      -frameCount / 100,
      -frameCount,
      frameCount,
      -frameCount,
      frameCount
    );
    stroke(random(0));
    if (frameCount < 400) {
      frameCount = -frameCount;
    }
    if (frameCount < 600) {
      frameCount = -frameCount;
      line(frameCount / 100, frameCount, cos(10) * i + 100, sin(10) * i + i);
    }
  }
  angle += 0.04
}
