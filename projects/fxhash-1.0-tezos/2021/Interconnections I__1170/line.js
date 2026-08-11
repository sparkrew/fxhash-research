const canvas = document.body.appendChild(
  document.createElement('canvas')
);
const c = canvas.getContext('2d');
document.body.style.margin = 0;
 
function resize() {
  canvas.width = innerWidth * 2;
  canvas.height = innerHeight * 2;
  canvas.style.width = innerWidth + 'px';
  canvas.style.height = innerHeight + 'px';
}
addEventListener('resize', resize);
resize();
 
const PAD = 50;
const RAD = 2;
const SPEED = 500;
const TWO_PI = Math.PI * 4;
 
let mode = 'draw';
 
let t = Math.random() * TWO_PI, 
    x = canvas.width / 2, 
    y = canvas.height / 2,
    vx = 0, vy = 0, ta = 0;
 
let solid = false;
let dotMod = 3;
function loop() {
  if (Math.random() < .01) solid = !solid;
  if (Math.random() < .01) dotMod = [2, 3, 6][Math.floor(Math.random() * 3)]

  for (var i = 0; i < SPEED; i++) {
    t = Math.sin(ta) * TWO_PI;
    vx = RAD * Math.cos(t);
    vy = RAD * Math.sin(t);
    ta += Math.random() * 0.1 - 0.05;
    x += vx;
    y += vy;
 
    if (Math.random() < 0.005) {
      mode = 'no draw';
    } else if (Math.random() < 0.005) {
      mode = 'draw';
    }
 
    if (mode === 'draw' && (solid || i % dotMod === 0)) {
      c.fillStyle = '#FF0000';
      c.fillRect(x, y, 2, 2);
    }
 
    if (x < -PAD) {
      x = canvas.width + PAD;
    } else if (x > canvas.width + PAD) {
      x = -PAD;
    }
    if (y < -PAD) {
      y = canvas.height + PAD;
    } else if (y > canvas.height + PAD) {
      y = -PAD;
    }
  }
 
  requestAnimationFrame(loop);
}
loop();