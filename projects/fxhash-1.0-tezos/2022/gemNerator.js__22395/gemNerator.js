let pointA=[];
let pointB=[];

let pointC=[];
let pointD=[];

var nPoints=0;

var t=0;
var spc=0;

var R1=0;
var R2=0;
var G1=0;
var G2=0;
var B1=0;
var B2=0;

var nB=0;

var sd=0;

var eD=0;
var rA=0;

var th1=0;
var th2=0;
var th3=0;
var th4=0;

let tempPoint, tempPointB, tempPointC, tempPointD, tempPointE, tempPointF;
let nextPoint, nextPointB, nextPointC, nextPointD, nextPointE, nextPointF;

var sP1=0;
var sP2=0;

var cM=0;

function setup() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
  noSmooth();

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 
  noiseSeed(seed);

  nPoints=int(random(2, 5));

  eD=int(random(7, 20));
  rA=int(random(1, 6));
  cM=int(random(0, 8.9));

  sd=1;

  th1=round(random(0.75, 1.8), 2);
  th2=round(random(0.75, 1.8), 2);
  th3=round(random(0.75, 1.8), 2);
  th4=round(random(0.75, 1.8), 2);


  R1=int(random(10, 50));
  R2=int(random(10, 50));
  if (R1==R2) {
    R2=int(random(10, 50));
  }
  G1=int(random(10, 50));
  G2=int(random(10, 50));
  if (G1==G2) {
    G2=int(random(10, 50));
  }
  B1=int(random(10, 50));
  B2=int(random(10, 50));
  if (B1==B2) {
    B2=int(random(10, 50));
  }

  sP1=random(0, 100);
  
  if (sP1<=50) {
    sP1=0;
  } else {
    sP1=1;
  }

  sP2=random(0, 100);
  if (sP2<=50) {
    sP2=0;
  } else {
    sP2=1;
  }

    for (var i=0; i<=nPoints; i++) {
    pointA[i]=createVector();
    pointB[i]=createVector();
    pointC[i]=createVector();
    pointD[i]=createVector();

    tempPoint=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
    nextPoint=createVector(random(-2, 2), random(-2, 2), random(-2, 2));

    tempPointB=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
    nextPointB=createVector(random(-2, 2), random(-2, 2), random(-2, 2));

    tempPointC=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
    nextPointC=createVector(random(-2, 2), random(-2, 2), random(-2, 2));

    tempPointD=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
    nextPointD=createVector(random(-2, 2), random(-2, 2), random(-2, 2));

    for (var point=0; point<nPoints; point++) {
      if (tempPoint.dist(tempPointB)>th1) {
        pointA[i].add(tempPoint);
        pointB[i].add(tempPointB);
      } else {
        tempPoint=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        tempPointB=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        if (tempPoint.dist(tempPointB)>th1) {
          pointA[i].add(tempPoint);
          pointB[i].add(tempPointB);
        }
      }

      if (nextPoint.dist(nextPointB)>th2) {
        pointA[i].add(nextPoint);
        pointB[i].add(nextPointB);
      } else {
        nextPoint=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        nextPointB=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        if (nextPoint.dist(nextPointB)>th2) {
          pointA[i].add(nextPoint);
          pointB[i].add(nextPointB);
        }
      }

      if (tempPointC.dist(tempPointD)>th3) {
        pointC[i].add(tempPointC);
        pointD[i].add(tempPointD);
      } else {
        tempPointC=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        tempPointD=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        if (tempPointC.dist(tempPointD)>th3) {
          pointC[i].add(tempPointC);
          pointD[i].add(tempPointD);
        }
      }

      if (nextPointC.dist(nextPointD)>th4) {
        pointC[i].add(nextPointC);
        pointD[i].add(nextPointD);
      } else {
        nextPointC=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        nextPointD=createVector(random(-2, 2), random(-2, 2), random(-2, 2));
        if (nextPointC.dist(nextPointD)>th4) {
          pointC[i].add(nextPointC);
          pointD[i].add(nextPointD);
        }
      }
    }
  }
window.$fxhashFeatures = {
  "base points":nPoints,
  "limiter 1":th1,
  "limiter 2":th2,
  "limiter 3":th3,
  "limiter 4":th4,
  "display sides":eD,
  "display rings":rA,
  "color mode":cM,
  "color red 1":R1,
  "color green 1":G1,
  "color blue 1":B1,
  "color red 2":R2,
  "color green 2":G2,
  "color blue 2":B2,
  "shape 1":sP1,
  "shape 2":sP2,
    }
}


