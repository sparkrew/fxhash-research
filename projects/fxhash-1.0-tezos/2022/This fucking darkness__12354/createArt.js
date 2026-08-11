async function createArt(d) {
  //MOVE HERE SO WE CAN DO THE DRAWING
  let fxrand = sfc32(...hashes);
  let borderRnd = fxrand();
  let sameAsBg = fxrand() >= 0.9 ? true : false;
  let sameAsOtherRect = fxrand() >= 0.9 ? true : false;

  let bgColor = "#" + Math.floor(fxrand() * 16777215).toString(16);
  bgColor = shadeColorPercentage(bgColor, -80);
  let bgColorTwo = "#" + Math.floor(fxrand() * 16777215).toString(16);
  bgColorTwo = shadeColorPercentage(bgColorTwo, -50, true);
  let rectangles = 1;

  let rectRnd = fxrand();

  if (rectRnd <= 0.3) {
    rectangles = 3;
  } else {
    if (rectRnd <= 0.9) {
      rectangles = 2;
    }
  }

  let metadata = {
    "There is light": borderRnd >= 0.7 ? "Yes" : "No",
    State: sameAsBg
      ? "From the void"
      : sameAsOtherRect
      ? "Clung together"
      : "Grew apart",
    Background: bgColor,
    Lines: bgColorTwo,
    Panels:
      rectangles == 1 ? "Alone" : rectangles == 2 ? "Diptych" : "Triptych",
  };
  window.$fxhashFeatures = metadata;

  let canvas = document.createElement("canvas");

  let aspectRatio = 1.4142;
  let width = Math.min(window.innerWidth, window.innerHeight);
  canvas.width = width;
  canvas.height = width * aspectRatio;

  document.body.appendChild(canvas);

  let ctx = canvas.getContext("2d");

  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000000";
  ctx.fill();

  function shadeColorPercentage(color, percent, lighten) {
    percent = 100 + percent;

    color = color.substr(1);
    let hexNum = parseInt(color, 16),
      R,
      G,
      B;

    if (lighten) {
      R = Math.round(255 - (255 * percent) / 100 + (hexNum >> 16));
      G = Math.round(255 - (255 * percent) / 100 + ((hexNum >> 8) & 0x00ff));
      B = Math.round(255 - (255 * percent) / 100 + (hexNum & 0x0000ff));
    } else {
      R = Math.round(((hexNum >> 16) * percent) / 100);
      G = Math.round((((hexNum >> 8) & 0x00ff) * percent) / 100);
      B = Math.round(((hexNum & 0x0000ff) * percent) / 100);
    }
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }

  function shadeColorVariance(color, percent) {
    color = color.substr(1);
    var num = parseInt(color, 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }

  async function drawTexture(
    x,
    y,
    endX,
    endY,
    startColor,
    intensity,
    opacity,
    widthMultiplier,
    textureVariation
  ) {
    let width = endX - x;
    let height = endY - y;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 0; i < intensity; i++) {
      if (i % Math.floor(intensity / 300) == 0 && d) {
        await new Promise((resolve) => setTimeout(resolve, 0));
      }
      ctx.lineWidth = fxrand() * (canvas.width / 2000) * widthMultiplier;
      let newY = y + height * fxrand();
      let newX = x + width * fxrand();
      ctx.lineTo(newX, newY);
      ctx.strokeStyle = shadeColorVariance(
        startColor,
        fxrand() * (-1 * textureVariation) + textureVariation
      );
      ctx.globalAlpha = fxrand() * opacity;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(newX, newY);
    }
    ctx.globalAlpha = 1;
  }

  await drawTexture(
    0,
    0,
    canvas.width,
    canvas.height,
    bgColor,
    100000,
    1,
    1,
    10
  );

  await drawTexture(
    -canvas.width * 0.5,
    -canvas.height * 0.5,
    canvas.width * 1.5,
    canvas.height * 1.5,
    bgColorTwo,
    4000 * fxrand(),
    1,
    2,
    10
  );

  let borderSize = canvas.width * 0.05;

  let borderColor =
    borderRnd >= 0.8 ? shadeColorVariance("#ffffff", -15) : "#000000";

  await drawTexture(
    0,
    0,
    canvas.width,
    borderSize,
    borderColor,
    2000,
    1,
    2,
    15
  );

  await drawTexture(
    0,
    canvas.height - borderSize,
    canvas.width,
    canvas.height,
    borderColor,
    2000,
    1,
    2,
    15
  );

  await drawTexture(
    0,
    0,
    borderSize,
    canvas.height,
    borderColor,
    2000 * aspectRatio,
    1,
    2,
    15
  );
  await drawTexture(
    canvas.width - borderSize,
    0,
    canvas.width,
    canvas.height,
    borderColor,
    2000 * aspectRatio,
    1,
    2,
    15
  );

  let offset = canvas.width * 0.065;

  let rectColor = sameAsBg
    ? bgColor
    : "#" + Math.floor(fxrand() * 16777215).toString(16);

  if (rectangles == 1) {
    let y = ((canvas.height - offset * 2) / 2) * fxrand() + offset;
    let height =
      (canvas.height - y) * 0.6 * fxrand() + (canvas.height - y) * 0.4 - offset;
    await drawTexture(
      offset,
      y,
      canvas.width - offset,
      y + height,
      shadeColorPercentage(rectColor, -92),
      Math.round((height / canvas.height) * 50000),
      1,
      2,
      15
    );
  } else {
    let minRectHeight = (canvas.height - offset * 2) * 0.1 + offset;
    let y = offset;
    let height =
      (canvas.height - offset * 2 - minRectHeight * (rectangles - 1)) *
        0.8 *
        fxrand() +
      minRectHeight;
    for (let i = 0; i < rectangles; i++) {
      let endY = y + height;
      if (i == rectangles - 1) {
        endY = canvas.height - offset;
        height = endY - y;
      }
      rectColor = sameAsBg
        ? bgColor
        : sameAsOtherRect
        ? rectColor
        : "#" + Math.floor(fxrand() * 16777215).toString(16);

      await drawTexture(
        offset,
        y,
        canvas.width - offset,
        endY,
        shadeColorPercentage(rectColor, -92),
        Math.round((height / canvas.height) * 50000),
        1,
        2,
        15
      );
      y = y + height + offset / 4;
      height =
        (canvas.height - offset * 2 - minRectHeight * (rectangles - 1) - y) *
          0.8 *
          fxrand() +
        minRectHeight;
    }
  }
  fxpreview();
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key == "d") {
    createArt(true);
  }
});

createArt(false);
