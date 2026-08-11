function polygon(x, y, rotation, radius, npoints) {
    angleMode(RADIANS)
    let angle = TWO_PI / npoints;
    if(npoints > 6){ // dans ce cas on fait une ellipse
      ellipse(x,y,radius+2,radius+2) //+2 est une correction pcq les shapes apparaissent plus grandes que les ellipses
    }
    else{
    beginShape();
    for (let i = 0; i < TWO_PI; i += angle) {
      vertex(x + cos(i + rotation) * radius, y + sin(i + rotation) * radius);
    }
    endShape(CLOSE);
  }
    angleMode(DEGREES)
  }
  
  function makeBorders(border_width) {
    left1 = [createVector(0, 0), createVector(border_width, height)];
    right1 = [
      createVector(width - border_width, 0),
      createVector(border_width, height),
    ];
    top1 = [createVector(0, 0), createVector(width, border_width)];
    bottom1 = [
      createVector(0, height - border_width),
      createVector(width, border_width),
    ];
    borders = [left1, right1, top1, bottom1];
    return borders;
  }
  
  function drawBorders(borders) {
    push()
    rectMode(CORNER)
    fill(bordersColor);
    strokeWeight(0);
    for (let i = 0; i < 4; i++) {
      rect(borders[i][0].x, borders[i][0].y, borders[i][1].x, borders[i][1].y);
    }
    pop()
  }
  
  function fxProb(mean, std) {
    // Retourne une normale tronquee en [mean-std;mean+std] ou [0;mean+std] en fonction de qui est plus grand
    // En utilisant fxrand()
    let found = false;
    let ubound = mean + std;
    let lbound
    if(mean>0){
      lbound = mean-std
    }else{
      lbound = -0.5
    }
    let u1, u2, z;
    while (!found) {
      u1 = fxrand();
      u2 = fxrand();
      z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(TWO_PI * u2);
      z = z * Math.sqrt(std);
      z += mean;
      if (z < ubound && z > lbound) {
        found = true;
        // console.log('found')
        z = Math.round(z);
        return z;
      }
    }
  }

  function pTC(polar){ //polar to cartesian: angles a specifier en radians
    push()
    angleMode(RADIANS)
    let ret = createVector(polar.x*cos(polar.y),polar.x*sin(polar.y))
    pop()
    return ret
    
  }
  function cTP(cartesian){ // cartesian to polar angles a specifier en radians
    push()
    angleMode(RADIANS)
    let ret =  createVector(sqrt(Math.pow(cartesian.x,2)+Math.pow(cartesian.y,2)),atan(cartesian.y/cartesian.x))
    pop()
    return ret
  }
  function outsideBordersCircle(circleCenter = createVector(0,0),radius = 10,borderWidth = 30){
    //ASSUMING CENTER OF CANVAS IS AT WIDTH/2, WIDTH2
    // console.log('1 '+str(circleCenter.x > borderWidth)+' 2 '+str(circleCenter.x < width - borderWidth)+ ' 3 '+str(circleCenter.y > borderWidth )+
    // ' 4 '+str(circleCenter.y < height - borderWidth))
    if(circleCenter.x +radius/2 > -width/2 + borderWidth && circleCenter.x - radius/2 < width/2 - borderWidth && circleCenter.y + radius/2 > -height/2 - borderWidth && circleCenter.y - radius/2< height/2 - borderWidth){console.log('false');return false}
    console.log('true')
    return true
  }