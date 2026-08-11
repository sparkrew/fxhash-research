$(document).ready(function() {
  // Animate loader off screen
  $(".splash")
    .delay(250)
    .fadeOut("slow");
});

var colorArray = [
  "#000000",
  "#071739",
  "#274684",
  "#709fdc",
  "#b9d5fd",
  "#034488",
  "#178fd6",
  "#ccdde8",
  "#edece8"
];

function setup() {
  frameRate();
  parentHeight = document.getElementById("background-canvas").offsetHeight;
  parentWidth = document.getElementById("background-canvas").offsetWidth;
  let canvas = createCanvas(parentWidth, parentHeight, P2D);
  canvas.parent("background-canvas");
  background(0);
  rectMode(CENTER); // Set rectMode to CENTER
  noStroke();
  noLoop();
}

function windowResized() {
  parentHeight = document.getElementById("background-canvas").offsetHeight;
  parentWidth = document.getElementById("background-canvas").offsetWidth;
  let canvas = resizeCanvas(parentWidth, parentHeight);
  canvas.parent("background-canvas");
  background(0);
}

function draw() {
  push();
  translate(width/2,height/2);
  drawShape(0,0, width, height);
  pop();
}

function drawShape(x, y, w, h) {
  let c, color;
  for(let i = 0; i<=2; i++) {
    rotate(random(2*PI));
    c = colorArray[Math.floor(Math.random() * colorArray.length)];
    color = new hex2RGB(c);
    fill(color.r,color.g,color.b, random(100, 150));
    triangle(x,y, random(w/2,2*w), random(h/2,2*h), random(w/2,2*w), random(h/2,2*h));
  }
  if(w > 10) {
    drawShape(x, y, w/1.1, h/1.1);
  }
}

function hex2RGB(h) {
  (this.r = 0), (this.g = 0), (this.b = 0);
  if (h.length == 4) {
    // 3 digits
    this.r = "0x" + h[1] + h[1];
    this.g = "0x" + h[2] + h[2];
    this.b = "0x" + h[3] + h[3];
  } else if (h.length == 7) {
    // 6 digits
    this.r = "0x" + h[1] + h[2];
    this.g = "0x" + h[3] + h[4];
    this.b = "0x" + h[5] + h[6];
  }
}