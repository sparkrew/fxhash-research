let uCount;
let uMin;
let uMax;
let vCount;
let vMin;
let vMax;

let r;
let tx = [];
let ty = [];
let tz = [];
let m0, m1, m2, m3, m4, m5, m6, m7;
let maxX, minY, maxY;
let scl = 0;
let sclPrn = 0;
let tran = 0;

let points;

let winSize = 800;
let prnSize = 4096;

function setup() {
  if (windowWidth > windowHeight) {
    winSize = windowHeight;
  } else {
    winSize = windowWidth;
  }
  
  printCanvas = createGraphics(prnSize, prnSize, WEBGL);
  createCanvas(winSize, winSize, WEBGL);
  
  smooth();
  fill(255);
  noLoop();
  
  printCanvas.smooth();
  printCanvas.fill(255);
  printCanvas.noLoop();
  
  uCount = 60;
  uMin = 0;
  uMax = PI;
  vCount = 120;
  vMin = 0;
  vMax = 2*PI;
  
  points = new Array(vCount+1);
  for (let i = 0; i < vCount+1; i++) {
    points[i] = new Array(uCount+1);
  }
  
  for (let i = 0; i < 16; i++) {
    append(tx, float(fxrand()*6.0 - 3.0));
    append(ty, float(fxrand()*6.0 - 3.0));
    append(tz, int(fxrand()*3.0 + 2.0));
  }

  m0 = 4 + tx[0]; m1 = 3; m2 = 2 + ty[0]; m3 = 3; m4 = tz[0]; m5 = 2; m6 = -tz[0]; m7 = 4;
  
  // fill array
  let u, v;
  for (let iv = 0; iv <= vCount; iv++) {
    for (let iu = 0; iu <= uCount; iu++) {
      u = map(iu, 0, uCount, uMin, uMax);
      v = map(iv, 0, vCount, vMin, vMax);
      
      r = pow(sin(m0*u),m1) + pow(cos(m2*u),m3) + pow(sin(m4*v),m5) + pow(cos(m6*v),m7);

      points[iv][iu] = new p5.Vector();
      points[iv][iu].x = r*sin(u)*cos(v);
      points[iv][iu].y = r*cos(u);
      points[iv][iu].z = r*sin(u)*sin(v);
    }
  }
  
  maxX = -pow(10,6);
  minY = pow(10,6);
  maxY = -pow(10,6);
}

function draw() {
  printCanvas.background(224, 211, 175);
  printCanvas.stroke(0);
  printCanvas.strokeWeight(0.6);
  printCanvas.ortho();
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      printCanvas.push();

      let ttx = tx[i*4+j];
      let tty = ty[i*4+j];
      let ttz = tz[i*4+j];
      
      maxX = -pow(10,6);
      minY = pow(10,6);
      maxY = -pow(10,6);
      autoScale(ttx, tty, ttz);
      let mm = max(abs(maxX), abs(minY), abs(maxY));
      let tt = (maxY + minY);
      sclPrn = (prnSize/4.0)/sqrt(mm);
      tran = -40.0*tt;
      
      printCanvas.translate(-prnSize/2 + prnSize/8.0 + i*prnSize/4.0, -prnSize/2 + prnSize/8.0 + j*prnSize/4.0 + tran/4.0, 0);
      printCanvas.scale(sclPrn/3.8);
    
      m0 = 4 + ttx; m1 = 3; m2 = 2 + tty; m3 = 3; m4 = ttz; m5 = 2; m6 = -ttz; m7 = 4;
      
      // fill array
      let u, v;
      for (let iv = 0; iv <= vCount; iv++) {
        for (let iu = 0; iu <= uCount; iu++) {
          u = map(iu, 0, uCount, uMin, uMax);
          v = map(iv, 0, vCount, vMin, vMax);
          
          r = pow(sin(m0*u),m1) + pow(cos(m2*u),m3) + pow(sin(m4*v),m5) + pow(cos(m6*v),m7);
          
          points[iv][iu].x = r*sin(u)*cos(v);
          points[iv][iu].y = r*cos(u);
          points[iv][iu].z = r*sin(u)*sin(v);
        }
      }
      
      // draw mesh
      for (let iv = 0; iv < vCount; iv++) {
        printCanvas.beginShape(QUAD_STRIP);
        for (let iu = 0; iu <= uCount; iu++) {
          printCanvas.vertex(points[iv][iu].x, points[iv][iu].y, points[iv][iu].z);
          printCanvas.vertex(points[iv+1][iu].x, points[iv+1][iu].y, points[iv+1][iu].z);
        }
        printCanvas.endShape();
      }
      printCanvas.pop();
    }
  }
  
  let dataUrl = printCanvas.elt.toDataURL();
  document.body.style.backgroundImage = 'url('+dataUrl+')';
}

function autoScale(ttx, tty, ttz) {
  m0 = 4 + ttx; m1 = 3; m2 = 2 + tty; m3 = 3; m4 = ttz; m5 = 2; m6 = -ttz; m7 = 4;

  let u, v;
  for (let iv = 0; iv <= vCount; iv++) {
    for (let iu = 0; iu <= uCount; iu++) {
      u = map(iu, 0, uCount, uMin, uMax);
      v = map(iv, 0, vCount, vMin, vMax);
      
      r = pow(sin(m0*u),m1) + pow(cos(m2*u),m3) + pow(sin(m4*v),m5) + pow(cos(m6*v),m7);

      points[iv][iu].x = r*sin(u)*cos(v);
      if (points[iv][iu].x > maxX) {
        maxX = points[iv][iu].x;
      }
      points[iv][iu].y = r*cos(u);
      points[iv][iu].z = r*sin(u)*sin(v);
      if (points[iv][iu].y > maxY) {
        maxY = points[iv][iu].y;
      }
      if (points[iv][iu].y < minY) {
        minY = points[iv][iu].y;
      }
    }
  }
}

function keyPressed() {
  if (key == 's') {
    saveCanvas(printCanvas, "Harmonics", "png"); // or “jpg”
  }
}

function windowResized() {
  if (windowWidth > windowHeight) {
    winSize = windowHeight;
  } else {
    winSize = windowWidth;
  }
  resizeCanvas(winSize, winSize);
}
