
function ramo(len, cor1, cor2, b1, b2, arg){
  scale(1.1)

  push()

  strokeWeight(map(len, 10, 200, 1, width/600))
  stroke(random(cor1, cor2), 315, random(b1,b2))

  line(0, 0, 0, -len)

  push()
  strokeWeight(map(len, 10, 200, 0.5, 1))
  stroke(cor1, 200, 12)
  //stroke(255)
  translate(-1, 0)
//  line(0, 0, 0, -len)
  pop()


  translate(0, -len)
  var rd = int(random(2));
  var x;
  if(rd==0){x = int(random(-10, -20))}
  if(rd==1){x = int(random(10, 20))}
  rotate(PI/x)
  var s = width/random(2500, 3000);
  folha(s, width/3, cor1, cor2, b1, b2)
  //folha(s, width/3)
   var rdf = int(random(15))
   if(arg==1){
     var ss = width/random(10000, 12000); // escala das folhas
     flor(ss, width/random(0.3, 0.5), 1, 0, 20, 7, 9)


  }

  //rosa(0.3, width/3)
  if(len > width/100){
    push()
    ramo(len * 0.85, cor1, cor2, b1, b2, arg);
    ramo(len * 0.2, cor1, cor2, b1, b2, arg);
    pop()

    push()
    rotate(PI/x*random(-5, 10))
    ramo(len * 0.2, cor1, cor2, b1, b2, arg);
    pop()
  }

  pop()

}


push()



 scale(0.2)
 translate(100, -height/0.3, 0);
 balao()

//  rotateX(0.1)
//  fill(150)

pop()
