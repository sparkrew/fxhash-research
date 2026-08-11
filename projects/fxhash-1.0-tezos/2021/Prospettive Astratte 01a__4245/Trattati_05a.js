/*
Trattati 05a Prospettive Astratte @111v1ab
 License CC BY-SA
 http://111v1ab.xyz
 http://fxhash.111v1ab.xyz
 Dec-2021
 from organized to chaotic. all colors
 organized is a quite rare event by fxrand()
 fxhash p5js template  @111v1ab
 date: 21-12-21
 v0.1
 v0.1a ->
 use FXRND(NUM) as random function.
 use BETWEEN(MIN, MAX);
 v0.2
 moved fxrnd leto usef.js where all usef fx will go.
 Check all random before zip it!!!
 */
// start here
let cellsize = 7; // Dimensions of each cell in the grid
let cols, rows;   // Number of columns and rows in our system
let fibs =[];
let m_cons ;
let min_mouse = 0.5;//14;
let max_mouse = 155.6; //540;
let col_orig = 0;
let col_orig1 = 0;
let bg_pattern = 0; // 0- solo background in setup  1- da foto
let incr;
let offs_col;

function setup() {

  // don't change this
  createCanvas(windowWidth, windowHeight, WEBGL);
  // start here
  
  cellsize = int(between(5,10));
  cols = 3000/cellsize;             // Calculate # of columns
  rows = 3000/cellsize;            // Calculate # of rows
  //frameRate(20);
  noLoop(); // picture or animation?

  offs_col=between(10, 70);

}


function draw() {

  incr += 1;


  m_cons = between(min_mouse, max_mouse);
  scale(0.15*sqrt(width*height)/800);
  translate(-width*3*(800/width), -height*3*(800/height), -400*(800/sqrt(width*height)));
  translate(3000, 950, -500*sqrt(width*height)/800);
  rotateY(radians(50));
  rotateZ(radians(90));
  
  

  background(18, 17, 16);

  // Begin loop for columns
  for ( let i = 0; i < cols; i++) {
    // Begin loop for rows
    for ( let j = 0; j < rows; j++) {
      let x = i*cellsize + cellsize/2; // x position
      let y = j*cellsize  + cellsize/2; // y position
      //  color c = img.pixels[loc];       // Grab the color
      // Calculate a z position as a function of mouseX and pixel brightness
      let z = (m_cons/800)/log(j*0.00001) * cos(i)*200 - 10.00;
      let z1 = (m_cons/800)/log(j*0.00001) *cos(i)*200 - 10.00;

      // Translate to the location, set fill and stroke, and draw the rect

      if (i < 1) {
        fibs[0] = 0;
      } else if (i < 3) {
        fibs[1] = fibs[2] = 1;
      } else {
        fibs[i] = fibs[i-1] + fibs[i-2];  //fibonacci
      }


      let m_fibs = fibs[i]*0.000000001;

      if (sin(i)+cos(i) > 0) {
        push();
        rotateX(tan(z)*3.14*-0.02);
        translate( x+40*z/y*0.04, y+100/log(j*2.22), tan(i*z*10)/tan(z*60.3*50));
        if (col_orig == 0 & sin(i) <0) {
          let r = between(40, 20+offs_col)*cos(i);
          let g =  between(40, 50)*cos(i);
          let b =  between(40, 100)*cos(i);
          let a = 150*sin(z*m_cons)*cos(j);
          stroke(r, g, b, a);
          fill(r, g, b, a);
        } else {
          let r = between(30, 200)*tan(i);
          let g = between(30, 160)*tan(i);
          let b = between(30, 120+offs_col)*tan(i);
          let a = 250*tan(z*m_cons)*cos(j); // 850 1050 350
          stroke(r, g, b, a);
          fill(r, g, b, a);
        }
        noStroke();
        rectMode(CENTER);
        if (bg_pattern == 1) {
          rect(i/10, j/1, cellsize, cellsize);
        }
        rect(x*atan(z*i)/100, y*atan(m_fibs*y)/100, tan(x*0.01)*cellsize, tan(y*0.01)*cellsize);
        pop();
      }


      //if (bg_pattern == 1) {
      //  if (cos(i) < 0.1 ) {

          push();
          // .63
          translate(800, 0, 0);
          rotateY(radians(135));
          strokeWeight(abs(cos(between(0, 100))));
          // .31 e a2 250 per aumentare il grid della faccia
          let r3 = between(10, 80)*log(i)*tan(j*0.8);
          let g3 = between(20, 80)*log(i)*tan(j*0.8);
          let b3 = between(20, 30)*log(i)*tan(j*0.8);
          let a3 = 100*cos(z*m_cons)*tan(y);
          stroke(r3, g3, b3, a3);
          rotateY(cos(y)*PI*0.0013); // .0063 pi[u sfumato .0043 meno.
          translate(tan(x)*cos(x)*0.10, y/tan(y)*0.10);
          //point(x,y);
          //line(x, y, x+10*cos(x)*tan(x), y+10*sin(y)*tan(y));


          pop();
      //  }
      //}
    }
  }
}
