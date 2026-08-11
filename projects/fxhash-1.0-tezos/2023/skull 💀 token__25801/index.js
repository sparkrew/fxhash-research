import * as THREE from 'three';

			import Stats from 'three/addons/libs/stats.module.js';

			import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
			import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
			import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
			let stats;

			let camera, scene, renderer, controls;
			const settings = {
				metalness: 1.2*fxrand(),
				roughness: 0.4*fxrand(),
				ambientIntensity: 0.2*fxrand(),
				aoMapIntensity: 1.2*fxrand(),
				envMapIntensity: 1.2*fxrand(),
				displacementScale: 1.436143*fxrand(), // from original model
				normalScale: 1.2*fxrand()
			};

			let mesh, mesh1, mesh2, material, material1;

			let pointLight, ambientLight;

			const height = 700; // of camera frustum

			let r = 0.0;

			init();
			animate();
			initGui();

			// Init gui
			function initGui() {

				const gui = new GUI();
				//let gui = gui.addFolder( "Material" );
				gui.add( settings, 'metalness' ).min( 0 ).max( 1 ).onChange( function ( value ) {

					material.metalness = value;

				} );

				gui.add( settings, 'roughness' ).min( 0 ).max( 1 ).onChange( function ( value ) {

					material.roughness = value;

				} );

				gui.add( settings, 'aoMapIntensity' ).min( 0 ).max( 1 ).onChange( function ( value ) {

					material.aoMapIntensity = value;

				} );

				gui.add( settings, 'ambientIntensity' ).min( 0 ).max( 1 ).onChange( function ( value ) {

					ambientLight.intensity = value;

				} );

				gui.add( settings, 'envMapIntensity' ).min( 0 ).max( 3 ).onChange( function ( value ) {

					material.envMapIntensity = value;

				} );

				gui.add( settings, 'displacementScale' ).min( 0 ).max( 3.0 ).onChange( function ( value ) {

					material.displacementScale = value;

				} );

				gui.add( settings, 'normalScale' ).min( - 1 ).max( 1 ).onChange( function ( value ) {

					material.normalScale.set( 1, - 1 ).multiplyScalar( value );

				} );
				gui.destroy();

			}

			function init() {

				const container = document.createElement( 'div' );
				document.body.appendChild( container );

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				renderer.outputEncoding = THREE.sRGBEncoding;

				//

				scene = new THREE.Scene();

				const aspect = window.innerWidth / window.innerHeight;
				camera = new THREE.OrthographicCamera( - height * aspect, height * aspect, height, - height, 1, 10000 );
				camera.position.z = 1500;
				scene.add( camera );

				controls = new OrbitControls( camera, renderer.domElement );
				controls.enableZoom = false;
				controls.enableDamping = true;
				controls.enableRotate = false;

				// lights

				ambientLight = new THREE.AmbientLight( 0xffffff*fxrand(), settings.ambientIntensity );
				scene.add( ambientLight );

				pointLight = new THREE.PointLight( 0xff0000*fxrand(), 1.5 );
				pointLight.position.z = 2500;
				scene.add( pointLight );

				const pointLight2 = new THREE.PointLight( 0xff6666*fxrand(), 1 );
				camera.add( pointLight2 );

				const pointLight3 = new THREE.PointLight( 0x0000ff*fxrand(), 10.5 );
				pointLight3.position.x = - 1000*fxrand();
				pointLight3.position.z = 1000*fxrand();
				scene.add( pointLight3 );

				// env map

				const path = 'textures/cube/SwedishRoyalCastle/';
				const format = '.jpg';
				const urls = [
					path + 'px' + format, path + 'nx' + format,
					path + 'py' + format, path + 'ny' + format,
					path + 'pz' + format, path + 'nz' + format
				];

				const reflectionCube = new THREE.CubeTextureLoader().load( urls );
				reflectionCube.encoding = THREE.sRGBEncoding;

				// textures

				const textureLoader = new THREE.TextureLoader();
				const normalMap = textureLoader.load( 'models/obj/ninja/skullNormal.png' );
				const aoMap = textureLoader.load( 'models/obj/ninja/skullColor.png' );
				const displacementMap = textureLoader.load( 'models/obj/ninja/skullRoughness.png' );

				// material

				material = new THREE.MeshStandardMaterial( {

					color: 0x888888*fxrand(),
					roughness: settings.roughness,
					metalness: settings.metalness,

					normalMap: normalMap,
					normalScale: new THREE.Vector2( 21*fxrand(), - 21*fxrand() ), // why does the normal map require negation in this case?

					aoMap: aoMap,
					aoMapIntensity: 1,

					displacementMap: displacementMap,
					displacementScale: settings.displacementScale,
					displacementBias: - 0.428408, // from original model

					envMap: reflectionCube,
					envMapIntensity: settings.envMapIntensity,

					side: THREE.DoubleSide

				} );

				material1 = new THREE.MeshLambertMaterial( {

					color: 0x888888*fxrand(),
					roughness: settings.roughness,
					metalness: settings.metalness,

					normalMap: normalMap,
					normalScale: new THREE.Vector2( 21*fxrand(), - 21*fxrand() ), // why does the normal map require negation in this case?

					aoMap: aoMap,
					aoMapIntensity: 1,

					displacementMap: displacementMap,
					displacementScale: settings.displacementScale,
					displacementBias: - 0.1428408, // from original model

					envMap: reflectionCube,
					envMapIntensity: settings.envMapIntensity,

					side: THREE.DoubleSide

				} );

				//

				const loader = new OBJLoader();
				loader.load( 'models/obj/ninja/skull.obj', function ( group ) {
										
					const geometry = group.children[ 0 ].geometry;
					geometry.attributes.uv2 = geometry.attributes.uv;
					geometry.center();

					mesh = new THREE.Mesh( geometry, material );
					mesh.scale.multiplyScalar( 25 );
					mesh.position.multiplyScalar (1110,  130, 1110);
					scene.add( mesh );
					mesh.position.set(0, 0, 0);
					
				} );

				
				const loader1 = new OBJLoader();
				loader.load( 'models/obj/ninja/cyl.obj', function ( group ) {
										
					const geometry = group.children[ 0 ].geometry;
					geometry.attributes.uv2 = geometry.attributes.uv;
					geometry.center();

					mesh1 = new THREE.Mesh( geometry, material1 );
					mesh1.scale.multiplyScalar( 25 );
					mesh1.position.multiplyScalar (1110,  130, 1110);
					scene.add( mesh1 );
					mesh1.position.set(0, 0, -300);
					mesh1.rotation.z = - 1.2*fxrand();
				} );



				const loader2 = new OBJLoader();
				loader.load( 'models/obj/ninja/cyl2.obj', function ( group ) {
										
					const geometry = group.children[ 0 ].geometry;
					geometry.attributes.uv2 = geometry.attributes.uv;
					geometry.center();

					mesh2 = new THREE.Mesh( geometry, material );
					mesh2.scale.multiplyScalar( 26 );
					mesh2.position.multiplyScalar (1110,  130, 1110);
					scene.add( mesh2 );
					mesh2.position.set(0, 0, -200);
					mesh2.rotation.z = - 1.2*fxrand();
				} );
				

				//

				stats = new Stats();
				// container.appendChild( stats.dom );

				//

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				const aspect = window.innerWidth / window.innerHeight;

				camera.left = - height * aspect;
				camera.right = height * aspect;
				camera.top = height;
				camera.bottom = - height;

				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				controls.update();

				stats.begin();
				render();
				stats.end();

			}

			function render() {

				pointLight.position.x = 2500 * Math.cos( r );
				pointLight.position.z = 2500 * Math.sin( r );

				mesh.position.y = 2 * Math.cos( r );
				// mesh.position.z = 12 * Math.sin( r );

				mesh2.position.x = -1 * Math.sin( r );
				mesh2.position.y = -2 * Math.sin( r );
				
				r += 0.05;

				renderer.render( scene, camera );


				

			}