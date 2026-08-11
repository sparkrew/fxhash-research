const ARB_SCL = 600;
const cols = 10;
const rows = 25;

const terrain = [];
const terrain_m = cols / 2;
const terrain_s = (ARB_SCL * 1.09) / cols;
const terrain_alt = ARB_SCL * 0.8;
const wall_alt = ARB_SCL * 11;
const trench_alt = ARB_SCL * 0.3;

let perlin_t = 0;
const perlin_s = 0.6;

let flying = 0;
const flying_s = 5;

let isTurbo = false;
let yoff = 0.0; 
let yset = 0.0;
  var tk1 =0; 
  var tk2  =0;
  var tk3 =0;
  var tk4=0;
oi= 0,20

 


function setup() {
  print(fxhash[3])
  
   for(var x = 0; x < fxhash.length; x++){
    if(x<13){
      tk1 += unchar(fxhash[x]); 
    }
    if (x>13 && x < 27){
      tk2 += unchar(fxhash[x]);
    }
    if (x>27 && x < 40){
      tk3 += unchar(fxhash[x]);
    }
    if (x>40 ){
      tk4 += unchar(fxhash[x]);
    }
  }
  tk1 = map (tk1,850,1000,150,300);
  tk2 = map (tk2,900,9000,1,90);
  tk3 = map (tk3,850,8000,150,3000);
  tk4 = map (tk4,900,9000,0,80);
  print(tk1,tk2,tk3,tk4); 
 

 
{
  createCanvas(windowWidth, windowHeight, WEBGL);

  
  for (let y = 0; y < rows; y++) {
    terrain[y] = [];
    for (let x = 0; x < cols; x++) {
      terrain[y][x] = genTerrainPoint(x, perlin_t);
    }
    perlin_t += perlin_s;
  }
}
}

function draw() {

  background(tk2)
  fill (tk3-100,tk3-120,tk3-100,tk3-150)
  circle(1, -140, 50)
  
fill (tk3-100,tk3-100,tk3-90, tk3-100)
  circle(1, -140,40)
  
  stroke(tk3-150, tk3-180)

  translate(ARB_SCL * 0.51, ARB_SCL * 0.18, ARB_SCL * 0.5);
  rotateX(PI * 0.5);
  translate(-ARB_SCL, -ARB_SCL * rows * 0.1);

  fill(tk3-80,tk3-100,tk3-90, tk3-100);
  
  strokeWeight(tk2-2);
  for (let y = 1; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * terrain_s, (y * terrain_s) + flying, terrain[y][x]);
      vertex(x * terrain_s, ((y + tk2) * terrain_s) + flying, terrain[y + 1][x]);
    }
    endShape();
  }


  if (isTurbo) {
    flying += tk4;
  } else {
    flying += flying_s;
  }

  if (flying >= terrain_s) {

    flying = tk2;
    terrain.pop();

    const new_row = [];
    for (let x = 0; x < cols; x++) {
      
      if (x >= terrain_m - tk1<= terrain_m + 2) {
        new_row.push(genTerrainPoint(x, perlin_t));
      } else {
        new_row.push(genTerrainPoint(x, perlin_t));
      }

    }
    terrain.unshift(new_row);
    perlin_t += perlin_s;
  }

}

function mousePressed() {
  isTurbo = true;
}

function mouseReleased() {
  isTurbo = false;


 
  
  
  
}

function genTerrainPoint(x, y) {
  let point;


  if (x == floor(terrain_m - 2) ||
    x == floor(terrain_m - 1) ||
    x == floor(terrain_m) ||
    x == floor(terrain_m + 1)) {
    point = random(tk4)* trench_alt;
  }

  else if (x == floor(terrain_m - 3) ||
    x == floor(terrain_m + 2)) {
    point = map(noise(x, y), 
             tk2, 1,tk4 ,
                0.05) * wall_alt;
  }

  else {
    point = noise(x, y) * terrain_alt;
  }
  return point;
}