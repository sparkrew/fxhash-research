let BGData;
let TData;
let AData;
let BData;
let CData;
let DData;


function preload() {

  randomSeed($fx.rand()*1000000);

  let BGIndex = floor(random(1, 11));
  BGData = loadImage('comic/BG-' + BGIndex + '.png');

  let TIndex = floor(random(1, 11));
  TData = loadImage('comic/T-' + TIndex + '.png');

  let AIndex = floor(random(1, 21));
  AData = loadImage('comic/A-' + AIndex + '.png');

  let BIndex = floor(random(1, 21));
  BData = loadImage('comic/B-' + BIndex + '.png');

  let CIndex = floor(random(1, 21));
  CData = loadImage('comic/C-' + CIndex + '.png');

  let DIndex = floor(random(1, 21));
  DData = loadImage('comic/D-' + DIndex + '.png');

  
  }



let _mainCanvas;

let originalWidth = 400;
let originalHeight = 1000;
let originalRatio = 0;

let canvasWidth = 400;
let canvasHeight = 1000;
let canvasRatio = 0;

let densityRatio = 1;


function setupRatio(){

  let windowRatio = windowWidth/windowHeight;
  originalRatio = originalWidth/originalHeight;

  if (originalRatio<windowRatio){
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * originalRatio;
  }
  else{
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / originalRatio;
  }

  densityRatio = canvasWidth/originalWidth;


}

function keyPressed(e){

  if(e.key == 's' || e.key == 'S'){

    let fileName = 'COMICS-' + $fx.hash + '.jpg';
    save(_mainCanvas,fileName);

  }
}

function setup() {

  console.log($fx.hash);

  

  
  
  setupRatio();

  createCanvas(canvasWidth, canvasHeight);

  _mainCanvas = createGraphics(originalWidth,originalHeight);
  _mainCanvas.pixelDensity(densityRatio);
  _mainCanvas.colorMode(HSB);

 


    
  _mainCanvas.image(BGData, 0, 0, _mainCanvas.width, _mainCanvas.height);
  _mainCanvas.image(TData, 0, 0, _mainCanvas.width, _mainCanvas.height);
  _mainCanvas.image(AData, 40, 140, _mainCanvas.width/1.25, _mainCanvas.height/5);
  _mainCanvas.image(BData, 40, 350, _mainCanvas.width/1.25, _mainCanvas.height/5);
  _mainCanvas.image(CData, 40, 560, _mainCanvas.width/1.25, _mainCanvas.height/5);
  _mainCanvas.image(DData, 40, 770, _mainCanvas.width/1.25, _mainCanvas.height/5);



  }



function draw() {

  image(_mainCanvas,0,0,width,height); 

}