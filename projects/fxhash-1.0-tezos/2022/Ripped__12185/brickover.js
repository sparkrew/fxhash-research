function brickover() {
  bo = createGraphics(cs, cs);
  bo.strokeWeight(h[1]);
  bo.stroke("#76757522");
  for (let i = 0; i < 40000; i++) {
    bo.point(myRandom(0, cs), myRandom(0, cs));
  }
  bo.stroke("#27272722");
  for (let i = 0; i < 40000; i++) {
    bo.point(myRandom(0, cs), myRandom(0, cs));
  }
  bo.stroke("#53535322");
  for (let i = 0; i < 40000; i++) {
    bo.point(myRandom(0, cs), myRandom(0, cs));
  }
}
