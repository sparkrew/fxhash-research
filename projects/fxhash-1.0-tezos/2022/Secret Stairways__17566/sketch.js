function preload(){
  
}
function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}
function rnd_btwexp(min, max) {
  return fxrand() ** 2 * (max - min) + min;
}
function rnd_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}

const aspectRatio = 3/2;
let seed = fxrand()*99988574738;
// If given, get the size parameter in the url
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let urlSize = parseInt(urlParams.get("size"))

// Get the max size available for a square canvas
let canvas
  canvas =
    window.innerWidth / window.innerHeight < aspectRatio
      ? window.innerWidth / aspectRatio
      : window.innerHeight

M = canvas/600

let strk=rnd_btw(0.6,1)
var arr3 = [];
time = rnd_btw(1,75)
time1 = rnd_btw(1,50)
var zoom = 0.102;
var n = 6000;
npart = rnd_btw(5000,9000)
let arr2 = [];
let palette = ['#052951','#240000','#290132F2','#043F00','#454545']
let bgpalette = ['#D2D3D5','#FDE6E6','#FBEAFFFC','#FDF1D3','#E9FDE8']
let rndbg = rnd_int(0, 4)
let rndcolors = rnd_int(0, 4)
let y = 200;
let xinc = Math.random(0);
let quantz = 30000;
let noiseScale = 0.01;
a1 = rnd_btw(1,50)
aa1 = rnd_btw(0.5,10)
a22 = rnd_btw(1,255)
a2 = rnd_btw(1,255)
c = rnd_btw(220,255)
c1= rnd_btw(220,255)
c2 = rnd_btw(200,255)
twp = rnd_btw(10,30)
twp2 = rnd_btw(12,150)
map1=rnd_btw(1,10)
map2=rnd_btw(1,10)
map3=rnd_btw(1,10)
a3 = rnd_btw(1,20)
fmc = rnd_btw(120,210)
rndz = rnd_btw(1.8,2)
a4 = rnd_btw(1,10)
let divCos = rnd_int(10, 100)
let cos1 = rnd_int(10, 50)
let coss1 = rnd_int(250, 200)
let pd
strkz = rnd_btw(0.3,0.8)
let quant = rnd_btw(10000000,12000000);
let rndNoise = rnd_int(0, 2);
position1 = Math.random(200,500)
let ry = rnd_btw(0.1, 0.001)
position2 = Math.random(200,500)
var arr = [];
var zoom = rnd_btw( 1011.1,2011.2);
var n = rnd_btw(1000000,2000000);
p5.disableFriendlyErrors = true;
function setup() {
   createCanvas(canvas*aspectRatio, canvas);
 
   pixelDensity(1)

  noiseSeed(seed)

frameRate(10)
  for(var i = 110; i < n; i++){
    arr.push(createVector(0, rnd_btw(0, width/M)));


  
  
}
 
    
    
background(bgpalette[rndbg])
   border()
  textura()
  


  
}

function draw() {
push()
flowField3()
pop()
frameRate(60)

push()
if(time1 > 10){
    flowField();
}
else{
  if(frameCount > time){
     flowField();
  }
}

  pop()
  noFill();
if (frameCount > 0){
push()
 
flowField2()
pop()
}
  
  
 if (frameCount > rnd_btw(700,900)) {
       textura()
        noLoop();
      }




 


   
 


    


}


function border() {
  push();


stroke(255, 255);

  
  strokeWeight(5*M);
  noFill();
  rect(0, 0, width, height);
  pop();

  push();



  stroke(20)

  strokeWeight(3*M);
  noFill();
  rect(0, 0, width, height);
  pop();
}




function flowField() {

  let r = map(sin(frameCount/fmc/aa1),-1,1.1,-100,255)
  
 drawingContext.shadowOffsetX =2
  drawingContext.shadowOffsetY = -2;
  drawingContext.shadowBlur = 1*M;
  drawingContext.shadowColor = palette[rndcolors]
  for (let j = 0; j <npart; j++) {
    let p = arr[j];
 let g = map(j,0,quant/10,0,1)
    
      

let b = map(cos(p.y),-1,1,255,255)
    stroke(bgpalette[rndbg]);

    let arrNoise = [noise(p.x,p.y), noise(p.x, p.y)*cos(p.x/divCos), noise(p.x, p.y)*cos(p.x/10+p.y/10)]
    point((p.y ^ TWO_PI + r ^ arrNoise[rndNoise])*M, p.x*M);
   
stroke(0,0)
 
 
    let n = noise(p.x * noiseScale ^ TWO_PI/twp, (p.y * noiseScale  )) * frameCount/fmc
    let angle = twp+n;
  strokeWeight(strk*M)
    p.x += rndz-cos(angle /rnd_btw(20000,100000)) *n ^ TWO_PI/10 ;
    p.y += cos(angle /n*2000000)  /n / frameCount;

    }
  
}


