p5.disableFriendlyErrors = true;

let seed = Math.floor(999999 * fxrand());

// let palettes;
// function preload() {
//   palettes = loadJSON("./json/palettes.json");
// }

//*******************************************************/
// birds
let total_birds = Math.floor(fxrandBetween(75, 150)); // how many?
let birds = [];  // bird objects
//*******************************************************/
// brush
let brush;
let nStrokes = 15;
//*******************************************************//
// noise
let size = 800;

let noiseCount;
let noiseTotal;

let cx;
let cy;

let ZOOM_RATE = size / 3.5;
let num_points = Math.round(size / 5);
let points = Array(num_points).fill([])
//*******************************************************//
// clouds
var t=0.0, x, y, n,
    step=3;
//*******************************************************//
// colours 
let sunCol1, sunCol2, bgCol1, bgCol2, grndCol, perlCol, birdCol;
let c1, c2;
let colors = [];
let paletteSun, paletteSky, paletteG;
//*******************************************************//
let cnvs, ctx;

let haze;

haze= fxrandBetween(0,10);
if (haze <= 8){
    haze = true;
} else {
    haze = false;
}
// let sunRad = Math.floor(fxrandBetween(50, 175));
let sunRad = Math.floor(fxrandBetween(size/12, size/4));

let lumens = Math.floor(fxrandBetween(4, 8));
let shad = 20;
let shadCol;
let shadBlur = 0;

if (sunRad < 75) {
    sunSize = "Small";
} else if (sunRad < 115) {
    sunSize = "Medium";
} else {
    sunSize = "Large";
}

let ps = Math.floor(fxrandBetween(0, 4));
    switch(ps) {
        case 0:
            paletteSun="Strawberries and lime";
            break;
        case 1:
            paletteSun="Harvest gold";
            break;
        case 2:
            paletteSun="White heat";
        case 3:
            paletteSun="Blood orange";
            break;
        case 4:
            paletteSun="Margarita";
    }
    //*******************************************************//
    // ground colour
    let pg = Math.floor(fxrandBetween(0, 4));
    switch(pg) {
        case 0:
            paletteG="Green grass of home";
            break;
        case 1:
            paletteG="Distant shores";
            break;
        case 2:
            paletteG="Meadow mountain";
            break;
        case 3:
            paletteG="Sandy lane";
            break;
        case 4:
            paletteG="The north island";
    }
    //*******************************************************//
    let pSky = Math.floor(fxrandBetween(0, 5));
    switch(pSky) {
        case 0:
            paletteSky="Azure";
            break;
        case 1:
            paletteSky="Arctic twilight";
            break;
        case 2:
            paletteSky="Purple haze";
            break;
        case 3:
            paletteSky="Desert days";
            break;
        case 4:
            paletteSky="Mountain air";
            break;
        case 5:
            paletteSky="Skyfall";
            break;
            }


let birdsTF = Math.floor(fxrandBetween(0, 1000));
if (birdsTF<=20){
    // let's have some birds... rare
    birdsTF = true;
    } else { 
        birdsTF = false;
    }

let cloudsTF = Math.floor(fxrandBetween(0, 1000));
if (cloudsTF<=20){
    // let's have some birds... rare
    cloudsTF = true;
    } else { 
    cloudsTF = false;
    }

