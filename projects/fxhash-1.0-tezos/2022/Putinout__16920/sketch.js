let shapes = [];
let colors = ["#07B8D2", "#FED602", "#FF4B88", "#f71919", "#ffffff", "#303030"];
let SEED = Math.floor(fxrand() * 10000);
let minSize;
 var random = fxrand()
function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);
	generate();
  
}

function generate(){
	randomSeed(SEED);
	shapes = [];
	minSize = min(width, height);
	let w = minSize / 32;
	for (let x = 0; x < width; x += w) {
		for (let y = 0; y < height; y += w) {
			shapes.push(createVector(x + w / 2, y + w / 2, w * int(random(2) + 1)));
		}
	}
	shuffle(shapes, true);
	
	translate(width / 2, height / 2);
	scale(0.9);
	translate(-width / 2, -height / 2);

	background("#303030");

	for (let s of shapes) {
		randomShape(s.x, s.y, s.z);
	}
}

function randomShape(x, y, w) {
	let rnd = int(random(4));
	shuffle(colors, true);
	fill(colors[0])

	rect(x, y, w, w);
	if (rnd == 1) {
		let seg = int(random(3, 8));
		let ww = w / seg;
		noStroke();
		fill(colors[1]);
		for (let i = 0; i < seg; i++) {
			for (let j = 0; j < seg; j++) {
				if ((i + j) % 2 == 0) {
					rect(x + i * ww - w / 2 + ww / 2, y + j * ww - w / 2 + ww / 2, ww, ww);
				}
			}
		}
	} else if (rnd == 2) {
		noStroke();
		fill(colors[1]);
		push();
		translate(x, y);
		rotate(int(random(4)) * TAU / 4);
		triangle(w / 2, w / 2, -w / 2, -w / 2, -w / 2, w / 2);
		pop();
	} else if (rnd == 3) {
		fill(colors[1]);
		noStroke();
		circle(x, y, w * random(0.1, 0.9));
	}
	noFill();
	strokeWeight(minSize / 250);
	stroke("#303030");
	rect(x, y, w, w);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	generate();
}
