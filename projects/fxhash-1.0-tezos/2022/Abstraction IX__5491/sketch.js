// Lomz 2022.
// https://www.lomz.net

console.log('Lomz:2022.');
console.log('https://www.lomz.net');
console.log('fxrand test: ' + fxrand());

var tileSize;
var wh;
var tileNumber;
var numberOfAssets;
var assets = [];
var textures = [];
var tileNumber = [];
var selectedAsset;
var textureChance;

function preload() {
  numberOfAssets = 29; // number of asssets
  for (var i = 0; i < numberOfAssets; i++) {
    assets[i] = loadImage("assets/asset" + i + ".png");
  }

  numberOfAssetsTexture = 4; // number of asssets
  for (var i = 0; i < numberOfAssetsTexture; i++) {
    textures[i] = loadImage("assets/texture" + i + ".png");
  }
}

// function preload() {
//   assets = new Array(29).fill(0).map((_,i) => loadImage(`assets/asset${i}.png`));
// }

function setup() {

  wh = windowHeight;
  createCanvas(wh, wh);  // define canvas size
  

  background('#F8D7BC');
  noFill();

  //console.log('canvas size: ' + wh + 'x' + wh);
  tileNumber = [4,6,8,10,12,14,16];
  tileSize = wh / tileNumber[int(fxrand() * tileNumber.length)];
  //console.log(tileSize);

  for (var y = tileSize; y < wh - tileSize - .01; y = y + tileSize) {
    //console.log(y); 
      for (var x = tileSize; x < wh - tileSize - .01; x = x + tileSize) {  
          push(); // Start a new drawing state
            imageMode(CENTER);
            translate(x+tileSize/2,y+tileSize/2);
            rotate((PI/2)*floor(fxrand()*4));
            //shapes
            selectedAsset = int(fxrand() * numberOfAssets);
            image(assets[selectedAsset], 0, 0, tileSize, tileSize);

            //textures
            textureChance = (fxrand() * 100);
            //console.log('Chance to texture: ' + textureChance); 
            if (textureChance < 20) {
            numberOfAssetsTexture = int(fxrand() * numberOfAssetsTexture);
            image(textures[numberOfAssetsTexture], 0, 0, tileSize, tileSize);
            }
            //console.log('Selected asset: ' + selectedAsset);
          pop(); // Restore original state
          stroke(0);
          strokeWeight(1); 
          rect(x, y, tileSize, tileSize);    
      }
  } 
  //console.log('Y: '+y); 
  //console.log('wh-t:' + (wh - tileSize)); 
}

function draw() {
  
}