function draw() {

  spc=width/20;
  t+=0.025;
  colorMode(RGB, 110);
  background(0);

  var mRY=map(frameCount%1080, 0, 1080, 0, 360);

  scale(1.2);


  rotateY(radians(mRY));

  push();
  rotateX(radians(90));
  for (var c=0; c<rA; c++) {
    push();
    translate(0, 0, -spc*3-c*spc/5-sin(t)*spc/4);
    noFill();
    if (cM==0) {
      stroke(R1/c+tan(t+c)*R2, G1/c-tan(t+c)*G2, B1*c+tan(t+c)*B2);
    }
    if (cM==1) {
      stroke(R1/c-tan(t+c)*R2, G1/c+tan(t+c)*G2, B1*c+tan(t+c)*B2);
    }
    if (cM==2) {
      stroke(R1/c+tan(t+c)*R2, G1*c+tan(t+c)*G2, B1/c-tan(t+c)*B2);
    }
    if (cM==3) {
      stroke(R1+R2, G1*c+tan(t+c)*G2, B1/c-tan(t+c)*B2);
    }
    if (cM==4) {
      stroke(R1/c+tan(t+c)*R2, G1+G2, B1/c-tan(t+c)*B2);
    }
    if (cM==5) {
      stroke(R1/c+tan(t+c)*R2, G1*c+tan(t+c)*G2, B1+B2);
    }
    if (cM==6) {
      stroke(R1/c+tan(t+c)*R2, G1-G2, B1+B2);
    }
    if (cM==7) {
      stroke(R1-R2, G1*c+tan(t+c)*G2, B1/c-tan(t+c)*B2);
    }
    if (cM==8) {
      stroke(R1/c+tan(t+c)*R2, G1*c+tan(t+c)*G2, B1-B2);
    }
    strokeWeight(spc/10);
    ellipse(0, 0, width/1.65);
    pop();
  }
  for (var cc=0; cc<rA; cc++) {
    push();
    translate(0, 0, spc*3+cc*spc/5+sin(t)*spc/4);
    noFill();
    if (cM==0) {
      stroke(R1/cc+tan(t+cc)*R2, G1/cc-tan(t+cc)*G2, B1*cc+tan(t+cc)*B2);
    }
    if (cM==1) {
      stroke(R1/cc-tan(t+cc)*R2, G1/cc+tan(t+cc)*G2, B1*cc+tan(t+cc)*B2);
    }
    if (cM==2) {
      stroke(R1/cc+tan(t+cc)*R2, G1*cc+tan(t+cc)*G2, B1/cc-tan(t+cc)*B2);
    }
    if (cM==3) {
      stroke(R1+R2, G1*cc+tan(t+cc)*G2, B1/cc-tan(t+cc)*B2);
    }
    if (cM==4) {
      stroke(R1/cc+tan(t+cc)*R2, G1+G2, B1/cc-tan(t+cc)*B2);
    }
    if (cM==5) {
      stroke(R1/cc+tan(t+cc)*R2, G1*cc+tan(t+cc)*G2, B1+B2);
    }
    if (cM==6) {
      stroke(R1/cc+tan(t+cc)*R2, G1-G2, B1+B2);
    }
    if (cM==7) {
      stroke(R1-R2, G1*cc+tan(t+cc)*G2, B1/cc-tan(t+cc)*B2);
    }
    if (cM==8) {
      stroke(R1/cc+tan(t+cc)*R2, G1*cc+tan(t+cc)*G2, B1-B2);
    }
    strokeWeight(spc/10);
    ellipse(0, 0, width/1.65);
    pop();
  }
  pop();


  if (sP1==0) {
    beginShape(TRIANGLE_STRIP);
  } else {
    beginShape(TRIANGLES);
  }
  for (var i=0; i<=nPoints; i+=sd) {
    var mi=map(i, 0, nPoints, -1, 1);
    var ampI=20*nPoints;
    noStroke();
    if (cM==0) {
      fill(R1/i+tan(t+i)*R2, G1/i-tan(t+i)*G2, B1*i+tan(t+i)*B2);
    }
    if (cM==1) {
      fill(R1/i-tan(t+i)*R2, G1/i+tan(t+i)*G2, B1*i+tan(t+i)*B2);
    }
    if (cM==2) {
      fill(R1/i+tan(t+i)*R2, G1*i+tan(t+i)*G2, B1/i-tan(t+i)*B2);
    }
    if (cM==3) {
      fill(R1+R2, G1*i+tan(t+i)*G2, B1/i-tan(t+i)*B2);
    }
    if (cM==4) {
      fill(R1/i+tan(t+i)*R2, G1+G2, B1/i-tan(t+i)*B2);
    }
    if (cM==5) {
      fill(R1/i+tan(t+i)*R2, G1*i+tan(t+i)*G2, B1+B2);
    }
    if (cM==6) {
      fill(R1/i+tan(t+i)*R2, G1-G2, B1+B2);
    }
    if (cM==7) {
      fill(R1-R2, G1*i+tan(t+i)*G2, B1/i-tan(t+i)*B2);
    }
    if (cM==8) {
      fill(R1/i+tan(t+i)*R2, G1*i+tan(t+i)*G2, B1-B2);
    }
    vertex(pointA[i].x*width/ampI, pointA[i].y*width/ampI, pointA[i].z*width/ampI);
    vertex(pointB[i].x*width/ampI, pointB[i].y*width/ampI, pointB[i].z*width/ampI);
    vertex(pointC[i].x*width/ampI, pointC[i].y*width/ampI, pointC[i].z*width/ampI);
    vertex(pointD[i].x*width/ampI, pointD[i].y*width/ampI, pointD[i].z*width/ampI);
  }
  endShape();

  push();
  //translate(-spc/10, 0, 0);
  if (sP2==0) {
    beginShape(TRIANGLE_STRIP);
  } else {
    beginShape(TRIANGLES);
  }
  for (var s=0; s<=nPoints; s+=sd) {
    var ampS=20*nPoints;
    noFill();
    if (cM==0) {
      stroke(R1/s+tan(t+s)*R2, G1/s-tan(t+s)*G2, B1*s+tan(t+s)*B2);
    }
    if (cM==1) {
      stroke(R1/s-tan(t+s)*R2, G1/s+tan(t+s)*G2, B1*s+tan(t+s)*B2);
    }
    if (cM==2) {
      stroke(R1/s+tan(t+s)*R2, G1*s+tan(t+s)*G2, B1/s-tan(t+s)*B2);
    }
    if (cM==3) {
      stroke(R1+R2, G1*s+tan(t+s)*G2, B1/s-tan(t+s)*B2);
    }
    if (cM==4) {
      stroke(R1/s+tan(t+s)*R2, G1+G2, B1/s-tan(t+s)*B2);
    }
    if (cM==5) {
      stroke(R1/s+tan(t+s)*R2, G1*s+tan(t+s)*G2, B1+B2);
    }
    if (cM==6) {
      stroke(R1/s+tan(t+s)*R2, G1-G2, B1+B2);
    }
    if (cM==7) {
      stroke(R1-R2, G1*s+tan(t+s)*G2, B1/s-tan(t+s)*B2);
    }
    if (cM==8) {
      stroke(R1/s+tan(t+s)*R2, G1*s+tan(t+s)*G2, B1-B2);
    }
    vertex(pointA[s].x*width/ampS, pointA[s].y*width/ampS, pointA[s].z*width/ampS);
    vertex(pointB[s].x*width/ampS, pointB[s].y*width/ampS, pointB[s].z*width/ampS);
    vertex(pointC[s].x*width/ampS, pointC[s].y*width/ampS, pointC[s].z*width/ampS);
    vertex(pointD[s].x*width/ampS, pointD[s].y*width/ampS, pointD[s].z*width/ampS);
  }
  endShape();
  pop();
  if (sP1==0) {
    beginShape(TRIANGLE_STRIP);
  } else {
    beginShape(TRIANGLES);
  }
  for (var ii=0; ii<=nPoints; ii+=sd) {
    var mii=map(ii, 0, nPoints, -1, 1);
    var ampII=20*nPoints;
    noStroke();
    if (cM==0) {
      fill(R1/ii+tan(t+ii)*R2, G1/ii-tan(t+ii)*G2, B1*ii+tan(t+ii)*B2);
    }
    if (cM==1) {
      fill(R1/ii-tan(t+ii)*R2, G1/ii+tan(t+ii)*G2, B1*ii+tan(t+ii)*B2);
    }
    if (cM==2) {
      fill(R1/ii+tan(t+ii)*R2, G1*ii+tan(t+ii)*G2, B1/ii-tan(t+ii)*B2);
    }
    if (cM==3) {
      fill(R1+R2, G1*ii+tan(t+ii)*G2, B1/ii-tan(t+ii)*B2);
    }
    if (cM==4) {
      fill(R1/ii+tan(t+ii)*R2, G1+G2, B1/ii-tan(t+ii)*B2);
    }
    if (cM==5) {
      fill(R1/ii+tan(t+ii)*R2, G1*ii+tan(t+ii)*G2, B1+B2);
    }
    if (cM==6) {
      fill(R1/ii+tan(t+ii)*R2, G1-G2, B1+B2);
    }
    if (cM==7) {
      fill(R1-R2, G1*ii+tan(t+ii)*G2, B1/ii-tan(t+ii)*B2);
    }
    if (cM==8) {
      fill(R1/ii+tan(t+ii)*R2, G1*ii+tan(t+ii)*G2, B1-B2);
    }
    vertex(-pointA[ii].x*width/ampII, -pointA[ii].y*width/ampII, -pointA[ii].z*width/ampII);
    vertex(-pointB[ii].x*width/ampII, -pointB[ii].y*width/ampII, -pointB[ii].z*width/ampII);
    vertex(-pointC[ii].x*width/ampII, -pointC[ii].y*width/ampII, -pointC[ii].z*width/ampII);
    vertex(-pointD[ii].x*width/ampII, -pointD[ii].y*width/ampII, -pointD[ii].z*width/ampII);
  }
  endShape();
  push();
  //translate(spc/10, 0, 0);
  if (sP2==0) {
    beginShape(TRIANGLE_STRIP);
  } else {
    beginShape(TRIANGLES);
  }
  for (var ss=0; ss<=nPoints; ss+=sd) {
    //var mi=map(i, 0, nPoints, -1, 1);
    var ampSS=20*nPoints;
    noFill();
    if (cM==0) {
      stroke(R1/ss+tan(t+ss)*R2, G1/ss-tan(t+ss)*G2, B1*ss+tan(t+ss)*B2);
    }
    if (cM==1) {
      stroke(R1/ss-tan(t+ss)*R2, G1/ss+tan(t+ss)*G2, B1*ss+tan(t+ss)*B2);
    }
    if (cM==2) {
      stroke(R1/ss+tan(t+ss)*R2, G1*ss+tan(t+ss)*G2, B1/ss-tan(t+ss)*B2);
    }
    if (cM==3) {
      stroke(R1+R2, G1*ss+tan(t+ss)*G2, B1/ss-tan(t+ss)*B2);
    }
    if (cM==4) {
      stroke(R1/ss+tan(t+ss)*R2, G1+G2, B1/ss-tan(t+ss)*B2);
    }
    if (cM==5) {
      stroke(R1/ss+tan(t+ss)*R2, G1*ss+tan(t+ss)*G2, B1+B2);
    }
    if (cM==6) {
      stroke(R1/ss+tan(t+ss)*R2, G1-G2, B1+B2);
    }
    if (cM==7) {
      stroke(R1-R2, G1*ss+tan(t+ss)*G2, B1/ss-tan(t+ss)*B2);
    }
    if (cM==8) {
      stroke(R1/ss+tan(t+ss)*R2, G1*ss+tan(t+ss)*G2, B1-B2);
    }
    vertex(-pointA[ss].x*width/ampSS, -pointA[ss].y*width/ampSS, -pointA[ss].z*width/ampSS);
    vertex(-pointB[ss].x*width/ampSS, -pointB[ss].y*width/ampSS, -pointB[ss].z*width/ampSS);
    vertex(-pointC[ss].x*width/ampSS, -pointC[ss].y*width/ampSS, -pointC[ss].z*width/ampSS);
    vertex(-pointD[ss].x*width/ampSS, -pointD[ss].y*width/ampSS, -pointD[ss].z*width/ampSS);
  }
  endShape();
  pop();

  noStroke();
  fill(R1, G1, B1, 10);
  cylinder(width/3.45, width/2.35, eD);
}



function windowResized() {
  createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowHeight < windowWidth ? windowHeight : windowWidth, WEBGL);
}
