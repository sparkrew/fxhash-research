var pbca1 = [];
var pbca2 = [];
var pbcch1 = [];
var pbcch2 = [];
var pbach = [];
var pba = [];
var pbyb;
function pbposter() {
  noiseSeed(10000);
  pbcsw = cs * 0.68;
  pbcsh = cs * 1.08;
  pb = createGraphics(pbcsw, pbcsh);
  choosecolor();
  pbca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pbcch1 = shuffleArray(pbca1);
  pbca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pbcch2 = shuffleArray(pbca2);
  pba = [
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
  pbach = shuffleArray(pba);
  pb.background(pbcch1[0]);
  pb.noStroke();
  pb.fill(pbcch1[1]);
  let pbbx = pbcsw / 20;
  let pbyy = pbcsh / 30;
  let pbbi = [];
  for (let x = 0; x < 60; x++) {
    pbyb = myRandom(pbyy - h[3], pbyy + h[3]);
    pbbi.push(pbyb);
  }
  pb.beginShape();
  for (let pbbt = 1; pbbt < 14; pbbt++) {
    pb.vertex(pbbx * pbbt, pbbi[pbbt]);
  }
  for (let pbbt = 1; pbbt < 9; pbbt++) {
    pb.vertex(pbbx * 14 + pbbi[pbbt], pbbx * pbbt);
  }
  for (let pbbt = 0; pbbt < 14; pbbt++) {
    pb.vertex(pbbx * (14 - pbbt), pbbx * 7 + pbbi[pbbt]);
  }
  for (let pbbt = 1; pbbt < 9; pbbt++) {
    pb.vertex(pbbi[pbbt], pbbx * (9 - pbbt));
  }
  pb.endShape(CLOSE);
  for (let i = 0; i < 15; i++) {
    let pbgx = myRandom(-h[20], h[700]);
    let pbgy = h[1040] - pbgx * 1.25;
    pb.fill(pbach[i]);
    pb.ellipse(pbgx, pbgy, myRandom(h[120], h[360]));
  }
  shufflearrays();
  pb.fill(features.dcol);
  choosefont();
  pb.noStroke();
  pb.textAlign(CENTER);
  pb.textWrap(WORD);
  pb.textFont(tfont);
  pb.textSize(h[82] * scalar);
  title(2); //title1
  pb.text(tt, h[34], h[60], h[476], h[40]);
  title(3); //title2
  pb.text(tt, h[34], h[150], h[476], h[40]);
  pb.textAlign(LEFT);
  sentence("u", 1); //heading1
  pb.textFont(hfont);
  pb.textSize(h[55] * scalar);
  pb.text(ts, h[34], h[290], h[450], h[20]);
  sentence("u", 1); //heading2
  pb.textSize(h[55] * scalar);
  pb.text(ts, h[34], h[350], h[300], h[20]);
  date(); //date
  pb.textSize(h[55] * scalar);
  pb.textFont(hfont);
  pb.fill(features.hcol);
  pb.text(tdate, h[45], h[420], h[300], h[120]);
  pb.textSize(h[80]);
  pb.textAlign(RIGHT);
  price(); //price
  pb.text(tprice, h[600], h[770], h[60], h[20]);
  price(); //price
  pb.text(tprice, h[600], h[850], h[60], h[20]);
  sentence("m", 2); //bottom line
  pb.textFont(bfont);
  pb.textSize(h[30]);
  pb.fill(features.bcol);
  pb.text(ts, h[34], h[950], h[626], h[20]);
  pbvripleft();
  pbvripright();
  pbvriptop();
  pbvripbottom();
}
