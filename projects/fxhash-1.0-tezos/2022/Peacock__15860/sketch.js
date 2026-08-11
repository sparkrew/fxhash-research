let pallet=[[[355,100,62], [15,99,80], [38,99,62], [64,80,30], [198,80,52], [302,77,49]],
            [[45,44,35], [19,81,76], [357,100,50], [259,62,22], [221,88,22], [0,88,27]],
            [[32,100,59], [1,80,70], [328,92,33], [246,62,39], [207,100,18], [357,100,24]],
            [[22,73,20], [41,76,63], [11,71,52], [358,82,34], [69,68,39], [316,74,38]],
            [[211,79,29], [210,100,40], [210,100,54], [165,88,44], [43,94,53], [36,86,51]],
            [[15,82,71], [13,100,83], [185,87,38], [182,46,40], [28,100,55], [175,50,35]],
            [[225,45,50], [239,99,88], [213,98,56], [224,95,61], [225,82,46], [225,94,32]],
            [[30,11,68], [92,11,56], [83,8,85], [111,12,46], [15,67,69], [18,95,80]],
            [[323,84,37], [349,99,60], [11,100,100], [21,100,79], [193,83,36], [215,96,45]],
            [[0,0,0], [0,0,10], [0,0,20], [0,0,30], [0,0,40], [0,0,50]]]
      
      function getPallet(value) {
            if      (value < .1) return 0
            else if (value < .2) return 1
            else if (value < .3) return 2
            else if (value < .4) return 3
            else if (value < .5) return 4
            else if (value < .6) return 5
            else if (value < .7) return 6
            else if (value < .8) return 7
            else if (value < .9) return 8
            else return 9
            }  
      function getSeed(value) {
            if (value < .16) return 7
            else if (value < .32) return 15
            else if (value < .48) return 17
            else if (value < .64) return 29
            else if (value < .8) return 33
            else  return 43
            }
      function getOctaves(value) {
            if      (value < .08) return 4
            else if (value < .16) return 5
            else if (value < .24) return 6
            else if (value < .32) return 7
            else if (value < .4) return 8
            else if (value < .48) return 9
            else if (value < .56) return 10
            else if (value < .64) return 11
            else if (value < .72) return 12
            else return 13
            }              
      function getStrength(value) {
            if (value < .16) return .1
            else if (value < .32) return .2
            else if (value < .48) return .35
            else if (value < .64) return .4
            else if (value < .8) return .45
            else  return .5
            }
      function getThickness(value) {
            if (value < .125) return 1
            else if (value < .25) return 2
            else if (value < .375) return 3
            else if (value < .5) return 4
            else if (value < .625) return 5
            else if (value < .75) return 6
            else if (value < .875) return 7
            else return 8
            }
      function getColorMode(value) {
            if (value < .15) return 1.
            else if (value < .3) return 2.
            else  return 3.
            }
      window.$fxhashFeatures = {
            "_colorMode": getColorMode(fxrand()),
            "_thickness": getThickness(fxrand()),
            "_pallet_ind": getPallet(fxrand()),
            "_octaves": getOctaves(fxrand()),
            "_strength": getStrength(fxrand()),
            "_seed": getSeed(fxrand())
      }
let theShader;
let pg, ww, wwg;
let img;
let _colorMode
function preload(){
  // img = loadImage("g1.jpg");
  theShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  _colorMode=window.$fxhashFeatures._colorMode
  _thickness=window.$fxhashFeatures._thickness
  _pallet_ind=window.$fxhashFeatures._pallet_ind
  _strength=window.$fxhashFeatures._strength
  _octaves=window.$fxhashFeatures._octaves
  _seed=window.$fxhashFeatures._seed
  wwg=floor(800/(_thickness))
  colorMode(HSB)
  pixelDensity(2)
  blendMode(ADD)
  ww = 800
  createCanvas(ww, ww, WEBGL);
  pg = createGraphics(wwg, wwg, WEBGL)
  pg.pixelDensity(2)
  noStroke();
  noiseSeed(_seed);
  noiseDetail(_octaves, _strength);
  
}
let cnt=0

function draw() {
  cnt++
  theShader.setUniform("u_resolution", [width, height])
  theShader.setUniform("u_time", frameCount)
  theShader.setUniform("u_mouse", [mouseX, mouseY])
  theShader.setUniform("u_noise", noise(_thickness))
  theShader.setUniform("u_pallet", _pallet_ind)
  theShader.setUniform("u_thickness", _thickness)
  theShader.setUniform("u_colorMode", _colorMode)  
  cnt=0
  for(let x=-400; x<=400; x+=wwg){
    for(let y=-400; y<=400; y+=wwg){
      push()
      theShader.setUniform("u_x", x/wwg)
      theShader.setUniform("u_y", y/wwg)      
      pg.background(color(0,100,100))
      pg.rect(0,0,wwg,wwg);
      pg.shader(theShader);
      translate(x+wwg/2, y+wwg/2,0)
      texture(pg)
      plane(wwg-(10-_thickness/2),wwg-(10-_thickness/2))
      cnt+=5
      pop()
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}