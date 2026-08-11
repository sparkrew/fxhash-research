//**Generative art project for fxhash
//**Tuesday, June 27th, 2023
//**Twitter: @rosbeldev

const title = "Bauhaus Study (special edition)"
setTitle(title);


let seed,maxCanvas;


function setup()
{
  seed      = int(99999999 * fxrand());
  restart();
}


function restart()
{

  randomSeed(seed);
  rectMode(CENTER)
  angleMode(DEGREES)

  createCanvas(windowWidth * 0.95,windowWidth * 0.95);
  if(height > windowHeight){
    resizeCanvas(windowHeight * 0.95, windowHeight * 0.95)
  }
  maxCanvas = min(windowWidth,windowHeight);
  pixelDensity(8);
  noLoop();
  art();

  fxpreview();

}


function art()
{

  strokeWeight(maxCanvas * 0.005)
  //--Primer cuadrante
  let marginX,marginY,repeatX,repeatY;
  marginX    = maxCanvas * 0.16
  marginY    = maxCanvas * 0.15;
  let size   = maxCanvas * 0.15;
  let space   = maxCanvas * 0.01;
  let x      = marginX;
  let y      = marginY;
  let repeat = 7;

  let c      = random(myColors)
  let back = random(c)
  //c = c.filter(e => e != back)
  //background(back)
  background("#e6e1e1")


  //--1
  push()
  fill(random(c))
  square(x,y,size)
  fill(random(c))
  random() < .5 ? square(x,y,size *.5): circle(x,y,size * .5)
  pop()

  //--2
  push()
  x = maxCanvas * 0.32
  fill(random(c))
  circle(x,y,size)
  fill(back)
  circle(x,y,size * .8)
  circle
  pop()

  //--3
  push()
  x = maxCanvas * .49
  y = maxCanvas * .1
  w = maxCanvas * .16;
  h = maxCanvas * .035;
  s = maxCanvas * .05;
  
  fill(random(c))
  rect(x,y,w,h)
  rect(x,y + s,w,h)
  rect(x,y + s*2,w,h)
  pop()

  //--4;
  push()
  x    = maxCanvas * .72;
  y    = maxCanvas * .22;
  size = maxCanvas * .27
  fill(random(c))
  arc(x,y,size,size,180,270)
  pop()
  
  //--5
  push()
  x    = maxCanvas * .77;
  y    = maxCanvas * .12;
  size = maxCanvas * .06;
  fill(random(c))
  circle(x,y,size)
  circle(x + size + size * .2,y,size)
  y = y + size + size * .2;
  circle(x,y,size)
  circle(x + size + size * .2,y,size)
  pop()


  //--6
  push()
  fill(random(c));
  x = maxCanvas * 0.096;
  y = maxCanvas * .32;
  h = maxCanvas * .15;
  w = maxCanvas * .015;
  s = maxCanvas * .01 + w;
  rect(x,y,w,h)
  fill(random(c))
  rect(x + s,y,w,h)
  fill(random(c))
  rect(x + s*2,y,w,h)
  fill(random(c))
  rect(x + s*3,y,w,h)
  fill(random(c))
  rect(x + s*4,y,w,h)
  fill(random(c))
  rect(x + s*5,y,w,h)
  pop()

  //--7
  push()
  fill(random(c))
  x = maxCanvas * .56;
  y = maxCanvas * .32;
  w = maxCanvas * .63;
  h = maxCanvas * .15;
  rect(x,y,w,h)
  fill(random(c))
  rect(x,y,w,h  * .80)
  fill(random(c))
  rect(x,y,w,h * .60)
  fill(random(c))
  rect(x,y,w,h * .40)
  pop()


  x = maxCanvas * .11;
  init = x;
  y = maxCanvas * .45;
  s = maxCanvas * .02;
  size = maxCanvas * .05;
  nx = 6;
  ny = 4; //7

  for(let i = 0; i < ny; i++){
    for(let j = 0; j < nx; j++){
      push()
      random() < .7 ? fill(random(c)): noFill()
     
      if(random() < .5){
        square(x,y,size);
        random() < .5 ? square(x,y,size * .5):null;
      }
      else{
        circle(x,y,size);
        random() < .5 ? circle(x,y,size * .5):null;
      }
      
      pop()
      x += size + s;
    }
    x = init;
    y += size + s
  }

  //----arc
  x = maxCanvas * .286;
  y = maxCanvas * .81;
  w = maxCanvas * .4;
  h = maxCanvas * .17;
 
  push()
  fill(random(c))
  rect(x,y,w,h)
  pop()

  x = maxCanvas * .286 - maxCanvas * .1;
  y = maxCanvas * .81;
  size = maxCanvas * .14;
  push()
  fill(random(c))
  random() < .5 ? circle(x,y,size): square(x,y,size)
  pop()

  x = maxCanvas * .286;
  y = maxCanvas * .81;
  size = maxCanvas * .14;
  push()
  fill(random(c))
  random() < .5 ? circle(x,y,size): square(x,y,size)
  pop()

  x = maxCanvas * .286 + maxCanvas * .1;
  y = maxCanvas * .81;
  size = maxCanvas * .14;
  push()
  fill(random(c))
  random() < .5 ? circle(x,y,size): square(x,y,size)
  pop()


  //-end
  push()
  fill(random(c))
  x = maxCanvas * .7;
  y = maxCanvas * .65;
  size = maxCanvas * .25;
  random() < .5 ? circle(x,y,size): square(x,y,size)
  pop()


  
  x = maxCanvas * .54;
  y = maxCanvas * .660001;
  w = maxCanvas * .015;
  s = maxCanvas * .0255 + w;
  h = maxCanvas * .47;
  n = 9;
 
  for(let i = 0; i < n; i++){
    push()
    fill(random(c))
    rect(x,y,w,h)
    pop()
    x +=s;
  }

  


  

 

  
  //--Frame
  push();
  noFill();
  stroke(random(c))
  strokeWeight(maxCanvas * 0.005);
  square(width * .5, height * .5,maxCanvas * .9)
  pop()
  
}


function windowResized()
{
  restart();
}

































