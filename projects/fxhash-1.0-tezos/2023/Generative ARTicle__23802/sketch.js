let noiseXScale = 0.001;
let noiseYScale = 0.001;
let noiseAngleRange = 1400;


function bgdrawPattern(_x, _y, _w, _h, mainhue, mainsat, mainbright) {

if(_w-_x>100){
  let PTCount = floor(fxRandom(3, 10));
  let PTsize = (_w - _x - 10) / PTCount - 10;
  
  let PTx = _x + 10;
  let PTy = _y + 10;
  let PTw = PTx + PTsize;
  let PTh = PTy + PTsize;

  if (PTh > _h - 50) {
    PTCount = 10;
    PTsize = (_w - _x - 10) / PTCount - 10;
    PTw = PTx + PTsize;
    PTh = PTy + PTsize;
 
  }

  

  for (let i = 0; i < PTCount; i++) {
    _mainCanvas.noStroke();
    if (_w - _x < 70 || _h - _y < 70) {
      break;
    }
    if (PTh > _h) {
      break;
    }
    if (fxRandom(0, 10) > 7) {
      _mainCanvas.fill(mainhue + 180, 25, 70);
    }
    else {
      _mainCanvas.fill(mainhue, 25, 70);
    }
    roundedCorner = fxRandom(0, 100);


    _mainCanvas.rect(PTx, PTy, PTw, PTh, roundedCorner);

    if (fxRandom(0, 10) > 6) {
      innerR = (PTw - PTx) / 6;
      _mainCanvas.fill(240);
      _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);

      if (fxRandom(0, 10) > 6) {
        innerR = (PTw - PTx) / 3;
        if (fxRandom(0, 10) > 7) {
          _mainCanvas.fill(mainhue + 180,25, 70);
        }
        else {
          _mainCanvas.fill(mainhue, 25, 70);
        }
        _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);
      }
    }
    PTx += PTsize + 10;
    PTw += PTsize + 10;
  }
  if (PTh + 10 < _h) {
    if (_w - _x > 70 && _h - _y > 70) {
      bgPattern2(_x, PTh, _w, _h, mainhue, mainsat, mainbright);
    }


  }
}

}

function bgPattern2(_x, _y, _w, _h, mainhue, mainsat, mainbright) {


  let PTCount = floor(fxRandom(3, 10));
  let PTsize = (_w - _x - 10) / PTCount - 10;

  let PTx = _x + 10;
  let PTy = _y + 10;
  let PTw = PTx + PTsize;
  let PTh = PTy + PTsize;

  if (PTh > _h ) {
    PTCount = 10;
    PTsize = (_w - _x - 10) / PTCount - 10;
    PTw = PTx + PTsize;
    PTh = PTy + PTsize;
  }

  if (PTh < _h-10) {

  for (let i = 0; i < PTCount; i++) {
    // if (_w - _x < 70 || _h - _y < 70) {
    //   break;
    // }
    

    roundedCorner = fxRandom(0, 100 );

    if (fxRandom(0, 10) > 7) {
      _mainCanvas.fill(mainhue + 180, 25, 70);
    }
    else {
      _mainCanvas.fill(mainhue, 25, 70);
    }
    _mainCanvas.rect(PTx, PTy, PTw, PTh, roundedCorner);

    if (fxRandom(0, 10) > 6) {
      innerR = (PTw - PTx) / 6;
      _mainCanvas.fill(240);
      _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);

      if (fxRandom(0, 10) > 6) {
        innerR = (PTw - PTx) / 3;
        if (fxRandom(0, 10) > 7) {
          _mainCanvas.fill(mainhue + 180, 25, 70);
        }
        else {
          _mainCanvas.fill(mainhue, 25, 70);
        }
        _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);
      }
    }
    PTx += PTsize + 10;
    PTw += PTsize + 10;
  }
  if (PTh < _h) {
    bgPattern2(_x, PTh, _w, _h, mainhue, mainsat, mainbright);

  }
}
else{
  roundedCorner = fxRandom(0, 100);
  _mainCanvas.fill(mainhue, 25, 70);
  _mainCanvas.rect(PTx, PTy,_w-10,_h-10,roundedCorner);
  // if (fxRandom(0, 10) > 6) {
  //   innerRx =(_w - PTx) / 8;
  //   innerRy=(_h - PTy) / 3;
  //   fill(240);
  //   rect(PTx + innerRx, PTy + innerRy,_w -10- innerRx, _h -10- innerRy, roundedCorner);

  // }
}
  
_mainCanvas.strokeWeight(3);
}

function bgdrawline(_x, _y, _w, _h, mainhue, mainsat, mainbright) {
  let leftwall = _x;
  let rightwall = _w;
  let topwall = _y;
  let bottomwall = _h;

  _mainCanvas.colorMode(HSB);
  // blendMode(NORMAL);
  let baseHueline = mainhue;

  for (let i = 0; i < 200 ; i++) {

    let linehue = baseHueline;
    let linesat = fxRandom(10,40);
    let linebright = fxRandom(15,50);

    _mainCanvas.stroke(linehue, linesat, linebright);
    xposL = map(fxRandom(0, originCanvasWidth), 0, originCanvasWidth, leftwall, rightwall);
    yposL = map(fxRandom(0, height), 0, height, topwall, bottomwall);
    xposL2 = map(fxRandom(0, originCanvasWidth), 0, originCanvasWidth, leftwall, rightwall);
    yposL2 = map(fxRandom(0, height), 0, height, topwall, bottomwall);
    _mainCanvas.strokeWeight(1);
    _mainCanvas.line(xposL, yposL, xposL2, yposL2);

  }

}

