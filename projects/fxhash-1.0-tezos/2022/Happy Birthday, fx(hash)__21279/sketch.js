// fxHashTurnsOne
// by Wanda Oliver
// Nov, 2022
// All rights reserved.


// ISSUE = HOW TO GET ANIMATION AND RESIZE TO BOTH WORK?????


// PREPARE A COLOR SYSTEM
let pHue = 0;  // to hold primary hue
let cHue = 0;  // to hold hue complementary to primary
let hue = 0;     // to hold working hue
let sat = 0;     // to hold working saturation
let brt = 0;     // to hold working brightness
let trn = 0;     // to hold working transparency
let sat1 = 60;   // these values limit the upper and lower range of color values
let sat2 = 90;
let brt1 = 60;
let brt2 = 90;
let trn1 = 40;
let trn2 = 80;


// PREPARE A RESIZEABLE GRID SYSTEM
let gWidth = 0;    // will hold width of drawing grid
let gheight = 0;   // will hold height of drawing grid
let cW = 0;        // will hold grid cell width
let cH = 0;        // will hold grid cell height
let m = 1;         // multiplier to scale output; default value is 1
let aspectRatio = 1; // default aspect ratio is square

let numCols = 0 // will hold values based on design
let numRows = 0;

// ARRAYS TO HOLD CLASSES
candles = [];

// ANIMATION  and RESIZE CONTROLS
animate = 0;


//+++++++++++++++ REQUIRED FOR FX(HASH) ++++++++++++++++
// PREPARE FOR PRNG FUNCTIONALITY
let seed = 0; // to hold random seed
//++++++++++++++++++++++++++++++++++++++++++++++++++++++


// PRE-LOAD
function preload()  
{
  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // SET SEED TO CONTROL PRNG FUNCTION REQUIRED BY fx(hash)
  seed = int(fxrand() * 999999);
  // +++++++++++++++++++++++++++++++++++++++++++++++++++

  // Initialize color system
  colorMode(HSB, 360, 100, 100, 100);

  // Load fonts
  wanda_handwriting = loadFont('wandaOliver_handwriting.otf');
}
 
function setup() 
{
  randomSeed(seed);
  noiseSeed(seed);

  numCols = 19; // number of columns to draw based on design
  numRows = 20; // number of rows to draw based on design

  setupGrid(m); // pass in scaling value
  createCanvas(gWidth,gHeight);
  noStroke();
  frameRate(1.5);
}
 
function draw() 
{
  setBaseColor();
  background(pHue, 100, 10, 100);   // almost black

  // ++++++++++++++++++++ THIS SKETCH ++++++++++++++++

  // build array of candle positions for birthday cake
  createCandles()

  // display candles
  for(i=0; i<candles.length - 1; i++)
  {
    candles[i].display();
    candles[i].invertColor();
  }

  addText();

  // +++++++++++++++++++++++++++++++++++++++++++++++++

  
  if(animate==0)
  {
    checkPreviewStatus();
    noLoop();
  }
  else
  {
    loop();
  }

}

//####### FUNCTIONS ####################################

function createCandles()
{
  push();
  //translate(cW, cH); // move one cell in from left and top to begin
  let x = 8*cW; // initialize coordinates; first cell is offset
  let y = cH;;
  let numCells = 365; // number of days in fxhash's first year
  let cellCnt = 0;
  let rowCnt = 1;
  let colCnt = 8;  // first row is offset
  for (i=0; rowCnt<=numRows && cellCnt<=numCells; i++)
  { 
    for (j=0; colCnt<=numCols && cellCnt<=numCells; j++)  // march across from left to right, within contraints of col count & margins
    {
      switch(randomInt(0,1000)%2) // set color for this object
      {
        case 0:
          setWorkingColor(pHue);
          break;
        case 1:
          setWorkingColor(cHue);
          break;
      }
      candles[cellCnt] = new Candle(x, y, cW, cH, hue, sat, brt, trn);
      cellCnt = cellCnt + 1;
      colCnt = colCnt + 1;
      x = x + cW;
    }
    rowCnt = rowCnt + 1;
    y = y + cH; // move to next row
    x = cW; // reset x to start of row
    colCnt = 1; // reset col counter
  }
}

