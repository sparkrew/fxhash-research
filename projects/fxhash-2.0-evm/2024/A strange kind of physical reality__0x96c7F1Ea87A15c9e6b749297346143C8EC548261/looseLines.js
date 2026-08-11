let ribbons = [];

function createRibbons(){
  for(let i = 0; i < sx.l.num; i++){
    ribbons.push(new Ribbon(i));
  }

  let most = {
    left: Infinity,
    right: -Infinity
  }

  for(let r of ribbons){
    let m = r.getLocation();
    if (m.left < most.left) most.left = m.left;
    if (m.right > most.right) most.right = m.right;
  }

  most.center = (most.left + most.right) * 0.5;
  most.offset = sz.nw * 0.5 - most.center;

  for(let r of ribbons){
    r.centralise(most.offset)
  }

  for(let r of ribbons){
    r.create();
  }
}

function drawRibbons(){
  for(let r of ribbons){
    r.draw();
  }
}

class Ribbon{
  constructor(i){
    this.centerX = i * sx.l.gap + sx.l.gap * 0.5 + sx.l.margin*0.5;

    this.color = color(wcx(sx.p.looseLines));
    this.color.setAlpha(sx.l.alpha);

    this.createPath();
  }

  create(){
    this.createLines();
  }


  createLines(){
    this.lines = [];

    for(let p of this.path){
      let na = noise(p.pos.x * sx.l.angleLineDiff, p.pos.y * sx.l.angleRes);
      let a = map(na, 0, 1, 0, 180);

      let nl = noise(p.pos.x * sx.l.lengthLineDiff, p.pos.y * sx.l.lengthRes);
      let length = sx.l.length.mid + map(nl, 0, 1, -sx.l.length.adj, sx.l.length.adj);

      let l = {
        p1: cpv(p.pos, a, length),
        p2: cpv(p.pos, a + 180, length)
      }

      this.lines.push(l);
    }
  }

  createPath(){
    this.path = [];

    for(let y = -100; y < sz.nh + 100; y += sx.l.dotGap){
      let n = noise(this.centerX * sx.l.lineDiff, y * sx.l.waveRes);
      let x = this.centerX + map(n, 0, 1, -sx.l.waveDistance, sx.l.waveDistance);


      this.path.push({
        pos: {x: x, y: y}
      });
    }
  }

  getLocation(){
    let most = {
      left: Infinity,
      right: -Infinity
    }

    for(let p of this.path){
      if (p.pos.x < most.left) most.left = p.pos.x;
      if (p.pos.x > most.right) most.right = p.pos.x;
    }

    return most;
  }

  centralise(offset){
    for(let p of this.path){
      p.pos.x += offset;
    }
  }

  draw(){
   // this.drawPath();
    this.drawLines();
  }

  drawLines(){
    stroke(this.color);
    strokeWeight(1);

    for(let l of this.lines){
      line(l.p1.x, l.p1.y, l.p2.x, l.p2.y);
    }
  }

  drawPath(){
    fill("#ffffff");
    noStroke();
    for(let p of this.path){
      ellipse(p.pos.x, p.pos.y, 4, 4)

    }
  }
}

