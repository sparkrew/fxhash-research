// your code goes here
let cnv;
var angle;
var gen = 100;
var nObject = getRandMinMax(50,150);
var type = "";
var xx

function setup() {
    // square dimensions
    w = min(windowWidth, windowHeight)
    cnv = createCanvas(w,w);
    centerCanvas();
  stroke(getRandMinMax(1,255), getRandMinMax(1,255),getRandMinMax(1,255), 80);
  strokeWeight(2);
  fill(getRandMinMax(1,255), getRandMinMax(1,255),getRandMinMax(1,255), 90);
    xx =getRandMinMax(1,10);
}

//function getFeatureString(value) {
//    console.log(value)
//    if (value < 5 ) {
//    type = "Curve"
//   return "Curve"
//} else {
//    type = "Triangle"
//    return "Triangle"
//}
//  
//}

function getRandMinMax(min,max) {
  return fxrand()*(max-min)+min
}

//window.$fxhashFeatures = {
//  // feature can only be "low", "medium" or "high"
//  "Type": getFeatureString(getRandMinMax(1,15))
//}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL)
}


function draw() {
  flower(width/2, height/2);
}

function flower(originX, originY){
  drawingContext.shadowOffsetX = 1;
  drawingContext.shadowOffsetY = -1;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = 'white';
    angle = cos(gen*44)*7;
    background(0, 0, 0);
      push();
        translate(originX, originY);
        rotate(gen*2);
        for(var i = 0; i < nObject; i++){
          rotate(6 / gen*44*2);
                //circle(angle-i/2,angle-i,i,i);
          
                
          if(xx<1){
              drawingContext.shadowColor = 'red';
              strokeWeight(4);
              triangle(angle-i/2,angle-i*10,i,i)
          }  else {
              curve(i, i, 1, angle-i/2, 250, angle-i, i+100, i);
              arc(i, i, 1, angle-i/2, 250, angle-i, i+100, i);
          }
        }
      pop();
      gen += 0.00059;
    

}

