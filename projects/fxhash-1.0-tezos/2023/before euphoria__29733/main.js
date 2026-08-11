function randfx(min, max){
  return Math.round($fx.rand() * (max-min) + min);
}
function fxdouble(min, max){
  return $fx.rand() * (max-min) + min;
}

let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;
  colorMain = HSLToHEX(randfx(0, 360), randfx(30, 40), randfx(30, 50));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, accentColor, accentSecond, colorMain2, accentForth, accentFifth];

function HSLToHEX(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
const HSLToRGB = (h, s, l) => {
  s /= 100;
  l /= 100;
  const k = n => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

//
//
let clr1 = randfx(0, 360);
let clr2 = randfx(0, 360);
let col = fxdouble(0.300,0.900);
let col2 = fxdouble(0.1,0.5)
let colm = fxdouble(0.1,0.5);





let colr = fxdouble(0.1,0.8)
let tm = 4000
function setup() {
  createCanvas(620, 620);
  noiseSeed(randfx(0,1000));
  randomSeed(randfx(0,1000));
  background(170);
  colorMode(HSB,255)
  t = 0 ; cont = 1
  setTimeout(disable, tm);
}

function noiseDW(x,y) {
  return(noise(x,y,2*noise(x*2+11,y*2+31)))
}

function disable(){
  enabled = false;
  fxpreview()
}
let enabled = true;

function draw() {
  if (enabled){
    if (t++ % 400 == 0)
    {
      background(0);
      noiseSeed(random(1000));
    }

    if (t % 400 < 100)
      for(c=0;c<3000;c++)
      {

        let distance = random(width / 2);
        let angle = random(TWO_PI);
        x0 = width / 2 + distance * cos(angle);
        y0 = height / 2 + distance * sin(angle);

        x0 = constrain(x0, width / 4, 3 * width / 4);
        y0 = constrain(y0, height / 4, 3 * height / 4);

        d = random(2 * PI);
        dd = -.3 + random(.6);
        h0 = noiseDW(x0 / 400, y0 / 400);

        for(cont = 1; cont < 100; cont++)
        {
          l = 5 + random(5);
          x1 = x0 + l * sin(d);
          y1 = y0 + l * cos(d);
          h1 = noiseDW(x1 / 400, y1 / 400);

          if (abs(h0 - h1) < .25 * abs(h0 - noiseDW((x0 - l * cos(d)) / 400, (y0 + l * sin(d)) / 400)))
          {
            stroke(color(d / PI * 256, h0 > colr ? 175 - (h0 - .5) * 1024 : 20, h0 > .5 ? 50 * log((h0 - .5) * 200) : 200 + h0 * 100));
            strokeWeight(1.5);
            line(x0, y0, x1, y1);
          }
          else cont = 1000;
          x0 = x1;
          y0 = y1;
          h0 = h1;
          d += dd;
        }
      }
  }
}



