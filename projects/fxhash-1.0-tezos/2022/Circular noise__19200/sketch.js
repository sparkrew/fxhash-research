
var tt = trandomm(20,80)

function setup() {
 var canvas = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
  noiseSeed(fxrand() *9999)
  randomSeed(fxrand() *9999)
}

function draw() {
  background(250);
  for(j=0;j<800;j+=50){
  for(i=0;i<1000;i+=50){
    var t = trandomm(0,100)
    
    stroke(trandomm(0,100),trandomm(0,100),trandomm(0,100))
    strokeWeight(1)
    
     if(20<tt & tt<40){
    fill(trandomm(20,90),trandomm(20,90),trandomm(20,0))}
    
     if(40<tt & tt<60){
     fill(trandomm(20,90),trandomm(20,0),trandomm(20,90))}
    
    
    if(60<tt & tt<80){
        fill(trandomm(20,0),trandomm(20,90),trandomm(20,90))}
      
    
 
    circle(50+i,50+j,trandomm(3,55))
  
    
  
  }
  fill(0,0,0,0)
  stroke(215)
  strokeWeight(55)
  
rect(0,0,width,height)
  
  
  
  noLoop()
  
  }
}
function trandomm(min,max){
  return fxrand()*(max-min) + min;
}