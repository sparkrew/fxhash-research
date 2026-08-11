
var seed = fxrand() * 1341;
var t;
var num, vNum;
var radius, mySize, margin;
var sizes = [];

let colors = [];
let colors0 = "281914-1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
let colors7 = "fefefe-fffffb-fafdff-fef9fb-f7fcfe".split("-").map((a) => "#" + a);
let colors8 = "8c75ff-c553d2-2dfd60-2788f5-23054f-f21252-8834f1-c4dd92-184fd3-f9fee2-2E294E-541388-F1E9DA-FFD400-D90368-e9baaa-ffa07a-164555-ffe1d0-acd9e7-4596c7-6d8370-e45240-21d3a4-3303f9-cd2220-173df6-244ca8-a00360-b31016".split("-").map((a) => "#" + a);
let colors11 = "025159-3E848C-7AB8BF-C4EEF2-A67458".split("-").map((a) => "#" + a);
let colors12 = "10454F-506266-818274-A3AB78-BDE038".split("-").map((a) => "#" + a);
let colors13 = "D96690-F28DB2-F2C9E0-89C2D9-88E8F2".split("-").map((a) => "#" + a);
var color_setup1, color_setup2;
let color_bg;
let v_planet = [];

function setup() {
	randomSeed(seed);
	// pixelDensity(5);
	mySize = min(windowWidth, windowHeight);
	margin = mySize / 100;
	 createCanvas(windowWidth, windowHeight);
	createCanvas(mySize, mySize);
	color_setup1 = colors7;
	color_setup2 = random([colors8, colors11, colors8, colors12, colors8, colors13]);
	color_bg = random(colors7);
	colors[0] = random(colors7);
	colors[1] = random(color_setup2);
	colors[2] = random(color_setup2);
	colors[3] = random(color_setup2);
	colors[4] = random(color_setup2);
	background(color_bg);
	num = int(random(20, 10));
	radius = mySize * 0.00;
	for (let a = 0; a < TAU; a += TAU / num) {
		sizes.push(random(0.1, 0.5))
	}
	t = 0;
	let filter1 = new makeFilter();
}

function draw() {
	

	randomSeed(seed);
	for (let i = 0; i < num; i++) {
		let a = (TAU / num) * i + t
		let x = radius * sin(a + t) / random(5, 2);
		let y = radius * cos(a + t) / random(2, 5);
		v_planet[i] = createVector(x, y);
	}
	
	for (let j = 0; j < num; j++) {
		push();
		translate(random(width / 8 * 3, width / 8 * 5), random(height / 8 * 3, height / 8 * 5));
	  // translate(width / 2, height / 2);
		drawingContext.shadowColor = "#ffffff33";
		drawingContext.shadowOffsetX = -1;
		drawingContext.shadowOffsetY = -1;
		drawingContext.shadowBlur = 0;
		drawingContext.shadowColor = "#2f2f2f33";
		drawingContext.shadowOffsetX = 1;
		drawingContext.shadowOffsetY = 1;
		drawingContext.shadowBlur = 0;
		rotate(random(TAU) * j / 10 + random(2,1)*t*random([-1,1]));
		noFill();
		stroke(random(colors));
		strokeWeight(random(0.1, 0.5));

		beginShape();
		for (let i = 0; i < num; i++) {
			let d = random(radius / 2, radius / 8);
			let x_plus = 0.2 * random(-d, d);
			let y_plus = 0.2 * random(-d, d);
			line(v_planet[i].x - x_plus, v_planet[i].y + y_plus, v_planet[i].x + x_plus, v_planet[i].y - y_plus);
		}
		endShape(CLOSE);
	  pop();
	}

	t += random(0.001, 0.0005);
	if (radius < mySize * 1.5) {
		radius += random(1, 3);
	} else {
		strokeWeight(random(0.1, 0.05));
		stroke(str(random(colors)) + "1a");
		noFill();
		drawingContext.setLineDash([1, 1, 1, 1]);
		drawOverPattern();
		image(overAllTexture, 0, 0);
		// noLoop();
		noFill();
		stroke("#202020");
		strokeWeight(margin);
		rect(0, 0, width, height);
		noLoop();
	}
}

function drawOverPattern() {
	push();
	translate(width / 2, height / 2);
	rotate(-PI / 2);

	let s = mySize / 2 * sqrt(3) - 2;
	let n = 4;

	for (let theta = 0; theta < TWO_PI; theta += TWO_PI / 6) { // noprotect
		divideOP(0, 0, s * cos(theta), s * sin(theta), s * cos(theta + TWO_PI / 6), s * sin(theta + TWO_PI / 6), n);
	}
	pop();
}

function prop(x1, y1, x2, y2, k) {
	let x3 = (1 - k) * x1 + k * x2;
	let y3 = (1 - k) * y1 + k * y2;
	return [x3, y3];
}

function divideOP(x1, y1, x2, y2, x3, y3, n) {
	if (n > 1) {
		let [xA, yA] = prop(x1, y1, x2, y2, 1 / 3);
		let [xB, yB] = prop(x1, y1, x2, y2, 2 / 3);
		let [xC, yC] = prop(x2, y2, x3, y3, 1 / 3);
		let [xD, yD] = prop(x2, y2, x3, y3, 2 / 3);
		let [xE, yE] = prop(x3, y3, x1, y1, 1 / 3);
		let [xF, yF] = prop(x3, y3, x1, y1, 2 / 3);
		let [xG, yG] = prop(xF, yF, xC, yC, 1 / 2);
		divideOP(x1, y1, xA, yA, xF, yF, n - 1);
		divideOP(xA, yA, xB, yB, xG, yG, n - 1);
		divideOP(xB, yB, x2, y2, xC, yC, n - 1);
		divideOP(xG, yG, xF, yF, xA, yA, n - 1);
		divideOP(xC, yC, xG, yG, xB, yB, n - 1);
		divideOP(xF, yF, xG, yG, xE, yE, n - 1);
		divideOP(xG, yG, xC, yC, xD, yD, n - 1);
		divideOP(xD, yD, xE, yE, xG, yG, n - 1);
		divideOP(xE, yE, xD, yD, x3, y3, n - 1);
	} else {
		makeTriangle([x1, y1], [x2, y2], [x3, y3]);
	}
}

function makeTriangle(v1, v2, v3) {
	let points = shuffle([v1, v2, v3]);
	let [x1, y1] = points[0];
	let [x2, y2] = points[1];
	let [x3, y3] = points[2];
	let iStep = 1 / (pow(2, floor(random(4, 2))));
	for (let i = 0; i < 1; i += iStep) { // noprotect
		let [x4, y4] = prop(x1, y1, x2, y2, 1 - i);
		let [x5, y5] = prop(x1, y1, x3, y3, 1 - i);
		triangle(x1, y1, x4, y4, x5, y5);
	}
}

function makeFilter() {
	randomSeed(seed);
	// noiseのフィルターをつくる
	colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowColor = color(0, 0, 5, 5);
	overAllTexture = createGraphics(windowWidth, windowHeight);
	overAllTexture.loadPixels();
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			overAllTexture.set(
				i,
				j,
				color(0, 10, 70, noise(i / 3, j / 3, (i * j) / 50) * random(10, 25))
			);
		}
	}
	overAllTexture.updatePixels();
}

function keyTyped() {
	if (key === "s" || key === "S") {
		saveCanvas("0517_Tulle_1.5_2022", "png");
	}
}