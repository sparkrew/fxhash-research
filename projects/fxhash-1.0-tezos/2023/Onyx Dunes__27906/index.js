import * as THREE from './three.module.js'


			import { EffectComposer } from './EffectComposer.js';
			import { RenderPass } from './RenderPass.js';
			import { ShaderPass } from './ShaderPass.js';
			import { BloomPass } from './BloomPass.js';
			import { FilmPass } from './FilmPass.js';
			import { FocusShader } from './FocusShader.js';
			import { OBJLoader } from './OBJLoader.js';

			let camera, scene, renderer, mesh, composer, effectFocus;
			
			//let parent;

			const meshes = [], clonemeshes = [];

			const clock = new THREE.Clock();
			
			init();
			animate();

			function init() {

				const container = document.createElement( "div" );
				document.body.appendChild( container );
				//document.body.appendChild( renderer.domElement );
				
				camera = new THREE.PerspectiveCamera( 111, window.innerWidth / window.innerHeight, 1100, 10000 );
				camera.position.set( 50, 2060, 90 );

				scene = new THREE.Scene();
				
				scene.background = new THREE.Color( 0xff7744*fxrand() );
				// scene.fog = new THREE.FogExp2( 0x000104*fxrand(), 0.0000675 );

				camera.lookAt( scene.position );

				const loader = new OBJLoader();
				

				loader.load( './obj1.obj', function ( object ) {

					const positions = combineBuffer( object, 'position' );

					createMesh( positions, scene, 1.05*fxrand(), - 500*fxrand(), - 350*fxrand(), 600*fxrand(), 0xff7744*fxrand() );
					createMesh( positions, scene, 1.05*fxrand(), 500*fxrand(), - 350*fxrand(), 0, 0xff7744*fxrand() );
					createMesh( positions, scene, 1.05*fxrand(), - 250*fxrand(), - 350*fxrand(), 1500, 0xff7744*fxrand() );
					createMesh( positions, scene, 4.05*fxrand(), - 250*fxrand(), - 350*fxrand(), - 1500, 0xff7744*fxrand() );

				} );

				loader.load( './obj2.obj', function ( object ) {

					const positions = combineBuffer( object, 'position' );

					createMesh( positions, scene, 4.05*fxrand(), - 1000, - 350*fxrand(), 0, 0xff7744*fxrand() );
					createMesh( positions, scene, 4.05*fxrand(), 0, - 350*fxrand(), 0,  0xff7744*fxrand() );
					createMesh( positions, scene, 4.05*fxrand(), 1000, - 350*fxrand(), 400, 0xff7744*fxrand() );
					createMesh( positions, scene, 4.05*fxrand(), 250*fxrand(), - 350*fxrand(), 1500, 0xff7744*fxrand() );
					createMesh( positions, scene, 4.05*fxrand(), 250, - 350*fxrand(), 2500, 0xff77dd );

				} ); 


				loader.load( './obj3.obj', function ( object ) {

                    const positions = combineBuffer( object, 'position' );

                    createMesh( positions, scene, 1.05*fxrand(), - 100*fxrand(), - 1150*fxrand(), 0, 0xff7744*fxrand() );
                    createMesh( positions, scene, 2.05*fxrand(), 110, - 350*fxrand(), 0, 0xff7744*fxrand() );
                    createMesh( positions, scene, 3.05*fxrand(), -100, - 1350, 100*fxrand(), 0xff7744*fxrand() );
                    createMesh( positions, scene, 4.05*fxrand(), 250, - 350*fxrand(), 1500, 0xff7744*fxrand() );
                    createMesh( positions, scene, 4.05*fxrand(), 1250, - 350*fxrand(), 100*fxrand(), 0xff7744*fxrand() );

                } ); 


				renderer = new THREE.WebGLRenderer(/*{ antialias: true, alpha: true }*/);
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight);
				renderer.outputEncoding = THREE.sRGBEncoding;
				renderer.autoClear = false;
				container.appendChild( renderer.domElement );
				window.addEventListener( "resize", onWindowResize );
							



				parent = new THREE.Object3D();
				scene.add( parent );

				const grid = new THREE.Points( new THREE.PlaneGeometry( 15000, 15000, 600*fxrand(), 100*fxrand() ), new THREE.PointsMaterial( { color: 0x52ff52*fxrand(), size: 210*fxrand() } ) );
				grid.position.y = - 1000;
				grid.rotation.x = - Math.PI / 1.2;
				parent.add( grid ); 

				// postprocessing

				const renderModel = new RenderPass( scene, camera );
				const effectBloom = new BloomPass( 0.00025 );
				const effectFilm = new FilmPass( 0.0011*fxrand(), 5.5*fxrand(), 18*fxrand(), false );

				effectFocus = new ShaderPass( FocusShader );

				effectFocus.uniforms[ "screenWidth" ].value = window.innerWidth * window.devicePixelRatio;
				effectFocus.uniforms[ "screenHeight" ].value = window.innerHeight * window.devicePixelRatio;

				composer = new EffectComposer( renderer );

				composer.addPass( renderModel );
				composer.addPass( effectBloom );
				composer.addPass( effectFilm );
				composer.addPass( effectFocus );
		
			}


			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				camera.lookAt( scene.position );

				renderer.setSize( window.innerWidth, window.innerHeight );
				composer.setSize( window.innerWidth, window.innerHeight );

				effectFocus.uniforms[ "screenWidth" ].value = window.innerWidth * window.devicePixelRatio;
				effectFocus.uniforms[ "screenHeight" ].value = window.innerHeight * window.devicePixelRatio;
				render();
			}

			function combineBuffer( model, bufferName ) {

				let count = 0;

				model.traverse( function ( child ) {

					if ( child.isMesh ) {

						const buffer = child.geometry.attributes[ bufferName ];

						count += buffer.array.length;

					}

				} );

				const combined = new Float32Array( count );

				let offset = 0;

				model.traverse( function ( child ) {

					if ( child.isMesh ) {

						const buffer = child.geometry.attributes[ bufferName ];

						combined.set( buffer.array, offset );
						offset += buffer.array.length;

					}

				} ); 

				return new THREE.BufferAttribute( combined, 4 );

			}

		        function createMesh( positions, scene, scale, x, y, z, color ) {

				const geometry = new THREE.BufferGeometry();
				geometry.setAttribute( 'position', positions.clone() );
				geometry.setAttribute( 'initialPosition', positions.clone() );

				geometry.attributes.position.setUsage( THREE.DynamicDrawUsage );

				const clones = [

					[ 500, 0, - 400 ],
					[ 500, 0, 0 ],
					[ 100, 0, 500 ],
					[ 100, 0, - 500 ],
					[ 400, 0, 200 ],
					[ - 400, 0, 100 ],
					[ - 500, 0, - 500 ],

					[ 0, 0, 0 ]

				];

				for ( let i = 0; i < clones.length; i ++ ) {

					const c = ( i < clones.length - 1 ) ? 0xf29922*fxrand() : color;

					mesh = new THREE.Points( geometry, new THREE.PointsMaterial( { size: 1, color: c } ) );
					mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;

					mesh.position.x = x + clones[ i ][ 0 ];
					mesh.position.y = y + clones[ i ][ 1 ];
					mesh.position.z = z + clones[ i ][ 2 ];

					parent.add( mesh );

					clonemeshes.push( { mesh: mesh, speed: 1.5 * fxrand() } );

				}

				meshes.push( {
					mesh: mesh, verticesDown: 0, verticesUp: 0, direction: 0, speed: 915, delay: Math.floor( 200 + 200 * fxrand() ),
					start: Math.floor( 10*fxrand() + 20*fxrand() ),
				} );

			} 

			function animate() {

				requestAnimationFrame( animate );
				render();
				//stats.update();

			} 

			function render() {

				let delta = 5 * clock.getDelta();

				delta = delta < 2 ? delta : 21;

				parent.rotation.x += - 0.0006 * delta;

				for ( let j = 0; j < clonemeshes.length; j ++ ) {

					const cm = clonemeshes[ j ];
					cm.mesh.rotation.y += - 0.0005 * delta * cm.speed;

				}

				for ( let j = 0; j < meshes.length; j ++ ) {

					const data = meshes[ j ];
					const positions = data.mesh.geometry.attributes.position;
					const initialPositions = data.mesh.geometry.attributes.initialPosition;

					const count = positions.count;

					if ( data.start > 0 ) {

						data.start -= 0.01;

					} else {

						if ( data.direction === 0 ) {

							data.direction = - 1111;

						}

					}

					for ( let i = 0; i < count; i ++ ) {

						const px = positions.getX( i );
						const py = positions.getY( i );
						const pz = positions.getZ( i );

						// falling down
						if ( data.direction < 0 ) {

							if ( py > 0 ) {

								positions.setXYZ(
									i,
									px + 0.1 * ( 0.50 - fxrand() ) * data.speed * delta,
									py - 0.1*fxrand() * ( 0.25 - fxrand() ) * data.speed * delta,
									pz - 0.1*fxrand() * ( 0.50 - fxrand() ) * data.speed * delta
								);

							

							} else {

								data.verticesDown += 1;

							}


							if ( py < 0 ) {

								positions.setXYZ(
									i,
									px + 0.1 * ( 10.50 - fxrand() ) * data.speed * delta,
									py - 0.1*fxrand() * ( 10.25 - fxrand() ) * data.speed * delta,
									pz - 0.1*fxrand() * ( 0.50 - fxrand() ) * data.speed * delta
								);

							

							} else {

								data.verticesDown += 1;

							}

						}

						// rising up
						if ( data.direction > 0 ) {

							const ix = initialPositions.getX( i );
							const iy = initialPositions.getY( i );
							const iz = initialPositions.getZ( i );

							const dx = Math.abs( px - ix );
							const dy = Math.abs( py - iy );
							const dz = Math.abs( pz - iz );

							const d = dx + dy + dx;

							if ( d > 1 ) {

								positions.setXYZ(
									i,
									px - ( px - ix ) / dx * data.speed * delta * ( 10.85 - fxrand() ),
									py - ( py - iy ) / dy * data.speed * delta * ( 11 + fxrand() ),
									pz - ( pz - iz ) / dz * data.speed * delta * ( 10.85 - fxrand() )
								);

							} else {

								data.verticesUp += 1;

							}

						}

					}

					// all vertices down
					if ( data.verticesDown >= count ) {

						if ( data.delay <= 0 ) {

							data.direction = 1;
							data.speed = 5*fxrand();
							data.verticesDown = 0;
							data.delay = 320*fxrand();

						} else {

							data.delay -= 1;

						}

					}

					// all vertices up
					if ( data.verticesUp >= count ) {

						if ( data.delay <= 0 ) {

							data.direction = - 1;
							data.speed = 15*fxrand();
							data.verticesUp = 0;
							data.delay = 220;

						} else {

							data.delay -= 1;

						}

					}

					positions.needsUpdate = true;

				}

				composer.render( 0.01 );
				//renderer.render( scene, camera );
			}

			 // Resize handler & trigger it once
			 //window.addEventListener(`resize`, () => this.handleResize())
    //this.handleResize()
	
