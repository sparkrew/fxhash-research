let particles = [];
let angleCount = 4;
let sc = 0.01;
let palette = ["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff"]

function setup() {
    Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
	createCanvas(windowWidth, windowHeight);
	let n = width * 4;
	let q = height;
	background(random(palette));
	stroke(255, 60);
	for (i = 0; i < n; i++) {
		let x = floor(random(q)) * width / q;
		let y = floor(random(q)) * height / q;
		particles[i] = new Particle(createVector(x, y));
	}
}

function draw() {
	for (let p of particles) {
		p.move();
		p.show();
	}
}

function getRegion(x, y) {
	return floor((noise(x * sc, y * sc) * angleCount));
}

class Particle {
	
	constructor(p) {
		this.p = p;
	}
	
	move() {
		this.last = this.p.copy();
		let v = p5.Vector.fromAngle(getRegion(this.p.x, this.p.y) * TAU / angleCount);
		// v.add(p5.Vector.fromAngle(sin(radians(frameCount * 2)) * PI));
		this.p = p5.Vector.add(this.p, v);
	}
	
	show() {
		line(this.p.x, this.p.y, this.last.x, this.last.y);
	}
	
}