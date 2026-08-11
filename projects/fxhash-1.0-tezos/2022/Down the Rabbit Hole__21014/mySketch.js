/*Artwork by Steve's Makerspace
YouTube video: https://youtu.be/_19WW_0Ajwk

*/

let objMin = 8; //8
let objMax = 11; //14
let palette,
  rot,
  oL,
  seedStart,
  size,
  size3,
  hgt3,
  type,
  strokeOn,
  extraShapes,
  counter,
  mv,
  m,
  cnt,
  rotCh,
  yCh,
  xCh,
  firstTime,
  superSize,
  allTransp,
  t,
  u,
  gridSpace,
  attempts,
  hPerc,
  vPerc,
  textureOn,
  col,
  bgCol, x,y, wavyLine, smallCircles, oppShape,printed10,hashNum;
let a = 255;
let cnv = [];
let ctx = [];
let items = [];
let gridArray = [];
let colmv = 3;
let pixD = 1;

function preload() {
  table = loadTable("colors.csv", "csv", "header");
}

function setup() {
  maxCanv = min(windowWidth, windowHeight);
  mainCanv = createCanvas(maxCanv, maxCanv);
  oL = width * 0.17; //overlap for horizontal and vertical lines
  mv = width * 0.04;
  colorMode(HSB, 360, 120, 100, 255);
  // let artButton = createButton("new art");
  // artButton.position(10, height + 10);
  // artButton.mousePressed(newArt);
  // let saveButton = createButton("save png");
  // saveButton.position(90, height + 10);
  // saveButton.mousePressed(saveArt);
  newArt();
}

function newArt() {
  //print(width);
  //seedStart = Date.now();
  seedStart = int(fxrand()*9999999);
  counter = 0;
  firstTime = 0;
  restart();
}

function restart() {
  startTime = Date.now();
  cnv = [];
  ctx = [];
  items = [];
  gridArray = [];
  pixelDensity(pixD);
  firstTime++;
  counter++;
  randomSeed(seedStart + counter);
  if (random(20) < 1) {
    superSize = true;
  } else {
    superSize = false;
  }
  if (random(20) < 1) {
    allTransp = true;
  } else {
    allTransp = false;
  }
  smallCircles = false;
  // hPerc and vPerc help determine if shapes will be placed going downward, upward, to the right or the left
  hPerc = random(0.4, 1.6);
  vPerc = random(0.4, 1.6);
  clear();
  palette = floor(random(53));
  textureOn = true;
  extraShapes = false; // affects transparency when making the curly thing
  x = width / 2;
  y = height / 2;
  cnt = 0;
  size = width;
  strokeOn = random(2);
  rot = 0;
  startShape();
  cnv[cnt].pop();
  watercolor();
  image(cnv[cnt], 0, 0);
  bgCol = col; //recording the background color
  addLayer();
  drawShapes(); //see separate sketch
  moreShapes();
  placeShapes();
  if (random(20)<1){
  littleShapes()}
  makeLines();
  if (textureOn == true) {
    paperTexture();
  }
  frameIt();
  if (firstTime == 1) {
    pixelDensity(1);
    counter = 0;
    restart();
  }
  // if (pixD == 1){
  //   grain()
  // }
  print(
    "secs:",
    round((Date.now() - startTime) / 100) / 10,
    "palette:",
    palette, "Numb:",numb
  );
  print(superSize,allTransp,wavyLine,oppShape,printed10,smallCircles,hashNum>2)
  fxpreview();
}

function getColor() {
  col = floor(random(5));
  h = int(table.get(palette, col * 3)) + random(-8, 8);
  s = int(table.get(palette, col * 3 + 1)) + random(-10, 10);
  b = int(table.get(palette, col * 3 + 2)) + random(-20, 5);
}

function frameIt() {
  rectMode(CENTER);
  noFill();
  stroke(0, 0, random(50));
  strokeWeight(width * 0.05);
  rect(width / 2, height / 2, width);
  getColor();
  if (b < 20) {
    getColor();
  }
  stroke(h, s, b);
  fsw = max(0.8, width * 0.005);
  strokeWeight(fsw);
  rect(width / 2, height / 2, width * 0.972);
}

function keyPressed() {
  if (key == "s") {
    save(Date.now() + ".png");
  }
  if (key == "2") {
    resizing = true;
    pixD = 2;
    counter = 0;
    restart();
  }
  if (key == "3") {
    resizing = true;
    pixD = 3;
    counter = 0;
    restart();
  }
  if (key == "4") {
    resizing = true;
    pixD = 4;
    counter = 0;
    restart();
  }
  if (key == "5") {
    resizing = true;
    pixD = 5;
    counter = 0;
    restart();
  }
  if (key == "g") {
    grain();
  }
}

function windowResized() {
  maxCanv = min(windowWidth, windowHeight);
  resizeCanvas(maxCanv, maxCanv);
  pixD = 1;
  counter = 0;
  restart();
}

function saveArt() {
  save(seedStart + ".png");
}

// window.$fxhashFeatures = {
//   "Super-sized": getsuperSize(),
//   "All transparent": getallTransp(),
//   "Wavy line": getwavyLine(),
//   "Big 2nd shape": getoppShape(),
//   "10PRINT": getprinted10(),
//   "Small circles": getsmallCircles(),
//   "3 hash marks": gethashNum()
// }

// function getsuperSize(){
// 	if (superSize==true) {return true}
// 	else {return false}
// }
// function getallTransp(){
// 	return allTransp()
// }
// function getwavyLine(){
// 	return wavyLine
// }
// function getoppShape(){
// 	return oppShape
// }
// function getprinted10(){
// 	return printed10
// }
// function getsmallCircles(){
// 	return smallCircles
// }
// function gethashNum(){
// 	if (hashNum>2){return true}
// 	else {return false}
// }