// XPITO by UpOnlyFan for fxhash, Merry Christmas and Happy Holidays to all
let cnv, pg;
let startX, endX;
let startY, endY;
let xPlus, yPlus;
let arcStart, arcEnd;
let w,h,wPlus,hPlus,wPlusInc,hPlusInc;
let leftRight, topBottom;
let arcStartPlus, arcEndPlus, arcStartPlusInc, arcEndPlusInc;
let strokeW;
let bg;
let wh;
let from,to;
let wStart,hStart;
let arcMode;
let arcChoice;

let changeMainColor;
let arrayOfColorsAmount;
let arrayOfColors = [];
let countArcs = 0;

let mainColor;
let alphaNr;
let alphaStroke;

let strokeColor;

let leftRightTopBottom;

let aspectRatio;


//fxhash variable Names
let aRName;
let bgName;
let lrName,tbName;
let tiedName;
let arrayColorsString;


function getRandomInt(max) {
    return Math.floor(fxrand() * max);
}

function mousePressed() {
    noLoop();
}


function keyTyped() {
  if (key === 's') {
    saveCanvas(cnv, 'XPITO_' + fxhash, 'jpg');
  }
  if (key === 'h') {
    save(pg, 'XPITO_highres_' + fxhash + '.png');
  }

}

function setup() {

  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);

    getColors();
    drawColors();

    //pixelDensity(2);
   
    aspectRatio = getRandomInt(3);

    bg = getRandomInt(2);

    leftRightTopBottom = getRandomInt(2);
    leftRight = getRandomInt(2);
    topBottom = getRandomInt(2);

    let xyDiv = getRandomInt(10)+3;
    let tied = getRandomInt(3);
    if(leftRightTopBottom === 0){
      yPlus = getRandomInt(100)+20;
      xPlus = yPlus/xyDiv;
      if(tied >= 1){
        wPlusInc = (getRandomInt(200)+1)*0.01;
        hPlusInc = wPlusInc+random(-0.1,0.1);
      }
    }else{
      xPlus = getRandomInt(100)+20;
      yPlus = xPlus/xyDiv;
      if(tied >= 1){
        hPlusInc = (getRandomInt(200)+1)*0.01;
        wPlusInc = hPlusInc+random(-0.1,0.1);
      }
    }
    if(tied === 0){
      wPlusInc = (getRandomInt(200)+1)*0.01;
      hPlusInc = (getRandomInt(200)+1)*0.01;
    }

    wh = getRandomInt(6);
    if(tied >= 1){
      wStart = getRandomInt(20)+1;
      hStart = wStart;
      wPlus = getRandomInt(45)+5;
      hPlus = wPlus;
    }else{
      wStart = getRandomInt(20)+1;
      hStart = getRandomInt(20)+1;
      wPlus = getRandomInt(45)+5;
      hPlus = getRandomInt(45)+5;
    }

    arcChoice = getRandomInt(3);
    arcStart = getRandomInt(361);
    arcEnd = getRandomInt(361);
    while(arcEnd === arcStart){
        arcEnd = getRandomInt(361);
    }
    arcStartPlus = 0;
    arcEndPlus = 0;
    arcStartPlusInc = getRandomInt(100)+1;
    arcEndPlusInc = getRandomInt(100)+1;
    
    strokeW = getRandomInt(30)+2;
    mainColor = getRandomInt(colorArrays.length);
    arrayOfColorsAmount = getRandomInt(3)+3;
    arrayOfColors.push(mainColor);
    for(let a=0;a<arrayOfColorsAmount;a++){
      arrayOfColors.push(getRandomInt(colorArrays.length));
    }
    changeMainColor = getRandomInt(200)+50;
    alphaNr = getRandomInt(50)+10;
    alphaStroke = getRandomInt(100)+150;
  
    
    if(aspectRatio === 0){
        cnv = createCanvas(1600, 900);
        pg = createGraphics(3200, 1800);
        aRName = "Landscape";
    }else if(aspectRatio === 1){
        cnv = createCanvas(900, 1600);
        pg = createGraphics(1800, 3200);
        aRName = "Portrait";
    }else{
        cnv = createCanvas(1500, 1500);
        pg = createGraphics(3000, 3000);
        aRName = "Square";
    }

    if(bg === 0){
      pg.background(0);
      bgName = "Black";
    }else{
      pg.background(255);
      bgName = "White";
    }

    if(tied > 0){
      tiedName = "Yes";
    }else{
      tiedName = "No";
    }

    if(leftRight === 0){
        startX = 0;
        endX = pg.width;
        lrName = "Left";
    }else{
        startX = pg.width;
        endX = 0;
        lrName = "Right";
    }
    if(topBottom === 0){
        startY = 0;
        endY = pg.height;
        tbName = "Top";
    }else{
        startY = pg.height;
        endY = 0;
        tbName = "Bottom";
    }

    arrayColorsString = "";
    for(let c=0;c<arrayOfColors.length;c++){
      if(c === 0){
        arrayColorsString += arrayOfColors[c];
      }else{
        arrayColorsString += "," + arrayOfColors[c];
      }
    }
    

    if(arcChoice === 0){
      arcMode = CHORD;
    }else if(arcChoice === 1){
      arcMode = PIE;
    }else{
      arcMode = OPEN;
    }
    pg.angleMode(DEGREES);
    

    print("aspectRatio", aspectRatio);
    print("bg", bg);
    print("leftRightTopBottom", leftRightTopBottom);
    print("leftRight", leftRight);
    print("topBottom", topBottom);

    print("xPlus", xPlus);
    print("yPlus", yPlus);
    print("xyDiv", xyDiv);

    print("wh", wh);  
    print("wStart", wStart);
    print("hStart", hStart);
    print("wPlus", wPlus);
    print("hPlus", hPlus);
    print("wPlusInc", wPlusInc);
    print("hPlusInc", hPlusInc);
    print("tied", tied); 

    print("arChoice",arcChoice,"(",arcMode,")");
    print("arcMode",arcMode);
    print("arcStart", arcStart);
    print("arcEnd", arcEnd);
    print("arcStartPlusInc", arcStartPlusInc);
    print("arcEndPlusInc", arcEndPlusInc);
    
    print("strokeW", strokeW);
    print("mainColor", mainColor);
    print("changeMainColor", changeMainColor);
    print("arrayOfColors", arrayOfColors);
    
    print("alphaNr", alphaNr);
    print("alphaStroke", alphaStroke);




    window.$fxhashFeatures = {
      "Background": bgName,
      "Format": aRName,
      "Main Color Palette": mainColor,
      "Change Color Palette Nr": changeMainColor,
      "Color Palettes Array": arrayColorsString,
      "Stroke Weight": strokeW,
      "Stroke Alpha": alphaStroke,
      "Start horizontal": lrName,
      "Start vertical": tbName,
      "ArcMode": arcMode,
      "First Arc Start": arcStart,
      "First Arc End": arcEnd,
      "Arc Start Increase": arcStartPlusInc,
      "Arc End Increase": arcEndPlusInc,
      "Increase X": xPlus,
      "Increase Y": yPlus,
      "Start Width": wStart,
      "Start Height": hStart,
      "Width Increase": wPlus,
      "Height Increase": hPlus,
      "Width Multi": wPlusInc,
      "Height Multi": hPlusInc,
      "Width and Height Increase Mode": wh,
      "Width and Height Increase tied": tiedName
    }



    noLoop();
}

