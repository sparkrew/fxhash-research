// Copyright 2023 Patricia Rocha
// pattrochaa@gmail.com

function flor2(s, len, arg, cor1, cor2, b1, b2){

  var a = atan2(height / 2, width / 2);
  
  push()
  scale(s)
  rotateX(random(PI/1, PI/2))
  rotateY(random(-PI/2,PI/2))

  push();
  numP= 8
  fill(random(cor1, cor2), satflor, b1); noStroke()

  for(var i = 0; i<numP; i++){
    rotate(a-4.4)
    beginShape();
    vertex(0,20, 0); //vertex(-10,5);
    bezierVertex(-100,210,130,100,160,165, 30, 65, 20);
    endShape(CLOSE);
  }
  pop();

  push();
  noFill(); strokeWeight(width/500); stroke(cor1, 50, b2);
  scale(0.6)
  for(var i = 0; i<11; i++){
    rotate(a-2.5);
    beginShape();
    vertex(-10,25, 20); //vertex(-10,5);
    bezierVertex(-80,210,130,100,160,165, 30, 65, 20);
    endShape(CLOSE);
  }
  pop();
  pop()
}
