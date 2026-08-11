var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.lineCap = "round";

var width = 3000;
var height = 3000;

var colors = [
  ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
  ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b"],
  ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a"],
  ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58"],
  ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc"],
  ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634"],
  ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"],
  ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2"],
  ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951"],
  ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5"],
  ["#3fb8af", "#7fc7af", "#dad8a7", "#ff9e9d", "#ff3d7f"],
  ["#d9ceb2", "#948c75", "#d5ded9", "#7a6a53", "#99b2b7"],
  ["#ffffff", "#cbe86b", "#f2e9e1", "#1c140d", "#cbe86b"],
  ["#efffcd", "#dce9be", "#555152", "#2e2633", "#99173c"],
  ["#343838", "#005f6b", "#008c9e", "#00b4cc", "#00dffc"],
  ["#413e4a", "#73626e", "#b38184", "#f0b49e", "#f7e4be"],
  ["#ff4e50", "#fc913a", "#f9d423", "#ede574", "#e1f5c4"],
  ["#99b898", "#fecea8", "#ff847c", "#e84a5f", "#2a363b"],
  ["#655643", "#80bca3", "#f6f7bd", "#e6ac27", "#bf4d28"],
  ["#00a8c6", "#40c0cb", "#f9f2e7", "#aee239", "#8fbe00"],
  ["#351330", "#424254", "#64908a", "#e8caa4", "#cc2a41"],
  ["#554236", "#f77825", "#d3ce3d", "#f1efa5", "#60b99a"],
  ["#5d4157", "#838689", "#a8caba", "#cad7b2", "#ebe3aa"],
  ["#8c2318", "#5e8c6a", "#88a65e", "#bfb35a", "#f2c45a"],
  ["#fad089", "#ff9c5b", "#f5634a", "#ed303c", "#3b8183"],
  ["#ff4242", "#f4fad2", "#d4ee5e", "#e1edb9", "#f0f2eb"],
  ["#f8b195", "#f67280", "#c06c84", "#6c5b7b", "#355c7d"],
  ["#d1e751", "#ffffff", "#000000", "#4dbce9", "#26ade4"],
  ["#1b676b", "#519548", "#88c425", "#bef202", "#eafde6"],
  ["#5e412f", "#fcebb6", "#78c0a8", "#f07818", "#f0a830"],
  ["#bcbdac", "#cfbe27", "#f27435", "#f02475", "#3b2d38"],
  ["#452632", "#91204d", "#e4844a", "#e8bf56", "#e2f7ce"],
  ["#eee6ab", "#c5bc8e", "#696758", "#45484b", "#36393b"],
  ["#f0d8a8", "#3d1c00", "#86b8b1", "#f2d694", "#fa2a00"],
  ["#2a044a", "#0b2e59", "#0d6759", "#7ab317", "#a0c55f"],
  ["#f04155", "#ff823a", "#f2f26f", "#fff7bd", "#95cfb7"],
  ["#b9d7d9", "#668284", "#2a2829", "#493736", "#7b3b3b"],
  ["#bbbb88", "#ccc68d", "#eedd99", "#eec290", "#eeaa88"],
  ["#b3cc57", "#ecf081", "#ffbe40", "#ef746f", "#ab3e5b"],
  ["#a3a948", "#edb92e", "#f85931", "#ce1836", "#009989"],
  ["#300030", "#480048", "#601848", "#c04848", "#f07241"],
  ["#67917a", "#170409", "#b8af03", "#ccbf82", "#e33258"],
  ["#aab3ab", "#c4cbb7", "#ebefc9", "#eee0b7", "#e8caaf"],
  ["#e8d5b7", "#0e2430", "#fc3a51", "#f5b349", "#e8d5b9"],
  ["#ab526b", "#bca297", "#c5ceae", "#f0e2a4", "#f4ebc3"],
  ["#607848", "#789048", "#c0d860", "#f0f0d8", "#604848"],
  ["#b6d8c0", "#c8d9bf", "#dadabd", "#ecdbbc", "#fedcba"],
  ["#a8e6ce", "#dcedc2", "#ffd3b5", "#ffaaa6", "#ff8c94"],
  ["#3e4147", "#fffedf", "#dfba69", "#5a2e2e", "#2a2c31"],
  ["#fc354c", "#29221f", "#13747d", "#0abfbc", "#fcf7c5"],
  ["#cc0c39", "#e6781e", "#c8cf02", "#f8fcc1", "#1693a7"],
  ["#1c2130", "#028f76", "#b3e099", "#ffeaad", "#d14334"],
  ["#a7c5bd", "#e5ddcb", "#eb7b59", "#cf4647", "#524656"],
  ["#dad6ca", "#1bb0ce", "#4f8699", "#6a5e72", "#563444"],
  ["#5c323e", "#a82743", "#e15e32", "#c0d23e", "#e5f04c"],
  ["#edebe6", "#d6e1c7", "#94c7b6", "#403b33", "#d3643b"],
  ["#fdf1cc", "#c6d6b8", "#987f69", "#e3ad40", "#fcd036"],
  ["#230f2b", "#f21d41", "#ebebbc", "#bce3c5", "#82b3ae"],
  ["#b9d3b0", "#81bda4", "#b28774", "#f88f79", "#f6aa93"],
  ["#3a111c", "#574951", "#83988e", "#bcdea5", "#e6f9bc"],
  ["#5e3929", "#cd8c52", "#b7d1a3", "#dee8be", "#fcf7d3"],
  ["#1c0113", "#6b0103", "#a30006", "#c21a01", "#f03c02"],
  ["#000000", "#9f111b", "#b11623", "#292c37", "#cccccc"],
  ["#382f32", "#ffeaf2", "#fcd9e5", "#fbc5d8", "#f1396d"],
  ["#e3dfba", "#c8d6bf", "#93ccc6", "#6cbdb5", "#1a1f1e"],
  ["#f6f6f6", "#e8e8e8", "#333333", "#990100", "#b90504"],
  ["#1b325f", "#9cc4e4", "#e9f2f9", "#3a89c9", "#f26c4f"],
  ["#a1dbb2", "#fee5ad", "#faca66", "#f7a541", "#f45d4c"],
  ["#c1b398", "#605951", "#fbeec2", "#61a6ab", "#accec0"],
  ["#5e9fa3", "#dcd1b4", "#fab87f", "#f87e7b", "#b05574"],
  ["#951f2b", "#f5f4d7", "#e0dfb1", "#a5a36c", "#535233"],
  ["#8dccad", "#988864", "#fea6a2", "#f9d6ac", "#ffe9af"],
  ["#2d2d29", "#215a6d", "#3ca2a2", "#92c7a3", "#dfece6"],
  ["#413d3d", "#040004", "#c8ff00", "#fa023c", "#4b000f"],
  ["#eff3cd", "#b2d5ba", "#61ada0", "#248f8d", "#605063"],
  ["#ffefd3", "#fffee4", "#d0ecea", "#9fd6d2", "#8b7a5e"],
  ["#cfffdd", "#b4dec1", "#5c5863", "#a85163", "#ff1f4c"],
  ["#9dc9ac", "#fffec7", "#f56218", "#ff9d2e", "#919167"],
  ["#4e395d", "#827085", "#8ebe94", "#ccfc8e", "#dc5b3e"],
  ["#a8a7a7", "#cc527a", "#e8175d", "#474747", "#363636"],
  ["#f8edd1", "#d88a8a", "#474843", "#9d9d93", "#c5cfc6"],
  ["#046d8b", "#309292", "#2fb8ac", "#93a42a", "#ecbe13"],
  ["#f38a8a", "#55443d", "#a0cab5", "#cde9ca", "#f1edd0"],
  ["#a70267", "#f10c49", "#fb6b41", "#f6d86b", "#339194"],
  ["#ff003c", "#ff8a00", "#fabe28", "#88c100", "#00c176"],
  ["#ffedbf", "#f7803c", "#f54828", "#2e0d23", "#f8e4c1"],
  ["#4e4d4a", "#353432", "#94ba65", "#2790b0", "#2b4e72"],
  ["#0ca5b0", "#4e3f30", "#fefeeb", "#f8f4e4", "#a5b3aa"],
  ["#4d3b3b", "#de6262", "#ffb88c", "#ffd0b3", "#f5e0d3"],
  ["#fffbb7", "#a6f6af", "#66b6ab", "#5b7c8d", "#4f2958"],
  ["#edf6ee", "#d1c089", "#b3204d", "#412e28", "#151101"],
  ["#9d7e79", "#ccac95", "#9a947c", "#748b83", "#5b756c"],
  ["#fcfef5", "#e9ffe1", "#cdcfb7", "#d6e6c3", "#fafbe3"],
  ["#9cddc8", "#bfd8ad", "#ddd9ab", "#f7af63", "#633d2e"],
  ["#30261c", "#403831", "#36544f", "#1f5f61", "#0b8185"],
  ["#aaff00", "#ffaa00", "#ff00aa", "#aa00ff", "#00aaff"],
  ["#d1313d", "#e5625c", "#f9bf76", "#8eb2c5", "#615375"],
  ["#ffe181", "#eee9e5", "#fad3b2", "#ffba7f", "#ff9c97"],
  ["#73c8a9", "#dee1b6", "#e1b866", "#bd5532", "#373b44"],
  ["#805841", "#dcf7f3", "#fffcdd", "#ffd8d8", "#f5a2a2"],
];

