//body landscapes by cari ann shim sham*

let images = [];
var randNumOfImages = $fx.rand();
 const numOfImages =  Math.floor(randNumOfImages * (43 - 1) + 1);

const imageUrls = [
  "img/P1320059_nobackground.png",
  "img/P1320060_nobackground.png",
  "img/P1320061_nobackground.png",
  "img/P1320062_nobackground.png",
  "img/P1320063_nobackground.png",
    "img/P1320064_nobackground.png", "img/P1320065_nobackground.png", "img/P1320066_nobackground.png", "img/P1320067_nobackground.png", "img/P1320068_nobackground.png", "img/P1320069_nobackground.png", "img/P1320070_nobackground.png", "img/P1320071_nobackground.png", "img/P1320072_nobackground.png", "img/P1320073_nobackground.png", "img/P1320074_nobackground.png", "img/P1320075_nobackground.png", "img/P1320076_nobackground.png", "img/P1320077_nobackground.png", "img/P1320078_nobackground.png", "img/P1320079_nobackground.png", "img/P1320080_nobackground.png", "img/P1320081_nobackground.png", "img/P1320082_nobackground.png", "img/P1320083_nobackground.png", "img/P1320084_nobackground.png", "img/P1320085_nobackground.png", "img/P1320086_nobackground.png", "img/P1320087_nobackground.png", "img/P1320088_nobackground.png", "img/P1320089_nobackground.png","img/P1320090_nobackground.png", "img/P1320091_nobackground.png", "img/P1320092_nobackground.png", "img/P1320093_nobackground.png", "img/P1320094_nobackground.png", "img/P1320095_nobackgroungd.png", "img/P1320096_nobackground.png", "img/P1320098_nobackground.png", "img/P1320099_nobackground.png", "img/P1320107_nobackground.png", "img/P1320109_nobackground.png", "img/P1320111_nobackground.png"];
	
let currentImages = [];

function preload() {
		const imageUrlsShuffled = shuffleIt(imageUrls);
  for (let i = 0; i < numOfImages; i++) {
    images[i] = loadImage(imageUrlsShuffled[i]);
  }
  for (let i = 0; i < numOfImages; i++) {
    currentImages[i] = images[i];
  }
}
var randInvertFx = $fx.rand();
var randHueRotateFx = $fx.rand();
var randBlur = $fx.rand();
var randFilterGrayscale = $fx.rand();
var randFilterSepia = $fx.rand();
var randFilterContrast = $fx.rand();
var randFilterInvert = $fx.rand();
var randFilterHueRotate = $fx.rand();
var noiseSeedFx = $fx.rand();
var randContrastFx = $fx.rand();
var randOpacityFx = $fx.rand();
var randFiltersFx = ""; 
var randBackgroundBw = $fx.rand();

function setup() {
	
  colorMode(RGB, 255, 255, 255, 1);
  createCanvas(windowWidth, windowHeight);
 
  noiseSeed(noiseSeedFx);
  var randInvert =  Math.floor(randInvertFx * (100 - 80) + 80);
  var randHueRotate =  Math.floor(randHueRotateFx * (360 - 1) + 1);
  var randContrast = Math.floor(randContrastFx * (300 - 100) + 100);
  var randOpacity = Math.floor(randContrastFx * (100 - 25) + 25);
    
	  if (randFilterGrayscale < 0.2) {
		  randFiltersFx += "grayscale(100%) ";
	  }
	  if (randFilterSepia < 0.2) {
		  randFiltersFx += "sepia(100%) ";
	  } 
	  if (randFilterContrast < 0.2) {
		  randFiltersFx += "contrast(" + randContrast + "%) ";
	  } 
	  if (randFilterInvert < 0.2) {
		  randFiltersFx += "invert(" + randInvert + "%) ";
	  } 
	  if (randFilterHueRotate < 0.2) {
		  randFiltersFx += "hue-rotate(" + randHueRotate + "deg) ";
	  } 
	  
   document.getElementById("defaultCanvas0").style.filter = randFiltersFx;
   
  setInterval(function () {
    if (images.length === numOfImages) {
      allImagesLoaded = true;
      clearInterval(this);
    }
  }, 100);
}

function switchImages() {
  for (let i = 0; i < numOfImages; i++) {
    let currentIndex = images.indexOf(currentImages[i]);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0; 
    }
    currentImages[i] = images[nextIndex];
  }
}

let padding = Math.floor($fx.rand() * (500 - 50) + 50); //trouble shoot tiny outputs was 500-100

let randBackground = "rgba(" + Math.floor($fx.rand() * 255) + ", " + Math.floor($fx.rand() * 255) + ", " + Math.floor($fx.rand() * 255) + ", " + $fx.rand().toFixed(2) + ")";

const randJiggleX = [[$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5]];

const randJiggleY = [[$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5], [$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5,$fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5, $fx.rand() * 10 - 5]];

function draw() {
	if (randBackgroundBw < 0.15) {
		background(1);
	} else if (randBackgroundBw < 0.3) {
		background(0);
	} else {  
		background(randBackground); 
	}
	
	const imageWidth = windowWidth / numOfImages - padding * 2; //troubleshoot for tiny images
  
  const imageHeight = currentImages[0].height * (imageWidth / currentImages[0].width);
  let xPos = padding;

  for (let i = 0; i < numOfImages; i++) {
    const img = currentImages[i];
    const yPos = windowHeight / 2 - imageHeight / 2; 
	const randomXPos = xPos + randJiggleX[i % 10][frameCount % 10];
	const randomYPos = yPos + randJiggleY[i % 10][frameCount % 10];
	
	image(img, randomXPos, randomYPos, imageWidth, imageHeight);

xPos += imageWidth + padding * 2; } }

setInterval(switchImages, 1000);

function shuffleIt(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {

    randomIndex = Math.floor($fx.rand() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

