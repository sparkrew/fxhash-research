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
    camera.aspect = resolution[0] / resolution[1];
	camera.updateProjectionMatrix();
	renderer.clear()
	if (useBGShader) {renderer.render(bgscene, bgcamera)};
    renderer.render(scene, camera);
    const link = document.createElement('a');
    link.download = `${fxhash}_${camera.position.x.toFixed(0)}_${camera.position.y.toFixed(0)}_${camera.position.z.toFixed(0)}.png`;
    link.href = renderer.domElement.toDataURL();
    link.click();
    link.delete;
	
    camera.aspect = width/height;
	camera.updateProjectionMatrix();
    renderer.setSize( width, height ) 
    return true;
};

window.onkeydown = (ev) => {
    if (ev.key == 'c' || ev.key == 'C') {
        currCamera = (currCamera + 1) % cameraPositions.length;
        let pos = cameraPositions[currCamera];
        camera.position.set(pos.x, pos.y, pos.z);
    };
    if (ev.key == 'b' || ev.key == 'B' || ev.keyCode == 32) {
        pause = !pause;

    }
    if (ev.key == 'p' || ev.key == 'P') {
        was_paused = pause;
        if (!pause) { pause = true; }
        if (!generatePrint(false)) { generatePrint(true) };
        if (!was_paused) { pause = false; };
    };
}
