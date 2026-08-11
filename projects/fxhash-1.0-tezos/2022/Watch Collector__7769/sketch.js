// Watch Collector by p1x3lboy
// Made for FXhash
// 22/1/2021
// @p1x3lboy

console.log("Hash " + fxhash)

let hash = fxrand()
let sizehash = fxrand()
let sz;
var cl=[];
let pal;
let num;
let granBool = fxrand();
let gran;
let anBool = fxrand();
let animated;

if (hash > 0.95) cl[0]='#E3E8EA', cl[1]='#000000', cl[2]='#9BA8AE', cl[3]='#707A7E', cl[4]='#495054', pal="Monochrome" //mono)
else if (hash > 0.9) cl[0]='#9b8816', cl[1]='#f98948', cl[2]='#5d3a00', cl[3]='#684e32', cl[4]='#f9ea9a', pal="Seventies" //70s
else if (hash > 0.8) cl[0]='#b9e3c6', cl[1]='#59c9a5', cl[2]='#d81e5b', cl[3]='#23395b', cl[4]='#fffd98', pal="Dali" // Dali
else if (hash > 0.7) cl[0]='#242323', cl[1]='#3a4e48', cl[2]='#6a7b76', cl[3]='#8b9d83', cl[4]='#beb0a7', pal="Metro" // Metro
else if (hash > 0.6) cl[0]='#EEF8FF', cl[1]='#D1F5FF', cl[2]='#78E3FD', cl[3]='#34F6F2', cl[4]='#7D53DE', pal="Jazz" // Jazz - stolen
else if (hash > 0.5) cl[0]='#461220', cl[1]='#8c2f39', cl[2]='#b23a48', cl[3]='#fcb9b2', cl[4]='#fed0bb', pal="Reds" // deep reds
else if (hash > 0.4) cl[0]='#073b3a', cl[1]='#0b6e4f', cl[2]='#08a045', cl[3]='#6bbf59', cl[4]='#ddb771', pal="Greens" // greens ?
else if (hash > 0.3) cl[0]='#022b3a', cl[1]='#1f7a8c', cl[2]='#bfdbf7', cl[3]='#e1e5f2', cl[4]='#ffffff', pal="Winter" // winter
else if (hash > 0.2) cl[0]='#c1edcc', cl[1]='#b0c0bc', cl[2]='#a7a7a9', cl[3]='#797270', cl[4]='#453f3c', pal="Cabin Fever" // cabin fever
else if (hash > 0.1) cl[0]='#780116', cl[1]='#f7b538', cl[2]='#db7c26', cl[3]='#d8572a', cl[4]='#c32f27', pal="Flames" // flames
else cl[0]='#072ac8', cl[1]='#1e96fc', cl[2]='#a2d6f9', cl[3]='#fcf300', cl[4]='#ffc600', pal="Beach" //beach

if (sizehash > 0.75) sz = 80, num ="5x5"; //
else if (sizehash > 0.5) sz = 100, num ="4x4";
else if (sizehash > 0.25) sz = 50, num ="8x8";
//else if (sizehash > 0.1) sz = 25, num ="16x16";
else sz = 40, num = "10x10";

if (granBool > 0.75) gran = "Granulated";
else gran = "Clean";

console.log ("SIZE: " + sz)

console.log("Grid Hash " + sizehash);
console.log("Palette Hash " + hash);
console.log(pal);
console.log(num);
console.log("Granulated " + gran);

function preload() {
  pal = window.$fxhashFeatures["Palette Type"]
  num = window.$fxhashFeatures["Grid Size"]
  gran = window.$fxhashFeatures["Granulated Effect"]
}


function setup() {
  createCanvas(800,800); //SORT
  background(cl[int(Math.floor(fxrand()*5))]);
  stroke(0)
  strokeWeight(sz/60)
  rectMode(CENTER)
}

function draw() {
  frameRate(1.5)
  for(var x=sz;x<width;x=x+sz*2){
    for(var y=sz;y<height;y=y+sz*2){

//  fill(cl[int(Math.floor(pb.random()*5))])\r\n    rect(x+3, y,sz*1.3,sz*1.8/10,4)\r\n    fill(cl[int(Math.floor(pb.random()*5))])\r\n    ellipse(x,y,sz*1.25,sz*1.25,4)\r\n    fill(cl[int(Math.floor(pb.random()*5))])\r\n    ellipse(x,y,sz,sz,4)\r\n    fill(cl[int(Math.floor(pb.random()*5))])\r\n    ellipse(x,y,sz*.85,sz*0.7,4)\r\n    fill(cl[int(Math.floor(pb.random()*5))])\r\n    rect(x,y,sz*0.6,sz*.425,4)\r\n    }\r\n  }\r\n\r\n  translate(0.1,0.2)\r\n\r\n

    fill(cl[int(Math.floor(fxrand()*5))])
    rect(x,y,sz*1.8/3,sz*1.8,sz/20)
    fill(cl[int(Math.floor(fxrand()*5))])
    rect(x, y,sz*1.15,sz*1.8/4,sz/20)
    //fill(cl[int(Math.floor(fxrand()*5))])
    //rect(x, y+10,sz*1.15,sz*1.8/10,4)
    //fill(cl[int(Math.floor(fxrand()*5))])
    //rect(x,y,sz*1.25,sz*1.25,4)
    fill(cl[int(Math.floor(fxrand()*5))])  //SORT
    rect(x,y,sz,sz,sz/12)
    fill(cl[int(Math.floor(fxrand()*5))]) //SORT
    rect(x,y,sz*.85,sz*0.7,sz/16)
    fill(cl[int(Math.floor(fxrand()*5))]) //SORT
    rect(x,y,sz*0.6,sz*.425,sz/20)
    //fill(cl[int(Math.floor(fxrand()*5))])
    //rect(x,y,sz*0.3,sz*.25,4)
    }
  }

  translate(0.1,0.2)

  if (granBool > 0.75) granulate(35);
  else
  updatePixels(); // comment out

  noLoop()
}

window.$fxhashFeatures = {
"Palette Type": pal,
"Grid Size": num,
"Granulated Effect": gran
}

function granulate(gA){
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 2) {
    grainAmount =  random(-gA, gA)
    pixels[i] = pixels[i]+gA/2;
    pixels[i + 1] = pixels[i+1]+grainAmount;
    pixels[i + 2] = pixels[i+2]+abs(grainAmount);
    pixels[i + 3] = pixels[i+3]+gA/2;
  }
  updatePixels();
}
function keyPressed() {
	if (key == "s") save('watchcollector-p1x3lboy.png');
}
