//A doily a day keeps the existential dread at bay 

let pal = [
  [
    "#c343f2",
    "#43a0f2",
    "#f2a643",
    "#43f278",
    "#f2e343",
    "#f24358",
    "#43f278",
    "#f2e343",
    "#f2a643",
    "#f24358",
  ], //0
  [
    "#f9f0de",
    "#5ec5ee",
    "#f0ac00",
    "#d7312e",
    "#2c52a0",
    "#f7bab6",
    "#0c7e45",
    "#1d1d1b",
  ], //1
  [
    "#DB4E54",
    "#4F3C2D",
    "#305E90",
    "#389894",
    "#C7E3D4",
    "#4F3C2D",
    "#DB4E54",
    "#389894",
    "#305E90",
    "#FFBB12",
  ], //2
  ["#65136c", "#d7d7d7", "#f22e0e", "#00a75e", "#f66689"], //3
  [
    "#fc3503",
    "#f7f3f2",
    "#f5d216",
    "#0077e1",
    "#0a0a0a",
    "#f7f3f2",
    "#0a0a0a",
    "#0077e1",
    "#f5d216",
    "#fc3503",
  ], //4

  [
    "#dbecf2",
    "#768448",
    "#312f2b",
    "#464d4e",
    "#8ac0ea",
    "#fcf9f2",
    "#5d91b6",
    "#312f2b",
    "#dce87c",
    "#fac3bf",
  ], //5

  ["#d24b2b", "#f9f0de", "#392b42", "#385d32", "#fab511"], //6

  ["#392b24", "#392b24", "#e51531", "#f9f0de", "#f9f0de", "#e51531"], //7

  ["#d7481e", "#d9771e", "#5c7346", "#d1d2aa", "#eeaf24"], //8

  [
    "#f9f0de",
    "#005aa7",
    "#1d1d1b",
    "#53c5ee",
    "#ffd200",
    "#e6007b",
    "#d2b0a3",
    "#e51f23",
  ], //9

  [
    "#968378",
    "#595c5b",
    "#191917",
    "#e2e2e0",
    "#c8c8c7",
    "#333436",
    "#f9f9f5",
    "#9dd2ba",
    "#9dd2ba",
    "#0d0f0c",
  ], //10

  [
    "#f8ab51",
    "#080705",
    "#0a203f",
    "#ad7432",
    "#ee8927",
    "#eebb4e",
    "#6dbdc4",
    "#f9f4e4",
    "#151829",
    "#efdec4",
  ], //11
  [
    "#44cfce",
    "#f768b8",
    "#eefbfe",
    "#e595c9",
    "#8fe8db",
    "#f7f7a0",
    "#dac5e3",
    "#585978",
  ], //12

  [
    "#990066",
    "#99cc33",
    "#006699",
    "#000",
    "#cc3399",
    "#ff9900",
    "#3399cc",
    "#669900",
    "#faebd7",
    "#ccee66",
    "#ffcc00",
    "#ff6600",
  ], //13

  [
    "#aa544b",
    "#c2c3c1",
    "#e3d4ab",
    "#464853",
    "#d4ab63",
    "#a99866",
    "#f1eee0",
    "#8da4b0",
    "#3c3f67",
  ], //14
];

let saving = false;

let abun = [
  20,
  24,
  30,
  36,
  40,
  48,
  54,
  60,
  66,
  72,
  78,
  80,
  88,
  90,
  96,
  100,
  108,
  120,
];

let w = 1280;
let buffw = 1000; 
let po = []
let po1 = []
let sp = []
let t = 0; 
let f = 0;
let colA = []
let sta;

