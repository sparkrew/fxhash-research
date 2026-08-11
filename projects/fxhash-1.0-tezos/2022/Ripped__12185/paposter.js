var paca1 = [];
var paca2 = [];
var pacch1 = [];
var pacch2 = [];
function paposter() {
  noiseSeed(10000);
  pacsw = cs * 0.7;
  pacsh = cs;
  pa = createGraphics(pacsw, pacsh);
  choosecolor();
  paca1 = [
    features.pc0,
    features.pc1,
    features.pc2,
    features.pc3,
    features.pc4,
  ];
  pacch1 = shuffleArray(paca1);
  paca2 = [
    features.pc10,
    features.pc11,
    features.pc12,
    features.pc13,
    features.pc14,
  ];
  pacch2 = shuffleArray(paca2);
  pa.background(pacch2[0]);
  pa.stroke(features.bcol);
  pa.strokeWeight(h[2]);
  pa.fill(pacch2[1]);
  pa.rect(h[20], h[20], h[660], h[960]);
  pa.strokeWeight(h[3]);
  pa.fill(pacch2[2]);
  pa.rect(h[35], h[35], h[630], h[930]);
  shufflearrays();
  pa.fill(features.dcol);
  choosefont();
  pa.noStroke();
  pa.textAlign(CENTER);
  pa.textWrap(WORD);
  let titlech = myRandom(0, 1);
  if (titlech > 0.5) title(2);
  if (titlech <= 0.5) title(1); //title
  pa.textFont(tfont);
  pa.textSize(h[170] * scalar);
  pa.text(tt, h[40], h[70], h[620], h[40]);
  pa.noStroke();
  sentence("u", 1); //heading1
  pa.textFont(hfont);
  pa.textSize(h[70] * scalar);
  pa.text(ts, h[40], h[270], h[620], h[20]);
  sentence("u", 1); //heading2
  pa.textFont(hfont);
  pa.textSize(h[70] * scalar);
  pa.text(ts, h[40], h[350], h[620], h[20]);
  date(); //date
  pa.textSize(h[55] * scalar);
  pa.textFont(hfont);
  pa.text(tdate, h[45], h[460], h[620], h[20]);
  sentence("m", 3); //text
  pa.textFont(bfont);
  pa.textSize(h[30]);
  pa.text(ts, h[50], h[600], h[600], h[160]);
  tel(); //contact
  pa.textSize(h[30]);
  pa.textFont(bfont);
  pa.text(ttel, h[40], h[800], h[620], h[20]);
  email();
  pa.text(te, h[40], h[840], h[620], h[20]);
  web();
  pa.text(tweb, h[40], h[880], h[620], h[20]);
  pavripleft();
  pavripright();
  pavriptop();
  pavripbottom();
}
