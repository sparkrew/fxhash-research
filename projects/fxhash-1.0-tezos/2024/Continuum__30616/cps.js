
function cps(){
  var cor1, cor2, cor3, cor4, cor5, cor6, cor7, cor8, cor9, cor10, cor11
  var sat, sat1, sat2, sat3, sat4, sat5, sat6, sat7, sat8, sat9, sat10, sat11
  var bri, bri3, bri2, bri1, bri4, bri5, bri6, bri7, bri8, bri9, bri10, bri11
 var v1, v2, rdsat
 rdsat = int(random(2))
 if(rdsat == 0){sat8 = 0; bri11 = 0}else{sat8 = 120; bri11 = 8}
 v1 = random(320), v2 = 50

 if(v1 < 20){var v3 = 80; var v4 = 40}
 
      sat = random(80), bri = random(1, 6)
      cor1 = random(v1, v1+v2), sat1 = random(80), bri1 = random(4)
      cor2 = random(v1, v1+v2), sat2 = random(80), bri2 = random(1, 6)
      cor3 = random(v1, v1+v2), sat3 = random(80), bri3 = random(1, 6)
      cor4 = random(v1, v1+v2), sat4 = random(80), bri4 = random(1, 6)
      cor5 = random(v1, v1+v2), sat5 = random(80), bri5 = random(1, 6)
      cor6 = random(v1, v1+v2), sat6 = random(80), bri6 = random(1, 6)
      cor7 = random(v1, v1+v2), sat7 = random(80), bri7 = random(0,8)
      cor8 = random(v1, v1+v2), bri8 = random(10,10) // rodinha
      cor9 = random(v1, v1+v2), sat9 = random(80), bri9 = random(1, 6)
      cor10 = random(v1, v1+v2), sat10 = random(80), bri10 = random(1, 6)
      cor11 = random(v1, v1+v2), sat11 = random(80)

var sat = 70
var bri = 6
var rdx2 = random(width/5)
var somaH = random(-width/15, width/2)
var rd = int(random(3))
if(rd == 0){var x1 = 15, x2 = 30, x3 = 3, x4 = 10}else{var x1 = 15, x2 = 15, x3 = 3, x4 = 15}
var rdx = int(random(x3,x4))

push()
translate(-width/4, random(-width/1.62, -width/1.62))
var soma2 = width/20

for(var y = 0; y <int(random(x1,x2)); y++){
translate(0, soma2)
var soma1 = width/20
if(y >5){
for(var x = 0; x<rdx; x++){
push()
translate(soma1+rdx2, somaH)
if(rd==0){pincel03(cor1, random(sat1, sat1-30), random(bri1,bri1+2), random(500, 500), 400, random(-0.05, -0.02), random(0.02, 0.02))}
if(rd==1){pincel03(cor1, sat1, random(bri1,bri1+0.5), random(200, 500), 100, random(0.1, 0.5), random(0.1, 0.0))}
if(rd==2 ){
  rotate(1.5)
  pincel03(cor1, random(sat1, sat1-30), random(bri1,bri1+2), random(150, 150), 400, random(0.02, 0.02), random(0.02, 0.02))}

if(rd==2){
  rotate(-1.5)
  translate(-width/30, width/20)
  pincel03(cor1, random(sat1, sat1-30), random(bri1,bri1+2), random(150, 150), 400, random(0), random(0))}

pop()
soma1 += width/20
}}
}
soma2 += width/200

pop()

push() // MANCHA GRANDE COM LINHA
for(var i = 0; i<1; i++){
  translate(random(-width/10, width/10), random(height/3, -height/10))
  
var rdtam = random(1000,3000)
for(var x = 0; x < 1; x++){ 
push()
translate(random(width/3, width/7), random(height/1.7, height/1.7))

pincel03(cor2, sat2, random(bri2,bri2+0.5), random(3000, rdtam), random(3000,400), random(0.0, 0.0), random(0.0, 0.0))

for(var x = 0; x < 300; x++){ // baixo direita
  push()
//  rotate(random(-0.59, 0.59))
  translate(random(-width/5, width/15), random(height/5, -height/12))
  pincel01(cor2, sat2, random(bri2,bri2+0.5), 5)


  pop()
}
pop()
}
}
pop()

push()
translate(random(-width/5, width/5), random(height/10, -height/10))
var rd = random(width/3, width/9)
for(var x = 0; x < 200; x++){ // baixo direita
push()
//  rotate(random(-1.59, 1.59))
translate(random(rd, width/9), random(height/3.5, height/2))
pincel01(cor3, sat3, random(bri3,bri3+0.5), 5)
pop()
}
pop()

push()
rd= int(random(2)), rd2 = int(random(2))
if(rd2==0){var bri = 0;}else{var bri = 10}
if(rd==0){ var qtde = 10; var tam = height/13}else{var qtde = 200; var tam = height/6}
if(rd==1){ translate(random(-width/2, width/5), random(-height/3, height/3))}
if(rd==0){ translate(random(-width/4, width/5), random(-height/5, height/5))}
for(var x = 0; x < random(qtde, qtde+20); x++){ // MANCHA PRETA LADO DIREITO
push()
if(rd==0){ rotate(random(-1.59, 1.59))}
translate(random(width/3, width/3), random(tam, height/13))
pincel01(0, 0, random(bri, bri+0.5), 5)
pop()
}
pop()

push() // MANCHA GRANDE COM LINHA
for(var i = 0; i<1; i++){
  translate(random(-width/10, width/10), random(height/3, -height/10))
var rdtam = random(1000,3000)
for(var x = 0; x < 1; x++){ 
push()
translate(random(width/8, width/8), random(height/1.7, height/1.7))

pincel03(cor4, sat4, random(bri4,bri4+0.5), random(3000, rdtam), random(3000,400), random(0.0, 0.0), random(0.0, 0.0))

for(var x = 0; x < 200; x++){ // baixo direita
push()
translate(random(-width/8, width/8), random(-height/10, height/10))
// rotate(random(-1.59, 0.59))
pincel01(cor4, sat4, random(bri4,bri4+0.5), 5)
pop()
}
pop()
}
}
pop()

push() // MANCHAS PEQUENAS
for(var i = 0; i< 3; i++){
  var cor2 = random(140)
  var sat2 = random(30, 80)
  var bri2 = random(3, 8)
  var dist1 = random(width/4.2, width/2)
  var dist2 = random(height/5, height/4)
translate(random(-width/3, width/4), random(-height/2.5, height/3))
for(var x = 0; x<50; x++){
push()
 // rotate(random(-2.59, 2.59))

translate(random(width/4.2, dist1), random(height/5, dist2))

 pincel01(cor5, sat5, random(bri5,bri5+0.5), 5)

 //pincel03(40, random(50, 80), random(6,4), random(1700, 1050), 400, random(0.03, 0.03), random(0.03, 0.03))

pop()
}
}
pop()

push()
var tam = random(width/3, -width/7)
translate(random(-width/3, width/10), random(height/10, height/2))
for(var x = 0; x < 50; x++){ // baixo direita
push()
  rotate(random(-1.59, -1.59))
translate(random(width/3, tam), random(height/3, height/3))
pincel01(cor6, sat6, random(bri6,bri6+0.5), 5)
pop()
}
pop()


var soma = -width/10

var rot1, rot2
rot1 = -0.8, rot2 = 0.8
push()
for(var i = 0; i < 1; i++){

      var soma2 = random(-height/3, -height/1)
var cc= random(80)
var rd = int(random(5))
var dist = random(width/2)

if (i == 3){soma += width/20}

for(var x = 0; x<1; x++){
push()
translate(random(width/5, width/5.5), random(-height/4, height/2.5))
pincel04(cor7, sat7, random(bri7,bri7+0.5), random(1700, 2500), 1000)
pop()
}



var a, xw, yh, xw2, rd
xw2 = random(-width/70, -width/7) // BOLINHAS EM CIRCULO
rd = int(random(2))
push()
if(rd == 0){translate(random(-width/6, width/2.5), random(-height/5, height/2))}
for(var x = 0; x<10; x++){
xw = xw2
yh = height/13.6
a = atan2(xw, yh);
if(rd == 0){rotate(a*3)}

push()
if(rd == 0){
  translate(xw, yh)
  pincel03(cor8, sat8, random(bri8,bri8+0.5), random(200, 500), 100, random(0.1, 0.5), random(0.1, 0.0))
}else{
  translate(random(-width/5, width/2), random(-height/3, height/2))
  pincel03(cor8, sat8, random(bri8,bri8+0.5), random(700, 500), 50, random(0.1, 0.5), random(0.1, 0.0))
}

pop()
}
pop()

var a, xw, yh, cont = 0;
var fat = random(-0.3, 0.5) // BOLINHAS EM ESPIRAL
var satur = random(100)
var brilho = random(8)
push()
translate(random(-width/15, width/3), random(-height/10, height/5))
for(var x = 0; x<55; x++){
xw = -width/(50 - cont)
yh = height/(50 - cont)
a = atan2(xw, yh);
rotate(a*fat)

push()
translate(xw, yh)

pincel03(cor8, satur, brilho, random(200, 500), 100, random(0.1, 0.5), random(0.1, 0.0))
pop()
cont += 1
}
pop()


for(var x = 0; x<3; x++){ // HASTES
push()
translate(random(-width/6.2, width/2.2), height/1.3)
pincel03(cor9, sat9, random(bri9,bri9+0.5), random(7000, 700), 1400, random(0.0012, 0.001), random(0.0012, 0.001))
pincel03(cor9, sat9, random(bri9,bri9+0.5), random(500, 1000), 400, random(0.05, 0.05), random(0.9, 0.9))
//pincel03(random(10), random(150, 150), random(0), random(500, 500), 100, random(0.01, 0.01), random(0.1, 0.1))
pop()
}

for(var x = 0; x<1; x++){
push()
translate(random(width/1.2, -width/4.2), random(height/3, -height/3))
pincel03(cor10, sat10, random(bri10,bri10+0.5), random(1200, 1500), 40, random(0.1, 0.5), random(0.1, 0.0))
pop()
}

soma += height/20
}

for(var x = 0; x<int(random(1,3)); x++){
push()
translate(random(-width/7.2, width/7.2), height/5)

pincel03(cor11, sat11, random(bri11,bri11+0.5), random(7200, 7000), 400, random(0.018, 0.018), random(0.02, 0.02))
pop()
}
pop() 

      for(var x = 0; x < 200; x++){
        push()
        rotate(-1.55)
        translate(random(width/15, -width/0.5), random(-height/3, height/1.5))
        
        pincel1(cor4, 0, random(4,4), 50000)
        pop()
      }

      
}