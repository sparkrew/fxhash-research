function backA(w, h) {
  let margW = w * 0.002;
  let margH = h * 0.002;
  let margWend = w - margW;
  let margHend = h - margH;
  fill(0, 0, 100, 100);
  rect(0, 0, w, h);
  fill(100, 0, 0, 100);
  rect(margW, margH, margWend, margHend);
}
