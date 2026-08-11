
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}
var arr = [];
var zoom = rnd_btw(0.01,0.08)
var n = rnd_btw(500,900);
bg = rnd_int(0,13);
function setup() {
  createCanvas(windowWidth-19, windowHeight-21);
  angleMode(DEGREES)
pixelDensity(2)
  rectMode(CENTER)
  background(bg);
  noiseSeed(9);
  for(var i = 0; i < n; i++){
    arr.push(createVector(rnd_btw(0,width), rnd_btw(0,height)));
  
 

  }
}

function draw() {
  strokeWeight(0.0)
  fill(0,0,5,25)
  if(bg>9){
     rect(windowWidth/2,windowHeight/2,500,500)
  }
  else if(bg>6){
    triangle(width/4, 2/3*height, width/2, height/4, 3/4*width, 2/3*height)
  }
  else if(bg>3){
    circle(width/2, height/2, 500,500)
  }
  else if(bg>1){
    rect(width/2, height/2, 500,250)
  }
  else{
    triangle(width/4, height/3, 3/4*width, height/3, width/2, 3/4*height)
  }


  
  var k = sin(frameCount)
  for(var i = 0; i < n; i++){
    var r = map(sin(frameCount),-1, 1, 0, 180)
    var g = map(i, 0, n, 0, 255);
    var b = map(cos(frameCount), -1,1,255,190)
    var v = arr[i];
    if(bg === 13) {
      stroke(g *1,r *2 ,b,200,frameCount * 2)
    }

    if(bg === 12) {
    stroke(r,g,b,frameCount * 2)
  
   }
   if(bg === 11) {
    stroke(r,b,g,frameCount * 2)
  
   }
   if(bg === 10) {
    stroke(b,g,r,frameCount * 2)
  
   }
   if(bg === 9) {
    stroke(r,b,b,frameCount * 2)
  
   }
   if(bg === 8) {
    stroke(b,b,r,frameCount * 2)
  
   }
   if(bg === 7) {
    stroke(g,g,r,frameCount * 2)
  
   }
   if(bg === 6) {
    stroke(g,b,g,frameCount * 2)
  
   }
   if(bg === 5) {
    stroke(r,r,g,frameCount * 2)
  
   }
   if(bg === 4) {
    stroke(b,r,b,frameCount * 2)
  
   }
   if(bg === 3) {
    stroke(b,g,r,frameCount * 2)
  
   }
   if(bg === 2) {
    stroke(b,r,r,frameCount * 2)
  
   }
   if(bg === 1) {
    stroke(g,g,b,frameCount * 2)
  
   }
  if(bg === 0){
    stroke(255, frameCount *2)
  }
   
    strokeWeight(1.2)
    point(v.x, v.y);
    var mod = noise(v.x * zoom, v.y * zoom);
    var angle = k*mod
    k += rnd_btw(0.1, 1)
    v.x = v.x + cos(angle *2)
    v.y = v.y + sin(angle * 2)
    if(v.x <= 0 || v.x >= width || v.y <= 0 || v.y >= height){
      v.x = rnd_btw(0.5,width)
      v.y = rnd_btw(1,height)
      angle+=0.1
      if(frameCount > 100){
        -frameCount
      }}}}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
    