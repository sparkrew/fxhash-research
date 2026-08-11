
function folha(s, len, cor1, cor2, b1, b2){

  push()
  scale(s)
  strokeWeight(1)
  stroke(random(cor1, cor2), 315, random(b1,b2))
  rotate(random(-PI/3, PI/3)) // movimento das folhas
  rotateX(PI/random( 10))
  rotateY(PI/random(-10, 10))
  line(0, 0, 0, -len/10)
  translate(width/50, -len/4, -20)
  rotate(PI/3)
  rotateZ(PI/16)

//  var rd = int(random(2))
//  if(rd == 0){
    noStroke(); 
  //  stroke(0)
    fill(random(cor1, cor2), 315, random(b1,b2)) // fill(random(20, 100), 150, random(5,8))
    //}
//  if(rd == 1){noFill()}
  beginShape();
  var p1 = 30 //random(30, 60)
  vertex(p1, 30, 20);
  bezierVertex(p1, 30, 20, random(15, 65), -15, 35, -p1, 30, 20);
  // bezierVertex(p1, 30, 20, 25, -15, 35, -p1, 30, 20);
  bezierVertex(20, 60, 30, random(15, 65), 45, 35, p1, 30, 20);

  // bezierVertex(20, 60, 30, 25, 45, 35, p1, 30, 20);
  endShape();

//   beginShape();
//   strokeWeight(width/1000);
//   stroke(80, 140, 6)
//   vertex(p1, 30, 20);
// //  fill(random(80, 50), random(80, 50), random(10, 30))
//   bezierVertex(27, 30, 30, 20, 30, 32, -p1, 30, 20);
//   endShape();
  pop()
}
