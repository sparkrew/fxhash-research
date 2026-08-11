// Archipeligos - Floating Island Temple Complex
// Generative art for fxhash

import * as THREE from './libs/three/build/three.module.js';
import { OrbitControls } from './libs/three/examples/jsm/controls/OrbitControls.js';
import { Water } from './libs/three/examples/jsm/objects/Water.js';
import { Sky } from './libs/three/examples/jsm/objects/Sky.js';
import { ImprovedNoise } from './libs/three/examples/jsm/math/ImprovedNoise.js';

// Use fxhash random function
const rand = $fx.rand;

console.log("Archipeligos - Hash:", $fx.hash);

// Generate random features for this unique hash
const features = {
  skyTurbidity: 5 + rand() * 15,
  skyRayleigh: 0.5 + rand() * 3,
  waterColor: hslToHex(rand() * 360, 0.3 + rand() * 0.4, 0.3 + rand() * 0.3),
  numIslands: 3 + Math.floor(rand() * 6), // 3-8
  numSatelliteTemples: 2 + Math.floor(rand() * 4), // 2-5
  structureComplexity: 0.5 + rand() * 1.5, // 0.5-2.0
  connectionDensity: 0.2 + rand() * 0.7, // 0.2-0.9
  // Visual style
  colorPalette: ['balanced', 'warm', 'cool', 'vibrant', 'monochrome', 'pastel'][Math.floor(rand() * 6)],
  materialStyle: ['standard', 'metallic', 'matte', 'glossy', 'iridescent'][Math.floor(rand() * 5)],
  recursionDepth: 2 + Math.floor(rand() * 4), // 2-5
  architectureStyle: ['mixed', 'geometric', 'organic', 'vertical', 'horizontal'][Math.floor(rand() * 5)]
};

console.log("Generated features:", features);

// Helper function to convert HSL to hex
function hslToHex(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color);
  };
  const r = f(0);
  const g = f(8);
  const b = f(4);
  return (r << 16) | (g << 8) | b;
}

// Apply color palette shifts based on style
function applyPaletteShift(baseColor, palette) {
  const r = (baseColor >> 16) & 255;
  const g = (baseColor >> 8) & 255;
  const b = baseColor & 255;
  
  let nr = r, ng = g, nb = b;
  
  switch(palette) {
    case 'warm':
      nr = Math.min(255, r * 1.3);
      ng = Math.min(255, g * 1.1);
      nb = Math.max(0, b * 0.7);
      break;
    case 'cool':
      nr = Math.max(0, r * 0.7);
      ng = Math.min(255, g * 1.1);
      nb = Math.min(255, b * 1.3);
      break;
    case 'vibrant':
      const max = Math.max(r, g, b);
      nr = r === max ? 255 : r * 0.6;
      ng = g === max ? 255 : g * 0.6;
      nb = b === max ? 255 : b * 0.6;
      break;
    case 'monochrome':
      const gray = r * 0.3 + g * 0.59 + b * 0.11;
      nr = ng = nb = gray;
      break;
    case 'pastel':
      nr = r * 0.7 + 200 * 0.3;
      ng = g * 0.7 + 200 * 0.3;
      nb = b * 0.7 + 200 * 0.3;
      break;
    // 'balanced' keeps original
  }
  
  return ((nr & 255) << 16) | ((ng & 255) << 8) | (nb & 255);
}

// Apply material style properties
function getMaterialProps(style) {
  switch(style) {
    case 'metallic':
      return { metalness: 0.8, roughness: 0.2 };
    case 'matte':
      return { metalness: 0.0, roughness: 0.9 };
    case 'glossy':
      return { metalness: 0.1, roughness: 0.1 };
    case 'iridescent':
      return { metalness: 0.5, roughness: 0.3 };
    default: // 'standard'
      return { metalness: 0.3, roughness: 0.6 };
  }
}

// Register features with fxhash
$fx.features({
  "Sky Turbidity": features.skyTurbidity.toFixed(1),
  "Sky Rayleigh": features.skyRayleigh.toFixed(1),
  "Water Color": `#${features.waterColor.toString(16).padStart(6, '0')}`,
  "Islands": features.numIslands,
  "Temple Satellites": features.numSatelliteTemples,
  "Complexity": features.structureComplexity.toFixed(2),
  "Connection Density": features.connectionDensity.toFixed(2),
  "Color Palette": features.colorPalette,
  "Material Style": features.materialStyle,
  "Recursion Depth": features.recursionDepth,
  "Architecture Style": features.architectureStyle
});

// Global variables
let container;
let camera, scene, renderer;
let controls, water, sun;
const templeGroups = [];

const lightDir = new THREE.Vector3(1, 1, 2).normalize();

const terrainSize = 10;
const structureSize = 25;
const worldWidth = 20, worldDepth = 20;

// Shader code
const shaderVertex = `
  varying vec2 vUv;
  varying vec3 vNormal;
  void main(){
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`;

function generateHeight(width, height) {
  const data = new Float32Array(width * height);
  const perlin = new ImprovedNoise();
  const size = width * height;
  const z = rand() * 100;
  
  let quality = 1;
  
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width;
      const y = ~~(i / width);
      data[i] += Math.abs(
        perlin.noise(x / quality, y / quality, z) * quality
      );
    }
    quality *= 5;
  }
  
  // Normalize
  let min = Infinity;
  let max = -Infinity;
  
  for (let i = 0; i < size; i++) {
    min = Math.min(min, data[i]);
    max = Math.max(max, data[i]);
  }
  
  for (let i = 0; i < size; i++) {
    data[i] = (data[i] - min) / (max - min);
  }
  
  return data;
}

function generateTexture(data, width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.fillStyle = '#000';
  context.fillRect(0, 0, width, height);
  
  const image = context.getImageData(0, 0, canvas.width, canvas.height);
  const imageData = image.data;
  
  const vector3 = new THREE.Vector3();
  const sun = new THREE.Vector3(1, 0.8, 1).normalize();
  
  let minHeight = 255, maxHeight = 0;
  for (let j = 0; j < data.length; j++) {
    minHeight = Math.min(minHeight, data[j]);
    maxHeight = Math.max(maxHeight, data[j]);
  }
  const heightRange = maxHeight - minHeight;
  
  for (let i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
    vector3.x = (data[Math.max(0, j - 2)] - data[Math.min(data.length - 1, j + 2)]) * 2;
    vector3.y = 2;
    vector3.z = (data[Math.max(0, j - width * 2)] - data[Math.min(data.length - 1, j + width * 2)]) * 2;
    vector3.normalize();
    
    const shade = vector3.dot(sun) * 0.9;
    const heightNorm = Math.pow((data[j] - minHeight) / heightRange, 1.2);
    
    let r, g, b;
    
    if (heightNorm < 0.12) {
      r = 230; g = 215; b = 185;
    } else if (heightNorm < 0.3) {
      r = 120 + heightNorm * 70; 
      g = 150 + heightNorm * 60;
      b = 80 + heightNorm * 40;
    } else if (heightNorm < 0.6) {
      r = 70 + heightNorm * 50;
      g = 100 + heightNorm * 60; 
      b = 50 + heightNorm * 30;
    } else if (heightNorm < 0.8) {
      r = 110 + heightNorm * 50;
      g = 110 + heightNorm * 50;
      b = 100 + heightNorm * 40;
    } else {
      r = 160 + heightNorm * 70;
      g = 160 + heightNorm * 65;
      b = 155 + heightNorm * 70;
    }
    
    if (shade > 0) {
      r = Math.min(255, r * (1 + shade * 1.5));
      g = Math.min(255, g * (1 + shade * 1.5));
      b = Math.min(255, b * (1 + shade * 1.5));
    } else {
      r = Math.max(0, r * (1 + shade * 0.8));
      g = Math.max(0, g * (1 + shade * 0.8));
      b = Math.max(0, b * (1 + shade * 0.8));
    }
    
    imageData[i] = Math.min(255, Math.max(0, r));
    imageData[i + 1] = Math.min(255, Math.max(0, g));
    imageData[i + 2] = Math.min(255, Math.max(0, b));
    imageData[i + 3] = 255;
  }
  
  context.putImageData(image, 0, 0);
  return canvas;
}

