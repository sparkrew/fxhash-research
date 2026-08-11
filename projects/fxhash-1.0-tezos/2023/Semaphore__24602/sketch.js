const CANVAS_SIZE = 1500;
const PROJECT_NAME = "Semaphore"
const EXPORT_FACTOR = 3;
let ROWS, UNIT_LENGTH, NUM_TILES, SELECTED_PALETTE;


let PALETTE_COLLECTION = [
  { name: "sand_sky_sun", is_emwdx: true, palette: [[221, 196, 169, 255], [133, 188, 229, 255], [129, 188, 229, 255], [47, 118, 199, 255], [45, 118, 207, 255], [255, 86, 53, 255], [45, 116, 197, 255], [251, 24, 0, 255]] },
  { name: "seaside_town", is_emwdx: true, palette: [[248, 244, 235, 255], [217, 208, 188, 255], [93, 165, 230, 255], [228, 192, 95, 255], [12, 95, 182, 255], [0, 66, 143, 255], [0, 64, 141, 255], [19, 18, 12, 255]] },
  { name: "finding", is_emwdx: true, palette: [[21,255,255,255],[0,179,252,255],[252,62,42,255],[210,183,254,255],[40,33,72,255]] },
  { name: "maximalism", is_emwdx: true, palette: [[248,244,235,255],[245,244,233,255],[244,244,233,255],[243,242,231,255],[231,234,231,255],[211,211,202,255],[210,210,201,255],[217,208,188,255],[93,165,230,255],[220,184,87,255],[228,192,95,255],[206,167,70,255],[12,95,182,255],[113,105,94,255],[0,66,143,255],[0,64,141,255],[90,73,67,255],[205,205,196,255],[19,18,12,255],[221,196,169,255],[216,191,164,255],[133,188,229,255],[129,188,229,255],[129,182,219,255],[47,118,199,255],[45,118,207,255],[255,86,53,255],[255,56,28,255],[45,116,197,255],[212,0,0,255],[251,24,0,255],[101,0,0,255],[84,0,0,255],[49,24,20,255],[36,10,6,255]] },
  { name: "penguin_paddock", is_emwdx: true, palette: [[177,176,174,255],[79,93,89,255],[58,139,137,255],[255,72,53,255],[175,0,0,255],[14,38,46,255],[0,154,158,255],[47,58,78,255]] },
  { name: "walls", is_emwdx: true, palette: [[105,191,221,255],[33,66,114,255],[24,77,145,255],[182,8,3,255],[157,196,222,255],[12,37,95,255]] },
  { name: "upwards", is_emwdx: true, palette: [[152,218,75,255],[147,129,199,255],[215,79,178,255],[126,183,230,255],[221,52,70,255],[83,54,91,255]] }]
let palette_probs = [2, 2, 2, 2, 2, 2, 2];


let NUM_SQUARES_COLLECTION = [1,2,3,5, 7, 9, 11, 12, 13, 15];
let square_probs = [1, 1,1,2,2, 3, 3, 2,1, 1];

let NUM_CIRCLES_COLLECTION = [1, 3, 4, 5,7,8,10,12];
let circle_probs = [1, 1, 1, 2, 3,3,3,3];

let CIRCLE_STYLE_OPTIONS = ["filled","rings"];
let circle_style_probs = [4,1];

let isColorPage = 0;
let tileCollection = [];
let backgroundColor;


SELECTED_PALETTE = weighted_fxrand_select(PALETTE_COLLECTION, palette_probs);

let NUM_SQUARES = weighted_fxrand_select(NUM_SQUARES_COLLECTION, square_probs);

let NUM_CIRCLES = weighted_fxrand_select(NUM_CIRCLES_COLLECTION, circle_probs);

let CIRCLE_STYLE = weighted_fxrand_select(CIRCLE_STYLE_OPTIONS, circle_style_probs);

//choose tile size