Math.distance = function (x1, y1, x2, y2) {
  var xs = x2 - x1,
    ys = y2 - y1;
  xs *= xs;
  ys *= ys;
  return Math.sqrt(xs + ys);
};

var colorIndex = getRandomInt(colors.length) - 1;
console.log(colors[colorIndex]);

function getRandomInt(max) {
  return Math.floor(fxrand() * max) + 1;
}

function plusOrMinus() {
  return fxrand() < 0.5 ? -1 : 1;
}

function trueOrFalse() {
  return fxrand() < 0.5 ? false : true;
}

function getRandomMinMax(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
}

function midPoint(x1, y1, x2, y2) {
  return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}

context.lineWidth = 2;

function circle(x, y, r = 20) {
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2);
  //context.fill();
  context.stroke();
}

var bg = ["#EEEEEE", "#F7DBD7", "#FAEACB"];
var _bggg = bg[getRandomMinMax(0, 2)];
console.log(_bggg);

context.fillStyle = _bggg; //colors[colorIndex][0];

context.fillRect(0, 0, canvas.width, canvas.height);

var rnd = fxrand();

var smoke = rnd > 0.5 ? true : false;
function elipse(x, y, w, h, a = 0) {
  context.beginPath();
  context.ellipse(x, y, w, h, a, 0, Math.PI * 2);
  context.stroke();
  //context.fill();
}
function rec(n, data, sq = []) {
  if (n < 0) {
    return;
  }

  if (n === 0) {
    sq.push(data);
  }

  context.fillStyle = colors[colorIndex][getRandomMinMax(0, 4)];
  context.lineWidth = 4;

  context.strokeStyle = colors[colorIndex][getRandomMinMax(0, 4)];

  //context.strokeStyle = "black";
  //context.globalAlpha = 0.1;

  // elipse(
  //   data.x + 2,
  //   data.y - data.height / 2,
  //   Math.abs(data.width),
  //   Math.abs(data.height)
  // );
  context.lineWidth = 4;

  context.fillStyle = colors[colorIndex][n % 5];

  context.strokeStyle = "black";
  var y = data.y - data.height / 2;

  // Define the points as {x, y}

  //if (y < 0) y = 50;

  //context.globalAlpha = 0.5;
  context.strokeStyle = colors[colorIndex][getRandomMinMax(0, 4)];
  context.lineWidth = getRandomMinMax(4, 10);
  context.lineWidth = (3000 / data.y) * 2; //getRandomMinMax(2, 100);

  context.strokeRect(
    data.x - data.width / 2 + 4,
    y - 2,
    data.width,
    data.height
  );
  //context.fillRect(data.x - data.width / 2, y, data.width, data.height);
  // context.globalAlpha = 0.4;
  // context.fillStyle = colors[colorIndex][getRandomMinMax(0, 4)];

  //context.fillRect(data.x - data.width / 4, y, 10, data.height);
  context.globalAlpha = 1;

  //context.globalAlpha = 1;
  // context.lineWidth = 1;
  context.strokeStyle = colors[colorIndex][getRandomMinMax(0, 4)];
  //circle(data.x, data.y, data.width);
  //console.log(n);
  // rec(n - 1, {
  //   x: data.x,
  //   y: data.y,
  //   width: data.width / 2,
  //   height: data.height / 2,
  // });
  //context.globalAlpha = 0.5;
  //console.log(3000 / data.y);
  context.lineWidth = (3000 / data.y) * 5; //getRandomMinMax(2, 100);
  var mid = midPoint(data.x, data.y, data.x, data.y + data.height);
  let start = { x: data.x, y: data.y };
  let cp1 = {
    x: mid.x + getRandomMinMax(100, 500) * plusOrMinus(),
    y: mid.y + getRandomMinMax(10, 50) * plusOrMinus(),
  };
  let cp2 = {
    x: mid.x + getRandomMinMax(10, 50) * plusOrMinus(),
    y: mid.y + getRandomMinMax(10, 50) * plusOrMinus(),
  };
  let end = { x: data.x, y: data.y + data.height };
  elipse(data.x, data.y, (3000 / data.y) * 4, (3000 / data.y) * 4);
  // Cubic Bézier curve
  context.beginPath();
  context.moveTo(start.x, start.y);
  context.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
  context.stroke();

  rec(
    n - 1,
    {
      x: data.x + data.width / 4,
      y: data.y - data.height / 4,
      width: data.width / 4,
      height: data.height / 4,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x - data.width / 4,
      y: data.y - data.height / 4,
      width: data.width / 4,
      height: data.height / 4,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x,
      y: data.y + data.height / 4,
      width: data.width / 4,
      height: data.height / 4,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x + data.height / 4,
      y: data.y + data.height / 4,
      width: data.width / 4,
      height: data.height / 4,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x - data.height / 4,
      y: data.y + data.height / 4,
      width: data.width / 4,
      height: data.height / 4,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x,
      y: data.y - data.height,
      width: data.width / 2,
      height: data.height / 4,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x,
      y: data.y - data.height,
      width: data.width / 2,
      height: data.height,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x - data.width / 4,
      y: data.y + data.height,
      width: data.width / 2,
      height: data.height / 2,
    },
    sq
  );

  rec(
    n - 1,
    {
      x: data.x + data.width / 4,
      y: data.y + data.height,
      width: data.width / 2,
      height: data.height / 2,
    },
    sq
  );

  // rec(n - 1, {
  //   x: data.x + data.width,
  //   y: data.width / 5,
  //   width: 100,
  //   height: 1200,
  // });
  // rec(n - 1, {
  //   x: data.x,
  //   y: data.y + data.width / 3,
  //   width: data.width / 4,
  //   height: data.height / 4,
  // });
}

