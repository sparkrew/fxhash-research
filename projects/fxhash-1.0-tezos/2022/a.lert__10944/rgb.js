var t=0;
var md =0;
var d=0;
var d2=0;

var R1=0;
var R2=0;
var R3=0;
var R4=0;
var R5=0;
var R6=0;

var CR1=0;
var CR2=0;
var CR3=0;
var CR4=0;
var CR5=0;

var c=0;
function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
  
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);  

  md=dist(-width*200, -height*200, width*200, height*200);
  c=int(random(0, 100));

  R1=random(0.0001, 0.0009);
  R2=random(0.001, 0.011);
  R3=random(0.0001, 0.0009);
  R4=random(0.0001, 0.0009);
  R5=random(0.0001, 0.0009);
  R6=random(0.001, 0.011);

  CR1=random(0.0055, 0.0099);
  CR2=random(0.55, 0.99);
  CR3=random(0.0055, 0.0099);
  CR4=random(0.0055, 0.0099);
  CR5=random(0.0001, 0.0011);

  window.$fxhashFeatures = {
  "motion range 1" :round(R1,4),
  "motion range 2" :round(R2,3),
  "motion range 3" :round(R3,4),
  "motion range 4" :round(R4,4),
  "motion range 5" :round(R5,4),
  "motion range 6" :round(R6,3),
  "color range 1" :round(CR1,4),
  "color range 2" :round(CR2,2),
  "color range 3" :round(CR3,4),
  "color range 4" :round(CR3,4),
  "color range 5" :round(CR3,4)
    }
}


function draw() {
  t+=0.008;
  background(30);
  for (var xx=-width/2+width/40; xx<width/2; xx+=width/20) {
    for (var yy=-height/2+height/40; yy<width/2; yy+=height/20) {
      push();
      translate(xx, yy);

      var dm1 = cos(yy*R6+t)*xx*400;
      var dm2 = cos(xx*R6+t)*yy*400;
      d = dist(xx, yy, dm1, dm2);
      d=d/md*sin((xx)*R4+t/5)*sin((yy)*R5+t/5)*100;
      var spc=width/80;
      for (x=-width/40; x<width/40; x+=spc) {
        for (y=-width/40; y<width/40; y+=spc) {
          noStroke();
          var dm3 = sin(yy*R3+d+t)*x*100;
          var dm4 = sin(xx*R3+d+t)*y*100;
          d2 = dist(x, y, dm3, dm4);
          d2=d2/md*noise((y)*R2+t, (x)*R2+t/10)*2000;
          var mv = tan(x+yy*R1+d/4+t/2)*d2;
          var mv2 = -tan(x+yy*R1+d/4+t/2)*d2;
          if (xx+y<mv && xx+y>mv2) {
            fill(tan((yy)*CR1+t+d2)*255, tan((y)*CR2+d2+t)*255);
          } else {
            if (c>=0 && c<33) {
              fill(tan(y+(xx)*CR3+d+t)*1, -tan((y)*CR4+d2+t*5)*255, tan(x+(yy)*CR5+d2+t)*1);
            }
            if (c>=33 && c<66) {
              fill(-tan((x)*CR4+d2+t*5)*255, tan(y+(xx)*CR3+d+t)*1, tan(x+(yy)*CR5+d2+t)*1);
            }

            if (c>=66 && c<=100) {
              fill(tan(x+(yy)*CR5+d2+t)*1, tan(y+(xx)*CR3+d+t)*1, -tan((y+x)*CR4+d2+t*5)*255);
            }
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
