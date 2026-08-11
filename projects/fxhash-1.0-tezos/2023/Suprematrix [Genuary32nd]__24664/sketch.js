/*
"Suprematrix"
For Genuary32 event 2023
Original Prompt : Suprematism by Eric Davidson (Genuary11)

Authored by Pedram Sadegh-Beyki [PiTHEOREM]
Social Media Handle: @pitheorem
Website: pitheorem.xyz

Jan 2023

*****************************************************************************
Generated Artworks License: NFT License 2.0 (https://www.nftlicense.org/)
Code license: MIT license
Included Library: p5videorecorder (by Caleb Forss)


CONTROLS *******************************************************************************
Press [s] to save the current frame
Hold [r] to record the clip

*/
//**************************************************************************************

let prefix = "Gen11_Supermatism_";
let canvas = [];
let sizeRatio = .05;
let uLine;
let points = [];
let timer = 0;

let backs=['#FFE5B9','#EFF8FF','#E5E0FF','#E8F3D6','#FFE2E2','#F7F2E7']

let palettes =
{

  'GreenOrange' : ['#064635','#519259','#F2921D','#1F8A70','#FC7300','#10A19D'],
  'PurpleBlue' : ['#39B5E0','#E15FED','#A31ACB','#CF4DCE','#0081B4','#332FD0'],
  'PinkBlue' : ['#333C83','#9C254D','#D23369','#F06292','#F24A72'],
  'BlueOrange' : ['#FF731D','#5F9DF7','#1746A2','#1F4690','#3A5BA0','#FFA500'],
  'Orange' : ['#343F56','#F54748','#FB9300','#FF731D','#343F56'],
  'Summer' : ['#72147E','#F21170','#FA9905','#FF5200'],
  'BlueGreen' : ['#22577E','#5584AC','#206A5D','#0D4C92','#59C1BD','#205295','#22577E'],
  'PinkOrange' : ['#CD5888','#F2921D','#A61F69','#400E32','#EF9A53']

};
const paletteKeys = Object.keys(palettes);
let videoRecorder;

function setup() {
  Math.random = fxrand;
  randomSeed(fxrand());
  noiseSeed(fxrand());
  let winSize = min(window.innerWidth, window.innerHeight);
  canvas = [winSize,winSize];
  createCanvas(canvas[0],canvas[1]);
  frameRate(30);
  colorMode(RGB,1);
  genValues();
  videoRecorder = new p5.VideoRecorder();
  videoRecorder.onFileReady = showAndSaveVideo;
}
function showAndSaveVideo() {
  //  Get url of recorded video
  let videoURL = videoRecorder.url;
  //  Create video player element with recording as source
  let vid = createVideo(videoURL);
  // vid.showControls();
  //  Download the recording
  videoRecorder.save(prefix+"Video");
}

function randNum(in_min, in_max)
{
  return(map(fxrand(),0,1,in_min, in_max));
}

function randInt(in_min, in_max)
{
  return(round(randNum(in_min, in_max)));
}

