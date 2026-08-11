let 
p = fxrand();
q = fxrand();

seed = fxrand() * 101010101010;

numero1 = fxrand();
numero = numero1 > 0.8 ? 25 : numero1 > 0.4 ? 30 : numero1 > 0.15 ? 35 : numero1 > 0.05 ? 40 : 50;

d1 = fxrand();
D = d1 > 0.5 ? 4 : 8;

paleta0 = ["#092B33",  "#1D4B55",  "#D6D9C5",  "#A67F5D",  "#554232", "#225A66", "#062E37",  "#396068", "#DAD7AE",  "#85684E",  "#403125","#163A46"]; //RETIRANTES - PORTINARI
paleta1 = [  "#FFFAED",  "#3D382A",  "#C29E5C",  "#B3A98D",  "#D3CDBE",  "#3D382A",  "#E0BE7E",  "#B3A98D","#FFFAED",  "#3D382A",  "#E0BE7E",  "#B3A98D",]; // WOOD
paleta2 = [  "#053BA6",  "#FFFFFF",  "#0C68C4",  "#023E73",  "#031125","#001E47", "#053BA6",  "#FFFFFF", "#0C68C4",  "#023E73",  "#001E47","#0C68C4"]; //AZULEJOS BSB - ATHOS BULCÃO
paleta3 = [ "#ffffff", "#A6A6A6",  "#595959",  "#262626",  "#FFFFFF", "#000000",  "#F2F2F2", "#A6A6A6",  "#595959",  "#262626",  "#0D0D0D", "#ffffff"]; //GUERNICA - PICASSO 
paleta4 = [ "#E6E3E3",  "#858585",  "#535353",  "#000000",  "#C0C0C0", "#E6E3E3",  "#7C7B7B",  "#FF0000",  "#000000",  "#FFFFFF",  "#000000",  "#FFFFFF", ]; //BANKSY - A MENINA COM BALÃO
paleta5 = [ "#000000",  "#ffffff",  "#ff0000",  "#ffff00",  "#0000ff",  "#ff0000",  "#ffff00",  "#0000ff",  "#000000",  "#ffffff", "#ffffff",  "#000000", ]; //MONDRIAN
paleta6 = [  "#414269",  "#17181A",  "#4E6BA6",  "#465B90",  "#36445C", "#28292D", "#23338C",  "#282D29",  "#354974",  "#2E3957",  "#FFD907","#5F7298"]; //NOITE ESTRELADA - VAN GOGH
paleta7 = [ "#29241D", "#29241D",  "#EA8B30",  "#6493B1",  "#9D6438", "#FFFAED",  "#1C1A17", "#F2E3B6",  "#EA8B30",  "#6493B1",  "#9D6438", "#FFFAED"]; // SALVADOR DALI - Persistência da Memória
paleta8 = [ "#F29422",  "#F25C05",  "#F21905",  "#021911",  "#1B3D3C",  "#F29422",  "#F25C05",  "#F21905",  "#021911",  "#1B3D3C","#052D35","#FFDF73"]; //O GRITO - MUNCH
paleta9 = [ "#867A55",  "#302410",  "#533D15",  "#050400",  "#382011",  "#000000", "#867A55",  "#302410",  "#533D15",  "#000000",  "#833706",  "#E7E1D1"]; // RONDA NOTURNA - REMBRANT
paleta10 = [ "#A3B5D9", "#D8CEB5",  "#D9C484",  "#A6774E",  "#261913",  "#764733",  "#A3B5D9", "#D8CEB5",  "#D9C484",  "#A6774E", "#261913",  "#764733"]; //SERVO FERIDO - FRIDA KAHLO
paleta11 = [ "#ffffff", "#3D3D3D",  "#BBBABA",  "#E6E6E6",  "#FFFFFF", "#000000",  "#161616", "#4E4E4E",  "#A3A3A3",  "#E0E0E0",  "#0D0D0D", "#ffffff"]; //GRAYSCALE
paleta12 = [ "#FFEB3B", "#3D3D3D",  "#FFC107",  "#E4E2CF",  "#795548", "#ECD402",  "#C3C2BA", "#4E4E4E",  "#A3A3A3",  "#E0E0E0",  "#FF9800", "#E5E4D4"]; //VERGARA
paleta13 = [ "#122003", "#8BC34A",  "#4CAF50",  "#355016",  "#1A6E20", "#5B7240", "#8BC34A",  "#4CAF50",  "#355016",  "#243613","#263F09",  "#303A17",]; //ZREEN

