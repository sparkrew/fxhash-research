
let colors = "264653-2a9d8f-DFAC2A-E57010-e76f51".split("-").map(a=>"#"+a);

var sqr, pX, palette, noiseGra, num;
let gesture = [];
let cnt = 0;

function getColor(value) 
{
	fxCol = colors[Math.floor(value * colors.length)];
	return fxCol;
}

function getNum(value){
	num = Math.floor(value * 25) + 15;
	return num;
}

window.$fxhashFeatures = {
	"Color": getColor(fxrand()),
	"Quantity": getNum(fxrand()),
}

function setup() {
	windowResized();
}

function windowResized() {
	sqr = Math.min(windowWidth, windowHeight);
	createCanvas(sqr, sqr);
	colorMode(RGB,255,255,255,1.0);
	angleMode(DEGREES);
	ellipseMode(CORNER);
	pX = sqr * 0.01;
	
	
	noStroke();
	
	background(220);
	
	gesture = [];
	for (let i = 0; i < num; i++){
		gesture[i] = {
			pos: createVector(fxrand() * (sqr), (sqr * 0.5)),
			xAmt: Math.floor(fxrand() * 20) + 10,
			yAmt: Math.floor(fxrand() * 5) + 1,
			xStep: (fxrand()) * pX * 10,
			yStep: (fxrand()) * pX * 3,
			xSize: (fxrand()) * pX * 5,
			ySize: (fxrand()) * pX * 1.5,
			mv: fxrand() * 1.0 - .5,
			rot: fxrand() * 0.05 - 0.025,
			clr: fxrand() < 0.5 ? fxCol : "#060b0e",
		};
	}
	
	fill(180);
	for (let i = 0; i < 50000; i++)
	{
		let rad = pX * 45;
		let m = sqr/2;
		let sz = fxrand() * pX * 0.25;
		ellipse(m + (rad * cos(fxrand() * 360)),m + (rad * sin(fxrand() * 360)), sz, sz);
	}
}

function draw() {
	blendMode(BLEND);
	for (let i = 0; i < gesture.length; i++)
	{
		let g = gesture[i];
		var c1 = color(g.clr);
		c1.setAlpha(0.5 - (cnt * 0.002));
		stroke(c1);		
		noFill();
		push();
		translate(g.pos.x, g.pos.y);
		let v1 = createVector(0,0);
		let v2 = createVector(g.xAmt * pX,0);
		rotate(g.rot * cnt * 5);
		for (let i = 0; i < 250; i++)
    {
			var n = p5.Vector.lerp(v1, v2, fxrand(1.0));
			var sz = fxrand(2);
			strokeWeight(sz * map(cnt, 0, 250, pX * 0.2, 0));
      point(n);
		}
		pop();		
		g.pos.y += g.mv * pX;
		if (g.pos.y > sqr + (pX * 10)) g.pos.y = -pX * 10;
		if (g.pos.y < (-pX * 10)) g.pos.y = sqr + (pX * 10);
		
		c1.setAlpha(1);
	}
	noStroke();
	fill(220);
	rect(0,0,pX*5,pX*100);
	rect(0,0,pX*100,pX*5);
	rect(pX*95,0,pX*5,pX*100);
	rect(0,pX*95,pX*100,pX*5);

	cnt ++;
	if (cnt > 250) noLoop();

}