// Template for FXHASH
// by lomz.net

let seed = 0; //seed Hash

function setup() {

  createCanvas(windowWidth, windowHeight);

  console.log('Fxhash is: ' + fxhash);  // print fxhash

  var fxhashLenght = 49; // Lenght of fxhash
  let splitfxhash = split(fxhash, ''); // Split fxhash

  let value = []; // Array for all simbols from fxhash
  let valueUnchar = [];

  // separate fxhash to objects in array

  for (i = 0; i < fxhashLenght; i++) {
  value[i] = splitfxhash[i];
  valueUnchar[i] = unchar(value[i]);
  }

  // print test
  // unchar value from 48 to 122
  console.log('The fifth character from fxhash is ' + value[5]);
  console.log('The fifth unchar value is: ' + (unchar(value[5])));
  console.log('The fifth unchar character from fxhash is ' + valueUnchar[5]);

  //setup for generative graphics
  background(255);

  // Print backgrounds
  // [5] character from fxhash string
  reset();
  var assetsArrayBgd = [bgd01, bgd02, bgd03];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenBgd = Math.floor(map(valueUnchar[5], 48, 122, 0, 2));
  console.log('Choosen background is: ' + choosenBgd);
  // print image
  image(assetsArrayBgd[choosenBgd], 0, 0, windowWidth, windowHeight);

  // FXHASH seed rand
  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 

  // define floors array
  let floor = [bld00, bld01, bld02, bld03, bld04, bld05, bld06, bld07];
  //set first floor
  let startBuilding = windowHeight / 3;
  console.log('firstFloor: ' + startBuilding);
  // fix roof
  let minusRoof = 0;
  let randomFloor = 0;
  let buildingPosition = 0;
  let buildingHeight = 0;
  let numberOfBuildings = int(random(20, 30));

  //multiply
  for (let l = 0; l < numberOfBuildings; l++) {
    buildingPosition = int(random(-250,250));  
    buildingHeight = int(random(3, 12));
    let floorHeight = 0;
    tint (random(130,255)); 
  //build building
  for (let i = 0; i < buildingHeight; i++) {
    image(floor[randomFloor], buildingPosition, startBuilding + floorHeight); 
    randomFloor = int(random(0, 8));
    console.log('Floor: ' + randomFloor);
    floorHeight = floor[randomFloor].height; 
    startBuilding = startBuilding - (floorHeight - (floorHeight / 3)) - minusRoof; // 
  }
  startBuilding = windowHeight / 3;
  randomFloor = 0;
}
// Print layerA
  // [6] character from fxhash string
  reset();
  var assetsArrayLyrA = [front01, front02, front03, front04];
  // map(value, start1, stop1, start2, stop2) - last number is how many assets has array
  let choosenLyrA = Math.floor(map(valueUnchar[6], 48, 122, 0, 3));
  console.log('Choosen front is: ' + choosenLyrA);
  // print image
  image(assetsArrayLyrA[choosenLyrA], 0, 0, windowWidth, windowHeight);

  // FX Features
  window.$fxhashFeatures = {
    "Number of Buildings" : numberOfBuildings,
    "Background" : choosenBgd,
    };
}

// **************************
// *        PRELOAD         *
// **************************

function preload() {
  //backgrounds
  bgd01 = loadImage("assets/bgd01.png");
  bgd02 = loadImage("assets/bgd02.png");
  bgd03 = loadImage("assets/bgd03.png");
  //LayerA
  bld00 = loadImage("assets/bld00.png");
  bld01 = loadImage("assets/bld01.png");
  bld02 = loadImage("assets/bld02.png");
  bld03 = loadImage("assets/bld03.png");
  bld04 = loadImage("assets/bld04.png");
  bld05 = loadImage("assets/bld05.png");
  bld06 = loadImage("assets/bld06.png");
  bld07 = loadImage("assets/bld07.png");
  //LayerA
  front01 = loadImage("assets/front01.png");
  front02 = loadImage("assets/front02.png");
  front03 = loadImage("assets/front03.png");
  front04 = loadImage("assets/front04.png");


}

// **************************
// *        Reset           *
// **************************

function reset() {
  resetMatrix(); // reset canvas
  imageMode(CENTER);
  translate(width / 2, height / 2);
}

function draw() {
}


