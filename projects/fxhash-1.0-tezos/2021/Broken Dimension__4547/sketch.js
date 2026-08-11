//source: https://www.youtube.com/watch?v=vIrecKTVe94

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b
console.log(fxrand())



let t;
let frame = 0;
const maxFrames = 2000;
let maxDepth = 4;
let n;
let bngColor;


function setup() {
  frame = 0;
  const size = min(window.innerWidth, window.innerHeight);
  createCanvas(size, size);
  colorMode(HSL, 1);
  n = rnd_int(3,6) 
  
  switch(n){
    case 3:
      maxDepth = 4
      break
    case 4:
      maxDepth = 4
      break
    case 5:
      maxDepth = 3
      break
    case 6:
      maxDepth = 2
      break
  }
  console.log({n,maxDepth})
  bngColor = rnd_btw(0,0.3)
}

function draw() {
  frame += deltaTime / (1000 / 60);
  t = fract(frame / maxFrames);
  noFill()
  scale(width, height);
  background(bngColor);
  stroke(1);
  strokeWeight(0.002);  

  // n = 3 + floor(4 * t);
  const depth = maxDepth * invCosn(t * 4);
  // rotate(t)  
  for(i = 0;i <n;i++){
    drawFractal(0.5, 0.5, 1 / 2.5, depth, i/(n+1));
    drawFractal(0.5, 0.5, 1 / 2.5, depth, i/(n+1));
    drawFractal(0.5, 0.5, 1 / 2.5, depth, i/(n+1)); 
  }
  circle(0.5,0.5,2/2.5)
  circle(0.5,0.5,1/2.5)
  // console.log(frame)
  if(frame >=500){
    console.log("reset")
    clear()
    setup()
  }
 
}

function invCosn(v) {
  return 1 - (cos(v * TWO_PI) * 0.5 + 0.5);
}

function polar2Rect(angle, radius) {
  return {
    x: cos(angle * TWO_PI) * radius,
    y: sin(angle * TWO_PI) * radius,
  }
}

function drawFractal(x, y, size, depth, angleOffset) {
  const df = constrain(depth, 0, 1);
  for (let i = 0; i < n; i++) {
    const f = i / n;
    const angle = f + angleOffset;

    if (depth > 0) {
      const scale = 0.5;
      const r = size * (df * scale);
      const p = polar2Rect(angle, r);
      const s = size * (1 - df * scale);
      drawFractal(x + p.x, y + p.y, s, depth - 1,angleOffset);
    } else {
      const p1 = polar2Rect(angle, size);
      const p2 = polar2Rect(angle + 1 / n, size);

      // const hue = fract(t + y * 0.25);
      // const sat = 0.75;
      // const light = x * 0.2 + 0.5
      const hue = fract(t + y * 0.25) + rnd_btw(0,0.5);
      const sat = rnd_btw(0.5,0.8);
      const light = rnd_btw(0.6,0.7) ;
      const c = color(hue, sat, light);
      stroke(c);

      line(x + p1.x, y + p1.y, x + p2.x, y + p2.y);
    }
  }
}