function bgdrawdots(_x, _y, _w, _h, mainhue, mainsat, mainbright) {

  let leftwall = _x;
  let rightwall = _w;
  let topwall = _y;
  let bottomwall = _h;


  _mainCanvas.colorMode(HSB);
  // blendMode(NORMAL);

  let baseHueline = mainhue;


  for (let i = 0; i < 5000 ; i++) {

    let linehue = baseHueline ;
    let linesat = fxRandom(0, 30);
    let linebright = fxRandom(70, 95);

    _mainCanvas.stroke(linehue, linesat, linebright);
    _mainCanvas.strokeWeight(fxRandom(0.5, 15));

    let xposP = map(fxRandom(0, originCanvasWidth), 0, originCanvasWidth, leftwall, rightwall);
    let yposP = map(fxRandom(0, height), 0, height, topwall, bottomwall);

    _mainCanvas.point(xposP, yposP);


  }
  _mainCanvas.strokeWeight(3);
}

function bgdrawfield(_ffx, _ffy, _ffw, _ffh, mainhue, mainsat, mainbright,opacityy) {
 
  
   let drawSatA = fxRandom(0, 35);
    let drawBriA = fxRandom(75, 95);
  for (let i = 0; i < fxRandom(650,1000)  + 10; i++) {


    let xPos = fxRandom(_ffx + 10, _ffw - 10);
    let yPos = fxRandom(_ffy + 10, _ffh - 10);
    let drawLength = floor(fxRandom(1, 50));

   
    _mainCanvas.noStroke();


    bgflowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 4, drawSatA, drawBriA, -1,opacityy,mainhue);
    bgflowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 5,  drawSatA,  drawBriA,1,opacityy,mainhue);
    _mainCanvas.noFill();
    bgflowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 3,  drawSatA, drawBriA, 3.5,opacityy,mainhue);
    bgflowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 3,  drawSatA,  drawBriA, -3.5,opacityy,mainhue);

  }
}
function bgflowLine(_ffx, _ffy, _ffw, _ffh, _fx, _fy, _length, _thickness, _fromColor, _toColor, _dir,opacityy,mainhue) {

  _mainCanvas.fill(mainhue,_fromColor,_toColor);
  for (let i = 0; i < _length; i++) {
    let t = i / _length;

    
    let noiseAngle = noise(_fx * noiseXScale, _fy * noiseYScale) * noiseAngleRange;
    _mainCanvas. rectMode(CENTER);

    if (_fx < _ffx || _fx > _ffw || _fy < _ffy || _fy > _ffh) {

    }
    else {
      _mainCanvas.circle(_fx, _fy, _thickness);
    }


    _fx += sin(radians(noiseAngle)) * _dir;
    _fy += cos(radians(noiseAngle)) * _dir;
  }
  _mainCanvas.rectMode(CORNERS);

}

function fxRandom(from=0, to =1){
  let diff = to - from;
  return from+fxrand()*diff;
}

let originCanvasWidth=1600;
let originCanvasHeight=2400;

let canvasWidth=800;
let canvasHeight=1200;

function setupCanvasRatio () {
  let originRatio = originCanvasWidth / originCanvasHeight;
  let screenRatio = windowWidth / windowHeight;
  console.log(originRatio);
  console.log(screenRatio);

  // 如果螢幕的比例比作品比例寬，就以螢幕高度來當畫布高度
  if(screenRatio > originRatio)
  {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * originRatio;
  }
  // 如果螢幕的比例比較窄，就以螢幕寬度來當畫布寬度
  else
  {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / originRatio;
  }

  canvasRatio = canvasWidth / originCanvasWidth;
}

