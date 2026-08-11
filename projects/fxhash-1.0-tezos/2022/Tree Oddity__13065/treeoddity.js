// Alex Stonn 2022 << alexzstonnn@gmail.com >>

let rd, ra, rt, rtt, fl, t, rha, rha1, rhap, rhap1;

var a=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
var b=[1, 2, 3, 4, 5, 6, 7];
var c=[1, 2];

function preload(){
  seed=int(fxrand() * 100000000);
  randomSeed(seed);
  noiseSeed(seed);
  pixelDensity(1);

  rd = int(random(7));
  ra  = int(random(17));
  rt  = int(random(2));

  if(rd == 0){fl = b[0];}
  if(rd == 1){fl = b[1];}
  if(rd == 2){fl = b[2];}
  if(rd == 3){fl = b[3];}
  if(rd == 4){fl = b[4];}
  if(rd == 5){fl = b[5];}
  if(rd == 6){fl = b[6];}

  if(ra == 0){t = a[0];}
  if(ra == 1){t = a[1];}
  if(ra == 2){t = a[2];}
  if(ra == 3){t = a[3];}
  if(ra == 4){t = a[4];}
  if(ra == 5){t = a[5];}
  if(ra == 6){t = a[6];}
  if(ra == 7){t = a[7];}
  if(ra == 8){t = a[8];}
  if(ra == 9){t = a[9];}
  if(ra == 10){t = a[10];}
  if(ra == 11){t = a[11];}
  if(ra == 12){t = a[12];}
  if(ra == 13){t = a[13];}
  if(ra == 14){t = a[14];}
  if(ra == 15){t = a[15];}
  if(ra == 16){t = a[16];}

  if(rt== 0){pt = c[0];}
  if(rt== 1){pt = c[1];}

  window.$fxhashFeatures = {

    "Flowers": fl +' / 7',
    "Petals": pt +' / 2',
    "Tree": t +' / 17'
  }

}

function setup(){
  ww=windowWidth; hh= windowHeight;
if(ww>=hh){ww=hh;} else{hh=ww;}
createCanvas(ww,hh, WEBGL);

  noiseSeed(seed);
  pixelDensity(1);
  imageMode(CENTER);
  frameRate(7);

  colorMode(HSB, 360, 50, 80);
  angleMode(DEGREES);
  noStroke();
  background(0);
  translate(width/2, height/4);

}

function draw(){
    clear();
    background(random(100, 250), random(2, 30), 11);
  push();
  translate(-width/6, height/4);
   Famapeq();

   translate(width/18, height/7);
   Famaso();
  pop();

  push();
  translate(0, height/2.5);
   Famapeq2();
   pop();

      for(var i =0; i<3; i++){

    push();
      translate(random(-width/5, width/3), random(0,-height/2.2));
       Fama();
       Fama2();
    pop();

  }

  for(var i =0; i<3; i++){

  push();
  translate(random(-width/5, width/3), random(0,-height/2.2));
   Famap();
   Famap2();
  pop();

  }

  push();
  translate(width/5, height/3);

   branch16(height/5);
  pop();

  push();
  translate(width/5, height/3);
  rotate(80);
  translate(0, -5);
  branch166(height/10);
  pop();

  noLoop();
} fxpreview();

function windowResized(){
  ww=windowWidth; hh= windowHeight;
if(ww>=hh){ww=hh;} else{hh=ww;}
createCanvas(ww,hh, WEBGL);

}
