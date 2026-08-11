let casas = [];
let casa1, casa2, casa3, casa4, casa5, casa6, casa7, casa8, casa9, casa10;
let rua, fundo;
let f_c1, f_c2, f_c3, f_c4, f_c5, f_c6, f_c7, f_c8, f_c9, f_c10, f_rua, f_fundo; 
let f_chuva = false;

let rand = [];
let gota;
let chuva = rnd_btw(0,100);
let posXchuva = [];
let posYchuva = [];
let qtdeChuva;
let inicioEsq;
let inicioDir;

let c1 = rnd_int(1,6);
let c2 = rnd_int(1,6);
let c3 = rnd_int(1,5);
let c4 = rnd_int(1,5);
let c5 = rnd_int(1,5);
let c6 = rnd_int(1,5);
let c7 = rnd_int(1,5);
let c8 = rnd_int(1,5);
let c9 = rnd_int(1,5);
let c10 = rnd_int(1,5);
let ind_rua = rnd_int(1,6);
let ind_fundo = rnd_int(1,9);


function preload(){
  

  casa1 = loadImage(`img/casa1-${c1}.png`);
  casa2 = loadImage(`img/casa2-${c2}.png`);
  casa3 = loadImage(`img/casa3-${c3}.png`);
  casa4 = loadImage(`img/casa4-${c4}.png`);
  casa5 = loadImage(`img/casa5-${c5}.png`);
  casa6 = loadImage(`img/casa6-${c6}.png`);
  casa7 = loadImage(`img/casa7-${c7}.png`);
  casa8 = loadImage(`img/casa8-${c8}.png`);
  casa9 = loadImage(`img/casa9-${c9}.png`);
  casa10 = loadImage(`img/casa10-${c10}.png`);
  rua = loadImage(`img/rua${ind_rua}.png`);
  fundo = loadImage(`fundos/fundo${ind_fundo}.png`);

  for (let i = 0; i < 32; i++) {
    casas[i] = loadImage(`casas/casa${(i+1)}.png`);
  }
  gota = loadImage(`img/gota.png`);
  
}


function setup() {
  createCanvas(windowHeight, windowHeight);
  
  for (let i = 0; i < 1000; i++) {
    rand[i] = rnd_int(0,31);
  }
  
  qtdeChuva = rnd_int(100, 200);
  
  for (let i = 0; i < qtdeChuva; i++) {
    posXchuva[i] = rnd_int(0,windowHeight);
  }
  
  for (let i = 0; i < qtdeChuva; i++) {
    posYchuva[i] = rnd_int(0,windowHeight);
  }
  inicioEsq = rnd_int(150, 170);
  inicioDir = rnd_int(120, 150);
  
}


function draw() {
  background(255);
  image(fundo, 0, 0, windowHeight, windowHeight);
  image(rua, 0, 0, windowHeight, windowHeight);
  
  let resol = 0.05*windowHeight
  let x = windowHeight;
  let y = inicioDir;
  
  for(let i = 0; i < 30; i++ ) {
    x = windowHeight;
    for (let j = 0; j < 30 - (20-i); j++) {
      image(casas[rand[(i+1)*(j+1)-1]], x+noise(x), y+noise(y), resol, resol);
      x -= 20;
    }
    y += 20;
    if (y > 0.6*windowHeight) {
      break;
    }
  }
  
  y = inicioEsq;
  for(let i = 0; i < 30; i++ ) {
    x = -10;
    for (let j = 0; j < 30 - (20-i); j++) {
      image(casas[rand[(i+1)*(j+1)-1]], x+noise(x), y+noise(y), resol, resol);
      x += 20;
    }
    y += 20;
    if (y > 0.6*windowHeight) {
      break;
    }
  }
  
  
  
  image(casa6, 0, 0, windowHeight, windowHeight);
  image(casa10, 0, 0, windowHeight, windowHeight);
  image(casa5, 0, 0, windowHeight, windowHeight);
  image(casa4, 0, 0, windowHeight, windowHeight);
  image(casa3, 0, 0, windowHeight, windowHeight);
  image(casa1, 0, 0, windowHeight, windowHeight);
  
  image(casa8, 0, 0, windowHeight, windowHeight);
  image(casa9, 0, 0, windowHeight, windowHeight);
  image(casa7, 0, 0, windowHeight, windowHeight);
  image(casa2, 0, 0, windowHeight, windowHeight);
  
  if (chuva > 80) {
      for (let i = 0; i < qtdeChuva; i++) {
        image(gota, posXchuva[i], posYchuva[i], 10, 10);
    }
  }
  
  noLoop();
   
}

