let maxDim = 800

let width = Math.min(maxDim, window.innerWidth)
let height = Math.min(maxDim, window.innerHeight)
let cnv = createCanvas(width, height)
let c = cnv.getContext("2d")

document.body.appendChild(cnv)
c.fillStyle="white"
c.lineWidth = 1
c.strokeStyle="rgba(15,15,15,0.9)"

let bottleThicknessBottom = rndFloat(60,100)
let bottleThicknessTop = Math.max(20,bottleThicknessBottom * rndFloat(0.1,0.5))
let bottleHeight = rndFloat(100,200)
let curveThickness =( bottleThicknessBottom + bottleThicknessTop ) / 2 + rndFloat(10,50)
let neckHeight = rndFloat(10,50)
let nozzleHeight = rndFloat(10,20)
let nozzleWidth = rndFloat(10,20)

function createBottle() {
    let x = width / 2 
    let y = height * 0.8

    let path = new Path2D()
    path.moveTo(x,y)
    path.lineTo(x + bottleThicknessBottom / 2,y)
    path.quadraticCurveTo(x + bottleThicknessBottom/2 + 50, y - bottleHeight/2, x + bottleThicknessTop/2, y - bottleHeight)
    path.lineTo(x + bottleThicknessTop/2, y - bottleHeight - neckHeight)
    path.lineTo(x + bottleThicknessTop/2 + nozzleWidth / 2, y - bottleHeight - neckHeight)
    path.lineTo(x + bottleThicknessTop/2 + nozzleWidth / 2, y - bottleHeight - neckHeight - nozzleHeight)
    path.lineTo(x - bottleThicknessTop/2 - nozzleWidth / 2, y - bottleHeight - neckHeight - nozzleHeight)
    path.lineTo(x - bottleThicknessTop/2 - nozzleWidth / 2, y - bottleHeight - neckHeight )
    path.lineTo(x - bottleThicknessTop/2 , y - bottleHeight - neckHeight )
    path.lineTo(x - bottleThicknessTop/2 , y - bottleHeight )
    path.moveTo(x,y)
    path.lineTo(x - bottleThicknessBottom / 2 , y)
    path.quadraticCurveTo(x - bottleThicknessBottom/2 - 50, y - bottleHeight/2, x - bottleThicknessTop/2, y - bottleHeight)

    return path
}
// let path = createBottle()
// c.lineWidth = 0.5
// c.strokeStyle = "rgba(0,0,0,0.5)"
// for (let i = 0;i<rndInt(10,20);i++) {
//     c.translate(rndInt(-5,5),rndInt(-1,1))
//     c.stroke(path)
// }

c.save()
// c.clip(path)




// for (let i = 0;i<100;i++) {
//     c.beginPath()
//     c.moveTo(0,i * height / 100)
//     c.lineTo(width,height - (i * height / 100));
//     c.stroke()

// }
c.restore()
function render() {
    
}


render()

let x = width / 2
let y = height / 2
for (let i = 0;i<50;i++) {
    c.beginPath()
    c.moveTo(0,i * height / 50)
    c.lineTo(width, (i * height / 50));
    c.stroke()

}
function draw() {
    let rnd = rndInt(0,255)
    c.fillStyle = "rgba("+rnd + ","+rnd + "," + rnd + "," + 1+")"
    c.fillRect(rndFloat(0,width),rndFloat(0,height),rndFloat(5,50),height / 50)
    
}
c.filter = "blur(4px)"
for (let i = 0;i< 150 ;i++) {
    draw()
}

c.filter = "blur(0px)"
for (let i = 0;i<10;i++) {
    
    c.fillStyle = rndFloat(0,1)< 0.5 ? "black" : "white"
    let w = rndInt(50,200)
    let h = rndInt(50,200)
    let x = rndInt(0,width)
    let y = rndInt(0,height)
    // c.fillRect(x,y,w,h)
    drawRect(x,y,w,h)
    
}

c.filter = "blur(0px)"

function drawRect(x,y,w,h) {
    let amount = Math.sqrt(w*h) * 0.2
    c.save()
    c.beginPath()
    c.moveTo(x+w/2,y+h/2)
    c.arc(x + w/2,y+h/2,Math.min(w,h)/2,0,Math.PI*2)
    c.closePath()
    c.clip()

    c.clearRect(0,0,width,height)
    c.fillStyle = "rgba(0,0,0,"+rndFloat(0,1)+")"
    c.fillRect(0,0,width,height)
    c.beginPath()
    for (let i = 0;i< amount;i++) {
        c.moveTo(x + w / amount * i,y)
        c.lineTo(x+w / amount * i,y+ h )
    }
    c.stroke()
    c.closePath()
    c.restore()
} 