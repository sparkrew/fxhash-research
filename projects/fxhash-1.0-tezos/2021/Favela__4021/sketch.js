let casas = [];
let rand = [];
let fundo = [];
let gota;
let chuva;
let ind_fundo;
let posXchuva = [];
let posYchuva = [];
let qtdeChuva;


function preload(){
  for (let i = 0; i < 46; i++) {
    casas[i] = loadImage(`img/CASA${(i+1)}.png`);
  }
  
  for (let i = 0; i < 6; i++) {
    fundo[i] = loadImage(`fundos/fundo${(i+1)}.png`);
  }

  gota = loadImage(`fundos/gota.png`);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 1000; i++) {
    rand[i] = rnd_int(0,45);
  }
  
  ind_fundo = rnd_int(0,5);
  chuva = rnd_int(0,10);
  
  qtdeChuva = rnd_int(100, 500)
  
  for (let i = 0; i < qtdeChuva; i++) {
    posXchuva[i] = rnd_int(0,windowWidth);
  }
  
  for (let i = 0; i < qtdeChuva; i++) {
    posYchuva[i] = rnd_int(0,windowHeight);
  }
  
  
}


function draw() {
  background(0);
  image(fundo[ind_fundo], 0, 0, windowWidth, windowHeight);
  let x = windowWidth;
  let y = 100;
  for(let i = 0; i < 30; i++ ) {
    x = windowWidth;
    for (let j = 0; j < 30 - (28-i); j++) {
      image(casas[rand[(i+1)*(j+1)-1]], x, y, 50, 50);
      x -= 40;
    }
    y += 30;
  }
  
  if (chuva > 8) {
      for (let i = 0; i < qtdeChuva; i++) {
        image(gota, posXchuva[i], posYchuva[i], 10, 10);
    }
  }
   
}