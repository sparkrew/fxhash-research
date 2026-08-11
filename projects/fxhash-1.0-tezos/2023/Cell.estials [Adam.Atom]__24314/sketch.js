/*
"Cell.estials: Adam Atom"

"Human beings are members of a whole, In creation of one essence and soul."
Saadi Shīrāzī, 14 A.D.

Authored by Pedram Sadegh-Beyki [PiTHEOREM]
Social Media Handle: @pitheorem
Website: pitheorem.xyz

Jan 2023

*****************************************************************************
Generated Artworks License: NFT License 2.0 (https://www.nftlicense.org/)
Code license: MIT license
Included Library: p5grain (by meezwhite, Gorilla Sun)

DESCRIPTION *******************************************************************************
Each piece represents a celestial cell - a microcosm consisting of a single atom (soul) at center
surrounded by thousands of atoms (body) - that manifests a subtle order within its center that turns into chaos around borders.
Outside of each cell there is a world. a macrocosm where all other cells exist.

CONTROLS *******************************************************************************
Press [i] to unhide/hide the poem text
Press [o] to change the text color
Press [p] to change the text position [Bottom | Top]

Press [+] to increase the dot size
Press [-] to decrease the dot size
Press [0] to reset the dot size to default

Press [r] to switch between various canvas ratios [Square | Landscape | Portrait]
Press [1] to export in 1x resolution [1280x1280 | 1280x720 | 960x1280]
Press [2] to export in 1.5x resolution [1920x1920 | 1920x1080 | 1440x1920]
Press [3] to export in 2x resolution [2560x2560 | 2560x1440 | 1920x2560]
Press [4] to export in 3x resolution [3840x3840 | 3840x2160 | 2880x3840]
Press [5] to export in 4x resolution [5120x5120 | 5120x2880 | 3840x5120]
Press [6] to export in 5x resolution [6400x6400 | 6400x3600 | 4800x6400]
Press [s] to export in current scale

* Rendering takes longer as resolution increases
*/
//**************************************************************************************

let prefix = "CellestialsAA_";
let canvas = []; let canvasScale = 0; let canvasType = 0; let canvasRatio=1;
let ratioList = [[1280,720,960],[1920,1080,1440],[2560,1440,1920],[3840,2160,2880],[5120,2880,3840],[6400,3600,4800]];
let voidSize = .2;
let coreMin = .01;
let cellb = .04;
let cellSize = .375;
let bSize = .35;
let bWidth = .04;
let sizeRatio = .004;
let s1 = 4, a1 = 15;
let s2 = 2, a2 = 20;
let s3 = 1, a3 = 40;
let margin = .02;
let light = 255;
let rendered = false; let showText = false;
let txtPos=0;let txtPosList = [0,.025,.05,0,.025,.05];
let txtSize = 0; let txtSizeList=[.8,1,1.2,1.4,.8,1,1.2,1.4];
let txtLook=0; let txtLookList = [50,100,150,light];

let coreType_ = {0:"TETRA", 1:"PENTA",2:"HEXA",3:"HEPTA", 4:"OCTA", 5:"NONA", 6:"DECA", 7:"DODECA"};
let coreCount = [4, 5, 6, 7, 8, 9, 10, 12];
let coreWeights = [4, 3, 5, 1, 7, 5, 5, 3];
let rot = {TETRA: .125, PENTA: .05, HEXA: 0, HEPTA: .041,  OCTA: 0, NONA:0, DECA:0, DODECA:0};
let nums = {
  TETRA: [ [4,16,4,8], [4,4,8,16], [4,8,16,4] ],
  PENTA: [ [5, 10, 5, 10] , [5, 5, 10, 10]],
  HEXA: [ [6, 6, 12, 6], [6,12,6,6]],
  HEPTA: [ [7, 7, 7, 7] ],
  OCTA: [ [8,32,8] , [8,8,4,8]],
  NONA: [ [9, 18, 9] ],
  DECA: [[10,20,10]],
  DODECA: [[12,12,12]],
};

