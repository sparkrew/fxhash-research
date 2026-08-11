/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rnd_btw(min, max) {return fxrand() * (max - min) + min;}

function rnd_btwexp(min, max) {return fxrand() ** 2 * (max - min) + min;}

function rnd_int(min, max) {min = Math.ceil(min); max = Math.floor(max); return Math.floor(fxrand() * (max - min + 1)) + min;}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VARIAVEL ARCOS,LINHAS,MOVIMENTOS

var arcs = [];
var linear = [];
var linhasarcos = [];
var movimentum = [];

//ARRAY POTENCIAL DE 2

arraypotenciad2 = [2,4,8,16,32,64,128]
let p2 = rnd_int(0,4)

// VARIAVEL PARA NUMERO MAX DE TRIANGULOS

var nm = rnd_int(15,25)

// ARRAY PI

arraypi = [45,90,135,180,225,270,315,360]

// PALETAS E CORES 

// QUAD

var paleta1 = ["#470063","#3a6ea5","#80ced7","#b75d69","#eacdc2"];
var paleta2 = ["#7a6c5d","#2a3d45","#ddc9b4","#bcac9b","#c17c74"];
var paleta3 = ["#001b2e","#0077b6","#00b4d8","#90e0ef","#caf0f8"];
var paleta4 = ["#0a0a0a","#8d99ae","#4a321c","#d77a61","#f97068"];
var paleta5 = ["#2b2d42","#8d99ae","#5d8798","#a30b37","#ea638c"];
var paleta6 = ["#2b2d42","#8d99ae","#2f444c","#cf5c36","#efc88b"];
var paleta7 = ["#151515","#8d99ae","#10422a","#a1e8cc","#a5ffd6"];
var paleta8 = ["#2b2d42","#8d99ae","#902923","#c08552","#895737"];
var paleta9 = ["#d05353","#36c9c6","#464e47","#e9b44c","#191919"];
var paleta10 = ["#3c1518","#69140e","#a44200","#d58936","#f2f3ae"];
var paleta11 = ["#160f29","#246a73","#368f8b","#f3dfc1","#ddbea8"];
var paleta12 = ["#4f000b","#720026","#ce4257","#ff7f51","#ff9b54"];
var paleta13 = ["#f72585","#7209b7","#3a0ca3","#4361ee","#4cc9f0"];
var paleta14 = ["#3a2e39","#1e555c","#f4d8cd","#edb183","#f15152"];
var paleta15 = ["#027b7f","#ffa588","#d62957","#bf1e62","#572e4f"];
var paleta16 = ["#1e0a15","#b05c0e","#8a8580","#336647","#4e3d2c"];
var paleta17 = ["#281916","#e86786","#f4a1b5","#ffd2cb","#96b5ad"];
var paleta18 = ["#ed6464","#bf6370","#87586c","#574759","#1a1b1c"];
var paleta19 = ["#e6a06f","#9e9c71","#5e8271","#33454e","#242739"];
var paleta20 = ["#e63946","#f1faee","#a8dadc","#457b9d","#1d3557"];
var paleta21 = ["#adb5bd","#6c757d","#495057","#343a40","#212529"];

var paletas = [paleta1,paleta2,paleta3,paleta4,paleta5,paleta6,paleta7,paleta8,paleta9,paleta10,paleta11,paleta12,paleta13,paleta14,paleta15,paleta16,paleta17,paleta18,paleta19,paleta20,paleta21];

var p = rnd_int(0,20);
var cor = paletas[p];

// DUO

var duopaleta1 = ["#ffffff","#000000"];
var duopaleta2 = ["#264653","#2a9d8f"];
var duopaleta3 = ["#ff5858","#ffc8c8"];
var duopaleta4 = ["#0d3b66","#faf0ca"];
var duopaleta5 = ["#f5df4d","#939597"];
var duopaleta6 = ["#95f9c3","#0b3866"];
var duopaleta7 = ["#00272b","#e0ff4f"];
var duopaleta8 = ["#011627","#ff0022"];
var duopaleta9 = ["#eb5160","#274c77"];
var duopaleta10 = ["#233d4d","#fe7f2d"];
var duopaleta11 = ["#17bebb","#912f56"];
var duopaleta12 = ["#423e37","#e3b23c"];
var duopaleta13 = ["#006d77","#83c5be"];
var duopaleta14 = ["#2274a5","#f75c03"];
var duopaleta15 = ["#0d1321","#fa8334"];
var duopaleta16 = ["#383f51","#ce7da5"];
var duopaleta17 = ["#463f3a","#30c5ff"];
var duopaleta18 = ["#151e3f","#85ffc7"];
var duopaleta19 = ["#757b51","#156064"];
var duopaleta20 = ["#387d7a","#a06cd5"];
var duopaleta21 = ["#5b6386","#3c91e6"];
var duopaleta22 = ["#88498f","#f46036"];

