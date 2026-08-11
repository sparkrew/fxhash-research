// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

const { CleanPlugin } = require("webpack");


function myRandom(low,high) {
  let r=fxrand();
  let t = map(r,0,1,low,high, 255);
  return t;
}

function supaRand(low, high) {
  let rr=fxrand();
  let tt = map(rr, 0, 1, low, high, 255);
  return tt;
}

//var blendModes = [];

function setup() {
  
  
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  noLoop();
  rectMode(CENTER);
  noStroke();

  
  let clr = [];
  let base = myRandom(0, 360);
  for(var i = 0; i < 3; i++) {
    let h = base+(i * 30);
    let s = 100;
    let b = 100;
    clr.push([h, s, b]);
  }
 
 background(clr[0]);

  seed=int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed); 

//  col=int(random(255));
  //col = myRandom(0, 255), myRandom(0, 255), myRandom(0,255);
  //sizee=int(random(width/2));
 //let colSize = [20, 30, 50, 70, 100]
 //let rowSize = [40, 20, 10, 50, 70, 100]
 //let rColSize = random(colSize)
 //let rRowSize =

 //FX Features
 //window.$fxhashFeatures = {
//"Columns" : colSize,
 //"Rows" : rowSize,
  };

//}


function draw() {


  const columns = myRandom(1, 20, 30, 50, 70, 100, 500, 1000, 10000);
  const rows = myRandom(1, 40, 20, 10, 50, 70, 100, 500, 1000, 10000);
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;
      
      drawFlower(x, y, min(cellWidth, cellHeight));
    }
  }
}

function drawFlower(x, y, size) {
  const flowerSize = myRandom(size * .55, size * .95);
  const petalSize = flowerSize / 1;
  const spacing = petalSize / myRandom(1, 3);



  blendMode(DIFFERENCE)
  
  for (var i = 0; i < 10; i = i + 1)
      var huhu = i * 20;
      var s = myRandom(20, 80);
  fill(myRandom(0, 360), myRandom(0, 360), myRandom(0, 360));
  circle(x - spacing, y - spacing, petalSize);
  circle(x + spacing, y - spacing, petalSize);
  circle(x - spacing, y + spacing, petalSize);
  circle(x + spacing, y + spacing, petalSize);
  
  circle(x, y, myRandom(petalSize * random(20)));
}



//function windowResized() {
  //resizeCanvas(windowWidth/4, windowHeight/4);
//}

