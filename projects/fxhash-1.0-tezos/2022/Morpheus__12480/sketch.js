// Morpheus
// PixelBoy - 05/05/2022

function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

let hash = fxrand();
let yhash = fxrand();
let xhash = fxrand();
let varhash = fxrand();
let ySize, ySizeName;
let xSize, xSizeName;
let variety, varname;
var pal;
var cl=[];
let alterations = [];
let xEffect = fxrand();
let yEffect = fxrand();
let zEffect = fxrand();
let xMultiply = fxrand();
let yMultiply = fxrand();
let zMultiply = fxrand();
let size = rnd_int(11, 17);
let w = 1600;
let h = 1600;
let bg1= Math.floor(fxrand()*6);
let bg2= Math.floor(fxrand()*6);
let bg3= Math.floor(fxrand()*6);
let bg4= Math.floor(fxrand()*6);
let bgtype =fxrand();
let motionType;
let motionNm;
let motionHash = fxrand();
let rot = rnd_int(-62, 62);
console.log(rot)
console.log(size)

if (motionHash > 0.45) motionType = "Normal"
else if (motionHash > 0.20) motionType = "Enhanced"
else motionType = "Max"

console.log(motionType, motionHash)

if (varhash > 0.85) variety = 64, varname ="Max Variety"
else if (varhash > 0.45) variety=16, varname ="Medium"
else if (varhash > 0.25) variety=36, varname ="Mega"
else variety=24, varname ="High"

if (hash > 0.94) cl[0]='#001b2e', cl[1]='#294c60' ,cl[2]='#adb6c4', cl[3]='#ffefd3', cl[4]='#ffc49b', cl[5]='#000000', pal="Folio"
else if (hash > 0.88) cl[0]='#ebf4f6', cl[1]='#bdeaee' ,cl[2]='#76b4bd', cl[3]='#58668b', cl[4]='#5e5656', cl[5]='#000000', pal="Aqua" //add a darker color?
else if (hash > 0.82) cl[0]='#4b3832', cl[1]='#854442' ,cl[2]='#fff4e6', cl[3]='#3c2f2f', cl[4]='#be9b7b', cl[5]='#000000', pal="Capuccino"
else if (hash > 0.76) cl[0]='#fe4a49', cl[1]='#2ab7ca' ,cl[2]='#fed766', cl[3]='#e6e6ea', cl[4]='#f4f4f8', cl[5]='#000000', pal="Beach Huts"
else if (hash > 0.70) cl[0]='#2e1f27', cl[1]='#854d27' ,cl[2]='#dd7230', cl[3]='#f4c95d', cl[4]='#e7e393', cl[5]='#000000', pal="70s New"
else if (hash > 0.64) cl[0]='#d72638', cl[1]='#3f88c5', cl[2]='#f49d37', cl[3]='#5a576c', cl[4]='#f22b29', cl[5]='#000000', pal="Retro"
else if (hash > 0.58) cl[0]='#5e746b', cl[1]='#cfe3d1', cl[2]='#63979f', cl[3]='#896a21', cl[4]='#0c2020', cl[5]='#000000', pal="Mechanical"
else if (hash > 0.56) cl[0]='#E3E8EA', cl[1]='#222222', cl[2]='#9BA8AE', cl[3]='#707A7E', cl[4]='#495054', cl[5]='#000000', pal="Monochrome"
else if (hash > 0.50) cl[0]='#780116', cl[1]='#f7b538', cl[2]='#db7c26', cl[3]='#d8572a', cl[4]='#c32f27', cl[5]='#000000', pal="Flames"
else if (hash > 0.44) cl[0]='#ff00c1', cl[1]='#9600ff' ,cl[2]='#4900ff', cl[3]='#00b8ff', cl[4]='#00fff9', cl[5]='#000000', pal="Neon"
else if (hash > 0.38) cl[0]='#0b3954', cl[1]='#bfd7ea', cl[2]='#ff6663', cl[3]='#e0ff4f', cl[4]='#dddddd', cl[5]='#000000', pal="Spark"
else if (hash > 0.32) cl[0]='#d81159', cl[1]='#8f2d56' ,cl[2]='#218380', cl[3]='#fbb13c', cl[4]='#73d2de', cl[5]='#000000', pal="Marrakesh"
else if (hash > 0.26) cl[0]='#2b2d42', cl[1]='#edf2f4' ,cl[2]='#ef233c', cl[3]='#d90429', cl[4]='#b2c2c9', cl[5]='#000000', pal="Cadets"
else if (hash > 0.20) cl[0]='#848c8e', cl[1]='#435058' ,cl[2]='#dcf763', cl[3]='#bfb7b6', cl[4]='#f1f2ee', cl[5]='#000000', pal="Neon Greys"
else if (hash > 0.14) cl[0]='#32021f', cl[1]='#4b2e39' ,cl[2]='#6c596e', cl[3]='#6f7d8c', cl[4]='#77a0a9', cl[5]='#000000', pal="Twilight"
else if (hash > 0.08) cl[0]='#939290', cl[1]='#4D5152' ,cl[2]='#FCB40C', cl[3]='#FB300C', cl[4]='#B9BEBC', cl[5]='#000000', pal="Art Deco"
else if (hash > 0.04) cl[0]='#582936', cl[1]='#8c2f39', cl[2]='#b23a48', cl[3]='#fcb9b2', cl[4]='#fed0bb', cl[5]='#000000', pal="Reds"
else cl[0]='#073b3a', cl[1]='#0b6e4f', cl[2]='#08a045', cl[3]='#6bbf59', cl[4]='#ddb771', cl[5]='#000000', pal="Greens"

