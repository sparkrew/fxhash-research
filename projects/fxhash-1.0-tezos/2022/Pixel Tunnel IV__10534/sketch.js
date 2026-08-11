//var capturer = new CCapture({ format: 'webm' , framerate: 40} );

let p5Canvas;
const deg = (a) => {
  return a * (Math.PI/180);
}

let rotate = 0;

let blockColorIndex = (x, y, i) => {
  if (pattern===1) {
    if (x<300) { return 1; }
  }

  if (pattern===2) {
    if (x<300) { return 1; }
    if (x>480) { return 2; }
  }

  if (pattern===3) {
    if (y<300) { return 1; }
  }

  if (pattern===4) {
    if (y<300) { return 1; }
    if (y>480) { return 2; }
  }

  if (pattern===5) {
    if (i%4===0) { return 1; }
  }

  if (pattern===6) {
    if (x<400) { return 1; }
  }

  if (pattern===7) {
    if (y<400) { return 1; }
  }

  if (pattern===8) {
    if (y<400) { return 1; }
    if (y>400 && x<400) { return 2; }
  }

  if (pattern===9) {
    if (y<400 && x<400) { return 1; }
    if (y<400 && x>380) { return 2; }
    if (y>380 && x<400) { return 3; }
  }

  if (pattern===10) {
    if (y>280 && y<500 && x>280 && x<500) { return 1; }
  }

  if (pattern===11) {
    if (y>280 && y<500 && x>280 && x<500) { return 1; }
    if (y<=180 || y>=600 || x<=180 || x>=600) { return 2; }
  }

  if (pattern===12) {
    if (x<220) { return 1; }
    if (x<340) { return 2; }
    if (x<460) { return 3; }
    if (x<580) { return 4; }
  }

  if (pattern===13) {
    if (y<220) { return 1; }
    if (y<340) { return 2; }
    if (y<460) { return 3; }
    if (y<580) { return 4; }
  }

  if (pattern===14) {
    if (y<340) { return 1; }
    if (y<380) { return 2; }
  }

  if (pattern===15) {
    if (y<300) { return 1; }
    if (y<320) { return 2; }
    if (y<480) { return 3; }
    if (y<500) { return 4; }
  }

  if (pattern===16) {
    if (y>280 && y<500 && x>280 && x<500) { return 1; }
  }

  if (pattern===17) {
    if (x>280 && x<500) { return 1; }
    if (x>280 && x>480) { return 2; }
  }

  if (pattern===18) {
    if (y>280 && y<500) { return 1; }
    if (y>280 && y>480) { return 2; }
  }

  if (pattern===19) {
    if (x<120 || y<120 || x>=680 || y>=680) { return 1; }
  }

  return 0;
}

let darkModifier = (x, y) => {
  if (pattern===1) {
    if (x<300) { return fxrand()*3.5; }
  }

  if (pattern===3) {
    if (y<300) { return fxrand()*3.5; }
  }

  if (pattern===5) {
    if (y<=380) { return fxrand()*5; }
  }

  if (pattern===6) {
    if (x>=360 && x<=420) { return fxrand()*50; }
  }

  if (pattern===7) {
    if (y>=360 && y<=420) { return fxrand()*50; }
  }

  if (pattern===8) {
    if (y>=360 && y<=420) { return fxrand()*50; }
    if (y>400 && x>=360 && x<=420) { return fxrand()*50; }
  }

  if (pattern===9) {
    if (y>=360 && y<=420) { return fxrand()*50; }
    if (x>=360 && x<=420) { return fxrand()*50; }
  }

  if (pattern===10) {
    if (y<=280 || y>=500 || x<=280 || x>=500) { return fxrand()*50; }
  }

  if (pattern===11) {
    if (y<=180 || y>=600 || x<=180 || x>=600) { return fxrand()*3; }
    if (y<=280 || y>=500 || x<=280 || x>=500) { return fxrand()*50; }
  }

  if (pattern===14) {
    if (y>=340 && y<380) { return fxrand()*-3; }
  }

  if (pattern===15) {
    if (y>=300 && y<320) { return fxrand()*-3; }
    if (y>=480 && y<500) { return fxrand()*-3; }

  }

  if (pattern===16) {
    if (x<120 || y<120 || x>=680 || y>=680) { return fxrand()*-2; }
    if (y>280 && y<500 && x>280 && x<500) { return fxrand()*25; }
    if (y>260 && y<520 && x>260 && x<520) { return fxrand()*-2; }
  }

  if (pattern===17) {
    if (x<120 || x>=680) { return fxrand()*-2; }
    if (x>280 && x<500) { return fxrand()*25; }
    if (x>260 && x<520) { return fxrand()*-2; }
  }

  if (pattern===18) {
    if (y<120 || y>=680) { return fxrand()*-2; }
    if (y>280 && y<500) { return fxrand()*25; }
    if (y>260 && y<520) { return fxrand()*-2; }
  }

  if (pattern===19) {
    if (x<120 || y<120 || x>=680 || y>=680) { return fxrand()*-2; }
    if (x>400 && y>400 && x<680 && y<680) { return fxrand()*2; }
    if (x>180 && y>180 && x<680 && y<680) { return fxrand()*25; }
  }

  if (pattern===20) {
    if (x<120 || y<120 || x>=680 || y>=680) { return fxrand()*-2; }
    if (y>300 && y<480 && x>300 && x<480) { return fxrand()*2; }
    if (x>120 && y>120 && x<660 && y<660) { return fxrand()*25; }
  }

  return fxrand()*2;
}