window.$fxhashFeatures = {
  "palette": SELECTED_PALETTE.name,
  "circle_count": NUM_SQUARES * NUM_SQUARES,
  "circle_style": CIRCLE_STYLE
  
}
console.log(window.$fxhashFeatures)


let mainCanvas,hiddenCanvas, sdfTiling, palette, progress_div,loop_count;

let L = (x, y) => (x * x + y * y) ** 0.5
let R = (a = 1) => (Math.random() * a)

function setup() {
  mainCanvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  randomSeedValue = int(fxrand() * 100000000); // generate a random seed for fx_hash
  randomSeed(randomSeedValue)
  
  hiddenCanvas = createGraphics(CANVAS_SIZE, CANVAS_SIZE);

  
  let square_size = CANVAS_SIZE / NUM_SQUARES;
  palette = shuffle(SELECTED_PALETTE.palette);
  background(palette[0]);
  noStroke();

  for (var i = 0; i < NUM_SQUARES; i++) {
    for (var j = 0; j < NUM_SQUARES; j++) {
      let newCell = new Cell((i + 0.5) * square_size, (j + 0.5) * square_size, square_size, palette)
      newCell.draw(hiddenCanvas);
    }
  }
  randomSeed(randomSeedValue)
  palette = shuffle(SELECTED_PALETTE.palette);
  for(let i = 0;i<palette.length;i++){
    let av_val = round((1 / 4) * (palette[i][0] +palette[i][1] + palette[i][2]));
    palette[i] = [av_val,av_val,av_val]
  }
  //console.log(palette)
  for (var i = 0; i < NUM_SQUARES; i++) {
    for (var j = 0; j < NUM_SQUARES; j++) {
      let newCell = new Cell((i + 0.5) * square_size, (j + 0.5) * square_size, square_size, palette)
      newCell.draw();
    }
  }

  sdfTiling = new TiledSDF(CANVAS_SIZE / 2, CANVAS_SIZE / 2, 0.9*CANVAS_SIZE, 2, 4, [])
  
loop_count = 0;

}

function draw() {
//noLoop();
  hiddenCanvas.loadPixels()

  loop_count++;
  for (let s = 0; s < sdfTiling.points.length; s++) {
    let currentSDF = sdfTiling.points[s];
    let pointCount = 0.03*sdfTiling.points[s][1]*sdfTiling.points[s][1]
    //console.log(currentSDF)
    for (let i = 0; i < pointCount; i++) {
      let p = [floor(fxrand_between_vals(currentSDF[0][0]-currentSDF[1]*1.01,currentSDF[0][0]+currentSDF[1]*1.01)),floor(fxrand_between_vals(currentSDF[0][1]-currentSDF[1]*1.01,currentSDF[0][1]+currentSDF[1]*1.01)) ]
      //console.log(p)
      if(CIRCLE_STYLE == "filled"){
        if (sdf_circle(p, currentSDF[0], currentSDF[1]) <= 0) {
          let d = pixelDensity();
          for (let i = 0; i < d; i++) {
            for (let j = 0; j < d; j++) {
              // loop over
              index = 4 * ((p[1] * d + j) * hiddenCanvas.width * d + (p[0] * d + i));
              let r = hiddenCanvas.pixels[index]
              let g = hiddenCanvas.pixels[index + 1]
              let b = hiddenCanvas.pixels[index + 2]
              fill(r, g, b, random(100,255))
              circle(p[0], p[1], 1)
            }
          }
          
  
        }
      }
      else{
        if (abs(sdf_circle(p, currentSDF[0], currentSDF[1])) < 4) {
          let d = pixelDensity();
          for (let i = 0; i < d; i++) {
            for (let j = 0; j < d; j++) {
              // loop over
              index = 4 * ((p[1] * d + j) * hiddenCanvas.width * d + (p[0] * d + i));
              let r = hiddenCanvas.pixels[index]
              let g = hiddenCanvas.pixels[index + 1]
              let b = hiddenCanvas.pixels[index + 2]
              fill(r, g, b, random(100,255))
              circle(p[0], p[1], 1)
            }
          }
          
  
        }
      }
      
 
    }
    
  }

updatePixels()
  if(loop_count == 250){
    fxpreview();
  }
}


