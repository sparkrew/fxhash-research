// Paradise Birds generative series for FXHASH
// by Tom Luyten (https://www.tomluyten.com)
// 15th november 2021
// @tom_luyten_studios
// hash to number code by @sableRaph

function getColorScheme(value) {
    $colorSchemeGen = value
    if (value == 0) return "tangerine"
    if (value == 1) return "nostalgia"
    if (value == 2) return "lime"
    if (value == 3) return "ocean"
    if (value == 4) return "seventies"
    if (value == 5) return "water"
    if (value == 6) return "savana"
    if (value == 7) return "pink_storm"
    if (value == 8) return "sunrise"
    if (value == 9) return "candy"
    if (value == 10) return "fire"
    if (value == 11) return "forest"
    if (value == 12) return "mech"
    if (value == 13) return "monotone"
    if (value == 14) return "neon"
    if (value == 15) return "energy"
    if (value == 16) return "modern"
    if (value == 17) return "evil"
    if (value == 18) return "fun"
    if (value == 19) return "monolith"
  else return "tangerine"
}
        
window.$fxhashFeatures = {
    "ColorScheme": getColorScheme(Math.floor(fxrand()*20)),
    "triangleSize": Math.floor(80+(fxrand()*180)),
    "numberOfBirds": Math.floor(2+(fxrand()*10))
}

let maxgrootte = 100;
let mingrootte = 10;
let loc;
let direction = 1;
let prevdirection = 1;
let go = false;
let resetTeller = 0;
let birds = 0; 
let maxBirds = 5;
let shadowDist;
let xarray = [3];
let yarray = [3];
let colorScheme = 0;
let maxtrianglesize;
let randomSeedNumber = 9847362;

let c1, c2, p1, p2, punt1, punt2, punt3;

let colorarray0 = new Array("#FAD089","#FF9C5B","#F5634A","#ED303C","#3B8183");
let colorarray1 = new Array("#A7C5BD", "#E5DDCB", "#EB7B59", "#CF4647", "#524656");
let colorarray2 = new Array("#FFAB07", "#E9D558", "#72AD75", "#0E8D94", "#434D53");
let colorarray3 = new Array("#00585F", "#009393", "#FFFCC4", "#F0EDBB", "#FF3800");
let colorarray4 = new Array("#058789", "#503D2E", "#D54B1A", "#E3A72F", "#F0ECC9");
let colorarray5 = new Array("#FB6900", "#F63700", "#004853", "#007E80", "#00B9BD");
let colorarray6 = new Array("#5E412F", "#FCEBB6", "#78C0A8", "#F07818", "#F0A830");
let colorarray7 = new Array("#12185a", "#f82c60", "#ff736e", "#ff736e", "#ede7d3");
let colorarray8 = new Array("#f07524", "#f4a52c", "#0e3650", "#3b93b3", "#94e3f2");
let colorarray9 = new Array("#ff5378", "#fdc12a", "#9d4ead", "#fbcfe8", "#49d5fc");
let colorarray10 = new Array("#540012", "#bb001c", "#f32725", "#fd7e3d", "#fd7e3d");
let colorarray11 = new Array("#133721", "#245b37", "#4a805e", "#85ab8c", "#ecd872");
let colorarray12 = new Array("#ffffff", "#e0e0e0", "#fb9b29", "#161d35", "#000000");
let colorarray13 = new Array("#efefef", "#e0e0e0", "#b1b0b0", "#2c2c2c", "#f2f3f6");
let colorarray14 = new Array("#072a3d", "#072a3d", "#072a3d", "#072a3d", "#cae046");
let colorarray15 = new Array("#1cc5bf", "#1cc5bf", "#692de9", "#fcd52b", "#fcd52b");
let colorarray16 = new Array("#1e2e4c", "#3f6f91", "#9dd5d6", "#eefaec", "#e43143");
let colorarray17 = new Array("#2d1a37", "#4a203d", "#7e2945", "#af1d4d", "#cc1551");
let colorarray18 = new Array("#23226b", "#ff2649", "#fbe635", "#33dba9", "#23226b");
let colorarray19 = new Array("#21211f", "#383632", "#c5beb1", "#fffcf0", "#e9542e");
let colorarrays = new Array(colorarray0, colorarray1, colorarray2, colorarray3, colorarray4, colorarray5, colorarray6, colorarray7, colorarray8, colorarray9, colorarray10, colorarray11, colorarray12, colorarray13, colorarray14, colorarray15, colorarray16, colorarray17, colorarray18, colorarray19);


