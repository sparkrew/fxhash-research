"use strict";

const SHADOWS = true;
const monochrome = fxrand() < .05;
const hasGoldenBlock = fxrand() < .2 || monochrome;
const laminationRand = fxrand();
let lamination = '';
let laminationNum = .3;
switch (true) {
    case laminationRand < .05:
        lamination = 'High';
        laminationNum = .20;
        break;
    case laminationRand < .1:
        lamination = 'Medium';
        laminationNum = .25;
        break;
    default:
        lamination = 'None';
        laminationNum = .3;
        break;
}
window.$fxhashFeatures = {
    "Lamination": lamination,
    "Monochrome": monochrome,
    "Golden Block": hasGoldenBlock,
}

let scene, camera, renderer, primLight, envMap, control, softLightArray, goldenBlock, goldenBlockNumber;
const init = () => {
    // Three.js Scene
    THREE.RectAreaLightUniformsLib.init();
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera( -10, 10, 10, -10, 1, 1000 );
    camera.position.set(0, 0, 25);
    camera.lookAt(new THREE.Vector3());
    scene.add(camera);
    
    // Lights
    primLight = new THREE.DirectionalLight( 0xffffff, 1.05 );
    const v = new THREE.Vector3(-80,0,0);
    const m = new THREE.Matrix4();
    m.makeRotationFromEuler(new THREE.Euler(0.614, Math.PI/4, -1.4*Math.PI/8, 'XYZ'));
    v.applyMatrix4(m);
    primLight.position.copy(v);

    if (SHADOWS) {
        primLight.castShadow = true;
        primLight.shadow.mapSize.width = primLight.shadow.mapSize.height = 1024;
        primLight.shadow.camera.left = -10;
        primLight.shadow.camera.top = -12;
        primLight.shadow.camera.bottom = 12;
        primLight.shadow.camera.right = 10;
    }
    primLight.lookAt (new THREE.Vector3() );
    scene.add( primLight );

    const light = new THREE.AmbientLight( 0x383838 );
    scene.add( light );

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true });
    if (SHADOWS) {
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.BasicShadowMap;
        renderer.shadowMap.autoUpdate = true;
    }
    renderer.setPixelRatio( getDevicePixelRatio() );
    renderer.setSize( getViewport()[0], getViewport()[1] );
    renderer.domElement.classList.add('main-canvas');
    renderer.domElement.id = 'main-canvas';
    document.body.appendChild( renderer.domElement );
    
    // Resize
    let timeoutID = -1;
    window.addEventListener('resize', () => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(onResize, 300);
    });
    const onResize = () => {
        renderer.setSize( getViewport()[0], getViewport()[1] );
        if (camera.isOrthographicCamera) {
            const n = getViewport()[0] / getViewport()[1];
            camera.left = - 10;
            camera.right = 10;
            camera.top = 10;
            camera.bottom = - 10;
            camera.zoom = .85;
            if (n > 1) {
                camera.top /= n;
                camera.bottom /= n;
                camera.zoom /= n;
            } else {
                camera.left *= n;
                camera.right *= n;
                camera.zoom *= n;
            }
        } else {
            camera.aspect = getViewport()[0] / getViewport()[1];
        }
        camera.updateProjectionMatrix();
    }

    // Export
    document.addEventListener('keypress', (e) => {
        if (e.code === 'KeyS') {
            saveCanvas(renderer.domElement, document.title);
        }
        if (e.code === 'KeyR') {
            resetScene();
        }
        if (e.code === 'KeyA') {
            toggleAnimation();
        }
        
    }, false);
    onResize();
    initObjects(true);
}

