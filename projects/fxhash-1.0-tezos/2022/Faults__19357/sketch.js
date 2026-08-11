//0914 faults

let ns=fxrand()*100000000
let c1=fxrand()*100+150
let c2=fxrand()*128+128
let c3=fxrand()*128+128

yo2=0

w1=0.003+fxrand()*0.003 //3456

function setup() {
     if(windowWidth>windowHeight){
        canvasSize=windowHeight;
    }else{
        canvasSize=windowWidth;
    }
  createCanvas(canvasSize, canvasSize,WEBGL);
  
//background(255,0,0)
//  background(0,0,255,)
    background(255)


cs=canvasSize


  noiseSeed(ns);
  
}

 window.$fxhashFeatures = {	
 "Magic Number":ns,
 "Translate Variable":w1,
 "Color 1": c1,
  "Color 2": c2,
    "Color 3": c3,
//"Stroke Weight Variable":bb,
//"Stroke Weight":getSw3(fxrand()),
//"Pattern":getPn3(fxrand()),


 }

function draw() {
  scale(1.4)

  translate(-cs/2,-cs/2*cos(frameCount*w1)) 
  


  strokeWeight(cs/1500) // 3000 1500



  //----------------------------------------------------------------
   
  stroke(0,255*fxrand()) //0 30

  beginShape();

  let xo2= 0; 

  for (let x2= 0; x2<= width+20; x2+= .2){ //10.1
   let y2= map(noise(xo2, yo2), 0, 1, 0, cs*0.25);//cs/4 cs/12
    vertex(x2, y2);
    xo2 += 0.02 //0.03
  }
  yo2+= 0.015 //0.011
//  fill(255*random(),100*random()) //A
  fill(c1*fxrand(),c2*fxrand(),c3*fxrand(),200*fxrand()) //B
  endShape();
  
  

  if(cos(frameCount*w1)<-0.99){
    noLoop()
  }

print(cos(frameCount*w1))
}
  

