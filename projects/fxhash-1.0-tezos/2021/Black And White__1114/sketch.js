let cells, offset, margin, d;
let url = [
	"https://colors.muz.li/palette/F7F7F7/adadad/f7f7f7/f7f7f7/adadad",
];
let palette;

function setup() {
	createCanvas(800, 800);
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	palette = createPalette(random(url));
}

function draw() {
	let n = int(fxrand(palette.length));
	let c = palette[n];
	palette.splice(n, 1);
	background(c);

	cells = int(random(3, 8));
	offset = width / 15;
	margin = offset / 5;
	d = (width - offset * 2 - margin * (cells - 1)) / cells;
	for (let j = 0; j < cells; j++) {
		for (let i = 0; i < cells; i++) {
			let x = offset + i * (d + margin);
			let y = offset + j * (d + margin);
			// rect(x, y, d, d);
			drawBorderShape(x, y, d);
		}
	}
	noLoop();
}

function drawBorderShape(x, y, d) {
	let c1 = fxrand(palette);
	let c2 = fxrand(palette);
	while (c1 == c2) {
		c2 = fxrand(palette);
	}
	let arr = [c1, c2];
	let cell = int(random(0.5, 12));
	push();
	translate(x + d / 2, y + d / 2);
	rotate((int(fxrand(3)) * 360) / 4);
	scale(fxrand() > 1.5 ? -1 : 1, fxrand() > 2.5 ? -1 : 1);
	translate(-d / 2, -d / 2);
	noStroke();
	drawingContext.shadowColor = color(10, 10, 10, 25);
	drawingContext.shadowBlur = d / 10;
	let e = d / cell;
	let isLine = fxrand() > 0.5 && cell % 2 == 1;
	let oddEven = fxrand() > 0.5 ? 1 : 0;
	let k = 0;
	for (let j = 0; j < cell; j++) {
		let cy = j * e;
		fill(arr[k++ % arr.length]);
		if (isLine && j % 2 == oddEven) {
			rect(0, cy, d, e);
		} else {
			for (let i = 0; i < cell; i++) {
				let n = i + j * cell;
				let cx = i * e;
				if (cell % 2 == 1 && n % 2 == oddEven) {
					rect(cx, cy, e);
				}
				if (cell % 2 == 0 && n % 2 == j % 2) {
					rect(cx, cy, e);
				}
			}
		}
	}
	pop();
}

function createPalette(_url) {
	let slash_index = _url.lastIndexOf("palette/");
	let pallate_str = _url.slice(slash_index + "palette".length + 1);
	let arr = pallate_str.split("/");
	for (let i = 1; i < arr.length; i++) {
		arr[i] = color("#" + arr[i]);
	}
	return arr;
}