//FX RAND options
//
//
//
//
//
//
//dont change
function randfx(min, max){
  return Math.round(fxrand() * (max-min) + min);
}
function randfxdouble(min, max){
  return fxrand() * (max-min) + min;
}
let colorMain, accentColor, accentSecond, colorMain2, accentForth, palette;
  colorMain = HSLToHEX(randfx(0, 360), randfx(25, 35), randfx(26, 30));
    accentColor = tinycolor(colorMain).spin(-10).toString();
    accentSecond = tinycolor(accentColor).spin(-10).toString();
    colorMain2 = tinycolor(colorMain).complement().toHexString();
    accentForth = tinycolor(colorMain2).spin(-10).toHexString();
    accentFifth = tinycolor(accentForth).spin(-10).toHexString();
    palette = [colorMain, colorMain2];
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
//
//
//
//
let particles = [];
 const num = 15000;
 const noiseScale=0.015;
 const speed = 1;

 function setup() {
   createCanvas(650, 650);
   for (let i = 0; i <num; i++){
     particles.push(createVector(randfx(0, width), randfx(0, height)));
   }
   noiseSeed(randfx(0, 1000));
   stroke(HSLToHEX(randfx(0, 360), randfx(10, 35), randfx(30, 50)));
 }



 function draw() {
   background(255, 3);
   for (let i = 0; i <num; i++){
     let p = particles[i];
     point(p.x, p.y);
     let n = noise(p.x * noiseScale,p.y * noiseScale);
     let a = TWO_PI * n;
     p.x += cos(a)*speed;
     p.y += sin(a)*speed;
     if (!onScreen(p)){
       p.x= randfx(0, width);
       p.y= randfx(0, height);
     }
   }
 }

 function onScreen(v){
   return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
 }