var duopaletas = [duopaleta1,duopaleta2,duopaleta3,duopaleta4,duopaleta5,duopaleta6,duopaleta7,duopaleta8,duopaleta9,duopaleta10,duopaleta11,duopaleta12,duopaleta13,duopaleta14,duopaleta15,duopaleta16,duopaleta17,duopaleta18,duopaleta19,duopaleta20,duopaleta21,duopaleta22];

var dp = rnd_int(0,21);
var duocor = duopaletas[dp]

var tipopaleta = rnd_int(1,2);


// background color

var bgc = rnd_int(0,1);
var backcolor = [0,255]
var bc = 1; 

// Testando background com mais cores

var paletabg = ["#c3cabe","#d0d9d6","#f2f2f2","#e6e6e6","#f9e1d7","#f9efe3","#ffffff"]
var pbg = rnd_int(0,6)
var corbackground = paletabg[pbg];

/// BLENDMODE BG

var bmode = rnd_int(0,2);

/// BLENDMODE LINES

var bmodelines = rnd_int(0,1);

/// TEXTURIZAR BACKGROUND

let texturas = [];
let t = rnd_int(0,3);

/// PINCEL BACKGROUND

let c = rnd_int(0,2)

/// DEFINIR ALPHA LEVEL

let alphalevel = rnd_int(0,3);

/// RANGE TAMANHO PINCEL

let rpincel = rnd_int(0,1);

/// BEZIER OU LINE+BEZIER

let tline = rnd_int(0,1);

/// ORIENTACAO CANVAS

let orientcanvas = rnd_int(0,2);

/// FEATURES

if (tipopaleta == 1){
if (p == 0) {
Palette = "Simic"
} if (p == 1) {
Palette = "Rust"
} if (p == 2) {
Palette = "Blue Sense"
} if (p == 3) {
Palette = "Magma Mech"
} if (p == 4) {
Palette = "Scarlet Gear"
} if (p == 5) {
Palette = "Desert Punk"
} if (p == 6) {
Palette = "Green Chroma"
} if (p == 7) {
Palette  = "Mud Steel"
} if (p == 8) {
Palette = "Impulse"
} if (p == 9) {
Palette = "Calm Circuit"
} if (p == 10) {
Palette = "Turbulence"
} if (p == 11) {
Palette = "Overclock"
} if (p == 12) {
Palette = "Purple Chipset"
} if (p == 13) {
Palette = "Liquid Circuit"
} if (p == 14) {
Palette = "Nova Makina"
} if (p == 15) {
Palette = "Hurricane"
} if (p == 16) {
Palette = "System Clear"
} if (p == 17) {
Palette = "Fury"
} if (p == 18) {
Palette = "Symbiotic"
} if (p == 19) {
Palette = "Hammer Down"
} if (p == 20) {
Palette = "Dark Dream"
} 
} if (tipopaleta == 2){
if (dp == 0) {
Palette = "Black & White"
} if (dp == 1) {
Palette = "Freezing Dogma"
} if (dp == 2) {
Palette = "AfterNone"
} if (dp == 3) {
Palette = "Liquid Sense"
} if (dp == 4) {
Palette = "Star Heat"
} if (dp == 5) {
Palette = "Sweet Moss"
} if (dp == 6) {
Palette = "Neon Drama"
} if (dp == 7) {
Palette  = "Machine Rage"
} if (dp == 8) {
Palette = "Fire & Ice"
} if (dp == 9) {
Palette = "Sunrise Replica"
} if (dp == 10) {
Palette = "Pink Chipset"
} if (dp == 11) {
Palette = "Golden ASIC"
} if (dp == 12) {
Palette = "Cold Restart"
} if (dp == 13) {
Palette = "Synthetic Horizon"
} if (dp == 14) {
Palette = "0x2142"
} if (dp == 15) {
Palette = "Sakura"
} if (dp == 16) {
Palette = "Iced Mind"
} if (dp == 17) {
Palette = "Deep Ocean"
} if (dp == 18) {
Palette = "Octopus"
} if (dp == 19) {
Palette = "Purple Bootloader"
} if (dp == 20) {
Palette = "Phantom"
} if (dp == 21) {
Palette = "Sense of Urgency"
}
}

