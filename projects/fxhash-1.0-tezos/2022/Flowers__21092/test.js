var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
  }

  function randomFromList(items){
    return items[Math.floor(fxrand()*items.length)];
    }

const flor = fxrand()
const colors1 = ["#61764B"]
const colors2 = ["#ddbea9"]
const colors3 = ["#b7b7a4"] 
const colors4 = ["#797d62"]
const colors5 = ["#b1be9d"]
const colors6 = ["#34a0a4"]
const colors7 = ["#bc4749"] 
const colors8 = [ "#84a59d"] 
const colors24 = ["#01497c"]
const colors25 = ["#6f1d1b"]
const colors26 = ["#936639"] 
const colors27 = ["#9f6560"]
const colors28 = ["#987284"]//rojo
const colors29 = ["#73648a"]//rosa
const colors30 = ["#a1cca5"]
const colors31 = ["#8fb996"]
const colors32 = ["#709775"] 
const colors33 = ["#415d43"]
const colors34 = ["#ba3b46"]//rojo
const colors35 = ["#a11d33"]//rosa
const colors9 = ["#E97777"] //violeta
const colors10 = ["#FF9F9F"] //rosa
const colors11= ["#FF8DC7"] //azul
const colors12 = ["#BCE29E"]
const colors13 = ["#E5EBB2"]
const colors14 = ["#B1AFFF"] //marron
const colors15 = ["#F2D7D9"]//gris
const colors16 = ["#AC7D88"]//casi negro
const colors17 = ["#BB6464"]//rosa
const colors18 = ["#C37B89"]
const colors19 = ["#DE8971"]
const colors20 = ["#BB8082"] //marron
const colors21 = ["#8F4068"]//gris
const colors22 = ["#D35D6E"]//casi negro
const colors23 = ["#F3D1F4"]//rosa

const colors36 = ['rgba(209, 172, 0,0.3)'] 
const colors37 = ['rgba(4, 42, 43,0.3)']
const colors38 = ['rgba(167, 201, 87,0.3)'] 
const colors39 = ['rgba(131, 56, 236,0.3)']
const colors40 = ['rgba(251, 86, 7,0.3)']//rojo
const colors41 = ['rgba(255, 10, 84,0.3)']//rosa

const coloresHojas = [ colors9,colors10,colors11,colors12,colors13,colors14,colors15,colors16,colors17,colors18,colors19,colors20,colors21,colors22,colors23]
const coloresMaceta = [ colors1,colors2,colors3,colors4,colors5,colors6,colors7,colors8, colors24,colors25,colors26,colors27,colors28,colors29,colors30,colors31,colors32,colors33,colors34,colors35]
const coloresFondo = [ colors36,colors37,colors38,colors39,colors40,colors41]

const colorHojas = randomFromList(coloresHojas)
const colorHojas2 = randomFromList(coloresHojas)
const colorMaceta = randomFromList(coloresMaceta)
const colorfondo = randomFromList(coloresFondo)

    
const divisor=random(2,20)
const estado=fxrand()

  if (estado<0.90){
      esta= 0.5
  }else if (estado<0.95){
      esta = 0.2
  }else{
      esta=0.8
  }

 
