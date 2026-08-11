// 5 Color Battle Cellular Automaton in p5.js
// Internal canvas: 1200x800 fixed
// Display: scales down to fit smaller screens (CSS transform only)
// fxhash v4.2.0 ($fx.rand) compatible determinism

"use strict";

// --------------------------------------------------
// fxhash v4 ($fx.rand) / legacy fxrand / local fallback
function _fxrand() {
  if (typeof window !== "undefined") {
    if (window.$fx && typeof window.$fx.rand === "function") return window.$fx.rand();
    if (typeof window.fxrand === "function") return window.fxrand();
  }
  return Math.random();
}

// fxrand-based custom RNG (DJ-code style)
function myRandom(a, b) {
  const r = _fxrand();
  if (Array.isArray(a)) return a[Math.floor(r * a.length)];
  if (a === undefined && b === undefined) return r;
  if (b === undefined) return r * a;
  return r * (b - a) + a;
}

// --------------------------------------------------
// Fixed internal size (always)
const FIX_W = 1200;
const FIX_H = 800;

let W = FIX_W,
  H = FIX_H;

// State encoding:
// 0 = dead
// 1..5 = colors
let grid, nextGrid;

// Trails: store last-team + intensity
// teamTrail: 0 none, 1-5
// trailVal: 0..1 (decays each step)
let teamTrail, trailVal;

let paused = false;
let stepsPerSecond = 20;

// stop after N frames
const MAX_FRAMES = 1000;

// Helper: HEX -> RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : null;
}

// 6 color palette sets
const COLOR_PALETTES = [
  ["#006d77", "#83c5be", "#edf6f9", "#ffddd2", "#e29578"],
  ["#ff9f1c", "#ffbf69", "#ffffff", "#cbf3f0", "#2ec4b6"],
  ["#011627", "#fdfffc", "#2ec4b6", "#e71d36", "#ff9f1c"],
  ["#0d3b66", "#faf0ca", "#f4d35e", "#ee964b", "#f95738"],
  ["#0b132b", "#1c2541", "#3a506b", "#5bc0be", "#6fffe9"],
  ["#2b2d42", "#8d99ae", "#edf2f4", "#ef233c", "#d90429"],
];

let COLORS = [];
let selectedPaletteIndex = 0;

// Initialize colors from random palette (deterministic via myRandom/_fxrand)
function updateColors() {
  selectedPaletteIndex = Math.floor(myRandom() * COLOR_PALETTES.length);
  COLORS = COLOR_PALETTES[selectedPaletteIndex].map((hex) => hexToRgb(hex));
}

function setup() {
  createCanvas(W, H);
  pixelDensity(1);
  noSmooth();
  frameRate(60);

  applyCanvasScale();

  // Deterministic seeds:
  // - We do NOT use p5 random() for decisions (only myRandom).
  // - We set randomSeed/noiseSeed so p5 noise() is deterministic per hash.
  const s1 = (myRandom() * 4294967296) >>> 0;
  const s2 = (myRandom() * 4294967296) >>> 0;
  randomSeed(s1);
  noiseSeed(s2);

  updateColors();
  initGrids();
  setFxhashFeatures();
}

function draw() {
  background(0);

  // Auto-stop
  if (!paused && frameCount >= MAX_FRAMES) paused = true;

  // Frame-based stepping (deterministic)
  const stepEvery = Math.max(1, Math.round(60 / stepsPerSecond));
  if (!paused && frameCount % stepEvery === 0) {
    stepAutomaton();
  }

  render();

  // Optional: fxhash preview pulse is handled by fxhash runtime; no need to call here.
}

function windowResized() {
  // Never resize the simulation canvas.
  // Only rescale its display to fit smaller screens.
  applyCanvasScale();
}

function applyCanvasScale() {
  const vw = windowWidth;
  const vh = windowHeight;

  // small padding so it doesn't touch edges
  const pad = 16;

  const sx = (vw - pad * 2) / FIX_W;
  const sy = (vh - pad * 2) / FIX_H;
  const s = constrain(Math.min(sx, sy), 0.05, 1); // downscale only

  // center it
  const left = (vw - FIX_W * s) * 0.5;
  const top = (vh - FIX_H * s) * 0.5;

  const cnv = document.querySelector("canvas");
  if (!cnv) return;

  cnv.style.position = "absolute";
  cnv.style.left = `${left}px`;
  cnv.style.top = `${top}px`;
  cnv.style.transformOrigin = "top left";
  cnv.style.transform = `scale(${s})`;

  document.body.style.margin = "0";
  document.body.style.background = "black";
  document.body.style.overflow = "hidden";
}

