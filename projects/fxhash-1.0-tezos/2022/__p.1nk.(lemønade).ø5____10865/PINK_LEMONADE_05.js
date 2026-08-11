var t=0;
var md =0;
var d=0;
var dd=0;

var m1=0;
var m2=0;
var m3=0;
var m4=0;

function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  m1=random(0.000111, 0.001111);
  m2=random(0.00111, 0.01111);
  m3=random(0.00111, 0.00999);
  m4=random(0.000111, 0.000999);

  window.$fxhashFeatures = {
  "v" :round(m1,6),
  "0" :round(m2,5),
  "1" :round(m3,5),
  "d" :round(m4,6)
   }
}


function draw() {
  background(12.5);
  t+=0.05;
  for (var xx=-width/2; xx<width/2+width/120; xx+=width/30) {
    for (var yy=-height/2; yy<width/2+height/120; yy+=height/30) {
      push();
      translate(xx, yy);
      md=dist(-width*1000+sin(t*2+xx*m2)*1000, -height*1000+sin(t*2+yy*m2/10)*1000, width*100+cos(t*2+xx*m2)*1000, height*100+cos(t*2+yy*m2/10)*1000);
      var dm1 = tan(yy*m1+t)*height;
      var dm2 = -tan(xx*m1+t)*width;
      d = dist(xx, yy, dm1, dm2);
      d=d/md*noise((xx)*m3+t, (yy)*m3+t)*11200;
      var mx=map(xx, -width/2, width/2, -tan(t+(yy+xx)*0.0013)*10, tan(t+(yy+xx)*0.0013)*10);
      var spc=width/120;
      for (var x=-width/60; x<width/60; x+=spc) {
        for (var y=-width/60; y<width/60; y+=spc) {
          noStroke();
          //rectMode(CENTER);
          var dm3 = cos(x*m4+d+t)*height/mx;
          var dm4 = sin(y*m4+d+t)*width/mx;
          dd = dist(x, y, dm3, dm4);
          dd=dd/md*noise((y)*m2+t, (x)*m2+t/10)*1200*mx;

          var mv = tan(x+t+d*dd)*width*mx;
          var mv2 = -tan(x+t+d*dd)*width*mx;
          if (x+y<mv && x+y>mv2) {
            fill(145, 200, 0);
          } else {
            fill(223, 0, 106);
          }
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