function test(centerX, inY, length, angle, depth, branchWidth) {
 
    var newLength, newAngle, newDepth, maxBranch = 2,
    endX, endY, maxAngle = 2 * Math.PI / 8, subBranches;
    
    ctx.beginPath();
    if(depth>=13){
      ctx.strokeStyle = 'rgba(0,0,0,0.0)'
    }else{
      ctx.strokeStyle ="#000"
    }
    ctx.moveTo(centerX, inY);
    endX = centerX + length * Math.cos(angle);
    endY = inY + length * Math.sin(angle);
    ctx.lineCap = 'round';
    ctx.lineWidth = branchWidth;
    ctx.lineTo(endX, endY);
    if (depth <= 1) {

      if(flor<0.14){

        //     // //flor estrella
      ctx.beginPath()
      ctx.ellipse(endX,endY,2,20, Math.PI / 2, 0, 2*Math.PI)
      ctx.ellipse(endX,endY,20,3, Math.PI / 2, 0, 2*Math.PI)
      ctx.ellipse(endX,endY,20,2, Math.PI / 3, 0, 2*Math.PI)
      ctx.ellipse(endX,endY,20,2, Math.PI / 4, 0, 2*Math.PI)
      ctx.fillStyle = colorHojas
      ctx.fill()
      ctx.stroke()
      ctx.closePath()
    }else if(flor<0.28){
        //flor ellipse camfiar alto x ancho 
        ctx.beginPath()
        ctx.ellipse(endX,endY,6,10, Math.PI / 2, 0, 2*Math.PI)
        ctx.fillStyle = colorHojas
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }else if(flor<0.42){
       //flor ellipse camfiar alto x ancho 
       ctx.beginPath()
       ctx.ellipse(endX,endY,10,6, Math.PI / 2, 0, 2*Math.PI)
       ctx.fillStyle = colorHojas
       ctx.fill()
       ctx.stroke()
       ctx.closePath()
    }else if (flor<0.56){
      ctx.beginPath()
      ctx.arc(endX,endY,15,0,Math.PI/2)
      ctx.fillStyle = colorHojas
      ctx.fill()
      // ctx.stroke()
      //  ctx.closePath()

      // ctx.beginPath()
      ctx.arc(endX,endY,8,0,Math.PI/2)
      ctx.fillStyle = colorHojas2
      // ctx.fill()
      // ctx.stroke()
      //  ctx.closePath()

    }else if(flor<0.70){
      // //flor estrella
      ctx.beginPath()
      ctx.ellipse(endX,endY,2,20, Math.PI / 2, 0, 2*Math.PI)
      ctx.ellipse(endX,endY,20,3, Math.PI / 2, 0, 2*Math.PI)
      ctx.ellipse(endX,endY,20,2, Math.PI / 3, 0, 2*Math.PI)
      ctx.ellipse(endX,endY,20,2, Math.PI / 4, 0, 2*Math.PI)
      ctx.fillStyle = colorHojas
      ctx.fill()
      ctx.stroke()
      ctx.closePath()

    }else if (flor<0.84){
      // flor arbolito corregida
      for(x=0;x<6;x++){
        ctx.beginPath()
        ctx.ellipse(endX,endY-3*x,2,20-x, Math.PI / 2, 0, 2*Math.PI)

        ctx.fillStyle = colorHojas
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
      }
    }else{
        for(x=0;x<30;x++){
        ctx.beginPath()
        ctx.ellipse(endX-1-fxrand(),endY+3*x,4,5, Math.PI / 2, 0, 2*Math.PI)
        ctx.fillStyle = colorHojas
        ctx.strokeStyle ="#184e77"
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
}
    }






    }
    ctx.stroke();
     


    newDepth = depth - 1;

  if(!newDepth) {
    return;
  }
  subBranches = (fxrand() * (maxBranch -0.3)) +0.3;
  branchWidth *= 0.8;

  for (var i = 0; i < subBranches; i++) {

    
    newAngle = angle + fxrand()  * maxAngle - maxAngle * esta;
    // if (depth >= 3) {
   
    //   newAngle = angle + fxrand() * maxAngle - maxAngle * 0.5;
    // }else{
    // newAngle = angulo[randomFromList(lugar)] +fxrand()*  maxAngle - maxAngle * 0.8;
    newLength = length * (0.7 + fxrand() * 0.3);
    test(endX, endY, newLength, newAngle, newDepth, branchWidth);
}
}

var rectData = ctx.getImageData(0, 0, 1000, 1000);

for (var y=0; y<1000; y++) {
  for (var x=0; x<1000; x++) {
    const offset = 4*(y*1000+x);// 4* because each pixel is 4 bytes
    rectData.data[offset] = Math.floor(fxrand() * 50);// red
    rectData.data[offset+1] = Math.floor(fxrand() * 100);// green
    rectData.data[offset+2] = Math.floor(fxrand() * 150);// blue
    rectData.data[offset+3] = 200;// alpha, fully opaque
  }
}
ctx.putImageData(rectData, 0, 0);

