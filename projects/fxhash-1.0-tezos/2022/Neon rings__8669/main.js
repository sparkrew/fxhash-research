
function minmax(min, max){
  return Math.round(fxrand() * (max-min) + min);
}

function minmaxdouble(min, max){
  return fxrand() * (max-min) + min;
}



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



let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;
  colorMain = HSLToHEX(minmax(0, 360), minmax(50, 80), minmax(60, 80));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, accentColor, accentSecond, colorMain2, accentForth, accentFifth];

   let pallre;
   pallre = [1,1.5,2,3,4,5,6]
    let nCircles = 50;
    let nWaves = pallre[Math.floor(fxrand()*pallre.length)];

    let inter = 9;
    let whdf = minmaxdouble(2.6, 3.8);
    let clr = palette[Math.floor(fxrand()*palette.length)];
    function setup() {
      createCanvas(windowWidth, windowHeight);
    	colorMode(HSB, 100);
      noFill();
        }
    let okgf;
    okgf = minmax(1500, 4200);
    function draw() {
      background(8);

      let size = inter;
      for (let i = 1; i <= nCircles; i++) {
        strokeWeight(inter/14);
    		stroke(clr);
        circle(width/2, height/2, size);

        strokeWeight(inter/whdf);
        let delta = pow(i, 2)/okgf;
    		//let delta = pow(i, 3)/80000;

        let theta = cos(frameCount/25 - i/3)/4;
        for (let j = 0; j < nWaves; j++) {
    			stroke(clr);
          arc(width/2, height/2, size, size,
              theta - delta, theta + delta);
          theta += TWO_PI / nWaves;
        }

        size += inter;

      }
    }