function setup() {
    createCanvas(size, size);
    colorMode(HSB, 360, 100, 100, 1);
    smooth();

    noiseSeed(seed);
    randomSeed(seed);
    noiseCount = 0;
    noiseTotal = fxrandBetween(width /2, width);

    frameRate(100);

    cx = fxrandBetween(50, width - 50);
    cy = fxrandBetween(50, height - height / 2);

    cnvs = document.getElementById("defaultCanvas0");
    ctx = cnvs.getContext("2d");
    ctx.save();

    noStroke();
    smooth();
    //*******************************************************//
    // sun colour
    switch(ps) {
        case 0:
            // paletteSun="Strawberries and lime";
            c1 = color(323, 41, 45,1);
            c2 = color(350, 69, 69,1);
            perlCol=color(c1);
            break;
        case 1:
            // paletteSun="Harvest gold";
            c1 = color(50, 100, 100,1);
            c2 = color(30, 90, 90, 1);
            perlCol=color(c1);
            break;
        case 2:
            // paletteSun="White heat";
            c1 = color(7, 100, 61, 1);
            c2 = color(0, 0, 100, 1);
            perlCol=color(c1);
        case 3:
            // paletteSun="Blood orange";
            // c1 = color(255, 100, 100, 1);
            c1 = color(31, 99, 91,1);
            c2 = color(360, 100, 100, 1);
            perlCol=color(c1);
            break;
        case 4:
            // paletteSun="Margarita";
            c1 = color(35, 100, 100, 1);
            c2 = color(70, 20, 100, 1);
            perlCol=color(c1);
                }
    //*******************************************************//
    // ground colour
    switch(pg) {
        case 0:
            // paletteG="Green grass of home";
            grndCol = color(106, 25, 34,0.5);
            break;
        case 1:
            // paletteG="Distant shores";
            grndCol = color(208, 63, 48, 0.5);
            break;
        case 2:
            // paletteG="Meadow mountain";
            grndCol = color(72, 42, 51, 0.5);
            break;
        case 3:
            // paletteG="Sandy lane";
            grndCol = color(43, 39, 97, 0.5);
            break;
        case 4:
            // paletteG="The north island";
            grndCol = color(35, 30, 58, 0.5);
                }
    //*******************************************************//
    switch(pSky) {
        case 0:
            // paletteSky="Azure";
            bgCol1 = color(233, 90, 31, 1);
            bgCol2 = color(211, 83, 86, 1);
            break;
        case 1:
            // paletteSky="Arctic Twilight";
            bgCol1 = color(143, 100, 62, 1);
            bgCol2 = color(209, 100, 80, 1);
            break;
        case 2:
            // paletteSky="Purple Haze";
            bgCol1 = color(276, 84, 36, 1);
            bgCol2 = color(209, 100, 80, 1);
            break;
        case 3:
            // paletteSky="Desert Days";
            bgCol1 = color(60, 50, 85, 1);
            bgCol2 = color(30, 65, 40, 1);
            break;
        case 4:
            // paletteSky="Mountain Air";
            bgCol1 = color(245, 76, 85,1);
            bgCol2 = color(217, 90, 95,1);
            break;
        case 5:
            // paletteSky="Skyfall";
            bgCol1 = color(300,40,30,1);
            bgCol2 = color(0,70,70,1);
            break;
                }
    //*******************************************************//
    brush = new Brush();
    //*******************************************************//
    // birds
    for(var i = 0; i < total_birds; i++ ) birds.push( new bird_c() );
    //*******************************************************//
    bg = new bg_c();

    ctx.restore();

    points = points.map(rng_point)
    points.map((item) => point(item.x, item.y));
    //*******************************************************//
}

function draw() {
    // bg.draw();
    // background(bg);
    noiseCount++
    if (noiseCount < 50) {
        ground();
    } else if (noiseCount >= 50 && noiseCount <= noiseTotal) {
        noisy();
    } else if (noiseCount <= noiseTotal + 1 && birdsTF == true) {
        stroke(fxrandBetween(100,150));
        for(var i = 0; i < birds.length; i++ ) birds[i].draw();
    } else if (noiseCount <= noiseTotal + 25 && cloudsTF == true) {
        drawClouds();
    } else if (noiseCount <= noiseTotal + 26) {
        fxpreview();
        print("Complete");
        noLoop();
    }
}

function bg_c() {

    setGradient(0, 0, width, height, bgCol1, bgCol2);

    // loop through multiple times to increase shadow intensity
    // unless haze = false
    print("Sun Rad " + sunRad);
    print("lumens " + lumens);
    print("haze " + haze);
    print("birds " + total_birds);

    if (haze == false) {
    lumens = 0;
    // ctx.restore();
    } else if (sunRad <= 100 && lumens <= 6) {
        print("It brightened up a bit");
        lumens = 7;
        shad = 100;
        shadCol=c2;
        shadBlur = (100 * sunRad) / width*8;
        ctx.shadowBlur = shadBlur;
        ctx.shadowColor = shadCol;
    } else {
        shad = 200;
        shadCol=c2;
        shadBlur = (100 * sunRad) / width*10;
        ctx.shadowBlur = shadBlur;
        ctx.shadowColor = shadCol;
    }

    for (loopShad = 0; loopShad <= lumens; loopShad++) {

        let n = 100;
        let inc = TWO_PI / n;

        fill(lerpColor(c1, c2, 1));
        stroke(c2);
        beginShape();
        for (let i = 0; i < TWO_PI; i += inc) {
            let x = cos(i + sin(i * 0.1) * 150) * sunRad;
            let y = sin(i + sin(i * 0.1) * 150) * sunRad;
            vertex(x + cx, y + cy);
        }
        endShape();
    }
}

