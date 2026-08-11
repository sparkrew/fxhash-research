// Coded by Eduxdux designed by Crivelito
// Please dont remove my credits 

//Variaveis das funcoes
let f_cabeca, f_balao, f_boca, f_od, f_oe, f_corpo, f_papel;

let verdade=false;

// Variaveis das camadas
let cabeca;
let balao;
let boca;
let od, oe;
let corpo;
let bege;
let papel;
let mascara;

//Seta a quantidade de cada layer
let n_cabeca = rnd_int(1, 7);
let n_balao = rnd_int(1, 5);
let n_boca = rnd_int(1, 7);
let n_od = rnd_int(1, 6);
let n_oe = rnd_int(1, 6);
let n_corpo = rnd_int(1, 5);
let n_papel = rnd_int(1, 6);
let n_mascara = rnd_btw(0,100)

// Variaveis de tamanho e posição
let tm;
let pxt, pyt;

function preload() {
  // Por aqui faz o load das imagens
  bege = loadImage("img/bg.png");
  mascara = loadImage("img/mascara.png");
  cabeca = loadImage(`img/cabeca${n_cabeca}.png`);
  papel = loadImage(`img/papel${n_papel}.png`);
  balao = loadImage(`img/balao${n_balao}.png`);
  corpo = loadImage(`img/corpo${n_corpo}.png`);
  boca = loadImage(`img/boca${n_boca}.png`); 
  oe = loadImage(`img/oe${n_oe}.png`);
  od = loadImage(`img/od${n_od}.png`);
  
}

function setup() {
  console.log(
    "Hello, you are looking my code! Follow me on twitter.com/eduxdux_"
  );

  //Seta o tamanho da imagem
  if (windowHeight < windowWidth) {
    tm = windowHeight;
  } else {
    tm = windowWidth;
  }

  //Seta posição e tamanho das bolotas
  if (windowWidth > 800) {
    pxt = windowWidth / 2 - tm / 2;
    pyt = 0;
  } else {
    pxt = 0;
    pyt = 0;
  }

  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  image(bege, 0, 0, width, height);
  image(bege, pxt, pyt, tm, tm);

  //IMPORTANDO AS LAYERS
  blendMode(BLEND);
  image(papel, pxt, pyt, tm, tm);
  image(balao, pxt, pyt, tm, tm);
  image(corpo, pxt, pyt, tm, tm);
  image(od, pxt, pyt, tm, tm);
  image(oe, pxt, pyt, tm, tm);
  image(boca, pxt, pyt, tm, tm);
  
  if(n_mascara>95){
    verdade=true;
  image(mascara, pxt, pyt, tm, tm);
  }
  image(cabeca, pxt, pyt, tm, tm);
  
  noLoop();
}

function keyTyped(s) {
  save("darkism_collage.png");
}

// Setando nome das coisas

////////////////
//NOME CABECAS//
////////////////
switch (n_cabeca) {
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_cabeca = "Tim Maia"; break;
  case 2: f_cabeca = "Little onion"; break;
  case 3: f_cabeca = "Maus"; break;
  case 4: f_cabeca = "Beach hat"; break;
  case 5: f_cabeca = "Medusa"; break;
  case 6: f_cabeca = "Knife"; break;
  case 7: f_cabeca = "Presley"; break;

}

////////////////
//NOME CORPOS//
////////////////
switch (n_corpo) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_corpo = "Big boi"; break;
  case 2: f_corpo = "Finesse"; break;
  case 3: f_corpo = "Fishman"; break;
  case 4: f_corpo = "Gothic boi"; break;
  case 5: f_corpo = "Human snake"; break;
  
}
  
////////////////
//NOME BALAO//
////////////////
switch (n_balao) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_balao = "Yellow"; break;
  case 2: f_balao = "Pink"; break;
  case 3: f_balao = "Blue"; break;
  case 4: f_balao = "Green"; break;
  case 5: f_balao = "Red"; break;
 

}

////////////////
//NOME PAPEL//
////////////////
switch (n_papel) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_papel = "Buy list"; break;
  case 2: f_papel = "Xmas song"; break;
  case 3: f_papel = "Happy new year"; break;
  case 4: f_papel = "Horse with no name"; break;
  case 5: f_papel = "Stolen my bread"; break; 
  case 6: f_papel = "I'm not dog no"; break;
 

}

////////////////
//NOME BOCA//
////////////////
switch (n_boca) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_boca = "Mouth1"; break;
  case 2: f_boca = "Mouth2"; break;
  case 3: f_boca = "Mouth3"; break;
  case 4: f_boca = "Mouth4"; break;
  case 5: f_boca = "Mouth5"; break; 
  case 6: f_boca = "Mouth6"; break;
  case 7: f_boca = "Mouth7"; break;

}


console.log(f_cabeca)
console.log(f_papel)
console.log(f_corpo)
console.log(f_boca)
console.log(f_balao)

 if(n_mascara>95){
    verdade=true;
 }

// Por aqui puxa as features, lembre sempre de colocar a variável certa
window.$fxhashFeatures = {
  Hat: f_cabeca,
  Mouth: f_boca,
  Body: f_corpo,
  Balloon: f_balao,
  Papers: f_papel,
  Mask: verdade,
  
};
