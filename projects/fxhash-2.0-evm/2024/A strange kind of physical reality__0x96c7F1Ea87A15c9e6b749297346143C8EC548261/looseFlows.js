let looseFlows = [];

function createLooseFlows(){

  for(let i = 0; i < sx.fl.num; i++){
    looseFlows.push(new LooseFlow(i));
  }
}

function drawLooseFlows(){
  for(let l of looseFlows){
    l.draw();
  }
}

class LooseFlow{
  constructor(i){
    let c = op.looseFlowCenter;
    let max = op.looseFlowMax;
    this.startPos = cpv(c, i*sx.fl.angleGap, rand(max*0.3, max));

    while(this.startPos.x < 0 || this.startPos.x > sz.nw || this.startPos.y < 0 || this.startPos.y > sz.nh){
      this.startPos = cpv(c, i*sx.fl.angleGap, rand(max));
      max -= 40;
    }

  
    this.color = wcx(sx.p.flows);

    this.blendMode = wcx(sx.p.flowBlendModes);

    this.numRepeats = sx.fl.numRepeats();
    
    this.maxPoints = sx.fl.maxPoints();

    this.createPath();
    this.createRepeats();



  }

  createPath(){
    this.path = [];
    let cont = true;
    let count = 0;
    let p = {
      pos: this.startPos
    }
    let tilt = 0; // to go one way then the other 

    this.z = rand(sx.fl.flDiff)

    this.path.push(p);

    while(cont){
      let np = noise(p.pos.x * sx.fl.res, p.pos.y * sx.fl.res, this.z);
      let a = np * 1800 + tilt;

      let p2 = {
        pos: cpv(p.pos, a, sx.fl.pointGap)
      }

      if (tilt == 0) this.path.push(p2); 
      else this.path.unshift(p2);

      p = p2;
      count++;


      if (count > this.maxPoints || p.pos.x < 0 || p.pos.x > sz.nw || p.pos.y < 0 || p.pos.y > sz.nh) {
        if (tilt == 180) cont = false;
        else {
          tilt = 180;
          count = 0;
          p = {
            pos: this.startPos
          }
        }
      }
    }
  }

  createRepeats(){
    this.repeats = [];
    let z = 0;
    let d = 10;
  

    for(let i =0; i < this.numRepeats; i++){
      let repeat = {
        color: 0,
        alpha: map(i, 0, this.numRepeats, sx.fl.maxAlpha, 5),
        path: [],
      }

      let col = hexToHSB(this.color);
      col.h += map(i, 0, this.numRepeats, 0, sx.p.flowHueAdj);
      col = hsbToHex(col.h, col.s, col.v);
      col = color(col);

      repeat.color = col;


      repeat.color.setAlpha(repeat.alpha);

      for(let p of this.path){
        let na = noise(p.pos.x * sx.fl.repeatRes, p.pos.y * sx.fl.repeatRes, z);
        let a = na * 1800;

        let np = cpv(p.pos, a, d);

        repeat.path.push({
          pos: np,
        });

    
      }

      z += sx.fl.zInc;
      d += sx.fl.dInc;

      this.repeats.push(repeat);
    }
  }

  draw(){
    noStroke();
    this.drawRepeats();
  }



  drawRepeats(){
    if (this.blendMode == "BLEND") blendMode(BLEND);
    else blendMode(SCREEN);
    for(let r of this.repeats){
      stroke(r.color)
      strokeWeight(1.2)
      noFill();
      beginShape();
      for(let p of r.path){
        vertex(p.pos.x, p.pos.y);
      }
      endShape();
    }
  }

  drawPath(){
    fill(sx.p.basic);
    for(let p of this.path){
      ellipse(p.pos.x, p.pos.y, 4)
    }
  }
}