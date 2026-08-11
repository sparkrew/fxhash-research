
var colors = [

            // background, line, highlight line

            // red
            //["F5F0EA", "D1604E", "D1604E"],

            // green
            //["F5F0EA", "0F7173", "0F7173"],

            // blue
            //["F5F0EA", "0B4F6C", "0B4F6C"],

            ["EBE8E3", "1763A8", "1763A8"],
            ["EBE8E3", "F3BA08", "F3BA08"],
            ["EBE8E3", "F21805", "F21805"],
            ["EBE8E3", "000000", "000000"]
];

//var simpleColors = ['1763A8', 'F3BA08', 'F21805', '000000', 'stripes'];
var simpleColors = ['EC6B56', '2C2729'];
var workingColors = [];

function getNextColor(not) {
    if (workingColors.length === 0) {
        for (let i = 0; i < simpleColors.length; i++) {
            workingColors.push(simpleColors[i]);
        }
        shuffleArray(workingColors);
    }
    //console.log('avoid = ' + not);
    //console.log('working colors = ' + workingColors);
    if (not.length > 0) {
        while (('#' + workingColors[workingColors.length - 1]) === not) {
            //console.log('shuffle so there is no repeat!');
            shuffleArray(workingColors);
        }
    }
    return '#' + workingColors.pop();
}

var paletteIndex;
let limit;

function rb(a, b) {
    return a + (b - a) * fxrand();
}

function randomColor() {
  let pi = Math.floor(rb(0, colors.length));
  return ('#' + colors[pi][1]);
}

function randomColorNot(not) {
    let c = randomColor();
    while (c === not) {
        c = randomColor();
    }
    return c;
}

// all the state that needs to be set/initialized before calling setup for the first time
function init() {
    fxrand = sfc32(...hashes)
    paletteIndex = Math.floor(rb(0, colors.length));

    let limiterList = [0.009, 0.0115, 0.0125];
    //let limiterList = [0.005, 0.0115, 0.0125];
    shuffleArray(limiterList);
    limit = limiterList.pop();
    //console.log('limit = ' + limit);
}

init();

