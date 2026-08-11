
r = ["#ff99c8","#fcf6bd","#d0f4de","#a9def9","#e4c1f9"]

let rand;
randms1 =["#2b2d42","#8d99ae","#edf2f4","#ef233c","#d90429"]



let bgrand;

console.log(fxhash);
console.log(fxrand());

bgcollor =["#124e78","#b0b030","#f2bb05","#d74e09","#6e0e0a"]

function setup() {
  createCanvas(800,800,WEBGL); 
  
 function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return     Math.floor(fxrand() * (max - min + 1)) + min;}
    
bgrand =parseInt(rnd_btw(0,5))
rand = parseInt(rnd_btw(0,5))
 randms2 = parseInt(rnd_btw(0,5))
}

function draw() {
  
background(bgcollor[bgrand]);
  
  
  fill(r[rand])
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(320, 15);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(280, 15, 40);
  
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(240, 15);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(200, 15, 35);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(160, 15);
  
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(120, 15, 35);
  
   rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(80, 15);
  
  fill(randms1[randms2])
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(40, 15, 25);
 
  
  
}