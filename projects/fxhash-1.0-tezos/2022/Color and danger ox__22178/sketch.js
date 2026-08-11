function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

	createCanvas(windowWidth, windowHeight);
	background(255,0);
	colorMode(HSB)
}

function draw() {
	push()
		translate(0, height/3)
		noFill()
		stroke(frameCount%360, 80, 80)
		strokeWeight(1.5)
	
		beginShape()
			for (var i=0; i<=width; i+=10) {
				vertex(i, -noise(i/100, frameCount/10)*200)
			}
		endShape() 
	
	pop()
	
	copy(0, 0, width, height, 0, 2, width, height)
}