function setGradient(x, y, w, h, bgCol1, bgCol2) {
    noFill();
    for (i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        c = lerpColor(bgCol1, bgCol2, inter);
        d = lerpColor(bgCol1, bgCol2, 0.1);
        stroke(c);
        line(x, i, x + w, i);
    }
}

function fxrandBetween(a, b) {
    return a + (b - a) * fxrand();
}

function rng_point() {
    let r = (sunRad+(shadBlur)) * sqrt(fxrand());
    let theta = 2 * PI * fxrand();
    let x = cx + r * cos(theta);
    let y = cy + r * sin(theta);
    return {
        'x': x,
        'y': y,
        'dir': fxrandBetween(-1,1),
        'length': 0
    };
}

function noisy() {

    points = points.map((item) => {
        let x = item.x;
        let y = item.y;
        let length = item.length;

        let r = sqrt(pow(item.x - cx, 2) + pow(item.y - cy, 2));
        stroke(perlCol);
        strokeWeight(1);
        let dir = item.dir;

        if (in_circle(x, y) && dir !== 0) {
            n = noise(x / ZOOM_RATE, y / ZOOM_RATE, sqrt(pow(x / ZOOM_RATE, 2) + pow(y / ZOOM_RATE, 2)));
            x += .5 * sin(2 * PI * n) * dir;
            y += .5 * cos(2 * PI * n) * dir;

            let d = dist(x, y, cx, c2);

            if(d <= sunRad/4){
                perlCol.setAlpha(1);
            } else if (d <= sunRad/3){
                perlCol.setAlpha(0.8);
            } else if (d <= sunRad/2){
                perlCol.setAlpha(0.5);
            } else {
                perlCol.setAlpha(0.08);
            }

            length += 2;
            point(x, y);
        }

        if (fxrand() > (sunRad + lumens) / length) {
            dir = 0;
            return rng_point();
        }

        return {
            'x': x,
            'y': y,
            'dir': dir,
            'length': length
        };
    })
}

function in_circle(x, y) {
    // print(shad);
    let rndX = fxrandBetween(x, x + shad/6);
    let rndY = fxrandBetween(y, y + shad/6);
    // return pow(cx - x, 2) + pow(cy - y, 2) < pow(sunRad, 2);
    // return pow(cx - x, 2) + pow(cy - y, 2) < pow(sunRad, lumens);
    if(haze==false){
        return pow(cx - x, 2) + pow(cy - y, 2) < pow(sunRad, 2);
    } else {
        // return pow(cx - rndX, 2) + pow(cy - rndY, 2) < pow(sunRad,2);
        return pow(cx - rndX, 2) + pow(cy - rndY, 2) < pow(sunRad+(shadBlur*lumens), 2);
    } 
}

function ground() {
    ctx.shadowBlur = 100;
    let length = fxrandBetween(100, 400);
    let x0 = fxrandBetween(0 - length, width + length);
    let y0 = fxrandBetween(height - 50, height);
    push();
    translate(x0, y0);
    rotate(0);
    brush.strokeWeight(50);
    brush.color(grndCol);
    brush.draw(length);
    pop();
}

class Brush {
    constructor() {
        this.col = color(0, 0.5);
        this.weight = 30;
    }

    color(col) {
        this.col = col;
    }
    strokeWeight(pixels) {
        this.thickness = pixels;
    }
    draw(length) {
        const curve = this.buildCurve(this.thickness, length);
        const nStrokes = this.evaluateNStrokes(this.thickness);

        for (let i = 0; i < nStrokes; i++) {
            const points = this.randomizeCurve(curve, this.thickness);
            const c = this.randomizeColor(this.col);
            const weight = this.randomizeStrokeWeight(this.thickness);

            noFill();
            stroke(c);
            strokeWeight(weight);

            beginShape();
            for (let point of points) {
                curveVertex(point.x, point.y);
            }
            endShape();
        }
    }

    buildCurve(thickness, length) {
        const nPoints = length;
        const points = [];
        const direction = random([-1, 1]);
        for (let i = 0; i <= nPoints; i++) {
            points.push({
                x: lerp(0, length, float(i) / nPoints),
                y: lerp(0, thickness / 4.0, direction * pow(float(i) / nPoints, 3)),
            });
        }
        return points;
    }

