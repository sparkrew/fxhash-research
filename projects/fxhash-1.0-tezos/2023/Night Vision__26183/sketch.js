// Estelle Flores - Nightvision - My first generative token made with 100% my code Made with help of many internet friends! Thanks everybody that helped along the way!

let colors = ['#9E4784','#ffc09f', '#ffee93', '#8affc1', '#00c9a7', '#00537e', '#754043', '#9A8873', '#37423D'];
let buildings = [];
let scalePerc = 1.0;

function setup() {
  minWin = min(windowWidth,windowHeight);
  createCanvas(550,550);
  canvas.imageSmoothingEnabled = false;
  noSmooth();
  noLoop();
  cnv1 = createGraphics(550,550);
  cnv1.imageSmoothingEnabled = false;
  cnv1.noSmooth();
  cnv1.noLoop();
  cnv1.rectMode(CORNERS);
  cnv1.pixelDensity(4);


  //random
  seed = int(fxrand() * 999999);
  Math.random = fxrand;
    randomSeed(seed);
    noiseSeed(seed);
    p5grain.setup({ random: fxrand });
  
  //background
  let bgColor = color(random(50, 200), random(50, 155), random(50, 255));
  cnv1.background(bgColor);
  
  //grain
   const amount = 22;
    const alpha = false;
    cnv1.tinkerPixels((index, total) => {
        const grainAmount = Math.floor(random() * (amount * 2 + 1)) - amount;
        cnv1.pixels[index] = cnv1.pixels[index] + grainAmount;
        cnv1.pixels[index+1] = cnv1.pixels[index+1] + grainAmount;
        cnv1.pixels[index+2] = cnv1.pixels[index+2] + grainAmount;
        if (alpha) {
            cnv1.pixels[index+3] = cnv1.pixels[index+3] + grainAmount;
        }
    });
  
  //texture overlay
  cnv1.blendMode(OVERLAY);
  cnv1.fill(255, 255, 255, 10);
  for (let i = 0; i < 550; i += 4) {
    for (let j = 0; j < 550; j += 4) {
      cnv1.rect(i, j, i + (random(3.9,5.1)), j + (random(3.9,5.1)));
    }
  }
  
  //Buildings
  for (let i = 0; i < 40; i++) {
    let b = new Building();
    buildings.push(b);
  }

  // Draw buildings
  let buildingIndex = 0;
  for (let j = 0; j < int(random(3,6)); j++) { //3 to 5 rows of buildings
    let x = 0;
    let y = cnv1.height-cnv1.height/9 * (j + 0.81);
    for (let i = 0; i < 8; i++) { //8 buildings in each row
      buildings[buildingIndex].drawBuilding(x, y);
      x += buildings[buildingIndex].width + random(10,20);
      buildingIndex++;
    }
  }
  
}

function draw() {
  push();
  scale(scalePerc);
  image(cnv1,0,0);
  pop();
  print("done");
  noLoop();
}

class Building {
  constructor() {
    this.width = random(10, 100);
    this.height = random(50, 200);
    this.color = random(colors);
    this.windows = this.generateWindows();
  }

  generateWindows() {
    let windows = [];
    let numWindows = int(random(2, 6)); // Windows per floor
    let windowSize = int(random(5, 10)); // Windows size
    for (let i = 0; i < numWindows; i++) {
      let lightOn = random() < 0.5; // Turn the light on/off
      if (lightOn) {
        windows.push(color(255, random(200, 255), random(200, 255))); // Lights on
      } else {
        windows.push(color(20, 20, 20)); // Lights off
      }
    }
    return windows;
  }
  
  drawBuilding(x, y) {
    cnv1.fill(this.color);
    cnv1.noStroke(); 
    cnv1.rect(x, y - this.height, x + this.width, y);
    let numWindows = this.windows.length;
    let windowHeight = this.height / numWindows;
    for (let i = 0; i < numWindows; i++) {
      cnv1.fill(this.windows[i]);
      cnv1.rect(x + 5, y - this.height + i * windowHeight + 5, x + this.width - 5, y - this.height + (i + 1) * windowHeight - 5);
    }
  }
  
}
//function fxpreview() {
    //console.log("fxhash: TRIGGER PREVIEW")
 // }


//function windowResized() {
  //newWin = min(windowWidth,windowHeight);
  //scalePerc = newWin/minWin;
  //noLoop();
  //cnv1.noLoop();
  //resizeCanvas(newWin,newWin);
//}