if (pbg == 0){
backg = "Pastel Gray"
} if (pbg == 1){
backg = "Aluminum"
} if (pbg == 2){
backg = "Winter"
} if (pbg == 3){
backg = "Platinum"
} if (pbg == 4){
backg = "Eventide"
} if (pbg == 5){
backg = "Peach"
} if (pbg == 6){
backg = "White"
}

if (orientcanvas == 0){
Format = "Wide Screen"
} if (orientcanvas == 1){
Format = "Square"
} if (orientcanvas == 2){
Format = "A4"
}

if (t == 0){
Texture = "Checkered"; 
} if (t == 1){
Texture = "Points"; 
} if (t == 2){
Texture = "Circular"; 
} if (t == 3){
Texture = "Chaotic"; 
}


/////////

function setup() {
  
rectMode(CENTER);
angleMode(DEGREES);
if(orientcanvas == 0){
createCanvas(2048,1080);
} if(orientcanvas == 1){
createCanvas(2000,2000);
} if(orientcanvas == 2){
createCanvas(1500,2000);
}
background(paletabg[pbg])
noFill();

texturas[0] = new Textura();
texturas[0].criartextura();
  
for (n1 = 0; n1<nm; n1++){
  arcs[n1] = new Arcos();
  if (n1 == nm){
      }
}

if (arcs.lenght = nm){
for (t1 = 0; t1<nm-1; t1++){
  linear[t1] = new Linhas(t1);

}
  
for (t1 = 0; t1<nm; t1++){
  linhasarcos[t1] = new LinhasArcos();

}
  
for (t1 = 0; t1<nm; t1++){  
  movimentum[t1] = new Movimentos();
}
}
}

