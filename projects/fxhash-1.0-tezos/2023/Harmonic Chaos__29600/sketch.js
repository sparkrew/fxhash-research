////////////////INFO & FEATURES
let myTitle = "Harmonic Chaos";
console.log(myTitle + " | smldms 2023.11"), console.log("HASH: " + fxhash);

////////////////////////////////////////
let seed = Math.floor(999999 * fxrand());
let cnv;
let siz = 1024;
let arr = [8, 16, 24, 32, 48];
let scl = chooseArr(arr);
let posX = 0.1 + fxrand() * 0.9;
let posY = 0.1 + fxrand() * 0.9;
let lValue = fxrand();
let smarge = 0.0618 + fxrand() * 0.1618;
let mrg = smarge.toFixed(2);

let mode = Math.floor(1 + fxrand() * 3);

let clr = {
  n: fxrand(),
  bg: 0,
  st: 255
};

if (clr.n < 0.5) {
  clr.bg = 0
  clr.st = 255
}
else {
  clr.bg = 255
  clr.st = 0
}

//////////////////////
window.$generativeTraits = {
  'Mode': mode,
  'Area': scl,
  'MultiFactor': mrg,
  'B&W': clr.bg,
}
console.log(window.$generativeTraits)

function setup() {
  pixelDensity(4)
  randomSeed(seed);
  noiseSeed(seed);

  cnv = createCanvas(siz, siz * 1.4142);
  cnv.parent('fullScreen');

  background(clr.bg);
  stroke(clr.st);


  noFill();

  let radius = height * 0.25 + 1 * mrg;
  switch (mode) {
    case 1:
      for (x = -scl / 2 + width * mrg; x < width + scl / 2 - width * mrg; x += scl) {
        for (y = -scl / 2 + height * mrg * 0.618; y < height + scl / 2 - height * mrg * 0.618; y += scl) {
         
          let distance = dist(x, y, width * posX, height * posY);

          if (distance < radius * 0.314) {
            line(x, y + scl / 2, x + scl, y + scl / 2);
          }
          else if (distance < radius * 0.618) {
            push()
            strokeWeight(fxrand());
            ellipse(x, y, 10)
            pop()
          }
          else if (distance < radius) {
            push()
            strokeWeight(fxrand() * 5);
            if (fxrand() < lValue) {
              line(x, y + scl, x + scl, y);
            } else {
              line(x, y, x + scl, y + scl);
            }
            pop()
          }
          else if (distance < radius * 1.618) {
            line(x + scl / 2, y, x + scl / 2, y + scl);
          }
          else {
            push()
            strokeWeight(fxrand() * 2);
            if (fxrand() < 0.025) {
              fill(255, 0, 0)
            }
            else {
              noFill()
            }
            ellipse(x, y, scl * mrg * fxrand() * 1.618);
            pop()
          }
        }
      }
      break;
    case 2:
      for (x = -scl / 2 + width * mrg; x < width + scl / 2 - width * mrg; x += scl) {
        for (y = -scl / 2 + height * mrg * 0.618; y < height + scl / 2 - height * mrg * 0.618; y += scl) {
          let distance = dist(x, y, width * posX, height * posY);


          if (distance < radius * 0.314) {
            line(x, y + scl / 2, x + scl, y + scl / 2);
          }
          else if (distance < radius) {
            push()
            strokeWeight(fxrand() * 5);
            if (fxrand() < lValue) {
              line(x, y + scl, x + scl, y);
            } else {
              line(x, y, x + scl, y + scl);
            }
            pop()
          }

          else {
            push()
            strokeWeight(fxrand() * 2);
            if (fxrand() < 0.025) {
              fill(255, 0, 0)
            }
            else {
              noFill()
            }
            ellipse(x, y, scl * mrg * fxrand() * 1.618);
            pop()
          }
        }
      }
      break;

    case 3:
      for (x = -scl / 2 + width * mrg; x < width + scl / 2 - width * mrg; x += scl) {
        for (y = -scl / 2 + height * mrg * 0.618; y < height + scl / 2 - height * mrg * 0.618; y += scl) {
          let distance = dist(x, y, width * posX, height * posY);

          if (distance < radius * 0.314) {
            push()
            strokeWeight(fxrand() * 5);
            line(x, y + scl / 2, x + scl, y + scl / 2);
            pop()
          }

          else if (distance < radius) {
            push()
            strokeWeight(fxrand() * 5);
            if (fxrand() < lValue) {
              line(x, y + scl, x + scl, y);
            } else {
              line(x, y, x + scl, y + scl);
            }
            pop()
          }

          else {
            push()
            strokeWeight(fxrand() * 2);
            if (fxrand() < 0.025) {
              fill(255, 0, 0)
            }
            else {
              noFill()
            }
            // line(x, y + scl / 2, x + scl, y + scl / 2);
            ellipse(x, y, scl * mrg * fxrand() * 1.618);
            pop()
          }
        }
      }
      break;
  }

  grainy(2 + fxrand() * 10)
  fxpreview()
}


function keyTyped() {
  if (key === 's') {
    save(myTitle + "_" + window.fxhash + ".png")
  }
}

///////////////SAVE & RELOAD
function timer(t) {
  save(myTitle + "_" + window.fxhash + ".png")
  setTimeout(function () {
    location.reload(true);
  }, t);
}

function grainy(force) {
  _seed = floor(fxrand() * 999999)
  randomSeed(_seed)
  noiseSeed(_seed)
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 4) {
    grainAmount = random(-force, force);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + grainAmount;
    pixels[i + 3] = pixels[i + 3] + grainAmount
  }
  updatePixels();
}

function chooseArr(arr) {
  const randomIndex = Math.floor(fxrand() * arr.length);
  return arr[randomIndex];
}