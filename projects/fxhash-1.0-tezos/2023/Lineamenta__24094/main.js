function randEx(min, max, exclude) {
  let random;
  while (!random) {
    const x = Math.floor(fxrand() * (max - min + 1)) + min;
    if (exclude.indexOf(x) === -1) random = x;
  }
  return random;
}

function flipper() {
  var c = fxrand();
  if (c < 0.5)
    return false;
  else
    return true;
}

function randy(min, max) {
  return Math.round(fxrand() * (max - min) + min);
}

function colorConvert(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);


  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function excludeShades(min, max) {
  var num = Math.floor(fxrand() * (max - min + 1)) + min;
  return (num >= 25 && num <= 75)? excludeShades(min, max) : num;
}


let colors = [];
const cS = Math.min(window.innerWidth, window.innerHeight);
let colorNum = randy(2, 5);
let mode = fxrand() <= 0.15 ? 1 : 0;
let bgColor = "";
let special = fxrand() <= 0.017 ? true : false;
let bgMode = "";
let colorChoice = fxrand();
let filled = fxrand () <= 0.3 ? true : false;
let fill_tres = 0;

switch (randy(0, 2)){
  case 0:
    fill_tres = 0.1;
    break;
    case 1:
      fill_tres = 0.4;
      break;
      case 2:
        fill_tres = 0.5;
        break;
}

if (colorChoice <= 0.2){
bgMode = "dark";
bgColor = colorConvert(excludeShades(0, 360), 30, 3);
}
else if (colorChoice <= 0.6){
  bgMode = "colorful";
  let clrHue = excludeShades(0, 360);
  bgColor = colorConvert(clrHue, 60, (clrHue >= 250 && clrHue <= 330) || (clrHue >= 75 && clrHue <= 150)  ? 15 : 30);
}
else {
  bgMode = "light";
  bgColor = colorConvert(excludeShades(0, 360), 70, 95);
}

if (special){
  bgMode = "special";
  bgColor = "#000000";
  filled =  false;
}

switch (bgMode) {
  case "dark":
    for (let i = 0; i < colorNum; i++) {
      colors.push(colorConvert(excludeShades(0, 360), randy(65, 90), randy(60, 70)))
    }
    break;

  case "colorful":
    for (let i = 0; i < colorNum; i++) {
      colors.push(colorConvert(excludeShades(0, 360), 50, 80))
    }
    break;

  case "light":
    for (let i = 0; i < colorNum; i++) {
      colors.push(colorConvert(excludeShades(0, 360), randy(65, 90), randy(60, 70)))
    }
    break;
    case "special":
      colors.push("#FFD700");
      colors.push("#FFD700");
      break;
}

let W = 1000, H = 1000;

function setup() {

  main = createGraphics(W, H);

  randomSeed(fxrand() * 99999);
  createCanvas(cS, cS);

  main.background(bgColor);

  main.colorMode(HSB, 360, 100, 100);
  main.strokeCap(SQUARE);
  main.angleMode(DEGREES);

	graphics = createGraphics(W, H);
	graphics.colorMode(HSB, 360, 100, 100, 100);
  
	let percent = 10 / 100;
	for (let i = 0; i < W * H * percent; i++) {
		let x = random(W);
		let y = random(H);
		let dw = random(3);
		let dh = random(3);
    if (bgMode == "dark"){
		graphics.fill(0, 0, 1, 100);}
    else if (bgMode == "light"){
      graphics.fill(0, 0, 0, 5);
    }
    else {
      graphics.fill(0, 0, 0, 10);
    }
		graphics.noStroke();
		graphics.ellipse(x, y, dw, dh);
	}

if (bgMode == "dark"){
  main.image(graphics, 0, 0);
  }
  main.strokeWeight(2);
  main.noFill();
	divideGrid(W/4, W/4, W/2);
  if (bgMode != "dark" ){
    main.image(graphics, 0, 0);
    }

    main.smooth(8);
image(main, 0, 0, cS, cS);

}

let size = randy(5, 10);
function draw() {
}

function divideGrid(x, y, d, colors) {
	let sepNum = 2;
	let w = d / sepNum;
	for (let i = x; i < x + d - 1; i += w) {
		for (let j = y; j < y + d - 1; j += w) {
      w = Math.min(150, w);
			if (random(100) < 90 && d > W / size) {
				divideGrid(i, j, w);
			} else {
				let num = int(random(1, 4));
				drawingContext.setLineDash([d / 20]);
				if (random(100) > 50) {
					arcIt(i, j, w / 2, num);
				} else {
					triangleIt(i, j, w, num)
				}
				drawingContext.setLineDash([]);
			}
		}
	}
}

function arcIt(x, y, d, num) {
	main.push();
	main.translate(x, y);

  if (filled && fxrand() <= fill_tres){
    let temp = [...colors];
    let strokeCol = temp.pop(randy(0, colors.length-1));
    main.fill(chroma(temp[randy(0, temp.length-1)]).darken(1).hex());
    main.stroke(strokeCol);
  }
  else {
    main.stroke(colors[randy(0, colors.length-1)])
  }

	for (let i = 0; i < num; i++) {
		main.push();
		main.rotate(int(random(4)) * 360 / 4);
		for (let dd = d * 2 * 2; dd >= 0; dd -= d * 2 / 3) {
			main.arc(-d, -d, dd, dd, 0, 90, PIE);
		}
		main.pop();
	}
	main.pop();
}


function triangleIt(x, y, d, num) {
	main.push();
	main.translate(x, y);
  if (filled && fxrand() <= fill_tres){
    let temp = [...colors];
    let strokeCol = temp.pop(randy(0, colors.length-1));
    main.fill(chroma(temp[randy(0, temp.length-1)]).darken(1).hex());
    main.stroke(strokeCol);
  }
  else {
    main.stroke(colors[randy(0, colors.length-1)])
  }
	for (let i = 0; i < num; i++) {
		main.push();
		main.rotate(int(random(4)) * 360 / 4);
		let sep = int(random(4, 10));
		for (let dd = 0; dd <= d; dd += d / sep) {
			main.triangle(0, 0 - dd, -d + dd, -d, d - dd, -d);
			main.line(0, 0 - dd, -d + dd, -d);
			main.line(0, 0 - dd, d - dd, -d);
			main.line(-d + dd, -d, d - dd, -d);
		}
		main.pop();
	}
	main.pop();
}

features = [ntc.name(bgColor)[1], colorNum, bgMode, filled, fill_tres, special];

window.$fxhashFeatures = {
  background: `${features[0]}`,
  number_colors: `${features[1]}`,
  mode: `${features[2]}`,
  filled: `${features[3]}`,
  fill_tres: `${features[3] ? features[4] : "none"}`,
  SPECIAL: `${features[5] ? "Yes" : "No"}`
}

function keyPressed() {
  if (key === 'd') {
     saveCanvas("lineamenta.png");
  }
 }


