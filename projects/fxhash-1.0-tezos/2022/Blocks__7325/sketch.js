let seed = fxrand() * 989134521188571;

let imgs = [];

let recX = ["3","4", "5", "6", "7", "8", "9"];

let recXRand;
let recYRand;

let canvasSize = Math.min(window.innerWidth, window.innerHeight);

let features = {};

function preload() {
         
   for (var i = 0; i < 112; i++) {
    imgs[i] = loadImage("developments-" + i + ".png");
  }
      
}

function setup() {
   createCanvas(canvasSize, canvasSize);
   resetRandom();
  noLoop();
   imageMode(CORNER);
  
}

function draw() {

   background(29,29,27);
  
                    recXRand=random(recX.length);
  recXRand=floor(recXRand);
  
    
    //Set the space between the edge of the canvas and your rectangles.
    const offsetX = canvasSize/20;
    const offsetY = canvasSize/20;
  
  
    const sizeX = (canvasSize-offsetX*2)/recX[recXRand];
    const sizeY = (canvasSize-offsetY*2)/recX[recXRand];
  
           features.X = recX[recXRand];
  features.Y = recX[recXRand];
  
  //console.log(features);

window.$fxhashFeatures = features;


    
      for(let i = 0; i < recX[recXRand]; i++)
    {
      
        for(let j = 0; j < recX[recXRand]; j++)
        {
   var index=int(random(112));
image(imgs[index], i*sizeX +offsetX, j*sizeY +offsetY, sizeX, sizeY);

        }
    }

}




function resetRandom() {
  
  randomSeed(seed);
}