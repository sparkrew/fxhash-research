let curl = "https://coolors.co/1b998b-ed217c-2d3047-fffd82-ff9b71-171219-225560-edf060-f0803c-310d20-d7263d-f46036-2e294e-1b998b-c5d86d-555233-df921d-878937-cfc52A-dc2a41";

let bgColor;
let seed;
let obj;

function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);
  background(255);
  // noLoop();
  // frameRate(240);

  pal = createPallete(curl);
  let cid = int(random(pal.length));
  bgColor = pal[cid];
  pal.splice(cid, 1);
  pal = shuffle(pal);

  background(bgColor);
  // effect();  // noise effect
}

function draw() {
  randomSeed(seed);
  // background(bgColor);
	
	let ea = noise(1e+1, frameCount*2e-3) * 1000;
	let da = noise(1e+2, frameCount*2e-3) * 1000;
	let x = sin(ea) * cos(da) * 100 + windowHeight/2;
	let y = sin(ea) * sin(da) * 100 + windowWidth/2;
	let z = cos(ea) * 100;
	
	let col = pal[0];  col.setAlpha(20);
	strokeWeight(map(z, -100, 100, 5, 15));  stroke(col);
	point(x, y);

  // effect();
}


function effect() {
  strokeWeight(1);
  for (let i = 0; i < width * height * 5 / 100; i++) {
    stroke(0, 0, 0, 10);
    let px = random(width);
    let py = random(height);
    point(px, py);
  }
}


function createPallete(_url) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = color('#' + arr[i]);
  }
  return arr;
}