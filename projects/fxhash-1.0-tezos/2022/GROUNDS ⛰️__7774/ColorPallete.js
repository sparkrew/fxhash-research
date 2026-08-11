function createColorPallete() {

  if (pallete == "Colorful")
    samples = int(random(4, 11));
  else
    samples = int(random(2, 6));


  let tempHue = int(random(1250)%100);
  let hueAdd = round(random(1, 5));
  let satSub = round(random(1, 10));


  //temp = 100;
  let baseColor;

  if (pallete == "Colorful")
    baseColor = color( tempHue, 100, 100);
  else
    baseColor = color( tempHue, 0, 100);

  colors[0]  = baseColor;

  for (let i = 1; i < samples; i ++) {
    let h = hue(colors[i-1]);
    h = h + hueAdd;
    h = int(h % 100);


    let s = saturation(colors[i-1]);
    s = s - satSub;

    let b = brightness(colors[i-1]);
    if (pallete == "Colorful")
      b = int( ((i)/(samples)) * 100) ;
    else
      b = int( ((i-1)/(samples)) * 100) ;


    colors[i] = color(h, s, b);
  }

  colors[0] = color(0, 0, 100);

  let tempC = [];

  for  (let i = 0; i < samples; i ++) {
    tempC[i] = colors[i];
  }

  for  (let i = 1; i < samples; i ++) {
    colors[i] = tempC[samples-i];
  }


  //  colors[samples-1] = color(0,0,255);
}

function drawPallete() {
  noStroke();
  let s = wWidth / 180;

  if (pallete == "Colorful")
    fill(0);
  else
    fill(5);

//  rect(0, 0, wWidth, s*2);
//  rect(0, wWidth-s*2, wWidth, s*2);
//  rect(0, 0, s*2, wHeight);
//  rect(wWidth-s*2, 0, s*2, wHeight);

//  if (pallete == "Colorful")
//    fill(colors[ceil(samples/3)]);
//  else
  //  fill(100);

  //rect(0, 0, wWidth, s*0.15);
  //rect(0, wWidth-s*0.15, wWidth, s*0.15);
  //rect(0, 0, s*0.15, wHeight);
  //rect(wWidth-s*0.15, 0, s*0.15, wHeight);
   
  //fill(0,80);
  //rect(0, wHeight-s*2, ((samples+1)*(s*1.5)), s*2);
 
  for (let c = 0; c < samples; c++)
  {
    fill(colors[c]);
    rect(-s+(c+1)*(s*1.5), wHeight-s*1.5, s, s);
  }
}
