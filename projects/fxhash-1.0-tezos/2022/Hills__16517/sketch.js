
const MAX_HEIGHT = 530;
const MAX_WIDTH = 530;

let STEP = 15;


let VARIANCE_FACTOR;

function rand(min, max) {
	return Math.floor(fxrand() * (max - min) + min);
}

function randRgbArr(n) {
	return new Array(n).fill(0).map((_, i) => rand(0, 256));
}


let FILLS = [[]];

let SHADES = [
	["#d7f8e4", "#def5b2", "#a81d09", "#9be6d6", "#3b2d78"],
	["#acb", "#554954", "#b9c3c9"],
	["#5f8d90", "#84ffe5", "#ae4739", "#F5CBA7"],
	["#5D6D7E", "#bAECEE", "#bbb", "#dCF0F1", "#333"]
];

const STROKE_COLORS = ["#fff", "#333"];
let button;
let color;


function setup() {
	createCanvas(MAX_WIDTH, MAX_HEIGHT);
	
	stroke(STROKE_COLORS[1]);
	background(255);
	strokeWeight(1.5);
	VARIANCE_FACTOR = rand(5, 30);
	FILLS = new Array(3).fill(0).map((_, i) => randRgbArr(3));
	
}

function draw() {
	const lines = [];
	let n = MAX_HEIGHT - STEP;
	for (let i = STEP; i < n; i += STEP) {
		let line = [];
		for (let j = STEP; j <= n; j += STEP) {
			let staticCenter = n / 2;
			let distanceToCenter = Math.abs(j - staticCenter);
			let variance = Math.max(
				staticCenter - VARIANCE_FACTOR - distanceToCenter,
				0
			);

			let curveHeightFactor = 2.5;
			let random = ((fxrand() * variance) / curveHeightFactor) * -1;

			
			let point = { x: j, y: i + random };
			line.push(point);
		}
		
		lines.push(line);
	}

	let SLOPE = 3;
	for (let i = 4; i < lines.length; i++) {
		beginShape();
		for (let j = 0; j < lines[i].length; j += SLOPE) {
			let line = lines[i][j];
			curveVertex(line.x, line.y);
			let randomIdx = rand(0, FILLS.length);
			
			[r, g, b] = FILLS[randomIdx];
			fill(r, g, b);

			
		}
		endShape();
	}
	
	noLoop();
}

function generate() {
	clear();
	VARIANCE_FACTOR = rand(5, 35);
	FILLS = new Array(3).fill(0).map((_, i) => randRgbArr(3));
	redraw();
}
