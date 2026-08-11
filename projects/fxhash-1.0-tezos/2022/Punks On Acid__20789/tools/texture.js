///////////TEXTURE NOISE
function myTexture(w,h,den,fall,incX,incY) {
    let matiere = createGraphics(w,h)
    matiere.noiseDetail(den,fall)
    let yoff = 0;
    matiere.loadPixels()
    for (let y = 0; y < height*pD; y++) {
        let xoff = 0;
        for (let x = 0; x < width*pD; x++) {
            let index = (x + y * width*pD) * 4;
            let r = noise(xoff, yoff) * 255;
            let g = noise(xoff, yoff) * 255;
            let b = noise(xoff, yoff) * 255;
            matiere.pixels[index + 0] = r;
            matiere.pixels[index + 1] = g;
            matiere.pixels[index + 2] = b;
            matiere.pixels[index + 3] = 255;
            xoff += incX;
        }
        yoff += incY;
    }
    matiere.updatePixels();
    image(matiere,0,0,w*pD,h*pD)
}