function setup() {
  console.log(fxhash);
  setupCanvasRatio ();

  noiseSeed(fxRandom(-10000, 10000));
  _mainCanvas = createGraphics(originCanvasWidth, originCanvasHeight);
  createCanvas(canvasWidth, canvasHeight);
  console.log('origin:' + originCanvasWidth + ',' + originCanvasHeight);
  console.log('screen:' + canvasWidth + ',' + canvasHeight);

  _mainCanvas.colorMode(HSB);
  let mainhue = fxRandom(0, 360);
  let mainsat = fxRandom(0, 15);
  let mainbright = fxRandom(80, 98);

if(floor(fxRandom(0,10))==7){
mainsat=0;
}

  _mainCanvas.rectMode(CORNERS);
  console.log(mainhue);
  // background(200);
  _mainCanvas.background(mainhue, mainsat, mainbright);
  
  PicBackground (0,0,originCanvasWidth,originCanvasHeight,mainhue, mainsat, mainbright);

  _mainCanvas.rectMode(CORNER);
  if (floor(fxRandom(1, 3)) == 1) {
    for (let i = 0; i < 1200; i++) {
      // colorMode(DIFFERENCE);
      _mainCanvas.stroke(mainhue, 100, 20);
      _mainCanvas.strokeWeight(0.13);
      _mainCanvas.noFill();
      foreX = fxRandom(-100, originCanvasWidth + 100);
      foreY = fxRandom(-100, originCanvasHeight + 100);
      foreX2 = fxRandom(-100, originCanvasWidth + 100);
      foreY2 = fxRandom(-100, originCanvasHeight + 100);

      foreX3 = fxRandom(-100, originCanvasWidth + 100);
      foreY3 = fxRandom(-100, originCanvasHeight + 100);
      foreX4 = fxRandom(-100,originCanvasWidth + 100);
      foreY4 = fxRandom(-100, originCanvasHeight + 100);

      // rect(foreX,foreY,foreX2,foreY2);
      _mainCanvas.triangle(foreX3, foreY3, foreX4, foreY4, foreX2, foreY2);
    }
  }
  else {
    for (let i = 0; i < 1000; i++) {
      // colorMode(DIFFERENCE);
      _mainCanvas.stroke(mainhue, 100, 20);
      _mainCanvas. strokeWeight(0.08);
      _mainCanvas.noFill();
      foreX = fxRandom(-100, originCanvasWidth + 100);
      foreY = fxRandom(-100, originCanvasHeight + 100);
      foreX2 = fxRandom(-100, originCanvasWidth + 100);
      foreY2 = fxRandom(-100, originCanvasHeight + 100);

      foreX3 = fxRandom(-100, originCanvasWidth + 100);
      foreY3 = fxRandom(-100, originCanvasHeight + 100);
      foreX4 = fxRandom(-100, originCanvasWidth + 100);
      foreY4 = fxRandom(-100, originCanvasHeight + 100);

      _mainCanvas.rect(foreX, foreY, foreX2, foreY2);
      // triangle(foreX3,foreY3,foreX4,foreY4,foreX2,foreY2);
    }
  }

  _mainCanvas.rectMode(CORNERS);
//with title
if (fxRandom(0,10)>7.5){
  

  
  _mainCanvas.strokeWeight(5);
  _mainCanvas.fill(mainhue, mainsat, mainbright);
  _mainCanvas.rect(50,50,originCanvasWidth-50,200,fxRandom(0,100));
  
  if (fxRandom(0,10)>6){
    _mainCanvas.strokeWeight(5);
    _mainCanvas.ellipseMode(CENTER);
    _mainCanvas.fill(mainhue+fxRandom(-50,50),fxRandom(30,70),60);
//LEFT
    if (floor(fxRandom(1,3))==1){
      _mainCanvas.circle(125,125,80);
      if (fxRandom(0,10)>6.8){
        _mainCanvas.fill(mainhue, mainsat, mainbright);
        _mainCanvas.circle(125,125,40);
      }
    }

//RIGHT
_mainCanvas.fill(mainhue+fxRandom(-50,50),fxRandom(30,70),60);
    if (floor(fxRandom(1,3))==1){
      _mainCanvas.circle(1475,125,80);
      if (fxRandom(0,10)>6.8){
        _mainCanvas.fill(mainhue, mainsat, mainbright);
        _mainCanvas.circle(1475,125,40);
      }
    }
   
    _mainCanvas.rectMode(CORNERS);
    
    
  }
  _mainCanvas.textSize(65);
  _mainCanvas.textAlign(CENTER,CENTER);
  _mainCanvas.fill(mainhue,90,20);
  _mainCanvas.text('GENERATIVE', originCanvasWidth/2, 100);
 _mainCanvas.textAlign(RIGHT,CENTER);
 _mainCanvas.fill(mainhue+180,90,60);
 _mainCanvas.text('ART', originCanvasWidth/2, 160);
 _mainCanvas.textAlign(LEFT,CENTER);
 _mainCanvas.fill(mainhue,90,20);
 _mainCanvas.text('ICLE', originCanvasWidth/2, 160);
  firstdraw(50, 220, originCanvasWidth-50, originCanvasHeight-50, mainhue, mainsat, mainbright);

}
//without title
else{
   firstdraw(50, 50, originCanvasWidth-50, originCanvasHeight-50, mainhue, mainsat, mainbright);
}
 
  

  // drawPattern(70, 70, width - 70, height - 70, mainhue);
  // noFill();
  // rect(70, 70, width - 70, height - 70);
//  await sleep(100);
image(_mainCanvas, 0, 0, width, height);


if(fxRandom(0,10)>8.7){
  filter(INVERT);
}
if(fxRandom(0,10)>9){
filter(THRESHOLD);

}
if(fxRandom(0,10)>8.8){
filter(GRAY);
}

granulateFuzzify(height/16);

  fxpreview();
}


function PicBackground (_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy){
  whatcontent = floor(fxRandom(1, 5));
  if (whatcontent == 1) {
  
    bgdrawPattern(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy)
  }
  else if (whatcontent ==2) {
    
  }
  else if (whatcontent == 3) {
   bgdrawfield(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy);
  }
  else if (whatcontent == 4) {
    bgdrawdots(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy);
  }
}

function ChoosePic(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy){
  whatcontent = floor(fxRandom(1, 5));
      if (whatcontent == 1) {
        drawparagraph(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy)
      }
      else if (whatcontent == 2) {
        // drawparagraph(_x, _y, _w, _h, mainhue, mainsat, mainbright)
        drawPattern(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy)
      }
      else if (whatcontent == 3) {
        drawdots(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy);
        // drawfield(_x, _y, _w, _h, mainhue, mainsat, mainbright);
      }
      else if (whatcontent == 4) {
        drawfield(_x, _y, _w, _h, mainhue, mainsat, mainbright,opacityy);
      }
}

