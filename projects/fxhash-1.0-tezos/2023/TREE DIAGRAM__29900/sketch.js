var a = 0;
var t = 0;
var h = [];
var b = [];
var count = [];
var dep = 10;
var img;
var saveY;
var interetion;
var hash = "ooj2HmX8dgniNPuPRcapyXBn9vYpsNwgD1uwx98SLceF6iCZJZK";
var colorV;
var colorB;
var windowSize;
var pastDep = 1;
var fonter = 0;
var string 

function setup() {
    console.log("Dia");
  pixelDensity(1);
  //createCanvas(800, 800); 
  windowSize = min(windowWidth, windowHeight);
  hash = $fx.hash;
  interetion =  $fx.iteration
  createCanvas(windowSize, windowSize);
  fxS=int($fx.rand() * 10000000000);
    randomSeed(fxS);
  colorV = random([0,1]);
    if(colorV == 0)string = "WHITE";
    if(colorV == 1)string = "BLACK";
  if(random(1)<0.1){
  colorB = 1;
  }
  if(colorB == 1){
    colorV = 1;
    string = "BLUE";
  }
  img = createGraphics(2000, 2000);
  saveY = createGraphics(2000, 2000);
  img.pixelDensity(1);
  if(colorV == 0)img.background(220);
  if(colorV == 1)img.background(255-220);
  
  if(colorV == 0)background(220);
  if(colorV == 1)background(255-220);
  for (var i = 0; i < pow(2,dep); i++) {
    h[i] = random(i*random(100));
    b[i * 2] = random(0.5);
    b[i * 2 + 1] = random(0.5);
    count[i] = 0;
  }

    
}

function draw() {
    if(pastDep!=int((t/img.height)*dep)){
        fonter = 1;
    }else{
        fonter = 0;
    }
    pastDep = int((t/img.height)*dep);
  if (t < img.height*2) {
    for (var i = 0; i < img.width; i++) {
      if(colorV == 0)img.stroke(random(250,255));
      if(colorV == 1)img.stroke(255-random(250,255));
      if(colorB == 1)img.stroke(0,0,random(250,255));
      img.point(i, t%img.height);
    }
  }
  if(colorV == 0)stroke(random(20));
  if(colorV == 1)stroke(255-random(20));

  //background(220);
  var x0 = random(100);
  var y0 = random(100);
  var lengthX = 300;
  if(t==0){
    lineDraw(20, img.height/2, -20 + img.width, img.height/2, dep);
  }
  if(t < img.height){lineDraw(20, img.height/2, -20 + img.width, img.height/2, max(int((t/img.height)*dep),2));
                image(img, 0, 0, width, height);
                       textSize(5);
  noStroke();
  text("Tree diagram",4,10);
  strokeWeight(0.5);
  if(colorV == 0){stroke(1);fill(1);}
  if(colorV == 1){stroke(255);fill(255);}
                     for(var i=0;i<interetion; i++){
                      var y= i*(height-80)/interetion+40
                      line(5,y,5+5,y);
                     }
  line(width-165,height-10,width-10,height-10);
  noStroke();
  text(hash,width-165,height-12);
  text("#"+interetion,5,height-12);                 
  t++;
                }
  else if(t == img.height*2){
    lineDraw(20, img.height/2, -20 + img.width, img.height/2, dep);
    image(img, 0, 0, width, height);
  }
    if(t == img.height)$fx.preview();

}

function lineDraw(x0, y0, x1, y1, dep) {
  img.noStroke();
  if(colorV == 0)img.fill(0);
  if(colorV == 1)img.fill(255);
  if(random() < 0.1 && t == 0)img.text("#"+count[dep - 1],x0, y0); 
  if(random() < 0.1 && fonter == 1)img.text("#"+count[dep - 1],x0, y0); 
  if(random() < 1 && t == img.height-1)img.text("#"+count[dep - 1],x0, y0); 
  if(colorV == 0)img.stroke(random(100));
  if(colorV == 1)img.stroke(255-random(100));
  count[dep - 1]++; // countを配列として使い、対応する深さの要素をインクリメント
  img.line(x0, y0, x1, y1);
  img.line(x0 + (x1 - x0) * b[dep * 2 - 2], y0, x0 + (x1 - x0) * b[dep * 2 - 2] + abs(h[dep - 1]), y0 - abs(h[dep - 1]));
  img.line(x0 + (x1 - x0) * b[dep * 2 - 1], y0, x0 + (x1 - x0) * b[dep * 2 - 1] + abs(h[dep - 1]), y0 + abs(h[dep - 1]));
  if (dep > 1) {
    // 再帰の呼び出し時にもcountを渡す
    lineDraw(x0 + (x1 - x0) * b[dep * 2 - 2] + abs(h[dep - 1]), y0 - abs(h[dep - 1]), x1, y0 - abs(h[dep - 1]), dep - 1,0);
    lineDraw(x0 + (x1 - x0) * b[dep * 2 - 1] + abs(h[dep - 1]), y0 + abs(h[dep - 1]), x1, y0 + abs(h[dep - 1]), dep - 1,0);
  } else if (dep == 1) {
    img.line(x0 + (x1 - x0) * b[dep * 2 - 2] + abs(h[dep - 1]), y0 - abs(h[dep - 1]), x1, y0 - abs(h[dep - 1]));
    img.line(x0 + (x1 - x0) * b[dep * 2 - 1] + abs(h[dep - 1]), y0 + abs(h[dep - 1]), x1, y0 + abs(h[dep - 1]));
      for (var i = 0; i < pow(2,dep); i++) {
    count[i] = 0;
  }
    return;
  }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
  resizeCanvas(2000, 2000);
  image(img, 0, 0, width, height);
  textSize(5);
  noStroke();
  text("Tree diagram",4,10);
  strokeWeight(0.5);
  if(colorV == 0){stroke(1);fill(1);}
  if(colorV == 1){stroke(255);fill(255);}
     for(var i=0;i<interetion; i++){
      var y= i*(height-80)/interetion+40
      line(5,y,5+5,y);
     }
  line(width-165,height-10,width-10,height-10);
  noStroke();
  text(hash,width-165,height-12);
  text("#"+interetion,5,height-12);                 
  saveCanvas('myCanvas', 'png');
    
  resizeCanvas(windowSize, windowSize);
    image(img, 0, 0, width, height);
  textSize(5);
  noStroke();
  text("Tree diagram",4,10);
  strokeWeight(0.5);
  if(colorV == 0){stroke(1);fill(1);}
  if(colorV == 1){stroke(255);fill(255);}
     for(var i=0;i<interetion; i++){
      var y= i*(height-80)/interetion+40
      line(5,y,5+5,y);
     }
  line(width-165,height-10,width-10,height-10);
  noStroke();
  text(hash,width-165,height-12);
  text("#"+interetion,5,height-12);                 
  saveCanvas('myCanvas', 'png'); 
    }
}