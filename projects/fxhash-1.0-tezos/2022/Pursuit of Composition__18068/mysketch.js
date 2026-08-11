var palette = [];
var sincosArr = [];
var rectList1 = [];
var rectList2 = [];

var seed;
var minwidth;

function setup() {

  seed = fxrand() * 100000;
  randomSeed(seed);
  noiseSeed(seed);
  let divNum = int(random(3, 7));

  minwidth = min(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);

	pixelDensity(2);
	smooth();
  background(40);

	palette = [color(67, 105, 161), color(187, 141, 30), color(147, 28, 12),color(40, 40, 40)];
	sincosArr = [createSinArr(0, 360),createCosArr(0, 360)];
  rectList1.push(new rectObj(createVector(width/2-(minwidth/2),height/2-(minwidth/2)),minwidth,minwidth+1));

  while (divNum>0) {
    divideRect(rectList1, rectList2);
    divideRect(rectList2, rectList1);
    divNum--;
  }

  for (let i = 0;i<rectList1.length;i++) {
    let rect = rectList1[i];
    let w = rect.w;
    let h = rect.h;
    let x = rect.pos.x;
    let y = rect.pos.y;
    push();
    translate(x, y);
    oilRect(w, h, 0, 3);
    pop();
  }

  fxpreview();
  noLoop();
}

function divideRect(_rectList1, _rectList2) {
  //wとhの長さに応じて縦、横に分割
  for (let i = 0;i<_rectList1.length;i++) {
    let rect = _rectList1[i];
    let rectW = rect.w;
    let rectH = rect.h;
    if (rect.w>rect.h) {
      let randomW = int(random(rectW*0.3, rectW*0.7));
      while (randomW == rectH | (rectW-randomW)==rectH| randomW<0) {
        if (randomW < 2) {
          break;
        }
        randomW = int(random(rectW*0.3, rectW*0.7));
      }
      _rectList2.push(new rectObj(rect.pos, randomW, rectH));
      _rectList2.push(new rectObj(createVector(rect.pos.x+randomW, rect.pos.y), rectW-randomW, rectH));
    } else if (rect.h>rect.w) {
      let randomH = int(random(rectH*0.3, rectH*0.7));
      while (randomH == rectW| (rectH-randomH)==rectW|randomH<0) {
        if (randomH < 2) {
          break;
        }
        randomH = int(random(rectH*0.3, rectH*0.7));
      }
      _rectList2.push(new rectObj(rect.pos, rectW, randomH));
      _rectList2.push(new rectObj(createVector(rect.pos.x, rect.pos.y+randomH), rectW, rectH-randomH));
    }
  }
  _rectList1.splice(0);
}


