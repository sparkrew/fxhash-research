

function ramoF2(len, arg, cor1, cor2, sat, b1, b2){

  scale(1.1)
  push()

  push()
  strokeWeight(map(len, 10, 100, width/600, width/600))
  stroke(random(cor1, cor2), sat, random(b1, b2))
  translate(-0.5, 0)
  line(0, 0, 0, -len)
  pop()

  // push()
  // strokeWeight(map(len, 10, 100, 0, 3))
  // stroke(190, 140, 220)
  // translate(5, 0)
  // line(0, 0, 0, -len)
  // pop()

  push()
  strokeWeight(map(len, 10, 200, 0.1, 1))
  stroke(random(cor1, cor2), sat, random(b1, b2))
//  stroke(255)
  translate(-0, 0)
  line(0, 0, 0, -len)
  pop()


  translate(0, -len)
  var rd = int(random(2));
  var x;
  if(rd==0){x = int(random(-40, -40))}
  if(rd==1){x = int(random(40, 40))}
  rotate(PI/x)

   var rdf = int(random(1))
   if(rdf==0){
     var ss = width/random(17000, 20000); // escala das folhas
    // fill(220, 250, random(5, 7))
     noFill()
     stroke(random(cor1, cor2), sat, random(b1, b2))
     strokeWeight(0.1)
    // translate(random(-5, 5), 0 )
  //   sphere(width/200, 2)
  //   flor(ss, width/0.8, arg, cor1, cor2)

  }

  //rosa(0.3, width/3)
  if(len > width/100){
    push()
    ramoF2(len * 0.9, arg, cor1, cor2, sat, b1, b2);
  //  ramoF2(len * 0.48, arg, cor1, cor2);
    pop()

    push()
    rotate(PI/x*random(-6, 6))
    ramoF2(len * 0.38, arg, cor1, cor2, sat, b1, b2);
    pop()
  }

  pop()

}
