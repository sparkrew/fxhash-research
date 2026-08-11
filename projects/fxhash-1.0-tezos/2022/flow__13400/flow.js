
var t=0;
var t2=0;

let pg;

var spc=0;

var SP=0;
var CP=0;
var f=0;
function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
  pg=createGraphics(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  
  background(0);
  pg.noSmooth();
  SP=int(random(0, 7.9));
  f=int(random(0, 5.9));
  CP=int(random(0, 4.9));

  window.$fxhashFeatures = {
  "shape" :SP+1,
  "flow eng":f+1,
  "color palette":CP+1,
    }
}

function x(t, t2) {
  if (f==0) {
    return sin(t)*width/8+cos(t2)*width/3;
  }
  if (f==1) {
    return sin(-t)*width/8+cos(t2)*width/3;
  }
  if (f==2) {
    return sin(t)*width/8+cos(-t2)*width/3;
  }
  if (f==3) {
    return sin(-t)*width/8+cos(-t2)*width/3;
  }
  if (f==4) {
    return sin(t)*width/3+cos(t2)*width/8;
  }
  if (f==5) {
    return sin(-t)*width/8+cos(t2)*width/3;
  }
}

function y(t, t2) {
  if (f==0) {
    return sin(t)*width/8+cos(t2)*width/3;
  }
  if (f==1) {
    return sin(-t)*width/8+cos(t2)*width/3;
  }
  if (f==2) {
    return sin(t)*width/8+cos(-t2)*width/3;
  }
  if (f==3) {
    return sin(t)*width/8+cos(t2)*width/3;
  }
  if (f==4) {
    return sin(t)*width/3+cos(t2)*width/8;
  }
  if (f==5) {
    return sin(t)*width/8+cos(-t2)*width/3;
  }
}

function draw() {
  t+=0.04;
  t2+=0.08;
  pg.background(0);
  for (var i=0; i<10; i+=0.1) {
    var cV=random(i);
    pg.colorMode(RGB, 1);
    pg.strokeWeight(width/60+tan(i/2+t)*0.1%width/60);
    if (CP==0) {
      pg.stroke(tan(i+t*2)*cV, tan(i/2+t*4)*cV, 0);
    }
    if (CP==1) {
      pg.stroke(0, tan(i/2+t*4)*cV, tan(i/2+t*4)*cV);
    }
    if (CP==2) {
      pg.stroke(tan(i/2+t*2)*cV, 0, tan(i/2+t*2)*cV);
    }
    if (CP==3) {
      pg.stroke(0, -tan(i/2+t)*cV, 0);
    }
    if (CP==4) {
      pg.stroke(0, 0, -tan(i/2+t*2)*cV);
    }

    if (SP==0) {
      pg.line(width/2+x(t/2+i, t*2-i), width/2+y(t2*2+i, t2/2-i), width/2+x(t*2+i, t/2-i), width/2+y(t2/2+i, t2*2-i));
    }
    if (SP==1) {
      pg.line(width/2+x(t/2-i, t*2+i), width/2+y(t2*2-i, t2/2+i), width/2+x(t*2-i, t/2+i), width/2+y(t2/2-i, t2*2+i));
    }
    if (SP==2) {
      pg.line(width/2+x(t/2-i, t*2-i), width/2+y(t2*2-i, t2/2-i), width/2+x(t*2-i, t/2-i), width/2+y(t2/2-i, t2*2-i));
    }
    if (SP==3) {
      pg.line(width/2-x(t/2-i, t*2-i), width/2-y(t2*2-i, t2/2-i), width/2-x(t*2-i, t/2-i), width/2-y(t2/2-i, t2*2-i));
    }
    if (SP==4) {
      pg.line(width/2+x(t*2+i, t/2-i), width/2+y(t2/2+i, t2*2-i), width/2+x(t/2+i, t*2-i), width/2+y(t2*2+i, t2/2-i));
    }
    if (SP==5) {
      pg.line(width/2+x(t*2+i, t*2-i), width/2+y(t2*2+i, t2*2-i), width/2+x(t/2+i, t/2-i), width/2+y(t2/2+i, t2/2-i));
    }
    if (SP==6) {
      pg.line(width/2+x(t/2+i, t*2-i), width/2-y(t2*2+i, t2/2-i), width/2+x(t*2+i, t/2-i), width/2-y(t2/2+i, t2*2-i));
    }
    if (SP==7) {
      pg.line(width/2-x(t/2+i, t*2-i), width/2+y(t2*2+i, t2/2-i), width/2+x(t*2+i, t/2-i), width/2+y(t2/2+i, t2*2-i));
    }

    if (CP==0) {
      pg.stroke(0, tan(i/2+t*2)*cV, tan(i/2+t*2)*cV);
    }
    if (CP==1) {
      pg.stroke(tan(i/2+t*4)*cV, 0, tan(i/2+t*2)*cV);
    }
    if (CP==2) {
      pg.stroke(tan(i/2+t*2)*cV, tan(i/2+t*2)*cV, 0);
    }
    if (CP==3) {
      pg.stroke(tan(i/2+t)*cV);
    }
    if (CP==4) {
      pg.stroke(-tan(i/2+t*2)*cV, 0, cV);
    }


    if (SP==0) {
      pg.line(width/2-x(t/2+i, t*2-i), width/2-y(t2*2+i, t2/2-i), width/2-x(t*2+i, t/2-i), width/2-y(t2/2+i, t2*2-i));
    }
    if (SP==1) {
      pg.line(width/2-x(t/2-i, t*2+i), width/2-y(t2*2-i, t2/2+i), width/2-x(t*2-i, t/2+i), width/2-y(t2/2-i, t2*2+i));
    }
    if (SP==2) {
      pg.line(width/2-x(t/2+i, t*2+i), width/2-y(t2*2+i, t2/2+i), width/2-x(t*2+i, t/2+i), width/2-y(t2/2+i, t2*2+i));
    }
    if (SP==3) {
      pg.line(width/2+x(t/2+i, t*2+i), width/2+y(t2*2+i, t2/2+i), width/2+x(t*2+i, t/2+i), width/2+y(t2/2+i, t2*2+i));
    }
    if (SP==4) {
      pg.line(width/2-x(t*2+i, t/2-i), width/2-y(t2/2+i, t2*2-i), width/2-x(t/2+i, t*2-i), width/2-y(t2*2+i, t2/2-i));
    }
    if (SP==5) {
      pg.line(width/2-x(t/2+i, t/2-i), width/2-y(t2/2+i, t2/2-i), width/2-x(t*2+i, t*2-i), width/2-y(t2*2+i, t2*2-i));
    }
    if (SP==6) {
      pg.line(width/2-x(t/2+i, t*2-i), width/2+y(t2*2+i, t2/2-i), width/2-x(t*2+i, t/2-i), width/2+y(t2/2+i, t2*2-i));
    }
    if (SP==7) {
      pg.line(width/2+x(t/2+i, t*2-i), width/2-y(t2*2+i, t2/2-i), width/2-x(t*2+i, t/2-i), width/2-y(t2/2+i, t2*2-i));
    }
  }

  //if (frameCount<20) {
  //  spc=width/int(frameCount*4);
  //} else {
  spc=width/80;
  //}

  for (var ii=0; ii<width; ii+=spc) {
    for (var j=0; j<height; j+=spc) {
      colorMode(RGB, 1);
      rectMode(CENTER);
      var c = pg.get(int(ii), int(j));
      fill(c);
      noStroke();
      rect(ii, j, spc+1, spc+1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
  pg=createGraphics(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, P2D);
  background(0);
}