function addText()
{
  setWorkingColor(pHue);
  fill(hue, sat, brt, 100); 
  stroke(hue, sat, brt+10, 100);
  strokeWeight(cH*.05);
  textFont(wanda_handwriting);
  textSize(cH*.6);
  x = cW*1.3;
  y = cH*1.6;
  text("#fxhashturnsone", x, y);
  x = cW * 12.3;
  y = cH * 20.7;
  text("happy birthday, fx(hash)", x, y);
  textSize(cH*10);
  strokeWeight(cH*.1);
  setWorkingColor(cHue);
  fill(hue, sat, brt, 80); 
  stroke(hue, sat, brt+10, 80);
  x = cW*3.3;
  y = cH*14.5;
  text("365", x, y);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCIONS - COLOR SYSTEM COMPONENTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
function setBaseColor()
{
  pHue = randomInt(0, 359);     // base hue
  cHue = (pHue + 180 ) % 360;   // complementary hue
}

function setWorkingColor(hc)  // pass in starting hue
{
  let hInc = randomInt(10, 40);
  selectHue(hc, hInc); // select a hue based on starting point & distance
  sat = randomInt(sat1, sat2); // saturation              
  brt = randomInt(brt1, brt2);  // brightness
  trn = randomInt(trn2, trn2);  // transparency
}

function selectHue(hc, hInc)  // adjust starting hue by distance & direction 
{
      let d1 = randomInt(1, hInc); // distance on color wheel 
      let d2 = randomInt(1, 1000); // direction on color wheel
      switch(d2%2)
      {
        case 0:
          hue = int((hc + hInc)) % 360;
          break;
        case 1:
          hue = (int(hc - hInc) + 360) % 360;
          break;
      }
}

 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// STANDARD TEMPLATE AND UTILITY FUNCTIONS - INCLUDE IN ALL PROJECTS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupGrid(m)
{
  if(aspectRatio == 1)
  {
    gHeight = min(windowHeight, windowWidth) * m;
    gWidth = gHeight;
  }
  else
  {
    gHeight = windowHeight * m;  // m is a multiplier used to scale output
    gWidth = windowWidth * m;
  }
  cH = gHeight/(numRows+2);  // grid cell height; incresase numRows by 2 to allow for margins
  cW = gWidth/(numCols+2);   // grid cell width; increase numCols by 2 to allow for margins
}

function randomInt(min, max) 
{
  return floor(random() * (max - min + 1)) + min;
}

function checkPreviewStatus()
{
  // +++++++++++++++++++ DO NOT CHANGE +++++++++++++++++
  // REQUIRED BY FXHASH
  // call fxpreview once confirmation that preview is ready
  i = 0;
  while (i != 1) 
    {
      if ((isFxpreview = true)) {fxpreview(); i = 1;}
    }
  // +++++++++++++++++++++++++++++++++++++++++++++++++++
}

function keyPressed()
{  
   if (key == 'd' || key == 'D') // download output
   {
    saveCanvas('wandaOliver_' + seed, 'png');
   }

   if (key == 'e' || key == 'E') // exit animation
   {
    animate=0;
    noLoop();
   }

   if (key == 'r' || key == 'R') // start animation
   {
    animate = 1;
    loop();
   }
}

function rotateRight()
{
  // 90 deg clockwise
  translate(width, 0);
  rotate(radians(90));
}

function rotateLeft()
{
  // 90 deg counter clockwise
  translate(0, width);
  rotate(radians(-90));
}

function flipHorizontal()
{
  translate(width, 0);
  scale(-1,1);   
}

function flipVertical()
{
  translate(0, height);
  scale(-1,1); 
}

function testPos()
{
  x = 100;
  y = 100;
  stroke(pHue, 0, 100, 100); 
  strokeWeight(10);
  point(x,y);      // white point at pos 100,100
  // rect: rect drawn from upper left corner; position at 100,100
  fill(pHue, 100, 100, 50);
  noStroke();
  rect(x,y, 50, 50); // rect drawn from upper left; pos is relattive to upper left corner of grid
  push();
    translate(x, y);
    stroke(pHue, 20, 100, 100); 
    point(x, y); // pastel point at point of translation
    noStroke();
    fill(cHue, 100, 100, 50);
    rect(x,y, 50,50); // rect at translated x & y
  pop;
}

function addDappling(h) // pass in hue to use
{    
  push();
  for (var x = -10; x <= width; x++) // start off canvas - yields best result
    {
		  for (var y = -10; y <= height; y++) // start off canvas - yields best result
        {
          setWorkingColor(h);
          noStroke();
          fill(hue, sat, brt, 1);  // transparency override employed
		      rect(x, y, 10*m, 10*m);
		    }		
  	}
  pop();
}

function addGradient(h)  // pass in hue to use
{   
  setWorkingColor(h);
  brt = 100;    // start bright
  let br = (brt/height)*.5; // increment applied to brightness in each iteration
  push(0);
  for (var y=-1; y<=height; y++) // start off the edge of the canvas to ensure coverage
    {
		  for (var x= -1; x<=width; x++)
      {
        stroke(hue, sat, brt, trn);  // stroke of same color used to pack rects
        fill(hue, sat, brt, trn);
		    rect(x, y, 1,1);
		  }		
      brt=brt-br;  // proprotionally darken
  	}
  pop();
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// CLASSES
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
class Candle
{
    //The constructor (note no variable declarations above the constructor)  
    constructor(x, y, w, h, hue, sat, brt, trn) 
    { 
      this.x = x; //this refers to the variables in the class. Need to use "this" in front of all variables.
      this.y = y;
      this.w = w;
      this.h = h;
      this.hue = hue;
      this.sat = sat;
      this.brt = brt;
      this.trn = trn;
    }
 
    display()
    {
      this.xC = this.x + this.w/2; // find center of cell
      this.yC = this.y + this.h/2;
      this.sW = this.w *.9;  // set initial strokeweight to .9 of cell W
      this.hueW = this.hue;
      this.satW = 75; // start with dullest color & most transparent
      this.brtW = 75;
      this.trnW = 75;
      while(this.brtW <= 100)
      {
        stroke(this.hueW, this.satW, this.brtW, this.trnW);
        strokeWeight(this.sW);
        point(this.xC, this.yC); // create point at center of the cell
        this.sW = this.sW * .9 // reduce size of next point
        this.satW = this.satW + 2.5; // increase glow
        this.brtW = this.brtW + 2.5;
        this.trnW = this.trnW + 2.5;
      }
    }

    invertColor()
    {
      this.hue = (this.hue + 180) % 360;
    }
}