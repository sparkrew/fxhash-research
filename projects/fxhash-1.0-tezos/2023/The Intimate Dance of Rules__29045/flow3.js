// example algo Flow3
// kenzo da barra
// @2023

class Flow1Ca {
  constructor(w, l) {
    this.w = w;
    this.cW = l;
    this.c = Array(floor(w / this.cW)).fill(0);
    this.c[floor(this.c.length / 2)] = 1;
    this.g = 0;
	this.r = [0, 0, 0, 1, 1, 1, 1, 0] // ex. rule 30
	}

  update() {
    let nG = Array(this.c.length).fill(0);
    for (let i = 1; i < this.c.length - 1; i++) {
      let lf = this.c[i - 1];
      let m = this.c[i];
      let rg = this.c[i + 1];
      nG[i] = this.rules(lf, m, rg);
    }
    this.c = nG;
    this.g++;
  }

  rules(a, b, c) {
    if (a === 1 && b === 1 && c === 1) return this.r[0];
    if (a === 1 && b === 1 && c === 0) return this.r[1];
    if (a === 1 && b === 0 && c === 1) return this.r[2];
    if (a === 1 && b === 0 && c === 0) return this.r[3];
    if (a === 0 && b === 1 && c === 1) return this.r[4];
    if (a === 0 && b === 1 && c === 0) return this.r[5];
    if (a === 0 && b === 0 && c === 1) return this.r[6];
    if (a === 0 && b === 0 && c === 0) return this.r[7];
    return 0;
  }
}

class Flow3Pa {
  constructor(x, y) {
    this.p = createVector(x, y);
    this.v = createVector();
    this.a = createVector();
    this.mS = 1;
    this.s = 2;
  }

  follow(flow) {
    let x = floor(this.p.x / flow.r);
    let y = floor(this.p.y / flow.r);
    let i = x + y * flow.c;
    let f = flow.f[i];
    this.applyForce(f);
  }

  applyForce(f) {
    this.a.add(f);
  }

   update(state) {
    this.v.add(this.a);
    this.v.limit(this.mS);
    this.p.add(this.v);
    this.a.mult(0);
	this.edge();
    this.color = state === 1 ? color(255, 0, 0) : color(0);
  }
  
  edge(){
	  
  }	  

  display() {
    fill(this.color);
	ellipse(this.p.x, this.p.y, this.s, this.s);
  }
}

class Flow2Fl {
  constructor(r) {
    this.r = r;
    this.c = floor(width / this.r);
    this.r = floor(height / this.r);
    this.f = [];
  }

  gNF() {
    for (let y = 0; y < this.r; y++) {
      for (let x = 0; x < this.c; x++) {			
		let angle = TWO_PI;   
        let v = p5.Vector.fromAngle(angle);
        this.f.push(v);
      }
    }
  }
}