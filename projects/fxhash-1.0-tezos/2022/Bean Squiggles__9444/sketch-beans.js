// Beans by Andy Peacehol
// Environment variables

let step = 1 + Math.floor(fxrand() * 20) 
let margins = 145 // + (fxrand() * 80) //80
var pal1 = [], pal2 = [], pal3 = [], pal4 = [], pal5 = [], pal6 = [], pal7 = [], pal8 = [], pal9 = [], pal10 = [];
const palettes = [pal1, pal2, pal3, pal4, pal5, pal6, pal7, pal8, pal9];
let bgColor;
let howMany;
let countX;


function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  
  pal1.push(color('#003049'), color('#d62828'), color('#f77f00'), color('#fcbf49'), color('#eae2b7'));
  pal2.push(color('#2C2E43'), color('#595260'), color('#B2B1B9'), color('#FFD523'));
  pal3.push(color('#F4F1DE'), color('#E07A5F'), color('#3D405B'), color('#81B29A'), color('#F2CC8F'));
  pal4.push(color('#083346'), color('#046C95'), color('#0196C1'), color('#48B5D6'), color('#B3E0EE'));
  pal5.push(color('#E63946'), color('#F1FAEE'), color('#A8DADC'), color('#457B9D'), color('#1D3557'));
  pal6.push(color(134,255,93), color(52,227,97), color(20,210,133), color(14,187,155), color(12,158,169));
  pal7.push(color(62,61,65), color(113,111,117), color(159,156,165), color(202,199,209), color(225,221,231));
  pal8.push(color(5,5,5), color(23,25,23), color(30,30,30), color(56,56,56), color(106,103,103));
  pal9.push(color(238,230,217), color(128,120,113));
  pal10.push(color('#90E0EF'), color('#CAF0F8'), color('#F0F0F0'), color('#2C3333'), color('#8A39E1'), color('#F7ECDE'), color('#D3ECA7'), color('#313552'), color('#FFE162'), color('#000000'), color('#4FBDBA'), color('#D3DEDC'));

  chosenPalette = palettes[int(fxrand() * palettes.length)];


  bgColor = chosenPalette[int(fxrand() * chosenPalette.length)]


  background(pal10[int(fxrand() * pal10.length)]);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  noLoop();
  howMany = int(fxrand() * 4);

  countX  = 1 + howMany;
  let countY  = 1 + howMany;
  let baseBri = 70;
  let baseDeg = fxrand() * 360 
  let baseHue = fxrand() * 360 

  blendMode(BLEND);
  casing();
  
  for (let x = 0; x < countX; ++x) {

    baseBri += 80 / (countX - 1);
    baseHue += 60; // Hexad color

    // proceed x
    translate(windowWidth / (countX + 1), 0);

    for (let y = 0; y < countY; ++y) {
      // proceed y
      translate(0, windowHeight / (countY + 1));
      drawBean(
               baseHue % 360,
               50, // fix saturation may be better
               max(10, min(90, baseBri - (y * 80 / (countY - 1)))),   //10 - 90
               (baseDeg + y * 360 / countY) % 360
               );
    }

    // back y
    translate(0, -windowHeight * countY / (countY + 1));
  
  }

        
}   

function casing() {
  stroke(0, 0, 95, 100);
  fill(0, 0, 100, 0);
  strokeWeight(60);
  rect(0, 0, windowWidth, windowHeight);

  noStroke();
}

