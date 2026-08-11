// Coded by Eduxdux 
// Please dont remove my credits 


// Variaveis das camadas
let base;
let cabeca;
let rosto;
let olho;
let sobrancelha;
let boca;

//Seta a quantidade de cada layer
let n_base = rnd_int(1, 3);
let n_cabeca = rnd_int(1, 3);
let n_rosto = rnd_int(1, 4);
let n_olho = rnd_int(1, 3);
let n_sobrancelha = rnd_int(1, 4);
let n_boca = rnd_int(1, 3);

// Variaveis de tamanho e posição
let tm;
let pxt, pyt;

function preload() {
  // Por aqui faz o load das imagens
  bege = loadImage("img/rosto.png");
  base = loadImage(`img/bg${n_base}.jpeg`);
  cabeca = loadImage(`img/cabeca${n_cabeca}.png`);
  rosto = loadImage(`img/rosto${n_rosto}.png`);
  olho = loadImage(`img/olho${n_olho}.png`);
  sobrancelha = loadImage(`img/sob${n_sobrancelha}.png`);
  boca = loadImage(`img/boca${n_boca}.png`);
}

function setup() {
  console.log(
    "Hello, it is a image staking"
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
  image(base, 0, 0, width, height);
  

  //IMPORTANDO AS LAYERS
  blendMode(BLEND);
  image(bege, pxt, pyt, tm, tm);
  image(cabeca, pxt, pyt, tm, tm);
  image(olho, pxt, pyt, tm, tm);
  image(sobrancelha, pxt, pyt, tm, tm);
  image(boca, pxt, pyt, tm, tm);
  image(rosto, pxt, pyt, tm, tm);

  noLoop();
}

function keyPressed() {
  if (key == 's') {
    save("naju.png");
  }
}


