//<<Breathing Redux>>. Created by Grodarh, twitter: @grodarh, Kyiv, 12.2024. Copyright (c) Grodarh. Licensed under CC BY-NC-SA 4.0 (https://creativecommons.org/licenses/by-nc-sa/4.0);
let r, buf, counter, gframes, rad, w, wg, mg, col, rc = 60;
let a, b, c, d;
let fill = false;
let isPaused = false;
let currentFrameRate = 10;
let rcValues = [0, 20, 40, 60, 80, 100, 120];
let currentIndex = 0;
let cv = rcValues[currentIndex];

function setup() {
  console.log("<<Breathing Redux>>. Created by Grodarh, twitter: @grodarh, Kyiv, 12.2024. Copyright (c) Grodarh. Licensed under CC BY-NC-SA 4.0.");
  console.log("Fxhash: " + $fx.hash);
  console.log("Iteration: " + $fx.iteration);
  let seed = floor($fx.rand() * 99999999); 
  randomSeed(seed); noiseSeed(seed);
  console.log("Default Frame Rate: " + currentFrameRate);
  rc = int(random(2, 7)) * 20;
  if (rc === 120) {
    console.log("Iteratin Color Mode: (HSB, 60)");
    } else {
        console.log("Iteratin Color Mode: (RGB, " + rc +")");
      }
  initCanvas(2000); col = false;
}

function draw_rotate_rect(g, x, y, rect_size, r) {
  g.translate(x, y);
  g.rotate(r);
  g.rect(0, 0, rect_size, rect_size);
  g.resetMatrix();
}

