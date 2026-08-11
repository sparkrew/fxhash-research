let curl = "https://coolors.co/e3170a-a9e5bb-fcf6b1-f7b32b-2d1e2f";

let bgColor;
let seed, noiseArg;
let obj;
let bg, fb, ef, win;
let fbbg;
let step;

function setup() {
  seed=int(fxrand() * 100000000); 
  randomSeed(seed); 
	createCanvas(600, 600);
	// colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	background(255);
	noLoop();
	// frameRate(0.5);

	pal = createPallete(curl);
	let cid = int(random(pal.length));
	bgColor = pal[cid];
	pal.splice(cid, 1);
	pal = shuffle(pal);

	seed = random(1e+4);
	noiseArg = random(1e+4);
	
	// obj = [];
	// for (let i = 0; i < 16; i++) { obj[i] = new Hexagon({phase: int(random(6))}); }

	bg = genBackground(pal[0], pal[1]);
	// bg = genBackground(color(300), color(150));
	// bg = genBackground(color(100), color(10));
	
	ef = genEffect();
	win = genWindow();
	
	fbbg = genBackground(pal[1], pal[2]);
	// fbbg = genBackground(color(255), color(150));
	// fbbg = genBackground(color(100), color(10));
	
	fb = createGraphics(width, height);
	fb.copy(fbbg, 0, 0, width, height, 0, 0, width, height);
	fb = genFramebuffer(fb);
}

function update() {
	fb = genFramebuffer(fb);
}

function draw() {
	// pal = shuffle(pal);
	// fbbg = genBackground(pal[1], pal[2]);
	
	// randomSeed(seed);
	background(30);

	image(bg, 0, 0);
	image(fb, 0, 0);
	image(ef, 0, 0);
	image(win, 0, 0);
	
	update();
}

function genFramebuffer(pg){
	pg = createGraphics(width, height);
	pg.copy(fbbg, 0, 0, width, height, 0, 0, width, height);
	
	pg.angleMode(DEGREES);
	// shadow(pg, true);
	pg.blendMode(DIFFERENCE);

// 	// let gradient;
// 	gradient = drawingContext.createLinearGradient(0, 300, 300, 300);
// 	// gradient = drawingContext.createRadialGradient(300, 300, 0, 300, 300, 200);
// 	gradient.addColorStop(0, color(255));
// 	gradient.addColorStop(1, color(0));
// 	pg.drawingContext.strokeStyle = gradient;
// 	pg.drawingContext.fillStyle = gradient;
	
	pg.circle(300, 250, 400);
	
	for (let i = 0; i < 25; i++) {
		let frame = createGraphics(width, height);
		let x = int(random(60))*10;
		let y = random(int(map(abs(x-300), 0, 300, 15, 45))*10, 500);
		frame.copy(fbbg, 0, 0, width, height, 0, 0, width, height);
		frame.erase();
		frame.strokeWeight(random(20, int(map(abs(x-300), 0, 300, 15, 5))*10));
		frame.line(x, y, x, 600);
		frame.noErase();
		pg.image(frame, 0, 0);
	}
	
	return pg;
}

function genBackground(c1, c2) {
	pg = createGraphics(width, height);
	
	let res = 180;
	let d = width / res + 1;
	pg.rectMode(CENTER);
	let col;
	for (let i = 0; i < res; i++) {
		for (let j = 0; j < res; j++) {
			let ns = map(noise(i*1e-1), 0, 1, -res/20, res/20);
			col = lerpColor(c1, c2, map(j + ns, 0, res - 1, 0, 1));
			pg.stroke(col);  pg.fill(col);
			pg.rect(map(i, 0, res - 1, 0, width), map(j, 0, res - 1, 0, height), d, d);
		}
	}
	pg.rectMode(CORNER);
	
	return pg;
}

function genEffect() {
	pg = createGraphics(width, height);

	// glitch
	pg.strokeWeight(1);
	for (let i = 0; i < width / 4; i++) {
		pg.stroke(red(bgColor), green(bgColor), blue(bgColor), random(30));
		let px = random(width);
		let py = random(height);
		pg.line(px, py, px, py + 200);
	}

	// noise
	pg.strokeWeight(1);
	for (let i = 0; i < width * height / 20; i++) {
		pg.stroke(red(bgColor), green(bgColor), blue(bgColor), random(100));
		let px = random(width);
		let py = random(height);
		pg.point(px, py);
	}
	
	return pg;
}

function easeInQuart(t) { return 1 + (--t) * t * t * t * t; }
function easeInOutQuart(t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; }
function easeInElastic(t) { return (0.01 - 0.01 / t) * Math.sin(60 * t) + 1; }

function shadow(pg, bShadow) {
	if (bShadow) {
		pg.drawingContext.shadowOffsetX = 5;
		pg.drawingContext.shadowOffsetY = 5;
		pg.drawingContext.shadowBlur = 10;
		pg.drawingContext.shadowColor = color(30);
		// pg.drawingContext.shadowColor = color(200);
		// pg.drawingContext.shadowColor = color(pal[0]);
		// drawingContext.shadowColor = bgColor;
	} else {
		pg.drawingContext.shadowOffsetX = 0;
		pg.drawingContext.shadowOffsetY = 0;
		pg.drawingContext.shadowBlur = 0;
	}
}

function keyPressed() {
	if (keyCode == ENTER) {
		save('screenshot.png');
	}
}

function genWindow() {
	pg = createGraphics(width, height);
	let w = width / 30;
	pg.noStroke();  pg.fill(255);
	pg.rect(0, 0, width, w);
	pg.rect(0, height - w, width, w);
	pg.rect(0, 0, w, height);
	pg.rect(width - w, 0, w, height);
	return pg;
}

function createPallete(_url) {
	let slash_index = _url.lastIndexOf('/');
	let pallate_str = _url.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = color('#' + arr[i]);
	}
	return arr;
}