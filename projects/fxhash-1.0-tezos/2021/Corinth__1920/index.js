const block_size = 50000000;
let blocks = 0;
let counts = [];
let delta = [];
let max_delta = 0;
let min_delta = block_size;

// Initial clifford params
let x = 0.1; let y = 0.2;

// FXHASH parameters
let parameters;
let render_type;
let alpha;
let attractor;

class ColourScheme {
  /**
   * @param {p5.Color[]} g1 
   * @param {p5.Color[]} g2 
   * @param {string} name 
   * @param {p5.Color} background 
   */
  constructor(g1, g2, name, background) {
    this.gradient1 = g1
    this.gradient2 = g2
    this.name = name
    this.background = background
  }
}

/**
 * @type {ColourScheme}
 */
let scheme;

function setup() {
  const size = Math.min(640, document.documentElement.clientWidth, document.documentElement.clientHeight);
  createCanvas(size, size);
  // Initialise counts to zeros
  zeros(counts, width, height);
  zeros(delta, width, height);

  pixelDensity(1);
  noLoop();

  // Setup fxhash parameters

  const render_select = fxrand();
  if (render_select < 0.95) {
    render_type = 'bilinear';
  } else {
    render_type = 'debug';
  }

  scheme = getColourScheme(fxrand());
  changeBackground(scheme.background);

  alpha = clamp(dist_normal(fxrand(), 0.3, 0.1), 0.1, 0.5);

  let alpha_label;
  if (alpha < 0.25) {
    alpha_label = 'low';
  } else if (alpha < 0.35) {
    alpha_label = 'medium';
  } else {
    alpha_label = 'high';
  }

  parameters = {};

  const attractor_select = fxrand();
  let attractor_name;
  if (attractor_select < 0.5) {
    attractor_name = 'rhea';
    attractor = populateRhea;
    do {
      parameters.a = uniform(fxrand(), 1.75, 3.0) * sample(fxrand(), [-1, 1]);
      parameters.b = uniform(fxrand(), 1.75, 3.0) * sample(fxrand(), [-1, 1]);
      parameters.c = uniform(fxrand(), 1.1, 2.0) * sample(fxrand(), [-1, 1]);
      parameters.d = uniform(fxrand(), 1.1, 2.0) * sample(fxrand(), [-1, 1]);
    } while (test_closed(parameters, attractor))
  } else {
    attractor_name = 'phoebe';
    attractor = populatePhoebe;
    do {
      parameters.a = uniform(fxrand(), 2.0, 3.0) * sample(fxrand(), [-1, 1]);
      parameters.b = uniform(fxrand(), 2.0, 3.0) * sample(fxrand(), [-1, 1]);
      parameters.c = uniform(fxrand(), 0.9, 1.6) * sample(fxrand(), [-1, 1]);
      parameters.d = uniform(fxrand(), 0.9, 1.6) * sample(fxrand(), [-1, 1]);
    } while (test_closed(parameters, attractor))
  }

  console.log(parameters);

  window.$fxhashFeatures = {
    "Render": render_type,
    "Colour": scheme.name,
    "Opacity": alpha_label,
    "Attractor": attractor_name
  }
  console.log(window.$fxhashFeatures);
}

/** 
 * Initialise matrix to all zeros
 * @param {any[]} A matrix to initialise
 * @param {number} w width
 * @param {number} h height
 */
function zeros(A, w, h) {
  for (let x = 0; x < w; x++) {
    A[x] = []; // create nested array
    for (let y = 0; y < h; y++) {
      A[x][y] = 0;
    }
  }
}

/**
 * Implementation of LinearSegmentedColormap from mpl
 * @param {p5.Color[]} colours List of colours
 * @param {number} x [0, 1] normalised interpolation index
 */
function colourmap(colours, x) {
  const n = colours.length;
  // Which pair of colours are we interpolating between
  const bin = Math.floor(x * (n - 1));
  // What is our [0, 1] normalised interpolation index for this bin.
  const bin_width = 1 / (n - 1);
  const bin_interp = (x - bin_width * bin) / bin_width;
  if (bin >= n - 1) {
    return colours[n - 1];
  } else if (bin < 0) {
    return colours[0];
  } else {
    return lerpColor(colours[bin], colours[bin + 1], bin_interp);
  }
}

/**
 * Clamp x in [a, b]
 * @param {number} x value to clamp
 * @param {number} a min
 * @param {number} b max
 */
function clamp(x, a, b) {
  return Math.min(Math.max(x, a), b);
}

/**
 * Take x in [a, b], normalise to [0, 1]
 * @param {number} x value to normalise
 * @param {number} a min
 * @param {number} b max
 */
function normalise(x, a, b) {
  return (x - a) / (b - a);
}

