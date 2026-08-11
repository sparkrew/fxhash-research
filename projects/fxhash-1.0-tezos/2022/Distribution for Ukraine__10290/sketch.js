// (c) 2022 Proembrion www.proembrion.com
// 'Blur of Alternation - Distribution for Ukraine'

// image parameters
let cw = ch = 512;
let mo = Math.floor(fxrand() * 6) + 2 // alternator module: [2, 3, 4, 5, 6, 7]
let cra = 255 - 256%mo - 1; // color range
let cr = 0 // Math.floor(fxrand() * cra); // red value
let cg = 0 // Math.floor(fxrand() * cra); // green value
let cb = Math.floor(fxrand() * cra); // blue value
let ac = (cr + cg + cb) / 3;
let gd = Math.sqrt((ac - cr) ** 2) + Math.sqrt((ac - cr) ** 2) + Math.sqrt((ac - cr) ** 2); // input saturation 

// for alternator distribution equation
let a = Math.floor((2 ** Math.floor(fxrand() * 10)) / 2) // fractal ratio [0, 1, 2, 4, 8, ..., cw / 2];
let c = 0 //Math.floor(fxrand() * 3) - 1; // angle: 45: -1, 1; 180: 0;
let d = 1 //Math.floor(fxrand() * 2) * 2 - 1; // polydiagonality side: left: -1; right: 1;
let e = 1 * (Math.floor(fxrand() * 2) * 2 - 1); // direction (speed): left: -1; right: 1;
let m = Math.floor(fxrand() * 3) - 1;
let n = Math.floor(fxrand() * 2);
let ex = Math.floor(fxrand() * cw); // a dot gap x on the edge;
let ey = Math.floor(fxrand() * ch); // a dot gap y on the egde;
let px = Math.floor(fxrand() * cw); // a dot x;
let py = Math.floor(fxrand() * ch); // a dot y;
let ei = Math.floor(fxrand() * 4); // edge with the gap;

let v = Math.floor(fxrand() * 3) + 1; // gear (alternator and blur multiplier)

// blur ratio
let br = 0.5714285714285713413397;

console.log(cr, cg, cb)
console.log(ex, ey, px, py, ei)
console.log(a, c, d, e, mo, m, n)

function setup() {
  createCanvas(cw, ch);
  pixelDensity(1);
  background(0);
  stroke(cr, cg, cb);
  rect(0, 0, width, height);
  noStroke();
  fill(cr, cg, cb);
  rect(px, py, 1, 1);
  fill(255)
  if (ei == 0) {
    rect(ex, 0, 1, 1);
  } else if (ei == 1) {
    rect(cw - 1, ey, 1, 1);
  } else if (ei == 2) {
    rect(ex, ch - 1, 1, 1);
  } else if (ei == 3) {
    rect(0, ey, 1, 1);
  }
}

function draw() {
  //recursion();
  filter(BLUR, br);
  recursion();
  if (v == 2) {
    recursion();
  }
  if (v == 3) {
    filter(BLUR, br);
    recursion();
  }
  if (frameCount == 120) {
    fxpreview()
  }
  
  if (frameCount%16 == 0) {
    blendMode(BLEND);
    noStroke();
    fill(0, 0, 255, 2);
    rect(0, 0 , width, height / 2);
    fill(255, 255, 0, 2);
    rect(0, height / 2 , width, height / 2);
  }
  background(255, 1);
}


function recursion() {
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let loc = (x + y * width) * 4;
      let r, g, b;
      r = pixels[loc + 0];
      g = pixels[loc + 1];
      b = pixels[loc + 2];
      
      let s = frameCount;

      let alternatorR = (r % mo) * 255 - 256%mo - 1;
      r = alternatorR;
      let alternatorG = (g % mo) * 255 - 256%mo - 1;
      g = alternatorG;
      let alternatorB = (b % mo) * 255 - 256%mo - 1;
      b = alternatorB;
      
      // pixel distribution formula
      let pixloc = (((s % ch * m + y * x ^ (x * a) + s % ch * n) * (cw + c) + (x * d + s * e)) * 4);
      
      pixels[pixloc] = r;
      pixels[pixloc + 1] = g;
      pixels[pixloc + 2] = b;
      pixels[pixloc + 3] = 255;
    
    }
  }
  updatePixels();
}

//fxhash features

function getFeatureString1(a) {
  return a
}

function getFeatureString2(n) {
  if (n == 1) return "on"
   else return "off"
}

function getFeatureString3(m) {
  if (m == -1) return "up"
  if (m == 1) return "down"
   else return "stable"
}

function getFeatureString4(c) {
  if (c == -1) return "45°"
  if (c == 1) return "-45°"
  else return "180°"
}

function getFeatureString5(d) {
  if (d == -1) return "left"
  else return "right"
}

function getFeatureString6(e) {
  if (e == -1) return "left"
    else return "right"
}

function getFeatureString7(mo) {
  return mo
}

function getFeatureString8(v) {
  if (v == 3) return "3"
  if (v == 2) return "2"
   else return "1"
}


window.$fxhashFeatures = {
  "Polydiagonal multiplier": getFeatureString1(a),
  "Segmentation": getFeatureString2(n),
  "Subdivision movement": getFeatureString3(m),
  "Angle": getFeatureString4(c),
  "Side": getFeatureString5(d),
  "Direction": getFeatureString6(e),
  "Alternator module": getFeatureString7(mo),
  "Gear": getFeatureString8(v),
}