    evaluateNStrokes(thickness) {
        const {
            minWeight,
            maxWeight
        } = this.minMaxStrokeWeight(thickness);
        const averageThickness = 0.5 * (minWeight + maxWeight);
        const nStrokes = (4 * thickness) / averageThickness;
        return nStrokes;
    }

    randomizeCurve(curve, thickness) {
        const w = thickness;
        const length = max(curve.map((point) => point.x));

        // STEP 1: find begin and end of original curve;
        const deltaY = random(-w / 2, w / 2);
        const begin = random(0, 10);
        const end =
            curve.length -
            w * pow(deltaY / w, 2) -
            (w / 3.0) * (0.7 - noise((3 * deltaY) / w)) -
            random(0, 10.0);
        let points = curve.slice(begin, end);

        // STEP 2: randomize position of points
        points = points.map((point) => {
            const newY =
                point.y +
                deltaY +
                (deltaY / 3.0) *
                pow(point.x / float(length), 2) *
                noise(point.x / 100.0, point.y / 100.0);
            return {
                x: point.x,
                y: newY,
            };
        });
        return points;
    }

    randomizeColor(col) {
        const cMode = colorMode();
        colorMode(HSB);
        const newColor = color(
            hue(col) + random(0, 10),
            saturation(col) + random(-10, 10),
            brightness(col) + random(-10, 10),
            alpha(col)
        );
        colorMode(cMode);
        return newColor;
    }

    minMaxStrokeWeight(thickness) {
        const maxWeight = min(thickness / 10.0, 3);
        const minWeight = maxWeight / 10.0;
        return {
            minWeight,
            maxWeight
        };
    }

    randomizeStrokeWeight(thickness) {
        const {
            minWeight,
            maxWeight
        } = this.minMaxStrokeWeight(thickness);
        return random(minWeight, maxWeight);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, [noRedraw]);
}

// Flapping bird class.
function bird_c() {
   
    // Variables for each bird.
    this.pos = createVector(fxrandBetween(0, width), fxrandBetween(height*.33, height*.44));
     
    this.angle = fxrandBetween(TWO_PI * .97, TWO_PI * 1.03 );
    this.vel = fxrandBetween(2, 3.4);
    this.flap = fxrandBetween(0, TWO_PI );
    
    this.draw = function() {
       // First, update position etc.
       this.pos.add( p5.Vector.fromAngle( this.angle ).mult( this.vel ) );
       
       // is bird off screen?
       if( this.pos.x > (width * 0.9) ) {
   
         // Set new properties for the bird.
         this.pos =  createVector( fxrandBetween(0, width*0.2), fxrandBetween(height*.33, height*.66));  
         this.vel = fxrandBetween(2, 3.4);
         this.flap = fxrandBetween( 0, TWO_PI );
         this.angle = fxrandBetween( TWO_PI * .97, TWO_PI * 1.03 );
       }
      
       // increment flapping
       this.flap += this.vel *0.25;

        var p0 = p5.Vector.fromAngle( this.angle );
        p0.normalize();
        p0.mult(-5);
        p0.add( this.pos );
        var p1 = p5.Vector.fromAngle( this.angle );
        p1.normalize();
        p1.mult(5);
        p1.add( this.pos );
        var p2 = p5.Vector.fromAngle(this.angle);
        p2.normalize();
        p2.rotate(PI/2);
        p2.mult( 6 * cos( this.flap ) );
        p2.add( this.pos );
       
        noStroke();
        blendMode(BLEND);
        fill(0,14,fxrandBetween(35, 45),1);
        
        ellipse( this.pos.x, this.pos.y, 4,4);
        triangle( p0.x, p0.y, p1.x, p1.y, p2.x,p2.y);
           
    }
 }

 function drawClouds() {

    noStroke();
    let x = fxrandBetween(0, width);
    let y = fxrandBetween(0, height/3);

    for (let i = 0; i <= 600; i=i+1) {
      // radius is larger towards bottom
      // and smaller towards top to give
      // the illusion of depth
    let rad = int(constrain((fxrandBetween(2,y/10)),1,width));
    // let rad = int(fxrandBetween(sunRad/5, sunrad/2));
      fill(0,0,95, 0.01);
      ellipse(x,y,rad,rad);
      
      // randomize and constrain movement
      x = x+(int(fxrandBetween(-1*(rad/2),rad/2)));
      x = constrain(x,0,width);
      y = y+(int(fxrandBetween(-1*(rad/2),rad/2)));
      y = constrain(y,0,height);
    }
 }

// function mouseClicked() {
//   loop();
// }