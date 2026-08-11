const period = Math.floor(fxrand()*10);
const drop = 10 + Math.floor(fxrand()*5);
const speed = Math.floor(fxrand()*900);
const speed_2 = Math.floor(fxrand()*5000);
const x00x0 = 0.5 + Math.floor(fxrand()*1);
let fx00x0 =fxrand();
if(fx00x0 < 0.5) {
  fx00x0 = 1;
} else if(fx00x0 < 5){
  fx00x0 = 100;
}
else if(fx00x0 < 30){
  fx00x0 = 10;
}
else if (fx00x0 < 60){
  fx00x0 = 500;
}
let url = [
	// "https://coolors.co/20222f-1a1f56-2c1e7d-118ab2-0134aa-0060e8-0297fb-00befa-83def3-d1ecf7-f2f6f9-fce503-fe6d02-e7011d-4b0f31",
  "https://coolors.co/palette/d8f3dc-b7e4c7-95d5b2-74c69d-52b788-40916c-2d6a4f-1b4332-081c15"

];
let palette;
let w = innerWidth;
let h = innerHeight;
let  num = 20;
var maxDiameter; 
var theta; 

function setup() {
  v = h
  createCanvas(windowWidth, windowHeight);
	// noSmooth();
  smooth(5);
  maxDiameter = random(period); 
	theta = 0; 
}

function draw() {
  var diam = 100 + sin(theta) * maxDiameter ;
	randomSeed(frameCount / 500);
	// blendMode(BLEND);
	background(255);
	copy(0,0,width,height,-1,-1,width+random(x00x0,drop),height+2);  
	palette = shuffle(createPalette(random(url)), true);
	// background(0);
	// blendMode(DIFFERENCE);
	let offset = -width / random(x00x0,speed);
	let yStep = (height - offset *  v / random(x00x0,drop)) / random(x00x0,speed);
	for (let y = offset; y <= height - offset; y += yStep) {

		let num = int(1 + diam * noise(y, frameCount / 200));
		let arr = [];
		for (let i = 0; i < num; i++) {
			let n = sq(sq(noise(y / 15, frameCount / 400))) * (width - offset * 20);
			n = max(n, 1);
			arr.push(n);
		}
		drawingContext.setLineDash(arr);
		drawingContext.lineDashOffset = y - frameCount / random(x00x0,speed);
		strokeWeight(yStep);
		strokeCap(SQUARE);
		stroke(random(palette));
		line(offset, y, width - offset, y);
	}

	let xStep = (width - offset * diam) / random(drop,x00x0);
	for (let x = offset; x <= width - offset; x += xStep) {

		let num = int(1 + 2 * noise(x, frameCount / 200));
		let arr = [];
		for (let i = 0; i < num; i++) {
			let n = sq(sq(noise(x / 10, frameCount /  v / random(x00x0,drop)))) * (width - offset * 20);
			n = max(n, 1);
			arr.push(n);
		}
		drawingContext.setLineDash(arr);
		drawingContext.lineDashOffset = x - frameCount / 200;
		strokeWeight(xStep);
		strokeCap(SQUARE)
		stroke(random(palette));
		line(x, offset, x, height - offset * 2);
	}


	for (let y = offset; y <= height / 2 - offset; y += yStep) {

		let num = int(1 + 10 * noise(y, frameCount / drop));
		let arr = [];
		for (let i = 0; i < num; i++) {
			let n = sq(sq(noise(y / 10, frameCount / 200))) * (width - offset * 2);
			n = max(n, 1);
			arr.push(n);
		}
		drawingContext.setLineDash(arr);
		drawingContext.lineDashOffset = y - frameCount / 100;
		strokeWeight(yStep);
		strokeCap(SQUARE)
		line(offset, y , width - offset, y);
	}

}



function createPalette(_url) {
	let slash_index = _url.lastIndexOf('/');
	let pallate_str = _url.slice(slash_index + 1);
	let arr = pallate_str.split('-');
	for (let i = 0; i < arr.length; i++) {
		arr[i] = color('#' + arr[i]);
	}
	return arr;
}

let lapse = 0;
function mousePressed() {
  if (millis() - lapse > 400) {
    save('pix.jpg');
    lapse = millis();
  }
}
