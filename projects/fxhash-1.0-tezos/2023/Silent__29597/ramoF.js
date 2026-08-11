

function ramoF(len, arg, cor1, cor2, sat, b1, b2){

  scale(1.1)
  push()



  push()
  strokeWeight(map(len, 10, 100, 2, 5))
  stroke(random(cor1, cor2), sat, random(b1,b2))
  translate(-0.5, 0)
//  line(0, 0, 0, -len)
  pop()



  push()
  strokeWeight(map(len, 10, 200, 1, 3))
  stroke(random(cor1, cor2), sat, random(b1,b2))
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

   var rdf = int(random(2))
   if(rdf==0){
     var ss = width/random(8000, 9000); // escala das folhas
     fill(random(cor1, cor2), sat, random(b1,b2))
     noStroke()
  //   push()
  //   translate(random(-width/200, width/200), 0)
     sphere(width/180, 2)
  //   pop()
     folhaC(ss, width/3, cor1, cor2, sat, b1, b2)
  //   flor(ss, width/0.8, arg, cor1, cor2)

  }

  //rosa(0.3, width/3)
  if(len > width/100){
    push()
    ramoF(len * 0.9, arg, cor1, cor2, sat, b1, b2);
  //  ramoF(len * 0.38, arg, cor1, cor2);
    pop()

    push()
    translate(0, width/30)
    rotate(PI/x*random(-2, 2))
    ramoF(len * 0.35, arg, cor1, cor2, sat, b1, b2);
    pop()
  }

  pop()

}