if (xhash > 0.75) xSize=2.5, xSizeName ="Major Up"
else if (xhash > 0.50) xSize=1.5, xSizeName ="Minor Up"
else if (xhash > 0.25) xSize=-1.5, xSizeName ="Minor Down"
else xSize=-2.5, xSizeName ="Major Down"

if (yhash > 0.75) ySize=5.5, ySizeName ="Major Right"
else if (yhash > 0.50) ySize=3.5, ySizeName ="Minor Right"
else if (yhash > 0.25) ySize=-3.5, ySizeName ="Minor Left"
else ySize=-5.5, ySizeName ="Major Left"

let border

console.log (pal)
console.log (variety)
console.log (xSizeName)
console.log (ySizeName)

function preload() {
  pal = window.$fxhashFeatures["Palette Type"]
  motionType = window.$fxhashFeatures["Rotation type"]
  ySizeName= window.$fxhashFeatures["Horizontal Tilt"]
  xSizeName= window.$fxhashFeatures["Vetical Tilt"]
  varname= window.$fxhashFeatures["Palette Complexity"]
}

function setup() {

  createCanvas(w, h, WEBGL);
  pixelDensity(1);
  rectMode(CENTER);
  blendMode(BLEND);
  frameRate(10);
  border=(cl[int(Math.floor(fxrand()*6))])
  stroke(border)
  strokeWeight(1.15);
}

function draw() {

  beginShape();
  fill(cl[bg1]); //if ... then its bg
  vertex(-1450,-1450,-750);
  fill(cl[bg2]);
  vertex(1450,-1450,-750);
  fill(cl[bg3]);
  vertex(1450,1450,-750);
  fill(cl[bg4]);
  vertex(-1450,1450,-750);
  endShape(CLOSE);
 noFill()
 strokeWeight(5)
 rect(0, 0,w/1.05, h/1.05) //ADDED
 strokeWeight(1.15)
 rotateX(26)
 rotateY(rot)

    for (let i = 0; i < variety; i++){
    alterations[i] = new Alteration();
    }

    for (let i = 0; i < variety; i++){
    alterations[i].display();
    }
    rotateX(3)
    xSize--
    xEffect++
    yEffect++
    rotateY(1)
}

window.$fxhashFeatures = {
"Palette Type": pal,
"Palette Complexity": varname,
"Horizontal Tilt": ySizeName,
"Vetical Tilt": xSizeName,
"Rotation type": motionType
}
class Alteration{

  display(){

    rotateY(radians(yMultiply*4)+0.3);
    rotateX(radians(xMultiply*5)+0.3);
    rotateZ(radians(zMultiply*6)+0.3);
    push();
    rotateY(radians(ySize*25));
    rotateX(radians(xSize*4));
    rotateZ(radians(xSize*2));

    var diam = int(Math.floor(fxrand()*7)+85);
    fill(cl[int(Math.floor(fxrand()*6))])
    for(let i = 0; i < 14; i++){
      rotateZ(radians(2));
      rotateX(radians(2));
      rotateY(radians(2));
      if (motionHash > 0.45) ellipse(0,0,diam*4+(i*size*3.4),diam+(i*18))
      else if (motionHash > 0.20) ellipse(0,0,diam*4+(i*size*2.4),diam+(i*48))
      else ellipse(i,i,diam*5+(i*size*2.2),diam+(i*58))
    }
    pop();
  }
}

function keyPressed() {
	if (key == "s") save('Morpheus.png');
  if (key == "r") rot = rnd_int(-62, 62);
  if (key == "1") bg1= Math.floor(fxrand()*6)
  if (key == "2") bg2= Math.floor(fxrand()*6)
  if (key == "3") bg4= Math.floor(fxrand()*6)
  if (key == "4") bg3= Math.floor(fxrand()*6)
  if (key == "c") stroke(cl[int(Math.floor(fxrand()*6))])
}

function mouseClicked() {
  bg1= Math.floor(fxrand()*6)
  bg2= Math.floor(fxrand()*6)
  bg3= Math.floor(fxrand()*6)
  bg4= Math.floor(fxrand()*6)
  return false;
}
