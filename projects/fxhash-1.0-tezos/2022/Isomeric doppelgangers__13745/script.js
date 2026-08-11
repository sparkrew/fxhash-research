//t=0;
var strokeprob;
var pg;
var pg2;
let canvas;
var fSize = 1000;

let step = 25;
let posArray = [];
let angleArray = [];
let sArray = [];

let num = 2000;
let palettename, palette;
let paletteuse = [];
let paletteuse2 = [];
let artRatio = 0.5;

let palVariation, fillShape;
let orientation = 0;
let zoom;

function setup(){

  noiseSeed(fxrand()*1000000);
  randomSeed(fxrand()*1000000);

  palVariation = fxrand();
  fillShape = fxrand();

  setPalette();

  orientation = fxrand()<0.2?'portrait':'vertical';
  zoom = fxrand();
  zoom = zoom<0.05?'low':zoom<0.2?'medium':zoom<0.8?'high':'random';

  size = (windowHeight < windowWidth)? windowHeight:windowWidth;
  if(orientation == "vertical") {
    canvas = createCanvas(size*artRatio, size);
    pg = createGraphics(fSize*artRatio,fSize/2, WEBGL);
    pg2 = createGraphics(fSize*artRatio,fSize/2, WEBGL);
  } else {
    canvas = createCanvas(size, size*artRatio);
    pg = createGraphics(fSize/2,fSize*artRatio, WEBGL);
    pg2 = createGraphics(fSize/2,fSize*artRatio, WEBGL);
  }

  //canvas.id("newCanvas");
  pg.pixelDensity(2);
  pg2.pixelDensity(2);

  pg.background(paletteuse[0]);
  pg.fill(paletteuse[1]);
  pg.stroke(paletteuse[2]);

  pg2.background(paletteuse2[0]);
  pg2.fill(paletteuse2[1]);
  pg2.stroke(paletteuse2[2]);

//  setAttributes('antialias', true);
  //pixelDensity(2);
  noLoop();


  frameRate(30);

  setupArt();
  art();

};

function setPalette() {
  palette = randomFromArray(palettes);
  palettename = palette.name;
  palette = shuffle(palette.arr);
  //palette = palette.arr;


if(fillShape < 0.6) {

  fillShape = false;
  if(palVariation <= 0.33) {
    paletteuse[0] = palette[0];
    paletteuse[1] = palette[0];
    paletteuse[2] = palette[2];

    paletteuse2[0] = palette[2];
    paletteuse2[1] = palette[2];
    paletteuse2[2] = palette[0];

  } else if(palVariation <= 0.66) {
    paletteuse[0] = palette[2];
    paletteuse[1] = palette[2];
    paletteuse[2] = palette[0];

    paletteuse2[0] = palette[0];
    paletteuse2[1] = palette[0];
    paletteuse2[2] = palette[2];

  } else {
    paletteuse[0] = palette[1];
    paletteuse[1] = palette[1];
    paletteuse[2] = palette[0];

    paletteuse2[0] = palette[0];
    paletteuse2[1] = palette[0];
    paletteuse2[2] = palette[1];
  }

} else {

  fillShape = true;
  if(palVariation <= 0.33) {
    paletteuse[0] = palette[0];
    paletteuse[1] = palette[1];
    paletteuse[2] = palette[2];

    paletteuse2[0] = palette[2];
    paletteuse2[1] = palette[2];
    paletteuse2[2] = palette[0];

  } else if(palVariation <= 0.66) {
    paletteuse[0] = palette[2];
    paletteuse[1] = palette[1];
    paletteuse[2] = palette[0];

    paletteuse2[0] = palette[0];
    paletteuse2[1] = palette[0];
    paletteuse2[2] = palette[2];

  } else {
    paletteuse[0] = palette[1];
    paletteuse[1] = palette[0];
    paletteuse[2] = palette[2];

    paletteuse2[0] = palette[2];
    paletteuse2[1] = palette[2];
    paletteuse2[2] = palette[0];
  }

}

}

function keyPressed(){
  if (key == 's') {
    save("IsomericDoppelgangers-"+fxhash+".png");
  }
}


function draw(){
  background(paletteuse[0]);


  if(orientation == "vertical") {
    image(pg,0,0, width, height/2);

    push();
    scale(1, -1)
    image(pg2,0,-height, width, height/2);
    pop();

  } else {
    push();
    scale(-1, 1)
    image(pg,-width/2,0, width/2, height);
    pop();
    image(pg2,width/2,0, width/2, height);
  }

  dnoise();

  window.$fxhashFeatures = {
    "Palette": palettename,
    "Orientation": orientation,
    "Fill": fillShape,
    "Zoom": zoom
  }
  print(window.$fxhashFeatures)

};

