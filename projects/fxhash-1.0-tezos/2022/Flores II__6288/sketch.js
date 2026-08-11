
function rnd_btw(min, max) {return fxrand() * (max - min) + min;}

meumano = rnd_btw(80,400);
r = rnd_btw(80,255);
g = rnd_btw(10,255);
b = rnd_btw(25,255);
alfa = rnd_btw(80,255); 
formas = rnd_btw(30,80);
bg = rnd_btw(15,40);
rects = rnd_btw(45,45.001);
strkz = rnd_btw(0.6,0.9);
let y = 200;
let xinc = fxrand();
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
    background(bg);

 
 
 
}

function draw() {


  

  translate(width/2, height/2)

  for(let i = 7; i<rects; i++ * 150){
    
    strokeWeight(0.5)
  scale(0.3)
  noFill()
    if(frameCount>50){
      noLoop();
    }
    circle(sin(10 * 5/9,rects * 2))
    stroke(r,b,150,999)
  noise()
    rect(15,50,frameCount*i + 20 * 45,frameCount*i - rects * rects)
    
    {
      for(j = 1; j < width; j+=0.5){
        var n = noise(r,g)
        fill(r,g,b)
        rect(i,j,0.5)
        
      }
    }
  rotate(circle(rnd_btw(0,400,frameCount*i + 200 * 5,frameCount*i - rects * rects))) 

  rotate(circle(rnd_btw(0,400,frameCount*i + 200 * 5,frameCount*i - rects * rects))) 

  circle(noise(15,350,frameCount*i + 6 * 45,frameCount*i - rects * rects))
  rect(random(150,400,frameCount*i + 2 * 5,frameCount*i - rects * rects))
      stroke(r,g,b,alfa * 5)
    
strokeWeight(strkz)
 
  
ellipse(15,300,formas,random((frameCount, frameCount * 4)));{
  fill(b,g,r,alfa);
  rotate(random(meumano/2))
   stroke(r,g,b,alfa)
   strokeWeight(strkz)

   for (var r11 = 0; r11 < 10; r11++) {
    stroke(85,107,47,20);
    strokeWeight(10);
    if (frameCount > 60) {
      line(400, 550, 400, 400 + frameCount / 10);
      noLoop()
      
      
    }
 
    noStroke();
  }
} 
   translate(200, 200);

    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 30, 20, 80);
      rect(1,300,1,random((frameCount, frameCount * 7)));

      
  
  
      rotate(PI/78);

    
      }
}}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}