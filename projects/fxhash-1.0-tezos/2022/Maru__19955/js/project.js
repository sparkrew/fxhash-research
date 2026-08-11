// Maru
// Code by Lammetje
// Twitter: @lammetje_nl
// fxhash.xyz/u/Lammetje
// objkt.com/profile/lammetje

console.log("-----------------------")
console.log("Maru by Lammetje 2022")
console.log("-----------------------")

let colorsarray  = [ 
  
  [["1"] , ["024873","B4D2D9","D99E89","F23E16","730202"]],
  [["2"] , ["588C87","F2E4DC","F25922","F29D7E","F22E2E"]],
  [["3"] , ["084F8C","1B70A6","1F92BF","F2E7DC","D93223"]],
  [["4"] , ["F2711B","FFD5BA","FFF0D6","B7C093","97A275"]],
  [["5"] , ["ADD4D9","F28444","F24405","A64833","F26052"]],
  [["6"] , ["8C2354","F2CB05","F29F05","F2D3AC","F27405"]],
  [["7"] , ["4EBFBF","768C26","F2EFEB","F27830","F2622E"]],
  [["8"] , ["1F94B8","00698A","00EBA2","F5F5F5","B80033"]],
  [["9"] , ["593E40","F2D5C4","F2785C","F2594B","A66F6F"]],
  [["10"] , ["D8E3CF","FEF1D1","F0A36F","C5557B","4F2C62"]],
  [["11"] , ["144E73","2173A6","33A67C","F2C6AC","F2DBCE"]],
  [["12"] , ["BF567D","8C4D70","435C73","6FA8BF","539DA6"]],
  [["13"] , ["64C5F5","2484BF","EEF2E9","4DA60D","2A5908"]],
  [["14"] , ["40282E","5C736C","F2D0BD","F29C94","F27777"]],
  [["15"] , ["04ADBF","04BFBF","025959","A0A603","F2E0C9"]],

]

let colorarray = randomarray(colorsarray)
if(fxrand() > 0.95) {
  colorarray = [["Grey"] , ["4F5059","8C8C8C","F2F0E4","D9D7CC","BFBDB8"]]
}
let colors = colorarray[1]
let colorsshuffle = shufflearr(colors)
let circlesarray = [];
let circles = [];
let pixeld = 1;
let callpreviewtimer
let bgc
let innercirclew
let innercircleminus
let v1, v2
let rotationdirarray = [1, -1];
let rotationdir = randomarray(rotationdirarray)

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
  angleMode(DEGREES);
  noLoop()
  background('#f3f3e7');
  canvasoutput = createCanvas(1414,2000);
  pixelDensity(pixeld);
  fill("#f3f3e7")
  rect(0, 0, 1414, 2000);
  bgc =  chroma("#" + colorsshuffle[0]).darken(1).alpha(0.07).hex();
  fill(bgc);
  rect(0, 0, 1414, 2000);
  let aantalcircles = rndint(200, 240);
  let border = rndint(180, 220);
  let bordervar = rndint(0, 30);
  innercirclew = rndint(8, 14);
  let protection = 0;
  v1 = createVector(rndint(-200, 714), rndint(-200, 200), 0);
  v2 = createVector(rndint(714, 1614), rndint(1800, 2200), 0);
  while (circles.length < aantalcircles) {
    let radius = rndint(60, 600)
    let difx = rndint(-bordervar, bordervar) + rndint(border+(radius/2), (1414-border)-(radius/2))
    let dify = rndint(-bordervar, bordervar) + rndint(border+(radius/2), (2000-border)-(radius/2))
    randomarray(colorsshuffle)
    circleobj = new Circ(difx, dify, radius, colorsshuffle, rndint(1, 3), (rndint(5, 20)/10) );
    let overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      let other = circles[j];
      let d = dist(circleobj.pos.x, circleobj.pos.y, other.pos.x, other.pos.y);
      if (d < (circleobj.r/2)-20 + (other.r/2)-20) {
        overlapping = true;
      }
    }
    if (!overlapping) {
      circles.push(circleobj);
    }
    protection++;
    if (protection > 10000) {
      break;
    }
  }
  window.$fxhashFeatures = {
    "Color Theme": String(colorarray[0]),
  }
  console.log( window.$fxhashFeatures )
}

