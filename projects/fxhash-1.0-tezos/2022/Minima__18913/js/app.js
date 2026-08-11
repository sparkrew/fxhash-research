let effect;
let frame;

let palette = 0;
let goopy = false;
let nOff;
let timeMult = 0.001;
let minColors = 1;
let cols, rows;
let gradientType = 0; // 0 = linear || 1 = radial

let genFeatures = true;
let animationStartFrame = 20 * 60;

let referenceSize = 2000;

let setHash;

// custom random function with fxhash support, can randomize arrays, ranges, or just 0-1
function fxRandom(min, max) {
    if (typeof min == "object" && min.length > 0) {
        return min[floor(fxrand() * min.length)];
    }
    else if (min && max) {
        return fxrand() * (max - min) + min;
    }
    else if (min && !max) {
        return fxrand() * min;
    }
    else if (!min && !max) {
        return fxrand();
    }
}

// custom function to reset the hash or get a new one to refresh a generation
function newHash(custom) {
    fxhash = "oo" + Array(49).fill(0).map(_ => alphabet[(Math.random() * alphabet.length) | 0]).join('');
    if (custom) fxhash = custom;
    b58dec = str => [...str].reduce((p, c) => p * alphabet.length + alphabet.indexOf(c) | 0, 0)
    fxhashTrunc = fxhash.slice(2)
    regex = new RegExp(".{" + ((fxhashTrunc.length / 4) | 0) + "}", 'g')
    hashes = fxhashTrunc.match(regex).map(h => b58dec(h))
    sfc32 = (a, b, c, d) => {
        return () => {
            a |= 0; b |= 0; c |= 0; d |= 0
            var t = (a + b | 0) + d | 0
            d = d + 1 | 0
            a = b ^ b >>> 9
            b = c + (c << 3) | 0
            c = c << 21 | c >>> 11
            c = c + t | 0
            return (t >>> 0) / 4294967296
        }
    }
    fxrand = sfc32(...hashes)
}

function preload() {
    // loading the two shader files we will apply to the canvas
    effect = loadShader('./js/effect.vert', './js/effect.frag');
    gen();
}

function setup() {
    // getting canvas size, and setting a constant one if we are in the preview engine.
    let w = windowWidth;
    let h = windowHeight;
    if (isFxpreview) {
        w = 2000;
        h = 2000;
    }

    // setting up canvas and hidden canvas for shader
    createCanvas(w, h, WEBGL);
    frame = createGraphics(w, h);

    // prepare colors from color schemes (comment out when you don't use colors.js!!)
    getColorValues();

    setHash = fxhash;

    if (isFxpreview) setTimeout(() => { fxpreview(); }, 200)

    document.getElementsByClassName("loadOverlay")[0].classList.add("loaded");
    // set display:none to the element after the animation to prevent the user from not being able to access the other UI elements
    setTimeout(() => { document.getElementsByClassName("loadOverlay")[0].style.display = "none"; animationStartFrame = frameCount; }, 4500);
}

