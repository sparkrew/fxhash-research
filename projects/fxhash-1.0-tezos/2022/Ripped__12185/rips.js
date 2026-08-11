function pavripleft() {
  let xl = myRandom(pacsw * 0.1, pacsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var rippedvl = [];
  var gonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let ripl = createVector(xl, yl);
    rippedvl.push(ripl);
    let ripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let ripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let ripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let gonvl = createVector(xl + ripvxl + ripvx2l, yl + ripvyl);
    gonevl.push(gonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pa.fill(features.rcol);
  pa.noStroke();
  pa.beginShape();
  pa.vertex(0, 0);
  for (let i = 0; i < rippedvl.length; i++) {
    pa.vertex(rippedvl[i].x, rippedvl[i].y);
  }
  pa.vertex(0, cs);
  pa.endShape(CLOSE);
  pa.erase();
  pa.beginShape();
  pa.vertex(0, 0);
  for (let i = 0; i < gonevl.length; i++) {
    pa.vertex(gonevl[i].x, gonevl[i].y);
  }
  pa.vertex(0, cs);
  pa.endShape(CLOSE);
  pa.noErase();
}
function pavripright() {
  let xr = myRandom(pacsw * 0.5, pacsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var rippedvr = [];
  var gonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let ripr = createVector(xr, yr);
    rippedvr.push(ripr);
    let ripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let ripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let ripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let gonvr = createVector(xr + ripvxr + ripvx2r, yr + ripvyr);
    gonevr.push(gonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pa.fill(features.rcol);
  pa.noStroke();
  pa.beginShape();
  pa.vertex(pacsw, 0);
  pa.vertex(gonevr[0].x, 0);
  for (let i = 0; i < gonevr.length; i++) {
    pa.vertex(gonevr[i].x, gonevr[i].y);
  }
  pa.vertex(pacsw, cs);
  pa.endShape(CLOSE);
  pa.erase();
  pa.beginShape();
  pa.vertex(pacsw, 0);
  for (let i = 0; i < rippedvr.length; i++) {
    pa.vertex(rippedvr[i].x, rippedvr[i].y);
  }
  pa.vertex(pacsw, cs);
  pa.endShape(CLOSE);
  pa.noErase();
}

function pavriptop() {
  let xr = 0;
  let yr = myRandom(pacsh * 0.1, pacsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var rippedvr = [];
  var gonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let ripr = createVector(xr, yr);
    rippedvr.push(ripr);
    let ripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let ripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let ripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let gonvr = createVector(xr + ripvxr, yr - ripvy2r);
    gonevr.push(gonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pa.fill(features.rcol);
  pa.noStroke();
  pa.beginShape();
  pa.vertex(0, 0);
  pa.vertex(0, gonevr[0].y);
  for (let i = 0; i < gonevr.length; i++) {
    pa.vertex(gonevr[i].x, gonevr[i].y);
  }
  pa.vertex(pacsw, 0);
  pa.endShape(CLOSE);
  pa.erase();
  pa.beginShape();
  pa.vertex(0, 0);
  for (let i = 0; i < rippedvr.length; i++) {
    pa.vertex(rippedvr[i].x, rippedvr[i].y);
  }
  pa.vertex(pacsw, 0);
  pa.endShape(CLOSE);
  pa.noErase();
}
function pavripbottom() {
  let xr = 0;
  let yr = myRandom(pacsh * 0.5, pacsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var rippedvr = [];
  var gonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let ripr = createVector(xr, yr);
    rippedvr.push(ripr);
    let ripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let ripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let ripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let gonvr = createVector(xr + ripvxr, yr - ripvy2r);
    gonevr.push(gonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pa.fill(features.rcol);
  pa.noStroke();
  pa.beginShape();
  pa.vertex(0, cs);
  pa.vertex(0, gonevr[0].y);
  for (let i = 0; i < gonevr.length; i++) {
    pa.vertex(gonevr[i].x, gonevr[i].y);
  }
  pa.vertex(pacsw, cs);
  pa.endShape(CLOSE);
  pa.erase();
  pa.beginShape();
  pa.vertex(0, cs);
  for (let i = 0; i < rippedvr.length; i++) {
    pa.vertex(rippedvr[i].x, rippedvr[i].y);
  }
  pa.vertex(pacsw, cs);
  pa.endShape(CLOSE);
  pa.noErase();
}

function pbvripleft() {
  let xl = myRandom(pbcsw * 0.1, pbcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pbrippedvl = [];
  var pbgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pbripl = createVector(xl, yl);
    pbrippedvl.push(pbripl);
    let pbripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pbripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pbripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pbgonvl = createVector(xl + pbripvxl + pbripvx2l, yl + pbripvyl);
    pbgonevl.push(pbgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pb.fill(features.rcol);
  pb.noStroke();
  pb.beginShape();
  pb.vertex(0, 0);
  for (let i = 0; i < pbrippedvl.length; i++) {
    pb.vertex(pbrippedvl[i].x, pbrippedvl[i].y);
  }
  pb.vertex(0, pbcsh);
  pb.endShape(CLOSE);
  pb.erase();
  pb.beginShape();
  pb.vertex(0, 0);
  for (let i = 0; i < pbgonevl.length; i++) {
    pb.vertex(pbgonevl[i].x, pbgonevl[i].y);
  }
  pb.vertex(0, pbcsh);
  pb.endShape(CLOSE);
  pb.noErase();
}
function pbvripright() {
  let xr = myRandom(pbcsw * 0.5, pbcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pbrippedvr = [];
  var pbgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pbripr = createVector(xr, yr);
    pbrippedvr.push(pbripr);
    let pbripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pbripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pbripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pbgonvr = createVector(xr + pbripvxr + pbripvx2r, yr + pbripvyr);
    pbgonevr.push(pbgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pb.fill(features.rcol);
  pb.noStroke();
  pb.beginShape();
  pb.vertex(pbcsw, 0);
  pb.vertex(pbgonevr[0].x, 0);
  for (let i = 0; i < pbgonevr.length; i++) {
    pb.vertex(pbgonevr[i].x, pbgonevr[i].y);
  }
  pb.vertex(pbcsw, pbcsh);
  pb.endShape(CLOSE);
  pb.erase();
  pb.beginShape();
  pb.vertex(pbcsw, 0);
  for (let i = 0; i < pbrippedvr.length; i++) {
    pb.vertex(pbrippedvr[i].x, pbrippedvr[i].y);
  }
  pb.vertex(pbcsw, pbcsh);
  pb.endShape(CLOSE);
  pb.noErase();
}

function pbvriptop() {
  let xr = 0;
  let yr = myRandom(pbcsh * 0.1, pbcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pbrippedvr = [];
  var pbgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pbripr = createVector(xr, yr);
    pbrippedvr.push(pbripr);
    let pbripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pbripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pbripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pbgonvr = createVector(xr + pbripvxr, yr - pbripvy2r);
    pbgonevr.push(pbgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pb.fill(features.rcol);
  pb.noStroke();
  pb.beginShape();
  pb.vertex(0, 0);
  pb.vertex(0, pbgonevr[0].y);
  for (let i = 0; i < pbgonevr.length; i++) {
    pb.vertex(pbgonevr[i].x, pbgonevr[i].y);
  }
  pb.vertex(pbcsw, 0);
  pb.endShape(CLOSE);
  pb.erase();
  pb.beginShape();
  pb.vertex(0, 0);
  for (let i = 0; i < pbrippedvr.length; i++) {
    pb.vertex(pbrippedvr[i].x, pbrippedvr[i].y);
  }
  pb.vertex(pbcsw, 0);
  pb.endShape(CLOSE);
  pb.noErase();
}
function pbvripbottom() {
  let xr = 0;
  let yr = myRandom(pbcsh * 0.5, pbcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pbrippedvr = [];
  var pbgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pbripr = createVector(xr, yr);
    pbrippedvr.push(pbripr);
    let pbripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pbripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pbripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pbgonvr = createVector(xr + pbripvxr, yr - pbripvy2r);
    pbgonevr.push(pbgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pb.fill(features.rcol);
  pb.noStroke();
  pb.beginShape();
  pb.vertex(0, pbcsh);
  pb.vertex(0, pbgonevr[0].y);
  for (let i = 0; i < pbgonevr.length; i++) {
    pb.vertex(pbgonevr[i].x, pbgonevr[i].y);
  }
  pb.vertex(pbcsw, pbcsh);
  pb.endShape(CLOSE);
  pb.erase();
  pb.beginShape();
  pb.vertex(0, pbcsh);
  for (let i = 0; i < pbrippedvr.length; i++) {
    pb.vertex(pbrippedvr[i].x, pbrippedvr[i].y);
  }
  pb.vertex(pbcsw, pbcsh);
  pb.endShape(CLOSE);
  pb.noErase();
}

function pcvripleft() {
  let xl = myRandom(pccsw * 0.1, pccsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pcrippedvl = [];
  var pcgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pcripl = createVector(xl, yl);
    pcrippedvl.push(pcripl);
    let pcripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pcripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pcripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pcgonvl = createVector(xl + pcripvxl + pcripvx2l, yl + pcripvyl);
    pcgonevl.push(pcgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pc.fill(features.rcol);
  pc.noStroke();
  pc.beginShape();
  pc.vertex(0, 0);
  for (let i = 0; i < pcrippedvl.length; i++) {
    pc.vertex(pcrippedvl[i].x, pcrippedvl[i].y);
  }
  pc.vertex(0, pccsh);
  pc.endShape(CLOSE);
  pc.erase();
  pc.beginShape();
  pc.vertex(0, 0);
  for (let i = 0; i < pcgonevl.length; i++) {
    pc.vertex(pcgonevl[i].x, pcgonevl[i].y);
  }
  pc.vertex(0, pccsh);
  pc.endShape(CLOSE);
  pc.noErase();
}
function pcvripright() {
  let xr = myRandom(pccsw * 0.5, pccsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pcrippedvr = [];
  var pcgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pcripr = createVector(xr, yr);
    pcrippedvr.push(pcripr);
    let pcripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pcripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pcripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pcgonvr = createVector(xr + pcripvxr + pcripvx2r, yr + pcripvyr);
    pcgonevr.push(pcgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pc.fill(features.rcol);
  pc.noStroke();
  pc.beginShape();
  pc.vertex(pccsw, 0);
  pc.vertex(pcgonevr[0].x, 0);
  for (let i = 0; i < pcgonevr.length; i++) {
    pc.vertex(pcgonevr[i].x, pcgonevr[i].y);
  }
  pc.vertex(pccsw, pccsh);
  pc.endShape(CLOSE);
  pc.erase();
  pc.beginShape();
  pc.vertex(pccsw, 0);
  for (let i = 0; i < pcrippedvr.length; i++) {
    pc.vertex(pcrippedvr[i].x, pcrippedvr[i].y);
  }
  pc.vertex(pccsw, pccsh);
  pc.endShape(CLOSE);
  pc.noErase();
}

function pcvriptop() {
  let xr = 0;
  let yr = myRandom(pccsh * 0.1, pccsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pcrippedvr = [];
  var pcgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pcripr = createVector(xr, yr);
    pcrippedvr.push(pcripr);
    let pcripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pcripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pcripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pcgonvr = createVector(xr + pcripvxr, yr - pcripvy2r);
    pcgonevr.push(pcgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pc.fill(features.rcol);
  pc.noStroke();
  pc.beginShape();
  pc.vertex(0, 0);
  pc.vertex(0, pcgonevr[0].y);
  for (let i = 0; i < pcgonevr.length; i++) {
    pc.vertex(pcgonevr[i].x, pcgonevr[i].y);
  }
  pc.vertex(pccsw, 0);
  pc.endShape(CLOSE);
  pc.erase();
  pc.beginShape();
  pc.vertex(0, 0);
  for (let i = 0; i < pcrippedvr.length; i++) {
    pc.vertex(pcrippedvr[i].x, pcrippedvr[i].y);
  }
  pc.vertex(pccsw, 0);
  pc.endShape(CLOSE);
  pc.noErase();
}
function pcvripbottom() {
  let xr = 0;
  let yr = myRandom(pccsh * 0.5, pccsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pcrippedvr = [];
  var pcgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pcripr = createVector(xr, yr);
    pcrippedvr.push(pcripr);
    let pcripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pcripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pcripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pcgonvr = createVector(xr + pcripvxr, yr - pcripvy2r);
    pcgonevr.push(pcgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pc.fill(features.rcol);
  pc.noStroke();
  pc.beginShape();
  pc.vertex(0, pccsh);
  pc.vertex(0, pcgonevr[0].y);
  for (let i = 0; i < pcgonevr.length; i++) {
    pc.vertex(pcgonevr[i].x, pcgonevr[i].y);
  }
  pc.vertex(pccsw, pccsh);
  pc.endShape(CLOSE);
  pc.erase();
  pc.beginShape();
  pc.vertex(0, pccsh);
  for (let i = 0; i < pcrippedvr.length; i++) {
    pc.vertex(pcrippedvr[i].x, pcrippedvr[i].y);
  }
  pc.vertex(pccsw, pccsh);
  pc.endShape(CLOSE);
  pc.noErase();
}
//start of pd rips
function pdvripleft() {
  let xl = myRandom(pdcsw * 0.1, pdcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pdrippedvl = [];
  var pdgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pdripl = createVector(xl, yl);
    pdrippedvl.push(pdripl);
    let pdripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pdripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pdripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pdgonvl = createVector(xl + pdripvxl + pdripvx2l, yl + pdripvyl);
    pdgonevl.push(pdgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pd.fill(features.rcol);
  pd.noStroke();
  pd.beginShape();
  pd.vertex(0, 0);
  for (let i = 0; i < pdrippedvl.length; i++) {
    pd.vertex(pdrippedvl[i].x, pdrippedvl[i].y);
  }
  pd.vertex(0, pdcsh);
  pd.endShape(CLOSE);
  pd.erase();
  pd.beginShape();
  pd.vertex(0, 0);
  for (let i = 0; i < pdgonevl.length; i++) {
    pd.vertex(pdgonevl[i].x, pdgonevl[i].y);
  }
  pd.vertex(0, pdcsh);
  pd.endShape(CLOSE);
  pd.noErase();
}
function pdvripright() {
  let xr = myRandom(pdcsw * 0.5, pdcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pdrippedvr = [];
  var pdgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pdripr = createVector(xr, yr);
    pdrippedvr.push(pdripr);
    let pdripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pdripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pdripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pdgonvr = createVector(xr + pdripvxr + pdripvx2r, yr + pdripvyr);
    pdgonevr.push(pdgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pd.fill(features.rcol);
  pd.noStroke();
  pd.beginShape();
  pd.vertex(pdcsw, 0);
  pd.vertex(pdgonevr[0].x, 0);
  for (let i = 0; i < pdgonevr.length; i++) {
    pd.vertex(pdgonevr[i].x, pdgonevr[i].y);
  }
  pd.vertex(pdcsw, pdcsh);
  pd.endShape(CLOSE);
  pd.erase();
  pd.beginShape();
  pd.vertex(pdcsw, 0);
  for (let i = 0; i < pdrippedvr.length; i++) {
    pd.vertex(pdrippedvr[i].x, pdrippedvr[i].y);
  }
  pd.vertex(pdcsw, pdcsh);
  pd.endShape(CLOSE);
  pd.noErase();
}

function pdvriptop() {
  let xr = 0;
  let yr = myRandom(pdcsh * 0.1, pdcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pdrippedvr = [];
  var pdgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pdripr = createVector(xr, yr);
    pdrippedvr.push(pdripr);
    let pdripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pdripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pdripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pdgonvr = createVector(xr + pdripvxr, yr - pdripvy2r);
    pdgonevr.push(pdgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pd.fill(features.rcol);
  pd.noStroke();
  pd.beginShape();
  pd.vertex(0, 0);
  pd.vertex(0, pdgonevr[0].y);
  for (let i = 0; i < pdgonevr.length; i++) {
    pd.vertex(pdgonevr[i].x, pdgonevr[i].y);
  }
  pd.vertex(pdcsw, 0);
  pd.endShape(CLOSE);
  pd.erase();
  pd.beginShape();
  pd.vertex(0, 0);
  for (let i = 0; i < pdrippedvr.length; i++) {
    pd.vertex(pdrippedvr[i].x, pdrippedvr[i].y);
  }
  pd.vertex(pdcsw, 0);
  pd.endShape(CLOSE);
  pd.noErase();
}
function pdvripbottom() {
  let xr = 0;
  let yr = myRandom(pdcsh * 0.5, pdcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pdrippedvr = [];
  var pdgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pdripr = createVector(xr, yr);
    pdrippedvr.push(pdripr);
    let pdripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pdripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pdripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pdgonvr = createVector(xr + pdripvxr, yr - pdripvy2r);
    pdgonevr.push(pdgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pd.fill(features.rcol);
  pd.noStroke();
  pd.beginShape();
  pd.vertex(0, pdcsh);
  pd.vertex(0, pdgonevr[0].y);
  for (let i = 0; i < pdgonevr.length; i++) {
    pd.vertex(pdgonevr[i].x, pdgonevr[i].y);
  }
  pd.vertex(pdcsw, pdcsh);
  pd.endShape(CLOSE);
  pd.erase();
  pd.beginShape();
  pd.vertex(0, pdcsh);
  for (let i = 0; i < pdrippedvr.length; i++) {
    pd.vertex(pdrippedvr[i].x, pdrippedvr[i].y);
  }
  pd.vertex(pdcsw, pdcsh);
  pd.endShape(CLOSE);
  pd.noErase();
}
//start of pe rips
function pevripleft() {
  let xl = myRandom(pecsw * 0.1, pecsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var perippedvl = [];
  var pegonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let peripl = createVector(xl, yl);
    perippedvl.push(peripl);
    let peripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let peripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let peripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pegonvl = createVector(xl + peripvxl + peripvx2l, yl + peripvyl);
    pegonevl.push(pegonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pe.fill(features.percol);
  pe.noStroke();
  pe.beginShape();
  pe.vertex(0, 0);
  for (let i = 0; i < perippedvl.length; i++) {
    pe.vertex(perippedvl[i].x, perippedvl[i].y);
  }
  pe.vertex(0, pecsh);
  pe.endShape(CLOSE);
  pe.erase();
  pe.beginShape();
  pe.vertex(0, 0);
  for (let i = 0; i < pegonevl.length; i++) {
    pe.vertex(pegonevl[i].x, pegonevl[i].y);
  }
  pe.vertex(0, pecsh);
  pe.endShape(CLOSE);
  pe.noErase();
}
function pevripright() {
  let xr = myRandom(pecsw * 0.5, pecsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var perippedvr = [];
  var pegonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let peripr = createVector(xr, yr);
    perippedvr.push(peripr);
    let peripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let peripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let peripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pegonvr = createVector(xr + peripvxr + peripvx2r, yr + peripvyr);
    pegonevr.push(pegonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pe.fill(features.percol);
  pe.noStroke();
  pe.beginShape();
  pe.vertex(pecsw, 0);
  pe.vertex(pegonevr[0].x, 0);
  for (let i = 0; i < pegonevr.length; i++) {
    pe.vertex(pegonevr[i].x, pegonevr[i].y);
  }
  pe.vertex(pecsw, pecsh);
  pe.endShape(CLOSE);
  pe.erase();
  pe.beginShape();
  pe.vertex(pecsw, 0);
  for (let i = 0; i < perippedvr.length; i++) {
    pe.vertex(perippedvr[i].x, perippedvr[i].y);
  }
  pe.vertex(pecsw, pecsh);
  pe.endShape(CLOSE);
  pe.noErase();
}

function pevriptop() {
  let xr = 0;
  let yr = myRandom(pecsh * 0.1, pecsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var perippedvr = [];
  var pegonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let peripr = createVector(xr, yr);
    perippedvr.push(peripr);
    let peripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let peripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let peripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pegonvr = createVector(xr + peripvxr, yr - peripvy2r);
    pegonevr.push(pegonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pe.fill(features.percol);
  pe.noStroke();
  pe.beginShape();
  pe.vertex(0, 0);
  pe.vertex(0, pegonevr[0].y);
  for (let i = 0; i < pegonevr.length; i++) {
    pe.vertex(pegonevr[i].x, pegonevr[i].y);
  }
  pe.vertex(pecsw, 0);
  pe.endShape(CLOSE);
  pe.erase();
  pe.beginShape();
  pe.vertex(0, 0);
  for (let i = 0; i < perippedvr.length; i++) {
    pe.vertex(perippedvr[i].x, perippedvr[i].y);
  }
  pe.vertex(pecsw, 0);
  pe.endShape(CLOSE);
  pe.noErase();
}
function pevripbottom() {
  let xr = 0;
  let yr = myRandom(pecsh * 0.5, pecsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var perippedvr = [];
  var pegonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let peripr = createVector(xr, yr);
    perippedvr.push(peripr);
    let peripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let peripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let peripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pegonvr = createVector(xr + peripvxr, yr - peripvy2r);
    pegonevr.push(pegonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pe.fill(features.percol);
  pe.noStroke();
  pe.beginShape();
  pe.vertex(0, pecsh);
  pe.vertex(0, pegonevr[0].y);
  for (let i = 0; i < pegonevr.length; i++) {
    pe.vertex(pegonevr[i].x, pegonevr[i].y);
  }
  pe.vertex(pecsw, pecsh);
  pe.endShape(CLOSE);
  pe.erase();
  pe.beginShape();
  pe.vertex(0, pecsh);
  for (let i = 0; i < perippedvr.length; i++) {
    pe.vertex(perippedvr[i].x, perippedvr[i].y);
  }
  pe.vertex(pecsw, pecsh);
  pe.endShape(CLOSE);
  pe.noErase();
}
//start of pf rips
function pfvripleft() {
  let xl = myRandom(pfcsw * 0.1, pfcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pfrippedvl = [];
  var pfgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pfripl = createVector(xl, yl);
    pfrippedvl.push(pfripl);
    let pfripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pfripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pfripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pfgonvl = createVector(xl + pfripvxl + pfripvx2l, yl + pfripvyl);
    pfgonevl.push(pfgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pf.fill(features.rcol);
  pf.noStroke();
  pf.beginShape();
  pf.vertex(0, 0);
  for (let i = 0; i < pfrippedvl.length; i++) {
    pf.vertex(pfrippedvl[i].x, pfrippedvl[i].y);
  }
  pf.vertex(0, pfcsh);
  pf.endShape(CLOSE);
  pf.erase();
  pf.beginShape();
  pf.vertex(0, 0);
  for (let i = 0; i < pfgonevl.length; i++) {
    pf.vertex(pfgonevl[i].x, pfgonevl[i].y);
  }
  pf.vertex(0, pfcsh);
  pf.endShape(CLOSE);
  pf.noErase();
}
function pfvripright() {
  let xr = myRandom(pfcsw * 0.5, pfcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pfrippedvr = [];
  var pfgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pfripr = createVector(xr, yr);
    pfrippedvr.push(pfripr);
    let pfripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pfripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pfripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pfgonvr = createVector(xr + pfripvxr + pfripvx2r, yr + pfripvyr);
    pfgonevr.push(pfgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pf.fill(features.rcol);
  pf.noStroke();
  pf.beginShape();
  pf.vertex(pfcsw, 0);
  pf.vertex(pfgonevr[0].x, 0);
  for (let i = 0; i < pfgonevr.length; i++) {
    pf.vertex(pfgonevr[i].x, pfgonevr[i].y);
  }
  pf.vertex(pfcsw, pfcsh);
  pf.endShape(CLOSE);
  pf.erase();
  pf.beginShape();
  pf.vertex(pfcsw, 0);
  for (let i = 0; i < pfrippedvr.length; i++) {
    pf.vertex(pfrippedvr[i].x, pfrippedvr[i].y);
  }
  pf.vertex(pfcsw, pfcsh);
  pf.endShape(CLOSE);
  pf.noErase();
}

function pfvriptop() {
  let xr = 0;
  let yr = myRandom(pfcsh * 0.1, pfcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pfrippedvr = [];
  var pfgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pfripr = createVector(xr, yr);
    pfrippedvr.push(pfripr);
    let pfripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pfripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pfripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pfgonvr = createVector(xr + pfripvxr, yr - pfripvy2r);
    pfgonevr.push(pfgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pf.fill(features.rcol);
  pf.noStroke();
  pf.beginShape();
  pf.vertex(0, 0);
  pf.vertex(0, pfgonevr[0].y);
  for (let i = 0; i < pfgonevr.length; i++) {
    pf.vertex(pfgonevr[i].x, pfgonevr[i].y);
  }
  pf.vertex(pfcsw, 0);
  pf.endShape(CLOSE);
  pf.erase();
  pf.beginShape();
  pf.vertex(0, 0);
  for (let i = 0; i < pfrippedvr.length; i++) {
    pf.vertex(pfrippedvr[i].x, pfrippedvr[i].y);
  }
  pf.vertex(pfcsw, 0);
  pf.endShape(CLOSE);
  pf.noErase();
}
function pfvripbottom() {
  let xr = 0;
  let yr = myRandom(pfcsh * 0.5, pfcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pfrippedvr = [];
  var pfgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pfripr = createVector(xr, yr);
    pfrippedvr.push(pfripr);
    let pfripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pfripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pfripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pfgonvr = createVector(xr + pfripvxr, yr - pfripvy2r);
    pfgonevr.push(pfgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pf.fill(features.rcol);
  pf.noStroke();
  pf.beginShape();
  pf.vertex(0, pfcsh);
  pf.vertex(0, pfgonevr[0].y);
  for (let i = 0; i < pfgonevr.length; i++) {
    pf.vertex(pfgonevr[i].x, pfgonevr[i].y);
  }
  pf.vertex(pfcsw, pfcsh);
  pf.endShape(CLOSE);
  pf.erase();
  pf.beginShape();
  pf.vertex(0, pfcsh);
  for (let i = 0; i < pfrippedvr.length; i++) {
    pf.vertex(pfrippedvr[i].x, pfrippedvr[i].y);
  }
  pf.vertex(pfcsw, pfcsh);
  pf.endShape(CLOSE);
  pf.noErase();
}
//start of pg rips
function pgvripleft() {
  let xl = myRandom(pgcsw * 0.1, pgcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pgrippedvl = [];
  var pggonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pgripl = createVector(xl, yl);
    pgrippedvl.push(pgripl);
    let pgripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pgripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pgripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pggonvl = createVector(xl + pgripvxl + pgripvx2l, yl + pgripvyl);
    pggonevl.push(pggonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pg.fill(features.rcol);
  pg.noStroke();
  pg.beginShape();
  pg.vertex(0, 0);
  for (let i = 0; i < pgrippedvl.length; i++) {
    pg.vertex(pgrippedvl[i].x, pgrippedvl[i].y);
  }
  pg.vertex(0, pgcsh);
  pg.endShape(CLOSE);
  pg.erase();
  pg.beginShape();
  pg.vertex(0, 0);
  for (let i = 0; i < pggonevl.length; i++) {
    pg.vertex(pggonevl[i].x, pggonevl[i].y);
  }
  pg.vertex(0, pgcsh);
  pg.endShape(CLOSE);
  pg.noErase();
}
function pgvripright() {
  let xr = myRandom(pgcsw * 0.5, pgcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pgrippedvr = [];
  var pggonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pgripr = createVector(xr, yr);
    pgrippedvr.push(pgripr);
    let pgripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pgripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pgripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pggonvr = createVector(xr + pgripvxr + pgripvx2r, yr + pgripvyr);
    pggonevr.push(pggonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pg.fill(features.rcol);
  pg.noStroke();
  pg.beginShape();
  pg.vertex(pgcsw, 0);
  pg.vertex(pggonevr[0].x, 0);
  for (let i = 0; i < pggonevr.length; i++) {
    pg.vertex(pggonevr[i].x, pggonevr[i].y);
  }
  pg.vertex(pgcsw, pgcsh);
  pg.endShape(CLOSE);
  pg.erase();
  pg.beginShape();
  pg.vertex(pgcsw, 0);
  for (let i = 0; i < pgrippedvr.length; i++) {
    pg.vertex(pgrippedvr[i].x, pgrippedvr[i].y);
  }
  pg.vertex(pgcsw, pgcsh);
  pg.endShape(CLOSE);
  pg.noErase();
}

function pgvriptop() {
  let xr = 0;
  let yr = myRandom(pgcsh * 0.1, pgcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pgrippedvr = [];
  var pggonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pgripr = createVector(xr, yr);
    pgrippedvr.push(pgripr);
    let pgripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pgripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pgripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pggonvr = createVector(xr + pgripvxr, yr - pgripvy2r);
    pggonevr.push(pggonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pg.fill(features.rcol);
  pg.noStroke();
  pg.beginShape();
  pg.vertex(0, 0);
  pg.vertex(0, pggonevr[0].y);
  for (let i = 0; i < pggonevr.length; i++) {
    pg.vertex(pggonevr[i].x, pggonevr[i].y);
  }
  pg.vertex(pgcsw, 0);
  pg.endShape(CLOSE);
  pg.erase();
  pg.beginShape();
  pg.vertex(0, 0);
  for (let i = 0; i < pgrippedvr.length; i++) {
    pg.vertex(pgrippedvr[i].x, pgrippedvr[i].y);
  }
  pg.vertex(pgcsw, 0);
  pg.endShape(CLOSE);
  pg.noErase();
}
function pgvripbottom() {
  let xr = 0;
  let yr = myRandom(pgcsh * 0.5, pgcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pgrippedvr = [];
  var pggonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pgripr = createVector(xr, yr);
    pgrippedvr.push(pgripr);
    let pgripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pgripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pgripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pggonvr = createVector(xr + pgripvxr, yr - pgripvy2r);
    pggonevr.push(pggonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pg.fill(features.rcol);
  pg.noStroke();
  pg.beginShape();
  pg.vertex(0, pgcsh);
  pg.vertex(0, pggonevr[0].y);
  for (let i = 0; i < pggonevr.length; i++) {
    pg.vertex(pggonevr[i].x, pggonevr[i].y);
  }
  pg.vertex(pgcsw, pgcsh);
  pg.endShape(CLOSE);
  pg.erase();
  pg.beginShape();
  pg.vertex(0, pgcsh);
  for (let i = 0; i < pgrippedvr.length; i++) {
    pg.vertex(pgrippedvr[i].x, pgrippedvr[i].y);
  }
  pg.vertex(pgcsw, pgcsh);
  pg.endShape(CLOSE);
  pg.noErase();
}
//start of ph rips
function phvripleft() {
  let xl = myRandom(phcsw * 0.1, phcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var phrippedvl = [];
  var phgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let phripl = createVector(xl, yl);
    phrippedvl.push(phripl);
    let phripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let phripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let phripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let phgonvl = createVector(xl + phripvxl + phripvx2l, yl + phripvyl);
    phgonevl.push(phgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  ph.fill(features.rcol);
  ph.noStroke();
  ph.beginShape();
  ph.vertex(0, 0);
  for (let i = 0; i < phrippedvl.length; i++) {
    ph.vertex(phrippedvl[i].x, phrippedvl[i].y);
  }
  ph.vertex(0, phcsh);
  ph.endShape(CLOSE);
  ph.erase();
  ph.beginShape();
  ph.vertex(0, 0);
  for (let i = 0; i < phgonevl.length; i++) {
    ph.vertex(phgonevl[i].x, phgonevl[i].y);
  }
  ph.vertex(0, phcsh);
  ph.endShape(CLOSE);
  ph.noErase();
}
function phvripright() {
  let xr = myRandom(phcsw * 0.5, phcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var phrippedvr = [];
  var phgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let phripr = createVector(xr, yr);
    phrippedvr.push(phripr);
    let phripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let phripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let phripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let phgonvr = createVector(xr + phripvxr + phripvx2r, yr + phripvyr);
    phgonevr.push(phgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  ph.fill(features.rcol);
  ph.noStroke();
  ph.beginShape();
  ph.vertex(phcsw, 0);
  ph.vertex(phgonevr[0].x, 0);
  for (let i = 0; i < phgonevr.length; i++) {
    ph.vertex(phgonevr[i].x, phgonevr[i].y);
  }
  ph.vertex(phcsw, phcsh);
  ph.endShape(CLOSE);
  ph.erase();
  ph.beginShape();
  ph.vertex(phcsw, 0);
  for (let i = 0; i < phrippedvr.length; i++) {
    ph.vertex(phrippedvr[i].x, phrippedvr[i].y);
  }
  ph.vertex(phcsw, phcsh);
  ph.endShape(CLOSE);
  ph.noErase();
}

function phvriptop() {
  let xr = 0;
  let yr = myRandom(phcsh * 0.1, phcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var phrippedvr = [];
  var phgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let phripr = createVector(xr, yr);
    phrippedvr.push(phripr);
    let phripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let phripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let phripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let phgonvr = createVector(xr + phripvxr, yr - phripvy2r);
    phgonevr.push(phgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  ph.fill(features.rcol);
  ph.noStroke();
  ph.beginShape();
  ph.vertex(0, 0);
  ph.vertex(0, phgonevr[0].y);
  for (let i = 0; i < phgonevr.length; i++) {
    ph.vertex(phgonevr[i].x, phgonevr[i].y);
  }
  ph.vertex(phcsw, 0);
  ph.endShape(CLOSE);
  ph.erase();
  ph.beginShape();
  ph.vertex(0, 0);
  for (let i = 0; i < phrippedvr.length; i++) {
    ph.vertex(phrippedvr[i].x, phrippedvr[i].y);
  }
  ph.vertex(phcsw, 0);
  ph.endShape(CLOSE);
  ph.noErase();
}
function phvripbottom() {
  let xr = 0;
  let yr = myRandom(phcsh * 0.5, phcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var phrippedvr = [];
  var phgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let phripr = createVector(xr, yr);
    phrippedvr.push(phripr);
    let phripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let phripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let phripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let phgonvr = createVector(xr + phripvxr, yr - phripvy2r);
    phgonevr.push(phgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  ph.fill(features.rcol);
  ph.noStroke();
  ph.beginShape();
  ph.vertex(0, phcsh);
  ph.vertex(0, phgonevr[0].y);
  for (let i = 0; i < phgonevr.length; i++) {
    ph.vertex(phgonevr[i].x, phgonevr[i].y);
  }
  ph.vertex(phcsw, phcsh);
  ph.endShape(CLOSE);
  ph.erase();
  ph.beginShape();
  ph.vertex(0, phcsh);
  for (let i = 0; i < phrippedvr.length; i++) {
    ph.vertex(phrippedvr[i].x, phrippedvr[i].y);
  }
  ph.vertex(phcsw, phcsh);
  ph.endShape(CLOSE);
  ph.noErase();
}
//start of pi rips
function pivripleft() {
  let xl = myRandom(picsw * 0.1, picsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pirippedvl = [];
  var pigonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let piripl = createVector(xl, yl);
    pirippedvl.push(piripl);
    let piripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let piripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let piripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pigonvl = createVector(xl + piripvxl + piripvx2l, yl + piripvyl);
    pigonevl.push(pigonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pi.fill(features.rcol);
  pi.noStroke();
  pi.beginShape();
  pi.vertex(0, 0);
  for (let i = 0; i < pirippedvl.length; i++) {
    pi.vertex(pirippedvl[i].x, pirippedvl[i].y);
  }
  pi.vertex(0, picsh);
  pi.endShape(CLOSE);
  pi.erase();
  pi.beginShape();
  pi.vertex(0, 0);
  for (let i = 0; i < pigonevl.length; i++) {
    pi.vertex(pigonevl[i].x, pigonevl[i].y);
  }
  pi.vertex(0, picsh);
  pi.endShape(CLOSE);
  pi.noErase();
}
function pivripright() {
  let xr = myRandom(picsw * 0.5, picsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pirippedvr = [];
  var pigonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let piripr = createVector(xr, yr);
    pirippedvr.push(piripr);
    let piripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let piripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let piripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pigonvr = createVector(xr + piripvxr + piripvx2r, yr + piripvyr);
    pigonevr.push(pigonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pi.fill(features.rcol);
  pi.noStroke();
  pi.beginShape();
  pi.vertex(picsw, 0);
  pi.vertex(pigonevr[0].x, 0);
  for (let i = 0; i < pigonevr.length; i++) {
    pi.vertex(pigonevr[i].x, pigonevr[i].y);
  }
  pi.vertex(picsw, picsh);
  pi.endShape(CLOSE);
  pi.erase();
  pi.beginShape();
  pi.vertex(picsw, 0);
  for (let i = 0; i < pirippedvr.length; i++) {
    pi.vertex(pirippedvr[i].x, pirippedvr[i].y);
  }
  pi.vertex(picsw, picsh);
  pi.endShape(CLOSE);
  pi.noErase();
}

function pivriptop() {
  let xr = 0;
  let yr = myRandom(picsh * 0.1, picsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pirippedvr = [];
  var pigonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let piripr = createVector(xr, yr);
    pirippedvr.push(piripr);
    let piripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let piripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let piripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pigonvr = createVector(xr + piripvxr, yr - piripvy2r);
    pigonevr.push(pigonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pi.fill(features.rcol);
  pi.noStroke();
  pi.beginShape();
  pi.vertex(0, 0);
  pi.vertex(0, pigonevr[0].y);
  for (let i = 0; i < pigonevr.length; i++) {
    pi.vertex(pigonevr[i].x, pigonevr[i].y);
  }
  pi.vertex(picsw, 0);
  pi.endShape(CLOSE);
  pi.erase();
  pi.beginShape();
  pi.vertex(0, 0);
  for (let i = 0; i < pirippedvr.length; i++) {
    pi.vertex(pirippedvr[i].x, pirippedvr[i].y);
  }
  pi.vertex(picsw, 0);
  pi.endShape(CLOSE);
  pi.noErase();
}
function pivripbottom() {
  let xr = 0;
  let yr = myRandom(picsh * 0.5, picsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pirippedvr = [];
  var pigonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let piripr = createVector(xr, yr);
    pirippedvr.push(piripr);
    let piripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let piripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let piripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pigonvr = createVector(xr + piripvxr, yr - piripvy2r);
    pigonevr.push(pigonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pi.fill(features.rcol);
  pi.noStroke();
  pi.beginShape();
  pi.vertex(0, picsh);
  pi.vertex(0, pigonevr[0].y);
  for (let i = 0; i < pigonevr.length; i++) {
    pi.vertex(pigonevr[i].x, pigonevr[i].y);
  }
  pi.vertex(picsw, picsh);
  pi.endShape(CLOSE);
  pi.erase();
  pi.beginShape();
  pi.vertex(0, picsh);
  for (let i = 0; i < pirippedvr.length; i++) {
    pi.vertex(pirippedvr[i].x, pirippedvr[i].y);
  }
  pi.vertex(picsw, picsh);
  pi.endShape(CLOSE);
  pi.noErase();
}

//start of pj rips
function pjvripleft() {
  let xl = myRandom(pjcsw * 0.1, pjcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pjrippedvl = [];
  var pjgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pjripl = createVector(xl, yl);
    pjrippedvl.push(pjripl);
    let pjripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pjripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pjripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pjgonvl = createVector(xl + pjripvxl + pjripvx2l, yl + pjripvyl);
    pjgonevl.push(pjgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pj.fill(features.rcol);
  pj.noStroke();
  pj.beginShape();
  pj.vertex(0, 0);
  for (let i = 0; i < pjrippedvl.length; i++) {
    pj.vertex(pjrippedvl[i].x, pjrippedvl[i].y);
  }
  pj.vertex(0, pjcsh);
  pj.endShape(CLOSE);
  pj.erase();
  pj.beginShape();
  pj.vertex(0, 0);
  for (let i = 0; i < pjgonevl.length; i++) {
    pj.vertex(pjgonevl[i].x, pjgonevl[i].y);
  }
  pj.vertex(0, pjcsh);
  pj.endShape(CLOSE);
  pj.noErase();
}
function pjvripright() {
  let xr = myRandom(pjcsw * 0.5, pjcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pjrippedvr = [];
  var pjgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pjripr = createVector(xr, yr);
    pjrippedvr.push(pjripr);
    let pjripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pjripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pjripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pjgonvr = createVector(xr + pjripvxr + pjripvx2r, yr + pjripvyr);
    pjgonevr.push(pjgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pj.fill(features.rcol);
  pj.noStroke();
  pj.beginShape();
  pj.vertex(pjcsw, 0);
  pj.vertex(pjgonevr[0].x, 0);
  for (let i = 0; i < pjgonevr.length; i++) {
    pj.vertex(pjgonevr[i].x, pjgonevr[i].y);
  }
  pj.vertex(pjcsw, pjcsh);
  pj.endShape(CLOSE);
  pj.erase();
  pj.beginShape();
  pj.vertex(pjcsw, 0);
  for (let i = 0; i < pjrippedvr.length; i++) {
    pj.vertex(pjrippedvr[i].x, pjrippedvr[i].y);
  }
  pj.vertex(pjcsw, pjcsh);
  pj.endShape(CLOSE);
  pj.noErase();
}

function pjvriptop() {
  let xr = 0;
  let yr = myRandom(pjcsh * 0.1, pjcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pjrippedvr = [];
  var pjgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pjripr = createVector(xr, yr);
    pjrippedvr.push(pjripr);
    let pjripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pjripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pjripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pjgonvr = createVector(xr + pjripvxr, yr - pjripvy2r);
    pjgonevr.push(pjgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pj.fill(features.rcol);
  pj.noStroke();
  pj.beginShape();
  pj.vertex(0, 0);
  pj.vertex(0, pjgonevr[0].y);
  for (let i = 0; i < pjgonevr.length; i++) {
    pj.vertex(pjgonevr[i].x, pjgonevr[i].y);
  }
  pj.vertex(pjcsw, 0);
  pj.endShape(CLOSE);
  pj.erase();
  pj.beginShape();
  pj.vertex(0, 0);
  for (let i = 0; i < pjrippedvr.length; i++) {
    pj.vertex(pjrippedvr[i].x, pjrippedvr[i].y);
  }
  pj.vertex(pjcsw, 0);
  pj.endShape(CLOSE);
  pj.noErase();
}
function pjvripbottom() {
  let xr = 0;
  let yr = myRandom(pjcsh * 0.5, pjcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pjrippedvr = [];
  var pjgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pjripr = createVector(xr, yr);
    pjrippedvr.push(pjripr);
    let pjripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pjripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pjripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pjgonvr = createVector(xr + pjripvxr, yr - pjripvy2r);
    pjgonevr.push(pjgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pj.fill(features.rcol);
  pj.noStroke();
  pj.beginShape();
  pj.vertex(0, pjcsh);
  pj.vertex(0, pjgonevr[0].y);
  for (let i = 0; i < pjgonevr.length; i++) {
    pj.vertex(pjgonevr[i].x, pjgonevr[i].y);
  }
  pj.vertex(pjcsw, pjcsh);
  pj.endShape(CLOSE);
  pj.erase();
  pj.beginShape();
  pj.vertex(0, pjcsh);
  for (let i = 0; i < pjrippedvr.length; i++) {
    pj.vertex(pjrippedvr[i].x, pjrippedvr[i].y);
  }
  pj.vertex(pjcsw, pjcsh);
  pj.endShape(CLOSE);
  pj.noErase();
}

//start of pk rips
function pkvripleft() {
  let xl = myRandom(pkcsw * 0.1, pkcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pkrippedvl = [];
  var pkgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pkripl = createVector(xl, yl);
    pkrippedvl.push(pkripl);
    let pkripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pkripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pkripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pkgonvl = createVector(xl + pkripvxl + pkripvx2l, yl + pkripvyl);
    pkgonevl.push(pkgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pk.fill(features.rcol);
  pk.noStroke();
  pk.beginShape();
  pk.vertex(0, 0);
  for (let i = 0; i < pkrippedvl.length; i++) {
    pk.vertex(pkrippedvl[i].x, pkrippedvl[i].y);
  }
  pk.vertex(0, pkcsh);
  pk.endShape(CLOSE);
  pk.erase();
  pk.beginShape();
  pk.vertex(0, 0);
  for (let i = 0; i < pkgonevl.length; i++) {
    pk.vertex(pkgonevl[i].x, pkgonevl[i].y);
  }
  pk.vertex(0, pkcsh);
  pk.endShape(CLOSE);
  pk.noErase();
}
function pkvripright() {
  let xr = myRandom(pkcsw * 0.5, pkcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pkrippedvr = [];
  var pkgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pkripr = createVector(xr, yr);
    pkrippedvr.push(pkripr);
    let pkripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pkripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pkripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pkgonvr = createVector(xr + pkripvxr + pkripvx2r, yr + pkripvyr);
    pkgonevr.push(pkgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pk.fill(features.rcol);
  pk.noStroke();
  pk.beginShape();
  pk.vertex(pkcsw, 0);
  pk.vertex(pkgonevr[0].x, 0);
  for (let i = 0; i < pkgonevr.length; i++) {
    pk.vertex(pkgonevr[i].x, pkgonevr[i].y);
  }
  pk.vertex(pkcsw, pkcsh);
  pk.endShape(CLOSE);
  pk.erase();
  pk.beginShape();
  pk.vertex(pkcsw, 0);
  for (let i = 0; i < pkrippedvr.length; i++) {
    pk.vertex(pkrippedvr[i].x, pkrippedvr[i].y);
  }
  pk.vertex(pkcsw, pkcsh);
  pk.endShape(CLOSE);
  pk.noErase();
}

function pkvriptop() {
  let xr = 0;
  let yr = myRandom(pkcsh * 0.1, pkcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pkrippedvr = [];
  var pkgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pkripr = createVector(xr, yr);
    pkrippedvr.push(pkripr);
    let pkripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pkripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pkripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pkgonvr = createVector(xr + pkripvxr, yr - pkripvy2r);
    pkgonevr.push(pkgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pk.fill(features.rcol);
  pk.noStroke();
  pk.beginShape();
  pk.vertex(0, 0);
  pk.vertex(0, pkgonevr[0].y);
  for (let i = 0; i < pkgonevr.length; i++) {
    pk.vertex(pkgonevr[i].x, pkgonevr[i].y);
  }
  pk.vertex(pkcsw, 0);
  pk.endShape(CLOSE);
  pk.erase();
  pk.beginShape();
  pk.vertex(0, 0);
  for (let i = 0; i < pkrippedvr.length; i++) {
    pk.vertex(pkrippedvr[i].x, pkrippedvr[i].y);
  }
  pk.vertex(pkcsw, 0);
  pk.endShape(CLOSE);
  pk.noErase();
}
function pkvripbottom() {
  let xr = 0;
  let yr = myRandom(pkcsh * 0.5, pkcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pkrippedvr = [];
  var pkgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pkripr = createVector(xr, yr);
    pkrippedvr.push(pkripr);
    let pkripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pkripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pkripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pkgonvr = createVector(xr + pkripvxr, yr - pkripvy2r);
    pkgonevr.push(pkgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pk.fill(features.rcol);
  pk.noStroke();
  pk.beginShape();
  pk.vertex(0, pkcsh);
  pk.vertex(0, pkgonevr[0].y);
  for (let i = 0; i < pkgonevr.length; i++) {
    pk.vertex(pkgonevr[i].x, pkgonevr[i].y);
  }
  pk.vertex(pkcsw, pkcsh);
  pk.endShape(CLOSE);
  pk.erase();
  pk.beginShape();
  pk.vertex(0, pkcsh);
  for (let i = 0; i < pkrippedvr.length; i++) {
    pk.vertex(pkrippedvr[i].x, pkrippedvr[i].y);
  }
  pk.vertex(pkcsw, pkcsh);
  pk.endShape(CLOSE);
  pk.noErase();
}
//start of pl rips
function plvripleft() {
  let xl = myRandom(plcsw * 0.1, plcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var plrippedvl = [];
  var plgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let plripl = createVector(xl, yl);
    plrippedvl.push(plripl);
    let plripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let plripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let plripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let plgonvl = createVector(xl + plripvxl + plripvx2l, yl + plripvyl);
    plgonevl.push(plgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pl.fill(features.rcol);
  pl.noStroke();
  pl.beginShape();
  pl.vertex(0, 0);
  for (let i = 0; i < plrippedvl.length; i++) {
    pl.vertex(plrippedvl[i].x, plrippedvl[i].y);
  }
  pl.vertex(0, plcsh);
  pl.endShape(CLOSE);
  pl.erase();
  pl.beginShape();
  pl.vertex(0, 0);
  for (let i = 0; i < plgonevl.length; i++) {
    pl.vertex(plgonevl[i].x, plgonevl[i].y);
  }
  pl.vertex(0, plcsh);
  pl.endShape(CLOSE);
  pl.noErase();
}
function plvripright() {
  let xr = myRandom(plcsw * 0.5, plcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var plrippedvr = [];
  var plgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let plripr = createVector(xr, yr);
    plrippedvr.push(plripr);
    let plripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let plripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let plripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let plgonvr = createVector(xr + plripvxr + plripvx2r, yr + plripvyr);
    plgonevr.push(plgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pl.fill(features.rcol);
  pl.noStroke();
  pl.beginShape();
  pl.vertex(plcsw, 0);
  pl.vertex(plgonevr[0].x, 0);
  for (let i = 0; i < plgonevr.length; i++) {
    pl.vertex(plgonevr[i].x, plgonevr[i].y);
  }
  pl.vertex(plcsw, plcsh);
  pl.endShape(CLOSE);
  pl.erase();
  pl.beginShape();
  pl.vertex(plcsw, 0);
  for (let i = 0; i < plrippedvr.length; i++) {
    pl.vertex(plrippedvr[i].x, plrippedvr[i].y);
  }
  pl.vertex(plcsw, plcsh);
  pl.endShape(CLOSE);
  pl.noErase();
}

function plvriptop() {
  let xr = 0;
  let yr = myRandom(plcsh * 0.1, plcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var plrippedvr = [];
  var plgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let plripr = createVector(xr, yr);
    plrippedvr.push(plripr);
    let plripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let plripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let plripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let plgonvr = createVector(xr + plripvxr, yr - plripvy2r);
    plgonevr.push(plgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pl.fill(features.rcol);
  pl.noStroke();
  pl.beginShape();
  pl.vertex(0, 0);
  pl.vertex(0, plgonevr[0].y);
  for (let i = 0; i < plgonevr.length; i++) {
    pl.vertex(plgonevr[i].x, plgonevr[i].y);
  }
  pl.vertex(plcsw, 0);
  pl.endShape(CLOSE);
  pl.erase();
  pl.beginShape();
  pl.vertex(0, 0);
  for (let i = 0; i < plrippedvr.length; i++) {
    pl.vertex(plrippedvr[i].x, plrippedvr[i].y);
  }
  pl.vertex(plcsw, 0);
  pl.endShape(CLOSE);
  pl.noErase();
}
function plvripbottom() {
  let xr = 0;
  let yr = myRandom(plcsh * 0.5, plcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var plrippedvr = [];
  var plgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let plripr = createVector(xr, yr);
    plrippedvr.push(plripr);
    let plripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let plripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let plripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let plgonvr = createVector(xr + plripvxr, yr - plripvy2r);
    plgonevr.push(plgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pl.fill(features.rcol);
  pl.noStroke();
  pl.beginShape();
  pl.vertex(0, plcsh);
  pl.vertex(0, plgonevr[0].y);
  for (let i = 0; i < plgonevr.length; i++) {
    pl.vertex(plgonevr[i].x, plgonevr[i].y);
  }
  pl.vertex(plcsw, plcsh);
  pl.endShape(CLOSE);
  pl.erase();
  pl.beginShape();
  pl.vertex(0, plcsh);
  for (let i = 0; i < plrippedvr.length; i++) {
    pl.vertex(plrippedvr[i].x, plrippedvr[i].y);
  }
  pl.vertex(plcsw, plcsh);
  pl.endShape(CLOSE);
  pl.noErase();
}
//start of pm rips
function pmvripleft() {
  let xl = myRandom(pmcsw * 0.1, pmcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pmrippedvl = [];
  var pmgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pmripl = createVector(xl, yl);
    pmrippedvl.push(pmripl);
    let pmripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pmripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pmripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pmgonvl = createVector(xl + pmripvxl + pmripvx2l, yl + pmripvyl);
    pmgonevl.push(pmgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pm.fill(features.rcol);
  pm.noStroke();
  pm.beginShape();
  pm.vertex(0, 0);
  for (let i = 0; i < pmrippedvl.length; i++) {
    pm.vertex(pmrippedvl[i].x, pmrippedvl[i].y);
  }
  pm.vertex(0, pmcsh);
  pm.endShape(CLOSE);
  pm.erase();
  pm.beginShape();
  pm.vertex(0, 0);
  for (let i = 0; i < pmgonevl.length; i++) {
    pm.vertex(pmgonevl[i].x, pmgonevl[i].y);
  }
  pm.vertex(0, pmcsh);
  pm.endShape(CLOSE);
  pm.noErase();
}
function pmvripright() {
  let xr = myRandom(pmcsw * 0.5, pmcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pmrippedvr = [];
  var pmgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pmripr = createVector(xr, yr);
    pmrippedvr.push(pmripr);
    let pmripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pmripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pmripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pmgonvr = createVector(xr + pmripvxr + pmripvx2r, yr + pmripvyr);
    pmgonevr.push(pmgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pm.fill(features.rcol);
  pm.noStroke();
  pm.beginShape();
  pm.vertex(pmcsw, 0);
  pm.vertex(pmgonevr[0].x, 0);
  for (let i = 0; i < pmgonevr.length; i++) {
    pm.vertex(pmgonevr[i].x, pmgonevr[i].y);
  }
  pm.vertex(pmcsw, pmcsh);
  pm.endShape(CLOSE);
  pm.erase();
  pm.beginShape();
  pm.vertex(pmcsw, 0);
  for (let i = 0; i < pmrippedvr.length; i++) {
    pm.vertex(pmrippedvr[i].x, pmrippedvr[i].y);
  }
  pm.vertex(pmcsw, pmcsh);
  pm.endShape(CLOSE);
  pm.noErase();
}

function pmvriptop() {
  let xr = 0;
  let yr = myRandom(pmcsh * 0.1, pmcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pmrippedvr = [];
  var pmgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pmripr = createVector(xr, yr);
    pmrippedvr.push(pmripr);
    let pmripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pmripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pmripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pmgonvr = createVector(xr + pmripvxr, yr - pmripvy2r);
    pmgonevr.push(pmgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pm.fill(features.rcol);
  pm.noStroke();
  pm.beginShape();
  pm.vertex(0, 0);
  pm.vertex(0, pmgonevr[0].y);
  for (let i = 0; i < pmgonevr.length; i++) {
    pm.vertex(pmgonevr[i].x, pmgonevr[i].y);
  }
  pm.vertex(pmcsw, 0);
  pm.endShape(CLOSE);
  pm.erase();
  pm.beginShape();
  pm.vertex(0, 0);
  for (let i = 0; i < pmrippedvr.length; i++) {
    pm.vertex(pmrippedvr[i].x, pmrippedvr[i].y);
  }
  pm.vertex(pmcsw, 0);
  pm.endShape(CLOSE);
  pm.noErase();
}
function pmvripbottom() {
  let xr = 0;
  let yr = myRandom(pmcsh * 0.5, pmcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pmrippedvr = [];
  var pmgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pmripr = createVector(xr, yr);
    pmrippedvr.push(pmripr);
    let pmripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pmripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pmripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pmgonvr = createVector(xr + pmripvxr, yr - pmripvy2r);
    pmgonevr.push(pmgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pm.fill(features.rcol);
  pm.noStroke();
  pm.beginShape();
  pm.vertex(0, pmcsh);
  pm.vertex(0, pmgonevr[0].y);
  for (let i = 0; i < pmgonevr.length; i++) {
    pm.vertex(pmgonevr[i].x, pmgonevr[i].y);
  }
  pm.vertex(pmcsw, pmcsh);
  pm.endShape(CLOSE);
  pm.erase();
  pm.beginShape();
  pm.vertex(0, pmcsh);
  for (let i = 0; i < pmrippedvr.length; i++) {
    pm.vertex(pmrippedvr[i].x, pmrippedvr[i].y);
  }
  pm.vertex(pmcsw, pmcsh);
  pm.endShape(CLOSE);
  pm.noErase();
}
//start of pn rips
function pnvripleft() {
  let xl = myRandom(pncsw * 0.1, pncsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pnrippedvl = [];
  var pngonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pnripl = createVector(xl, yl);
    pnrippedvl.push(pnripl);
    let pnripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pnripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pnripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pngonvl = createVector(xl + pnripvxl + pnripvx2l, yl + pnripvyl);
    pngonevl.push(pngonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pn.fill(features.rcol);
  pn.noStroke();
  pn.beginShape();
  pn.vertex(0, 0);
  for (let i = 0; i < pnrippedvl.length; i++) {
    pn.vertex(pnrippedvl[i].x, pnrippedvl[i].y);
  }
  pn.vertex(0, pncsh);
  pn.endShape(CLOSE);
  pn.erase();
  pn.beginShape();
  pn.vertex(0, 0);
  for (let i = 0; i < pngonevl.length; i++) {
    pn.vertex(pngonevl[i].x, pngonevl[i].y);
  }
  pn.vertex(0, pncsh);
  pn.endShape(CLOSE);
  pn.noErase();
}
function pnvripright() {
  let xr = myRandom(pncsw * 0.5, pncsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pnrippedvr = [];
  var pngonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pnripr = createVector(xr, yr);
    pnrippedvr.push(pnripr);
    let pnripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pnripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pnripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pngonvr = createVector(xr + pnripvxr + pnripvx2r, yr + pnripvyr);
    pngonevr.push(pngonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pn.fill(features.rcol);
  pn.noStroke();
  pn.beginShape();
  pn.vertex(pncsw, 0);
  pn.vertex(pngonevr[0].x, 0);
  for (let i = 0; i < pngonevr.length; i++) {
    pn.vertex(pngonevr[i].x, pngonevr[i].y);
  }
  pn.vertex(pncsw, pncsh);
  pn.endShape(CLOSE);
  pn.erase();
  pn.beginShape();
  pn.vertex(pncsw, 0);
  for (let i = 0; i < pnrippedvr.length; i++) {
    pn.vertex(pnrippedvr[i].x, pnrippedvr[i].y);
  }
  pn.vertex(pncsw, pncsh);
  pn.endShape(CLOSE);
  pn.noErase();
}

function pnvriptop() {
  let xr = 0;
  let yr = myRandom(pncsh * 0.1, pncsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pnrippedvr = [];
  var pngonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pnripr = createVector(xr, yr);
    pnrippedvr.push(pnripr);
    let pnripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pnripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pnripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pngonvr = createVector(xr + pnripvxr, yr - pnripvy2r);
    pngonevr.push(pngonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pn.fill(features.rcol);
  pn.noStroke();
  pn.beginShape();
  pn.vertex(0, 0);
  pn.vertex(0, pngonevr[0].y);
  for (let i = 0; i < pngonevr.length; i++) {
    pn.vertex(pngonevr[i].x, pngonevr[i].y);
  }
  pn.vertex(pncsw, 0);
  pn.endShape(CLOSE);
  pn.erase();
  pn.beginShape();
  pn.vertex(0, 0);
  for (let i = 0; i < pnrippedvr.length; i++) {
    pn.vertex(pnrippedvr[i].x, pnrippedvr[i].y);
  }
  pn.vertex(pncsw, 0);
  pn.endShape(CLOSE);
  pn.noErase();
}
function pnvripbottom() {
  let xr = 0;
  let yr = myRandom(pncsh * 0.5, pncsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pnrippedvr = [];
  var pngonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pnripr = createVector(xr, yr);
    pnrippedvr.push(pnripr);
    let pnripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pnripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pnripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pngonvr = createVector(xr + pnripvxr, yr - pnripvy2r);
    pngonevr.push(pngonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pn.fill(features.rcol);
  pn.noStroke();
  pn.beginShape();
  pn.vertex(0, pncsh);
  pn.vertex(0, pngonevr[0].y);
  for (let i = 0; i < pngonevr.length; i++) {
    pn.vertex(pngonevr[i].x, pngonevr[i].y);
  }
  pn.vertex(pncsw, pncsh);
  pn.endShape(CLOSE);
  pn.erase();
  pn.beginShape();
  pn.vertex(0, pncsh);
  for (let i = 0; i < pnrippedvr.length; i++) {
    pn.vertex(pnrippedvr[i].x, pnrippedvr[i].y);
  }
  pn.vertex(pncsw, pncsh);
  pn.endShape(CLOSE);
  pn.noErase();
}
//start of pq rips
function pqvripleft() {
  let xl = myRandom(pqcsw * 0.1, pqcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pqrippedvl = [];
  var pqgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pqripl = createVector(xl, yl);
    pqrippedvl.push(pqripl);
    let pqripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pqripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pqripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pqgonvl = createVector(xl + pqripvxl + pqripvx2l, yl + pqripvyl);
    pqgonevl.push(pqgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pq.fill(features.rcol);
  pq.noStroke();
  pq.beginShape();
  pq.vertex(0, 0);
  for (let i = 0; i < pqrippedvl.length; i++) {
    pq.vertex(pqrippedvl[i].x, pqrippedvl[i].y);
  }
  pq.vertex(0, pqcsh);
  pq.endShape(CLOSE);
  pq.erase();
  pq.beginShape();
  pq.vertex(0, 0);
  for (let i = 0; i < pqgonevl.length; i++) {
    pq.vertex(pqgonevl[i].x, pqgonevl[i].y);
  }
  pq.vertex(0, pqcsh);
  pq.endShape(CLOSE);
  pq.noErase();
}
function pqvripright() {
  let xr = myRandom(pqcsw * 0.5, pqcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pqrippedvr = [];
  var pqgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pqripr = createVector(xr, yr);
    pqrippedvr.push(pqripr);
    let pqripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pqripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pqripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pqgonvr = createVector(xr + pqripvxr + pqripvx2r, yr + pqripvyr);
    pqgonevr.push(pqgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pq.fill(features.rcol);
  pq.noStroke();
  pq.beginShape();
  pq.vertex(pqcsw, 0);
  pq.vertex(pqgonevr[0].x, 0);
  for (let i = 0; i < pqgonevr.length; i++) {
    pq.vertex(pqgonevr[i].x, pqgonevr[i].y);
  }
  pq.vertex(pqcsw, pqcsh);
  pq.endShape(CLOSE);
  pq.erase();
  pq.beginShape();
  pq.vertex(pqcsw, 0);
  for (let i = 0; i < pqrippedvr.length; i++) {
    pq.vertex(pqrippedvr[i].x, pqrippedvr[i].y);
  }
  pq.vertex(pqcsw, pqcsh);
  pq.endShape(CLOSE);
  pq.noErase();
}

function pqvriptop() {
  let xr = 0;
  let yr = myRandom(pqcsh * 0.1, pqcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pqrippedvr = [];
  var pqgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pqripr = createVector(xr, yr);
    pqrippedvr.push(pqripr);
    let pqripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pqripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pqripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pqgonvr = createVector(xr + pqripvxr, yr - pqripvy2r);
    pqgonevr.push(pqgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pq.fill(features.rcol);
  pq.noStroke();
  pq.beginShape();
  pq.vertex(0, 0);
  pq.vertex(0, pqgonevr[0].y);
  for (let i = 0; i < pqgonevr.length; i++) {
    pq.vertex(pqgonevr[i].x, pqgonevr[i].y);
  }
  pq.vertex(pqcsw, 0);
  pq.endShape(CLOSE);
  pq.erase();
  pq.beginShape();
  pq.vertex(0, 0);
  for (let i = 0; i < pqrippedvr.length; i++) {
    pq.vertex(pqrippedvr[i].x, pqrippedvr[i].y);
  }
  pq.vertex(pqcsw, 0);
  pq.endShape(CLOSE);
  pq.noErase();
}
function pqvripbottom() {
  let xr = 0;
  let yr = myRandom(pqcsh * 0.5, pqcsh * 0.9);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pqrippedvr = [];
  var pqgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pqripr = createVector(xr, yr);
    pqrippedvr.push(pqripr);
    let pqripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pqripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pqripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pqgonvr = createVector(xr + pqripvxr, yr - pqripvy2r);
    pqgonevr.push(pqgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pq.fill(features.rcol);
  pq.noStroke();
  pq.beginShape();
  pq.vertex(0, pqcsh);
  pq.vertex(0, pqgonevr[0].y);
  for (let i = 0; i < pqgonevr.length; i++) {
    pq.vertex(pqgonevr[i].x, pqgonevr[i].y);
  }
  pq.vertex(pqcsw, pqcsh);
  pq.endShape(CLOSE);
  pq.erase();
  pq.beginShape();
  pq.vertex(0, pqcsh);
  for (let i = 0; i < pqrippedvr.length; i++) {
    pq.vertex(pqrippedvr[i].x, pqrippedvr[i].y);
  }
  pq.vertex(pqcsw, pqcsh);
  pq.endShape(CLOSE);
  pq.noErase();
}
//start of pw rips
function pwvripleft() {
  let xl = myRandom(pwcsw * 0.1, pwcsw * 0.5);
  let yl = 0;
  let ripllow = myRandom(3.5, 5.5);
  let riplhigh = myRandom(5.5, 9.5);
  var pwrippedvl = [];
  var pwgonevl = [];
  let yoffl = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffl = myRandom(0.01, 0.1);
  let zoff2l = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pwripl = createVector(xl, yl);
    pwrippedvl.push(pwripl);
    let pwripvxl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[10]);
    let pwripvx2l = map(noise(sin(a), cos(a), zoff2l), 0, 1, h[0], h[20]);
    let pwripvyl = map(noise(cos(a), sin(a), zoffl), 0, 1, -h[70], h[0]);
    let pwgonvl = createVector(xl + pwripvxl + pwripvx2l, yl + pwripvyl);
    pwgonevl.push(pwgonvl);
    let xoffl = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripllow, riplhigh)
    );
    xl += xoffl;
    yl += yoffl;
    zoffl += 0.005;
    zoff2l += 0.01;
  }
  pw.fill(features.rcol);
  pw.noStroke();
  pw.beginShape();
  pw.vertex(0, 0);
  for (let i = 0; i < pwrippedvl.length; i++) {
    pw.vertex(pwrippedvl[i].x, pwrippedvl[i].y);
  }
  pw.vertex(0, pwcsh);
  pw.endShape(CLOSE);
  pw.erase();
  pw.beginShape();
  pw.vertex(0, 0);
  for (let i = 0; i < pwgonevl.length; i++) {
    pw.vertex(pwgonevl[i].x, pwgonevl[i].y);
  }
  pw.vertex(0, pwcsh);
  pw.endShape(CLOSE);
  pw.noErase();
}
function pwvripright() {
  let xr = myRandom(pwcsw * 0.5, pwcsw * 0.9);
  let yr = 0;
  let riprlow = myRandom(3.5, 5.5);
  let riprhigh = myRandom(5.5, 9.5);
  var pwrippedvr = [];
  var pwgonevr = [];
  let yoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pwripr = createVector(xr, yr);
    pwrippedvr.push(pwripr);
    let pwripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pwripvx2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, h[0], h[20]);
    let pwripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pwgonvr = createVector(xr + pwripvxr + pwripvx2r, yr + pwripvyr);
    pwgonevr.push(pwgonvr);
    let xoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riprlow, riprhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pw.fill(features.rcol);
  pw.noStroke();
  pw.beginShape();
  pw.vertex(pwcsw, 0);
  pw.vertex(pwgonevr[0].x, 0);
  for (let i = 0; i < pwgonevr.length; i++) {
    pw.vertex(pwgonevr[i].x, pwgonevr[i].y);
  }
  pw.vertex(pwcsw, pwcsh);
  pw.endShape(CLOSE);
  pw.erase();
  pw.beginShape();
  pw.vertex(pwcsw, 0);
  for (let i = 0; i < pwrippedvr.length; i++) {
    pw.vertex(pwrippedvr[i].x, pwrippedvr[i].y);
  }
  pw.vertex(pwcsw, pwcsh);
  pw.endShape(CLOSE);
  pw.noErase();
}

function pwvriptop() {
  let xr = 0;
  let yr = myRandom(pwcsh * 0.1, pwcsh * 0.5);
  let riptlow = myRandom(2.5, 5.5);
  let ripthigh = myRandom(5.5, 9.5);
  var pwrippedvr = [];
  var pwgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pwripr = createVector(xr, yr);
    pwrippedvr.push(pwripr);
    let pwripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pwripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[20], h[20]);
    let pwripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pwgonvr = createVector(xr + pwripvxr, yr - pwripvy2r);
    pwgonevr.push(pwgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(riptlow, ripthigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pw.fill(features.rcol);
  pw.noStroke();
  pw.beginShape();
  pw.vertex(0, 0);
  pw.vertex(0, pwgonevr[0].y);
  for (let i = 0; i < pwgonevr.length; i++) {
    pw.vertex(pwgonevr[i].x, pwgonevr[i].y);
  }
  pw.vertex(pwcsw, 0);
  pw.endShape(CLOSE);
  pw.erase();
  pw.beginShape();
  pw.vertex(0, 0);
  for (let i = 0; i < pwrippedvr.length; i++) {
    pw.vertex(pwrippedvr[i].x, pwrippedvr[i].y);
  }
  pw.vertex(pwcsw, 0);
  pw.endShape(CLOSE);
  pw.noErase();
}
function pwvripbottom() {
  let xr = 0;
  let yr = myRandom(pwcsh * 0.5, pwcsh * 0.8);
  let ripblow = myRandom(2.5, 5.5);
  let ripbhigh = myRandom(5.5, 9.5);
  var pwrippedvr = [];
  var pwgonevr = [];
  let xoffr = myRandom(h[1] * 0.5, h[1] * 1.5);
  let zoffr = myRandom(0.01, 0.1);
  let zoff2r = myRandom(0.1, 0.5);
  for (let a = 0; a < 2 * PI; a += PI / 1500) {
    let pwripr = createVector(xr, yr);
    pwrippedvr.push(pwripr);
    let pwripvyr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[10]);
    let pwripvy2r = map(noise(sin(a), cos(a), zoff2r), 0, 1, -h[50], h[20]);
    let pwripvxr = map(noise(cos(a), sin(a), zoffr), 0, 1, -h[70], h[0]);
    let pwgonvr = createVector(xr + pwripvxr, yr - pwripvy2r);
    pwgonevr.push(pwgonvr);
    let yoffr = map(
      noise(myRandom(0, 1000)),
      0,
      1,
      -h[5],
      h[1] * myRandom(ripblow, ripbhigh)
    );
    xr += xoffr;
    yr += yoffr;
    zoffr += 0.005;
    zoff2r += 0.01;
  }
  pw.fill(features.rcol);
  pw.noStroke();
  pw.beginShape();
  pw.vertex(0, pwcsh);
  pw.vertex(0, pwgonevr[0].y);
  for (let i = 0; i < pwgonevr.length; i++) {
    pw.vertex(pwgonevr[i].x, pwgonevr[i].y);
  }
  pw.vertex(pwcsw, pwcsh);
  pw.endShape(CLOSE);
  pw.erase();
  pw.beginShape();
  pw.vertex(0, pwcsh);
  for (let i = 0; i < pwrippedvr.length; i++) {
    pw.vertex(pwrippedvr[i].x, pwrippedvr[i].y);
  }
  pw.vertex(pwcsw, pwcsh);
  pw.endShape(CLOSE);
  pw.noErase();
}