async function firstdraw(_x, _y, _w, _h, mainhue, mainsat, mainbright) {
  let ratioX = (_w - _x) / _w;
  let ratioY = (_h - _y) / _h;

  rowX = _x ;
  rowY = _y ;
  let newsizeX = 0;
  let newsizeY;
  for (let i = 0; i < 10; i++) {

    newsizeX = fxRandom(rowX + 300 * ratioX, _w -100)
    newsizeY = fxRandom(rowY + 300 * ratioY, _h-100 )
if (newsizeX>_w){
  newsizeX=_w;
}
_mainCanvas.strokeWeight(3.5);

    if (fxRandom(0, 10) > 6.4) {
     
        ChoosePic(rowX, rowY, newsizeX, newsizeY, mainhue, mainsat, mainbright)
      


      //Rare
      if (fxRandom(0, 100)>75 && newsizeX - rowX > 520 && newsizeY - rowY > 100) {
        titleTextX = rowX + 15;
        titleTextY = rowY + 70;
        _mainCanvas.textSize(60);
        _mainCanvas.fill(mainhue, mainsat, mainbright);
        _mainCanvas.rectMode(CORNER);
        _mainCanvas.noStroke();
        _mainCanvas.rect(rowX + 10, rowY + 10, 510, 57);
        _mainCanvas.textAlign(LEFT,BOTTOM);
        _mainCanvas.fill(mainhue, mainsat, 20);
        _mainCanvas.text('BREAKING NEWS', titleTextX, titleTextY);
        _mainCanvas.rectMode(CORNERS);

        console.log("RARE NEWS")
        
      }
    }

    else if (newsizeX - rowX > 100 && newsizeY - rowY > 100) {

      _mainCanvas.fill(mainhue, mainsat, mainbright);
      _mainCanvas.stroke(mainhue, 100, 20);
      if(fxRandom(0,10)>7){
        _mainCanvas.fill(mainhue, 40, 80);
      }
      _mainCanvas.rect(rowX, rowY, newsizeX, newsizeY);


      //Rare
      if (fxRandom(0, 100) >75 && newsizeX - rowX > 520 && newsizeY - rowY > 100) {
        titleTextX = rowX + 15;
        titleTextY = rowY + 70;
        _mainCanvas.textSize(60);
        _mainCanvas.fill(mainhue, mainsat, mainbright);
        _mainCanvas.rectMode(CORNER);
        _mainCanvas.noStroke();
        _mainCanvas.rect(rowX + 10, rowY + 10, 510, 57);
        _mainCanvas.textAlign(LEFT,BOTTOM);
        _mainCanvas.fill(mainhue, mainsat, 20);
        _mainCanvas.text('BREAKING NEWS', titleTextX, titleTextY);
        _mainCanvas.rectMode(CORNERS);

        console.log("RARE NEWS")
        rowY += 60;
        seconddraw(rowX, rowY, newsizeX, newsizeY, mainhue, mainsat, mainbright);
        rowY -= 60;
      }
      else{
      seconddraw(rowX, rowY, newsizeX, newsizeY, mainhue, mainsat, mainbright);
      }
      }
      else{
        
        ChoosePic(rowX, rowY, newsizeX, newsizeY, mainhue, mainsat, mainbright);
      

      }
    
  
    drawtoRight(newsizeY + 15, rowX, newsizeX, _h - 50, mainhue, mainsat, mainbright);
    
    rowX = newsizeX + 15 ;

    if (rowX > _w - 20 ) {
      {
        break;
      }
    }
    // await sleep(10); // 等待 10 毫秒
  }
}


async function drawtoRight(_x, _y, _w, _h, mainhue, mainsat, mainbright) {



  let XposR = _y;
  let YposR = _x;
  let limitWidth = _w;
  let limitHeight = _h;


  for (let i = 0; i < 10; i++) {

    if (limitHeight - YposR > 80) {



      FrameWidth = fxRandom(XposR + 150, limitWidth-20);
      FrameHeight = fxRandom(YposR + 150, limitHeight-20);
if(FrameWidth>_w){
FrameWidth=_w;
}
      if (YposR < limitHeight ) {

        _mainCanvas.strokeWeight(3.5);

        if (fxRandom(0, 11) > 5) {
          
     ChoosePic(XposR, YposR, FrameWidth, FrameHeight, mainhue, mainsat, mainbright);
      
         
        }
        else if (FrameWidth - XposR > 100 && limitHeight - YposR > 100){
          _mainCanvas.fill(mainhue, mainsat, mainbright);
          _mainCanvas.stroke(mainhue, 100, 20);
          if(fxRandom(0,10)>7){
            _mainCanvas.fill(mainhue, 40, 80);
          }
          _mainCanvas.rect(XposR, YposR, FrameWidth, FrameHeight);
          
              seconddraw(XposR, YposR, FrameWidth, FrameHeight, mainhue, mainsat, mainbright);
            
        }
        else{
         
        ChoosePic(XposR, YposR, FrameWidth, FrameHeight, mainhue, mainsat, mainbright);
      
        }

        FrameHeight = FrameHeight + 15;
        if (FrameHeight < limitHeight) {
      
       
          strokeWeight(3.5);
          if (fxRandom(0, 11) > 5) {

            
        ChoosePic(XposR, FrameHeight, FrameWidth, limitHeight, mainhue, mainsat, mainbright);
      
         
            
          }
          else if (FrameWidth - XposR > 100 && limitHeight - FrameHeight > 100){
            _mainCanvas.fill(mainhue, mainsat, mainbright);
            _mainCanvas.stroke(mainhue, 100, 20);
            if(fxRandom(0,10)>7){
              _mainCanvas.fill(mainhue, 40, 80);
            }
            _mainCanvas.rect(XposR, FrameHeight, FrameWidth, limitHeight);
              
                seconddraw(XposR, FrameHeight, FrameWidth, limitHeight, mainhue, mainsat, mainbright);
              
            

          }
          else{
            
        ChoosePic(XposR, FrameHeight, FrameWidth, limitHeight, mainhue, mainsat, mainbright);
      
          }
        }
        XposR = FrameWidth + 15;
      }
      if (XposR + 50 > limitWidth) {
        break;
      }
      //  await sleep(20); // 等待 20 毫秒

    }
  }
}


async function thirddraw(__tx, __ty, __tw, __th, mainhue, mainsat, mainbright) {

  _trowX = __tx + 20;
  _trowY = __ty + 20;
  let _tnewsizeX;
  let _tnewsizeY;
  let _tlimitY = __th-20;
  let _tlimitX = __tw-20;

  for (let i = 0; i < 10; i++) {

    _tnewsizeX = fxRandom(_trowX + 100, _tlimitX - 20);
    _tnewsizeY = fxRandom(_trowY + 100, _tlimitY - 20);
    if(_tnewsizeX>_tlimitX){
      _tnewsizeX=_tlimitX;
    }
    if(_tnewsizeY>_tlimitY){
      _tnewsizeY=_tlimitY;
    }
    _mainCanvas.strokeWeight(3.5);
    
      ChoosePic(_trowX, _trowY, _tnewsizeX, _tnewsizeY, mainhue, mainsat, mainbright);
    
   
    

    thirddrawtoRight(_tnewsizeY + 20, _trowX, _tnewsizeX, __th - 20, mainhue, mainsat, mainbright);

    _trowX = _tnewsizeX + 20;

    if (_trowX > __tw -30) {
      break;
    }


    // await sleep(100); // 等待 200 毫秒
  }
}

