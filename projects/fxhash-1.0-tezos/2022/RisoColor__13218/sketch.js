const w = window.innerHeight*0.8
const h = window.innerHeight
const canv = (w+h) / 2

numRings = randomInt(100, 400)
centerRad = randomVal(h*0.2, h*0.5)

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function randomVal(min, max) {
  return fxrand() * (max - min) + min;
}
function map_range(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

//Palette
const pal = [
  ['#052026', '#F2B279', '#F2884B', '#D9663D', '#8C4130'],
  ['#034C8C', '#042440', '#D98841', '#A65A2E', '#402319'],
  ['#F2D785', '#D9B36C', '#F2EFE9', '#D99255', '#0D0D0D'],
  ['#A60321', '#D96A7E', '#205373', '#A3BFB7', '#F29F80'],
  ['#435359', '#212526', '#373D40', '#8C6330', '#0D0D0D'],
  ['#731459', '#75208C', '#270140', '#370359', '#5A3673'],
  ['#26060C', '#027353', '#8C2703', '#73130A', '#59110B'],
  ['#010D00', '#5A7356', '#152608', '#638C46', '#BDBF7A'],
  ['#0B0B0D', '#124019', '#0D260F', '#8C4D16', '#401F0D'],
  ['#1F2740', '#394873', '#4384D9', '#651D42', '#66B1F2'],
  ['#9AA68F', '#F2F1DF', '#402319', '#734A3C', '#BF948A'],
]

const bgPal = ['#F2B279', '#F2884B', '#0D0D0D', '#F2EFE9', '#66B1F2', '#F2D785',
'#9AA68F', '#D96A7E', '#CCE2CB', '#5A7356', '#FCE6E9', '#A60321', '#BF948A',
'#EAB6AB']
const pall = pal[randomInt(0, 10)]
bgCol = bgPal[randomInt(0, 13)]

leg = canv*0.001
ringCol = pal[randomInt(0, 10)][randomInt(0, 4)]
let noiseMax = randomVal(canv * 0.00, canv*0.03)
function ring(x, y, rad) {
  stroke(pall[randomInt(0, 4)])
  for (let a = 0; a < TWO_PI; a += radians(0.3)) {

    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff), 0, 1, rad-(h*0.05), rad+(h*0.05));
    let x = r * cos(a);
    let y = r * sin(a);

    strokeWeight(canv/(canv*2))
    line(x, y, x+randomInt(-leg, leg), y+randomInt(-leg, leg));
  }

}


function accLine(xa, ya, xb, yb) {
  stroke(pall[randomInt(0, 4)])
  strokeWeight(canv/(canv*2))
  numSegs = randomInt(100, 300)
  segLengthX = (xb-xa)/numSegs
  segLengthY = (yb-ya)/numSegs
  for(let i = 0; i < numSegs; i++) {
    wiggle = noise(i)*(canv*0.001)
    line(xa + (segLengthX*i)+wiggle, ya + (segLengthY*i)+wiggle, (xa + (segLengthX*i))+randomInt(-leg,
    leg)+wiggle, (ya + (segLengthY*i))+randomInt(-leg, leg)+wiggle)
  }
}



x1 = randomInt(0, w)
y1 = randomInt(0, h)
x2 = randomInt(0, w)
y2 = randomInt(0, h)
x3 = randomInt(0, w)
y3 = randomInt(0, h)
x4 = randomInt(0, w)
y4 = randomInt(0, h)
x5 = randomInt(0, w)
y5 = randomInt(0, h)
function rings(num) {
  inc = ((canv*0.75)-centerRad) / num
  for(let i = 0 ; i < num; i++) {
    push()
    translate(x1, y1)
    ring(0, 0, centerRad+ (inc*i))
    pop()
    push()
    translate(x2, y2)
    ring(0, 0, centerRad+ (inc*i))
    pop()
    push()
    translate(x3, y3)
    ring(0, 0, centerRad+ (inc*i))
    pop()
    push()
    translate(x4, y4)
    ring(0, 0, centerRad+ (inc*i))
    pop()
//modifier
    push()
    blendMode(DIFFERENCE)
    translate(x5, y5)
    ring(0, 0, centerRad+ (inc*i))
    pop()
  }
}

accentCount = randomInt(5, 35)

function setup() {
  createCanvas(w, h);
  noLoop()
}

function draw() {
  background(bgCol);
  strokeWeight(100)
  noFill()
  rings(numRings)


  //ACCENT LINES
  for(let i = 0; i < accentCount; i ++) {
    accLine(randomInt(0, w), randomInt(0, h), randomInt(0, w), randomInt(0, h))
  }

  // BORDER
    push();
    marg = canv * 0.015;

    blendMode(BLEND);
    fill(bgCol);
    stroke("white");
    noStroke()
    beginShape();
    vertex(0, 0);
    vertex(w, 0);
    vertex(w, h);
    vertex(0, h);
    beginContour();
    vertex(marg, marg);
    vertex(marg, h - marg);
    vertex(w - marg, h - marg);
    vertex(w - marg, marg);

    endContour();
    endShape(CLOSE);
    pop();

    fxpreview()
}

function keyTyped() {
  if (key === "s") {
    save("Bagel.png");
  }
}
