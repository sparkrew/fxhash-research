const canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("webgl2");
const RATIO = 16 / 10;

// Variable globale accessible par resize()
let resLoc = null;

function resize() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  let w, h;
  if (vw / vh > RATIO) {
    h = vh;
    w = Math.floor(h * RATIO);
  } else {
    w = vw;
    h = Math.floor(w / RATIO);
  }
  const DPR = Math.min(devicePixelRatio, 1.5);
  const pw = Math.floor(w * DPR);
  const ph = Math.floor(h * DPR);
  canvas.width  = pw;
  canvas.height = ph;
  canvas.style.width  = w + 'px';
  canvas.style.height = h + 'px';

  gl.viewport(0, 0, pw, ph);
  // On vérifie que le program est prêt avant d'envoyer l'uniform
  if (resLoc) gl.uniform2f(resLoc, pw, ph);
}

window.addEventListener("resize", resize);
resize(); // premier appel (resLoc est encore null, c'est ok)

async function loadShader() {
  const res = await fetch("shader.frag");
  return await res.text();
}
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}
function createProgram(gl, vs, fs) {
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  return program;
}

async function main() {
  let densityRand = $fx.rand();

  let densityLabel;
  let N1, N2, N3;

  if (densityRand < 0.1) {
    densityLabel = "Sparse";
    N1 = 2.0;
    N2 = 6.0;
    N3 = 20.0;

  } else if (densityRand < 0.72) {
    densityLabel = "Balanced";
    N1 = 3.0;
    N2 = 12.0;
    N3 = 50.0;

  } else if (densityRand < 0.96) {
    densityLabel = "Dense";
    N1 = 4.0;
    N2 = 20.0;
    N3 = 80.0;

  } else {
    densityLabel = "Hyper Dense";
    N1 = 6.0;
    N2 = 40.0;
    N3 = 120.0;
  }

  let speedRand = $fx.rand();

  let speedLabel, globalSpeedFactor;
  if (speedRand < 0.25) {
    speedLabel = "Still";
    globalSpeedFactor = 0.1;
  } else if (speedRand < 0.81) {
    speedLabel = "Flow";
    globalSpeedFactor = 1.0;
  } else {
    speedLabel = "Surge";
    globalSpeedFactor = 2.2;
  }

  // Palette
  let p = $fx.rand();

  let paletteLabel, paletteId;
  let tint = [1.0, 1.0, 1.0];

  if (p < 0.10) {
    paletteLabel = "Mono";
    paletteId = 0;
  } else if (p < 0.7) {
    paletteLabel = "Gray";
    paletteId = 1;
  } else if (p < 0.85) {
    paletteLabel = "Sepia";
    paletteId = 2;
    tint = [0.76, 0.64, 0.5];
  } else {
    paletteLabel = "Icy";
    paletteId = 3;
    tint = [0.72, 0.95, 1.0];
  }

  // Legendary
  let hasGoldSubLayers = $fx.rand() < 0.04; // 4% rare
  let hasGold = $fx.rand() < 0.03; // 3% rare
  if (hasGoldSubLayers) {
      hasGold = false;
  }

  let noLayer3 = $fx.rand() < 0.048; // 5% rare

  let isInverted = $fx.rand() < 0.01; // 1% rare

  let isAnomaly = hasGold && isInverted && paletteLabel == "Icy"; // Lovely anomaly, is beautiful
  if (isAnomaly) {
    paletteLabel = "Anomaly";
  }
  
  // - Fxhash Features 
  $fx.features({
    "Phase": isInverted ? "Negative" : "Positive",
    "Depth": noLayer3 ? "Shallow" : "Deep",
    "Inlay": hasGold ? "Gold" : "None",
    "Gemstone": hasGoldSubLayers ? "Ruby" : "None",
    "Palette": paletteLabel,
    "Motion": speedLabel,
    "Structure": densityLabel,
  });

  const fragSource = await loadShader();
  const vertSource = `#version 300 es
  in vec4 position;
  void main() { gl_Position = position; }`;

  const vs = createShader(gl, gl.VERTEX_SHADER, vertSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fragSource);
  const program = createProgram(gl, vs, fs);
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1,-1, 1,-1, -1,1,
    -1,1, 1,-1,  1,1
  ]), gl.STATIC_DRAW);
  const posAttrib = gl.getAttribLocation(program, "position");
  gl.enableVertexAttribArray(posAttrib);
  gl.vertexAttribPointer(posAttrib, 2, gl.FLOAT, false, 0, 0);

  const timeLoc = gl.getUniformLocation(program, "time");
  resLoc = gl.getUniformLocation(program, "resolution"); // ← affecte la globale

  // Maintenant que resLoc existe, on force un resize pour envoyer la bonne résolution
  resize();

  // Seeds fxhash
  gl.uniform1f(gl.getUniformLocation(program, "u_seedhashA"), $fx.rand());
  gl.uniform1f(gl.getUniformLocation(program, "u_seedhashB"), $fx.rand());
  gl.uniform1f(gl.getUniformLocation(program, "u_seedhashC"), $fx.rand());
  gl.uniform1f(gl.getUniformLocation(program, "u_globalSeed"), $fx.randminter());

  
  let jitter = 0.85 + $fx.rand() * 0.3;

  N1 *= jitter;
  N2 *= jitter;
  N3 *= jitter;
  const uN1 = gl.getUniformLocation(program, "u_N1");
  const uN2 = gl.getUniformLocation(program, "u_N2");
  const uN3 = gl.getUniformLocation(program, "u_N3");

  gl.uniform1f(uN1, N1);
  gl.uniform1f(uN2, N2);
  gl.uniform1f(uN3, N3);

  let jitter2 = 0.9 + $fx.rand() * 0.2;

  let baseR1 = 0.16;
  let baseR2 = 0.16;
  let baseR3 = 0.32;

  // facteur inverse de densité (plus N grand → plus petit)
  let f1 = clamp01(3.0 / N1);
  let f2 = clamp01(12.0 / N2);
  let f3 = clamp01(50.0 / N3);

  let R1 = baseR1 * f1 * jitter2;
  let R2 = baseR2 * f2 * jitter2;
  let R3 = baseR3 * f3 * jitter2;

  function clamp01(x){ return Math.max(0.5, Math.min(1.5, x)); }

  gl.uniform1f(gl.getUniformLocation(program, "u_R1"), R1);
  gl.uniform1f(gl.getUniformLocation(program, "u_R2"), R2);
  gl.uniform1f(gl.getUniformLocation(program, "u_R3"), R3);

  const uSpeedLoc = gl.getUniformLocation(program, "u_speedFactor");
  gl.uniform1f(uSpeedLoc, globalSpeedFactor);

  gl.uniform1i(gl.getUniformLocation(program, "u_paletteId"), paletteId);
  gl.uniform3f(gl.getUniformLocation(program, "u_tint"), tint[0], tint[1], tint[2]);
  gl.uniform1f(gl.getUniformLocation(program, "u_hasGoldSubLayers"), hasGoldSubLayers ? 1.0 : 0.0);
  gl.uniform1f(gl.getUniformLocation(program, "u_hasGold"), hasGold ? 1.0 : 0.0);
  gl.uniform1f(gl.getUniformLocation(program, "u_noLayer3"), noLayer3 ? 1.0 : 0.0);
  gl.uniform1f(gl.getUniformLocation(program, "u_inverted"), isInverted ? 1.0 : 0.0);

  let previewDone = false;
  const start = performance.now();
  function render() {
    gl.uniform1f(timeLoc, (performance.now() - start) * 0.001);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    if (!previewDone) {
      $fx.preview();
      previewDone = true;
    }
    requestAnimationFrame(render);
  }
  render();
}

main();