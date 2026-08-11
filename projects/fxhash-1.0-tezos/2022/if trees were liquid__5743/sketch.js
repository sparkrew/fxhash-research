// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com
let seed = 0; //seed Hash
let ringArrayX = [];//Tree x variable
let ringArrayY = [];//Tree y variable
let r1,b1,g1,nRings,v,w,rIn,m,nPoints;
let t=0;
let rArray = [];
let playBool=true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  nPoints=int(random(20,50));
  angleMode(DEGREES);
  m=random(-3,3);
  r1=int(random(10,100));
  g1=int(random(10,100));
  b1=int(random(10,120));
  nRings = int(random(15,70));
  rIn = int(random(1,6));
  for(let i=0;i<=nPoints;i++){
    rArray[i]=random(-1,1);
  }
// FX Features
  window.$fxhashFeatures = {
 "Red Var" : r1,
 "Green Var" : g1,
 "Blue Var" :b1,
 "nRings" :nRings
  };
}

function draw(){
  if (playBool){
    t+=1
  }
    background(r1/2,g1/2,b1/2);
    translate(width/2,height/2);
    rotate(t/20);
    ringMakerInit(rIn,0.5);//initial ring
    for (let i = 0;i<=nRings; i ++){//build array for each ring
      v = 3+(g1+i*i)%20;
      ringMaker(m,i);//ring function
    }
    for (let i = nRings;i>=0;i--){//draw each ring from the outside in
      stroke((g1*r1)%(i*2)+90,(b1*r1)%(i*2)+90,(g1*b1)%(i*2)+90);
      strokeWeight(b1/65);
      fill((b1*r1)%(i*2)+60,(g1*r1)%(i*2)+60,(g1*b1)%(i*2)+60)
      drawRing(ringArrayX[i],ringArrayY[i]);//draw ring function

  }

  function ringMaker(m,n){
    ringArrayX[n+1] = [];
    ringArrayY[n+1] = [];
    for (let i =0; i<=nPoints;i++){//create points for curve ring
      ringArrayX[n+1][i] = ringArrayX[n][i] + (v+m*rArray[i]*(cos(t/2-i)*(sin(t/4+r1))))*sin(i*(360/nPoints));
      ringArrayY[n+1][i] = ringArrayY[n][i] + (v+m*rArray[nPoints-i]*(sin(t/3)*(cos(t/m))))*cos(i*(360/nPoints));
    }
  }

}

function ringMakerInit(r,v){//initial growth
  ringArrayX[0] = [];
  ringArrayY[0] = [];
  for (let i =0; i<=nPoints;i++){
    ringArrayX[0][i] = (v+v*rArray[nPoints-i])*sin(i*(360/nPoints));
    ringArrayY[0][i] = (v+v*rArray[i])*cos(i*(360/nPoints));
  }
}

function drawRing(X,Y){//draw ring
  beginShape();
    for (let i = 0;i<=nPoints;i++){
      curveVertex(X[i],Y[i]);
    }
    curveVertex(X[1],Y[1]);
    curveVertex(X[1],Y[1]);
  endShape()
}

function mousePressed(){
  playBool=!playBool
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  playBool=true;

}