function art() {
  for (let i = 0; i < num; i++) {
    pg.push();
    pg.translate(posArray[i].x, posArray[i].y, posArray[i].z);
    pg.rotateX(angleArray[i].x);
    pg.rotateY(angleArray[i].y);
    pg.rotateZ(angleArray[i].z);
    pg.box(sArray[i]);
    pg.pop();

    pg2.push();
    pg2.translate(posArray[i].x, posArray[i].y, posArray[i].z);
    pg2.rotateX(angleArray[i].x);
    pg2.rotateY(angleArray[i].y);
    pg2.rotateZ(angleArray[i].z);
    pg2.box(sArray[i]);
    pg2.pop();
  }
}

function setupArt(){
  init();
}

function windowResized(){
  if(orientation == "vertical") {
    sizeNew = (windowHeight < windowWidth)? windowHeight:windowWidth;
    let theScale = sizeNew/size;
    resizeCanvas(sizeNew*artRatio,sizeNew);
    pg.scale(theScale)
    pg2.scale(theScale)
  } else {
    sizeNew = (windowHeight < windowWidth)? windowHeight:windowWidth;
    let theScale = sizeNew/size;
    resizeCanvas(sizeNew,sizeNew*artRatio);
    pg.scale(theScale)
    pg2.scale(theScale)
  }

}

function init() {
  posArray.push(createVector(0, 0, 0));
  angleArray.push(createVector(fxrandom(-360, 360), fxrandom(-360, 360), fxrandom(-360, 360)));

  let s = 0;
  if(zoom == "low") {
    s = fxrandom(1, 5);
  } else if(zoom == "medium") {
    s = fxrandom(2, 50);
  } else if(zoom == "high"){
    s = fxrandom(10, 75);
  } else {
    s = fxrandom(1,200)
  }


  sArray.push(s);

  for (let i = 0; i < num; i++) {
    posArray.push(createVector(posArray[posArray.length - 1].x + fxrandom(-step, step),
     posArray[posArray.length - 1].y + fxrandom(-step, step), posArray[posArray.length - 1].z + fxrandom(-step, step)));

    angleArray.push(createVector(angleArray[angleArray.length - 1].x + fxrandom(-step, step),
     angleArray[angleArray.length - 1].y + fxrandom(-step, step), angleArray[angleArray.length - 1].z + fxrandom(-step, step)));

    s--;
    sArray.push(s);

    if (s < 0) {
      console.log("aca va")
      posArray.push(createVector(0, 0, 0));

      angleArray.push(createVector(fxrandom(-s, s), fxrandom(-s, s), fxrandom(-s, s)));

      if(zoom == "low") {
        s = fxrandom(1, 30);
      } else if(zoom == "medium") {
        s = fxrandom(10, 100);
      } else if(zoom == "high") {
        s = fxrandom(35, 160);
      } else {
        s = fxrandom(10,140)
      }

      sArray.push(s);
    }
  }
}

function randomFromArray(e) {
    return e[Math.floor(fxrand() * e.length)]
}

function fxrandom(e, t) {
    return Array.isArray(e) ? e[int(fxrand() * e.length)] : (void 0 === t && (t = e, e = 0), fxrand() * (t - e) + e)
}

const palettes = [
{
name: "coral",
arr: ["#fafafb", "#412a13", "#a38f7b", "#05b2dc", "#1c5d99"]
},
{
name: "gray",
arr: ["#dee2e6", "#000000", "#495057", "#ced4da", "#0c1821"]
},
{
name: "retro",
arr: ["#DDDDDD", "#222831", "#30475E", "#F05454"]
},
 {
 name: "vrolik3",
 arr: ["#774f38", "#e08e79", "#f1d4af", "#ece5ce"]
},
{
name: "origami",
arr: ["#01364f", "#84231e", "#247c86", "#e8674d", "#dfdbbe", "#fdf4b4"]
},
{
name: "sooph",
arr: ["#d6c398", "#cbabdb", "#139485", "#414952"]
},
{
name: "jfa",
arr: ["#2a94d1", "#e89643", "#233e4a"]
},
{
name: "bell",
arr: ["#000000", "#ff0000", "#ffcc00"]
}


];


function dnoise() {
  let o = 0;
  let t = 0;
  let e = fSize*0.8;
  let a = fSize;
  loadPixels();
  var i = fSize*0.8 - (fSize*0.8 - a - t),
      n = fSize - (fSize - e - o),
      r = pixelDensity();
  for (let f = t; f < i * r; f += r)
      for (let e = o; e < n * r; e += r) {
          var s = 4 * (e + f * fSize*0.8) * r,
              l = map(1, 0, 1, -10, 10),
              d = map(cos(e * f), -1, 1, -5, 5);
          pixels[s] = pixels[s] + l - d, pixels[1 + s] = pixels[1 + s] + l - d,
          pixels[2 + s] = pixels[2 + s] + l - d, pixels[3 + s] = pixels[3 + s] + l - d
      }
  updatePixels()
}
