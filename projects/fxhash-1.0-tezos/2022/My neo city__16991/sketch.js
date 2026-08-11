let colors = ['#0000e6', '#00aeff', '#ffdd00', '#ef0b10', '#001f00', '#ff4d4d', '#019b83', '#fdfbfc'];
var actRandomSeed = fxrand() * 3713;
let minSize = 5;

function setup() {
  	randomSeed(actRandomSeed);
		mySize = min(windowWidth, windowHeight);
	createCanvas(mySize, mySize);
		rectMode(CENTER);
	background('#78c3fb');
	noStroke();
	divideRect(0, 0, width, height);


}

function divideRect(x, y, w, h) {
  
	
	let p = map(w, width, 0, 0, 0.1);
	if (min(w, h) > minSize && random() > p) {
		if (w >= h) {
			let rndw = random(0.1, 0.9) * w;
			divideRect(x, y, rndw, h, minSize);
			divideRect(x + rndw, y, w - rndw, h, minSize);
		}
		if (w < h) {
			let rndh = random(0.1, 0.9) * h;
			divideRect(x, y, w, rndh, minSize);
			divideRect(x, y + rndh, w, h - rndh, minSize);
		}
	} else {
		form(x + w / 2, y + h / 2, w, h);
	}
}

function form(x, y, w, h) {
  
	
	let c1 = int(random(1, 12));
	let c2 = int(random(1, 12));
	let ww = w / c1;
	let hh = h / c2;
	let off = min(ww, hh) * random(0.5, 0.02);
	let col1 = random(colors);
	let col2 = random(colors);
	while (col1 == col2) {
		col1 = random(colors);
	}
	fill(col1);
	rect(x, y, w, h);
	for (let i = 0; i < c1; i++) {
		for (let j = 0; j < c2; j++) {
			let xx = x - w / 2 + i * ww + ww / 2;
			let yy = y - h / 2 + j * hh + hh / 2;
			fill(col2);
			rect(xx, yy, ww - off, hh - off);
		}
	}
}