async function thirddrawtoRight(__tx, __ty, __tw, __th, mainhue, mainsat, mainbright) {

  let _tXposR = __ty;
  let _tYposR = __tx;
  let _tlimitWidth = __tw - 20;
  let _tlimitHeight = __th - 20;

  if (_tlimitHeight - _tYposR > 50) {
    for (let i = 0; i < 10; i++) {

      _tFrameWidth = fxRandom(_tXposR + 100, _tlimitWidth);
      _tFrameHeight = fxRandom(_tYposR + 100, _tlimitHeight);


      if(_tFrameWidth>_tlimitWidth){
        _tFrameWidth=_tlimitWidth;
        }
        if(_tFrameHeight>_tlimitHeight){
          _tFrameHeight=_tlimitHeight;
          }

      if (_tYposR < _tlimitHeight - 30) {

        _mainCanvas.strokeWeight(3.5);
      
          ChoosePic(_tXposR, _tYposR, _tFrameWidth, _tFrameHeight, mainhue, mainsat, mainbright);
       
      }
        _tFrameHeight = _tFrameHeight + 20;
        if (_tFrameHeight > _tlimitHeight) {
          _tFrameHeight = _tlimitHeight;
        }
        else {
          _mainCanvas.strokeWeight(3.5);
          _mainCanvas.fill(mainhue, mainsat, mainbright);
          if (fxRandom(0, 10) > 5) {
            ChoosePic(_tXposR, _tFrameHeight, _tFrameWidth, _tlimitHeight, mainhue, mainsat, mainbright);
          }
          else if (_tFrameWidth - _tXposR > 100 && _tlimitHeight - _tFrameHeight > 100){

            _mainCanvas.fill(mainhue, mainsat, mainbright);
            if(fxRandom(0,10)>7){
              _mainCanvas.fill(mainhue, 40, 80);
            }
            _mainCanvas.stroke(mainhue, 100, 20);
            
            _mainCanvas.rect(_tXposR, _tFrameHeight, _tFrameWidth, _tlimitHeight);
            
                seconddraw(_tXposR, _tFrameHeight, _tFrameWidth, _tlimitHeight, mainhue, mainsat, mainbright);
              
            
          }
          else{
            ChoosePic(_tXposR, _tFrameHeight, _tFrameWidth, _tlimitHeight, mainhue, mainsat, mainbright);
          }
        
        _tXposR = _tFrameWidth + 20;
      }
      if (_tXposR + 50 > _tlimitWidth) {
        break;
      }
    }

    //  await sleep(200); // 等待 400 毫秒
  }










}

async function seconddraw(__x, __y, __w, __h, mainhue, mainsat, mainbright) {

  _rowX = __x + 20;
  _rowY = __y + 20;
  let _newsizeX;
  let _newsizeY;
  let _limitY = __h;
  let _limitX = __w;
  _mainCanvas.strokeWeight(3.5);

  _mainCanvas.fill(mainhue, mainsat, mainbright);
  for (let i = 0; i < 10; i++) {

    _newsizeX = fxRandom(_rowX + 100, _limitX - 20);
    _newsizeY = fxRandom(_rowY + 100, _limitY - 20);

    if(_newsizeX>_limitX-20){
      _newsizeX=_limitX-20;
    }
    if(_newsizeY>_limitY-20){
      _newsizeY=_limitY-20;
    }
    if (fxRandom(0, 11) > 5) {

      
        ChoosePic(_rowX, _rowY, _newsizeX, _newsizeY, mainhue, mainsat, mainbright);
      

    
    }
    else if (_newsizeX - _rowX > 100 && _newsizeY - _rowY > 100){
      _mainCanvas.stroke(mainhue, 100, 20);
      _mainCanvas.strokeWeight(3);
      if(fxRandom(0,10)>7){
        _mainCanvas.fill(mainhue, 40, 80);
      }
      _mainCanvas.rect(_rowX, _rowY, _newsizeX, _newsizeY);
      
   
          thirddraw(_rowX, _rowY, _newsizeX, _newsizeY, mainhue, mainsat, mainbright);
        
      
    }
else{
 
       ChoosePic(_rowX, _rowY, _newsizeX, _newsizeY, mainhue, mainsat, mainbright);
      
}


    seconddrawtoRight(_newsizeY + 20, _rowX, _newsizeX, __h - 20, mainhue, mainsat, mainbright);

    _rowX = _newsizeX + 20;

    if (_rowX > __w -50) {
      break;
    }


    // await sleep(100); // 等待 200 毫秒
  }
}

