//
// ლ(́◕◞౪◟◕‵ლ)
//
// yoyoyo ~ my name is HauYun Lo  (́◉◞౪◟◉‵)
// Thanks for buying and welcome to my first generative art work
// Though it might has something to improve, still hope you can enjoy this piece of work.
// And thank to my friend newyellow, also as a very good teacher, let me know the beauty of generative art. 
// Also thanks the tutorial or example on the internet like 'Coding train', 'TurboflipTV', help me to figure out some problem.
// 
// Best Wishes
//
// Follow my twitter: https://twitter.com/HauYunLo_TW
// Follow my youtube about music: https://www.youtube.com/channel/UCQkyhdf5yI4tigGL22KmX_g
//
// ( ☉_☉)≡☞o────★°
//

// define elements
// 定義各種變數
let fft;
let fft_smoother = 0.6;
let band_cnt = 128;

let bass_freq = 0;
let lowMid_freq = 0;
let mid_freq = 0;
let highMid_freq = 0;
let treble_freq = 0;

let amp_value = 0;

let spectrum;
let allParticles = [];

let mode = 0;

let randomBgHue = fxRandom(0, 360);
let randomBgBri = fxRandom(0, 5);
let randomBgSat = fxRandom(0, 5);

// For RWD use
// RWD設定用，希望設定的畫布大小
let originCanvasWidth = 1280;
let originCanvasHeight = 720;

// For RWD use
// RWD設定用，最終的畫布大小
let canvasWidth = 1280;
let canvasHeight = 720;

let canvasRatio = 1.0;

// For RWD use
function setupCanvasRatio () {
  let originRatio = originCanvasWidth / originCanvasHeight;
  let screenRatio = windowWidth / windowHeight;
  console.log(originRatio);
  console.log(screenRatio);

  // If screen is wider than work, use screenHeight as canvasHeight.
  // 如果螢幕的比例比作品比例寬，就以螢幕高度來當畫布高度
  if(screenRatio > originRatio)
  {
    canvasHeight = windowHeight;
    canvasWidth = canvasHeight * originRatio;

  }
  // if screen is shorter, use screenWidth as canvasHeight.
  // 如果螢幕的比例比較窄，就以螢幕寬度來當畫布寬度
  else
  {
    canvasWidth = windowWidth;
    canvasHeight = canvasWidth / originRatio;
    
  }

  canvasRatio = canvasWidth / originCanvasWidth;
}

function preload() {
  song = loadSound('confession.mp3');
  song.setVolume(1);
}

function setup() {

  console.log(fxhash);
  noiseSeed(fxRandom(-10000, 10000));
  console.log(noiseSeed);
  setupCanvasRatio();

  // For fxhash preview use
  if (isFxpreview == true) {

    song.play();
    mode = 1;
    createCanvas(canvasWidth, canvasHeight);
    //console.log(canvasWidth);
    background(0);
    fft = new p5.FFT(fft_smoother, band_cnt);
    fft.setInput(song);

    w = width;
    h = height;

    initParticles();

  } else if (isFxpreview == false) {

    mode = 0;
    createCanvas(canvasWidth, canvasHeight);
    console.log(canvasWidth);
    background(0);
    fft = new p5.FFT(fft_smoother, band_cnt);
    fft.setInput(song);

    w = width;
    h = height;

    initParticles();

  }

}

function draw() {

  // show instructions
  if (mode == 0) {
    background(0);
    fill(255);
    textSize(25 * canvasRatio);
    textAlign(CENTER);
    text('Press SPACEBAR to play \n <─ backward 15sec (only music) \n ─> forward 15sec (only music) \n Press S to save image \n \n It might be a little bit dark in the beginning, dont worry. \n It takes time to stack and stack colors' , width / 2, height / 2);
  } else if (mode == 1) {
    colorMode(HSB);
    spectrum = fft.analyze();

    bass_freq = fft.getEnergy("bass");
    lowMid_freq = fft.getEnergy("lowMid");
    mid_freq = fft.getEnergy("mid");
    highMid_freq = fft.getEnergy("highMid");
    treble_freq = fft.getEnergy("treble");

    amp_value = (bass_freq + lowMid_freq + mid_freq + highMid_freq + treble_freq);
    ampVel = map(amp_value, 0, 1275, 0, 100);
    //console.log(ampVel);

    updateParticles();

  }

}