function setup() {

  randomSeed(fxrand());

  var h = window.innerHeight;
  var w = h;

  // flip it if window is narrow width
  if (window.innerWidth < w) {
    w = window.innerWidth;
    h = w;
  }

  //console.log('width ' + w);
  //console.log('height ' + h);

  let num = 9;

  let margin = w/(num+2);
  let block = margin;
  //console.log('block ' + block);
  //console.log('small dim ' + smalldim);

  createCanvas(w, h);

  //var smalldim =  Math.floor(Math.min(w, h));
  //console.log('small dim: ' + smalldim);
  //  I ve had to fuss with that on other projects too. Basically limit the canvas size slightly by a modulo of window size.
  // I tend to work in proportions, so dividing by 2, 4, 10, etc.

  background('#' + colors[paletteIndex][0]);
  fill('#' + colors[paletteIndex][1]);

  noStroke();

  //strokeWeight(2*block/40);
  strokeWeight(0);

  fill('#' + simpleColors[0]);

  fill('#' + simpleColors[1]);
  
  var drawFlip = 1;
  //drawFlip = 0.90;
  var redFlip = 0.2;

  var numReds = 0;
  var count = 0;
  var numTall = 0;
  var numB = 0;
  var numC = 0;
  var numD = 0;

  var didRed = false;
  //for (var i = 0; i < num; i += 2) {

  var cutOptions = [
    (w-2*margin)/2.0,
    (w-2*margin)/3.0,
    2*(w-2*margin)/3.0,
    (w-2*margin)/5.0,
    4*(w-2*margin)/5.0
    ];
  var cutIndex = pickIndex(cutOptions);
  var cut = cutOptions[cutIndex];
  var startOptions = [0, cut];

  var prevDraw = false;
  var prevGap = false;
  var lineThicknessOptions = [4,1,0.5,0.125];
  while (!didRed || count > 11) {
      background('#' + colors[paletteIndex][0]);
      var verticalStart = margin;
      count = 0;
      numReds = 0;
      numTall = 0;
      numB = 0;
      numC = 0;
      numD = 0;
      didRed = false;

  var buffer = h / 100.0;
  //console.log('buffer = ' + buffer);
  var spaceLeft = (h - margin) - verticalStart;
  while (spaceLeft > buffer) {
      count++;
      //shuffleArray(startOptions);

      var startIndex = pickIndex(startOptions);
      var start = startOptions[startIndex];

      var drawwidth = 0;
      if (startIndex == 0) {
          var endOptions = [cut, block*num]
          drawwidth = pick(endOptions);
          //console.log('0 start ' + start);
          //console.log('0 rect width ' + drawwidth);

      } else if (startIndex == 1) {
          drawwidth = block * num - start;
          //console.log('1 start ' + start);
          //console.log('1 rect width ' + drawwidth);
      }
      //circle(margin, verticalStart, 10);
      //circle(w-margin, verticalStart, 10);

      var drawx = margin + start;
      var drawy = verticalStart;

      if (od(redFlip)) {
        fill('#' + simpleColors[0]);
        didRed = true;
        numReds++;
      } else {
        fill('#' + simpleColors[1]);
      }


      var thickness = fxrand();
      if (thickness < 0.1) {
        var rheight = block*4;
        var ltoIndex = 1;
        var subSpaceLeft = drawy + rheight - (h - margin);
        while ((subSpaceLeft > buffer) && ltoIndex < lineThicknessOptions.length) {
        //while ((drawy + rheight > (h-margin)) && ltoIndex < lineThicknessOptions.length) {
            rheight = block*lineThicknessOptions[ltoIndex];
            //console.log('hair cut ' + lineThicknessOptions[ltoIndex]);
            ltoIndex++;
        }

        if (ltoIndex == 1) {
            numTall++;
        } else if (ltoIndex == 2) {
            numB++;
        } else if (ltoIndex == 3) {
            numC++;
        } else if (ltoIndex == 4) {
            numD++;
        }

        if (od(drawFlip)) {

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);

/*
  translate(0,h);
  rotate(-Math.PI/2);

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);

  rotate(Math.PI/2);
  translate(0,-h);
  */

            //rect(drawx, drawy, drawwidth, rheight);
            prevDraw = true;
            prevGap = false;
        } else {
            prevGap = true;
            prevDraw = false;
        }
        verticalStart += rheight;
      } else if (thickness < 0.33) {
        var rheight = block*1;
        var ltoIndex = 1;
        var subSpaceLeft = drawy + rheight - (h - margin);
        while ((subSpaceLeft > buffer) && ltoIndex < lineThicknessOptions.length) {
        //while ((drawy + rheight > (h-margin)) && ltoIndex < lineThicknessOptions.length) {
            rheight = block*lineThicknessOptions[ltoIndex];
            //console.log('hair cut ' + lineThicknessOptions[ltoIndex]);
            ltoIndex++;
        }

        if (ltoIndex == 1) {
            numB++;
        } else if (ltoIndex == 2) {
            numB++;
        } else if (ltoIndex == 3) {
            numC++;
        } else if (ltoIndex == 4) {
            numD++;
        }



        if (od(drawFlip)) {
            prevDraw = true;
            prevGap = false;

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);


/*
  translate(0,h);
  rotate(-Math.PI/2);

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);
  rotate(Math.PI/2);
  translate(0,-h);
  */

        } else {
            prevGap = true;
            prevDraw = false;
        }
        verticalStart += rheight;
      } else if (thickness < 0.66) {
        var rheight = block*.5;
        var ltoIndex = 1;
        var subSpaceLeft = drawy + rheight - (h - margin);
        while ((subSpaceLeft > buffer) && ltoIndex < lineThicknessOptions.length) {
        //while ((drawy + rheight > (h-margin)) && ltoIndex < lineThicknessOptions.length) {
            rheight = block*lineThicknessOptions[ltoIndex];
            //console.log('hair cut ' + lineThicknessOptions[ltoIndex]);
            ltoIndex++;
        }

        if (ltoIndex == 1) {
            numC++;
        } else if (ltoIndex == 2) {
            numC++;
        } else if (ltoIndex == 3) {
            numC++;
        } else if (ltoIndex == 4) {
            numD++;
        }

        if (od(drawFlip)) {
            prevDraw = true;
            prevGap = false;

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);


/*
  translate(0,h);
  rotate(-Math.PI/2);

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);
  rotate(Math.PI/2);
  translate(0,-h);
  */

        } else {
            prevGap = true;
            prevDraw = false;
        }
        verticalStart += rheight;

      } else {
        var rheight = block*.125;
        var ltoIndex = 1;
        var subSpaceLeft = drawy + rheight - (h - margin);
        while ((subSpaceLeft > buffer) && ltoIndex < lineThicknessOptions.length) {
        //while ((drawy + rheight > (h-margin)) && ltoIndex < lineThicknessOptions.length) {
            rheight = block*lineThicknessOptions[ltoIndex];
            //console.log('hair cut ' + lineThicknessOptions[ltoIndex]);
            ltoIndex++;
        }

        if (ltoIndex == 1) {
            numD++;
        } else if (ltoIndex == 2) {
            numD++;
        } else if (ltoIndex == 3) {
            numD++;
        } else if (ltoIndex == 4) {
            numD++;
        }

        if (od(drawFlip)) {
            prevDraw = true;
            prevGap = false;

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);


/*
  translate(0,h);
  rotate(-Math.PI/2);

            translate(drawx, drawy);
            rect(0, 0, drawwidth, rheight);
            translate(-drawx, -drawy);
  rotate(Math.PI/2);
  translate(0,-h);
  */

        } else {
            prevGap = true;
            prevDraw = false;
        }
        verticalStart += rheight;
      }
      verticalStart += block*.125/2.0;
      spaceLeft = (h - margin) - verticalStart;
  }
  //console.log('did red: ' + didRed);
  }
   
