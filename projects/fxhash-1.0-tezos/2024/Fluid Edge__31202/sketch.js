let SEED, ASP, PAL, SW, SH, mx;
let WMAP1, WMAP2;
let STKW, W1_YINC, W2_Y_OFF, W2_Y_OFF_PHASE;

function setup() {
  pixelDensity(1);
  colorMode(HSB, 100);
  frameRate(60);

  SEED = int($fx.getParam("wave_seed") * $fx.rand());

  randomSeed(SEED);
  noiseSeed(SEED);

  ASP = $fx.getParam("aspect");

  if (ASP >= 1) {
    SW = 1000;
    SH = SW * ASP;
  } else {
    SH = 1000;
    SW = SH / ASP;
  }

  mx = 1;

  BD = min(SW, SH) / 25;
  BOX = $fx.getParam("x_bord");
  BOY = $fx.getParam("y_bord");

  PAL = [
    $fx.getParam("bg_col").hex.rgb,
    $fx.getParam("col_1").hex.rgb,
    $fx.getParam("col_2").hex.rgb,
    $fx.getParam("col_3").hex.rgb,
  ];
  console.log(PAL[0]);

  PERIOD = 800;

  WMAP1 = new WaveMap($fx.getParam("w1a"), $fx.getParam("w1b"), $fx.getParam("w1c"));
  WMAP2 = new WaveMap($fx.getParam("w2a"), $fx.getParam("w2b"), $fx.getParam("w2c"));

  STKW = $fx.getParam("stkw");
  W1_YINC = $fx.getParam("w1_yinc");
  W2_Y_OFF = $fx.getParam("w2_y_off");
  W2_Y_OFF_PHASE = $fx.getParam("w2_y_off_phase") * 800;

  createCanvas(SW * mx, SH * mx);
  svg_can = createGraphics(SW * mx, SH * mx, SVG);

  noFill();
  svg_can.noFill();

  draw_setup = true;
  looping = true;
  saving_loop = false;
  svgx = false;
}

function draw() {
  if (svgx) {
    clear();
  }

  if (draw_setup) {
    if ($fx.isPreview) {
      mx = 2;
    }

    randomSeed(SEED);
    noiseSeed(SEED);

    resizeCanvas(SW * mx, SH * mx);
    background(color(PAL[0]));
    strokeWeight(STKW * mx);

    svg_can.resizeCanvas(SW * mx, SH * mx);
    svg_can.background(color(PAL[0]));
    svg_can.strokeWeight(STKW * mx);

    draw_setup = false;
  }

  background(color(PAL[0]));

  if (svgx) {
    svg_can.background(color(PAL[0]));
  }

  for (let y = BD; y <= SH - BD; y += W1_YINC) {
    for (let i = 0; i < 3; i++) {
      if (y >= BD * ((2 - i) * BOY + 1.5) && y <= SH - BD * ((2 - i) * BOY + 1.5)) {
        stroke(color(PAL[i + 1]));
        if (svgx) {
          svg_can.stroke(color(PAL[i + 1]));
        }

        test_waveline = wavepath(y, BD * (i * BOX + 1), 50, 50, WMAP1, frameCount);

        test_waveline.forEach((obj) => {
          obj.y += WMAP2.getAmp(obj, frameCount + i * W2_Y_OFF_PHASE) * W2_Y_OFF;
        });

        draw_path_curve(test_waveline);
      }
    }
  }

  if (svgx) {
    svg_can.save("Bleaker_FluidEdge_" + $fx.iteration + ".svg");
    svg_can.clear();
    svgx = false;
  }

  if (saving_loop) {
    if (frameCount % 2 == 0) {
      saveCanvas("Bleaker_FluidEdge_" + $fx.iteration + "_" + saved_loop_frames, "png");
      saved_loop_frames++;
    }
    if (saved_loop_frames >= 400) {
      saving_loop = false;
      frameRate(60);
    }
  }

  if ($fx.isPreview) {
    noLoop();
    looping = false;
    $fx.preview();
  }
}

function rand_p(frac) {
  return { x: random(SW * frac, SW * (1 - frac)), y: random(SH * frac, SH * (1 - frac)) };
}

function pdist(p1, p2) {
  return dist(p1.x, p1.y, p2.x, p2.y);
}

