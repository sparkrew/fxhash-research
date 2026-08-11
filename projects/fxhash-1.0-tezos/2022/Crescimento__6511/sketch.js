//Created by Ad Mortem Festinamus

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}
colorR = rnd_int(0,255)
colorG = rnd_int(0,255)
colorB = rnd_int(0,255)
rot = rnd_int(100,360)
space = rnd_int(20,50)
transl = rnd_int(-200,-400)

let offset = 0
let speed = 0
let a = 0
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  angleMode(DEGREES)

  
}


function draw() {
  
  (translate(transl, transl))
  if(frameCount>100){
    
    noLoop()
  }
 strokeWeight(0.03)
  let d = 0
 
 
   let r = map(frameCount, 0, width, 0,255)
      let g = map(sin(frameCount), -1,1,100,255)
      let b = map(frameCount, 0, height, 255,0)
  for( var x = 0; x <= width; x += space ){
    for(var y = 0; y <= height; y += space){
   
     stroke(colorR-x,r+y,colorB)

      
      noFill()
    
      if(x>100 && x<500){
       
        stroke(colorB,colorR-x,colorG)
        if(y>200+x && y<600+x){
      
          
          stroke(colorR-x, colorB,colorG)
          if(x <frameCount/2 & y<400){
            stroke(colorB,colorG,colorR)
          }
        }
      }
      circle(x, y, frameCount/100)
      rotateY(rot)
      rect(y+offset,x,frameCount)
     ellipse(x,y+offset,frameCount/10, frameCount)
      rect(x+offset, y, frameCount, frameCount/10)
rotateX(rot)
       circle(x, y, frameCount/100)
  
      rect(y-offset,x,frameCount)
     ellipse(x,y-offset,frameCount/100, frameCount)
      rect(x-offset, y, frameCount, frameCount/10)
      
      }
offset +=0.01

  }
}


