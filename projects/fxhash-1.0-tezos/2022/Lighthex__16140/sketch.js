var stopAfterFirstFrame = false;
var godRayWeight = 0;
var playing = true;
var elapsed = 0;
var instantPlot = true;
var autoIterate = true;
var mainCanvas;
/*Size & Dimensions*/
var pixDens = 2;
var noiseTime = 0;
var noiseOffsetSpeed = 1;
var pD = 1;
var paddingLeft = 0;
var paddingTop = 0;
var isSquare = false;
var outterPadding = 0;
var capture = false;
var plottableView = false;

var created = false;

var wD = 400;
var hD = 400;
var size = 400;

var screenRatioW = 1;
var screenRatioH = 1;
var screenRatioAdjustment = 1;

var currentSeed = 0;

/*Colors*/
var bgColor = 200;
var lightThreshold = 0.5;


/*Loop Parameters*/
var FPS = 60;

var pressed = false;
var milliTimeout = 10;

var strokeWidth = 5;
var plotterStrokeWidth = 1;
var mergeIterations = 1;

var horizontalCellCount = 1;
var verticalCellCount = 1;

var verticalSpeed = 1;
var horizontalSpeed = 1;

var fadeColors = false;


var DEBUG = false;

var mX = 0;
var mXBefore = 0;
var mXDelta = 0;
var mY = 0;
var mYBefore = 0;
var mYDelta = 0;


var scrollSpeedX = 0.1;
var scrollSpeedY = 0.1;

var dynColors;

var grid;

/**
 * Capture HighRes
 */
 var readyForCapture = false;
 var finallyReadyForCapture = false;
 var minCaptureDelta = 1;
 var captureTime = -100;
 var snapIteration = 0;

function getNoise(x, y) {
  return noise(x + randomNoiseOffsetX, y + randomNoiseOffsetY);
}


function setupColors() {
  dynColors = [];

  let baseHue = fxrand() * 360;
  let shift = fxrand() * 60;
  let shades = 2 + Math.round(fxrand() * 4);

  if(fxrand() < 0.98)
  {
    dynColors.push(HSLToRGB(Math.round(baseHue), 95, 50));
    for (var i = 0; i < shades; i++) {
      let sat = 60 + fxrand() * 40;
      let lum = 40 + fxrand() * 40;
      let h = baseHue + shift * i;
      if (h > 360) h -= 360;

      var c = HSLToRGB(h, sat, lum);
      dynColors.push(c);
    }
  } else {
    for (var i = 0; i < shades; i++) {
      let sat = 0;
      let lum = 10 + fxrand() * 70;
      let h = baseHue + shift * i;
      if (h > 360) h -= 360;

      var c = HSLToRGB(h, sat, lum);
      dynColors.push(c);
    }
  }
}


function doCapture()
{

  var svgData = mainCanvas.svg.outerHTML;
  var svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = "download.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  capture = false;
}


function fetchWeb() {
  const plot = new URLSearchParams(window.location.search).get('plot');
  if (plot) {
    let pl = parseInt(plot);
    plottableView = pl > 0;
    instantPlot = pl > 0;
  }

  const instant = new URLSearchParams(window.location.search).get('instant');
  if (instant) {
    let ins = parseInt(instant);
    instantPlot = ins > 0;
  }
  
  const play = new URLSearchParams(window.location.search).get('play');
  if (play) {
    let playit = parseInt(play);
    stopAfterFirstFrame = !(playit > 0);
  }

  
}

function setup() {

  
  pD = pixelDensity();
 

  frameRate(FPS);
  pixelDensity(pixDens)
  colorMode(RGB, 255, 255, 255, 255);
  noiseDetail(1.5, 1.1);

  setupEffects();
  

  makeCanvas();
  iniShapeGrid();
}


function draw() {

  if(playing)
  {
    elapsed += 1/FPS;
  }

  if(plottableView)
  {
    let lenlen = 3;

    stroke(0)
    strokeWeight(plotterStrokeWidth * screenRatioAdjustment);
    
    line(0,0,lenlen,lenlen);
    line(wD,0,wD-lenlen,lenlen);
    line(0,hD,lenlen,hD-lenlen);
    line(wD,hD,wD-lenlen,hD-lenlen);
  }

  scrollSpeedX += 1;
  scrollSpeedY += 1;


  mXBefore = mX;
  mYBefore = mY;

  mX = mouseX;
  mY = hD + mouseY;

  mXDelta = mX - mXBefore;
  mYDelta = mY - mYBefore;

  if (!plottableView) {
    background(bgColor);
  } else {

    if(!capture) clear();
  }

  noiseTime += noiseOffsetSpeed;

  mouseXBefore = mouseX;
  mouseYBefore = mouseY;
  
  if(!capture) 
  {
    if(instantPlot)
    {
      grid.instantPlot();
    } else {
      if(autoIterate) grid.iterateConstruct();
    }
    grid.draw();
  } else {
    doCapture();
  }

  


  //Draw nothing after this, in case it needs to take a screenshot 
  if (finallyReadyForCapture && elapsed > captureTime + minCaptureDelta) {
    readyForCapture = false;
    finallyReadyForCapture = false;
    captureTime = elapsed;
    saveCanvas(p5.prototype.__info.merger.gl.canvas,"Lighthex_" + snapIteration, "png");
    /* var image = mainCanvas.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image; */
    snapIteration++;
  }
  
  if(readyForCapture)
  {
    console.log("Capturing");
    finallyReadyForCapture = true;
  }

  if(stopAfterFirstFrame)
  {
    stopAfterFirstFrame = false;
    playing = false;
    if(isFxpreview)
    {
      fxpreview();
    }
  }
}


