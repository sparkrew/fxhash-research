function pince(cor, sat, bri) { // baixo
 
    
  stroke(50)
noFill();
strokeWeight(0.05);
  /* for(var x = 0; x< 50; x++){
    strokeWeight(random(1, 0.05));
    translate(random(-3, 3), 0)
    stroke(100)
beginShape();
vertex(random(90, 95), random(20, 40));
quadraticVertex(random(40, 80), 20, random(50, 20), 50);
quadraticVertex(random(20, 10), 80, random(17, 20), random(50, 80));
  quadraticVertex(80, 40, random(50, 50), random(80, 100));
  quadraticVertex(100, 140, random(100, 90), random(110, 100));
  //  quadraticVertex(30, 100, random(40, 50), random(100, 105));
//vertex(80, 60);
endShape();
  } */

  var dir = random(400)
  var dir2 = random(300)

var st = 60
  for(j = 0; j <random(5, 10); j++){
    stroke(cor, st, 2-(j*3))
    if(j > 1){st = 60}
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(100, dir2))
  }

    for(var ii = 0; ii<35; ii++){
      medidas2[ii] = int(random(-100, dir))
    }

    for(var ii = 0; ii<35; ii++){
      medidas3[ii] = int(random(-70, 70))
    }
    
 // stroke(random(200), random(200), random(300))
  for(var x = 0; x< 300; x++){
    strokeWeight(0 + x/random(500, 5000));
    translate(random(-0.6, 0.1), 0)
  
    
beginShape();
vertex(random(10), random(10));
quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
  quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
   /* quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
    quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
    quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
    quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
    quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31]));  */
//vertex(80, 60);
endShape();
  }
 
}

}

function pincel(cor, sat, bri) { // esquerda
 
    
  stroke(50)
noFill();
strokeWeight(0.05);
  /* for(var x = 0; x< 50; x++){
    strokeWeight(random(1, 0.05));
    translate(random(-3, 3), 0)
    stroke(100)
beginShape();
vertex(random(90, 95), random(20, 40));
quadraticVertex(random(40, 80), 20, random(50, 20), 50);
quadraticVertex(random(20, 10), 80, random(17, 20), random(50, 80));
  quadraticVertex(80, 40, random(50, 50), random(80, 100));
  quadraticVertex(100, 140, random(100, 90), random(110, 100));
  //  quadraticVertex(30, 100, random(40, 50), random(100, 105));
//vertex(80, 60);
endShape();
  } */

  var dir = random(600)
  var dir2 = random(200)

var st = sat
  for(j = 0; j <random(5, 10); j++){
    stroke(cor, st, 3-(j*1))
    if(j > 1){st = sat}
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(100, dir2))
  }

    for(var ii = 0; ii<35; ii++){
      medidas2[ii] = int(random(-100, dir))
    }

    for(var ii = 0; ii<35; ii++){
      medidas3[ii] = int(random(-70, 70))
    }
    
 // stroke(random(200), random(200), random(300))
  for(var x = 0; x< 300; x++){
    strokeWeight(0 + x/random(500, 5000));
    translate(random(-0.6, 0.1), 0)
  
    
beginShape();
vertex(random(10), random(10));
quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
  quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
   /* quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
    quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
    quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
    quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
    quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31]));  */
//vertex(80, 60);
endShape();
  }
 
}

}

function pincel0(cor, sat, bri) { // direita
 
    
  stroke(50)
noFill();
strokeWeight(0.05);
  var dir = random(600)
  var dir2 = random(200)

var st = sat
  for(j = 0; j <random(5, 10); j++){
    stroke(cor, st, 0+(j*1))
    if(j > 1){st = sat}
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(100, dir2))
  }

    for(var ii = 0; ii<35; ii++){
      medidas2[ii] = int(random(-100, dir))
    }

    for(var ii = 0; ii<35; ii++){
      medidas3[ii] = int(random(-70, 70))
    }
    
 // stroke(random(200), random(200), random(300))
  for(var x = 0; x< 300; x++){
    strokeWeight(0 + x/random(500, 5000));
    translate(random(-0.6, 0.1), 0)
  
    
beginShape();
vertex(random(10), random(10));
quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
  quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
   /* quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
    quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
    quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
    quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
    quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31]));  */
//vertex(80, 60);
endShape();
  }
 
}

}
  
