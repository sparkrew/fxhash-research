let loadTime = 0;
let loaded = false;
let drawn = false;

function setup() {
  console.log($fx.hash)

  calculateCanvasSize();
  createCanvas(sz.w, sz.h);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);

  options();

  settings();

  console.log(sx.p.n)


  let flowHueAdj = false; 
  if (sx.p.flowHueAdj > 0) flowHueAdj = true;

  // this is how features can be defined
  $fx.features({
    "Palette" : sx.p.n,
    "Shape" : op.shape,
    "Position" : op.shapePos.name,

    "Num nodes" : sx.c.numNodes,
    "Particle style" : op.df.name,
    "Wave style 1" : op.rl.name,
    "Waves style 2" : op.fl.name,
    "Hue adjust" : sx.p.flowHueAdj,
    "Color layout": op.colorChoosing,
  })

}

function draw() {
  
  if (!loaded){
    background(sx.p.bg)
    let c = color(sx.p.basic);
    c.setAlpha(60);
    fill(c)
    textAlign(CENTER, CENTER)
    text("l  o  a  d  i  n  g", sz.w * 0.5, sz.h * 0.5)

    createConstellations();
    createRibbons();
    createLooseFlows();
    loaded = true;
  }
  else if (!drawn) {
    background(sx.p.bg)
    push();
    translate(sz.ts.x, sz.ts.y);
    scale(sz.f.x, sz.f.y);
    translate(sz.ts.rx, sz.ts.ry);
    // draw stuff here 

    drawRibbons();
    drawLooseFlows();
    drawConstellations();
    pop();
    

    loadTime = millis();
    
    logData();
    drawn = true;

    $fx.preview()
  }

  checkResizeNeeded();
}