function setup() {
  p5Canvas = createCanvas(800, 800);
  pixelDensity(2);
  smooth();
  frameRate(40);

  let color = chroma(colors[Math.floor(fxrand() * colors.length)]);
  window.bg = chroma(color).darken(6).hex();

  //background(bg);
  background('#000');
  noStroke();

  let blocks = [];
  for (let i=0;i<30;i++) {
    for (let j=0;j<30;j++) {
      blocks.push([
        5+i,
        5+j,
        1,
        1
      ])
    }
  }

  for (let i=0;i<blocks.length;i++) {
    let block = blocks[i];
    let x = (block[0]*20);
    let y = (block[1]*20);
    let w = (block[2]*20);
    let h = (block[3]*20);

    let colorIndex = blockColorIndex(x,y,i);
    let color = colors[colorIndex];

    let darkness = darkModifier(x,y);
    let c = chroma(color).darken(darkness);

    if (saturated) {
      c = c.saturate(3);
      if (darkness>4) {
        c = chroma('#000');
      }
    }

    fill(c.hex());
    rect(x,y,w,h);
  }
}

let len = 30;
let mutations = 3000;

let firstBlend = 10;
let secondBlend = 100;

function draw() {
  if (frameCount === 800) {
    noLoop();
    fxpreview();
  }

  loadPixels();
  for (let i=0;i<mutations;i++) {
    let x = Math.floor(fxrand() * 1600);
    let y = Math.floor(fxrand() * 1600);
    let p = (y*1600*4) + (x*4);
    let r = pixels[p];
    let g = pixels[p+1];
    let b = pixels[p+2];
    let d = Math.floor(fxrand() * 4);

    let blendAmount = frameCount < 100 ? firstBlend : secondBlend;

    let blend = !(r===bgRBG[0] && g===bgRBG[1] && b===bgRBG[2]) ? blendAmount : Math.ceil(blendAmount * .01);

    let newLen = len;
    if (frameCount<200 && chaotic) {
      newLen = 60;
    }

    if (d===0) {
      for (let j=1;j<newLen;j++) {
        let ox = x-j;
        if (ox > -1) {
          let op = (y*1600*4) + (ox*4);
          let r2 = ((r*blend) + pixels[op]) / (blend+1);
          let g2 = ((g*blend) + pixels[op+1]) / (blend+1);
          let b2 = ((b*blend) + pixels[op+2]) / (blend+1);
          pixels[op] = r2;
          pixels[op+1] = g2;
          pixels[op+2] = b2;
        }
      }
    }

    if (d===1) {
      for (let j=1;j<newLen;j++) {
        let ox = x+j;
        if (ox < 1600) {
          let op = (y*1600*4) + (ox*4);
          let r2 = ((r*blend) + pixels[op]) / (blend+1);
          let g2 = ((g*blend) + pixels[op+1]) / (blend+1);
          let b2 = ((b*blend) + pixels[op+2]) / (blend+1);
          pixels[op] = r2;
          pixels[op+1] = g2;
          pixels[op+2] = b2;
        }
      }
    }

    if (d===2) {
      for (let j=1;j<newLen;j++) {
        let oy = y-j;
        if (oy > -1) {
          let op = (oy*1600*4) + (x*4);
          let r2 = ((r*blend) + pixels[op]) / (blend+1);
          let g2 = ((g*blend) + pixels[op+1]) / (blend+1);
          let b2 = ((b*blend) + pixels[op+2]) / (blend+1);
          pixels[op] = r2;
          pixels[op+1] = g2;
          pixels[op+2] = b2;
        }
      }
    }

    if (d===3) {
      for (let j=1;j<newLen;j++) {
        let oy = y+j;
        if (oy < 1600) {
          let op = (oy*1600*4) + (x*4);
          let r2 = ((r*blend) + pixels[op]) / (blend+1);
          let g2 = ((g*blend) + pixels[op+1]) / (blend+1);
          let b2 = ((b*blend) + pixels[op+2]) / (blend+1);
          pixels[op] = r;
          pixels[op+1] = g;
          pixels[op+2] = b;
        }
      }
    }
  }
  updatePixels();
}

function keyPressed() {
  if (key==='s') {
    saveCanvas('pixel-tunnel', 'png');
  }
  if (keyCode===13) {
    loop();
  }
  if (keyCode===32) {
    noLoop();
  }
}