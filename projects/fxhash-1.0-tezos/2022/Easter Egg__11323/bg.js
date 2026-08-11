function initBg() {
  cBg.fillStyle = BG_COLOR;
  cBg.fillRect(0, 0, width, height);

  for (let i = 0; i < rndInt(150, 250); i++) {
    renderBgTexture();
  }
}
function renderBgTexture() {
  if (bgTicks > BG_TICKS_MAX) {
    return;
  }
  bgTicks++;
  cBg.beginPath();
  cBg.globalCompositeOperation = "source-over";
  cBg.strokeStyle = BG_STROKES;
  cBg.lineWidth = BG_STROKE_WIDTH;
  for (let i = 0; i < 2222; i++) {
    let p = Vec2.random(10);
    cBg.moveTo(p.x, p.y - rndInt(5, 10));
    cBg.lineTo(p.x + rndInt(-10, 10), p.y + rndInt(-10, 10));
  }
  cBg.stroke();
  cBg.closePath();
}
