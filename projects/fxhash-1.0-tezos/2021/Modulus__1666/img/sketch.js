
let quadrados = [];
let numQ = 21;

function preload(){
  
  let q1 = loadImage('./1.png');
  let q2 = loadImage('./2.png');
  let q3 = loadImage('./3.png');
  let q4 = loadImage('./4.png');
  let q5 = loadImage('./5.png');
  let q6 = loadImage('./6.png');
  let q7 = loadImage('./7.png');
  let q8 = loadImage('./8.png');
  let q9 = loadImage('./9.png');
  let q10 = loadImage('./10.png');
  let q11 = loadImage('./11.png');
  let q12 = loadImage('./12.png');
  let q13 = loadImage('./13.png');
  let q14 = loadImage('./14.png');
  let q15 = loadImage('./15.png');
  let q16 = loadImage('./16.png');
  let q17 = loadImage('./17.png');
  let q18 = loadImage('./18.png');
  let q19 = loadImage('./19.png');
  let q20 = loadImage('./20.png');
  let q21 = loadImage('./21.png');
  
  
  

  quadrados= [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16,q17,q18,q19,q20,q21,q22,q23,q24,q25,q26,q27,q28,q29,q30,q31,q32]
  
}


console.log(fxhash);
console.log(fxrand());
let px,py,tm,tela,gap;
let nd, numrand, multi;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15)
  //noLoop();
  
   tm = fxrand()*600;
  if(tm<200){
    tm=200;
  }
  tela = 800;
  multi = 31;
    //let randoImg = random(quadrados)
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