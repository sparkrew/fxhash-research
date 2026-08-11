function Point(x, y) {
  this.x = x;
  this.y = y;
}

var canvas;
var ctx;
var r;
var palette = [];

var pal1 = ["#03172f", "#062844", "#093657", "#fff7b6", "#efd466", "#d7b030"];

var pal2 = ["#000000", "#111111", "#444444", "#888888", "#BBBBBB", "#DDDDDD"];

var pal3 = ["#412722", "#f6d8ae", "#a51c28", "#6b0f1a", "#1b512d", "#0c7c59"];

var pal4 = ["#5F0F40", "#064E89", "#007A72", "#EDAE1D", "#E36414", "#9A031E"];

var pal5 = ["#03071E", "#6A040F", "#D00000", "#E85D04", "#FAA307", "#FFBA08"];

var pal6 = ["#F72585", "#7209B7", "#480CA8", "#3F37C9", "#4895EF", "#4CC9F0"];

var pal7 = ["#0B090A", "#660708", "#BA181B", "#B1A7A6", "#D3D3D3", "#D3D3D3"];

var pal8 = ["#FD0100", "#F76915", "#EEDE04", "#A0D636", "#2FA236", "#333ED4"];

var pal9 = ["#FB8500", "#FFB703", "#023047", "#126782", "#219EBC", "#8ECAE6"];

var seed = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ctx = drawingContext;
  sunflower();
}

function sunflower() {
  r = fxrand();
  //r = 0.91
  console.log(r);
  
  
  if (r > 0.9) {
    palette = pal1;
  } else if (r > 0.8) {
    palette = pal2;
  } else if (r > 0.7) {
    palette = pal3;
  } else if (r > 0.6) {
    palette = pal4;
  } else if (r > 0.5) {
    palette = pal5;
  } else if (r > 0.4) {
    palette = pal6;
  } else if (r > 0.3) {
    palette = pal7;
  } else if (r > 0.2){
  palette = pal8;
  } else if (r > 0.1){
  palette = pal9;
  } else {
  palette = pal2;
  }

  ctx.fillStyle = palette[2];
  ctx.fillRect(0, 0, width, height);
  ctx.translate(width / 2, height / 2);
  var startDistance = fxrand() * 10;
  var rotation = fxrand() * 0.5 + 0.27;
  var sizeRoot = fxrand() * 10;

  for (var i = 0; i < 300; i++) {
    var x = startDistance + i * 2.2;
    var y = 0;
    var size = sizeRoot + width * 0.1 + i * 0.2;
    ctx.rotate(rotation);
    gradientCircle(
      x,
      y,
      size,
      palette[(i + 1) % (palette.length - 3)],
      palette[(i + 3) % (palette.length - 1)]
    );
  }
}

function gradientCircle(x, y, size, color1, color2) {
  ctx.translate(x, y);
  var grad = ctx.createLinearGradient(size / 2, size / 2, -size / 2, -size / 2);
  grad.addColorStop(0, color1);
  grad.addColorStop(1, color2);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, size, 0, 2 * Math.PI);
  ctx.fill();
  ctx.translate(-x, -y);
}
