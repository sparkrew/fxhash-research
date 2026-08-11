// Dense
// Code by Lammetje
// Twitter: @lammetje_nl
// fxhash.xyz/u/Lammetje
// objkt.com/profile/lammetje

console.log("----------------------")
console.log("Dense by Lammetje 2023")
console.log("----------------------")

let colorsarray  = [ 
  [["1"] , ["2b2d42","8d99ae","ef233c","d90429"]],
  [["2"] , ["0A3A4A","196674","33A6B2","9AC836"]],
  [["3"] , ["A62940","D90B42","591E3A","D8D9C5","D98484"]],
  [["4"] , ["F2C438","F27B13","D9C7B8","8C6C5A","F26D3D"]],
  [["5"] , ["F20544","8C2656","3F618C","012340","011826"]],
  [["6"] , ["D8E3CF","F0A36F","C5557B","4F2C62"]],
  [["7"] , ["1C2747","EC6508","1375BB","E9483B","D8DDE5"]],
  [["8"] , ["04ADBF","04BFBF","025959","A0A603"]],
  [["9"] , ["BF1140","F2F2F2","F2B872","BF1515","733636"]],
  [["10"] , ["161226","8C7E54","D90404","A60303","F2F2F2"]], 
  [["11"] , ["F24968","D984A3","BDDEF2","DCEAF2","A61212"]],
  [["12"] , ["084F8C","1B70A6","1F92BF","F2E7DC","D93223"]],
  [["13"] , ["8C2354","F2CB05","F29F05","F2D3AC","F27405"]],
  [["14"] , ["F20530","A61F38","4D7A8C","F2DABD","F21B1B"]],
  [["15"] , ["F23D4C","010A26","025E73","5BD9AB","F2E1AE"]],
  [["16"] , ["300E27","ED1500","FF3F00","FF8E00","006A68"]],
]

let singlew = singleh = rndint(40, 120)
let variantarray = [ [3, 2.7], [2, 1.7], [1.1, 0.3]]
let variant = randomarray(variantarray)
let colorarray = randomarray(colorsarray)
let colors = colorarray[1]

let colorsshuffle = shufflearr(colors)
let pointarray = [];
let pixeld = 1;
let callpreviewtimer
let bgc
let noisecounter = 9999;
let w = 2000;
let h = 2800;

let sizeNoise = rndint(singlew, singlew*2)/1000
let sizeStart = rndint(0, 2)/10
let sizeEnd = rndint(8, 10)/10
let positionNoise = rndint(10, 30)/1000
let dense = rndint(4, 7)/10
let divxy = rndint(0, 30)
var pg1, pg2, pg3
let border = rndint(16, 20)*10
let aantalw = Math.round((w-border*2) / singlew)
let aantalh = Math.round((h-border*2) / singleh)
let borderleft = (w-((aantalw-1)*singlew))/2
let bordertop = (h-((aantalh-1)*singlew))/2
let aantalcolors = rndint(2, 5)
if(singlew > 90) {
  aantalcolors = rndint(2, 3)
}
let colorsgrid = chroma.scale([colorsshuffle[0], colorsshuffle[1]]).mode('lch').colors(aantalcolors)
let aantalcolors2 = rndint(5, 10)
let coloraantal = rndint(3, 4)

let colorsgrid2
switch(coloraantal) {
  case 2:
    colorsgrid2 = chroma.scale([colorsshuffle[0], colorsshuffle[1]]).mode('lch').colors(aantalcolors2)
    break;
  case 3:
    colorsgrid2 = chroma.scale([colorsshuffle[0], colorsshuffle[1], colorsshuffle[2]]).mode('lch').colors(aantalcolors2)
    break;
  case 4:
    colorsgrid2 = chroma.scale([colorsshuffle[0], colorsshuffle[1], colorsshuffle[2], colorsshuffle[3]]).mode('lch').colors(aantalcolors2)
    break;
}