paleta = [paleta0,  paleta1,  paleta2,  paleta3,  paleta4,  paleta5,  paleta6,  paleta7,  paleta8,  paleta9, paleta10, paleta11, paleta12, paleta13];

corn = fxrand();
corN = corn > 0.95 ? 0 : corn > 0.85 ? 1 : corn > 0.8 ? 2 : corn > 0.75 ? 3 : corn > 0.7 ? 4 : corn > 0.65 ? 5 : corn > 0.6 ? 6 : corn > 0.5 ? 7 : corn > 0.45 ? 8 : corn > 0.375 ? 9 : corn > 0.275 ? 10 : corn > 0.2 ? 11 : corn > 0.1 ? 12 : 13;

cor = paleta[corN];
cor1 = rnd_int(0, 11);

rot1 = fxrand()
rot = rot1 > 0.85 ? 0 : rot1 > 0.7 ? 1 : rot1 > 0.55 ? 2 : rot1 > 0.425 ? 3 : rot1 > 0.3 ? 4 :  rot1 > 0.2 ? 5 : rot1 > 0.1 ? 6 : rot1 > 0.05 ? 7 :8;

dir1 = fxrand();
dir = dir1 > 0.775 ? 0 : dir1 > 0.55 ? 1 : dir1 > 0.35 ? 2 : dir1 > 0.15 ? 3 : dir1 > 0.05 ? 4 : 5;

can1 = 0.6667

fator1 = fxrand();
fatorM = fator1 > 0.75 ? 12.5 : fator1 > 0.25 ? 10 : 7.5;

quantA = 250

fatorN1 = fxrand() 
fatorN = fatorN1 > 0.85 ? 4 : fatorN1 > 0.65 ? 3 : fatorN1 > 0.4 ? 2 : fatorN1 > 0.2 ? 1 : 0.75 
fatorNQ = 1

imageRot = rnd_int(0,3)

def = fxrand()
long = def > 0.65 ? 5 : def > 0.2 ? 3 : 10 
passo = def > 0.65 ? 75 : def > 0.2 ? 35 : 50  

paper1 = fxrand()
paper = paper1 > 0.75 ? 0 : paper1 > 0.5 ? 1 : paper1 > 0.25 ? 2 : 3;

function preload() {
  mL = loadImage(`loading.png`);
}

function setup() {
  
  p5grain.setup();
  
  let can = 1080;
  
  randomSeed(seed)
  noiseSeed(seed)
  
  createCanvas(can * can1, can );
  mm = createGraphics(can * can1, can );
  mm1 = createGraphics(can * can1, can );
  mm2 = createGraphics(can * can1, can );

  xx = width
  yy = height
  
  rectMode(CENTER);
  mm.rectMode(CENTER);
  mm1.rectMode(CENTER);
  mm2.rectMode(CENTER);
  imageMode(CENTER);
  mm.imageMode(CENTER);
  mm1.imageMode(CENTER);
  mm2.imageMode(CENTER);
  
  colorMode(RGB, 255);
 
  if (corN == 0 ){background("#C9C6BA")}
  if (corN == 1 || corN == 5 || corN == 10 || corN == 12 ){background("#FFFAED");}
  if (corN == 2 || corN == 4 || corN == 6 || corN == 11){background("#FFFFFF")}
  if (corN == 3 ){background("#000000");}
  if (corN == 7 ){background(cor[cor1])}
  if (corN == 8 ){background("#A16219");}
  if (corN == 9 ){background("#9E9475");}
  if (corN == 13 ){background("#E5EBDF");}

  image(mL,(xx/2),(yy/2),xx/3.5,yy/50)
  
}

