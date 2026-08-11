let choose = 1;
let timer = 150;
let seed = 0;
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function spawnWalker(x, y, col){
  this.col = col;
  this.path = [];
  this.startX = x;
  this.startY = y;
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  colorMode(HSB);
  this.currX = this.startX;
  this.currY = this.startY;
  this.stuckCounter = 0;
  this.resumePosition = 0;
  this.advance = function(grid){
  opts = this.getOptions(grid);
  choice = random(opts);
  if(choice){
    this.resumePosition = this.path.length - this.stuckCounter;
    this.stuckCounter = 0;
    this.currX = choice.dx;
    this.currY = choice.dy;
    this.path.push({dx: this.currX, dy: this.currY, f: false});
    return {dx: this.currX, dy: this.currY};
    }
    else{
      fruit = true;
      if(this.stuckCounter == 8){
        fruit = false;
        this.stuckCounter++;
      }else{
        this.stuckCounter += 8;
      }
      if(this.resumePosition - this.stuckCounter - 1 >0){
        this.currX = this.path[this.resumePosition - this.stuckCounter].dx;
        this.currY = this.path[this.resumePosition - this.stuckCounter].dy;
        this.path.push({dx: this.currX, dy: this.currY, f: fruit});
      }
      return {dx: this.currX, dy: this.currY};
    }
    return {dx: this.currX, dy: this.currY};
  }
  this.getOptions = function(grid){
    options = [];
    if(this.currX > 0){
      if(grid[this.currX-1][this.currY]){
        options.push({dx: this.currX-1, dy: this.currY});
      }
    }
    if(this.currY > 0){
      if(grid[this.currX][this.currY-1]){
        options.push({dx: this.currX, dy: this.currY-1});
      }
    }
    if(this.currX < grid.length -1){
      if(grid[this.currX + 1][this.currY]){
        options.push({dx: this.currX + 1, dy: this.currY});
      }
    }
    if(this.currY < grid[0].length-1){
      if(grid[this.currX][this.currY+1]){
        options.push({dx: this.currX, dy: this.currY+1});
      }
    }
    return options;
  }
  this.display = function(grid){
  rectMode(CENTER);
  stroke(r, g, b);

  for(p = 0; p<this.path.length-1; p+=1)
    {
      let csize = random(20,50);
      if(choose == 1){
        rect(this.path[p].dx * grid.spc + grid.off, this.path[p].dy * grid.spc + grid.off,csize,csize);
      }
      else if(choose == 2){
        circle(this.path[p].dx * grid.spc + grid.off, this.path[p].dy * grid.spc + grid.off,csize,csize);
      }      
      else if(choose == 3){
          push();
          polygon(this.path[p].dx * grid.spc + grid.off, this.path[p].dy * grid.spc + grid.off, csize-10, 3);
          pop();
      }
      else if(choose == 4){
          push();
          polygon(this.path[p].dx * grid.spc + grid.off, this.path[p].dy * grid.spc + grid.off, csize, 4);
          pop();
      }
      else if(choose == 5){
          push();
          polygon(this.path[p].dx * grid.spc + grid.off, this.path[p].dy * grid.spc + grid.off, csize-10, 7);
          pop();
      }       
    }
  }
}
function makeGrid(wid, hei, spc, off){
  this.wid = wid;
  this.hei = hei;
  this.spc = spc;
  this.off = off;
  this.grid = [];
  this.initGrid = function(){
    for(x = this.off; x<this.wid-this.off; x+=this.spc){
      row = [];
      for(y = this.off; y<this.hei-this.off; y+=this.spc){
        row.push(1);
      }
      this.grid.push(row);
    }
  }
  this.display = function(){
    strokeWeight(0.2);
  }
}
function randomWalkHandler(grid, randomWalkers){
  this.grid = grid;
  this.randomWalkers = randomWalkers;
  this.advanceBoard = function(){
  for(n = 0; n<this.randomWalkers.length; n+=1 ){
    toCheck = this.randomWalkers[n].advance(this.grid.grid);
    this.grid.grid[toCheck.dx][toCheck.dy] = 0;
  }
}
  this.display = function(){
    for(n = 0; n<this.randomWalkers.length; n++){
      this.randomWalkers[n].display(this.grid);
    }
  }
}
function setup() {
  w = min(windowWidth, windowHeight);
  wx = 800;
  wy = 800;
  createCanvas(wx, wy);
  seed=int(fxrand() * 100000000);
  randomSeed(seed);  
  colorMode(HSB, 255, 160, 70);
  choose = random(1,5);
  choose = round(choose);  
  g = new makeGrid(wx,wy,5,70);
  g.initGrid();
  r1 = new spawnWalker(0, 0);
  r2 = new spawnWalker(0, 10);
  r3 = new spawnWalker(0, 20);
  r4 = new spawnWalker(0, 30);
  r5 = new spawnWalker(0, 40);
  r6 = new spawnWalker(0, 50);
  r7 = new spawnWalker(0, 60);
  r8 = new spawnWalker(0, 70);
  r9 = new spawnWalker(0, 80);
  r10 = new spawnWalker(0, 90);
  r11 = new spawnWalker(0, 100);
  r12 = new spawnWalker(0, 110);
  r13 = new spawnWalker(0, 120);
  r14 = new spawnWalker(0, 130);

  r15 = new spawnWalker(130, 0);
  r16 = new spawnWalker(130, 10);
  r17 = new spawnWalker(130, 20);
  r18 = new spawnWalker(130, 30);
  r19 = new spawnWalker(130, 40);
  r20 = new spawnWalker(130, 50);
  r21 = new spawnWalker(130, 60);
  r22 = new spawnWalker(130, 70);
  r23 = new spawnWalker(130, 80);
  r24 = new spawnWalker(130, 90);
  r25 = new spawnWalker(130, 100);
  r26 = new spawnWalker(130, 110);
  r27 = new spawnWalker(130, 120);
  r28 = new spawnWalker(130, 130);
  
  r29 = new spawnWalker(0, 0);
  r30 = new spawnWalker(10, 0);
  r31 = new spawnWalker(20, 0);
  r32 = new spawnWalker(30, 0);
  r33 = new spawnWalker(40, 0);
  r34 = new spawnWalker(50, 0);
  r35 = new spawnWalker(60, 0);
  r36 = new spawnWalker(70, 0);
  r37 = new spawnWalker(80, 0);
  r38 = new spawnWalker(90, 0);
  r39 = new spawnWalker(100, 0);
  r40 = new spawnWalker(110, 0);
  r41 = new spawnWalker(120, 0);
  r42 = new spawnWalker(130, 0);

  r43 = new spawnWalker(0, 130);
  r44 = new spawnWalker(10, 130);
  r45 = new spawnWalker(20, 130);
  r46 = new spawnWalker(30, 130);
  r47 = new spawnWalker(40, 130);
  r48 = new spawnWalker(50, 130);
  r49 = new spawnWalker(60, 130);
  r50 = new spawnWalker(70, 130);
  r51 = new spawnWalker(80, 130);
  r52 = new spawnWalker(90, 130);
  r53 = new spawnWalker(100, 130);
  r54 = new spawnWalker(110, 130);
  r55 = new spawnWalker(120, 130);
  r56 = new spawnWalker(130, 130);  
  
  r57 = new spawnWalker(45, 45);
  r58 = new spawnWalker(45, 65);
  r59 = new spawnWalker(45, 85);
  r60 = new spawnWalker(65, 45);
  r61 = new spawnWalker(65, 65);
  r62 = new spawnWalker(65, 85);
  r63 = new spawnWalker(85, 45);
  r64 = new spawnWalker(85, 65);
  r65 = new spawnWalker(85, 85);
  
  handler = new randomWalkHandler(g, [r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r21,r22,r23,r24,r25,r26,r27,r28,r29,r30,r31,r32,r33,r34,r35,r36,r37,r38,r39,r40,
  r41,r42,r43,r44,r45,r46,r47,r48,r49,r50,r51,r52,r53,r54,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65]);
  frameRate(60);
}
function draw(){
  if (frameCount % 1 == 0 && timer > 0)
    {   
      background(0);
      strokeWeight(6);
      stroke(60);
      noFill();
      rect(400,400,780,780);
      g.display();
      handler.advanceBoard();
      handler.display();
    }
  timer--;
}