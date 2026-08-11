/*
 ____  ____   __   ____    ____  ____  __  ____   ___  ____  ____ 
(    \(  __) / _\ (  _ \  (  _ \(  _ \(  )(    \ / __)(  __)(_  _)
 ) D ( ) _) /    \ )   /   ) _ ( )   / )(  ) D (( (_ \ ) _)   )(  
(____/(____)\_/\_/(__\_)  (____/(__\_)(__)(____/ \___/(____) (__) 
*/


let mainCanvas, seed, phase = 0, frames = 60;

function setup() {
  seed = floor($fx.rand() * 123456789);
  randomSeed(seed);
  background(255);
  speed = random(0.02,0.06);
  waveCount = floor(random(2,12));
  phaseseed = random(1,100);
  wavedivider = random(2,20);
  yStepRand = random(1,10);
  ampone = random(1,100);
  amptwo = random(1,100);
  wavesum = int(random(1,3));
  waverand = int(random(1,6));
  thickness = int(random(2,7));
  n = 1;
  frames = int(2 * PI * n / speed);
  gifName = 'Dear_Bridget-'+$fx.iteration;

  let canvasWidth = max(800, int(random(820, 1500))); 
  let canvasHeight = max(800, int(random(820, 1500)));

  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(thickness);

  let waveWidth = width / waveCount;
  
  let totalWaveWidth = waveCount * waveWidth;
  let startX = (width - totalWaveWidth) / 2;

  for (let i = 0; i <= waveCount; i++) {
    let x = startX + i * waveWidth;
    let amplitude = ampone + amptwo * sin(i * phaseseed + phase);  
    if(wavesum == 1) {
      drawWavyLine(x, 0, height, amplitude, waveWidth / wavedivider / waverand);
    } else {
      drawWavyLine(x, 0, height, amplitude, waveWidth / wavedivider * waverand);
    }
  }

  phase += speed;
}

function windowResized() {
}

function fxpreview() {
}

function fxrand() {
}

function drawWavyLine(x, startY, endY, amplitude, wavelength) {
  let yStep = yStepRand;
  for (let y = startY; y <= endY; y += yStep) {
    let offsetY = sin((y + phase * wavelength) / wavelength) * amplitude;
    line(x, y, x + offsetY, y);
  }
}

function keyPressed() {
  const options = {
    units: "frames",
    delay: 0
  }
  if (key === 's' || key === 'S') {
    saveGif(gifName, frames, options);
  }
}
