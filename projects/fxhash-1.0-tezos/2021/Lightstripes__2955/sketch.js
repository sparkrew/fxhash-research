var wobbleStrength = 5;
var wobbleStrengths = [];
var syncedWobble = true;
var sizeWobble = false;
var lineRenderStyle;
var wobbleSpeeds = [];
var wobbleSpeed = 1;
var averageSize = 1;
var lineSizes = [];
var isPlaying = true;
var playOffset = 0;
var pauseTime = 0;
var randomNoiseOffsetX = 0;
var randomNoiseOffsetY = 0;
var wD = 400;
var hD = 400;
var size = 400;

var vertical = true;
var verticalBoth = false;
var curved = false;
var evenLines = false;
var lineCount = 20;

var screenRatioW = 1;
var screenRatioH = 1;
var screenRatioAdjustment = 1;

var pg = [];
var mainColors = [];
var hasBeenCleared = false;

/*Colors*/
var bgColor = 200;
var isLoading = true;

var lightThreshold = 0.5;


/*Loop Parameters*/
var loopDuration = 12;
var FPS = 60;
var createGif = false;

var pressed = false;
var milliTimeout = 10;

var strokeWidth = 2;
var chordWidth = 1;


var fxrandMergeCache = [];
var fxrandDirCache = [];
var mergeIterations = 1;

var horizontalCellCount = 1;
var verticalCellCount = 1;
var cellPadding = 5;
var horizontalStripeCount = 1;
var verticalStripeCount = 0;
var verticalSpeed = 1;
var horizontalSpeed = 1;

var fadeColors = false;

var cornerRadius = 0;

var lastLineAdded = 0;
var initialPixelDens = 1;
var pixelDens = 1;

var originalNoiseScales = [
  0.008,
  0.0022,
  0.014,
  0.0095,
  0.0007,
  0.013,
  0.2,
  0.0022,
  0.014,
  0.0095,
  0.0007,
  0.013,
  0.2,
  0.0165
];

var noiseScales = [];


var noiseSpeed = 1;
var originalNoiseSpeed = 2;

var backTrackCount = 2;
var storedBackTrackCount = 0;

var DEBUG = false;

var mX = 0;
var mXBefore = 0;
var mXDelta= 0;
var mY = 0;
var mYBefore = 0;
var mYDelta = 0;
var currentPaletteIndex = 0;


var grid;

function preload()
{
  fetchWebParameters();
}


function releaseLoader() {
  isLoading = false;
}


function GetStrokeWidth()
{
  return (clearToggle) ? strokeWidthCleared : strokeWidth;
}

function getNoise(x,y,scale = 1)
{
  return noise((x+randomNoiseOffsetX)*scale,(y+randomNoiseOffsetY)*scale);
}


function setup() {
  
  initialPixelDens = pixelDensity();
  pixelDens = initialPixelDens;

  frameRate(FPS);
  colorMode(RGB, 255, 255, 255, 255);

  noiseDetail(1.5, 1.1);  
  
  makeCanvas();   

  setupEffects();

  addChannels(null);
  addChannels(null);
  /* 
  */
  
  holderIdLoaded = true;

  if(createGif)
  {
    createLoop(
      {
        duration: loopDuration,
        noise: {
          radius: 1,
          seed: fxhash
        },
        gif: {
          startLoop:0,
          endLoop:1,
          fileName: "loop.gif",
          download: true,
          render: false
          }
        }
    );
  } else {
    createLoop(
      {
        duration: loopDuration,
        noise: {
            radius: 1,
            seed: fxhash
          }
        }
    );
  }

}


function draw() {

  if(isLoading == true) return;

  clear();
  mXBefore = mX;
  mYBefore = mY;

  mX = mouseX;
  mY = hD+mouseY;

  mXDelta = mX-mXBefore;
  mYDelta = mY-mYBefore;
  
  noiseTime += noiseOffsetSpeed;

  mouseXBefore = mouseX;
  mouseYBefore = mouseY;

  for(var i = 0; i < lineCount;i++)
  {
    pointsLeft[i].draw();
    pointsRight[i].draw();
    pointsTop[i].draw();
    pointsBottom[i].draw();
    lines[i].draw();
  }
}


function getComplexity()
{
  var l = (originalBoxSizeXZ-20)/300;
  
  if(l < 0.1) 
  {
    return "Extremely High";
  }

  if(l >= 0.1 && l < 0.4) 
  {
    return "High";
  }

  if(l >= 0.4 && l < 0.7) 
  {
    return "Normal";
  }
  
  return "Low";
}

