let y;
let amplitude;
let steps;
let timeSteps;
let vers;
let sw;
let  col1;
let doReDraw = true;

function setup () {
  minHW = min([windowWidth, windowHeight]);
  createCanvas(minHW, minHW);
  pixelDensity(2);
  sw = fxrand()*0.01;
  col1 = color(1,1,1);
  amplitude= fxrand()*0.15+1;
}
function draw () {
if (doReDraw == true) {
  background (col1);
  y = (50);
  while (y < height+(200)) {
    setRandomValues ();
    drawfill();
    drawlines();
    y+= (fxrand()*5+0.2);
}
    doReDraw = false;
}}
function setRandomValues () {
  noiseSeed (fxrand()*1000000);
  sw = (fxrand()*0.5+0.2);
  steps = (sw*4);
  amplitude = (fxrand()*250);
  timeSteps = (fxrand()*0.03+0.009);
  vers = (1000);
}
function drawfill () {
  fill (col1);
  noStroke();
  let noiseValue;
  let x = -abs (vers);
  let time = 0.03;
  beginShape ();
  vertex (-10, height+100000);
  while (x < width ) {
    noiseValue = y - noise (time)*amplitude;
    vertex (x, noiseValue);
    x+= steps;
    time += timeSteps;
}
  vertex (width+1, height+1);
  endShape();
}
function drawlines () {
  strokeWeight (sw);
  let noiseValue;
  let x = -abs (vers);
  let time = 0.01;
  while (x < width + abs (vers)) {
    noiseValue = y - noise (time)*amplitude;
    strokeWeight (sw*0.5, sw*1);
      stroke (254,252,252);
    line (x, noiseValue+5, x + (vers*1, vers), noiseValue+3+height);
    x+= steps;
    time += timeSteps;
}}

let lapse = 0;    // mouse timer
function mousePressed(){
  // prevents mouse press from registering twice
  if (millis() - lapse > 400){
    save("img_" + month() + '-' + day() + '_' + hour() + '-' + minute() + '-' + second() + ".jpg");
    lapse = millis();
  }
}