async function seconddrawtoRight(__x, __y, __w, __h, mainhue, mainsat, mainbright) {

  let _XposR = __y;
  let _YposR = __x;
  let _limitWidth = __w - 20;
  let _limitHeight = __h - 20;

  _mainCanvas.fill(mainhue, mainsat, mainbright);
  if (_limitHeight - _YposR > 50) {
    for (let i = 0; i < 10; i++) {

      _FrameWidth = fxRandom(_XposR + 100, _limitWidth);
      _FrameHeight = fxRandom(_YposR + 100, _limitHeight);

      if(_FrameWidth>_limitWidth){
        _FrameWidth=_limitWidth;
        }
        if(_FrameHeight>_limitHeight){
          _FrameHeight=_limitHeight;
          }

      if (_YposR < _limitHeight - 5) {
        if (fxRandom(0, 11) > 6) {
          
            ChoosePic(_XposR, _YposR, _FrameWidth, _FrameHeight, mainhue, mainsat, mainbright);
          
        
         
        }
        else if (_FrameWidth - _XposR > 100 && _FrameHeight - _YposR > 100){
          _mainCanvas.stroke(mainhue,100,20)
          _mainCanvas.strokeWeight(3);
          _mainCanvas.fill(mainhue, mainsat,mainbright);
          if(fxRandom(0,10)>7){
            _mainCanvas.fill(mainhue, 40, 80);
          }
          _mainCanvas.rect(_XposR, _YposR, _FrameWidth, _FrameHeight);
          
           
              thirddraw(_XposR, _YposR, _FrameWidth, _FrameHeight, mainhue, mainsat, mainbright);
            
        }
        else{
          
            ChoosePic(_XposR, _YposR, _FrameWidth, _FrameHeight, mainhue, mainsat, mainbright);
          
        
        }

        _FrameHeight = _FrameHeight + 20;
        if (_FrameHeight > _limitHeight) {
          _FrameHeight = _limitHeight;
        }
        else {
          if (fxRandom(0, 11) > 6) {
            
           ChoosePic(_XposR, _FrameHeight, _FrameWidth, _limitHeight, mainhue, mainsat, mainbright);
          

          }
          else if (_FrameWidth - _XposR > 100 && _limitHeight - _FrameHeight > 100) {
            _mainCanvas.stroke(mainhue,100,20)
            _mainCanvas.fill(mainhue, mainsat, mainbright);
            _mainCanvas.strokeWeight(3);
            if(fxRandom(0,10)>7){
              _mainCanvas.fill(mainhue, 40, 80);
            }
            _mainCanvas.rect(_XposR, _FrameHeight, _FrameWidth, _limitHeight);
           
             
                thirddraw(_XposR, _FrameHeight, _FrameWidth, _limitHeight, mainhue, mainsat, mainbright);
              
            
          }
          else{
            
            ChoosePic(_XposR, _FrameHeight, _FrameWidth, _limitHeight, mainhue, mainsat, mainbright);
          
          }
        }

        _XposR = _FrameWidth + 20;
      }
      if (_XposR + 10 > _limitWidth) {
        break;
      }
    }

    //  await sleep(200); // 等待 400 毫秒
  }










}

function draw() {
  
  
}

function drawPattern(_x, _y, _w, _h, mainhue, mainsat, mainbright) {
  if (fxRandom(0, 10) > 7) {
    _mainCanvas.noStroke();
  }
  else {
    _mainCanvas.stroke(mainhue, 100, 20);
  }
  _mainCanvas.fill(mainhue, mainsat, mainbright)
  _mainCanvas.rect(_x, _y, _w, _h);
if(_w-_x>100){
  let PTCount = floor(fxRandom(3, 10));
  let PTsize = (_w - _x - 10) / PTCount - 10;
  PTRatio = (PTsize * PTsize) / (originCanvasWidth* originCanvasHeight);
  let PTx = _x + 10;
  let PTy = _y + 10;
  let PTw = PTx + PTsize;
  let PTh = PTy + PTsize;

  if (PTh > _h - 50) {
    PTCount = 10;
    PTsize = (_w - _x - 10) / PTCount - 10;
    PTw = PTx + PTsize;
    PTh = PTy + PTsize;
    PTRatio = (PTsize * PTsize) / (originCanvasWidth * originCanvasHeight);
  }

  

  for (let i = 0; i < PTCount; i++) {
    _mainCanvas.noStroke();
    if (_w - _x < 70 || _h - _y < 70) {
      break;
    }
    if (PTh > _h) {
      break;
    }
    if (fxRandom(0, 10) > 7) {
      _mainCanvas.fill(mainhue + 180, 100, 20);
    }
    else {
      _mainCanvas.fill(mainhue, 100, 20);
    }
    roundedCorner = fxRandom(0, 3000 * PTRatio);


    _mainCanvas.rect(PTx, PTy, PTw, PTh, roundedCorner);

    if (fxRandom(0, 10) > 6) {
      innerR = (PTw - PTx) / 6;
      _mainCanvas.fill(240);
      _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);

      if (fxRandom(0, 10) > 6) {
        innerR = (PTw - PTx) / 3;
        if (fxRandom(0, 10) > 7) {
          _mainCanvas.fill(mainhue + 180, 100, 20);
        }
        else {
          _mainCanvas.fill(mainhue, 100, 20);
        }
        _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);
      }
    }
    PTx += PTsize + 10;
    PTw += PTsize + 10;
  }
  if (PTh + 10 < _h) {
    if (_w - _x > 70 && _h - _y > 70) {
      Pattern2(_x, PTh, _w, _h, mainhue, mainsat, mainbright);
    }


  }
}
else{
  ChoosePic(_x, _y, _w, _h,mainhue, mainsat, mainbright);
  drawline(_x, _y, _w, _h,mainhue, mainsat, mainbright);
}
}

function Pattern2(_x, _y, _w, _h, mainhue, mainsat, mainbright) {


  let PTCount = floor(fxRandom(3, 10));
  let PTsize = (_w - _x - 10) / PTCount - 10;

  let PTx = _x + 10;
  let PTy = _y + 10;
  let PTw = PTx + PTsize;
  let PTh = PTy + PTsize;

  if (PTh > _h ) {
    PTCount = 10;
    PTsize = (_w - _x - 10) / PTCount - 10;
    PTw = PTx + PTsize;
    PTh = PTy + PTsize;
  }

  if (PTh < _h-10) {
  PTRatio = (PTsize * PTsize) / (originCanvasWidth * originCanvasHeight);
  for (let i = 0; i < PTCount; i++) {
    // if (_w - _x < 70 || _h - _y < 70) {
    //   break;
    // }
    

    roundedCorner = fxRandom(0, 3000 * PTRatio);

    if (fxRandom(0, 10) > 7) {
      _mainCanvas.fill(mainhue + 180, 100, 20);
    }
    else {
      _mainCanvas.fill(mainhue, 100, 20);
    }
    _mainCanvas.rect(PTx, PTy, PTw, PTh, roundedCorner);

    if (fxRandom(0, 10) > 6) {
      innerR = (PTw - PTx) / 6;
      _mainCanvas.fill(240);
      _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);

      if (fxRandom(0, 10) > 6) {
        innerR = (PTw - PTx) / 3;
        if (fxRandom(0, 10) > 7) {
          _mainCanvas.fill(mainhue + 180, 100, 20);
        }
        else {
          _mainCanvas.fill(mainhue, 100, 20);
        }
        _mainCanvas.rect(PTx + innerR, PTy + innerR, PTw - innerR, PTh - innerR, roundedCorner);
      }
    }
    PTx += PTsize + 10;
    PTw += PTsize + 10;
  }
  if (PTh < _h) {
    Pattern2(_x, PTh, _w, _h, mainhue, mainsat, mainbright);

  }
}
else{
  roundedCorner = fxRandom(0, 3000 * PTRatio);
  _mainCanvas.fill(mainhue, 100, 20);
  _mainCanvas.rect(PTx, PTy,_w-10,_h-10,roundedCorner);
  // if (fxRandom(0, 10) > 6) {
  //   innerRx =(_w - PTx) / 8;
  //   innerRy=(_h - PTy) / 3;
  //   fill(240);
  //   rect(PTx + innerRx, PTy + innerRy,_w -10- innerRx, _h -10- innerRy, roundedCorner);

  // }
}
  