function getKaleidoCount()
{
  return kaleidoCount;
}

function spawnColors()
{
  var el = document.getElementById("colors");
  var setCount = palletes.colorset.length;

  for(var i = 0; i < setCount;i++)
  {
    var colorCount = palletes.colorset[i].color.length;
    for(var u = 0; u < colorCount;u++)
    {
      var newA = document.createElement("a");
      var c = color(palletes.colorset[i].color[u].r, palletes.colorset[i].color[u].g, palletes.colorset[i].color[u].b)
      console.log("Col: "+c);
      newA.style="display:block;width:20px;height:20px;background-color:"+c+";";
      el.appendChild(newA);
    }
  }
}

function getPaletteName()
{
  switch(currentPaletteIndex)
  {
      case 0:
      return "Fruity";
      case 1:
      return "Forest";
      case 2:
      return "Gold"
      case 3:
      return "Ivy"
      case 4:
      return "Blue Crystal"
      case 5:
      return "Watermelon"
      case 6:
      return "Eggplant"
      case 7:
      return "Orange Juice"
      case 8:
      return "Fire"
      case 9:
      return "Silver"
      case 10:
      return "Shine"
  }
}
/* 

function getRandomPolys()
{
  var polyCount = 20;
  var res = [];
  var part = Math.PI*2/polyCount;
  var alpha = part;
  var r = 0;
  var x = 0;
  var y = 0;

  for(var i = 0;i<polyCount;i++)
  {
    alpha = (i+1)*part;
    r = (0.2+fxrand()*0.8)*size/2;
    x = Math.cos(alpha)*r;
    y = Math.sin(alpha)*r;

    res[i] = (createVector(x+size/2,y+size/2));
  }

  return res;
} */

function chunk(str, size) {
  return str.match(new RegExp('.{1,' + size + '}', 'g'));
}

var tile;
function updateTiles(grap)
{
  tile = grap;
}


var pointsLeft = [];
var pointsRight = [];

var pointsTop= [];
var pointsBottom = [];

var lines = [];
var s1 = [];
var s2 = [];

function iniShapeGrid()
{

  pointsLeft = [];
  pointsRight = [];

  pointsTop= []; 
  pointsBottom = [];


  for(var i = 0; i < lineCount;i++)
  {
   
    pointsLeft.push(new VerticalPoint(-1,0.0006*s1[i]));
    pointsRight.push(new VerticalPoint(1,0.0006*s2[i]));

    pointsTop.push(new HorizontalPoint(-1,0.0006*s1[i]));
    pointsBottom.push(new HorizontalPoint(1,0.0006*s2[i]));
  }
  for(var i = 0; i < lineCount;i++)
  {
    var c = getRandomPaletteColor(pointsLeft[i].Y+i,pointsRight[i].X-i);

    if(verticalBoth)
    {
      lines.push(new Line(pointsLeft[i],pointsRight[i],lineSizes[i],c,wobbleSpeeds[i],wobbleStrength[i]));
      lines.push(new Line(pointsTop[i],pointsBottom[i],lineSizes[i],c,wobbleSpeeds[i],wobbleStrength[i]));
    } else {
      if(vertical)
      {
        lines.push(new Line(pointsLeft[i],pointsRight[i],lineSizes[i],c,wobbleSpeeds[i],wobbleStrength[i]));
      } else {
        lines.push(new Line(pointsTop[i],pointsBottom[i],lineSizes[i],c,wobbleSpeeds[i],wobbleStrength[i]));
      }
    }
  }
  isLoading = false;
}

var noiseTime = 0;
var noiseOffsetSpeed = 1;


function fetchWebParameters() {
  const objktId = new URLSearchParams(window.location.search).get('objkt');
  if (objktId) {
    var parsed = parseInt(objktId);
    if (parsed > 0) {
      objkt = parsed;
    }
  }

  const viewer = new URLSearchParams(window.location.search).get('viewer');
  if (viewer) {
    viewerString = viewer;
    var MD5 = new Hashes.MD5().hex(viewer);
    viewerInt = floor(unhex(MD5) / hexDivider);
  }

  const creator = new URLSearchParams(window.location.search).get('creator');
  if (creator) {
    var MD5 = new Hashes.MD5().hex(creator);
    creatorInt = floor(unhex(MD5) / hexDivider);
  }

  const debu = new URLSearchParams(window.location.search).get('debug');
  if (debu) {
    DEBUG = true;
  }

  const g = new URLSearchParams(window.location.search).get('gif');
  if (g) {
    createGif = true;
  }

  const loopDur = new URLSearchParams(window.location.search).get('duration');
  if (loopDur) {
    loopDuration = loopDur;
  }
}

