//2022_01/17@senbaku
let seed;
let num
let palette_selected
let size;

function setup() {
	size = min(windowWidth, windowHeight)
	createCanvas(size, size);
	seed = int(fxrand() * 1000);
	angleMode(DEGREES)
	blendMode(MULTIPLY)
	noLoop();
}

function windowResized() {
	size = min(windowWidth, windowHeight)
	resizeCanvas(size, size);
	angleMode(DEGREES)
	blendMode(MULTIPLY)
	noLoop();
}

function draw() {
	randomSeed(seed)
	background("#f4f1de");
	noStroke();
	rectMode(CENTER);
	num = random(6, 20)
	let start = size * 0.16;
	let end = start + (size - start * 2);
	let leng = size - (start * 2);
	let y = size / 2;

	for (let x = start; x < end + 1; x += (leng / num)) {
		push();
		translate(x, y);
		rotate(random(-15, 15));
		let w = (leng / num) * 0.9
		let h = size - (size * 1.68 - size)
		pnum = int(random(palettes.length))
		palette_selected = palettes[pnum]
		console.log(seed)
		let c1 = palette_selected[0]
		let c2 = palette_selected[1]
		let c3 = palette_selected[2]
		let gradientFill = drawingContext.createLinearGradient(
			-w / 2,
			-h / 2,
			w / 2,
			h / 2
		);
		gradientFill.addColorStop(0, c1);
		gradientFill.addColorStop(0.5, c2);
		gradientFill.addColorStop(1, c3);
		drawingContext.fillStyle = gradientFill;

		rect(0, 0, w, h, size * 0.005);
		pop();
	}

}

//https://uigradients.com/
palettes = [
	["#642B73", "#C6426E", "#C6426E"],
	["#C6FFDD", "#FBD786", "#f7797d"],
	["#12c2e9", "#c471ed", "#f7797d"],
	["#b92b27", "#1565C0", "#1565C0"],
	["#FFAFBD", "#ffc3a0", "#ffc3a0"],
	["#808080", "#3fada8", "#3fada8"],
	["#ee0979","#ff6a00","#ff6a00"],
	["#CAC531","#F3F9A7","#F3F9A7"],
	["#e1eec3","#f05053","#f05053"],
	["#1c92d2","#12c2e9","#12c2e9"]
]