function createFloatingIsland(ix, iz, islandSize, islandDetail) {
  const islandData = generateHeight(islandDetail, islandDetail);
  const islandGeometry = new THREE.PlaneGeometry(islandSize, islandSize, islandDetail - 1, islandDetail - 1);
  islandGeometry.rotateX(-Math.PI / 2);
  
  const verts = islandGeometry.attributes.position.array;
  
  // Vary island height characteristics
  const heightMultiplier = 0.5 + rand() * 1.5; // 0.5x-2.0x height variation (more dramatic)
  const edgeSharpness = 1.5 + rand() * 2.5; // 1.5-4.0 edge sharpness (wider range)
  const centerPeakBoost = 10 + rand() * 40; // 10-50 center boost (more variation)
  
  for (let j = 0, k = 0, l = verts.length; j < l; j++, k += 3) {
    const x = (j % islandDetail) / (islandDetail - 1) * 2 - 1;
    const y = (~~(j / islandDetail)) / (islandDetail - 1) * 2 - 1;
    const edge = 1.0 - Math.pow(Math.max(Math.abs(x), Math.abs(y)), edgeSharpness);
    verts[k + 1] = islandData[j] * 45.0 * edge * heightMultiplier;
    
    const distFromCenter = Math.sqrt(x*x + y*y);
    const centerBoost = Math.max(0, 1.0 - distFromCenter) * centerPeakBoost;
    verts[k + 1] += centerBoost;
  }
  
  const islandTexture = new THREE.CanvasTexture(generateTexture(islandData, islandDetail, islandDetail));
  islandTexture.wrapS = islandTexture.wrapT = THREE.ClampToEdgeWrapping;
  islandTexture.repeat.set(1, 1);
  
  // Apply color palette influence to islands
  let islandColor = 0xdedbb0;
  const paletteInfluence = rand();
  if (paletteInfluence < 0.5) {
    islandColor = applyPaletteShift(islandColor, features.colorPalette);
  }
  
  const islandMaterial = new THREE.MeshStandardMaterial({
    map: islandTexture,
    color: islandColor,
    side: THREE.DoubleSide,
    roughness: 0.9 + rand() * 0.1,
    metalness: 0
  });
  
  const island = new THREE.Mesh(islandGeometry, islandMaterial);
  island.position.set(ix, -9, iz);
  scene.add(island);
  
  // Add decorative elements to some islands
  const decorationChance = rand();
  if (decorationChance < 0.3) {
    addIslandDecoration(ix, iz, islandSize);
  }
}

function addIslandDecoration(x, z, islandSize) {
  const decorationType = Math.floor(rand() * 4);
  const material = getRandomShaderFromPool();
  
  switch(decorationType) {
    case 0: // Scattered rocks
      const rockCount = 3 + Math.floor(rand() * 5);
      for (let i = 0; i < rockCount; i++) {
        const offsetX = (rand() - 0.5) * islandSize * 0.6;
        const offsetZ = (rand() - 0.5) * islandSize * 0.6;
        const rockSize = 2 + rand() * 4;
        const rock = new THREE.Mesh(
          new THREE.DodecahedronGeometry(rockSize, 0),
          material
        );
        rock.position.set(x + offsetX, -5 + rand() * 3, z + offsetZ);
        rock.rotation.set(rand() * Math.PI, rand() * Math.PI, rand() * Math.PI);
        scene.add(rock);
      }
      break;
      
    case 1: // Small pillars
      const pillarCount = 2 + Math.floor(rand() * 4);
      for (let i = 0; i < pillarCount; i++) {
        const offsetX = (rand() - 0.5) * islandSize * 0.5;
        const offsetZ = (rand() - 0.5) * islandSize * 0.5;
        const height = 8 + rand() * 12;
        const radius = 1 + rand() * 2;
        const pillar = new THREE.Mesh(
          new THREE.CylinderGeometry(radius, radius * 1.2, height, 6),
          material
        );
        pillar.position.set(x + offsetX, -5 + height/2, z + offsetZ);
        scene.add(pillar);
      }
      break;
      
    case 2: // Crystals
      const crystalCount = 3 + Math.floor(rand() * 4);
      for (let i = 0; i < crystalCount; i++) {
        const offsetX = (rand() - 0.5) * islandSize * 0.6;
        const offsetZ = (rand() - 0.5) * islandSize * 0.6;
        const height = 5 + rand() * 8;
        const crystal = new THREE.Mesh(
          new THREE.ConeGeometry(1.5 + rand(), height, 6),
          material
        );
        crystal.position.set(x + offsetX, -5 + height/2, z + offsetZ);
        crystal.rotation.z = (rand() - 0.5) * 0.3;
        scene.add(crystal);
      }
      break;
      
    case 3: // Ruined arch
      const archWidth = 10 + rand() * 8;
      const archHeight = 12 + rand() * 8;
      const thickness = 2 + rand() * 2;
      
      const leftPillar = new THREE.Mesh(
        new THREE.BoxGeometry(thickness, archHeight * 0.7, thickness),
        material
      );
      leftPillar.position.set(x - archWidth/2, -5 + archHeight * 0.35, z);
      leftPillar.rotation.z = (rand() - 0.5) * 0.2;
      scene.add(leftPillar);
      
      const rightPillar = new THREE.Mesh(
        new THREE.BoxGeometry(thickness, archHeight * 0.6, thickness),
        material
      );
      rightPillar.position.set(x + archWidth/2, -5 + archHeight * 0.3, z);
      rightPillar.rotation.z = (rand() - 0.5) * 0.2;
      scene.add(rightPillar);
      break;
  }
}

function makeFragment(freq, speed, offset, pattern) {
  // Apply color palette shift to the base colors
  const baseColor = Math.floor(rand() * 0xFFFFFF);
  const shiftedColor = applyPaletteShift(baseColor, features.colorPalette);
  const r = ((shiftedColor >> 16) & 255) / 255.0;
  const g = ((shiftedColor >> 8) & 255) / 255.0;
  const b = (shiftedColor & 255) / 255.0;
  
  return `
uniform float time;
uniform vec3 lightDir;
uniform float metalness;
uniform float roughness;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec2 uv = vUv*2.0 - 1.0;
  float t = time*${speed.toFixed(1)}; 
  float f = ${freq.toFixed(1)};
  float v = 0.0;
  
  ${pattern < 2 ? 
    'v = sin(uv.x*f + t) * cos(uv.y*f - t);' : 
    'v = sin(length(uv)*f*3.14 - t);' }
  
  // Apply color palette shift
  vec3 baseShift = vec3(${r.toFixed(3)}, ${g.toFixed(3)}, ${b.toFixed(3)});
  vec3 base = 0.5 + 0.5 * cos(vec3(v) + vec3(${offset.join(",")}));
  base = mix(base, base * baseShift * 2.0, 0.4);
  
  vec3 norm = normalize(vNormal);
  float diff = max(dot(norm, lightDir), 0.0);
  
  // Apply material properties
  float ambientStrength = mix(0.2, 0.5, roughness);
  float specularStrength = mix(0.1, 0.8, metalness);
  vec3 reflectDir = reflect(-lightDir, norm);
  float spec = pow(max(dot(reflectDir, normalize(vec3(0.0, 1.0, 1.0))), 0.0), mix(2.0, 32.0, 1.0 - roughness));
  
  vec3 color = base * (ambientStrength + diff * (1.0 - metalness * 0.5)) + vec3(spec * specularStrength);
  
  gl_FragColor = vec4(color, 1.0);
}`;
}

