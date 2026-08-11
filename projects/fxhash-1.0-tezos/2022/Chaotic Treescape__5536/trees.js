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

  let W = 2048, H = W, W2 = W / 2;

  // Offscreen canvas
  const cTemp = document.createElement('canvas');
  cTemp.width = W;
  cTemp.height = H;
  const ctxTemp = cTemp.getContext('2d');

  // Get visible HTML canvas
  const cOut = document.querySelector('#c');
  const ctxOut = cOut.getContext('2d');

  // Extra canvas for sky and clouds etc
  const cSky = document.createElement('canvas');
  cSky.width = W2;
  cSky.height = W2;
  const ctxSky = cSky.getContext('2d');

  // Params
  let VAR = rr(-.1, .1);
  let SPREAD = rr(0, .015);
  let NIGHTMODE = k() > .5;
  let CLEARSKY = 10;
  let CLOUDYSKY = 20;
  let CLOUDINESS_MAX = 30;
  let CLOUDINESS = rr(0, CLOUDINESS_MAX);

  let HUE, SAT, LUM;
  let LEAF_H, LEAF_S, LEAF_L;
  let SKY, SKY_LUM, SKY_HSL;
  let CLOUD_HSL, CLOUDINESS_VAL;
  let TIME;

  if(NIGHTMODE)
  {
    HUE = rr(-10, 30) | 0;
    SAT = rr(30, 50) | 0;
    LUM = rr(30, 50) | 0;

    LEAF_H = rr(40, 150) | 0;
    LEAF_S = SAT + 25;
    LEAF_L = LUM + 20;

    SKY = rr(190, 380);
    SKY_LUM = rr(0, 10);

    SKY_HSL = `hsl(${SKY},70%,${SKY_LUM}%)`;
    CLOUD_HSL = `hsl(${SKY},50%,75%)`;
    CLOUDINESS_VAL = CLOUDINESS / 2;
  }
  else
  {
    HUE = rr(0, 45) | 0;
    SAT = rr(20, 40) | 0;
    LUM = rr(20, 50) | 0;

    LEAF_H = HUE * 3 + 10;
    LEAF_S = SAT + 35;
    LEAF_L = rr(40, 70) | 0;

    TIME = k() > .5 ? 'day' : 'dusk';
    SKY = TIME === 'day' ? rr(180, 230) : rr(0, 40);
    SKY_LUM = TIME === 'day' ? 80 : 70;
    let SKY_SAT = TIME === 'dusk' ? 40 : 65;

    SKY_HSL = `hsl(${SKY},${SKY_SAT}%,${SKY_LUM}%)`;
    CLOUD_HSL = `hsl(${SKY},60%,95%)`;
    CLOUDINESS_VAL = CLOUDINESS * 1.5;
  }

  // Make greenish leaf less bright
  if(LEAF_H > 40 && LEAF_H < 140)
  {
    LEAF_L -= 20;

    // Make greenish leaf less saturated at night and less bright
    if(NIGHTMODE && LEAF_S > 40)
    {
      LEAF_S -= 10;
    }
  }

  // Make reddish leaf cause trunk to go darker
  if(LEAF_H < 40 && LUM > 35)
  {
    LUM -= 20;
  }

  const LEAF = `hsla(${LEAF_H},${LEAF_S}%,${LEAF_L}%,.5)`;
  const TREE = `hsla(${HUE},${SAT}%,${LUM}%,.2)`;

  const setShadowBlur = (ctx, BLUR, COLOR) =>
  {
    ctx.shadowBlur = BLUR;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = 'white';
    ctx.fillStyle = COLOR;
  };

  // Draws the image frame wise for each stage
  let INIT = 1, SPEED, FRAMES, ALPHA, MOONX, MOONY, MOONR;
  let ITER, MAXX, MINX, MINXO, SHIFT, RANGE, SCALE;
  let r, a, b, X, Y, A, T, ONCE;
  let STAGE = 'CLOUDS';

  const requestFrame = x => window.setTimeout(x, 100);

  const renderClouds = () =>
  {
    if(INIT)
    {
      INIT = 0;
      ctxSky.fillStyle = SKY_HSL;
      ctxSky.fillRect(0, 0, W2, W2);
      ctxSky.fillStyle = CLOUD_HSL;
      FRAMES = 0;
      SPEED = 128;

      // Use temp canvas to create smooth blur
      ctxTemp.filter = `blur(${W/64}px)`;
    }
    else
    {
      for(let j = 0; j < SPEED; ++j, FRAMES += 2)
      {
        const F = k(), Y = F * W2;
        ctxSky.fillRect((FRAMES * 3 % W2) - W2 / 10, Y, W2 / 4, CLOUDINESS_VAL * (1 - F) / 8);
      }
    }

    if(FRAMES % 4 === 0)
    {
      // This draw will blur
      ctxTemp.drawImage(cSky, 0, 0, W, H);

      // This is to update the frame
      ctxOut.drawImage(cTemp, 0, 0);
    }

    // When done move to next stage
    if(FRAMES > W / 2)
    {
      ctxTemp.drawImage(cSky, 0, 0, W, H);
      ctxOut.drawImage(cTemp, 0, 0);

      STAGE = 'STARS';
      INIT = 1;
    }

    requestFrame(renderFrame);
  };

  const renderMoonStars = () =>
  {
    if(!NIGHTMODE)
    {
      STAGE = 'TREES';
    }
    else
    {
      if(INIT)
      {
        INIT = 0;
        MOONR = W / 24;
        MOONX = W - MOONR * 2.5;
        MOONY = MOONR * 3;

        // Stars and moon drawn at alpha inverse to cloudiness
        ALPHA = (CLOUDINESS_MAX - CLOUDINESS) / CLOUDINESS_MAX;
        ctxOut.globalAlpha = ALPHA / 3;

        // Draw Moon
        setShadowBlur(ctxOut, ALPHA * MOONR, '#FFEE99');
        ctxOut.beginPath();
        ctxOut.ellipse(MOONX, MOONY, MOONR, MOONR, 0, 0, 7);
        ctxOut.fill();

        // Setup to draw stars
        setShadowBlur(ctxOut, 5, '#FFFFFF');
        FRAMES = 200;
        SPEED = 16;
      }
      else
      {
        if(CLOUDINESS < CLOUDYSKY)
        {
          ctxOut.globalAlpha = ALPHA / 2;
          for(let i = 0; i < SPEED; ++i)
          {
            const STAR = 1 + k() * 3 * W / 2048;
            const X = k() * W, Y = k() * W * .7;
            const D = Math.hypot(MOONX - X, MOONY - Y);
            if(D > MOONR * 1.1)
            {
              ctxOut.beginPath();
              ctxOut.ellipse(X, Y, STAR, STAR, 0, 0, 7);
              ctxOut.fill();
            }
            FRAMES--;
          }
        }
        else
        {
          FRAMES = -1;
        }

        if(FRAMES < 0)
        {
          ctxOut.globalAlpha = 1;
          setShadowBlur(ctxOut, 0, '#000000');
          INIT = 1;
          STAGE = 'TREES';
        }
      }
    }

    requestFrame(renderFrame);
  };

  const treeCalc = (i) =>
  {
    let SHAPE = i < ITER / 1.7 ? -SPREAD : SPREAD;
    a += (r - a / 2.9 + b * S(a * 2 + SHAPE)) / 1.7 - VAR;
    b += (.38 + SHAPE) - b / (3 - SHAPE) + C(A * 2) / 2.8 + SHAPE;
    A = a;
  }

  const renderTrees = () =>
  {
    if(INIT)
    {
      INIT = 0;

      // Calculate the X bounds first
      ITER = 500;
      MAXX = 0, MINX = W;
      for(let t = 0; t < 6; t += 1 / 60)
      {
        let i = ITER;
        for(r = A = a = b = X = Y = 0; i--; r = 0 | (1 - ~t / 2) * k())
        {
          treeCalc(i);
          X = a * 512;
          Y = b * H;

          if(Y < H * 0.4 && t < 2 && X > 0)
          {
            MINX = Math.min(MINX, X);
          }

          if(Y < H / 2 && t < 2.01)
          {
            MAXX = Math.max(MAXX, X);
          }
        }
      }

      // Random X shift
      RANGE = MAXX - MINX;
      SHIFT = rr(-.15, .2);
      MINXO = MINX + RANGE * SHIFT;

      // Extend the measured range a bit
      MAXX += RANGE;
      MINX += RANGE * .30;

      // Now actually draw, scaling the width
      RANGE = MAXX - MINX;
      SCALE = (W / RANGE) * 1.5;
      ITER = 2e4;
      T = 0;
      ONCE = 1;
      SPEED = 48;

      ctxOut.fillStyle = LEAF;
      ctxOut.globalAlpha = 0.4;

      H_BY_2_5 = H / 2.5;
      H_BY_10 = H / 10;
      MINXO_INTO_1_6 =  MINXO * 1.6;
      W_BY_2 = W/2;
      H_INTO_4 = H * 4;
    }
    else
    {
      for(let j = 0; j < SPEED; ++j)
      {
        let i = ITER;
        for(r = A = a = b = X = Y = 0; i--; r = 0 | (1 - ~T / 2) * k())
        {
          treeCalc(i);
          Y = H_BY_2_5 + b * H - H_BY_10;
          X = (a * 512 - MINXO_INTO_1_6) * SCALE;
          X = W_BY_2 - (W_BY_2 - X) * (1 - Y / H_INTO_4);

          if(ONCE && T > 2)
          {
            ONCE = 0;
            ctxOut.fillStyle = TREE;
            ctxOut.globalAlpha = 1;
          }
          ctxOut.fillRect(X, Y, 1, 1 + Y / 300);
        }

        T+=1/60;
        if(T > 6)
        {
          STAGE = 'DONE';
          INIT = 1;
        }
      }
    }

    requestFrame(renderFrame);
  };

  const renderFrame = () =>
  {
    switch(STAGE)
    {
      case 'CLOUDS':
        renderClouds();
        break;

      case 'STARS':
        renderMoonStars();
        break;

      case 'TREES':
        renderTrees();
        break;

      case 'DONE':
        if(fxpreview)
          fxpreview();
      break;
    }
  };

  window.$fxhashFeatures = {
    time: NIGHTMODE ? 'night' : TIME,   // night, day, dusk
    season: LEAF_H < 60 ? 'fall' : LEAF_H > 110 ? 'summer' : 'spring',
    sky: CLOUDINESS <= CLEARSKY ? 'clear' : CLOUDINESS <= CLOUDYSKY ? 'cloudy' : 'overcast',
    'tree shape': VAR < -.07 ? 'bent' : VAR > 0.04 ? 'scrubby' : 'straight',
    'tree spread': SPREAD > 0.07 ? 'large' : 'small',
  };
  console.log(JSON.stringify(window.$fxhashFeatures, null, 4))

  renderFrame();
}
