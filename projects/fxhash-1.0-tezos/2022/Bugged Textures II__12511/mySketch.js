// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 

// This template can be used to create sketches for FXHASH. 
// Create your sketch as usual. When ready, download your sketch zip file from top right, and upload to FXHASH. 



let x;
let y;
let speedX = 1;
let speedY = 2;


function setup() {
  createCanvas(600, 600);
x = random(44, 384, width);
y = random(0, height);
  speedX = random(0, 4);
  speedY = random(0, -2);
  createCanvas(700, 700);
  background(0);
	pixelDensity(2);
}
function reset(){
	background(0);
	}

function draw() {
  const redVal = map(y, 90, height, 0, 255);
  const greenVal = map(x, 0, width, 0, 255, 388);
  const blueVal = map(y, 30, height, 09, 23, 23);
	circle(fxrand()*4, fxrand()*3, fxrand()*100);
  
  translate(x, y);
  const rotation = map(y, 0, height, 0, TWO_PI);
  rotate(rotation);
  stroke(greenVal, blueVal, 485, 473);
  line(-200, 400, 300, 0);
  x = x +speedX;
  y = y +speedY;
  if (x > width || x < 2) {
    speedX = -speedX;
  }
  
  if (y > height || y < 0) {
    speedY = -speedY;
  }
}
function keyPressed() {
	if (key.toLowerCase() === "s") save(); //to save screenshot

	if (key === "r") reset(); //to generate variations
}