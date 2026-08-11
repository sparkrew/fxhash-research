function COR() {
  push();
  Lgradient();
  noStroke();
  rect(xx / 2, yy / 2, xx, yy);
  pop();
}

function molho() {
  var molho = {
    locationX: random(xx),
    locationY: random(yy),
    size: rnd_btw(xx / 20, random(fragA) * (xx / random(2, 5))),
  };
  push();
  rotate(frameCount * (TAU / 4));
  circle(molho.locationX, molho.locationY, molho.size * random(2));
  circle(molho.locationX + random(xx / 4), molho.locationY, molho.size);
  pop();
}

function molho1() {
  noStroke();
  var molho = {
    locationX: random(xx),
    locationY: random(yy),
    size: rnd_btw(xx / 2, random(fragB) * (xx / random(20, 50))),
  };
  switch (padroes) {
    case 0:
      circle(
        molho.locationX,
        molho.locationY,
        (sin(molho.size) * molho.size) / 2
      );
      circle(molho.locationX, molho.locationY, molho.size * random(2));
      break;
    case 1:
      circle(
        molho.locationX,
        molho.locationY,
        (sin(molho.size) * molho.size) / 2
      );
      circle(molho.locationX, molho.locationY, molho.size * random(2));
      ellipse(
        molho.locationX,
        molho.locationY,
        molho.size / random(2),
        molho.size * 10
      );
      break;
    case 2:
      circle(
        molho.locationX,
        molho.locationY,
        (sin(molho.size) * molho.size) / 2
      );
      ellipse(
        molho.locationX,
        molho.locationY,
        molho.size / 52,
        molho.size * random(20)
      );
      break;
    default:
  }
}
