class myObj {
  constructor() {
    this.posX = width / 2;
    this.posY = height / 2;
    this.N = 0;
    this.NE = 1;
    this.E = 2;
    this.SE = 3;
    this.S = 4;
    this.SW = 5;
    this.W = 6;
    this.NW = 7;
    this.stepSize = 10;
    this.diameter = 5;
    this.count = 100;
    this.strokeSize = 0.1
    this.offset = 0.51

  }

  back() {
    rectMode(CENTER)
    angleMode(DEGREES)

    radialGradientFill(width / 2, height / 2, height * 2, width / 2, height / 2, 0, palette.bgClr[1], palette.bgClr[0])
    rect(width/2,height/2, width, height)
    fxrandArray(palette.clr)
    grainy(15)
    push()
    blendMode(OVERLAY)
    myTexture(width, height, 1, 0.8, 0.002, 0.005)
    pop()
  }

  show() {
    // document.body.style.cursor = 'wait';
    rectMode(CENTER)
    blendMode(BLEND)
    stroke(palette.extraClr)
    for (let i = 0; i < this.count; i++) {
      let direction = floor(random(0, 8));
      this.diameter = map(noise(this.offset), 0, 1, 0, 5)
      strokeWeight(this.strokeSize)

      if (direction == this.N) {
        this.posY -= this.stepSize
      }
      else if (direction == this.NE) {
        this.posX += this.stepSize
        this.posY -= this.stepSize
      }
      else if (direction == this.E) {
        this.posX += this.stepSize
      }
      else if (direction == this.SE) {
        this.posX += this.stepSize
        this.posY += this.stepSize
      }
      else if (direction == this.S) {
        this.posY += this.stepSize
      }
      else if (direction == this.SW) {
        this.posX -= this.stepSize
        this.posY += this.stepSize
      }
      else if (direction == this.W) {
        this.posX -= this.stepSize
      }
      else if (direction == this.NW) {
        this.posX -= this.stepSize
        this.posY -= this.stepSize
      }

      if (this.posX > width) { this.posX = 0 }
      if (this.posX < 0) { this.posX = width }
      if (this.posY < 0) { this.posY = height }
      if (this.posY > height) { this.posY = 0 }
      this.offset += 0.023;
      // fill(palette.extraClr)
      fill(random(palette.clr))


      if (fxrand() < 0.001) {
        for (let i = 25; i > 1; i-=2) {
          strokeWeight(1)
          // stroke(palette.extraClr)
          stroke(random(palette.clr))
          ellipse(this.posX + this.stepSize / 2, this.posY + this.stepSize / 2, this.diameter * i)
        }
      }
      else if (fxrand() < 0.00015) {
        for (let i = 330; i > 1; i-=5) {
          strokeWeight(1)
          // stroke(palette.clr[0])
          stroke(random(palette.clr))
          noFill()
          ellipse(this.posX + this.stepSize / 2, this.posY + this.stepSize / 2, this.diameter * i)
        }
      }
      else if (fxrand() < 0.01) {
        ellipse(this.posX + this.stepSize / 2, this.posY + this.stepSize / 2, this.diameter * 5)
      }
      else {
        ellipse(this.posX + this.stepSize / 2, this.posY + this.stepSize / 2, this.diameter)
      }
    }
  }

  postProd() {
    progressClear();
    document.body.style.cursor = 'default';
    myFrame(width / 2, height / 2, 15, width, height, random(palette.clr))
    grainy(15)
    myPreview()
    // saver()
    // timer()
  }
}