let palettes =
{
  "Golden" : ["#271f01","#b38b00","#ffc700","#ffc700","#ffe380","#ffe380","#fff1bf"],
  "Emerald": ["#022514","#025e48","#038666","#038651","#04BF45",'#82ffcd',"#c1fff7"],
  "Mercury" : ["#1a1a24", "#242848", "#2c376f","#4c538d","#7d7ea2","#acabb6","#Ececf5"],
  "Venus" : ["#250120","#80276e", "#e52ebb","#fc5fd2","#fa88d8","#f3a7db", "#dfb3d8" ],
  "Solar": ["#331b04","#b45600","#e71d00","#E74900","#f48600","#dab51f","#fbe273"],
  "Lunar" : ["#252525","#333333","#555560","#555555","#999999", "#AAAAB0","#FFFFFF"],
  "Sorkh": ["#30161b","#6a202f","#aa2344","#d44b64","#de8692","#e1bac2"],
  "Viola" : ["#2b052a","#2b1145","#241e62","#614f9d","#a179bb","#e0a6d9"],
  "Ocean" : ['#112030','#0F4C75','#00587d','#00B7C2',"#2190e3","#6caddf","#36c4b8","#39d8c3","#8cd9ff","#d7d9d4"],
  "Heavens": ["#0a182b","#265999","#4488BF","#3a9efd","#9de2ff", "#ffffff","#ffc700","#FFCC24","#3a9efd"],
  "Citrine" : ["#200f05","#62260f","#ad3c0d","#ff5100","#ff8745","#ffb579","#fce1ae"],
  "RainForest" : ['#03290f','#027741','#187731','#519259', "#F2D6B3","#FFDDAA",'#F0BB62',"#A66038",'#A66038',"#6E2D08"],
  "Hormoz" : ["#180514","#06427b","#3a9efd","#A66038",'#D97925','#E5A800', '#D9D2B0','#BF1523','#BF1523','#A60D29'],
  "Persia" : ["#04133E","#063069","#2A878C","#00ABFF",'#Fff2c5',"#FB8637", '#FBBD5F',"#FF7800","#FF4800"],
  "Aquarius" : ['#112030',"#1d475f","#2A54DB", "#276589","#5B9FF6","#009fff",'#3B929E',"#bd1ef2","#ec4ef4", "#FFBDE6","#fbf9f9"],
  "Chloris" : ["#202422","#005594","#8f16d6","#f24475","#fba30b","#c1d68a","#c8e6db"],
};

const paletteKeys = Object.keys(palettes);
let thresh = [
  [0.1, 0.4],
  [0.31, 0.7],
  [0.61, 1.1],
  [1.01, 1.33],
  [1.34, 1.66],
];
let txt = ['"Human beings are members of a whole, in creation of one essence and soul"',"Saadi Shirazi - 13.AD"];

let paletteKey, nm, wMin, wMax, cp, ds, polyMax, sw, bColoring, cColoring;
let coreIndex, coreType, coreVoid, coreVoid_, outerVoid, nMlt, cCycle,cDisMlt,cAngFX,cDisFX;
let wCount, wDensity,wDensity_, intraDensity,intraDensity_, intraCount, intraSpace;
let bSize_, bWidth_, bCount, bCycle, bDensity, bDensity_,bOffset, bDisFX, bAngFX, bDisMlt;
let pols = [], pts = [], lens = [], rots = [], bRads = [], iRads=[], iAngs = [], wPos = [], rands = [];
let mainLayer, dotsLayer,bLayer,blurLayer,textLayer,renderLayer;

function randNum(in_min, in_max)
{
  return(map(fxrand(),0,1,in_min, in_max));
}

function randInt(in_min, in_max)
{
  return(round(randNum(in_min, in_max)));
}

function chooseCore() {
  let sum = 0;
  for(let i = 0; i < coreWeights.length; i++) {
   sum += coreWeights[i]
  }
  let r = randInt(0,sum-1);
  for( let i = 0; i < coreWeights.length; i++){
    let w = coreWeights[i];
    if(w >= r) {
      return i;
    }
    r -= w;
  }
}

function chooseLen(in_min, in_max, in_check)
{
  let result = randNum(in_min, in_max);
  while(result-in_check <.02)
  {
    result = randNum(in_min, in_max);
  }
  return result;
}

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);
  let winSize = min(window.innerWidth, window.innerHeight);
  canvas = [winSize,winSize];
  createCanvas(canvas[0],canvas[1]);
  p5grain.setup({ random: fxrand });
  genValues();
  cook();
}

