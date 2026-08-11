var posx,posy
var cl = [];
var seed =  Math.round(fxrand()*100000)
var fc = 0;
var colorTheme = fxrand()
var randomColors = 1
if(colorTheme > 0.2) randomColors = Math.floor(fxrand() * 6) + 2
function setup() {
  createCanvas(windowWidth, windowHeight);
  init()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  init()
  
}

function init(){
  
  posx = width/2;
  posy = height/2;
  cl.length = 0

  randomSeed(seed)
  var r = colorTheme
  //console.log("random option:",r)
  if(r < 0.1){
    background(255);
    cl.push('rgba(0,0,0,0.25)')
  }
  else if(r < 0.2){
    background(0);
    cl.push('rgba(255,255,255,0.25)')
  }
  else{
    background(0);
    var a = randomColors//floor(random(2,6))
    initColors( a)
  }

  //console.log("amount of colors:",cl.length)
 
  fc = 0
  loop()
}

function initColors(amount){
  for(var i = 0 ; i < amount ; i ++){    cl.push('rgba('+int(random(255))+','+int(random(255))+','+int(random(255))+',0.25)')
  }
}

function draw() {
  //background(220);
  if(fc > 500)noLoop();
  if(fc%100==0){
    posx = width/2;
    posy = height/2;
  }
  stroke(cl[round(random(0,cl.length-1))]);
  
  drawPart()
  drawPart()
  drawPart()
  drawPart()
  
  fc++
}

function drawPart(){
  for(var i = 0 ; i < 100 ;i++){
    var dx = round(random(-5,5));
    var dy = round(random(-5,5));
    line(posx,posy,posx+dx,posy+dy)
    posx += dx
    posy += dy
    //point(posx,posy) 
    
  }
}

function getColorThemeString(value) {
  if (value < 0.1) return "Black on White"
  if (value < 0.2) return "White on Black"
  else return "Random on Black"
}

window.$fxhashFeatures = {
  // feature can only be "low", "medium" or "high"
  "Color Theme": getColorThemeString(colorTheme),
  "Colors Used": randomColors
}