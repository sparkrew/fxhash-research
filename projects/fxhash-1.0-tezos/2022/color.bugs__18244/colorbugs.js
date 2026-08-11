var count=0;
var ry=0;
var rx=0;
var t=0.005;
var cng=0;
var SV=0;
var GVX=0;
var GVY=0;
var R1=0;
var G1=0;
var B1=0;
var R2=0;
var G2=0;
var B2=0;
var CT=0;
function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 
  noiseSeed(seed);

  SV=int(random(10, 20))*2;
  GVX=int(random(1, 4))*2;
  GVY=int(random(1, 4))*2;
  CT=int(random(0, 7.9));

  R1=int(random(0, 255));
  if (R1>127) {
    G1=int(random(0, 127));
    B1=int(random(0, 127));
  } else {
    G1=int(random(127, 255));
    B1=int(random(127, 255));
  }

  G2=int(random(0, 255));
  if (G2>127) {
    R2=int(random(0, 127));
    B2=int(random(0, 127));
  } else {
    R2=int(random(127, 255));
    B2=int(random(127, 255));
  }


window.$fxhashFeatures = {
  "color R1":R1,
  "color G1":G1,
  "color B1":B1,
  "color R2":R2,
  "color G2":G2,
  "color B2":B2,
  "size variation":SV,
  "grid X variation":GVX,
  "grid Y variation":GVY,
  "change type":CT+1,
    }
}


function draw() {
  //t+=0.01;
  count+=1;
  background(R2, G2, B2);
  noFill();
  var spc=width/SV;
  strokeWeight(spc*2);
  stroke(R1, G1, B1);
  rectMode(CENTER);
  rect(0, 0, width, height);
  for (var xx=-width/2; xx<width/2+spc*(GVX*2); xx+=spc*(GVX*2)) {
    for (var yy=-width/2; yy<width/2+spc*(GVY*2); yy+=spc*(GVY*2)) {
      push();
      translate(xx, yy);
      for (var x=-GVX; x<GVX; x++) {
        for (var y=-GVY; y<GVY; y++) {
          noStroke();
          rectMode(CORNER);
          if (count>=6) {
            ry=random(y);
            rx=random(x);
            count=0;
            t+=0.001/rx/ry;
          }
          if (CT==0) {
            cng=int(map(sin(x+(rx+ry)/100+((xx/spc*(GVX))*(yy/spc*(GVY)))/spc+t), -1, 1, 0, 5.5));
          }
          if (CT==1) {
            cng=int(map(sin(y+(ry)/100+yy/(spc*(GVY))+t), -1, 1, 0, 5.5));
          }
          if (CT==2) {
            cng=int(map(sin(x+y+(rx)/100+xx/(spc*(GVX))+t), -1, 1, 0, 5.5));
          }
          if (CT==3) {
            cng=int(map(sin(x*y+(rx+ry)/100+((xx/spc*(GVX))+(yy/spc*(GVY)))+t), -1, 1, 0, 5.5));
          }
          if (CT==4) {
            cng=int(map(sin(xx/spc*(GVX)+(rx+ry)/100+(x*y)+t), -1, 1, 0, 5.5));
          }
          if (CT==5) {
            cng=int(map(sin(yy/spc*(GVY)+(rx+ry)/100+(x+y)+t), -1, 1, 0, 5.5));
          }
          if (CT==6) {
            cng=int(map(sin(xx/spc*(GVX)+(rx+ry)/100+(x)+t), -1, 1, 0, 5.5));
          }
          if (CT==7) {
            cng=int(map(sin(yy/spc*(GVY)+(rx+ry)/10+(y)+t), -1, 1, 0, 5.5));
          }

          if (cng==0) {
            if (x<sin(y+x)*cos(y*x/spc)*ry) {
              fill(R1, 0, -tan(xx+rx)*B1);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (cng==1) {
            if (y<tan(y+x)*cos(y*x/spc)*rx) {
              fill(0, G1, tan(yy+ry)*B1);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (cng==2) {
            if (y<tan(y+x)*cos(y*x/spc)*rx && x<sin(y+x)*cos(y*x/spc)*ry) {
              fill(tan(yy+xx)*R1, 0, -tan(rx+ry)*B1);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (cng==3) {
            if (y*x>sin(y*x)*ry*rx*pow(1.5, 3+cos(y*x/spc))) {
              fill(R2, 0, B2);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (cng==4) {
            if (y/x<sin(x*y)*ry*rx*pow(1.5, 3+cos(x/spc))) {
              fill(-tan(xx+t)*255, G2, B2);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (cng==5) {
            fill(tan(xx+rx+ry)*1000);
            rect(xx, yy, spc*4, spc*4);
          }
        }
      }
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
}