function genValues(){
  coreIndex = chooseCore();
  coreType = coreType_[coreIndex];

  bSize_ = randInt(0,100);
  bSize_ = bSize_<15 ? 0 : bSize_>70 ? 2 : 1;
  bSize = bSize_==0? randNum(.15,.225) : bSize_==1 ? randNum(.275,.33) : randNum(.37,.4);

  cellSize_ = randInt(0,100);
  cellSize_ = cellSize_<15 ? 0 : cellSize_>60 ? 2 : 1;
  cellSize = bSize * (cellSize_==0? randNum(.35,.42) : cellSize_==1 ? randNum(.485,.65) : randNum(.725,.85));

  intraSpace = bSize-cellSize;
  coreVoid = randInt(0,100);
  coreVoid = coreVoid<40 ? 0 : coreVoid<60 ? 1 : coreVoid<90 ? 2 : 3;

  voidSize = coreVoid==0? coreMin : coreVoid==1? randNum(coreMin,cellSize*.15) : coreVoid==2? randNum(cellSize*.25,cellSize*.35) : randNum(cellSize*.45,cellSize*.6);
  outerVoid = bSize + randNum(0,.375-bSize);

  bDensity_ = randInt(0,100);
  bDensity_ = bDensity_<20 ? 0 : bDensity_<80 ? 1 : 2;
  bDensity = (bDensity_==0?randNum(.85,1.25):bDensity_==1?randNum(1.66,2):randNum(2.5,4));

  bWidth_ = randInt(0,100);
  bWidth_ = bWidth_==0 ? 0 : bWidth_<40 ? 1 : bWidth_<85 ? 2 : 3;
  bWidth = intraSpace* (bWidth_==0? 0 : bWidth_==1? randNum(.01,.05) : bWidth_==2? randNum(.1,.2): randNum(.25,.35));

  bCount = 2*PI*bSize*100*bDensity;
  if(bDensity_==2 && bWidth_==3)
  {
    bCount *= randNum(1.5,2);
  }

  let worldSpace = 1-bSize;
  wDensity_ = randInt(0,100);
  wDensity_ = wDensity_<40 ? 0 : wDensity_>90 ? 2 : 1;
  wCount = worldSpace * (wDensity_==0? randInt(0,100) : wDensity_==2 ? randInt(1000,2000) : randInt(200,350));

  intraSpace = bSize*bSize*PI-cellSize*cellSize*PI;

  intraDensity_ = randInt(0,100);
  intraDensity_ = intraDensity_==0 ? 0 : intraDensity_<40 ? 1 : intraDensity_>90 ? 3 : 2;
  intraCount = intraSpace* (intraDensity_==0? 0 : intraDensity_==1 ? randInt(50,300) : intraDensity_==2 ? randInt(700,2000) : randInt(5000,10000));

  nMlt = randInt(1,64)*2;

  let cAngdis = randInt(0,100);
  if(cAngdis<3)
  { cAngFX=0;
    cDisFX=0;
    cColoring = 0;
  }else if(cAngdis<50)
  { cAngFX=1;
    cDisFX=1;
    cColoring = 1;
  }else if(cAngdis<80)
  { cAngFX=1;
    cDisFX=0;
    cColoring = 2;
  }else {
    cAngFX=0;
    cDisFX=1;
    cColoring = 3;
  }

  let bAngdis = randInt(0,100);
  if(bAngdis<35)
  { bAngFX=0;
    bDisFX=0;
    bColoring = 0;
  }else if(bAngdis<60)
  { bAngFX=1;
    bDisFX=1;
    bColoring=1;
  }else if(bAngdis<70)
  { bAngFX=1;
    bDisFX=0;
    bColoring=2;
  }else {
    bAngFX=0;
    bDisFX=1;
    bColoring=3;
  }

  cDisMlt = randInt(0,100)<30 ? randNum(.5,4) : randInt(4,32);
  bDisMlt = randInt(0,100)<30 ? randNum(.2,2) : randInt(2,16);
  cOffset = randNum(0,TWO_PI);
  bOffset = randNum(0,TWO_PI);
  cCycle = coreCount[coreIndex]*randInt(1,8);
  bCycle = coreCount[coreIndex]*randInt(4,16);

  paletteKey = paletteKeys[randInt(0,paletteKeys.length-1)];
  palette = palettes[paletteKey];

  for(let i=0; i<thresh.length; i++)
  {
    lens[i] = chooseLen(thresh[i][0], thresh[i][1],i==0?0:lens[i-1]);
    rots[i] = rot[coreType] * randInt((coreIndex==2)?1:0,1);
  }

  nm = nums[coreType][randInt(0,nums[coreType].length-1)];

  for (let i = 0; i < bCount; i++) {
    bRads[i] = bSize-randNum(0,bWidth);
  }

  for (let i = 0; i < intraCount; i++) {
    iRads[i] = randNum(cellSize,(bSize-bWidth));
    iAngs[i] = randNum(0,TWO_PI);
  }

  let w = 0;
  while(w<wCount)
  {
    let wx = randNum(-1,1);
    let wy = randNum(-1,1);
    let wd = dist(wx, wy, 0, 0);
    if(wd>outerVoid)
    {
      wPos[w] = createVector(wx,wy);
      w++;
    }
  }

}

