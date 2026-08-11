// Coded by Eduxdux
// Please dont remove my credits without tell me

let quadros = [];
let cor = [];
let cl = [];
let bege = [];
let rdBege,siz;

let hash = rnd_btw(0, 100);
let tamanho = rnd_btw(0.3,1)
  
if (tamanho > 0.7){
    siz = "Big"
  }
else if (tamanho > 0.5){
    siz = "Medium"
  }
else if (tamanho => 0.3){
    siz = "Small"
  }

console.log(siz)

if (hash > 65) {
  (cl[0] = "#001219"),
    (cl[1] = "#005f73"),
    (cl[2] = "#0a9396"),
    (cl[3] = "#94d2bd"),
    (cl[4] = "#e9d8a6"),
    (cl[5] = "#ee9b00"),
    (cl[6] = "#ca6702"),
    (cl[7] = "#bb3e03"),
    (cl[8] = "#ae2012"),
    (cl[9] = "#9b2226"),
    (pal = "Set");
} 

else if (hash > 20) {
  (cl[0] = "#800016"),
    (cl[1] = "#a0001c"),
    (cl[2] = "#c00021"),
    (cl[3] = "#ff002b"),
    (cl[4] = "#1565c0"),
    (cl[5] = "#407ba7"),
    (cl[6] = "#004e89"),
    (cl[7] = "#002962"),
    (cl[8] = "#002962"),
    (cl[9] = "#00043a"),
    (pal = "Fronce");
} 
else if (hash => 0) {
  (cl[0] = "#023047"),
    (cl[1] = "#219ebc"),
    (cl[2] = "#8ecae6"),
    (cl[3] = "#ffe666"),
    (cl[4] = "#ffb703"),
    (cl[5] = "#fb8500"),
    (cl[6] = "#f45b69"),
    (cl[7] = "#ff5e5b"),
    (cl[8] = "#e76927"),
    (cl[9] = "#033773"),
    (pal = "Praia");
}

console.log(pal);

function preload() {
  pal = window.$fxhashFeatures["Palette"];
}

function setup() {
  angleMode(DEGREES);

  cor = [
    "#001219",
    "#005f73",
    "#0a9396",
    "#94d2bd",
    "#e9d8a6",
    "#ee9b00",
    "#ca6702",
    "#bb3e03",
    "#ae2012",
    "#9b2226",
  ];

  bege = [
    "#fec5bb",
    "#fcd5ce",
    "#fae1dd",
    "#f8edeb",
    "#e8e8e4",
    "#d8e2dc",
    "#ece4db",
    "#ffe5d9",
    "#ffd7ba",
    "#fec89a",
  ];

  rdBege = rnd_int(0, 9);
  createCanvas(windowWidth, windowHeight);

  // Criando um neted loop pra criar uma grid
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let randao = rnd_int(0, 9);
      let tm = rnd_int(100, 300);
      let x = i * tm;
      let y = (j * tm) / (randao / 2);
      let colore = randao;
      //let foto = random(arr_fotos);
      let b = new Fotografias(x, y, tm, colore);

      //console.log(foto)
      quadros.push(b);
    }
  }
}

function draw() {
  background(bege[rdBege]);

  push();
  

  
  scale(tamanho);
  translate(width*1.4, -width*1.6);
  rotate(45);

  for (let i = 0; i < quadros.length; i++) {
    quadros[i].show();
  }

  pop();

  granulate(18);

  noLoop();
}

class Fotografias {
  constructor(x, y, tm, colore) {
    this.x = x;
    this.y = y;
    this.tm = tm;
    this.colore = colore;
  }

  show() {
    let chance = rnd_btw(0,100)
    
    
    if (chance>50){
       blendMode(BURN);
    }
    else{
        blendMode(MULTIPLY);
    }
  
    let prob = rnd_int(0, 100);
    fill(cl[this.colore]);
    noStroke();

    if (prob > 80) {
      noFill();
      strokeWeight(3);
      stroke(cl[this.colore]);
      rect(this.x, this.y, this.tm / 1.5, this.tm / 5);
    } 
    
    else if (prob > 60) {
      noFill();
      strokeWeight(3);
      stroke(cl[this.colore]);
      rect(this.x, this.y, this.tm / 5, this.tm / 1.5, rnd_btw(0,20));
    } 
    
    else if (prob > 40) {
      ellipse(this.x, this.y, this.tm / 3);
    } 
    
    else if (prob > 20) {
      noFill();
      strokeWeight(3);
      stroke(cl[this.colore]);
      rect(this.x, this.y, this.tm / 3,this.tm / 3);
    } else {
      
      rect(this.x, this.y, this.tm / 1.5, this.tm / 1.5, this.colore / 2);
    }
  }
}

window.$fxhashFeatures = {
  Palette: pal,
  Size : siz,
};
function keyTyped(s) {
  save("diagonal.png");
}

/* --------------------------------------
Adds grain to the canvas || Gorilla Sun
-------------------------------------- */
function granulate(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 4) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + gA;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount;
  }
  updatePixels();
}