switch(c1) {
  case 1: f_c1 = 'Casa 1-1'; break;
  case 2: f_c1 = 'Casa 1-2'; break;
  case 3: f_c1 = 'Casa 1-3'; break;
  case 4: f_c1 = 'Casa 1-4'; break;
  case 5: f_c1 = 'Casa 1-5'; break;
  case 6: f_c1 = 'Casa 1-6'; break;
}

switch(c2) {
  case 1: f_c2 = 'Casa 2-1'; break;
  case 2: f_c2 = 'Casa 2-2'; break;
  case 3: f_c2 = 'Casa 2-3'; break;
  case 4: f_c2 = 'Casa 2-4'; break;
  case 5: f_c2 = 'Casa 2-5'; break;
  case 6: f_c2 = 'Casa 2-6'; break;
}

switch(c3) {
  case 1: f_c3 = 'Casa 3-1'; break;
  case 2: f_c3 = 'Casa 3-2'; break;
  case 3: f_c3 = 'Casa 3-3'; break;
  case 4: f_c3 = 'Casa 3-4'; break;
  case 5: f_c3 = 'Casa 3-5'; break;

}

switch(c4) {
  case 1: f_c4 = 'Casa 4-1'; break;
  case 2: f_c4 = 'Casa 4-2'; break;
  case 3: f_c4 = 'Casa 4-3'; break;
  case 4: f_c4 = 'Casa 4-4'; break;
  case 5: f_c4 = 'Casa 4-5'; break;
}

switch(c5) {
  case 1: f_c5 = 'Casa 5-1'; break;
  case 2: f_c5 = 'Casa 5-2'; break;
  case 3: f_c5 = 'Casa 5-3'; break;
  case 4: f_c5 = 'Casa 5-4'; break;
  case 5: f_c5 = 'Casa 5-5'; break;
}

switch(c6) {
  case 1: f_c6 = 'Casa 6-1'; break;
  case 2: f_c6 = 'Casa 6-2'; break;
  case 3: f_c6 = 'Casa 6-3'; break;
  case 4: f_c6 = 'Casa 6-4'; break;
  case 5: f_c6 = 'Casa 6-5'; break;
}

switch(c7) {
  case 1: f_c7 = 'Casa 7-1'; break;
  case 2: f_c7 = 'Casa 7-2'; break;
  case 3: f_c7 = 'Casa 7-3'; break;
  case 4: f_c7 = 'Casa 7-4'; break;
  case 5: f_c7 = 'Casa 7-5'; break;
}

switch(c8) {
  case 1: f_c8 = 'Casa 8-1'; break;
  case 2: f_c8 = 'Casa 8-2'; break;
  case 3: f_c8 = 'Casa 8-3'; break;
  case 4: f_c8 = 'Casa 8-4'; break;
  case 5: f_c8 = 'Casa 8-5'; break;
}

switch(c9) {
  case 1: f_c9 = 'Casa 9-1'; break;
  case 2: f_c9 = 'Casa 9-2'; break;
  case 3: f_c9 = 'Casa 9-3'; break;
  case 4: f_c9 = 'Casa 9-4'; break;
  case 5: f_c9 = 'Casa 9-5'; break;
}

switch(c10) {
  case 1: f_c10 = 'Casa 10-1'; break;
  case 2: f_c10 = 'Casa 10-2'; break;
  case 3: f_c10 = 'Casa 10-3'; break;
  case 4: f_c10 = 'Casa 10-4'; break;
  case 5: f_c10 = 'Casa 10-5'; break;
}

switch(ind_rua) {
  case 1: f_rua = 'Areia'; break;
  case 2: f_rua = 'Cascalho'; break;
  case 3: f_rua = 'Asfalto'; break;
  case 4: f_rua = 'Terra'; break;
  case 5: f_rua = 'Brita'; break;
  case 6: f_rua = 'Ladrilho'; break;
}

switch(ind_fundo) {
  case 1: f_fundo = 'Universo Noite'; break;
  case 2: f_fundo = 'Satélite Manhã'; break;
  case 3: f_fundo = 'Nublado'; break;
  case 4: f_fundo = 'Nuvens'; break;
  case 5: f_fundo = 'Lua Minguante'; break;
  case 6: f_fundo = 'Sol'; break;
  case 7: f_fundo = 'Satélite Noite'; break;
  case 8: f_fundo = 'Meteoro'; break;
  case 9: f_fundo = 'Universo Tarde'; break;
}

if (chuva > 80 ) {
  f_chuva = true;
}

window.$fxhashFeatures = {
  Casa1: f_c1,
  Casa2: f_c2,
  Casa3: f_c3,
  Casa4: f_c4,
  Casa5: f_c5,
  Casa6: f_c6,
  Casa7: f_c7,
  Casa8: f_c8,
  Casa9: f_c9,
  Casa10: f_c10,
  Rua: f_rua,
  Background: f_fundo,
  Chuva: f_chuva
};