function randomShaderMaterial() {
  const freq = 10 + rand() * 50;
  const speed = 0.5 + rand() * 2.0;
  const offset = [
    rand() * 10,
    rand() * 10,
    rand() * 10
  ];
  const pattern = Math.floor(rand() * 5);
  
  // Apply material style properties
  const matProps = getMaterialProps(features.materialStyle);
  
  return new THREE.ShaderMaterial({
    vertexShader: shaderVertex,
    fragmentShader: makeFragment(freq, speed, offset, pattern),
    uniforms: {
      time: { value: 0 },
      lightDir: { value: lightDir },
      metalness: { value: matProps.metalness },
      roughness: { value: matProps.roughness }
    },
    side: THREE.DoubleSide
  });
}

const SHADER_POOL_SIZE = 6;
let shaderMaterialPool = [];

function getRandomShaderFromPool() {
  return shaderMaterialPool[Math.floor(rand() * SHADER_POOL_SIZE)];
}

// Initialize and start the scene
init();

function init() {
  container = document.getElementById('app');

  // Initialize shader pool with fxhash random
  shaderMaterialPool = [];
  for (let i = 0; i < SHADER_POOL_SIZE; i++) {
    shaderMaterialPool.push(randomShaderMaterial());
  }

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
  
  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI * 0.495;
  controls.target.set(0, 0, 0);
  controls.zoomSpeed = 1.5;
  
  // Camera distance will be adjusted after temple generation
  const cameraDirection = new THREE.Vector3(1, 0.5, 1).normalize();
  camera.position.copy(controls.target).add(
    cameraDirection.multiplyScalar(100) // Temporary position
  );
  
  controls.update();

  sun = new THREE.Vector3();

  // Create water
  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
  water = new Water(waterGeometry, {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', texture => {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }),
    sunDirection: new THREE.Vector3(),
    sunColor: 0xffffff,
    waterColor: features.waterColor,
    distortionScale: 5.0,
    fog: scene.fog !== undefined,
    reflectivity: 0.5
  });
  water.rotation.x = -Math.PI / 2;
  water.position.y = -9;
  scene.add(water);

  // Create sky
  const sky = new Sky();
  sky.scale.setScalar(10000);
  scene.add(sky);

  const skyUniforms = sky.material.uniforms;
  skyUniforms['turbidity'].value = features.skyTurbidity;
  skyUniforms['rayleigh'].value = features.skyRayleigh;
  skyUniforms['mieCoefficient'].value = 0.001 + rand() * 0.02;
  skyUniforms['mieDirectionalG'].value = 0.7 + rand() * 0.3;

  const phi = THREE.MathUtils.degToRad(90 - rand() * 25);
  const theta = THREE.MathUtils.degToRad(rand() * 360);
  sun.setFromSphericalCoords(1, phi, theta);
  sky.material.uniforms['sunPosition'].value.copy(sun);
  water.material.uniforms['sunDirection'].value.copy(sun).normalize();

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const renderTarget = pmremGenerator.fromScene(sky);
  scene.environment = renderTarget.texture;

  window.addEventListener('resize', onWindowResize);
  
  generateConnectedTemplesComplex();
  
  // Calculate scene bounds and adjust camera
  adjustCameraToFitScene();

  const numIslands = features.numIslands;
  const islandRadius = 1000;
  const islandSize = 200;
  const islandDetail = 64;

  console.log("Creating floating islands:", numIslands);
  for (let i = 0; i < numIslands; i++) {
    const angle = (i / numIslands) * Math.PI * 2;
    const randomXOffset = (rand() - 0.5) * 200;
    const radiusVariation = 0.7 + rand() * 0.6;
    const randomizedRadius = islandRadius * radiusVariation;
    
    const ix = Math.cos(angle) * randomizedRadius + randomXOffset;
    const iz = Math.sin(angle) * randomizedRadius;
    
    // Vary island sizes
    const sizeVariation = 0.6 + rand() * 0.8; // 60%-140% size
    const variedSize = islandSize * sizeVariation;
    
    createFloatingIsland(ix, iz, variedSize, islandDetail);
  }
  
  // Wait for initial render before signaling preview ready
  setTimeout(() => {
    $fx.preview();
  }, 1000);
}

