function getRandomLine(ps) {
  for (let i = 0; i < rndInt(5, 15); i++) {
    let p = Vec2.random(40);
    ps.push(p);
    p.dir = rndFloat(0, PI2);
    p.dirChange = rndFloat(0.005, 0.05);
    p.speed = rndFloat(1, 1.01);
    p.mot = new Vec2(0, 0);
  }
  return smoothLineThroughPoints(ps);
}

function getMiddleLine(ps) {
  let marg = 400;
  ps.push(new Vec2(marg, marg));
  ps.push(new Vec2(width - marg, marg));
  ps.push(new Vec2(width - marg, height - marg));
  ps.push(new Vec2(marg, height - marg));
  ps.forEach((p) => {
    p.dir = rndFloat(0, PI2);
    p.dirChange = rndFloat(-0.2, 0.2);
    p.speed = rndFloat(0.5, 5);
    p.mot = new Vec2(0, 0);
  });
  return smoothLineThroughPoints(ps);
}
