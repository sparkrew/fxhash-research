/*
 Malevich Square 01  @111v1ab
 License CC BY-SA
 http://111v1ab.xyz
 http://fxhash.111v1ab.xyz
 Oct 2015 -> complete redesign Dec 2021
 Color sequences / alpha spaces are determined by fxrand()
 html and seed based on my revision of fxhash p5js template
 date: 7/dec/2021
 */
let seed = 0; //seed Hash

let x = 110 ;
let y = 110 ;
let pixel = 5; /// 7 su Malevich a

let a =0;

function setup() {

  createCanvas(windowWidth, windowHeight, WEBGL);
  //createCanvas(800, 800, WEBGL);

 seed=(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  frameRate(20);
  //noLoop();
}


function draw() {


  background (15, 10, 20);
  //background (250, 250, 220);




  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {

  
      push();

      rotateX(radians(random(sin(j*0.081))));

      translate(-400, -400, -150);

   
         a =21-((j*random(0.041))*log(j+2700/random(10)));
    
   
    
      noStroke();
      fill(
        85+random(65),
        85+random(65),
        85+random(65),
        a
        );

      ellipse (i*7, j*7, pixel, pixel);
      pop();
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
