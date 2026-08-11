function colourPool() {
  this.pool = [];
  this.colour_list = [];
  this.weights = [];
  this.length = 0;
  that = this;

  this.add = function(_colour, _weight) {
    if (_weight == undefined) _weight = 1;
    that.pool.push(_colour);
    that.weights.push(_weight);
    that.colour_list = this.generateWeighedList(this.pool, this.weights);
    that.length = this.colour_list.length;
    return this;
  }

  this.get = function(c) {
    // let n;
    //console.log(c);
    if (c == undefined) {
      c = randomInt(this.colour_list.length);
    }
    c = Math.round(c)
    // } else {
    //
    // }
    // n = n % (this.colour_list.length);
    //console.log(c);
    return this.colour_list[c % (this.colour_list.length)];
  }

  this.generateWeighedList = function(list, weight) {

    var weighed_list = [];
    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
      var multiples = weight[i];
      // Loop over the list of items
      for (var j = 0; j < multiples; j++) {
        weighed_list.push(list[i]);
      }
    }
    return weighed_list;
  };
  return this;
}



function simpleGrid3D(nx, ny, nz, _w, _h, _d) {

  //console.log("grid3D");
  this.w = _w || width;
  this.h = _h || height;
  this.d = _d || width;

  this.pos = [];
  this.cols = Math.round(nx);
  this.rows = Math.round(ny);
  this.depths = Math.round(nz);

  this.sz = this.start_sz = {
    x: this.w / nx,
    y: this.h / ny,
    z: this.w / nz,
  };

  var i = 0;;
  for (z = 0; z < nz; z++) {
    for (y = 0; y < ny; y++) {
      for (x = 0; x < nx; x++) {
        this.pos.push({
          me: i,
          on: 1,
          show: 1,
          x: x * this.sz.x + this.sz.x / 2,
          y: y * this.sz.y + this.sz.y / 2,
          z: z * this.sz.z + this.sz.z / 2,
          start_x: x * this.sz.x,
          start_y: y * this.sz.y,
          start_z: z * this.sz.z,
          target_sz: this.sz.x,
          angle: 0,

          sz: {
            x: this.sz.x,
            y: this.sz.y,
            z: this.sz.z
          },
          start_sz: {
            x: this.sz.x,
            y: this.sz.y,
            z: this.sz.z
          },
          dir: {
            x: 1,
            y: 1,
            z: 1
          },
          accel: {
            x: .1,
            y: .1
          },
          target: {
            x: x,
            y: y
          },
          speed: {
            x: 1,
            y: 1
          },
          row: y,
          col: x,
          depth: z,
          c: 0,
          c2: 0,
          t: []
        });
        i++;
      }
    }
  }
  this.length = this.pos.length;
  //console.log(this.pos);
}


function randomInt(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}


function chance(value) {
  if (random(value) > value - 1) return true;
}


function randomNoise(_ctx) {

  _ctx.fill(randomInt(0, 30), 30);
  _ctx.noStroke();

  for (var y = offsety; y < canvas_sz - offsety; y += 2) {
    for (var x = offsetx; x < canvas_sz - offsetx; x += 2) {
      // if (chance(10)) point(x, y)
      if (chance(20)) _ctx.rect(x, y, 1, 1)
    }
  }
}


function linearGradient(_ctx, sX, sY, eX, eY, colorS, colorE) {
  let gradient = _ctx.drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  //console.log(colorS, colorE);
  gradient.addColorStop(0, color(colorS));
  gradient.addColorStop(1, color(colorE));
  _ctx.drawingContext.fillStyle = gradient;
  // drawingContext.strokeStyle = gradient;
}


function shuffleGrid(sourceArray) {

  for (var i = 0; i < sourceArray.length; i++) {
    var j = mapWalletInt(i, 0, sourceArray.length - 1);
    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  for (var i = 0; i < sourceArray.length; i++) {
    sourceArray[i].me = i;
  }
  return sourceArray;

}


function getColourName(c) {
  let result = ntc.name(c);
  let colour_name = result[1];
  //console.log(colour_name)
  console.log(" %c " + c + " " + colour_name + " ", 'background: ' + c + '; color: #000');
  return colour_name;
}


function getHour() {
  const d = new Date();
  let hr = d.getHours();
  //if (hr < 6 || hr >= 18) night = 1;
  return hr;
}


function windowResized() {
  canvas_sz = min(windowWidth, windowHeight);
  resizeCanvas(canvas_sz, canvas_sz);
  ctx.resizeCanvas(canvas_sz, canvas_sz);
  ctx2.resizeCanvas(canvas_sz, canvas_sz);
  ctx3.resizeCanvas(canvas_sz, canvas_sz);
  ctx4.resizeCanvas(canvas_sz, canvas_sz);
  reset();
}