class Cell {
  constructor(x, y, width, palette) {
    this.loc = createVector(x, y);
    this.width = width;
    this.rotation = random([PI, PI / 2, PI / 4, -PI / 4, -PI / 2, 3 * PI / 2]);
    this.palette = palette;
    rectMode(CENTER)
  }
  draw(context) {
    if(context){
    context.noStroke()
    palette = shuffle(palette);
    context.fill(palette[0])
    context.rect(this.loc.x, this.loc.y, this.width, this.width)
    context.push()
    context.translate(this.loc.x, this.loc.y)
    context.rotate(this.rotation)
    context.fill(palette[1])
    context.arc(0, 0, this.width, this.width, 0, PI)
    context.fill(palette[2])
    context.arc(0, 0, this.width, this.width, -PI, 0)
    context.pop()
    }
    else{
    palette = shuffle(palette);
    noStroke();
    fill(palette[0])
    rect(this.loc.x, this.loc.y, this.width, this.width)
    push()
    translate(this.loc.x, this.loc.y)
    rotate(this.rotation)
    fill(palette[1])
    arc(0, 0, this.width, this.width, 0, PI)
    fill(palette[2])
    arc(0, 0, this.width, this.width, -PI, 0)
    pop()
    }
  }
}

function sdf_circle([x, y], [cx, cy], r) {
  x -= cx;
  y -= cy;
  return L(x, y) - r
}

class TiledSDF {
  constructor(x, y, tileWidth, DIVISIONS, level, points) {
    this.x = x;
    this.y = y;
    this.tileWidth = tileWidth;
    this.radius = 0.5 * tileWidth;
    this.DIVISIONS = DIVISIONS;
    this.points = points;
    if (level <= 0) {
      console.log("tiling error")
    }
    else {
      this.level = level
    }

    if (this.level == 1) {
      for (var i = 0; i < this.DIVISIONS / 2; i++) {
        for (var j = 0; j < this.DIVISIONS / 2; j++) {
          this.points.push([[this.x, this.y], this.radius])
        }
      }
      //console.log(this.points)
    }
    else {
      let spacing = this.tileWidth / this.DIVISIONS;
      for (var i = -this.DIVISIONS / 2; i < this.DIVISIONS / 2; i++) {
        for (var j = -this.DIVISIONS / 2; j < this.DIVISIONS / 2; j++) {
          if (random([0, 1, 0])) {
            this.points.push([[this.x + (i + 0.5) * spacing, this.y + (j + 0.5) * spacing], spacing / 2])
          }
          else {
            let newTile = new TiledSDF(this.x + (i + 0.5) * spacing, this.y + (j + 0.5) * spacing, spacing, fx_rand_element([this.DIVISIONS-1,this.DIVISIONS]), this.level - 1, this.points)
          }

        }
      }
    }
    //console.log(this.points)
  }
}




