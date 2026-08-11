//////BACKGROUND P5 JS
let bubbles = [];
let r1, r2, b1, b2, g1, g2, quantidade, quint, opacidade, quadros;
console.log(fxhash);
console.log(fxrand());


function setup() {
  
  frameRate(25)
  canvas = createCanvas(windowWidth, windowHeight);
  console.log("Yey, you are looking at my code! Follow me on twitter.com/eduxdux_");
  
  r1 = fxrand()*255;
  r2 = fxrand()*255;
  g1 = fxrand()*255;
  g2 = fxrand()*255;
  b1 = fxrand()*255;
  b2 = fxrand()*255;
  quantidade = fxrand()*5;
  quint = fxrand()*30;
  opacidade = fxrand()*50;
  quadros = fxrand()*20
  console.log('opacidade'+opacidade)
  //console.log('isso'+quint)
  
  if(quint < 8){
    quint = quint + 10;
    console.log('ativado')
  }
  
  console.log('isso'+quint)
  
  
  //canvas.position(0, 0);
  canvas.style('z-index', '-1')
  for (let i = 0; i < quint; i++) {
    let r = fxrand()*100;
    let x = fxrand()*width;
    let y = fxrand()*height;
    
    /*var vermelho = map(i, 0 , width, r1, r2);
    var verde = map(i, 0 , width, g1, g2);
    var azul = map(i, 0 , height, b1, b2);*/
    


    bubbles[i] = new Bubble(x, y, r);
  }
  

  
  
}

function draw() {
  console.log(frameCount)
  background(r1,g2,b1,5);
   if (frameCount > quadros){
     noLoop();
   }

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(-10 , -1);
    } else {
      b.changeColor(0.1 , 1);
    }
  }
}

  //Redimensiona o canvas apartir do tamanho da tela
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    console.log(windowWidth + 'x' + windowHeight);
  }

class Bubble {
  constructor(x, y, r = 20) {
    this.x = x;
    this.y = y;
    this.r = r*quint;
    this.brightness = 5;
    this.spx = fxrand()*fxrand(); // Velocidade x da bola
    this.spy = fxrand()*fxrand(); // Veloridade y da bola
    
    //console.log(this.spy);
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }

  changeColor(num, sp) {
    this.r += num;
    this.spx *= sp;
    this.spy *= sp;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x += this.spx; //  x += velocidade
    this.y += this.spy; //  y += velocidade
       
     //Se bater nos lados a bola reverte seu caminho
     if (this.x > width - this.r * 2 || this.x < this.r * 2) {
      this.spx *= -1;
    }

    if (this.y > height - this.r * 2 || this.y < this.r * 2) {
      this.spy *= -1;
    }
  }

  show() {

    //let xdux = dist(mouseX,mouseY,this.x,this.y);
    
    
    var vermelho = map(this.x, r2 , width, r1, r2);
    var verde = map(this.y, quantidade , width, g1, g2);
    var azul = map(this.x, 0 , height, b1, b2);
    
    strokeWeight(4);
    stroke(255);
    //noFill();
    fill(vermelho,verde,azul,10)
    rect(this.x, this.y, this.r * 2);
  }
}