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

  function fxshuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = floor(fxrand() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


// **************************
// *         UTILS          *
// **************************

function setDimensions() {
  fullScreen = isFullscreen();

  // This is how we constrain the canvas to the smallest dimension of the window
  // Thanks to Maxim Schoemaker for this trick! twitter.com/MaximSchoemaker - maximschoemaker.com
  canvasSize = min(windowWidth, windowHeight);

  if (hasMaxSize) {
    canvasSize = min(referenceSize, canvasSize);
  }

  // windowScale goes from 0.0 to 1.0 as canvasSize goes from 0.0 to referenceSize
  // if hasMaxSize is set to true, it will be clamped to 1.0 otherwise it keeps growing over 1.0
  windowScale = map(canvasSize, 0, referenceSize, 0, 1, hasMaxSize);
}

function centerCanvas() {
  var s = document.body.style;
  s.display = "flex";
  s.overflow = "hidden";
  s.height = "100vh";
  s.alignItems = "center";
  s.justifyContent = "center";
}

function isFullscreen() {
  if (
    document.fullscreenElement ||
    window.screen.height - window.innerHeight <= 3 ||
    isEdgeFullscreen() ||
    isSafariFullscreen()
  ) {
    return true;
  }
  return false;
}

function isSafariFullscreen() {
  if (document.webkitIsFullScreen) {
    return true;
  }
  return false;
}

function isEdgeFullscreen() {
  if (isUserAgent("Edg") && window.screen.height - window.innerHeight <= 235) {
    return true;
  }
  return false;
}

function isUserAgent(name) {
  if (window.navigator.userAgent.indexOf(name) > -1) {
    return true;
  }
  return false;
}

// toggle fullscreen (for testing)
// function mousePressed() {
//   let fs = fullscreen();
//   fullscreen(!fs);
// }