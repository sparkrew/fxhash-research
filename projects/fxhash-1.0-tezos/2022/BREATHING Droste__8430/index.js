const rnd = window.fxrand || Math.random;

const TEXTURE_ARR = ['./droste1.jpg', './droste2.jpg', './droste3.jpg'];
const TEXTURE_SRC = TEXTURE_ARR[Math.floor(rnd() * TEXTURE_ARR.length)];

const size = Math.min(
  window.innerWidth * window.devicePixelRatio,
  window.innerHeight * window.devicePixelRatio,
  1200
);
let imageWidth = size;
let imageHeight = size;

const CONFIG = {
  drostePadBigFactor: Math.floor((imageWidth / 32) * (1 + rnd() / 8)),
  drostePadSmallFactor: Math.floor((imageWidth / 75) * (1 + rnd() / 8)),
  n_friction: rnd(),
  n2_friction: rnd() / 2,
};

if (TEXTURE_SRC === './droste2.jpg') {
  CONFIG.drostePadBigFactor += Math.floor(CONFIG.drostePadBigFactor * 0.1)
  CONFIG.drostePadSmallFactor += Math.floor(CONFIG.drostePadSmallFactor * 0.1)
}

// Invert rotation half of the time
if (rnd() > 0.5) {
  let tmp = CONFIG.drostePadSmallFactor;
  CONFIG.drostePadSmallFactor = CONFIG.drostePadBigFactor;
  CONFIG.drostePadBigFactor = tmp;
}

const renderSizeWidth = imageWidth;
const renderSizeHeight = imageHeight;

let DEPTH_SPEED = 1;

const scene = new THREE.Scene();

const camera = new THREE.OrthographicCamera(
  renderSizeWidth / -2,
  renderSizeWidth / 2,
  renderSizeHeight / 2,
  renderSizeHeight / -2,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  alpha: false,
  preserveDrawingBuffer: true,
});
renderer.setSize(renderSizeWidth, renderSizeHeight);
document.body.appendChild(renderer.domElement);

function adj(m) {
  // Compute the adjugate of m
  return [
    m[4] * m[8] - m[5] * m[7],
    m[2] * m[7] - m[1] * m[8],
    m[1] * m[5] - m[2] * m[4],
    m[5] * m[6] - m[3] * m[8],
    m[0] * m[8] - m[2] * m[6],
    m[2] * m[3] - m[0] * m[5],
    m[3] * m[7] - m[4] * m[6],
    m[1] * m[6] - m[0] * m[7],
    m[0] * m[4] - m[1] * m[3],
  ];
}
function multmm(a, b) {
  // multiply two matrices
  let c = Array(9);
  for (let i = 0; i != 3; ++i) {
    for (let j = 0; j != 3; ++j) {
      let cij = 0;
      for (let k = 0; k != 3; ++k) {
        cij += a[3 * i + k] * b[3 * k + j];
      }
      c[3 * i + j] = cij;
    }
  }
  return c;
}
function multmv(m, v) {
  return [
    m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
    m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
    m[6] * v[0] + m[7] * v[1] + m[8] * v[2],
  ];
}
function basisToPoints(x1, y1, x2, y2, x3, y3, x4, y4) {
  let m = [x1, x2, x3, y1, y2, y3, 1, 1, 1];
  let v = multmv(adj(m), [x4, y4, 1]);
  return multmm(m, [v[0], 0, 0, 0, v[1], 0, 0, 0, v[2]]);
}
function general2DProjection(
  x1s,
  y1s,
  x1d,
  y1d,
  x2s,
  y2s,
  x2d,
  y2d,
  x3s,
  y3s,
  x3d,
  y3d,
  x4s,
  y4s,
  x4d,
  y4d
) {
  let s = basisToPoints(x1s, y1s, x2s, y2s, x3s, y3s, x4s, y4s);
  let d = basisToPoints(x1d, y1d, x2d, y2d, x3d, y3d, x4d, y4d);
  return multmm(d, adj(s));
}
function project(m, x, y) {
  let v = multmv(m, [x, y, 1]);
  return [v[0] / v[2], v[1] / v[2]];
}
function transform2d(w, h, x1, y1, x2, y2, x3, y3, x4, y4) {
  let t = general2DProjection(
    0,
    0,
    x1,
    y1,
    w,
    0,
    x2,
    y2,
    0,
    h,
    x3,
    y3,
    w,
    h,
    x4,
    y4
  );
  for (i = 0; i != 9; ++i) t[i] = t[i] / t[8];
  let matrix = new THREE.Matrix4();
  matrix.fromArray([
    t[0],
    t[3],
    0,
    t[6],
    t[1],
    t[4],
    0,
    t[7],
    0,
    0,
    1,
    0,
    t[2],
    t[5],
    0,
    t[8],
  ]);
  return matrix;
}

