//Circle Divide by bobsarea
//https://editor.p5js.org/bobsarea/sketches/9BI2JWYk7

let nArray=[]
let n2Array=[]
let center
let palette=[]

function maxminrand(min, max) {
  return fxrand() * (max - min) + min;
}


function setup() {
  randomSeed((fxrand() * 100))
  canvasSize=2048
  createCanvas(canvasSize, canvasSize); 

  smallCircle = false
  center = width/2
  nArray=[4,5,6,7,8,9,10,12,13]
  shuffle(nArray,true)
  strokeCap(SQUARE)
  innerRadius = maxminrand(347,600)
  perimiterRadius = 5
  radius = maxminrand(372.36,477.38);
  perimiterRadiusOuter = radius*0.6
  smallOffset = (fxrand() * 1)
  
  if(smallOffset<0.5){
  outerOffset = maxminrand(0.6,1.2)
  largeCircle=true  
  }
  else{
  outerOffset = maxminrand(1.2,1.8)  
  smallCircle=true  
  }
  
  innerOffset = maxminrand(0.5,1.75)
  n = nArray[0]
  n2 = n
  
  innerWheelWeight = Math.floor(maxminrand(2,50));
  soloCircleWeight = Math.floor(maxminrand(5,135));
  soloCircleOffset = Math.floor(maxminrand(1,4));
  reticleSize = Math.floor(maxminrand(25,75));
  reticleArray = [0.25,0.5,0.75]
  shuffle(reticleArray,true)
  reticleReducer = reticleArray[0]
  ellipseRingToggle = (fxrand() * 1)
  ellipseringOffset = maxminrand(0.1,0.3)
  dashSize = Math.floor(maxminrand(10,50));
  innerWheelModifier = maxminrand(1,5)
  centerDotSize = Math.floor(maxminrand(10,60));
  perimiterRadiusOffset = Math.floor(maxminrand(8,30));
  perimiterRadiusOffset2 = (maxminrand(.75,1.25));
  bullseyeCircleSize = Math.floor(maxminrand(0.5,40));
  blackCircleOffset = (maxminrand(0.5,1.5));
  blackCircleSizeOffset = (maxminrand(0.75,2));
  perimiterRadiusMultiplier= (maxminrand(0.5,1));
  zLimit = Math.floor(maxminrand(8,28));
  redOutCircleBW = (fxrand() * 1)
  debugCounter = 0
  outerLoopedWeight = (maxminrand(0.8,0.88));
  whiteEllipseSizeMulti = (maxminrand(0.25,0.5));
  loopedChoice = (fxrand() * 1)
  codeRed = (fxrand() * 1)
  codeRedLimit = 0.04
  codeRed2 = (fxrand() * 1)
  codeRed2Limit = 0.5
  redOut = (fxrand() * 1)
  redOutLimit = .0007
  insideringToggle = (fxrand() * 1)
  zToggle = (fxrand() * 1)
  ellipseCounter=(fxrand() * 1)
  weightOffsetRate = 2
  ringSizeMod = maxminrand(1,2)
  outsideToggle = (fxrand() * 1)
  backgroundColor = null
  debugStopper = 0
  zMulti = (maxminrand(0.06,0.35));
  innerSoloMultiplier = maxminrand(1.5,2.5)
  redToggle = (fxrand() * 1)
  redToggle2 = (fxrand() * 1)
  redToggle3 = (fxrand() * 1)
  blackToggle = (fxrand() * 1)
  blackToggle2 = (fxrand() * 1)
  outerOffsetM = maxminrand(0.75,1.25)  
  outerOffsetZ = maxminrand(0.75,1.25)  
  outerOffsetY = maxminrand(0.75,1.25)  
  insideWebToggle = (fxrand() * 1)
  circleOffset2D = 1
  gLimit = Math.floor(maxminrand(2,4))
  ringSize = (maxminrand(1,3))
  loopedCircleWeight = maxminrand(2.5,5)
  dots = [];
  maxR = 50;  
  palette[0] = "red"

  background(20);
  backgroundColor=("black" )
  
  if(codeRed<codeRedLimit&&codeRed2<codeRed2Limit){
  background("#f5f5f5");
  backgroundColor="white"    
  }
  if(redOut<redOutLimit){
  background("red");
  backgroundColor = "red"
  }
  
  let points3 = circle_divide(n2);
  points3 = circle_divide2(n2);



  for(let p of points3) {

    push()
      
    if(backgroundColor=="white"){

      if(blackToggle2<.5){
        fill(20)
        }
      else if(blackToggle2<1){
        fill("red")
        }
    }
  
    if(backgroundColor=="black"){
      if(blackToggle2<.5){
        fill("#f5f5f5")
        }
        else if(blackToggle2<1){
        fill("red")
        }
    }
 
    if(backgroundColor=="red"){
      if(blackToggle2<.5){
        fill("#f5f5f5")
        }
        else if(blackToggle2<1){
        fill(20)
        }
    }

    noStroke()

  // WHITE ELLIPSE   

    circle(center + p.x * radius/outerOffset,
             center - p.y * radius/outerOffset, 
             perimiterRadius*bullseyeCircleSize);             
      
    pop()


}

  noFill();

  let points = circle_divide(n);
  let points2 = circle_divide(n2);
  
  for(let p of points) {
    
  push()
  strokeWeight(innerWheelWeight);
  stroke(20); 
    
  if(codeRed<codeRedLimit){
  stroke("red")
  }
    
  if(codeRed2<codeRed2Limit){
  stroke(20);
  }
    
  if(redOut<redOutLimit){
  stroke(20);
  }    
    
  if(backgroundColor=="black"){
  if(redToggle2<0.3)  {
  stroke("red");
  }
  else{
    if(blackToggle<0.5){
    stroke(20);    
    }
    else{
    stroke("#f5f5f5");
    }
  }
    
  }
    
/// CENTER SPOKE
    
  setLineDash([dashSize,dashSize])
  line(center, 
      center,
      center + p.x * radius*innerOffset,
      center - p.y * radius*innerOffset)
  pop()
  }
  
  strokeWeight(innerWheelWeight*innerWheelModifier);

  points = circle_divide2(n);
  points2 = circle_divide2(n2);

  for(let p of points){
  if(ellipseCounter<n){
    
  push()    
  fill("red")
  noStroke() 
    
  if(redOut<redOutLimit){
  if(redOutCircleBW<0.5){
  fill("#f5f5f5");
  }
  else{
  fill(20)  
  }
  }   
    
// RED ELLIPSE    
  ellipse(center + p.x * radius*innerOffset, center - p.y * radius*innerOffset, reticleSize*1.12);
    
// WHITE ELLIPSE   
  fill("#f5f5f5") 
  ellipse(center + p.x * radius*innerOffset * whiteEllipseSizeMulti, center - p.y * radius*innerOffset * whiteEllipseSizeMulti, reticleSize*reticleReducer);
  pop() 
  ellipseCounter++
  }    
  }
  
  for(let p of points) {
    
  if(n==4&&loopedChoice<0.5||n==5&&loopedChoice<0.5||n==6&&loopedChoice<0.5||n==7&&loopedChoice<0.5||n==8&&loopedChoice<0.5){
      while(perimiterRadius<radius+ perimiterRadiusOffset){
      stroke("#f5f5f5")
      if(codeRed<codeRedLimit){
      stroke("red")
      }
        
      strokeWeight((Math.sqrt(perimiterRadius*0.052)))
      push()

      noFill()
      strokeWeight((perimiterRadius*perimiterRadiusOffset2*perimiterRadiusMultiplier)*0.02)
  
      if(redOut<redOutLimit){
      strokeWeight(loopedCircleWeight)
      stroke("#f5f5f5");        
      }          

        
/// LOOPED CIRCLES 1 

      circle(center + p.y * perimiterRadius*innerOffset,
             center - p.x * perimiterRadius*innerOffset, 
             perimiterRadius*perimiterRadiusOffset2*perimiterRadiusMultiplier);
      pop()
      perimiterRadius = (perimiterRadius + perimiterRadiusOffset)
      debugStopper++

    }    
    perimiterRadius = 5 
  }
    else{
    loopedChoice=.6
    }


  push()

  strokeWeight(outerLoopedWeight*0.95);
  noFill()
    
  if(loopedChoice>.5)  {
    
       for(z = 0; z < zLimit; z++){
         
        stroke("#f5f5f5")
        
        if(codeRed<codeRedLimit||redToggle3<0.06){
        stroke("red")
        }
         
        if(redOut<redOutLimit){
        stroke("#f5f5f5");
        strokeWeight(outerLoopedWeight*1.5);
        }   
         
        if(backgroundColor=="white"){
        stroke(20);
        if(redToggle<0.5){
        stroke("red"); 
        }            
        }          
         
        if(zToggle<0.5){
          
//LOOPED CIRCLES 2  
          
        strokeWeight(outerLoopedWeight*(perimiterRadiusOuter*(Math.sqrt(z*zMulti)))*0.011);
        if(redOut<redOutLimit){
        strokeWeight(outerLoopedWeight*(perimiterRadiusOuter*(Math.sqrt(z*zMulti)))*0.012);
        }          
        circle( center + p.x * radius/outerOffset*outerOffsetM*(Math.sqrt(z*zMulti)),
            center - p.y * radius/outerOffset*outerOffsetM*(Math.sqrt(z*zMulti)),
            perimiterRadiusOuter*(Math.sqrt(z*zMulti)));     
        }
         
        else{
        if(redOut<redOutLimit){
        stroke("#f5f5f5");
        strokeWeight(outerLoopedWeight*1.5)
        }  
          
        if(backgroundColor=="white"){
        stroke(20);
  
        if(redToggle<0.5){
        stroke("red");
        }  
        }   
          
        push()
        stroke(backgroundColor)  
        if(backgroundColor=="black"){
        stroke("#f5f5f5")  
        }
        if(backgroundColor=="white"){
        stroke(20)  
        }  
        if(backgroundColor=="red"){
        stroke("#f5f5f5") 
        }           
          
////2D CIRCLES      
        
        for(g = 1; g < gLimit; g++){
        if(redOut<redOutLimit){
        strokeWeight(outerLoopedWeight*3)
        }  
        circle( (center + p.x * radius/outerOffset*1.4*g*.5),
            (center - p.y * radius/outerOffset*1.4*g*.5),
            perimiterRadiusOuter*(Math.sqrt(z*zMulti))*g*.5);              
        }

        circleOffset2D = circleOffset2D + .5
        pop()  
          
        }
    } 
  }
        strokeWeight(60);
        pop()     
 
  }
  
  
/// Colored Ring  
  strokeWeight(soloCircleWeight)
  stroke("red")
  
  if(redOut<redOutLimit){
  stroke("#f5f5f5");
  }       
  if(insideringToggle<0.5){
  //inner
  circle( center,
          center,
          innerRadius*soloCircleOffset);      
  }
  else {
  //outer 
  outsideRadius = innerRadius*soloCircleOffset*innerSoloMultiplier
    
  if(outsideRadius>874){
  outsideRadius = 874-maxminrand(1,800)  
  }
  circle(center,
           center,
           outsideRadius);          
  }


///// Background Colored Ring  
  stroke(backgroundColor)
  strokeWeight(centerDotSize*ringSize*ringSizeMod)
  if(backgroundColor=="black"){
    stroke(20)
  }
  if(backgroundColor=="red"){
    stroke(20)
  }  
  if(backgroundColor=="white"){
    stroke(20)
  }  
    
  if(insideringToggle<0.5){
  //outer
  outsideRadius2 = innerRadius*soloCircleOffset*innerSoloMultiplier
  if(outsideRadius2>874){
  outsideRadius2 = 874-maxminrand(1,800)  
  }
    
  circle(center,
           center,
           outsideRadius2);    
  }
  else {
  //inside 
  circle( center,
          center,
          innerRadius*soloCircleOffset);          
  } 

  
  window.$fxhashFeatures={
    "Color": getCode(backgroundColor),
  }

  
  for(let p of points2) {

    push()
    // fill("#f5f5f5")
      
    if(backgroundColor=="white"){
      if(blackToggle2<.5){
      fill(20)
      }
      else if(blackToggle2<1){
      fill("red")
      }
    }
  
    if(backgroundColor=="black"){
      if(blackToggle2<.33){
        fill(20)
        }
        else if(blackToggle2<.7){
        fill("#f5f5f5")
        }
        else if(blackToggle2<1){
        fill("red")
        }
    // fill(20)
    }
  
    if(backgroundColor=="red"){
      if(blackToggle2<.33){
        fill("red")
        }
        else if(blackToggle2<.7){
        fill("#f5f5f5")
        }
        else if(blackToggle2<1){
        fill(20)
        }
    // fill(20)
    }
    
    noStroke()

    circle(center + p.x * radius*innerOffset*outerOffsetY,
             center - p.y * radius*innerOffset*outerOffsetY, 
             perimiterRadius*bullseyeCircleSize);  
             
             
    pop()


}

  noLoop();

}

function getCode(backgroundColor){
  return backgroundColor
}

function circle_divide(m, e=1e-3, t=1e-10) {
  let u = -1, v = 3 / (m + 1);
  let points = [];
  
  while(u < -e) {
    u = 1e-10;
    for(let n = 0; n < m; n++) 
      u = (u + v) / (1 - u*v);
    v = v - u / (m + 1);
  }
  for(let n = 0; n < m; n++) {
    x = 2 / (1 + t*t) - 1;
    y = 2*t / (1 + t*t);
    t = (t + v) / (1 - t*v);
    points.push({x, y});
  } 
  return points;
}

function circle_divide2(n) {
  let v = createVector(1, 0);
  let points = [v.copy()];
  for(let p = 1; p < n; ++p) {
    points.push(v.rotate(2*PI/n).copy());
  }
  return points;
}

function draw() {
  noLoop()
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}