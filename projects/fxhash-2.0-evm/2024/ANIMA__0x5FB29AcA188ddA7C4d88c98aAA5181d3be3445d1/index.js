scAX = $fx.rand();
scBX = $fx.rand();
scA = scAX > 0.5 ? 1 : -1;
scB = scBX > 0.5 ? 1 : -1;

scA1X = $fx.rand();
scB1X = $fx.rand();
scA1 = scA1X > 0.5 ? 1 : -1;
scB1 = scB1X > 0.5 ? 1 : -1;

scA2X = $fx.rand();
scB2X = $fx.rand();
scA2 = scA2X > 0.5 ? 1 : -1;
scB2 = scB2X > 0.5 ? 1 : -1;

scA3X = $fx.rand();
scB3X = $fx.rand();
scA3 = scA3X > 0.5 ? 1 : -1;
scB3 = scB3X > 0.5 ? 1 : -1;

scA4X = $fx.rand();
scB4X = $fx.rand();
scA4 = scA4X > 0.5 ? 1 : -1;
scB4 = scB4X > 0.5 ? 1 : -1;

A1 = rnd_int(1,1.5)
A2 = rnd_int(1,1.5)
A3 = rnd_int(1,2)

canV = { x: 1500, y: 2250, ratio: 'Vertical' };

let currentMesclaX = 0;
let direction = 1;
let togglesatA = 0;
let toggleFrW = false;
let togglebordB = false;
let toggleGrain = false;

mescla = ['HARD_LIGHT','MULTIPLY','ADD','SCREEN'];
mesclaX = rnd_int(0,3)

mesclaX 

bordB = 0;
frW = 40;

n001 = rnd_int(1,24);
n002 = rnd_int(1,15);
n004 = rnd_int(1,66);

seed = $fx.rand();
satA = rnd_int(100,200)

function preload() {
  m001 = loadImage(`image/001_${n001}.jpg`);
  m002 = loadImage(`image/002_${n002}.jpg`);
  m004 = loadImage(`image/004_${n004}.jpg`);
}

let layOrder = [lay1, lay2, lay3, lay4, lay5];

boLx = $fx.rand();
boL = boLx > 0.75 ? 0 : boLx > 0.5 ? 1 : boLx > 0.25 ? 2 : 3;

textuRaX = $fx.rand();
textuRa = textuRaX > 0.85 ? 0 : textuRaX > 0.65 ? 1 : 2;

pal = n004 >= 61 ? 11 : n004 >= 55 ? 10 : n004 >= 49 ? 9 : n004 >= 43 ? 8 : n004 >= 37 ? 7 : n004 >= 31 ? 6 : n004 >= 25 ? 5 : n004 >= 19 ? 4 : n004 >= 13 ? 3 : n004 >= 7 ? 2 : 1; 
let palavras = ["Recordação","Lembrança","Memória","Reconhecimento","Fragmento","Nostalgia","Memorização","Recuperação","Retenção","Cognição","Esquecimento","Sensação","Consciência","Sinapse","Implícita","Explícita","Reminiscência","Amnésia","Retrospectiva","Prospecção","Consolidação"];
TXT = rnd_int(0, Math.max(0, palavras.length - 1));

let angulos = [0,0,0,0,0,0,270];

poetryX = $fx.rand();

poet = poetryX > 0.666 ? 0 : 1;

QuantidadePalavras = rnd_int(25,50);

function setup() {
  randomSeed(rnd_int(0, 100000000))
  noiseSeed(rnd_int(0, 100000000))
  createCanvas(canV.x, canV.y);
  rectMode(CENTER);
  imageMode(CENTER);
  xx = canV.x
  yy = canV.y
}

