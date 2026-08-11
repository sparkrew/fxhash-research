var rt = [];
let t=0;

var velVar1=0;
var velVar2=0;
var velVar3=0;

var callMRange1=0;

var mRange1=[0.011, 0.022, 0.11, 0.22, 0.3, 0.44, 0.66, 0.88, 2, 4];
var mRange2=0;
var mRange3=0;

var amp=0;
var ampVar=0;



var colorSort=0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  velVar1=(random(1, 2));
  velVar2=(random(1, 3));
  velVar3=(random(1, 4));

  ampVar=(random(1.8, 3));

  callMRange1=int(1+random(0, 9));

  mRange1=[callMRange1];
  mRange2=random(0.1, 0.9);
  mRange3=random(0.1, 0.9);

  colorSort=(random(0, 4));

  for (let j=0; j<6000; j++) {
    rt[j] = new Vtx(j, j, j);
  }

  if (colorSort>0 && colorSort<1) {
    stroke(0, 255, 255);
  }
  if (colorSort>1 && colorSort<2) {
    stroke(255, 0, 255);
  }
  if (colorSort>2 && colorSort<3) {
    stroke(0, 255, 0);
  }
  if (colorSort>3 && colorSort<4) {
    stroke(255);
  }

  window.$fxhashFeatures = {
  "speed 1" :round(velVar1,2),
  "speed 2" :round(velVar2,2),
  "speed 3" :round(velVar3,2),
  "amplitude variation" :round(ampVar,2),
  "motion range 1" :round(callMRange1,3),
  "motion range 2" :round(mRange2,2),
  "motion range 3" :round(mRange3,2)
 
   }
}

function draw() {
  background(30);

  t+=0.008;

  translate(0, 0, -2000);
  if (width<height) {
    amp=height;
  } else {
    amp=width;
  }
  beginShape(POINTS);
  for (let i=0; i<rt.length; i++) {
    strokeWeight(3);
    vertex(cos(t/2+(rt[i].posX)*round(mRange2, 1))*((amp*6200)/i), sin(t/2+(rt[i].posY)*round(mRange2, 1))*((amp*6200)/i));
    vertex(sin(t*velVar2+(rt[i].posX)*round(mRange3, 1))*(amp/1.6), cos(t*velVar2/1.5+(rt[i].posY)*round(mRange3, 1))*(amp/1.6), tan(t/6+rt[i].posZ*mRange1)*0.5);
    vertex(cos(t*velVar1+(rt[i].posX)*round(mRange2, 1))*(amp/ampVar), sin(t*velVar1/2+(rt[i].posY)*round(mRange2, 1))*(amp/ampVar), tan(t/6+rt[i].posZ*mRange1)*0.5);
    vertex(sin(t+i)*(amp*20)/i, cos(t+i)*(amp*20)/i, tan(t*2+rt[i].posZ*mRange2/100)*amp/(i/2));
    vertex(sin(t+i)*amp/4, cos(t+i)*amp/4, tan(t/velVar3+rt[i].posZ*mRange1/10)*0.08);
    vertex(cos(t+i)*amp/7, sin(t*2+i)*amp/7, tan(t/velVar3+rt[i].posZ*mRange1/10)*0.08);
  }
  endShape();
}

function Vtx(pX, pY, pZ) {
  this.posX=pX;
  this.posY=pY;
  this.posZ=pZ;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