function cook(){

  rendered = false;
  wMin = Math.min(canvas[0],canvas[1]);
  wMax = Math.max(canvas[0],canvas[1]);
  ds = wMin * sizeRatio;
  sw = ds*.5;

  polyMax = wMin / 6;
  cp = createVector(canvas[0] / 2, canvas[1] / 2);
  mainLayer = createGraphics(canvas[0], canvas[1])
  dotsLayer = createGraphics(canvas[0], canvas[1]);
  bLayer = createGraphics(canvas[0], canvas[1]);
  blurLayer = createGraphics(canvas[0], canvas[1]);
  textLayer = createGraphics(canvas[0], canvas[1]);
  renderLayer = createGraphics(canvas[0],canvas[1]);
  dotsLayer.noStroke();
  bLayer.noStroke();
  blurLayer.noStroke();
  textLayer.noStroke();
  dotsLayer.blendMode(LIGHTEST);
  bLayer.blendMode(LIGHTEST);
  blurLayer.blendMode(LIGHTEST);
  mainLayer.blendMode(ADD);


  pts = [];
  pols = [];
  pols[0] = poly(cp, lens[0], rots[0], nm[0]);
  for (let i = 0; i < pols[0].length; i++) {
    pols[1] = poly(pols[0][i], lens[1], rots[1], nm[1]);
    for (let j = 0; j < pols[1].length; j++) {
      pols[2] = poly(pols[1][j], lens[2], rots[2], nm[2]);
      for (let k = 0; k < pols[2].length; k++) {
        pols[3] = poly(pols[2][k], lens[3], rots[3], nm[3]);
        if (nm.length > 4) {
          for (let l = 0; l < pols[3].length; l++) {
            pols[4] = poly(pols[3][l],lens[4],rots[4],nm[4]);
          }
        }

      }
    }
  }


  let newPts = [];
  let maxDis = 0;

  for (let i = 0; i < pts.length; i++) {
    let x = pts[i].x;
    let y = pts[i].y;

    let dis = dist(x, y, cp.x, cp.y)/wMin;
    let ang = atan2(y - cp.y, x - cp.x);

    if (dis>voidSize && dis < cellSize)
    {
      if(dis>maxDis)
      {
        maxDis = dis;
      }
      newPts.push(pts[i]);
      rands.push(randNum(0,1));
    }
  }

  pts = newPts;

  //
  for (let i = 0; i < intraCount; i++) {
    let rad = iRads[i]*wMin;
    let pos = p5.Vector.fromAngle((float(i) / intraCount) * TWO_PI+iAngs[i]*2, rad);
    let xx = pos.x+cp.x;
    let yy = pos.y+cp.y;
    pts.push(createVector(xx,yy, 1));
    rands.push(randNum(0,1));
  }


  for (let i = 0; i < bCount; i++) {
    let rad = bRads[i]*wMin;
    let xPos =
      cp.x + cos((float(i) / bCount) * TWO_PI) * rad;
    let yPos =
      cp.y + sin((float(i) / bCount) * TWO_PI) * rad;
    pts.push(createVector(xPos, yPos, 1));
    rands.push(randNum(0,1));

    if(bWidth>.025 && i>0 && i<bCount-1)
    {
      xPos = cp.x + sin((float(i) / bCount) * TWO_PI) * bRads[i-1]*wMin;
      yPos = cp.y + cos((float(i) / bCount) * TWO_PI) * bRads[i+1]*wMin;
      pts.push(createVector(xPos, yPos, 1));
      rands.push(randNum(0,1));
    }
  }


  for (let i = 0; i < wCount; i++) {
    let pos = wPos[i];
    let xx = pos.x*wMin+cp.x;
    let yy = pos.y*wMin+cp.y;
    pts.push(createVector(xx,yy, 2));
    rands.push(randNum(0,1));

  }

  window.$fxhashFeatures = {
    "Cell Type": coreType,
    "Core Size": maxDis<bSize*.35 ? "Small" : (maxDis>bSize*.65 ? "Big" : "Medium"),
    "Pupil Size": coreVoid<2? "Small" : coreVoid==3? "Big" : "Medium",
    "Border Size": bSize_==0 ? "Small" : bSize_==2 ? "Big" : "Medium",
    "Border Type" : bWidth_==0 ? "None" : bWidth_==1 ? "Thin" : "Thick",
    "Border Density" : bDensity_==0 ? "Low" : bDensity_==2 ? "High" : "Medium",
    "Intraborder Density" : intraDensity_==0 ? "None" : intraDensity_==1 ? "Low" : intraDensity_==2 ? "Medium" : "High",
    "World Density":  wDensity_==2 ? "High" :  wDensity_==0 ? (wCount==0 ? "None" : "Low") : "Medium",
    "Color Palette": paletteKey,
    "Core Coloring" : cColoring==0 ? "Monochrome" : cColoring==3 ? "Circular" : cColoring==2? "Radial" : "Polychrome",
    "Intraborder Coloring" : bColoring==0 ? "Monochrome" : bColoring==3 ? "Circular" : bColoring==2? "Radial" : "Polychrome",
  }
}

