let colors = ["#2C5E7F", "#5891BF", "#9BBFDA", "#E6F0FA", "#ECF7FD", "#ECF7FD", "#9BBFDA", "#E6F0FA", "#906364"];
let fxseed;

function setup() {
	createCanvas(windowHeight/3*4, windowHeight);
	pixelDensity(2);
	noLoop();

	let cvs = select("#defaultCanvas0");
	cvs.style("padding-left", "0");
	cvs.style("padding-right", "0");
	cvs.style("margin-left", "auto");
	cvs.style("margin-right", "auto");
	cvs.style("display", "block");

	fxSeed = int(fxrand() * 100000000);
	randomSeed(fxSeed);

	tex = createGraphics(width, height);
	let c = color(random(colors));
	c.setAlpha(100);
	tex.noStroke();
	tex.fill(c);
	for (let i = 0; i < width * height * 0.05; i++) {
		let x = random(width);
		let y = random(height);
		let size = noise(x * 0.01, y * 0.01) + 0.3;
		tex.rect(x, y, size, size);
	}
}

function draw() {
	background(random(colors));

	blendMode(BURN);
	for (let i = 0; i < 100; i++) {
		let cx = random(-10, width + 10);
		let cy = random(height / 5, height / 5 * 4) + randomGaussian();
		let w = random(width * 0.025, width * 0.2125);
		let h = random(width * 0.025, width * 0.2125);
		let start = random(-PI, 0);
		let end = random(0, PI);
		push();
		translate(cx, cy);
		showArc(0, 0, w, h, start, end);
		pop();
	}

	image(tex, 0, 0);
}

function showArc(cx, cy, w, h, start, end) {
	let num = random(10, 30);
	stroke(random(colors));
	for (let i = 0; i < num; i++) {
		let x = cx + randomGaussian();
		let y = cy + randomGaussian();
		let z = random(100);
		let alpha = map(z, 0, 100, 0, 250);
		w = w * randomGaussian();
		h = h * randomGaussian();
		start = start + randomGaussian();
		end = end + randomGaussian();
		let c = color(random(colors));
		c.setAlpha(alpha);
		fill(c);
		arc(x, y, w, h, start, end);
	}
}