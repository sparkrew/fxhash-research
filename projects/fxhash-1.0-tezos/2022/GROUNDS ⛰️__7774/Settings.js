function setStyle() {

  pallete =  $fxhashFeatures["Pallete"];
  print("Pallete: " + pallete);

  curve = $fxhashFeatures["Curve"];
  print("Curve: " + curve);

  size = $fxhashFeatures["Size"];
  print("Size: " + size);

  modulating = $fxhashFeatures["Modulating"];
  print("Modulating: " + modulating);
  
  frame = $fxhashFeatures["Roots"];
  print("Roots: " + frame);
  
}


window.$fxhashFeatures = {

  "Pallete":
getPallete(),

  "Curve":
getCurve(),

  "Size":
getSize(),

  "Modulating":
getModulating(),

 "Roots":
getFrame()

  }


function getPallete() {
  let r = fxrand();
  if ( r < 0.15)
    pallete = "Black & White";
  else
    pallete = "Colorful";
  return pallete;
}

function getCurve() {
  let r = fxrand();
  if ( r < 0.5)
    curve = "In";
  else
    curve = "Out";

  return curve;
}

function getSize() {
  let r = fxrand();
  if ( r < 0.3333)
    size = "Small";
  else if (r < 0.6666)
    size = "Medium";

  else size = "Large";

  return size;
}

function getModulating() {
  let r = fxrand();
  if ( r < 0.35)
    modulating = "Yes";
  else if (r < 0.75)
    modulating = "No";
  else modulating = "Hectic";

  return modulating;
}


function getFrame() {
  let r = fxrand();
  if ( r < 0.5)
    frame = "No";
  else frame = "Yes";

  return frame;
}