fondo2()
base=fxrand() 

if(base<0.1){
  flowerBase1()
}
else if (base<0.2){
  flowerBase2()

}else if(base<0.3){
  flowerBase3()

}else if(base<0.55){
  flowerBase4()
}else if(base<0.65){
  flowerBase5()
  
}else if(base<0.85){
  flowerBase6()
}else if(base<0.95){
  flowerBase7()
}else{
  flowerBase8()
}


test(500,843,80, -Math.PI / 2  ,13,5)
fxpreview()


function fondo2() {
  fon=fxrand()
  a= random(250,850)
  b= random(380,750)
  if(fon<0.5){
  ctx.beginPath()
  ctx.moveTo(0,a)
  ctx.lineTo(1000,b)
  ctx.lineTo(1000,1000)
  ctx.lineTo(0,1000)
  ctx.lineTo(0,a)
  ctx.fillStyle =  colorfondo
  ctx.fill()
  ctx.closePath()
  }else{
    ctx.beginPath()
    ctx.moveTo(0,a)
    ctx.lineTo(1000,b)
    ctx.lineTo(1000,0)
    ctx.lineTo(0,0)
    ctx.lineTo(0,a)
    ctx.fillStyle =  colorfondo
    ctx.fill()
    ctx.closePath()

  }
}



//cilindro
function flowerBase1(){
  ancho=random(30,60)

  for (x=40;x>0;x--){
    
    
    ctx.beginPath()

  
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }

    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=4
      
    }
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'

    }

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, ancho, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}
//piramide inversa
function flowerBase2(){
  base =random(55,90)
  for (x=40;x>0;x--){
    
    ctx.beginPath()

    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=4
      
    }
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'

    }
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }

    

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, base-x, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}
//piramide 
function flowerBase3(){
  base=random(10,50)
  for (x=40;x>0;x--){
    
    ctx.beginPath()

  
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'

    }
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }

    

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10,base+x, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}
//tipo barril
function flowerBase4(){
  prueba = random(60,85)
  for (x=40;x>0;x--){


    ctx.beginPath()

    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=4
      
    }
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'

    }
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }

    if(x>20){
      a = prueba-x 
    }else{
      a = prueba-20+(x-20)
      // a=a
    }

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, a, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}
//vasija
function flowerBase5(){
  prueba = random(60,85)
  for (x=40;x>0;x--){
    ctx.beginPath()

    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=4
      
    }
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'
    }
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }

    if(x>15){
      a = prueba-x 
    }else{
      a = prueba-15+(x-15)
      // a=a
    }

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, a, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}
//cambiante
function flowerBase6(){
  bocaFlorero=random(10,40)
 
  for (x=40;x>0;x--){
    ctx.beginPath()

    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=4
      
    }
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'

    }
    
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }  
   
    if(x>bocaFlorero){
      a = bocaFlorero+x 
    }else{
      a = bocaFlorero-(x-bocaFlorero)
      // a=a
    }

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, a, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}

//maceta comun
function flowerBase7(){
  
  prueba = random(60,100)
  
  for (x=40;x>0;x--){
    ctx.beginPath()

    
    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=8
      
    }


    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }


    

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, prueba-x, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.stroke()
    ctx.fill()
    
  }
  ctx.closePath()
}

function flowerBase8(){

  for (x=40;x>0;x--){
    ancho=random(30,60)
    
    ctx.beginPath()

  
    if(x % divisor  == 0 ){
      ctx.fillStyle="#000"
    }else{
      ctx.fillStyle= colorMaceta
    }

    if(x===1){
      ctx.strokeStyle="#000"
      ctx.lineWidth=4
      
    }
    if(x>1){
      ctx.strokeStyle = 'rgba(0,0,0,0.1)'

    }

    // ctx.arc(500,750+x*10,50+x*2,0,Math.PI)
    ctx.ellipse(500,750+x*5, 10, ancho, Math.PI / 2, 0, 2*Math.PI);
    // ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
    ctx.fill()
    ctx.stroke()
    
  }
  ctx.closePath()
}