function initGrids() {
  grid = make2D(W, H, 0);
  nextGrid = make2D(W, H, 0);

  teamTrail = make2D(W, H, 0);
  trailVal = make2D(W, H, 0);

  // Initialize: 5 colors fully random
  // fillProb varies based on noise(x, y)
  const noiseScale = 0.004;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const noiseVal = noise(x * noiseScale, y * noiseScale);
      const fillProb = noiseVal * 0.33 + 0.02;

      // IMPORTANT: deterministic RNG via myRandom (=> $fx.rand / fxrand)
      if (myRandom() < fillProb) {
        grid[x][y] = 1 + Math.floor(myRandom() * 5);

        const t = teamOf(grid[x][y]);
        teamTrail[x][y] = t;
        trailVal[x][y] = 1.0;
      }
    }
  }
}

function stepAutomaton() {
  const decay = 0.94;

  // decay trails
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      trailVal[x][y] *= decay;
      if (trailVal[x][y] < 0.01) {
        trailVal[x][y] = 0;
        teamTrail[x][y] = 0;
      }
    }
  }

  // compute next grid
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const s = grid[x][y];

      // counts[1..5]
      const counts = neighborCountsBySpecies(x, y);
      let ns = 0;

      if (s !== 0) {
        // survival per species
        const same = counts[s];

        // conflict override: dies if >=5 neighbors of other colors combined
        let otherColorsNeighbors = 0;
        for (let i = 1; i <= 5; i++) {
          if (i !== s) otherColorsNeighbors += counts[i];
        }
        const conflict = otherColorsNeighbors >= 5;

        if (!conflict && (same === 2 || same === 3 || same === 4)) {
          ns = s;
        } else {
          ns = 0;
        }
      } else {
        // birth: any color with exactly 3 or 4 neighbors can be born
        const candidates = [];
        for (let sp = 1; sp <= 5; sp++) {
          if (counts[sp] === 3 || counts[sp] === 4) {
            candidates.push({ color: sp, neighbors: counts[sp] });
          }
        }

        if (candidates.length === 0) {
          ns = 0;
        } else if (candidates.length === 1) {
          ns = candidates[0].color;
        } else {
          // Choose color with more neighbors, break ties deterministically via myRandom
          candidates.sort((a, b) => b.neighbors - a.neighbors);
          const maxNeighbors = candidates[0].neighbors;
          const top = candidates.filter((c) => c.neighbors === maxNeighbors);
          const chosen = top[Math.floor(myRandom() * top.length)];
          ns = chosen.color;
        }
      }

      nextGrid[x][y] = ns;

      // update trail if alive
      if (ns !== 0) {
        const t = teamOf(ns);
        teamTrail[x][y] = t;
        trailVal[x][y] = 1.0;
      }
    }
  }

  // swap
  const tmp = grid;
  grid = nextGrid;
  nextGrid = tmp;
}

function render() {
  loadPixels();

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = 4 * (x + y * W);
      const s = grid[x][y];

      let r = 0,
        g = 0,
        b = 0;

      // trail first (only when dead)
      if (trailVal[x][y] > 0 && s === 0) {
        const t = teamTrail[x][y];
        const a = trailVal[x][y];
        if (t >= 1 && t <= 5) {
          const c = COLORS[t - 1];
          r = c[0] * a;
          g = c[1] * a;
          b = c[2] * a;
        }
      }

      // alive overrides
      if (s !== 0) {
        if (s >= 1 && s <= 5) {
          const c = COLORS[s - 1];
          r = c[0];
          g = c[1];
          b = c[2];
        }
      }

      pixels[idx + 0] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = 255;
    }
  }

  updatePixels();
}

function neighborCountsBySpecies(x, y) {
  const counts = new Array(6).fill(0);

  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;

      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= W || ny < 0 || ny >= H) continue; // edges = dead

      const s = grid[nx][ny];
      if (s !== 0 && s >= 1 && s <= 5) counts[s]++;
    }
  }
  return counts;
}

function teamOf(state) {
  if (state >= 1 && state <= 5) return state;
  return 0;
}

// fxhash features / metadata (v4 compatible)
function setFxhashFeatures() {
  const stepEvery = Math.max(1, Math.round(60 / stepsPerSecond));
  const feats = {
    Palette: `Set ${selectedPaletteIndex + 1}`,
    "Internal Canvas": `${W}x${H}`,
    "Steps/s": stepsPerSecond,
    "Step Every (frames)": stepEvery,
    "Max Frames": MAX_FRAMES,
  };

  if (typeof window !== "undefined" && window.$fx && typeof window.$fx.features === "function") {
    window.$fx.features(feats);
  } else {
    // legacy fallback
    window.$fxhashFeatures = feats;
  }
}

function make2D(w, h, val) {
  const a = new Array(w);
  for (let x = 0; x < w; x++) {
    a[x] = new Array(h);
    for (let y = 0; y < h; y++) a[x][y] = val;
  }
  return a;
}

// optional (fxhash provides capture/preview events itself)
function fxpreview() {}