function setup() {
  colorMode(HSB, 360, 100, 100, 100)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if(urlParams.has('density')) {
    let pixetemp = int(urlParams.get('density'))
    if(pixetemp > 0 && pixetemp <= 4) {
      pixeld = pixetemp
      console.log("pixelDensity: " + pixeld)
    }
  }
  pixelDensity(pixeld);
  angleMode(DEGREES);
  noLoop()
  noStroke()
  rectMode(CENTER);
  seed = int(fxrand()*9999999);
  noiseSeed(seed);
  drawcanvas = createCanvas(w, h);
  drawcanvas.parent("fulllscreen");
  pg1 = createGraphics(w, h);
  pg1.background('rgba(0, 0, 0, 0)');
  pg2 = createGraphics(w, h);
  pg2.background('rgba(0, 0, 0, 0)');
  pg3 = createGraphics(w, h);
  pg3.background('rgba(0, 0, 0, 0)');
  pg1.background('#f3f3e7');
  bgc =  chroma("#" + colorsshuffle[0]).darken(1).alpha(0.03).hex();
  pg1.noStroke()
  pg1.fill(bgc);
  pg1.rect(0, 0, w, h);
  let difxy = rndint(0, 3)
  let difx = rndint(3, aantalw-3)
  let dify = rndint(3, aantalh-3)
  for (var y = 0; y < aantalh; y++) {
      for (var x = 0; x < aantalw; x++) {
        let positionN = noise(x*positionNoise, y*positionNoise)
        let difpos = map(positionN, 0.1, 1, -divxy, divxy)
        let posx = (x*singlew) + borderleft + difpos
        let posy = (y*singleh) + bordertop + difpos
        let sizeN = noise(x*sizeNoise, y*sizeNoise)
        if(fxrand() > 0.1) {
          pointarray.push([posx, posy, randomarray(colorsgrid), sizeN ]); 
        }
      }
  }
  var randomvariables = {
    ColorTheme:String(colorarray[0]),
    Grid:String( aantalw + " x " +  aantalh ),
    TotalColors:String(aantalcolors2),
    Density:String( Math.round(dense * aantalw * aantalh)  ),
    Wiggle:String( divxy  ),
    
  }
  console.table(randomvariables);

  window.$fxhashFeatures = {
    "Color Theme": String(colorarray[0]),
    "Grid": String( aantalw + " x " +  aantalh ),
    "Total colors": String(aantalcolors2),
    "Density": String( Math.round(dense * aantalw * aantalh) ),
    "Wiggle": String( divxy  ),
  }
}



function draw() {  
  for(let i = 0; i < pointarray.length; i++) {
    if(fxrand() > dense) {
      let cirw = map(pointarray[i][3], sizeStart, sizeEnd, 1, singlew)
      for(let j = 0; j < pointarray.length; j++) {
        if(pointarray[i][2] == pointarray[j][2]) {
          let v1 = createVector(pointarray[i][0], pointarray[i][1]);
          let v2 = createVector(pointarray[j][0], pointarray[j][1]);
          let distance = v1.dist(v2);
          if(distance < singlew*variant[0] && distance > singlew*variant[1]) {
            pg2.strokeWeight(cirw)
            pg2.stroke(chroma(randomarray(colorsgrid2)).alpha(rndint(8, 10)/10).hex())
            pg2.line( pointarray[i][0], pointarray[i][1], pointarray[j][0], pointarray[j][1]);
          }
        }
      }
      if(fxrand() > 0.3) {
        pg3.noStroke()
        pg3.fill(chroma(randomarray(colorsgrid2)).alpha(rndint(8, 10)/10).hex())
        pg3.circle(pointarray[i][0], pointarray[i][1], cirw)
      }
      else {
        pg2.noStroke()
        pg2.fill(chroma(randomarray(colorsgrid2)).alpha(rndint(8, 10)/10).hex())
        pg2.circle(pointarray[i][0], pointarray[i][1], cirw)
      } 
    }
  }
  addGrain(10, pg2 )
  addGrain(10, pg3 )
  image(pg1, 0, 0, w, h);
  image(pg2, 0, 0, w, h);
  image(pg3, 0, 0, w, h);
  const loadingdiv = document.getElementById('loadingd')
  loadingdiv.remove();
  callpreviewtimer = setTimeout(callpreview, 1000); 
}
function callpreview() {
  clearTimeout(callpreviewtimer);
  console.log("done")
  fxpreview()
}

function addGrain(num, img){
  img.loadPixels()
  for(let i=0;i<(width*pixelDensity())*(height*pixelDensity())*4;i+=4){
    let noise = map(fxrand(),0,0.9,-num,num)
    img.pixels[i] = img.pixels[i]+noise
    img.pixels[i+1] = img.pixels[i+1]+noise
    img.pixels[i+2] = img.pixels[i+2]+noise
  }
  img.updatePixels()
}

function rndint(min, max) {
  return Math.floor(fxrand() * (max - min + 1) + min)
}
function randomarray(inputarray) {
  return inputarray[Math.floor(fxrand()*inputarray.length)];
}
function shufflearr(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(fxrand() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function exportPNG() {
  saveCanvas(fxhash + '_dense', "png");
}
function keyReleased() {
    if (key == 's' || key == 'S' || key == 'e' || key == 'E') exportPNG();
}
const offsetarray = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