/**
 * Take x in [a, b], normalise to [0, 1] with clamping.
 * @param {number} x value to normalise
 * @param {number} a min
 * @param {number} b max
 */
function nclamp(x, a, b) {
  return clamp(normalise(x, a, b), 0, 1);
}

/**
 * Map [0, 1] normalised random number to [a, b]
 * @param {number} x value to normalise
 * @param {number} a min
 * @param {number} b max
 */
function uniform(x, a, b) {
  return a + x * (b - a);
}

/**
 * Sample from A with random number x
 * @param {number} x selection value
 * @param {number[]} A set
 */
function sample(x, A) {
  return A[Math.floor(clamp(x, 0, 1) * A.length)];
}

/**
 * Table lookup for evenly spaced values (assuming [0, 1] normalised) with interpolation
 * @param {number[]} T Table to lookup
 * @param {number} x [0, 1] normalised interpolation index
 */
function interp1(x, T) {
  const n = T.length;
  // Which pair of values are we interpolating between
  const bin = Math.floor(x * (n - 1));
  // What is our [0, 1] normalised interpolation index for this bin.
  const bin_width = 1 / (n - 1);
  const bin_interp = (x - bin_width * bin) / bin_width;
  if (bin >= n - 1) {
    return T[n - 1];
  } else if (bin < 0) {
    return T[0];
  } else {
    return T[bin] * (1 - bin_interp) + T[bin + 1] * bin_interp;
  }
}

/**
 * Map [0, 1] normalised random number to normal distribution
 * @param {number} x value to normalise
 * @param {number} mu mean
 * @param {number} sig max
 */
function dist_normal(x, mu, sig) {
  // Inverse error function tabluated values. (maxing at 3 sigma)
  const inverf = [0, 0.0889, 0.1791, 0.2725, 0.3708, 0.4769, 0.5951, 0.7329, 0.9062, 1.163, 3]
  if (x > 0.5) {
    // Renormalise s to [0, 1]
    // s == 0 --> return mu
    // s == 1 --> return mu + 3 sig
    let s = clamp(2 * x - 1, 0, 1);
    return mu + interp1(s, inverf) * sig * 1.4142;
  } else {
    let s = clamp(1 - 2 * x, 0, 1);
    return mu - interp1(s, inverf) * sig * 1.4142;
  }
}

/**
 * Change document background to p5 colour.
 * @param {p5.Color} colour Colour to set background to
 */
function changeBackground(colour) {
  document.body.style.background = colour.toString('#rrggbb');
}

/**
 * Render density matrix in bilinear mode.
 * @param {ColourScheme} colours 
 * @param {number} count Total points count.
 */
function renderDebug(colours, count) {
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let v = 1 - Math.exp(- alpha * counts[x][y] / count * width * height);
      const pix = (x + y * width) * 4;
      let c1lerp = colourmap(colours.gradient1, 1 - y / height)
      let c2lerp = colourmap(colours.gradient2, 1 - y / height);
      let c = lerpColor(c1lerp, c2lerp, x / width);
      pixels[pix + 0] = red(lerpColor(c, colours.background, v));
      pixels[pix + 1] = green(lerpColor(c, colours.background, v));
      pixels[pix + 2] = blue(lerpColor(c, colours.background, v));
      pixels[pix + 3] = 255;
    }
  }
  updatePixels()
}


/**
 * Render density matrix in bilinear mode.
 * @param {ColourScheme} colours 
 * @param {number} count Total points count.
 * @param {number} exponent Exponent for delta contrast.
 */
function renderBilinear(colours, count, exponent) {
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let v = 1 - Math.exp(- alpha * counts[x][y] / count * width * height);
      let d = Math.pow(delta[x][y], exponent);
      const pix = (x + y * width) * 4;
      let c1lerp = colourmap(colours.gradient1, v)
      let c2lerp = colourmap(colours.gradient2, v);
      let c = lerpColor(c1lerp, c2lerp, d);
      pixels[pix + 0] = red(c);
      pixels[pix + 1] = green(c);
      pixels[pix + 2] = blue(c);
      pixels[pix + 3] = 255;
    }
  }
  updatePixels()
}

/**
 * Build density matrix with modified clifford attractor (sin(a**2))
 * @param {object} parameters
 * @param {number} n How many iterations
 * @param {number[][]} count_array
 * @param {number[][]} delta_array
 */
function populateRhea(parameters, n, count_array, delta_array) {
  a = parameters.a;
  b = parameters.b;
  c = parameters.c;
  d = parameters.d;
  const x_width = 1 + Math.abs(c);
  const y_width = 1 + Math.abs(d);
  const w = count_array.length; const h = count_array[0].length;
  for (let i = 0; i < n; i++) {
    let xn = (Math.sin(a * y ** 2 * y_width) + c * Math.cos(a * x * x_width)) / x_width;
    let yn = (Math.sin(b * x ** 2 * x_width) + d * Math.cos(b * y * y_width)) / y_width;
    let dx = xn - x; let dy = yn - y;
    x = xn; y = yn;
    let xp = Math.floor((1 + xn) * w / 2);
    let yp = Math.floor((1 + yn) * h / 2);
    count_array[xp][yp] += 1;
    delta_array[xp][yp] += (dx ** 2 + dy ** 2);
  }
}


