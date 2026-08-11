
function minmax(min, max){
  return Math.round(fxrand() * (max-min) + min);
}

function minmaxdouble(min, max){
  return fxrand() * (max-min) + min;
}



function HSLToHEX(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}



const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

let clr1 = minmax(0, 360);
let clr2 = minmax(0, 360);

let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;
  colorMain = HSLToHEX(minmax(0, 360), minmax(10, 60), minmax(60, 50));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, accentColor, accentSecond, colorMain2, accentForth, accentFifth];


let t = 3000;
function setup() {
	createCanvas(windowWidth, windowHeight);
  noiseSeed(minmax(0, 1000));
  frameRate(5);
	background(20);
  setTimeout(disable, t);
}

function disable(){
  enabled = false;
}
let enabled = true;

function draw() {
	if (enabled){
	for(let i=0; i<18; i++){
		let x = minmaxdouble(-0.1, 1.1) * width;
		let y = minmaxdouble(-0.1, 1.1) * height;
		stroke(palette[Math.floor(fxrand()*palette.length)]);
		dnts(x, y);
		if(fxrand()<0.5){
		noStroke();
		strokeWeight(1.5);
		}
	}
}
}

function dnts(x, y){
	for(let i=0; i<1000; i++){
		point(x, y);
		let a = noise(x*0.005, y*0.005, i*0.001)*20;
		x += cos(a) + (minmaxdouble(-1, 1)*2);
		y += sin(a) + (minmaxdouble(-1, 1)*2);
	}
}
