
let dTable;

let rotVal, cyL, cyR;

let hueEr, satEr, lightEr;

let bgH, bgS, bgL;

let ambiR, ambiG, ambiB;

let dirR, dirG, dirB;

let ranL;

let kesmp3;

let prevuFrame;

let p5Seed = 0;



function preload() {

  dTable = loadTable("./kes.csv", "csv", "header");

  kesmp3 = loadSound("./kes.mp3", mp3ready);

}

function mp3ready (){

  kesmp3.loop();
 
}


function mousePressed() {
if (kesmp3.isPlaying()) {
    // .isPlaying() returns a boolean
    kesmp3.stop();
  } else {
    kesmp3.loop();
  }
 }


function setup() {
  p5Seed = $fx.rand() * 999999;
  randomSeed(p5Seed);
  
  createCanvas(1920, 1080, WEBGL);
  colorMode(HSL);
  


  ambiR = int(random(32, 128));
  ambiG = int(random(32, 128));
  ambiB = int(random(32, 128));

  dirR = int(random(64, 128));
  dirG = int(random(64, 128));
  dirB = int(random(64, 128));

  bgH = int(random(360));
  bgS = int(random(100));
  bgL = int(random(100));

  ranL = random(0.4, 0.9);

  kesmp3.play();
  
 // prevuFrame = int(random(12, 50));
	
  background(bgH, bgS, bgL);

	
  frameRate(int(random(12, 25)));
}




function draw() {
	
  background(bgH, bgS, bgL);

  push();
  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 1) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * 0.0005);
      rotateY(frameCount * 0.0005);
      rotateZ(frameCount * 0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 2) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * -0.0005);
      rotateY(frameCount * 0.0005);
      rotateZ(frameCount * 0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 3) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * 0.0005);
      rotateY(frameCount * -0.0005);
      rotateZ(frameCount * 0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 4) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * 0.0005);
      rotateY(frameCount * 0.0005);
      rotateZ(frameCount * -0.0005);
    }
  }
  pop();

  push();
  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 5) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * -0.0005);
      rotateY(frameCount * -0.0005);
      rotateZ(frameCount * 0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 6) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * -0.0005);
      rotateY(frameCount * 0.0005);
      rotateZ(frameCount * -0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 7) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * 0.0005);
      rotateY(frameCount * -0.0005);
      rotateZ(frameCount * -0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 8) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * -0.0005);
      rotateY(frameCount * 0.0005);
      rotateZ(frameCount * 0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 9) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * 0.0005);
      rotateY(frameCount * -0.0005);
      rotateZ(frameCount * 0.0005);
    }
  }
  pop();

  push();

  for (let looper = 0; looper < dTable.getRowCount(); looper++) {
    if (dTable.getNum(looper, 0) == 10) {
      rotVal = int(dTable.getNum(looper, 1));
      hueEr = int(dTable.getNum(looper, 2));
      satEr = int(dTable.getNum(looper, 3));
      lightEr = int(dTable.getNum(looper, 4));
      cyR = int(dTable.getNum(looper, 4));
      cyL = int(dTable.getNum(looper, 5));
      doNotes(rotVal, hueEr, satEr, lightEr, cyR, cyL);

      rotateX(frameCount * 0.0005);
      rotateY(frameCount * 0.0005);
      rotateZ(frameCount * -0.0005);
    }
  }
  pop();
  
  /*  
  if (frameCount == prevuFrame) {
    $fx.preview();
  }
  */

  }
  


function doNotes(r, h, s, l, cr, cl) {
  rotateZ(r + 1);
  translate(cl, cl, -cl);
  noStroke();
  fill(h, s, l * ranL, 1);
  cylinder(cr * 0.035, cl * 2, 124, 124);
  colorMode(RGB);

  ambientLight(ambiR, ambiG, ambiB);
  directionalLight(dirR, dirG, dirB, -width / 2, height / 2, -windowWidth);

  colorMode(HSL);
  sphere(cr * 0.44, 124, 124);
  translate(0, 0, 0);
}
