console.log(`Hey! If you're reading this you're awesome ;)

// This project is called Dirt and is made by me, --jona (@dashdashjona).
// The fxhash used is: ${fxhash}.

Press [h] to open the Help screen.

----

The copyright is on me.
If you want to do anything with my work, you can contact me through Twitter:
https://twitter.com/dashdashjona

The perlin noise code comes from p5js, license:
https://p5js.org/copyright.html

`);

// Canvas.
const cnv = document.getElementById('cnv');
const ctx = cnv.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;
const side = Math.min(width, height);
const drawingResolution = r(24, 120);
const unit = side / drawingResolution;
const pixelSize = Math.floor(Math.max(1, Math.round(side / 1200)));
cnv.width = side;
cnv.height = side;
ctx.lineWidth = pixelSize;

// Extra canvas.
let grainCanvas;

// Fps vars.
const fps = 30;
let animate = true;
let frameCount = 0;
let fpsInterval, startTime, now, then, elapsed;

// Other vars.
let palette = rcp();
noiseSeed(r(0, 999999999));
noiseDetail(r(1, 8), r(1, 9) / 10);
const mod = 0.008;
let field = [];
const particles = [];
const zMod = r(1, 10) / 1000;
let zOff = 0;

// Now let's do something.
function go() {
  // Fps stuff.
  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;
  // ------------------------------
  // Setup stuff below here.
  // ------------------------------

  setBackground();

  // Create particles for the flow field with a random location.
  for (let i = 0; i < r(96, 204); i++) {
    particles.push(new Particle(r(0, drawingResolution - 1), r(0, drawingResolution - 1)));
  }

  // Create a second canvas to draw a grainy texture as overlay.
  grainCanvas = document.createElement('canvas');
  grainCanvas.width = side;
  grainCanvas.height = side;
  const grainCtx = grainCanvas.getContext('2d');
  grainCtx.fillStyle = hsl({ ...palette.c2, l: 6, a: 1 });
  grainCtx.fillRect(0, 0, side, side);
  grainCtx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 99999; i++) {
    grainCtx.fillRect(r(-10, side), r(-10, side), r(1, 14), r(1, 14));
  }

  // Debug stuff.
  // visualizeField();

  // ------------------------------
  // Setup stuff above here.
  // ------------------------------
  draw();
}

function draw(newTime) {
  window.requestAnimationFrame(draw);
  if (animate) {
    now = newTime;
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      // ----------------------------------
      // Drawing functionality below here.
      // ----------------------------------

      // Create flow field.
      field = [];
      for (let y = 0; y < drawingResolution + 1; y++) {
        field[y] = [];
        for (let x = 0; x < drawingResolution + 1; x++) {
          const angle = noise(x * mod, y * mod, zOff) * Math.PI * 2;
          const v = new Vector(0, 0);
          v.fromAngle(angle);
          field[y].push(v);
        }
      }
      zOff += zMod;

      if (r(0, 50) === 0) setBackground(0.01);
      visualizeField();

      // Move the particles in the flow field.
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        const x = Math.floor(particle.pos.x);
        const y = Math.floor(particle.pos.y);
        const force = field[y][x];
        particle.move(force);
        particle.show();
      }

      // Draw the grainy overlay on the main canvas.
      ctx.drawImage(grainCanvas, 0, 0);

      // ----------------------------------
      // Drawing functionality above here.
      // ----------------------------------
      // saveAndReload();
      // fxpreview();

      // Log fps.
      // const sinceStart = now - startTime;
      // const currentFps = Math.round((1000 / (sinceStart / ++frameCount)) * 100) / 100;
      // console.log('fps: ', currentFps);
    }
  }
}

// #############################################################################
// Drawing stuff.
// #############################################################################

function setBackground(forceAlpha = false) {
  const bg = { ...palette.bg };
  if (forceAlpha) {
    bg.a = forceAlpha;
  }
  ctx.fillStyle = hsl(bg);
  ctx.fillRect(0, 0, side, side);
}

// Visualize flow field with lines.
function visualizeField() {
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field.length; x++) {
      const v = field[y][x];
      ctx.beginPath();
      ctx.moveTo(x * unit, y * unit);
      ctx.lineTo(x * unit + v.x * unit, y * unit + v.y * unit);
      ctx.strokeStyle = hsl(palette.c2);
      ctx.stroke();
    }
  }
}

// #############################################################################
// Utility stuff.
// #############################################################################

/**
 * Utility function that returns a pseudorandom value between, and including,
 * min and max.
 */
function r(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1) + min);
}

/**
 * Transform a custom color object to hsl.
 */
function hsl(colorObject) {
  return `hsl(${colorObject.h}, ${colorObject.s}%, ${colorObject.l}%, ${colorObject.a})`;
}

// Register keypresses.
document.addEventListener('keypress', (e) => {
  if (e.key === 'h') {
    document.getElementsByClassName('help')[0].classList.toggle('visible');
  }
  if (e.key === 's') {
    saveImage();
  }
  if (e.key === ' ') {
    animate = !animate;
  }
});

function saveImage() {
  // Create a link element that triggers the download.
  const link = document.createElement('a');
  link.setAttribute('download', `${fxhash}.png`);
  link.setAttribute('href', cnv.toDataURL('image/png'));

  // Trigger the download.
  link.click();
}

/**
 * Automatically render and download iterations.
 * Use query params: ?download=true&i=1&max=5 to save the current canvas to disk.
 * Increases param i by 1 and reloads the page until max is reached.
 */
function saveAndReload() {
  const urlQuery = window.location.search;
  const urlSearchParams = new URLSearchParams(urlQuery);
  const urlQPrms = Object.fromEntries(urlSearchParams.entries());

  let download = urlQPrms.download;
  let i = parseInt(urlQPrms.i);
  let max = parseInt(urlQPrms.max);

  if (download === 'true' && i <= max) {
    saveImage();
    if (i < max) {
      let url = new URL(window.location.href);
      setTimeout(() => {
        i++;
        url.searchParams.set('i', i);
        window.location.replace(url);
      }, 1000);
    }
  }
}

/**
 * Create a random color palette.
 */
function rcp() {
  let bg = r(0, 1) ? { h: 0, s: 0, l: r(3, 12), a: 1 }: { h: 0, s: 0, l: r(84, 96), a: 1 };
  let c1 = { h: r(0, 359), s: 100, l: 50, a: 0.2 };
  let c2 = r(0, 1) ? { h: 0, s: 0, l: 84, a: 0.008 } : { h: 0, s: 0, l: 12, a: 0.008 };
  const clr = { bg, c1, c2 };

  // console.log(`
  // {
  //   c1: ${JSON.stringify(c1)},
  //   c2: ${JSON.stringify(c2)},
  //   bg: ${JSON.stringify(bg)},
  // },
  // `);
  return clr;
}

// Start the drawing
go();
