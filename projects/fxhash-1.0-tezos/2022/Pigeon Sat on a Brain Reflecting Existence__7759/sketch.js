function preload() {
  im1 = loadImage("paintings/1.png");
  im2 = loadImage("paintings/2.png");
  im3 = loadImage("paintings/3.png");
  im4 = loadImage("paintings/4.png");
  im5 = loadImage("paintings/5.png");
  im6 = loadImage("paintings/6.png");
  im7 = loadImage("paintings/7.png");
  im8 = loadImage("paintings/8.png");
  im9 = loadImage("paintings/9.png");

  mask1 = loadImage("masks/1.png");
  mask2 = loadImage("masks/2.png");
  mask3 = loadImage("masks/3.png");
  mask4 = loadImage("masks/4.png");
  mask5 = loadImage("masks/5.png");

  pepe1 = loadImage("pepes/1.png");
  pepe2 = loadImage("pepes/2.png");
}

function setup() {
  let min_wh = min(windowWidth, windowHeight);
  var cnv = createCanvas(min_wh, min_wh);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  // console.log('Fxhash is: ' + fxhash);
  var fxhashLength = 49;
  let splitfxhash = split(fxhash, '');

  let value = [];
  let valueUnchar = [];

  for (i = 0; i < fxhashLength; i++) {
    value[i] = splitfxhash[i];
    valueUnchar[i] = unchar(value[i]);
  }
  // print(valueUnchar);

  background(255);

  var imgs = [im1, im2, im3, im4, im5, im6, im7, im8, im9];
  var pepes = [pepe1, pepe2];
  var masks = [mask1, mask2, mask3, mask4, mask5];
  for (let i = 0; i < 5; i++) {
    reset();
    let is_pepe = false;
    if ((i == 4) && (fxrand() < 0.1)) {
      is_pepe = true;
    }
    let chosen_im = valueUnchar[7 + i] % imgs.length;
    let im_masked = imgs[chosen_im].get();
    if (is_pepe) {
      chosen_im = valueUnchar[7 + i] % pepes.length;
      im_masked = pepes[chosen_im].get();
    }
    im_masked.mask(masks[i]);
    image(im_masked, 0, 0, min_wh, min_wh);
  }
  noLoop();
}

function reset() {
  resetMatrix();
  imageMode(CORNER);
}

function draw() {
  fxpreview();
}
