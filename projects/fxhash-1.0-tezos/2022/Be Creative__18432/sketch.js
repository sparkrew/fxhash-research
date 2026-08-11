const random = (a = 1, b = 0) => fxrand() * (b - a) + a
const choose = (arr) => arr[Math.floor(random(arr.length))]

const colors1 = ["ef476f","ffd166","06d6a0","118ab2","073b4c"]
const colors2 = ['264653', '2a9d8f', 'e9c46a', 'f4a261', 'e76f51']
const colors = choose([colors1,colors2])

let myShader
function preload(){
  myShader = loadShader('shader.vert', 'shader.frag')
}


function setup() {
  createCanvas(min(windowWidth,windowHeight),min(windowWidth,windowHeight), WEBGL);
  noStroke();
  background(255)
  for (let i=0;i<random(2,20);i++){
    fill('#'+choose(colors))
    circle(
      width*random(-.2,.2), height*random(-.2,.2),
      width*random(.3))
  }
  
  shader(myShader);
  myShader.setUniform('tex0', get());
  myShader.setUniform('noiseOffset', random(1000));
  myShader.setUniform('val1', random(10));
  myShader.setUniform('val2', random()<0.5 ? random(5) : random(50));
  myShader.setUniform('val3', random(100,1000));
  rect(0,0,width, height);
  resetShader()
  
  fxpreview()
}

nx = 0
nxs = 0.01
lastPos = null
function draw(){
  stroke(0)
  if (mouseIsPressed){
    if (lastPos) 
      myLine(lastPos.x,lastPos.y,mouseX-width/2,mouseY-height/2)
    lastPos = createVector(mouseX-width/2,mouseY-height/2)
    drawDot(lastPos.x,lastPos.y)
  } else if (lastPos) lastPos = null
}
function myLine(x1,y1,x2,y2){
  const l = dist(x1,y1,x2,y2)
  for (let i=0;i<l;i+=0.5) drawDot(lerp(x1,x2,i/l),lerp(y1,y2,i/l))
}
const drawDot = (x,y)=>{
    nx += nxs
    strokeWeight(noise(nx)*7+2)
    point(x,y)
}