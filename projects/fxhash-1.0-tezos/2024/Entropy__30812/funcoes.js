function circulo1(){
    push()
        translate(posX, posY)
        fill(10)
        rect(-width/14.5, 0, tamanho)
        fill(200, 200, 4)
        arc(0, 0, tamanho, tamanho, 0, HALF_PI)
        fill(100, 200, 4)
        arc(0, 0, tamanho, tamanho, HALF_PI, PI);
    pop()
}

function circulo2(){
    push()
        translate(posX, posY)
        fill(10)
        rect(-width/14.5, 0, tamanho)
        fill(200, 200, 4)
        arc(-width/14.5, width/14.5, tamanho, tamanho, 0, HALF_PI)
        fill(100, 200, 4)
        arc(-width/14.5, width/14.5, tamanho, tamanho, PI+HALF_PI, 0);
    pop()
}

function circulo3(){
    push()
        translate(posX, posY)
        fill(10)
        rect(-width/14.5, 0, tamanho)
        fill(200, 200, 4)
        arc(width/14.5, width/14.5, tamanho, tamanho, PI, PI+HALF_PI)
        fill(100, 200, 4)
        arc(width/14.5, width/14.5, tamanho, tamanho, HALF_PI, PI);
    pop()
}

function circulo4(){
    push()
        translate(posX, posY)
        fill(10)
        rect(-width/14.5, 0, tamanho)
        fill(200, 200, 4)
        arc(0, width/7.25, tamanho, tamanho, PI, PI+HALF_PI)
        fill(100, 200, 4)
        arc(0, width/7.25, tamanho, tamanho, PI+HALF_PI, 0);
    pop()
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    stroke(10)
    strokeWeight(width/250);

    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) ;
      sy = y + 1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  function flower(x, y, radius1, radius2, npetals, br) {
    let angle = TWO_PI / npetals;
    let halfAngle = angle / 2.0;
    let petalRoundness = 0.5; // Ajuste de arredondamento das pétalas
    stroke(200,300,br)
    fill(random(corF1, corF2), satF, br)
   // noFill()
    strokeWeight(width / 550); 


    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius1;
        let sy = y + sin(a) * radius1;
        let cp1x = x + cos(a - halfAngle) * radius2 * petalRoundness;
        let cp1y = y + sin(a - halfAngle) * radius2 * petalRoundness;
        let cp2x = x + cos(a + halfAngle) * radius2 * petalRoundness;
        let cp2y = y + sin(a + halfAngle) * radius2 * petalRoundness;
        let ex = x + cos(a) * radius1;
        let ey = y + sin(a) * radius1;
        bezier(sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey);
    }
    endShape(CLOSE);
}