function pincell(cor, sat, bri) {
 
    
  stroke(50)
noFill();
strokeWeight(0.05);
  /* for(var x = 0; x< 50; x++){
    strokeWeight(random(1, 0.05));
    translate(random(-3, 3), 0)
    stroke(100)
beginShape();
vertex(random(90, 95), random(20, 40));
quadraticVertex(random(40, 80), 20, random(50, 20), 50);
quadraticVertex(random(20, 10), 80, random(17, 20), random(50, 80));
  quadraticVertex(80, 40, random(50, 50), random(80, 100));
  quadraticVertex(100, 140, random(100, 90), random(110, 100));
  //  quadraticVertex(30, 100, random(40, 50), random(100, 105));
//vertex(80, 60);
endShape();
  } */

  var dir = random(600)
  var dir2 = random(300)

var st = 0
  for(j = 0; j <random(1, 10); j++){
    noFill()
    var rd = int(random(2))
    if(rd == 0){var c = 0, st = 0, b = 5}else{var c = cor, st = 60, b = 3}
    stroke(cor4, 0, 0)
    if(j > 1){st = 80}
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(100, dir2))
  }

    for(var ii = 0; ii<35; ii++){
      medidas2[ii] = int(random(-100, dir))
    }

    for(var ii = 0; ii<35; ii++){
      medidas3[ii] = int(random(-70, 70))
    }
    
 // stroke(random(200), random(200), random(300))
  for(var x = 0; x< 300; x++){
    strokeWeight(0 + x/10000);
    translate(random(-1, 0.5), 0)
  
    
beginShape();
vertex(random(10), random(10));
quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
  quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
    quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
    quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
   /* quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
    quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
    quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31]));  */
//vertex(80, 60);
endShape();
  }

  var rdel = int(random(10))
  strokeWeight(width/1000)
  stroke(cor4, 50, bri4)
  if(rdel == 0){fill(cor4, 50, bri4)}
  ellipse(0, 0, width/random(20, 5))

}

}

  function pincel1(cor, sat, bri, exp) {
    
    noFill();
    var dir = random(width/4.6)
    var dir2 = random(width/20)


    for(j = 0; j <1; j++){
    var medidas = [], medidas2 = [], medidas3 = []

    for(var i = 0; i<35; i++){
      medidas[i] = int(random(width/8, dir2))
    }
  
    for(var ii = 0; ii<35; ii++){
        medidas2[ii] = int(random(-width/18, dir))
    }

    for(var ii = 0; ii<35; ii++){
        medidas3[ii] = int(random(-width/5.4, width/5.4))
    }
    stroke(cor, sat, bri)
    for(var x = 0; x< 300; x++){
      strokeWeight(width/exp);
      translate(random(-width/1000, width/400), 0)
      beginShape();
      vertex(random(width/80), random(width/80));
      quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
      quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
      quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
        /* quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
          quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
          quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
          quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
          quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31]));  */
      //vertex(80, 60);
      endShape();
    }
   
  }

}


  function pincel01(cor, sat, bri, teste, comp) {
    
    noFill();
    var dir = random(width/20)
    var dir2 = random(width/120)


    for(j = 0; j <random(1, 3); j++){
    var medidas = [], medidas2 = [], medidas3 = []

    for(var i = 0; i<35; i++){
      medidas[i] = int(random(0, dir2))
    }
  
    for(var ii = 0; ii<35; ii++){
        medidas2[ii] = int(random(-width/18, dir))
    }

    for(var ii = 0; ii<35; ii++){
        medidas3[ii] = int(random(-width/8.4, width/comp))
    }
    stroke(cor, sat, bri)
    for(var x = 0; x< random(100, 150); x++){
      rotate(random(-0.005, 0.005))
      strokeWeight(width/(400*teste));
      translate(random(-width/400, width/400), random(-width/400, width/400))
      beginShape();
      vertex(random(width/80), random(width/80));
      quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
      quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
      quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
        quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
          quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
          quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
          quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
          quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31])); 
      //vertex(80, 60);
      endShape();
    }
   
  }

}