function draw_path_curve(path) {
  beginShape();
  for (let p of path) {
    curveVertex(p.x * mx, p.y * mx);
  }
  endShape();

  if (svgx) {
    svg_can.beginShape();
    for (let p of path) {
      svg_can.curveVertex(p.x * mx, p.y * mx);
    }
    svg_can.endShape();
  }
}

function keyPressed() {
  if (key == "2" || key == "4" || key == "6" || key == "8") {
    resize(key);
  }
  if (key == "0") {
    resize(10);
  }
  if (key == "s") {
    saveCanvas("Bleaker_FluidEdge_" + $fx.iteration, "png");
  }
  if (key == "l") {
    saving_loop = true;
    frameRate(10);
    saved_loop_frames = 0;
  }
  if (key == "x") {
    svgx = true;
  }

  if (key == " ") {
    if (looping) {
      noLoop();
      looping = false;
    } else {
      loop();
      looping = true;
    }
  }
}

function resize(key) {
  mx = int(key);
  draw_setup = true;
}

class WaveMap {
  constructor(num_big, num_med, num_small) {
    this.waves = this.initializeWaves(num_big, num_med, num_small);
    this.minmaxes = this.getMinMaxes();
  }

  initializeWaves(num_big, num_med, num_small) {
    let waves = [];

    for (let i = 0; i < num_big; i++) {
      waves.push(new Wave(random(20, 40), random(SW / 4, SW), PERIOD, random(TWO_PI), rand_p(-1)));
    }

    for (let i = 0; i < num_med; i++) {
      waves.push(
        new Wave(random(10, 30), random(SW / 10, SW / 2), PERIOD, random(TWO_PI), rand_p(-1))
      );
    }

    for (let i = 0; i < num_small; i++) {
      waves.push(
        new Wave(random(5, 10), random(SW / 30, SW / 10), PERIOD, random(TWO_PI), rand_p(-0.5))
      );
    }

    return waves;
  }

  getMinMaxes() {
    let min_slope = Infinity;
    let max_slope = 0;
    let min_amp = Infinity;
    let max_amp = 0;
    for (let i = 0; i < 5000; i++) {
      let pa = { x: int(random(-SW * 2, SW * 2)), y: int(random(-SH * 2, SH * 2)) };
      let pb = { x: pa.x - SW * 0.01, y: pa.y };

      let ampa = this.getRawAmp(pa, 1);
      let ampb = this.getRawAmp(pb, 1);

      max_amp = max(max_amp, ampa);
      min_amp = min(min_amp, ampa);

      max_slope = max(max_slope, ampb - ampa);
      min_slope = min(min_slope, ampb - ampa);
    }
    return { min_amp: min_amp, max_amp: max_amp, min_slope: min_slope, max_slope: max_slope };
  }

  getRawAmp(point, frame) {
    let amp = 0;
    for (let i = 0; i < this.waves.length; i++) {
      amp += this.waves[i].getAmp(point, frame);
    }
    return amp;
  }

  getAmp(point, frame) {
    if (this.waves.length > 0) {
      return (
        map(this.getRawAmp(point, frame), this.minmaxes.min_amp, this.minmaxes.max_amp, 0, 1) - 0.5
      );
    } else {
      return 0;
    }
  }

  getSlope(point, frame) {
    let pa = { x: point.x, y: point.y };
    let pb = { x: point.x - SW * 0.01, y: point.y };

    let ampa = this.getRawAmp(pa, frame);
    let ampb = this.getRawAmp(pb, frame);

    return map(ampb - ampa, this.minmaxes.min_slope, this.minmaxes.max_slope, -1, 1);
  }
}

class Wave {
  constructor(amplitude, wavelength, period, phaseshift, origin_point) {
    this.amp = amplitude;
    this.wl = wavelength;
    this.pd = period;
    this.ps = phaseshift;
    this.op = origin_point;
  }

  getAmp(point, frame) {
    return (
      this.amp *
      sin((TWO_PI / this.wl) * pdist(point, this.op) - frame * (TWO_PI / this.pd) + this.ps)
    );
  }
}

function wavepath(y, bord, segs, max_height, wavemap, frame) {
  let line = [];
  for (let xi = 0; xi <= segs; xi += 1) {
    let x = bord + (SW - 2 * bord) * (xi / segs);
    let p = { x: x, y: y };
    let amp = wavemap.getAmp(p, frame);
    line.push({ x: x, y: y + max_height * amp });
  }
  return line;
}