function Arcos() {
  //this.arcx = rnd_int(width/4,width-width/4);
  //this.arcy = rnd_int(height/4,height-height/4);
  this.arcx = rnd_int(0,width);
  this.arcy = rnd_int(0,height);
  this.arcTam = rnd_int(100,250);
  this.arcstart = rnd_int(0,360)
  this.arcstart2 = rnd_int(0,360)
  this.arcstart3 = rnd_int(0,360)
  this.npi = rnd_int(0,7)
  this.colorir = rnd_int(0,3);
  this.duocolorir = rnd_int(0,1);
  //this.colorir = rnd_int(0,1);
  this.corStroke = cor[this.colorir]
  this.linhasTam1 = rnd_int(0.1,2) 

  if(tipopaleta == 1){
  this.colorw = color(cor[this.colorir])
  } if(tipopaleta == 2){
  this.colorw = color(duocor[this.duocolorir])
  }
  
if (alphalevel == 0) {
this.alpha = 15;
}
if (alphalevel == 1) {
this.alpha = 15;
}

if (alphalevel == 2) {
this.alpha = rnd_int(5,35);
}

if (alphalevel == 3) {
this.alpha = rnd_int(5,35);
}


  this.vpi = arraypi[this.npi]
  this.vpi2 = arraypi[this.npi]
  this.vpi3 = arraypi[this.npi]

  
  this.criarcos = function() {
  strokeWeight(this.linhasTam1)
  stroke(this.colorw)
  this.colorw.setAlpha(this.alpha);
    
if (c == 0) {
  arc(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2,this.arcstart,this.vpi,OPEN);
  arc(this.arcx,this.arcy,this.arcTam,this.arcTam,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*2,this.arcTam*2,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*4,this.arcTam*4,this.arcstart,this.vpi,OPEN); 
  rect(this.arcx,this.arcy,this.arcTam,this.arcTam/2)
  rect(this.arcx,this.arcy,this.arcTam*2,this.arcTam)
  rect(this.arcx,this.arcy,this.arcTam,this.arcTam*2)
  rect(this.arcx,this.arcy,this.arcTam/2,this.arcTam)
}
if (c == 1) {
  arc(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2,this.arcstart,this.vpi,OPEN);
  arc(this.arcx,this.arcy,this.arcTam,this.arcTam,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*2,this.arcTam*2,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*4,this.arcTam*4,this.arcstart,this.vpi,OPEN); 
  rect(this.arcx,this.arcy,this.arcTam,this.arcTam)
  rect(this.arcx,this.arcy,this.arcTam*2,this.arcTa*2)
  rect(this.arcx,this.arcy,this.arcTam*3,this.arcTam*3)
  rect(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2)	
}
if (c == 2) {

  arc(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2,this.arcstart,this.vpi,OPEN);
  arc(this.arcx,this.arcy,this.arcTam,this.arcTam,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*2,this.arcTam*2,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*3,this.arcTam*3,this.arcstart,this.vpi,OPEN); 
  arc(this.arcx,this.arcy,this.arcTam*4,this.arcTam*4,this.arcstart,this.vpi,OPEN);	
}
}
  
  this.criarcosbg = function() {
  strokeWeight(this.linhasTam1)
  stroke(0,3)
  this.colorw.setAlpha(this.alpha);
    
if (c == 0) {
  arc(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2,this.arcstart,this.vpi,OPEN);
  arc(this.arcx,this.arcy,this.arcTam,this.arcTam,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*2,this.arcTam*2,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*4,this.arcTam*4,this.arcstart,this.vpi,OPEN); 
  rect(this.arcx,this.arcy,this.arcTam,this.arcTam/2)
  rect(this.arcx,this.arcy,this.arcTam*2,this.arcTam)
  rect(this.arcx,this.arcy,this.arcTam,this.arcTam*2)
  rect(this.arcx,this.arcy,this.arcTam/2,this.arcTam)
}
if (c == 1) {
  arc(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2,this.arcstart,this.vpi,OPEN);
  arc(this.arcx,this.arcy,this.arcTam,this.arcTam,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*2,this.arcTam*2,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*4,this.arcTam*4,this.arcstart,this.vpi,OPEN); 
  rect(this.arcx,this.arcy,this.arcTam,this.arcTam)
  rect(this.arcx,this.arcy,this.arcTam*2,this.arcTa*2)
  rect(this.arcx,this.arcy,this.arcTam*3,this.arcTam*3)
  rect(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2)	
}
if (c == 2) {

  arc(this.arcx,this.arcy,this.arcTam/2,this.arcTam/2,this.arcstart,this.vpi,OPEN);
  arc(this.arcx,this.arcy,this.arcTam,this.arcTam,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*2,this.arcTam*2,this.arcstart,this.vpi,OPEN);  
  arc(this.arcx,this.arcy,this.arcTam*3,this.arcTam*3,this.arcstart,this.vpi,OPEN); 
  arc(this.arcx,this.arcy,this.arcTam*4,this.arcTam*4,this.arcstart,this.vpi,OPEN);	
}
}
  this.arcosmove = function() {
  
  this.arcx = this.arcx - sin(frameCount/10)
  this.arcy = this.arcy - sin(frameCount/10)

    
  }
  
}