const boxSize = 10;
let groupRoot, groupX, groupY, groupZ, timeThen, roll;
const offsets = [];
const initObjects = (initial) => {
    if (!initial) {
        groupRoot.remove(groupX);
    } else {
        loadTextures(() => {
            timeThen = new Date().getTime();
            update();
            fxpreview();
            // saveCanvas(renderer.domElement, document.title);
        });
        groupRoot = new THREE.Group();
        scene.add(groupRoot);
        initControl(groupRoot);
        softLightArray = new SoftLightArray();
        scene.add(softLightArray);
    }

    timeThen = new Date().getTime();
    rollBlocker = cycle / 2;
    const box3 = new THREE.Box3(new THREE.Vector3(-boxSize/2,-boxSize/2,-boxSize/2), new THREE.Vector3(boxSize/2,boxSize/2,boxSize/2));
    groupX = new THREE.Group();
    groupRoot.add(groupX);
    groupY = new THREE.Group();
    groupX.add(groupY);
    groupZ = getNext(box3, new THREE.Vector3(), 0);
    groupY.add(groupZ);
    roll = 0;
    Palette.init(maxIteration + 1);
    softLightArray.hide();
    const color = Palette.getRandom();
    document.body.style.backgroundColor = color;
    scene.background = new THREE.Color(color);
    const uv = [
        0, 1, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 0, 0, 1, 0
    ];
    goldenBlockNumber = 6 + Math.floor(4 * fxrand());
    splitBox3(box3, groupZ, uv);


    if (initial) {
        const screenPos = [];
        const v = new THREE.Vector3();
        collectPositions(groupZ, screenPos, v);
        groupRoot.rotation.x = 0.614;
        groupRoot.rotation.y = Math.PI/4;
        groupRoot.updateWorldMatrix(true);
        const vMax = new THREE.Vector2(-Infinity, -Infinity);
        const vMin = new THREE.Vector2(Infinity, Infinity);
        for (let i = 0; i < 8; i++) {
            groupX.updateWorldMatrix(true);
            groupY.updateWorldMatrix(true);
            groupZ.updateWorldMatrix(true);
            vMax.set(-Infinity, -Infinity);
            vMin.set(Infinity, Infinity);
            for (let i = 0; i < screenPos.length; i+=3) {
                v.fromArray(screenPos, i);
                v.applyMatrix4(groupZ.matrixWorld);
                if (vMax.x < v.x) vMax.x = v.x;
                if (vMax.y < v.y) vMax.y = v.y;
                if (vMin.x > v.x) vMin.x = v.x;
                if (vMin.y > v.y) vMin.y = v.y;
            }
            const sv = new THREE.Vector3(-(vMax.x + vMin.x)/2, -(vMax.y + vMin.y)/2);
            groupZ.worldToLocal(sv);
            offsets.push(sv);
            if (!(i % 2)) {
                groupX.rotation.x = (i / 2 + 1) * PI2;
            } else {
                groupY.rotation.y = ((i-1)/2 + 1) * PI2;
            }
        }
    }
    groupZ.p1.copy(offsets[0]);
}

const collectPositions = (object, screenPos, v) => {
    if (object.p1) {
        object.position.copy(object.p1);
        object.updateWorldMatrix(true);
        if (object.type === 'Mesh Modified') {
            if (object.geometry.attributes.position) {
                for (let i = 0; i < object.geometry.attributes.position.count; i++) {
                    v.fromBufferAttribute(object.geometry.attributes.position, i);
                    v.applyMatrix4(object.matrixWorld);
                    v.toArray(screenPos, screenPos.length);
                }
            }
        }
    }
    if (!object.geometry) {
        object.children.forEach(child => {
            collectPositions(child, screenPos, v);
        });
    }
}

const resetScene = () => {
    timeThen = new Date().getTime();
    timeNow = 0;
    groupRoot.rotation.set(0,0,0);
    groupRoot.rotation.x = 0.614;
    groupRoot.rotation.y = Math.PI/4;
    const resetRotation = (object) => {
        object.rotation.set(0,0,0);
        object.children.forEach(child => {
            if (child.type !== 'Mesh') resetRotation(child);
        })
    }
    resetRotation(groupZ);
    groupZ.position.set(0, 0, 0);
    groupZ.updateWorldMatrix(true);
    // groupZ.p1.x = -(vMax.x + vMin.x)/2;
    // groupZ.p1.y = -(vMax.y + vMin.y)/2;
    groupZ.worldToLocal(groupZ.p1);
    if (!animation) toggleAnimation();
}

