var pgca1 = [];
var pgca2 = [];
var pgcch1 = [];
var pgcch2 = [];
var pgach = [];
var pga = [];
var pgyb;
function pgposter() {
  noiseSeed(10000);
  pgcsw = cs * 0.7;
  pgcsh = cs;
  pg = createGraphics(pgcsw, pgcsh);
  choosecolor();
  pgca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pgca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pgall = [
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
  pga = [
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
  pgcch1 = shuffleArray(pgca1);
  pgcch2 = shuffleArray(pgca2);
  pgallch = shuffleArray(pgall);
  pgach = shuffleArray(pga);
  pg.background(pgcch1[0]);
  pg.noStroke();
  pg.background(features.pc0);
  pg.fill(features.pc2);
  pg.ellipse(pgcsw / 2, pgcsh / 2, h[600]);
  pg.fill(features.pc1);
  pg.rect(0, h[600], pgcsw, h[600]);
  pg.fill(features.pc3);
  pg.rect(0, h[700], pgcsw, h[700]);
  pg.fill(features.pc4);
  pg.rect(0, h[800], pgcsw, h[800]);
  pg.fill(features.pc5);
  pg.rect(0, h[900], pgcsw, h[900]);
  shufflearrays();
  pg.fill(features.dcol);
  choosefont();
  pg.textWrap(CHAR);
  pg.noStroke();
  pg.textAlign(CENTER);
  pg.textFont(tfont);
  pg.textSize(h[120] * scalar);
  title(0); //title1
  pg.text(tt, h[30], h[50], h[640], h[40]);
  pg.textFont(bfont);
  pg.textSize(h[40]);
  tel(0); //tel
  pg.text(ttel, h[30], h[730], h[640], h[40]);
  email(0); //tel
  pg.text(te, h[30], h[930], h[640], h[40]);
  web(0); //web
  pg.text(tweb, h[30], h[830], h[640], h[40]);
  pgvripleft();
  pgvripright();
  pgvriptop();
  pgvripbottom();
}
