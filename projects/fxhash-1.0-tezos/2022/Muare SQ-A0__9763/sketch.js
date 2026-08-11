function setup() {
  let angle = window.$fxhashFeatures.Angle
  createCanvas(600, 600);
  background(255);
  noStroke();
  const c = '#' + cs[window.$fxhashFeatures.Color];
  
  let some = window.$fxhashFeatures.Size;
  
  for (let y = some; y < width - some; y++) {
    for (let x = some; x < height - some; x++) {
      if ((x+y) % 2 == 0) {
        // fill('transparent')
      } else {
        fill(window.$fxhashFeatures['Graby BG'] ? '#000000' : c)
        rect(x * some, y * some, some, some);
      }
      
    }
  }
  if(window.$fxhashFeatures.Mask) {
    fill('white');
    if(window.$fxhashFeatures['Mask Type'] == 'circle'){
      circle(width / 2, height / 2, randomFx(120, 356));
    } else {
      rectMode(CENTER);
      rect(width / 2, height / 2, randomFx(100, 356), randomFx(100, 356));
      rectMode(CORNER);
    }
  }
  translate(200, -300);
  rotate(angle);
  for (let y = some; y < width - some; y++) {
    for (let x = some; x < height - some; x++) {
      if ((x+y) % 2 == 0) {
        fill('rgba(255,255,255,0)')
      } else {
        fill(c)
      }
      rect(x * some, y * some, some, some);
    }
  }
}