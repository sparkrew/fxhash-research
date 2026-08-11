var md =0;
var d=0;
var t=0;

var m1=0;
var m2=0;
var m3=0;
var m4=0;

function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  m1=random(0.111, 0.555);
  m2=random(0.000888, 0.005555);
  m3=random(0.00999, 0.09999);
  m4=int(random(1600, 3200));

  md=dist(-width*1000, -height*1000, width*1000, height*1000);

  window.$fxhashFeatures = {
  "v" :round(m1,3),
  "0" :round(m2,6),
  "1" :round(m3,5),
  "d" :m4
   }
}


function draw() {
  background(12.5);
  t+=0.05;
  for (var xx=-width/2+width/80+width/240; xx<width/2; xx+=width/40) {
    for (var yy=-height/2+width/80+width/240; yy<width/2; yy+=height/40) {
      push();
      translate(xx, yy);
      var dm1 = cos(xx*m3+t)*height/60;
      var dm2 = sin(yy*m3+t*2)*width/60;
      d = dist(xx, yy, dm1, dm2);
      d=d/md*noise((xx)*m2+t/2, (yy)*m2/30+t/4)*m4;
      var spc=width/120;
      for (var x=-width/80; x<width/80; x+=spc) {
        for (var y=-height/80; y<height/80; y+=spc) {

          noStroke();
          var mv = tan(y*m1+d*10)*width/100;
          var mv2 = -tan(x*m1+d*10)*width/100;
          if (y<mv && y>mv2) {
          fill(223, 0, 106, tan(t+d*100)*255);
          } else {
           fill(145, 200, 0, -tan(t+d*100)*255);
          }
          rectMode(CENTER);
          rect(x, y, spc, spc);
        }
      }
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
}
