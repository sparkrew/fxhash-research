var pnca1 = [];
var pnca2 = [];
var pncch1 = [];
var pncch2 = [];
var pnach = [];
var pna = [];
var pnyb;
function pnposter() {
  noiseSeed(10000);
  pncsw = cs * 0.7;
  pncsh = cs;
  pn = createGraphics(pncsw, pncsh);
  choosecolor();
  pnca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pnca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pnall = [
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
  pna = [
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
  pncch1 = shuffleArray(pnca1);
  pncch2 = shuffleArray(pnca2);
  pnallch = shuffleArray(pnall);
  pnach = shuffleArray(pna);
  pn.noStroke();
  pn.background(features.hcol);
  pn.fill(features.pc0);
  pn.ellipse(h[350], h[380], h[550]);
  pn.fill(features.pc14);
  pn.ellipse(h[350], h[380], h[440]);
  pn.fill(features.pc10);
  pn.ellipse(h[350], h[380], h[370]);
  pn.fill(features.pc0);
  pn.ellipse(h[350], h[380], h[240]);
  pn.fill(features.pc3);
  pn.ellipse(h[350], h[380], h[160]);
  pn.fill(features.ddcol);
  pn.ellipse(h[350], h[380], h[80]);
  pn.fill(features.pc0);
  pn.ellipse(h[350], h[880], h[550]);
  pn.fill(features.pc14);
  pn.ellipse(h[350], h[880], h[440]);
  pn.fill(features.pc10);
  pn.ellipse(h[350], h[880], h[370]);
  pn.fill(features.pc0);
  pn.ellipse(h[350], h[880], h[240]);
  pn.fill(features.pc3);
  pn.ellipse(h[350], h[880], h[160]);
  pn.fill(features.pc0);
  pn.rect(h[350], h[105], pncsw / 2, h[55]);
  pn.fill(features.pc14);
  pn.rect(h[350], h[160], pncsw / 2, h[35]);
  pn.fill(features.pc10);
  pn.rect(h[350], h[195], pncsw / 2, h[65]);
  pn.fill(features.ddcol);
  pn.beginShape();
  pn.vertex(h[338], pncsh);
  pn.vertex(h[349], h[50]);
  pn.vertex(h[351], h[50]);
  pn.vertex(h[362], pncsh);
  pn.endShape();
  pn.rect(h[340], h[310], h[20], h[50]);
  pn.ellipse(h[350], h[140], h[15], h[3]);
  pn.ellipse(h[350], h[185], h[15], h[3]);
  pn.ellipse(h[350], h[290], h[18], h[4]);
  pn.ellipse(h[350], h[435], h[25], h[4]);
  pn.ellipse(h[350], h[445], h[25], h[4]);
  pn.fill(features.pc0);
  pn.ellipse(h[350], h[320], h[8]);
  pn.ellipse(h[350], h[30], h[5]);
  pn.ellipse(h[350], h[40], h[5]);
  pn.ellipse(h[350], h[515], h[8]);
  pn.ellipse(h[350], h[530], h[8]);
  pn.ellipse(h[350], h[545], h[8]);
  pn.fill(features.pc3);
  pn.rect(h[300], h[383], h[100], h[1]);
  pn.rect(h[300], h[386], h[100], h[2]);
  pn.rect(h[300], h[390], h[100], h[3]);
  pn.rect(h[300], h[395], h[100], h[4]);
  pn.rect(h[300], h[401], h[100], h[5]);
  pn.rect(h[300], h[408], h[100], h[6]);
  pn.rect(h[300], h[416], h[100], h[7]);
  pn.fill(features.ddcol);
  for (let i = 0; i < 50; i++) {
    pnx = myRandom(h[20], h[50]);
    pny = myRandom(h[860], h[920]);
    pnw = myRandom(h[10], h[30]);

    pn.rect(pnx + i * (pncsw / 50), pny, pnw, h[140]);
    let r = myRandom(0, 1);
    if (r < 0.3) pn.ellipse(pnx + pnw / 2 + i * (pncsw / 50), pny, pnw);
    if (r < 0.15)
      pn.triangle(
        pnx + pnw / 2 + i * (pncsw / 50),
        pny - myRandom(h[20], h[30]),
        pnx + pnw + i * (pncsw / 50),
        pncsh - h[50],
        pnx + i * (pncsw / 50),
        pncsh - h[50]
      );
  }
  pn.rect(0, h[920], pncsw, h[920]);

  for (let i = 0; i < 3; i++) {
    pn.fill(features.pc3);
    pnx = myRandom(h[160], h[540]);
    pny = myRandom(h[920], h[960]);
    pnw = myRandom(h[20], h[60]);
    pnh = myRandom(h[4], h[7]);
    pn.rect(pnx, pny, pnw, pnh, h[10]);
    pn.fill(features.pc10);
    pnx = myRandom(h[160], h[540]);
    pny = myRandom(h[920], h[960]);
    pnw = myRandom(h[20], h[60]);
    pnh = myRandom(h[4], h[7]);
    pn.rect(pnx, pny, pnw, pnh, h[10]);
    pn.fill(features.pc14);
    pnx = myRandom(h[160], h[540]);
    pny = myRandom(h[920], h[960]);
    pnw = myRandom(h[20], h[60]);
    pnh = myRandom(h[4], h[7]);
    pn.rect(pnx, pny, pnw, pnh, h[10]);
  }
  choosefont();
  pn.fill(features.ddcol);
  pn.textWrap(CHAR);
  pn.textAlign(RIGHT);
  pn.textFont(Muli);
  pn.textSize(h[50]);
  n2();
  pn.text(tn2, h[595], h[10], h[80], h[40]);
  pn.textAlign(RIGHT);
  word("m");
  pn.text(tw, h[360], h[10], h[200], h[40]);
  pnvripleft();
  pnvripright();
  pnvriptop();
  pnvripbottom();
}