function setup() {
    var canvas = createCanvas(windowWidth, windowHeight); // Create SVG Canvas
    randomSeedNumber = getHash(fxhash);  
    colorScheme = parseInt($colorSchemeGen);
    randomSeed(randomSeedNumber*frameCount);
    maxtrianglesize = $fxhashFeatures.triangleSize;
    mingrootte = 20;
    maxBirds = $fxhashFeatures.numberOfBirds;

    c1 = createVector(0,0);
    c2 = createVector(0,0);
    
    loc = createVector(int(random(100,700)), int(random(100,700)));
    punt1 = createVector(0,0);
    punt2 = createVector(0,0);
    punt3 = createVector(0,0);
    p1 = createVector(int(random(loc.x-maxgrootte/2, loc.x+maxgrootte/2)), int(random(loc.y-maxgrootte/2, loc.y+maxgrootte/2)));
    p2 = createVector(int(random(loc.x-maxgrootte/2, loc.x+maxgrootte/2)), int(random(loc.y-maxgrootte/2, loc.y+maxgrootte/2)));
    
    background(255);
    let fillColor = color( colorarrays[colorScheme][int(random(0, 5))]);
    fillColor.setAlpha(150);
    fill(fillColor,0);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, width*.6, height*.6);
  
    xarray[0] = loc.x;
    xarray[1] = p1.x;
    xarray[2] = p2.x;

    yarray[0] = loc.y;
    yarray[1] = p1.y;
    yarray[2] = p2.y;

    xarray = sort(xarray);
    yarray = sort(yarray);

    c1.x = xarray[0];
    c1.y = yarray[0];

    c2.x = xarray[2];
    c2.y = yarray[2]; 
}

function draw() {
    prevdirection = direction;
    randomSeed(randomSeedNumber*frameCount+random(-frameCount, frameCount));
    direction = int(random(1, 5));
  
    if (prevdirection == direction) { 
        direction = int(random(1, 5));
    }

    if (direction == 1) {
        if (p1.x == xarray[2]) { 
          punt1 = p1;
        }
        if (p2.x == xarray[2]) { 
          punt1 = p2;
        }
        if (loc.x == xarray[2]) { 
          punt1 = loc;
        }

        if (p1.x == xarray[1]) { 
          punt2 = p1;
        }
        if (p2.x == xarray[1]) { 
          punt2 = p2;
        }
        if (loc.x == xarray[1]) { 
          punt2 = loc;
        }

        if (p1.x == xarray[0]) { 
          punt3 = p1;
        }
        if (p2.x == xarray[0]) { 
          punt3 = p2;
        }
        if (loc.x == xarray[0]) { 
          punt3 = loc;
        }
      
        loc = createVector(c2.x + random(mingrootte, maxgrootte), random(punt1.y, punt1.y + (random(mingrootte, maxgrootte))));

        drawTriangle(punt1.x, punt1.y, punt2.x, punt2.y, loc.x, loc.y);

        p1 = punt1;
        p2 = punt2;

        xarray[0] = loc.x;
        xarray[1] = p1.x;
        xarray[2] = p2.x;

        yarray[0] = loc.y;
        yarray[1] = p1.y;
        yarray[2] = p2.y;

        xarray = sort(xarray);
        yarray = sort(yarray);

        c1.x = xarray[0];
        c1.y = yarray[0];

        c2.x = xarray[2];
        c2.y = yarray[2];
  }

  if (direction == 2) {
        if (p1.y == yarray[0]) { 
          punt1 = p1;
        }
        if (p2.y == yarray[0]) { 
          punt1 = p2;
        }
        if (loc.y == yarray[0]) { 
          punt1 = loc;
        }

        if (p1.y == yarray[1]) { 
          punt2 = p1;
        }
        if (p2.y == yarray[1]) { 
          punt2 = p2;
        }
        if (loc.y == yarray[1]) { 
          punt2 = loc;
        }

        if (p1.y == yarray[2]) { 
          punt3 = p1;
        }
        if (p2.y == yarray[2]) { 
          punt3 = p2;
        }
        if (loc.y == yarray[2]) { 
          punt3 = loc;
        }

        loc = createVector(random(punt1.x, punt1.x + random(mingrootte, maxgrootte)), punt1.y - random(mingrootte, maxgrootte));

        drawTriangle(punt1.x, punt1.y, punt2.x, punt2.y, loc.x, loc.y);

        p1 = punt1;
        p2 = punt2;

        xarray[0] = loc.x;
        xarray[1] = p1.x;
        xarray[2] = p2.x;

        yarray[0] = loc.y;
        yarray[1] = p1.y;
        yarray[2] = p2.y;

        xarray = sort(xarray);
        yarray = sort(yarray);

        c1.x = xarray[0];
        c1.y = yarray[0];

        c2.x = xarray[2];
        c2.y = yarray[2];
  }

  if (direction == 3) {
        if (p1.y == yarray[2]) { 
          punt1 = p1;
        }
        if (p2.y == yarray[2]) { 
          punt1 = p2;
        }
        if (loc.y == yarray[2]) { 
          punt1 = loc;
        }

        if (p1.y == yarray[1]) { 
          punt2 = p1;
        }
        if (p2.y == yarray[1]) { 
          punt2 = p2;
        }
        if (loc.y == yarray[1]) { 
          punt2 = loc;
        }

        if (p1.y == yarray[0]) { 
          punt3 = p1;
        }
        if (p2.y == yarray[0]) { 
          punt3 = p2;
        }
        if (loc.y == yarray[0]) { 
          punt3 = loc;
        }

        loc = createVector(random(punt1.x, punt1.x+random(mingrootte, maxgrootte)), punt1.y + random(mingrootte, maxgrootte));

        drawTriangle(punt1.x, punt1.y, punt2.x, punt2.y, loc.x, loc.y);

        p1 = punt1;
        p2 = punt2;

        xarray[0] = loc.x;
        xarray[1] = p1.x;
        xarray[2] = p2.x;

        yarray[0] = loc.y;
        yarray[1] = p1.y;
        yarray[2] = p2.y;

        xarray = sort(xarray);
        yarray = sort(yarray);

        c1.x = xarray[0];
        c1.y = yarray[0];

        c2.x = xarray[2];
        c2.y = yarray[2];
  }

  if (direction == 4) {
        if (p1.x == xarray[0]) { 
          punt1 = p1;
        }
        if (p2.x == xarray[0]) { 
          punt1 = p2;
        }
        if (loc.x == xarray[0]) { 
          punt1 = loc;
        }

        if (p1.x == xarray[1]) { 
          punt2 = p1;
        }
        if (p2.x == xarray[1]) { 
          punt2 = p2;
        }
        if (loc.x == xarray[1]) { 
          punt2 = loc;
        }

        if (p1.x == xarray[2]) { 
          punt3 = p1;
        }
        if (p2.x == xarray[2]) { 
          punt3 = p2;
        }
        if (loc.x == xarray[2]) { 
          punt3 = loc;
        }

        loc = createVector(c1.x - random(mingrootte*1.2, maxgrootte*1.2), random(punt1.y, punt1.y + random(mingrootte, maxgrootte)));

        drawTriangle(punt1.x, punt1.y, punt2.x, punt2.y, loc.x, loc.y);

        p1 = punt1;
        p2 = punt2;

        xarray[0] = loc.x;
        xarray[1] = p1.x;
        xarray[2] = p2.x;

        yarray[0] = loc.y;
        yarray[1] = p1.y;
        yarray[2] = p2.y;

        xarray = sort(xarray);
        yarray = sort(yarray); 

        c1.x = xarray[0];
        c1.y = yarray[0];

        c2.x = xarray[2];
        c2.y = yarray[2];
  }

  if (frameCount%200 == 199 && birds < maxBirds) {
    birds = birds+1;
    releaseBird();

    if (int(random(2))==1 && birds != maxBirds) {
      rectMode(CORNER); 
      fill(255);
      rect(0, 0, width, height*.2);
      rect(0, height-(height*.2), width, height*.2);
      rect(0, 0, width*.2, height);
      rect(width-(width*.2), 0, width*.2, height);
    }
}
}

