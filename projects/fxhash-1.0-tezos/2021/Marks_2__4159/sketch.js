/////////////////////////////////////////////////
/// Marks 2 by Matthew Lewis
/////////////////////////////////////////////////
let bgc = 255; // bg color
let fgc = 0; // fg color
let maxGroups = 48;
let minGroups = 8;
let seed = 111;
let nep = 4; // num edge points
/////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = fxrand() * 100000;
  drawStuff();
}
////////////////////////////////
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawStuff();
}
////////////////////////////////
function drawStuff() {
  stroke(fgc);
  background(bgc);
  randomSeed(seed);
  drawGroups();
}
////////////////////////////////
function drawGroups() {
  let ngroups = int(random(minGroups, maxGroups));
  let imageSpread = random(3,7);
  for(let i=0; i<ngroups; i++) {
    let groupX = width * randomGaussian(0.5, 1/imageSpread);
    let groupY = height * randomGaussian(0.5, 1/imageSpread);
    let groupSpread = random(.5, 1.5) * width/100;
    let nmarks = int(randomGaussian(8, 6));
    drawGroup(groupX, groupY, groupSpread, nmarks, true);
  }
}
//////////////////////////////
function drawGroup(groupX, groupY, groupSpread, nmarks, clipping) {
  for(let i=0; i<nmarks; i++) {
    let markX = randomGaussian(groupX, groupSpread);
    let markY = randomGaussian(groupY, groupSpread);
    let spread = random(.4, 4) * (windowWidth / 100);
    drawMark(markX, markY, spread, clipping);
  }
}
//////////////////////////////
function drawMark(markX, markY, spread, clipping) {
  let x2 = markX + spread * random(-1, 1);
  let y2 = markY + spread * random(-1, 1);
  strokeWeight(max(0.1, randomGaussian(.6, .4)));
  let roll = random(), ntypes = 8, ch = 1/ntypes;
  if(roll < ch) {
    let ro = random(.2, .8);
    let len = randomGaussian(3,.5);
    x2 = markX + len * spread * random(-1, 1);
    y2 = markY + len * spread * random(-1, 1);
    drawLine(markX, markY, x2,y2, ro, nep);
  }
  else if(roll < ch*2) { drawShape(markX, markY, spread); }
  else if(roll < ch*3) { drawRect(markX, markY, x2,y2); }
  else if(roll < ch*4) { drawHatch(markX, markY, x2,y2); }
  else if(roll < ch*5) { if(clipping) {drawClipShape(markX, markY, spread);} }
  else if(roll < ch*6) { drawSawtooth(markX, markY, spread); }
  else if(roll < ch*7) { drawLoop(markX, markY); }
  else { drawCurve(x2, y2, spread); }
}
///////////////////////////////////////////////////////
function drawLoop(markX, markY) {
  let N = int(random(3,8));
  let px = [];
  let py = [];
  push();
  translate(markX, markY);
  rotate(random()*TWO_PI);
  scale(random(.1, 1.6), random(.1, 1.6));
  translate(-markX, -markY);

  curveTightness(0);
  let xstep = width / random(32,512);
  let ystep = xstep * random(.1, 4);

  let c = random() > 0.5;  // curve?
  c = true;  // yes
  let np = int(random(4,12));

  beginShape();
  for(let i=0; i<N; i++) {
    for(let j=0; j<np; j++) {
      r = ystep;
      let a = j * (TWO_PI / np);
      let k = i*np + j;
      px[k] = r * cos(a) + markX + (i*xstep) + (j/np * xstep);
      px[k] += random(-1,1) * 0.25 * xstep;
      py[k] = r * sin(a) + markY;
      py[k] += random(-1,1) * 0.5 * ystep;
      if(c) { curveVertex(px[k], py[k]); }
      else { vertex(px[k], py[k]); }
    }
  }
  endShape();
  pop();
}
///////////////////////////////////////////////////////
function drawSawtooth(markX, markY, spread) {
  let N = int(random(4,16));
  let px = [];
  let py = [];
  push();
  translate(markX, markY);
  rotate(random()*TWO_PI);
  scale(random(.1, 1.6), random(.1, 1.6));
  translate(-markX, -markY);
  curveTightness(-2,2);
  let xstep = width / random(32,512);
  let ystep = xstep * random(.1, 4);
  let c = random() > 0.5;  // curve?
  beginShape();
  px[0] = markX;
  py[0] = markY;
  if(c) { curveVertex(px[0], py[0]); }
  else { vertex(px[0], py[0]); }
  for(let i=1; i<N; i++) {
    px[i] = px[i-1] + xstep * random(.5, 3);
    py[i] = py[i-1] + ystep * ((i%2)*2-1) * random(.5, 3);
    if(c) { curveVertex(px[i], py[i]); }
    else { vertex(px[i], py[i]); }
  }
  endShape();
  pop();
}
///////////////////////////////////////////////////////
function drawHatch(xm,ym, x2,y2) {
  let x1 = 2*xm - x2;
  let y1 = 2*ym - y2;
  let ro = random(.1,.9);
  let nlines = random(3,11);
  let r = random()*TWO_PI;
  let both = random() < .5;
  let board = random() < .5;
  let si = board ? 0 : 1/nlines;
  let ei = board ? 1 : 1-(1/nlines);
  noFill();
  push();
    translate(xm,ym);
    rotate(r);
    scale(random(.1, 1.6), random(.1, 1.6));
    translate(-xm,-ym);
    for(let t=si; t<=ei; t += 1/nlines) {
      let tt = t + random(-0.5/nlines, 0.5/nlines);
      let x = tt * (x2-x1) + x1;
      let yy1 = y1 + (y2-y1)*random(-.2,.2);
      let yy2 = y2 + (y2-y1)*random(-.2,.2);
      fline(x,yy1, x,yy2, ro, nep);
      if(both) {
        let y = tt * (y2-y1) + y1;
        let xx1 = x1 + (x2-x1)*random(-.2,.2);
        let xx2 = x2 + (x2-x1)*random(-.2,.2);
        fline(xx1,y, xx2,y, ro, nep);
      }
    }
  pop();
}
///////////////////////////////////////////////////////
function drawCurve(markX, markY, spread) {
  let npnts = randomGaussian(8, 4);
  noFill();
  curveTightness(random(-1,1));
  beginShape();
  for(let i=0; i<npnts; i++) {
    let px = randomGaussian(markX, spread);
    let py = randomGaussian(markY, spread);
    curveVertex(px, py);
  }
  endShape();
}
///////////////////////////////////////////////////////
function drawRect(xm,ym, x2,y2) {
  let x1 = 2*xm - x2;
  let y1 = 2*ym - y2;
  let roll = random();
  if(roll < 0.5) { fill(bgc); }
  else { noFill(); }

  let a = 1;
  x1 += (x2-x1)*random(-a,a);
  x2 += (x2-x1)*random(-a,a);
  y1 += (y2-y1)*random(-a,a);
  y2 += (y2-y1)*random(-a,a);

  let ro = .2;
  let e1 = fedge(x1,y1, x2,y1, ro, nep);
  let e2 = fedge(x2,y1, x2,y2, ro, nep);
  let e3 = fedge(x2,y2, x1,y2, ro, nep);
  let e4 = fedge(x1,y2, x1,y1, ro, nep);
  let pnts = e1.concat(e2,e3,e4);
  push();
    translate(xm,ym);
    rotate(random()*TWO_PI);
    scale(random(.1, 1.6), random(.1, 1.6));
    translate(-xm,-ym);
    beginShape();
      for(let p of pnts) {
        curveVertex(p.x, p.y);
      }
    endShape();
  pop();
}
///////////////////////////////////////////////////////
function drawRectOrig(xm,ym, x2,y2) {
  let x1 = 2*xm - x2;
  let y1 = 2*ym - y2;
  let roll = random();
  push();
  translate(xm,ym);
  rotate(random()*TWO_PI);
  scale(random(.1, 1.6), random(.1, 1.6));
  translate(-xm,-ym);
  let ro = .8;
  fline(x1,y1, x2,y1, ro, nep);
  fline(x2,y1, x2,y2, ro, nep);
  fline(x2,y2, x1,y2, ro, nep);
  fline(x1,y2, x1,y1, ro, nep);
  pop();
}
///////////////////////////////////////////////////////
function drawShape(markX, markY, spread) {
  let npnts = int(random(4,24));
  let px = [];
  let py = [];
  spreadDiv = random(2,5);
  push();
  translate(markX, markY);
  rotate(random()*TWO_PI);
  scale(random(.1, 1.6), random(.1, 1.6));
  translate(-markX, -markY);
  beginShape();
  for(let i=0; i<npnts; i++) {
    r = randomGaussian(spread, spread/spreadDiv);
    let a = i * (TWO_PI / npnts);
    px[i] = r * cos(a) + markX;
    py[i] = r * sin(a) + markY;
    curveVertex(px[i], py[i]);
  }
  for(let i=0; i<3; i++) {
    curveVertex(px[i], py[i]); // smooth closed shape
  }
  endShape();
  pop();
}
///////////////////////////////////////////////////////
function drawClipShape(markX, markY, spread) {
  drawingContext.save();
  drawShape(markX, markY, spread * 2);
  drawingContext.clip();
  drawGroup(markX, markY, 16, 1, false);
  drawingContext.restore();
}
///////////////////////////////////////////////////////
function drawLine(x1,y1, x2,y2, roughness, N) {
  noFill();
  fline(x1,y1,  x2,y2, roughness, N);
}
///////////////////////////////////////////////////////
function fline(x1,y1,  x2,y2, roughness, N) {
  if(N<1) {
    line(x1,y1, x2,y2);
  }
  else {
    let xm = (x1+x2) * 0.5;
    let ym = (y1+y2) * 0.5;
    r = (random() - 0.5) * roughness;
    let xo = xm - r*(y2 - ym);
    let yo = ym + r*(x2 - xm);
    fline(x1,y1, xo,yo, roughness, N-1);
    fline(xo,yo, x2,y2, roughness, N-1);
  }
}
///////////////////////////////////////////////////////
function drawEdge(x1,y1, x2,y2, roughness, N) {
  noFill();
  let pnts = fedge(x1,y1,  x2,y2, roughness, N);
  let first = 1, prev = {};
  for (let p of pnts) {
    if(first) { first = 0; }
    else { line(prev.x, prev.y, p.x, p.y); }
    prev = p;
  }
}
///////////////////////////////////////////////////////
function fedge(x1,y1,  x2,y2, roughness, N) {
  if(N<1) {
    return [ {x:x1, y:y1}, {x:x2, y:y2} ];
  }
  else {
    let xm = (x1+x2) * 0.5;
    let ym = (y1+y2) * 0.5;
    r = (random() - 0.5) * roughness;
    let xo = xm - r*(y2 - ym);
    let yo = ym + r*(x2 - xm);
    let pp1 = fedge(x1,y1, xo,yo, roughness, N-1);
    let pp2 = fedge(xo,yo, x2,y2, roughness, N-1);
    return pp1.concat(pp2);
  }
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
