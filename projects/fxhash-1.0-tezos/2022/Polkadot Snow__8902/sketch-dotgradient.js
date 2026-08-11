// Environment variables
let width, height
let step = 1 + Math.floor(fxrand() * 20) 
let margins = 30 + (fxrand() * 80) //80
var pal1 = [], pal2 = [], pal3 = [], pal4 = [], pal5 = [], pal6 = [], pal7 = [], pal8 = [];
const palettes = [pal1, pal2, pal3, pal4, pal5, pal6, pal7, pal8];
let bgColor;


function setup() {
  width = 1424;
  height = 1424;
  cnv = createCanvas(windowWidth, windowHeight);
  
  pal1.push(color('#003049'), color('#d62828'), color('#f77f00'), color('#fcbf49'), color('#eae2b7'));
  pal2.push(color('#2C2E43'), color('#595260'), color('#B2B1B9'), color('#FFD523'));
  pal3.push(color('#F4F1DE'), color('#E07A5F'), color('#3D405B'), color('#81B29A'), color('#F2CC8F'));
  pal4.push(color('#083346'), color('#046C95'), color('#0196C1'), color('#48B5D6'), color('#B3E0EE'));
  pal5.push(color('#E63946'), color('#F1FAEE'), color('#A8DADC'), color('#457B9D'), color('#1D3557'));
  pal6.push(color(134,255,93), color(52,227,97), color(20,210,133), color(14,187,155), color(12,158,169));
  pal7.push(color(62,61,65), color(113,111,117), color(159,156,165), color(202,199,209), color(225,221,231));
  pal8.push(color(5,5,5), color(23,25,23), color(30,30,30), color(56,56,56), color(106,103,103));

  chosenPalette = palettes[int(fxrand() * palettes.length)];


  bgColor = chosenPalette[int(fxrand() * chosenPalette.length)]
  background(bgColor)

}

function draw() {
  noLoop()
  stroke(color("#fafafa"))

    // Small shapes
    
    // let strokeColor = chosenPalette[int(fxrand()*chosenPalette.length)]
    let strokeColor = chosenPalette[1]

    for (x = margins; x < windowWidth - margins - 1; x += step) {
        for (y = margins; y < windowHeight - margins - 1; y += step) {
            
            // let randomX = x + random(-15, 15)
            let plusMinusRandomX = fxrand()

            let randomX = x + (fxrand() * 15)
            if(plusMinusRandomX < 0.5) {
              randomX = randomX * -1
            }

            // let randomY = y * random(-0.2, 1)
            let plusMinusRandomY = fxrand()

            let randomY = y * (fxrand() * 1)
            if(plusMinusRandomY < 0.5) {
              randomY = randomY * -0.8
              
            }
            console.log(randomY / y)

             
            if ((randomX > margins && randomX < windowWidth - margins) && (randomY > margins && randomY < windowHeight - margins)) {

              do {
                strokeColor = chosenPalette[int(fxrand() * chosenPalette.length)];
              } while (bgColor == strokeColor);

              stroke(strokeColor)
              // strokeWeight(random(1, 7) * y/400)
              strokeWeight(fxrand() * 10 * y / 450)
              point(randomX, randomY)

            }
            
            
        }

        
    }    


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
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


