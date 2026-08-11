
function folhaC(s, len, cor1, cor2, sat, b1, b2){

  push()
  scale(s)
  strokeWeight(1)
  stroke(random(30, 100), 150, 7)
  rotate(random(-PI/3, PI/3)) // movimento das folhas
//  rotateX(PI/random( 10))
  rotateY(PI/random(-10, 10))
  line(0, 0, 0, -len/10)
  translate(width/50, -len/4, -20)
  rotate(PI/3)
  rotateZ(PI/16)

//  var rd = int(random(2))
//  if(rd == 0){
  if(rdT==0){noStroke(); }
  if(rdT==1){stroke(0); strokeWeight(width/1000)}
    fill(random(cor1, cor2), sat, random(b1,b2)) // fill(random(20, 100), 150, random(5,8))
    //}
//  if(rd == 1){noFill()}
  beginShape();
  var p1 = 80 //random(30, 60)
  vertex(p1, 30, -20);
  bezierVertex(p1, 30, 20, random(15, 65), -15, 35, -p1, 30, 20);
  bezierVertex(20, 60, 30, random(15, 65), 45, 35, p1, 30, 20);
  endShape();


  push()

  scale(0.5)
  noStroke()
  fill(0, 0, 1)
  translate(0, 0, 10)
  beginShape();
  var p1 = 80 //random(30, 60)
  vertex(p1, 30, -20);
  bezierVertex(p1, 30, 20, random(15, 65), -15, 35, -p1, 30, 20);
  bezierVertex(20, 60, 30, random(15, 65), 45, 35, p1, 30, 20);
  endShape();
  pop()


  pop()
}
