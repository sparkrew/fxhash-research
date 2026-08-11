function w(val) {
    if (val == null) return width; 
    return width*val;
  }
  
  function h(val) {
    if (val == null) return height; 
    return height*val;
  }

  function chaikin(arr, num) {
    if (num === 0) return arr;
    const l = arr.length;
    const smooth = arr.map((c,i) => {
      return [[0.75*c[0] + 0.25*arr[(i + 1)%l][0],
               0.75*c[1] + 0.25*arr[(i + 1)%l][1]],
              [0.25*c[0] + 0.75*arr[(i + 1)%l][0],
              0.25*c[1] + 0.75*arr[(i + 1)%l][1]]];
      }).flat();
    return num === 1 ? smooth : chaikin(smooth, num - 1)
  }

  function makeCircle(numSides, radius) {
    const points = [];
    const radiansPerStep = TWO_PI / numSides;
    for (let theta = 0; theta < TWO_PI; theta += radiansPerStep) {
      const x = 0.5 + radius * cos(theta);
      const y = 0.5 + radius * sin(theta);
      
      points.push([x, y]);
    }
    return points;
  }

  const randomRange = (min, max) => {
    let v = fxrand() * (max-min) + min;
    return v;
  }

  function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = fxrand(); //Converting [0,1) to (0,1)
    while(v === 0) v = fxrand();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  }