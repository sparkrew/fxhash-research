let g 
let palette
palette = chromotome.getRandomF(fxrand())
while(palette.colors.length < 2)
  palette = chromotome.getRandomF(fxrand())

let citySize = fxrand()

let SMALL = "small"
let MEDIUM = "medium" 
let LARGE = "large"
  
let bts = 0;//block to show
let btsSpeed = 1;

let seed = Math.floor(fxrand() * 1000);

function setup() {
  let w = min(windowWidth, windowHeight)
  if(w > 900)w = w * 0.875
  createCanvas(w,w);
  noStroke();
  randomSeed(seed)
  switch(citySizeToString(citySize)){
    case SMALL:
      g = new Grid(40, 40)
      btsSpeed = 1
    break
    case MEDIUM:
      g = new Grid(60, 60)
      btsSpeed = 1.5
    break
    case LARGE:
      g = new Grid(80, 80)
      btsSpeed = 3
    break
  }
}

function citySizeToString(size){
  if(size < 0.4)return SMALL;
  else if(size < 0.75)return MEDIUM;
  else return LARGE;
}

function windowResized() {
  let w = min(windowWidth, windowHeight)
  if(w > 900)w = w * 0.875
  resizeCanvas(w, w);
}

window.$fxhashFeatures = {
  "City Size": citySizeToString(citySize),
  "Palette Name": palette.name,
  "Background Color": (palette.background ? palette.background : "#fff"),
  "Colors Used": palette.colors.length,
  "Random Seed Number": seed
}



function draw() {
  var bg = palette.background
  if(!bg)bg = 255
  background(bg);
  
  let w = (width / g.w);
  let h = (height / g.h);
  
  let loopLength = min(bts , g.blocks.length)
  for(let i = 0; i < loopLength ; i++){
    let block = g.blocks[i]
    fill(bg)
    
    push()

    translate(block.x * w, block.y * h )
    rect(0, 0 , block.w * w , block.h * h)
      for(let j = 0; j < block.buildings.length ; j++){
        let building = block.buildings[j]
        fill(building.color)
        rect( (building.x) * w, (building.y) * h , (building.w) * w , (building.h) * h)
      }
    pop();
   }
  bts+= btsSpeed
}

class Grid {
  constructor(w, h) {
    this.rows = [];
    this.h = h;
    this.w = w;
    this.blocks = [];
 
    this.populate();
    this.randomize();
  }

  populate() {
    for (let iy = 0; iy < this.h; iy++) {
      this.rows[iy] = [];
  
      for (let ix = 0; ix < this.w; ix++) {
        this.rows[iy][ix]  = -1;
      }
    }
  }

  randomize() {
    for (let iy = 0; iy < this.h; iy++) {
      for (let ix = 0; ix < this.w; ix++) {
        if(this.rows[iy][ix]  == -1){
          //we have an empty one
          this.findEmptyRect(ix,iy)
        }
      }
    }
  }
  
  findEmptyRect(startX,startY){  
    let maxW = int(random(7,12))
    let maxH = int(random(7,12))
    
    let endW = min(startX + maxW, this.w)
    let endH = min(startY + maxH , this.h)
    
    for (let iy = startY; iy < endH; iy++) {
      endW = this.findEmptyInRow(this.rows[iy], startX, endW)
      if(endW - startX < 3)endH = min(startY + endW - startX,this.h)
    }
    
    this.blocks.push(new Block(startX,startY,endW-startX,endH-startY))
  
  }
  
  findEmptyInRow(row , startX, endW){
    for (let ix = startX; ix < endW; ix++) {
        if(row[ix]  != -1){
           return ix;   
        }else{
          row[ix] = this.blocks.length > 0 ? this.blocks.length-1 : 0
        }
      }
    return endW
  }
  
}
    
class Block {
  constructor(x, y, w, h) {
    this.rows = [];
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.buildings = [];
   
    this.populate();
    this.randomize();
    
    let numColors = palette.colors.length;
    this.color = color (palette.colors[ floor(random(numColors))])
  }

  populate() {
    for (let iy = 0; iy < this.h; iy++) {
      this.rows[iy] = [];
  
      for (let ix = 0; ix < this.w; ix++) {
        this.rows[iy][ix]  = -1;
      }
    }
  }

  randomize() {
    for (let iy = 1; iy < this.h-1; iy++) {
      for (let ix = 1; ix < this.w-1; ix++) {
        if(this.rows[iy][ix]  == -1){
          //we have an empty one
          this.findEmptyRect(ix,iy)
        }
      }
    }
  }

  findEmptyRect(startX,startY){  
    let maxW = int(random(1,8))
    let maxH = int(random(1,8))
    
    let endW = min(startX + maxW, this.w-1)
    let endH = min(startY + maxH , this.h-1)
    
    for (let iy = startY; iy < endH; iy++) {
      endW = this.findEmptyInRow(this.rows[iy], startX, endW)
      if(endW - startX < 3)endH = min(startY + endW - startX,this.h)
    }
    
    this.buildings.push(new Building(startX,startY,endW-startX,endH-startY))
  }

  findEmptyInRow(row , startX, endW){
    for (let ix = startX; ix < endW; ix++) {
        if(row[ix]  != -1){
           return ix;   
        }else{
          row[ix] = this.buildings.length > 0 ? this.buildings.length-1 : 0
        }
      }
    return endW
  }
}

class Building  {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    
    let numColors = palette.colors.length;
    this.color = color (palette.colors[ floor(random(numColors))])
    //this.color = color(random(255),random(255),random(255))
  }
}
