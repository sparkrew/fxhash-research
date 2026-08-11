// Generative Art License
// ======================
// Copyright (C) 2022 Vivek Nagarajan (rep.movsd@gmail.com)
//
// Terms:
// 1) No one is allowed to include this generative code in any project that is commercial.
// 2) No one is allowed to use this code as a basis for generative art on fxhash or any other similar platform, commercial or otherwise.
// 3) The owner of each minted token is completely free to use their uniquely generated image(s) for any purpose, commercial or otherwise.
// 4) The author of the generative code reserves the right to use the images generated for any purpose they wish, commercial or otherwise.
//
// In short, use your conscience - don't try to get rich ripping off other peoples creativity and efforts.
// Contact the author in case you wish to negotiate any of the above.

function render()
{

  let S = Math.sin;
  let C = Math.cos;
  let PI = Math.PI;
  let Z = fxrand;

  const rr = (a, b) => a + fxrand() * (b - a);
  const E = () => Z() * Math.PI * 4;
  const R = function(r, g, b, a)
  {
    a = a === undefined ? 1 : a;
    return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
  };

  let c = document.querySelector("#c");
  let CW = 2048, CH = 2048;
  c.width = CW;
  c.height = CH;
  const x = c.getContext('2d');


  let X = 1, Y = 1;
  let de = [], df = [];
  let a = [E(), E() * 3, E()];
  let M = (rr(52, 60) | 0) / 100;
  let O = (rr(10, 50) | 0) / 10;
  let L = 3;
  let A = rr(200, 300) | 0, B = rr(500, 700) | 0;
  const MAXT = 5;

  let CX = CW / 2, CY = CH * .6, SX = 400, SY = 300;

  for(let I = 0; I < 3; ++I)
  {
    de[I] = C(a[I]) * M;
    df[I] = S(a[I]) * M;
  }

  let PAL = [
    R(255, 255, 0, 0.01),
    R(0, 255, 255, 0.01),
    R(255, 128, 255, 0.01),
    R(0, 255, 128, 0.01),
  ];

  let PALETTE = Z() * 4 | 0;


  window.$fxhashFeatures =
  {
    O,
    M,
    A,
    B,
    PALETTE
  };
  console.log(JSON.stringify(window.$fxhashFeatures));


  // Clear the canvas
  x.fillStyle = '#000000';
  x.fillRect(0, 0, CW, CH);
  //x.fillStyle = `hsla(${HUE},100%,80%,0.01)`

  x.fillStyle = PAL[PALETTE];

  function u(t, test)
  {
    for(let i = 0; i < 1e4; i++)
    {
      let pX = X;

      let j = Math.random() * 1000;
      let k = j / 333 | 0;

      if(k === 0)
      {
        X = de[0] * pX - df[0] * Y;
        Y = df[0] * pX + de[0] * Y;
      }

      if(k === 1)
      {
        X = de[1] * pX - df[1] * Y + 1;
        Y = -df[1] * pX - de[1] * Y;
      }

      if(k === 2)
      {
        X = de[2] * pX - df[2] * Y + 1;
        Y = df[2] * pX + de[2] * Y;
      }

      let r = (X * X + Y * Y) ** .5;
      let d = Math.atan(Y / X) + O;

      if(j < A)
      {
        X = r * C(d * 2),
        Y = r * S(d * 2);
      }
      else if(j < B)
      {
        X = (r - d) * C(d / 2);
        Y = (r - d) * S(d / 2);
      }

      //x.fillStyle = R(255 - j / 8, 128+j / 8, 0, 0.01);

      let X1 = SX * X, Y1 = CY + SY * Y;
      x.fillRect(CX + X1, Y1, L, L);
      x.fillRect(CX - X1, Y1, L, L);
    }
  }

  let tt = 0;

  function loop()
  {
    u(tt);
    tt += 1 / 60;

    if(tt < MAXT)
    {
      requestAnimationFrame(loop);
    }
    else
    {
      if(fxpreview)
      {
        fxpreview();
      }

      let link = document.getElementById('link');
      link.setAttribute('download', `capture-${(new Date()) & 65535}.png`);
      link.setAttribute('href', c.toDataURL("image/png").replace("image/png", "image/octet-stream"));
      //link.click();

    }

  }

  loop();

}