function drawBean(applyHue, applySat, darkBri, applyDeg) {

  let applyBri   = 0;
  let beanRadius = 48/3;
    let beanWidth  = 90/3;

  if(countX == 1) {
    beanRadius = 192/3;
    beanWidth  = 500/3;

  } else if (countX == 2) {
    beanRadius = 88/3;
    beanWidth  = 130/3;

  } else if (countX == 3) {
    beanRadius = 78/3;
    beanWidth  = 120/3;
    
  } else if (countX == 4) {
    beanRadius = 68/3;
    beanWidth  = 110/3;

  } else if (countX == 5) {
    beanRadius = 58/3;
    beanWidth  = 100/3;

  } else {
    beanRadius = 48/3;
    beanWidth  = 90/3;
    
  }
  
  let underBri   = 90;
  let topBri     = 10;
  let baseNoise  = fxrand() * 100;

  for (let blendSelect = 0; blendSelect < 3; ++blendSelect) {

    if (blendSelect % 3 == 0) {
      blendMode(BLEND);
      applyBri = underBri;
    } else if (blendSelect % 3 == 1) {
        blendMode(DARKEST);
        applyBri = darkBri;
    } else {
      blendMode(SCREEN);
      applyBri = topBri;
  }

  let noiseStep = baseNoise;
  let step = 0;
  for (let i = 0; i < 180; ++i) {
    step += 0.4 + noise(noiseStep);

    fill((applyHue + i / 2.0) % 360, applySat, applyBri, 10);
    push();
    translate(
      sin(radians(applyDeg + applyHue + step)) * beanRadius,
      cos(radians(applyDeg + applyHue + step)) * beanRadius
      );
    ellipse(0, 0, beanWidth, beanWidth);
    pop();

      noiseStep += 0.05;

  }

}

}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
  
  





// Helpers

function randomSign() {
  if (fxrand() < 0.5) {
    return -1
  } else {}
    return 1
}

function randomShape() {
    let shapeSeed = random(0, 4)

    if (likelyEvent()) { //shapeSeed < 1
        let boxColor = chosenPalette[int(random(0, chosenPalette.length))]
        fill(chosenPalette[int(random(0, chosenPalette.length))])
        for (var i = 0; i < 50; i++) {
          stroke(255, 0, 0)
          point(x * random(), y * random())
        }
        return rect(x, y, step)
      } else if (false) { //shapeSeed < 2
        fill(chosenPalette[int(random(0, chosenPalette.length))])
        return circle(x + step / 2, y + step/2, step)
      } else if (unlikelyEvent()) {  //shapeSeed < 3
        fill(chosenPalette[int(random(0, chosenPalette.length))])

        
        if(coinflip()){
            // return arc(x, y, step * 2, step * 2, 0 , HALF_PI)
        } else {
            // return arc(x, y + step, step * 2, step * 2, -HALF_PI, 0)
        }
      } else {
        fill(chosenPalette[int(random(0, chosenPalette.length))])

        
        if (coinflip()) {
            // return triangle(x, y, x + step, y, x+ step, y + step)
        } else {
            // return triangle(x, y, x + step, y - step, x+ step, y - step)
        }
      }
}

function randomLargeShape() {
    let shapeSeed = random(0, 4)

    if (shapeSeed < 1) {
        fill(chosenPalette[int(random(0, chosenPalette.length))])
        // fill(255, 0, 0)
        return rect(x, y, step * 2)
      } else if (shapeSeed < 2) {
        fill(chosenPalette[int(random(0, chosenPalette.length))])
        // fill(255, 0, 0)
        return circle(x + step, y + step, step * 2)
      } else if (shapeSeed < 3) {
        fill(chosenPalette[int(random(0, chosenPalette.length))])
        // fill(255, 0, 0)

        
        if(coinflip()){
            return arc(x, y, step * 4, step * 4, 0 , HALF_PI)
        } else {
            return arc(x, y + 2 * step, step * 4, step * 4, -HALF_PI, 0)
        }
      } else {
        fill(chosenPalette[int(random(0, chosenPalette.length))])
        // fill(255, 0, 0)

        
        if (coinflip()) {
            return triangle(x, y, x + 2 * step, y, x+ 2 * step, y + 2 * step)
        } else {
            return triangle(x, y, x + 2 * step, y - 2 * step, x + 2 * step, y - 2 * step)
        }
      }
}



function keyPressed() {
  console.log("Key pressed called.");
  if (keyCode === RETURN) {
    save(cnv, "shapes.jpg");
  }
}

function likelyEvent() {
  let likely = Math.random();
  if (likely < 0.75) {
    return true;
  } else {
    return false;
  }
}

function unlikelyEvent() {
  let unlikely = Math.random();
  if (unlikely > 0.75) {
    return true;
  } else {
    return false;
  }
}

function veryUnlikelyEvent() {
    let unlikely = Math.random();
    if (unlikely > 0.98) {
      return true;
    } else {
      return false;
    }
  }

function coinflip() {
  let coinflip = Math.random();
  if (coinflip > 0.5) {
    return true;
  } else {
    return false;
  }
}


