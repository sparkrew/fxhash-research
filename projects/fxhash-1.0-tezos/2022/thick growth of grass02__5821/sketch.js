function setup() {
	createCanvas(850,850);
	//noLoop();
}

function draw() {
	frameRate(8);
	background(0);
	var xstart = random(10);
	var xnoise = xstart;	
	var ynoise = random(10);
	// loop through all pixels
	for (var y = 0; y <= height; y += 5) {
		ynoise += 0.1;
		xnoise = xstart;  // reset the noise at the start of each row
		for (var x = 0; x <= width; x += 5) {
			xnoise += 0.1;
			drawPoint(x, y, noise(xnoise, ynoise));  // call my own function
		} 
	}
}

function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(600));
	var edgeSize = noiseFactor*35;
	var a = 150 + (noiseFactor*120);
	var alph = 150 + (noiseFactor*120);
  //noStroke();
	fill(225-a,220,a, alph);
  ellipse(0, 0, edgeSize*10, edgeSize/2);
  pop();
}