
function ramoFlores1(len, cor1, cor2, b1, b2, ef){
  scale(1.1)
//  rotateX(0.1)
  push()

  strokeWeight(map(len, 10, 200, 0.5, 2))
  stroke(60, 10, 5)

  line(0, 0, 0, -len)

  push()
  strokeWeight(map(len, 10, 200, 0.5, 1))
  stroke(60, 200, 12)
  //stroke(255)
  translate(-1, 0)
//  line(0, 0, 0, -len)
  pop()


  translate(0, -len)
  var rd = int(random(2));
  var x;
  if(rd==0){x = int(random(-30, -30))}
  if(rd==1){x = int(random(30, 30))}
  rotate(PI/x)
  var s = ef; // width/random(2500, 2000);

  folha(s, width/3, cor1, cor2, b1, b2)
  //folha(s, width/3, 70, random(30, 90), 8, random(4, 10))
  //folha(s, width/3)
   var rdf = int(random(15))
   if(rdf==0){
     var ss = width/random(18000, 14000); // escala das folhas
     //flor2(ss, width/random(0.3, 0.5), int(random(2)), cor1, cor2, b1, b2)

  }

  //rosa(0.3, width/3)
  if(len > width/100){
    push()

    ramoFlores1(len * 0.85, cor1, cor2, b1, b2, ef);
    // ramoFlores2(len * 0.75, cor1, cor2, b1, b2);
    // ramoFlores2(len * 0.2, cor1, cor2, b1, b2);
    pop()

    push()
    rotate(PI/x*random(-5, 10))
  //  ramoFlores(len * 0.2, cor1, cor2, b1, b2);
    pop()
  }

  pop()

}
