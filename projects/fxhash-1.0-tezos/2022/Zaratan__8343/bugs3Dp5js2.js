/*Created by Andrea Belloni, fxhash: anbello, twitter: @Waterflowing0. Licensed under CC BY-NC-SA 4.0*/

let NC = 8;
let NI = 360;
let x1, y1;
let A;
let B;
let points1;
let points2;
let shape;
let rot;
let col;
let strk;
let r, g, b;
let dt;

let winSize = 800;
let prnSize = 1600;

let printCanvas;

function setup() {
  if (windowWidth > windowHeight) {
    winSize = windowHeight;
  } else {
    winSize = windowWidth;
  }
  
  printCanvas = createGraphics(prnSize, prnSize, WEBGL);
  createCanvas(winSize, winSize, WEBGL);
  
  smooth();
  background(40, 60, 80);
  fill(255);
  frameRate(30);
  
  printCanvas.smooth();
  printCanvas.background(40, 60, 80);
  printCanvas.fill(255);
  printCanvas.frameRate(30);
  
  let _seed = floor(fxrand() * 999999);
  noiseSeed(_seed);
  
  dt = 2 * PI / NI;
  
  A = new Array(NC);
  B = new Array(NC);
  
  for (let i = 0; i < NC; i++) {
    A[i] = noise(NC*i, 0.0)*8.0 - 4.0;
    B[i] = noise(0.0, NC*i)*8.0 - 4.0;
  }
  
  points1 = new Array(NI+1);
  points2 = new Array(NI+1);
  
  for (let t = 0, i = 0; t < 2 * PI + dt; t += dt, i++) {
    x1 = 0.0; 
    y1 = 0.0;
    for (let i = 0; i < NC; i++) {
      x1 = x1 + A[i] * cos(i * t);
      y1 = y1 + B[i] * sin(i * t);
    }
    points1[i] = new p5.Vector();
    points1[i].x = x1;
    points1[i].y = y1;
    points2[i] = new p5.Vector();
    points2[i].x = x1;
    points2[i].y = y1;
  }
  
  print("Created by Andrea Belloni, fxhash: anbello, twitter: @Waterflowing0. Licensed under CC BY-NC-SA 4.0");
  
  let rnd = fxrand();
  if (rnd < 0.33333333) {
    shape = 0;
    strk = 0.75;
  } else if (rnd < 0.66666666) {
    shape = 1;
    strk = 0.5;
  } else {
    shape = 2;
    strk = 0.75;
  }
  
  rnd = fxrand();
  if (rnd < 0.25) {
    rot = 0;
  } else if (rnd < 0.5) {
    rot = 1;
  } else if (rnd < 0.75) {
    rot = 2;
  } else  {
    rot = 3;
  }
  
  rnd = fxrand();
  if (rnd < 0.9) {
    col = 0;
  } else  {
    col = 1;
  }
  
  // print('shape', shape, 'rot', rot, 'col', col);
}

function draw() {
  printCanvas.lights();
  printCanvas.ambientLight(128, 128, 128);
  printCanvas.directionalLight(128, 128, 128, 0, 0, -1);
  printCanvas.ambientMaterial(128, 128, 128);
  
  for (let i = 0; i < NC; i++) {
    A[i] = noise(NC*i, frameCount*0.005)*8.0 - 4.0;
    B[i] = noise(frameCount*0.005, NC*i)*8.0 - 4.0;
  }

  if (col == 0) {
    r = noise(frameCount*0.005, 1.23)*256;
    g = noise(frameCount*0.005, 2.34)*256;
    b = noise(frameCount*0.005, 3.45)*256;
    printCanvas.fill(r, g, b);
  } else {
    printCanvas.fill(255);
  }
  
  printCanvas.stroke(20, 40, 80, 255);
  printCanvas.strokeWeight(strk / (1 + frameCount*0.001));
  
  for (let t = 0, i = 0; t < 2 * PI + dt; t += dt, i++) {
    x1 = 0.0; 
    y1 = 0.0;
    for (let i = 0; i < NC; i++) {
      x1 = x1 + A[i] * cos(i * t);
      y1 = y1 + B[i] * sin(i * t);
    }
    //points1[i].x = x1;
    //points1[i].y = y1;
    points2[i].x = x1;
    points2[i].y = y1;
  }
  
  printCanvas.push();
  printCanvas.rotateZ(rot* PI/2);
  //translate(width / 2.0, height / 2.0, 0.0);
  printCanvas.scale(1/(0.5 + frameCount*0.002));
  printCanvas.translate(-prnSize / 2.0, -prnSize / 2.0, 0.0);
  
  if (shape == 0) {
    printCanvas.beginShape(TRIANGLE_STRIP);
  }
  for (let i = 0; i < NI; i++) {
    if (shape == 1) {
      printCanvas.push();
      printCanvas.translate((points1[i].x / NC + 1) * prnSize / 2, (points1[i].y / NC + 1) * prnSize / 2, 0.0);
      let dx = points1[i].x - points1[i+1].x;
      let dy = points1[i].y - points1[i+1].y;
      let l = sqrt(dx*dx + dy*dy) * prnSize / (NC*2);
      printCanvas.sphere(l/1.5, 6, 6);
      printCanvas.pop();
    } else if (shape == 2) {
      printCanvas.push();
      printCanvas.translate((points1[i].x / NC + 1) * prnSize / 2, (points1[i].y / NC + 1) * prnSize / 2, 0.0);
      let dx = points1[i].x - points1[i+1].x;
      let dy = points1[i].y - points1[i+1].y;
      let l = sqrt(dx*dx + dy*dy) * prnSize / (NC*2);
      printCanvas.box(l);
      printCanvas.pop();
    } else if (shape == 0) {
      printCanvas.vertex((points1[i].x / NC + 1) * prnSize / 2, (points1[i].y / NC + 1) * prnSize / 2, 0.0);
      printCanvas.vertex((points2[i].x / NC + 1) * prnSize / 2, (points2[i].y / NC + 1) * prnSize / 2, 100.0);
      printCanvas.vertex((points1[i+1].x / NC + 1) * prnSize / 2, (points1[i+1].y / NC + 1) * prnSize / 2, 0.0);
      printCanvas.vertex((points2[i+1].x / NC + 1) * prnSize / 2, (points2[i+1].y / NC + 1) * prnSize / 2, 100.0);
    }
  }
  if (shape == 0) {
    printCanvas.endShape();
  }
  printCanvas.pop();
  
  points1 = points2;

  image(printCanvas, -winSize/2, -winSize/2, winSize, winSize);
  printCanvas.reset();
}

function keyPressed() {
  if (key == 'r') {
    loop();
  } else if (key == 'p') {
    noLoop();
  } else if (key == 's') {
    printCanvas.save("bugs.png");
  }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    winSize = windowHeight;
  } else {
    winSize = windowWidth;
  }
  resizeCanvas(winSize, winSize);
}