// console.log('Bloc:', window.$fxhashFeatures['Golden Block']);
// console.log('Mono:', window.$fxhashFeatures['Monochrome']);
// console.log('Lami:', window.$fxhashFeatures['Lamination']);
const splitBox3 = (box, group, uv, iteration) => {
    box = box.clone();
    box.translate(group.position.clone().negate());
    iteration = iteration || 0;
    const size = new THREE.Vector3();
    box.getSize(size);
    if (Math.max(...size) < .1) iteration = maxIteration - 1;
    let axis = iteration > 0 ? [size.x, size.y, size.z].indexOf(Math.max(size.x, size.y, size.z)) : Math.floor(fxrand()*3);
    let divider = Math.min((1 - laminationNum), Math.max(laminationNum, fxrand()));
    if (window.$fxhashFeatures['Lamination'] === 'Medium') divider = easeInOutSine(divider);
    if (window.$fxhashFeatures['Lamination'] === 'High') divider = easeInOutCubic(divider);
    if (window.$fxhashFeatures['Lamination'] !== 'None' && !iteration) {
        if (axis === 0 && divider < .5) divider = 1 - divider;
        if (axis === 1 && divider > .5) divider = 1 - divider;
        if (axis === 2 && divider > .5) divider = 1 - divider;
    }
    let uv0, uv1;
    [uv0, uv1] = divideUV(uv, axis, divider);
    const min0 = box.min.clone();
    const max1 = box.max.clone();
    const minA =[];
    const maxA =[];
    min0.toArray(minA);
    max1.toArray(maxA);
    minA[axis] = maxA[axis] = minA[axis] + (maxA[axis] - minA[axis]) * divider;
    const min1 = new THREE.Vector3();
    const max0 = new THREE.Vector3();
    min1.fromArray(minA);
    max0.fromArray(maxA);
    let k = Math.round(fxrand());
    if (iteration === 0) k = [1,0,0][axis];
    const box0 = new THREE.Box3(min0,max0);
    const box1 = new THREE.Box3(min1,max1);
    if (iteration > 0) {
        const size0 = size.clone();
        box0.getSize(size0);
        const size1 = size.clone();
        box1.getSize(size1);
        k = Math.min(...size0) < Math.min(...size1) ? 0 : 1;
    }
    const o = [0,0,0];
    o[axis] = -1.0;
    const offset0 = new THREE.Vector3(...o);
    o[axis] = 1.0;
    const offset1 = new THREE.Vector3(...o);
    const offsets = [];
    offsets[k] = offset0;
    offsets[1-k] = offset1;
    const uvs = [];
    uvs[k] = uv0;
    uvs[1-k] = uv1;
    const boxes = [];
    boxes[k] = box0;
    boxes[1-k] = box1;
    const mode = true;
    const id0 = mode ? 0 : [1 - k];
    const id1 = mode ? 1 : [k];
    group.add(getNext(boxes[id0], offsets[id0], iteration, uvs[id0]));
    if (++iteration < maxIteration) {
        const subGroup = getNext(boxes[id1], offsets[id1], iteration);
        subGroup.iteration = iteration;
        group.add(subGroup);
        splitBox3(boxes[id1], subGroup, uvs[id1], iteration);
    } else {
        group.add(getNext(boxes[id1], offsets[id1], iteration, uvs[id1]));
    }
    if (maxIteration === iteration) {
        let container = group;
        while (container.type === 'Mesh Modified' || container.type === 'Group Modified') {
            let b, d = new THREE.Vector3(), v = new THREE.Vector3(), s = new THREE.Vector3();
            container.static = true;
            // expand
            if (container.children[0].static || container.children[1].static) {
                let chs, chd;
                let b0, b1;
                if (container.children[0].static) {
                    chs = container.children[0];
                    chd = container.children[1];
                } else {
                    chs = container.children[1];
                    chd = container.children[0];
                }
                b0 = chs.box.clone();
                b1 = chd.box.clone();
                // find size for each
                b0.getSize(d);
                b1.getSize(s);
                // divide sum by 2
                d.add(s).divideScalar(2);
                //find dist btween centers
                b0.getCenter(v);
                b1.getCenter(s);
                v.sub(s);
                v.setX(Math.abs(v.x));
                v.setY(Math.abs(v.y));
                v.setZ(Math.abs(v.z));
                // move chd
                d.sub(v).multiply(chd.offset);
                chd.box.translate(d);
            }

            // offset
            container.children.forEach((child) => {
                v.copy(child.offset);
                v.multiplyScalar(.6);
                child.box.translate(v);
                child.box.getCenter(v);
                child.p1.copy(v);
                if (b === undefined) {
                    b = child.box.clone();
                } else {
                    b.union(child.box);
                }
            });
            b.translate(container.position);
            container.box = b;
            container = container.parent;
        }
    }
}

