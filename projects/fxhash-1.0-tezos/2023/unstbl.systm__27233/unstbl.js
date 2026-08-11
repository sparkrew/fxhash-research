let pg;
var spc;
var md, d, mx, my, cng;
var t=0;
var nX=0;
var nY=0;
var mR1, mR2, mR3, mR4;
var bg=0;
var motion;
var count=0;
var walkX=0;
var walkY=0;

function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 
  noiseSeed(seed);


  noSmooth();
  canvas.imageSmoothingEnabled = false;
  frameRate(24);
  pg=createGraphics(200, 200);
  pg.noSmooth();
  pg.imageSmoothingEnabled = false;
  pg.pixelDensity(2);
  pS=random(0, 100);

  pS=40;

  spc=pg.width/pS;

  nX=int(random(0, 100));
  if (nX<=25) {
    nX=1;
  }
  if (nX>25 && nX<=50) {
    nX=2;
  }
  if (nX>50 && nX<=75) {
    nX=3;
  }
  if (nX>75 && nX<=100) {
    nX=4;
  }

  nY=int(random(0, 100));
  if (nY<=25) {
    nY=1;
  }
  if (nY>25 && nY<=50) {
    nY=2;
  }
  if (nY>50 && nY<=75) {
    nY=3;
  }
  if (nY>75 && nY<=100) {
    nY=4;
  }

  mR1=int(random(1, 32));
  mR2=int(random(1, 32));
  mR3=int(random(1, 32));
  mR4=int(random(1, 32));

  bg=int(random(0, 100));

  if (bg<=15) {
    bg=1;
  }

  if (bg>15 && bg<=40) {
    bg=2;
  }

  if (bg>40 && bg<=55) {
    bg=3;
  }

  if (bg>55 && bg<=70) {
    bg=4;
  }

  if (bg>70 && bg<=85) {
    bg=5;
  }

  if (bg>85 && bg<=100) {
    bg=6;
  }

  motion=random(0, 100);

  if (motion<=25) {
    motion=1;
  }

  if (motion>25 && motion<=50) {
    motion=2;
  }

  if (motion>50 && motion<=75) {
    motion=3;
  }

  if (motion>75 && motion<=100) {
    motion=4;
  }


  imageMode(CENTER, CENTER);
  pg.noStroke();
  pg.rectMode(CENTER);
  pg.colorMode(RGB, 16);


  window.$fxhashFeatures = {
  "n grid X":nX,
  "n grid Y":nY,
  "motion range 1":mR1,
  "motion range 2":mR2,
  "motion range 3":mR3,
  "motion range 4":mR4,
  "motion mode":motion,
  "color palette":bg,
    }
}


