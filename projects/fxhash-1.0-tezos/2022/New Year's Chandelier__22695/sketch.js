// 2023 New Year Chandelier by P1xelboy

const w = 1600;
const h = 1600;

let hash = fxrand();
let bghash = fxrand();
let penname;
let bgname;

let angle, offset, spd, lineSize;
let angleName, offsetName, spdName, lineSizeName;

let angleHash = fxrand();
let offsetHash = fxrand();
let spdHash = fxrand();
let lineSizeHash = fxrand();

if (angleHash > 0.8) angle=14, angleName ="Mega"
else if (angleHash > 0.60) angle=6.6, angleName ="Super"
else if (angleHash > 0.40) angle=3.2, angleName ="Large"
else if (angleHash > 0.20) angle=2, angleName ="Medium"
else angle=1.3, angleName ="Small"

if (offsetHash > 0.8) offset=65, offsetName ="Mega"
else if (offsetHash > 0.60) offset=45, offsetName ="Super"
else if (offsetHash > 0.40) offset=30, offsetName ="Large"
else if (offsetHash > 0.20) offset=15, offsetName ="Medium"
else offset=8, offsetName ="Small"

if (spdHash > 0.8) spd=3.4, spdName ="Fast"
else if (spdHash > 0.20) spd=1.5, spdName ="Normal"
else spd=0.5, spdName ="Slow"

if (lineSizeHash > 0.8) lineSize=305, lineSizeName ="Mega"
else if (lineSizeHash > 0.5) lineSize=150, lineSizeName ="Small"
else if (lineSizeHash > 0.4) lineSize=100, lineSizeName ="Micro"
else lineSize=225, lineSizeName ="Large"

console.log("Palette Hash " + hash);
console.log("bg hash " + bghash);
console.log(angleName + " angle " + angle);
console.log(offsetName + " offset " + offset);
console.log(spdName + " spd " + spd);
console.log(lineSizeName + " lineSize " + lineSize);


function preload() {
  penname = window.$fxhashFeatures["Pen Color"]
  bgname = window.$fxhashFeatures["Background Color"]
  angleName = window.$fxhashFeatures["Angle"]
  offsetName = window.$fxhashFeatures["Offset"]
  spdName = window.$fxhashFeatures["Speed"]
  lineSizeName = window.$fxhashFeatures["Line Length"]
}

if (hash > 0.85) cl='#000000', bgname ="Black"
else if (hash > 0.80) cl='#222222', bgname ="Deep Gray"
else if (hash > 0.60) cl='#2C0133', bgname ="Deep Purple"
else if (hash > 0.40) cl='#000022', bgname ="Deep Blue"
else if (hash > 0.25) cl='#002200', bgname ="Deep Green"
else cl ='#220000', bgname ="Deep Red"

if (bghash > 0.95) bg='#E52B50', penname ="Amaranth"
else if (bghash > 0.9) bg='#FFBF00', penname ="Amber"
else if (bghash > 0.85) bg='#9966CC', penname ="Amethyst"
else if (bghash > 0.8) bg='#FBCEB1', penname ="Apricot"
else if (bghash > 0.75) bg='#DDDDDD', penname ="Light Gray"
else if (bghash > 0.7) bg='#e4ffde', penname ="Pastel Green"
else if (bghash > 0.6) bg='#d0fffe', penname ="Pastel Blue"
else if (bghash > 0.5) bg='#ffe7d3', penname ="Pastel Orange"
else if (bghash > 0.45) bg='#FFFFFF', penname ="White"
else if (bghash > 0.4) bg='#CD7F32', penname ="Bronze"
else if (bghash > 0.35) bg='#7FFF00', penname ="Lime Green"
else if (bghash > 0.3) bg='#ffd3fd', penname ="Pastel Pink"
else if (bghash > 0.25) bg='#7DF9FF', penname ="Electric Blue"
else if (bghash > 0.2) bg='#FF7F50', penname ="Coral"
else if (bghash > 0.14) bg ='#F7EFD4', penname ="Tranquil Cream"
else if (bghash > 0.12) bg='#fffddb', penname ="Pastel Yellow"
else if (bghash > 0.05) bg='#FF6600', penname ="Orange"
else bg='#D1E231', penname ="Pear"


  function setup() {
    createCanvas(w, h,WEBGL);
    background(cl);
    stroke(bg);
    strokeWeight(1.5);
    pixelDensity(1);
  }

  function draw() {
    var y2 = offset + sin(angle + rnd_btw(0.64,0.84)) * + rnd_btw(24,28);
    for (var i = 0; i < 1; i++) {
      if (frameCount >rnd_int(800,1100)) {
        noLoop();
      } else
      translate(width / 500, height / 500);
      rotate(angle);
      push();
      rotateX(angle);
      rotateZ(-2);
      stroke(bg);
      line(0, 25 + angle / 2, lineSize, y2);
      stroke("#FFFFE0");
      line(10, 25 + angle * 2, lineSize, y2);
      angle += spd;
      pop();
    }
}

window.$fxhashFeatures = {
  "Pen Color": penname,
  "Background Color": bgname,
  "Angle": angleName,
  "Offset": offsetName,
  "Speed": spdName,
  "Line Length": lineSizeName
  }


function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}

function rnd_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(fxrand() * (max - min + 1)) + min;
}

  function keyPressed() {
	if (key == "s") save('chandelier-p1x3lboy.png');
}
