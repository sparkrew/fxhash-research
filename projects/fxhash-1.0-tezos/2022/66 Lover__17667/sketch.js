
var actRandomSeed = fxrand() * 3713;
let hues = [];
let nScl = 0.006;
var actnoiseSeed = fxrand() * 3713;


function setup() {
  randomSeed(actRandomSeed);
	mySize = min(windowWidth, windowHeight);
	createCanvas(mySize, mySize);
	colorMode(HSB, 360, 100, 100, 100);
	for(let i=0; i<10; i++){
		hues.push(random(360));
	}
	background(255);
	noStroke();
	stroke(0, 4);
	fill(90);
	rect(0, 0, width, height);
	for(let i=0; i<100000; i++){
		let x = randomGaussian(0.5, 0.15) * width;
		let y = randomGaussian(0.5, 0.15) * height;
		let s = rrrandom(width, 9);
		form(x, y, s);
	}
}

function rrrandom(n, t){
  

	while(t > 0){
		n = random(n);
		t--;
	}
	return n;
}

function form(x, y, d){
  noiseSeed(actnoiseSeed)
	let h = hues[int(noise(x * nScl, y * nScl) * 10)];
	let n = int(random(d));
	for(let i=0; i<n; i++){
		let r = random(0, 0.5) * d;
		let a = random(TAU);
		let xx = x + r * cos(a);
		let yy = y + r * sin(a);
		let cs = d * random(random(random()));
		let s = random(70, 100);
		let b = random(80, 100);
		let col = color(h, s, b);
		col.setAlpha(random(random(100)));
		fill(col);
		circle(xx, yy, cs);
	}
}
