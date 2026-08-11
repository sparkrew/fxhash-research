var pica1 = [];
var pica2 = [];
var picch1 = [];
var picch2 = [];
var piach = [];
var pia = [];
var piyb;
function piposter() {
  noiseSeed(10000);
  picsw = cs * 0.7;
  picsh = cs;
  pi = createGraphics(picsw, picsh);
  choosecolor();
  pica1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pica2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  piall = [
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
  pia = [
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
  picch1 = shuffleArray(pica1);
  picch2 = shuffleArray(pica2);
  piallch = shuffleArray(piall);
  piach = shuffleArray(pia);
  pi.background(piallch[0]);
  pi.noStroke();
  pi.fill(piallch[1]);
  pi.rect(h[40], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[2]);
  pi.rect(h[110], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[3]);
  pi.rect(h[180], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[4]);
  pi.rect(h[250], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[1]);
  pi.rect(h[320], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[2]);
  pi.rect(h[390], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[3]);
  pi.rect(h[460], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[4]);
  pi.rect(h[530], h[270], h[60], myRandom(h[500], h[730]));
  pi.fill(piallch[1]);
  pi.rect(h[600], h[270], h[60], myRandom(h[500], h[730]));
  pi.noFill();
  pi.stroke(features.hcol);
  pi.strokeWeight(h[50]);
  pi.rect(0, 0, picsw, picsh);
  shufflearrays();
  pi.fill(features.dcol);
  choosefont();
  pi.textWrap(CHAR);
  pi.noStroke();
  pi.textAlign(CENTER);
  pi.textFont(bfont);
  pi.textSize(h[40]);
  sentence("u", 3);
  pi.text(ts, h[35], h[35], h[630], h[30]);
  pi.textFont(tfont);
  pi.textSize(h[180] * scalar);
  pihead();
  pi.text(tpih, h[140], h[80], h[420], h[40]);
  pivripleft();
  pivripright();
  pivriptop();
  pivripbottom();
}
