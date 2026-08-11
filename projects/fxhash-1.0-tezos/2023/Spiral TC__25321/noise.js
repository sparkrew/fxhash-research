function drawNoiseCircle(r, position, shapeSides) {
  push();

  translate(position.x, position.y);
  rotate(0);

  var l = shapeSides;
  var noiseScale = 0.2;
  var noiseStrength = 20;

  beginShape();

  for (var i = 0; i < l; i++) {
    var n = noise(i * noiseScale, frameCount * noiseScale) * noiseStrength;
    var a = Math.PI / 180 * i * (360 / l);
    var newV = {
      x: position.x + Math.cos(a) * (r + n),
      y: position.y + Math.sin(a) * (r + n),
    };
    vertex(newV.x, newV.y);
  }

  endShape(CLOSE);

  pop();
}
