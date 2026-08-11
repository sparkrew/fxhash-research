let paletteChance = [];
let types = [
  {
    name: "Equilibrium",
    type: "平\n衡",
  },
  {
    name: "Focus",
    type: "集\n中",
  },
  {
    name: "Zen",
    type: "禅",
  },
  {
    name: "Peace",
    type: "平\n和",
  },
  {
    name: "Stability",
    type: "安\n定",
  },
  {
    name: "Silence",
    type: "静\n寂",
  },
  {
    name: "Harmony",
    type: "調\n和",
  },
  {
    name: "Introspection",
    type: "内\n省",
  },
  {
    name: "Tranquility",
    type: "平\n穏",
  },
  {
    name: "Patience",
    type: "忍\n耐",
  },
  {
    name: "Serenity",
    type: "静\n心",
  },
  {
    name: "Calmness",
    type: "平\n静",
  },
  {
    name: "Concentration",
    type: "集\n中\n力",
  },
  {
    name: "Selflessness",
    type: "無\n我",
  },
  {
    name: "Balance",
    type: "均\n衡",
  },
  {
    name: "Peace of mind",
    type: "安\n心",
  },
];

let palettes = [
  {
    name: "Pastelverse 1",
    colors: [255, 232, 124, 255, 142, 190, 104, 208, 240],
    colorsC: [115, 229, 210, 158, 135, 222],
    colorsB: [243, 245, 246],
    colorsL: [55, 55, 55],
    lineW: [1],
    chance: [8],
  },
  {
    name: "Pastelverse 2",
    colorsC: [255, 232, 124, 255, 142, 190, 104, 208, 240],
    colors: [115, 229, 210, 158, 135, 222],
    colorsB: [55, 55, 55],
    colorsL: [243, 245, 246],
    lineW: [1],
    chance: [8],
  },
  {
    name: "Studio Yorktown",
    colors: [224, 69, 56],
    colorsC: [46, 46, 46],
    colorsB: [203, 173, 139],
    colorsL: [46, 46, 46],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Studio Yorktown",
    colors: [224, 69, 56],
    colorsC: [46, 46, 46],
    colorsB: [46, 46, 46],
    colorsL: [241, 234, 219],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Yakhi",
    colors: [255, 90, 148],
    colorsC: [255, 120, 121],
    colorsB: [255, 200, 206],
    colorsL: [122, 96, 198],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Chioo",
    colors: [104, 208, 240],
    colorsC: [115, 229, 210],
    colorsB: [226, 241, 240],
    colorsL: [0, 198, 207],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Yasi",
    colors: [122, 96, 198],
    colorsC: [72, 72, 72],
    colorsB: [42, 42, 42],
    colorsL: [239, 239, 239],
    lineW: [1],
    chance: [2],
  },
  {
    name: "cliché",
    colors: [239, 74, 65, 235, 175, 31, 42, 156, 59],
    colorsC: [235, 175, 31, 42, 156, 59, 239, 74, 65, 235],
    colorsB: [34, 36, 28],
    colorsL: [239, 74, 65],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Soheila",
    colors: [250, 250, 250, 189, 62, 64, 34, 36, 28],
    colorsC: [246, 186, 126],
    colorsB: [189, 62, 64, 34, 36, 28],
    colorsL: [250, 250, 250],
    lineW: [1],
    chance: [4],
  },
  {
    name: "Odette",
    colors: [252, 214, 29, 180, 145, 249],
    colorsC: [16, 169, 105, 232, 82, 41],
    colorsB: [28, 69, 237],
    colorsL: [250, 250, 250],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Narisofka",
    colors: [224, 220, 212, 254, 220, 153, 93, 229, 232, 255, 133, 213],
    colorsC: [76, 134, 202, 255, 133, 213],
    colorsB: [131, 0, 252],
    colorsL: [44, 0, 88],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Uczine",
    colors: [101, 100, 197, 169, 116, 193, 85, 248, 194, 43, 231, 242],
    colorsC: [101, 100, 197, 169, 116, 193, 85, 248, 194, 43, 231, 242],
    colorsB: [37, 37, 37],
    colorsL: [133, 130, 166],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Doe",
    colors: [1, 99, 206, 0, 206, 102],
    colorsC: [1, 99, 206, 0, 206, 102],
    colorsB: [34, 34, 34],
    colorsL: [0, 206, 102],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Mr. Satan",
    colors: [210, 184, 170, 1, 4, 3],
    colorsC: [210, 184, 170, 1, 4, 3],
    colorsB: [181, 65, 48, 9, 152, 163],
    colorsL: [1, 4, 3],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Pak",
    colors: [17, 17, 17],
    colorsC: [17, 17, 17],
    colorsB: [235, 235, 235],
    colorsL: [17, 17, 17],
    lineW: [1],
    chance: [1.5],
  },
  {
    name: "Pak",
    colors: [235, 235, 235],
    colorsC: [235, 235, 235],
    colorsB: [17, 17, 17],
    colorsL: [235, 235, 235],
    lineW: [1],
    chance: [1.5],
  },
  {
    name: "Tjo",
    colors: [19,20,25,161, 9, 3],
    colorsC: [161, 9, 3,19,20,25],
    colorsB: [4, 57, 181],
    colorsL: [198, 201, 206],
    lineW: [1],
    chance: [2],
  },
  {
    name: "Muji",
    colors: [102,102,102,161, 9, 3],
    colorsC: [102,102,102,161, 9, 3],
    colorsB: [224, 219, 211],
    colorsL: [77, 77, 77],
    lineW: [1],
    chance: [2],
  },
];

function plt(p) {
  let paletteTheme = colorTheme;
  let selectedPalette = palettes[paletteTheme];

  if (p == 1) {
    let pn = floor(random(selectedPalette.colors.length) / 3) * 3;

    let fillColor = color(
      selectedPalette.colors[pn],
      selectedPalette.colors[pn + 1],
      selectedPalette.colors[pn + 2]
    );

    return fillColor;
  } else if (p == 2) {
    let pn = floor(random(selectedPalette.colorsC.length) / 3) * 3;

    let fillColor = color(
      selectedPalette.colorsC[pn],
      selectedPalette.colorsC[pn + 1],
      selectedPalette.colorsC[pn + 2],
      60
    );

    return fillColor;
  } else if (p == 3) {
    let pn = floor(random(selectedPalette.colorsB.length) / 3) * 3;

    let fillColor = color(
      selectedPalette.colorsB[pn],
      selectedPalette.colorsB[pn + 1],
      selectedPalette.colorsB[pn + 2]
    );

    return fillColor;
  } else if (p == 4) {
    let pn = floor(random(selectedPalette.colorsL.length) / 3) * 3;

    let fillColor = color(
      selectedPalette.colorsL[pn],
      selectedPalette.colorsL[pn + 1],
      selectedPalette.colorsL[pn + 2]
    );

    return fillColor;
  } else if (p == 5) {
    let pn = floor(random(selectedPalette.lineW.length) / 3) * 3;

    let lineW = selectedPalette.lineW[0];

    return lineW;
  }
}

// function palleteC() {
//   let palettesN = palettes.length;

//   for (let x = 0; x < palettesN; x++) {
//     let numPushes = palettes[x].chance[0];

//     for (let y = 0; y < numPushes; y++) {
//       paletteChance.push(x);
//     }
//   }
//   let randomIndex = Math.floor($fx.rand() * paletteChance.length);

//   let randomPalette = paletteChance[randomIndex];
//   // return randomPalette;
//   return (5);

// }
