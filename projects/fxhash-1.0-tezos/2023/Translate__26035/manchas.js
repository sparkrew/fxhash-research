var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
  }

  function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

 

  function obtenerCoordenadasSemicirculo(radio, rotacion) {
    const coordenadaX = radio * Math.cos(rotacion+ Math.PI/2);
    const coordenadaY = radio * Math.sin(rotacion+ Math.PI/2);
    
    return { x: coordenadaX, y: coordenadaY };
  }
  
  conr=[ "#fd9343", "#fc7f43", "#fb6a43", "#fa5644", "#f94144"]
  

width=1000
height=1200
ctx.lineWidth=1

const colores1 = ["rgba(255, 190, 11,0.15)", "rgba(251, 86, 7,0.15)" , "rgba(255, 0, 110,0.15)" , "rgba(131, 56, 236,0.15)", "rgba(58, 134, 255,0.15)"]

const colores2 =["rgba(247,37,133,0.15)","rgba(114,9,183,0.15)","rgba(58,12,163,0.15)", "rgba(67,97,238,0.15)", "rgba(76,201,240,0.15)"]


  const colores3 =["rgba(38,70,83,0.15)", "rgba(42,157,143,0.15)", "rgba(233,196,106,0.15)", "rgba(244,162,97,0.15)", "rgba(231,111,81,0.15)"]


  const colores4 =["rgba(0,48,73,0.15)", "rgba(214,40,40,0.15)", "rgba(247,127,0,0.15)", "rgba(252,191,73,0.15)", "rgba(234,226,183,0.15)"]


  const colores5 =["rgba(255,153,200,0.15)", "rgba(252,246,189,0.15)", "rgba(208,244,222,0.15)", "rgba(169,222,249,0.15)", "rgba(228,193,249,0.15)"]


  const colores6 =["rgba(155,93,229,0.15)", "rgba(241,91,181,0.15)", "rgba(254,228,64,0.15)", "rgba(0,187,249,0.15)", "rgba(0,245,212,0.15)"]


  const colores7 =["rgba(130,106,237,0.15)", "rgba(200,121,255,0.15)", "rgba(255,183,255,0.15)", "rgba(59,244,251,0.15)", "rgba(202,255,138,0.15)"]


  const colores8 =["rgba(255,89,94,0.15)","rgba(255,202,58,0.15)", "rgba(138,201,38,0.15)", "rgba(25,130,196,0.15)", "rgba(106,76,147,0.15)"]


  const colores9 =["rgba(247,209,205,0.15)","rgba(232,194,202,0.15)", "rgba(209,179,196,0.15)", "rgba(179,146,172,0.15)", "rgba(115,93,120,0.15)"]


  const colores10 =["rgba(214,214,214,0.15)", "rgba(255,238,50,0.15)", "rgba(255,209,0,0.15)", "rgba(32,32,32,0.15)", "rgba(51,53,51,0.15)"]


  const colores11 =["rgba(188,231,132,0.15)", "rgba(93,211,158,0.15)", "rgba(52,138,167,0.15)", "rgba(82,81,116,0.15)", "rgba(81,59,86,0.15)"]

  const coloress = [colores1,colores10,colores11,colores2,colores3,colores4,colores5,colores6,colores7,colores8,colores9]
  const ele =random(0,10) 
//pajarito
for(let x=1;x<13000;x++){
  a=random(0,width)
  b=random(0,height)
  c=random(0,width)
  d=random(0,height)

  e=random(0,width)
  f=random(0,height)
  g=random(0,width)
  h=random(0,height)

  i=random(0,width)
  j=random(0,height)
  k=random(0,width)
  l=random(0,height)
 
  ctx.beginPath()
  ctx.strokeStyle="#e5e5e5"
  ctx.arc(a,b,1,0,Math.PI *2 )
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([1, 0.52]);
  ctx.moveTo(c,d)
  //ctx.bezierCurveTo(e, f, g, h, c+random(-52,52),d)
  ctx.bezierCurveTo(c+random(-150,150), d+random(-150,150), c+random(-150,150), d+random(-150,150), c+random(-52,52),d)
  //ctx.lineTo(c+random(-52,52),d)
  ctx.strokeStyle="#e5e5e5"
  ctx.stroke()
  ctx.closePath()

  ctx.beginPath()
  ctx.setLineDash([1, 0.52]);
  ctx.moveTo(a,b)
  //ctx.bezierCurveTo(i, j, k, l,a,b+random(-52,52))
  ctx.bezierCurveTo(a+random(-150,150), b+random(-150,150), a+random(-150,150), b+random(-150,150),a,b+random(-52,52))
  //ctx.lineTo(a,b+random(-52,52))
  ctx.strokeStyle="#e5e5e5"
  ctx.stroke()
  ctx.closePath()
}

cant=random(10,100)
anchoTotal=50+cant*10
inicio=height-((height-anchoTotal)/2)
console.log(a);

for(x=0;x<cant;x++){
colo=random(0,4)
ctx.beginPath()
ctx.fillStyle=coloress[ele][colo]
ctx.moveTo(500,inicio-x*10)
ctx.lineTo(100,inicio-25-x*10)
ctx.lineTo(500,inicio-50-x*10)
ctx.lineTo(900,inicio-25-x*10)
ctx.fill()
ctx.closePath()
}



fxpreview()