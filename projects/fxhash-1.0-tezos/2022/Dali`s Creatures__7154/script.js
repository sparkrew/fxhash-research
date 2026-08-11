const characters = {
  common: [],
  rare: [],
  epic: [],
};
const backgrounds = [];
const totalBackgrounds = 6;
const charsCoords = [];

let charactersCount = 0;
let backgroundRarity;
const generatedCharacters = [];

function getCharactersCount(value) {
  if (value < 0.4) {
    return (charactersCount = 3);
  }
  if (value < 0.85) {
    return (charactersCount = 4);
  }
  return (charactersCount = 5);
}

function getBackgroundRarity(value) {
  if (value < 0.6) {
    return (backgroundRarity = "Common");
  }
  if (value < 0.85) {
    return (backgroundRarity = "Rare");
  }
  return (backgroundRarity = "Epic");
}

window.$fxhashFeatures = {
  Characters: getCharactersCount(fxrand()),
  Background: getBackgroundRarity(fxrand()),
  "Common characters": 0,
  "Rare characters": 0,
  "Epic characters": 0,
};

for (let i = 0; i < charactersCount; i++) {
  const value = fxrand();

  if (value < 0.1) {
    window.$fxhashFeatures["Epic characters"] += 1;
  } else if (value < 0.4) {
    window.$fxhashFeatures["Rare characters"] += 1;
  } else {
    window.$fxhashFeatures["Common characters"] += 1;
  }

  generatedCharacters.push(value);
}

function preload() {
  for (let i = 0; i < 7; i++) {
    characters.epic.push(loadImage("./assets/" + str(i + 1) + ".png"));
  }

  for (let i = 10; i < 20; i++) {
    characters.rare.push(loadImage("./assets/" + str(i + 1) + ".png"));
  }

  for (let i = 20; i < 48; i++) {
    characters.common.push(loadImage("./assets/" + str(i + 1) + ".png"));
  }

  for (let i = 0; i < totalBackgrounds; i++) {
    backgrounds[i] = loadImage("./assets/background-" + str(i + 1) + ".jpg");
  }
}

function setup() {
  createCanvas(min(windowHeight, windowWidth), min(windowHeight, windowWidth));
  noLoop();
}

function draw() {
  drawBackground();
  drawCharacters();
}

function drawBackground() {
  let choosenBg;
  if (backgroundRarity === "Common") {
    choosenBg = int(map(fxrand(), 0, 1, 0, 3));
  } else if (backgroundRarity === "Rare") {
    choosenBg = int(map(fxrand(), 0, 1, 3, 5));
  } else {
    choosenBg = 5;
  }
  const img = backgrounds[choosenBg];
  image(img, 0, 0, width, height);
}

function drawCharacters() {
  const imagesDistance = width < 600 ? 80 : width < 1200 ? 100 : 200;

  for (let i = 0; i < charactersCount; i++) {
    let img = getCharacterImage(i);
    let xPos, yPos, tempXPos, tempYPos;
    const scaleMultiplier = getScaleMultiplier(fxrand());

    const start = Date.now();
    while (true) {
      xPos = int(map(fxrand(), 0, 1, 0, width - img.width * scaleMultiplier));
      yPos = int(map(fxrand(), 0, 1, 0, height - img.height * scaleMultiplier));
      if (i === 0) {
        charsCoords.push([xPos, yPos]);
      } else {
        if (
          tempXPos === undefined &&
          charsCoords.every(
            (coordsPair) => Math.abs(coordsPair[0] - xPos) >= imagesDistance
          )
        ) {
          tempXPos = xPos;
        }

        if (
          tempYPos === undefined &&
          charsCoords.every(
            (coordsPair) => Math.abs(coordsPair[0] - yPos) >= imagesDistance
          )
        ) {
          tempYPos = yPos;
        }
      }

      if (
        (tempXPos !== undefined && tempYPos !== undefined) ||
        Date.now() - start > 1000
      ) {
        charsCoords.push([
          tempXPos !== undefined ? tempXPos : xPos,
          tempYPos !== undefined ? tempYPos : yPos,
        ]);
      }

      if (charsCoords[i]) {
        break;
      }
    }

    push();
    translate(charsCoords[i][0], charsCoords[i][1]);
    scale(scaleMultiplier);

    push();
    if (fxrand() < 0.5) {
      scale(-1, 1);
      image(img, 0, 0, img.width * -1, img.height);
    } else {
      image(img, 0, 0);
    }
    pop();
    pop();
  }
}

function getScaleMultiplier(value) {
  let lowestMultiplier, highestMultiplier;
  if (width < 500) {
    lowestMultiplier = 0.2;
    highestMultiplier = 0.4;
  } else if (width < 900) {
    lowestMultiplier = 0.4;
    highestMultiplier = 0.65;
  } else {
    lowestMultiplier = 0.55;
    highestMultiplier = 0.75;
  }

  const scaleMultiplier = map(value, 0, 1, lowestMultiplier, highestMultiplier);
  return scaleMultiplier;
}

function getCharacterImage(index) {
  let image;
  const value = generatedCharacters[index];

  if (value < 0.1) {
    let chosenAsset = int(map(fxrand(), 0, 1, 0, characters.epic.length));
    image = characters.epic[chosenAsset];
  } else if (value < 0.4) {
    let chosenAsset = int(map(fxrand(), 0, 1, 0, characters.rare.length));
    image = characters.rare[chosenAsset];
  } else {
    let chosenAsset = int(map(fxrand(), 0, 1, 0, characters.common.length));
    image = characters.common[chosenAsset];
  }

  return image;
}
