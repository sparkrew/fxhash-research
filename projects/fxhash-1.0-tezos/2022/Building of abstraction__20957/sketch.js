var f = rnd(0,100)
var ff = rnd(0,100)
function setup() {
  createCanvas(600, 600);
    s = new Scribble();
noiseSeed(fxrand() *9999)
}
function draw() {
  if(f<20){
    var d = "#FFF5E4"
  }
  if(f>20&f<40){
    var d = "#EEF1FF"
  }
 if(f>40&f<60){
    var d = "#FFEEEE"
  } 
   if(f>60&f<80){
    var d = "#FFFDDE"
  } 
   if(f>80&f<100){
    var d = "#FEFFE2"
  } 
  
  
   if(ff<20){
    var dd = "#DA0037"
  }
  if(ff>20&ff<40){
    var dd = "#FFD523"
  }
 if(ff>40&ff<60){
    var dd = "#BA135D"
  } 
   if(ff>60&ff<80){
    var dd = "#CD113B"
  } 
   if(ff>80&ff<100){
    var dd = "#CF0000"
  } 
  
  
  
  
  
  
  
  background(d);
  strokeWeight(0)
  fill(dd)
  circle(rnd(100,500),rnd(50,150),200)
  
  for(j = 0 ; j<rnd(8,15); j++){
    
  if(rnd(0,100)<80){
    var st = rnd(0.1,0.2)
  }
  else{
    
    var st = rnd(1,2)
  }
  var x = rnd(0 , 500)
  var dis = rnd(50 , 100)
  var d = rnd(2,6)
    var t = rnd(510 , 540)
    stroke(rnd(0,55),rnd(0,55),rnd(0,55))
    
    strokeWeight(st)
    
  for(i = 0 ; i<rnd(70,100) ; i++){
  s.scribbleLine( x, 550-d*i,x+dis,550-d*i)
  s.scribbleLine(x+dis,550-d*i,x+dis*1.5,t-d*i)
  
  }
  
  
  }
  
  
  
  
  
  noLoop()
}
function rnd(min,max){
  return fxrand()*(max-min) + min;
}