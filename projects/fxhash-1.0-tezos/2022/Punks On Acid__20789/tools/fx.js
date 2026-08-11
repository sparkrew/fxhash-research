function rdmBlend() {
    if (fxrand() < 0.5) {
        blendMode(random([OVERLAY, SCREEN, SOFT_LIGHT, HARD_LIGHT, LIGHTEST]))
    }
    else {
        blendMode(BLEND)
    }
}

function rdmGradient() {
    push()
    if (grd.n < 0.5) {
        radialGradientFill(width / 2, height / 2, height * 2, width / 2, height / 2, 0, palette.bgClr[1], palette.bgClr[0])
        rect(width/2,height/2, width, height)
    }
    else {
        linearGradientFill(width / 2, 0, width / 2, height, palette.bgClr[0], palette.bgClr[1])
        rect(width/2,height/2, width, height)
    }
    pop()
}


////////////////////////////TEXTURE BLENDING
function blendTexture(dens, fall, forceX, forceY) {
    push()
    tint(255,0,0)
    blendMode(ADD)
    myTexture(width, height, dens, fall, forceX, forceY)
    pop()
}
////////////////////////SHADOW
function dropShad(offX,offY,blur,clr,alpha) {
    drawingContext.shadowOffsetX = offX;
    drawingContext.shadowOffsetY = offY;
    drawingContext.shadowBlur = blur;
    drawingContext.shadowColor = color(clr, alpha);
}