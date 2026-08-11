const rSize = 48; 
let regions; // holds the regions... you know... the copy-paste areas

// pretty colors
let c1;
let c2;

// seeds for p5 random() and noise() functions
let rSeed;
let nSeed;
let detail;
let falloff;

// graphics contexts
let gradient;
let source;
let buffer;

let z; // for time varying perlin noise

// for determining pixel coordinates to copy from and paste to.
let srcX;
let srcy;
let dstX;
let dstY;
let src;
let dst;

let canvas; // where to draw all the things!
let saturation = "";
let brightness = "";
let hueRelation = "";

function setup() {

  pixelDensity(1);
  frameRate(24);
  noStroke();

  canvas = createCanvas(480, 480).id('canvas').parent('canvasContainer');
  
  // seed the seeds with fxrand()
  rSeed = int(Math.pow(2,16)*fxrand());
  nSeed = int(Math.pow(2,16)*fxrand());
  randomSeed(rSeed);
  noiseSeed(nSeed);

  falloff = map(fxrand(),0.0,1.0,0.5,0.75);
  detail = 8+int(4*fxrand());
  noiseDetail(detail, falloff);

  computeColors();
  initGraphics();

  // FX Features
  window.$fxhashFeatures = {
    "rSeed" : rSeed,
    "nSeed" : nSeed,
    "detail" : detail,
    "falloff" : falloff,
    "saturation": saturation,
    "brightness": brightness,
    "hueRelation": hueRelation,

  };
}

function draw() {
  image(source,0,0);
  driftRegions();
}

function computeColors(){
  colorMode(HSB, 100);

  let h1 = Math.round(100*sin(PI*fxrand()));
  let h2;
  let s1;
  let s2;
  let b1;
  let b2;
  let hR = fxrand();
  let range = 6.25;
  let brightRand = fxrand();
  let satRand = fxrand();
  
  if(brightRand > .90){
    brightness="light";
    b1 = Math.round(75+25*sin(PI*fxrand()));
  } else if (brightRand < 0.10){
    brightness="dark";
    b1 = Math.round(12.5+12.5*sin(PI*fxrand()));    
  } else {
    b1 = Math.round(25+50*sin(PI*fxrand()));
    brightness="medium";
  }
  
  if(satRand > .90){
    saturation="high";
    s1 = Math.round(75+25*sin(PI*fxrand()));
  } else if (satRand < 0.10){
    saturation="low";
    s1 = Math.round(12.5+12.5*sin(PI*fxrand()));    
  } else {
    saturation="medium";
    s1 = Math.round(25+50*sin(PI*fxrand()));
  }

  if (hR >= 0.95){
    hueRelation="complementary";
    h2 = Math.round(h1 + 50 + random(-range,range) + 100) % 100;
  } else if (hR < 0.95 && hR >= .75) {
    hueRelation="far analogous";
    h2 = Math.round(h1 + 75 + random(-range,range) + 100) % 100;
  } else if (hR < 0.75 && hR >= .50) {
    hueRelation="near analogous";
    h2 = Math.round(h1 + 25 + random(-range,range) + 100) % 100;
  } else{
    hueRelation="monochrome";
    h2 = Math.round(h1 + random(-range,range) + 100) % 100;
  }

  if(b1 < 25){
    b2 = b1 + 50;
  }else if (b1 > 75){
    b2 = b1 - 50;
  } else {
    if(b1 > 50){
      b2 = b1 - 50;
    } else {
      b2 = b1 + 50;
    }
  }

  if(s1 < 25){
    s2 = s1 + 50;
  }else if (s1 > 75){
    s2 = s1 - 50;
  } else {
    if(s1 > 50){
      s2 = s1 - 50;
    } else {
      s2 = s1 + 50;
    }
  }

  c1 = color(h1,s1,b1,255);
  c2 = color(h2,s2,b2,255);
}

function initGraphics(){
  gradient = generateGradient(width/3,width/3,c1,c2);
  source = generateSource();
  buffer = createGraphics(source.width, source.height);
  buffer.image(source,0,0);
  generateRegions();
}

function driftRegions(){ //copy-paste feedback stuff
  source.loadPixels();
  buffer.loadPixels();
  z = frameCount/250.0;
  for(const region of regions){
    
    //get new copy-paste vector from noise
    region.cp.setMag(4.3*noise((region.x+region.w/2)/width,(region.y+region.h/2)/height,z+0.5));
    region.cp.setHeading(4*PI*noise((region.x+region.w/2)/width,(region.y+region.h/2)/height,z));
    
    //copy from source (src), paste to buffer (dst)
    for(let y = 0; y < region.h; y++){
      for(let x = 0; x < region.w; x++){
        srcY = (y+region.y+Math.round(region.cp.y)+buffer.height) % buffer.height;
        srcX = (x+region.x+Math.round(region.cp.x)+buffer.width) % buffer.width;
        dstY = (y+region.y+buffer.height) % buffer.height;
        dstX = (x+region.x+buffer.width) % buffer.width;
        src = 4*(srcY*buffer.width+srcX);
        dst = 4*(dstY*buffer.width+dstX);
        for(let ch = 0; ch < 4; ch++){
          buffer.pixels[dst+ch] = source.pixels[src+ch];
        }
      }
    }
  }
  buffer.updatePixels();
  source.image(buffer,0,0); // draw the updated buffer into the source
  source.image(gradient,(width-gradient.width)/2,(height-gradient.height)/2); // superimpose the gradient
}

function generateSource(){
  _source = createGraphics(width,height);
  _source.background(c1);
  _source.fill(c2);
  _source.image(gradient,(width-gradient.width)/2,(height-gradient.height)/2);
  return _source;
}

function generateGradient(_w, _h,_c1, _c2){
  colorMode(RGB);
  let _gradient = createGraphics(_w, _h);
  let c;
  let coord;
  _gradient.loadPixels();
  for(let y = 0; y < _h; y++){
    c = lerpColor(_c2,_c1,y/_h);
    for(let x = 0; x < _w; x++){
      coord = 4*(y*_w+x);
      _gradient.pixels[coord]=red(c);
      _gradient.pixels[coord+1]=green(c);
      _gradient.pixels[coord+2]=blue(c);
      _gradient.pixels[coord+3]=255;
    }
  }
  _gradient.updatePixels();
  return _gradient;
}

function generateRegions(){
  regions = [];
  for(let y = 0; y < height; y+=rSize){
    for(let x = 0; x < width; x+=rSize){
      regions.push(new Region(rSize,rSize,x,y));
    }
  }
}

class Region {
  constructor(w, h, x, y){
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.cp = createVector(0.1,0.1);
  }
}

