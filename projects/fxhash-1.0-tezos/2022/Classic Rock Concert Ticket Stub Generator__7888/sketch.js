//// Classic Rock Concert
//// Ticket Stub Generator
//// by Ed Cavett
//// January 2022

//// Image assets created by
//// Ed Cavett.  Based on 
//// actual concert tickets
//// from the Kiel Auditorium
//// concert history.

//// Functions: Press DOWN to 
//// save image as a .png file.

//// /// /// /// /// /// /// /// ////


let ticket;
let myFont;
let pic = [];
let img;
let tear;
let tickno = 0;
let times = 10;
let colr = 0;
let colg = 0;
let colb = 0;
let frameGen = 0;

function preload() {
  myFont = loadFont("typerprint.ttf");
  pic.push(loadImage("ticket-aerosmith.png"));
  pic.push(loadImage("ticket-loureed.png"));
  pic.push(loadImage("ticket-queen.png"));
}

function rnd2(n1, n2) {
  let nhold = n2;
  if (n1 > n2) {
    n2 = n1;
    n1 = nhold;
  }
  return n1 + fxrand() * (n2 - n1);
}

function p5VRandom() {
  return createVector(rnd2(-1, 1), rnd2(-1, 1));
}

function setup() {
  img = createGraphics(pic[tickno].width, pic[tickno].height);
  createCanvas(pic[tickno].width * 1.1, pic[tickno].height * 1.1);
  textFont(myFont);
  textAlign(CENTER, CENTER);

  let hashGen = fxrand();
  randomSeed(hashGen);
  noiseSeed(hashGen);
  times = int(fxrand()*50) + 10;
  tearR = new tearStubR();
  tearL = new tearStubL();
  ticketA = new ticketMakerA();
  ticketB = new ticketMakerB();
  ticketC = new ticketMakerC();
  colr = fxrand()*255;
  colg = fxrand()*255;
  colb = fxrand()*255;
}

function generatrix() {
  if (tickno === 0) {
    ticket0();
  }
  if (tickno === 1) {
    ticket1();
  }
  if (tickno === 2) {
    ticket2();
  }
}

function draw() {
  if (frameCount < times) {
    tickno = floor(fxrand() * 3);
    createCanvas(pic[tickno].width * 1.1, pic[tickno].height * 1.1);
    if (tickno === 0) {
      ticketA.update();
    }
    if (tickno === 1) {
      ticketB.update();
    }
    if (tickno === 2) {
      ticketC.update();
    }
    generatrix();

    if (tickno === 1) {
      tearL.update();
    } else {
      tearR.update();
    }
  }
}

function tearStubR() {
  let xoff = fxrand() * 1000;
  this.size = 25;
  this.update = function () {
    let yoff = 0;
    let start = width * rnd2(0.82, 0.9);
    let s = start;
    let xk = 0;
    let rips = rnd2(0.1, 1);
    beginShape();
    for (let y = 0; y < height; y += 3) {
      let x = map(noise(yoff, xoff), 0, 1, -this.size, this.size);
      start -= rips;
      yoff += 0.05;
      vertex(x + start, y);
      if (y === 0) {
        s = x + start;
      }
      xk = x;
    }
    vertex(xk + start, height);
    vertex(width, height);
    vertex(width, 0);
    vertex(s, 0);
    noStroke();
    fill(colr,colg,colb, 255);
    endShape();
  };
}

function tearStubL() {
  let xoff = fxrand() * 1000;
  this.size = 25;
  this.update = function () {
    let yoff = 0;
    let start = width * rnd2(0.15, 0.25);
    let s = start;
    let xk = 0;
    let rips = rnd2(0.1, 1);
    beginShape();
    for (let y = 0; y < height; y += 3) {
      let x = map(noise(yoff, xoff), 0, 1, -this.size, this.size);
      start -= rips;
      yoff += 0.05;
      vertex(x + start, y);
      if (y === 0) {
        s = x + start;
      }
      xk = x;
    }
    vertex(xk + start, height);
    vertex(0, height);
    vertex(0, 0);
    vertex(s, 0);
    noStroke();
    fill(colr,colg,colb, 255);
    endShape();
  };
}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    saveCanvas('ed_cavett_classicRockStubs','png');
  }
} 



