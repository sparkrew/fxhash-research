
let res = 2;
let zoom = 200;
let hMap = [];
let blueness = 1.7
let darkest = 0.4

let x = 0; 
let y = 0;
let r = 5;
let th = 0;

let gifit= true;
    let t;
let lsystem;

function setup() {
  let seed=floor(999999*fxrand());
  randomSeed(seed);
  noiseSeed(seed);
  createCanvas(1000, 1000);
  background(255);
    colorMode(HSL)
  // rectMode(CENTER)
  noLoop()
  
  t= new Turtle();
  t.pos(100, height+600);
  t.pd();

  x = r * cos(th) + 2*r;
  y = r * sin(th) + 2*r;
  // th += 0.01
  // 
  for(let i = 0; i < 1 + width/res; i++){
    for(let j = 0; j < 1 + height/res; j++){
      stroke(207, 57, ( noise(i/zoom+x, j/zoom+y) > darkest ? noise(i/zoom+x, j/zoom+y) : darkest) * 255/blueness)
      fill(255, 57, ( noise(i/zoom+x, j/zoom+y) > darkest ? noise(i/zoom+x, j/zoom+y) : darkest) * 255/blueness)
      strokeWeight(res+1)
      point(i*res, j*res)
      
    }
  }
  
  lsystem= new LSystem(
  "FX",
  "X",
    {
    "X": "F-[[X]+X]+F[+FX]-X",
      "F":"FF"
    }
  );
  
  lsystem.iterate(7);
 t.drawLSystem (lsystem,6,10);
   // fill(random(255), 255, random(255))
   t.drawLSystem (lsystem,6,130);

  t.drawString("F", 2, 7);

  t.drawString("FX", 1, 7);
 
  
}



function draw() {


}


   


