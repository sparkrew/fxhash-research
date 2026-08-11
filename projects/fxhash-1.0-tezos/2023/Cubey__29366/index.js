const sp = new URLSearchParams(window.location.search)

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.id("my-canvas");
  noLoop();
}

function draw() {
  background(220);
  
  for (let i = 0; i < 10; i++) {
    let c1 = color($fx.rand() * 255, $fx.rand() * 255, $fx.rand() * 255);
    let c2 = color($fx.rand() * 255, $fx.rand() * 255, $fx.rand() * 255);
    
    let x = $fx.rand() * width;
    let y = $fx.rand() * height;
    let w = 20 + $fx.rand() * 80;
    let h = 20 + $fx.rand() * 80;
    
    drawGradientRect(x, y, w, h, c1, c2);
  }
}

function drawGradientRect(x, y, w, h, c1, c2) {
  for (let i = x; i <= x + w; i++) {
    let inter = map(i, x, x + w, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(i, y, i, y + h);
  }
}