function draw() {
  
  push();

  push()
  mm2.strokeWeight(0.025)
  if (xx > yy) { mm2.strokeWeight(0.045)}
  mm2.stroke(colorAlpha("#8C8B8A", 1)); 
  mm2.noFill()
  for (var i = 0; i<= xx; i+=xx/150){
  for (var j = 0; j<= yy; j+=yy/150){  
    
    switch(paper){
    // switch(2){
    case 0:
    mm2.ellipse(i,j,random(200),random(yy/100,yy/50))
    break;
    case 1:
    mm2.ellipse(i,j,random(xx/50,xx/25),random(200))
    break;
    case 2:
    mm2.ellipse(i,j,random(200),random(yy/100,yy/50))
    mm2.ellipse(i,j,random(xx/50,xx/25),random(200))
    break;
    case 3:
    mm2.ellipse(i,j,random(100),random(100))
    break;
    default:
  }
  }      
  }
  pop()
  
  formas();

  if (xx > yy) {mm.strokeWeight(xx)}
  if (xx <= yy) {mm.strokeWeight(yy)}
  mm.noFill(0);
  mm.stroke(colorAlpha(cor[cor1],0.5));
  mm.rect(xx/2, yy/2, xx, yy);
 
  pop()
  
  drawingContext.shadowlongsetX = 0;
  drawingContext.shadowlongsetY = 0;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = "#000000";
  
  switch (imageRot){
    case 0:
    if (xx > yy) { image(mm1,xx/2,yy/2, xx-(xx/fatorM), yy-(xx/fatorM));}
    if (xx <= yy) {image(mm1,xx/2,yy/2, xx-(yy/fatorM), yy-(yy/fatorM));}
    image(mm2,xx/2,yy/2,xx,yy)
    drawingContext.filter = "opacity(50%)"
    image(mm2,xx/2,yy/2,xx,yy)
    break;
    case 1:
      scale(-1,1)
    if (xx > yy) { image(mm1,-xx/2,yy/2, xx-(xx/fatorM), yy-(xx/fatorM));}
    if (xx <= yy) {image(mm1,-xx/2,yy/2, xx-(yy/fatorM), yy-(yy/fatorM));}
    image(mm2,-xx/2,yy/2,xx,yy)
    drawingContext.filter = "opacity(50%)"
    image(mm2,-xx/2,yy/2,xx,yy)
  break;
  case 2:
    scale(-1,-1)
    if (xx > yy) { image(mm1,-xx/2,-yy/2, xx-(xx/fatorM), yy-(xx/fatorM));}
    if (xx <= yy) {image(mm1,-xx/2,-yy/2, xx-(yy/fatorM), yy-(yy/fatorM));}
    image(mm2,-xx/2,-yy/2,xx,yy)
    drawingContext.filter = "opacity(50%)"
    image(mm2,-xx/2,-yy/2,xx,yy)
      break;
      case 3:
    scale(1,-1)
    if (xx > yy) { image(mm1,xx/2,-yy/2, xx-(xx/fatorM), yy-(xx/fatorM));}
    if (xx <= yy) {image(mm1,xx/2,-yy/2, xx-(yy/fatorM), yy-(yy/fatorM));}
    image(mm2,xx/2,-yy/2,xx,yy)
    drawingContext.filter = "opacity(50%)"
    image(mm2,xx/2,-yy/2,xx,yy)
      break;
      default:
  }
      
  push()
  noFill()
  strokeWeight(yy/fatorM)
  stroke("#FCF0D2")
  pop()
  granulateSimple(10);
  
  if (frameCount == 1) {fxpreview();
  noLoop();
  }
}

function keyTyped() {
  if (key === "s" ||  key === "S" ) {
    save(`assumption.png`);
  }
}


window.$fxhashFeatures = {
  COLOR_SCHEME: getZONE(corN),
  SHAPE: getForm(dir),
  DENSITY: getFRAG(fatorN),
  ROTATION: getROT(rot),
  DEFORMATION: getDeforma(long),
};


function getZONE(corN) {
  if (corN == 0) return "PORTINARI";
  if (corN == 1) return "WOOD";
  if (corN == 2) return "ATHOS BULCÃO";
  if (corN == 3) return "PICASSO";
  if (corN == 4) return "BANKSY";
  if (corN == 5) return "MONDRIAN";
  if (corN == 6) return "VAN GOGH";
  if (corN == 7) return "DALI";
  if (corN == 8) return "MUNCH";
  if (corN == 9) return "REMBRANT";
  if (corN == 10) return "FRIDA";
  if (corN == 11) return "GRAYSCALE";
  if (corN == 12) return "VERGARA";
  if (corN == 13) return "ZREEN";
}

function getForm(dir) {
  if (dir == 0) return "I";
  if (dir == 1) return "II";
  if (dir == 2) return "III";
  if (dir == 3) return "IV";
  if (dir == 4) return "V";
  if (dir == 5) return "VI";
}

function getFRAG(fatorN) {
  if (fatorN == 0.75) return "PP";
  if (fatorN == 1) return "P";
  if (fatorN == 2) return "M";
  if (fatorN == 3) return "G";
  if (fatorN == 4) return "GG";
}

function getROT(rot) {
  if (rot == 0) return "I";
  if (rot == 1) return "II";
  if (rot == 2) return "III";
  if (rot == 3) return "IV";
  if (rot == 4) return "V";
  if (rot == 5) return "VI";
  if (rot == 6) return "VII";
  if (rot == 7) return "VIII";
  if (rot == 8) return "IX";
}


function getDeforma(long) {
  if (long == 5) return "x";
  if (long == 3) return "2x";
  if (long == 10) return "3x";

}				
				

