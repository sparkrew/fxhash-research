let layer1, layer2, layer3;
let colors = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"]; 
let colors1 = ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"]; 
let colors2 = ["#ffbe0b", "#fb5607", "#EE0655", "#6016E2", "#03A9F4"]; 
let colors3 = ["#2D2424", "#14213d", "#fca311", "#e5e5e5", "#ffffff"]; 

function setup() {
   seed=int(fxrand() * 100000000); 
  randomSeed(seed); 
  noiseSeed(seed);
	createCanvas(windowWidth,windowHeight);
	imageMode(CENTER);
	rectMode(CENTER);
	generate();
}

function draw() {
}

function generate() {
	background(random(colors));
	noStroke();
	fill(30);
	rect(width / 2, height / 2, width, height);


	noStroke();
	for (let i = 0; i < 200; i++) {
		let x = randomGaussian(0.5, 0.16) * width;
		let y = randomGaussian(0.5, 0.16) * height;
		let s = (random(100) * random(random())) + 1;
		let rnd = int(random(-2, 5));
		let ang = int(random(9)) * (TAU / 4);
		push();
		translate(x, y);
		rotate(ang);
		noStroke();
		fill(random(colors2));
		if (random() < 0.5) {
			stroke(random(colors));
          fill(random(colors1));
			if (random() < 1) {
				stroke(random(colors1))
              fill(random(colors2))
            if (random()<1.5){
              stroke(random(colors2))
            }
              fill(random(colors3))
              if (random()<1.6){
              stroke(random(colors3))
            }
			}
		}
		if (rnd <= 0) {
			circle(0, 0, s);
		}
		if (rnd == 1) {
			rect(0, 0, (s + 20) * 10, 1 + random(4));
		}
		if (rnd == 2) {
			if (random() < 0.5) {
				square(0, 0, s);
			} else {
				rect(0, 0, s, s * random(0.5, 1.5));
			}
		}
		if (rnd == 3) {
			organicShape(0, 0, s)
		}
		if (rnd == 4) {
			noiseCurve(0, 0, s * 0.5);
		}
		pop();
	}
}

function organicShape(x, y, s) {
	let pos = [];
	num = 7;
	for (let a = 0; a < TAU; a += (TAU / num)) {
		pos.push({
			x: x + s * 0.5 * cos(a) + (random(-1, 1) * random() * s * 0.15),
			y: y + s * 0.5 * sin(a) + (random(-1, 1) * random() * s * 0.15)
		});
	}
	beginShape();
	curveVertex(pos[pos.length - 1].x, pos[pos.length - 1].y);
	for (let i = 0; i < pos.length; i++) {
		curveVertex(pos[i].x, pos[i].y);
	}
	curveVertex(pos[0].x, pos[0].y);
	curveVertex(pos[1].x, pos[1].y);
	endShape();
}

function noiseCurve(x, y, w) {
	let c = int(random(20, 200));
	let px = x;
	let py = y;
	let rr = random(1000000);
	for (let i = 0; i < c; i++) {
		let scl = 0.0003;
		let angle = noise(x * scl, y * scl, rr) * 100;
		let ww = map(i, 0, c - 1, w, 50);
		strokeWeight(ww);
		line(x, y, px, py);
		px = x;
		py = y;
		x += cos(angle) * 2;
		y += sin(angle) * 2;
	}
}