function animate() {
  water.material.uniforms['time'].value += 1.0 / 60.0;
  
  const time = performance.now() * 0.001;
  
  scene.traverse(obj => {
    if (obj.userData && obj.userData.animate) {
      try {
        if (obj.position) {
          const distance = camera.position.distanceTo(obj.position);
          if (distance > 300) return;
        }
        
        const speed = obj.userData.animationSpeed || 1.0;
        const phase = obj.userData.animationPhase || 0;
        const amplitude = obj.userData.animationAmplitude || 0.5;
        
        switch (obj.userData.animationType) {
          case 0:
            obj.rotation.y = phase + time * speed;
            break;
          case 1:
            obj.position.y += Math.sin(time * speed + phase) * 0.01 * amplitude;
            break;
          case 2:
            obj.rotation.z = Math.sin(time * speed + phase) * 0.05 * amplitude;
            break;
          case 3:
            const scale = 1 + Math.sin(time * speed + phase) * 0.05 * amplitude;
            obj.scale.set(scale, scale, scale);
            break;
          case 4:
            if (obj.children.length > 0) {
              obj.children.forEach((child, i) => {
                if (child.userData.orbitRadius === undefined) {
                  child.userData.orbitRadius = child.position.length();
                  child.userData.orbitPhase = Math.atan2(child.position.z, child.position.x);
                  child.userData.orbitY = child.position.y;
                }
                
                const orbitSpeed = speed * (1 + i * 0.2);
                const angle = child.userData.orbitPhase + time * orbitSpeed;
                child.position.x = Math.cos(angle) * child.userData.orbitRadius;
                child.position.z = Math.sin(angle) * child.userData.orbitRadius;
              });
            }
            break;
        }
      } catch (e) {
        // Ignore errors
      }
    }
    
    if (obj.material && obj.material.uniforms && obj.material.uniforms.time) {
      obj.material.uniforms.time.value = time;
    }
  });
  
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function adjustCameraToFitScene() {
  // Calculate bounding box of only temple structures
  if (templeGroups.length === 0) {
    console.log('No temples generated yet');
    return;
  }
  
  const box = new THREE.Box3();
  
  templeGroups.forEach((temple) => {
    const tempBox = new THREE.Box3().setFromObject(temple);
    box.union(tempBox);
  });
  
  if (box.isEmpty()) {
    console.log('Bounding box is empty, using default camera');
    controls.minDistance = 40;
    controls.maxDistance = 200;
    const cameraDirection = new THREE.Vector3(1, 0.5, 1).normalize();
    camera.position.set(100, 50, 100);
    controls.target.set(0, 0, 0);
    controls.update();
    return;
  }
  
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  
  // Calculate appropriate camera distance based on scene size
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraDistance = Math.abs(maxDim / (2 * Math.tan(fov / 2)));
  
  // Add minimal padding to keep temples well-framed but not too far
  cameraDistance *= 1.15;
  
  // Clamp to reasonable values
  cameraDistance = Math.max(60, Math.min(250, cameraDistance));
  
  // Set min/max distances
  controls.minDistance = cameraDistance * 0.4;
  controls.maxDistance = cameraDistance * 2.0;
  
  // Position camera at an angle looking at center
  const cameraDirection = new THREE.Vector3(1, 0.3, 1).normalize();
  camera.position.copy(center).add(
    cameraDirection.multiplyScalar(cameraDistance)
  );
  
  // Update controls target to scene center
  controls.target.copy(center);
  controls.update();
  
  console.log(`Scene bounds: ${size.x.toFixed(1)} x ${size.y.toFixed(1)} x ${size.z.toFixed(1)}`);
  console.log(`Center: ${center.x.toFixed(1)}, ${center.y.toFixed(1)}, ${center.z.toFixed(1)}`);
  console.log(`Camera distance: ${cameraDistance.toFixed(1)}, position: ${camera.position.x.toFixed(1)}, ${camera.position.y.toFixed(1)}, ${camera.position.z.toFixed(1)}`);
}

// Temple generation and helper functions would continue here...
// Due to length, I'll add them in a separate section

function generateConnectedTemplesComplex() {
  console.log("Generating connected temple complex with", features.numSatelliteTemples, "satellites");
  
  const mainTemple = generateSurrealTemple();
  mainTemple.position.set(0, 0, 0);
  scene.add(mainTemple);
  templeGroups.push(mainTemple);
  
  const satelliteCount = features.numSatelliteTemples;
  const satellitePositions = [];
  
  for (let i = 0; i < satelliteCount; i++) {
    const baseAngle = (i / satelliteCount) * Math.PI * 2;
    // Much more random angle offset
    const angleOffset = (rand() - 0.5) * Math.PI / 3; // Doubled from /6 to /3
    const angle = baseAngle + angleOffset;
    
    // Much more variation in distance
    const baseDistance = structureSize * (2.0 + rand() * 2.0); // Increased range
    const distanceVariation = 0.5 + rand() * 0.8; // Wider variation: 50%-130%
    const distance = baseDistance * distanceVariation;
    
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    
    satellitePositions.push(new THREE.Vector3(x, 0, z));
    
    const satelliteTemple = generateSurrealTemple();
    satelliteTemple.position.set(x, 0, z);
    satelliteTemple.rotation.y = rand() * Math.PI * 2;
    
    // Randomly vary the scale of satellite temples
    const scale = 0.7 + rand() * 0.6; // 70%-130% scale
    satelliteTemple.scale.set(scale, scale, scale);
    
    scene.add(satelliteTemple);
    templeGroups.push(satelliteTemple);
    
    // 10% chance to spawn a distant shrine
    if (rand() < 0.1) {
      try {
        const shrineAngle = angle + (rand() - 0.5) * Math.PI / 4;
        const shrineDistance = distance * (1.8 + rand() * 0.8); // 1.8x-2.6x farther
        const shrineX = Math.cos(shrineAngle) * shrineDistance;
        const shrineZ = Math.sin(shrineAngle) * shrineDistance;
        
        const shrine = generateSmallShrine();
        shrine.position.set(shrineX, 0, shrineZ);
        shrine.rotation.y = rand() * Math.PI * 2;
        
        const shrineScale = 0.4 + rand() * 0.3; // 40%-70% scale (smaller than temples)
        shrine.scale.set(shrineScale, shrineScale, shrineScale);
        
        scene.add(shrine);
        templeGroups.push(shrine);
        
        console.log(`Added distant shrine at distance ${shrineDistance.toFixed(1)}`);
      } catch (e) {
        console.error('Error creating shrine:', e);
      }
    }
  }
  
  connectTemples(satellitePositions);
}

function generateSurrealTemple() {
  const group = new THREE.Group();
  
  function pick(arr) { return arr[Math.floor(rand() * arr.length)]; }
  
  const tierCount = 3 + Math.floor(rand() * 3);
  const maxHeight = structureSize * 1.3;
  
  const baseMaterial = getRandomShaderFromPool();
  const baseHeight = 2 + rand() * 4;
  const baseRadius = structureSize * (0.6 + rand() * 0.6);
  
  const baseType = Math.floor(rand() * 8); // Increased from 3 to 8 base types
  let basePlatform;
  
  switch(baseType) {
    case 0: // Circular
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius, baseRadius * 1.2, baseHeight, 32),
        baseMaterial
      );
      break;
    case 1: // Hexagonal
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius, baseRadius * 1.1, baseHeight, 6),
        baseMaterial
      );
      break;
    case 2: // Square
      basePlatform = new THREE.Mesh(
        new THREE.BoxGeometry(baseRadius * 2, baseHeight, baseRadius * 2),
        baseMaterial
      );
      break;
    case 3: // Triangular
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius, baseRadius * 1.1, baseHeight, 3),
        baseMaterial
      );
      break;
    case 4: // Octagonal
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius, baseRadius * 1.15, baseHeight, 8),
        baseMaterial
      );
      break;
    case 5: // Pentagonal
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius, baseRadius * 1.1, baseHeight, 5),
        baseMaterial
      );
      break;
    case 6: // Wide and flat
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius * 1.3, baseRadius * 1.4, baseHeight * 0.5, 12),
        baseMaterial
      );
      break;
    case 7: // Narrow and tall
      basePlatform = new THREE.Mesh(
        new THREE.CylinderGeometry(baseRadius * 0.7, baseRadius * 0.9, baseHeight * 1.5, 16),
        baseMaterial
      );
      break;
    default:
      basePlatform = new THREE.Mesh(
        new THREE.BoxGeometry(baseRadius * 2, baseHeight, baseRadius * 2),
        baseMaterial
      );
      break;
  }
  
  basePlatform.position.y = baseHeight / 2 - 9;
  group.add(basePlatform);
  
  function addSubStructure(parentPos, parentWidth, height, depth) {
    if (depth <= 0) return;
    // More lenient - allow more structures
    if (rand() > 0.75 && depth < 3) return;
    
    // Define structure categories based on architecture style
    const geometricStructures = ['cube', 'obelisk', 'platform', 'archway', 'ziggurat', 'temple', 'mandala', 'honeycombWall', 'pyramid', 'latticeCube'];
    const organicStructures = ['dome', 'crystals', 'twistedTower', 'helix', 'organicBlobby', 'cascadingPlatforms'];
    const verticalStructures = ['spire', 'obelisk', 'helix', 'twistedTower', 'pagoda'];
    const horizontalStructures = ['platform', 'archway', 'suspendedPlatform', 'pavilion', 'honeycombWall'];
    
    const allStructures = [
      'spire', 'dome', 'obelisk', 'platform', 'archway', 'helix', 
      'crystals', 'pagoda', 'ziggurat', 'temple', 'mandala', 
      'twistedTower', 'honeycombWall', 'pavilion', 'pyramid',
      'suspendedPlatform', 'latticeCube', 'cascadingPlatforms', 'organicBlobby'
    ];
    
    // Select structure based on architecture style
    let structureOptions;
    const styleInfluence = rand();
    
    if (features.architectureStyle === 'geometric' && styleInfluence < 0.7) {
      structureOptions = geometricStructures;
    } else if (features.architectureStyle === 'organic' && styleInfluence < 0.7) {
      structureOptions = organicStructures;
    } else if (features.architectureStyle === 'vertical' && styleInfluence < 0.7) {
      structureOptions = verticalStructures;
    } else if (features.architectureStyle === 'horizontal' && styleInfluence < 0.7) {
      structureOptions = horizontalStructures;
    } else {
      structureOptions = allStructures;
    }
    
    // More random structure selection - less bias by depth
    let type;
    const depthBias = rand();
    if (depth === 3 && depthBias < 0.4) {
      type = pick(['platform', 'ziggurat', 'temple', 'latticeCube', 'dome', 'pyramid', 'pavilion'].filter(t => structureOptions.includes(t)));
      if (!type) type = pick(structureOptions);
    } else if (depth === 1 && depthBias < 0.4) {
      type = pick(['spire', 'obelisk', 'helix', 'crystals', 'pagoda', 'twistedTower'].filter(t => structureOptions.includes(t)));
      if (!type) type = pick(structureOptions);
    } else {
      // Fully random from style-appropriate options
      type = pick(structureOptions);
    }
    
    const size = structureSize * (0.3 + 0.2 * depth) * features.structureComplexity;
    const material = getRandomShaderFromPool();
    
    // Add more size variation per structure
    const sizeVariation = 0.7 + rand() * 0.6; // 70%-130%
    const variedSize = size * sizeVariation;
    
    const spreadFactor = parentWidth * 0.4;
    const x = parentPos.x + (rand() - 0.5) * spreadFactor;
    const z = parentPos.z + (rand() - 0.5) * spreadFactor;
    let y = parentPos.y + height;
    
    let structure;
    
    switch(type) {
      case 'spire':
        structure = createEnhancedSpire(variedSize * 0.3, variedSize * (1.5 + rand() * 0.5), material);
        break;
      case 'dome':
        structure = createRibbedDome(variedSize * 0.4, material);
        break;
      case 'cube':
        structure = new THREE.Mesh(
          new THREE.BoxGeometry(variedSize, variedSize, variedSize),
          material
        );
        y += variedSize * 0.4;
        break;
      case 'obelisk':
        structure = createObelisk(variedSize * 0.3, variedSize * (1.2 + rand() * 0.4), material);
        break;
      case 'platform':
        structure = new THREE.Mesh(
          new THREE.CylinderGeometry(variedSize * 0.7, variedSize * 0.7, variedSize * 0.1, 16),
          material
        );
        break;
      case 'pyramid':
        structure = createPyramid(variedSize * 0.8, variedSize * (0.7 + rand() * 0.3), material);
        break;
      case 'suspendedPlatform':
        structure = createSuspendedPlatform(variedSize * 0.6, material);
        break;
      case 'latticeCube':
        structure = createLatticeCube(variedSize * 0.8, 2 + Math.floor(rand() * 3), material);
        y += variedSize * 0.4;
        break;
      case 'crystals':
        structure = createCrystalFormation(variedSize * 0.6, 5 + Math.floor(rand() * 5), material);
        break;
      case 'cascadingPlatforms':
        structure = createCascadingPlatforms(variedSize * 0.7, variedSize * 0.8, 4 + Math.floor(rand() * 4), material);
        break;
      case 'twistedTower':
        structure = createTwistedTower(variedSize * 0.4, variedSize * 1.5, Math.PI * (1.5 + rand()), material);
        break;
      case 'archway':
        structure = createArchway(variedSize * 0.8, variedSize * 0.8, variedSize * 0.1, material);
        break;
      case 'helix':
        structure = createHelix(variedSize * 0.4, 3 + Math.floor(rand() * 3), material);
        y += variedSize * 0.5;
        break;
      case 'pagoda':
        structure = createPagoda(variedSize * 0.6, variedSize * (1.0 + rand() * 0.3), material);
        break;
      case 'ziggurat':
        structure = createZiggurat(variedSize * 0.8, variedSize * 0.7, 3 + Math.floor(rand() * 3), material);
        break;
      case 'temple':
        structure = createTempleComplex(variedSize * 0.7, variedSize * 0.6, material);
        break;
      case 'mandala':
        structure = createMandalaStructure(variedSize * 0.6, material);
        break;
      case 'honeycombWall':
        structure = createHoneycombWall(variedSize * 1, variedSize * 1, variedSize * 0.1, material);
        break;
      case 'pavilion':
        structure = createPavilion(variedSize * 0.6, variedSize * 0.7, material);
        break;
      case 'organicBlobby':
        structure = createOrganicBlobby(variedSize * 0.5, material);
        break;
      default:
        structure = new THREE.Group();
    }
    
    structure.position.set(x, y, z);
    structure.rotation.y = rand() * Math.PI * 2;
    
    if (rand() > 0.6) {
      applyRandomAnimation(structure);
    }
    
    group.add(structure);
    
    // More varied child counts
    const childCount = Math.floor(rand() * 4); // 0-3 children instead of 1-2
    for (let i = 0; i < childCount; i++) {
      addSubStructure(
        new THREE.Vector3(x, y, z),
        size * 0.7,
        size * (0.5 + rand() * 0.4),
        depth - 1
      );
    }
  }
  
  const basePos = new THREE.Vector3(0, -11 + baseHeight, 0);
  const mainStructures = 1 + Math.floor(rand() * 5); // 1-5 instead of 2-3
  
  for (let i = 0; i < mainStructures; i++) {
    const angle = (i / mainStructures) * Math.PI * 2;
    const distance = baseRadius * (0.2 + rand() * 0.5);
    
    const x = Math.cos(angle) * distance;
    const z = Math.sin(angle) * distance;
    
    addSubStructure(
      new THREE.Vector3(x, basePos.y, z),
      baseRadius * 0.1,
      structureSize * 0.08,
      features.recursionDepth
    );
  }
  
  return group;
}

