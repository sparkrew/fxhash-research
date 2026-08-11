////// Parameters
let segments = 500;
let colors = [];
let samples = 0;


let frameStop = 130;
var numRoots = 900;
var roots = [numRoots];
var rootsCreated = 0;
var rootsScale = 50;
var rootsLength = 80;

let wWidth = 0;
let wHeight = 0;

let widthStep = 0;
let heightStep = 0;

let noiseStep = 0;
let noiseScale = 0;

let displaceStep = 0;

let waveShadowOffset = 0;

let startHeightOffset = 0;
let endHeight = 1;

let waveFraction = 0;

let scaleMult = 0;
let noiseFlex = 0;

let masterScaleX = 1;
let masterScaleY = 1;

////// Graphics
let topo;
let cover;
let under;

let modeColor;

let step = 0;


function setup() {
  wWidth = windowWidth;
  wHeight = windowHeight;

  if (wWidth > wHeight)
    wWidth = wHeight;
  else
    wHeight = wWidth;

  masterScaleX = wWidth / 1000;
  masterScaleY = wHeight / 1000;

  createCanvas(wWidth, wHeight);
  topo = createGraphics(wWidth, wHeight);
  cover = createGraphics(wWidth, wHeight);
  under =  createGraphics(wWidth, wHeight);



  colorMode(HSB, 100);

  randomSeed(hashes[0]);
  noiseSeed(hashes[0]);


  if (frame == "No")
    frameStop = 200;

  createColorPallete();

  setStyle();

  modeColor = color(0, 0, 100);
  modeColor = colors[floor(samples/1.5)];

  let co = color(modeColor);
  let hu = hue(co);
  let sa = saturation(co);
  let br = brightness(co);

  hu = (hu + 5)%100;
  sa = sa /1.5;


  modeColor = color(hu, sa, br);


  cover.noStroke();

  frameRate(30);

  topo.clear();
  under.clear();
  under.noStroke();



  noiseDetail(4, 0.5);
  //noiseDetail(2, 0.5);
  //noiseDetail(1, 0.5);


  if (size == "Large")
  {
    noiseDetail(1, 0.5);
    scaleMult = 0.0025;//noise(hashes[1]) ;
    noiseFlex = 0.07;//noise(hashes[2]) * 0.1;
  } else if (size == "Medium")
  {
    noiseDetail(2, 0.5);
    scaleMult = 0.004;//noise(hashes[1]) ;

    noiseFlex = 0.04;//noise(hashes[2]) * 0.1;
  } else if (size == "Small")
  {
    noiseDetail(3, 0.5);
    scaleMult = 0.006;//noise(hashes[1]) ;
    if (modulating == "No") scaleMult = 0.01;
    noiseFlex = 0.03;//noise(hashes[2]) * 0.1;
  }

  if (modulating == "No")
  {
    noiseFlex = 0;
    if (size == "Large")
    {
      noiseDetail(2, 0.5);
      scaleMult = 0.004;//noise(hashes[1]) ;
      noiseFlex = 0;//noise(hashes[2]) * 0.1;
    }
    if (size == "Medium")
      noiseMult = 0.013;
    if (size == "Small")
      noiseMult = 0.013;
  } else if (modulating == "Hectic")
  {
    noiseFlex *= 3;
  }
  createRoots();
  //scaleMult *= masterScaleX;
}


function draw() {

  //if (heightStep < endHeight)
  if (step < frameStop)
  {
    ///////////////// Parameters Set  /////////////////////////////// ///////////////////////////////

    startHeightOffset = -250 * (masterScaleY) ;
    widthStep = (wWidth / (segments))*1.02  ;
    heightStep = (step * 6) * masterScaleY + startHeightOffset;

    let fraction = pow(step / frameStop, 3) ;

    if (curve == "Out")
      noiseScale = scaleMult * (1-fraction) + scaleMult;
    else
      noiseScale = scaleMult * (fraction) + scaleMult;

    //noiseScale = scaleMult * (1-fraction) + scaleMult;
    //noiseScale *= masterScaleY;


    noiseStep = step*noiseFlex;

    displaceStep =  250 * (step*0.01) * masterScaleY + 250 * masterScaleY;
    if (modulating == "No") displaceStep =  350 * (step*0.01) * masterScaleY + 350 * masterScaleY;
    waveShadowOffset = (pow(1-fraction, 1) * 60) * masterScaleY;



    //////////// Shadow wave  /////////////////////////////// ///////////////////////////////
    topo.noStroke();
    topo.fill(0, 2*(fraction) * 80);

    blendMode(OVERLAY);
    drawWave(topo, waveShadowOffset);
    blendMode(BLEND);

    //////////// Color wave  /////////////////////////////// ///////////////////////////////

    topo.fill(step + noise(step * 001)*100);
    topo.fill(colors[int(noise(step) * 1000) % samples]);
    drawWave(topo, 0);

    topo.fill(255);
    drawWaveStrip(topo, 0, 2 * masterScaleY);


    //////// Depth blur  /////////////////////////////// ///////////////////////////////

    //if (step % 8 == 0 && heightStep < wHeight-570  )
    //  if (heightStep < wHeight/1.6-500)
    //    topo.filter(BLUR, 2);
    //  else
    //    topo.filter(BLUR, 1);

    ////////////// COVER PART /////////////////////////////// ///////////////////////////////

    cover.clear();
    //cover.fill(colors[ ceil(samples/5) ]);
    //cover.strokeWeight(3);
    cover.fill(modeColor);
    drawWave(cover, 0);
    cover.fill(255);
    cover.noStroke();
    drawWaveStrip(cover, 0, 6 * masterScaleY);


    //  cover.fill(color(a, b, c, 5) );
    //if (pallete == "Colorful")
    //  cover.fill(color(20, 5) );
    //else
    //  cover.fill(color(0, 10));

    //cover.noStroke();
    //for (let i = 0; i < 20; i++)
    //{
    //  cover.push();
    //  cover.translate(0, (( 20-i) * 2) * masterScaleY);
    //  drawWave(cover, 0);
    //  cover.pop();
    //}
    //cover.fill(0);
    //cover.stroke(colors[int(samples-1)]);
    //  cover.stroke(colors[0]);
    // drawWave(cover,-25*5);
  }

  ////////////////////  Draw final image  /////////////////////////////// ///////////////////////////////

  background(modeColor);

  image(topo, 0, 0, wWidth, wHeight);
  image(cover, 0, 0, wWidth, wHeight);

  if (step > frameStop)
  {

    drawRoots();
    //under.fill(255);
    //  drawWaveStrip(under, 0, 13);
  }

  blendMode(SCREEN);
  image(under, 0, 0, wWidth, wHeight);
  blendMode(BLEND);
  drawPallete();

  step ++;
}

function windowResized() {
  wWidth = windowWidth;
  wHeight = windowHeight;

  if (wWidth > wHeight)
    wWidth = wHeight;
  else
    wHeight = wWidth;

  resizeCanvas(wWidth, wHeight);
  topo = createGraphics(wWidth, wHeight);
  cover = createGraphics(wWidth, wHeight);
  under = createGraphics(wWidth, wHeight);

  topo.clear();
  cover.clear();
  under.clear();

  clearRoots();

  step = 0;

  masterScaleX = wWidth / 1000;
  masterScaleY = wHeight / 1000;
}
