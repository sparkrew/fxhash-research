import _ from "lodash";


export function gradientTopToBottom(context, colorA, colorB, x, y, w, h) {
  for (let t = 0; t < h; t++) {

    //console.log(colorA, colorB);

    const lerpp = context.map(t, 0, h, 0, 1);
    const c = context.lerpColor(colorA, colorB, lerpp)
    context.fill(c);
    context.noStroke();

    context.rect(x, y + t, w, 2);
  }
}

export function gradientBottomToTop(context, colorA, colorB, x, y, w, h) {
  for (let t = 0; t < h; t++) {
    const lerpp = context.map(t, h, 0, 1, 0);
    const c = context.lerpColor(colorA, colorB, lerpp)
    context.fill(c);
    context.noStroke();

    context.rect(x, y + h - t, w, 2);
  }
}

export function gradientLeftToRight(context, colorA, colorB, x, y, w, h) {
  for (let t = 0; t < w; t++) {
    const lerpp = context.map(t, 0, w, 0, 1);
    const c = context.lerpColor(colorA, colorB, lerpp)
    context.fill(c);
    context.noStroke();
    context.rect(x + t, y, 2, h);
  }
}
export function gradientRightToLeft(context, colorA, colorB, x, y, w, h) {
  for (let t = 0; t < w; t++) {
    const lerpp = context.map(t, w, 0, 1, 0);
    const c = context.lerpColor(colorA, colorB, lerpp)
    context.fill(c);
    context.noStroke();

    context.rect(x + w - t, y, 2, h);
  }
}

export function waveGradient(context, colorA, colorB, points, direction = 1, distortX = 0, distortY=0) {
  let waveMax = _.minBy(points, function(el){
    return el.x
  });

  context.noFill();
  context.strokeWeight(2.5);
  let distortXAmount = distortX;
  let distortYAmount = distortY;
  for (let wl = 0; wl < context.height - waveMax.x; wl++) {
    context.beginShape();
    let lerpp = context.map(wl, 0, context.height - waveMax.x, 0, 1)
    const c = context.lerpColor(colorA, colorB, lerpp)
    context.stroke(c);
    

    for (let wv = 0; wv < points.length; wv++) {
      let v = points[wv];
      switch(direction) {
        case 1:
          context.vertex(v.x - wl + distortXAmount, v.y - wl + distortYAmount);
          break;
        case 2:
          context.vertex(v.x + distortXAmount, v.y - wl + distortYAmount);
          break;
        case 3:
          context.vertex(v.x + wl + distortXAmount, v.y - wl + distortYAmount);
          break;
        case 4:
          context.vertex(v.x + wl + distortXAmount, v.y + distortYAmount);
          break;
        case 5:
          context.vertex(v.x + wl + distortXAmount, v.y + wl + distortYAmount);
          break;
        case 6:
          context.vertex(v.x + distortXAmount, v.y + wl + distortYAmount);
          break;
        case 7:
          context.vertex(v.x - wl + distortXAmount, v.y + wl + distortYAmount);
          break;
        case 8:
          context.vertex(v.x - wl + distortXAmount, v.y + distortYAmount);
          break;
        default:
          context.vertex(v.x + distortXAmount, v.y + wl + distortYAmount);
          break;
      }

    }
    context.endShape();
    distortXAmount += distortX;
    distortYAmount += distortY;
    //console.log(distortXAmount, distortYAmount);
  }
}