function textura() {
  number=20 + M
   loadPixels();
                for(let e=0;e<width*pixelDensity()*(height*pixelDensity())*4;e+=5){
                  let i=map(fxrand(),0,1,-number,number);pixels[e]=pixels[e]+i,pixels[e+1]=pixels[e+1]+i,pixels[e+2]=pixels[e+2]+i,pixels[e+3]=pixels[e+3]+i
                }
  updatePixels()
}



function flowField2() {

  for (let j = 0; j <rnd_btw(900,1001); j++) {
    let p = arr[j];
 let g = map(j,0,quant/10,0,1)
    let r = map(sin(frameCount),-1,1.1,-100,255)
      
strokeWeight(0.8*M)
let b = map(cos(p.y),-1,1,255,255)
    stroke(0);

    point(p.y*M, p.x*M);
    stroke(0, frameCount/10)
    strokeWeight(0.2*M)
    point(rnd_btw(0, width/M), rnd_btw((height/2)/M - 100*M, height/M))
  }}



function flowField3() {
  
fill(20)
noStroke()


  var k = sin(10)
  for(var i = 0; i < rnd_btw(100,500); i++){
    var v = arr[i];
 rotate(frameCount)

    stroke(0)
strokeWeight(0.2*M)
   point((0.1+v.y * frameCount / 1115 * TWO_PI / 2 )*M, v.x*M);
    var mod = noise(v.x * zoom, v.y * zoom * 9);
    var angle = k*mod + TWO_PI * 2
    k += 1 ^ TWO_PI
    v.x = 0.1+v.x + cos(angle)
    v.y = v.y + sin(angle) 
    if(v.x <= 0 || v.x >= width || v.y <=  frameCount || v.y >= height * 2){
      v.x = rnd_btw(0, width/M)
      v.y = rnd_btw(0, height/M)
      angle+=1
      
    }
}
}

// function windowResized() {
//   noiseSeed(seed);
//   randomSeed(seed);
//   background(bgpalette[rndbg])
//   canvas =
//     window.innerWidth / window.innerHeight < aspectRatio
//       ? window.innerWidth / aspectRatio
//       : window.innerHeight
//   M = canvas / 1080
//   resizeCanvas(canvas * aspectRatio, canvas)
//   background(bgpalette[rndbg])
// }

function getPixelDensity() {
	let v = window.location.hash.split('');
	v=v[v.length-1];
	switch (v){
		case '1':
			return 1;
			break;
		case '2':
			return 2;
			break;
		case '3':
			return 3;
			break;
		case '4':
			return 4;
			break;
		case '5':
			return 5;
			break;
		
		default:
			return pixelDensity();
			break;
	}
}



function keyPressed() {
  
  if(key == "s"){
    
    save("Secret Stairways ")
   
  }
  if(key == "1"){
    window.location.hash = "1"
    location.reload()
  }
  if(key == "2"){
    window.location.hash = "2"
    location.reload()
  }
  if(key == "3"){
    window.location.hash = "3"
    location.reload()
  }
  if(key == "4"){
    window.location.hash = "4"
    location.reload()
  }
  if(key == "5"){
    window.location.hash = "5"
    location.reload()
  }
  
  
}

function bgColor() {
  if(rndbg == 0) return "Journal"
  if(rndbg == 1) return "Seashell"
  if(rndbg == 2) return "LavenderBlush"
  if(rndbg == 3) return "CornSilk"
  if(rndbg == 4) return "MintCream"
  
}

function getShadow() {
  if(rndcolors == 0) return "Navy"
  if(rndcolors == 1) return "Blood"
  if(rndcolors == 2) return "Indigo"
  if(rndcolors == 3) return "Forest"
  if(rndcolors == 4) return "Graphite"
}

function getNoise() {
  if(rndNoise == 0) return "1"
  if(rndNoise == 1) return "2"
  if(rndNoise == 2) return "3"
}


window.$fxhashFeatures = {
 "Background Color": bgColor(),
 "Shadow": getShadow(),
  "Style": getNoise()
}

console.log(window.$fxhashFeatures )
