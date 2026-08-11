/** Copyright Richard Vigniel (RVig) 2022
 *
 * Generated image is licenced under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0/)
 *
 * p5.js library is licensed under LGPL, see p5js-license.txt
 *
 *
 * Combination of two rectangles on a checkerboard background, playing delicately with line textures and transparencies.
 **/

let palette = [[128, 128, 128], [240, 20, 100], [240, 20, 100], [250, 230, 50], [185, 100, 250], [185, 100, 250], [250, 150, 50], [250, 150, 50], [50, 100, 230], [50, 100, 230], [130, 173, 0]]
let paletteNames = ["Silver", "Coral", "Coral", "Yellow", "Purple", "Purple", "Orange", "Orange", "Blue", "Blue", "Pistachio"]
let c1, c2, pc, ca, r, bg, texture, ct, nl, sw = [1., 1., 1.], rot = [0, 0], pass = 0, srot;
const nbpass = 100;

function setup() {
    fxinit();

    let cnv = createCanvas(100, 100);
    cnv.id("rvigcanvas")
    windowResized()
    noSmooth();
    noFill();
    c1 = Math.trunc(fxrand() * palette.length)
    c2 = Math.trunc(fxrand() * palette.length)

    pc = Math.floor(fxrand() * 3) + 2
    r = [Math.floor(fxrand() * 4) + 2, Math.floor(fxrand() * 4) + 2],
        texture = [Math.trunc(fxrand() * 3), Math.trunc(fxrand() * 3)]
    ct = Math.trunc(fxrand() * 4)
    nl = 1800 / nbpass;
    sw[0] = Math.floor(fxrand() * 7) * 0.1 + 0.1;
    sw[1] = Math.floor(fxrand() * 7) * 0.1 + 0.1;
    rot[0] = Math.floor(fxrand() * 6) * TWO_PI / 12.0;
    rot[1] = Math.floor(fxrand() * 6) * TWO_PI / 12.0;
    ns = Math.floor(fxrand() * 5) * 2 + 1;
    console.log(rot)

    window.$fxhashFeatures = {
        "Texture A": ["Silk", "Soft", "Rough"][texture[0]],
        "Texture B": ["Silk", "Soft", "Rough"][texture[1]],
        "Colour A": paletteNames[c1],
        "Colour B": paletteNames[c2],
        "Width A": round(sw[0] * 10),
        "Width B": round(sw[1] * 10),
        "Rotation A": round(rot[0] * 360 / TWO_PI),
        "Rotation B": round(rot[1] * 360 / TWO_PI),
        "Background": ns + "x" + ns,
    }

    console.log(window.$fxhashFeatures)
    clear();
    background(255, 255);
    fill(255,255);
    noStroke();
    rect(0,0,width,height);
    blendMode(MULTIPLY)
    strokeWeight(2 * width / nl / nbpass);

    srot = new Array(ns + 1)
    for (x = 0; x <= ns; x++) {
        srot[x] = new Array(ns + 1);
        for (y = 0; y <= ns; y++) {
            srot[x][y] = floor(fxrand() * 2.0) * TWO_PI / 4.0;
        }
    }

}

function draw() {
    const colors = [palette[c1], palette[c2]];
    const rr = width;
    const dp0 = (pass % nbpass) / nbpass;
    const dp1 = (pass % nbpass + 1) / nbpass;
    push()
    translate(width / 2, height / 2);
    for (let i = colors.length - 1; i >= 0; i--) {
        const drand = [0.002, 0.01, 0.02][texture[i]];
        color = colors[i % colors.length];
        stroke(color[0], color[1], color[2], 50);
        push();
        rotate(rot[i]);
        const swy = sw[i];
        const swx = 0.7 - i * 0.2;
        let k = rr * swx;
        const dt = 1.0 / (3 * nl * (0.7 - i * 0.2)) / nbpass
        for (let t = -0.5 + dp0; t < -0.5 + dp1; t += dt) {
            const dxx1 = (gaussianRand() * drand);
            const dxx2 = (gaussianRand() * drand);
            const dxx3 = (gaussianRand() * drand);
            const dxx4 = (gaussianRand() * drand);
            const dxx5 = (gaussianRand() * drand);
            const dxx6 = (gaussianRand() * drand);
            beginShape();
            curveVertex((t + dxx1) * k, (-0.83 * swy + dxx6) * rr);
            curveVertex((t + dxx2) * k, (-0.5 * swy + dxx5) * rr);
            curveVertex((t + dxx3) * k, (-0.17 * swy + dxx4) * rr);
            curveVertex((t + dxx4) * k, (0.17 * swy + dxx3) * rr);
            curveVertex((t + dxx5) * k, (0.5 * swy + dxx2) * rr);
            curveVertex((t + dxx6) * k, (0.83 * swy + dxx1) * rr);
            endShape();
        }
        pop();
    }
    pop()
    const ds = width / ns;
    const dt = ns / nl / nbpass;
    const kr = rr / ns;

    for (x = 0; x <= ns; x++) {
        push()
        for (y = 0; y <= ns; y++) {
            const i = (x ^ y) & 1; // checker
            const color = colors[i];
            stroke(color[0], color[1], color[2], 15);
            const drand = [0.002, 0.01, 0.02][texture[i]] * kr;
            push()
            rotate(srot[x][y]);

            for (let t = dp0; t < dp1; t += dt) {
                const dxx1 = (gaussianRand() * drand);
                const dxx2 = (gaussianRand() * drand);
                const dxx3 = (gaussianRand() * drand);
                const dxx4 = (gaussianRand() * drand);
                const dxx5 = (gaussianRand() * drand);
                const dxx6 = (gaussianRand() * drand);
                const g = 0.01;
                const tt = t * (1 - 2. * g);
                beginShape();
                let nx = (g + tt) * ds;
                curveVertex(nx + dxx1, -0.33 * ds + dxx6);
                curveVertex(nx + dxx2, g * ds + dxx5);
                curveVertex(nx + dxx3, 0.33 * ds + dxx4);
                curveVertex(nx + dxx4, 0.66 * ds + dxx3);
                curveVertex(nx + dxx5, (1 - g) * ds + dxx1);
                curveVertex(nx + dxx6, 1.33 * ds + dxx1);
                endShape();
            }
            pop()
            translate(0, ds);
        }
        pop()
        translate(ds, 0);
    }
    if (++pass == nbpass) {
        noLoop()
        fxpreview()
    }
}

function windowResized() {
    ratio = windowWidth / windowHeight
    resizeCanvas(windowWidth * (ratio > 1 ? 1.0 / ratio : 1), windowHeight * (ratio < 1 ? ratio : 1));
}

function fxinit() {
    fxrand = sfc32(...hashes)
}

// return -1,1
function gaussianRand() {
    return (fxrand() + fxrand() + fxrand() + fxrand()) / 2.0 - 1.0;
}

