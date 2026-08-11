//random function helpers

// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b



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
console.log(fxrand());

//variaveis para randomizar

BolaRcor = rnd_btw(0,255);
BolaGcor= rnd_btw(0,255);
BolaBcor = rnd_btw(0,255);

centroRcor = rnd_btw(0,255);
centroGcor = rnd_btw(0,255);
centroBcor = rnd_btw(0,255);

mooveRcor = rnd_btw(0,255);
mooveGcor = rnd_btw(0,255);
mooveBcor = rnd_btw(0,255);







 




let angle=0
function setup() {
  createCanvas(700, 700);
  strokeWeight(1);
  strokeCap(PROJECT);
  angleMode(DEGREES);
  frameRate(255)
}

function draw() {
  background(1,2);
  translate(width/2,height/2);
  rotate(angle);
  angle += 3;
  
  fill(centroRcor,centroGcor,centroBcor);
  circle(5,0,80,50);
  
  fill(BolaRcor,BolaGcor,BolaBcor,10);
  circle(100,100,80,50);

  for (let i=0; i<360; i++) {
    push();
    rotate(i);
    stroke(random(0,mooveRcor),random(0,mooveGcor), random(0,mooveBcor))
    line(random(100,5),0,random(100,100),20);
    pop();
    }
}
