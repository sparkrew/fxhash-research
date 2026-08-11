let viewerAddress, binary, mn, mx, nums, long_num;

function setupHash(static_wallet) {

  if (static_wallet) {
    viewerAddress = 'tz1QgjmhrUD3X7kgS9mMHbUz4cS6uDiFGhAU'; // hardcode an address
  } else {
    viewerAddress = fxhash;
  }

  binary = convertBinary(viewerAddress)
  console.log("viewer:", viewerAddress);
  nums = getNumbersFromWallet();
  mn = min(nums);
  mx = max(nums);
  long_num = getLongNumberFromWallet();
}


function getNumbersFromWallet() {
  let _nums = [];
  for (var i = 0; i < viewerAddress.length - 1; i += 1) {
    let wallet_slice = viewerAddress.substr(i, 2);
    let num = stringToHash(wallet_slice);
    //console.log(num);
    _nums.push(num)
  }
  //console.log(_nums);
  return _nums;
}

function getLongNumberFromWallet() {
  let long = "";
  let _nums = [];
  for (var i = 0; i < viewerAddress.length; i += 1) {
    let q = viewerAddress.substr(i, 2);
    let v = hash32(q, 1);
    let h = getHash(v);
    h = h.toString();
    h = h.substr(2, h.length);
    _nums.push(int(h));
    long += h;
  }
  //console.log(long.length, long);
  //console.log(_nums.length, min(_nums), max(_nums));
  return long;
}



function convertBinary(input) {
  //console.log(input);
  output = "";
  for (i = 0; i < input.length; i++) {
    var e = input[i].charCodeAt(0);
    var s = "";
    do {
      var a = e % 2;
      e = (e - a) / 2;
      s = a + s;
    } while (e != 0);
    while (s.length < 8) {
      s = "0" + s;
    }
    output += s;
  }
  //console.log(output);
  return output;
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

function roundMap(n, mn, mx, nm, nx) {
  //console.log(n, mn, mx, nm, nx);
  return round(map(n, mn, mx, nm, nx));
}


function walletPercentage(n){
  return mapWalletNum(n, 0, 100);
}

function mapWalletNum(num, nm, nx) {
  //console.log(num, mn, mx);
  if (!nx) {
    nx = nm;
    nm = 0;
  }
  if (num < 0) num = round(nums.length - num);
  return map(nums[num % nums.length], mn, mx, nm, nx);
}

function mapWalletInt(num, nm, nx) {
  if (!nx) {
    nx = nm;
    nm = 0;
  }
  //console.log(num, mn, mx);
  //if (num < 0) num = round(nums.length - num);
  return roundMap(nums[num % nums.length], mn, mx, nm, nx);
}


function mapWalletLongNum(n, _cnt, _mn, _mx) {
  n = n % long_num.length;
  let nn = int(long_num.substr(n, _cnt));
  //console.log(nn);
  let pp = pow(10, _cnt);
  return map(nn, 0, pp, _mn, _mx);
}