var rand = getRandomMinMax(1, 3);

context.globalAlpha = 0.5;
for (var i = 0; i < 3000; i += 10) {
  context.lineWidth = fxrand();

  context.strokeStyle = colors[colorIndex][i % 2];
  context.beginPath();
  context.moveTo(i, 0);
  context.lineTo(i, 3000);
  context.moveTo(0, i);
  context.lineTo(3000, i);
  context.stroke();
}
context.globalAlpha = 1;

var sqrs = [];
// rec(3, { x: 500, y: 1500, width: 1500, height: 3000 }, sqrs);
rec(
  4,
  {
    x: 1500,
    y: 2900,
    width: 1200 + getRandomMinMax(1000, 1500),
    height: 100 + getRandomMinMax(400, 500),
  },
  sqrs
);
if (rand === 1) {
  rec(
    getRandomMinMax(3, 5),
    {
      x: 1500,
      y: 2900,
      width: 1200 + getRandomMinMax(1000, 1500),
      height: plusOrMinus() * (100 + getRandomMinMax(400, 500)),
    },
    sqrs
  );
} else if (rand === 2) {
  // rec(
  //   getRandomMinMax(2, 4),
  //   {
  //     x: 1500,
  //     y: 2900,
  //     width: 200 + getRandomMinMax(1000, 1500),
  //     height: 100 + getRandomMinMax(400, 500),
  //   },
  //   sqrs
  // );
  rec(
    getRandomMinMax(3, 4),
    {
      x: 2500,
      y: 2900,
      width: 1200 + getRandomMinMax(600, 1000),
      height: plusOrMinus() * (100 + getRandomMinMax(400, 500)),
    },
    sqrs
  );

  rec(
    getRandomMinMax(3, 4),
    {
      x: 500,
      y: 2900,
      width: 1200 + getRandomMinMax(600, 1000),
      height: plusOrMinus() * (100 + getRandomMinMax(400, 500)),
    },
    sqrs
  );
} else if (rand === 3) {
  rec(
    getRandomMinMax(2, 4),
    {
      x: 1500,
      y: 2900,
      width: 200 + getRandomMinMax(1000, 1500),
      height: plusOrMinus() * (100 + getRandomMinMax(400, 500)),
    },
    sqrs
  );
  rec(
    getRandomMinMax(2, 4),
    {
      x: 2500,
      y: 2900,
      width: 200 + getRandomMinMax(600, 1000),
      height: plusOrMinus() * (100 + getRandomMinMax(400, 500)),
    },
    sqrs
  );

  rec(
    getRandomMinMax(2, 4),
    {
      x: 500,
      y: 2900,
      width: 200 + getRandomMinMax(600, 1000),
      height: plusOrMinus() * (100 + getRandomMinMax(400, 500)),
    },
    sqrs
  );
}