function releaseBird() {
    randomSeed(randomSeedNumber*frameCount);
    shadowDist = 0;

      loc = createVector(int(random(100, 700)), int(random(100, 700)));
      p1 = createVector(int(random(loc.x-maxgrootte/2, loc.x+maxgrootte/2)), int(random(loc.y-maxgrootte/2, loc.y+maxgrootte/2)));
      p2 = createVector(int(random(loc.x-maxgrootte/2, loc.x+maxgrootte/2)), int(random(loc.y-maxgrootte/2, loc.y+maxgrootte/2)));
      punt1 = loc;
      punt2 = p1;
      punt3 = p2;

      xarray[0] = loc.x;
      xarray[1] = p1.x;
      xarray[2] = p2.x;

      yarray[0] = loc.y;
      yarray[1] = p1.y;
      yarray[2] = p2.y;

      xarray = sort(xarray);
      yarray = sort(yarray); 

      c1.x = xarray[0];
      c1.y = yarray[0];

      c2.x = xarray[2];
      c2.y = yarray[2];
}


function drawTriangle( x1,  y1,  x2,  y2,  x3,  y3) {
    randomSeed(randomSeedNumber*frameCount);
  let centerX = (x1 + x2 + x3)/3;
  let centerY = (y1 + y2 + y3)/3;

  shadowDist = shadowDist+ (.5);

  maxgrootte = int(random(maxtrianglesize)-20, random(random(maxtrianglesize)+20));
  mingrootte = int(random(20, random(20, 30)));

  fill(0, 10);
  beginShape(TRIANGLES);
  vertex(x1, y1+shadowDist);
  vertex(x2, y2+shadowDist);
  vertex(x3, y3+shadowDist);
  endShape();

  fill(colorarrays[colorScheme][int(random(0, 5))]);

  beginShape(TRIANGLES);
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  endShape();

  fill(0, 50);
  triangle(x1, y1, centerX, centerY, x2, y2);

  fill(255, 50);
  triangle(x2, y2, centerX, centerY, x3, y3);
}

function getHash(string) {
  if (string) {
    let nameHash = string.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
    return Math.abs(nameHash);
  } else {
    return null;
  }
}

