var pqca1 = [];
var pqca2 = [];
var pqcch1 = [];
var pqcch2 = [];
var pqach = [];
var pqa = [];
var pqyb;
function pqposter() {
  noiseSeed(10000);
  pqcsw = cs * 0.7;
  pqcsh = cs;
  pq = createGraphics(pqcsw, pqcsh);
  choosecolor();
  pqca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pqca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pqall = [
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
  pqa = [
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
  pqcch1 = shuffleArray(pqca1);
  pqcch2 = shuffleArray(pqca2);
  pqallch = shuffleArray(pqall);
  pqach = shuffleArray(pqa);
  pq.background(eval("features.l" + int(myRandom(1, 9))));
  choosefont();
  pq.fill(features.dcol);
  pq.textWrap(CHAR);
  pq.textAlign(LEFT);
  shufflearrays();
  pq.textSize(h[130]);
  pq.textFont(Stompb);
  let colta = eval("features.l" + int(myRandom(1, 9)));
  pq.fill(pqallch[0]);
  stomp();
  pq.text(st, h[50], h[20], h[400], h[40]);
  pq.textFont(Stompf);
  pq.fill(features.ddcol);
  stomp();
  pq.text(st, h[50], h[20], h[400], h[40]);
  pq.textAlign(RIGHT);
  pq.textFont(Stompb);
  colta = eval("features.l" + int(myRandom(1, 9)));
  pq.fill(pqallch[1]);
  stompn();
  pq.text(st, h[50], h[20], h[600], h[40]);
  pq.fill(features.ddcol);
  pq.textFont(Stompf);
  stompn();
  pq.text(st, h[50], h[20], h[600], h[40]);
  pq.fill(features.ddcol);
  pq.noStroke();
  let x1 = 0;
  let x1cb = 0;
  let y1 = h[370];
  let y1cb = y1 - h[70];
  let x2 = myRandom(h[140], h[210]);
  let x2ca = x2 - h[80];
  let x2cb = x2 + h[90];
  let y2 = myRandom(h[180], h[250]);
  let y2ca = y2;
  let y2cb = y2;
  let x3 = myRandom(h[310], h[360]);
  let x3ca = x3;
  let x3cb = x3;
  let y3 = myRandom(h[330], h[360]);
  let y3ca = y3 - h[70];
  let y3cb = y3 + h[100];
  let x4 = myRandom(h[180], h[260]);
  let x4ca = x4;
  let x4cb = x4;
  let y4 = myRandom(h[550], h[650]);
  let y4ca = y4 - h[50];
  let y4cb = y4 + h[100];
  let x5 = myRandom(h[380], h[440]);
  let x5ca = x5;
  let x5cb = x5;
  let y5 = myRandom(h[620], h[700]);
  let y5ca = y5 - h[60];
  let y5cb = y5 + h[70];
  let x6 = myRandom(h[300], h[325]);
  let x6ca = x6;
  let x6cb = x6;
  let y6 = myRandom(h[730], h[770]);
  let y6ca = y6 - h[30];
  let y6cb = y6 + h[30];
  let x7 = myRandom(h[350], h[375]);
  let x7ca = x7;
  let x7cb = x7;
  let y7 = y6 + h[45];
  let y7ca = y7 - h[30];
  let y7cb = y7 + h[30];
  let x8 = x6;
  let x8ca = x8;
  let x8cb = x8;
  let y8 = y7 + h[45];
  let y8ca = y8 - h[30];
  let y8cb = y8 + h[30];
  let x9 = x7 + myRandom(h[10], h[30]);
  let x9ca = x9;
  let x9cb = x9;
  let y9 = myRandom(h[860], h[920]);
  let y9ca = y9 - h[30];
  let y9cb = y9 + h[30];
  let x10 = pqcsw / 2;
  let x10ca = x10;
  let y10 = pqcsh;
  let y10ca = pqcsh - h[100];
  pq.beginShape();
  pq.vertex(x1, y1);
  pq.bezierVertex(x1cb, y1cb, x2ca, y2ca, x2, y2);
  pq.bezierVertex(x2cb, y2cb, x3ca, y3ca, x3, y3);
  pq.bezierVertex(x3cb, y3cb, x4ca, y4ca, x4, y4);
  pq.bezierVertex(x4cb, y4cb, x5ca, y5ca, x5, y5);
  pq.bezierVertex(x5cb, y5cb, x6ca, y6ca, x6, y6);
  pq.bezierVertex(x6cb, y6cb, x7ca, y7ca, x7, y7);
  pq.bezierVertex(x7cb, y7cb, x8ca, y8ca, x8, y8);
  pq.bezierVertex(x8cb, y8cb, x9ca, y9ca, x9, y9);
  pq.bezierVertex(x9cb, y9cb, x10ca, y10ca, x10, y10);
  pq.vertex(0, pqcsh);
  pq.endShape();
  pq.push();
  pq.translate(h[170], h[360]);
  let pqeyer = int(myRandom(1, 5));
  if (pqeyer == 1) reye1();
  if (pqeyer == 2) reye2();
  if (pqeyer == 3) reye3();
  if (pqeyer == 4) reye4();
  pq.pop();
  pq.push();
  pq.translate(h[500], h[360]);
  let pqeyel = int(myRandom(1, 5));
  if (pqeyel == 1) leye1();
  if (pqeyel == 2) leye2();
  if (pqeyel == 3) leye3();
  if (pqeyel == 4) leye4();
  pq.pop();
  pq.fill(features.hhcol);
  pq.textAlign(CENTER);
  pq.textSize(h[40]);
  pq.textFont(TattyB);
  sentence("u", 2);
  pq.text(ts, h[50], h[930], h[600], h[40]);

  pqvripleft();
  pqvripright();
  pqvriptop();
  pqvripbottom();
}

function reye1() {
  pq.fill(pqallch[0]);
  pq.ellipse(0, 0, h[100]);
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[50]);
  pq.fill(pqallch[2]);
  pq.arc(0, 0, h[150], h[100], PI, PI * 2);
}
function reye2() {
  pq.fill(pqallch[0]);
  pq.ellipse(0, 0, h[100]);
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[50]);
}
function reye3() {
  pq.fill(pqallch[0]);
  pq.push();
  for (let i = 0; i < 4; i++) {
    pq.ellipse(0, 0, h[180], h[40]);
    pq.rotate(PI / 4);
  }
  pq.pop();
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[50]);
}
function reye4() {
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[100]);
  pq.fill(pqallch[2]);
  pq.arc(0, 0, h[100], h[100], myRandom(0, PI * 2), myRandom(0, PI * 2));
  pq.fill(pqallch[3]);
  pq.ellipse(0, 0, h[75]);
  pq.fill(pqallch[4]);
  pq.arc(0, 0, h[100], h[100], myRandom(0, PI * 2), myRandom(0, PI * 2));
  pq.fill(pqallch[5]);
  pq.ellipse(0, 0, h[50]);
  pq.fill(pqallch[6]);
  pq.arc(0, 0, h[100], h[100], myRandom(0, PI * 2), myRandom(0, PI * 2));
  pq.fill(pqallch[7]);
  pq.ellipse(0, 0, h[25]);
}
function leye1() {
  pq.fill(pqallch[0]);
  pq.ellipse(0, 0, h[100]);
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[50]);
  pq.fill(pqallch[2]);
  pq.arc(0, 0, h[150], h[100], PI, PI * 2);
}
function leye2() {
  pq.fill(pqallch[0]);
  pq.ellipse(0, 0, h[100]);
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[50]);
}
function leye3() {
  pq.fill(pqallch[0]);
  pq.push();
  for (let i = 0; i < 4; i++) {
    pq.ellipse(0, 0, h[180], h[40]);
    pq.rotate(PI / 4);
  }
  pq.pop();
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[50]);
}
function leye4() {
  pq.fill(pqallch[1]);
  pq.ellipse(0, 0, h[100]);
  pq.fill(pqallch[2]);
  pq.arc(0, 0, h[100], h[100], myRandom(0, PI * 2), myRandom(0, PI * 2));
  pq.fill(pqallch[3]);
  pq.ellipse(0, 0, h[75]);
  pq.fill(pqallch[4]);
  pq.arc(0, 0, h[100], h[100], myRandom(0, PI * 2), myRandom(0, PI * 2));
  pq.fill(pqallch[5]);
  pq.ellipse(0, 0, h[50]);
  pq.fill(pqallch[6]);
  pq.arc(0, 0, h[100], h[100], myRandom(0, PI * 2), myRandom(0, PI * 2));
  pq.fill(pqallch[7]);
  pq.ellipse(0, 0, h[25]);
}