function gen() {
    palette = floor(fxRandom(colors.length));

    // set a noise seed according to the fxhash
    noiseSeed(floor(fxRandom(1000)));

    // setting variables / features

    let underlined = false;
    let uniformRows = fxRandom() <= .5;
    let uniformGradient = fxRandom() <= .5;
    // filled = false;

    gradientType = fxRandom([0, 1]);

    minColors = ceil(fxRandom([colors[palette].hex.length, (colors[palette].hex.length > 4 ? colors[palette].hex.length / 2 : colors[palette].hex.length)]));

    cols = fxRandom([2, 3]);
    if (fxRandom() <= .5) cols = 1;
    if (fxRandom() <= .1 && uniformGradient) cols = 8;
    rows = cols * 2;

    let filled = fxRandom() <= .75;
    if (!filled && cols == 1) filled = true;
    let noShapes = fxRandom() <= .5 && cols > 5;
    goopy = fxRandom() <= .15 && filled && cols == 1;
    let circleShape = (cols == 1 && rows == 2 && fxRandom() <= .5);

    let unfilledAmnt = fxRandom([12, (cols == 1 ? 20 : 12)]);
    let filledMin = fxRandom([1, 2]);
    let filledMax = fxRandom([2, 3, 4, 5]);
    if (circleShape && fxRandom() <= .5) {
        filledMin = fxRandom([2, 3]);
        filledMax = fxRandom([3, 4, 5]);
    }
    let minSubAmnt = filled ? filledMin : unfilledAmnt;
    let maxSubAmnt = filled ? filledMax : unfilledAmnt;//fxRandom([1, 2, 3, 4]);

    let paddingX = min(width, height) / 5;
    let paddingY = paddingX;
    if (width > height) paddingX += abs(width - height) / 2;
    else paddingY += abs(height - width) / 2;
    let gapX = 0;//width / 20;
    let gapY = 0;//width / 20;

    let thickness = min(width, height) / unfilledAmnt / cols / 20;
    let gaps = [5, 3, 2, 1];
    gaps.forEach((v, i) => { gaps[i] *= thickness; })

    let w = (width - paddingX * 2) / cols;
    let h = (height - paddingY * 2) / rows;

    let prevAmnt = minSubAmnt;
    let prevOff = 0;

    nOff = 0;

    let bgIndex = floor(fxRandom(colors[palette].bgColors.length));

    // drawing the piece
    if (genFeatures) {// for when calling it for the first time in preload to generate features

        // for the little color changing secret feature
        let colorsElement = document.getElementsByClassName("colors")[0];
        for (let i = 0; i < colors[palette].hex.length; i++) {
            colorsElement.innerHTML += `
            <label for="color`+ (i + 1) + `">Color ` + (i + 1) + `:</label>
            <input type="color" name="color`+ (i + 1) + `" id="color` + (i + 1) + `" value="` + colors[palette].hex[i] + `" onchange="changedColor(` + i + `)"></input>
            `
        }

        // on palette 5 (mondrian) the black / white needs to be removed when the background matches it
        if (palette == 5 && colors[palette].bgColors[bgIndex] == "#1d2024") colors[palette].hex.splice(colors[palette].hex.indexOf("#000000"), 1);
        if (palette == 5 && colors[palette].bgColors[bgIndex] == "#FEEDDC") colors[palette].hex.splice(colors[palette].hex.indexOf("#ffffff"), 1);

        genFeatures = false;

        let bgColorNames = ["Dark", "Light"];
        let bgColorValues = ["#1d2024", "#FEEDDC"];
        let bgColorName = bgColorNames[bgColorValues.indexOf(colors[palette].bgColors[bgIndex])];

        window.$fxhashFeatures = {
            "Palette": colors[palette].name,
            "Background": bgColorName,
            "Columns": cols,
            "Filled": filled,
            "Maximum Stack": maxSubAmnt,
            "Uniform Gradient": uniformGradient,
            "Gooey": goopy,
        }

        return;
    }

    frame.blendMode(BLEND);
    frame.background(colors[palette].bgColors[bgIndex]);

    let possibleColors = ["#1d2024", "#FEEDDC"];
    let textColor = possibleColors.find(v => v != colors[palette].bgColors[bgIndex]);
    document.documentElement.style.setProperty('--text-color', textColor);
    document.documentElement.style.setProperty('--bg-color', colors[palette].bgColors[bgIndex]);

    let bgRgb = hexToRgb(colors[palette].bgColors[bgIndex]);
    ((bgRgb[0] + bgRgb[1] + bgRgb[2]) / 3 < 50) ? frame.blendMode(SCREEN) : frame.blendMode(MULTIPLY);
    frame.strokeWeight(thickness);

    let h1Element = document.querySelector(".description h1");
    let colorArray = colors[palette].hex.slice();
    colorArray = colorArray.sort(() => 0.5 - fxRandom());
    h1Element.style.setProperty("--gradient", "linear-gradient(to right, " + colorArray.join(", ") + ")");
    // h1Element.style.setProperty('--background', colors[palette].hex.join(', '));

    for (let x = 0; x < cols; x++) {
        let off = fxRandom([0, PI]);
        if (uniformGradient) setGradient(!filled, x);
        for (let y = 0; y < rows; y++) {
            // let arr = [];
            // for (let i = 0; i < floor(fxRandom(1, 2)); i++) arr.push(fxRandom(gaps));
            // frame.drawingContext.setLineDash(arr);

            if (!uniformRows) off = fxRandom([0, PI]);
            if (circleShape) {
                if (y == 0) off = PI;
                if (y == 1) off = 0;
            }
            let xPos = w * x + w / 2 + paddingX;
            let yPos = h * y + h / 10 + paddingY + (off > 0 ? h : 0);
            let amnt = floor(fxRandom(minSubAmnt, maxSubAmnt));

            let arcMultMin = 1;//fxRandom([1, .5, 1.5]);
            let arcMultMax = 1;//fxRandom([1, .5, 1.5]);

            if (y == rows - 1 || x == cols - 1) { arcMultMin = 1; arcMultMax = 1 };

            if ((fxRandom() <= 1) || filled || y == 0) {
                if (!filled && !uniformGradient) setGradient(true, x + y * cols);
                for (let i = 0; i < amnt; i++) {
                    if (filled && !uniformGradient) setGradient(false, x + y * cols);
                    let subW = map(i, 0, amnt, w - gapX / 2, 0);
                    let subH = map(i, 0, amnt, h * 2 - gapY / 2, 0)
                    frame.arc(xPos, yPos, subW, subH, off * arcMultMin, (PI - off) * arcMultMax, (i == 0 && underlined) ? CHORD : OPEN);
                }
            } else {
                for (let i = 0; i < prevAmnt; i++) {
                    // if (filled) fxRandom() <= .9 ? setGradient() : frame.fill(0);
                    let subX = map(i, 0, prevAmnt, xPos - w / 2 + gapX / prevAmnt, xPos);
                    let subX2 = map(i + 1, 0, prevAmnt, xPos, xPos + w / 2 - gapX / prevAmnt);
                    let subY = h * y + h / 10 + paddingY;
                    frame.line(subX, subY + thickness, subX, subY + h - thickness);
                    frame.line(subX2, subY + thickness, subX2, subY + h - thickness);
                }
            }

            if (fxRandom() <= .3 && y < rows - 1 && !noShapes) {
                // frame.fill(0);
                frame.push();
                setGradient(false, x + y * cols);
                if (fxRandom() <= .5) frame.ellipse(xPos, yPos, w / 2);
                else frame.rect(xPos + fxRandom([-w / 2, 0]), yPos + fxRandom([(y > 0) ? -w / 2 : 0, 0]), w / 2, w / 2);
                frame.pop();
            }

            prevAmnt = amnt;
            prevOff = off;

            nOff += 5;
        }
    }

    setGradient(!filled, cols + rows);
    let r = min(width, height) / 25;
    frame.ellipse(width - paddingX + r * 2, height - paddingY, r - (!filled ? thickness * 2 : 0))
}