function Linhas() {
this.teste1 = rnd_int(0,nm-1)
this.teste2 = rnd_int(0,nm-1)
this.teste3 = linear.length
if (rpincel == 0){ 
  this.linhasTam = rnd_int(0.1,.5)   
 } if (rpincel == 1){ 
  this.linhasTam = rnd_int(0.5,2.5) 
 }
this.corStrokeOpac = rnd_int(0,255)
if (bc == 0){
this.corstroke = 1  
}
if (bc == 1){
this.corstroke = 0  
}
this.colorir = rnd_int(0,3);
this.duocolorir = rnd_int(0,1);

this.colorirstroke = cor[this.colorir] 
  
  

if(tipopaleta == 1){
this.colorw = color(cor[this.colorir])
} if(tipopaleta == 2){
this.colorw = color(duocor[this.duocolorir])
}
  
if (alphalevel == 0) {
this.alpha = 5;
}
if (alphalevel == 1) {
this.alpha = rnd_int(5,20);
}

if (alphalevel == 2) {
this.alpha = rnd_int(5,20);
}

if (alphalevel == 3) {
this.alpha = 5;
}


  
  
// BEZIER PARAMETERS
  
  this.beziercpx1 = rnd_int(width/4,width-width/4);
  this.beziercpy1 = rnd_int(height/4,height-height/4);
  this.beziercpx2 = rnd_int(width/4,width-width/4);
  this.beziercpy2 = rnd_int(height/4,height-height/4);
  
this.criarlinhas = function() {
 stroke(this.colorw)
 this.colorw.setAlpha(this.alpha);
 strokeWeight(this.linhasTam)
  
if (tline == 0) {
bezier(arcs[this.teste3].arcx,arcs[this.teste3].arcy,this.beziercpx1,this.beziercpy1,this.beziercpx2,this.beziercpy2,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)
point(arcs[this.teste3].arcx,arcs[this.teste3].arcy)

} if (tline == 1) {
line(arcs[this.teste3].arcx,arcs[this.teste3].arcy,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)
bezier(arcs[this.teste3].arcx,arcs[this.teste3].arcy,this.beziercpx1,this.beziercpy1,this.beziercpx2,this.beziercpy2,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)
point(arcs[this.teste3].arcx,arcs[this.teste3].arcy)
}
strokeWeight(this.linhasTam*2)
stroke(this.colorw)
this.colorw.setAlpha(this.alpha);  
}
  
this.criarlinhasbg = function() {
 stroke(this.colorw)
 this.colorw.setAlpha(this.alpha*2);
 strokeWeight(this.linhasTam)
  
if (tline == 0) {
bezier(arcs[this.teste3].arcx,arcs[this.teste3].arcy,this.beziercpx1,this.beziercpy1,this.beziercpx2,this.beziercpy2,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)
point(arcs[this.teste3].arcx,arcs[this.teste3].arcy)

} if (tline == 1) {
line(arcs[this.teste3].arcx,arcs[this.teste3].arcy,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)
bezier(arcs[this.teste3].arcx,arcs[this.teste3].arcy,this.beziercpx1,this.beziercpy1,this.beziercpx2,this.beziercpy2,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)
point(arcs[this.teste3].arcx,arcs[this.teste3].arcy)
}
strokeWeight(this.linhasTam*2)
stroke(this.colorw)
this.colorw.setAlpha(this.alpha);  
}

line(arcs[this.teste3].arcx,arcs[this.teste3].arcy,arcs[this.teste3+1].arcx,arcs[this.teste3+1].arcy)



}

function LinhasArcos(){

this.linhasarcoslenght = linhasarcos.length
this.potenciad2 = arraypotenciad2[p2]
this.testeparafor = arcs[this.linhasarcoslenght].vpi
this.colorir = rnd_int(0,3);
this.duocolorir = rnd_int(0,1);

if(tipopaleta == 1){
this.colorw = color(cor[this.colorir])
} if(tipopaleta == 2){
this.colorw = color(duocor[this.duocolorir])
}
  
this.alpha = rnd_int(5,5);



this.criarlinhasarcos = function() {
  strokeWeight(2.5)


 push(); 
 for (i = this.linhasarcoslenght; i < this.linhasarcoslenght+1; i++){
  translate(arcs[i].arcx,arcs[i].arcy);
  //stroke(arcs[i].corStroke)
   
    stroke(this.colorw)
 this.colorw.setAlpha(this.alpha);
  for (p = 0; p < arcs[i].vpi; p+=arcs[i].vpi/this.potenciad2){
  
  rotate(arcs[i].vpi/this.potenciad2)
  //line(0,32,(arcs[i].arcTam/2)/8,0)
  //line(256,16,(arcs[i].arcTam/2)/4,0)
  line(128,0,arcs[i].arcTam/2,0)  
  //line(0,0,arcs[i].arcTam,0)  
  //line(0,0,arcs[i].arcTam*2,0) 
  }
  pop(); 
}
}
}

