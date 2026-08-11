// Coded by Eduxdux designed by Crivelito
// Please dont remove my credits 

let corfundo = ["#ffb798", "#ff9898", "#baff98", "#98ffe8", "#98c4ff", "#e198ff", "#ff98c1"];
let n_corfundo = rnd_int (0, 6);

//Variaveis das funcoes
  let f_dog, f_boca, f_od, f_oe, f_sd, f_se;

let verdade=false;

// Variaveis das camadas
let dog;
let boca;
let od, oe;
let sd, se;
let bege;
let oculos;

//Seta a quantidade de cada layer
let n_dog = rnd_int(1, 5);
let n_boca = rnd_int(1, 5);
let n_od = rnd_int(1, 6);
let n_oe = rnd_int(1, 6);
let n_sd = rnd_int(1, 5);
let n_se = rnd_int(1, 4);
let n_oculos = rnd_btw(0,100)

// Variaveis de tamanho e posição
let tm;
let pxt, pyt;

function preload() {
  // Por aqui faz o load das imagens
  bege = loadImage("img/bg.png");
  oculos = loadImage("img/oculos.png");
  boca = loadImage(`img/boca${n_boca}.png`); 
  dog = loadImage(`img/dog${n_dog}.png`);
  oe = loadImage(`img/oe${n_oe}.png`);
  od = loadImage(`img/od${n_od}.png`);
  sd = loadImage(`img/sd${n_sd}.png`);
  se = loadImage(`img/se${n_se}.png`);
  
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
  background(corfundo [n_corfundo]);
  blendMode(BLEND);
  image(bege, pxt, pyt, tm, tm);
  blendMode (OVERLAY)
  fill(corfundo [n_corfundo]);
  rect (pxt, pyt, width, height);

  //IMPORTANDO AS LAYERS
  blendMode(BLEND);
  image(dog, pxt, pyt, tm, tm);
  image(od, pxt, pyt, tm, tm);
  image(oe, pxt, pyt, tm, tm);
  image(sd, pxt, pyt, tm, tm);
  image(se, pxt, pyt, tm, tm);
  image(boca, pxt, pyt, tm, tm);
  
  if(n_oculos>95){
    verdade=true;
  image(oculos, pxt, pyt, tm, tm);
  }
 
  
  
  
  noLoop();
}

function keyTyped(s) {
  save("darkism_collage.png");
}

// Setando nome das coisas

////////////////
//NOME DOGS//
////////////////
switch (n_dog) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_dog = "Ravenous"; break;
  case 2: f_dog = "Suspicious"; break;
  case 3: f_dog = "Little cuttie"; break;
  case 4: f_dog = "Lonely"; break;
  case 5: f_dog = "Baby"; break;
 

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


}

////////////////
//NOME OE//
////////////////
switch (n_oe) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_oe = "Sorprise"; break;
  case 2: f_oe = "Fear"; break;
  case 3: f_oe = "Sleep well"; break;
  case 4: f_oe = "Just wake up"; break;
  case 5: f_oe = "Party time"; break; 
  case 6: f_oe = "At home"; break; 


}

////////////////
//NOME OD//
////////////////
switch (n_od) {
    
  ///Nº da img || Funcao F || Nome || Break;
  case 1: f_od = "Sorprise"; break;
  case 2: f_od = "Fear"; break;
  case 3: f_od = "Sleep well"; break;
  case 4: f_od = "Just wake up"; break;
  case 5: f_od = "Party time"; break; 
  case 6: f_od = "At home"; break; 



}


console.log(f_dog)
console.log(f_boca)
console.log(f_od)
console.log(f_oe)

 if(n_oculos>95){
    verdade=true;
 }

// Por aqui puxa as features, lembre sempre de colocar a variável certa
window.$fxhashFeatures = {
  Dog: f_dog,
  Mouth: f_boca,
  LeftEye: f_oe,
  RightEye: f_od,
  Glasses: verdade,
  
  
};