/**
 * Build density matrix with modified clifford attractor (sin(a**2) ++ cos(a**2))
 * @param {object} parameters
 * @param {number} n How many iterations
 * @param {number[][]} count_array
 * @param {number[][]} delta_array
 */
function populatePhoebe(parameters, n, count_array, delta_array) {
  a = parameters.a;
  b = parameters.b;
  c = parameters.c;
  d = parameters.d;
  const x_width = 1 + Math.abs(c);
  const y_width = 1 + Math.abs(d);
  const w = count_array.length; const h = count_array[0].length;
  for (let i = 0; i < n; i++) {
    let xn = (Math.sin(a * y ** 2 * y_width) + c * Math.cos(a * x ** 2 * x_width)) / x_width;
    let yn = (Math.sin(b * x ** 2 * x_width) + d * Math.cos(b * y ** 2 * y_width)) / y_width;
    let dx = xn - x; let dy = yn - y;
    x = xn; y = yn;
    let xp = Math.floor((1 + xn) * w / 2);
    let yp = Math.floor((1 + yn) * h / 2);
    count_array[xp][yp] += 1;
    delta_array[xp][yp] += (dx ** 2 + dy ** 2);
  }
}


/**
 * Return a colour scheme with two linear segmented gradients, a name and a background
 * @param {number} select [0, 1] normalised random number for selecting colour scheme.
 * @returns {ColourScheme}
 */
function getColourScheme(select) {
  const bg_light = color(255, 250, 245);
  const c_reds = [bg_light, color(252, 181, 154), color(247, 93, 66), color(187, 20, 25), color(103, 0, 12)];
  const c_blues = [bg_light, color(192, 216, 237), color(96, 166, 209), color(23, 100, 171), color(8, 48, 107)];
  const c_RdPu = [bg_light, color(251, 191, 190), color(240, 90, 158), color(153, 1, 123), color(73, 0, 106)];
  const c_PuRd = [bg_light, color(210, 180, 215), color(225, 85, 165), color(184, 10, 78), color(103, 0, 31)];
  const c_BuPu = [bg_light, color(186, 207, 228), color(140, 138, 192), color(133, 44, 143), color(77, 0, 75)];
  const c_PuBu = [bg_light, color(202, 206, 228), color(99, 162, 203), color(4, 103, 162), color(2, 56, 88)];
  const c_greys = [bg_light, color(110, 100, 120), color(20, 0, 40)];


  if (select < 0.125) {
    return new ColourScheme(c_greys, c_reds, 'aion', bg_light);
  } else if (select < 0.25) {
    return new ColourScheme(c_reds, c_blues, 'eros', bg_light);
  } else if (select < 0.375) {
    return new ColourScheme(c_blues, c_reds, 'erebus', bg_light);
  } else if (select < 0.5) {
    return new ColourScheme(c_reds, c_BuPu, 'hypnos', bg_light);
  } else if (select < 0.625) {
    return new ColourScheme(c_PuRd, c_blues, 'nesoi', bg_light);
  } else if (select < 0.75) {
    return new ColourScheme(c_BuPu, c_blues, 'aether', bg_light);
  } else if (select < 0.875) {
    return new ColourScheme(c_PuBu, c_PuRd, 'nyx', bg_light);
  } else {
    return new ColourScheme(c_RdPu, c_blues, 'chaos', bg_light);
  }
}

/**
 * Check if particular paramater set results in a nearly blank output.
 * @param p Parameters
 * @param f The function
 */
function test_closed(p, f) {
  let c = [];
  let d = [];
  const size = 100;
  const bs = 100000;
  zeros(c, size, size);
  zeros(d, size, size);
  // Populate the counts.
  f(p, bs, c, d);
  // Find max count
  let max_count = 0;
  for (x = 0; x < size; x++) {
    for (y = 0; y < size; y++) {
      if (c[x][y] > max_count) {
        max_count = c[x][y];
      }
    }
  }

  return max_count > 1000;
}



function draw() {
  attractor(parameters, block_size, counts, delta);

  // Normalise delta values 
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Don't consider the unset deltas when calculating max and min.
      if (counts[x][y] != 0) {
        delta[x][y] = delta[x][y] / counts[x][y];
      }
    }
  }

  // Render
  if (render_type === 'bilinear') {
    renderBilinear(scheme, block_size, 0.7);
  } else {
    renderDebug(scheme, block_size);
  }
}