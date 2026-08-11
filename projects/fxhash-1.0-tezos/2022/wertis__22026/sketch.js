function setup() {
  Math.random = fxrand;
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);

	createCanvas(windowWidth, windowHeight);
	background(0);
}

let xoff = 0.0;
function draw() {
	let colors = ['#d2a817','#539153','#c54e1e','#577590','#43AA8B','#43AA8B','#90BE6D','#F9C74F','#F8961E','#F3722C','#F94144']
	let c = color(random(colors))
	c.setAlpha(200)
	noStroke()
	fill(c)
  xoff = xoff + 10;
  let n = noise(xoff) * width;
	let y = n * random(1, 10)

	let colorCode = map(y, 0, width, 0,255)
	
	for(var i =1; i<11; i++) {
		ellipse(n * i, n * random(1, 10), n * random(0,0.3));
	}
	
}