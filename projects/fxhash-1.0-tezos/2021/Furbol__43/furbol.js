function setup() {
  palette = palettess[int(fxrand()*palettess.length)]
  w = min(windowWidth, windowHeight)
  wx = w
  wy = w
  createCanvas(wx, wy);
  noStroke();


  blndModes = [HARD_LIGHT, SOFT_LIGHT, SCREEN]
  blnd = blndModes[int(fxrand()*blndModes.length)]
}

function granulate(gA){
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 4) {
    grainAmount = map(fxrand(),0,1,-gA,gA)
    pixels[i] = pixels[i]+gA;
    pixels[i + 1] = pixels[i+1]+grainAmount;
    pixels[i + 2] = pixels[i+2]+abs(grainAmount);
    pixels[i + 3] = pixels[i+3]+gA*5;
  }
  updatePixels();
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function draw() {
  var ctx = canvas.getContext("2d");

  // Create a linear gradient
  var gradient = ctx.createLinearGradient(0, 0, width, height);

  // Add three color stops
  gradient.addColorStop(0, palette[int(fxrand()*palette.length)]);
  gradient.addColorStop(1, palette[int(fxrand()*palette.length)]);

  // Set the fill style and draw a rectangle
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  granulate(15);
  blendMode(blnd)

  translate(wx/2,wy/2)

  NUM = map(fxrand(),0,1,20,550)

  rez = 0.05
  off = 100
  spacing = fxrand()*2

  R = w/2.5;

  for(n = 0; n<NUM; n++){

    r = R*sqrt(fxrand());
    theta = fxrand()*TAU;

    x = r*cos(theta)
    y = r*sin(theta)

    col = hexToRgb(palette[int(fxrand()*palette.length)])
    fill(col.r, col.g, col.b, fxrand()*55)
    ellipse(x,y,fxrand()*w/12)

    for(p = 0; p<50; p++){
      ellipse(x,y,fxrand()*w/12)
    }

    r = R*sqrt(fxrand());
    theta = fxrand()*TAU;

    x = r*cos(theta)
    y = r*sin(theta)

    col = hexToRgb(palette[int(fxrand()*palette.length)])
    fill(col.r, col.g, col.b, fxrand()*55)
    ellipse(x,y,fxrand()*w/30)

    for(p = 0; p<50; p++){
      ellipse(x,y,fxrand()*w/30)
    }
  }

  granulate(30);
  noLoop();
}