const divideUV = (uv, a, d) => {
    const uv0 = uv.slice();
    const uv1 = uv.slice();
    for (let j = 0; j < 2; j++) {
        const b = [uv0, uv1][j];
        for (let s = 0; s < 6; s++) {
            const i = s * 8;
            if (a === 0) {
                if (!j) {
                    if (s === 5) {
                        b[i+0] = uv[i+0] + (uv[i+2] - uv[i+0]) * (1-d);
                        b[i+4] = uv[i+4] + (uv[i+6] - uv[i+4]) * (1-d);
                    }
                    if (s > 1 && s < 5) {
                        b[i+2] = uv[i+0] + (uv[i+2] - uv[i+0]) * d;
                        b[i+6] = uv[i+4] + (uv[i+6] - uv[i+4]) * d;
                    }
                } else {
                    if (s === 5) {
                        b[i+2] = uv[i+0] + (uv[i+2] - uv[i+0]) * (1-d);
                        b[i+6] = uv[i+4] + (uv[i+6] - uv[i+4]) * (1-d);
                    }
                    if (s > 1 && s < 5) {
                        b[i+0] = uv[i+0] + (uv[i+2] - uv[i+0]) * d;
                        b[i+4] = uv[i+4] + (uv[i+6] - uv[i+4]) * d;
                    }
                }
            } else if (a === 1) {
                if (!j) {
                    if (s < 2 || s > 3) {
                        b[i+1] = uv[i+5] + (uv[i+1] - uv[i+5]) * d;
                        b[i+3] = uv[i+7] + (uv[i+3] - uv[i+7]) * d;
                    }
                } else {
                    if (s < 2 || s > 3) {
                        b[i+5] = uv[i+1] + (uv[i+5] - uv[i+1]) * (1-d);
                        b[i+7] = uv[i+3] + (uv[i+7] - uv[i+3]) * (1-d);
                    }
                }
            } else if (a === 2) {
                if (!j) {
                    if (s === 0) {
                        b[i+0] = uv[i+0] + (uv[i+2] - uv[i+0]) * (1-d);
                        b[i+4] = uv[i+4] + (uv[i+6] - uv[i+4]) * (1-d);
                    }
                    if (s === 1) {
                        b[i+2] = uv[i+0] + (uv[i+2] - uv[i+0]) * d;
                        b[i+6] = uv[i+4] + (uv[i+6] - uv[i+4]) * d;
                    }
                    if (s === 2) {
                        b[i+5] = uv[i+1] + (uv[i+5] - uv[i+1]) * d;
                        b[i+7] = uv[i+3] + (uv[i+7] - uv[i+3]) * d;
                    }
                    if (s === 3) {
                        b[i+1] = uv[i+5] + (uv[i+1] - uv[i+5]) * d;
                        b[i+3] = uv[i+7] + (uv[i+3] - uv[i+7]) * d;
                    }
                } else {
                    if (s === 0) {
                        b[i+2] = uv[i+0] + (uv[i+2] - uv[i+0]) * (1-d);
                        b[i+6] = uv[i+4] + (uv[i+6] - uv[i+4]) * (1-d);
                    }
                    if (s === 1) {
                        b[i+0] = uv[i+0] + (uv[i+2] - uv[i+0]) * d;
                        b[i+4] = uv[i+4] + (uv[i+6] - uv[i+4]) * d;
                    }
                    if (s === 2) {
                        b[i+1] = uv[i+5] + (uv[i+1] - uv[i+5]) * (1-d);
                        b[i+3] = uv[i+7] + (uv[i+3] - uv[i+7]) * (1-d);
                    }
                    if (s === 3) {
                        b[i+5] = uv[i+1] + (uv[i+5] - uv[i+1]) * (1-d);
                        b[i+7] = uv[i+3] + (uv[i+7] - uv[i+3]) * (1-d);
                    }
                }
            }
        }
    }
    return [uv0, uv1];
}

const getNext = (box3, offset, iteration, uv) => {
    let next;
    const v = new THREE.Vector3();
    box3.getSize(v);
    const size = v.clone();
    box3.getCenter(v);
    const center = v.clone();
    if (uv) {
        const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
        geometry.setAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( uv ), 2 ) );
        const material = Material.get();
        const sizeArray = [size.x, size.y, size.z];
        const maxSide = Math.max(...sizeArray);
        if (iteration === goldenBlockNumber && window.$fxhashFeatures['Golden Block']) {
            next = new MirrorBox(size, uv);
            goldenBlock = next;
        } else {
            next = new Box(geometry, material);
        }
        if (!next.roll && roll < 3 && maxSide < 3 && iteration > 6 && maxSide > .4) {
            next.roll = true;
            next.rollAxis = size.clone();
            const a = [0,0,0];
            a[sizeArray.indexOf(maxSide)] = 1;
            next.rollAxis.fromArray(a);
            next.rollCount = 1 + Math.round(fxrand());
            next.rollDirection = 1 - 2 * Math.round(fxrand());
            next.rollDelay = 0.2 * fxrand();
            next.rollPass = roll;
            roll ++;
        }
    } else {
        next = new Group();
    }
    next.box = box3.clone();
    next.offset = offset.clone();
    next.position.copy(center);
    next.type += ' Modified';
    next.iteration = iteration;
    next.p0 = center.clone();
    next.p1 = center.clone();
    return next;
}

//All starts here when DOM is ready
document.addEventListener('DOMContentLoaded', (event) => {
    init();
});
