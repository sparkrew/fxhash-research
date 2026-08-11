let seed = 0; //seed Hash
let FOCUS_FREQ_X, FOCUS_FREQ_Y, FOCUS_A_X, FOCUS_A_Y, FOCUS_BASE;
let R_FREQ, G_FREQ, B_FREQ;
let R_BASE, G_BASE, B_BASE;
let agents;
let theShader;
let N_AGENTS = 20;

function preload() {
  theShader = loadShader('shader.vert', 'shader.frag');
  //N_AGENTS = random(15, 30);
  agents = createGraphics(1, N_AGENTS);
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //createCanvas(6000, 2000, WEBGL);
  seed = int(fxrand() * 100000000); // FXHASH seed rand
  randomSeed(seed);
  for (let i = 0; i < N_AGENTS; i++) {
    let c = color(random(255), random(255), random(255));
    agents.set(0, i, c);
    agents.updatePixels();
  }
  FOCUS_FREQ_X = random(100, 300);
  FOCUS_FREQ_Y = random(100, 300);
  FOCUS_FREQ_X = 300;
  FOCUS_FREQ_Y = 300;
  FOCUS_A_X = random(0.5, 1);
  FOCUS_A_Y = random(0.5, 1);
  FOCUS_BASE = random(1, 3);
  R_FREQ = random(0, 4);
  G_FREQ = random(0, 4);
  B_FREQ = random(0, 4);
  R_BASE = random(0, TWO_PI);
  G_BASE = random(0, TWO_PI);
  B_BASE = random(0, TWO_PI);
}
function draw() {
  background(255, 0, 0);
  theShader.setUniform('u_resolution', [width, height]);
  theShader.setUniform('FOCUS_FREQ_X', FOCUS_FREQ_X);
  theShader.setUniform('FOCUS_FREQ_Y', FOCUS_FREQ_Y);
  theShader.setUniform('FOCUS_A_X', FOCUS_A_X);
  theShader.setUniform('FOCUS_A_Y', FOCUS_A_Y);
  theShader.setUniform('FOCUS_BASE', FOCUS_BASE);
  theShader.setUniform('u_agents', agents);
  theShader.setUniform('R_FREQ', R_FREQ);
  theShader.setUniform('G_FREQ', G_FREQ);
  theShader.setUniform('B_FREQ', B_FREQ);
  theShader.setUniform('R_BASE', R_BASE);
  theShader.setUniform('G_BASE', G_BASE);
  theShader.setUniform('B_BASE', B_BASE);

  shader(theShader);
  rect(0, 0, width, height);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}