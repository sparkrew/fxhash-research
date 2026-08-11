const SCALE = 1;
const SIZE = 2160;
const MARGIN = 16;
const GW = 800;
const GH = 1200;
const PPF = 50;

const LENGTH = 1000;

let gx;
let seed = 0;
let time = 0;
let grid = [];
let paths = [];
let currentLine = 0;
let noiseTexture;

let selectedOptions;
let renderParameter;
let algoParameter;

let renderParameters = {
  "black": { color: [0, 0, 0], background: 255, noisestrength: 0.999999, blendmode: "ADD" },
  "invert": { color: [255, 255, 255], background: 0, noisestrength: 0.9, blendmode: "MULTIPLY" },
  "red": { color: [209, 16, 70], background: 255, noisestrength: 0.95, blendmode: "SCREEN" },
  "blue": { color: [58, 12, 163], background: 255, noisestrength: 0.95, blendmode: "SCREEN" },
};

let algoParameters = [
  { noisescale: [0.0026,  0.0026], amounts: [30000, 40000] },
  { noisescale: [0.0073,   0.003], amounts: [30000, 40000] },
  { noisescale: [ 0.002,  0.0065], amounts: [30000, 40000] },
  { noisescale: [0.0021,  0.0013], amounts: [15000, 30000] },
  { noisescale: [0.0007,  0.0019], amounts: [15000, 30000] },
  { noisescale: [ 0.001,   0.001], amounts: [20000, 35000] },
  { noisescale: [ 0.001,   0.003], amounts: [20000, 35000] },
  { noisescale: [0.0003,   0.002], amounts: [20000, 35000] },
  { noisescale: [ 0.002,  0.0009], amounts: [20000, 40000] },
  { noisescale: [-0.002,  0.0005], amounts: [20000, 40000] },
];

function getRandomRenderParameters() {
  const rc = fxrand();
  let renderParameters;
  if (rc<3/100) {
    renderParameters = "invert";
  } else if (rc<6/50) {
    renderParameters = "red";
  } else if (rc<11/50) {
    renderParameters = "blue";
  } else {
    renderParameters = "black";
  }
  return renderParameters;
}


function setup() {
  const renderParameterKey = getRandomRenderParameters();
  const algoParameterKey = Math.floor(fxrand()*algoParameters.length);

  renderParameter = renderParameters[renderParameterKey];
  algoParameter = algoParameters[algoParameterKey];

  const pathsAmount = Math.round(fxrand() * (algoParameter.amounts[1] - algoParameter.amounts[0]) + algoParameter.amounts[0]);

  const size = Math.min(windowWidth, windowHeight);
  const canvas = createCanvas(size, size);
  canvas.id('maincanvas');
  canvas.background(renderParameter.background);

  gx = createGraphics(SIZE, SIZE);

  noiseTexture = createNoiseTexture(gx, {
    width: SIZE*2,
    height: SIZE*2,
    strength: renderParameter.noisestrength
  });
  
  seed = int(fxrand() * 100000);
  gx.noiseSeed(seed);

  grid = createGrid(GW, GH, algoParameter.noisescale);
  paths = createPaths(grid, pathsAmount, GW, GH);

  window.$fxhashFeatures = {
    variation: algoParameterKey,
    color: renderParameterKey
  };
}


function draw() {
  time += 1;

  gx.clear();
  gx.strokeWeight(1);

  gx.stroke(...renderParameter.color);
  renderPaths(gx, paths, GW, GH, time);

  // write buffer to screen
  const size = Math.min(width, height);
  image(gx, MARGIN, MARGIN, size-MARGIN*2, size-MARGIN*2);
  
  
  if (time*PPF+PPF > paths.length) {
    blend(noiseTexture, 0, 0, noiseTexture.width, noiseTexture.height, 0, 0, width, height,
      renderParameter.blendmode==="ADD"?ADD:(renderParameter.blendmode==="MULTIPLY"?MULTIPLY:SCREEN));
    fxpreview();
    noLoop();
  }
}
