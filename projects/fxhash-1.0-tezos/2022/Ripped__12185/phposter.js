var phca1 = [];
var phca2 = [];
var phcch1 = [];
var phcch2 = [];
var phach = [];
var pha = [];
var phyb;
function phposter() {
  noiseSeed(10000);
  phcsw = cs * 0.6;
  phcsh = cs;
  ph = createGraphics(phcsw, phcsh);
  choosecolor();
  phca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  phca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  phall = [
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
  pha = [
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
  phcch1 = shuffleArray(phca1);
  phcch2 = shuffleArray(phca2);
  phallch = shuffleArray(phall);
  phach = shuffleArray(pha);
  ph.background(myRandom(0, 70));
  ph.noStroke();
  ph.fill(phallch[0]);
  ph.beginShape();
  ph.vertex(0, myRandom(h[420], h[480]));
  ph.vertex(phcsw, myRandom(h[280], h[380]));
  ph.vertex(phcsw, phcsh * 0.6);
  ph.vertex(0, phcsh * 0.6);
  ph.endShape(CLOSE);
  ph.fill(features.pc11);
  let ph3x = [
    myRandom(h[430], h[470]),
    myRandom(h[530], h[570]),
    myRandom(h[530], h[570]),
    myRandom(h[530], h[570]),
    myRandom(h[530], h[570]),
    myRandom(h[430], h[470]),
    myRandom(h[430], h[470]),
    myRandom(h[430], h[470]),
  ];
  let ph3y = [
    0,
    0,
    myRandom(h[220], h[250]),
    myRandom(h[300], h[350]),
    h[600],
    h[600],
    myRandom(h[300], h[350]),
    myRandom(h[220], h[250]),
  ];
  ph.fill(features.col1);
  ph.beginShape();
  ph.vertex(ph3x[0], ph3y[0]);
  ph.vertex(ph3x[1], ph3y[1]);
  ph.vertex(ph3x[2], ph3y[2]);
  ph.vertex(ph3x[3], ph3y[3]);
  ph.vertex(ph3x[4], ph3y[4]);
  ph.vertex(ph3x[5], ph3y[5]);
  ph.vertex(ph3x[6], ph3y[6]);
  ph.vertex(ph3x[7], ph3y[7]);
  ph.endShape();
  let ph4x = [
    myRandom(h[480], h[490]),
    myRandom(h[500], h[510]),
    myRandom(h[500], h[510]),
    myRandom(h[500], h[510]),
    myRandom(h[500], h[510]),
    myRandom(h[480], h[490]),
    myRandom(h[480], h[490]),
    myRandom(h[480], h[490]),
  ];
  let ph4y = [
    0,
    0,
    myRandom(h[220], h[250]),
    myRandom(h[300], h[350]),
    h[600],
    h[600],
    myRandom(h[300], h[350]),
    myRandom(h[220], h[250]),
  ];
  ph.fill(features.col2);
  ph.beginShape();
  ph.vertex(ph4x[0], ph4y[0]);
  ph.vertex(ph4x[1], ph4y[1]);
  ph.vertex(ph4x[2], ph4y[2]);
  ph.vertex(ph4x[3], ph4y[3]);
  ph.vertex(ph4x[4], ph4y[4]);
  ph.vertex(ph4x[5], ph4y[5]);
  ph.vertex(ph4x[6], ph4y[6]);
  ph.vertex(ph4x[7], ph4y[7]);
  ph.endShape();
  let ph0x = [
    0,
    myRandom(h[190], h[210]),
    myRandom(h[340], h[360]),
    myRandom(h[330], h[370]),
    myRandom(h[400], h[440]),
    myRandom(h[380], h[400]),
    myRandom(h[400], h[420]),
    myRandom(h[340], h[360]),
    myRandom(h[330], h[350]),
    myRandom(h[160], h[180]),
    0,
  ];
  let ph0y = [
    myRandom(h[290], h[310]),
    myRandom(h[260], h[280]),
    myRandom(h[220], h[250]),
    myRandom(h[120], h[160]),
    myRandom(h[120], h[160]),
    myRandom(h[260], h[280]),
    myRandom(h[420], h[440]),
    myRandom(h[420], h[440]),
    myRandom(h[320], h[340]),
    myRandom(h[340], h[360]),
    myRandom(h[390], h[410]),
  ];
  ph.fill(features.col1);
  ph.beginShape();
  ph.vertex(ph0x[0], ph0y[0]);
  ph.vertex(ph0x[1], ph0y[1]);
  ph.vertex(ph0x[2], ph0y[2]);
  ph.vertex(ph0x[3], ph0y[3]);
  ph.vertex(ph0x[4], ph0y[4]);
  ph.vertex(ph0x[5], ph0y[5]);
  ph.vertex(ph0x[6], ph0y[6]);
  ph.vertex(ph0x[7], ph0y[7]);
  ph.vertex(ph0x[8], ph0y[8]);
  ph.vertex(ph0x[9], ph0y[9]);
  ph.vertex(ph0x[10], ph0y[10]);
  ph.endShape();
  let ph1x = [
    myRandom(h[62], h[82]),
    myRandom(h[115], h[135]),
    myRandom(h[127], h[147]),
    myRandom(h[150], h[170]),
    myRandom(h[190], h[210]),
    myRandom(h[138], h[158]),
    myRandom(h[110], h[130]),
  ];
  let ph1y = [
    myRandom(h[130], h[150]),
    myRandom(h[85], h[105]),
    myRandom(h[265], h[285]),
    myRandom(h[410], h[430]),
    myRandom(h[470], h[480]),
    myRandom(h[490], h[510]),
    myRandom(h[310], h[330]),
  ];
  ph.fill(features.col2);
  ph.beginShape();
  ph.vertex(ph1x[0], ph1y[0]);
  ph.vertex(ph1x[1], ph1y[1]);
  ph.vertex(ph1x[2], ph1y[2]);
  ph.vertex(ph1x[3], ph1y[3]);
  ph.vertex(ph1x[4], ph1y[4]);
  ph.vertex(ph1x[5], ph1y[5]);
  ph.vertex(ph1x[6], ph1y[6]);
  ph.endShape();
  let ph2x = [
    myRandom(h[162], h[182]),
    myRandom(h[235], h[255]),
    myRandom(h[297], h[317]),
    myRandom(h[290], h[310]),
    myRandom(h[310], h[330]),
    myRandom(h[338], h[358]),
    myRandom(h[210], h[230]),
    myRandom(h[240], h[260]),
  ];
  let ph2y = [
    myRandom(h[50], h[70]),
    myRandom(h[45], h[65]),
    myRandom(h[35], h[55]),
    myRandom(h[280], h[300]),
    myRandom(h[370], h[380]),
    myRandom(h[470], h[490]),
    myRandom(h[460], h[480]),
    myRandom(h[290], h[310]),
  ];
  ph.fill(features.col3);
  ph.beginShape();
  ph.vertex(ph2x[0], ph2y[0]);
  ph.vertex(ph2x[1], ph2y[1]);
  ph.vertex(ph2x[2], ph2y[2]);
  ph.vertex(ph2x[3], ph2y[3]);
  ph.vertex(ph2x[4], ph2y[4]);
  ph.vertex(ph2x[5], ph2y[5]);
  ph.vertex(ph2x[6], ph2y[6]);
  ph.vertex(ph2x[7], ph2y[7]);
  ph.vertex(ph2x[8], ph2y[8]);
  ph.endShape();
  ph.fill(phallch[5]);
  ph.rect(0, phcsh * 0.6, phcsw, phcsh * 0.25);
  ph.strokeWeight(h[8]);
  ph.noFill();
  ph.stroke(phallch[0]);
  ph.ellipse(h[150], phcsh * 0.7, h[125]);
  ph.stroke(phallch[1]);
  ph.ellipse(h[300], phcsh * 0.7, h[125]);
  ph.stroke(phallch[2]);
  ph.ellipse(h[450], phcsh * 0.7, h[125]);
  ph.stroke(phallch[3]);
  ph.ellipse(h[225], phcsh * 0.75, h[125]);
  ph.stroke(phallch[4]);
  ph.ellipse(h[375], phcsh * 0.75, h[125]);
  shufflearrays();
  ph.fill(features.hcol);
  choosefont();
  ph.textWrap(CHAR);
  ph.noStroke();
  ph.textAlign(CENTER);
  ph.textFont(bfont);
  ph.textSize(h[40]);
  sentence("m", 5);
  ph.text(ts, h[10], h[900], h[580], h[40]);
  phvripleft();
  phvripright();
  phvriptop();
  phvripbottom();
}
