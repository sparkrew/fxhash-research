
function randfx(min, max){
  return Math.round(fxrand() * (max-min) + min);
}
function randfxdouble(min, max){
  return fxrand() * (max-min) + min;
}
let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;
  colorMain = HSLToHEX(randfx(0, 360), randfx(25, 35), randfx(28, 32));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, colorMain2];
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




//CreativeCommons Attribution ShareAlike
// by Holy Got A Problem
//https://openprocessing.org/user/221207
let noiseBox = []

function setup() {
	createCanvas(windowWidth, windowHeight);
  noiseSeed(randfx(0,1000));
	background(0);
	for(var i=0 ; i<width; i+= 20){
		for(var j=0; j<height; j+= 15){
			noiseBox.push({
				x:i,
				y:j,
			})
		}
	}
}

function draw() {
	for(var i=0; i<noiseBox.length ; i++){
		let noises = noiseBox[i]
		let move = randfx(-4,4)
		noStroke()
		fill(palette[Math.floor(fxrand()*palette.length)])
		ellipse(noises.x+move,noises.y+move,2)
		noises.x += (noise(noises.x/300,noises.y/300,1000)-0.5)*20
		noises.y += (noise(noises.x/400,noises.y/200,800)-0.5)*15
		blendMode(LIGHTEST)
	}
}
