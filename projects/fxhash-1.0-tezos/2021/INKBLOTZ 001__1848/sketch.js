// Coded by Eduxdux, designed by Crivelito

// Setar um array das imagens
let quadrados = [];
let numQ = 32;

//Carregar as imagens
function preload(){
  
  // Rola de dar load assim
  let q1 = loadImage('img/q1.png');
  let q2 = loadImage('img/q2.gif');
  let q3 = loadImage('img/q3.png');
  let q4 = loadImage('img/q4.gif');
  let q5 = loadImage('img/q5.png');
  let q6 = loadImage('img/q6.gif');
  let q7 = loadImage('img/q7.png');
  let q8 = loadImage('img/q8.gif');
  let q9 = loadImage('img/q9.png');
  let q10 = loadImage('img/q10.gif');
  let q11 = loadImage('img/q11.png');
  let q12 = loadImage('img/q12.gif');
  let q13 = loadImage('img/q13.png');
  let q14 = loadImage('img/q14.gif');
  let q15 = loadImage('img/q15.png');
  let q16 = loadImage('img/q16.gif');
  
  
  
  // Ou pode usar a forma mais rapida
  /*
  for (let q = 0; q < numQ; q++){
    quadrados = [q]
    quadrados[q] = loadImage("img/q"+q+".png");
    
    //console.log(quadrados)
    
  }
  */
  //quadrados = [q]
  quadrados= [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16]
  
}


console.log(fxhash);
console.log(fxrand());
let px,py,tm,tela,gap;
let nd, numrand, multi;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(5)
  //noLoop();
  
  console.log(rnd_btw(2,3))
  
  tm = 200;  
  tela = 800;
  multi = 15;
  
  
  nd1 = rnd_btw(0,multi);
  nd2 = rnd_btw(0,multi);
  nd3 = rnd_btw(0,multi);
  nd4 = rnd_btw(0,multi);
  nd5 = rnd_btw(0,multi);
  nd6 = rnd_btw(0,multi);
  nd7 = rnd_btw(0,multi);
  nd8 = rnd_btw(0,multi);
  nd9 = rnd_btw(0,multi);
  nd10 = rnd_btw(0,multi);
  nd11 = rnd_btw(0,multi);
  nd12 = rnd_btw(0,multi);
  nd13 = rnd_btw(0,multi);
  nd14 = rnd_btw(0,multi);
  nd15 = rnd_btw(0,multi);
  nd16 = rnd_btw(0,multi);
  
  //console.log(quadrados)
  
  
}

function draw() {
  background(0);
  
  
  // Seta as imagens
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
  
  
  
  //Grid
   /* for (let i = 40; i < tela; i+=tm) {
      for (let j = 40; j < tela; j+=tm) {        
        
        image(quadrados[numrand], i,j,tm,tm)
        //fill(255)
        //rect(i,j,tm,);
        
    }
  }*/
}