// rec(3, { x: 500, y: 1500, width: 500, height: 500 }, sqrs);
// rec(3, { x: 1500, y: 1500, width: 500, height: 500 }, sqrs);
// rec(3, { x: 2500, y: 1500, width: 500, height: 500 }, sqrs);

// rec(3, { x: 2500, y: 1500, width: 1500, height: 3000 }, sqrs);

window.$fxhashFeatures = {
  colors: JSON.stringify(colors[colorIndex]),
};

// sqrs.sort(function (a, b) {
//   return a.x - b.x;
// });
// if (glitchX === true) {
//   sqrs.sort(function (a, b) {
//     return a.x - b.x;
//   });
// }
//if (glitchY === true || glitchX === true) {

//}

function render() {}

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

// initialize the timer variables and start the animation

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {
  // request another frame

  requestAnimationFrame(animate);

  // calc elapsed time since last loop

  now = Date.now();
  elapsed = now - then;

  // if enough time has elapsed, draw the next frame

  if (elapsed > fpsInterval) {
    // Get ready for next frame by setting then=now, but also adjust for your
    // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
    then = now - (elapsed % fpsInterval);
    // render();
    // Put your drawing code here
  }
}

//startAnimating(10);

fxpreview();

function download() {
  var link = document.createElement("a");
  link.download = "Generative-Art.png";
  link.href = canvas.toDataURL("image/png", 1);
  link.click();
}
document.addEventListener(
  "keydown",
  function (e) {
    if (e.keyCode == 83) {
      e.preventDefault();
      // Process event...
      download();
    }
  },
  false
);
