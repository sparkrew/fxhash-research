let num = 1000;
let speedY = [num];
let posY = [num];
let barColor = [num];

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

	createCanvas(windowWidth, windowHeight);
	background(random(255), random(255), random(255));
	noStroke();
	colorMode(HSB, 360, 100, 100, 100);

	for (let i = 0; i < num; i++) {
		speedY[i] = random(-5, 5);
		posY[i] = random(height);
		barColor[i] = color(random(90, 270), 50, 100, 100);
	}
}

function draw() {
	fill(0, 1);
	rect(0, 0, width, height);
	let w = width / float(num);

	for (let i = 0; i < num; i++) {
		fill(barColor[i]);
		rect(i * w, posY[i], w, 5);
		posY[i] += speedY[i];
		if (posY[i] < 0) {
			posY[i] = 0;
			speedY[i] = -speedY[i];
		}
		if (posY[i] > height) {
			posY[i] = height;
			speedY[i] = -speedY[i];
		}
	}
}