/*
  Johan Karlsson, 2020
  https://twitter.com/DonKarlssonSan
  MIT License, see Details View
*/
let canvas;
let ctx;
let w, h;
let simplex;

function setup() {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  reset();
  window.addEventListener("resize", () => {
    reset();
    draw();
  });
  canvas.addEventListener("click", draw);
}

function reset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function draw() {
  simplex = new SimplexNoise();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  drawSquares();
}
function drawSquares() {
  let size = Math.random() * 80 + 20;
  let baseHueOffset = Math.random() * 360;
  for (let x = 0; x < w + size; x += size) {
    for (let y = 0; y < h + size; y += size) {
      drawSquare(x, y, size, baseHueOffset);
    }
  }
}

function drawSquare(x, y, size, baseHueOffset) {
  ctx.save();
  let randomHueOffset = Math.random() * 10;
  let hue = (x + y) / 8 + 140 + randomHueOffset + baseHueOffset;
  let l = Math.random() * 30 + 35;
  let color = `hsla(${hue}, 80%, ${l}%, 0.9)`;
  ctx.fillStyle = color;
  ctx.strokeStyle = "rgba(127, 127, 127, 0.5)";
  ctx.beginPath();
  ctx.moveTo(...addNoise(x - size / 2, y - size / 2, size));
  ctx.lineTo(...addNoise(x + size / 2, y - size / 2, size));
  ctx.lineTo(...addNoise(x + size / 2, y + size / 2, size));
  ctx.lineTo(...addNoise(x - size / 2, y + size / 2, size));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.clip();
  ctx.translate(x, y);
  let flipX = Math.random() > 0.5 ? -1 : 1;
  let flipY = Math.random() > 0.5 ? -1 : 1;
  let cx = size / 2 * flipX;
  let cy = size / 2 * flipY;
  let maxR = Math.sqrt(size * size * 2);
  let xOffset = (Math.random() - 0.5) * size * 0.3;
  let yOffset = (Math.random() - 0.5) * size * 0.3;

  let nrOrCircles = Math.random() * size * size * 0.05;
  for (let i = 0; i < nrOrCircles; i++) {
    let r = Math.random() * maxR;
    let c = Math.random() * 127 + 64;
    ctx.strokeStyle = `rgba(${c}, ${c}, ${c}, 0.09)`;
    ctx.beginPath();
    ctx.arc(cx + xOffset, cy + yOffset, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}

function addNoise(x, y, size) {
  let zoom = 400;
  let offset = 9000;
  let angle = (simplex.noise2D(x / zoom, y / zoom) + 1) * 0.5 * Math.PI * 2;
  let r = (simplex.noise2D(x / zoom + offset, y / zoom + offset) + 1) * size * 0.05;
  let newX = x + Math.cos(angle) * r;
  let newY = y + Math.sin(angle) * r;
  return [newX, newY];
}


setup();
draw();