_mainCanvas.strokeWeight(3);
}


async function drawline(_x, _y, _w, _h, mainhue, mainsat, mainbright) {
  let leftwall = _x;
  let rightwall = _w;
  let topwall = _y;
  let bottomwall = _h;

  let CountRatio = ((_w - _x) * (_h - _y)) / (originCanvasWidth * originCanvasHeight);


  _mainCanvas.colorMode(HSB);
  // blendMode(NORMAL);
  let baseHueline = mainhue;

  for (let i = 0; i < 5000 * CountRatio; i++) {

    let linehue = baseHueline + fxRandom(-50, 50);
    let linesat = fxRandom(0, 100);
    let linebright = fxRandom(0, 60);

    _mainCanvas.stroke(linehue, linesat, linebright);
    xposL = map(fxRandom(0, originCanvasWidth), 0, originCanvasWidth, leftwall, rightwall);
    yposL = map(fxRandom(0, originCanvasHeight), 0, originCanvasHeight, topwall, bottomwall);
    xposL2 = map(fxRandom(0, originCanvasWidth), 0, originCanvasWidth, leftwall, rightwall);
    yposL2 = map(fxRandom(0, originCanvasHeight), 0, originCanvasHeight, topwall, bottomwall);
    _mainCanvas.strokeWeight(1);
    _mainCanvas.line(xposL, yposL, xposL2, yposL2);

  }

}


function drawdots(_x, _y, _w, _h, mainhue, mainsat, mainbright) {

  let leftwall = _x;
  let rightwall = _w;
  let topwall = _y;
  let bottomwall = _h;

  if (fxRandom(0, 10) > 7) {
    _mainCanvas.noStroke();
  }
  else {
    _mainCanvas.stroke(mainhue, 100, 20);
  }
  _mainCanvas.fill(mainhue, mainsat, mainbright)
  _mainCanvas.rect(_x, _y, _w, _h);

  let CountRatio = ((_w - _x) * (_h - _y)) / (originCanvasWidth * originCanvasHeight);

  _mainCanvas.colorMode(HSB);
  // blendMode(NORMAL);

  let baseHueline = mainhue;


  for (let i = 0; i < 70000 * CountRatio; i++) {

    let linehue = baseHueline + fxRandom(-50, 50);
    let linesat = fxRandom(10, 60);
    let linebright = fxRandom(10, 90);

    _mainCanvas.stroke(linehue, linesat, linebright);
    _mainCanvas.strokeWeight(fxRandom(0.5, 10));

    let xposP = map(fxRandom(0, originCanvasWidth), 0, originCanvasWidth, leftwall, rightwall);
    let yposP = map(fxRandom(0, originCanvasHeight), 0, originCanvasHeight, topwall, bottomwall);

    _mainCanvas.point(xposP, yposP);


  }
  _mainCanvas.strokeWeight(3);
}

function drawparagraph(_nx, _ny, _nw, _nh, mainhue, mainsat, mainbright) {
  _mainCanvas.noStroke();
  _mainCanvas.fill(mainhue, mainsat, mainbright)
  _mainCanvas.rect(_nx -5, _ny - 5, _nw + 5, _nh + 5);


  let noiselineCount = floor(fxRandom(55, 70));
  if (_nh - _ny > 800) {
    noiselineCount = floor(fxRandom(65, 75));
  }
  if (_nh - _ny < 300) {
    noiselineCount = floor(fxRandom(14, 20));
  }
  else if (_nh - _ny < 200) {
    noiselineCount = floor(fxRandom(6, 10));
  }
  else if (_nh - _ny < 50) {
    noiselineCount = floor(fxRandom(4, 7));
  }

  let noiselineHeight = (_nh - _ny) / noiselineCount;

  for (let i = 0; i < noiselineCount; i++) {
    _mainCanvas.strokeWeight(3);
    sentences(i * noiselineHeight, noiselineHeight, _nx, _ny, _nw, _nh, mainhue);
  }

}
function sentences(_y, _height, _nx, _ny, _nw, _nh, mainhue) {
  let noiseY = fxRandom(-1000, 1000);
  let noiseScale = fxRandom(0.03, 0.01);


  fromhue = mainhue + fxRandom(-30, 30);
  if (fromhue < 0)
    fromhue += 360;
  else if (fromhue > 360)
    mainhue -= 360;

  let toHue = mainhue + fxRandom(-30, 30);
  if (toHue < 0)
    toHue += 360;
  else if (toHue > 360)
    toHue -= 360;

    _mainCanvas.colorMode(HSB);
  let fromColor = _mainCanvas.color(fromhue, fxRandom(30, 80), fxRandom(60, 100));
  let toColor = _mainCanvas.color(toHue, fxRandom(30, 80), fxRandom(60, 100));

  for (let i = _nx; i < _nw; i++) {
    let x1 = i;
    let y1 = _ny + _y + noise(i * noiseScale, noiseY) * _height;
    let x2 = x1;
    let y2 = y1 + _height;


    if (i % 4 == 0)
      gradientLine(x1, y1, x2, y2, fromColor, toColor);



      _mainCanvas.strokeWeight(3);
      _mainCanvas.stroke(mainhue, fxRandom(5, 100), fxRandom(2, 60));
      _mainCanvas.point(x1, y1);
  }
}
function gradientLine(_x1, _y1, _x2, _y2, fromColor, toColor) {
  let points = dist(_x1, _y1, _x2, _y2);

  for (let i = 0; i < points; i++) {
    let ratio = i / points;
    let _color = lerpColor(fromColor, toColor, ratio);

    _mainCanvas.stroke(_color);
    let drawX = lerp(_x1, _x2, ratio);
    let drawY = lerp(_y1, _y2, ratio);

    if (fxRandom() > ratio)
    _mainCanvas.strokeWeight(0.5);
      _mainCanvas.point(drawX, drawY);
  }
}