// keyboard functions
function keyPressed() {

  if (keyCode === 32) {
    if (song.isPlaying() == false) {
      clear();
      mode = 1;
      song.play();
      background(0);
    } else if (song.isPlaying() == true) {
      mode = 0;
      song.pause();
    }
  }

  if (keyCode === LEFT_ARROW) {
    let ct = song.currentTime();
    song.jump(ct - 15);
  } else if (keyCode === RIGHT_ARROW) {
    let ct = song.currentTime();
    song.jump(ct + 15);
  }

  if (keyCode === 83) {
    saveCanvas('Repetitive Confession by HauYun Lo', 'png');
  }
}

function initParticles() {

  let randomShape = int(fxRandom(0, 100));
  //console.log(randomShape);

  let randomHue = int(fxRandom(0, 360));
  let randomBri = int(fxRandom(60, 90));
  let randomSat = int(fxRandom(25, 85));
  let randomSize = fxRandom(1, 5) * canvasRatio;
  let randomRotate = fxRandom(0, 360);

    for (let i = 0; i < 200; i++) {

      let newParticle = new sandParticle(i);
      let refreshFreq = int(fxRandom(0, 5));

      newParticle.pos.x = fxRandom(w) ;
      newParticle.pos.y = fxRandom(h) ;
      newParticle.pos.x2 = fxRandom(w) ;
      newParticle.pos.y2 = fxRandom(h) ;
      newParticle.pos.x3 = fxRandom(w) ;
      newParticle.pos.y3 = fxRandom(h) ;

      newParticle.type = refreshFreq;
      newParticle.shape = randomShape;
      newParticle.hue = int(fxRandom(randomHue + 60, randomHue - 60));
      newParticle.bri = int(fxRandom(randomBri + 10, randomBri - 10));
      newParticle.sat = int(fxRandom(randomSat + 15, randomSat - 5));
      newParticle.size = fxRandom(randomSize * 1.1, randomSize * 0.9);
      newParticle.rotate = fxRandom(randomRotate + 60, randomRotate - 60);

      allParticles.push(newParticle);

    }

}


function updateParticles() {
  for (let i = 0; i < allParticles.length; i++) {

    allParticles[i].updateMe();

  }
}

class sandParticle {

  constructor(id) {

    this.pos = createVector(0, 0);
    this.center = createVector(0, 0);
    this.id = id;
    this.type;
    this.amp = 0;
    this.shape;
    this.bri;
    this.sat;
    this.hue;
    this.size;
    this.rotate;
    this.superHue;

  }

