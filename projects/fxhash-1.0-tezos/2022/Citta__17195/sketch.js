let centerx
let centery;
const up = "up"

let seed;
let counter = 0;
let isSaving = false;
let style;
let StyleIndex;
let styles = [{ function: MonoChrome }, { function: RandomLand }, { function: RandomLand2 }, { function: FullRange }, { function: RandomLand4 }, { function: RandomLand5 }, { function: RandomLand6 },
{ function: Multimono }, { function: MonoBlocks }, { function: PolygonCityMonoBlocks }, { function: PolygonCityColorBlocks }, { function: SpiralCityMonoBlocks }, { function: SpiralCityColorBlocks },
]

let isSimulating = false;
let finishedRendering = false;
function setup() {
  createCanvas(400, 400);
  windowResized();
  colorMode(HSB);
  angleMode(DEGREES);
  seed = xmur3(fxhash)(); //ophash: ooQ8V6UhnLoBbZbVdvVYQFPWHD3C477y9ZregkafnuutC7DWd2h

  randomSeed(seed);
  console.log("ophash: " + fxhash);
  console.log('seed %s', seed)

  StyleIndex = IntRandRange(0, styles.length)

  noLoop();

}




async function draw() {

  if (isSaving === false) {
    windowResized()
  }
  randomSeed(seed)


  noStroke();

  background(250, 10, 10);








  style = styles[StyleIndex];
  console.log(style)
  l = await style.function()
  window.$fxhashFeatures = l
  //l = await PolygonCityColorBlocks()
  fxpreview();


  if (isSimulating) {
    if (finishedRendering) {
      saveBol = false;
      saveCanvas(canvas, l.Name + fxhash, 'png')

      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }




  console.log(window.$fxhashFeatures)


  noLoop();//


}











let overlayDepthMask = (colors = DepthMaskColors[1]) => {
  blendMode(MULTIPLY)
  let gr = drawingContext.createLinearGradient(width / 2, 0, width / 2, height);
  gr.addColorStop(colors.c1[4], color(colors.c1[0], colors.c1[1], colors.c1[2], colors.c1[3]));
  gr.addColorStop(colors.c2[4], color(colors.c2[0], colors.c2[1], colors.c2[2], colors.c2[3]));
  gr.addColorStop(colors.c3[4], color(colors.c3[0], colors.c3[1], colors.c3[2], colors.c3[3]));
  drawingContext.fillStyle = gr;
  rect(0, 0, width, height)
  blendMode(BLEND)
}





function windowResized() {
  let w = min(window.innerWidth, window.innerHeight);
  resizeCanvas(w, w);
}







let radialGradient = (opacity = 1, bm = BLEND, posSettings, colors) => {

  blendMode(bm);
  let radialGradient = drawingContext.createRadialGradient(posSettings.x1 * height / 1080, posSettings.y1 * height / 1080, posSettings.firstSize * height / 1080,
    posSettings.x2 * height / 1080, posSettings.y2 * height / 1080, posSettings.secondSize * height / 1080);
  radialGradient.addColorStop(colors.c1[3], color(colors.c1[0], colors.c1[1], colors.c1[2], opacity))
  radialGradient.addColorStop(colors.c2[3], color(colors.c2[0], colors.c2[1], colors.c2[2], opacity))
  radialGradient.addColorStop(colors.c3[3], color(colors.c3[0], colors.c3[1], colors.c3[2], opacity))
  drawingContext.fillStyle = radialGradient;
  ellipse(posSettings.circlePosX * height / 1080, posSettings.circlePosX * height / 1080, width * 2.6, height * 2.6)
  //ellipse(width *0.8, height * 0.5, width * 2.6, height * 2.6)
  blendMode(BLEND)
}




function keyPressed() {
  drawingContext.imageSmoothingEnabled = true;
  drawingContext.imageSmoothingQuality = "high";
  if (keyCode === 83) {

    isSaving = true;
    resizeCanvas(8000, 8000);
    draw();
    saveCanvas("Citta8000", 'PNG')
    isSaving = false;
    draw();
  }
  if (keyCode === 49) {
    exportPNG(1000)
  }
  if (keyCode === 50) {
    exportPNG(2000)
  }
  if (keyCode === 51) {
    exportPNG(3000)
  }
  if (keyCode === 52) {
    exportPNG(4000)
  }
  if (keyCode === 53) {
    exportPNG(5000)
  }
  if (keyCode === 54) {
    exportPNG(6000)
  }
  if (keyCode === 55) {
    exportPNG(7000)
  }
  if (keyCode === 56) {
    exportPNG(8000)
  }
  if (keyCode === 57) {
    exportPNG(10000)
  }


}


let exportPNG = (res) => {
  isSaving = true;
  resizeCanvas(res, res);
  draw();
  saveCanvas("Citta" + res, 'PNG')
  isSaving = false;
  draw();

}