function createEnhancedSpire(radius, height, material) {
  const group = new THREE.Group();
  const segments = 5 + Math.floor(rand() * 5);
  const segmentHeight = height / segments;
  
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 1.3, radius * 1.5, segmentHeight * 0.3, 8),
    material
  );
  base.position.y = -segmentHeight * 0.1;
  group.add(base);
  
  for (let i = 0; i < segments; i++) {
    const t = i / segments;
    const r = radius * (1 - t * 0.7);
    const h = segmentHeight;
    
    const segment = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r * 1.2, h, 8),
      material
    );
    segment.position.y = i * segmentHeight + h/2;
    group.add(segment);
  }
  
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(radius * 0.3, segmentHeight * 1.5, 8),
    material
  );
  cap.position.y = height;
  group.add(cap);
  
  return group;
}

function createRibbedDome(radius, material) {
  const group = new THREE.Group();
  
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 24, 16, 0, Math.PI * 2, 0, Math.PI/2),
    material
  );
  group.add(dome);
  
  const ribs = 8 + Math.floor(rand() * 8);
  for (let i = 0; i < ribs; i++) {
    const angle = (i / ribs) * Math.PI * 2;
    
    const rib = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 0.08, radius, radius * 0.08),
      material
    );
    rib.position.x = Math.cos(angle) * radius * 0.5;
    rib.position.z = Math.sin(angle) * radius * 0.5;
    rib.position.y = radius * 0.25;
    rib.rotation.x = Math.PI / 2;
    rib.rotation.z = angle;
    group.add(rib);
  }
  
  return group;
}

