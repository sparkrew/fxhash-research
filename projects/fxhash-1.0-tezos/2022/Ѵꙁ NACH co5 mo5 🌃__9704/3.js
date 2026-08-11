		const scene = new THREE.Scene();
		const scene2 = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera
		( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		const camera2 = new THREE.PerspectiveCamera
		( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer({
			alpha: true, canvas: layer2});
		renderer.setSize
		( window.innerWidth, window.innerHeight );
		renderer.setPixelRatio(devicePixelRatio);

		const renderer2 = new THREE.WebGLRenderer({
			alpha: true, canvas: layer3});
		renderer2.setSize
		( window.innerWidth, window.innerHeight );
		renderer2.setPixelRatio(devicePixelRatio);

		document.body.appendChild
		( renderer.domElement );
		document.body.appendChild
		( renderer2.domElement );


	//	const light = new THREE.AmbientLight( 0xffffff ); // soft white light
	//	scene.add( light );

					const urls = [
						'cubemap.png', 'cubemap.png',
						'cubemap.png', 'cubemap.png',
						'cubemap.png', 'cubemap.png'
					];

					const hdri = new THREE.CubeTextureLoader().load( urls );
					hdri.mapping = THREE.CubeRefractionMapping;

		const co5 = new THREE.TextureLoader().load("nachco5.png");
	//	console.log(co5);

		co5.magFilter = THREE.NearestFilter;

		var colors1 = [
		'Azure',
		'Aquamarine',
		'LightCoral',
		'GoldenRod',
	];

		var colors2 = [
			'BlanchedAlmond',
			'Blue',
			'Coral'
	];

		let rand_col1 = colors1 [Math.floor(fxrand() * colors1.length)];
		let rand_col2 = colors2 [Math.floor(fxrand() * colors2.length)];
		//console.log(rand_col1);

		const pLight = new THREE.PointLight (rand_col2, 0.1, 100);
		pLight.position.set(1, 1, 1);
		scene2.add(pLight);


		const material = new THREE.MeshStandardMaterial( {
		//	wireframe: true,
			envMap: hdri,

			color: rand_col1,
			emissive: 0xffffff,
			emissiveMap: co5,
			emissiveIntensity: 1,
			metalness: 0.7,
			roughness: 0,

		} );

		const mtOuter = new THREE.MeshStandardMaterial( {
			emissive: rand_col1,
		} );
		const mtInner = new THREE.MeshStandardMaterial( {
			emissive: rand_col2,
		} );


//touch CONTROLLER
	const controls = new THREE.OrbitControls (
	camera2, renderer2.domElement);

		controls.enablePan = false;
		controls.autoRotateSpeed = 2;

// MODEL IMPORT

			const loader = new THREE.OBJLoader();
			var o;

			loader.load('./art.obj', function(object) {

			object.traverse( function (child) {
				object.scale.set(0.5,0.5,0.5);
				//objkt.position.y = -5;
				if ( child instanceof THREE.Mesh ) {child.material = material;}
			} );
			o = object;
			scene2.add(o);
			});


			loader.load('./outer.obj', function(object) {
				object.traverse( function (child) {

					if ( child instanceof THREE.Mesh ) {child.material = mtOuter;}
				object.scale.set(0.07,0.07,0.07);
				object.position.z = 0;
				} );
				let mesh = object;
				scene.add(mesh);
				});

			loader.load('./inner.obj', function(object) {
					object.traverse( function (child) {

						if ( child instanceof THREE.Mesh ) {child.material = mtInner;}
					object.scale.set(0.07,0.07,0.07);
					object.position.z = 0;
					} );
					let mesh = object;
					scene.add(mesh);
					});


		camera.position.z = 5;
		controls.update();
		camera2.position.z = 5;
		controls.update();

	//	const domEvents = new THREEx.DomEvents( camera2, renderer2.domElement);

	//	domEvents.addEventListener(scene, 'click', event => {
		controls.autoRotate = true
	//	});



//SIN MOTION
		var counter = 0;
		var increase = Math.PI * 2 / 100;

//ANIMATION
		function animate() {
				requestAnimationFrame( animate );

				for ( i = 0; i <= 0.01; i += 0.0001 ) {
					x = i;
					y = Math.sin( counter ) / 2 + 0.5;
					counter += increase;
				};

				//scene.rotation.y = (-0.5 + y) * 0.1;
				scene.scale.x = 0.95 + 0.05*y;
				scene.scale.y = 0.95 + 0.05*y;
				controls.update();
		//		objkt.rotation.y += 0.01;
				o.position.y = (y-0.4)*0.2;

				renderer.render( scene, camera );
				renderer2.render( scene2, camera2 );
			};

			animate();
