// FH_HASH p5 template | @visiophone_lab
// www.visiophone-lab.com

let seed = 0; //seed Hash
let sizee = 0; // rect size
let col = 0; //

let x = [];
let y = [];

let px = [],
  py = [];
let hu;
let n = 350;
let timerValue = 10;


function setup() {
    setInterval(timeIt, 1000);

  
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB, 360, 100, 100);
    background(0,0,20, 20);

  hu = random(360);
  for (let i = 0; i < n; i += 1) {
    x[i] = fxrand()/10;
    y[i] = fxrand()/100;
    px[i] = py[i] = NaN;
    
  }

  strokeWeight(1.5);
  //noStroke();
  scale(0.5);

  seed = int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);

  col = int(random(360));
  sizee = int(random(width / 12));


}

let c = 0,
  d = 0,
  e = 0;

let pal = [
  [col, col-100, 42],
  [col, 7, col],
  [col, 6, 59],
  [col, 84, 71],
  [col, 58, 48],
  [col, 84, 3],
];

function draw() {
    scale(0.7);

  translate(width / 2 , height / 2);
  rotate(fxrand()/10 );
  translate(-width / 2 , (-height / 2) - 50);
  for (let i = 3; (i -= 1); ) {
  
   
    
    e += frameCount / 9000000; //////CHANGE FOR FASTEr OR SLOWER .. TK 
    for (let k = 0; k < n; k += 1) {
      let nk = (20 - k / n) * col;

      xx = x[k];
      x[k] =
        e * 10e1 +
        y[k] +
        1 /
          cos(
            (x[k] / 1.5 +
              y[k] -
              sin(e ** (e ** xx) + nk * PI * (y[k] / 10)) * 0.75) %
              tan(x[k])
          ) /
          (11 + xx / 10e4 + frameCount); /*0.000001 + */ //sin(e**abs(cos(e))*nk*PI*y[k])/1000+sin(nk*PI*2)/14000
      y[k] = xx / (0.995 + e); /* - */ //cos(e**abs(sin(e))*nk*PI*x[k])/1000-cos(nk*PI*2)/14000
      c = x[k] / 19; //acos(sin(x[k]/4)) / 1.5708
      d = y[k] / 16; //acos(sin(y[k]/4)) / 1.5708

      opx = px[k];
      opy = py[k];

      px[k] = floor(c * width) + width / 1.5; //% width
      py[k] = floor(d * width) + width / 1.5; //% height

      if (isNaN(opx)) opx = px[k];
      if (isNaN(opy)) opy = py[k];

      let p = pal[k % pal.length];

      fill(opx/10, opy/10, opx % 255 );
      rect(px[k], py[k], sizee/-fxrand()*0.1, sizee/fxrand()*0.1);
    }
    
  }
  //hu++;
  if (timerValue == 7) {
    noLoop();
  }
  console.log(timerValue);
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

