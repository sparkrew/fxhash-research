var frames = 20;
var radius; 
var winkel = 0;
var numberColors;
var l = 0;
var square;

function getFeatureColorNumber(value) {
  if (value < 0.3) return 2
  if (value < 0.5)  return 3
  if (value < 0.7)  return 4
  if (value < 0.9) return 5
  else return "mixed"
}

function getFeatureAngle(value) {
  if (value < 1) return 1
  if (value < 2) return 2
  if (value < 3) return 3
  if (value < 4) return 4
  if (value < 5) return 5
  if (value < 6) return 6
  if (value < 7) return 7
  if (value < 8) return 8
  if (value < 9) return 9
  if (value < 10) return 10
  if (value < 11) return 11
  if (value < 12) return 12
  if (value < 13) return 13
  if (value < 14)  return 14
  if (value < 15)  return 15
  if (value < 16) return 16
  if (value < 17) return 17
  if (value < 18) return 18
  if (value < 19) return 19
  if (value < 20) return 20
  if (value < 21) return 21
  if (value < 22) return 22
  if (value < 23) return 23
  if (value < 24) return 24
  if (value < 25) return 25
  if (value < 26) return 26
  if (value < 27) return 27
  if (value < 28) return 28
  if (value < 29) return 29
  else return 30
}
function getFeatureItteration(value) {
  if (value < 20) return 10
  if (value < 40) return 30
  if (value < 60) return 50
  if (value < 80) return 70
  if (value < 100) return 90
  if (value < 120) return 110
  if (value < 140) return 130
  if (value < 160) return 140
  if (value < 180) return 160
  if (value < 200) return 180
  else return 200
}

function redo() {
  radius = square * 0.6;
  if($fxhashFeatures.Iteration == 10){
    radius = radius * 1.1;
  }
  l = 0;
  middlex = square/2;
  middley = square/2;
  winkel = 0;
}

function setup() {
if(windowWidth > windowHeight){
  square = windowHeight
}
else{
  square = windowWidth
}
createCanvas(square, square);
frameRate(frames);
radius = square * 0.6;
middlex = square/2;
middley = square/2;
console.log(radius);

window.$fxhashFeatures = {
  "NumberOfColors": getFeatureColorNumber(fxrand()),
  "Angle": getFeatureAngle(fxrand() * 28),
  "Iteration": getFeatureItteration(fxrand() * 220)
}
if($fxhashFeatures.NumberOfColors  === "mixed"){
  numberColors = [0]
}
else{
  numberColors = new Array($fxhashFeatures.NumberOfColors * 3)
}
if($fxhashFeatures.Iteration == 10){
  radius = radius * 1.1;
}


  
  for(var i=0; i < numberColors.length -1; i+=3){
    var r = fxrand() * 255;
    var g = fxrand() * 255;
    var b = fxrand() * 255;
    numberColors[i] = r;
    numberColors[i+1] = g;
    numberColors[i+2] = b;
  }
}

function draw() {
  if(radius > 0){
    radius -= 1;

  for(var i = 0; i <= $fxhashFeatures.Iteration; i++){
    if(l > numberColors.length -1){
      l = 0;
    }
    push();
    translate(middlex,middley);
    translate(radius * Math.cos(winkel), radius * Math.sin(winkel))
    
    fill(numberColors[l], numberColors[l+1], numberColors[l+2])
    if($fxhashFeatures.NumberOfColors == "mixed"){
      fill(fxrand() * 255, fxrand() * 255, fxrand() * 255);
    }
    rect(0,0,radius*3,radius*3);
    winkel += $fxhashFeatures.Angle;
    pop();
    l += 3;
  }
}
}

 function mousePressed() {
    clear();
    redo();
 }

function windowResized() {
  if(windowWidth > windowHeight){
    square = windowHeight
  }
  else{
    square = windowWidth
  }
  resizeCanvas(square, square);
  redo();
  }