function canvasResize(in_id)
{
  if(canvasType==0)
  { canvas = [ratioList[in_id][0],ratioList[in_id][0]];
  }else if(canvasType==1)
  { canvas = [ratioList[in_id][0],ratioList[in_id][1]];
  }else
  { canvas = [ratioList[in_id][2],ratioList[in_id][0]];
  }
  canvasRatio = canvas[1]/canvas[0];
  resizeCanvas(canvas[0],canvas[1]);
  cook();
  loop();
}

function render(in_canvas) {
   renderLayer.image(mainLayer,0,0);
   if(showText) renderLayer.image(textLayer,0,0);
   saveCanvas(renderLayer,prefix + "_" + in_canvas[0] + 'x' + in_canvas[1] +'_'+str(fxhash), 'png');
}

function keyPressed() {
  switch(key)
  {
    case '1' : canvasScale=0; canvasResize(canvasScale); render(canvas); break;
    case '2' : canvasScale=1; canvasResize(canvasScale); render(canvas); break;
    case '3' : canvasScale=2; canvasResize(canvasScale); render(canvas); break;
    case '4' : canvasScale=3; canvasResize(canvasScale); render(canvas); break;
    case '5' : canvasScale=4; canvasResize(canvasScale); render(canvas); break;
    case '6' : canvasScale=5; canvasResize(canvasScale); render(canvas); break;
    case 'r' : canvasType = canvasType<2 ? canvasType+1 : 0; canvasResize(canvasScale); break;
    case 't' : showText = !showText; loop(); break;
    case 'i' : txtSize = txtSize<(txtSizeList.length-1) ? txtSize+1 : 0; loop(); break;
    case 'o' : txtLook = txtLook<((txtLookList.length-1)+palette.length-1) ? txtLook+1 : 0; loop(); break;
    case 'p' : txtPos = txtPos<(txtPosList.length-1) ? txtPos+1 : 0; loop(); break;
    case 's' : render(canvas); break;
    case '+' : sizeRatio += .0005; cook(); loop(); break;
    case '-' : if(sizeRatio>.001){sizeRatio -= .0005; cook(); loop();} break;
    case '0' : sizeRatio = .004; cook(); loop(); break;
  }
}


