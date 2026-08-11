// Environment variables
let width, height
let step = 200 //Math.random() * (200 - 2) + 2;
let margins = 80 // Math.random() * (150 - 10) + 10; //240
var pal1 = [], pal2 = [], pal3 = [], pal4 = [], pal5 = [], pal6 = [], pal7 = [], pal8 = [];
const palettes = [pal1, pal2, pal3, pal4, pal5, pal6, pal7, pal8];


function setup() {
  width = 2000;
  height = 3000;
  cnv = createCanvas(width, height);
  
  pal1.push(color('#003049'), color('#d62828'), color('#f77f00'), color('#fcbf49'), color('#eae2b7'));
  pal2.push(color('#2C2E43'), color('#595260'), color('#B2B1B9'), color('#FFD523'));
  pal3.push(color('#F4F1DE'), color('#E07A5F'), color('#3D405B'), color('#81B29A'), color('#F2CC8F'));
  pal4.push(color('#083346'), color('#046C95'), color('#0196C1'), color('#48B5D6'), color('#B3E0EE'));
  pal5.push(color('#E63946'), color('#F1FAEE'), color('#A8DADC'), color('#457B9D'), color('#1D3557'));
  pal6.push(color(134,255,93), color(52,227,97), color(20,210,133), color(14,187,155), color(12,158,169));
  pal7.push(color(62,61,65), color(113,111,117), color(159,156,165), color(202,199,209), color(225,221,231));
  pal8.push(color(5,5,5), color(23,25,23), color(30,30,30), color(56,56,56), color(106,103,103));
  chosenPalette = palettes[int(random(0, palettes.length))];

  background(chosenPalette[int(random(0, chosenPalette.length))])
}

function draw() {
  noLoop()
  stroke(color("#fafafa"))

    // Small shapes
    for (x = margins; x < cnv.width - margins - 1; x += step) {
        for (y = margins; y < cnv.height - margins - 1; y += step) {
            noStroke()
            if (y > cnv.height - (margins + step) || x > cnv.width - (margins + step)) {
                continue
            }

            rectMode(CORNER)
            // randomShape()
            fill(chosenPalette[int(random(0, chosenPalette.length))])
            let squareColor = chosenPalette[int(random(0, chosenPalette.length))]
            let squareCenterX = x + step / 2
            let squareCenterY = y + step / 2

            // DEBUG
            // stroke(255, 0, 0)
            // rect(x, y, step)

            for (var i = 0; i < 40; i+= 0.01) {
              stroke(squareColor)
              strokeWeight(5)
              fill(squareColor)
              let randomX = squareCenterX + i * random(-1, 1)
              let randomY = squareCenterY + i * random(-1, 1)
              
              if ((randomX < x + step && randomY < y + step) && (randomX > x && randomY > y)) {
                // point(randomX, randomY)
                rect(x, y, step)
              }


            }
            // rect(x, y, step)

            
        }

    }
    // Large shapes
    for (x = margins; x < cnv.width - margins * 2; x += step) {
        for (y = margins; y < cnv.height - margins * 2; y += step) {
            if(veryUnlikelyEvent() && y > 2 * step) {
            //   rect(x, y, step * 2)

              fill(chosenPalette[int(random(0, chosenPalette.length))])
              if (x >= cnv.width - ((step * 2) + margins) || y > cnv.height - ((step * 2) + margins)) {
                  continue
              }

            //   randomLargeShape()

          }
        }
    }

}
  
  

// Helpers

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


