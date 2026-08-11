
// Variaveis das camadas
let base;
let eye;
let hat;
let mouth;
let linee;


//Seta a quantidade de cada layer
let n_base = rnd_int(1, 5);
let n_eye = rnd_int(1, 7);
let n_hat = rnd_int(1, 11);
let n_mouth = rnd_int(1, 10);


// Variaveis de tamanho e posição
let tm;
let pxt, pyt;

function preload() {
  // Por aqui faz o load das imagens
  linee = loadImage("img/line.png");
  base = loadImage(`img/base${n_base}.png`);
  eye = loadImage(`img/eye${n_eye}.png`);
  hat = loadImage(`img/hat${n_hat}.png`);
  mouth = loadImage(`img/mouth${n_mouth}.png`);
}

function setup() {
  
  paleta1 = rnd_int(0, 4);
  paleta = ["#00FFE1", "#FF5283", "#FF00F6", "#FFED0D","#0DF005"];
  
  for (let i = 0; i < 32; i++) {
  
  console.log(
    "AAAAAAAAAAAA BILAU"
  );}


  if (windowHeight < windowWidth) {
    tm = windowHeight;
  } else {
    tm = windowWidth;
  }


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
 background(paleta[paleta1]);
  
  
  blendMode(BLEND);
  image(base, pxt, pyt, tm, tm);
  image(linee, pxt, pyt, tm, tm);
  image(eye, pxt, pyt, tm, tm);
  image(hat, pxt, pyt, tm, tm);
  image(mouth, pxt, pyt, tm, tm);

  noLoop();
}

function keyPressed() {
  if (key == 's') {
    save("peculiar_draw.png");
  }
}


