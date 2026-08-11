// Made by aBAOaQ
// CC BY-NC-SA 4.0
// https://creativecommons.org/licenses/by-nc-sa/4.0/

let col, back_col, contour_col, pal, c2;
let size = 0;
let strokes = [];
let angles = [];
let cols = [];
let noise_contour = [];
let grain_array = [];
let holes_array = [];
let ha_min = 1
let ha_max = 0;
let min_x, max_x, min_y, max_y, vect;
let fxs, fxg, fxn;
let bignum; //seed Hash
let rxr, ryr, rwr, rhr, smol_wr, smol_hr;
let grain_precision = 1000;

// fxFeatures param
let feat_style = fxrand() * 3;
let feat_noise = fxrand();
let feat_gradient = fxrand() * 3;
let feat_grain = fxrand() * 3;
let pal_n = Math.floor(fxrand() * palettes.length - 0.000001); 

function getStyleFeat(value) {
  if (value < 1) {return "Complete"} //More probability to get full array vs Holes.
  if (value < 2) {return "Missing pieces"}
  else {return "Holes"}
}

function getContourNoiseFeat(value) {
  if (value < 0.5) {return false} //1/2 probability to get contour noise.
  else {return true}
}

function getGradientFeat(value) {
  if (value < 1) {return "None"} // 1/3 probability to have no gradient
  if (value < 2) {return "Occident"}
  else {return "Orient"}
}

function getGrainFeat(value) {
  if (value < 1) {return "None"} // 1/3 probability to have No Grain
  if (value < 2) {return "Light"} // 1/3 probability to have Light Grain
  else {return "Heavy"} // 1/3 probability to have Heavy Grain
}

window.$fxhashFeatures = {

  "Rectangle": getStyleFeat(feat_style),
  "Contour Noise": getContourNoiseFeat(feat_noise),
  "Color Gradient": getGradientFeat(feat_gradient),
  "Grain": getGrainFeat(feat_grain),
  "Base Palette": palettes_names[pal_n]
 }
// End Features


function setup() {
  size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  pixelDensity(1);
  bignum = int(fxrand()*100000000);
  noiseSeed(bignum*bignum);
  randomSeed(bignum);
  
  //Features param defined before setup() - Rounding values for ease of use
  
  feat_style = floor(feat_style); //More probability to get full array vs Holes.
  feat_noise = round(feat_noise); //1/2 probability to get contour noise
  feat_gradient = floor(feat_gradient); // 1/2 probability to have gradient
  feat_grain = floor(feat_grain); // 1/3 probability to have None/Light/Heavy Grain
  
  // Color parameters
  pal = palettes[pal_n];
  back_col = random(pal);
  col = random(pal);
  c2 = random(pal);
  while(col==back_col) { //ensure col =/= background when Single color rect
      col = random(pal);
  }
  while(c2==col) { //ensure c2 =/= col when Gradient color rect
      c2 = random(pal);
  }
  col = color(col);
  c2 = color(c2);
  contour_col = col;
  
  // setup
  rxr = random(0.5,2); //0.1 min, 3 max 
  ryr = random(1,4)/2; //0.1 min,3 max
  rwr = random(1/5,4); // Width - between 1/5 to 5
  rhr = random(2/5,8)/2; // Height - between 1/5 to 5

  smol_wr = random(1/400,1/1000); //Between 1/100 to 1/1000
  smol_hr = random(1/100,1/300); //Between 1/100 to 1/1000 - Too many circles if equal to smol_wr
  
  min_x = 1000000000;
  max_x = 0;
  min_y = 1000000000;
  max_y = 0;
  
  strokes = [];
  angles = [];
  cols = [];
  noise_contour = [];
  grain_array = [];
  holes_array = [];
  
  // Start Builder
  for (var i = rxr; i < rxr + rwr; i+=smol_wr*6*noise(i)) {
    for (var j = ryr; j < ryr + rhr; j+=smol_hr*6*noise(j)) {
      var ag = map(noise(i, j),0,1,-0.5,0.5);
      vect = createVector(i,j);
      vect.rotate(ag);
      strokes.push(vect);
      angles.push(ag);

      // Defining min-max rectangle
      if (vect.x < min_x) {min_x = vect.x}
      if (vect.x > max_x) {max_x = vect.x}
      if (vect.y < min_y) {min_y = vect.y}
      if (vect.y > max_y) {max_y = vect.y}
      
      //defining stroke color 
      var temp_col = col;
      var temp_rand = random(10);
      var temp_ij = map(random(i+j), 0, i+j,100, 255);
      
      if (feat_style == 2) {
        //let temp_hvect = 
        holes_array.push(createVector(noise(i,j),temp_ij));
        if (noise(i,j) > ha_max) {ha_max = noise(i,j)}
        if (noise(i,j) < ha_min) {ha_min = noise(i,j)}
      }
      
      if (feat_style == 1) { //if Holes style
        if (temp_rand > 8) {
          temp_col = color(back_col);//color(random(pal));
        } else {
          temp_col = col;
        }
      }
      if (feat_style == 0 && feat_gradient == 0) {
        temp_col = col;  
      }
      if (feat_gradient >= 1) { //If gradient
        var n = map(i,rxr,rxr + rwr,0,1);
        if (feat_gradient == 1) {temp_col = lerpColor(col,c2,n);}
        else {temp_col = lerpColor(c2,col,n);}
      }
      temp_col.setAlpha(temp_ij);
      cols.push(temp_col.toString());
    }
  } // End colors, but need to cover Holes style case
  
  if (feat_style == 2) {
    cols = [];
    for (i = 0; i < strokes.length; i++) {
      let hole = map(holes_array[i].x, ha_min, ha_max, 0, 1);
      var temp_col_h;
      if (hole > 0.7) {
            temp_col_h = color(back_col);//color(random(pal));
          } else {
            temp_col_h = col;
          }
      temp_col_h.setAlpha(holes_array[i].y);
      cols.push(temp_col_h.toString());
    }
  }
  // End Builder
  
  // Contour Noise
  if (feat_noise == 1) {
    noise_str = 20;//random(3,33);
    randNoiseContour(back_col,noise_str);
  }
  //End Noise
  
  // Grain //Strength = 30 max
  if (feat_grain == 1) {grainArray(grain_array, 12);}
  if (feat_grain == 2) {grainArray(grain_array, 20);}
  // End grain
  noLoop();
}