function draw() {
    newHash(setHash);
    gen();

    if (frameCount % 60 == 0) moveTitle();

    applyShader();
}

function setGradient(stroke = false, index = 0) {
    let amnt = floor(fxRandom(minColors, colors[palette].hex.length));
    let animated = fxRandom() <= 1;
    let noiseTimeMult = animated ? 1 : 0;

    let points = [];
    let clrs = [];

    for (let i = 0; i < amnt; i++) {
        let pickedP;
        let canAdd = false;
        while (!canAdd) {
            canAdd = true;
            pickedP = 1 / amnt * i;
            // for (const p of points) if (abs(pickedP - p) < 1 / colors[palette].hex.length) { canAdd = false; break };
        }
        points.push(pickedP);
        let pickedClr = fxRandom(colors[palette].hex);
        while (clrs.includes(pickedClr)) pickedClr = fxRandom(colors[palette].hex);
        let opacity = floor(constrain(map(frameCount, animationStartFrame + index * 10, animationStartFrame + 60 * 3 + index * 10, 0, 255), 0, 255));
        let hex = opacity.toString(16);
        hex = hex.length == 1 ? '0' + hex : hex;
        if (isFxpreview) hex = 'ff';

        // console.log(opacity, hex);

        let finalClr = pickedClr + hex;
        clrs.push(finalClr);
    }

    let ctx = frame.drawingContext;
    let gradient;

    let noiseX = nOff;
    let noiseY = sin(frameCount * timeMult * noiseTimeMult);

    let range = min(width, height);
    let offset = createVector((width > height ? abs(width - height) / 2 : 0), (height > width ? abs(height - width) / 2 : 0));

    if (gradientType == 0) {
        let pos1 = createVector(noise(noiseX, noiseY) * range, noise(noiseX, noiseY, 100) * range / 2);
        let pos2 = createVector(noise(noiseX, noiseY, 200) * range, noise(noiseX, noiseY, 300) * range / 2 + range / 2);
        pos1.add(offset);
        pos2.add(offset);
        gradient = ctx.createLinearGradient(pos1.x, pos1.y, pos2.x, pos2.y)
    } else {
        let pos = createVector(noise(nOff, frameCount * timeMult * 0) * range, noise(nOff, frameCount * timeMult * 0, 100) * range);
        pos.add(offset);
        gradient = ctx.createRadialGradient(pos.x, pos.y, noise(noiseX, noiseY, 200) * range / 2, pos.x, pos.y, noise(noiseX, noiseY, 200) * range / 2 + range / 2);
    }

    // Add three color stops
    for (let i = 0; i < points.length; i++) gradient.addColorStop(points[i], clrs[i]);

    if (!stroke) {
        frame.fill(0);
        ctx.fillStyle = gradient;
        frame.noStroke();
    } else {
        frame.stroke(0);
        ctx.strokeStyle = gradient;
        frame.noFill();
    }
}