function draw() {
  blendMode(BLEND)
  for(let i = 0; i < circles.length; i++) {
      circles[i].show();
  }
  addGrain(14)
  stroke( '#fcfcf8' );
  strokeWeight( 100 ) 
  noFill()
  rect( 0, 0, 1414, 2000);
  callpreviewtimer = setTimeout(callpreview, 1000); 

}
function addGrain(num){
  loadPixels()
  for(let i=0;i<(width*pixelDensity())*(height*pixelDensity())*4;i+=4){
    let noise = map(fxrand(),0,0.9,-num,num)
    pixels[i] = pixels[i]+noise
    pixels[i+1] = pixels[i+1]+noise
    pixels[i+2] = pixels[i+2]+noise
  }
  updatePixels()
}

class Circ {
  constructor(_x, _y, _r, _colors, _colorflow, _strokeWeight  ) {
    this.x = _x;
    this.y = _y;
    this.pos = createVector(_x, _y);
    this.r = _r;
    this.colors = _colors
    this.colorflow = _colorflow
    this.strokeWeight = _strokeWeight
    this.allcolors;
    this.stepssize =  Math.floor((2 * Math.PI * this.r/2) / innercirclew)
    this.radsteps = Math.round(this.r/innercirclew)/2 
  }
  show() {
    push()
    translate(this.pos.x, this.pos.y);    
    switch ( this.colorflow ) {
      case 0:
        this.allcolors = chroma.scale( [this.colors [0], this.colors [1], this.colors [2], this.colors [3], this.colors [4]] ).colors( this.radsteps)
        break;
      case 1:
        this.allcolors = chroma.scale( [this.colors [0], this.colors [1], this.colors [2], this.colors [3]] ).colors( this.radsteps)
        break;
      case 2:
        this.allcolors = chroma.scale( [this.colors [0], this.colors [1], this.colors [2]] ).colors( this.radsteps)
        break;
      case 3:
        this.allcolors = chroma.scale( [this.colors [0], this.colors [1]] ).colors( this.radsteps)
        break;      
    }
    fill(this.allcolors[0])
    stroke(chroma(this.allcolors[0]).darken(1).hex() )
    strokeWeight(this.strokeWeight)

    circle(0, 0, innercirclew);
    
    for (var i = 0; i < this.radsteps; i++) {
      this.stepssize2 =  Math.floor((2 * Math.PI * (i*innercirclew)) / innercirclew)
      this.rotatestart = rndint(0, 360)
      this.stepz = Math.floor(rndint(this.stepssize2/2, this.stepssize2))
      let colorr = chroma(this.allcolors[i]).hex()
      for (var j = 0; j < this.stepz; j++) {
        let posx = ( (i*innercirclew) * Math.cos((rotationdir * this.rotatestart + 2 * Math.PI * j + innercirclew) / this.stepssize2));
        let posy = ( (i*innercirclew) * Math.sin((rotationdir * this.rotatestart + 2 * Math.PI * j + innercirclew) / this.stepssize2));
        let v10 = createVector(this.x, this.y, 0);
        let distance1 = v1.dist(v10);
        let distance2 = v2.dist(v10);
        let m = (innercirclew  + (distance1/100) + (distance2/100))
        this.stepmin = (m/this.stepz)
        stroke(chroma(this.allcolors[i]).darken(1).hex() )
        fill(colorr)
        circle(posx, posy, m-(j*this.stepmin) );
      }
    }
    pop()
  }
}

function callpreview() {
  clearTimeout(callpreviewtimer);
  console.log("done")
  fxpreview()
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
  save(canvasoutput, fxhash + '_maru.png');
}
function keyReleased() {
    if (key == 's' || key == 'S' || key == 'e' || key == 'E') exportPNG();
}
const offsetarray = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
