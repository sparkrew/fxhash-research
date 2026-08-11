var t=0;
let pg;
var spc=0;

var cPX=0;
var px=0;
var scope=0;
var scopeMode=0;
var MR1=0;
var MR2=0;
var MR3=0;
var MR4=0;
var MR5=0;

var CR1=0;
var CR2=0;
var CR3=0;
var CR4=0;
var CR5=0;
var CR6=0;
var CR7=0;
var CR8=0;

function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
  pg=createGraphics(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  background(0);

  cPX=int(random(0, 100));
  if (cPX>=0 && cPX<20) {
    px=4;
  }
  if (cPX>=20 && cPX<80) {
    px=5;
  }
  if (cPX>=80 && cPX<100) {
    px=8;
  }

  scope=int(random(15, 55));

  MR1=random(0.01, 0.09);
  MR2=random(0.01, 0.09);
  MR3=random(0.01, 0.09);
  MR4=random(0.01, 0.09);
  MR5=random(0.01, 0.09);

  MR1=round(MR1, 2);
  MR2=round(MR2, 2);
  MR3=round(MR3, 2);
  MR4=round(MR4, 2);
  MR5=round(MR5, 2);

  CR1=random(0.001, 0.010);
  CR2=random(0.001, 0.010);
  CR3=random(0.001, 0.010);
  CR4=random(0.001, 0.010);
  CR5=random(0.001, 0.010);
  CR6=random(0.001, 0.010);
  CR7=random(0.001, 0.010);
  CR8=random(0.001, 0.010);

  window.$fxhashFeatures = {
  "motion range 1" :MR1,
  "motion range 2" :MR2,
  "motion range 3" :MR3,
  "motion range 4" :MR4,
  "motion range 5" :MR5,
  "color range 1" :round(CR1,3),
  "color range 2" :round(CR2,3),
  "color range 3" :round(CR3,3),
  "color range 4" :round(CR4,3),
  "color range 5" :round(CR5,3),
  "color range 6" :round(CR6,3),
  "color range 7" :round(CR7,3),
  "color range 8" :round(CR8,3),
  "scope angle" : scope,
  "pixel intensity" : px,
    }
}


function draw() {
  t += 1/1000;
  pg.fill(0);
  pg.rect(0, 0, windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth);
  for (var i =0; i < 400; i +=px) {
    pg.push();
    pg.fill(tan(i*CR6+t*1000)*255, tan(i*CR7+t*1000)*255, -tan(i*CR8+t*100)*255);
    pg.arc(width/2, height/2, width/1.2, height/1.2, radians(frameCount*5-scope), radians(frameCount*5));
    pg.noFill();
    pg.stroke(-tan(i*CR1+t)*255, tan(i*CR2+t)*255, -tan(i*CR3+t)*255);
    pg.strokeWeight(tan(i*MR4+t)*0.01%1);
    pg.ellipse(width/2, height/2, tan(i*MR1+t/10)*i%width/2);
    pg.stroke(tan(i*CR6+t)*255, tan(i*CR4+t)*255, tan(i*CR3+t)*255);
    pg.ellipse(width/2, height/2, -tan(i*MR2+t/10)*i%width/1.2);
    pg.ellipse(width/2, height/2, width/1.2);
    pg.noStroke();
    pg.fill(tan(i*CR5+t*1000)*255, -tan(i*CR1+t*1000)*255, tan(i*CR2+t*1000)*255);
    pg.ellipse(width/2, height/2, tan(i*MR3+t*1000)*width/2000%width/2);
    pg.fill(tan(i*CR6+t*1000)*255, tan(i*CR7+t*1000)*255, -tan(i*CR8+t*1000)*255);
    pg.ellipse(width/2, height/2, tan(i*MR4+t*2000)*width/1000, 1);
    pg.ellipse(width/2, height/2, 1, tan(i*MR5+t*2000)*width/1000);
    pg.pop();
  }
  if (frameCount<20) {
    spc=width/int(frameCount*4);
  } else {
    spc=width/80;
  }

  for (var x=0; x<width; x+=spc) {
    for (var y=0; y<height; y+=spc) {
      colorMode(RGB, 1);
      rectMode(CENTER);
      var c = pg.get(int(x), int(y));
      fill(c);
      stroke(c);
      rect(x, y, spc, spc);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
  background(0);
  pg=createGraphics(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
}
