
function flor2(s, len, arg, cor1, cor2, b1, b2){

  var a = atan2(height / 2, width / 2);
  numP = 10;
  push()
  scale(s)
  strokeWeight(width/500)
  stroke(60, 200, 6)

  rotate(random(-PI/3, PI/3)) // movimento das folhas
  rotateX(PI/random( 10))
  rotateY(PI/random(-10, 30))
  line(0, 0, 0, -len/7)
  translate(width/50, -len/8, 20)
//  rotate(PI/3)
//  rotateZ(PI/16)

push();
var rd = int(random(2))

if(arg == 1){
  numP= 5
  //if(rd==0){noFill();
//  stroke(random(300, 270), random(150, 100), random(100, 150)); strokeWeight(2)}
  //if(rd==1){
    fill(random(cor1, cor2), 0, random(6, 10)); noStroke()
  //}
}
if(arg==0){

//  if(rd == 0){noStroke(); noFill();} //fill(250, 250, 200)
//  if(rd == 1){
    noStroke()

    fill(random(cor1, cor2), 0, 100, 0.9);

  //}
}
scale(0.8)

for(var i = 0; i<numP; i++){


  //rotate(a-2.5);
  if(arg == 0){rotate(a-2.5);}
  if(arg == 1){rotate(a-4.5);}
  beginShape();

  vertex(0,20, 0); //vertex(-10,5);
  bezierVertex(-100,210,130,100,160,165, 30, 65, 20);
  endShape(CLOSE);
}
pop();

  push();
  if(arg == 1){noFill(); stroke(255); noStroke()}
  if(arg==0){
   // var rd = int(random(2))
   //  if(rd == 0){
      noStroke()
      fill(random(cor1, cor2), 200, 7);
   //  }
   // if(rd == 1){
   //

   //    fill(random(cor1, cor2), 200, 7);
   //  }
  }
  scale(0.6)
  for(var i = 0; i<11; i++){


    rotate(a-2.5);
    beginShape();
    vertex(-10,25, 20); //vertex(-10,5);
    bezierVertex(-80,210,130,100,160,165, 30, 65, 20);
    endShape(CLOSE);
  }
  pop();

  push();
  if(arg == 1){noFill(); stroke(255); noStroke()}
  if(arg==0){
  noStroke();
  fill(random(cor1, cor2), 200, 5); strokeWeight(2)
//}
  }
  scale(0.4)
  for(var i = 0; i<11; i++){

    rotate(a-2.5);
    beginShape();
    vertex(0,0,0); //vertex(-10,5);
    bezierVertex(-80,210,150,100,160,165, 30, 65, 20);
    endShape(CLOSE);
  }

  translate(0, 0, 50)
  if(arg==0){
  fill(random(cor1, cor2), 200, 4)
  ellipse(0, 0, 150)
}
  if(arg==1){
    fill(60, 150, 6)
    ellipse(0, 0, 150)
  }

  pop()

  push();
  var rd = int(random(2))
  if(rd == 0){noStroke(); noFill();} //fill(250, 250, 200)
  if(rd == 1){noFill(); stroke(random(250, 350), random(50, 200), random(50, 200))}
  stroke(random(150, 100), random(250, 350), random(150, 100))
  scale(0.4)
  for(var i = 0; i<11; i++){

    rotate(a-2.5);
    beginShape();

    vertex(0,10,-100); //vertex(-10,5);
    //bezierVertex(-80,210,150,100,160,165, 30, 65, 0);
    endShape(CLOSE);
  }
  pop()

  push();
  var rd = int(random(2))
  if(rd == 0){noStroke(); noFill()}
  if(rd == 1){stroke(70, 80, 20); stroke(random(50, 200), random(50, 200), random(50, 200))}

  scale(0.4)
  for(var i = 0; i<11; i++){
    var x = int(random(2))
    if(x==0){fill(70, 110, 0, 0)}
    if(x==1){fill(70, 110, 0, 250)}
    rotate(a-2.5);
    beginShape();
    vertex(0,10,-50); //vertex(-10,5);
  //  bezierVertex(-80,650,-10,20,60,65, 30, 65, 0);
    endShape(CLOSE);
  }
  pop()

  pop()
}
