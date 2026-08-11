/* ------------------ global variables in sketch_config.js ------------------ */



/* -------------------------------------------------------------------------- */
/*                               fxhash features                              */
/* -------------------------------------------------------------------------- */

amtOfFloors = pickAmtOfFloors()
consoleCondition = pickConsoleConditions()
characterClass = pickCharacterClass()

console.log("Generated from hash: ", fxhash)

window.$fxhashFeatures = {
  'Character': characterClass,
  'Game length': amtOfFloors + " levels",
  'Console conditions': consoleCondition
}
console.log("Features: ", window.$fxhashFeatures)

let bgMusic, gameOverSound, attackSound, alertSound, pickupSound, deadSound, stairsSound, victorySound

/* -------------------------------------------------------------------------- */
/*                                   preload                                  */
/* -------------------------------------------------------------------------- */

function preload() {
  console.log("Loading..")
  // load images, sounds, etc here

  fontFamily = loadFont('./fonts/Pixel.ttf');

  spritesData = loadJSON('./imgs/spritesheet.json')
  spritesImgs = loadImage('./imgs/spritesheet.png')

  charactersData = loadJSON('./imgs/character.json')
  charactersImgs = loadImage('./imgs/character.png')

  doorsData = loadJSON('./imgs/door.json')
  doorsImgs = loadImage('./imgs/door.png')

  propsData = loadJSON('./imgs/props.json')
  propsImgs = loadImage('./imgs/props.png')

  consumablesData = loadJSON('./imgs/consumables.json')
  consumablesImgs = loadImage('./imgs/consumables.png')

  hpbar = loadImage('./imgs/hpbar.png')

  fov1 = loadImage('./imgs/grain/fov1.png')
  fov2 = loadImage('./imgs/grain/fov2.png')
  fov3 = loadImage('./imgs/grain/fov3.png')
  fov4 = loadImage('./imgs/grain/fov4.png')

  bgMusic = loadSound('./sounds/ost.wav')
  alertSound = loadSound('./sounds/alert.wav')
  attackSound = loadSound('./sounds/attack.wav')
  pickupSound = loadSound('./sounds/pickup.wav')
  deadSound = loadSound('./sounds/dead.wav')
  stairsSound = loadSound('./sounds/stairs.wav')
  victorySound = loadSound('./sounds/victory.wav')
  gameOverSound = loadSound('./sounds/gameover.wav')


  fovs = [fov1, fov2, fov3, fov4]

  alertImg = loadImage('./imgs/alert.png')

  switch (consoleCondition) {
    case 'Poor':
      consoleImg = loadImage('./imgs/console/console_poor.png')
      break
    case 'Average':
      consoleImg = loadImage('./imgs/console/console_avg.png')
      break
    case 'New':
      consoleImg = loadImage('./imgs/console/console_mint.png')
      break
  }



}

/* -------------------------------------------------------------------------- */
/*                            variable adjustments                            */
/* -------------------------------------------------------------------------- */

mapSize = odd(mapSize)

/* -------------------------------------------------------------------------- */
/*                                    setup                                   */
/* -------------------------------------------------------------------------- */




function setup() { // actual canvas setup
  console.log("Setting up..")

  frameRate(60)
  pixelDensity(1)

  canvasSize = getCanvasSize()

  switch (renderMode) {
    case 0:
      tileWidth = (canvasSize / mapSize)
      break
    case 1:
      tileWidth = (canvasSize / renderW)

  }

  let myCanvas = createCanvas(canvasSize, canvasSize); // replace with switch(rendermode)

  gameScreen = createGraphics(realPixelsWidth, realPixelsWidth) // render the gameconsole here
  renderScreen = createGraphics(pixelsPerTile * renderW, pixelsPerTile * renderH) // render the actual game here
  renderOverlay = createGraphics(pixelsPerTile * renderW, pixelsPerTile * renderH) // render the alerts here

  myCanvas.id("myCanvas")

  generateMaps()

  player = new Character(characterClass) // change with actual character class
  player.isPlayer = true
  let lastFloor = floors.length - 1
  player.spawn(lastFloor)
  player.revealTiles()

  floors[lastFloor].clearEnemies()

  if (displayFPS) {
    fps = createP()
    fps.style('font-size', '25px')
    fps.style('font-weight', 'bold')
    fps.style('color', 'red')
    fps.position(10, -10)
  }

  let counters = {
    '1.Amt. of small pots:' : smallPotCount,
    '2.Amt. of mid pots:' : midPotCount,
    '3.Amt. of big pots:' : bigPotCount,
    '4.Amt. of rats:' : ratsCount,
    '5.Amt. of skeletons:' : skeletonsCount,
    '6.Amt. of imps:' : impCount,
  }

  console.log(counters)

}

/* -------------------------------------------------------------------------- */
/*                                    draw                                    */
/* -------------------------------------------------------------------------- */

let currentFloor = floors.length - 1

function draw() { // actual drawing phase

  renderGame(renderMode, currentFloor)

  if (!previewTaken) {
    fxpreview() // called to take a screenshot for fxhash preview
    previewTaken = true
  }

  if (displayFPS) {
    fps.html("FPS: " + ~~frameRate())
  }

  if (player.status == 'dead' && !deadPrompt) {
    dialogOpen = 'death'
    if (bgMusic.isPlaying() && !gameOverSound.isPlaying()) {
      gameOverSound.setVolume(0.8)
      gameOverSound.play()
    }
    console.log('You are dead!')
    deadPrompt = true
  }

  if (dialogOpen == 'none' && player.status == 'idle') {
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      player.move('down')
    } else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      player.move('up')
    } else if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      player.move('left')
    } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      player.move('right')
    }
  }

}