console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

let circleXa = [];
let circleYa = [];
let circleXb = [];
let circleYb = [];
let suitA = [];
let suitB = [];
let colorH = [];
let colorS = [];
let colorB  = [];

let sub = 80 + Math.floor(fxrand()*80);
let num = 8 + Math.floor(fxrand()*22);
let alfa = 70 + Math.floor(fxrand()*30);
let paletA = Math.floor(fxrand()*4);
let paletB = Math.floor(fxrand()*4);
let paletC = Math.floor(fxrand()*36);
let center = 8 + Math.floor(fxrand()*16);
let lineWeight = 1 + Math.floor(fxrand()*2);
let d = (0);
let anim = (0);
let animVar =(0.01);
function setup() {
  if (windowWidth<windowHeight) {
    baseCanvas = windowWidth
  } else {
    baseCanvas = windowHeight
  }
  createCanvas(baseCanvas, baseCanvas);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  initBlockSuite(sub, num, center);
  initValuesColor(num, paletA, paletB);
}
function mousePressed() {
  d = d + 45;
}
function draw() {
  anim = anim + animVar;
  let rayon = ((width/2+(width/160))/sin(45+d%90));
  let bg = ((round(map((hour()+6)%24, 0, 24, 0, 1)))*50)+30;
  print(bg);
  background(0, 0, 0);
  initCircle(sub, rayon, anim);
  noStroke();
  fill(paletC*10, 20, bg);
  ellipse(width/2, width/2, rayon*2);
  Surfaces(num, sub, alfa, lineWeight);
  stroke(0, 0, 80, 50);
  drawLine(num);
  stroke(0, 0, 0, 100);
  noFill();
  strokeWeight(width/50);
  ellipse(width/2, width/2, rayon*2);
}
function keyPressed(){
  if (keyCode === 80) {
    pixelDensity(2);
    draw()
    saveCanvas('Inside_shape_'+ fxhash, 'png');
    pixelDensity(1);
  }
  if (keyCode === 109) {
    animVar = animVar-0.002;
  }
  if (keyCode === 107) {
    animVar = animVar+0.003;
  }
}
function initCircle(sub, rayon, anim) {
  poseX = map(mouseX, 0, width, -width/80, width/80);
  poseY =  map(mouseY, 0, height, -height/80, height/80);
  for (let i = 0; i < sub; i++ ) {
      circleXa[i] = (rayon*(sin((i-anim)*(360/sub))))+((width)/2);
      circleYa[i] = (rayon*(cos((i-anim)*(360/sub))))+((width)/2);
    }
    for (let i = 0; i < sub; i++ ) {
      circleXb[i] = (rayon*(sin((i-anim)*(360/sub))))+((width-poseX)/2);
      circleYb[i] = (rayon*(cos((i-anim)*(360/sub))))+((width-poseY)/2);
    }
}
function initBlockSuite(sub, num, center) {
  a = round(sub*fxrand());
  for (let i = 0; i < num; i++) {
    suitA[i] = a;
    a = a + round(((sub/2)+(sub/center)*fxrand()));
    suitB[i] = a;
    a = a + round((sub/4)*fxrand());
  }
}
function initValuesColor(num, paletA, paletB) {
  let hue = [0,0,0,0,0,0,0,0];
  let sat = [0,0,0,0,0,0,0,0];
  let bri  = [5, 10, 15, 20, 50, 85, 90, 95];
  bri.push (95, 90, 85, 50, 20, 15, 10, 5);
  bri.push (60, 65, 70, 75, 80, 85, 90, 95);
  bri.push (5, 10, 15, 20, 25, 30, 35, 40);
  for (let l = 0; l < num; l++) {
    colorH[l] = hue[l%8];
    colorS[l] = sat[l%8];
    colorB[l] = bri[l%8 + (paletA*8)];
  }
  for (let l = 0; l < num; l++) {
    s = fxrand();
    if (s < .5 ) {
      colorH[l] = hue[l%8];
      colorS[l] = sat[l%8];
      colorB[l] = bri[l%8 + (paletB*8)]; 
    }
  }  
}
function drawLine(num) {
  strokeWeight(width/3000);
  for (let i = 0; i < num; i++) {
    a = suitA[i];
    b = suitB[i];
    line(circleXa[a%sub], circleYa[a%sub],circleXa[b%sub], circleYa[b%sub]);
  }
}
function Surfaces(num, sub, alfa, lineWeight) {
  for (let i = 0; i < num; i++) {
    a = suitA[i];
    b = suitB[i];
    if (a > b) {
      n = a+b;
    } else {
       n = abs((sub-b)+a);
    }
    noStroke();
    fill(colorH[i], colorS[i], colorB[i]/2, alfa/2);
      beginShape();
      vertex(circleXb[a%sub], circleYb[a%sub]);
      vertex(circleXb[b%sub], circleYb[b%sub]);
      for (let j = 1; j < n; j++ ){
          vertex(circleXb[((b+j)%sub)], circleYb[((b+j)%sub)]);
        }
    endShape();
    fill(colorH[i], colorS[i], colorB[i], alfa);
    beginShape();
    vertex(circleXa[a%sub], circleYa[a%sub]);
    vertex(circleXa[b%sub], circleYa[b%sub]);
      for (let j = 1; j < n; j++ ){
        vertex(circleXa[((b+j)%sub)], circleYa[((b+j)%sub)]);
      }
    endShape();
     stroke(0, 0, 0, 80)
     strokeWeight((width/800)*lineWeight);
     line(circleXa[a%sub], circleYa[a%sub],circleXa[b%sub], circleYa[b%sub]);
  }
}
function windowResized() {
  if (windowWidth<windowHeight) {
    baseCanvas = windowWidth
  } else {
    baseCanvas = windowHeight
  }
  resizeCanvas(baseCanvas, baseCanvas);
}