async function drawfield(_ffx, _ffy, _ffw, _ffh, mainhue, mainsat, mainbright,opacityy) {
  if (fxRandom(0, 10) > 7) {
    _mainCanvas.noStroke();
  }
  else {
    _mainCanvas.strokeWeight(3.5);
    _mainCanvas.stroke(mainhue, 100, 20);
  }
  _mainCanvas.fill(mainhue, mainsat, mainbright)
  _mainCanvas.rect(_ffx, _ffy, _ffw, _ffh);

  let fieldRatio = ((_ffw - _ffx) * (_ffh - _ffy)) / (originCanvasWidth * originCanvasHeight);

  for (let i = 0; i < fxRandom(3500,9000) * fieldRatio + 10; i++) {


    let xPos = fxRandom(_ffx + 10, _ffw - 10);
    let yPos = fxRandom(_ffy + 10, _ffh - 10);
    let drawLength = floor(fxRandom(1, 50));

    let drawHueA = mainhue;
    let drawHueB = mainhue;
    let drawHueC = mainhue;
    let drawHueD = mainhue;

    if (fxRandom(0, 10) > 8) {
      drawHueC = drawHueA + 180;
      drawHueD = drawHueB + 180;
    }
    else if (fxRandom(0, 10) > 6) {
      drawHueC = drawHueA + fxRandom(-180,180);
      drawHueD = drawHueB + fxRandom(-180,180);
    }
    if (drawHueA > 360)
      drawHueA -= 360;
    else if (drawHueA < 0)
      drawHueA += 360;

    if (drawHueB > 360)
      drawHueB -= 360;
    else if (drawHueB < 0)
      drawHueB += 360;

      if (drawHueC > 360)
      drawHueC -= 360;
    else if (drawHueC < 0)
      drawHueC += 360;

    if (drawHueD > 360)
      drawHueD -= 360;
    else if (drawHueD < 0)
      drawHueD += 360;


    let drawSatA = fxRandom(10, 80);
    let drawSatB = fxRandom(10, 80);
    let drawSatC = fxRandom(10, 80);
    let drawSatD = fxRandom(10, 80);

    let drawBriA = fxRandom(10, 80);
    let drawBriB = fxRandom(10, 80);
    let drawBriC = fxRandom(10, 80);
    let drawBriD = fxRandom(10, 80);

    let colorA = _mainCanvas.color(drawHueA, drawSatA, drawBriA);
    let colorB = _mainCanvas.color(drawHueB, drawSatB, drawBriB);
    let colorC = _mainCanvas.color(drawHueC, drawSatC, drawBriC);
    let colorD = _mainCanvas.color(drawHueD, drawSatD, drawBriD);

    _mainCanvas.noStroke();

    flowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 5, colorB, colorA, -1,opacityy);
    flowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 8, colorA, colorB,1,opacityy);
    _mainCanvas.noFill();
    flowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 3, colorC, colorD, 3.5,opacityy);
    flowLine(_ffx, _ffy, _ffw, _ffh, xPos, yPos, drawLength, 3, colorD, colorC, -3.5,opacityy);

  }
}
function flowLine(_ffx, _ffy, _ffw, _ffh, _fx, _fy, _length, _thickness, _fromColor, _toColor, _dir,opacityy) {


  for (let i = 0; i < _length; i++) {
    let t = i / _length;

    _mainCanvas.fill(lerpColor(_fromColor, _toColor, t));
    let noiseAngle = noise(_fx * noiseXScale, _fy * noiseYScale) * noiseAngleRange;
    _mainCanvas.rectMode(CENTER);

    if (_fx < _ffx || _fx > _ffw || _fy < _ffy || _fy > _ffh) {

    }
    else {
      _mainCanvas.circle(_fx, _fy, _thickness);
    }


    _fx += sin(radians(noiseAngle)) * _dir;
    _fy += cos(radians(noiseAngle)) * _dir;
  }
  _mainCanvas.rectMode(CORNERS);

}


function granulateFuzzify(_amount) {
  loadPixels();

  const d = pixelDensity();
  const fuzzyPixels = 1;
  const modC = 4 * fuzzyPixels;
  const modW = 4 * width * d;
  const pixelsCount = modW * (height * d);

  for (let i = 0; i < pixelsCount; i += 4) {
    const f = modC + modW;

    if (pixels[i + f]) {
      pixels[i] = round((pixels[i] + pixels[i + f]) / 2);
      pixels[i + 1] = round((pixels[i + 1] + pixels[i + f + 1]) / 2);
      pixels[i + 2] = round((pixels[i + 2] + pixels[i + f + 2]) / 2);
    }

    pixels[i] = pixels[i] + fxRandom(-_amount, _amount);
    pixels[i + 1] = pixels[i + 1] + fxRandom(-_amount, _amount);
    pixels[i + 2] = pixels[i + 2] + fxRandom(-_amount, _amount);
  }
  updatePixels();
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



