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
  let K = () => Z() - .5;

  const rr = (a, b) => a + fxrand() * (b - a);
  const choose = A => A[A.length * fxrand() | 0];
  const HSL = (h, s, v) => `hsl(${h | 0},${s}%,${v}%)`;

  // Offscreen canvas we will draw into
  const cTemp = document.createElement('canvas');
  let CW = 2048, CH = CW;
  const W = CW;
  const H = (CW / 16) * 12;
  cTemp.width = CW;
  cTemp.height = CH;
  const x = cTemp.getContext('2d');


  // Calculate a line from X,Y to X1,Y1 with D segments - modulate each segments end points by VX and VY
  // where VX will be along the line and VY perpendicular
  // VX and VY are co-efficients from 0 to 1 where 1 represents the entire size of the line
  // Also takes a function that will be applied to each point on the line to modulate in custom ways
  // FN(I, F, E) => where I is index of the point, F is the normalized 0 to 1 range of the line and E is extra info passed in
  // The function returns the amount to modulate where 1 is the length of the entire line

  function rline(X, Y, X1, Y1, D, V, FN, EXTRA, SMOOTH = 0)
  {
    // Special flat mode
    if(FLAT)
    {
      V = 0;
    }

    let ret = [[X, Y]];

    let RX = (X1 - X), RY = (Y1 - Y);
    let R = (RX * RX + RY * RY) ** .5;

    // Get an orthogonal vector
    let VX = (RY * V) / R;
    let VY = (-RX * V) / R;

    const DX = RX / D;
    const DY = RY / D;

    for(let I = 0; I < D; ++I)
    {
      let F = S(PI * I / D) ** .7;
      X += DX + K() * VX * R * F / 2, Y += DY + K() * VY * R * F / 2;
      ret.push([X, Y]);
    }

    if(FN)
    {
      for(let I = 0; I < D; ++I)
      {
        let V = FN(I, I / D, EXTRA);
        VX = (RY * V) / R;
        VY = (-RX * V) / R;
        ret[I][0] += VX * R;
        ret[I][1] += VY * R;
      }
    }

    for(; SMOOTH > 0; SMOOTH--)
    {
      for(let I = 1; I < D - 1; ++I)
      {
        ret[I][0] = (ret[I - 1][0] * .1 + ret[I][0] * .8 + ret[I + 1][0] * .1) | 0;
        ret[I][1] = (ret[I - 1][1] * .1 + ret[I][1] * .8 + ret[I + 1][1] * .1) | 0;
      }
    }

    for(let I = 0; I < D; ++I)
    {
      ret[I][0] |= 0;
      ret[I][1] |= 0;
    }

    return ret;
  }


  const drawArr = (A, REV) =>
  {
    if(REV)
    {
      let l = A.length;
      x.moveTo(A[l - 1][0], A[l - 1][1]);
      for(I = l - 1; I >= 0; --I)
      {
        x.lineTo(A[I][0], A[I][1]);
      }
    }
    else
    {
      x.moveTo(A[0][0], A[0][1]);
      for(const k of A)
      {
        x.lineTo(k[0], k[1]);
      }
    }
  };


  // Draw a mountain face given the left and right borders
  // Assumes that L and R point arrays start at the same point and spread
  const drawFace = (L, R) =>
  {

    let revL = [...L];
    revL.reverse();

    let arrPath = [...revL, ...R];
    x.beginPath();
    drawArr(arrPath);
    x.fill();

    if(LOWRES)
    {
      return;
    }
    // draw the border
    x.lineWidth = SHADED ? 1 : (CW / 512);
    x.beginPath();
    drawArr(L);
    drawArr(R);
    x.stroke();
  };

  // Clip the area of a face so we can hatch it
  // Assumes that L and R point arrays start at the same point and go downwards
  const clipFace = (L, R) =>
  {
    let revL = [...L];
    revL.reverse();

    // Make the path and clip it
    let arrPath = [...revL, ...R];

    x.save();
    x.beginPath();
    drawArr(arrPath);
    x.clip();
  };

  // extends a line
  const extend = (L) =>
  {
    let e = L.length - 1;
    let X = L[e][0], Y = L[e][1];
    let DX = X - L[e - 1][0];
    let DY = Y - L[e - 1][1];

    let D = e / 4 | 0;
    let extLine = rline(X, Y, X + DX * D, Y + DY * D, D, 0.02);

    return [...L, ...extLine];
  };


  const setHatchShade = () =>
  {
    if(SHADED)
    {
      if(BLUR)
      {
        x.filter = `blur(${CW / 1024}px)`;
      }

      x.globalAlpha = LOWRES ? .2 : .1;
      x.lineWidth = W / 32;
    }
    else
    {
      x.lineWidth = 1;
    }
  };

  // Draws a wavy hatch pattern given two sides
  const hatch = (L, R, STEP, NSEG, VAR, MOD, SMOOTH) =>
  {
    setHatchShade();

    // Extend L and R by 25% to ensure hatching
    L = extend(L);
    R = extend(R);


    // We will draw many lines from L to R somewhat parallel to B at distance STEP, varying by VAR
    let N = L.length / STEP;

    for(let Q = 0; Q < N; Q++)
    {
      let I = Q * STEP | 0;
      let M = Q / N;

      // Get line length and decide number of segments in line based on that
      let X1 = L[I][0], Y1 = L[I][1], X2 = R[I][0], Y2 = R[I][1];
      let A = rline(X1, Y1, X2, Y2, NSEG, VAR, MOD, M, SMOOTH);

      let P = A.length - 1;
      if(P > 2)
      {
        let DX = A[P - 1][0] - A[P - 2][0];
        let DY = A[P - 1][1] - A[P - 2][1];
        A[P][0] = A[P - 1][0] + DX * 14;
        A[P][1] = A[P - 1][1] + DY * 14;
      }

      x.beginPath();
      drawArr(A);
      x.stroke();
    }
  };


  // Left hatch draw hatch between L/R sides and B
  const hatchA = (P, B, STEP, NSEG, VAR) =>
  {
    x.lineWidth = 1;

    // We need to reverse L or R so they share the point with B's start
    let Q = [...P];
    Q.reverse();
    hatch(Q, B, STEP, NSEG, VAR);
  };

  // hatch in a radial pattern from the given side
  const hatchV = (B, STEP, NSEG, VAR, MOD, SMOOTH) =>
  {
    setHatchShade();

    // Get the deltas
    let X = B[0][0], X1 = B[B.length - 1][0];
    let Y = B[0][1], Y1 = B[B.length - 1][1];
    let DX = X1 - X;
    let DY = Y1 - Y;

    // Get the orthogonal direction and make a parallel one to B
    let OX = DY * 2, OY = -DX * 2;
    let XX = X + OX, YY = Y + OY;
    let XX1 = X1 + OX, YY1 = Y1 + OY;

    // Stretch the line out on both sides by 4x
    XX -= DX * 3, YY -= DY * 3;
    XX1 += DX * 3, YY1 += DY * 3;

    let L = rline(XX, YY, XX1, YY1, B.length, 0);

    //hatch(B, L, STEP, NSEG, VAR, MOD)

    for(let I = 0; I < B.length; I += STEP)
    {
      let X = B[I][0], Y = B[I][1];
      let M = rline(X, Y, L[I][0], L[I][1], B.length, VAR, MOD, null, SMOOTH);
      x.beginPath();
      drawArr(M);
      x.stroke();
    }
  };

  // Draw one mountain with peak XP, YP down-to YB with a ridge and returns the three point arrays to build facets on
  // XL, XM, XR are the left base, ridge and right base
  const getMount = (XP, YP, XL, XM, XR, YB) =>
  {
    // Left, mid(ridge) and right lines
    let NV = 80;
    let YE = YB + H / 8;
    let MY = 0.06;
    let L = rline(XP, YP, XL, YE, NV, MY, null, null, 3);
    let M = rline(XP, YP, XM, YE, NV, MY, null, null, 4);
    let R = rline(XP, YP, XR, YE, NV, MY, null, null, 4);

    // Make two random line for the base, mid to left and right to mid
    let B1 = rline(XL, YE, XM, YE, NV, 0);
    let B2 = rline(XM, YE, XR, YE, NV, 0);

    // Gently modulate the left and right side by a sine
    const BIAS = K() > 0 ? -1 : 1;
    for(let I = 1; I < NV - 3; I++)
    {
      let F = I / NV;
      let d = S(F * PI) * W / 7;
      L[I][0] += (d / 2) * BIAS;
      R[I][0] += d * BIAS;
    }

    return [L, M, R, B1, B2];

  };

  // Draws a mountain with peak at XP, YP and width WW, until HH
  const drawMount = (XP, YP, WW, HH, STYLE) =>
  {
    // Get a base that is offset from the peak randomly
    let OFFSET = K() * WW / 2;
    let XL = OFFSET + XP - WW / 2;
    let XR = XL + WW;
    let XM = (XR + XL) / 2 + K() * WW / 3;
    let [L, M, R, B1, B2] = getMount(XP, YP, XL, XM, XR, HH);

    // Draw the left and right face
    drawFace(L, M);
    drawFace(M, R);

    if(STYLE === 0)
    {
      // Clip the left face and hatch it with left to right pattern
      x.save();
      clipFace(L, M);
      hatch(L, M, SHADED ? 1 : 1 + Z() | 0, 100, SHADED ? 0.05 : .02, choose(arrModFns), SHADED ? 1 : 12);
      x.restore();

      // Hatch right face with pattern orthogonal to right edge
      x.save();
      clipFace(M, R);
      R.reverse();
      hatchV(M, SHADED ? 1 : 2, 100, SHADED ? 0.05 : 0.01, choose(arrModFns), SHADED ? 1 : 2);
      x.restore();
    }

    if(STYLE === 1)
    {
      // Hatch right face
      x.save();
      clipFace(M, R);
      hatch(R, M, SHADED ? 1 : 1 + Z() * 3, 70, SHADED ? 0.05 : .02, arrModFns[2], SHADED ? 1 : 7);

      x.restore();

      x.save();
      clipFace(L, M);
      hatchA(L, B1, SHADED ? 1 : 3, 100, SHADED ? 0.05 : 0.01, choose(arrModFns), SHADED ? 1 : 6);
      x.restore();
    }

    if(STYLE === 2)
    {
      // Hatch right face with pattern orthogonal to bottom edge
      x.save();
      clipFace(M, R);
      hatchV(B2, SHADED ? 1 : 2, SHADED ? 200 : 100, 0.01, arrModFns[3], SHADED ? 1 : 6);
      x.restore();

      x.save();
      clipFace(L, M);
      M.reverse();
      hatchV(M, SHADED ? 1 : 2, 100, SHADED ? 0.05 : 0.03, choose(arrModFns), SHADED ? 1 : 6);

      x.restore();
      M.reverse();
    }

    // Make a ridge (thin mountain on the middle line)
    if(K() > 0)
    {
      let DX = XR - XL;
      let RY = .1 + Z() * .5;
      [XP, YP] = M[M.length * RY | 0];

      XL = XM - WW / 4;
      XR = XM + WW / 4;

      let NV = 200;
      let YE = H * 1.3;
      let MY = 0.03;
      L = rline(XP, YP, XL, YE, NV, MY, 0, 0, 3);
      R = rline(XP, YP, XR, YE, NV, MY, 0, 0, 3);
      B1 = rline(XL, YE, XR, YE, NV, 0, 0, 0, 3);
      drawFace(L, R);

      x.save();
      clipFace(L, R);
      hatchV(B1, SHADED ? 1 : 3, 100, SHADED ? 0.03 : 0.01, choose(arrModFns), SHADED ? 3 : 6);
      x.restore();
    }
  };

  const WOUT = choose([128, 256, 512, 2048]);
  const BLUR = WOUT < 256 ? false : K() > 0;
  const LOWRES = WOUT < 512;
  let SHADED = LOWRES || (K() > 0);

  let DAY = K() > 0;
  let FLAT = Z() > 0.95;

  let SKY_HUE = DAY ? rr(170, 270) | 0 : rr(180, 360) | 0;
  let LINE_HUE = DAY ? rr(0, 60) | 0 : rr(0, 360) | 0;

  window.$fxhashFeatures =
  {
    sky: SKY_HUE,
    mount: LINE_HUE,
    drawing: SHADED ? 'shaded' : 'lines',
    time: DAY ? 'day' : 'night',
    resolution: WOUT,
    blur: BLUR,
    flat: FLAT
  };
  console.log(JSON.stringify(window.$fxhashFeatures));

  let SKY_V = LOWRES ? (DAY ? 90 : 5) : (DAY ? 80 : 20);
  let LINE_V = DAY ? 5 : 60;
  let MOUNT_V = DAY ? 50 : 15;
  let SKY = HSL(SKY_HUE, DAY ? 30 : 55, SKY_V);

  let arrModFns =
  FLAT
  ?
  [() => 0]
  :
  [
    (I, F, E) => -S(4.5 * F * 1.4 + K() / 16) / 8,
    (I, F, E) => S(-3.5 * F * 3 + K() / 16 + S(E) * 5) / 16,
    (I, F, E) => S(F * PI) / 6,
    (I, F, E) => -(S(F * 5) ** 7 + K() / 12) / (SHADED ? 2 : 8)
  ];


  // Clear the canvas
  x.fillStyle = '#000000';
  x.fillRect(0, 0, CW, CH);

  // Translate canvas down to fit aspect
  x.translate(0, (CH - H) / 2);

  // Clear the sky
  x.fillStyle = SKY;
  x.fillRect(0, 0, W, H);

  // Draw a moon at night
  if(!DAY)
  {
    let A1 = [];
    let XX = W * Z(), YY = H * .2, RR = W * .07;
    let AA = Z() * PI;
    for(let A = 0; A < PI * 2; A += PI / 50)
    {
      let X = XX + C(A + AA) * RR + K() * W / 512;
      let Y = YY + S(A + AA) * RR + K() * W / 512;
      A1.push([X, Y]);
    }

    x.fillStyle = HSL(45, 100, 80);
    x.strokeStyle = HSL(rr(30, 60) | 0, 80, 90);
    x.lineWidth = SHADED ? 1 : 3;

    x.save();
    x.beginPath();
    drawArr(A1);
    if(!SHADED)
    {
      x.stroke();
    }
    x.clip();

    let R1 = rline(XX - RR * 2, 0, XX - RR * 2, YY * 2, 200, 0.03, 0, 0, 1);
    let R2 = rline(XX + RR * 2, 0, XX + RR * 2, YY * 2, 200, 0.03, 0, 0, 1);
    hatch(R1, R2, SHADED ? 8 : 6, 100, SHADED ? 0.05 : 0.01, choose(arrModFns), SHADED ? 1 : 6);
    x.restore();
  }

  let LINE = HSL(LINE_HUE, DAY ? 80 : 40, LINE_V);


  // Draw 2 to 4 mountains in each layer
  let NM = rr(2, 5) | 0;
  for(let L = 0; L < 3; ++L)
  {
    // Set the shade further darker
    let MOUNT = HSL(LINE_HUE - 10, DAY ? 35 : 20, MOUNT_V + L * 5);
    x.strokeStyle = LINE;
    x.fillStyle = MOUNT;

    // Make an array of upto NM X-coords
    let XX = [];
    let DX = W / NM, DDX = DX / 2;
    for(let I = 0; I < NM; ++I)
    {
      // Each co-ord is evenly spaced with 30% +/- deviation
      let XXX = DDX + K() * .6 * DX;
      XX.push(XXX);
      DDX += DX;
    }

    // Randomize the array order
    let R = XX.map(V => ({value: V, key: Z()}));
    R.sort((A, B) => A.key - B.key);
    XX = R.map(V => V.value);

    for(let X of XX)
    {
      let Y = H * (.3 + L / 6 + K() / 4);
      let YE = H * (.8 + L / 5);
      drawMount(X, Y, W * 2, YE, rr(0, 3) | 0);
    }
  }


  x.fillStyle = '#000000';
  x.fillRect(0, H, CW, CH);

  x.strokeStyle = HSL(LINE_HUE - 10, DAY ? 35 : 65, DAY ? 40 : 60);
  let LW = CW / 128;
  x.lineWidth = LW;
  x.strokeRect(LW / 2, 0, W - LW, H);
  x.resetTransform();

  let c = document.querySelector("#c");
  c.width = WOUT;
  c.height = WOUT;
  let xMain = c.getContext("2d");

  xMain.imageSmoothingEnabled = true;
  x.imageSmoothingEnabled = true;

  xMain.drawImage(cTemp, 0, 0, WOUT, WOUT);

  if(fxpreview) fxpreview();
}



