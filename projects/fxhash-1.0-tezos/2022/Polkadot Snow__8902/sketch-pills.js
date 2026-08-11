// Environment variables
let width, height, padding, gaps;
let img;
var pal1 = [], pal2 = [], pal3 = [], pal4 = [], pal5 = [], pal6 = [], pal7 = [], pal8 = [];
const palettes = [pal1, pal2, pal3, pal4, pal5, pal6, pal7, pal8];

let chosenPalette;
let fatLineAngled = coinflip();
let increasingMessiness = likelyEvent();
let messiness = Math.random() * 30; // default 20, bigger number = less messy
let pillWidth = 20 // default = 20
let centerCircle = coinflip();
let pillThickness = Math.random() * 200;

function setup() {
  width = 2000;
  height = 3000;
  cnv = createCanvas(width, height);
  colorMode(RGB);

  pal1.push(color(239,144,7, random(30, 255)), color(246,211,23, random(30, 255)), color(255,255,255, random(30, 255)), color(69,188,238, random(30, 255)), color(30,63,84, random(30, 255)));
  pal2.push(color('#2C2E43'), color('#595260'), color('#B2B1B9'), color('#FFD523'));
  pal3.push(color('#F4F1DE'), color('#E07A5F'), color('#3D405B'), color('#81B29A'), color('#F2CC8F'));
  pal4.push(color('#083346'), color('#046C95'), color('#0196C1'), color('#48B5D6'), color('#B3E0EE'));
  pal5.push(color('#E63946'), color('#F1FAEE'), color('#A8DADC'), color('#457B9D'), color('#1D3557'));
  pal6.push(color(134,255,93, random(30, 255)), color(52,227,97, random(30, 255)), color(20,210,133, random(30, 255)), color(14,187,155, random(30, 255)), color(12,158,169, random(30, 255)));
  pal7.push(color(62,61,65, 150), color(113,111,117, 150), color(159,156,165, 150), color(202,199,209, 150), color(225,221,231, 150));
  pal8.push(color(5,5,5, 150), color(23,25,23, 150), color(30,30,30, 150), color(56,56,56, 150), color(106,103,103, 150));
  chosenPalette = palettes[int(random(0, palettes.length))];
}

function draw() {
  noLoop();
  if (coinflip()){
    background('#fafafa');
  } else {
    background('#000000');
  }
  
    for (let y = 1; y < 196; y+=1) {
      for (let i = 40; i < width-60; i+=80) {

        var paletteColor = chosenPalette[int(random(0,chosenPalette.length))];
        stroke(paletteColor);
        strokeWeight(random(1, 40));
        let lineLength = random(80, 120);
        
        // Segi jooned
        if(increasingMessiness){
          console.log("Linelength: " + lineLength);
          console.log("i: " + i);
          if(lineLength + i >= width - 25) {
            console.log("Läheneme rea lõpule.");
            line(i, y * 15 + random(-1.2 * i/messiness, 1.2 * i/messiness) + 20, i + random(20,20), y * 15 + random(-1.2 * i/messiness, 1.2 * i/messiness) + 20);
          } else {
            line(i, y * 15 + random(-1.2 * i/messiness, 1.2 * i/messiness) + 20, i + lineLength, y * 15 + random(-1.2 * i/messiness, 1.2 * i/messiness) + 20);
          }
        } else { // Sirged jooned
          if(i + lineLength >= width){
            line(i, y * 15 + 20, i + 30, y * 15 + 20);
          } else {
              line(i, y * 15 + 20, i + lineLength, y * 15 + 20);
          }
        }
      }
  }
    // Fat line in the center
    stroke(chosenPalette[int(random(0,chosenPalette.length))]);
    strokeWeight(400);

    if(fatLineAngled) {
      line(width/2 - 500, height/2 + 300, width/2 + 520, height/2 - 200);
    } else if (centerCircle) {
        fill(chosenPalette[int(random(0,chosenPalette.length))]);
        circle(width/2, height/2, 1000);
    }else {
      line(width/2 - 500, height/2, width/2 + 520, height/2);
    }    
}

// Helpers

function keyPressed() {
  console.log("Key pressed called.");
  if (keyCode === RETURN) {
    save(cnv, "genereeritud.jpg");
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

function coinflip() {
  let coinflip = Math.random();
  if (coinflip > 0.5) {
    return true;
  } else {
    return false;
  }
}