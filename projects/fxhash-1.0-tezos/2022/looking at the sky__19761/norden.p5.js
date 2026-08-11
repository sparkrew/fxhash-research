
var LSystem;

LSystem = class LSystem {
  constructor(alphabet, axiom, rules) {
    this.alphabet = alphabet;
    this.axiom = axiom;
    this.rules = rules;
    this.startString = this.axiom;
    this.endString = '';
    this.nIters = 0;
  }

  processString(oldStr) {
    var c, i, len, newStr;
    newStr = '';
    for (i = 0, len = oldStr.length; i < len; i++) {
      c = oldStr[i];
      newStr += (this.rules[c] ? this.rules[c] : c);
    }
    return newStr;
  }

  iterate(nIters) {
    var i, n, ref;
    if (nIters < 1) {
      return this.endStrig;
    }
    for (n = i = 1, ref = nIters; 1 <= ref ? i <= ref : i >= ref; n = 1 <= ref ? ++i : --i) {
      this.endString = this.processString(this.startString);
      this.startString = this.endString;
    }
    this.nIters += nIters;
    return this.endString;
  }

  addRule(key, action) {
    return this.rules[key] = action;
  }

  removeRule(key) {
    return delete this.rules[key];
  }

};

class Turtle {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.penDown = true;
    this.penColor = 14;
    this.penWeight = 0.8;
    this.heading = -HALF_PI;
    this.stack = [];
  }

  drawLSystem(ls, step, angle) {
    this.drawString(ls.endString,step,angle);
  }


  drawString(string, step, angle) {
    for (let letter of string) {
      switch (letter) {
      case 'F':
        this.pd();
        this.fw(step);
        break;
      case 'f':
        this.pu();
        this.fw(step);
        break;
      case '[':
        this.push();
        break;
      case ']':
        this.pop();
        break;
      case '+':
        this.rt(angle);
        break;
      case '-':
        this.lt(angle);
        break;
      default:
      }
    }
  }


  push() {
    this.stack.push({
      'x': this.x,
      'y': this.y,
      'penDown': this.penDown,
      'penColor': this.penColor,
      'penWeight': this.penWeight,
      'heading': this.heading
    });
  }

  pop() {
    const el = this.stack.pop();
    this.x = el.x;
    this.y = el.y;
    this.penDown = el.penDown;
    this.penColor = el.penColor;
    this.penWeight = el.penWeight;
    this.heading = el.heading;
  }

  cl(c) {
    this.color(c);
  }
  color(c) {
    this.penColor = c;
  }

  pu() {
    this.up();
  }
  up() {
    this.penDown = true;
  }

  pd() {
    this.down();
  }
  down() {
    this.penDown = true;
  }

  rt(r) {
    this.right(r);
  }
  right(rot) {
    this.heading += radians(rot+random(-60,20));
  }

  lt(l) {
    this.left(l);
  }
  left(rot) {
    this.heading -= radians(rot+random(-90,30));
  }

  pos(x, y) {
    this.x = x;
    this.y = y;
  }

  fd(s){
    this.forward(s);
  }

  fw(s) {
    this.forward(s);
  }
  forward(steps) {
    const tx = this.x + steps * cos(this.heading);
    const ty = this.y + steps * sin(this.heading);
    if (this.penDown) {
      push();
      stroke(this.penColor);
      strokeWeight(this.penWeight);
      //line(this.x, this.y, tx, ty);
      
      const ab = createVector(tx-this.x, ty-this.y);
      
      translate(this.x, this.y);
      
      const a = createVector(0, 0);
      
      let c = p5.Vector.lerp(a,ab,10.23);
      let d = p5.Vector.lerp(a,ab,10.27);
      
      c.rotate(-PI/26);
      d.rotate(PI/12);
      
      
      bezier(a.x, a.y, c.x, c.y, d.x, d.y, ab.x, ab.y);
      
      
      pop();
    }
    this.x = tx;
    this.y = ty;
  }

  bk(s) {
    this.backward(s);
  }
  // Alias to backward
  back(s){
    this.backward(s);
  }

  backward(steps) {
    const ps = this.penDown;
    this.penDown = false;
    this.forward(-steps);
    this.penDown = ps;
  }

  st(s) {
    this.style(s);
  }
  style(weight) {
    this.penWeight = weight;
  }

  hd(h) {
    this.heading = radians(h)
  };
}
