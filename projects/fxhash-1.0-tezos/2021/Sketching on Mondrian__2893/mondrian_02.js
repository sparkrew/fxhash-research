/*
Sketching Mondrian on Rothko :-)  @111v1ab
 License CC BY-SA
 http://111v1ab.xyz
 http://fxhash.111v1ab.xyz
 finished on: 9-12-2021
 texture density and colors are determined by fxrand()
 random applies to every line not the all block
 fxhash p5js template  @111v1ab
 date: 9/dec/2021
 v0.1
 v0.1a ->
 use FXRND(NUM) as random function.
 use BETWEEN(MIN, MAX);
 v0.2
 moved fxrnd into usef.js where all usef fx will go.
 Check all random before zip it!!!
 */
// start here

let fibs = [];
let cellsize = 3;

function setup() {

  // don't change this
  createCanvas(windowWidth, windowHeight, WEBGL);
  // start here

  frameRate(10);
  noLoop(); // picture or animation?
}


function draw() {

  background(255);

  translate(-400, -300, 0);
  scale(1.75);

  for ( let i = 0; i < 120; i++) {
    for ( let j = 0; j < 120; j++) {
      let x = i*cellsize + cellsize/2; // x position
      let y = j*cellsize  + cellsize/2; // y position
      // Begin loop for rows

      if (x < 3) {
        fibs[1] = fibs[2] = 1;
      } else {
        fibs[x] = fibs[x-1] + fibs[x-2];  //fibonacci
      }

      let m_fibs = fibs[x]*0.0001;

      let c1 = color(150+(fxrnd(100)*between(-1, 1)), 50+(fxrnd(30)*between(-1, 1)), 0);
      let c2 = color(0, 100+(fxrnd(145)*between(-1, 1)), 0);
      let c3 = color(0, 0, 200+(fxrnd(45)*between(-1, 1)));
      let c4 = color(155+(fxrnd(45)*between(-1, 1)), 150+(fxrnd(45)*between(-1, 1)), 120+(fxrnd(45)*between(-1, 1)));
      let c5 = color(155, 255, 155, 255);
     

      let c = color(255);
      stroke(c);
      strokeWeight(0.1);
      if (x > 0 && y > 0+fxrnd(65) && x < 132 && y < 132+fxrnd(45)) {
        c= lerpColor(c1, c2, between(0.1, 0.5));
        strokeWeight(1);
      }
      if (x > 155+fxrnd(65) && y > 120 && x < 300 && y < 150) {
        c= lerpColor(c2, c3, between(0.1, 0.3));
        strokeWeight(1.5);
      }
      if (x > 340+fxrnd(15) && y < 150+fxrnd(245) && x < 395 && y > 100-fxrnd(30)) {
        c= lerpColor(c3, c4, between(0.1, 0.2));
        strokeWeight(1.75);
      }
      if (x > 0 & y > 170+fxrnd(65) && x < 400-fxrnd(100) && y < 400-fxrnd(145)) {
        c= lerpColor(c4, c5, between(0.01, 0.1));
        strokeWeight(1.35);
      }

      if (x > 155+fxrnd(65) & y < 80 && x < 330 && y > 30+fxrnd(45)) {
        c = lerpColor(c5, c1, between(0.01, 0.05));
        strokeWeight(1.35);
      }

      if (blue(c) < 160 || red(c) > 160 || green(c)> 160) {
        push();
        //c.setAlpha(180-between(5, 15));
        stroke(c);
        strokeWeight(between(0.1, 1));
        rotateX(sin(x)*between(0.08, 0.1172));
        //line(x, y, x+(sin(x*fxrnd(0.5))*0.00051), y+between(0.5, 1.29));
        line(x, y, x+between(5.5, 9.29), y+between(5.5, 9.29));
        pop();
        push();
        //c.setAlpha(180-between(3, 50));
        stroke(c);
        strokeWeight(between(0.1, 1));
        line(x, y, x+between(15.5, 121.29), y+between(5.5, 10.29));
        pop();
      } else {
        push();
        //c.setAlpha(180-between(5, 15));
        stroke(c);
        strokeWeight(between(0.1, 2));
        rotateX(cos(x)*between(0.08, 0.1172));
        //line(x, y, x+(sin(x*fxrnd(0.5))*0.00051), y+between(0.5, 1.29));
        line(x, y, x+between(1.5, 14.29), y+between(2.5, 16.29));
        pop();
        push();
        //c.setAlpha(180-between(3, 50));
        stroke(c);
        strokeWeight(between(0.1, 1));
        line(x, y, x+between(15.5, 21.29), y+between(5.5, 10.29));
        pop();
      }
    }
  }
}
