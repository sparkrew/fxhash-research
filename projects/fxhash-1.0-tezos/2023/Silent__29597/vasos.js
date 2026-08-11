
function vasoC(cor1, cor2, b1, b2){

push()
translate(0, height/2, 26);
fill(random(20, 90), random(50, 100), random(5, 7))
stroke(255)
//rotate(0.05)
strokeWeight(width/5000)
translate(0, width/1000);
var rdT = random(100, 300)
for (let t = 14; t < 24; t++){
  cylinder(t * width/300, width/20, t)
  translate(0, -width/rdT, 0);
}
for (let t = 24; t > 14; t--){
  cylinder(t * width/300, width/40, t)
  translate(0, -width/200, 0);
}
for (let t = 14; t < 24; t++){
  fill(40, 50, 3)
  cylinder(t * width/350, width/120, t)
  translate(0, -width/300, 0);
}

fill(0)
cylinder(23 * width/500, width/150)
translate(0, width/10, 0);
ramoFlores(width/25, 3, cor1, cor2, b1, b2)
ramoFlores(width/30, 3, cor1, cor2, b1, b2)
ramoFlores(width/40, 3, cor1, cor2, b1, b2)
ramoFlores(width/40, 3, cor1, cor2, b1, b2)



pop()


// sombra folhas
push()

for(var i =0; i<random(10, 15); i++){
  push()
  translate(random(width/15, width/6), height/random(2, 1.85), 10);
  ramoS(width/random(70, 50), 170, 7, 0.5)
  pop()
}

// SOMBRA vaso
  push()
  noStroke()
  rotateX(-0.21)

  translate(width/13, width/1.8, -width/50);
  fill(cbg, 60, 8, tt);
  cylinder(23 * width/300, width/550, )
  rotateX(0.21)
  translate(-width/13, 0, width/8.5);
  fill(0)
  cylinder(23 * width/550, width/750, )
  pop()
pop()
}

function vasoDF(len, cor1, cor2, sat, b1, b2){
  push()
  translate(width/2, height/2.6, 5);
  fill(40, random(40, 80), random(5, 7))
  fill(random(cor1, cor2), sat, random(b1, b2))

  stroke(255)

  strokeWeight(width/1500)
  translate(0, width/1000);
  var rd = int(random(1))
  if(rd==0){
    var a = 0;

}

  fill(0)
  noStroke()
  var c1 = random(10, 300);
  var c2 = random(200, 250);
  var rd = int(random(2))
  if(rd==0){var arg = 1}
  if(rd==1){var arg = 3}

  translate(0, width/20, 0);
  ramoF(len, arg, cor1, cor2, sat, b1, b2)
//  ramoF(width/25, arg, c1, c1)
  // ramoF(width/25, arg, c1, c1)
  // ramoF(width/20, arg, c1, c1)
  // ramoF(width/20, arg, c1, c1)
  pop()


}

function vasoDF2(len, cor1, cor2, sat, b1, b2){
  push()
  translate(width/2, height/2.6, 5);

    var rd = int(random(2))
    if(rd==0){var arg = 1}
    if(rd==1){var arg = 3}

    translate(0, width/20, 0);
    ramoF2(len, arg, cor1, cor2, sat, b1, b2)

    pop()
  }

function vasoEM(len, cf, cor1, cor2, sat, b1, b2){

  push()
  translate(-width/8, height/2.5);
  fill(40, 50, 5)
  stroke(255)
  rotate(0.05)
  noStroke()
  strokeWeight(width/5000)
  translate(0, width/1000);
  var cc = 5
  var rdT = random(70, 150)


   var rd = int(random(2))

  fill(2)
  noStroke()
  push()
  translate(width/35.3, -width/3.1);
  rotate(random(-2.6, -3.3))
  ramo3(len, cor1, cor2, sat, b1, b2, random(0.01, -0.06), cf) //30, 40, 150, 8, 11
  pop()

  pop()
}

function vasoEsq(cor1, cor2, b1, b2, arg){
  push()
  translate(0, height/2, 26);
  fill(random(30, 140), random(35, 60), random(5, 7.5))
  stroke(255)
  rotate(0.05)
  var x = random(100)
  strokeWeight(width/5000)
  translate(0, width/1000);
  for (let t = 14; t < 24; t++){
    cylinder(t * width/(300+x), width/40, t)
    translate(0, -width/200, 0);
  }
  for (let t = 24; t > 14; t--){
    cylinder(t * width/(300+x), width/40, t)
    translate(0, -width/100, 0);
  }

  if(arg==0){
    translate(0, width/10, 10);
    ramo2(width/20, cor1, cor2, b1, b2)
    ramo2(width/30, cor1, cor2, b1, b2)
    ramo2(width/35, cor1, cor2, b1, b2)
    ramo2(width/35, cor1, cor2, b1, b2)
  }
  if(arg==1){
    translate(0, width/8, 10);
    ramoFlores3(width/40, cor1, cor2, b1, b2)
    ramoFlores3(width/40, cor1, cor2, b1, b2)
    ramoFlores3(width/40, cor1, cor2, b1, b2)
    ramoFlores3(width/30, cor1, cor2, b1, b2)
    ramoFlores3(width/40, cor1, cor2, b1, b2)
    ramoFlores3(width/40, cor1, cor2, b1, b2)
    ramoFlores3(width/50, cor1, cor2, b1, b2)
    ramoFlores3(width/50, cor1, cor2, b1, b2)
  }
  pop()


  // sombra folhas
  push()

  for(var i =0; i<random(10, 20); i++){
    push()
    translate(random(width/15, width/7), height/random(2.2, 1.80), width/100);
    ramoS(width/random(70, 50), 170, 7, 0.5)
    pop()
  }


  // SOMBRA vaso

  push()
  noStroke()
  rotateX(-0.1)
  translate(width/30, width/1.9, 0);
  fill(cbg, 60, 8, tt);
  cylinder(23 * width/300, width/550, )
  rotateX(0.35)
  translate(-width/32.8, width/42, width/9.5);
  fill(6)
  cylinder(23 * width/(700+x*2), width/950, )
  pop()

  pop()

}

function folhaS(s, len, cor1, b1, t){

  push()
  scale(width/random(3500, 3000))
  len = width/2
  strokeWeight(1)
//  stroke(170, 90, b1, 0.45)
  rotate(random(-PI/3, PI/3)) // movimento das folhas
  rotateX(PI/random( 10))
  rotateY(PI/random(-10, 10))
  //line(0, 0, 0, -len/10)
  translate(width/50, -len/4, -20)
  rotate(PI/3)
  rotateZ(PI/16)

    noStroke();
    //fill(cor1, 90, b1, t)
    fill(cbg, 60, 5.5, 0.9); // fill(random(20, 100), 150, random(5,8))

  beginShape();
  var p1 = 30 //random(30, 60)
  vertex(p1, 30, 20);
  bezierVertex(p1, 30, 20, random(15, 65), -15, 35, -p1, 30, 20);
  bezierVertex(20, 60, 30, random(15, 65), 45, 35, p1, 30, 20);
  endShape();

  pop()
}
