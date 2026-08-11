/*
geopop_explor,
stephanepogran, 2022 - https://www.fxhash.xyz/
*/

let seed;

let parts = [];
let nbparts = 7500;
let outc;

let x, y, rot;
let nstep, ninc;
let nstepr, nstepg, nstepb, nsteprgb;
let nincr, nincg, nincb, nincrgb;
let nstepsw, nincsw;
let nSc, nScr, nScg, nScb, nscrgb;
let sw, swRef;
let rotoffs;

function setup() {
	//fxhash
	window.$fxhashFeatures = {
		noiseGEN: fxrand(),
	};
	seed = int(window.$fxhashFeatures.noiseGEN * 1000000000000);
	
	const pg = createCanvas(2160, 2160);
	smooth();
	pg.parent("pg");
	pixelDensity(1);
	swRef = height/1080;
	init();
}
function init() {
	noiseSeed(seed);
	randomSeed(seed);

	nstep = random(1);
	nsteprgb = random(4294967296);
	nstepr = random(4294967296);
	nstepg = random(4294967296);
	nstepb = random(4294967296);
	nScrgb = 1/4294967296;
	nScr = 1/4294967296;
	nScg = 1/4294967296;
	nScb = 1/4294967296;
	nstepsw = random(4294967296);
	nSc = 1/1024;
	
	let bgc = color(255, 255, 255);
	background(bgc);

	rotoffs = random(-TAU, TAU);
	for (let i = 0; i < nbparts; i++) {
		parts.push(new Geopop());
	}
}

function draw() {
	render();

	if (outc >= nbparts) {
		noLoop();
		if (!isFxpreview) {
			fxpreview();
		}
	}
}

function render() {
	translate(width/2, height/2);

	outc = 0;
	for (let i = 0; i < parts.length; i++) {
		parts[i].init();
		parts[i].display();
		parts[i].checko();
		parts[i].move();
	}

	nstep += 0.01;
	nsteprgb += 0.001;
	nstepr += 1/16;
	nstepg += 1/16;
	nstepb += 1/16;
	nstepsw += 0.01;
}

function keyPressed() {
	if (key == "s" || key == "S") {
		if (outc >= nbparts) {
			let numm = seed;
			saveCanvas("geopop_explor" + "-" + numm + ".png");
		}
	}
}

class Geopop{
	constructor() {
		this.rad = height/2/2;
		this.angle = random(0, TAU);
		this.x = cos(this.angle+rotoffs) * this.rad;
		this.y = sin(this.angle+rotoffs) * this.rad;
		this.out = false;
	}
	init(){
		this.r = map(noise(this.x * nScr, this.y * nScr, nstepr), 0, 1, 0, 255);
		this.g = map(noise(this.x * nScg, this.y * nScg, nstepg), 0, 1, 0, 255);
		this.b = map(noise(this.x * nScb, this.y * nScb, nstepb), 0, 1, 0, 255);
		this.sw = map(noise(this.x * 0.01, this.y * 0.01, nstepsw), 0, 1, 2, swRef*4);
	}
	move() {
		this.xprev = this.x;
		this.yprev = this.y;
		if (this.out === false) {
			this.rot = (TAU*3 * noise(this.x*nSc, this.y*nSc, nstep));
			this.x += cos(this.rot)*30;
			this.y += sin(this.rot)*30;
		}
	}
	checko() {
		if ((this.x < -width/2) || (this.x > width/2) || (this.y < -height/2) || (this.y > height/2)) {
			this.out = true;
			this.x = this.prevx = width*100;
			this.y = this.prevy = height*100;
			outc++;
		}
	}
	display() {
		strokeWeight(swRef*2);
		stroke(this.r, this.g, this.b);
		beginShape(LINES);
		vertex(this.x, this.y);
		vertex(this.xprev, this.yprev);
		endShape();
	}
}
