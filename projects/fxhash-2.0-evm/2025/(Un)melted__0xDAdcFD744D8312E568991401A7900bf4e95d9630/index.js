
var colors, palette, R, bg = "#fccc7a", bgLines = "#fccc7a", fgLines = "#000000", palettes = [["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d43338", "#f9c706", "#2683c6", "#2b2b2b"], "Valencia"], ["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d43338", "#f9c706", "#2683c6", "#2b2b2b"], "Valencia"], ["#eff2f7", "#000000", ["#eff2f7", "#eff2f7", "#eff2f7", "#da0025", "#2f2d43", "#ff7286", "#0a002d"], "Catskill White"], ["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d43338", "#f9c706", "#2683c6", "#2b2b2b"], "Valencia"], ["#eff2f7", "#000000", ["#eff2f7", "#eff2f7", "#eff2f7", "#da0025", "#2f2d43", "#ff7286", "#0a002d"], "Catskill White"], ["#f5f5f5", "#000000", ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#d43338", "#f9c706", "#2683c6", "#2b2b2b"], "Valencia"], ["#f7efe4", "#000000", ["#f7efe4", "#f7efe4", "#f7efe4", "#f24137", "#f79183", "#dba55d", "#4239ee"], "Linen"], ["#eeeeee", "#000000", ["#dfdfdf", "#dfdfdf", "#dfdfdf", "#28a7b6", "#dc1264", "#d34900"], "Light Gray- Pink"], ["#ececec", "#000000", ["#ececec", "#ececec", "#ececec", "#dca998", "#d17c45", "#48656b", "#e2a139"], "Cutty Sark"], ["#ffffff", "#000000", ["#ffffff", "#ffffff", "#ffffff", "#fac9a9", "#09182d", "#d4937d", "#405664", "#f6c67a"], "Pink - Navy"], ["#edf0e5", "#000000", ["#edf0e5", "#edf0e5", "#edf0e5", "#f6582b", "#e7992d", "#215153", "#929a83"], "Sage"], ["#f3f4f8", "#000000", ["#f3f4f8", "#f3f4f8", "#f3f4f8", "#fddd34", "#8d888e", "#f3e792", "#b4bebd", "#fec610"], "Lightning Yellow - Gray"], ["#faf7f2", "#000000", ["#f9e7d6", "#f9e7d6", "#f9e7d6", "#f4a21a", "#ca3c26", "#85ced7", "#173c4c", "#90b69d"], "Citrine White"], ["#efefef", "#000000", ["#eeeeee", "#eeeeee", "#eeeeee", "#303538", "#bc7c59", "#8b5c4c", "#b3a394"], "Muddy"], ["#faf7f2", "#000000", ["#f5eee4", "#f5eee4", "#f5eee4", "#96b24b", "#a0c0a8", "#5b7510", "#df9d11", "#368b86"], "River"], ["#fef9e7", "#000000", ["#fef9e7", "#fef9e7", "#f4e4c0", "#f0d8ce", "#e0999f", "#252928", "#b3b061", "#f8bdc3"], "Bloom"], ["#f5eede", "#000000", ["#f5eede", "#f5eede", "#f5eede", "#fc8241", "#fd73ae", "#d2a42a", "#0a318c", "#701b22"], "Rose"], ["#f55547", "#000000", ["#294b95", "#f7d4ce", "#f7d4ce", "#667d53", "#e4a67f", "#567361", "#c51e2f", "#485581"], "Cinnabar"], ["#ffffff", "#000000", ["#c5b298", "#efefef", "#c5b298", "#333333", "#e4d6cd"], "Destiny"], ["#fefefe", "#000000", ["#fefefe", "#D1ab52", "#efe8dd", "#6f7879", "#c69627"], "Golden - Gray"], ["#f0e5b9", "#000000", ["#57464c", "#86bbab", "#ef695c", "#eda66a", "#59484e"], "Tyler"], ["#eae0cd", "#000000", ["#d5d8d0", "#d45d43", "#c17717", "#476e68", "#e2ba5f", "#ffa575", "#f6b311", "#fea677", "#4a779a"], "Buttercup"], ["#ebe5d9", "#000000", ["#db4e54", "#b8d9ce", "#28a691", "#fcd264", "#f5b0a1", "#b8d9ce", "#e47f2c", "#e0d8c5", "#fbb91e", "#2f5e8e"], "Pearl"], ["#dad2c5", "#000000", ["#fe3195", "#f8d835", "#247fb7", "#331d84", "#ff2f12"], "Sisal"]], rows = 4, cols = 4, offset = .85, circle_radius = 1, circles = [], grid_cells = [], speed = 70;
let sW = 2;
let canvas_mode = true;

var canvas;
function shuffleArray(e) {
  let f = e.slice();
  for (let e = f.length - 1; e > 0; e--) {
      const r = Math.floor(rnd(0, e + 1));
      [f[e],f[r]] = [f[r], f[e]]
  }
  return f
}
function arrange(e) {
  grid_cells = [];
  for (var f = width * (1 - offset); f < width * offset + 1; f += (width * offset - width * (1 - offset)) / cols)
      for (var r = height * (1 - offset); r < height * offset + 1; r += (width * offset - width * (1 - offset)) / rows)
          grid_cells.push([f, r]);
  for (f = 0; f < rnd(1, 100); f++)
      grid_cells = shuffleArray(grid_cells);
  circles.sort(( (e, f) => f.r - e.r));
  let c = circles[0].r;
  circles1 = [],
  circles2 = [];
  for (var t = 0; t < circles.length; t++)
      circles[t].r > c * e ? circles1.push(circles[t]) : circles2.push(circles[t]);
  for (f = 0; f < rnd(1, 100); f++)
      circles2 = shuffleArray(circles2);
  circles = [];
  for (t = 0; t < circles1.length; t++)
      circles.push(circles1[t]);
  for (var s = 0; s < circles2.length; s++)
      circles.push(circles2[s]);
  for (f = 0; f < circles.length; f++)
      circles[f].dX = grid_cells[f % grid_cells.length][0],
      circles[f].dY = grid_cells[f % grid_cells.length][1]
}
function setup() {
  let e = createCanvas(620, 620);
  canvas = e;
  pixelDensity(2),
  noiseSeed(round(1e6 * $fx.rand())),
  randomSeed(round(1e6 * $fx.rand()));
  e.addClass("canvas_css"),
  palette = randomSelect(palettes),
  bg = palette[0],
  fgLines = palette[1],
  colors = palette[2],
  rows = randomSelect([3, 5, 4, 5, 6]);
  let f = rnd(0, 100);
  f < 35 && f > 27 ? rows = 2 : f < 40 && f > 35 && (rows = randomSelect([8, 10, 8])),
  cols = rows,
  2 == rows && (offset = .8),
  circle_radius = width * offset - width * (1 - offset);
  for (var r = width * (1 - offset); r < width * offset + 1; r += (width * offset - width * (1 - offset)) / cols)
      for (var c = height * (1 - offset); c < height * offset + 1; c += (width * offset - width * (1 - offset)) / rows)
          grid_cells.push([r, c]);
  grid_cells = shuffleArray(grid_cells);
  let t = 0;
  for (r = width * (1 - offset); r < width * offset + 1; r += (width * offset - width * (1 - offset)) / cols)
      for (c = height * (1 - offset); c < height * offset + 1; c += (width * offset - width * (1 - offset)) / rows) {
          stroke(fgLines),
          strokeWeight(.8);
          var s = rnd(1, 10);
          circle_colors = [];
          for (var d = 0; d < s; d++) {
              let e = map(d, 0, s, 1, .2)
                , f = randomSelect(colors);
              fill(f),
              noStroke();
              let i = grid_cells[t % grid_cells.length];
              circles.push({
                  x: i[0],
                  y: i[1],
                  r: circle_radius / cols * e,
                  c: f,
                  ratio: e,
                  dX: r,
                  dY: c
              }),
              t++
          }
      }
}
function draw() {
  if (canvas_mode) {
    
  background(bg);
  let allReached = true;
  for (var e = 0; e < circles.length; e++) {
      let f = circles[e].x
        , r = circles[e].y
        , c = circles[e].r
        , t = (circles[e].ratio,
      circles[e].c)
        , s = circles[e].dX
        , d = circles[e].dY;
      dist(f, r, s, d) > .01 && (f += (s - f) / speed,
      circles[e].x = f,
      r += (d - r) / speed,
      circles[e].y = r),
      noStroke(),
      fill(t);
      rectMode(CENTER);
      strokeWeight(sW);
      stroke(12);
      rect(f, r, c);

    let distToTarget = abs(dist(circles[e].x, circles[e].y, circles[e].dX, circles[e].dY));
    if (distToTarget > 0.2) {
      allReached = false;
    }
  }


  if (allReached) {
    console.log("All circles reached their final position");
    meltEffect(canvas);
    canvas_mode = false;
   
    if ($fx.isPreview==true) {
      $fx.preview();
      noLoop();
    }
  }
}
}


function rnd(e, f) {
  return map($fx.rand(), 0, 1, e, f)
}
function randomSelect(e) {
  return e[round($fx.rand() * (e.length - 1))]
}




function keyPressed() {
  if ("e" === key || "E" === key || "o" === key || "O" === key || "i" === key || "I" === key || "d" === key || "D" === key || "s" === key || "S" === key) {
    canvas_mode = true;
  }

  "e" === key || "E" === key ? arrange(.98) : "o" === key || "O" === key ? arrange(0) : "i" === key || "I" === key ? (arrange(.98),
  (speed -= 20) < 10 && (speed = 10)) : "d" === key || "D" === key ? (arrange(.98),
  speed += 20) : "s" !== key && "S" !== key || save($fx.hash)
}



function get_items(arr, percentage) {
  const n = arr.length;
  const count = Math.floor((percentage / 100) * n);
  
  const indices = Array.from({length: n}, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rnd(0,1) * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  
  const selectedIndices = indices.slice(0, count);
  
  return selectedIndices.map(i => arr[i]);
}



function meltEffect(canvas) {
  const canvasElement = canvas.elt;
  const ctx = canvasElement.getContext('2d');
  const w = width;
  const h = height;
  let meltWidth = Math.floor(w / 5);
  let meltHeight = Math.floor(h / rnd(3,8));

  let rects_Array = get_items(circles,int(rnd(20,60)));
  rects_Array.reverse();
  rects_Array.sort((a, b) => b.y - a.y);
  let cells_width = (width * offset - width * (1 - offset))/cols;
  for (let i = 0; i < rects_Array.length; i++) {
    meltHeight = Math.floor(h / rnd(2,8));
    let new_rect = rects_Array[i];
    let x = new_rect.x*2-cells_width;
    let y = new_rect.y*2;
    meltWidth = int(cells_width)*2;
    
    let sin_offset = int(rnd(0,100));
    let sin_ratio = int(rnd(6,16));
    let melt_offset = int(randomSelect([1,1,2,3,3,3,4,6,8,3]));
    let sectionData = ctx.getImageData(x, y, meltWidth, meltHeight);
    let data = sectionData.data;

    for (let col = 0; col < meltWidth; col++) {

      let meltDisplacement = Math.floor(map(sin(col/sin_ratio+sin_offset),-1,1,0,8)) + melt_offset;

      for (let row = meltHeight - 1; row >= 0; row--) {
        let srcIndex = (row * meltWidth + col) * 4;
        let destRow = row + meltDisplacement;
        if (destRow < meltHeight) {
          let destIndex = (destRow * meltWidth + col) * 4;
          data[destIndex] = data[srcIndex];
          data[destIndex + 1] = data[srcIndex + 1];
          data[destIndex + 2] = data[srcIndex + 2];
          data[destIndex + 3] = data[srcIndex + 3];
          
        }
      }
    }

    ctx.putImageData(sectionData, x, y);
  }
}
