const SCALE = 4;

let gx;
let firstDraw = false;
let seed = 0;
let fxhashFeatures = {
  range: 5,
  squeeze: -0.25,
  step: 2,
  scale: 6
};

const options = [
  { range:  5, squeeze: -0.5, step:  2, scale: 6 },
  { range:  6, squeeze: -0.3, step:  3, scale: 6 },
  { range:  5, squeeze: -0.3, step:  5, scale: 8 },
  { range:  8, squeeze: -0.2, step:  2, scale: 4 },
  { range:  9, squeeze:    0, step:  3, scale: 3 },
  { range:  6, squeeze:  0.1, step:  3, scale: 5 },
  { range:  5, squeeze: -0.2, step:  3, scale: 4 },
  { range:  2, squeeze: -0.2, step:  3, scale: 8 },
  { range:  7, squeeze: -0.1, step:  3, scale: 3 },
  { range:  8, squeeze: -0.2, step:  3, scale: 8 },
  { range:  4, squeeze: -0.3, step:  4, scale: 12 },
  { range: 12, squeeze:  0.1, step: 20, scale: 128 },   // glitch
  { range:  5, squeeze:  0.1, step:  7, scale: 6 },
  { range:  7, squeeze: -0.4, step:  2, scale: 4 },
  { range:  3, squeeze: -0.4, step:  7, scale: 32 },
  { range:  3, squeeze:   -1, step:  3, scale: 32 },
  { range:  4, squeeze: -0.5, step:  5, scale: 16 },
  { range:  4, squeeze: -0.3, step:  2, scale: 16 },
  { range:  7, squeeze: -0.3, step:  4, scale: 8 },
  { range:  6, squeeze: -0.1, step:  3, scale: 5 },
  { range:  7, squeeze:    0, step: 12, scale: 8 },
  { range:  4, squeeze:    0, step:  5, scale: 12 },
  { range:  3, squeeze:    0, step: 10, scale: 16 },
  { range:  2, squeeze: -0.5, step:  2, scale: 16 },
  { range:  5, squeeze: -0.5, step:  2, scale: 16 },
  { range:  4, squeeze: -0.3, step:  2, scale: 5 },
  { range:  3, squeeze: -0.4, step:  4, scale: 6 },
  { range:  8, squeeze: -0.1, step:  5, scale: 6 },
  { range:  6, squeeze: -0.4, step:  6, scale: 6 },
  { range:  3, squeeze:   -1, step:  2, scale: 8 },
  { range:  5, squeeze:   -1, step:  2, scale: 10 },
  { range:  5, squeeze: -0.2, step:  3, scale: 3 },
];

function setup() {
  const size = Math.min(windowWidth, windowHeight);
  const canvas = createCanvas(size, size);
  canvas.id('maincanvas');

  gx = createGraphics(size*SCALE, size*SCALE);
  noLoop();

  seed = int(fxrand() * 100000);
  fxhashFeatures = options[int(fxrand() * options.length)];

  // seed = int(Math.random() * 100000);
  // fxhashFeatures = options[12];
  // console.log(seed, fxhashFeatures);

  window.$fxhashFeatures = fxhashFeatures;
}

function draw() {
  if (firstDraw===false) {
    firstDraw = true;

    gx.background(0);
    gx.noiseSeed(seed);

    createTopology(gx, SCALE, {
      lineRange: fxhashFeatures.range,
      lineSqueeze: fxhashFeatures.squeeze,
      lineStep: fxhashFeatures.step,
      lineAmount: 196,
      noiseScale: new p5.Vector().set(fxhashFeatures.scale, 3)
    });
  }

  // write buffer to screen
  const size = Math.min(width, height);
  image(gx, 0, 0, size, size);
}


function windowResized() {
  const size = Math.min(windowWidth, windowHeight);
  resizeCanvas(size, size);
}


function createTopology(ctx, winScale, options) {
  ctx.strokeWeight(winScale);

  const dw = 1/ctx.width;
  const dh = ctx.height/options.lineAmount;

  const lastPosY = (new Array(ctx.width)).fill(0);

  for (let j=1; j<options.lineAmount; j++) {
    const c = 255 * +(j%options.lineStep===0);
    const color = ctx.color(c, c, c);
    ctx.stroke(color);

    for (let x=0; x<ctx.width; x++) {
      // get noise value for vector field
      const nx = (x+1)*dw*options.noiseScale.x;
      const ny = (j+1)*dh*options.noiseScale.y;
      let r = Math.pow(ctx.noise(nx, ny)*2-options.lineSqueeze, options.lineRange)*dh;
      r = Math.max(5, r);
      // create origin vector
      const from = new p5.Vector().set(x, lastPosY[x]);
      // create direction
      const dir = new p5.Vector().set(0, 1);
      dir.mult(r);
      // create line
      const to = p5.Vector.add(from, dir);
      ctx.line(from.x, from.y, to.x, to.y);
      // add height to last pos
      lastPosY[x] = to.y;
    }
  }
}
