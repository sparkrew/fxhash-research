/**
 * @license
 * Copyright (c) 2023 Shoichi
 * NFT License Version 2.0
 * https://www.nftlicense.org/
 */

import * as THREE from './three.module.js'
import { OrbitControls } from './OrbitControls.js'
import { GLTFLoader } from './GLTFLoader.js'

window.addEventListener('DOMContentLoaded', init)

function init() {

  const width = window.innerWidth
  const height = window.innerHeight

  const canvasElement = document.querySelector('#mainCanvas')
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
    alpha: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(width, height)
  renderer.physicallyCorrectLights = true
  renderer.shadowMap.enabled = true
  renderer.outputEncoding = THREE.GammaEncoding
  renderer.toneMapping = THREE.ACESFilmicToneMapping

  const scene = new THREE.Scene()

  const monolithHeight = getRR([6.0, 30.0])
  const monolithHeightOffset = monolithHeight/2.0 + 3.0 
  const monolithWidth = 36.0 - monolithHeight
  const monolithDepth = getRR([3.0, 15.0])

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.set(0.0, monolithHeightOffset, Math.max(monolithHeight-3.0, monolithWidth)*getRR([1.02, 1.03], false))
  const controls = new OrbitControls(camera, canvasElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.2
  controls.target.set(0.0, monolithHeightOffset, 0.0)
  if (monolithWidth*2 < monolithHeight) {      
    if (monolithWidth<monolithDepth) {
      controls.rotateLeft(getRR([-90.0, -60.0, 60.0, 90.0], false) * Math.PI/180)
      controls.rotateUp(getRR([-90.0, -45.0, 0.0, 0.0, 45.0, 90.0], false) * Math.PI/180)
    } else {
      controls.rotateLeft(getRR([-60.0, -30.0, 0.0, 0.0, 30.0, 60.0], false) * Math.PI/180)
      controls.rotateUp(getRR([-90.0, -45.0, 0.0, 0.0, 45.0, 90.0], false) * Math.PI/180)
    }
  } else {
    controls.rotateLeft(getRR([-90.0, -45.0, 0.0, 0.0, 45.0, 90.0], false) * Math.PI/180)
    controls.rotateUp(getRR([-90.0, -45.0, 0.0, 0.0, 45.0, 90.0], false) * Math.PI/180)
  }
  controls.update()
  
  // -------------------------

  class ColorPalette {
    constructor() {
      this.mainColor = new THREE.Color(0x999999)
      this.subColors = []
      this.subColorsRate = []
      this.bgColor = new THREE.Color()
      this.ambientLightColor = new THREE.Color()
      this.pointLightColor = new THREE.Color()
      this.setColor()
    }

    getSubColor() {
      return this.subColors[getRI(this.subColorsRate)]
    }

    getH_random() {
      return getRR([0.0, 0.020833, 0.020833, 0.104167, 0.020833, 0.104167,
        0.104167, 0.1875, 0.104167, 0.1875, 0.1875, 0.4375, 0.1875, 0.4375, 
        0.4375, 0.6875, 0.4375, 0.6875, 0.6875, 0.9375, 0.6875, 0.9375, 0.9375, 1.0], false)
    }

    getH_degree(h, degree, range) {
      return (h+1.0 + getRR([degree-range/2, degree+range/2])/360) % 1
    } 

    setColor() {
      const HMain = this.getH_random()
      let bg = getRI([1, 1])
      let type = getRI([1, 1, 0.5, 0.5, 1])
      switch (type) {
        case 0:
          if (bg==0) {
            this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.5, 0.8]), getRR([0.9, 0.95]))
            this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.9, 0.95]))
          } else if (bg==1) {
            this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.0, 0.1]), getRR([0.05, 0.1])) 
            this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.01, 0.03]))
          }

          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 25, 10), 0.85, 0.55))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 35, 10), 0.85, 0.95))
          for (let i=0; i<4; i++) {            
            this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, i*5+160, 10), getRR([0.8, 0.95]), getRR([0.05, 0.95])))
          }
          this.subColorsRate = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
          break
        
        case 1:
          if (bg==0) {
            this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.5, 0.8]), getRR([0.9, 0.95]))
            this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.9, 0.95]))
          } else if (bg==1) {
            this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.0, 0.1]), getRR([0.05, 0.1])) 
            this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.01, 0.03]))
          }

          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 15, 10), 0.85, 0.15))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 20, 10), 0.85, 0.95))
          for (let i=0; i<4; i++) {            
            this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, i*5+25, 10), getRR([0.3, 0.9]), getRR([0.35, 0.75])))
          }
          this.subColorsRate = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
          break 
      
        case 2:
          this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.5, 0.8]), getRR([0.9, 0.95]))
          this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.9, 0.95]))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 90, 10),  getRR([0.5, 0.9]), getRR([0.3, 0.8])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 90, 10),  getRR([0.5, 0.9]), getRR([0.3, 0.8])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 180, 10), getRR([0.5, 0.9]), getRR([0.3, 0.8])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 180, 10), getRR([0.5, 0.9]), getRR([0.3, 0.8])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 270, 10), getRR([0.5, 0.9]), getRR([0.3, 0.8])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 270, 10), getRR([0.5, 0.9]), getRR([0.3, 0.8])))
          this.subColorsRate = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
          break 
    
        case 3:
          this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.0, 0.1]), getRR([0.05, 0.1])) 
          this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.01, 0.03]))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 90, 10),  getRR([0.5, 0.9]), getRR([0.05, 0.35])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 90, 10),  getRR([0.5, 0.9]), getRR([0.05, 0.35])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 180, 10), getRR([0.5, 0.9]), getRR([0.05, 0.35])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 180, 10), getRR([0.5, 0.9]), getRR([0.05, 0.35])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 270, 10), getRR([0.5, 0.9]), getRR([0.05, 0.35])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 270, 10), getRR([0.5, 0.9]), getRR([0.05, 0.35])))
          this.subColorsRate = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
          break 
          
        case 4:
          if (bg==0) {
            this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.5, 0.8]), getRR([0.9, 0.95]))
            this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.9, 0.95]))
          } else if (bg==1) {
            this.mainColor = new THREE.Color().setHSL(this.getH_degree(HMain, 0, 10), getRR([0.0, 0.1]), getRR([0.05, 0.1])) 
            this.bgColor = new THREE.Color().setHSL(HMain, getRR([0.0, 0.13]), getRR([0.01, 0.03]))
          }
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 90, 10),  getRR([0.05, 0.015]), getRR([0.05, 0.25])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 90, 10),  getRR([0.05, 0.015]), getRR([0.05, 0.25])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 180, 10), 0.8, 0.3))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 180, 10), 0.4, 0.9))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 270, 10), getRR([0.05, 0.015]), getRR([0.05, 0.25])))
          this.subColors.push(new THREE.Color().setHSL(this.getH_degree(HMain, 270, 10), getRR([0.05, 0.015]), getRR([0.05, 0.25])))
          this.subColorsRate = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
          break 
      }
      
      this.ambientLightColor = new THREE.Color().setHSL(0.0, 1.0, 1.0)
      this.pointLightColor = new THREE.Color().setHSL(0.0, 1.0, 1.0)
    }
  }

  class Koke {
    constructor (group, modelArray, type) {
      this.group = group
      this.models = modelArray
      this.type = type

      this.modelsTimeline = [0.5, 2.78, 2.8, 3.3, 4.3, 4.8]
      this.modelsTime = getRR([0.0, this.modelsTimeline[5]])
      
      this.frequency = [getRR([0.5, 1.0]), getRR([0.0, 1.0]), getRR([0.0, 1.0])]
      this.amplitude = [getRR([0.01, 0.03]), getRR([0.0, 0.01]), getRR([0.0, 0.01])]
      this.time = [getRR([0.0, 1/this.frequency[0]]), getRR([0.0, 1/this.frequency[1]]), getRR([0.0, 1/this.frequency[2]])]
    }
  }

  class Monolith {
    constructor (group, KokeArray) {
      this.group = group
      this.kokes = KokeArray
    }
  } 

  // -------------------------

  const colors = new ColorPalette()
  scene.background = colors.bgColor
  
  const ambientLight = new THREE.AmbientLight(colors.ambientLightColor, 1.5)
  scene.add(ambientLight)

  const pointLight = new THREE.PointLight(colors.pointLightColor, 100, 75, 1.0)
  pointLight.position.set(0.0, monolithHeightOffset*2, monolithDepth*1.3)
  scene.add(pointLight)

  // -------------------------

  let group_monolith = new THREE.Group()
  scene.add(group_monolith)
  let geo_monolith = new THREE.BoxGeometry(monolithWidth, monolithHeight, monolithDepth)
  let mt_monolith = new THREE.MeshStandardMaterial({wireframe: false, color: colors.mainColor.getHex()})
  const mesh_monolith = new THREE.Mesh(geo_monolith, mt_monolith)
  mesh_monolith.receiveShadow = true
  mesh_monolith.castShadow = true
  mesh_monolith.material.transparent = true
  mesh_monolith.material.opacity = 0.5
  mesh_monolith.metalness = 0.9
  mesh_monolith.roughness = 0.1
  mesh_monolith.position.set(0.0, monolithHeightOffset, 0.0)
  group_monolith.add(mesh_monolith)

  let vertices_koke = []
  for (let i=0; i<3; i++) {
    let a = getRR([0.0, 0.01])
    let b = getRR([0.0, 0.1])
    let c = getRR([0.0, 1.0])
    let offsetX = getRR([-monolithWidth/2.0, monolithWidth/2.0])
    let offsetY = getRR([-monolithHeight/2.0, monolithHeight/2.0])
    let rad = getRR([0.0, 2*Math.PI])
    for (let j=0; j<3000; j++) {
      let x = (1.0-getRR([0.0, 1.0])*getRR([0.0, 1.0])) * Math.min(monolithWidth, monolithHeight)*0.75 * (getRI([1.0, 1.0])==0?1:-1)
      let y = a*Math.pow(x,3) + b*Math.pow(x,2) + c*x
      let addX = getRR([0.0, 1.0])*x
      let addY = getRR([0.0, 1.0])*y
      let posX = (x+addX)*Math.cos(rad) - (y+addY)*Math.sin(rad) + offsetX
      let posY = (x+addX)*Math.sin(rad) + (y+addY)*Math.cos(rad) + offsetY
      if (-monolithWidth/2.0<=posX && posX<=monolithWidth/2.0 && 
          -monolithHeight/2.0<=posY && posY<=monolithHeight/2.0){
        vertices_koke.push(posX, posY+monolithHeightOffset, getRR([-monolithDepth/2, monolithDepth/2]))
      }
    }
  }
  while (250 < vertices_koke.length/3.0) {
    let i = Math.floor(getRR([0.0, vertices_koke.length/3.0])*3.0)
    vertices_koke.splice(i, 3)  
  }

  let KokeArray = []
  for (let i=0; i<vertices_koke.length; i+=3) {
    let kokeHeight = getRR([0.8, 3.2])
    let kokeWidth = getRR([0.8, 3.2])
    let kokeDepth = getRR([monolithDepth*2/3, monolithDepth])/2
    let x = vertices_koke[i]
    let y = vertices_koke[i+1]
    let z = vertices_koke[i+2]
    let group_koke = new THREE.Group()
    let modelArray = []    
    scene.add(group_koke)
    let c = colors.getSubColor().getHex()
    let type = getRI([4.0, 3.2, 4.5])
    switch (type) {
      case 0: {
        let objectGap = 0.05
        let offsetMin = 0.2718 + objectGap

        if (monolithWidth/2 <= x+kokeWidth/2.0+objectGap && x+kokeWidth/2.0+objectGap < monolithWidth/2+offsetMin) { x += offsetMin }
        else if (-monolithWidth/2-offsetMin < x-kokeWidth/2.0-objectGap && x-kokeWidth/2.0-objectGap <= -monolithWidth/2) { x -= offsetMin }

        if (monolithHeight/2+monolithHeightOffset <= y+kokeHeight/2.0+objectGap && 
            y+kokeHeight/2.0+objectGap < monolithHeight/2+monolithHeightOffset+offsetMin) { y += offsetMin }
        else if (-monolithHeight/2+monolithHeightOffset-offsetMin < y-kokeHeight/2.0-objectGap && 
            y-kokeHeight/2.0-objectGap <= -monolithHeight/2+monolithHeightOffset) { y -= offsetMin }

        if (monolithDepth/2 <= z+kokeDepth/2.0+objectGap && z+kokeDepth/2.0+objectGap < monolithDepth/2+offsetMin) { z += offsetMin } 
        else if (-monolithDepth/2-offsetMin < z-kokeDepth/2.0-objectGap && z-kokeDepth/2.0-objectGap <= -monolithDepth/2) { z -= offsetMin }

        const loader = new GLTFLoader()
        loader.load('fitting.glb', (gltf) => {   
          const model = gltf.scene
          model.traverse((object) => {
            if (object.isMesh) {
              object.material = new THREE.MeshPhongMaterial({color: c})
              object.receiveShadow = true
              object.castShadow = true
            }
          })

          let fitting = []
          for (let j=0; j<8; j++) {
            let addModel = model.clone()
            addModel.rotation.set(0.0, j*Math.PI/2, j<4? 0.0: Math.PI)
            fitting.push(addModel)
          }
          fitting[0].position.set(-kokeWidth/2.0, +kokeHeight/2.0, -kokeDepth/2.0)
          fitting[1].position.set(-kokeWidth/2.0, +kokeHeight/2.0, +kokeDepth/2.0)
          fitting[2].position.set(+kokeWidth/2.0, +kokeHeight/2.0, +kokeDepth/2.0)
          fitting[3].position.set(+kokeWidth/2.0, +kokeHeight/2.0, -kokeDepth/2.0)
          fitting[4].position.set(+kokeWidth/2.0, -kokeHeight/2.0, -kokeDepth/2.0)
          fitting[5].position.set(-kokeWidth/2.0, -kokeHeight/2.0, -kokeDepth/2.0)
          fitting[6].position.set(-kokeWidth/2.0, -kokeHeight/2.0, +kokeDepth/2.0)
          fitting[7].position.set(+kokeWidth/2.0, -kokeHeight/2.0, +kokeDepth/2.0)
          for (let j=0; j<fitting.length; j++) {
            modelArray.push(fitting[j])
            group_koke.add(fitting[j])
          }
          
          let sticks = []
          for (let j=0; j<4; j++) {
            let m = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, kokeHeight, 6), new THREE.MeshPhongMaterial({color: c}))
            m.receiveShadow = true
            m.castShadow = true        
            sticks.push(m)
          }    
          for (let j=0; j<4; j++) {sticks.push(new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, kokeWidth, 6), new THREE.MeshPhongMaterial({color: c})))}    
          for (let j=0; j<4; j++) {sticks.push(new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, kokeDepth, 6), new THREE.MeshPhongMaterial({color: c})))}
          sticks[0].rotation.set(0.0, 0.0, 0.0); sticks[0].position.set(-kokeWidth/2.0, 0.0, -kokeDepth/2.0)
          sticks[1].rotation.set(0.0, 0.0, 0.0); sticks[1].position.set(-kokeWidth/2.0, 0.0, +kokeDepth/2.0)
          sticks[2].rotation.set(0.0, 0.0, 0.0); sticks[2].position.set(+kokeWidth/2.0, 0.0, -kokeDepth/2.0)
          sticks[3].rotation.set(0.0, 0.0, 0.0); sticks[3].position.set(+kokeWidth/2.0, 0.0, +kokeDepth/2.0)
          sticks[4].rotation.set(0.0, 0.0, Math.PI/2); sticks[4].position.set(0.0, +kokeHeight/2.0, -kokeDepth/2.0)
          sticks[5].rotation.set(0.0, 0.0, Math.PI/2); sticks[5].position.set(0.0, +kokeHeight/2.0, +kokeDepth/2.0)
          sticks[6].rotation.set(0.0, 0.0, Math.PI/2); sticks[6].position.set(0.0, -kokeHeight/2.0, -kokeDepth/2.0)
          sticks[7].rotation.set(0.0, 0.0, Math.PI/2); sticks[7].position.set(0.0, -kokeHeight/2.0, +kokeDepth/2.0)
          sticks[8].rotation.set(Math.PI/2, 0.0, 0.0); sticks[8].position.set(+kokeWidth/2.0, +kokeHeight/2.0, 0.0)
          sticks[9].rotation.set(Math.PI/2, 0.0, 0.0); sticks[9].position.set(+kokeWidth/2.0, -kokeHeight/2.0, 0.0)
          sticks[10].rotation.set(Math.PI/2, 0.0, 0.0); sticks[10].position.set(-kokeWidth/2.0, +kokeHeight/2.0, 0.0)
          sticks[11].rotation.set(Math.PI/2, 0.0, 0.0); sticks[11].position.set(-kokeWidth/2.0, -kokeHeight/2.0, 0.0)
          for (let j=0; j<sticks.length; j++) { 
            modelArray.push(sticks[j])
            group_koke.add(sticks[j])
          }
        })
        group_koke.position.set(x,y,z)
        break
      }

      case 1: {
        if (getRI([2.0, 1.0])==0) {
          kokeWidth /= 15
          kokeDepth /= 15
        } else {
          kokeWidth *= 1.1
          kokeHeight *= 1.1
          kokeDepth /= 2.3
        }
        let box = new THREE.Mesh(new THREE.BoxGeometry(kokeWidth, kokeHeight, kokeDepth), new THREE.MeshPhongMaterial({color: c}))
        box.receiveShadow = true
        box.castShadow = true
        modelArray.push(box)
        group_koke.add(box)
        group_koke.position.set(x,y,z)

        break
      }

      case 2: {
        let r = getRR([0.05, 0.25])
        let sphere = new THREE.Mesh(new THREE.SphereGeometry(r, 6, 6), new THREE.MeshPhongMaterial({color: c}))
        sphere.receiveShadow = true
        sphere.castShadow = true
        modelArray.push(sphere)
        group_koke.add(sphere)
        group_koke.position.set(vertices_koke[i], vertices_koke[i+1], vertices_koke[i+2])
        break
      }
    }
    
    group_monolith.add(group_koke)      
    KokeArray.push(new Koke(group_koke, modelArray, type))
  }

  let monolith = new Monolith(group_monolith, KokeArray) 

  // -------------------------

  onResize()
  window.addEventListener('resize', onResize)

  var lastTime = performance.now()

  tick()

  // -------------------------

  function tick() {
    const nowTime = performance.now()
    const time = (nowTime - lastTime) / 1000
    lastTime = nowTime
    
    updateKoke(time)
    
    requestAnimationFrame(tick)
    renderer.render(scene, camera)
  }
  
  function onResize() {
    const width = window.innerWidth
    const height = window.innerHeight
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  function updateKoke(time) {
    for (let i=0; i < monolith.kokes.length; i++) {
      if (monolith.kokes[i].type!=0) { 
        for (let t=0; t < monolith.kokes[i].time.length; t++) {
          monolith.kokes[i].time[t] += time
          if (1/monolith.kokes[i].frequency[t] <= monolith.kokes[i].time[t]) { monolith.kokes[i].time[t] %= 1/monolith.kokes[i].frequency[t] }
        }
        let s = 1.0 + getSyntheticWaveValue(
          [monolith.kokes[i].frequency[0], monolith.kokes[i].frequency[1], monolith.kokes[i].frequency[2]], 
          [monolith.kokes[i].amplitude[0], monolith.kokes[i].amplitude[1], monolith.kokes[i].amplitude[2]],
          [monolith.kokes[i].time[0], monolith.kokes[i].time[1], monolith.kokes[i].time[2]])
        monolith.kokes[i].group.scale.set(s, s, 1)
      }
      else {        
        monolith.kokes[i].modelsTime += time
        if (monolith.kokes[i].modelsTimeline[5] <= monolith.kokes[i].modelsTime) {
          monolith.kokes[i].modelsTime %= monolith.kokes[i].modelsTimeline[5]
        }
        let models_s = 1.0
        let group_s = 0.0
        if (monolith.kokes[i].modelsTime < monolith.kokes[i].modelsTimeline[0]) {
          models_s = 1.0
          group_s = 0.0
        } else if (monolith.kokes[i].modelsTimeline[0]<= monolith.kokes[i].modelsTime && monolith.kokes[i].modelsTime < monolith.kokes[i].modelsTimeline[1]) {
          models_s = 1.0
          group_s = lerp_smooth(monolith.kokes[i].modelsTime, monolith.kokes[i].modelsTimeline[0], monolith.kokes[i].modelsTimeline[1])
        } else if (monolith.kokes[i].modelsTimeline[1]<= monolith.kokes[i].modelsTime && monolith.kokes[i].modelsTime < monolith.kokes[i].modelsTimeline[2]) {
          models_s = 1.0
          group_s = 1.0
        } else if (monolith.kokes[i].modelsTimeline[2]<= monolith.kokes[i].modelsTime && monolith.kokes[i].modelsTime < monolith.kokes[i].modelsTimeline[3]) {
          models_s = 1.0 - lerp_smooth(monolith.kokes[i].modelsTime, monolith.kokes[i].modelsTimeline[2], monolith.kokes[i].modelsTimeline[3])
          group_s = 1.0
        } else if (monolith.kokes[i].modelsTimeline[3]<= monolith.kokes[i].modelsTime && monolith.kokes[i].modelsTime < monolith.kokes[i].modelsTimeline[4]) {
          models_s = 0.0
          group_s = 1.0 - lerp_smooth(monolith.kokes[i].modelsTime, monolith.kokes[i].modelsTimeline[3], monolith.kokes[i].modelsTimeline[4])
        } else if (monolith.kokes[i].modelsTimeline[4]<= monolith.kokes[i].modelsTime && monolith.kokes[i].modelsTime < monolith.kokes[i].modelsTimeline[5]) {
          models_s = lerp_smooth(monolith.kokes[i].modelsTime, monolith.kokes[i].modelsTimeline[4], monolith.kokes[i].modelsTimeline[5])
          group_s = 0.0
        }
        for (let j=0; j<monolith.kokes[i].models.length; j++) {
          monolith.kokes[i].models[j].scale.set(models_s, models_s, models_s)
        }
        monolith.kokes[i].group.scale.set(group_s, group_s, group_s)
      }      
    }
  }

  function getSyntheticWaveValue(frequency, amplitude, time) {
    let ret = 0
    for (let i=0; i<amplitude.length; i++) {
      ret += Math.sin(2*Math.PI * frequency[i] * time[i]) * amplitude[i]
    }
    return ret
  }

  function lerp_smooth(now, start, end) {
    if (now < start) { return 0.0 }
    else if (end <= now) { return 1.0 }
    else { return -2*Math.pow((now-start)/(end-start), 3) + 3*Math.pow((now-start)/(end-start), 2) }
  }

  function getRI(rate) {
    if (rate.length<=0) { return -1 }
    let sum = 0
    for (let i=0; i<rate.length; i++) {
      sum += rate[i]
    }
    let x = getRandom()*sum
    let rateMin = 0
    for (let i=0; i<rate.length; i++) {
      if (rate[i] == 0.0) { continue }
      if (rateMin <= x && x < rateMin+rate[i]) { return i }
      rateMin += rate[i]
    }
    return -1
  }
  
  function getRR(range, equality) {
    if (range.length<2 || range.length%2!=0) { return 0 }

    let rate = []
    let rateSum = 0
    for (let i=0; i<range.length; i+=2) {
      if (range[i+1]<range[i]) { return 0 }
      rate.push(range[i+1]-range[i])
      rateSum+=rate[rate.length-1]
    }

    if (!equality) {
      let i = Math.floor(getRandom()*rate.length)
      return getRandom() * (range[i*2+1]-range[i*2]) + range[i*2]
    } else {
      let r = getRandom()*rateSum
      let s = 0      
      for (let i=0; i<rate.length; i++) {
        if (s<=r && r<s+rate[i]) { return getRandom() * (range[i*2+1]-range[i*2]) + range[i*2] }
        s+=rate[i]       
      }
    }

    return 0
  }

  function getRandom() {
    return fxrand()
  }

}