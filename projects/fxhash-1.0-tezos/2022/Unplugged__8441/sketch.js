let side = 400;
let scaleAdjust;
function setup() {
  randomSeed(fxrand()*10000);
  
  createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  scaleAdjust = width / side;
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  bottomBrowL = random(210, 240);
  bottomBrowR = random(210, 240);
  topBrowL = random(10, 42);
  topBrowR = random(10, 42);
  topPupilL = random(60, 90);
  topPupilR = random(60, 90);
  bottomPupilL = random(260, 300);
  bottomPupilR = random(260, 300);
  
  eyeHeight = 50;
  eyeWidth = 163.5;
  eyeHeight2 = 250;
  eyeWidth2 = 163.5;
}

function draw() {
  background(r, g, b);
  
  push();
  scale(scaleAdjust, scaleAdjust);

  fill(255);
  noStroke();

  //TOP FACE
  //eyebrow
  rect(160, topBrowL, 30, 5, 20, 20, 20, 20);
  rect(210, topBrowR, 30, 5, 20, 20, 20, 20);

  //eyes
  rect(eyeWidth, eyeHeight, 25, 50);
  rect(eyeWidth + 50, eyeHeight, 25, 50);

  //mouth
  rect(187.5, 130, 25, 20, 30, 30, 0, 0);

  //BOTTOM FACE

  //eyebrow
  rect(160, bottomBrowL, 30, 5, 20, 20, 20, 20);
  rect(210, bottomBrowR, 30, 5, 20, 20, 20, 20);

  //eyes
  rect(eyeWidth2, eyeHeight2, 25, 50);
  rect(eyeWidth2 + 50, eyeHeight2, 25, 50);

  //mouth
  rect(187.5, 330, 25, 20, 30, 30, 0, 0);

  //PUPILS
  fill(0);
  //top
  circle(178, topPupilL, 10);
  circle(224, topPupilR, 10);
  //bottom
  circle(178, bottomPupilL, 10);
  circle(224, bottomPupilR, 10);

  //PLUG OUTLINE

  //line(133.5,0,133.5,400)
  //line(268.5,0,268.5,400)
  //line(133.5,1,268.5,1)
  //line(133.5,399,268.5,399)
  
  pop();
}
