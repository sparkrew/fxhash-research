const DEBUG=false
const debug_log = function (msg) { if (DEBUG) console.log(msg) }
Math.random = fxrand;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Quit if WebGL2 is not supported
let gl = renderer.domElement.getContext( 'webgl2', { antialias: false } );
let isWebGL2 = !!gl;
if(!isWebGL2) {
    document.body.innerHTML = `
<p>WebGL 2 is not available.  
See <a href="https://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">
How to get a WebGL 2 implementation</a></p>`;
    throw 'No WebGL 2 available.';
}


let user_is_ready = false
let loading_done = false

const ready = function () {
    user_is_ready = true
    document.getElementById("bt").style.display = 'none'
    document.getElementById("info").style.display = 'none'
    if (loading_done) { director(); }
};

// Setup THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize );

const control = new THREE.OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.zoomSpeed = 0.25;
control.rotateSpeed = 0.25;
control.autoRotate = false;
control.autoRotateSpeed = 0.1;
/*const control = new THREE.FirstPersonControls(camera, renderer.domElement);
control.movementSpeed = 0.00001;
control.lookSpeed = 0.00000001;
control.domElement = renderer.domElement;
control.rollSpeed = Math.PI / 4800000;
control.autoForward = false;
control.dragToLook = false;*/




// Some helpers when debugging
if (DEBUG) {
    scene.add(new THREE.GridHelper())
    scene.add(new THREE.AxesHelper(5))
    var stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );
}



var all_textures = [];
const thumb_size = 300;
const thumbnail_loading_manager = new THREE.LoadingManager();
const thumbnail_loader = new THREE.TextureLoader(thumbnail_loading_manager);
var all_projects;

const transition = async function (uniform, to, duration, easing=TWEEN.Easing.Quadratic.In) {
    let object = planes.material.uniforms[uniform];
    return new Promise(resolve => {
            new TWEEN.Tween(object)
                .to({value:to}, duration)
                .easing(easing)
                .onComplete(resolve)
                .onStop(resolve)
                .start()
    });
}


const move_camera_to_photo = function () {
    // Move camera to a position to see full pictures
    return new Promise(tween_resolve => {
        new TWEEN.Tween(camera.position)
            .to({x:0, y:0, z:260}, Math.random() * 6000 + 6000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(tween_resolve)
            .start()
    });
}

const go_random = async function(keep_texture=false) {
    return new Promise(async resolve => {
        planes.material.uniforms.vert_mode_a.value = planes.material.uniforms.vert_mode_b.value;
        planes.material.uniforms.vert_mode_mix.value = 0;
        planes.material.uniforms.vert_mode_b.value = choose([4,5]);
        planes.material.uniforms.tex_mode_a.value = planes.material.uniforms.tex_mode_b.value;
        planes.material.uniforms.tex_mode_mix.value = 0;
        planes.material.uniforms.tex_mode_a.value = planes.material.uniforms.tex_mode_b.value;
        if (keep_texture) 
            planes.material.uniforms.tex_mode_b.value = choose([2,3]);
        else if (planes.material.uniforms.tex_mode_a.value > 1) 
            planes.material.uniforms.tex_mode_b.value = choose([1,2,3]);
        else 
            planes.material.uniforms.tex_mode_b.value = 1;
        let ampli = Math.random() * 6 + 13;
        control.autoRotate = true;
        await Promise.all([
            transition("vert_mode_mix", 1, Math.random() * 1000 + 2000, TWEEN.Easing.Cubic.Out),
            transition("amplitude", ampli, Math.random() * 1000 + 2000, TWEEN.Easing.Cubic.InOut),
            transition("tex_mode_mix", 1, Math.random() * 1000 + 2000, TWEEN.Easing.Bounce.InOut),
            new Promise(tween_resolve => {
                    new TWEEN.Tween(camera.position)
                        .to({
                            x: (Math.random()*2-1) * ampli,
                            y: (Math.random()*-1) * ampli,
                            z: (Math.random()*2-1) * ampli
                        }, Math.random() * 1000 + 2000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(tween_resolve)
                        .start()
            })
        ])
        resolve();
    })
}


var planes;
const run = async function() {
    const textures = null;
    const n_instances = 100000;
    const shaderMaterial = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: {
            frame: {value: 0}, 
            textures: {value: textures},
			photo_ratio: {value: 1},
			photo_texture: {value: null},
			photo_texture_transition: {value: null},
			photo_mix: {value: 0},
            n_tex: {value: 0}, 
            n_instances: {value: n_instances},
            vert_mode_a: {value: 4},
            vert_mode_b: {value: 4},
            vert_mode_mix: {value: 0},
            tex_mode_a: {value: 1},
            tex_mode_b: {value: 1},
            tex_mode_mix: {value: 0},
            amplitude: {value: 1},
        },
        vertexShader: vShader,
        fragmentShader: fShader
    });

    const geometry = new THREE.PlaneGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    planes = new THREE.InstancedMesh( geometry, shaderMaterial, n_instances);
    let instances_indexes = new Float32Array(n_instances);
    let instances_ids = new Float32Array(n_instances);
    var dummy = new THREE.Object3D();
    for (let i = 0; i < n_instances; i++) {
        instances_indexes[i] = i;//Math.floor(Math.random() * i);
        instances_ids[i] = Math.floor(Math.random() * n_instances);
        let x = i - n_instances/2;
        let w = Math.pow(n_instances, 0.5);
        let h = w;
        planes.setMatrixAt(i, dummy.matrix.setPosition(0,0,0));
    };

    geometry.setAttribute( 'instance_index', new THREE.InstancedBufferAttribute( instances_indexes, 1 ) );
    geometry.setAttribute( 'instance_id', new THREE.InstancedBufferAttribute( instances_ids, 1 ) );

    scene.add( planes );

    planes.instanceMatrix.needsUpdate = true; 
    planes.rotation.x = Math.PI/2

    camera.position.z = 250;

    animate(0);
}


let frame = 0;
const animate = function (time) {
    requestAnimationFrame( animate );
    
    planes.material.uniforms.frame.value = frame;
    frame++;
    if (frame % 1000.0 == 0.0) {
        //go_random()
    }
    
    TWEEN.update(time) 
    control.update(time)

    if (DEBUG) stats.update();
    
    renderer.render( scene, camera );
};
run();
go_random()