function Textura() {
this.criartextura = function() {

if (bc == 0){
if (t == 0){
  for (i = 0; i<width; i+=10){
  strokeWeight(.1)
  stroke(backcolor[1])
  line (i,0,i,height)
  line (0,i,width,i) 
  }
}
if (t == 1){
 for (var y = 0; y<height; y+=10){
 for (var x = 0; x < width; x+=10) {
 stroke(backcolor[1])
 point(x,y)
 } }

}
if (t == 2){
	
 for (var x = 0; x<width+width/2; x+=15){
  strokeWeight(.1)
  stroke(backcolor[1])
      noFill()
      ellipse (width/2,height/2,x,x)
 }
 

}
if (t == 3){
 for (var y = 0; y<height; y+=20){
 for (var x = 0; x < width; x+=20) {
  noFill();
  strokeWeight(.1)
  stroke(backcolor[1])
  ellipse(x,y,width/32,width/32)
 } }
}


}
if (bc == 1){
if (t == 0){
  for (i = 0; i<width; i+=10){
  strokeWeight(.1)
  stroke(backcolor[0])
  line (i,0,i,height)
  line (0,i,width,i) 
  }

}
if (t == 1){
 for (var y = 0; y<height; y+=10){
 for (var x = 0; x < width; x+=10) {
 stroke(backcolor[0])
 point(x,y)
 } }
}
if (t == 2){
 for (var x = 0; x<width+width; x+=15){
  strokeWeight(.1)
  stroke(backcolor[0])
      noFill()
      ellipse (width/2,height/2,x,x)
 }
}
if (t == 3){
 for (var y = 0; y<height; y+=20){
 for (var x = 0; x < width; x+=20) {
  noFill();
  strokeWeight(.1)
  stroke(backcolor[0])
  ellipse(x,y,width/32,width/32)
 } }
}
}
}
}

function Movimentos() {
  
  this.arclenght = movimentum.length
  this.linhaslenght = 5
  this.mpxy = rnd_int(0,3)
  this.mpxyVELOx = rnd_int(10,50)
  this.mpxyVELOy = rnd_int(10,50)

  

  
  this.movimentar = function() {

  if (this.mpxy == 0){
  arcs[this.arclenght].arcx = arcs[this.arclenght].arcx + (cos(frameCount/this.mpxyVELOx*20));
  arcs[this.arclenght].arcy = arcs[this.arclenght].arcy + (sin(frameCount/this.mpxyVELOy*20));
  } if (this.mpxy == 1){
    
  arcs[this.arclenght].arcx = arcs[this.arclenght].arcx + (sin(frameCount/this.mpxyVELOx*20));
  arcs[this.arclenght].arcy = arcs[this.arclenght].arcy - (sin(frameCount/this.mpxyVELOy*20));
  } if (this.mpxy == 2){
  
  arcs[this.arclenght].arcx = arcs[this.arclenght].arcx - (sin(frameCount/this.mpxyVELOx*20));
  arcs[this.arclenght].arcy = arcs[this.arclenght].arcy - (sin(frameCount/this.mpxyVELOy*20));
  } if (this.mpxy == 3){
  
  arcs[this.arclenght].arcx = arcs[this.arclenght].arcx - (sin(frameCount/this.mpxyVELOx*20));
  arcs[this.arclenght].arcy = arcs[this.arclenght].arcy + (sin(frameCount/this.mpxyVELOy*20));
  }  
    
  arcs[this.arclenght].alpha = arcs[this.arclenght].alpha - (sin(frameCount/this.mpxyVELOx*220));

}
}

function draw() {
  
if (bmode == 0){
blendMode(DIFFERENCE);
} if (bmode == 1){
blendMode(HARD_LIGHT);
 } if (bmode == 2){
blendMode(BLEND);
 }

if(frameCount>0 && frameCount<500){
   for (i=0;i < linear.length; i++){
  linear[i].criarlinhasbg();
   }
}
  
  
  if (bmodelines == 0){
  blendMode(BLEND);
  }
  if (bmodelines == 1){
  blendMode(HARD_LIGHT);
  }
  if(frameCount>100 && frameCount<400){
  for (i=0;i < arcs.length; i++){
  arcs[i].criarcosbg();
   }
  }
  blendMode(SOFT_LIGHT)
  if(frameCount>500 && frameCount<700){
   for (i=0;i < linear.length; i++){
  linear[i].criarlinhas();
   }
}
  
  blendMode(SOFT_LIGHT)
  
 if(frameCount>500 && frameCount<900){
  for (i=0;i < arcs.length; i++){
  arcs[i].criarcos();
   }
  }
  
  if(frameCount<900){
  for (i=0;i < movimentum.length; i++){
  movimentum[i].movimentar();
   }
  }
}


function keyTyped() {
  if (key === "s") {
    save("sistemas.png");
  }
   
}
window.$fxhashFeatures = {
  Palette: Palette,
  Background: backg,
  BackgroundTexture: Texture,
  Format: Format,
};

//This code is licenced with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

//Special thanks to Ina, Matheus Morbeck, Eduxdux, Bernizeck, Code2Pixel, for helping me with a lot of feedbacks!

//Additional thanks to Eduxdux and Morbeck for tips about canvas sizing!

//humachine
//humanized
//experiment