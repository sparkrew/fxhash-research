var pdca1 = [];
var pdca2 = [];
var pdcch1 = [];
var pdcch2 = [];
var pdach = [];
var pda = [];
var pdyb;
function pdposter() {
  noiseSeed(10000);
  pdcsw = cs * 0.8;
  pdcsh = cs * 1.3;
  pd = createGraphics(pdcsw, pdcsh);
  choosecolor();
  pdca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pdcch1 = shuffleArray(pdca1);
  pdca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pdcch2 = shuffleArray(pdca2);
  pda = [
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
  pdach = shuffleArray(pda);
  pd.background(features.pc0);
  pd.noStroke();
  let pdg1 = 0;
  for (let i = 0; i < pdcsh / 2; i++) {
    let pdgcol = lerpColor(features.apc0, features.apc14, i / (pdcsh / 2));
    pd.fill(pdgcol);
    pd.ellipse(pdcsw / 2, pdcsh / 2, pdcsh - pdg1);
    pdg1 += 2;
  }
  shufflearrays();
  pd.fill(features.dcol);
  choosefont();
  pd.noStroke();
  pd.textAlign(CENTER);
  pd.textWrap(WORD);
  let titlech = myRandom(0, 1);
  pd.textFont(tfont);
  pd.textSize(h[82] * scalar);
  title(5); //title1
  pd.text(tt, h[40], h[40], h[720], h[40]);
  sentence("m", 1); //heading1
  pd.textFont(hfont);
  pd.textSize(h[55] * scalar);
  pd.text(ts, h[40], h[130], h[720], h[20]);
  pd.textSize(h[70] * scalar);
  date(2);
  pd.text(tdate, h[40], h[200], h[720], h[20]);
  pd.textSize(h[40] * scalar);
  date(3);
  pd.text(tdate, h[40], h[280], h[720], h[20]);
  pd.textFont(bfont);
  pd.textSize(h[28]);
  sentence("m", 4);
  pd.text(ts, h[40], h[350], h[720], h[170]);
  sentence("m", 4);
  pd.text(ts, h[40], h[520], h[720], h[170]);
  sentence("m", 4);
  pd.text(ts, h[40], h[690], h[720], h[170]);
  sentence("m", 4);
  pd.text(ts, h[40], h[860], h[720], h[170]);
  sentence("m", 4);
  pd.text(ts, h[40], h[1030], h[720], h[170]);
  pd.textFont(hfont);
  pd.textSize(h[40]);
  pd.textLeading();
  tel();
  pd.text(ttel, h[40], h[1190], h[720], h[400]);
  email();
  pd.text(te, h[40], h[1230], h[720], h[400]);
  pdvripleft();
  pdvripright();
  pdvriptop();
  pdvripbottom();
}
