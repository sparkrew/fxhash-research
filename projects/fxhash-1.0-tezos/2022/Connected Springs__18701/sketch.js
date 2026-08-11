function smoothstep(min, max, value) {
  var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

const color = () => {
  const colors = ["#3b3b3b", "#998873", "#6399cf", "#e6ba4c", "#de4e4e"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const triangle_ = (t, p = 2) => 2 * abs(t / p - floor(t / p + 1 / 2));
const sin_o = (t, p) => sin((2 / p) * t * Math.PI * 1.5) * 0.5 + 0.5;
const approx = (n, f = 10) => Math.round(n * f) / f;

function setup() {
  Math.random = fxrand
  randomSeed(fxrand()*999999);
  noiseSeed(fxrand()*999999);
  createCanvas(windowWidth, windowHeight);
  background(0);
}

const myline = (x0, y0, x1, y1, s) => {
  // map(value, start1, stop1, start2, stop2, [withinBounds])

  const d = dist(x0, y0, x1, y1);

  const count_ = d / 1.5; // TODO should be dependent on the distance
  for (let i = 0; i <= count_; i += 1) {
    const x = map(i, 0, count_, x0, x1);
    const y = map(i, 0, count_, y0, y1);
    if (Math.random() < 0.6) {
      circle(x, y, s);
    }
  }
};

const PI2 = Math.PI * 2;
const p = 4;
const period = 100;

const pickVerticalCenter = (props) => {
  let v;
  if (props.centerY == undefined) v = approx(randomGaussian(0.5, 0.2));
  else {
    v = props.centerY + approx(randomGaussian()) / 10;
  }
  return { ...props, centerY: v };
};

const pickAmplitude = (props) => ({
  ...props,
  waveAmplitudeY: Math.abs(randomGaussian(0.02, 0.1)),
});

const pickBlocks = () => 10;

let d = false;

function drawLine() {
  let props = {};
  let f = triangle_;

  props = pickVerticalCenter(props);
  props = pickAmplitude(props);

  let wavePeriodMulY = 1 / 10;

  const color_ = color();
  const displacement = random();
  const weight = randomGaussian(3, 0.4);

  const blocks = pickBlocks();

  noStroke();
  fill(color_);

  lastX = undefined;
  lastY = undefined;
  for (let i = 0; i < 100 * period; i++) {
    if (i % period == 0) {
      props = pickVerticalCenter(props);
      props = pickAmplitude(props);
      wavePeriodMulY = 1 / 10;
    }

    y =
      props.centerY +
      props.waveAmplitudeY * f(i, wavePeriodMulY * period + PI2 * displacement);

    x = ((1 / blocks) * i) / period;

    // draw
    if (lastX != undefined) {
      myline(
        lastX * windowWidth,
        lastY * windowHeight,
        x * windowWidth,
        y * windowHeight,
        weight
      );
    }
    lastX = x;
    lastY = y;
  }
}

function draw() {
  noLoop();
  for (let j = 0; j < 20; j++) {
    drawLine(j);
  }
}
