let pintura = ["#F94144", "#F65A38", "#F3722C",
              "#F68425", "#F8961E", "#F9AF37",
              "#F9C74F", "#C5C35E", "#90BE6D",
              "#6AB47C", "#43AA8B", "#4D908E",
              "#52838F", "#577590"]

let time = 0;
let vel = 0;
let deitado = 35;
let de_pe = 25;

let AA = fxrand() * 5;
let AB = fxrand() * 5;
let AC = fxrand() * 5;
let AD = fxrand() * 5;

let A = fxrand() * 5;
let B = fxrand() * 5;
let C = fxrand() * 5;
let D = fxrand() * 5;

let E = fxrand() * 10;
let F = fxrand() * 25;
let G = fxrand() * 50;
let H = fxrand() * 75;
let I = fxrand() * 100;
let J = fxrand() * 125;

let K = fxrand() * 125;
let L = fxrand() * 125;

let M = fxrand() * 255;
let N = fxrand() * 255;
let O = fxrand() * 255;

let P = fxrand() * 255;
let Q = fxrand() * 255;
let R = fxrand() * 255;

let S = fxrand() * 255;
let T = fxrand() * 255;
let U = fxrand() * 255;

let V = fxrand() * 255;
let X = fxrand() * 255;
let Z = fxrand() * 255;

let AE = fxrand() * 255;
let AF = fxrand() * 255;
let AG = fxrand() * 255;

let AH = fxrand() * 255;
let AI = fxrand() * 255;
let AJ = fxrand() * 255;


function setup() {
  let canvas = createCanvas(800, 800);

  strokeWeight(0);
  colorMode(RGB, 255);
  blendMode(SCREEN);
  vel = TWO_PI / 500;
}
function draw() {
  clear();
  background(0, 0, 0);

  let from = color(S, T, U);
  let to = color(P, Q, R);
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to, 0.66);

  for (let y = 0; y < de_pe; y++) {
    for (let t = 0; t < deitado; t++) {
      {
        //VERTICAL
        xpos = map(sin(time + t / 10 - y/2 ), -1, 1, 0, width - 0);
        ypos = map(y, 0, de_pe - 1, -50, height - 50);

        noFill();
        strokeWeight(1);
        stroke(P, Q, R, random(255));
        rect(xpos - E / 2, ypos , E, AJ*sin(time/2));
       
        noStroke();
        fill(S, T, U, random(255));
        rect(xpos - 20, ypos - 25, C, 1);
        rect(xpos + 20, ypos + 25, 1, C);

        fill(V, X, Z, random(255));
        rect(xpos - 30 + D / 2, ypos + 35*sin(time*2), 1, A);
        rect(xpos + 30 - D / 2, ypos - 35*sin(time*2), A, 1);

        fill(M,N,O, random(255));
        rect(xpos - 50, ypos + 55, 1, B);
        rect(xpos + 50, ypos - 55, B,1);

        fill(100, 100, 100, random(100));
        rect(xpos - 20, ypos - F / 2 - 20, 1, F);
        rect(xpos + 20, ypos - F / 2 + 20, 1, F);

        rect(xpos - 35, ypos - 20, 5, 1);
        rect(xpos + 35, ypos + 20, 5, 1);

        rect(xpos + 5, ypos + 55, random(50), 2);
        rect(xpos - 5, ypos - 55, random(-50), -2);

        rect(xpos - 45, ypos + 70, random(75), 1);
        rect(xpos + 45, ypos - 70, random(-75), 1);
      }

      {
//HORIZONTAL
      //  ypos = map(sin(time + t / 10 - y *AB), -1, 1, 0, width );
      //  xpos = map(y, 0, vert - 1, 0, height );

     //   noFill();
      //  strokeWeight(1);
     //   stroke(V, X, Z, random(255));
     //   rect(ypos - K / 2,xpos - 5 / 2,  K, 5);
       
      //  noStroke();
      //  fill(AE, AF, AG, random(255));
      //  rect( ypos - 25,xpos - 20, A, C);
       // rect( ypos + 25,xpos + 20, C,A);

       // fill(AJ, AI, AH, random(255));
       // rect( ypos + 35,xpos - 30 + D / 2, A,C);
       // rect( ypos - 35,xpos + 30 - D / 2, C,A);

       // fill(M,N,O, random(255));
       // rect( ypos + 55,xpos - 50, B,A);
       // rect( ypos - 55,xpos + 50, A,B);

       // fill(100, 100, 100, random(100));
       // rect(ypos - F / 2 - 20,xpos - 20,  F,1);
       // rect( ypos - F / 2 + 20,xpos + 20, F,1);

       // rect( ypos - 20,xpos - 35, 1,5);
       // rect( ypos + 20,xpos + 35, 1,5);

       // rect( ypos + 55,xpos + 5,2, random(50));
       // rect( ypos - 55,xpos - 5,-2, random(-50));

       // rect( ypos + 70,xpos - 45,1, random(75));
       // rect( ypos - 70,xpos + 45,1, random(-75));

      }

    }
  }
  time += vel;
}