/*
  for (var i = 0; i < num; i += 2) {
      if (od(flip)) {
        continue;
      }

      if (!didRed && od(redFlip)) {
        fill('#' + simpleColors[0]);
        didRed = true;
      } else {
        fill('#' + simpleColors[1]);
      }
      rect(margin+block*i, margin, block, block*num);
  }
  */

  var cutDescription = 'none';
  if (cutIndex == 0) {
    cutDescription = 'one-half';
  }
  else if (cutIndex == 1) {
    cutDescription = 'one-third';
  }
  else if (cutIndex == 2) {
    cutDescription = 'two-thirds';
  }
  else if (cutIndex == 3) {
    cutDescription = 'one-fifth';
  }
  else if (cutIndex == 4) {
    cutDescription = 'four-fifths';
  }

  options = {
    '# big' : numTall,
    '# medium' : numB,
    '# small' : numC,
    '# tiny' : numD,
    '# of total rectangles' : count,
    '# reds' : numReds,
    'cut fraction' : cutDescription
  }
  //console.log(cutDescription);

  //console.log(options);

  window.$fxhashFeatures = {
    ...options
  }
}

function fillRand(num, arr) {
  // choose a random point. 
  let rx = rint(0, num);
  let ry = rint(0, num);

  // choose a random width. 
  let rw = rint(1, num - rx)

  // choose a random height. 
  let rh = rint(1, num - ry)

  console.log('rx = ' + rx);
  console.log('ry = ' + ry);
  console.log('rw = ' + rw);
  console.log('rh = ' + rh);

  let pi = Math.floor(rb(0, colors.length));

  // TODO: see if you can fill that in. 
  for (let i = rx; i < (rx+rw); i++) {
    for (let j = ry; j < (ry+rw); j++) {
      console.log('i = ' + i);
      console.log('j = ' + j);
      // if so mark it, and go again
      arr[i][j] = ('#' + colors[pi][1]);
    }
  }

}

function randomLines(x, y, w, h, block, outer, color) {
    let numLinesDrawn = 0;
    //smalldim = block/4;
    let smalldim = block/6;
    // draw rect
    //fill('#F5F0EA');
    let savex = x;
    let savey = y;
    stroke('#' + colors[paletteIndex][1]);

    let prev = false;
    let solid = fxrand() < 0.5;
    let alt = false;
    let solidStart = -1;
    // draw random lines going down
    for (let i = y; y < h + outer - smalldim/2; y+=smalldim) {
        if (!prev) {
            // it's blank above
            if (fxrand() < limit) {
            //if (true) {
                // jackspot, start an alt
                if (alt) {
                    line(x, y, x+w,y);
                    numLinesDrawn++;
                }

                // jackpot, start a solid
                if (solid) {
                    if (solidStart === -1) {
                        //console.log('start solid ' + y);
                        solidStart = y;
                    }
                    line(x, y, x+w,y);
                    numLinesDrawn++;
                }

                // if you drew alt, flip it so you don't draw it next time
                alt = !alt;

                // currently drawing
                prev = true;
            }
        } else {
            // continue drawing the block 95% of the time
            if (fxrand() < 0.95) {

                // continue drawing alt
                if (alt) {
                    line(x, y, x+w,y);
                    numLinesDrawn++;
                } 

                // continue drawing solid
                if (solid) {
                    line(x, y, x+w,y);
                    numLinesDrawn++;
                }

                // if you drew alt, flip it so you don't draw it next time
                alt = !alt;

                // currently drawing
                prev = true;
            } else {

                // end this block
                prev = false;
                if (solid) {
                    //console.log('end solid ' + y);
                    // TODO: close the rectangle
                    //fill(color);
                    let pi = Math.floor(rb(0, colors.length));
                    fill('#' + colors[pi][2]);
                    stroke('#' + colors[pi][2]);
                    rect(x, solidStart, w, y-solidStart);
                    noFill();
                    solidStart = -1;
                }

                solid = fxrand() < 0.5;
            }
        }
    }
    if (solid && solidStart !== -1) {
        //console.log('end solid ' + y);
        // TODO: close the rectangle

        let pi = Math.floor(rb(0, colors.length));
        fill('#' + colors[pi][2]);
        stroke('#' + colors[pi][2]);
        rect(x, solidStart, w, y-solidStart);
        noFill();

        //fill(color);
        //rect(x, solidStart, w, y-solidStart);
        //noFill();
        solidStart = -1;
    }

    stroke('#000000');
    //rect(savex, savey, w, h);

    return numLinesDrawn;

}

function od(a) {
    return fxrand() <= a
}

function rint(a, b) {
    return Math.floor(rb(a, b));
}

function wc(a) {
    const b = fxrand();
    let c = 0;
    for (let e = 0; e < a.length - 1; e += 2) {
        const f = a[e],
            g = a[e + 1];
        if (c += g, b < c) return f
    }
    return a[a.length - 2]
}

function pick(a) {
    let len = a.length;
    return a[int(rb(0, len))];
}

function pickIndex(a) {
    let len = a.length;
    return int(rb(0, len));
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(fxrand() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function windowResized() {
    clear();
    init();
    setup();
}


