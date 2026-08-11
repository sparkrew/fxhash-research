
let quadrados = [];
let numQ = 32;

function preload(){
  
  let q1 = loadImage('img/1.png');
  let q2 = loadImage('img/2.png');
  let q3 = loadImage('img/3.png');
  let q4 = loadImage('img/4.png');
  let q5 = loadImage('img/5.png');
  let q6 = loadImage('img/6.png');
  let q7 = loadImage('img/7.png');
  let q8 = loadImage('img/8.png');
  let q9 = loadImage('img/9.png');
  let q10 = loadImage('img/10.png');
  let q11 = loadImage('img/11.png');
  let q12 = loadImage('img/12.png');
  let q13 = loadImage('img/13.png');
  let q14 = loadImage('img/14.png');
  let q15 = loadImage('img/15.png');
  let q16 = loadImage('img/16.png');
  let q17 = loadImage('img/17.png');
  let q18 = loadImage('img/18.png');
  let q19 = loadImage('img/19.png');
  let q20 = loadImage('img/20.png');
  let q21 = loadImage('img/21.png');
  let q22 = loadImage('img/11.png');
  let q23 = loadImage('img/12.png');
  let q24 = loadImage('img/13.png');
  let q25 = loadImage('img/14.png');
  let q26 = loadImage('img/15.png');
  let q27 = loadImage('img/16.png');
  let q28 = loadImage('img/17.png');
  let q29 = loadImage('img/18.png');
  let q30 = loadImage('img/19.png');
  let q31 = loadImage('img/20.png');
  let q32 = loadImage('img/21.png');
  

  quadrados= [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32]
  
}


console.log(fxhash);
console.log(fxrand());
let px,py,tm,tela,gap;
let nd, numrand, multi;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
  
   tm = 180;
  
  tela = 500;
  multi = 31;
  nd1 = fxrand()*multi;
  nd2 = fxrand()*multi;
  nd3 = fxrand()*multi;
  nd4 = fxrand()*multi;
  nd5 = fxrand()*multi;
  nd6 = fxrand()*multi;
  nd7 = fxrand()*multi;
  nd8 = fxrand()*multi;
  nd9 = fxrand()*multi;
  nd10 = fxrand()*multi;
  nd11 = fxrand()*multi;
  nd12 = fxrand()*multi;
  nd13 = fxrand()*multi;
  nd14 = fxrand()*multi;
  nd15 = fxrand()*multi;
  nd16 = fxrand()*multi;
  console.log(round(nd16),round(nd15),round(nd14),round(nd13),round(nd12),round(nd11),round(nd10),)
  
  
  
}

function draw() {
  background(0);
  
  image(quadrados[round(nd1)], 0,0,tm,tm)
  image(quadrados[round(nd2)], 100*2,0,tm,tm)
  image(quadrados[round(nd3)], 200*2,0,tm,tm)
  image(quadrados[round(nd4)], 300*2,0,tm,tm)
  image(quadrados[round(nd5)], 0,100*2,tm,tm)
  image(quadrados[round(nd6)], 100*2,100*2,tm,tm)
  image(quadrados[round(nd7)], 100*2,200*2,tm,tm)
  image(quadrados[round(nd8)], 100*2,300*2,tm,tm)
  image(quadrados[round(nd9)], 0,200*2,tm,tm)
  image(quadrados[round(nd10)], 200*2,100*2,tm,tm)
  image(quadrados[round(nd11)], 200*2,200*2,tm,tm)
  image(quadrados[round(nd12)], 200*2,300*2,tm,tm)
  image(quadrados[round(nd13)], 0,300*2,tm,tm)
  image(quadrados[round(nd14)], 300*2,100*2,tm,tm)
  image(quadrados[round(nd15)], 300*2,200*2,tm,tm)
  image(quadrados[round(nd16)], 300*2,300*2,tm,tm)
  
  
}