function draw() {
  count++;

  if (count>=48) {
    walkX+=spc*2;
    walkY+=spc*2;
    count=0;
  }

  if (walkX>=spc*nX*2) {
    walkX=0;
  }

  if (walkY>=spc*nY*2) {
    walkY=0;
  }

  t+=0.01;
  pg.push();

  pg.translate(pg.width/2, pg.height/2);
  if (bg==1) {
    pg.fill(16, 0, 0);
  }
  if (bg==2) {
    pg.fill(0, 16, 0);
  }
  if (bg==3) {
    pg.fill(0, 0, 16);
  }

  if (bg==4) {
    pg.fill(0, 16, 16);
  }

  if (bg==5) {
    pg.fill(16, 0, 16);
  }

  if (bg==6) {
    pg.fill(8, 16, 16);
  }
  pg.rect(0, 0, pg.width, pg.height);

  md=dist(-pg.width*4, -pg.height*4, pg.width*4, pg.height*4);
  for (var xx=-pg.width/2+spc*(nX+0.5)-walkX; xx<pg.width/2+spc*(nX+0.5)+walkX; xx+=spc*(nX*2)) {
    for (var yy=-pg.width/2+spc*(nY+0.5)-walkY; yy<pg.width/2+spc*(nY+0.5)+walkY; yy+=spc*(nY*2)) {
      pg.push();
      pg.translate(xx, yy);
      for (var x=-nX; x<nX; x++) {
        for (var y=-nY; y<nY; y++) {
          mx=lerp(0, yy, map(sin(t), -1, 1, 0, 1));
          my=lerp(xx, 0, map(sin(t), -1, 1, 0, 1));


          d=dist(y, x, mx, my);

          if (motion==1) {
            d=d/md*(constrain(tan(yy/mR2+xx/mR3+t*1.5)*pg.width/50, 0, pg.width/5)+constrain(tan(y/mR1+x/mR4+t)*pg.width/500, 0, pg.width));
          }
          if (motion==2) {
            d=d/md*(constrain(tan(y/mR2+xx/mR3+t*1.5)*pg.width/50, 0, pg.width/5)+constrain(tan(y/mR1+x/mR4+t)*pg.width/500, 0, pg.width));
          }
          if (motion==3) {
            d=d/md*(constrain(tan(yy/mR2+x/mR3+t*1.5)*pg.width/50, 0, pg.width/5)+constrain(tan(y/mR1-x/mR4+t)*pg.width/500, 0, pg.width));
          }
          if (motion==4) {
            d=d/md*(constrain(tan(y/mR2+xx/mR3+t*1.5)*pg.width/50, 0, pg.width/5)+constrain(tan(y/mR1-x/mR4+t)*pg.width/500, 0, pg.width));
          }

          d=d*4;

          cng=int(map(cos(d*4), -1, 1, 0, 5));

          if (cng==0) {
            if ((x+y)%2==0) {
              pg.fill(2);
            } else {
              pg.fill(16);
            }
          }
          if (cng==1) {
            if (bg==1) {
              pg.fill(tan(d*4)*64, 0, 0);
            }
            if (bg==2) {
              pg.fill(0, tan(d*4)*64, 0);
            }
            if (bg==3) {
              pg.fill(0, 0, tan(d*4)*64);
            }

            if (bg==4) {
              pg.fill(0, tan(d*5)*64, tan(d*4)*64);
            }

            if (bg==5) {
              pg.fill(tan(d*4)*64, 0, tan(d*5)*64);
            }

            if (bg==6) {
              pg.fill(tan(d*5)*64, tan(d*4)*64, tan(d*2)*64);
            }
          }

          if (cng==2) {
            if (x%2==0) {
              pg.fill(4);
            } else {
              pg.fill(12);
            }
          }

          if (cng==3) {
            if (bg==1) {
              pg.fill(16, 0, 0);
            }
            if (bg==2) {
              pg.fill(0, 16, 0);
            }
            if (bg==3) {
              pg.fill(0, 0, 16);
            }

            if (bg==4) {
              pg.fill(0, 16, 16);
            }

            if (bg==5) {
              pg.fill(16, 0, 16);
            }

            if (bg==6) {
              pg.fill(8, 16, 8);
            }
          }
          if (cng==4) {
            if (bg==1) {
              if (y%2==0) {
                pg.fill(8);
              } else {
                pg.fill(3);
              }
            }

            if (bg==2) {
              if (y%2==0) {
                pg.fill(2);
              } else {
                pg.fill(8);
              }
            }

            if (bg==3) {
              if (y%2==0) {
                pg.fill(4);
              } else {
                pg.fill(14);
              }
            }

            if (bg==4) {
              if (y%2==0) {
                pg.fill(4);
              } else {
                pg.fill(10);
              }
            }

            if (bg==5) {
              if (y%2==0) {
                pg.fill(12);
              } else {
                pg.fill(16);
              }
            }

            if (bg==6) {
              if (y%2==0) {
                pg.fill(8);
              } else {
                pg.fill(2);
              }
            }
          }

          pg.rect(x*spc, y*spc, spc, spc);
        }
      }
      pg.pop();
    }
  }
  pg.pop();

  push();
  translate(width/2, height/2);
  image(pg, 0, 0, windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth);
}
