// Copyright 2023 Patricia Rocha
// pattrochaa@gmail.com

function ramo(len, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg){
  
  push()
  strokeWeight(map(len, 10, 200, 2, 12))
  stroke(60, 10, 5)
  stroke(cf1, 150, bf2-3)
  line(0, 0, 0, -len)

  push()
  strokeWeight(map(len, 10, 200, 1, 6))
  stroke(cf1, 150, bf2-1)
  translate(-0.5, 0)
  line(0, 0, 0, -len)
  pop()

  translate(0, -len)
  var rd = int(random(2));
  var x;
  if(rd==0){x = int(random(-40, -40))}
  if(rd==1){x = int(random(40, 40))}
  rotate(PI/x)

  if(arg == 1){var rdf = 0}else{var rdf = int(random(2))}
  if(rdf==0){folha(s, width/3, cf1, cf2, bf1, bf2)}

  if(len > width/100){
    push()
    ramo(len * 0.85, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg);
    pop()

  }
  pop()
}


function ramo5(len, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg){
  
  push()
  strokeWeight(map(len, 10, 200, 2, 6))
  stroke(60, 10, 5)
  stroke(cf1, 150, bf2-3)
  line(0, 0, 0, -len)

  push()
  strokeWeight(map(len, 10, 200, 1, 5))
  stroke(cf1, 150, bf2-1)
  translate(-0.5, 0)
  line(0, 0, 0, -len)
  pop()
  
  translate(0, -len)
  var rd = int(random(2));
  var x;
  if(rd==0){x = int(random(-20, -20))}
  if(rd==1){x = int(random(20, 20))}
  rotate(PI/x)

  rdf = int(random(2))

  if(rdf == 0){
    if(len < width/30 && len > width/50){flor2(s*0.9, len, arg, cf1, cf2, b1, b2)}
  //  if(len < width/50 && len > width/70){flor2(s*0.8, len, arg, cf1, cf2, b1, b2)}
  //  if(len < width/70 && len > width/90){flor2(s*0.7, len, arg, cf1, cf2, b1, b2)}
  //  if(len < width/100){flor2(s*0.5, len, arg, cf1, cf2, b1, b2)}
  
    if(len > width/100){
      push()
      ramo5(len * 0.75, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg);
      pop()
    }
  }

  if(rdf == 1){
    if(len < width/100){flor2(s*0.2, len, arg, cf1, cf2, b1, b2)}
    if(len > width/100){
      push()
      ramo5(len * 0.75, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg);
      pop()
    
      push()
      ramo5(len * 0.35, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg);
      pop()
    }
  }

  pop()

}

function ramo7(len, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg){
  push()
  strokeWeight(map(len, 10, 200, 2, 25))
  stroke(60, 10, 5)
  stroke(cf1, 150, bf2-3)
  line(0, 0, 0, -len)

  push()
  strokeWeight(map(len, 10, 200, 1, 20))
  stroke(cf1, 0, 0)
  translate(-0.5, 0)
  line(0, 0, 0, -len)
  pop()

  translate(0, -len)
  var rd = int(random(2));
  var x;
  if(rd==0){x = int(random(-50, -60))}
  if(rd==1){x = int(random(30, 20))}
  rotate(PI/x)

  rdf = int(random(2))
//  if(rdf==0 || rdf == 1){
    folha8(s, width/3, cf1, cf2, bf1, bf2)
  //}

  if(len > width/100){
    push()
    ramo7(len * 0.95, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg);
    pop()

    push()
    ramo7(len * 0.10, cor1, cor2, b1, b2, cf1, cf2, bf1, bf2, s, arg);
    pop()
  }
  pop()
} 