function createObelisk(baseWidth, height, material) {
  const group = new THREE.Group();
  
  const baseHeight = height * 0.1;
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(baseWidth * 1.5, baseHeight, baseWidth * 1.5),
    material
  );
  base.position.y = baseHeight/2;
  group.add(base);
  
  const shaftHeight = height * 0.7;
  const shaft = new THREE.Mesh(
    new THREE.BoxGeometry(baseWidth, shaftHeight, baseWidth),
    material
  );
  shaft.position.y = baseHeight + shaftHeight/2;
  group.add(shaft);
  
  const topHeight = height * 0.2;
  const top = new THREE.Mesh(
    new THREE.ConeGeometry(baseWidth * 0.7, topHeight, 4),
    material
  );
  top.position.y = baseHeight + shaftHeight + topHeight/2;
  top.rotation.y = Math.PI/4;
  group.add(top);
  
  return group;
}

function applyRandomAnimation(object) {
  object.userData.animate = true;
  object.userData.animationType = Math.floor(rand() * 4);
  object.userData.animationSpeed = 0.2 + rand() * 0.8;
  object.userData.animationPhase = rand() * Math.PI * 2;
  object.userData.animationAmplitude = 0.3 + rand() * 0.7;
}

function connectTemples(positions) {
  const mainPosition = new THREE.Vector3(0, 0, 0);
  const connectionMinHeight = structureSize * 0.25;
  const connectionMaxHeight = structureSize * 1.0;
  
  for (let i = 0; i < positions.length; i++) {
    const connectionHeight = connectionMinHeight + rand() * (connectionMaxHeight - connectionMinHeight);
    
    const dirToSatellite = new THREE.Vector3().subVectors(positions[i], mainPosition).normalize();
    const dirFromSatellite = new THREE.Vector3().subVectors(mainPosition, positions[i]).normalize();
    
    const mainOffset = structureSize * 0.5;
    const satelliteOffset = structureSize * 0.3;
    
    const startPos = new THREE.Vector3(
      mainPosition.x + dirToSatellite.x * mainOffset, 
      connectionHeight, 
      mainPosition.z + dirToSatellite.z * mainOffset
    );
    
    const endPos = new THREE.Vector3(
      positions[i].x + dirFromSatellite.x * satelliteOffset, 
      connectionHeight, 
      positions[i].z + dirFromSatellite.z * satelliteOffset
    );
    
    createConnection(startPos, endPos);
    
    // Use connection density feature to determine if we create satellite-to-satellite connections
    if (rand() < features.connectionDensity && positions.length > 1) {
      let otherIndex;
      do {
        otherIndex = Math.floor(rand() * positions.length);
      } while (otherIndex === i);
      
      const satelliteConnectionHeight = connectionMinHeight + rand() * (connectionMaxHeight - connectionMinHeight);
      const dirToOtherSatellite = new THREE.Vector3().subVectors(positions[otherIndex], positions[i]).normalize();
      const dirFromOtherSatellite = new THREE.Vector3().subVectors(positions[i], positions[otherIndex]).normalize();
      
      const satStartPos = new THREE.Vector3(
        positions[i].x + dirToOtherSatellite.x * satelliteOffset, 
        satelliteConnectionHeight, 
        positions[i].z + dirToOtherSatellite.z * satelliteOffset
      );
      
      const satEndPos = new THREE.Vector3(
        positions[otherIndex].x + dirFromOtherSatellite.x * satelliteOffset, 
        satelliteConnectionHeight, 
        positions[otherIndex].z + dirFromOtherSatellite.z * satelliteOffset
      );
      
      createConnection(satStartPos, satEndPos);
    }
  }
}

function createConnection(startPos, endPos) {
  const connectionType = Math.floor(rand() * 2); // Simplified to 2 types for now
  const connectionGroup = new THREE.Group();
  const material = getRandomShaderFromPool();
  
  const direction = new THREE.Vector3().subVectors(endPos, startPos);
  const distance = direction.length();
  const midPoint = new THREE.Vector3().addVectors(startPos, endPos).multiplyScalar(0.5);
  
  if (connectionType === 0) {
    // Simple elevated walkway
    const bridgeHeight = startPos.y;
    const bridgeWidth = 2 + rand() * 2;
    
    const bridge = new THREE.Mesh(
      new THREE.BoxGeometry(distance, 1, bridgeWidth),
      material
    );
    
    bridge.position.copy(midPoint);
    bridge.position.y = bridgeHeight;
    bridge.lookAt(endPos.x, bridgeHeight, endPos.z);
    connectionGroup.add(bridge);
  } else {
    // Arch bridge
    const maxHeight = distance * 0.25;
    const curve = new THREE.QuadraticBezierCurve3(
      startPos,
      new THREE.Vector3(midPoint.x, midPoint.y + maxHeight, midPoint.z),
      endPos
    );
    
    const pathGeometry = new THREE.TubeGeometry(curve, 20, 1, 8, false);
    const path = new THREE.Mesh(pathGeometry, material);
    connectionGroup.add(path);
  }
  
  scene.add(connectionGroup);
}

// Additional structure creation functions
function createPyramid(baseWidth, height, material) {
  const group = new THREE.Group();
  const layers = 1 + Math.floor(rand() * 3);
  
  for (let i = 0; i < layers; i++) {
    const layerWidth = baseWidth * (1 - (i * 0.25));
    const layerHeight = height / layers;
    const pyramid = new THREE.Mesh(
      new THREE.ConeGeometry(layerWidth, layerHeight, 4),
      material
    );
    pyramid.rotation.y = rand() * Math.PI / 2;
    pyramid.position.y = i * layerHeight + layerHeight/2;
    group.add(pyramid);
  }
  
  return group;
}

function createSuspendedPlatform(width, material) {
  const group = new THREE.Group();
  
  const platform = new THREE.Mesh(
    new THREE.CircleGeometry(width, 8),
    material
  );
  platform.rotation.x = -Math.PI/2;
  group.add(platform);
  
  const supports = Math.floor(3 + rand() * 3);
  for (let i = 0; i < supports; i++) {
    const angle = (i / supports) * Math.PI * 2;
    const x = Math.cos(angle) * width * 0.8;
    const z = Math.sin(angle) * width * 0.8;
    
    const cable = new THREE.Mesh(
      new THREE.CylinderGeometry(width * 0.03, width * 0.03, width * 1.5, 6),
      material
    );
    cable.position.set(x, -width * 0.75, z);
    group.add(cable);
  }
  
  if (rand() > 0.5) {
    const centerpiece = new THREE.Mesh(
      new THREE.SphereGeometry(width * 0.3, 12, 12),
      material
    );
    centerpiece.position.y = width * 0.3;
    group.add(centerpiece);
  }
  
  return group;
}

