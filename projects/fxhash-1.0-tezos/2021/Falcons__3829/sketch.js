
   
let url = "https://coolors.co/355070-6d597a-b56576-e56b6f-eaac8b";
let palette;
let points = [];
let points_num = 50;
let sw = 1;

let angleMax = 180; 

function setup() {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	palette = createPalette(url);
   seed=int(fxrand() * 100000000); 
     randomSeed(seed); 

	noSmooth();
	points = [];
	for (let i = 0; i < points_num; i++) {
		let x = random(width);
		let y = random(height);
		let p = createVector(x, y);

		p.color = random(palette);
		p.ns = random(400, 1800);
		points.push(p);
	}

	background(0, 0, 100);
}

function draw() {

	for (let p of points) {
		let angle = noise(p.x / p.ns, p.y / p.ns) * angleMax;
		p.add(p5.Vector.fromAngle(angle));
		if (p.x > width + sw) {
			p.x = 0;
			p.y = random(height);
		}
		if (p.y > height + sw) {
			p.x = random(width);
			p.y = 0;
		}
		if (p.x < 0 - sw) {
			p.x = width;
			p.y = random(height);
		}
		if (p.y < 0 - sw) {
			p.x = random(width);
			p.y = height;
		}

		for (let q of points) {
			if (q.equals(p) != true) {
				let dMax = 150;
				let distance = p5.Vector.dist(p, q);
				let distance_ratio = distance / dMax;
				if (distance < dMax) {
					stroke(q.color);
					strokeWeight(sw - sw * distance_ratio);
					
					colorMode(RGB);
					let nc = lerpColor(q.color, p.color, 0.5);
					colorMode(HSB, 360, 100, 100, 100);
					stroke(nc);
					line(p.x, p.y, q.x, q.y);
				}
			}
		}
	}
	if (frameCount % 1000 == 0) {
		setup();
	}
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