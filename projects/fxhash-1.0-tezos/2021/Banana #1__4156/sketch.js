




//do not copy my bananaaaaaaasss, eat it...
let ra;

let imagensA=[];
let imagens=[];

let rand =[];
let rand1 =[];
let rand2 =[];
let rand3 =[];
let rand4 =[];


let randX =[];
let randY =[];

let randX1 =[];
let randY1 =[];

let randX2 =[];
let randY2 =[];

let randX3 =[];
let randY3 =[];

let randX4 =[];
let randY4 =[];

function preload(){
   for (let i = 0; i < 14; i++) {
  imagens[i] = loadImage(`img/${(i+1)}.png`);
  }
   for (let i = 0; i < 5; i++) {
  imagensA[i] = loadImage(`img/a${(i+1)}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0)
  

       function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
  function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
  function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return       Math.floor(fxrand() * (max - min + 1)) + min;}
  
  ra=rnd_int(1,4)
  
 
  
  console.log("ra",ra)
  for(let i = 0; i < 13; i++ ){
  rand[i]=rnd_int(0, 13)
    
  rand1[i]=rnd_int(0, 13)
    
    rand2[i]=rnd_int(0, 13)
    
    rand3[i]=rnd_int(0, 13)
    rand4[i]=rnd_int(0, 13)
  }
  for(let i = 0; i < 13; i++ ){
  randX[i]=rnd_int(0, 800)
  randY[i]=rnd_int(0, 800)
    
    randX1[i]=rnd_int(0, 800)
  randY1[i]=rnd_int(0, 800)
    
    randX2[i]=rnd_int(0, 800)
  randY2[i]=rnd_int(0, 800)
    
      randX3[i]=rnd_int(0, 800)
  randY3[i]=rnd_int(0, 800)
    
    randX4[i]=rnd_int(0, 800)
  randY4[i]=rnd_int(0, 800)
  }
}

function draw() {
  
  image(imagensA[ra],0,0,windowWidth, windowHeight)
  
  for(let i = 0; i < 4; i++ ){
    for(let j = 0; j < 4; j++ ){
    console.log(rand)
      image(imagens[rand[((i+1)*(j+1)-1)]],i* windowWidth/4,j*windowHeight/4,800,800)
      image(imagens[rand[((i+1)*(j+1)-1)]],randX[((i+1)*(j+1)-2)],randY[((i+1)*(j+1)-1)])
      image(imagens[rand4[((i+1)*(j+1)-1)]],randX4[((i+1)*(j+1)-1)],randY4[((i+1)*(j+1)-1)],600,600)
      image(imagens[rand1[((i+1)*(j+1)-1)]],randX1[((i+1)*(j+1)-1)],randY1[((i+1)*(j+1)-1)],400,400)
      image(imagens[rand2[((i+1)*(j+1)-1)]],randX2[((i+1)*(j+1)-1)],randY2[((i+1)*(j+1)-1)],200,200)
    
  }
  }
  
    noLoop()
  }
  
  
  