function createLatticeCube(size, complexity, material) {
  const group = new THREE.Group();
  const frameThickness = size * 0.05;
  
  const positions = [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
  ];
  
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7]
  ];
  
  for (const [a, b] of edges) {
    const start = new THREE.Vector3(
      positions[a][0] * size/2,
      positions[a][1] * size/2,
      positions[a][2] * size/2
    );
    const end = new THREE.Vector3(
      positions[b][0] * size/2,
      positions[b][1] * size/2,
      positions[b][2] * size/2
    );
    
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    
    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(frameThickness, frameThickness, length, 6),
      material
    );
    
    cylinder.position.copy(start).add(end).multiplyScalar(0.5);
    cylinder.lookAt(end);
    cylinder.rotateX(Math.PI/2);
    
    group.add(cylinder);
  }
  
  if (complexity > 0) {
    for (let i = 0; i < complexity; i++) {
      const a = Math.floor(rand() * 8);
      let b;
      do {
        b = Math.floor(rand() * 8);
      } while (b === a);
      
      const start = new THREE.Vector3(
        positions[a][0] * size/2,
        positions[a][1] * size/2,
        positions[a][2] * size/2
      );
      const end = new THREE.Vector3(
        positions[b][0] * size/2,
        positions[b][1] * size/2,
        positions[b][2] * size/2
      );
      
      const direction = new THREE.Vector3().subVectors(end, start);
      const length = direction.length();
      
      const strut = new THREE.Mesh(
        new THREE.CylinderGeometry(frameThickness * 0.7, frameThickness * 0.7, length, 6),
        material
      );
      
      strut.position.copy(start).add(end).multiplyScalar(0.5);
      strut.lookAt(end);
      strut.rotateX(Math.PI/2);
      
      group.add(strut);
    }
  }
  
  return group;
}

function createCrystalFormation(size, complexity, material) {
  const group = new THREE.Group();
  
  const mainCrystal = new THREE.Mesh(
    new THREE.OctahedronGeometry(size * 0.6, 0),
    material
  );
  
  mainCrystal.scale.y = 1.5 + rand() * 0.5;
  mainCrystal.position.y = size * 0.6 * mainCrystal.scale.y * 0.5;
  group.add(mainCrystal);
  
  for (let i = 0; i < complexity; i++) {
    const angle = rand() * Math.PI * 2;
    const radius = size * (0.3 + rand() * 0.4);
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    
    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(size * (0.2 + rand() * 0.3), 0),
      material
    );
    
    crystal.scale.y = 1.3 + rand() * 1.0;
    crystal.position.set(x, size * 0.3 * crystal.scale.y * 0.5, z);
    crystal.rotation.y = rand() * Math.PI * 2;
    crystal.rotation.z = (rand() - 0.5) * 0.5;
    group.add(crystal);
  }
  
  return group;
}

function createCascadingPlatforms(width, height, count, material) {
  const group = new THREE.Group();
  
  const minRadius = width * 0.4;
  const maxRadius = width;
  
  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    const radius = minRadius + (maxRadius - minRadius) * (1 - t);
    const y = height * t;
    
    let platform;
    if (i % 2 === 0) {
      platform = new THREE.Mesh(
        new THREE.CircleGeometry(radius, 16),
        material
      );
    } else {
      const sides = 3 + Math.floor(rand() * 5);
      platform = new THREE.Mesh(
        new THREE.CircleGeometry(radius, sides),
        material
      );
    }
    
    platform.rotation.x = -Math.PI/2;
    platform.position.y = y;
    platform.rotation.z = (i / count) * Math.PI;
    
    group.add(platform);
  }
  
  return group;
}

function createTwistedTower(radius, height, twistAmount, material) {
  const group = new THREE.Group();
  const segments = 10;
  const segmentHeight = height / segments;
  
  for (let i = 0; i < segments; i++) {
    const t = i / (segments - 1);
    const y = i * segmentHeight;
    const twist = t * twistAmount;
    
    const segment = new THREE.Mesh(
      new THREE.BoxGeometry(radius * 2, segmentHeight * 0.9, radius * 2),
      material
    );
    segment.position.y = y + segmentHeight/2;
    segment.rotation.y = twist;
    group.add(segment);
  }
  
  return group;
}

function createPavilion(width, height, material) {
  const group = new THREE.Group();
  
  const platform = new THREE.Mesh(
    new THREE.CylinderGeometry(width, width * 1.05, height * 0.1, 8),
    material
  );
  group.add(platform);
  
  const columnCount = 6 + Math.floor(rand() * 3);
  const columnRadius = width * 0.06;
  const columnHeight = height * 0.8;
  
  for (let i = 0; i < columnCount; i++) {
    const angle = (i / columnCount) * Math.PI * 2;
    const x = Math.cos(angle) * width * 0.85;
    const z = Math.sin(angle) * width * 0.85;
    
    const column = new THREE.Mesh(
      new THREE.CylinderGeometry(columnRadius, columnRadius * 1.2, columnHeight, 8),
      material
    );
    column.position.set(x, height * 0.5, z);
    group.add(column);
  }
  
  const roofRadius = width * 1.1;
  const roofHeight = height * 0.4;
  
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(roofRadius, roofHeight, 8),
    material
  );
  roof.position.y = columnHeight * 1.05;
  group.add(roof);
  
  return group;
}

function createHoneycombWall(width, height, cellSize, material) {
  const group = new THREE.Group();
  
  const cols = Math.floor(width / cellSize);
  const rows = Math.floor(height / cellSize);
  
  for (let y = 0; y < rows; y++) {
    const rowOffset = (y % 2) * 0.5;
    
    for (let x = 0; x < cols; x++) {
      if (rand() > 0.7) continue;
      
      const posX = (x + rowOffset) * cellSize - width/2 + cellSize/2;
      const posY = y * cellSize * 0.85 + cellSize/2;
      
      const hex = new THREE.Mesh(
        new THREE.CylinderGeometry(cellSize/2, cellSize/2, cellSize * 0.2, 6),
        material
      );
      hex.rotation.x = Math.PI/2;
      hex.position.set(posX, posY, 0);
      
      group.add(hex);
    }
  }
  
  return group;
}

function createOrganicBlobby(radius, material) {
  const group = new THREE.Group();
  
  const baseBlob = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 24, 16),
    material
  );
  
  const positionAttribute = baseBlob.geometry.attributes.position;
  const vertex = new THREE.Vector3();
  
  for (let i = 0; i < positionAttribute.count; i++) {
    vertex.fromBufferAttribute(positionAttribute, i);
    
    const noiseScale = 2.0;
    const distortionAmount = 0.3;
    const noise = 
      Math.sin(vertex.x * noiseScale) * 
      Math.sin(vertex.y * noiseScale * 1.1) * 
      Math.sin(vertex.z * noiseScale * 0.9);
    
    vertex.multiplyScalar(1 + noise * distortionAmount);
    
    positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  
  baseBlob.geometry.computeVertexNormals();
  group.add(baseBlob);
  
  return group;
}

function createArchway(width, height, thickness, material) {
  const group = new THREE.Group();
  
  const leftPillar = new THREE.Mesh(
    new THREE.BoxGeometry(thickness, height * 0.8, thickness),
    material
  );
  leftPillar.position.set(-width/2, height * 0.4, 0);
  group.add(leftPillar);
  
  const rightPillar = new THREE.Mesh(
    new THREE.BoxGeometry(thickness, height * 0.8, thickness),
    material
  );
  rightPillar.position.set(width/2, height * 0.4, 0);
  group.add(rightPillar);
  
  const archCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(-width/2, height * 0.8, 0),
    new THREE.Vector3(0, height, 0),
    new THREE.Vector3(width/2, height * 0.8, 0)
  );
  
  const archPoints = archCurve.getPoints(10);
  const archGeometry = new THREE.TubeGeometry(
    new THREE.CatmullRomCurve3(archPoints),
    20,
    thickness/2,
    8,
    false
  );
  
  const arch = new THREE.Mesh(archGeometry, material);
  group.add(arch);
  
  return group;
}

