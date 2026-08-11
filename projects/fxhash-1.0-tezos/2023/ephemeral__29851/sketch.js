// 基本
import * as THREE from "three";
import { generativePalette } from "palette";
import { OrbitControls } from "three/addons/controls/OrbitControls";
// シェーダー
import vert from "vertex";
import frag from "fragment";

const seed = $fx.rand();
console.log(seed);

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", onResize);

let renderer, camera, controls;
let palette;
let aspect = 2;
aspect = 1 / Math.sqrt(2);
// aspect = Math.sqrt(2);

let windowSize = 1000;
let width, height;
let mountainList = [];

const scene = new THREE.Scene();
const rotate = $fx.rand() > 0.5;

const rectAppearance = $fx.rand() > 0.5;

function onResize() {
  width = windowSize;
  height = windowSize;
  if (aspect > 1) width *= aspect;
  else height /= aspect;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function showHelper(scene) {
  const axesHelper = new THREE.AxesHelper(windowSize);
  scene.add(axesHelper);
  const gridHelper = new THREE.GridHelper(windowSize, 100);
  scene.add(gridHelper);
}

function useOrthographicCamera() {
  camera = new THREE.OrthographicCamera(
    -windowSize / 2,
    windowSize / 2,
    windowSize / 2,
    -windowSize / 2,
    -windowSize * 2.5,
    windowSize * 2.5
  );
  if (rotate)
    camera.position.set(windowSize / 2, windowSize / 3, -windowSize / 2);
  else camera.position.set(windowSize / 2, windowSize / 3, windowSize / 2);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function usePerspectiveCamera() {
  camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
  camera.position.set(windowSize / 2, windowSize / 2, windowSize / 2);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
}

function shufflePalette(palette, isBase) {
  let base;
  if (isBase) {
    base = palette[0];
    palette.shift();
  }
  for (let i = palette.length - 1; i > 0; i--) {
    const r = Math.floor($fx.rand() * (i + 1));
    const tmp = palette[i];
    palette[i] = palette[r];
    palette[r] = tmp;
  }
  if (isBase) {
    palette.unshift(base);
  }
  return palette;
}

function createMountain(scale, randX, randY, x, y, planeSizeW, planeSizeH) {
  palette = shufflePalette(palette, true);
  const uniform = {
    u_time: { type: "f", value: 0.0 },
    color1: {
      type: "vec3",
      value: palette[0],
    },
    color2: {
      type: "vec3",
      value: palette[1],
    },
    color3: {
      type: "vec3",
      value: palette[2],
    },
    color4: {
      type: "vec3",
      value: palette[3],
    },
    noiseHeight: {
      type: "f",
      value:
        Math.max(
          Math.pow(Math.max(planeSizeW / width, planeSizeH / height), 0.5) *
            30.0,
          75.0
        ) + 40.0,
    },
    scale: { type: "f", value: scale },
    randX: { type: "f", value: randX },
    randY: { type: "f", value: randY },
    isRect: { type: "f", value: rectAppearance ? $fx.rand() : 0.0 },
    windowSizeW: { type: "f", value: planeSizeW },
    windowSizeH: { type: "f", value: planeSizeH },
    uvRange: {
      type: "f",
      value: (planeSizeW / width) * ($fx.rand() * 3.0 + 2.0),
    },
  };

  const mountain = new THREE.Mesh(
    new THREE.PlaneGeometry(
      planeSizeW,
      planeSizeH,
      (planeSizeW / width) * 300,
      (planeSizeH / height) * 300
    ),
    new THREE.ShaderMaterial({
      uniforms: uniform,
      vertexShader: vert,
      fragmentShader: frag,
    })
  );
  mountain.rotation.x = -Math.PI / 2;
  mountain.position.set(x + planeSizeW / 2, 0, y + planeSizeH / 2);
  scene.add(mountain);
  mountainList.push(mountain);
}

// 再帰的に分割する
function divideRect(x, y, w, h, minW, minH, count) {
  let divideRate = $fx.rand() * 0.5 + 0.25;
  if (
    count === 0 ||
    ($fx.rand() > 0.15 && (w * divideRate > minW || h * divideRate > minH))
  ) {
    if (w > h) {
      divideRect(x, y, w * divideRate, h, minW, minH, count + 1);
      divideRect(
        x + w * divideRate,
        y,
        w * (1 - divideRate),
        h,
        minW,
        minH,
        count + 1
      );
    } else {
      divideRect(x, y, w, h * divideRate, minW, minH, count + 1);
      divideRect(
        x,
        y + h * divideRate,
        w,
        h * (1 - divideRate),
        minW,
        minH,
        count + 1
      );
    }
  } else {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({
        color: palette[Math.floor($fx.rand() * palette.length)],
      })
    );
    plane.position.set(x + w / 2, 0, y + h / 2);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);
    createMountain(
      Math.max(w / minW, h / minH),
      $fx.rand() * 0.5,
      $fx.rand() * 0.5,
      x,
      y,
      w,
      h
    );
  }
}

function init() {
  // シーンの定義 ---------------------------------------
  width = windowSize;
  height = windowSize;
  if (aspect > 1) width *= aspect;
  else height /= aspect;

  palette = generativePalette();
  // palette = colorPalette();
  palette.reverse();

  // paletteをシャッフル
  // palette = shufflePalette(palette, true);

  // paletteをcolor型に変換
  for (let i = 0; i < palette.length; i++) {
    palette[i] = new THREE.Color(palette[i]);
  }

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas"),
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  scene.background = new THREE.Color(palette[0]);

  // showHelper(scene);

  useOrthographicCamera();

  // controls = new OrbitControls(camera, document.body);
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.2;

  // メッシュの定義 ---------------------------------------

  let scale = 2.5;

  let planeSizeW = width * scale;
  let planeSizeH = height * scale;

  let divX = Math.floor($fx.rand() * 6) + 5;
  let divY = Math.floor($fx.rand() * 6) + 5;

  let minGridSizeW = planeSizeW / divX;
  let minGridSizeH = planeSizeH / divY;

  divideRect(
    -planeSizeW / 2,
    -planeSizeH / 2,
    planeSizeW,
    planeSizeH,
    minGridSizeW,
    minGridSizeH,
    0
  );

  animate();

  function animate() {
    requestAnimationFrame(animate);
    // controls.update();
    renderer.render(scene, camera);
    for (let i = 0; i < mountainList.length; i++) {
      mountainList[i].material.uniforms.u_time.value += 0.01;
    }
  }
}
