//https://editor.p5js.org/codingtrain/sketches/bNPjMWlwV

let tentacles = [];
let pos;
let vel;
let gravity;
var numberOfRows; 
var numberOfColumns; 
var xStep; 
var yStep;
var positions = []; 
function maxminrand(min, max) {
  return fxrand() * (max - min) + min;
}
function setup() {
    createCanvas(2000, 2000);
    rsd=maxminrand(0,9999)
    nsd=maxminrand(0,9999)
    randomSeed(rsd)
    noiseSeed(nsd)
    numberOfColumns = Math.floor(maxminrand(3,8)); 
    numberOfRows = Math.floor(maxminrand(3,8));
    xStep = width/numberOfColumns;
    yStep = height/numberOfRows; 
    for(var x = xStep; x < width-1; x += xStep){
      for(var y = yStep; y < height-1; y += yStep){ 
        var p = createVector(x, y); 
        positions.push(p); 
      }
    }  
    lnx=10
    lnswa=[0.1,0.15,0.2]
    csa=[["#f5f5f5","#ff0000","#141414"]]
    tli=[100,125,150]

    shuffle(csa[0],true)
    shuffle(tli,true)
    shuffle(lnswa,true)
    lnsw=lnswa[0]
    vmlt=maxminrand(1,6)
    gv=maxminrand(-0.6,0.6)
    pidv=Math.floor(maxminrand(2,10))
    pos = createVector(maxminrand(0,width), maxminrand(0,height));
    vel = createVector(maxminrand(0.1,6), maxminrand(0.1,6));
    ima=[[1,3,0],[1,3,0],[2,3,1]]
    shuffle(ima,true)
    im2=Math.floor(maxminrand(ima[0][0],ima[0][1]))
    gravity = createVector(0, gv);
    vel.mult(vmlt);
    esa=[60,120,180,240,300]
    shuffle(esa,true)
    es=esa[0]
    tl=Math.floor(maxminrand(2,6))
    background(csa[0][0]);

    for(var i = 0; i < positions.length; i++){ //go through all our positions
      if(i%im2==ima[0][2]){
        tentacles.push(new Tentacle(positions[i].x, positions[i].y));
        fill(csa[0][1])
        noStroke()
        ellipse(positions[i].x, positions[i].y, es, es); //put a circle at each of them
      }
    }  
    dc=0
    while(dc<500){
      noFill();
      for (let i = 0; i < tentacles.length; i++) {
          let t = tentacles[i];
          t.update();
          t.show();
      }
  
      pos.add(vel);
      vel.add(gravity);

      if (pos.x > width || pos.x < 0) {
          vel.x *= -1;
      }
  
      if (pos.y > height) {
          pos.y = height;
          vel.y *= -1;
          vel.mult(0.9);
      }


      dc++
    }
}

function draw() {
}

