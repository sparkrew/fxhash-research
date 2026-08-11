
// Copyright 2023 Patricia Rocha
// pattrochaa@gmail.com

function folha(s, len, cor1, cor2, b1, b2){

  push()
  scale(s)
  strokeWeight(width/2000)
  stroke(random(30, 100), 150, 7)
  rotate(random(-PI/3, PI/3))
 // rotateX(PI/random( 10))
  rotateY(PI/random(2, 1))
 
  fill(random(cor1, cor2), 250, random(b1,b2)) 

  stroke(random(cor1, cor2), 150, random(b1,b2)-2)
  strokeWeight(width/2000)
  beginShape();
  vertex(0, 0,0); 
  quadraticVertex(31, 20, 20, 31, 50, 10); // cima
  quadraticVertex(30, 80, 20, 20, 140, 10); // ponto em baixo 1
  vertex(20, 140, 10);
  quadraticVertex(30, 80, 0, 30, 50, 0);
  quadraticVertex(30, 20, 0, 0, 0, 0);
  endShape();
  
  pop()
}

function folha8(s, len, cor1, cor2, b1, b2){
  push()
  var a = atan2(height / 2, width / 2); 
  scale(s)
  strokeWeight(width/2000)
  stroke(random(30, 100), 150, 7) 
  var rd = int(random(4))
  for(var i = 0; i<int(random(2)); i++){
    if(rd==0){}
    if(rd==1 || rd==2 || rd==3){
    rotate(a-4.5);
    rotate(-PI/10.5)
   // rotate(random(-PI/1, PI/1))
    rotateX(PI/-1)
    rotateY(PI/-2)
    push()
    fill(random(cor1, cor2), 250, random(b1,b2)) 
    stroke(random(cor1, cor2), 150, random(b1,b2)-2)
    strokeWeight(width/2000)
    beginShape();
    vertex(0, 0,0); 
    quadraticVertex(31, 20, 5, 31, 50, 10); // cima
    quadraticVertex(30, 80, 5, 20, 90, 10); // ponto em baixo 1
    vertex(20, 90, 10);
    quadraticVertex(30, 80, 0, 30, 50, 0);
    quadraticVertex(30, 20, 0, 0, 0, 0);
    endShape();
    pop()
    }
  }
  pop()
} 