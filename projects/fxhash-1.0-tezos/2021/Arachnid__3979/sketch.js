let url = "https://coolors.co/000000-14213d-fca311-e5e5e5-ffffff";
let palette;

function setup() {
	createCanvas(1000, 1000);
	colorMode(HSB, 360, 100, 100, 100);
    randomSeed(fxrand()*100000);
	palette = createPalette(url);
}

function draw() {
	background(0, 0, 90);
	let offset = width / 15;
	let margin = 0; //offset/5;
	let kMax = int(random(2,8));
	for (let k = 0; k <kMax; k++) {
		let cells = k; //int(random(1, 6));
		let d = (width - offset * 2 - margin * (cells - 1)) / cells;
		drawingContext.shadowColor = color(0, 0, 0, 15);
		drawingContext.shadowBlur = d / 4;

		for (let j = 0; j < cells; j++) {
			for (let i = 0; i < cells; i++) {
				let x = offset + i * (d + margin) + d / 2;
				let y = offset + j * (d + margin) + d / 2;
				drawFancyShapeNested(x, y, d);
			}
		}

	}
	noLoop();
	frameRate(1);
}

function drawFancyShapeNested(x, y, d, g) {

	// rectMode(CENTER);
	// rect(x, y, d);
	let g1 = createGraphics(d, d);
	let g2 = createGraphics(d, d);
	g1.noStroke();
	g2.noStroke();

	// g1.drawingContext.shadowColor = color(0, 0, 0, 15);
	// g1.drawingContext.shadowBlur = d;

	g2.drawingContext.shadowColor = color(0, 0, 0, 5 / 100 * 255);
	g2.drawingContext.shadowBlur = d / 2;

	let ratio = 0.5;

	let ratio_a = random(ratio, 1 - ratio);
	let ratio_b = 1 - ratio_a;
	g1.push();
	g1.translate(d / 2, d / 2);
	g1.rotate(int(random(4)) * PI / 2);
	g1.push();
	g1.translate(-d / 2, -d / 2);
	g1.push();
	g1.translate(ratio_a / 2 * d, d / 4);
	g1.scale(random() > 0.5 ? -1 : 1, random() > 0.5 ? -1 : 1)
	g1.triangle(-ratio_a * d / 2, -d / 4, -ratio_a * d / 2, d / 4, ratio_a * d / 2, -d / 4);
	g1.pop();
	g1.push();
	g1.translate(ratio_a * d + ratio_b / 2 * d, d / 4);
	g1.scale(random() > 0.5 ? -1 : 1, random() > 0.5 ? -1 : 1)
	g1.triangle(-ratio_b * d / 2, -d / 4, -ratio_b * d / 2, d / 4, ratio_b * d / 2, -d / 4);
	g1.pop();

	g1.pop();
	g1.push();
	g1.rotate(PI);
	g1.translate(-d / 2, -d / 2);
	g1.push();
	g1.translate(ratio_a / 2 * d, d / 4);
	g1.scale(random() > 0.5 ? -1 : 1, random() > 0.5 ? -1 : 1)
	g1.triangle(-ratio_a * d / 2, -d / 4, -ratio_a * d / 2, d / 4, ratio_a * d / 2, -d / 4);
	g1.pop();
	g1.push();
	g1.translate(ratio_a * d + ratio_b / 2 * d, d / 4);
	g1.scale(random() > 0.5 ? -1 : 1, random() > 0.5 ? -1 : 1)
	g1.triangle(-ratio_b * d / 2, -d / 4, -ratio_b * d / 2, d / 4, ratio_b * d / 2, -d / 4);
	g1.pop();
	g1.pop();
	g1.pop();

	let xStep, yStep;
	for (let y = 0; y < g2.height; y += yStep) {
		yStep = random(ratio, 1 - ratio) * g2.height;
		if (y + yStep > g2.height) yStep = g2.height - y;
		if (g2.height - y - yStep < g2.height / 100) yStep = g2.height - y;
		for (let x = 0; x < g2.width; x += xStep) {
			let c1 = random(palette);
			let c2 = random(palette);
			while (c1 == c2) {
				c2 = random(palette)
			}
			xStep = random(ratio, 1 - ratio) * g2.width;
			if (x + xStep > g2.width) xStep = g2.width - x;
			if (g2.width - x - xStep < g2.width / 100) xStep = g2.width - x;
			g2.rectMode(CENTER);
			g2.fill(c1);
			g2.rect(x + xStep / 2, y + yStep / 2, xStep, yStep);
			g2.push();
			g2.translate(x + xStep / 2, y + yStep / 2);
			g2.scale(random() > 0.5 ? -1 : 1, random() > 0.5 ? -1 : 1)
			g2.fill(c2);
			g2.triangle(-xStep / 2, -yStep / 2, xStep / 2, -yStep / 2, xStep / 2, yStep / 2);
			g2.pop();
		}
	}
	let g1_tmp = g1.get();
	let g2_tmp = g2.get();
	g2_tmp.mask(g1_tmp);
	push();
	translate(x, y);
	imageMode(CENTER);
	image(g1, 0, 0);
	push();
	image(g2_tmp, 0, 0);
	pop();
	pop();
}


function createPalette(_url) {
	let slash_index = _url.lastIndexOf('/');
	let pallate_str = _url.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = color('#' + arr[i]);
	}
	return arr;
}