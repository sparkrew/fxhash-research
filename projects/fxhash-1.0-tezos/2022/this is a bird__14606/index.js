let a = 0;
let r = -100;
let palette;
let sw;
let rectW, rectH;
let rMult, aMult;
let rDeg;
let clrSwitch;
let strokeColor;
let maxNum;
let maxFill;
const palettes = [
  ["#fac901", "#ffffff", "#225095", "#dd0100", "#ffffff"], //mondrian
  ["#fce6bd", "#6c5029", "#c1301d", "#656581", "#e7a559"], //rafael
  ["#000407", "#185782", "#fdcf3c", "#f6e488", "#a1c899"], //van gogh
  ["#d03e03", "#193236", "#7f714a", "#b8a360", "#dc7809"], //munch
  ["#eff1ee", "#f9a705", "#c0a7e0", "#600d07", "#da2021", "#ebb628"], //o'keefe
  ["#f0f3ec", "#bf5b37", "#eed09e", "#b2cfd5", "#524f58", "#b2c245"], //magritte
  ["#fe938c", "#e6b89c", "#ead2ac", "#9cafb7", "#4281a4"],
  ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"],
  ["#ed6a5a", "#f4f1bb", "#9bc1bc", "#5ca4a9", "#e6ebe0"],
  ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
  ["#0b132b", "#1c2541", "#3a506b", "#5bc0be", "#6fffe9"],
  ["#003049", "#d62828", "#f77f00", "#fcbf49", "#eae2b7"],
  ["#bce784", "#5dd39e", "#348aa7", "#525174", "#513b56"],
  ["#000000", "#14213d", "#fca311", "#e5e5e5", "#ffffff"],
  ["#9c89b8", "#f0a6ca", "#efc3e6", "#f0e6ef", "#b8bedd"],
  ["#114b5f", "#028090", "#e4fde1", "#456990", "#f45b69"],
  ["#f2d7ee", "#d3bcc0", "#a5668b", "#69306d", "#0e103d"],
  ["#ff9f1c", "#ffbf69", "#ffffff", "#cbf3f0", "#2ec4b6"],
  ["#3d5a80", "#98c1d9", "#e0fbfc", "#ee6c4d", "#293241"],
  ["#06aed5", "#086788", "#f0c808", "#fff1d0", "#dd1c1a"],
  ["#011627", "#f71735", "#41ead4", "#fdfffc", "#ff9f1c"],
  ["#f6511d", "#ffb400", "#00a6ed", "#7fb800", "#0d2c54"],
  ["#d8dbe2", "#a9bcd0", "#58a4b0", "#373f51", "#1b1b1e"],
  ["#7bdff2", "#b2f7ef", "#eff7f6", "#f7d6e0", "#f2b5d4"],
  ["#2d3142", "#4f5d75", "#bfc0c0", "#ffffff", "#ef8354"],
  ["#13293d", "#006494", "#247ba0", "#1b98e0", "#e8f1f2"],
  ["#ffb997", "#f67e7d", "#843b62", "#0b032d", "#74546a"],
  ["#3d315b", "#444b6e", "#708b75", "#9ab87a", "#f8f991"],
  ["#cfdbd5", "#e8eddf", "#f5cb5c", "#242423", "#333533"],
  ["#083d77", "#ebebd3", "#f4d35e", "#ee964b", "#f95738"],
  ["#20bf55", "#0b4f6c", "#01baef", "#fbfbff", "#757575"],
  ["#ffbf00", "#e83f6f", "#2274a5", "#32936f", "#ffffff"],
  ["#292f36", "#4ecdc4", "#f7fff7", "#ff6b6b", "#ffe66d"],
  ["#540d6e", "#ee4266", "#ffd23f", "#3bceac", "#0ead69"],
  ["#c9cba3", "#ffe1a8", "#e26d5c", "#723d46", "#472d30"],
  ["#ffa69e", "#faf3dd", "#b8f2e6", "#aed9e0", "#5e6472"],
  ["#1be7ff", "#6eeb83", "#e4ff1a", "#e8aa14", "#ff5714"],
  ["#1b998b", "#2d3047", "#fffd82", "#ff9b71", "#e84855"],
  ["#8a00d4", "#d527b7", "#f782c2", "#f9c46b", "#e3e3e3"],
  ["#e74645", "#fb7756", "#facd60", "#fdfa66", "#1ac0c6"],
  ["#454d66", "#309975", "#58b368", "#dad873", "#efeeb4"],
  ["#272643", "#ffffff", "#e3f6f5", "#bae8e8", "#2c698d"],
  ["#361d32", "#543c52", "#f55951", "#edd2cb", "#f1e8e6"],
  ["#072448", "#54d2d2", "#ffcb00", "#f8aa4b", "#ff6150"],
  ["#12492f", "#0a2f35", "#f56038", "#f7a325", "#ffca7a"],
  ["#122c91", "#2a6fdb", "#48d6d2", "#81e9e6", "#fefcbf"],
  ["#27104e", "#64379f", "#9854cb", "#ddacf5", "#75e8e7"],
  ["#f7a400", "#3a9efd", "#3e4491", "#292a73", "#1a1b4b"],
  ["#ffa822", "#134e6f", "#ff6150", "#1ac0c6", "#dee0e6"],
];
function preload() {
  noiseSeed(fxrand() * 999999);
  randomSeed(fxrand() * 999999);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  palette = random(palettes);
  background(255);
  let bg = color(random(palette));
  bg.setAlpha(150);
  background(bg);
  if(random()>0.9) background(random([0, 255]));
  r = floor(random(-100, 0));
  sw = random(0.4, 0.8);
  strokeColor = 50;
  rectW = random(0.2, 0.5);
  rectH = random(0.25, 0.55);
  rMult = random(0.25, 0.5); 
  aMult = random([0.45, 0.9, 1.8, 2.7, 3.6]);
  rDeg = random(0.03, 0.09);
  clrSwitch = int(random(1, 100));
  maxNum = 9000;
  maxFill = random([.8,1.3])
  if (random() > 0.9) {
    clrSwitch = 0.1;
  }
}

function draw() {
  fill(random(palette));
  let w = 1;
  for (let j = 0; j < maxNum; j++) {
    let target = new p5.Vector(r * cos(a), r * sin(a));
    a += aMult;
    r += rMult; 
    console.log(rMult);
    if (target.x > (width / 2) * maxFill || target.y > (height / 2) * maxFill) break;
    target.x += width / 2;
    target.y += height / 2;
    if (j % clrSwitch == 0) fill(random(palette));
    stroke(strokeColor);
    strokeWeight(sw);
    push();
    translate(target.x, target.y);
    rotate(r * rDeg); 
    w *= 0.9975;
    ellipse(0, 0, r * rectW * w, r * rectH);
    pop();
  }
  noLoop();
}