function iniShapeGrid() {
  grid = new Grid(horizontalCellCount, verticalCellCount);
  isLoading = false;
}



function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function makeCanvas() {
  if (created) {
    mainCanvas.remove();
  } 

  if(plottableView)
  {
    mainCanvas = createCanvas(wD, hD,SVG)
  } else {
    mainCanvas = createCanvas(wD, hD)
  }
}





function windowResized() {
  setDefaultVars();
  fxrand = sfc32(...hashes)
  randomizeParameters();
  
  makeCanvas();
  iniShapeGrid();
  resetEffects();
}

function resetEffects() {
  if(!plottableView)
  {
    clearEffects();
    setupEffects();
  }
}

function setupEffects() {
  
  if(!created && !plottableView)
  {
    addChannels(null);
    addChannels(null);
  }

  //0.003+0.02
  if (!plottableView) {
    addEffects(
      bloom(lightThreshold, 1, 1, 1.3),  //threshold, horizontal, vertical, boost, samplerNum, taps, reps
      godrays({ samplerNum: -1, density: 0.5, weight: godRayWeight, decay: 1 }),
    );
    addEffects(
      vignette(0.1, 3, 9),
    );
  }
}

function getRandomPaletteColor(x, y) {
  let n = Math.round(noise(x, y) * (dynColors.length - 0.8));
  return dynColors[n];

}

function mouseClicked()
{
  playing = !playing;
}

function touchStarted()
{
  if(touches.length == 2)
  {
    setHighQuality(1,true);
    windowResized();
    readyForCapture = true;
  }

  if(touches.length == 3)
  {
    instantPlot = !instantPlot;
    windowResized();
  }
}

function keyPressed()
{
  if (keyCode == 32) {
    playing = !playing;
  }

}

function keyTyped() {
  
  
  if(plottableView && key == 'p')
  {
    capture = true;
  }

  if (key == '1' || key == 's') {
    playing = true;
    setHighQuality(1,true);
    windowResized();
    readyForCapture = true;
  }
  
  if (key == '2') {
    playing = true;
    setHighQuality(2,true);
    windowResized();
    readyForCapture = true;
  }
  
  if (key == '3') {
    playing = true;
    setHighQuality(3,true);
    windowResized();
    readyForCapture = true;
  }
  
  if (key == '4') {
    playing = true;
    setHighQuality(4,true);
    windowResized();
    readyForCapture = true;
  }
  
  if (key == '5') {
    playing = true;
    setHighQuality(5,true);
    windowResized();
    readyForCapture = true;
  }

  if(key == 'i')
  {
    instantPlot = !instantPlot;
    windowResized();
  }

}


function setStandardQuality() {
  pixelDensity(pixDens);
}

function setHighQuality(factor) {
  pixelDensity(pixDens * factor);
}

function getUsedColors()
{
  let res = [];
  for(c of dynColors)
  {
    let hslC = RGBToHSL(c);
    let reducedCol = getReducedColor(hslC.h*360,hslC.s*100)
    if(res.indexOf(reducedCol) < 0)
    {
      res.push(reducedCol);
    }
  }
  let resString = [];
  for(r of res)
  {
    resString += r;
  }

  return resString;
}

const colorDefinitions = [
  { deg: 0, res: "🔴" },
  { deg: 5, res: "🟠" },
  { deg: 25, res: "🟠" },
  { deg: 48, res: "🟡" },
  { deg: 112, res: "🟢" },
  { deg: 210, res: "🔵" },
  { deg: 260, res: "🔵" },
  { deg: 280, res: "🟣" },
  { deg: 310, res: "🟣" },
  { deg: 340, res: "🔴" },
  { deg: 360, res: "🔴" },
];

const getReducedColor = (h, s) => {
  if(s <= 0) return "⚪️";
  var currentIndex = 0;
  var delta = 999
  for (var i = 0; i < colorDefinitions.length; i++) {
    var tempDelta1 = Math.abs(h - colorDefinitions[i].deg);

    if (tempDelta1 > 180) {
      tempDelta1 = 360 - tempDelta1;
    }

    if (tempDelta1 < delta) {
      delta = tempDelta1
      currentIndex = i;
    } else if (tempDelta1 == delta) {
      var tempDelta2 = Math.abs(s - colorDefinitions[currentIndex].sat);
      var tempDelta3 = Math.abs(s - colorDefinitions[i].sat);

      if (tempDelta2 > tempDelta3) {
        currentIndex = i;
      }
    }
  }

  return colorDefinitions[currentIndex].res;
}
