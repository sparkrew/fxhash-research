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
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())

//rastro = rnd_btw(1,90)
abertura = rnd_btw(300,600)
tamanho = rnd_btw(0.01,0.06)
qtd = rnd_btw(400,800)
qtd2 = rnd_btw(400,800)
vel = rnd_btw(.009,.003)
qtd3 = rnd_btw(1.0,1.9)






//Cor Galaxya 
corRBola = rnd_btw(0,255);
corGBola = rnd_btw(0,255);
corBBola = rnd_btw(0,255);

//Cor Fundo
corRFundo = rnd_btw(0,255);
corGFundo = rnd_btw(0,255);
corBFundo = rnd_btw(0,255);



let no0fStars = qtd/*Quantidade de Estrelas*/ , sizeDiff = tamanho/*Espaço entre Estrela*/ , majorAxisMinLen = abertura/*Buraco do meio */, widthHeightRatio = .08/*Giro das Estrelas*/, rotationGradient, rotationGradientSlider, stars =[];
let CANTIDAD_ESTRELAS = qtd2, estrelas = [];
var est= [1]; 




 
function setup() {
  createCanvas(windowWidth, windowHeight);



  //Olho
  push()
  rotationGradient = PI/no0fStars;
  rotationGradientSlider = createSlider(-0.01,rotationGradient*5, rotationGradient, -.0003)
  for(let i=0;i<no0fStars;i++) {
    const majorAxisLen = majorAxisMinLen + i*sizeDiff;
    stars.push( new Star(majorAxisLen))
  }
  pop()

  //Fundo 
  push()
  for(var i =0; i < est.length; i++){
   est[i] = new Stars();
  }

  pop()

 

}

function draw() {
  background(0, 25); //Rastro 
  
  //Fundo Draw
  push()
  for(var i =0; i < est.length; i++){
    est[i].update();
    est[i].show();
  }
  pop()
  


  //Galaxya Draw
  push()
  noFill();
  stroke('white');

  translate(width/2, height/2)
  
  for(let i=0;i<no0fStars;i++) {
    
    rotate(rotationGradientSlider.value())
    stars[i].display();
    stars[i].update();
  }
  pop()
  
  
}

class Star{
 constructor(majorAxisLen) {
   this.majorAxisLen = majorAxisLen;
   this.minorAxisLen = majorAxisLen * widthHeightRatio;
   this.theta = random(2*PI)
   this.deltaTheta = vel;
 }
  
  display() {
    

    const x = (this.majorAxisLen/2.1)*cos(this.theta) ;
    const y = (this.minorAxisLen/2.1)*sin(this.theta);
    
      noStroke();
      stroke(corRBola, corGBola, corBBola) //Cor Galaxya corRBola, corGBola, corBBola 
      circle(x,y,3)
      
  }

  update() {
    this.theta = this.theta + this.deltaTheta;
  }
}

class Stars{
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }

  update(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.z = width;
  }
  
  show(){
    fill(corRBola, random(corGBola), corBBola);
    noStroke();
    this.sx = map(this.x / this.z, 0, 1, 0, width);
    this.sy = map(this.y / this.z, 0, 1, 0, height);
    ellipse(this.sx, this.sy, 12, 12);
  }
}