function pincel02(cor, sat, bri, teste) {
    
  noFill();
  var dir = random(width/2.6, width/15)
  var dir2 = random(width/101, width/101)


  for(j = 0; j <random(1, 3); j++){
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(-dir, dir2))
  }

  for(var ii = 0; ii<35; ii++){
      medidas2[ii] = int(random(-width/58, dir*2))
  }

  for(var ii = 0; ii<50; ii++){
      medidas3[ii] = int(random(-width/111.4, width/111.4))
  }
  stroke(cor, sat, bri)
  for(var x = 0; x< 50; x++){
    rotate(random(-0.2, 0.2))
    strokeWeight(0 + x/1000);
    translate(random(-width/teste, width/1500), random(-width/teste, width/1500),)
    beginShape();
    vertex(random(width/80), random(width/80));
    quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
    quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
    quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
      quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
        quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
        quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
        quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
        quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31])); 
    //vertex(80, 60);
    endShape();
  }
 
}

}

function pincel03(cor, sat, bri, qtde, exp, rot1, rot2) {
  var rd = int(random(2))
  push()
    fill(cor, sat, bri)
    noStroke()
   // ellipse(0, 0, width/random(90,90))
    if(rd == 0) {
      ellipse(random(-width/100, width/100), random(-width/100, width/100), width/random(120,150))

    
 }
    pop()

  noFill();
  var dir = random(width/125.6, width/125)
  var dir2 = width/1101


  for(j = 0; j <random(1); j++){
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(dir2, dir2))
  }

  for(var ii = 0; ii<35; ii++){
      medidas2[ii] = -width/158
  }

  for(var ii = 0; ii<50; ii++){
      medidas3[ii] = int(random(-width/111.4, -width/111.4))
  }
  stroke(cor, sat, bri)
  for(var x = 0; x< qtde; x++){
    rotate(random(-rot1, rot2))
    strokeWeight(width/random(exp,5000));
    translate(random(-width/1500, width/1500), random(-width/1000, width/2000))
    beginShape();
    vertex(random(width/1180), random(width/1180));
    quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
    quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
    quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
/*       quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
        quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
        quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
        quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
        quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31]));  */
    //vertex(80, 60);
    endShape();
  }

 
}

}

function pincel04(cor, sat, bri, tam, exp) {
    
  noFill();
  var dir = random(width/125.6, width/125)
  var dir2 = random(width/110, width/110)


  for(j = 0; j <random(1, 3); j++){
  var medidas = [], medidas2 = [], medidas3 = []

  for(var i = 0; i<35; i++){
    medidas[i] = int(random(dir2, dir2))
  }

  for(var ii = 0; ii<35; ii++){
      medidas2[ii] = int(random(-width/158, -width/158))
  }

  for(var ii = 0; ii<50; ii++){
      medidas3[ii] = int(random(-width/111.4, -width/111.4))
  }
  stroke(cor, sat, bri)
  for(var x = 0; x< tam; x++){
    rotate(random(-0.1, 0.1))
    strokeWeight(width/exp);
    translate(random(-width/1500, width/1500), random(-width/1500, width/1000))
    beginShape();
    vertex(random(width/1180), random(width/1180));
    quadraticVertex(medidas[0], medidas2[1], medidas[2], random(medidas3[1], medidas3[3]));
    quadraticVertex(medidas[4], medidas2[5], medidas[6], random(medidas3[2], medidas3[7]));
    quadraticVertex(medidas[8], medidas2[9], medidas[10], random(medidas3[4], medidas3[11]));
      quadraticVertex(medidas[12], medidas2[13], medidas[14], random(medidas3[5], medidas3[15]));
        quadraticVertex(medidas[16], medidas2[17], medidas[18], random(medidas3[6], medidas3[19]));
        quadraticVertex(medidas[20], medidas2[21], medidas[22], random(medidas3[8], medidas3[23]));
        quadraticVertex(medidas[24], medidas2[25], medidas[26], random(medidas3[9], medidas3[27]));
        quadraticVertex(medidas[28], medidas2[29], medidas[30], random(medidas3[10], medidas3[31])); 
    //vertex(80, 60);
    endShape();
  }
var rd = int(random(20))
push()
  fill(0)
 // if(rd == 0) {
    //ellipse(0, 0, width/random(200,50))
  //}
  pop()
 
}

}


function tinta1(){
  
}
