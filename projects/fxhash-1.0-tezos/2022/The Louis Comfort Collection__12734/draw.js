allDots = 0
function drawDot(p){
    drawDotXY(p.x,p.y)
}
function drawDotXY(x,y){
    allDots++
    // strokeWeight(random(1,2))
    point(x,y)
}