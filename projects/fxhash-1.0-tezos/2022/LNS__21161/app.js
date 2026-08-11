var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}



color= fxrand()

if(color<0.5){
    paleta=["#F8F9FA","#212529"]
}else{
    paleta=["#212529","#F8F9FA"]
}

ctx.beginPath()
ctx.fillStyle=paleta[1]
ctx.fillRect(0,0,1000,1000)
ctx.stroke()
ctx.closePath()

forma = fxrand()

if(forma<0.34){
    circle()
}else if(forma<0.68){
    rect()
}else{
    triangle()
}

lines()

function rect() {
    ctx.beginPath()
    ctx.fillStyle= paleta[0]
    // ctx.fillRect(250,250,250,250)
    ctx.roundRect(275,275,450,450, [10]);
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    // for(a=0;a<1500;a++){
    //     x=random (350,650)
    //     y=random (350,650)
    //     ctx.beginPath()
    //     ctx.strokeStyle ="#F8F7FA"
    //     ctx.moveTo(x,y)
    //     ctx.lineTo(x+1,y+1)
    //     ctx.stroke()
    // }
}

function lines(){
    a = random(0,250)
    b = random(0,250)
    c = random(760,1000)
    d = random(760,1000)
    a2 = random(0,1000)
    b2 = random(0,250)
    if(a2<500){
    c2 = random(a2+350,1000)
    }else{
        c2 = random(0,a2-350)
    }
    d2 = random(660,1000)
    ctx.beginPath()
    ctx.moveTo(a,b)
    ctx.lineTo(c,d)
    ctx.strokeStyle= paleta[1]
    ctx.lineWidth = 7
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.moveTo(a2,b2)
    ctx.lineTo(c2,d2)
    ctx.strokeStyle= paleta[1]
    ctx.lineWidth = 7
    ctx.stroke()
    ctx.closePath()
    
}

function circle(){
    ctx.beginPath()
    ctx.fillStyle= paleta[0]
    ctx.arc(500, 500,250, 0 , 2* Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()

}
hor=random(3,20)
ver=random(3,20)
for(x=0;x<hor;x++){
    linea = random(1,5)
    pa= random(0,900)
    pb=-500
    pa2= random(0,900)
    pb2=1500
    ctx.beginPath()
    ctx.lineWidth=linea
    ctx.moveTo(pa,pb)
    ctx.lineTo(pa2,pb2)
    ctx.stroke()
    ctx.closePath()
}

for(x=0;x<ver;x++){
    linea = random(1,5)
    pb= random(0,900)
    pa=-500
    pb2= random(0,900)
    pa2=1500
    ctx.beginPath()
    ctx.lineWidth=linea
    ctx.moveTo(pa,pb)
    ctx.lineTo(pa2,pb2)
    ctx.stroke()
    ctx.closePath()
}

function triangle(){
    ctx.beginPath()
    ctx.fillStyle= paleta[0]
    ctx.moveTo(250,725)
    ctx.lineTo(750,725)
    ctx.lineTo(500,250)
    ctx.fill()
}

fxpreview()