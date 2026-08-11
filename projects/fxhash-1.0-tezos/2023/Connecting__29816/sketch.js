//最小値 + $fx.rand() * (最大値 – 最小値)
var pos = [], prev = [];
var allPos = [];
var drippingDotNum = 100;
var drippingDotCount = 0;
var dripLength = 50; //下で変更される

var prevX=200, prevY=0;
var posX=200, posY=0;

var size = 10;
var posNum = 200;

var glitchNum = 1;
var glitchCount = 0;

let murakamiFlowerColors = ["#E65298", "#E95633", "#F19239", "#	#FBC53F", "#FFF53E", "#AACF53", "#01A75F", "#03ADAD", "#01AFED", "#1980C2", "#4D4499", "#A54B97", "#231810", "#E60317"];

function generateColor() {
  return murakamiFlowerColors[floor($fx.rand()*murakamiFlowerColors.length)];
}

function setup() {
  createCanvas(1920, 1080);

  //初期値（色、玉の初期位置）のセットアップ
  for(var i=0; i<posNum; i++){
    var col = generateColor();
    pos[i]  = {x:$fx.rand() * width, y:0, c:col};
    prev[i] = {x:$fx.rand() * width, y:0, c:col};
  }

  strokeWeight(0.5);
  background(generateColor());

  size   = 10  + $fx.rand() * (20 - 10);
  posNum = 100 + $fx.rand() * (200 - 100);
}

function draw() {
  for(var i=0; i<posNum; i++){
    if(pos[0].y < height){
      pos[i].x = pos[i].x + sin(frameCount)*size;
      pos[i].y = pos[i].y + noise(frameCount)*size;

      allPos.push(pos[i]);

      fill(pos[i].c);

      circle(pos[i].x, pos[i].y, random(size));

      //玉を繋ぐ
      stroke(pos[i].c);
      strokeWeight(random(0, 1));

      if(frameCount != 1){
        beginShape();
        curveVertex(prev[i].x, prev[i].y);
        for(var j=0; j<3; j++){
          curveVertex(prev[i].x + noise(frameCount), prev[i].y+ noise(frameCount));
        }
        curveVertex(pos[i].x, pos[i].y);
        endShape(CLOSE);
      }

      prev[i].x = pos[i].x; prev[i].y = pos[i].y;
    }
  }

  if(height < pos[0].y && drippingDotCount < drippingDotNum){
    dripLength = int(50 + $fx.rand() * (1000 - 50));
    noStroke();
    var buffx = $fx.rand() * width, buffy = $fx.rand() * height;
    var buffc = get(buffx, buffy);

    //ドリップ
    for(var i=0; i<dripLength; i++){
      fill(buffc);
      if(i < dripLength/3){
        circle(buffx, buffy, 3);
      }else if(i < (dripLength/3)*2){
        circle(buffx, buffy, random(1, 1.5));
      }else{
        circle(buffx, buffy, random(0.3, 0.5));
      }
      buffy += 1;
    }
    drippingDotCount += 1;
  }

  //グリッチ
  else if(height < pos[0].y && drippingDotCount >= drippingDotNum){
    if(glitchCount < glitchNum){
      var img = get();

      img = draw_shift_glitch(img, 100);
      image(img, 0, 0);
      glitchCount++;
    }
  }
}

function draw_shift_glitch(img, shift_size){
  background(0);
  image(img, 0, 0);

  for(let i=0;i<10;i++){
    let sx = $fx.rand() * (img.width  * 0.5);
    let sy = $fx.rand() * (img.height * 0.05);
    let x  = $fx.rand() * (img.width  - sx　* 0.5);
    let y = $fx.rand()  * (img.height - sy　* 0.5);
    let ix = x -1 + $fx.rand() * shift_size;
    let iy = y;

    image(img, ix, iy, sx, sy, x, y, sx, sy);
  }

  let img_glitch = get();
  clear();

  return img_glitch;
}
