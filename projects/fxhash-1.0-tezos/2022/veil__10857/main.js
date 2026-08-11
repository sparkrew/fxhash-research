// by onwaveg (twt)


function randmm(min, max){
  return Math.round(fxrand() * (max-min) + min);
}
function randmmdb(min, max){
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

let colorMain, accentColor, accentSecond, colorMain2, accentForth, pallette;

  colorMain = HSLToHEX(randmm(0, 360), randmm(40, 50), randmm(30, 50));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    pallette = [colorMain, accentColor, accentSecond, colorMain2, accentForth, accentFifth];



    function setup() {
    	createCanvas(800, 800);
      noiseSeed(randmm(0, 1000));
    	noLoop();
    	rectMode(CENTER);
    }

    function draw() {
    	background(235);
    	tile();
    }

    function tile() {
    	let c = int(randmm(95, 117)) * 2;
    	let w = (width * 2) / c;
    	translate(-width * 0.5, -width * 0.5);

    	for (let i = 0; i < c; i++) {
    		let t = i % 2;
    		for (let j = 0; j < c; j++) {
    			let x = i * w + w / 2;
    			let y = j * w + w / 2;
    			if (t == 0) {
    				t = 1;
    			} else {
    				t = 0;
    			}
    			form(x, y, w + 1, t);
    		}
    	}
    }

    function form(x, y, s, t, col1, col2) {
    	let w = s * 0.5;
    	let h = s;
    	noStroke();
    	fill(0);
    	if (t == 0) {
    		fill(pallette[Math.floor(fxrand()*pallette.length)]);
    		myRect(x, y, w, h);
    		fill(pallette[Math.floor(fxrand()*pallette.length)]);
    		myRect(x, y, h, w);
    	} else {
    		fill(0);
    		myRect(x, y, h, w);
    		fill(pallette[Math.floor(fxrand()*pallette.length)]);
    		myRect(x, y, w, h);
    	}
    }

    function res(x, y) {
    	let p = createVector(x, y);
    	let scl = 0.0006;
    	let ang = noise(p.x * scl, p.y * scl) * 100;
    	let off = noise(p.x * scl, p.y * scl) * 50;
    	p.x += cos(ang) * off;
    	p.y += sin(ang) * off;
    	return p;
    }

    function myRect(x, y, w, h) {
    	let hw = w / 2;
    	let hh = h / 2;
    	let sep = 3;
    	beginShape();
    	for (let i = -hw; i <= hw; i += sep) {
    		let p = res(x + i, y - hh);
    		vertex(p.x, p.y);
    	}
    	for (let i = -hh; i <= hh; i += sep) {
    		let p = res(x + hw, y + i);
    		vertex(p.x, p.y);
    	}
    	for (let i = -hw; i <= hw; i += sep) {
    		let p = res(x - i, y + hh);
    		vertex(p.x, p.y);
    	}
    	for (let i = -hh; i <= hh; i += sep) {
    		let p = res(x - hw, y - i);
    		vertex(p.x, p.y);
    	}
    	endShape(CLOSE);
    }
