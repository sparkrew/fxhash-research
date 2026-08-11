
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())

let r
let g
let b
let rotacao
let tam
  colorbck = ["#cdb4db","#ff8800", "#125969", "#fae1dd", "#d11149", "#d7c0d0","#f7c7db","#f79ad3","#c86fc9","#8e518d", "#e6c229","#f17105","#d11149","#6610f2","#1a8fe3", "#3c3744","#090c9b","#3d52d5","#b4c5e4","#fbfff1"]
colorSergio =["#124e78","#b0b030","#f2bb05","#d74e09","#6e0e0a"]

colorPink = ["#d7c0d0","#f7c7db","#f79ad3","#c86fc9","#8e518d"]

colorVivo = ["#fc440f","#1effbc","#7c9299","#1f01b9","#b4e33d"]

ColorBlueCoffe = ["#3c3744","#090c9b","#3d52d5","#b4c5e4","#fbfff1"]

ColorVioleta = ["#4c5b5c","#ff715b","#f9cb40","#bced09","#2f52e0"]

ColorReds = ["#660708","#ba181b","#e5383b","#d3d3d3","#f5f3f4"]

ColorRnbw = ["#e6c229","#f17105","#d11149","#6610f2","#1a8fe3"]

ColorEst = ["#586ba4","#324376","#f5dd90","#f68e5f","#f76c5e"]

ColorMagna = ["#3c1642","#086375","#1dd3b0","#affc41","#b2ff9e"]

let x, y, z;
let num = 500;
vecLocation1 = [],
vecVelocity1 = [],


OpcoesCor = [colorSergio, colorPink, colorVivo, ColorBlueCoffe, ColorVioleta, ColorReds, ColorRnbw, ColorEst, ColorMagna, colorbck]

NPaleta = parseInt(rnd_btw(0,9))



function setup() {


  createCanvas(800,800);

  frameRate(60);
  background(0);
  x = 2;
  y = 50;

  


  Paleta = OpcoesCor[NPaleta];
  corbgk = Paleta[rnd_int(0,4)];
  
  PaletaMeio = OpcoesCor[NPaleta];
  cormeio = Paleta[rnd_int(0,4)];
  
     r = rnd_int(0,255);
     g = rnd_int(0,255);
     b = rnd_int(0,255);
     rotacao =  rnd_int(0,120)
      tam =  rnd_int(10,100)

 for (let i = 0; i < num; i++) {
    vecLocation1[i] = createVector(800 / 2, 800 / 2);

    vecVelocity1[i] = createVector(rnd_int(rnd_int(-2, -12), rnd_int(2, 20)), rnd_int(rnd_int(-2, -12), rnd_int(2, 20)));

  }



}






function draw() {





  background(r, g, b, 6);
  x += 0.1;
  y += 2
  z += 5




   rotate(rotacao)

  for (let i = 0; i < num; i++) {
		
    noStroke();
   
    vecLocation1[i].add(vecVelocity1[i]);
    rect(vecLocation1[i].x, vecLocation1[i].y, 155, tam);


  }


fill(cormeio)



}