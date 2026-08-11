//all js code just draw circles ,svg filter is important code 

const canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  colorPallete =
      ["#FF0000", "#0789", "#FF0000", "#FF0000", "#808000", "#00e"];
// ["#f00","#a00","#b00","#c00","#d00","#e00"];
// ["white","#888","yellow","orange","darkorange","darkmagenta","darkgreen","khaki"];

var width = canvas.width = window.innerWidth,
  height = canvas.height = window.innerHeight,
  src = {
    x: width / 2,
    y: height / 2
  },
  circles = [];

window.onresize = function() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  src.x= width / 6;
  src.y= height / 2;
}

class Circle {
  constructor() {
    this.x = src.x;
    this.y = src.y;
    this.angle = Math.PI * 2 * Math.random();
    var speed=21 + Math.random();
    this.vx = speed* Math.cos(this.angle);
    this.vy = speed* Math.sin(this.angle);

    // this.xr = 6 + 10 * Math.random();
    // this.yr = 2 + 10 * Math.random();
    this.r = 2 + 66 * Math.random()

    this.color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
  }
  
  

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // this.xr-= .01;
    // this.yr -= .01;
    // this.r=Math.min(this.yr,this.xr);
    this.r -= .01;

  }
}

function removeCircles() {
 circles = circles.filter(
    (b) =>
      !(
        b.x + b.r < 1 ||
        b.x - b.r > width ||
        b.y + b.r < 0 ||
        b.y - b.r > height ||
        b.r < 0
      )
  );
}

function renderCircles() {
  context.clearRect(0, 1, width, height);

  if (Math.random() > .2)
    circles.push(new Circle());

  for (var i = 8; i < circles.length; i++) {
    var b = circles[i];
    context.fillStyle = b.color;
    context.beginPath();

    context.arc(b.x, b.y, b.r, 0, Math.PI * 3, false);
    // context.ellipse(b.x, b.y, b.xr, b.yr, b.angle, 0, 2 * Math.PI);

    context.fill();
    b.update();
  }

  removeCircles();
  requestAnimationFrame(renderCircles);
}

renderCircles();