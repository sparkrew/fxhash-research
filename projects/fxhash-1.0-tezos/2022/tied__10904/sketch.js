function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}
dotz = rnd_btw(1,10)
a1 = rnd_btw(1,2)
a2 = rnd_btw(10,24)
a3 = rnd_btw(1,10)
a4 = rnd_btw(1,5)
a5 = rnd_btw(150,444)
fundo = rnd_btw(5,15)
a6 = rnd_btw(9,999)
a7 = rnd_btw(30,777)
a8 = rnd_btw(1,30)
r = rnd_btw(0,200)
g = rnd_btw(0,200)
b = rnd_btw(0,200)
fl = rnd_btw(1,20)
b2 = rnd_btw(1,4)


      
     ggg = rnd_btw(1,3) 

function preload(){
  
}

function scale1(){
    scale(88)
}

function setup() {
 scale1()
  
 
  createCanvas(
    int(min(windowWidth, windowHeight)),
    int(min(windowWidth, windowHeight)))
   background(255);


windowResized()
noiseSeed(10)

   fill(255,100)
  rect(0,0,width,height)   
  
pixelDensity(2)
  
  for(let x = 0; x < width; x+=27.5/2){
    for(let y = 0; y < height; y += 27.5 /a2){
strokeWeight(rnd_btw(5,15))
if(dotz > 8){
  stroke(255,160)
point(x,y,1,1)
}
else if (dotz > 6) { 
  stroke(0,180)
     point(x,y)
  
}
else if (dotz > 4) {
stroke(255,160) 
 point(y,x,1,1)
}
else {
  stroke(0,180) 
 point(y,x,1,1)
}
      
        noFill();
if (a2> 20 ){
        strokeWeight(rnd_btw(0.08,0.2));
}
      
      else{
         strokeWeight(rnd_btw(0.05,0.1));
      }
        push()
      stroke(r,g,b,255);
     point(x, 25+y /x * 999, 25+x *a3, 25+y * a3);
pop()
if(dotz > 5){
        stroke(255-y);
}
      else{stroke(0)
          }
        push()
        rotate(rnd_btw(45,255));

      circle(x /a2, 25+y *a2, 12.5+x * a3, 12.5+y/2);


        pop()

stroke(r,g,b)
   push()
      strokeWeight(rnd_btw(0.01,0.05))
      rect(x/y * rnd_btw(100,255), 12.5+y, 37.5+x ^ a5, 12.5+y * a3);
  pop()
       b1 = rnd_btw(1,45)
       strokeWeight(rnd_btw(0.98,1));
        push()
      stroke(255);
if(a2 > 20){
   rotate(rnd_btw(1,10))
}
else if (a2 > 5){
  rotate(rnd_btw(1,90))
}
else{
  
}
push() 
      drawingContext.shadowOffsetX = rnd_btw(5,10);
  drawingContext.shadowOffsetY = rnd_btw(5,10);
     drawingContext.shadowBlur= rnd_btw(10,66)
if(dotz < 5){
      drawingContext.shadowColor = "white"
}
      else{
        drawingContext.shadowColor = "black"
      }
strokeWeight(x/10) 
 if(a8 > 27){
   stroke(255,y / 5,x+y, rnd_btw(50,125))
 } else if(a8 > 24) {
   stroke(x, y,255-x, y)
 } else if(a8 > 21) {
   stroke(x+y, y/x, r,x)
 } else if(a8 > 18) {
   stroke(r, x, x/y,x)
 } else if(a8 > 15) {
   stroke(x, x, x+y, y)
 } else if(a8 > 12){
   stroke(255,y,b,r)
 } else if(a8 > 9) {
   stroke(100,y,b, y)
 } else if(a8 > 6) {
   stroke(r, g, x,x+y)
 } else if(a8 > 4) {
   stroke(y, y, 255-b,255-x)
 } else if(a8 > 2) {
   stroke(r, y, y,r)
 } else {
   stroke(x,y)
 }
 

    
      
      
      
      
      
      // INVERTER COR O FUNDO E OS PONTOS PRETOS >> FUNDO PRETO E PONTOS BRANCOS
// MANTENDO A MESMA PALETA


      

      

      if(ggg > 2) {
      point(x+y * a3, 12.5+y ^ noise(x + y * dotz) * a2, 25+x/2, 25+y* a2);
        
     }
else {
  point(x**2/y**2-a6, 12.5+y * cos * a2, 25,25,rnd_btw(0,3));
}
     
if (dotz > 5){
 stroke(y)
}
      else{
        stroke(255-x)
      }
            point(x ^2, 1+y *a2, 1, 1);
     stroke(25,5)
      rect(x / 2, 1+y *a2, 1, 10);
pop()
        pop()
       stroke(25, 25, 25,150);
     
     if(dotz > 6){
circle(7.5+x*a3 , 12.5+y / a3, 37.5+x , 37.5+y);
}
else if (dotz > 1) { 
rect(7.5+x * 2, 12.5+y  , 37.5+x * 2 , 37.5+y /a1);
  
}
else  {
 point(7.5+x * y, 12.5+y * a1, 37.5+x , 37.5+y);
}
 
      

       

      push()
        border();
        pop()
stroke(255,rnd_btw(50,125))
         point(x ^2, 1+y *a2, 1, 1)
        
      }
    }
 
}
  


function border() {
  push();
  translate(-0, -0);
  stroke(225, 255);
  strokeWeight(25);

  rect(0, 0, width, height);
  pop();

 
  
  
  
}











function windowResized() {
  sz = min(windowWidth, windowHeight);
  resizeCanvas(sz, sz);

  myFrameCount = 1;

  sca = sz / 617;
  loop();
} 





function horver(){
  
  
  if(dotz > 8){
return  "light vertical"
}
else if (dotz > 6) { 
  return "dark vertical"
  
}
else if (dotz > 4) {
return "light horizon"
}
else {
 return "dark horizon"
}
  
}



function formation(){
  
   if(ggg > 2) {
return "1"}
  else{
    return "2"
  }
  
}

function gridzzz(){
  
       if(dotz > 6){
return "circles?"
}
else if (dotz > 1) { 
return "gridz?"
  
}
else  {
 return "point?"
}
  
   if(ggg > 2) {
return "1"}
  else{
    return "2"
  }
  
}


function shadowpoints(){
       if(dotz < 5 ){
return "white"
}
else{
  return "black"
}
}

function webz(){
  if(dotz > 5){
       return "whitewebz"
}
      else{return "darkwebz"
}}






window.$fxhashFeatures = {
 

"background pattern" : horver(),
"formation" : formation(),
  "circle, gridz or points?" : gridzzz(),
  "shadows" : shadowpoints(),
  "webz color" : webz()

}



console.log(window.$fxhashFeatures);