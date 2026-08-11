let imgs = [];
let masks = [];
let mode;

function getModeString() {
  if (fxrand() < 0.1) {
      mode = "comics";
      return "NeuroComics!";
  } else {
    mode = "collage";
    return "NeuroCollage :)";
  }
}

function preload() {
  window.$fxhashFeatures = {
    "Mode": getModeString(),
  };

  // load all pigeons
  for (let i = 0; i <= 9; i++) {
    let img = loadImage("paintings/" + i + ".png");
    imgs.push(img);
  }

  // load all masks
  for (let i = 0; i <= 20; i++) {
    let mask = loadImage("masks/" + i + ".png");
    masks.push(mask);
  }
}

function setup() {
  let min_wh = min(windowWidth, windowHeight);
  var cnv = createCanvas(min_wh, min_wh);
  var cnv_x = (windowWidth - width) / 2;
  var cnv_y = (windowHeight - height) / 2;
  cnv.position(cnv_x, cnv_y);

  noSmooth();

  var hei = 512;
  var g = createGraphics(hei, hei);

  if (mode == "collage") {
    var start_x = int(fxrand() * hei);

    background(140);
    for (let i = 0; i < masks.length; i++) {
      reset();
      let chosen_im = int(fxrand() * imgs.length);
      let painting = imgs[chosen_im].get(start_x, 0, hei, hei);
      let maska = masks[i].get(start_x, 0, hei, hei);
      painting.mask(maska);
      g.image(painting, 0, 0, hei, hei);
    }
  } else {
    var mask_count = 2;
    var reps = 2;
    var prev_chosen = 0;
    var cur_x = 0;
    var cur_y = 0;
    for (let rep = 0; rep < reps; rep++) {
      for (let i = 0; i < mask_count; i++) {
        reset();
        var start_x = int(fxrand() * hei);
        let chosen_im = (prev_chosen + 1 + int(fxrand() * (imgs.length - 1))) % imgs.length;
        prev_chosen = chosen_im;
        let painting = imgs[chosen_im].get(start_x, 0, hei, hei);

        let maska = createGraphics(hei, hei);
        maska.erase();
        maska.rect(0, 0, hei, hei);
        maska.noErase();
        maska.noStroke();
        maska.rect(cur_x, cur_y, hei, hei);
        painting.mask(maska);
        g.image(painting, 0, 0, hei, hei);
        if (i > 0) {
          var wid = hei / 40;
          g.strokeWeight(1);
          g.stroke(0);
          g.rect(cur_x - wid / 2, 0, wid, hei);
          g.noStroke();
          wid -= 1;
          g.rect(cur_x - wid / 2, 0, wid, hei);
        }
        cur_x += hei / mask_count;
      }
      cur_x = 0;
      if (rep > 0) {
        var wid = hei / 40;
        g.strokeWeight(1);
        g.stroke(0);
        g.rect(0, cur_y - wid / 2, hei, wid);
        g.noStroke();
        wid -= 1;
        g.rect(0, cur_y - wid / 2, hei, wid);
        for (let i = 0; i < mask_count; i++) {
          if (i > 0) {
            g.rect(cur_x - wid / 2, 0, wid, hei);
          }
          cur_x += hei / mask_count;
        }
      }
      cur_x = 0;
      cur_y += hei / reps;
    }
  }

  image(g, 0, 0, min_wh, min_wh);

  reset();
  img = get();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let strength = 30;
      let r = 127 + fxrand() * strength - strength/2;
      img.set(i, j, color(r, r, r));
    }
  }
  img.updatePixels();
  blendMode(HARD_LIGHT);
  image(img, 0, 0, min_wh, min_wh);

  // filter(BLUR, 1);

  noLoop();
}


function reset() {
  resetMatrix();
  imageMode(CORNER);
}

function draw() {
  fxpreview();
}
