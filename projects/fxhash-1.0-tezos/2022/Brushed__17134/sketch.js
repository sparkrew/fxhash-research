let WIDTH;
let HEIGHT;

let w = 900, h = 900;
let s = 10;
let ss = s*10;
let g = 100;
let count1 = 30;
let count2 = 20;
let offset = 2;
let freq = 0.01;
let amp = s*2;

let pal = ['#857567','#ad9f94', '#d2cdca','#f0eeeb','#554a43','#453d36','#d2b8a2','#928071','#6d645d','#6c5f53'];

function setup() {
  // vars
  randomSeed(fxrand() * 10e12 || 123);
function rand(max, min = 0) {
  return Math.floor(random(max - min)) + min;
}
    WIDTH = windowWidth;
  HEIGHT = windowHeight;
  createCanvas(WIDTH, HEIGHT);
  noLoop();
  smooth();
  colorMode(HSB, 360, 100, 100, 100);
  strokeCap(SQUARE);
}

function getDir() {
  var dir = random();
  
  if(dir < 0.25) {
    return 0; 
  } else if(dir < 0.5) {
    return PI/4;
  } else if(dir < 0.75) {
    return PI/2;
  } else {
    return PI*3/4;
  }
}

function draw() {
  rectMode(CENTER);
  shuffle(pal, false);

  background(random(50),random(50),random(50));
  

  var nx, ny;

  push();
  
  strokeWeight(2);
  
  for(let i = 0; i < count1; i++) {
    
    push();
    
    var cx = random(ss, w-ss);
    var cy = random(ss, h-ss);
    translate(cx, cy);
    
    var dir = getDir();
    if(random() < 0.5) {
      dir *= -1;
    }
    rotate(dir);
    
    var len = s*int(random(20,50));
    
    stroke(getColor());
    
    var bb = (random() < 0.2);
    
    for (let k = 0; k < count2; k++) {
      var hh = k * offset;
      
      
      var pp;

      if(bb) {
        var theta = TWO_PI/360;
        for (let j = 0; j < 270; j++) {
          pp = map(k, 0, count2, 0.2, 0.9);
          pp *= map(j, 0, len, 0.9, 0.1);

          var radius = hh*1.1;
          var kk = hh * 0.1;
          var phi = theta * (90 + j);
          var rr = radius + random(-2, 2);
          var dx = rr * cos(phi);
          var dy = rr * sin(phi);

          if(random() < pp) {
            point(dx, dy-kk);
          }
        }        
      }

      
      for (let j = 0; j < len; j++) {
        pp = map(k, 0, count2, 0.6, 1.0);
        pp *= map(j, 0, len, 1.0, 0.2);
        
        var val = hh;
        
        if(!bb) {
          val -= amp*noise(j * freq);
        }
        
        if(random() < pp) {
          point(j, val);        
        }
      }
    
    }
    pop();
  }
  
  pop();
  stroke("rgba(0,0,0,.2)")
  strokeWeight(0.5)
  for(var ni=0; ni<width;ni++){
    for(var nj=0; nj<height;nj++){
      var hasNoise = random([true, false,false,false, false,false,false])
      if(hasNoise){
        point(ni,nj)
      }
    }
  }
}

function getColor() {
  var l = pal.length;
  var cc = random();
  shuffle(pal, false);
  
  if(cc < 1/l) {
    return pal[0];
  } else if (cc < 2/l + .05) {
    return pal[1];
  } else if (cc < 3/l - .03) {
    return pal[2];
  } else if (cc < 4/l + .05) {
    return pal[3];
  } else if (cc < 5/l - .02) {
    return pal[4];
  } else if (cc < 6/l + .06) {
    return pal[5];
  } else if (cc < 7/l + .02) {
    return pal[6];
  } else if (cc < 8/l - .01) {
    return pal[7];
  } else if (cc < 9/l + .02) {
    return pal[8];
  } else {
    return pal[9];
  }
}