/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./utils.js
const getLayout = () => {
  const r = $fx.rand();
  if (r < 0.2) return "landscape";
  if (r < 0.4) return "portrait";
  return "square";
};

const getDensity = () => {
  const r = $fx.rand();
  if (r < 0.15) return { label: "light", iterations: 1000 };
  if (r < 0.5) return { label: "heavy", iterations: 100000 };
  return { label: "normal", iterations: 10000 };
};

const getAlpha = (wispy = false) => (wispy ? 0.4 : 0.8 + $fx.rand() * 0.2);

const getCanvasWidth = (layout) =>
  ["portrait", "square"].includes(layout) ? "auto" : "100vh";

const getCanvasHeight = (layout) => (layout === "landscape" ? "auto" : "100vh");

const chooseColor = (palette) =>
  palette[Math.floor($fx.rand() * palette.length)];

const chooseColorExcept = (color, palette) =>
  palette.filter((c) => c !== color)[
    Math.floor($fx.rand() * (palette.length - 1))
  ];

const takeScreenshot = (canvas) => {
  const a = document.createElement("a");
  a.href = canvas.toDataURL();
  a.download = "fx_impressions.png";
  a.click();
  a.remove();
};



;// CONCATENATED MODULE: ./walker.js


const createWalker = (ctx, x, y, { palette, bg, wispy, density }) => {
  const walker = {
    x,
    y,
    color: chooseColorExcept(bg, palette),
    display: () => {
      ctx.fillStyle = walker.color;
      ctx.fillRect(walker.x, walker.y, 1, getAlpha(wispy));
    },
    step: () => {
      const x = Math.floor($fx.rand() * 3) - 1;
      const y = Math.floor($fx.rand() * 3) - 1;
      walker.x += x;
      walker.y += y;
    },
    reset: () => {
      if (density.label === "heavy") walker.color = chooseColor(palette);
      else if (density.label === "light")
        walker.color = chooseColorExcept(walker.color, palette);
      else walker.color = $fx.rand() < 0.1 ? bg : chooseColorExcept(bg, palette);
      walker.x = x;
      walker.y = y;
    },
  };
  return walker;
};

;// CONCATENATED MODULE: ./index.js



const palettes = [
  ["#8E7AB5", "#B784B7", "#E493B3", "#EEA5A6"],
  ["#D7E4C0", "#C6DCBA", "#BBC3A4", "#B3A398"],
  ["#B4B4B8", "#C7C8CC", "#E3E1D9", "#F2EFE5"],
  ["#E1F0DA", "#D4E7C5", "#BFD8AF", "#99BC85"],
  ["#F5EEE6", "#FFF8E3", "#F3D7CA", "#E6A4B4"],
  ["#F9EFDB", "#EBD9B4", "#9DBC98", "#638889"],
  ["#D9EDBF", "#FFB996", "#FFCF81", "#FDFFAB"],
];

// setup features
const paletteIndex = Math.floor($fx.rand() * palettes.length);
const palette = palettes[paletteIndex];
const bg = palette[Math.floor($fx.rand() * palette.length)];

const layout = $fx.rand() < 0.5 ? "landscape" : "portrait"; // getLayout();

const density = { label: "light", iterations: 1000 }; // getDensity();
const isHeavy = density.label === "heavy";
const isLight = density.label === "light";

const wispy = $fx.rand() < 0.1;

window.$fxhashFeatures = {
  layout,
  palette: paletteIndex + 1,
  density: density.label,
  wispy: wispy,
};

// setup canvas
const width = ["landscape", "square"].includes(layout) ? 1024 : 512;
const height = ["portrait", "square"].includes(layout) ? 1024 : 512;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = width;
ctx.canvas.height = height;

document.getElementById("canvas").style.width = getCanvasWidth(layout);
document.getElementById("canvas").style.height = getCanvasHeight(layout);

ctx.fillStyle = bg;
ctx.fillRect(0, 0, width, height);

// triggers
window.paused = false;

const pause = () => {
  window.paused = true;
};

const unpause = () => {
  window.paused = false;
  draw();
};

document.addEventListener("keydown", (e) => {
  if (e.key === "s") takeScreenshot(canvas);
  if (e.key === " ") {
    if (paused) unpause();
    else pause();
  }
});

const walker = createWalker(ctx, width / 2, height / 2, {
  palette,
  bg,
  wispy,
  density,
});

let count = 0;
const maxSteps = isHeavy ? 400 : 1000;

const draw = () => {
  if (window.paused) return;

  if (count >= maxSteps) {
    $fx.preview();
    return;
  }

  if (isLight && walker.color === bg) {
    if ($fx.rand() < 0.05) {
      walker.reset();
    }
  }

  if (walker.x < 0 || walker.x > width || walker.y < 0 || walker.y > height)
    walker.reset();

  for (let i = 0; i < density.iterations; i++) {
    walker.step();
    walker.display();
  }

  count++;
  requestAnimationFrame(draw);
};

draw();

/******/ })()
;