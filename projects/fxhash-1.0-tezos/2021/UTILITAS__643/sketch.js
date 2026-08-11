let time = 0;
let vel = 0;
let deitado = 35;
let de_pe = 11;
let E = fxrand() * 10;
let F = fxrand() * 25;
let G = fxrand() * 50;
let H = fxrand() * 75;
let I = fxrand() * 100;
let J = fxrand() * 125;
let K = fxrand() * 150;
let L = fxrand() * 175;
let M = fxrand() * 200;
let N = fxrand() * 225;
let O = fxrand() * 250;
let P = fxrand() * 255;
let Q = fxrand() * 255;
let R = fxrand() * 255;
let S = fxrand() * 250;
let T = fxrand() * 250;
let U = fxrand() * 250;

function setup() {
  let canvas = createCanvas(800, 800);

  strokeWeight(0);
  colorMode(RGB, 255);
  blendMode(SCREEN);
  vel = TWO_PI / 450;
}
function draw() {
  clear();
  background(0, 0, 0);

  for (let y = 0; y < de_pe; y++) {
    for (let t = 0; t < deitado; t++) {
       {
        //VERTICAL
        y_pos = map(sin(time + t / 15 - y ), -1, 1, 0, width - 0);
        x_pos = map(y, 0, de_pe - 1, 45, height - 75);

        fill(S, T, U, random(255));
        //fill(S,T,U, random(255));
        rect(x_pos+5,y_pos,-1,H);
        rect(x_pos+15,y_pos,5,I);
        rect(x_pos+25,y_pos,E,-10);
        rect(x_pos+35,y_pos,1,5);
        rect(x_pos+40,y_pos,5,E);
              
        fill(100, 100, 100, random(255));
        rect(x_pos+45, y_pos+2.5, 1, 1);
        rect(x_pos+50, y_pos+2.5, 1, log(time)*-G);
        rect(x_pos+55, y_pos+5, 1, 1);
        rect(x_pos+60, y_pos+5, 1, I);
        rect(x_pos+65, y_pos+10, 1, -O);
        rect(x_pos-10, y_pos+10, 1, F);
        rect(x_pos-15, y_pos+15, 1, 1);
        rect(x_pos-20, y_pos+15, 1, log(time)*H);
        rect(x_pos-25, y_pos+20, 1, I);
        rect(x_pos-30, y_pos+20, 1, -F);
        rect(x_pos-5, y_pos-2.5, 5, 10);
        rect(x_pos - 5, y_pos + 2 / 10, -random(-100,100), 1,random(100));
        rect(x_pos - 10, y_pos, -5, 5);
        
      }
      
      {
        //horizontal
        y_pos = map(sin(time + t / 15 - y ), -1, 1, 0, width - 0);
        x_pos = map(y, 0, de_pe - 1, 45, height );
        fill(P,Q,R,random(255));
        rect(y_pos,x_pos+5,E,5);
        rect(y_pos,x_pos+15,F,5);
        rect(y_pos,x_pos+25,G,2.5);
        rect(y_pos,x_pos+30,H,1);
        rect(y_pos,x_pos+45,-F,1);
        rect(y_pos,x_pos+55,2.5,G);
        
        fill(150, 150, 150, random(255));
        rect(y_pos+2.5,x_pos+45,1, 1);
        rect(y_pos+2.5,x_pos+50, 1,1);
        rect(y_pos+5,x_pos+55, 1, H);
        rect(y_pos+5,x_pos+60,1,I);
        rect(y_pos+10,x_pos+65, 1, -F);
        rect(y_pos+10,x_pos-10, 1, F);
        rect(y_pos+15,x_pos-15, 1, 1);
        rect(y_pos+15,x_pos-20, 1, 1);
        rect(y_pos+20,x_pos-25, 1, I);
        rect(y_pos+20,x_pos-30, 1, -F);
        rect(y_pos+25,x_pos-5, 5, 10);
        rect(y_pos - 5, x_pos + 2 / 10, 1,-random(-100,100),random(100));
        rect(y_pos - 10, x_pos, -5, 5);
        
      }
      

      
    }
  }
  time += vel;
}
