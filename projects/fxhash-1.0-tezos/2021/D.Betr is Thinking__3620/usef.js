
//leave this here. Do not change
function fxrnd(maxnum) {
  var fx_rnd = fxrand()* maxnum;
  return fx_rnd;
}

function between(min, max) {
  var btw_fx_rnd = (min + fxrnd(max - min));
  return btw_fx_rnd;
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
