"use strict";

p5.Shader.prototype._setMatrixUniforms = function() {
  this.setUniform('uProjectionMatrix', this._renderer.uPMatrix.mat4);
  if (this.isStrokeShader()) this.setUniform('uPerspective', 1);
  this.setUniform('uModelViewMatrix', this._renderer.uMVMatrix.mat4);
  this.setUniform('uViewMatrix', this._renderer._curCamera.cameraMatrix.mat4);
  if (this.uniforms.uNormalMatrix) {
    this._renderer.uNMatrix.inverseTranspose(this._renderer.uMVMatrix);
    this.setUniform('uNormalMatrix', this._renderer.uNMatrix.mat3);
  }
};

let OSN;

function setup() {
  console.log(fxhash);

  OSN = new OpenSimplexNoise(fxrand() * 1000); // XXX

  createCanvas(windowWidth, windowHeight, WEBGL);
  _redraw()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  _redraw()
}

function _redraw() {
  pixelDensity(1);
  strokeWeight(0.2);

  // ---

  background(255, 0.9 * 255, 0.7 * 255);
  noFill();

  perspective(PI / 3, windowWidth / windowHeight, 1.0, 1000);

  resetMatrix();
  scale(1, -1, 1);
  translate(0, 0, -250);
  rotateX(-PI / 3);

  drawSpiral(0, 120, 50, 1.0, 3.0, 7.5, 0.05);
}

function drawSpiral(r1, r2, turns, DD1, DD2, height, noiseScale) {
  let l = TWO_PI * turns;
  let L = PI * turns * (r1 + r2);
  let dr = (r2 - r1) / l;
  let DD = (DD2 - DD1) / l;
  let D = 0;

  beginShape();

  do
  {
    let r = Math.sqrt(r1 * r1 + 2 * dr * D);
    let d = (r - r1) / dr;
    D += DD1 + d * DD;

    let x = -Math.sin(d) * r;
    let y = +Math.cos(d) * r;
    let z = OSN.noise2D(x * noiseScale, y * noiseScale) * height;

    vertex(x, y, z);
  }
  while (D < L);

  endShape();
}