function loadImages() {
  colorMaskLoaded = true;
}


function reset() 
{
  hasBeenCleared = false;  
  linesAdded = false;
  theCanvas = makeCanvas();
}

function noiseFor(offset) {
  return map(noise(noiseTime + offset), 0, 1, -noiseRange, noiseRange);
}

function makeCanvas() {
  theCanvas = createCanvas(wD,hD);
  bgColor =color(0);
  background(0);
}


function windowResized() {
  setDefaultVars();
  makeCanvas();
  
  resetEffects();

  hasBeenCleared = false;
}

function resetEffects()
{
  clearEffects();
  setupEffects()
}

function setupEffects()
{
  addEffects(
    //kaleidoscope(2+Math.round(fxrand()*16),1),
    bloom(1.1,5,5,1.2),  //threshold, horizontal, vertical, boost, samplerNum, taps, reps
    //kaleidoscope(kaleidoCount),
    godrays({ samplerNum: -1, density: 1, }),
    vignette(0.1, 3, 9),  
    //oldFilm(0.05,0,0.2)
    );
}

function getRandomPaletteColor(x, y) {
  var setCount = palletes.colorset.length;

  var rS = noise(x,y);
  var rC = noise(y,x);

  var rSet = abs(floor((setCount) * rS));
  if (rSet >= setCount) rSet = setCount - 1;

  var colorCount = palletes.colorset[rSet].color.length;
  var rColor = abs(floor((colorCount) * rC));
  if (rColor >= colorCount) rColor = colorCount - 1;

  return color(palletes.colorset[rSet].color[rColor].r, palletes.colorset[rSet].color[rColor].g, palletes.colorset[rSet].color[rColor].b);
}


function getRandomColor() {
  return color(fxrand() * 255, fxrand() * 255, fxrand() * 255);
}

function getNormalizedColorMaskColor(sourceImage,x,y)
{
  if (sourceImage == null) return color(100+fxrand() * 155);

  
  var r = Math.sqrt((x * x) + (y * y));
  var a = Math.atan2(x, y) + radians(randomRotation) + radians(randomRotation);
  x = r * cos(a);
  y = r * sin(a);
  

  var xP = map(x, 0, boxGridX, 0, sourceImage.width);
  var yP = map(y, 0, boxGridY, 0, sourceImage.height);


  var c = sourceImage.get(xP, yP);
  return c;
}

function getColorMaskColor(sourceImage, x, y) {
  if (sourceImage == null) return color(100+fxrand() * 155);

  x -= wD / 2;
  y -= hD / 2;

  var r = Math.sqrt((x * x) + (y * y));
  var a = Math.atan2(x, y) + radians(randomRotation) + radians(randomRotation);
  
  x = r * cos(a) + wD / 2;
  y = r * sin(a) + hD / 2;

  var xP = map(x, 0, wD, 1, sourceImage.width-2);
  var yP = map(y, 0, hD, 1, sourceImage.height-2);

  return sourceImage.get(xP, yP);
}

function getStaticColorMaskColor(sourceImage, x, y) {
  if (sourceImage == null) return color(100+fxrand() * 155);
  var dynamicPadding = 10*screenRatioAdjustment;
  x = Math.min(wD-dynamicPadding,Math.max(dynamicPadding,x));
  y = Math.min(hD-dynamicPadding,Math.max(dynamicPadding,y));

  x -= wD / 2;
  y -= hD / 2;

  var r = Math.sqrt((x * x) + (y * y));
  var a = Math.atan2(x, y) + radians(randomRotation);

  x = r * cos(a) + wD / 2;
  y = r * sin(a) + hD / 2;

  var xP = map(x, 0, wD, 0, sourceImage.width);
  var yP = map(y, 0, hD, 0, sourceImage.height);

  return sourceImage.get(xP, yP);
}

function mouseClicked()
{

 /*  if(isPlaying == false)
  {
    var pO = millis()-pauseTime;
    playOffset += pO;
  }
  isPlaying = !isPlaying;
  if(isPlaying == false)
  {
    pauseTime = millis();
  } */
}


function keyTyped() {
  if(key == 'd')
  {
    console.log("D");
    pixelDens = (pixelDens == initialPixelDens) ? 4*initialPixelDens : initialPixelDens;
  }

  if(key == 'f')
  {
    var f = (FPS == 60) ? 24 : 60;
    frameRate(f);
    FPS = f;
  }
}

function touchMoved() {
  return;
}
