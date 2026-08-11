//MichelBertrand 
function setup() {
  createCanvas(windowWidth, windowHeight);
  reset();
}
function preload() {
  //backgrounds
  bgd01 = loadImage('assets/grid1_export.jpg');
  bgd02 = loadImage('assets/grid2_export.jpg');
  bgd03 = loadImage('assets/grid3_export.jpg');
  bgd04 = loadImage('assets/grid4_export.jpg');
  bgd05 = loadImage('assets/grid5_export.jpg');
  bgd06 = loadImage('assets/grid6_export.jpg');
  bgd07 = loadImage('assets/grid7_export.jpg');
  bgd08 = loadImage('assets/grid8_export.jpg');
  bgd09 = loadImage('assets/grid9_export.jpg');
  bgd10 = loadImage('assets/grid9_export.jpg');
  
}

function reset() {
  resetMatrix(); // reset canvas
  imageMode(CENTER);
  translate(width / 2, height / 2);
}

function draw() {
  console.log('Fxhash is: ' + fxhash); // print fxhash

  var fxhashLenght = 49; // Lenght of fxhash
  let splitfxhash = split(fxhash, ''); // Split fxhash

  let value = []; // Array for all simbols from fxhash
  let valueUnchar = [];

  // separate fxhash to objects in array

  for (i = 0; i < fxhashLenght; i++) {
    value[i] = splitfxhash[i];
    valueUnchar[i] = unchar(value[i]);
  }

  //setup for generative graphics
  background(255);

  // Print backgrounds
  // [5] character from fxhash string
  reset();
  var assetsArrayBgd = [bgd01, bgd02, bgd03, bgd04];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenBgd = Math.floor(map(valueUnchar[5], 48, 122, 0, 4));
  console.log('Choosen background is: ' + choosenBgd);
  // print image
  // background(assetsArrayBgd[choosenBgd]);
  // imageMode(CENTER);
  var imageSize = Math.min(windowWidth, windowHeight);
  image(assetsArrayBgd[choosenBgd], 0, 0, imageSize, imageSize);
  ellipse(mouseX, mouseY, 2, 2);

  let num = 0;
	while (num < windowWidth) {
    point (random(windowWidth),random(windowWidth));
		stroke(random(150),random(80)); 
		num = num +1;
}
	if (num == windowWidth){
		num = 0;
	}
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
