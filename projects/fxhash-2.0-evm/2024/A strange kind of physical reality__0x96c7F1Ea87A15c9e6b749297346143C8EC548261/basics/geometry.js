function dt(p0, p1){
  return dist(p0.x, p0.y, p1.x, p1.y)
}

function cpv(center, a, d){
  let x = center.x + sin(a) * d;
  let y = center.y + cos(a) * d;
  let pos = createVector(x, y);

  return pos;
}

function getAngle(p0, p1){
  let checkPoint = createVector(
    p1.x - p0.x,
    p1.y - p0.y
  );

  let origin = createVector(0, 100);

  let ab = origin.angleBetween(checkPoint);

  if (ab < 0) ab = abs(ab);
  else ab = map(ab, 180, 0, 180, 360);

  return ab;
}