function draw() {
  clear();

  if(!rendered)
  {
    mainLayer.clear();
    blurLayer.fill(palette[0]);
    blurLayer.circle(cp.x,cp.y,bSize*wMin*2);
    for (let i = 0; i < pts.length; i++)
    {
      let x = pts[i].x;
      let y = pts[i].y;
      let z = pts[i].z;
      let ang = atan2(y - cp.y, x - cp.x);
      let dis = dist(x, y, cp.x, cp.y)/wMin;
      let s = map(sin(ang*cCycle*16+dis*TWO_PI),-1,1,1,(z<2)?1.66:1.35);
      let n = cos(dis*TWO_PI*nMlt);
      let l = s*ds*map(sin(dis*TWO_PI*cCycle),-1,1,.25,2);
      let cc = sin(ang*cCycle*cAngFX+dis*TWO_PI*cDisMlt*cDisFX+cOffset);
      let cID = floor(map(cc, -1, 1, 1, palette.length));
      let col = color(palette[cID]);

      if(z==0)
      {
        drawPoint(dotsLayer,x, y, s*ds, col, 200);
        if(dis<cellSize-(rands[i]*cellSize*.25))
        {
          let xx = cp.x-(x-cp.x);
          drawPoint(dotsLayer,xx, y, s*ds, col, 200);
        }
      }else if(z==1)
      {
        cID = floor(map(sin((ang*bAngFX*bCycle+dis*TWO_PI*bDisMlt*bDisFX+bOffset)), -1, 1, 1, palette.length ));
        let bd = constrain(map(dis,bSize-bWidth,bSize,0,1),0,1);
        col = lerpColor(color(palette[cID]),color(light),bd*1.66);
        drawPoint(bLayer,x, y, s*ds*map(bd,0,1,.9,.5), col, 255);
      }else{

        let l = s * ds * map(rands[i],0,1,.4,.8);
        let lm = rands[i]*.15;
        col = color(light*map(rands[i],0,1,.4,.8));
        let al = (x>margin*wMin && x<canvas[0]-margin*wMin && y>margin*wMin && y<canvas[1]-margin*wMin)?255:0;
        drawPoint(bLayer,x, y, l, col, 200);
      }
    }

    drawPoint(dotsLayer, cp.x, cp.y, ds*1.4, color(light), 255);

    mainLayer.background(20);
    blurLayer.filter(BLUR, 1.5*wMin/640);
    mainLayer.tint(255,60);
    mainLayer.image(blurLayer, 0, 0);
    blurLayer.filter(BLUR, 3*wMin/640);
    mainLayer.tint(255,30);
    mainLayer.image(blurLayer, 0, 0);
    mainLayer.tint(255,255);
    mainLayer.image(dotsLayer, 0, 0);
    mainLayer.image(bLayer, 0, 0);
    mainLayer.granulateSimple(3);
    rendered = true;
  }
  image(mainLayer,0,0);

  fxpreview();

  if(showText)
  {
    textLayer.clear();
    let textSize = wMin*.0125*txtSizeList[txtSize];
    textLayer.textFont('Helvetica');
    textLayer.textSize(textSize);
    textLayer.textAlign(CENTER,CENTER);
    if(txtLook<txtLookList.length)
    { textLayer.fill(255,txtLookList[txtLook]);
    }else {
      let col = palette[txtLook-txtLookList.length+1];
      textLayer.fill(color(red(col),green(col),blue(col),150));
    }
    if(txtPos<txtPosList.length/2)
    { let txtY = textLayer.height-margin*wMin*.5-txtPosList[txtPos]*wMin*canvasRatio;
      textLayer.text(txt[0],textLayer.width/2,txtY-textSize);
      textLayer.text(txt[1],textLayer.width/2,txtY);
    }else{
      textLayer.text(txt[0],textLayer.width/2,txtPosList[txtPos]*wMin*canvasRatio+textSize);
      textLayer.text(txt[1],textLayer.width/2,txtPosList[txtPos]*wMin*canvasRatio+textSize*2);
    }
    image(textLayer,0,0);
  }

  noLoop();
}

function poly(in_pos, in_len, in_rot, in_count) {
  result = [];
  for (let i = 0; i < in_count; i++) {
    let norm = float(i) / in_count;
    let xPos = in_pos.x + cos((norm + in_rot) * TWO_PI) * in_len * polyMax;
    let yPos = in_pos.y + sin((norm + in_rot) * TWO_PI) * in_len * polyMax;
    let pt = createVector(xPos, yPos, 0);
    pts.push(pt);
    result.push(pt);
  }
  return result;
}

function drawPoint(in_layer, in_x, in_y, in_size, in_col, in_alpha) {
  let col = color(red(in_col),green(in_col),blue(in_col),in_alpha);

  in_layer.noStroke();
  in_layer.fill(col);
  in_layer.ellipse(in_x, in_y, in_size, in_size);

  col = color(red(in_col),green(in_col),blue(in_col),a1);
  blurLayer.fill(col);
  blurLayer.ellipse(in_x, in_y, in_size*s1, in_size*s1);

  col = color(red(in_col),green(in_col),blue(in_col),a2);
  blurLayer.fill(col);
  blurLayer.ellipse(in_x, in_y, in_size*s2, in_size*s2);

  col = color(red(in_col),green(in_col),blue(in_col),a3);
  blurLayer.fill(col);
  blurLayer.ellipse(in_x, in_y, in_size*s3, in_size*s3);

}