function setup() {
  preDraw();
  
  palC = round(random(14));
  shuffle(pal[palC], true);
  
  colSc = chroma.scale(pal[palC])
  
  bc = random()
  if (bc<0.99){
  bgC = random(["#E1D9D1","#FAF9F6", "#FCF5E5", "#FFF5EE","#F9F6EE"]);
  } else {
  bgC = "#28282B"
  }

  ww = width / 2;
  hh = height / 2;
  rot = random(PI);
  rotUnder = random(PI);
  rotOver = random(PI);
  
  imageMode(CENTER);
  
  pL = abs(pal[palC].length);
  m = w/4

  nof = random(0.002, 0.01);
  offset = random(420, 42000);
  noisefx = random(0.005,0.01)
  noisefy = random(0.005,0.01)
  offset1 = random(420, 42000);
  noisefx1 = random(0.005,0.01)
  noisefy1 = random(0.005,0.01)
  
  xoff = random(0.1, 6.9);
  yoff = random(0.1, 6.9);
  pSize = random(1, 6.9);
  xNum = random(2,4.2);
  
  ncW = width/2
  ncH = height/2
  nc = createGraphics(width/2,height/2)
  nc.colorMode(HSB)
  nc.rectMode(CENTER);
  noiseCanvas();
  
  bg = createGraphics(width,height)
  bg.colorMode(HSB) 
  bgShapes()
  bg.filter(BLUR,random(3,7));
  bg.filter(POSTERIZE,random(11,22));
  
 bg1 = createGraphics(width,height);
 bg1.colorMode(HSB); 
 bg1.tint(255,0.05)
 bg1.image(bg,0,0);
 bg1.noTint();
  
  main = createGraphics(width,height);
  main.colorMode(HSB);
  main.blendMode(MULTIPLY)
  main.pixelDensity(2)
  main.noFill();
  
  g1 = createGraphics(width,height);
  g1.imageMode(CENTER);
  
  fin = createGraphics(width,height);
  fin.imageMode(CENTER);
  
  moveAmount = round(random(420,1024));
  
  rNum = random([4,8,16,24])
  mb = random(11,m);
  
  xdiv = round(random(128,256));
  ydiv = round(random(128,256));
  xspac = (width - 2 * m) / xdiv
  yspac = (height - 2 *m) / ydiv
  y = m; 
  
  sta = colSc(random()).hex()
  nd = 3
 
  hCut = random([hh-11,hh-22,hh-34,hh])
  
  curvePoints();
 
}

mainCount = 1;
count = 1;
dPhase = 1;
cNum = 0;

function draw() {

  background(bgC);
 
  image(bg1,ww,hh)
  
  layer();
  
  if (y > hCut) {
  sp = []
  y = m;
  xdiv = round(random(128,256));
  ydiv = round(random(128,256));
  xspac = (width - 2 * m) / xdiv
  yspac = (height - 2 *m) / ydiv
  xoff = random(0.1, 6.9);
  yoff = random(0.1, 6.9);
  pSize = random(1, 6.9);
  xNum = random(2,4.2);  
  sta = colSc(random()).hex()
  curvePoints()
  offset = random(42,42000)
  mainCount+=1   
  }
    
  if (mainCount%nd===0){
  fc = createGraphics(width,height);
  fc.imageMode(CENTER)
  fc.colorMode(HSB)
  
  fc.push();
  fc.translate(ww,hh);
  fc.image(fin,0,0)
  fc.pop();  
    
  fc1 = createGraphics(width,height);
  fc1.imageMode(CENTER)
  fc1.colorMode(HSB)
  
  fc1.push();
  fc1.translate(ww,hh);
  fc1.image(fin,0,0)
  fc1.pop();
    
  fc.filter(BLUR,random(3,7));
  fc.filter(POSTERIZE,random(11,22));
    
  noiseImage(fc,1,22);
    
  background(bgC)
  tint(255,0.03)
  image(bg,ww,hh)
  noTint()

  image(fc1,ww,hh);
    
  tint(255,0.34);
  image(fc,ww,hh);
  noTint();
    
  tint(255,0.11);
  image(fc1,ww,hh)
  noTint()
    
  
  tint(255,0.05)
  image(nc,ww,hh,width,height);
  noTint();

   noiseImage(this, 1, 2); 
   noLoop();
   fxpreview();
   saving = true;
    
   }
}

function curvePoints(){
  
  for (let x = m+xspac; x <= width-xspac-m; x += xspac) {
    
    let n = noise(x*noisefx+offset,y*noisefy+offset,y)
    
   let cc = colSc(n).hex();
 
    gg = {
      x: x, y: y, col: cc
    }
    sp.push(gg); 
    
  colA.push(cc)
  }
  
}
 
