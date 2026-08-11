
/* Garota by atxabuiro */

var sInc, tInc;
var g, g2 

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB)

  frameRate(16)
  
  //info = createElement('p');
  var smaller = (width<height)?width:height;
  g = new Garota(smaller/5,30,20,60,30,80,40,0.96,5)
  g2 = new Garota(smaller*3,250,80,50,30,80,50,1,-0)

  window.$fxhashFeatures = {
    // feature can only be "low", "medium" or "high"
    "Variation": getVariation(fxrand())
  }


  sInc = 161 + window.$fxhashFeatures.Variation
  tInc = 0.2 

}

function getVariation(value) {
  if (value < 0.1) return 0
  if ((value >= 0.1) && (value < 0.2)) return 0.1
  if ((value >= 0.2) && (value < 0.3)) return 0.2
  if ((value >= 0.3) && (value < 0.4)) return 0.3
  if ((value >= 0.4) && (value < 0.5)) return 0.4
  if ((value >= 0.5) && (value < 0.6)) return 0.5
  if ((value >= 0.6) && (value < 0.7)) return 0.6
  if ((value >= 0.7) && (value < 0.8)) return 0.7
  if ((value >= 0.8) && (value < 0.9)) return 0.8
  if (value >= 0.9)  return 0.9
  
}



function draw() {
  background(25);
  g2.paint()
  g.paint()
  
 
  
}

function reportWindowSize() {
  resizeCanvas(windowWidth, windowHeight)
  var smaller = (width<height)?width:height;
  g.setRadius(smaller/4.5)
  g2.setRadius(smaller*3)
}

window.onresize = reportWindowSize;