function keyTyped() {
    // save image on spacebar
    if (key == " ") {
        save(fxhash + ".jpg");
    }
    if (key == "]") {
        document.querySelector(".colors").classList.toggle("hidden");

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    frame.resizeCanvas(windowWidth, windowHeight);
}

function applyShader() {
    // setting uniforms and applying shader to frame canvas, then displaying the "shadered" frame canvas onto the visible canvas
    effect.setUniform("tex0", frame);
    effect.setUniform("u_time", frameCount * 0.01);
    effect.setUniform("colors", [colors[palette].rgb[0], colors[palette].rgb[1], colors[palette].rgb[2]]);
    effect.setUniform("goopy", goopy);
    effect.setUniform("noiseMult", min(width, height) / referenceSize);
    shader(effect);
    rect(-width / 2, -height / 2, width, height);
}

function moveTitle() {
    let title = document.getElementsByTagName("title")[0];
    let titleText = title.innerHTML;
    title.innerHTML = titleText.substring(titleText.length - 1) + titleText.substring(0, titleText.length - 1);
}

function openDescription() {
    if (document.getElementsByClassName("description")[0].classList.contains("canClose")) return;
    document.getElementsByClassName("description")[0].classList.add("show");
    document.getElementsByClassName("closeOverlay")[0].classList.add("show");
    setTimeout(() => { document.getElementsByClassName("description")[0].classList.add("canClose"); }, 100)
}

function closeDescription(closeBox = false) {
    if (closeBox && !document.getElementsByClassName("description")[0].classList.contains("canClose")) return;

    document.getElementsByClassName("description")[0].classList.remove("show");
    document.getElementsByClassName("closeOverlay")[0].classList.remove("show");
    setTimeout(() => { document.getElementsByClassName("description")[0].classList.remove("canClose"); }, 100)
}

function changedColor(index) {
    let newColor = document.getElementById("color" + (index + 1)).value;
    colors[palette].hex[index] = newColor;
}

function exportImage(resolutionX, resolutionY, svg = false) {
    if (!resolutionX) resolutionX = 2000;
    if (!resolutionY) resolutionY = resolutionX;

    resizeCanvas(resolutionX, resolutionY);
    frame.resizeCanvas(resolutionX, resolutionY);

    if (svg) {
        frame = createGraphics(resolutionX, resolutionY, SVG);
    }

    newHash(setHash);
    gen();

    if (!svg) applyShader();

    !svg ? save(fxhash) : frame.save(fxhash + ".svg");

    if (svg) frame = createGraphics(resolutionX, resolutionY);

    windowResized();
}