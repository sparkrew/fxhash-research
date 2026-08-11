
var points = [];

var pos;
var npos;

var pg;

var maxPoints;
var maxDist;
var maxSize;
var actRandomSeed = fxrand() * 999999;
var actnoiseSeed = fxrand() * 999999;
var font;
var showFont = true;

var selector;


window.$fxhashFeatures = {


}
if (fxrand() > 0.991) {
  window.$fxhashFeatures.ultraRare = true;
}
function setup() {
randomSeed(actRandomSeed);
 
 

    createCanvas(windowWidth, windowHeight);

    pg = createGraphics(width, height);

    reset();

    if (fxrand() < 0.1) {
     
        selector = 0;
    } else {
     
        selector = 1;
    }
}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight);
    reset();
}

function draw() {
  randomSeed(actRandomSeed);
    background(255);

    if (selector === 0) {
      
        randomGenerator();
    } else {
     
        noiseGenerator();
    }

    image(pg, 0, 0, width, height);

    push();
    scale(-1, 1);
    translate(-width, 0);
    image(pg, 0, 0, width, height);
    pop();

    push();
    scale(-1, -1);
    translate(-width, -height);
    image(pg, 0, 0, width, height);
    pop();

    push();
    scale(1, -1);
    translate(0, -height);
    image(pg, 0, 0, width, height);
    pop();
}

function reset() {
  
    background(255);

    pg.clear();

    points = [];

    pos = createVector(width / 2, height / 2);
    npos = createVector(random(10), random(10));

    maxPoints = floor(random(128, 1024));
    maxDist = floor(random(50, 250));
    maxSize = floor(random(width / 40, width / 80));
}

function randomGenerator() {
  
    if (points.length < maxPoints) {
   
        for (var i = 0; i < points.length; i++) {
          
            if (dist(pos.x, pos.y, points[i].x, points[i].y) < maxDist) {
              
                pg.stroke(0, 25);
                pg.line(pos.x, pos.y, points[i].x, points[i].y);
            }
        }

        points.push(createVector(pos.x, pos.y));

        pos.x += random(-maxSize, maxSize);
        pos.y += random(-maxSize, maxSize);

        if (pos.x < width * 0.1 || pos.x > width * 0.9) {
         
            pos.x = width / 2;
        }

        if (pos.y < height * 0.1 || pos.y > height * 0.9) {
         
            pos.y = height / 2;
        }
    }
}

function noiseGenerator() {
 noiseSeed(actnoiseSeed)
    if (points.length < maxPoints) {
    

        for (var i = 0; i < points.length; i++) {
          noiseSeed(actnoiseSeed)
            if (dist(pos.x, pos.y, points[i].x, points[i].y) < maxDist) {
            
                pg.stroke(0, 25);
                pg.line(pos.x, pos.y, points[i].x, points[i].y);
            }
        }

        append(points, createVector(pos.x, pos.y));

        pos.x += map(noise(npos.x), 0, 1, -maxSize, maxSize);
        pos.y += map(noise(npos.y), 0, 1, -maxSize, maxSize);

        if (pos.x < width * 0.1 || pos.x > width * 0.9) {
       
            pos.x = width / 2;
        }

        if (pos.y < height * 0.1 || pos.y > height * 0.9) {
        
            pos.y = height / 2;
        }

        npos.x += 0.1;
        npos.y += 0.1;
    }
}
