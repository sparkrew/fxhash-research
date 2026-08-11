function generatePrint(force) {
    let resolution;
    if (!force) {
        resolution = prompt("What should be the resolution in pixels? (eg. 4000,3000)");
        if (resolution == null) { return true }
        //resolution = resolution + "," + resolution;
        resolution = resolution.split(',')
        if (resolution.length == 1) {
            resolution = [resolution[0], resolution[0]]
        }
        resolution = [parseInt(resolution[0]), parseInt(resolution[1])]
        if (isNaN(resolution[0]) || resolution[0] < 50 || isNaN(resolution[1]) || resolution[1] < 50) { 
            alert("Wrong value, enter valid numbers larger than 50px"); 
            return true;
        }
    } else {
        resolution = [4000,4000];
    }
    renderer.setSize(resolution[0], resolution[1]);
    let aspect = resolution[0] / resolution[1];
    // camera.aspect = aspect
    camera.left = -d * aspect;
	camera.right = d * aspect;
	camera.top = d;
	camera.bottom = -d;
    //camera.aspect = resolution[0] / resolution[1];
	camera.updateProjectionMatrix();
	renderer.clear()
	//renderer.render(bgscene, bgcamera);
    renderer.render(scene, camera);
    const link = document.createElement('a');
    link.download = `${fxhash}_${camera.position.x.toFixed(0)}_${camera.position.y.toFixed(0)}_${camera.position.z.toFixed(0)}.png`;
    link.href = renderer.domElement.toDataURL();
    link.click();
    link.delete;
	
    aspect = window.innerWidth / window.innerHeight;
    //camera.aspect = aspect;
    camera.left = -d * aspect;
	camera.right = d * aspect;
	camera.top = d;
	camera.bottom = -d;
    renderer.setSize( window.innerWidth, window.innerHeight ) 
	camera.updateProjectionMatrix();

    return true;
};

window.onkeydown = (ev) => {
    if (ev.key == 'o' || ev.key == 'O') {
        if (!capture) {
            capture = 1
            capturer = new CCapture({format:'webm', framerate: 30, verbose: true})
            capturer.start()
        } else {
            capture = 0
            capturer.stop()
            capturer.save()
            capturer = null;
        }
    }; 
    if (ev.key == 'c' || ev.key == 'C') {
        currCamera = (currCamera + 1) % cameraPositions.length;
        pos = cameraPositions[currCamera];
        controls.rotateTo(pos.a, pos.p, true)
        //controls.moveTo(pos.x, pos.y, pos.z, true)
        //camera.position.set(pos.x, pos.y, pos.z);
    };
    if (ev.key == 'b' || ev.key == 'B' || ev.keyCode == 32) {
        pause = !pause;

    }

    if (ev.key == 's' || ev.key == 'S') {
        rtimeFactor = (rtimeFactor + 0.125);
    }
    if (ev.key == 'a' || ev.key == 'A') {
        rtimeFactor = Math.max((rtimeFactor - 0.125), 0);
    }


    if (ev.key == 'r' || ev.key == 'R') {
		material.userData.shader.uniforms.zoom.value = 0;
    }
    if (ev.key == 'p' || ev.key == 'P') {
        was_paused = pause;
        if (!pause) { pause = true; }
        if (!generatePrint(false)) { generatePrint(true) };
        if (!was_paused) { pause = false; };
    };
}
/*
renderer.domElement.addEventListener('wheel',function(event){
		material.userData.shader.uniforms.zoom.value -= event.deltaY*0.001;
        event.preventDefault();
}, false);
*/
document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}, false);
