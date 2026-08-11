
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


let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;

colorMain = HSLToHEX(minmax(0, 360), minmax(50, 80), minmax(60, 80));
  accentColor = tinycolor(colorMain).spin(-10).toString();
  accentSecond = tinycolor(accentColor).spin(-10).toString();
  colorMain2 = tinycolor(colorMain).complement().toHexString();
  accentForth = tinycolor(colorMain2).spin(-10).toHexString();
  accentFifth = tinycolor(accentForth).spin(-10).toHexString();
  palette = [colorMain, accentColor, accentSecond, colorMain2, accentForth, accentFifth];


let colrt = palette[Math.floor(fxrand()*palette.length)];
let step;
let n = minmax(10, 60); // number of blobs
let radius = 0; // diameter of the circle
let inter = minmaxdouble(0.001, 0.05); // difference between the sizes of two blobs
let maxNoise = minmax(6,7);

let noiseProg = (x) => (x);

let alppp =  minmaxdouble(2, 10);
while (alppp >= 3 && alppp < 3.9){
   alppp =  minmaxdouble(2, 10);
}
while(alppp > 8 && alppp < 9.2){
   alppp =  minmaxdouble(2, 10);
}
//let alppp = 3 ;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseSeed(minmax(0, 1000));


  var clr = minmax(0, 360);

  while (clr > 15 && clr < 85){
    clr = minmax(0, 360);
  }

  	background(HSLToRGB(clr, 20, 10));

  colorMode(HSB, 1);
	angleMode(DEGREES);
  noFill();
	step = minmax(3, 8);
	noStroke();
}

function draw() {
  let t = frameCount/1.5;
  for (let i = n; i > 0; i--) {
		let size = radius + i * inter;
		let noisiness = maxNoise * noiseProg(i/n);

		let alpha = alppp - i/n;
		fill((alpha/5 + 0.75)%1, 0.7, 0.8, alpha);
    blob(size, width/2, height/2, t - i * step, noisiness, 6);

  }

}


let swic, rezs;
swic = [155, 180];
rezs = swic[Math.floor(fxrand()*swic.length)];


function blob(size, xCenter, yCenter, t, noisiness, nPoints) {
  beginShape();
	let angleStep = rezs / nPoints;
  for (let theta = 0; theta <= 360 + 3 * angleStep; theta += angleStep) {
		let r = (size + ((cos((theta + t)*nPoints) + 2)/2 + (sin((theta + t)*nPoints) + 1)/2) * noisiness) * 10;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  endShape();
}
