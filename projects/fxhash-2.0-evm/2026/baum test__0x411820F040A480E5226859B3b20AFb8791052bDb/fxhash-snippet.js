// fxhash snippet (v2 compatible, separate file)
const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const fxhash = new URLSearchParams(window.location.search).get("fxhash") 
  || Array.from({length: 51}, () => alphabet[Math.floor(Math.random()*alphabet.length)]).join("");

let H = [];
for (let i = 0; i < 4; i++) {
  H.push(parseInt(fxhash.slice(i*8+2, i*8+10), 36));
}

function sfc32(a, b, c, d) {
  return function () {
    a |= 0; b |= 0; c |= 0; d |= 0;
    let t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}

window.fxrand = sfc32(H[0], H[1], H[2], H[3]);
