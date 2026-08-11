let backs=[];
let ground=[];
let trees=[];
let rocks=[];
let plants=[];
let churches=[];
let houses=[];
let towers=[];
let beasts=[];
let borders=[];

let showCreature = 0;
let time = 0;

function preload() {

 for(let i=0;i<4;i++){
    ground[i] = loadImage('assets/ground'+str(i+1)+'.png')
    trees[i] = loadImage('assets/tree'+str(i+1)+'.png')
    rocks[i] = loadImage('assets/rock'+str(i+1)+'.png')
    plants[i] = loadImage('assets/plant'+str(i+1)+'.png')
    churches[i] = loadImage('assets/church'+str(i+1)+'.png');
    houses[i] = loadImage('assets/house'+str(i+1)+'.png');
    towers[i] = loadImage('assets/tower'+str(i+1)+'.png');
  }
 for(let i=0;i<5;i++){
    beasts[i] = loadImage('assets/Beast'+str(i+1)+'.png');
    backs[i] = loadImage('assets/back'+str(i+1)+'.png');
  }
  borders[0] = loadImage('assets/Border1.png');

}

function setup() {
  noLoop();
  createCanvas(min(windowHeight, windowWidth), min(windowHeight, windowWidth));
  
  placeBackground(backs);
  imageMode(CORNER);
  
  // placeObjects(array, name, minNum, maxNum);
  placeObjects(ground, "Ground", 2, 3);
  placeObjects(rocks, "Rocks", 2, 3);
  placeObjects(trees, "Trees", 2, 3);
  placeObjects(plants, "Plants", 2, 3);
  placeObjects(churches, "Churches", 1, 2);
  placeObjects(houses, "Houses", 2, 3);
  placeObjects(towers, "Towers", 1, 2);
  if(showCreature != 0){
    placeObjects(beasts, "Beasts", 1, 1);
  }

  placeBorder(borders);
}

function placeBackground(array) {
  var chosenBackground = int(map(fxrand(), 0, 1, 0, 5)); 
  let bg = array[chosenBackground]
  bg.resize(width,height)
    if (time == 1) {
    tint(50, 50, 53);
  }
  image (bg,0,0);
}

function placeBorder(array) {
  var chosenBorder = int(map(fxrand(), 0, 1, 0, 1)); 
  let border = array[chosenBorder]
  border.resize(width,height);
  image (border,0,0);
}

function placeObjects(array, arrayName, minAmount, maxAmount) {
  
  var chosenAmount = int(map(fxrand(), 0, 1, minAmount, maxAmount + 0.5));
  
  for(let i=0; i<chosenAmount; i++) {
      var chosenAsset = int(map(fxrand(), 0, 1, 0, 4));
      push();
        xPos = map(fxrand(), 0, 1, 0, width - width/2);
        yPos = map(fxrand(), 0, 1, height/10, height - height/2.75)
        translate(xPos, yPos);
        let img = array[chosenAsset];
        if(showCreature != 0 && arrayName == "Beasts") {
          img = array[showCreature - 1];
        }
        scale(map(yPos**2, 0, height**2, 0.4, 1.2))
        img.resize(1000 * (width/1000), 0);
    
        if (time == 1) {
          tint(100, 100, 105);
        }
  
        image (img, 0, 0);
      pop();
  }
}

function getCreatureString(value) {
  if (value < 0.04) {
    showCreature = 1;
    return "Dragon" 
  }
  if (value < 0.08){
    showCreature = 2;
    return "Satyr" 
  } 
  if (value < 0.12) {
    showCreature = 3;
    return "Chimera" 
  } 
  if (value < 0.16) {
    showCreature = 4;
    return "Cathydra" 
  } 
  if (value < 0.20) {
    showCreature = 5;
    return "Pepe" 
  }
  else return "None"
}

function getTimeString(value) {
  if (value < 0.85) {
    time = 0;
    return "Day" 
  }
  else {
    time = 1;
    return "Night"
  }
}

window.$fxhashFeatures = {
  "Creature": getCreatureString(fxrand()),
  "Time": getTimeString(fxrand())
}