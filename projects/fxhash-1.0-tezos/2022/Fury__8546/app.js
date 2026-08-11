// ######  #     # ### #       ### ######     ######  ####### #       #
// #     # #     #  #  #        #  #     #    #     # #       #       #
// #     # #     #  #  #        #  #     #    #     # #       #       #
// ######  #######  #  #        #  ######     ######  #####   #       #
// #       #     #  #  #        #  #          #     # #       #       #
// #       #     #  #  #        #  #          #     # #       #       #
// #       #     # ### ####### ### #          ######  ####### ####### #######

//  #####    ###    #####   #####
// #     #  #   #  #     # #     #
//       # #     #       #       #
//  #####  #     #  #####   #####
// #       #     # #       #
// #        #   #  #       #
// #######   ###   ####### #######

const palettes = [
  ['Vapor', 40, [200, 40, 60], 2],
  ['Mono Red', 'red', [20, 20, 240], 1],
  [
    'Acid',
    '#F1E9DA',
    ['#C64F15', '#CEF9B2', '#BFFD02', '#783763', '#39FD98', '#199227'],
    1,
  ],
  [
    'Ember',
    '#F1E9DA',
    ['#FFD400', '#2E294E', '#D90368', '#541388', '#F1E9DA'],
    5,
  ],
  [
    'Molten',
    '#F1E9DA',
    ['#FF5500', '#29374E', '#D903D3', '#191388', '#F1DDDA'],
    5,
  ],
  [
    'Lava',
    '#F1E9DA',
    ['#75AFB3', '#ED6D9F', '#9E609D', '#D6713C', '#609160', '#15356A'],
    5,
  ],
  ['Smoke', '#F1E9DA', [40, 40, 40], 6],
  [
    'Sublimate',
    '#F1E9DA',
    ['#D90321', '#3A294E', '#F1F1DA', '#7B1388', '#D5FF00'],
    6,
  ],
  [
    'Smolder',
    '#F1E9DA',
    ['#EC6508', '#D8DDE5', '#1375BB', '#1C2747', '#E9483B'],
    6,
  ],
  [
    'Flame',
    '#F1E9DA',
    ['#A715C6', '#F9B9B2', '#FD0242', '#374278', '#FDFA39', '#926419'],
    6,
  ],
  [
    'Inferno',
    '#F1E9DA',
    ['#581388', '#FFDC00', '#D90361', '#2F294E', '#914DD8'],
    6,
  ],
];

const nSclLevels = [
  ['Low', 1.5, 1],
  ['Med', 2, 2],
  ['High', 3, 3],
];
const shapeFns = [
  ['Top to bottom', 0, 5],
  ['Corner', 1, 1],
];

const formats = [
  ['Plane', [0.28, 0.1, 80], 3],
  ['Quad', [0.135, 0.1, 140], 2],
  ['Orb', [0.12, 0.12, 140], 1],
];

let mrgnX, mrgnY, sz, palette, pctFn, rct, noiseLevel, wnd, format;
function setup() {
  const randSeed = round(fxrand() * 100000000000000);
  randomSeed(randSeed);
  noiseSeed(randSeed);

  pctFn = getWeightedOption(shapeFns.map((shapeFn) => [shapeFn, shapeFn[2]]));
  format = getWeightedOption(formats.map((format) => [format, format[2]]));
  palette = getWeightedOption(
    palettes.map((palette) => [palette, palette[3]])
  );
  noiseLevel = getWeightedOption(
    nSclLevels.map((level) => [level, level[2]])
  );
  window.$fxhashFeatures = {
    Format: format[0],
    Palette: palette[0],
    NoiseLevel: noiseLevel[0],
  };

  sz = min(innerWidth, innerHeight);
  createCanvas(sz, sz);
  mrgnX = sz * format[1][0];
  mrgnY = sz * format[1][1];

  noLoop();
  strokeCap(SQUARE);

  if (palette[0] !== 'Vapor') {
    blendMode(MULTIPLY);
  }

  function getWeightedOption(options) {
    const pick = (arr) => arr[(fxrand() * arr.length) | 0];
    let choices = [];
    options.forEach((option) => {
      for (let i = 0; i < option[1]; i++) {
        choices.push(option[0]);
      }
    });
    return pick(choices);
  }
}

function draw() {
  noFill();
  clear();
  background(palette[1]);

  const amtX = format[1][2];
  const amtY = 400;
  const nMult = sz * 0.02;
  const weight = ((sz - mrgnX * 2) / amtX) * 0.5;

  strokeWeight(weight);

  const colors = palette[2];
  const rndBtm = fxRandomInRange(1, 1.5);

  const lines = [];
  for (let x = 0; x < amtX; x++) {
    const pctX = x / (amtX - 1);
    const posX = map(pctX, 0, 1, mrgnX, sz - mrgnX);
    for (let i = 0; i < colors.length - 1; i++) {
      const pctI = i / (colors.length - 1);
      const clr = colors[i];
      const ln = { clr, verts: [] };
      for (let y = 0; y < amtY; y++) {
        const pctY = y / (amtY - 1);

        const pctSin1 = wnd ? map(sin(pctY * TAU * 1), -1, 1, -0.2, 0.2) : 0;
        const pctSin2 = wnd
          ? pctY * map(sin(pctX * TAU * 1), -1, 1, -0.4, 0.4)
          : 0;
        const n = noise(
          pctX * noiseLevel[1] + pctSin1,
          pctY * noiseLevel[1] + pctSin2
        );

        const shouldDrawStart =
          pctY > map(noise(pctX + (i + 1) * 10), 0, 1, 0, 0.2) ||
          (pctY < 0.9 && random() > 0.94);
        const shouldDrawEnd = pctY < 0.9 || random() > 0.9;

        if (shouldDrawStart && shouldDrawEnd) {
          let posY;
          if (format[0] === 'Orb') {
            const rad = 0.5;
            const d = abs(pctX - rad);
            const pctD = d / rad;
            const posYEnd =
              sz / 2 + sqrt(1 - pow(pctD, 2)) * ((sz - mrgnX * 2) / 2);
            const posYStart =
              sz / 2 + -sqrt(1 - pow(pctD, 2)) * ((sz - mrgnX * 2) / 2);
            posY = map(pctY, 0, 1, posYStart, posYEnd);
          } else {
            posY = map(pctY, 0, 1, mrgnY, sz - mrgnY);
          }

          const pos = createVector(posX, posY);
          const angleVec = p5.Vector.fromAngle(n * TAU).mult(
            nMult *
              map(
                pow(map(pctX, 0, 1, 0, 0.95), 0.2) *
                  pow(1 - map(pctX, 0, 1, 0, 0.95), 0.2) *
                  pctI,
                0,
                1,
                0.2,
                rndBtm
              ) *
              [
                pctY, // B
                pow(pctY * pctX, 0.8), // BR
              ][pctFn[1]]
          );
          pos.add(angleVec);
          ln.verts.push(pos);
        }
      }
      if (format[0] === 'Orb' && x !== 0 && x !== amtX - 1) {
        lines.push(ln);
      } else if (format[0] !== 'Orb') {
        lines.push(ln);
      }
    }
  }

  lines.forEach((ln) => {
    const { clr, verts } = ln;
    stroke(clr);
    beginShape();
    verts.map(({ x, y }) => vertex(x, y));
    endShape();
  });

  fxpreview();
}

function fxRandomInArray(array) {
  return array[floor(random() * array.length)];
}

function fxRandomInRange(min, max) {
  return random() * (max - min) + min;
}
