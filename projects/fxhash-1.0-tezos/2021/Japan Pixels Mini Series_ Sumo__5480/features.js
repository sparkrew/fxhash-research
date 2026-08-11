let bgImg = [];

function preload() {
  for (let i = 1; i <= 8; i++) {
    bgImg.push(loadImage(`./bg${i}.jpeg`));
  }

  skinColors = [
    { name: 'Shoyu', color: '#ffff40' },
    { name: 'Shio', color: '#ffffaa' },
    { name: 'Sato', color: '#ffddf9' },
    { name: 'Miso', color: '#deb24e' }
  ];
  skinColorSet = skinColors[int(fxrandRange(0, 3.99))];

  hairColors = [
    { name: 'Shoyu', color: '#000000' },
    { name: 'Shio', color: '#473700' },
    { name: 'Sato', color: '#edb701' },
    { name: 'Miso', color: '#767676' }
  ];
  hairColorSet = hairColors[int(fxrandRange(0, 3.99))];

  nippleColors = [
    { name: 'Shoyu', color: '#730000' },
    { name: 'Shio', color: '#bc0000' },
    { name: 'Sato', color: '#da70fe' },
    { name: 'Miso', color: '#2e2e2e' }
  ];
  nippleColorSet = nippleColors[int(fxrandRange(0, 3.99))];

  fundoshiColors = [
    { name: 'Black', color: '#000000' },
    { name: 'Navy', color: '#002d5d' },
    { name: 'Grey', color: '#4f4f4f' },
    { name: 'Dark Green', color: '#005308' },
    { name: 'Dark Red', color: '#740000' },
    { name: 'Purple', color: '#4a0082' },
  ];
  fundoshiColorSet = fundoshiColors[int(fxrandRange(0, 5.99))];

  eyeColors = [
    { name: 'Black', color: '#000000' },
    { name: 'Brown', color: '#473700' },
    { name: 'Blue', color: '#005fc4' },
    { name: 'Green', color: '#02b387' }
  ];
  eyeColorSet = eyeColors[int(fxrandRange(0, 3.99))];

  paletteFt = [
    null,
    skinColorSet.color,
    hairColorSet.color,
    nippleColorSet.color,
    fundoshiColorSet.color,
    eyeColorSet.color,
  ];

  backgrounds = [
    { name: 'Sakurayama Hachimangu Shrine', i: 0, positions: [0, 0, 1, 1, 1, 1, 1, 1, 1, 2]},
    { name: 'Motosu Lake', i: 1, positions: [0, 0, 0, 0, 0, 0, 0, 0, 0 , 2] },
    { name: 'Matsumoto Castle', i: 2, positions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2] },
    { name: 'Shurijo Castle', i: 3, positions: [0, 0, 1, 1, 1, 1, 1, 1, 1, 2] },
    { name: 'Aoshima Shrine', i: 4, positions: [0, 0, 1, 1, 1, 1, 1, 1, 1, 2] },
    { name: 'Sunset on Heda', i: 5, positions: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2] },
    { name: 'Tokyo Station', i: 6, positions: [0, 0, 1, 1, 1, 1, 1, 1, 1, 2] },
    { name: 'Yamatocho Crossing', i: 7, positions: [0, 0, 1, 1, 1, 1, 1, 1, 1, 2] },
  ];
  backgroundSet = backgrounds[int(fxrandRange(0, 7.99))];
  bgFt = backgroundSet.i;

  sumoBases = [
    { name: 'Chill' , i: 0 },
    { name: 'Victorious' , i: 1 },
    { name: 'Waving' , i: 2 },
    { name: 'Lifting' , i: 3 },
    { name: 'Jumping' , i: 4 },
  ];
  sumoBaseSet = sumoBases[int(fxrandRange(0, 3.99))];
  sumoBaseFt = sumoBaseSet.i;

  sumoPositions = [
    { name: 'Admiring', angle: -HALF_PI / 8, x: 100, y: 500, scaleBase: 16, scaleAmp: 4},
    { name: 'Posing', angle: 0, x: 250, y: 450, scaleBase: 3.5, scaleAmp: 1},
    { name: 'Bombing', angle: 0, x: 200, y: 700, scaleBase: 64, scaleAmp: 5},
  ];
  sumoPositionSet = sumoPositions[backgroundSet.positions[int(fxrandRange(0, 9.99))]];

  scaleSet = int(fxrandRange(0, 4.9));
  scaleFt = sumoPositionSet.scaleBase + scaleSet * sumoPositionSet.scaleAmp;

  window.$fxhashFeatures = {
    "Location": backgroundSet.name,
    "Position": sumoPositionSet.name,
    "Attitude": sumoBaseSet.name,
    "Skin": skinColorSet.name,
    "Hair": hairColorSet.name,
    "Nipples": nippleColorSet.name,
    "Eyes": eyeColorSet.name,
    "Fundoshi": fundoshiColorSet.name,
  }
  console.log('Features', window.$fxhashFeatures);  
}
