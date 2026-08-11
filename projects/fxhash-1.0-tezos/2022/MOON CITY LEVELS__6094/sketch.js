// Coded by Eduxdux
// Please dont remove my credits

//Variaveis das funcoes
let f_fundo, f_moon, f_blades, f_city, f_level;

// Variaveis das camadas
let fundo;
let moon;
let blades;
let city;
let level;

//Seta a quantidade de cada layer
let n_fundo = rnd_btw(1, 100);
let n_moon = rnd_btw(1, 100);
let n_blades = rnd_btw(1, 100);
let n_city = rnd_btw(1, 100);
let n_level = rnd_btw(1, 100);

// Variaveis de tamanho e posição
let tm;
let pxt, pyt;

function preload() {
  // Por aqui faz o load das imagens

  
  /////////////////////
  ///SETAR OS FUNDOS///
  /////////////////////
  
  if (n_fundo > 90) {
    fundo = loadImage("img/03SET.png");
  }
  else if (n_fundo > 45) {
    fundo = loadImage("img/01NIGHT.png");
  }
  else if (n_fundo => 0) {
    fundo = loadImage("img/02DAY.png");
  }
  
  /////////////////////
  ///SETAR OS MOONS ///
  /////////////////////
  
  if (n_moon > 95) {
    moon = loadImage("img/5MOONS.png");
  }
  else if (n_moon > 71.25) {
    moon = loadImage("img/1MOON.png");
  }
  else if (n_moon > 47.5) {
    moon = loadImage("img/2MOONS.png");
  }
   else if (n_moon > 23.75) {
    moon = loadImage("img/3MOONS.png");
  }
   else if (n_moon => 0) {
    moon = loadImage("img/4MOONS.png");
  }
  
  /////////////////////
  ///SETAR OS BLADES///
  /////////////////////
  
  if (n_blades > 80) {
    blades = loadImage("img/BLADESBLOOD.png");
  }
  else if (n_blades > 60) {
    blades = loadImage("img/BLADESGOLD.png");
  }
  else if (n_blades > 40) {
    blades = loadImage("img/BLADESJADE.png");
  }
   else if (n_blades > 20) {
    blades = loadImage("img/BLADESRAIN.png");
  }
   else if (n_blades => 0) {
    blades = loadImage("img/BLADESSILVER.png");
  }
  
 
  /////////////////////
  /// SETAR OS CITY ///
  /////////////////////
  
  if (n_city > 85.72) {
    city = loadImage("img/CITY1.png");
  }
  else if (n_city > 71.44) {
    city = loadImage("img/CITY2.png");
  }
  else if (n_city > 57.16) {
    city = loadImage("img/CITY3.png");
  }
   else if (n_city > 42.88) {
    city = loadImage("img/CITY4.png");
  }
   else if (n_city > 28.6) {
    city = loadImage("img/CITY5.png");
  }
   else if (n_city > 14.32) {
    city = loadImage("img/CITY6.png");
  }
   else if (n_city => 0) {
    city = loadImage("img/CITY7.png");
  }
 
 
  /////////////////////
  /// SETAR OS LEVEL///
  /////////////////////
  
  if (n_level > 80) {
    level = loadImage("img/LEVELS1.png");
  }
  else if (n_level > 60) {
    level = loadImage("img/LEVELS2.png");
  }
  else if (n_level > 40) {
    level = loadImage("img/LEVELS3.png");
  }
   else if (n_level > 20) {
    level = loadImage("img/LEVELS4.png");
  }
   else if (n_level => 0) {
    level = loadImage("img/LEVELS5.png");
  }
 
   
  
}

function setup() {
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
  image(fundo, 0, 0, width, height);
  //image(bege, pxt, pyt, tm, tm);

  //IMPORTANDO AS LAYERS
  
  image(blades, pxt, pyt-height/10, tm, tm);
  image(city, pxt, pyt, tm, tm);
  image(level, pxt, pyt, tm, tm);
  image(moon, pxt, pyt, tm, tm);

  noLoop();
}


function keyPressed() {
  if (key == 's') {
    save("city.png");
  }
}



//fundos
  if (n_fundo > 90) {
    f_fundo = "03SET";
  }
  else if (n_fundo > 45) {
    f_fundo = "01NIGHT";
  }
  else if (n_fundo => 0) {
    f_fundo = "02DAY";
  }
  
//moons
  if (n_moon > 95) {
    f_moon = "5MOONS";
  }
  else if (n_moon > 71.25) {
    f_moon = "1MOON";
  }
  else if (n_moon > 47.5) {
    f_moon = "2MOONS";
  }
   else if (n_moon > 23.75) {
    f_moon = "3MOONS";
  }
   else if (n_moon => 0) {
    f_moon = "4MOONS";
  }
  
//blades
  if (n_blades > 80) {
    f_blades = "BLADESBLOOD";
  }
  else if (n_blades > 60) {
    f_blades = "BLADESGOLD";
  }
  else if (n_blades > 40) {
    f_blades = "BLADESJADE";
  }
   else if (n_blades > 20) {
    f_blades = "BLADESRAIN";
  }
   else if (n_blades => 0) {
    f_blades = "BLADESSILVER";
  }
  
 
//city
  if (n_city > 85){
    f_city = "CITY1";
  }
  else if (n_city > 71.44) {
    f_city = "CITY2";
  }
  else if (n_city > 57.16) {
    f_city = "CITY3";
  }
   else if (n_city > 42.88) {
    f_city = "CITY4";
  }
   else if (n_city > 28.6) {
    f_city = "CITY5";
  }
   else if (n_city > 14.32) {
    f_city = "CITY6";
  }
   else if (n_city => 0) {
    f_city = "CITY7";
  }
 
//levels
  if (n_level > 80) {
    f_level = "LEVELS1";
  }
  else if (n_level > 60) {
    f_level = "LEVELS2";
  }
  else if (n_level > 40) {
    f_level = "LEVELS3";
  }
   else if (n_level > 20) {
    f_level = "LEVELS4";
  }
   else if (n_level => 0) {
    f_level = "LEVELS5";
  }



console.log(f_fundo, f_moon, f_blades, f_city, f_level)
// Por aqui puxa as features, lembre sempre de colocar a variável certa
window.$fxhashFeatures = {
  Fundo: f_fundo,
  Moon: f_moon,
  Blades: f_blades,
  City: f_city,
  Levels: f_level,
};
