function grainy(force) {
    _seed = floor(fxrand() * 999999)
    randomSeed(_seed)
    noiseSeed(_seed)
    loadPixels();
    let d = pixelDensity();
    let halfImage = 4 * (width * d) * (height * d);
    for (let i = 0; i < halfImage; i += 4) {
        grainAmount = random(-force, force);
        pixels[i] = pixels[i] + grainAmount;
        pixels[i + 1] = pixels[i + 1] + grainAmount;
        pixels[i + 2] = pixels[i + 2] + grainAmount;
        pixels[i + 3] = pixels[i + 3] + grainAmount
    }
    updatePixels();
}