
function flip(){
  var c = fxrand();
  if (c < 0.5)
  return false;
  else
  return true;
}

function minmax(min, max){
  return Math.round(fxrand() * (max-min) + min);
}

function minmaxdouble(min, max){
  return fxrand() * (max-min) + min;
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

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(clr) {
  return "#" + componentToHex(Math.round(clr[0])) + componentToHex(Math.round(clr[1])) + componentToHex(Math.round(clr[2]));
}




function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}



let rot = 3;

let hue1 = minmax(0, 360);
let hue2 = minmax(0, 360);

let sat1 = minmax(20, 40);
let br2 = minmax(58, 95);
let sat2 = minmax(50, 80);


let h1 = fxrand() <= 0.28 ? minmax (0, 40) : minmax (65, 360);
let h2 = fxrand() <= 0.28 ? minmax (0, 40) : minmax (65, 360);

let w = HSLToRGB(h1, 30, br2-40);
let b = HSLToRGB(h2, 40, br2-50);

function setup() {

  noiseSeed(minmax(0, 10000));
	createCanvas(windowWidth, windowHeight);

  let c1 = color(w[0], w[1], w[2]);
  let c2 = color(b[0], b[1], b[2]);

  let sX, sY, eX, eY;
  switch(minmax(0,1)){
    case 0:
    sX = 0;
    sY = minmax(0, height)
    eX = width;
    eY = height - sY;
    break;
    case 1:
    sX = minmax(0, width);
    sY = 0;
    eX = width - sX;
    eY = height;
    break;
  }

  push();
  angleMode(DEGREES);

  if (minmax(0,1)){
  linearGradient(
    sX, sY,
     eX, eY,
     c1,
     c2,
   );
  }
  else{
    linearGradient(
      sX, sY,
       eX, eY,
       c2,
       c1,
     );
  }

    rect(-4, -4, width+4, height+4);
  pop();


}

function draw() {
if (rot < 200)
  {angleMode(RADIANS);
	translate(width / 2, height / 2);
  colorMode(HSB)
  if (rot % 2 === 0){
	stroke(hue1, sat1, 90);
}
  else {
    	stroke(hue2, sat2, br2);
  }
	strokeWeight(noise(rot)*4);
	rotate(30 * rot);
	push();
	line(0, 0, 100, rot);
	pop();
	rot++;}

}

features = [ntc.name(rgbToHex(w))[1], ntc.name(rgbToHex(b))[1], ntc.name(rgbToHex(HSLToRGB(hue1, sat1, 90)))[1], ntc.name(rgbToHex(HSLToRGB(hue2, sat2, br2)))[1]];

window.$fxhashFeatures = {
  gradient1: `${features[0]}`,
gradient2: `${features[1]}`,
firstAccent: `${features[2]}`,
secondAccent: `${features[3]}`
}
