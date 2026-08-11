let theShader;

let fxr1, fxr2, fxr3, fxr4, fxr5, fxr6, fxr7, fxr8, fxr9, fxr10, fxr11, fxr12, fxr13, fxr14, fxr15, fxr16, fxr17, fxr18, fxr19, fxr20, fxr21, fxr22, fxr23, fxr24, fxr25, fxr26, fxr27, fxr28, fxr29, fxr30, fxr31, fxr32;

let isPaused = false;
let startTime = 0;
let pauseTime = 0;
let et = 0.0;
let ti = 0.0;
let speed = 1.0;

let showInstructions = false;

let q = 1;

function preload(){
  theShader = loadShader('shader.vert', 'shader.frag');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  fxr1 = $fx.rand();
  fxr2 = $fx.rand();
  fxr3 = $fx.rand();
  fxr4 = $fx.rand();
  fxr5 = $fx.rand();
  fxr6 = $fx.rand();
  fxr7 = $fx.rand();
  fxr8 = $fx.rand();
  fxr9 = $fx.rand();
  fxr10 = $fx.rand();
  fxr11 = $fx.rand();
  fxr12 = $fx.rand();
  fxr13 = $fx.rand();
  fxr14 = $fx.rand();
  fxr15 = $fx.rand();
  fxr16 = $fx.rand();
  fxr17 = $fx.rand();
  fxr18 = $fx.rand();
  fxr19 = $fx.rand();
  fxr20 = $fx.rand();
  fxr21 = $fx.rand();
  fxr22 = $fx.rand();
  fxr23 = $fx.rand();
  fxr24 = $fx.rand();
  fxr25 = $fx.rand();
  fxr26 = $fx.rand();
  fxr27 = $fx.rand();
  fxr28 = $fx.rand();
  fxr29 = $fx.rand();
  fxr30 = $fx.rand();
  fxr31 = $fx.rand();
  fxr32 = $fx.rand();

}

function draw() { 
  pixelDensity(q);
  background(0);

  shader(theShader);

  theShader.setUniform('u_resolution', [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("fxrand1", fxr1);
  theShader.setUniform("fxrand2", fxr2);
  theShader.setUniform("fxrand3", fxr3);
  theShader.setUniform("fxrand4", fxr4);
  theShader.setUniform("fxrand5", fxr5);
  theShader.setUniform("fxrand6", fxr6);
  theShader.setUniform("fxrand7", fxr7);
  theShader.setUniform("fxrand8", fxr8);
  theShader.setUniform("fxrand9", fxr9);
  theShader.setUniform("fxrand10", fxr10);
  theShader.setUniform("fxrand11", fxr11);
  theShader.setUniform("fxrand12", fxr12);
  theShader.setUniform("fxrand13", fxr13);
  theShader.setUniform("fxrand14", fxr14);
  theShader.setUniform("fxrand15", fxr15);
  theShader.setUniform("fxrand16", fxr16);
  theShader.setUniform("fxrand17", fxr17);
  theShader.setUniform("fxrand18", fxr18);
  theShader.setUniform("fxrand19", fxr19);
  theShader.setUniform("fxrand20", fxr20);
  theShader.setUniform("fxrand21", fxr21);
  theShader.setUniform("fxrand22", fxr22);
  theShader.setUniform("fxrand23", fxr23);
  theShader.setUniform("fxrand24", fxr24);
  theShader.setUniform("fxrand25", fxr25);
  theShader.setUniform("fxrand26", fxr26);
  theShader.setUniform("fxrand27", fxr27);
  theShader.setUniform("fxrand28", fxr28);
  theShader.setUniform("fxrand29", fxr29);
  theShader.setUniform("fxrand30", fxr30);
  theShader.setUniform("fxrand31", fxr31);
  theShader.setUniform("fxrand32", fxr32);

  if (!isPaused) {
    let elapsedTime = millis() - startTime;
    et = elapsedTime;
    ti = 0.001;
  }

  theShader.setUniform("et", et);
  theShader.setUniform("ti", ti);
  theShader.setUniform('speed', speed);

  rect(0,0,width, height);

  if (keyIsDown(UP_ARROW)) {
    if (speed < 1.75) {
      speed += 0.005;
    }
  } else if (keyIsDown(DOWN_ARROW)) {
    if (speed > 0.25) {
      speed -= 0.005;
    }
  }

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if (keyCode === 49) {
    q = 1;
  } else if (keyCode === 50) {
    q = 2;
  } else if (keyCode === 51) {
    q = 3;
  }
}

function toggleAnim() {
  isPaused = !isPaused;
    if (isPaused) {
      pauseTime = millis();
    } else {
      startTime += millis() - pauseTime;
    }
}

document.addEventListener('click', toggleAnim);