function genValues(){

  print(fxhash);

  wMin = Math.min(canvas[0],canvas[1]);
  wMax = Math.max(canvas[0],canvas[1]);
  ds = wMin * sizeRatio;
  cp = createVector(canvas[0] / 2, canvas[1] / 2);

  backID = randInt(0,backs.length-1);
  paletteID = randInt(0,paletteKeys.length-1);
  paletteID = paletteKeys[paletteID];
  palette = palettes[paletteID];



  piTool = new PiTool();
  center = new Pi2D(.5,.5);


  uSize = randNum(.35,.6);
  vSize = randNum(.35,.5);
  uCount = randInt(4,12);
  vCount = randInt(4,12);
  regular = randInt(0,100)>30 ? 70 : 100;

  baseEvoX = new Pi1D_Framer(8,.45);
  baseEvoY = new Pi1D_Framer(4,.2);
  noiseEvo = new Pi2D(baseEvoX,baseEvoY);
  wiggler = new Pi1D(1);

  minSize = .05;
  maxSize = (uCount+vCount)>20 ? .075 : (uCount+vCount)<12 ? .2 : .125;

  baseLine = new PiLine(uCount,{pos:center, size:uSize});
  uLine = new PiLine(uCount,{pos:center, size:uSize});

  counter = 0;

  for(let uPt of uLine.points)
  {
    vLine = new PiLine(vCount,{pos:uPt.pos, size:vSize,rot:.25});
    vLine.setPointsParent(uPt);
    uLine.addChild(vLine);

    for(let vPt of vLine.points)
    {

      vPt.uv.y = vPt.uv.x;
      vPt.uv.x = uPt.uv.x;

      cInterpX = abs((vPt.uv.x.value)*2-1);
      cInterpY = abs((vPt.uv.y.value)*2-1);

      limit = map(cInterpX+cInterpY,0,2,60,90);
      counter++;
      if((counter>(uCount*vCount/2) && points.length<3) ||
          randInt(0,100)>limit)
      {

        colID = randInt(0,palette.length-1);

        vPt.shapeID = randInt(0,1)==0?randInt(2,4):1;

        if(vPt.shapeID==2)
        {
          vPt.shapeSize = [randNum(minSize,minSize+maxSize*1.25),randNum(minSize,minSize+maxSize*1.25)];
        }else {
          vPt.shapeSize = [randNum(minSize,minSize+maxSize),randNum(minSize,minSize+maxSize)];
        }
        // print(vPt.shapeSize);
        vPt.shapeCol = (vPt.shapeRender && randInt(0,100)>80) ? color(.1) : palette[colID];
        vPt.shapeRot = randInt(0,100)>(regular+(vPt.shapeID==1?20:0)) ? randNum(0,1) : randInt(0,4) * .125;
        vPt.shapeAng = randInt(0,4) * .25;
        vPt.shapeWt = randNum(3,6);


        // vPt.mlt = nf(cInterpY,0,2);
        sSizeMlt = vPt.shapeID!=2? vPt.shapeSize[0]: vPt.shapeSize[0]+vPt.shapeSize[1];
        sSizeMlt *= sSizeMlt;
        sSizeMlt = map(sSizeMlt,0,minSize+maxSize,0.02,0);
        sSizeMlt *= randInt(0,100)>5;
        sSizeMlt *= randNum(1,3);

        wiggleX = randNum(0,sSizeMlt*4);
        wiggleY = randNum(0,sSizeMlt*4);

        nMltX = new Pi1D_Mlt(wiggleX,wiggler) ;//map(cInterpX,0,1,.12,.025);
        nMltY = new Pi1D_Mlt(wiggleY,wiggler) ;//map(cInterpY,0,1,.12,.025);

        nU = new Pi1D_Add(vPt.uv.x,noiseEvo.x);
        nV = new Pi1D_Add(vPt.uv.y,noiseEvo.y);
        nX = new Pi1D_Noise(2,{uvw:[nU,nV,.2],frq:[4,1,1],mlt:nMltX,falloff:.5})
        nY = new Pi1D_Noise(4,{uvw:[nU,nV,.3],frq:[1,4,1],mlt:nMltY,falloff:.5})
        vPt.pos = new Pi2D_Add(vPt.pos,new Pi2D(nX,nY));
        points.push(vPt);

      }


    }

  }

  noiseEvo.cook();
  uLine.cook();

  layer0 = piTool.addLayer(canvas[0],canvas[1]);
  layer1 = piTool.addLayer(canvas[0],canvas[1]);

  window.$fxhashFeatures = {
    "Color Palette": paletteID,
    "Density": points.length>15 ? "High" : points.length<10 ? "Low" : "Medium",
  }
}

function draw()
{
  clear();
  layer0.clear();

  background(backs[backID]);

  noiseEvo.cook();

  uLine.cook();

  // wiggler.cook();
  for(let pt of points)
  {
      // print(pt);
    let sID = pt.shapeID;
    let sSize = pt.shapeSize;
    let sAng = pt.shapeAng;
    let sRot = pt.shapeRot;
    let sCol = pt.shapeCol;
    let sWt = pt.shapeWt;

    switch(sID)
    {
      case 0: layer0.vert(pt,{size:10, col:sCol}); break;
      case 1: layer0.line(pt,{size:sSize[0]*2, rot:sRot, col:sCol, weight:sWt}); break;
      case 2: layer0.rect(pt,{width:sSize[0], height:sSize[1], rot:sRot, fill:sCol}); break;
      case 3: layer0.circle(pt,{size:sSize[0], fill:sCol}); break;
      case 4: layer0.triangle(pt,{size:sSize[0], rot:sAng, fill:sCol}); break;
    }
  }

  piTool.cook();
  layer0.draw();

  if(millis()>1000)
  { fxpreview();
  }

}

function keyPressed()
{
  if(key=='r')
  {
    videoRecorder.start();
  }else if(key=='s')
  {
    saveCanvas(prefix,'.png');
  }else if(key=='-')
  {
    wiggler.value *= .8;
  }else if(key=='+')
  {
    wiggler.value *= 1.2;
  }else if(key=='0')
  {
    wiggler.value = 1;
  }
}
function keyReleased()
{
  if(key=='r')
  {
    videoRecorder.stop();
  }
}
