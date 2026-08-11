let constellations = [];

function createConstellations() {
  for(let i = 0; i < sx.c.num; i++){
    constellations.push(new Constellation(i));
  }
}

function drawConstellations() {
  for(let c of constellations){
    c.draw();
  }
}

class Constellation {
  constructor(i){
    this.i = i;
    this.nodes = [];

    this.minY = 0;
    this.maxY = sz.nh;


    this.constellationColor = color(ecx(sx.p.constellation));
    this.constellationColor.setAlpha(sx.p.cAlpha);

    if (op.shape == "constellation") this.createConstellationNodes();
    if (op.shape == "verticalwaves") this.createVerticalWaveNodes();
    if (op.shape == "horizontalwaves") this.createHorizontalWaveNodes();

    this.connectNodes();
    this.createPointsAlongConnections();
    this.wavePoints();
    this.createRibbonLines(); 
    this.createDottedFlow();
  }

  createRibbonLines(){
    for(let c of this.connections){
      c.lines = [];
      let a = c.a + 90;

      c.lineColor = color(wcx(sx.p.lines));
      c.lineColor.setAlpha(sx.f.ribbons.alpha);

      let colChoice = wcx(sx.p.lines);
      if (op.colorChoosing == "noise"){
        let cn = noise(c.p1.x * op.colorChoosingRes, c.p1.y * op.colorChoosingRes);
        colChoice = nwcx(cn, sx.p.lines);
      }


      let i = 0;
      for(let p of c.wavePoints){
        let length = adjEaseOutCubic(map(p.adv, 0, c.mid, 1, 0), 0.2, 1);

        let ln = noise(p.pos.x * sx.f.ribbons.lengthRes, p.pos.y * sx.f.ribbons.lengthRes, 876);
        length *= map(ln, 0, 1, 0, c.maxRibbonLength);

        let an = noise(p.pos.x * sx.f.ribbons.angleRes, p.pos.y * sx.f.ribbons.angleRes);
        let adj = map(an, 0, 1, -sx.f.ribbons.angleAdj, sx.f.ribbons.angleAdj);
        let a_ = a + adj;

        let col = hexToHSB(colChoice);
        col.h += map(i, 0, c.wavePoints.length, 0, sx.p.flowHueAdj);
        col = hsbToHex(col.h, col.s, col.v);
        col = color(col);
        col.setAlpha(sx.f.ribbons.alpha);

        let line = {
          p1: cpv(p.pos, a_, length),
          p2: cpv(p.pos, a_ + 180, length),
          color: col
        }
        c.lines.push(line);

        i++;
      }
    }
  }

  createDottedFlow(){

    for(let c of this.connections){
       // Maybe not every connection? 

      c.dottedFlow = {
        flows: [],
        num: sx.f.flow.num(),
        d: 10,
        dInc: sx.f.flow.dInc(),
        color: wcx(sx.p.flows),
        z: 0,
        zInc: sx.f.flow.zInc,
      }

      if (op.colorChoosing == "noise"){
        let cn = noise(c.p1.x * op.colorChoosingRes, c.p1.y * op.colorChoosingRes);

        c.dottedFlow.color = nwcx(cn, sx.p.flows);
      }

      for(let i = 0; i < c.dottedFlow.num; i++){
        let flow = {
          path: [],
          alpha: map(i, 0, c.dottedFlow.num, sx.f.flow.maxAlpha, 0),
          hueAdj: map(i, 0, c.dottedFlow.num, 0, sx.p.flowHueAdj),
          blendMode: wcx(sx.p.flowBlendModes)
        }

        let col = c.dottedFlow.color;

        if (sx.p.flowHueAdj > 0){
          
          let hsb = hexToHSB(col);

          hsb.h = (hsb.h + flow.hueAdj) % 360;

          col = hsbToHex(hsb.h, hsb.s, hsb.v);
 
        }

        flow.color = color(col);
        flow.color.setAlpha(flow.alpha);

        let j = 0;
        for(let p of c.wavePoints){
          if (i % sx.f.flow.jump == 0){
            let na = noise(p.pos.x * sx.f.flow.angleRes, p.pos.y * sx.f.flow.angleRes, c.dottedFlow.z);
            let a = map(na, 0, 1, 0, 3600);

            let np = cpv(p.pos, a, c.dottedFlow.d);
            flow.path.push({
              pos: np,
            });
          }
          j++;
        }

        c.dottedFlow.d += c.dottedFlow.dInc;
        c.dottedFlow.z += c.dottedFlow.zInc;

        c.dottedFlow.flows.push(flow);
      }
    }
  }

  wavePoints(){
    for(let c of this.connections){
      c.wavePoints = [];
      let a = c.a + 90;

      for(let p of c.points){
        let dist = adjEaseOutCubic(map(p.adv, 0, c.mid, 1, 0), 0, c.maxPointDist);

        let na = noise(p.pos.x * sx.f.points.angleRes, p.pos.y * sx.f.points.angleRes, c.z);
        let a_ = a + map(na, 0, 1, -90, 90);

        let np = cpv(p.pos, a_, dist);
        c.wavePoints.push({
          pos: np,
          adv: p.adv
        });
      }
    }
  }

  createPointsAlongConnections(){
    for(let c of this.connections){
      c.points = [];

      c.num = int(c.d / sx.f.pointGap);
      c.gap = c.d / c.num;
      c.mid = c.num * .5; // Middle point

      
      for(let i = 0; i < c.num; i++){
        let adv = abs(c.mid - i);

        let p = {
          pos: cpv(c.p1, c.a, c.gap * i),
          adv: adv
        }
        c.points.push(p);

      }
    }
  } 

