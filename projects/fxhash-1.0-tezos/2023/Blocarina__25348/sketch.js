const color = 1 + Math.floor(fxrand()*255);
const level = 1 + Math.floor(fxrand()*255)
const brightness = 1 + Math.floor(fxrand()*255);
const ground = 1 + Math.floor(fxrand()*255);
let WIDTH;
let MULTI;

function setup() {

  WIDTH = min(windowWidth, windowHeight);

  MULTI = WIDTH/540;

  createCanvas(WIDTH, WIDTH);
  colorMode(HSB, color, level, brightness); 
}

function draw() {
  background(ground, ground, ground);
  push();
    fill(60,60,75);
    noStroke();
    beginShape();
      vertex(150*MULTI,90*MULTI);
      vertex(180*MULTI,90*MULTI);
      vertex(180*MULTI,60*MULTI);
      vertex(210*MULTI,60*MULTI);
      vertex(210*MULTI,120*MULTI);
      vertex(150*MULTI,120*MULTI);
    endShape();
    beginShape();
      vertex(120*MULTI,150*MULTI);
      vertex(270*MULTI,150*MULTI);
      vertex(270*MULTI,180*MULTI);
      vertex(360*MULTI,180*MULTI);
      vertex(360*MULTI,210*MULTI);
      vertex(420*MULTI,210*MULTI);
      vertex(420*MULTI,240*MULTI);
      vertex(330*MULTI,240*MULTI);
      vertex(330*MULTI,210*MULTI);
      vertex(180*MULTI,210*MULTI);
      vertex(180*MULTI,180*MULTI);
      vertex(120*MULTI,180*MULTI);
    endShape();
    beginShape();
      vertex(90*MULTI,180*MULTI);
      vertex(120*MULTI,180*MULTI);
      vertex(120*MULTI,240*MULTI);
      vertex(90*MULTI,240*MULTI);
      vertex(90*MULTI,270*MULTI);
      vertex(120*MULTI,270*MULTI);
      vertex(120*MULTI,240*MULTI);
      vertex(150*MULTI,240*MULTI);
      vertex(150*MULTI,270*MULTI);
      vertex(180*MULTI,270*MULTI);
      vertex(180*MULTI,300*MULTI);
      vertex(60*MULTI,300*MULTI);
      vertex(60*MULTI,210*MULTI);
      vertex(90*MULTI,210*MULTI);
    endShape();
    beginShape();
      vertex(180*MULTI,240*MULTI);
      vertex(360*MULTI,240*MULTI);
      vertex(360*MULTI,270*MULTI);
      vertex(390*MULTI,270*MULTI);
      vertex(390*MULTI,240*MULTI);
      vertex(480*MULTI,240*MULTI);
      vertex(480*MULTI,270*MULTI);
      vertex(450*MULTI,270*MULTI);
      vertex(450*MULTI,300*MULTI);
      vertex(270*MULTI,300*MULTI);
      vertex(270*MULTI,270*MULTI);
      vertex(240*MULTI,270*MULTI);
      vertex(240*MULTI,300*MULTI);
      vertex(210*MULTI,300*MULTI);
      vertex(210*MULTI,270*MULTI);
      vertex(180*MULTI,270*MULTI);
    endShape();
    beginShape();
      vertex(120*MULTI,300*MULTI);
      vertex(390*MULTI,300*MULTI);
      vertex(390*MULTI,330*MULTI);
      vertex(300*MULTI,330*MULTI);
      vertex(300*MULTI,360*MULTI);
      vertex(180*MULTI,360*MULTI);
      vertex(180*MULTI,330*MULTI);
      vertex(120*MULTI,330*MULTI);
    endShape();
  pop();

  push();
    fill(100,0,100);
    noStroke();
    rect(120*MULTI,210*MULTI,90*MULTI,30*MULTI);
  pop();

  push();
    fill(55,90,100);
    noStroke();
    rect(150*MULTI,60*MULTI,30*MULTI,30*MULTI);
    rect(120*MULTI,180*MULTI,60*MULTI,30*MULTI);
    rect(210*MULTI,210*MULTI,90*MULTI,30*MULTI);
  pop();

  push();
    fill(15,100,84);
    noStroke();
    rect(180*MULTI,120*MULTI,30*MULTI,30*MULTI);
  pop();

  push();
    fill(13,90,70);
    noStroke();
    rect(150*MULTI,120*MULTI,30*MULTI,30*MULTI);
    rect(210*MULTI,120*MULTI,30*MULTI,30*MULTI);
  pop();

  push();
    fill(65,100,90);
    noStroke();
    rect(210*MULTI,90*MULTI,30*MULTI,30*MULTI);
    rect(270*MULTI,150*MULTI,30*MULTI,30*MULTI);
    rect(360*MULTI,180*MULTI,30*MULTI,30*MULTI);
    rect(420*MULTI,210*MULTI,30*MULTI,30*MULTI);
    rect(450*MULTI,270*MULTI,30*MULTI,30*MULTI);
    rect(390*MULTI,300*MULTI,30*MULTI,30*MULTI);
    rect(300*MULTI,330*MULTI,30*MULTI,30*MULTI);
    rect(150*MULTI,330*MULTI,30*MULTI,30*MULTI);
    rect(90*MULTI,300*MULTI,30*MULTI,30*MULTI);
  pop();

  push();
    fill(100,100,0);
    noStroke();
    rect(150*MULTI,30*MULTI,60*MULTI,30*MULTI);
    rect(210*MULTI,60*MULTI,30*MULTI,30*MULTI);
    rect(240*MULTI,120*MULTI,30*MULTI,30*MULTI);
    rect(300*MULTI,150*MULTI,60*MULTI,30*MULTI);
    rect(390*MULTI,180*MULTI,30*MULTI,30*MULTI);
    rect(450*MULTI,210*MULTI,30*MULTI,30*MULTI);
    rect(480*MULTI,240*MULTI,30*MULTI,60*MULTI);
    rect(420*MULTI,300*MULTI,60*MULTI,30*MULTI);
    rect(330*MULTI,330*MULTI,90*MULTI,30*MULTI);
    rect(150*MULTI,360*MULTI,180*MULTI,30*MULTI);
    rect(90*MULTI,330*MULTI,60*MULTI,30*MULTI);
    rect(60*MULTI,300*MULTI,30*MULTI,30*MULTI);
    rect(30*MULTI,210*MULTI,30*MULTI,90*MULTI);
    rect(60*MULTI,180*MULTI,30*MULTI,30*MULTI);
    rect(90*MULTI,150*MULTI,30*MULTI,30*MULTI);
    rect(120*MULTI,60*MULTI,30*MULTI,90*MULTI);
    rect(240*MULTI,90*MULTI,30*MULTI,30*MULTI);
    rect(90*MULTI,240*MULTI,30*MULTI,30*MULTI);
    rect(150*MULTI,240*MULTI,30*MULTI,30*MULTI);
    rect(180*MULTI,270*MULTI,30*MULTI,30*MULTI);
    rect(240*MULTI,270*MULTI,30*MULTI,30*MULTI);
    rect(300*MULTI,210*MULTI,30*MULTI,30*MULTI);
    rect(360*MULTI,240*MULTI,30*MULTI,30*MULTI);
    rect(120*MULTI,270*MULTI,30*MULTI,30*MULTI);
    rect(270*MULTI,240*MULTI,30*MULTI,30*MULTI);
  pop();
}

function windowResized() {
  WIDTH = min(window.innerWidth, window.innerHeight);
  MULTI = WIDTH/540;
  resizeCanvas(WIDTH, WIDTH);
}