function draw() {
  if (!isPaused) {
  background(0); mg.background(0);
  mg.strokeWeight(1);
  let x = 5 ; 
  let cR = 0; let cG = 0; let cB = 0;
  a = 0; b = 0; c = 0; d = 0;
  if ((col===true) && (cv===20)) {
    if (r < 7) {
      cR = random(0.30, 0.99) * 55;
      cG = random(0.30, 0.99) * 55;
      cB = random(0.30, 0.99) * 255;
    } else if (r >= 7 && r < 15) {
      cR = random(0.30, 0.99) * 155;
      cG = random(0.30, 0.99) * 100;
      cB = random(0.30, 0.99) * 200;
    } else if (r >= 15 && r < 25) {
      cR = random(0.30, 0.99) * 50;
      cG = random(0.30, 0.99) * 220;
      cB = random(0.30, 0.99) * 220;
    }
    mg.stroke(cR, cG, cB);
    if (fill === true) {
      mg.fill(cR, cG, cB);
    } else {
      mg.noFill();
    }
  } 
  while (x < wg) {
    let y = 5 ; 
    while (y < wg) {
      let mx = 0.09 * (x - y) / r;
      let my = 0.09 * (y - x) / r;
      if (mx > 4 || my > 4) {
        mx = 4; my = 4;
      }
   if (col===false) {
     if (r < 7) {
        cR = random() * 55;
        cG = random() * 55;
        cB = random() * 255;
      } else if (r >= 7 && r < 15) {
        cR = random() * 155;
        cG = random() * 100;
        cB = random() * 200;
      } else if (r >= 15 && r < 25) {
        cR = random() * 50;
        cG = random() * 220;
        cB = random() * 220;
      }
      mg.stroke(cR, cG, cB); 
      if (fill === true) {
        mg.fill(cR, cG, cB);
      } else {
        mg.noFill();
      }
   }
   rad = 1.7 * PI * sin(mx); 
   switch ($fx.iteration) {
    case 55:  
      a = (y+x)/wg * 5.4 * cos(mx + 1/my) * sqrt(60 * log(1.5 * x + (mx - my)) ) | (x-y) | (0.2 + abs(sin(x / y))); 
      b = (y+x)/wg * 5.4 * cos(my + 1/mx) * sqrt(60 * log(1.5 * y + (mx + my)) ) | (x-y) | (0.2 + cos(y / x));
      c = (y+x)/wg * 5.4 * sin(mx + 1/my) * sqrt(60 * log(1.5 * x + (mx * my)) ) | (x-y) | (0.2 + abs(cos(x / y)));
      d = (y+x)/wg * 5.4 * sin(my + 1/mx) * sqrt(60 * log(1.5 * y + (mx - my)) ) | (x-y) | (0.2 + tan(y / x));
      break;
    case 54:  
      a = (y+x)/wg * 5.4 * cos(mx + 1/my) * sqrt(60 * log(1.5 * x + (mx - my)) )  / (0.05 + sin(x / y)); 
      b = (y+x)/wg * 5.4 * cos(my + 1/mx) * sqrt(60 * log(1.5 * y + (mx + my)) )  / (0.05 + cos(y / x));
      c = (y+x)/wg * 5.4 * sin(mx + 1/my) * sqrt(60 * log(1.5 * x + (mx * my)) )  / (0.05 + cos(x / y));
      d = (y+x)/wg * 5.4 * sin(my + 1/mx) * sqrt(60 * log(1.5 * y + (mx - my)) )  / (0.05 + tan(y / x));
      break;
    case 53:  
      a = 12.4 * sqrt(90 * sin((log(x) % 50) * 1 / my) + x % y * log(x / y) +x);
      b = 12.4 * sqrt(90 * sin((log(y) % 50) * 1 / my) + y % x * log(y / x) +y);
      c = 12.4 * sqrt(90 * tan((log(x) % 50) * 1 / my) + x % y * log(x / y) +x);
      d = 12.4 * sqrt(90 * tan((log(y) % 50) * 1 / my) + y % x * log(y / x) +y);
      break;
    case 52:  
      a = 16.4 * sqrt(190 * sin((log(x) % 50) * mx / (0.01+my)) + x % y) |x/my;
      b = 16.4 * sqrt(190 * sin((log(y) % 50) * my / (0.01+mx)) + y % x) |y/mx;
      c = 16.4 * sqrt(190 * tan((log(x) % 50) * mx / (0.01+y)) + x % y)  |x/my;
      d = 16.4 * sqrt(190 * tan((log(y) % 50) * my / (0.01+x)) + y % x)  |y/mx;  
      break;
    case 51:  
      a = 26.4 * sqrt(150*cos(y / x)) % (x * mx ) | mx | my; 
      b = 26.4 * sqrt(150*cos(x / y)) % (y * my ) | mx | my;
      c = 26.4 * sqrt(150*sin(y / x)) % (x * mx ) | mx | my;
      d = 26.4 * sqrt(150*sin(x / y)) % (y * my ) | mx | my;  
      break;
    case 50:  
      a = 26.4 * sqrt(150*sin(y / x)) % (x * mx ) | mx | my; 
      b = 26.4 * sqrt(150*sin(x / y)) % (y * my ) | mx | my;
      c = 26.4 * sqrt(150*sin(y / x)) % (x * mx ) | mx | my;
      d = 26.4 * sqrt(150*sin(x / y)) % (y * my ) | mx | my;  
      break;
    case 49:  
      a = 26.4 * sqrt(250*sin(y / x)) % (x * mx ) | mx | my; 
      b = 26.4 * sqrt(250*sin(x / y)) % (y * my ) | mx | my;
      c = 26.4 * sqrt(250*sin(y / x)) % (x * mx ) | mx | my;
      d = 26.4 * sqrt(250*sin(x / y)) % (y * my ) | mx | my;  
      break;  
    case 48:   
      a = 16.4 * sqrt(cos(x) / sin(mx) | (mx ^ x)); 
      b = 16.4 * sqrt(cos(y) / sin(my) | (my ^ y));
      c = 16.4 * sqrt(cos(x) * sin(mx) | (mx ^ x));
      d = 16.4 * sqrt(cos(y) * sin(my) | (my ^ y));
      break;
    case 47:  
      a =  14.4 * sqrt(90 * sin(x | mx | my ) % log(y | my | mx ) | x); 
      b =  14.4 * sqrt(90 * sin(y | my | mx ) % log(x | mx | my ) | y);
      c =  14.4 * sqrt(90 * sin(x | mx | x ) % log(y | my | x ) | x);
      d =  14.4 * sqrt(90 * sin(y | my | y ) % log(x | mx | y ) | y);
      break;
    case 46:  
      a = mx * 3.2 * sqrt(120 * sin(log(x) * mx % (w-x) % (0.01+my)) + x % y) + 0.28 * cos(mx + my) * x; 
      b = my * 3.2 * sqrt(120 * sin(log(y) * my % (w-y) % (0.01+mx)) + y % x) + 0.28 * cos(mx + my) * y;
      c = mx * 3.2 * sqrt(120 * cos(log(x) * mx % (w-x) % (0.01+y)) + x % y) + 0.28 * cos(mx + my) * x;
      d = my * 3.2 * sqrt(120 * cos(log(y) * my % (w-y) % (0.01+x)) + y % x) + 0.28 * cos(mx + my) * y;  
      break;
    case 45:  
      a = mx * 4.4 * sqrt(120 * sin(log(x) * mx % my % (0.01+my)) + x % y) + 0.28 * cos(mx + my) * x; 
      b = my * 4.4 * sqrt(120 * sin(log(y) * my % my % (0.01+mx)) + y % x) + 0.28 * cos(mx + my) * y;
      c = mx * 4.4 * sqrt(120 * cos(log(x) * mx % my % (0.01+y)) + x % y) + 0.28 * cos(mx + my) * x;
      d = my * 4.4 * sqrt(120 * cos(log(y) * my % my % (0.01+x)) + y % x) + 0.28 * cos(mx + my) * y;  
      break;
    case 44:   
      a = mx * 4.4 * sqrt(120 * sin(log(x) * mx / (0.01+my)) + x % y) + 0.28 * cos(mx + my) * x;
      b = my * 4.4 * sqrt(120 * sin(log(y) * my / (0.01+mx)) + y % x) + 0.28 * cos(mx + my) * y;
      c = mx * 4.4 * sqrt(120 * cos(log(x) * mx / (0.01+y)) + x % y) + 0.28 * cos(mx + my) * x;
      d = my * 4.4 * sqrt(120 * cos(log(y) * my / (0.01+x)) + y % x) + 0.28 * cos(mx + my) * y;  
      break;  
    case 43: 
      a = 0.28 * cos(mx + my) * x  / (0.01+sin(x/y) - sin(x/y) + sin(y/x)); 
      b = 0.28 * cos(mx + my) * y  / (0.01+sin(y/x) - sin(x/y) + sin(y/x));
      c = 0.28 * cos(mx + my) * x  / (0.01+sin(x/y) - sin(x/y) + sin(y/x));
      d = 0.28 * cos(mx + my) * y  / (0.01+sin(y/x) - sin(x/y) + sin(y/x)); 
      break;  
    case 42: 
      a = 0.28 * cos(mx + my) * x  / (0.01+cos(x/y) + cos(x/y) - cos(y/x)); 
      b = 0.28 * cos(mx + my) * y  / (0.01+cos(y/x) + cos(x/y) - cos(y/x));
      c = 0.28 * cos(mx + my) * x  / (0.01+cos(x/y) + cos(x/y) - cos(y/x));
      d = 0.28 * cos(mx + my) * y  / (0.01+cos(y/x) + cos(x/y) - cos(y/x)); 
      break;
    case 41: 
      a = 0.28 * cos(mx + my) * x  / (0.01+cos(x/y) + cos(x/y) - cos(y/x)); 
      b = 0.28 * cos(mx + my) * y  / (0.01+cos(y/x) + cos(x/y) - cos(y/x));
      c = 0.28 * sin(mx + my) * x  / (0.01+cos(x/y) + cos(x/y) - cos(y/x));
      d = 0.28 * sin(mx + my) * y  / (0.01+cos(y/x) + cos(x/y) - cos(y/x));  
      break;  
    case 40: 
      a =  0.18 * cos(mx * my ) * x  / (0.01+cos(x/y)); 
      b =  0.18 * cos(mx * my ) * y  / (0.01+cos(y/x));
      c =  0.18 * sin(mx * my ) * x  / (0.01+cos(x/y));
      d =  0.18 * sin(mx * my ) * y  / (0.01+cos(y/x)); 
      break;  
    case 39: 
      a = 0.18 * cos(mx + my ) * x  / (0.01+cos(x/y)); 
      b = 0.18 * cos(mx + my ) * y  / (0.01+cos(y/x));
      c = 0.18 * cos(mx + my ) * x  / (0.01+cos(x/y));
      d = 0.18 * cos(mx + my ) * y  / (0.01+cos(y/x)); 
      break;  
    case 38: 
      a = 12.4 * sqrt(x*tan(x) * x/y) + sqrt(mx*tan(mx) * x/y) ^ 12.4 * (sqrt(50*cos(x) + x) % sqrt(sin(y) + y)); 
      b = 12.4 * sqrt(y*tan(y) * y/x) + sqrt(my*tan(my) * y/x) ^ 12.4 * (sqrt(50*cos(y) + y) % sqrt(sin(x) + x));
      c = 12.4 * sqrt(y*tan(x) * x/y) + sqrt(my*tan(mx) * x/y) ^ 12.4 * (sqrt(50*sin(x) + x) % sqrt(cos(y) + y)); 
      d = 12.4 * sqrt(x*tan(y) * y/x) + sqrt(mx*tan(my) * y/x) ^ 12.4 * (sqrt(50*sin(y) + y) % sqrt(cos(x) + x));
      break;
    case 37:  
      a = 12.4 * (sqrt(90*cos(x) + x) % sqrt(sin(y*x) + y)) + sqrt(cos(y/mx)); 
      b = 12.4 * (sqrt(90*cos(y) + y) % sqrt(sin(x/y) + x)) + sqrt(cos(y/my));
      c = 12.4 * (sqrt(90*sin(x) + x) % sqrt(cos(y*x) + y)) + sqrt(cos(y/mx)); 
      d = 12.4 * (sqrt(90*sin(y) + y) % sqrt(cos(x/y) + x)) + sqrt(cos(y/my));
      break;
    case 36: 
      a = 13.8 * sqrt(50*cos(x) + x) + sqrt(sin(y) + y); 
      b = 13.8 * sqrt(50*cos(y) + y) + sqrt(sin(x) + x);
      c = 13.8 * sqrt(50*sin(x) + x) + sqrt(cos(y) + y); 
      d = 13.8 * sqrt(50*sin(y) + y) + sqrt(cos(x) + x);
      break;
    case 35: 
      a = 0.4 * sqrt(cos(x) + x) * sqrt(sin(y) + x); 
      b = 0.4 * sqrt(cos(y) + y) * sqrt(sin(x) + y);
      c = 0.4 * sqrt(sin(x) + x) * sqrt(cos(y) + x);
      d = 0.4 * sqrt(sin(y) + y) * sqrt(cos(x) + y);
      break;
    case 34: 
      a = 14.4 * sqrt(120 * cos(log(w%x) / y ^ x - mx / (0.01+my)) + x) % (x * mx ) - mx * my;
      b = 14.4 * sqrt(120 * cos(log(w%y) / x ^ y - my / (0.01+mx)) + y) % (y * my ) - mx * my;
      c = 14.4 * sqrt(120 * cos(log(w%x) / y ^ x - my / (0.01+my)) + x) % (x * mx ) - mx * my; 
      d = 14.4 * sqrt(120 * cos(log(w%y) / x ^ y - mx / (0.01+mx)) + y) % (y * my ) - mx * my;
      break;
    case 33: 
      a = 14.4 * sqrt(120 * sin(tan(x/w) - y % x ^ mx / (0.01+my)) + x);
      b = 14.4 * sqrt(120 * cos(log(y/w) - x % y ^ my / (0.01+mx)) + y);
      c = 14.4 * sqrt(120 * cos(log(x/w) - y % x ^ mx / (0.01+my)) + x);
      d = 14.4 * sqrt(120 * sin(tan(y/w) - x % y ^ my / (0.01+mx)) + y);
      break;
    case 32: 
      a = 14.4 * sqrt(140 * cos(w/2+y % x ^ mx / (0.01+my)) + x);
      b = 14.4 * sqrt(140 * cos(w/2+x % y ^ my / (0.01+mx)) + y);
      c = 14.4 * sqrt(140 * cos(w/2+y % x ^ mx / (0.01+my)) + x);
      d = 14.4 * sqrt(140 * cos(w/2+x % y ^ my / (0.01+mx)) + y);
      break;
    case 31: 
      a = 14.1 * sqrt(140 * sin(w/2+y + x ^ mx / (0.01+my)) + x);
      b = 14.1 * sqrt(140 * sin(w/2+x + y ^ my / (0.01+mx)) + y);
      c = 14.1 * sqrt(140 * sin(w/2+y + x ^ mx / (0.01+my)) + x);
      d = 14.1 * sqrt(140 * sin(w/2+x + y ^ my / (0.01+mx)) + y);
      break;
    case 30: 
      a = 14.1 * sqrt(140 * sin(w/2+y / x - mx % (0.01+my)) + x);
      b = 14.1 * sqrt(140 * sin(w/2+x / y - my % (0.01+mx)) + y);
      c = 14.1 * sqrt(140 * sin(w/2+y / x - mx % (0.01+my)) + x);
      d = 14.1 * sqrt(140 * sin(w/2+x / y - my % (0.01+mx)) + y);
      break;
    case 29: 
      a = 14.1 * sqrt(140 * sin(w/2+y - x + mx % (0.01+my)) + x);
      b = 14.1 * sqrt(140 * sin(w/2+x - y + my % (0.01+mx)) + y);
      c = 14.1 * sqrt(140 * sin(w/2+y - x + mx % (0.01+my)) + x);
      d = 14.1 * sqrt(140 * sin(w/2+x - y + my % (0.01+mx)) + y);
      break;
    case 28: 
      a = 14.1 * sqrt(140 * sin(w+y - x + mx % (0.01+my)) + x);
      b = 14.1 * sqrt(140 * sin(w+x - y + my % (0.01+mx)) + y);
      c = 14.1 * sqrt(140 * sin(w+y - x + mx % (0.01+my)) + x);
      d = 14.1 * sqrt(140 * sin(w+x - y + my % (0.01+mx)) + y);
      break;  
    case 27: 
      a = 14.1 * sqrt(50 * log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(50 / log(w/(0.01+x) - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(50 * log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(50 / log(w/(0.01+x) - y * my % (0.01+mx)) + y);
      break;
    case 26: 
      a = 14.1 * sqrt(50 * log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(50 * log(w/(0.01+x) - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(50 * sin(w/(0.01+y) - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(50 * sin(w/(0.01+x) - y * my % (0.01+mx)) + y);
      break;
    case 25:
      a = 14.1 * sqrt(50 * sin(w-y - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(50 * sin(w-x - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(50 * sin(w-y - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(50 * sin(w-x - y * my % (0.01+mx)) + y);
      break;
    case 24: 
      a = 15.4 * sqrt(60 * sin(log(x * mx / (0.1 +log(my)))) ^ x % y);
      b = 15.4 * sqrt(60 * sin(log(y * my / (0.1 +log(mx)))) ^ y % x);
      c = 15.4 * sqrt(60 * sin(log(x * mx / (0.1 +log(y)))) ^ x % y);
      d = 15.4 * sqrt(60 * sin(log(y * my / (0.1 +log(x)))) ^ y % x);
      break;
    case 23: 
      a = mx*7.4 * sqrt(200 * cos((log(x) % 50) % mx % log(0.01+my)) + x % y);
      b = my*7.4 * sqrt(200 * cos((log(y) % 50) % my % log(0.01+mx)) + y % x);
      c = mx*7.4 * sqrt(200 * tan((log(x) % 50) % mx % log(0.01+y)) + x % y);
      d = my*7.4 * sqrt(200 * tan((log(y) % 50) % my % log(0.01+x)) + y % x);  
      break;
    case 22: 
      a = mx*7.4 * sqrt(200 * cos((log(x) % 50) / mx % log(0.01+my)) + x % y);
      b = my*7.4 * sqrt(200 * cos((log(y) % 50) / my % log(0.01+mx)) + y % x);
      c = mx*7.4 * sqrt(200 * tan((log(x) % 50) / mx % log(0.01+y)) + x % y);
      d = my*7.4 * sqrt(200 * tan((log(y) % 50) / my % log(0.01+x)) + y % x);  
      break;
    case 21:
      a = 16.4 * sqrt(190 * sin((log(x) % 50) * mx / (0.01+my)) + x % y);
      b = 16.4 * sqrt(190 * sin((log(y) % 50) * my / (0.01+mx)) + y % x);
      c = 16.4 * sqrt(190 * tan((log(x) % 50) * mx / (0.01+y)) + x % y);
      d = 16.4 * sqrt(190 * tan((log(y) % 50) * my / (0.01+x)) + y % x);
      break;
    case 20: 
      a = 16.4 * sqrt(250*sin(y / x)) % (x * mx ) + mx * my | mx | my; 
      b = 16.4 * sqrt(250*sin(x / y)) % (y * my ) + mx * my | mx | my;
      c = 16.4 * sqrt(250*sin(y / x)) % (x * mx ) + mx * my | mx | my;
      d = 16.4 * sqrt(250*sin(x / y)) % (y * my ) + mx * my | mx | my;
      break;  
    case 19:
      a = 16.4 * sqrt(250*cos(y / x)) % (x * mx ) + mx * my; 
      b = 16.4 * sqrt(250*cos(x / y)) % (y * my ) + mx * my;
      c = 16.4 * sqrt(250*cos(y / x)) % (x * mx ) + mx * my;
      d = 16.4 * sqrt(250*cos(x / y)) % (y * my ) + mx * my; 
      break;
    case 18:
      a = 26.4 * sqrt(250*sin(y / x)) % (x * mx ) / mx * my; 
      b = 26.4 * sqrt(250*sin(x / y)) % (y * my ) / mx * my;
      c = 26.4 * sqrt(250*sin(y / x)) % (x * mx ) / mx * my;
      d = 26.4 * sqrt(250*sin(x / y)) % (y * my ) / mx * my; 
      break;
    case 17:
      a = (y+x)/wg * 5.4 * cos(mx + 1/my) * sqrt(60 * log(1.5 * x + (mx - my)) )  / (0.02 + tan(x / y)); 
      b = (y+x)/wg * 5.4 * cos(my + 1/mx) * sqrt(60 * log(1.5 * y + (mx + my)) )  / (0.02 + tan(y / x));
      c = (y+x)/wg * 5.4 * sin(mx + 1/my) * sqrt(60 * log(1.5 * x + (mx * my)) )  / (0.02 + tan(x / y));
      d = (y+x)/wg * 5.4 * sin(my + 1/mx) * sqrt(60 * log(1.5 * y + (mx - my)) )  / (0.02 + tan(y / x)); 
      break;
    case 16: 
      a = 14.1 * sqrt(140 * sin(w/2+y + x + mx % (0.01+my)) + x);
      b = 14.1 * sqrt(140 * sin(w/2+x + y + my % (0.01+mx)) + y);
      c = 14.1 * sqrt(140 * sin(w/2+y + x + mx % (0.01+my)) + x);
      d = 14.1 * sqrt(140 * sin(w/2+x + y + my % (0.01+mx)) + y);
      break;
    case 15: 
      a = 14.1 * sqrt(120 * sin(w/2+y - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(120 * sin(w/2+x - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(120 * sin(w/2+y - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(120 * sin(w/2+x - y * my % (0.01+mx)) + y);
      break; 
    case 14: 
      a = 14.1 * sqrt(80 / log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(80 / log(w/(0.01+x) - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(80 / log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(80 / log(w/(0.01+x) - y * my % (0.01+mx)) + y);
      break;
    case 13: 
      a = 14.1 * sqrt(50 * log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(50 * sin(w/(0.01+x) - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(50 * log(w/(0.01+y) - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(50 * sin(w/(0.01+x) - y * my % (0.01+mx)) + y);
      break;
    case 12: 
      a = 13.4 * sqrt(70 * sin(w/(0.01+y) - x * mx / (0.01+my)) + x);
      b = 13.4 * sqrt(70 * sin(w/(0.01+x) - y * my / (0.01+mx)) + y);
      c = 13.4 * sqrt(70 * sin(w/(0.01+y) - x * mx / (0.01+my)) + x);
      d = 13.4 * sqrt(70 * sin(w/(0.01+x) - y * my / (0.01+mx)) + y);
      break;
    case 11: 
      a = 14.4 * sqrt(120 * cos(log(w%x) / y ^ x - mx / (0.01+my)) + x);
      b = 14.4 * sqrt(120 * cos(log(w%y) / x ^ y - my / (0.01+mx)) + y);
      c = 14.4 * sqrt(120 * cos(log(w%x) / y ^ x - my / (0.01+my)) + x); 
      d = 14.4 * sqrt(120 * cos(log(w%y) / x ^ y - mx / (0.01+mx)) + y);
      break;
    case 10: 
      a = 15.4 * sqrt(70 * cos(w/y - x * mx / (0.01+my)) + x);
      b = 15.4 * sqrt(70 * cos(w/x - y * my / (0.01+mx)) + y);
      c = 15.4 * sqrt(70 * cos(w/y - x * mx / (0.01+my)) + x);
      d = 15.4 * sqrt(70 * cos(w/x - y * my / (0.01+mx)) + y);
      break;
    case 9: 
      a = 15.4 * sqrt(70 * cos(2*w - x * mx / (0.01+my)) + x);
      b = 15.4 * sqrt(70 * cos(2*w - y * my / (0.01+mx)) + y);
      c = 15.4 * sqrt(70 * cos(2*w - x * mx / (0.01+my)) + x);
      d = 15.4 * sqrt(70 * cos(2*w - y * my / (0.01+mx)) + y);
      break;
    case 8: 
      a = mx*8.4 * sqrt(120 * cos((log(x) % 50) * mx / (0.01+my)) + x % y);
      b = my*8.4 * sqrt(120 * cos((log(y) % 50) * my / (0.01+mx)) + y % x);
      c = mx*8.4 * sqrt(120 * tan((log(x) % 50) * mx / (0.01+y)) + x % y);
      d = my*8.4 * sqrt(120 * tan((log(y) % 50) * my / (0.01+x)) + y % x);  
      break;
    case 7: 
      a = 14 * sqrt(140 * sin(w/2+y % x ^ mx / (0.01+my)) + x);
      b = 14 * sqrt(140 * sin(w/2+x % y ^ my / (0.01+mx)) + y);
      c = 14 * sqrt(140 * sin(w/2+y % x ^ mx / (0.01+my)) + x);
      d = 14 * sqrt(140 * sin(w/2+x % y ^ my / (0.01+mx)) + y);
      break;
    case 6:
      a = 14.4 * sqrt(90 * sin((log(x) % 50) *1 / my) + x % y * log(x / y) +x);
      b = 14.4 * sqrt(90 * sin((log(y) % 50) * 1 / mx) + y % x * log(y / x) +y);
      c = 14.4 * sqrt(90 * tan((log(x) % 50) * 1 / my) + x % y * log(x / y) +x);
      d = 14.4 * sqrt(90 * tan((log(y) % 50) * 1 / mx) + y % x * log(y / x) +y);
      break; 
    case 5:
      a = 16.4 * 1/(0.1+mx)*sqrt(15 * log(x - (mx + my)) / (0.01+cos(x/y) / tan(x / y)) + x); 
      b = 18.4 * 1/(0.1+mx)*sqrt(15 * log(y - (mx - my)) / (0.01+cos(y/x) / tan(y / x)) + y);
      c = 18.4 * 1/(0.1+mx)*sqrt(15 * log(x - (mx + my)) / (0.01+cos(x/y) / tan(x / y)) + x);
      d = 18.4 * 1/(0.1+mx)*sqrt(15 * log(y - (mx - my)) / (0.01+cos(y/x) / tan(y / x)) + y);
      break;
    case 4: 
      a = 14.1 * sqrt(140 * sin(w/2+y / x ^ mx / (0.01+my)) + x);
      b = 14.1 * sqrt(140 * sin(w/2+x / y ^ my / (0.01+mx)) + y);
      c = 14.1 * sqrt(140 * sin(w/2+y / x ^ mx / (0.01+my)) + x);
      d = 14.1 * sqrt(140 * sin(w/2+x / y ^ my / (0.01+mx)) + y);
      break;
    case 3: 
      a = 14.1 * sqrt(50 * sin(w+y - x * mx % (0.01+my)) + x);
      b = 14.1 * sqrt(50 * sin(w+x - y * my % (0.01+mx)) + y);
      c = 14.1 * sqrt(50 * sin(w+y - x * mx % (0.01+my)) + x);
      d = 14.1 * sqrt(50 * sin(w+x - y * my % (0.01+mx)) + y);
      break;
    case 2: 
      a = 16.4 * sqrt(90 * sin(w - x * mx / (0.01+my)) + x);
      b = 16.4 * sqrt(90 * sin(w - y * my / (0.01+mx)) + y);
      c = 16.4 * sqrt(90 * sin(w - x * mx / (0.01+y)) + x);
      d = 16.4 * sqrt(90 * sin(w - y * my / (0.01+x)) + y);
      break;
    case 1: 
      a = 14.4 * sqrt(90 * sin(tan(w%x) / y ^ x + mx ) + x) % (x * mx) + mx * my;
      b = 14.4 * sqrt(90 * sin(tan(w%y) / x ^ y + my ) + y) % (y * my) + mx * my;
      c = 14.4 * sqrt(90 * sin(tan(w%x) / y ^ x + my ) + x) % (x * mx) + mx * my; 
      d = 14.4 * sqrt(90 * sin(tan(w%y) / x ^ y + mx ) + y) % (y * my) + mx * my;
      break;
    default:
      a = 16.4 * sqrt(90 * sin(x * mx / my) + x); 
      b = 16.4 * sqrt(90 * sin(y * my / mx) + y);
      c = 16.4 * sqrt(90 * sin(x * mx / y) + x);
      d = 16.4 * sqrt(90 * sin(y * my / x) + y);
    }  
   draw_rotate_rect(mg, a, b, rad, r);
   draw_rotate_rect(mg, wg - a, b, rad, r);
   draw_rotate_rect(mg, a, wg - b, rad, r);
   draw_rotate_rect(mg, wg - a, wg - b, rad, r);
   draw_rotate_rect(mg, wg / 2 - c, wg / 2 - d, rad, r);
   draw_rotate_rect(mg, wg - wg / 2 - c, wg / 2 + d, rad, r);
   draw_rotate_rect(mg, wg / 2 + c, wg - wg / 2 - d, rad, r);
   draw_rotate_rect(mg, wg / 2 + c, wg / 2 + d, rad, r);
   y += 25; 
  }
   x += 25; 
  }
  image(mg, 0, 0, w, w); counter++; mg.clear(); r += buf;
  if (r === 18) {
    buf = -1;
    gframes = counter * 2;
    counter = 0; 
    $fx.preview();
  }
  if (r === 0) {
    buf = 1;
  }
}
}

function initializeFields() {
  r = 0; buf = 1; counter = 0;
  rad = 0; gframes = 0;
}

function initCanvas(defaultWidth) { 
  let urlParams = new URLSearchParams(window.location.search);
  let canvasWidth = urlParams.has('width') ? parseInt(urlParams.get('width')) : defaultWidth;
  if (isNaN(canvasWidth) || canvasWidth <= 0) {
    canvasWidth = defaultWidth; 
  }
  w = canvasWidth; wg = 800;
  initializeFields(); gframes = 72;
  createCanvas(w, w);
  console.log("Canvas Width: " + w); 
  mg = createGraphics(wg, wg);
  mg.pixelDensity(1); pixelDensity(1);
  mg.background(0); background(0);
  mg.frameRate(currentFrameRate); frameRate(currentFrameRate);
  if (rc === 120) {mg.colorMode(HSB, 60); colorMode(HSB, 60);} else {mg.colorMode(RGB, rc); colorMode(RGB, rc);}
}

function keyPressed() {
  if ((key == "s") || (key == "S")) {
    save("BreathingRedux-"+$fx.hash+".png");
  } else if ((key === 'g') || (key === 'G'))  {
    const options = {
      units: "frames",
      quality: 10,
      workers: 4, 
      transparent: false, 
      dither: true, 
      delay: 0
    }
    saveGif("BreathingRedux-"+$fx.hash+".gif", gframes, options);
    
  } else if ((key === "c") || (key == "C")) {
      currentIndex = (currentIndex + 1) % rcValues.length;
      if (currentIndex===0) {currentIndex = 1;}
      cv = rcValues[currentIndex]; 
      if (cv === 20) {
      col = true;
      console.log("New Color Mode: SIMPLE");
    } else {
      col = false;
      if (cv === 120) {
        mg.colorMode(HSB, 60); colorMode(HSB, 60);
        console.log("New Color Mode: (HSB, 60)");
      } else {
        mg.colorMode(RGB, cv); colorMode(RGB, cv);
        console.log("New Color Mode: (RGB, " + cv +")");
      }
    }
    rc = cv;
  } else if ((key === "f") || (key == "F")) {
      fill = !fill;
  } else if ((key === "p") || (key == "P")) {
      isPaused = !isPaused;
  } else if (key === "+") {
      currentFrameRate = constrain(currentFrameRate + 1, 1, 15); 
      frameRate(currentFrameRate);
      console.log("Current Frame Rate:", currentFrameRate);
  } else if (key === "-") {
      currentFrameRate = constrain(currentFrameRate - 1, 1, 15); 
      frameRate(currentFrameRate);
      console.log("Current Frame Rate:", currentFrameRate);
  } 
}
