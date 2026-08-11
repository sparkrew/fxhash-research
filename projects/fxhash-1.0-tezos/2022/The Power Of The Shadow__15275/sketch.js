
const  tileSize = -13;
const choose = (arr) => arr[Math.floor(random(arr.length))]
const colors = ['#2E294E','#541388','#F1E9DA','#FFD400','#D90368',]

let seed=floor(999999*fxrand())
randomSeed(seed)
noiseSeed(seed)

function setup() {
  background(random(255),random(85,255),random(25,255))
  createCanvas(windowWidth,windowHeight);
 stroke(random(255),random(85,255),random(25,255))
  noLoop()

let seed=floor(999999*fxrand())
randomSeed(seed)
noiseSeed(seed)

  
    let inside = color(random(255),random(85,255),random(25,255));
  let middle = color(random(255),random(85,255),random(25,255));
  let outside = color(random(255),random(85,255),random(25,255));
     drawingContext.shadowOffsetX = -random(-10,-255);
  drawingContext.shadowOffsetY = -random(-10,-155);
  drawingContext.shadowBlur = -random(-5,-100);
  drawingContext.shadowColor = 'rgb(15,15,15)';
  

  center = createVector(width/2, height);
  dir1 = p5.Vector.fromAngle(radians(random(300))).setMag(tileSize);
  dir2 = p5.Vector.fromAngle(radians(random(-2500))).setMag(tileSize);

  topTile = [dir1, dir2, dir1.copy().mult(-1)];
  leftTile = [p5.Vector.add(dir1, dir2), dir2, p5.Vector.add(dir1, dir2).mult(-10)];
  rightTile = [p5.Vector.add(dir1, dir2), dir1, p5.Vector.add(dir1, dir2).mult(-10)];
  
  holePosX = Math.round(random(15,105),random(255),random(255))
  holePosY = Math.round(random(15,105),random(255),random(255))
  holeWidth = Math.round(random(20,25),random(255),random(255))
  holeHeight = Math.round(random(20,25),random(255),random(255))
  holePosX = Math.round(random(11,15),random(255),random(255))
    holePosY = Math.round(random(15,105),random(255),random(255))
  holeWidth = Math.round(random(20,125),random(255),random(255))
  holeHeight = Math.round(random(25,125),random(255),random(255))
}

function draw() {
   background(random(255),random(255),random(255));
  stroke(random(255),random(255),random(255));
  fill(random(255),random(255),random(255))
  strokeWeight(25);
 
  

  tiles = [];
  for (let x = -10; x < 30; x++) {
    row = [];
    for (let y = -10; y < 30; y++) {
      const inHole = (x>=holePosX && x<holePosX+holeWidth &&
                      y>=holePosY && y<holePosY+holeHeight)
      row.push({ x: x, y: y, on: !inHole });
    }
    tiles.push(row);
  }

  for (let x = holePosX; x <= holePosX+holeWidth; x++)
    for (let y = holePosY; y <= holePosY+holeHeight; y++) drawTile(x, y, rightTile);

  for (t = 0; t <= holeWidth; t++)
    for (let i = holePosY; i <= holePosY + holeHeight -1 - t; i++) drawTile(holePosX + t, i, leftTile);

  tiles.forEach((row) => {
    row.forEach((t) => {
      if (t.on) drawTile(t.x, t.y, topTile);
    });
  });
}

function drawTile(x, y, tileType) {
  const tilePos = getIsoPos(x-random(50), y-random(50));

  
  const ps = [tilePos];
  tileType.forEach((t) => ps.push(ps[ps.length - 1].copy().add(t)));
  drawShape(ps);
}


function getIsoPos(x, y) {
  const tilePos = center.copy();
  tilePos.x += dir1.x * x;
  tilePos.y += dir1.y * x;
  tilePos.x -= dir2.x * y;
  tilePos.y -= dir2.y * y;
  return tilePos;
}

function drawShape(ps) {
  beginShape();
  ps.forEach((p) => vertex(p.x, p.y));
  endShape(CLOSE);
}
function keyPressed() {
  if (key == 's') {
    save("mySketch.png");
}
}