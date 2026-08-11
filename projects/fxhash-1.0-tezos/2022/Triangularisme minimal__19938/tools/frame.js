//////FRAME
function myFrame(x,y,z,w,h,clr) {
    _seed = floor(fxrand() * 999999)
    randomSeed(_seed)
    noiseSeed(_seed)
    push()
    drawingContext.shadowColor = color(0, 0, 0);
    drawingContext.shadowBlur = 0;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    // drawingContext.filter = 'contrast(1.8) drop-shadow(0px -5px 3px ' + color(0, 50)+ ')';
    noFill();
    stroke(clr)
    strokeWeight(width / z);
    rect(x,y,w,h);
    pop()
}