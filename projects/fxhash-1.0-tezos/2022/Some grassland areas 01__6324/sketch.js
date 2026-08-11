


let xstart, xnoise, ystart, ynoise;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//noLoop();
	xstart = random(10);
	ystart = random(10);
}

function draw() {
	background(255);
	xstart += 0.01;
	ystart += 0.01;
	xnoise = xstart;	
	ynoise = ystart;
	// loop through all pixels
	for (let y = 0; y <= height; y += 5) {
		ynoise += 0.1;
		xnoise = xstart;  // reset the noise at the start of each row
		for (let x = 0; x <= width; x += 5) {
			xnoise += 0.1;
			drawPoint(x, y, noise(xnoise, ynoise));  // the noise function that takes 2 parameters
		} 
	}
}

function drawPoint(x, y, noiseFactor) {
	push();	// start a new drawing state
	translate(x, y);
	rotate(noiseFactor * radians(360));
	
	let edgeSize = noiseFactor*35;
  let grey = 150 + (noiseFactor*120);
  let alph = 150 + (noiseFactor*120); 
	noStroke();
  fill(grey, alph);
  ellipse(0, 0, edgeSize, edgeSize/2); 
	
	strokeWeight(random(1,5))
	stroke(random(10,100),20,random(10,100), 100);
	line(0, 0, 20, 0);
	
	pop();	// restore original state
}