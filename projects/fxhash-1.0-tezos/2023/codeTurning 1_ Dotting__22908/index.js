let RATIO = 1.2;
let WIDTH = 1500;
let HEIGHT = Math.round(WIDTH*RATIO);
let graphics;
 

function setup() {
  pixelDensity(1);
  const seed = (fxrand() * 9999999);
  noiseSeed(seed);
  randomSeed(seed);
  const anchura = window.innerWidth;
  const altura = anchura * 1.2;
  createCanvas(anchura, altura);
  colorMode(HSB, 360, 100, 100, 100);
  
  graphics = createGraphics(WIDTH,HEIGHT);
  graphics.colorMode(HSB, 360, 100, 100, 100);
  graphics.background(25, 5, 95, 100);



  
  graphics.noStroke();
  var color_list = [(color(46, 76, 95, 100)), (color(209, 85, 65, 100)), (color(303, 19, 75, 100)), (color(185, 61, 85, 100)), (color(188, 99, 68, 100)), (color(88, 44, 76, 100)), (color(153, 63, 64, 100)), (color(173, 83, 65, 100)), (color(212, 73, 58, 100)), (color(0, 71, 80, 100)), (color(16, 69, 98, 100)), (color(60, 76, 63, 100)), (color(359, 73, 75, 100)), (color(12, 39, 83, 100)), (color(42, 87, 97, 100)), (color(337, 33, 99, 100)), (color(203, 44, 85, 100)), (color(0, 43, 99, 100)), (color(240, 15, 81, 100)), (color(339, 67, 89, 100)), (color(300, 14, 85, 100)), (color(169, 100, 54, 100)), (color(9, 47, 98, 100)), (color(18, 62, 96, 100)), (color(159, 100, 56, 100)), (color(47, 23, 71, 100))]; //array de colores  
  diam = (WIDTH * 0.04) * 1
  margen = (diam * random(1.2, 2)) * random(0.8, 2.1);
  for (s = 26; s > 4; s--) {
    color_list.splice(int(random(0, s)), 1);
  }
  for (a = margen + 1 * random(0, 0.016 * WIDTH); a <= (WIDTH - margen + 1 * (random(0, 0.016 * WIDTH))); a = a + (diam * 0.9)) {
    var x = a
    if (x % 2 == 0) {
      for (d = margen; d <= (HEIGHT - margen + 2 * random(-0.016 * HEIGHT, 0.016 * HEIGHT)); d = d + (diam * 0.9)) {
        var y = d
        var mainColor1 = color_list[int(random(0, 4))];
        var mainColor1b = color(hue(mainColor1) + random(-25, 25), saturation(mainColor1) + random(-10, 10), brightness(mainColor1) + random(-10, 10), 100);
        if (y % 2 == 0) {
          var v = random(100);
          if (v >= 90) {
            consombra(x, y, diam * random(0.9, 1.1), mainColor1b);
          } else {
            mancha(x + random(-0.016 * WIDTH, 0.016 * WIDTH), y + random(-0.016 * HEIGHT, 0.016 * HEIGHT), diam * random(0.9, 1.1), diam * random(0.9, 1.1), mainColor1b);
          }
        }
      }
    } else {
      for (d1 = margen; d1 <= (HEIGHT - margen + 1 * random(-0.016 * HEIGHT, 0.016 * HEIGHT)); d1 = d1 + (diam * 0.9)) {
        var y1 = d1
        var mainColor2 = color_list[int(random(0, 4))];
        var mainColor2b = color(hue(mainColor2) + random(-25, 25), saturation(mainColor2) + random(-10, 10), brightness(mainColor2) + random(-10, 10), 100);
        if (y1 % 2 == 0) {
        } else {
          var w = random(100);
          if (w >= 90) {
            consombra(x, y1, diam * random(0.9, 1.1), mainColor2b);
          } else {
            mancha(x + random(-0.016 * WIDTH, 0.016 * WIDTH), y1 + random(-0.016 * HEIGHT, 0.016 * HEIGHT), diam * random(0.9, 1.1), diam * random(0.9, 1.1), mainColor2b);
          }
        }
      }
    }
  }
  fxpreview();

 canvasResize();
}


// ------------ FUNCTIONS ------------ // 
function mancha(x, y, radioX, radioY, co) {
  diam = WIDTH * 0.04
  for (var b = 0; b <= random(1, 11); b++) {
    graphics.fill(co);
    graphics.ellipse(random(x - radioX / 12, x + radioX / 12), random(y - radioY / 12, y + radioY / 12), radioX / 1.5, radioY / 1.5);
  }
  var condGota = random(0, 100);
  if (condGota >= 70) {
    var gotacentX = [(x + radioX * random(0, 0.5)), (x - radioX * random(0, 0.5))];
    var gotacentY = [(y + radioY * random(0, 0.5)), (y - radioY * random(0, 0.5))];
    var miniradius = diam * random(0.05, 0.17);
    graphics.fill(co);
    for (var c = int(random(4)); c > 0; c--) {
      var miniradius2 = miniradius * random(-1, 1)
      graphics.ellipse(gotacentX[int(random(-1, 2))], gotacentY[int(random(-1, 2))], miniradius2, miniradius2);
    }
  }
}
function consombra(x, y, radioX, co) {
  graphics.fill(0, 0, 100, 100);
  graphics.ellipse(x - 0.001 * WIDTH, y - 0.001 * WIDTH, radioX * (2 / 3), radioX * (2 / 3));
  graphics.fill(0, 0, 0, 50);
  graphics.ellipse(x + 0.001 * WIDTH, y + 0.001 * WIDTH, radioX * (2 / 3), radioX * (2 / 3));
  graphics.fill(co);
  graphics.ellipse(x, y, radioX * (2 / 3), radioX * (2 / 3));
}

// RESIZE

function draw() {
 

  // copio graphics en canvas adaptando el tamaño
  imageMode(CENTER);
  image(graphics, WIDTH / 2, HEIGHT / 2, WIDTH, HEIGHT);

  noLoop();
}

window.addEventListener("resize", (e) => {
  canvasResize();
  loop();
});

function canvasResize() {
  let W = window.innerWidth;
  let H = window.innerHeight;
  if (W > H / RATIO) {
    HEIGHT = H;
    WIDTH = H / RATIO;
  } else {
    WIDTH = W;
    HEIGHT = W * RATIO;
  }
  resizeCanvas(WIDTH, HEIGHT);
}