function layer(){
  
  for (let k = 0; k<2; k++){
    
  for (let i = 0; i < moveAmount; i++){  
    movePoints();
  }
  main.strokeWeight(1);
  main.stroke(sta)
  main.beginShape(POINTS);
  for (let j = 0; j < sp.length; j++){
  let x = sp[j].x
  let y = sp[j].y
  main.curveVertex(x,y)
  }
  main.endShape();
  
    
  g1.image(main,ww,hh);
  g1.push();
  g1.translate(ww,hh);
  g1.scale(-1,1);
  g1.image(main,0,0);
  g1.pop();
    
    
  fin.push()
  fin.translate(ww,hh)
  for (k = 0; k<rNum;k++){
  fin.rotate(k*TAU/rNum)
  fin.image(g1,0,0)
  }
  fin.pop()
    
  push();
  translate(ww,hh);
  image(fin,0,0)
  pop();
    
 y += yspac;  
 sp = []
 colA = []
 curvePoints();
   
   
  if (y > hCut) {
   break;
  }  
   
  }  
  
}

function movePoints(){
  
  for (let i = 0; i < sp.length; i++) {
    let n = noise(
      sp[i].x * noisefx1 + offset1,
      sp[i].y * noisefy1 + offset1
    );

    let nX =
      xNum * sin(0.5 - noise(sp[i].x * noisefx+offset, sp[i].y * noisefy+offset, xoff));

    let nY = 0.55 - noise(sp[i].x * noisefx, sp[i].y * noisefy, yoff);
      
    let x = sp[i].x
    let y = sp[i].y

    sp[i].x += nX;
    sp[i].y += nY;  
    
  }
  
}


function bgShapes(){
  tinc = TAU / round(random(3,128))
  let r = hh
  w1 = random(width)
  h1 = random(height)

  for (let a = 0; a<TAU; a+=tinc){
  
   let x = ww+r * sin(a)
   let y = hh+ r * cos(a)
   
   bg.noStroke()
   let n = random()
   let c = colSc(n).hex()
   bg.fill(c)
   bg.push()
   bg.translate(w1,h1)
   bg.rotate(a)
   bg.rect(0,0,r,r/tinc)
   bg.pop()
  }

}


function noiseCanvas(){
  ns = random(0.002,0.0069);
  off1 = random(42,420);
  nS = random([11,22,34,42,69])
  for (let x=0;x<=width/2;x+=3){
    for (let y=0;y<=height/2;y+=3){
    let n = (noise(x*ns,y*ns)-0.2)*1.55;
    let nn = (noise(x*ns+off1,y*ns+off1)-0.2)*1.55;
   
      nc.fill(nn*255,n*255);
      nc.push();
      nc.translate(x,y);
      nc.rect(0,0,n*nS);
      nc.pop();
    }
  }
  nc.filter(BLUR,3)
  
}

function noiseImage(img, scaleFactor, amount) {
  img.loadPixels();
  let change = amount * sqrt(scaleFactor);
  let size =
    4 * (img.width * img.pixelDensity()) * (img.height * img.pixelDensity());
  let pixels = img.pixels;
  for (let i = 0; i < size; i += 4) {
    var n = -change + random() * change * 2;
    pixels[i] += n;
    pixels[i + 1] += n;
    pixels[i + 2] += n;
  }
  img.updatePixels();
}

function preDraw() {
  let seed = floor(999999 * fxrand());
  randomSeed(seed);
  noiseSeed(seed);
  let tempcan = createCanvas(w, w);
  tempcan.parent("fulllscreen");
  rectMode(CENTER);
  pixelDensity(2);
  colorMode(HSB);
}

function mousePressed() {
  if (saving){
  saveCanvas("happyaccidents-doily", "png");
  }
}

function keyTyped() {
  if (saving){
  if (key === "s" || key === "S") {
    saveCanvas("happyaccidents-doily", "png");
  }
  }  
}


