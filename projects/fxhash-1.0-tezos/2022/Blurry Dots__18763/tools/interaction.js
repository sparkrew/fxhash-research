let PHI = 1.61803398874989484820459; // Φ = Golden Ratio


/*
VIDEO CAPTURE
*/
let fps = 24;
let capturer = new CCapture({
    framerate: fps,
    format: 'png',
    name: 'out',
    quality: 50,
    verbose: true
});

/////////KEYS
function keyTyped() {
    /////////////////////CC CAPTURE
    if (keyCode === 82) { // if "r" is pressed
        capturer.capture(cnv.canvas);
        capturer.start();
        print('go');
    } else if (keyCode === 90) { // if "z" to zip is pressed
        capturer.stop();
        capturer.save();
        noLoop();
    }
    /////////////////////PIXEL DENSITY
    else if (keyCode === 49) {
        pD = 1 // if "1" is pressed
        setup()
    }
    else if (keyCode === 50) {
        pD = 2 // if "2" is pressed
        setup()
    }
    else if (keyCode === 52) {
        pD = 4 // if "4" is pressed
        setup()
    }
    else if (keyCode === 56) {
        pD = 8 // if "8" is pressed
        setup()
    }
    /////////SAVE
    else if (keyCode === 83) { // if "s" is pressed
        save(myTitle + "_" + fxhash + '.png');
    }

    ////////BEAT
    else if (keyCode === 77) { // "m" to stop the record
        killSound()
    }
    else if (keyCode === 80) { // "p" to stop the record
        goSound()
        setTimeout(killSound, 60000);
    }
}

///////////////PREVIEW /// SAVE & RELOAD
function myPreview() {
    setTimeout(fxpreview, 2000); 
}

function timer() {
    setTimeout(function () {
        location.reload(true);
    }, 5000);
}

function saver() {
    save(myTitle + "_" + fxhash + '.png');
}

/////////////PROGRESS
async function progress(message) {
    document.body.style.cursor = 'progress';
    document.getElementById("progress").innerHTML = message;
    await new Promise((fn => setTimeout(fn, 1)));
}

async function progressClear() {
    document.body.style.cursor = 'default';
    document.getElementById("progress").style.display = 'none';
    await new Promise((fn => setTimeout(fn, 1)));
}