
function ramo3(len, cor1, cor2, sat, b1, b2, r, cf){

  scale(1.1)
  rotate(r)
  push()

  strokeWeight(map(len, 10, 200, 1, 2))
  stroke(random(cor1, cor2), sat, random(b1,b2))

  line(0, 0, 0, -len)

  push()
  //translate(0, -len)
  strokeWeight(map(len, 10, 200, 0.5, 1))
  stroke(random(cor1, cor2), sat, random(b1,b2))
  //stroke(255)
  translate(-1, 0)
//  line(0, 0, 0, -len)
  pop()


  translate(0, -len)
  var rd = int(random(2));
  var x;
//  if(rd==0){
    x = int(random(-10, -20))
  //}
//  if(rd==1){x = int(random(10, 20))}
  //rotate(PI/20)
  var s = width/3000;
  if(cf==1){folha3(s, width/3, cor1, cor2, sat, b1, b2)}
  sphere(width/100, 2)
  //folha(s, width/3)
   var rdf = int(random(15))
   if(rdf==0){
     var ss = width/random(10000, 12000); // escala das folhas
    // flor(ss, width/random(0.3, 0.5), 0)

  }

  //rosa(0.3, width/3)
  if(len > width/110){
    push()
    ramo3(len * 0.88, cor1, cor2, sat, b1, b2, r, cf);
    pop()

  }

  pop()

}
