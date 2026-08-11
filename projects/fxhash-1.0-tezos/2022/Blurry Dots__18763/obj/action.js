class myObj {
  constructor() {}

  back() {
    rdmGradient();
    background(bg.val)
    myFrame(width / 2, height / 2, 15, width, height, random(palette.clr))
    grainy(25)
  }

  show() {
    let grid = myGrid.val;

    if (myGrid.name == '13') {
      g1 = createGraphics(width * grid - mg, height * 0.922)
    } else if (myGrid.name == '7') {
      g1 = createGraphics(width * grid - mg, height * 0.88)
    } else if (myGrid.name == '3') {
      g1 = createGraphics(width * grid - mg, height * 0.775)
    } else {
      g1 = createGraphics(width * grid - mg, height * 0.66)
    }
    g1.background(random(palette.bgClr))

    let maxF = Math.floor(width / (g1.width + (mg)))
    let step = mg + g1.width
    push()
    translate(-width / 2, 0)
    for (let pix = 1; pix <= maxF - 1; pix++) {
      push()
      translate(pix * step, 0)

        push()
        let stepSize = fxrandBetween(5,25)
        print(stepSize)
        for (let x = 0; x < g1.width; x += stepSize) {
          for (let y = 0; y < g1.height; y += stepSize) {
            g1.fill(random(palette.clr))
            blendMode(DIFFERENCE)
            g1.drawingContext.filter = 'blur(' + (fxrandBetween(2, 25)) + 'px)';
            g1.ellipse(x, y, stepSize,stepSize)
          }
        }
        pop()
    
      g1.imageMode(CENTER)

      image(g1, width / 2, height / 2, g1.width, g1.height)
      pop()
    }
    pop()

    capturer.capture(cnv.canvas);
  }

  postprod() {
    grainy(5)
    progressClear();
    myPreview()
    // saver()
    // timer()
  }
}