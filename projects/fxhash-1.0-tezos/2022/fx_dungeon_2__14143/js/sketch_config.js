/* -------------------------------------------------------------------------- */
/*                                  game flow                                 */
/* -------------------------------------------------------------------------- */

let resetDialogReady = false
let resetDialogOpen = false
let deathDialogReady = false
let deathDialogOpen = false
let characterDialogOpen = false
let dialogOpen = 'none'
let deadPrompt = false
let soundOn = false

let redrawCanvas = true // on window resize, the canvas gets completely redrawn

/* -------------------------------------------------------------------------- */
/*                                  character                                 */
/* -------------------------------------------------------------------------- */

let characterClass
let characterClasses = ['Warrior', 'Assassin', 'Berserker']

let player
let enemiesCount = 0

let charactersData, charactersImgs

let inBetweenFrames = 24
let globalSpeed = 0.03

/* -------------------------------------------------------------------------- */
/*                                   combat                                   */
/* -------------------------------------------------------------------------- */

let doorDmg = 8
let propDmg = 5
let smallPot = 7
let midPot = 12
let bigPot = 20

let smallPotCount = 0
let midPotCount = 0
let bigPotCount = 0
let ratsCount = 0
let skeletonsCount = 0
let impCount = 0

/* -------------------------------------------------------------------------- */
/*                         frame / console / border                           */
/* -------------------------------------------------------------------------- */

let consoleCondition

/* -------------------------------------------------------------------------- */
/*                             levels generation                              */
/* -------------------------------------------------------------------------- */

/* --------------------------------- floors --------------------------------- */
let minFloorsAmt = 2 // minimum amt of floors to be generated
let amtOfFloors // where to store the final amt of floors
let floors = [] // array where to store floors objects
let mapSize = 40

/* ---------------------------------- rooms --------------------------------- */
let minRoomSize = 5
let maxRoomSize = 11
let maxRoomsCount = 10
let maxRoomCreationAttempts = 200
let knockDownWallsRate = 0.4

/* ---------------------------------- misc ---------------------------------- */
let doorsSpawnRate = 0.2
let propsSpawnRate = 0.05
let consumablesSpawnRate = 0.023
let enemyTrs = 40 // lower value, more enemies

let removeDeadEndsTreshold = 60 // how long to iterate over dead ends

/* -------------------------------------------------------------------------- */
/*                                levels design                               */
/* -------------------------------------------------------------------------- */

let noiseScale = 0.02
let noiseGrids, noiseValues

let waterPixel, grassPixel, debrisPixel // images I use in place of rectangles to avoid margins and gaps
let grassColor = '#999b3f'
let thickGrassColor = '#536d4d'
let thickerGrassColor = '#3b4b40'
let waterColor = '#7cbfb0'
let debrisColor = '#857a67'
let overlayColor = '#72554b'
let floorTexture = [] // where to store the levels backgrounds

/* -------------------------------------------------------------------------- */
/*                                   render                                   */
/* -------------------------------------------------------------------------- */

let realPixelsWidth = 128
let tileWidth // used to scale stuff properly on the canvas, calculated in setup AND on windowresized
let canvasSize, thisFrame
let renderMode = 1 // 0 for entire map, 1 for play screen
let displayFPS = false
let fps // used to store and display FPS

let renderScreen, renderOverlay, gameScreen
let offsetX = 28
let offsetY = 25
let consoleImg
let renderW = 9
let renderH = 9
let renderOffsetX = 0
let renderOffsetY = 0
let deathA = 25
let fovIndex = 0
let fov1, fov2, fov3, fov4, fovs, spritesDataOld, alertImg, spriteImgsOld, fontFamily, spritesData, spritesImgs, doorsData, doorsImgs, hpbar
let spriteOffsetX = 0
let spriteOffsetY = 0

/* -------------------------------------------------------------------------- */
/*                                   fxhash                                   */
/* -------------------------------------------------------------------------- */

let previewTaken = false