var v=0;
var count=0;
var c=0;
var cc=0;
var d=0;
var md=0;

var V1=0;
var V2=0;
var V3=0;
var V4=0;
function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
  
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  
  md=dist(-width/2, -height/2, width/2, height/2);

  V1=random(0.0001, 0.0005);
  V2=random(0.0001, 0.0005);
  V3=random(0.0001, 0.0005);
  V4=random(0, 100);

  window.$fxhashFeatures = {
  "v" :round(V1,4),
  "0" :round(V2,4),
  "1" :round(V3,4),
  "d" :int(V4)
   }
}


function draw() {
  noStroke();
  background(25);
  count+=1;
  var s=width/100;
  for (var ii=-width/2+width/40; ii<width/2; ii+=width/20) {
    for (var jj=-width/2+width/40; jj<width/2; jj+=width/20) {
      push();
      translate(ii, jj);
      for (let i=-width/40; i<width/40; i+=s) {
        for (let j=-width/40; j<width/40; j+=s) {
          push();
          var mii=map(ii+jj, -width/2, width/2, -1, 1);
          if (V4>0 && V4<=20) {
            d=dist(i, j, ii, jj)*width/1000/md*mii;
          }
          if (V4>20 && V4<=40) {
            d=dist(i, ii, j, jj)*width/1000/md*mii;
          }
          if (V4>40 && V4<=60) {
            d=dist(i, jj, j, ii)*width/1000/md*mii;
          }
          if (V4>60 && V4<=80) {
            d=dist(sin(i*0.001)*jj, j, ii, jj)*width/1000/md*mii;
          }
          if (V4>80 && V4<=100) {
            d=dist(i, cos(jj)*j, ii, jj)*width/1000/md*mii;
          }

          if (count>tan(frameCount+(ii)*V1)*width && count<-tan(frameCount/10+(jj)*V2)*width) {
            count=0;
            v+=tan((jj+ii)*V3+frameCount*10)*cos(i+j)*(random(0.1))*mii;
          } else {
            v=v;
          }
          if (V4>0 && V4<=40) {
            c=tan((jj+i)*V3*10+v)*random(width)*mii;
            cc=-tan((j+ii)*V3*10+v)*random(width)*mii;
            if (j<c && j>cc) {
              fill(145, 200, 0, tan(d*(tan(d+ii*V3*100)*10)+v)*255+tan(v+ii*V3*10)*255);
            } else {
              fill(223, 0, 106, -tan(d*(tan(d+jj*V1*100)*10)+v)*255+tan(v+jj*V1*10)*255);
            }
          }
          if (V4>40 && V4<=80) {
            c=tan((ii)*V3*10+v)*random(width)*mii;
            cc=-tan((jj)*V3*10+v)*random(width)*mii;
            if (j+i<c && j+i>cc) {
              fill(145, 200, 0, tan(d*(tan(d+ii*V2*100)*10)+v)*255+tan(v+jj*V2*10)*255);
            } else {
              fill(223, 0, 106, -tan(d*(sin(d+jj*V1*100)*10)+v)*255+tan(v+ii*V3*10)*255);
            }
          }
          if (V4>80 && V4<=100) {
            c=tan((jj+i)*V3*10+v)*random(width)*mii;
            cc=-tan((j+ii)*V3*10+v)*random(width)*mii;
            if (i<c && i>cc) {
              fill(145, 200, 0, tan(d*(cos(d+ii*V1*100)*10)+v)*255+tan(v+jj*V1*10)*255);
            } else {
              fill(223, 0, 106, -tan(d*(tan(d+jj*V2*100)*10)+v)*255+tan(v+ii*V2*10)*255);
            }
          }

          rect(i, j, s, s);
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
