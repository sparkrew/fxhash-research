class Mass{
  constructor(x,y,m,col,r,fr) {
    this.G = 0.008;
    // gráficas
    this.m = m
    this.r = r;
    this.fillColor = col;
    //posición
    this.pos = createVector(x,y);
    //velocidad
    this.speed = createVector(0,0);
    //aceleración
    this.ac = createVector(0,0);
    this.fr = fr; // fricción
  }

  move(masses) {
    this.ac = createVector(0,0);
    masses.forEach(m => {
      let auxF = p5.Vector.sub(m.getPos(), this.pos);
      if(auxF.mag()<this.r)
        this.impacto(m);
      let mg = this.G*auxF.mag()/((this.m*m.m)^2)
      this.ac.add(auxF.normalize().mult(mg));
    });
    this.speed.add(this.ac.copy().mult(0.4)).add(this.ac.copy().rotate(fxrand()*TWO_PI).mult((fxrand()-0.5)*8));
    this.speed.div(this.fr);
    this.pos.add(this.speed);
  }

  impacto(m){
      this.speed.mult(-1);
  }

  display() {
    //fill(this.fillColor);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  getPos(){
    return this.pos;
  }
}
