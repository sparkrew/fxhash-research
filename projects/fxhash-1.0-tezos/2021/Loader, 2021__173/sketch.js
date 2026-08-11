let a = 0
let thick,size, rotato, dist, speedo,baro, i;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color( fxrand()*255, fxrand()*255, fxrand()*255 );
  loaderColor = color(fxrand()*255, fxrand()*255, fxrand()*255) ;
  thick = fxrand()* 25
  size = 100+fxrand()*(290-100);
  disto = 5+fxrand()*(9.5-5);
  speedo = 0.5+fxrand()*(3.5-0.5);
  baro = -4+fxrand()*(-28+-4)
  i = 1+fxrand()*(15-1)
  }

function draw() {
  background(bgColor);  
  let v = p5.Vector.fromAngle(a/50, 50);
  let vx = v.x;
  let vy = v.y;
  translate(width /2, height /2);
  strokeCap (SQUARE);
  stroke(loaderColor); 
  strokeWeight(thick);
  
  count = Math.floor(fxrand() * -1)
  for (let i = (baro); i < count; i++) { 
  line(0, 0, vx * 3, vy * 3);
  rotate(PI/disto);
  }
  
  a = a + (speedo);
  noStroke();
  fill(bgColor);
  ellipse(fxrand()*0, fxrand()*0, size, size);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}