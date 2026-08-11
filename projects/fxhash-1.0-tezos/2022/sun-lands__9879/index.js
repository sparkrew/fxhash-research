/*
"sun-lands"
stephanepogran, 2022 - https://www.fxhash.xyz/u/stephanepogran
*/

let seed;
let swR, picMg;
let ell_ar = [1/2, 1/4];
let ellDiam;
let rect_ar = [1, 1/2, 1/4];
let RectLx1, RectLx2, rectLy1, rectLy2;

let N_s, nR_s, nG_s, nB_s, nRad_s, nRot_s;
let N_sc, nR_sc, nG_sc, nB_sc, nRad_sc, nRot_sc;
let N_i, nR_i, nG_i, nB_i, nRad_i, nRot_i;
let ampMax;
let rotoff;
let radius;

let parts = [];
let nbparts = 500;

function setup() {
	window.$fxhashFeatures = {
		noiseGEN: fxrand(),
	};
	seed = int(window.$fxhashFeatures.noiseGEN * 1000000000000);
	
	const pg = createCanvas(2160, 2160);
	smooth();
	pg.parent("pg");
	pixelDensity(0.5);
	swR = height/1080;
	picMg = height/30;
	
	init();
}

function init() {
	noiseSeed(seed);
	randomSeed(seed);

	nR_sc = 1/random(1, height);
	nG_sc = 1/random(1, height);
	nB_sc = 1/random(1, height);
	nRad_sc = 0.01;
	nRot_sc = 0.01;

	//offsets
	nR_s = random(1000000);
	nG_s = random(1000000);
	nB_s = random(1000000);
	nRad_s = random(1000000);
	nRot_s = random(1000000);

	nR_i = random(0.0005, 0.001);
	nG_i = random(0.0005, 0.001);
	nB_i = random(0.0005, 0.001);
	nRad_i = nRad_sc/random(10, 20);
	nRot_i = nRot_sc/random(5, 10);
	
	ampMax = random(height/60, height/50);

	rotoff = random(TAU);

	rectLx1 = random(rect_ar)/2;
	rectLx2 = random(rect_ar)/2;
	rectLy1 = random(rect_ar)/2;
	rectLy2 = random(rect_ar)/2;
	
	for (let i = 0; i < nbparts; i++) {
		parts.push(new Geopop());
	}

	background(239, 239, 239);

	translate(width/2, height/2);
	
	ellDiam = random(ell_ar);
	noStroke();
	fill(random(256), random(256),random(256));
	ellipse(0, 0, height*ellDiam, height*ellDiam, 50);
}

function draw() {
	translate(width/2, height/2);

	render();

	outMain = 0;
	for (let i = 0; i < parts.length; i++) {
		if (parts[i].outB === true) {
			outMain++;
		}
	}

	if (outMain >= nbparts) {
		if (!isFxpreview) {
			fxpreview();
		}
		noLoop();
	}
}

function render() {

	N_s += N_i;
	nR_s += nR_i;
	nG_s += nG_i;
	nB_s += nB_i;
	nRad_s += nRad_i;
	nRot_s += nRot_i;

	for (let i = 0; i < parts.length; i++) {
		parts[i].init();
		parts[i].checkout();
		parts[i].display();
		parts[i].move();
	}
}

function keyPressed() {
	if (key == "s" || key == "S") {
		if (outMain >= nbparts) {
			saveCanvas("sun-lands #" + seed + ".png");
		}
	}
}

class Geopop{
	constructor() {
		this.rad = height/2/2;
		this.angle = random(TAU*2);
		this.x = random(-width/2 - picMg*2, width/2 + picMg*2);
		this.y = 0;
		this.outc = 0;
		this.outB = false;
	}
	init(){
		this.r = map(noise(this.x*nR_sc + nR_s, this.y*nR_sc + nR_s, nR_s), 0, 1, 0, 255);
		this.g = map(noise(this.x*nG_sc + nG_s, this.y*nG_sc + nG_s, nG_s), 0, 1, 0, 255);
		this.b = map(noise(this.x*nB_sc + nB_s, this.y*nB_sc + nB_s, nB_s), 0, 1, 0, 255);
	}
	move() {
		this.xprev = this.x;
		this.yprev = this.y;
		if (this.outB === false) {
			this.rot = TAU*2 * map(noise(this.x*nRot_sc, this.y*nRot_sc, nRot_s), 0, 1, 1, 2);
			radius = map(noise(this.x*nRad_sc, this.y*nRad_sc, nRad_s), 0, 1, 0, ampMax);
			this.x += cos(this.rot+rotoff)*radius;
			this.y += sin(this.rot+rotoff)*radius;
		}
	}
	checkout() {
		if ((this.x < -width/2) || (this.x > width/2) || (this.y < -height*rectLy1) || (this.y > height*rectLy2)) {
			this.rad = height/2/2;
			this.angle = random(TAU*2);
			this.x = random(-width/2 - picMg*2, width/2 + picMg*2);
			this.y = 0;
			this.xprev = this.x;
			this.yprev = this.y;
			
			this.outc++;
			if (this.outc > 7) {
				this.outB = true;
			}

		}
	}
	display() {
		///*
		strokeWeight(swR*1);
		beginShape();
		stroke(this.r, this.g, this.b);
		//stroke(0);
		if (this.y != 0) vertex(this.x, this.y);
		if (this.y != 0) vertex(this.xprev, this.yprev);
		endShape();
		//*/
		///*
		strokeWeight(swR*2);
		//stroke(0); //brightness(c)
		stroke(this.r, this.g, this.b);
		beginShape(POINTS);
		if (this.y != 0) vertex(this.x, this.y);
		endShape();
		//*/
	}
}
