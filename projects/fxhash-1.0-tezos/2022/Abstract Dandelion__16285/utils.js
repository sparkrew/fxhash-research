// Abstract Dandelion - by ArtLife
// ArtLife on fxhash: https://www.fxhash.xyz/u/ArtLife
// instagram: https://www.instagram.com/generativeartlife/
// ArtLife Twitter: https://twitter.com/iamPraveenIN
// Credit to p5js: https://p5js.org/
// Credit to p5.pattern: https://github.com/SYM380/p5.pattern
// Credit to kgolid chromotome: https://github.com/kgolid/chromotome

function addWave(l) {
    push()
    noStroke()
    fill(40, 6 + fxrand() * 14)
    beginShape()
    xoff = 0;
    inc = fxrand()
    for (let i = 0; i <= width; i++) {
        const s = map(sin(xoff), -1, 1, -10, 10);
        vertex(i, (height - l) + s);
        xoff += inc;
    }
    vertex(width, height);
    vertex(0, height);
    endShape()
    pop()
}

function addGrain(num) {
    loadPixels()

    for (let i = 0; i < (width * pixelDensity()) * (height * pixelDensity()) * 4; i += 4) {
        let noise = map(fxrand(), 0, 1, -num, num)
        pixels[i] = pixels[i] + noise
        pixels[i + 1] = pixels[i + 1] + noise
        pixels[i + 2] = pixels[i + 2] + noise
        pixels[i + 3] = pixels[i + 3] + noise
    }

    updatePixels()
}

function keyPressed() {
    w = windowHeight - (windowHeight - windowHeight / 1.333333333);
    h = windowHeight;
    let fs = fullscreen();

    if (key === '0' || key === 'd') saveImage(w, h, '' + int(w) + 'x' + int(h) + '');
    else if (key === '1' || key === 's') saveImage(1152, 1536, '1152x1536px');
    else if (key === 'f') fullscreen(!fs);
    else if (key === 'r') border = false;
    else if (key === 'b') border = true;

    windowResized(windowHeight - (windowHeight - windowHeight / 1.333333333), windowHeight);
    return false;
}

function saveImage(sizeW, sizeH, name) {
    windowResized(sizeW, sizeH);
    save(name + '_' + fxhash + ".png");
}

function load() {
    function patternUse() {
        if (isSingle < 1 / 3) return "Single Pattern";
        else return "Mutli Pattern";
    }

    function getAmountName() {
        let total = h1Lines + h2Lines + hSLines;
        if (total <= 80) return "Extra Low";
        else if (total > 80 && total <= 90) return "Low";
        else if (total > 90 && total <= 100) return "Meddium";
        else if (total > 100 && total <= 110) return "High";
        else return "Extra High";
    }

    console.log("Abstract Dandelion - by ArtLife (All Rights Reserved)")
    console.log("Hash: " + fxhash)
    console.log("Seed: " + seed)
    console.log("press 'd' or '0' to save in default quality")
    console.log("press 's' or '1' to save in fine quality")
    console.log("Note: render image can take some seconds or a minute, so please wait until it finishes render")
    console.log("press 'b' to add border line in the frame and press 'r' to remove border from the frame")
    console.log("Pattern Used:", patternUse())
    console.log("Palette Name:", paletteName[0])
    console.log("Amount:", getAmountName())

    window.$fxhashFeatures = {
        "Amount": getAmountName(),
        "Pattern Used": patternUse(),
        "Palette Name": paletteName[0],
    }
}