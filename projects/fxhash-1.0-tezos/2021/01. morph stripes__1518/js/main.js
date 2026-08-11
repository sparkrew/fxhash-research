var scene, renderer, camera, target, cameraControl;

function setupMain() {

    console.log('init!');
    createWorld();
    setup( renderer.getContext() );
    createGeometries();
//    createComposer();
    addEvents();
    resize( null );

    mainRender();
}

function addEvents() {
    window.addEventListener('resize', resize );
}

function createWorld() {

    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer( {transparent : false } );
    renderer.setFaceCulling( THREE.CullFaceFrontBack );
    renderer.setDepthTest( false );
    renderer.setBlending( THREE.NoBlending );

    target = new THREE.Vector3(0, 0, -0);
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

    cameraControl = new CameraControl( camera, target );

    var container = document.getElementById('container');
    container.appendChild( renderer.domElement );

}

var boundingSphere = new THREE.Sphere( new THREE.Vector3(0, 0, 0), 500 );
var c0, c1, c2, c3, c4, c5, c6;
var geometry, material, mesh, vertices, texture, quad, quad2, quad3, quad4, quad5, quad6, quad7;
function createGeometries() {

    c0 = new THREE.Vector3();
    c1 = new THREE.Vector3();
    c2 = new THREE.Vector3();
    c3 = new THREE.Vector3();
    c4 = new THREE.Vector3();
    c5 = new THREE.Vector3();
    c6 = new THREE.Vector3();

    geometry = new THREE.BufferGeometry();

    var max = 4194304;

    var index2D = new THREE.BufferAttribute( new Float32Array( max ), 2 );
    var indices = new THREE.BufferAttribute( new Float32Array( max ), 1 );
    var positions = new THREE.BufferAttribute( new Float32Array( max * 3 ), 3 );

    var div = 1 / 2048;
    for (var i = 0; i < max; i++)
    {
        index2D.setXY( i, 2. * div * ((i % 2048) + 0.5) - 1,  2. * div * (Math.floor(i * div) + 0.5) - 1 );
        indices.setX( i, i );
        positions.setXYZ(i, i, i, i);
    }

    geometry.addAttribute( 'aV2I', index2D );
    geometry.addAttribute( 'indice', indices );
    geometry.addAttribute( 'position', positions );
    geometry.pointsToDraw = activeCells * 12;

    texture = new THREE.Texture();
    texture.name = 'miWEBGL textura';
    texture.__webglTexture = tResult;
    texture.__wegglInit = true;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.format = THREE.RGBAFormat;
    texture.generateMipmaps = false;
    texture.premultiplyAlpha = false;
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.type = THREE.FloatType;
    texture._needsUpdate = false;

//    var texture = THREE.ImageUtils.loadTexture('texture.png');
    var textureMap = THREE.ImageUtils.loadTexture( './textures/matcap.jpg' );
    var normalMap = THREE.ImageUtils.loadTexture( './textures/ice-snow.jpg' );
    var sphereMap = THREE.ImageUtils.loadTexture( './textures/sphere.png' );
    sphereMap.wrapS = sphereMap.wrapT = THREE.RepeatWrapping;
    sphereMap.repeat = new THREE.Vector2( 100, 100 );

    sphereMap.magFilter = THREE.LinearFilter;
    sphereMap.minFilter = THREE.LinearFilter;

    // material
    material = new THREE.ShaderMaterial( {

        attributes: {
            'position': {type: "v3", value: null},
            'indice': {type:'f', value: null},
            'aV2I': {type:'v2', value: null}
        },
        uniforms: {
            time: { type: "f", value: 1.0 },
            uC0 : { type: "v3", value: c0 },
            uC1 : { type: "v3", value: c1 },
            uC2 : { type: "v3", value: c2 },
            uC3 : { type: "v3", value: c3 },
            uC4 : { type: "v3", value: c4 },
            uC5 : { type: "v3", value: c5 },
            uC6 : { type: "v3", value: c6 },
            uPT : { type: "t", value: texture },
            textureMap : { type: "t", value : textureMap },
            normalMap : { type : "t", value : normalMap }

        },

        vertexShader: document.getElementById( 'vertexShaderTest' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShaderTest' ).textContent,
        side: THREE.DoubleSide

    } );

    material.useBlending = false;
    material.uniforms.textureMap.value.wrapS = material.uniforms.textureMap.value.wrapT = THREE.ClampToEdgeWrapping;
    material.uniforms.normalMap.value.wrapS = material.uniforms.normalMap.value.wrapT = THREE.RepeatWrapping;


    mesh = new THREE.Mesh( geometry, material );
    mesh.position.z = 0;
    scene.add( mesh );

    var sm = new THREE.ShaderMaterial( {
        uniforms: {
            time: { type: "f", value: 1.0 },
            uPT: { type: "t", value: sphereMap}
        },

        vertexShader: document.getElementById( 'vertexShaderQuad' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShaderQuad' ).textContent,

        side: THREE.DoubleSide
    })

    quad = new THREE.Mesh( new THREE.SphereGeometry( 100, 100, 2, 2 ), sm );
    quad.position.z = -0.0001;
    quad.rotation.z = Math.PI * 0.25;
    scene.add(quad);

    var sm2 = new THREE.ShaderMaterial( {
        uniforms: {
            time: { type: "f", value: 1.0 },
            uPT: { type: "t", value: textureMap}
        },

        vertexShader: document.getElementById( 'vertexShaderQuad' ).textContent,
        fragmentShader: document.getElementById( 'fragmentShaderQuad' ).textContent,

        side: THREE.FrontSide
    })

    //
    quad2 = new THREE.Mesh( new THREE.PlaneGeometry( 1, 1, 2, 2 ), sm2 );
    quad2.position.z = -1;
    scene.add(quad2);

    quad3 = new THREE.Mesh( new THREE.PlaneGeometry( 1, 1, 2, 2 ), sm2 );
    quad3.position.z = 1;
    scene.add(quad3);


    quad4 = new THREE.Mesh( new THREE.PlaneGeometry( 1, 1, 2, 2 ), sm );
    quad4.position.z = 0;
//    scene.add(quad4);
//    setTimeout(function(){scene.remove(quad)}, 5000);
}

var composer, zoomBlurPass, multiPassBloomPass;
function createComposer(){
    composer = new WAGNER.Composer( renderer );
    composer.setSize( window.innerWidth, window.innerHeight ); // or whatever resolution

    zoomBlurPass = new WAGNER.ZoomBlurPass();
    multiPassBloomPass = new WAGNER.MultiPassBloomPass();


}

function getCenters() {
    c0.x = center0[0];
    c0.y = center0[1];
    c0.z = center0[2];

    c1.x = center1[0];
    c1.y = center1[1];
    c1.z = center1[2];

    c2.x = center2[0];
    c2.y = center2[1];
    c2.z = center2[2];

    c3.x = center3[0];
    c3.y = center3[1];
    c3.z = center3[2];

    c4.x = center4[0];
    c4.y = center4[1];
    c4.z = center4[2];

    c5.x = center5[0];
    c5.y = center5[1];
    c5.z = center5[2];

    c6.x = center6[0];
    c6.y = center6[1];
    c6.z = center6[2];
}

function mainRender() {

    requestAnimationFrame( mainRender );

    render();

    cameraControl.update();
    var gl = renderer.getContext();
    gl.viewport( 0, 0, window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio );
    gl.clearColor(0.1, 0.1, 0.1, 1.0);

    getCenters();
    material.uniforms.uC0.value = c0;
    material.uniforms.uC1.value = c1;
    material.uniforms.uC2.value = c2;
    material.uniforms.uC3.value = c3;
    material.uniforms.uC4.value = c4;
    material.uniforms.uC5.value = c5;
    material.uniforms.uC6.value = c6;

    geometry.pointsToDraw = activeCells * 12;
    geometry.boundingSphere = boundingSphere;

//    quad2.position.z = vars.quad1Z;
//    quad3.position.z = vars.quad2Z;
//    quad4.position.z = vars.quad3Z;

    cameraControl.target.z = vars.cameraTargetZ;

//    quad.rotation.y += 0.1;
    renderer.render( scene, camera, null, true );

//    renderer.autoClearColor = true;
//    composer.reset();
//    composer.render( scene, camera );
//    composer.pass( multiPassBloomPass );
//    composer.pass( zoomBlurPass );
//    composer.toScreen();

//    render();

}

function resize( e ) {

    var w = window.innerWidth;
    var h = window.innerHeight;

    renderer.setSize( w, h );
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

//    composer.setSize( renderer.domElement.width, renderer.domElement.height );
}