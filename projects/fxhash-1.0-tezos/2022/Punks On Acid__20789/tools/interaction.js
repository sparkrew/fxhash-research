/////////KEYS
function keyTyped() {

    /////////////////////PIXEL DENSITY
    // if (keyCode === 49) {
    //     pD = 1 // if "1" is pressed
    //     setup()
    // }
    // else if (keyCode === 50) {
    //     pD = 2 // if "2" is pressed
    //     setup()

    // }
    // else if (keyCode === 52) {
    //     pD = 4 // if "4" is pressed
    //     setup()

    // }
    // else if (keyCode === 56) {
    //     pD = 8 // if "8" is pressed
    //     setup()
    // }
    /////////SAVE
    if (keyCode === 83) { // if "s" is pressed
        save(myTitle + "_" + punk + "_" + fxhash + '.png');
    } else if (keyCode === 86) { // if "v" is pressed
        save(myTitle + "_" + punk + "_" + fxhash + '.svg');
    }
}

///////////////PREVIEW /// SAVE & RELOAD
function myPreview() {
    setTimeout(fxpreview, 2000);
}

function timer() {
    setTimeout(function () {
        fxpreview();
    }, 5000);
}

function saver() {
    save(myTitle + punk + "_" + fxhash + '.png');
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

async function progressShow() {
    document.body.style.cursor = 'default';
    document.getElementById("progress").style.display = 'block';
    await new Promise((fn => setTimeout(fn, 1)));
}