const textureLoader = new THREE.TextureLoader();

let n2 = 0;

function drostePad(n) {
  // return Math.floor(rnd() * n);
  n2 += 0.05;
  const final =
    n * 0.1 +
    (1 + Math.sin(n2 * CONFIG.n2_friction + n * CONFIG.n_friction)) * n * 0.5;
  return final * 3;
}

async function loadTexture(path) {
  return new Promise((resolve) => {
    textureLoader.load(path, resolve);
  });
}

let textureRef;

async function main() {
  const texture = await loadTexture(TEXTURE_SRC);
  textureRef = texture;

  let material = new THREE.MeshBasicMaterial({ map: texture });
  let planeGeometry = new THREE.PlaneGeometry(imageWidth, imageHeight, 10, 10);
  let mesh = new THREE.Mesh(planeGeometry, material);
  mesh.position.set(0, 0, -1);
  scene.add(mesh);

  const textureBg = await loadTexture(TEXTURE_SRC);
  let materialBg = new THREE.MeshBasicMaterial({ map: textureBg });
  let planeGeometryBg = new THREE.PlaneGeometry(imageWidth, imageHeight, 5, 5);
  let meshBg = new THREE.Mesh(planeGeometryBg, materialBg);
  meshBg.position.set(0, 0, -10);
  scene.add(meshBg);

  camera.position.z = 100;

  mesh.updateMatrix();
  mesh.userData.originalMatrix = mesh.matrix.clone();

  mesh.matrixAutoUpdate = false;

  async function animate() {
    mesh.material.dispose();
    textureRef.dispose();

    const texture = await loadTexture(
      document.querySelector('canvas').toDataURL('image/jpeg', 0.9)
    );
    textureRef = texture;
    mesh.material.map = texture;
    mesh.material.needsUpdate = true;

    // const texture = new THREE.CanvasTexture(document.querySelector('canvas'));
    // textureRef = texture;
    // mesh.material.map = texture;

    mesh.userData.originalMatrix.decompose(
      mesh.position,
      mesh.quaternion,
      mesh.scale
    );
    mesh.matrix.copy(mesh.userData.originalMatrix);
    mesh.applyMatrix4(
      new THREE.Matrix4().makeTranslation(imageWidth / 2, imageHeight / 2, 0)
    );

    const rndSmall = drostePad(CONFIG.drostePadSmallFactor);
    const rndBig = drostePad(CONFIG.drostePadBigFactor);

    //bottom left
    const x1 = rndSmall;
    const y1 = rndBig;

    // bottom right
    const x2 = imageWidth - rndBig;
    const y2 = rndSmall;

    // top left
    const x3 = rndBig;
    const y3 = imageHeight - rndSmall;

    // top right
    const x4 = imageWidth - rndSmall;
    const y4 = imageHeight - rndBig;

    mesh.applyMatrix4(
      transform2d(imageWidth, imageHeight, x1, y1, x2, y2, x3, y3, x4, y4)
    );

    mesh.applyMatrix4(
      new THREE.Matrix4().makeTranslation(-imageWidth / 2, -imageHeight / 2, 0)
    );

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  renderer.render(scene, camera);
  window.setTimeout(animate, 900);
}

main();