function draw() {
  background(back_col);
  noStroke();
  //Sizing Setup
  var min_xt = min_x*size/4;
  var max_xt = max_x*size/4;
  var min_yt = min_y*size/4;
  var max_yt = max_y*size/4;
  translate(-min_xt, -min_yt);
  translate(size/2-(max_xt-min_xt)/2,size/2-(max_yt-min_yt)/2);
  
  // end setup
  
  for (i = 0; i < strokes.length; i++) {
    fill(color(cols[i]));
    var vtemp = strokes[i].copy();
    vtemp.rotate(-angles[i]);
    vtemp.mult(size/4);
    rotate(angles[i]);
    
    rect(vtemp.x, vtemp.y, smol_wr*size, smol_hr*size, size);
    rotate(-angles[i]);
    
  }
  
  drawContour(contour_col);
  if (feat_noise == 1) {
    for (var v of noise_contour) {
      var bck_color_alpha = color(back_col);
      bck_color_alpha.setAlpha(v.z);
      stroke(bck_color_alpha);
      strokeWeight(1);
      point(v.x*size, v.y*size);
    }
  }
  
  if (feat_grain == 1) {applyGrain(grain_array, 12);}
  if (feat_grain == 2) {applyGrain(grain_array, 20);}
  fxpreview();
}

function randNoiseContour(col, strength) {
  //var bck_color_alpha = color(col);
  for (var i = 0; i < 1; i+=1/1000) {
    for (var j = 0; j < 1; j+=1/1000) {
      if (i < 1/20 || i > 1-1/20 || j < 1/20 || j > 1-1/20) {
        var noise = random(strength);
        if (noise < 1) {
          var v = createVector(i, j, random(200,255));
          noise_contour.push(v);
        }
      } 
    }
  }
}

function drawContour(contour_color) {
  resetMatrix();
  noFill();
  contour_color.setAlpha(255);
  stroke(contour_color);
  strokeWeight(size/10);
  rect(0, 0, size, size);
}

function grainArray(arr, strength) {
  for (var i = 0; i < grain_precision; i++) {
    let temp_array = [];
    for (var j = 0; j < grain_precision; j++) {
      var grain = noise(i,j) * strength * round(random(-1, 1));
      temp_array.push(grain);
    }
    arr.push(temp_array);
  }
}

function applyGrain(arr, strength) {
  loadPixels();
  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      var index = (x + y * size)*4
      var temp_x = floor(x * grain_precision / size);
      var temp_y = floor(y * grain_precision / size);
      pixels[index + 0] = pixels[index] + strength; //strength;
      pixels[index + 1] = pixels[index + 1] + arr[temp_y][temp_x]; //grainAmount;
      pixels[index + 2] = pixels[index + 2] + arr[temp_y][temp_x]; //grainAmount;
      pixels[index + 3] = pixels[index + 3] + strength; //strength;
    }
  }
  updatePixels();
}

function windowResized() {
  var size_new = min(windowWidth, windowHeight);
  size = size_new;
  resizeCanvas(size, size, false);
}

/* console.log($fxhashFeatures); */