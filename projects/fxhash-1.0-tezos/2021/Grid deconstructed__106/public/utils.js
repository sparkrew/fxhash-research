let nums, mn, mx, long_num;

function walletStuff() {
  console.log("fxhash:", fxhash);
  nums = getNumbersFromWallet();
  mn = min(nums);
  mx = max(nums);
  long_num = getLongNumberFromWallet();
  cols = getColoursFromWallet();
}


function getLongNumberFromWallet() {
  let long = "";
  for (var i = 0; i < fxhash.length; i += 1) {
    let q = fxhash.substr(i, 2);
    let v = hash32(q, 1);
    let h = getHash(v);
    h = h.toString();
    h = h.substr(2, h.length);
    long += h;
  }
  //console.log(long.length, long);
  return long;
}

function getColoursFromWallet() {
  let _cols = [];
  let ln = long_num.toString();
  for (var i = 0; i < ln.length; i += 1) {
    let q = ln.substr(i, 2);
    let v = hash32(q, 1)
    //console.log(v);
    _cols.push(v)
  }
  return _cols;
}


function getNumbersFromWallet() {
  let _nums = [];
  for (var i = 0; i < fxhash.length - 1; i += 1) {
    let wallet_slice = fxhash.substr(i, 2);
    let num = stringToHash(wallet_slice);
    _nums.push(num)
  }

  return _nums;
}


function getHash(string) {
  if (string) {
    let nameHash = string.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
    return Math.abs(nameHash);
  } else {
    return null;
  }
}

function stringToHash(string) {
  var h = 0;

  if (string.length == 0) return h;

  for (i = 0; i < string.length; i++) {
    a = string.charCodeAt(i);
    h = (h << 5) - h + a;
    h = h & h;
  }
  //console.log(h)
  return h;
}

function hash32(str, asString, seed) {
  /*jshint bitwise:false */
  var i, l,
    hval = (seed === undefined) ? 0x811c9dc5 : seed;

  for (i = 0, l = str.length; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  if (asString) {
    // Convert to 6 digit hex string
    return ("00000" + (hval >>> 0).toString(16)).substr(-6);
  }
  return hval >>> 0;
}


function roundMap(n, mn, mx, nm, nx) {
  //console.log(n, mn, mx, nm, nx);
  return round(map(n, mn, mx, nm, nx));
}

function mapWalletNum(num, nm, nx) {
  //console.log(num, mn, mx);
  if (num < 0) num = nums.length - num;
  return roundMap(nums[num % nums.length], mn, mx, nm, nx);
}

function mapWalletLongNum(n, _cnt, _mn, _mx) {
  n = n % long_num.length;
  let nn = int(long_num.substr(n, _cnt));
  //console.log(nn);
  let pp = pow(10, _cnt);
  return map(nn, 0, pp, _mn, _mx);
}




function simpleGrid(nx, ny, _w, _h) {
  this.w = _w || width;
  this.h = _h || height;
  this.pos = [];
  this.cols = round(nx);
  this.rows = round(ny);

  noFill();
  // strokeWeight(10)
  // stroke(255,0,0)
  // rect(0,0,this.w,this.h);
  this.sz = this.start_sz = {
    x: this.w / nx,
    y: this.h / ny
  };
  var i = 0;;
  for (y = 0; y < ny; y++) {

    for (x = 0; x < nx; x++) {
      this.pos.push({
        me: i,
        x: x * this.sz.x + this.sz.x / 2,
        y: y * this.sz.y + this.sz.y / 2,
        start_x: x * this.sz.x,
        start_y: y * this.sz.y,
        sz: {
          x: this.sz.x,
          y: this.sz.y
        },
        row: y,
        col: x,
        c: 0,
        c2: 0,
        t: []
      });
      i++;
    }
  }
  this.length = this.pos.length;
}



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
    let n = round(c);
    n = n % (this.colour_list.length);
    return this.colour_list[n];
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  reset();
}
