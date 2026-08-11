////////////////INFO & FEATURES
let myTitle = "FXHASH MAZE";
let info = '<h3>During the generation process<h/3><h5>Press h to hide this window</br>Press j to display it</h5>'
let present = '<h2>' + myTitle + '</h2><p>by</p><h3>smldms</h3><hr>'
console.log(myTitle + " | smldms 2022.06"), console.log("HASH: " + fxhash);
console.log(window.$fxhashFeatures = {
  "format": format.name,
  "Palette": palette.name,
  "Scale": scl.val,
})
////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
// let globalW = window.innerWidth;
// let globalH = window.innerHeight;
let globalSize = 2048;
let cnv;
let pD = 1;
let gen;
let factor = fxrandBetween(.5,.9)

function preload() { }

function setup() {
  randomSeed(seed);
  noiseSeed(seed);
  cnv = createCanvas(globalSize*format.ww, globalSize*format.hh)
  cnv.parent('fullScreen');
  pixelDensity(pD);
  rectMode(CENTER)
  angleMode(DEGREES)
  background(palette.bgClr);
  gen = new maze();
  gen.show();
  gen.postProd();
}

function draw() {
}

class maze {
  constructor() {
    this.tileCount = scl.val
  }

  show() {
    // stroke(palette.clr)
    strokeCap(eval(strokeStyle.name))
    noStroke()
    for (let gridY = 0; gridY < this.tileCount; gridY++) {
      for (let gridX = 0; gridX < this.tileCount; gridX++) {
        let posX = width / this.tileCount * gridX;
        let posY = height / this.tileCount * gridY;
        let toogle = floor(random(0, 4))
        if (toogle == 0) {
          push()
          fill(palette.clr[0])
          stroke(palette.clr[0])
          if (fxrand() < factor) {
            triangle(posX, posY, posX + width / this.tileCount, posY, posX, posY + height / this.tileCount)
          }
          else {
            line(posX, posY, posX + width / this.tileCount, posY + height / this.tileCount)
            fill(random(palette.clr))
          }
          pop()
          // toogle == 1
        }
        if (toogle == 1) {
          push()
          fill(palette.clr[1])
          stroke(palette.clr[1])
          if (fxrand() < factor) {
            triangle(posX + width / this.tileCount, posY, posX + width / this.tileCount, posY + height / this.tileCount, posX, posY + height / this.tileCount)
            // toogle == 2
          }
          else {
            line(posX, posY, posX + width / this.tileCount, posY + height / this.tileCount)
          }

          pop()

        }
        if (toogle == 2) {
          push()
          fill(palette.clr[2])
          stroke(palette.clr[2])
          if (fxrand() < factor) {
            triangle(posX, posY, posX, posY + height / this.tileCount, posX + width / this.tileCount, posY)
          }
          else {
            line(posX, posY, posX + width / this.tileCount, posY + height / this.tileCount)
          }

          pop()
        }
        if (toogle == 3) {
          push()
          fill(palette.clr[3])
          stroke(palette.clr[3])
          if (fxrand() < factor) {
            triangle(posX, posY, posX + width / this.tileCount, posY, posX + width / this.tileCount, posY + height / this.tileCount)
          }
          else {
            line(posX, posY, posX + width / this.tileCount, posY + height / this.tileCount)
          }
          pop()
          // toogle == 0
        }
      }
    }
  }

  postProd() {
    myFrame(width / 2, height / 2, 5, width, height, random(palette.clr))
    grainy(25)
    myPreview()
    // saver()
    // timer()
  }
}

