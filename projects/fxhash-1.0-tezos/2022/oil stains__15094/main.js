





//FX RAND options
//
//
//
//
//
//
//dont change
function randfx(min, max){
  return Math.round(fxrand() * (max-min) + min);
}
function randfxdouble(min, max){
  return fxrand() * (max-min) + min;
}
let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;
  colorMain = HSLToHEX(randfx(0, 360), randfx(20, 40), randfx(20, 45));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, accentColor, accentSecond, colorMain2, accentForth, accentFifth];
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
//
//
//
//
//
//


var points = [];
var mult = 0.001;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
  noiseSeed(randfx(0, 1000));
	var density = 80;
	var space = width/density;

	for (var x = 0; x<width; x += space){
		for(var y = 0; y < height; y += space){
			var v = createVector(x, y);
			points.push(v);
		}
	}
}

function draw() {

	stroke(palette[Math.floor(fxrand()*palette.length)]);
	strokeWeight(0.6);

	for(var i = 0; i<points.length; i++) {

		var angle = map(noise(points [i].x * mult, points[i].y * mult), 0, 75, -180, 1080);
		points[i].add(createVector(cos(angle)*9, sin(angle)));
		ellipse(points[i].x, points[i].y, 1);

	}
}
