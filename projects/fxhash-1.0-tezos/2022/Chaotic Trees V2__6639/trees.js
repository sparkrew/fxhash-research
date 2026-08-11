// Generative Art License
// ======================
// Copyright (C) 2021 Vivek Nagarajan (rep.movsd@gmail.com)
//
// Terms:
// 1) No one is allowed to include this generative code in any project that is commercial.
// 2) No one is allowed to use this code as a basis for generative art on fxhash or any other similar platform, commercial or otherwise.
// 3) The owner of each minted token is completely free to use their uniquely generated image(s) for any purpose, commercial or otherwise.
// 4) The author of the generative code reserves the right to use the images generated for any purpose they wish, commercial or otherwise.
//
// In short, use your conscience - don't try to get rich ripping off other peoples creativity and efforts.
// Contact the author in case you wish to negotiate any of the above.

// The following code is derived from https://dwitter.net/d/24167 of which I am the author


function render()
{
  const S = Math.sin;
  const C = Math.cos;
  const k = fxrand;

  // Scaled random
  const rr = (a, b) => a + k() * (b - a);

  let W = 2048, H = W;

    // Get visible HTML canvas
  const cOut = document.querySelector('#c');
  const x = cOut.getContext('2d');

  const round = (k) => ((k*100)|0)/100

  // Params
  let M = round(rr(.29,.32));
  let N = round(rr(.29,.32));
  let V = round(rr(4.95, 5.1));
  let Z = round(rr(-.1,.1));

  let MM = 3 * (M * 100 - 29) / (32-29) | 0
  let NN = 3 * (N * 100 - 29) / (32-29) | 0
  let VV = 3 * (V * 100 - 495) / (510-495) | 0
  let ZZ = 3 * (Z * 100 + 10)  / 20 | 0

  let SF = ['low', 'med', 'high']

  //window.$fxhashFeatures = {MM,NN,VV,ZZ}
  window.$fxhashFeatures =
  {
    M: SF[MM],
    N: SF[NN],
    V: SF[VV],
    Z: SF[ZZ],
  };

  console.log(JSON.stringify(window.$fxhashFeatures))


  let HUE, SAT, LUM;
  let LEAF_H, LEAF_S, LEAF_L;

  HUE = rr(0, 40) | 0;
  SAT = rr(30, 50) | 0;
  LUM = rr(20, 40) | 0;

  LEAF_H = rr(60, 160)|0;
  LEAF_S = SAT + 35;
  LEAF_L = rr(60, 75) | 0;

  // Make greenish leaf less bright
  if(LEAF_H > 40 && LEAF_H < 140)
  {
    LEAF_L -= 20;
  }

  // Make reddish leaf cause trunk to go darker
  if(LEAF_H < 40 && LUM > 35)
  {
    LUM -= 20;
  }

  const LEAF = `hsla(${LEAF_H},${LEAF_S}%,${LEAF_L}%,.9)`;
  const TREE = `hsla(${HUE},${SAT}%,${LUM}%,.4)`;

  BH = H/4;
  BW = W/16;
  GAP = 40;

  x.fillStyle = `hsl(${HUE},10%,97%)`;
  x.fillRect(BW-GAP, BH-GAP, W-BW*2+GAP*2, H-BH*2+GAP*2)

  x.lineWidth=20;
  x.lineJoin = 'round';
  x.strokeStyle = `hsl(${HUE},${SAT/2}%,40%)`;
  x.strokeRect(BW-GAP, BH-GAP, W-BW*2+GAP*2, H-BH*2+GAP*2)
  x.lineWidth=1;
  GAP=2;
  x.strokeRect(BW-GAP, BH-GAP, W-BW*2+GAP*2, H-BH*2+GAP*2)

  x.beginPath();
  x.rect(BW, BH, W-BW*2, H-BH*2)
  x.clip();

  x.fillStyle = LEAF;

  function uu(t)
  {
    for(a=b=0,i=4e4;i--;)
    {
      m = t < .8;
      if(!m) {x.fillStyle = TREE}
      Q = Math.random();
      r = (4 * Q) | 0
      a += M * (r - a + b * S(a * V) + Z),
      b += N * (1 - a * b + C(a * V)),
      X = a * W/3.2 - W/12.8,
      Y = b * W/3.2 - S(15 * X/W - 3.3) * H/10 - X/50,
      x.fillRect(X * 4.2 - W*1.92, Y * 5 - W/6, m?1.5:t/3, 1)
    }
  }


  let tt = 0;
  const inc = 1 / 60;
  const loop = function()
  {
    uu(tt);
    tt += inc;

    if(tt < 2.2)
    {
      requestAnimationFrame(loop);
    }
    else
    {
      requestAnimationFrame(fxpreview);
    }
  };


  loop();
}