function createHelix(radius, turns, material) {
  const group = new THREE.Group();
  
  const helixPoints = [];
  const segments = 64;
  const height = radius * 3;
  
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * 2 * turns;
    
    helixPoints.push(
      new THREE.Vector3(
        Math.cos(angle) * radius,
        height * t,
        Math.sin(angle) * radius
      )
    );
  }
  
  const helixCurve = new THREE.CatmullRomCurve3(helixPoints);
  const helixGeometry = new THREE.TubeGeometry(
    helixCurve,
    64,
    radius * 0.1,
    8,
    false
  );
  
  const helix = new THREE.Mesh(helixGeometry, material);
  group.add(helix);
  
  const axis = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.05, radius * 0.05, height, 8),
    material
  );
  axis.position.y = height/2;
  group.add(axis);
  
  return group;
}

function createPagoda(width, height, material) {
  const group = new THREE.Group();
  
  const levels = 3 + Math.floor(rand() * 3);
  const levelHeight = height / levels;
  
  for (let i = 0; i < levels; i++) {
    const levelWidth = width * Math.pow(0.8, i);
    const levelDepth = levelWidth;
    
    const platform = new THREE.Mesh(
      new THREE.BoxGeometry(levelWidth * 1.2, levelHeight * 0.1, levelDepth * 1.2),
      material
    );
    platform.position.y = i * levelHeight;
    group.add(platform);
    
    if (i < levels - 1) {
      const structure = new THREE.Mesh(
        new THREE.BoxGeometry(levelWidth, levelHeight * 0.6, levelDepth),
        material
      );
      structure.position.y = i * levelHeight + levelHeight * 0.35;
      group.add(structure);
      
      const roof = new THREE.Mesh(
        new THREE.ConeGeometry(levelWidth * 0.9, levelHeight * 0.4, 4),
        material
      );
      roof.position.y = i * levelHeight + levelHeight * 0.85;
      roof.rotation.y = Math.PI/4;
      group.add(roof);
    } else {
      const spire = new THREE.Mesh(
        new THREE.ConeGeometry(levelWidth * 0.2, levelHeight * 0.8, 8),
        material
      );
      spire.position.y = i * levelHeight + levelHeight * 0.4;
      group.add(spire);
      
      const ball = new THREE.Mesh(
        new THREE.SphereGeometry(levelWidth * 0.15, 8, 8),
        material
      );
      ball.position.y = i * levelHeight + levelHeight * 0.8;
      group.add(ball);
    }
  }
  
  return group;
}

function createZiggurat(width, height, levels, material) {
  const group = new THREE.Group();
  
  for (let i = 0; i < levels; i++) {
    const t = i / (levels - 1);
    const levelWidth = width * (1 - t * 0.6);
    const levelHeight = height / levels;
    
    const level = new THREE.Mesh(
      new THREE.BoxGeometry(levelWidth, levelHeight, levelWidth),
      material
    );
    
    level.position.y = i * levelHeight + levelHeight/2;
    
    if (rand() > 0.5 && i < levels - 1) {
      for (let j = 0; j < 4; j++) {
        const angle = (j / 4) * Math.PI * 2 + Math.PI/4;
        const decorX = Math.cos(angle) * levelWidth * 0.4;
        const decorZ = Math.sin(angle) * levelWidth * 0.4;
        
        const decoration = new THREE.Mesh(
          new THREE.ConeGeometry(levelWidth * 0.05, levelHeight * 0.5, 4),
          material
        );
        
        decoration.position.set(
          decorX,
          i * levelHeight + levelHeight * 1.2,
          decorZ
        );
        
        group.add(decoration);
      }
    }
    
    group.add(level);
  }
  
  if (levels > 2) {
    const topTemple = new THREE.Group();
    
    const temple = new THREE.Mesh(
      new THREE.BoxGeometry(width * 0.3, height * 0.2, width * 0.2),
      material
    );
    temple.position.y = height * 0.1;
    topTemple.add(temple);
    
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(width * 0.2, height * 0.15, 4),
      material
    );
    roof.position.y = height * 0.28;
    roof.rotation.y = Math.PI/4;
    topTemple.add(roof);
    
    topTemple.position.y = levels * (height / levels);
    group.add(topTemple);
  }
  
  return group;
}

function createTempleComplex(width, height, material) {
  const group = new THREE.Group();
  const mainTemple = new THREE.Group();
  
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(width, height * 0.1, width * 0.7),
    material
  );
  mainTemple.add(base);
  
  const building = new THREE.Mesh(
    new THREE.BoxGeometry(width * 0.8, height * 0.5, width * 0.5),
    material
  );
  building.position.y = height * 0.3;
  mainTemple.add(building);
  
  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(width * 0.5, height * 0.4, 4),
    material
  );
  roof.position.y = height * 0.7;
  roof.rotation.y = Math.PI/4;
  mainTemple.add(roof);
  
  group.add(mainTemple);
  
  return group;
}

function createMandalaStructure(radius, material) {
  const group = new THREE.Group();
  
  const centralDome = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI/2),
    material
  );
  group.add(centralDome);
  
  const ringCount = 2 + Math.floor(rand() * 2);
  
  for (let ring = 0; ring < ringCount; ring++) {
    const ringRadius = radius * (0.6 + ring * 0.3);
    const elementCount = 8 + ring * 4;
    const elementSize = radius * (0.2 - ring * 0.05);
    const elementHeight = radius * (0.3 - ring * 0.05);
    
    for (let i = 0; i < elementCount; i++) {
      const angle = (i / elementCount) * Math.PI * 2;
      const x = Math.cos(angle) * ringRadius;
      const z = Math.sin(angle) * ringRadius;
      
      let element;
      if (i % 2 === 0) {
        element = new THREE.Mesh(
          new THREE.ConeGeometry(elementSize, elementHeight, 4),
          material
        );
        element.position.y = elementHeight/2;
      } else {
        element = new THREE.Mesh(
          new THREE.SphereGeometry(elementSize, 8, 8),
          material
        );
        element.position.y = elementSize;
      }
      
      element.position.x = x;
      element.position.z = z;
      
      group.add(element);
    }
  }
  
  return group;
}

function generateSmallShrine() {
  const group = new THREE.Group();
  
  function pick(arr) { return arr[Math.floor(rand() * arr.length)]; }
  
  const material = getRandomShaderFromPool();
  const baseHeight = 1 + rand() * 2;
  const baseRadius = structureSize * (0.3 + rand() * 0.3);
  
  // Simple base
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(baseRadius, baseRadius * 1.1, baseHeight, 8),
    material
  );
  base.position.y = baseHeight / 2 - 9;
  group.add(base);
  
  // Single structure on top
  const shrineTypes = ['spire', 'obelisk', 'dome', 'pyramid', 'crystals'];
  const type = pick(shrineTypes);
  const size = structureSize * 0.6;
  
  let structure;
  switch(type) {
    case 'spire':
      structure = createEnhancedSpire(size * 0.3, size * 1.2, material);
      break;
    case 'obelisk':
      structure = createObelisk(size * 0.3, size * 1.0, material);
      break;
    case 'dome':
      structure = createRibbedDome(size * 0.4, material);
      break;
    case 'pyramid':
      structure = createPyramid(size * 0.6, size * 0.5, material);
      break;
    case 'crystals':
      structure = createCrystalFormation(size * 0.4, 3 + Math.floor(rand() * 3), material);
      break;
    default:
      structure = new THREE.Group();
  }
  
  structure.position.set(0, -9 + baseHeight, 0);
  structure.rotation.y = rand() * Math.PI * 2;
  group.add(structure);
  
  return group;
}