function draw() {
  push()
  satValue = satA + "%"
  blurValue = xx/30 + "px"

  background("#ffffff");
  translate(xx/2,yy/2);
  for (let i = 0; i < layOrder.length; i++) {
    layOrder[i]();
  }
  pop()

  blendMode(OVERLAY)
  for (let i = 0; i < QuantidadePalavras; i++) {
    push(); 
    let x = random(-xx / 2, xx / 2); 
    let y = random(-yy / 2, yy / 2); 
    translate(x + xx / 2, y + yy / 2); 
    let angle = radians(angulos[int(random(angulos.length))]);
    rotate(angle);
    noStroke()

if (poet == 0){
    fill(0,random(75,150))
}
else{
  fill(0,0)
}

    textSize(random(xx / 25, xx / 50)); 
    textFont("CALIBRI LIGHT");
    textAlign(CENTER, CENTER); 
    shuffle(palavras, true);
    text(palavras[TXT], 0, 0); 
    pop(); 
  }

  translate(xx/2,yy/2);

  noFill()
  blendMode(BLEND)
  stroke("#ffffff")
  frameW = xx/frW
  strokeWeight(frameW)
  rect(0,0,xx,yy)

     blendMode(OVERLAY)
     noFill()
     rab = 20
     stroke(150,200)  
     for (let u =-xx; u < xx+75; u+=rab){
     for (let t = -yy; t < yy+75; t+=rab){
     strokeWeight(1) 
     ellipse(u,t,random(yy/4))
     }}

    if (textuRa == 0){     
     blendMode(OVERLAY)
     noStroke()
     rab = 15
     fill(100,255)  
     for (let u =-xx; u < xx+75; u+=rab){
     for (let t = -yy; t < yy+75; t+=rab){
     ellipse(u,t,yy/250)
     }}
    }

    else if (textuRa == 1){     
      blendMode(OVERLAY)
      noStroke()
      rab = 15
      fill(90,200)  
      for (let u =-xx; u < xx+75; u+=rab){
      for (let t = -yy; t < yy+75; t+=rab){
      rect(u,t,yy/200)
      }}
     }

    else{}

  noLoop();
  $fx.preview()
}

function keyTyped() {
  if (key === "s" || key === "S" || key === "J" || key === "j") {
    save(`Anima.${key === "J" || key === "j" ? "jpg" : "png"}`);
  } 
}

function rnd_btw(min, max) {return $fx.rand() * (max - min) + min;}
function rnd_btwexp(min, max) {return $fx.rand() ** 2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min); max = Math.floor(max);return Math.floor($fx.rand() * (max - min + 1)) + min;}

function lay1() {
push();
scale(scA,1)
drawingContext.filter = `blur(5px) contrast(125%) saturate(0%)`;
image(m001, 0, 0, xx*A1, yy*A1);
pop();
}

function lay2() {
}

function lay3() {
push();
drawingContext.filter = `blur(0px) contrast(150%)`;
blendMode(OVERLAY);
scale(scA2, scB2)
image(m002, 0, 0, xx*A3, yy*A3);
pop();
}

function lay4() {
push();
drawingContext.filter = `blur(${blurValue}) contrast(100%) saturate(${satValue})`;
blendMode(window[mescla[mesclaX]])
scale(scA3, scB3)
image(m004, 0, 0, xx*A2, yy*A2);
pop()
}

function lay5() {
}

$fx.features({
  "Color Zone": getPal(pal),
  "Flora ": getFlora(n002), 
  "Mix": getMix(mesclaX),
  "Texture": getTextura(textuRa),
  "Poetry": getPoetry(poet), 
})

function getPal(pal) {
  if (pal == 1) return "DRAGON";
  if (pal == 2) return "BRAZILIAN";
  if (pal == 3) return "MUNCH";
  if (pal == 4) return "80'S";
  if (pal == 5) return "STARRY NIGHT";
  if (pal == 6) return "PORTINARI";
  if (pal == 7) return "DESERT";
  if (pal == 8) return "MONO PINK";
  if (pal == 9) return "MONO LEMON";
  if (pal == 10) return "RGB";
  if (pal == 11) return "DUAL";
  }

  function getFlora(n002) {
    if (n002 == 1) return "I";
    if (n002 == 2) return "II";
    if (n002 == 3) return "III";
    if (n002 == 4) return "IV";
    if (n002 == 5) return "V";
    if (n002 == 6) return "VI";
    if (n002 == 7) return "VII";
    if (n002 == 8) return "VIII";
    if (n002 == 9) return "IX";
    if (n002 == 10) return "X";
    if (n002 == 11) return "XI";
    if (n002 == 12) return "XII";
    if (n002 == 13) return "XIII";
    if (n002 == 14) return "XIV";
    if (n002 == 15) return "XV";
  }


  function getMix(mesclaX) {
    if (mesclaX == 0) return "HARD_LIGHT";
    if (mesclaX == 1) return "MULTIPLY";
    if (mesclaX == 2) return "ADD";
    if (mesclaX == 3) return "SCREEN";
  }

  function getTextura(textuRa) {
    if (textuRa == 0) return "DOT";
    if (textuRa == 1) return "SQUARE";
    if (textuRa == 2) return "LINE";
  }

  function getPoetry(poet) {
    if (poet == 0) return "VISIBLE";
    if (poet == 1) return "INVISIBLE";
  }
