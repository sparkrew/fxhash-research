let imgs = [];
let masks = [];

function preload() {
  // load all octocakes <3
  for (let i = 0; i <= 25; i++) {
    let img = loadImage("paintings/" + i + ".jpg");
    imgs.push(img);
  }

  // load all masks
  for (let i = 0; i <= 7; i++) {
    let mask = loadImage("masks/" + i + ".png");
    masks.push(mask);
  }
}

function setup() {
  let min_wh = min(windowWidth, windowHeight);
  var cnv = createCanvas(min_wh, min_wh);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  background(140);
  for (let i = 0; i < masks.length; i++) {
    reset();
    let chosen_im = int(fxrand() * imgs.length);
    let im_masked = imgs[chosen_im].get();
    im_masked.mask(masks[i]);
    image(im_masked, 0, 0, min_wh, min_wh);
  }

  let img = imgs[0].get();
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let strength = 20;
      let r = 127 + fxrand() * strength - strength/2;
      img.set(i, j, color(r, r, r));
    }
  }
  img.updatePixels();
  blendMode(HARD_LIGHT);
  image(img, 0, 0, min_wh, min_wh);

  noLoop();
}

function reset() {
  resetMatrix();
  imageMode(CORNER);
}

function draw() {
  fxpreview();
}
