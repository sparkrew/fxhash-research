//FUNÇÃO DE REFERÊNCIA PARA RANDOMIZAÇÃO INTERVALAR

function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}

function rnd_btwexp(min, max) {
  return fxrand() ** 2 * (max - min) + min;
}

function rnd_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}



let time = 0;
let vel = 0;


let AA = fxrand() * 5;
let AB = fxrand() * 5;
let AC = rnd_btw(10, 15);
let AD = rnd_btw(30, 33);

let A = fxrand() * 2.5;
let B = rnd_btw(15, 35);
let C = rnd_btw(10, 25);
let D = rnd_btw(5, 10);

let E = fxrand() * 10;
let F = fxrand() * 25;
let G = rnd_btw(200, 250);
let H = fxrand() * 75;

let I = rnd_btw(100, 200);
let J = fxrand() * 125;
let K = fxrand() * 125;
let L = fxrand() * 125;

let M = fxrand() * 255;
let N = fxrand() * 200;
let O = fxrand() * 255;
let P = fxrand() * 255;

let Q = fxrand() * 200;
let R = fxrand() * 150;
let S = fxrand() * 255;
let T = fxrand() * 150;

let U = fxrand() * 200;
let V = fxrand() * 255;
let X = fxrand() * 255;
let Z = fxrand() * 255;

let AE = fxrand() * 255;
let AF = fxrand() * 255;
let AG = fxrand() * 255;
let AH = fxrand() * 255;

let AI = fxrand() * 255;
let AJ = fxrand() * 255;
let AK = fxrand() * 450;
let AL = fxrand() * 500;

let AM = fxrand() * 750;
let tnc = fxrand() * 90;
let pqp = rnd_btw(50, 150);

let cor = ["#F94144", "#F65A38", "#F3722C",
              "#F68425", "#F8961E", "#F9AF37",
              "#F9C74F", "#C5C35E", "#90BE6D",
              "#6AB47C", "#43AA8B", "#4D908E",
              "#52838F", "#577590"]

let paleta = rnd_int(0, 14)

let deitado = 25;
let de_pe = 20;

function setup() {
  createCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );

  strokeWeight(0);
  colorMode(RGB, 255);
  blendMode(ADD);
  vel = TAU / 400;
 
}

function draw() {
  clear();
  background(0);

  for (let y = 0; y < de_pe; y++) {
    for (let t = 0; t < deitado; t++) {
      {
        ypos = map(sin(time + t*33- y * D), -1, 1, 0, width);
        xpos = map(y, 0, de_pe , 0, height);

        noFill();
        strokeWeight(1);
        stroke(AE, AF, AG, random(25));
        rect(xpos - AD / 2, ypos - I / 2, AD, I);

        noStroke();
        fill(AH, AI, AJ, random(50));
        rect(xpos - A/2, ypos, A*2, D*2);
        
        noFill();
        stroke(AH, AI, AJ, random(200));
        rect(xpos - A/2, ypos, A, D*10);
        
          noStroke();
        fill(AJ, AH, AI,random(255));
        rect(xpos -A/2, ypos + 27, 1.5*A, I);

        fill(V, X, Z, random(255));
        rect(xpos-C -A/2, ypos+50, A, C);
        rect(xpos+C -A/2, ypos-50, A, C);

        noStroke();
        fill(M, N, O, random(255));
        rect(xpos -D/2 + 10, ypos+100, 2, D);
        rect(xpos -D/2 + 10, ypos-100, 2, D);
  
        noStroke();
        fill(100, 100, 100, random(50));
        rect(xpos-25, ypos-100 , 2, 2);
        rect(xpos+25, ypos +100, 2, 2);

        rect(xpos-30, ypos -55, 1, A);
        rect(xpos+30, ypos +55, 1, A);

        rect(xpos+5, ypos , random(50), 1);
        rect(xpos-5, ypos , random(-50), -1);
        
        noFill();
        stroke(200, 200, 200, random(50));
        rect(xpos , ypos+25 , 1,H);
        rect(xpos , ypos -25, -1,-H);
        
                noFill();
        stroke(200, 200, 200, random(50));
        rect(xpos +25, ypos+25 , H,H);
        rect(xpos-25 , ypos -25, -H,-H);
      }
      
      
    }
  }

  time += vel;
}

function windowResized() {
  resizeCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );
}
