var vx=0;
var vy=0;
var t=0;

var R1=0;
var G1=0;
var B1=0;

var R2=0;
var G2=0;
var B2=0;

var R3=0;
var G3=0;
var B3=0;

var R4=0;
var G4=0;
var B4=0;

var R5=0;
var G5=0;
var B5=0;

var R6=0;
var G6=0;
var B6=0;

var R7=0;
var G7=0;
var B7=0;

var MV=0;
var MV2=0;
function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 

  vx=int(random(1, 5))*2;
  vy=int(random(1, 5))*2;
  if(vx==vy){
  vx+=2;
  }
  if(vy==4 && vx==8){
  vy+=2;
  }
  if(vx==4 && vy==8){
  vx+=2;
  }

  R1=int(random(0, 255));
  G1=int(random(0, 255));
  B1=int(random(0, 255));

  R2=int(random(0, 255));
  G2=int(random(0, 255));
  B2=int(random(0, 255));

  R3=int(random(0, 255));
  G3=int(random(0, 255));
  B3=int(random(0, 255));

  R4=int(random(0, 255));
  G4=int(random(0, 255));
  B4=int(random(0, 255));

  R5=int(random(0, 255));
  G5=int(random(0, 255));
  B5=int(random(0, 255));

  MV=int(random(0, 1.9));
  MV2=int(random(0, 2.9));

  window.$fxhashFeatures = {
  "motion variation 1":MV+1,
  "motion variation 2":MV2+1,
  "x variation":vx,
  "y variation":vy,
  "color 1 R":(R1),
  "color 1 G":(G1),
  "color 1 B":(B1),
  "color 2 R":(R2),
  "color 2 G":(G2),
  "color 2 B":(B2),
  "color 3 R":(R3),
  "color 3 G":(G3),
  "color 3 B":(B3),
  "color 4 R":(R4),
  "color 4 G":(G4),
  "color 4 B":(B4),
  "color 5 R":(R5),
  "color 5 G":(G5),
  "color 5 B":(B5),
  "color 6 R":(R6),
  "color 6 G":(G6),
  "color 6 B":(B6),
  "color 7 R":(R7),
  "color 7 G":(G7),
  "color 7 B":(B7),
    }
}


function draw() {
  background(0);
  var spc=width/80;
  for (var xx=-width/2+spc*(vx); xx<width/2+spc*vx; xx+=spc*(vx*2)) {
    for (var yy=-height/2+spc*(vy); yy<height/2+spc*vy; yy+=spc*(vy*2)) {
      push();
      translate(xx, yy);
      for (var x=-vx; x<vx; x++) {
        for (var y=-vy; y<vy; y++) {
          push();
          var ac=cos(frameCount/10+xx*yy);
          if (ac>0) {
            t+=0.000001+cos(frameCount/10)*0.0000005%0.00000025;
          }
          if (MV==0) {
            colorMode(RGB, tan(t+(x))*100);
          }
          if (MV==1) {
            colorMode(RGB, tan(t+(y))*100);
          }
          noStroke();
          var vxx=sin(t+y)*vx;
          var vyy=cos(t+x)*vy;
          var cng=int(map(sin(t+(xx+yy)), -1, 1, 0, 7));
          if (MV2==0) {
            if (x<tan(t+y)*width/2) {
              if (cng==0) {
                fill(tan(y+t)*R1, G1, B1);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==1) {
                if (x<vxx || y<vyy) {
                  fill(R2, tan(t+x)*G2, B2);
                  rect(x*spc, y*spc, spc, spc);
                }
              }
              if (cng==2) {
                if (x<vxx && y<vyy) {
                  fill(R3, G3, cos(t+y)*B3);
                  rect(x*spc, y*spc, spc, spc);
                }
              }
              if (cng==3) {
                fill(tan(x+t)*R4-tan(y+t*100)*G4+tan(yy+t*100)*B4);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==4) {
                fill(sin((x*x)+t*10)*R5, G5, B5);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==5) {
                fill(R6, tan((y*x)+t*10)*G6, B6);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==6) {
                fill(cos(t*10+y+x)*R7, G7, B7);
                rect(x*spc, y*spc, spc, spc);
              }
            } else {
              fill(-tan(y+t)*255-tan(y+t*100)*10);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (MV2==1) {
            if (y<tan(t+x)*width/2) {
              if (cng==0) {
                fill(tan(x+t)*R1, G1, B1);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==1) {
                if (x<vxx || y<vyy) {
                  fill(R2, tan(t+y)*G2, B2);
                  rect(x*spc, y*spc, spc, spc);
                }
              }
              if (cng==2) {
                if (x<vxx && y<vyy) {
                  fill(R3, G3, cos(t+x)*B3);
                  rect(x*spc, y*spc, spc, spc);
                }
              }
              if (cng==3) {
                fill(tan(y+t)*R4-tan(x+t*100)*G4+tan(xx+t*100)*B4);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==4) {
                fill(sin((y*y)+t*10)*R5, G5, B5);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==5) {
                fill(R6, tan((x*y)+t*10)*G6, B6);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==6) {
                fill(cos(t*10+y+x)*R7, G7, B7);
                rect(x*spc, y*spc, spc, spc);
              }
            } else {
              fill(-tan(x+t)*255-tan(y+t*100)*10);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          if (MV2==2) {
            if (y+x<tan(t+x)*width/2) {
              if (cng==0) {
                fill(tan(x+t)*R1, G1, B1);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==1) {
                if (x<vxx || y<vyy) {
                  fill(R2, tan(t+y)*G2, B2);
                  rect(x*spc, y*spc, spc, spc);
                }
              }
              if (cng==2) {
                if (x<vxx && y<vyy) {
                  fill(R3, G3, cos(t+x)*B3);
                  rect(x*spc, y*spc, spc, spc);
                }
              }
              if (cng==3) {
                fill(tan(y+t)*R4-tan(x+t*100)*G4+tan(xx+t*100)*B4);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==4) {
                fill(sin((y*y)+t*10)*R5, G5, B5);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==5) {
                fill(R6, tan((x*y)+t*10)*G6, B6);
                rect(x*spc, y*spc, spc, spc);
              }
              if (cng==6) {
                fill(cos(t*10+y+x)*R7, G7, B7);
                rect(x*spc, y*spc, spc, spc);
              }
            } else {
              fill(-tan(x+t)*255-tan(y+t*100)*10);
              rect(x*spc, y*spc, spc, spc);
            }
          }
          pop();
        }
      }
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
}