  createVerticalWaveNodes(){
    this.x = (this.i * sx.c.gap) + sx.c.margin * 0.5 + sx.c.gap * 0.5;
    this.z = rand(sx.c.similarity);

    this.minY = constrain(sx.c.yPos.min + rand(-50, 50), -sz.nh*0.05, sz.nh*1.05);
    this.maxY = constrain(sx.c.yPos.max + rand(-50, 50), -sz.nh*0.05, sz.nh*1.05);

    for(let i = 0; i < sx.c.numNodes; i++){
      let y = easeOutSine(this.minY, this.maxY);
      let n = noise(y * sx.c.jitterRes, this.z);
      let x = this.x + map(n, 0, 1, -sx.c.jitterAmt, sx.c.jitterAmt);
      
      let node = {
        pos: {x: x, y: y},
        connections: [],
        numConnections: sx.c.numConnections(),
        color: color(ecx(sx.p.nodes))
      }

      node.color.setAlpha(60);

      this.nodes.push(node);
    }
  }

  createHorizontalWaveNodes(){
    this.y = (this.i * sx.c.gap) + sx.c.margin * 0.5 + sx.c.gap * 0.5;

    this.z = rand(sx.c.similarity);

    for(let i = 0; i < sx.c.numNodes; i++){
      let x = easeOutSine(sx.c.xPos.min, sx.c.xPos.max);
      let n = noise(x * sx.c.jitterRes, this.z);
      let y = this.y + map(n, 0, 1, -sx.c.jitterAmt, sx.c.jitterAmt);

      let node = {
        pos: {x: x, y: y},
        connections: [],
        numConnections: sx.c.numConnections(),
        color: color(ecx(sx.p.nodes))
      }

      node.color.setAlpha(60);

      this.nodes.push(node);
    }
  }

  createConstellationNodes(){
    // Create nodes in a random ring
    this.center = {x: op.shapePos.x, y: op.shapePos.y};
   
    for(let i = 0; i < sx.c.numNodes; i++){
      let node = {
        pos: cpv(this.center, rand(360), rand(sx.c.size.min, sx.c.size.max)),
        connections: [],
        numConnections: sx.c.numConnections(),
        color: color(ecx(sx.p.nodes))
      }

      node.color.setAlpha(60);


      this.nodes.push(node);
    }
  }

  connectNodes(){
    this.connections = [];
    // Go through each node
    for(let n of this.nodes){
      let distances = [];

      // Find how far away the other nodes are 
      for(let on of this.nodes){
        if (n == on) continue;
        distances.push({
          d: dt(n.pos, on.pos),
          i: this.nodes.indexOf(on)
        });    
      }

      distances.sort((a, b) => a.d - b.d);

      // Create connections with the closest nodes
      for(let i = 0; i < n.numConnections; i++){
        // Avoid two way connections 
        let on = this.nodes[distances[i].i];
        if (on.connections.includes(this.nodes.indexOf(n))) continue;

        n.connections.push(distances[i].i);

        let connection = {
          p1: n.pos,
          p2: this.nodes[distances[i].i].pos,
          z: rand(999),
          color: color(wcx(sx.p.wavyShapes)),
          draw: wcx([[true, 1], [false, 1]])
        }

        connection.color.setAlpha(sx.f.points.alpha)

        connection.d = dt(connection.p1, connection.p2);
        connection.a = getAngle(connection.p1, connection.p2);

        connection.maxRibbonLength = map(connection.d, 5, 700, 5, sx.f.ribbons.maxLength, true)
        connection.maxPointDist = map(connection.d, 5, 700, 5, sx.f.points.maxDist, true);

        this.connections.push(connection);
      }
    }
  }

  draw(){
    this.drawNodes();

    blendMode(BLEND);
    if(op.drawWavyShapes) this.drawWavyShape();


    this.drawBasicConstellation();

    this.drawRibbonLines();   
    this.drawDottedFlow();

  }

  drawDottedFlow(){
    for(let c of this.connections){
      for(let f of c.dottedFlow.flows){
        noStroke();
        fill(f.color);
        if (f.blendMode == "BLEND") blendMode(BLEND);
        if (f.blendMode == "SCREEN") blendMode(SCREEN);
        for(let p of f.path){
          ellipse(p.pos.x, p.pos.y, sx.f.flow.size);
        }
      }
    }

    blendMode(BLEND);
    noFill();
  }

  drawWavyShape(){
    for(let c of this.connections){
      if (!c.draw) continue;
      noStroke();
      fill(c.color);

      beginShape();
      for(let p of c.wavePoints){
        vertex(p.pos.x, p.pos.y);
      }
      endShape();
    }
  }

  drawRibbonLines(){
    for(let c of this.connections){
      
      for(let l of c.lines){
        stroke(l.color);
        line(l.p1.x, l.p1.y, l.p2.x, l.p2.y);
      }
    }
  }

  drawPointsAlongConnections(){
    for(let c of this.connections){
      for(let p of c.points){
        noStroke();
        fill(sx.p.basic);
        ellipse(p.pos.x, p.pos.y, 2, 2);
      }
    }
  }

  drawBasicConstellation(){
    push();
    strokeWeight(1.8);
    for(let c of this.connections){
      stroke(this.constellationColor);
      line(c.p1.x, c.p1.y, c.p2.x, c.p2.y);
    }
    pop();
  }

  drawNodes(){
    noStroke();
    for(let n of this.nodes){
      fill(n.color);
      ellipse(n.pos.x, n.pos.y, 5, 5);
    }
  }
}