function renderExportCanvas() {
  let hiddenRenderCanvas = createGraphics(EXPORT_FACTOR * CANVAS_SIZE, EXPORT_FACTOR * CANVAS_SIZE);
  let renderCanvas = createGraphics(3 * CANVAS_SIZE, 3 * CANVAS_SIZE);
  randomSeed(randomSeedValue)
  hiddenRenderCanvas.background(255);
  NUM_SQUARES = random([3, 5, 7, 11, 13, 17, 19])
  NUM_CIRCLES = random([1, 2, 3, 4, 5])
  let square_size = EXPORT_FACTOR * CANVAS_SIZE / NUM_SQUARES;
  palette = SELECTED_PALETTE.palette;
  hiddenRenderCanvas.noStroke();

  for (var i = 0; i < NUM_SQUARES; i++) {
    for (var j = 0; j < NUM_SQUARES; j++) {
      let newCell = new Cell((i + 0.5) * square_size, (j + 0.5) * square_size, square_size, palette)
      newCell.draw(hiddenRenderCanvas);
    }
  }

  sdfTiling = new TiledSDF(CANVAS_SIZE / 2, CANVAS_SIZE / 2, CANVAS_SIZE, 2, 4, [])
  //console.log(sdfTiling.points)
  //saveCanvas(hiddenRenderCanvas,"test","PNG")
  let loadIndex = 0;
  renderCanvas.loadPixels()

  for (let h = 0; h < EXPORT_FACTOR * CANVAS_SIZE; h++) {
    for (let k = 0; k < EXPORT_FACTOR * CANVAS_SIZE; k++) {
      let p = [h, k]
      loadIndex++;
      //console.log(loadIndex*100/(CANVAS_SIZE*CANVAS_SIZE))
      let d = pixelDensity();
      for (let i = 0; i < d; i++) {
        for (let j = 0; j < d; j++) {
          // loop over
          index = 4 * ((p[1] * d + j) * hiddenRenderCanvas.width * d + (p[0] * d + i));
          let r = hiddenRenderCanvas.pixels[index]
          let g = hiddenRenderCanvas.pixels[index + 1]
          let b = hiddenRenderCanvas.pixels[index + 2]
          //let a = hiddenCanvas.pixels[index + 3]

          let sdf_values = [];



          for (let i = 0; i < sdfTiling.points.length; i++) {
            let sdf_value = sdf_circle(p, sdfTiling.points[i][0], sdfTiling.points[i][1])
            sdf_values.push(sdf_value)
          }

          if (min(sdf_values) <= 0) {
            renderCanvas.fill(r, g, b, random(5, 200))

          }
          else {
            let av_val = (1 / 2) * (r + g + b);
            renderCanvas.fill(av_val, av_val, av_val, random(5, 100));
          }
          renderCanvas.noStroke()
          renderCanvas.circle(p[0], p[1], 2)
        }


      }

      updatePixels()


    }

  }

}

function keyPressed() {
  if (key.toLowerCase() == "s") {
    saveCanvas(PROJECT_NAME + "_" + randomSeedValue+"_"+loop_count , "PNG")
  }
  
  


}

function fx_rand_element(array) {
  let len = array.length;
  while (--len > 0) {
    let randIndex = Math.floor(fxrand() * (len + 1));
    [array[randIndex], array[len]] = [array[len], array[randIndex]];
  }
  return array[0];
}


//adapted from https://sebhastian.com/fisher-yates-shuffle-javascript/


function weighted_fxrand_select(array, weights) {
  if (weights.length != array.length) {
    console.log("dimensions incorrect")
    return -1
  }
  let probs_sum = weights.reduce(function (sum, el) { return sum + el })
  let probs = weights.map(function (a) {
    return a / probs_sum;
  })
  //console.log(probs)
  let c_probs = []
  for (let i = 0; i < probs.length; i++) {
    if (i == 0) {
      c_probs.push(probs[i])
    }
    else {
      c_probs.push(c_probs[i - 1] + probs[i])
    }
  }
  //console.log(c_probs)
  let rand_value = fxrand();
  //console.log(rand_value)
  if (rand_value < c_probs[0]) {
    return array[0]
  }
  else if (rand_value > c_probs[c_probs.length - 1]) {
    return array[c_probs.length - 1]
  }
  else {
    for (let i = 0; i < c_probs.length; i++) {
      if (rand_value <= c_probs[i] && rand_value < c_probs[i]) {
        return array[i]
      }
    }
  }


}

function fxrand_between_vals(a, b){

  return a + (b - a) * fxrand();
};