var pfca1 = [];
var pfca2 = [];
var pfcch1 = [];
var pfcch2 = [];
var pfach = [];
var pfa = [];
var pfyb;
function pfposter() {
  noiseSeed(10000);
  pfcsw = cs * 0.65;
  pfcsh = cs;
  pf = createGraphics(pfcsw, pfcsh);
  choosecolor();
  pfca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pfca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pfall = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pfa = [
    features.apc0,
    features.apc1,
    features.apc2,
    features.apc3,
    features.apc4,
    features.apc10,
    features.apc11,
    features.apc12,
    features.apc13,
    features.apc14,
    features.apc0,
    features.apc1,
    features.apc2,
    features.apc3,
    features.apc4,
    features.apc10,
    features.apc11,
    features.apc12,
    features.apc13,
    features.apc14,
  ];
  pfcch1 = shuffleArray(pfca1);
  pfcch2 = shuffleArray(pfca2);
  pfallch = shuffleArray(pfall);
  pfach = shuffleArray(pfa);
  pf.background(pfcch1[0]);
  pf.stroke(features.aadcol);
  let pfgrid = int(pfcsw / myRandom(18, 28)) * 2;
  for (let j = -pfgrid / 2; j < pfcsh * 1.1; j += pfgrid) {
    pf.line(0, j, pfcsw, j);
  }
  for (let i = -pfgrid / 2; i < pfcsw * 1.1; i += pfgrid) {
    pf.line(i, 0, i, pfcsh);
  }
  pf.noStroke();
  for (let i = 0; i < 4; i++) {
    let tside = myRandom(h[20], h[40]);
    pf.push();
    pf.translate(
      myRandom(h[100], pfcsw - h[100]),
      myRandom(h[200], pfcsh - h[50])
    );
    pf.rotate(myRandom(0, PI));
    pf.fill(pfcch2[int(myRandom(0, 4))]);
    pf.triangle(0, 0, tside, 0, tside / 2, -tside * (sqrt(3) / 2));
    pf.pop();
  }
  for (let i = 0; i < 4; i++) {
    let tside = myRandom(h[20], h[40]);
    pf.push();
    pf.translate(
      myRandom(h[100], pfcsw - h[100]),
      myRandom(h[200], pfcsh - h[50])
    );
    pf.rotate(myRandom(0, PI));
    pf.fill(pfcch2[int(myRandom(0, 4))]);
    pf.rect(0, 0, tside, tside);
    pf.pop();
  }
  for (let i = 0; i < 4; i++) {
    let tside = myRandom(h[20], h[40]);
    pf.push();
    pf.fill(pfcch2[int(myRandom(0, 4))]);
    pf.translate(
      myRandom(h[100], pfcsw - h[100]),
      myRandom(h[200], pfcsh - h[50])
    );
    pf.rotate(myRandom(0, PI));
    pf.ellipse(0, 0, tside * 2);
    pf.pop();
  }
  for (let i = 0; i < 5; i++) {
    pf.fill(pfcch2[int(myRandom(0, 4))]);
    let pftx = myRandom(0, pfcsw);
    pf.triangle(
      pftx,
      pfcsh,
      (pfcsw * 3) / 4,
      pfcsh / 4,
      myRandom(pftx - h[10], pftx - h[30]),
      pfcsh
    );
  }
  for (let i = 0; i < 5; i++) {
    pf.fill(pfcch2[int(myRandom(0, 4))]);
    let pfty = myRandom(pfcsh / 2, pfcsh);
    pf.triangle(
      0,
      pfty,
      (pfcsw * 3) / 4,
      pfcsh / 4,
      0,
      myRandom(pfty - h[10], pfty - h[30])
    );
  }
  shufflearrays();
  pf.fill(features.dcol);
  choosefont();
  pf.textWrap(CHAR);
  pf.noStroke();
  pf.textAlign(LEFT);
  pf.textFont(tfont);
  pf.textSize(h[75] * scalar);
  title(1); //title1
  pf.text(tt, h[30], h[30], h[250], h[40]);
  pf.textFont(hfont);
  pf.textSize(h[35] * scalar);
  word("u"); //heading1
  pf.text(tw, h[250], h[40], h[140], h[20]);
  word("u");
  pf.text(tw, h[250], h[80], h[140], h[20]);
  word("u");
  pf.text(tw, h[250], h[120], h[140], h[20]);
  word("u");
  pf.text(tw, h[250], h[160], h[140], h[20]);
  pf.textWrap(WORD);
  sentence("m", 0); //heading1
  pf.text(ts, h[400], h[40], h[200], h[20]);
  sentence("m", 0);
  pf.text(ts, h[400], h[80], h[200], h[20]);
  sentence("m", 0);
  pf.text(ts, h[400], h[120], h[200], h[20]);
  sentence("m", 0);
  pf.text(ts, h[400], h[160], h[200], h[20]);
  sentence("m", 1); //heading2
  pf.textSize(h[40] * scalar);
  pf.text(ts, h[400], h[650], h[170], h[200]);
  pfvripleft();
  pfvripright();
  pfvriptop();
  pfvripbottom();
}