function draw(){
    w = wStart;
    h = hStart;
    pg.strokeWeight(strokeW);
    if(leftRightTopBottom === 0){   // start left or right
        if(leftRight === 0){  // left to right            
            for(let x = startX; x <= endX; x+=xPlus){    
              if(floor(x)%changeMainColor === 0 && x != 0){
                mainColor = arrayOfColors[getRandomInt(arrayOfColors.length)];
                //print("floor(x)/changeMainColor",floor(x)/changeMainColor);
                print("x:new mainColor",x+ ":" + mainColor);
              }
              chooseColor();
              arcStartPlus = arcStart;
              arcEndPlus = arcEnd;
              if(topBottom === 0){  // top to bottom
                  for(let y = startY; y <= endY; y+=yPlus){
                      drawArcs(x,y);
                  }
              }else{  // bottom to top
                  for(let y = startY; y >= endY; y-=yPlus){
                      drawArcs(x,y);
                  }
              }
              increaseWH();
            }
        }else{  // right to left
            for(let x = startX; x >= endX; x-=xPlus){
              if(floor(x)%changeMainColor === 0 && x != 0){
                mainColor = arrayOfColors[getRandomInt(arrayOfColors.length)];
                //print("floor(x)/changeMainColor",floor(x)/changeMainColor);
                print("x:new mainColor",x+ ":" + mainColor);
              }
                chooseColor();
                arcStartPlus = arcStart;
                arcEndPlus = arcEnd;
                if(topBottom === 0){  // top to bottom
                    for(let y = startY; y <= endY; y+=yPlus){
                        drawArcs(x,y);
                    }
                }else{  // bottom to top
                    for(let y = startY; y >= endY; y-=yPlus){
                        drawArcs(x,y);
                    }
                }
                increaseWH();
            }
        }
    }else{  // start top or bottom
        if(topBottom === 0){  // top to bottom
            for(let y = startY; y <= endY; y+=yPlus){
              if(floor(y)%changeMainColor === 0 && y != 0){
                mainColor = arrayOfColors[getRandomInt(arrayOfColors.length)];
                //print("floor(y)/changeMainColor",floor(y)/changeMainColor);
                print("y:new mainColor",y+ ":" + mainColor);
              }
                chooseColor();
                arcStartPlus = arcStart;
                arcEndPlus = arcEnd;  
                
                if(leftRight === 0){  // left to right     
                    for(let x = startX; x <= endX; x+=xPlus){
                        drawArcs(x,y);
                    }
                }else{  // right to left
                    for(let x = startX; x >= endX; x-=xPlus){
                        drawArcs(x,y);
                    }
                }
                increaseWH();
            }
        }else{  // bottom to top
            for(let y = startY; y >= endY; y-=yPlus){
              if(floor(y)%changeMainColor === 0 && y != 0){
                mainColor = arrayOfColors[getRandomInt(arrayOfColors.length)];
                //print("floor(y)/changeMainColor",floor(y)/changeMainColor);
                print("y:new mainColor",y+ ":" + mainColor);
              }
              chooseColor();
              arcStartPlus = arcStart;
              arcEndPlus = arcEnd;
              if(leftRight === 0){  // left to right     
                  for(let x = startX; x <= endX; x+=xPlus){
                      drawArcs(x,y);
                  }
              }else{  // right to left
                  for(let x = startX; x >= endX; x-=xPlus){
                      drawArcs(x,y);
                  }
              }
              increaseWH();
            }    
        }    
    }

    print("total Arcs",countArcs);

    pg.noStroke();
    pg.fill(250);
    pg.rect(0,0,40,pg.height);
    pg.rect(0,0,pg.width,40);
    pg.rect(pg.width-40,0,40,pg.height);
    pg.rect(0,pg.height-40,pg.width,40);

    pg.strokeWeight(1);
    pg.stroke(0);
    pg.line(20,20,pg.width-20,20);
    pg.line(20,pg.height-20,pg.width-20,pg.height-20);
    pg.line(20,20,20,pg.height-20);
    pg.line(pg.width-20,20,pg.width-20,pg.height-20);

    image(pg,0,0,width,height);  
    
    fxpreview();
}

function drawArcs(x,y){
  pg.arc(x, y, w, h, arcStartPlus+=arcStartPlusInc, arcEndPlus+=arcEndPlusInc, arcMode);
  countArcs++;
}

function chooseColor(){
  strokeColor = colorArrays[mainColor][getRandomInt(colorArrays[mainColor].length)];
  strokeColor.setAlpha(alphaStroke);
  pg.stroke(strokeColor);
  pg.noFill();
}

function increaseWH(){
    if(wh === 0){
        w+=wPlus*wPlusInc;
        h+=hPlus*hPlusInc;
    }else if(wh === 1){
        w+=wPlus*wPlusInc;
        h+=wPlus*hPlusInc;
    }else if(wh === 2){
        w+=hPlus*wPlusInc;
        h+=hPlus*hPlusInc;
    }else if(wh === 3){
        w+=wPlus/wPlusInc;
        h+=hPlus/hPlusInc;
    }else if(wh === 4){
        w+=xPlus*wPlusInc;
        h+=xPlus*hPlusInc;
    }else{
        w+=yPlus*wPlusInc;
        h+=yPlus*hPlusInc;
    }
}
