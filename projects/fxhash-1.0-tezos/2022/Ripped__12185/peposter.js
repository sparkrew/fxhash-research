var peca1 = [];
var peca2 = [];
var pecch1 = [];
var pecch2 = [];
var peach = [];
var pea = [];
var peyb;
function peposter() {
  noiseSeed(10000);
  pecsw = cs * 0.7;
  pecsh = cs;
  pe = createGraphics(pecsw, pecsh);
  choosecolor();
  peca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  peca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pecall = [
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
  pea = [
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
  pecch1 = shuffleArray(peca1);
  pecch2 = shuffleArray(peca2);
  peach = shuffleArray(pea);
  pecallch = shuffleArray(pecall);
  pe.background(features.hcol);
  pe.fill(features.hcol);
  pe.stroke(features.ddcol);
  pe.strokeWeight(h[8]);
  pe.rect(h[50], h[50], h[600], h[600]);
  let pemch = int(myRandom(0, 9));
  if (pemch == 0) pedes0();
  if (pemch == 1) pedes1();
  if (pemch == 2) pedes2();
  if (pemch == 3) pedes3();
  if (pemch == 4) pedes4();
  if (pemch == 5) pedes5();
  if (pemch == 6) pedes6();
  if (pemch == 7) pedes7();
  if (pemch == 8) pedes8();
  shufflearrays();
  choosefont();
  pe.noStroke();
  pe.fill(features.ddcol);
  pe.textAlign(CENTER);
  pe.textWrap(WORD);
  pe.textFont(tfont);
  pe.textSize(h[90] * scalar);
  title(5); //title1
  pe.text(tt, h[40], h[750], h[620], h[40]);
  title(5); //title2
  pe.textFont(tfont);
  pe.textSize(h[50] * scalar);
  pe.text(tt, h[40], h[860], h[620], h[40]);
  pevripleft();
  pevripright();
  pevriptop();
  pevripbottom();
}
function pedes0() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[150], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[350], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[250], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[250], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[450], h[100], h[200]);
}
function pedes1() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[150], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[250], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[350], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[450], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[550], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[450], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[450], h[200], h[200]);
}
function pedes2() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[250], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[150], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[450], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[450], h[200], h[200]);
}
function pedes3() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[150], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[350], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[250], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[350], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[550], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[250], h[400], h[400]);
}
function pedes4() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[250], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[450], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[350], h[450], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[450], h[100], h[200]);
}
function pedes5() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[250], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[150], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[450], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[550], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[450], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[550], h[200], h[100]);
}
function pedes6() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[150], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[150], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[150], h[150], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[250], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[350], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[150], h[450], h[100], h[200]);
}
function pedes7() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[200], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[50], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[250], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[250], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[350], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[450], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[450], h[100], h[200]);
}
function pedes8() {
  let perect = [
    pecallch[0],
    pecallch[1],
    pecallch[2],
    pecallch[3],
    features.hhcol,
    features.hhcol,
    features.hhcol,
  ];
  let perh = shuffleArray(perect);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[50], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[150], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[350], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[150], h[150], h[400], h[400]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[150], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[550], h[350], h[100], h[200]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[50], h[550], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[250], h[550], h[200], h[100]);
  pe.fill(perh[int(myRandom(0, 4))]);
  pe.rect(h[450], h[550], h[200], h[100]);
}