  updateMe() {

    let t = millis() * 2;

    if (this.type == 0) { this.amp = bass_freq; }
    if (this.type == 1) { this.amp = lowMid_freq; }
    if (this.type == 2) { this.amp = mid_freq; }
    if (this.type == 3) { this.amp = highMid_freq; }
    if (this.type == 4) { this.amp = treble_freq; }

    let noiseXratio = this.pos.x / width;
    let noiseYratio = this.pos.y / height;

    this.center.x = this.pos.x - w / 2;
    this.center.y = this.pos.y - h / 2;

    if (ampVel > 75) {

      let a = noise(noiseXratio * 5, noiseYratio * 5, t + this.id * 0.9) * TWO_PI * 4;

      this.pos.x += sin(a) * this.amp * 0.05;
      this.pos.y += cos(a) * this.amp * 0.05;
      this.pos.x2 += sin(a) * this.amp * 0.05;
      this.pos.y2 += cos(a) * this.amp * 0.05;
      this.pos.x3 += sin(a) * this.amp * 0.05;
      this.pos.y3 += cos(a) * this.amp * 0.05;

      // Setting the edge for particles
      if (this.pos.x > w) { this.pos.x = 0; }
      if (this.pos.x < 0) { this.pos.x = w; }

      if (this.pos.y > h) { this.pos.y = 0; }
      if (this.pos.y < 0) { this.pos.y = h; }


      //colorHSB
      noStroke();
      fill(this.hue, 30 + this.amp * 0.01 * ampVel * 10000, this.sat * 0.5 * this.amp * 0.01);

      let particleSize = this.size * this.amp * 1 * ampVel * 0.00003  * canvasRatio;

      //0~30 rect
      if (this.shape <= 30) {
        rect(this.pos.x, this.pos.y, particleSize * 1.5);
      }

      //31~60 ellipse
      if (this.shape > 30 && this.shape <= 60) {
        ellipse(this.pos.x, this.pos.y, particleSize * 1.2);
      }

      //61~90 triangle
      if (this.shape > 60 && this.shape <= 90) {
        push();
        rotate(this.rotate);
        triangle(this.pos.x, this.pos.y, this.pos.x + particleSize * 1.2, this.pos.y + particleSize * 1.5, this.pos.x + particleSize * 1.8, this.pos.y);
        pop();
      }

      //91~100 mixed
      if (this.shape > 90 && this.shape <= 100) {
        push();
        rotate(this.rotate);
        triangle(this.pos.x, this.pos.y, this.pos.x + particleSize * 1.2, this.pos.y + particleSize * 1.5, this.pos.x + particleSize * 1.8, this.pos.y);
        rect(this.pos.x2, this.pos.y2, particleSize * 1.5);
        ellipse(this.pos.x3, this.pos.y3, particleSize * 1.5);
        pop();
      }
    } else {

      let a = noise(noiseXratio * 10, noiseYratio * 10, t + this.id * 0.9) * TWO_PI * 2;

      this.pos.x += sin(a) * this.amp * 0.005;
      this.pos.y += cos(a) * this.amp * 0.005;
      this.pos.x2 += sin(a) * this.amp * 0.005;
      this.pos.y2 += cos(a) * this.amp * 0.005;
      this.pos.x3 += sin(a) * this.amp * 0.005;
      this.pos.y3 += cos(a) * this.amp * 0.005;

      // Setting the edge for particles
      if (this.pos.x > w) { this.pos.x = 0; }
      if (this.pos.x < 0) { this.pos.x = w; }

      if (this.pos.y > h) { this.pos.y = 0; }
      if (this.pos.y < 0) { this.pos.y = h; }


      //colorHSB
      noStroke();
      fill(this.hue, 30 + this.amp * 0.01 * ampVel * 10000, this.sat * 0.5 * this.amp * 0.01);

      let particleSize = this.size * this.amp * 1 * ampVel * 0.00003 * canvasRatio;

      //0~30 rect
      if (this.shape <= 30) {
        rect(this.pos.x, this.pos.y, particleSize * 1.5);
      }

      //31~60 ellipse
      if (this.shape > 30 && this.shape <= 60) {
        ellipse(this.pos.x, this.pos.y, particleSize * 1.2);
      }

      //61~90 triangle
      if (this.shape > 60 && this.shape <= 90) {
        push();
        rotate(this.rotate);
        triangle(this.pos.x, this.pos.y, this.pos.x + particleSize * 1.2, this.pos.y + particleSize * 1.5, this.pos.x + particleSize * 1.8, this.pos.y);
        pop();
      }

      //91~100 mixed
      if (this.shape > 90 && this.shape <= 100) {
        push();
        rotate(this.rotate);
        triangle(this.pos.x, this.pos.y, this.pos.x + particleSize * 1.2, this.pos.y + particleSize * 1.5, this.pos.x + particleSize * 1.8, this.pos.y);
        rect(this.pos.x2, this.pos.y2, particleSize * 1.5);
        ellipse(this.pos.x3, this.pos.y3, particleSize * 1.5);
        pop();
      }


    }
  }

}