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
            if (value < .2) return 4
            else if (value < .4) return 5
            else if (value < .6) return 6
            else if (value < .8) return 7
            else return 8
            }
      function getR(value) {
            return value
            }
      function getG(value) {
            return value
            }
      function getB(value) {
            return value
            }
      function getColorMode(value) {
            if (value < .15) return 1.
            else if (value < .3) return 2.
            else  return 3.
            }
      function getHumanCount(value) {
            if (value < .2) return 5
            else if (value < .4) return 6
            else if (value < .6) return 7
            else if (value < .8) return 9
            else return 11
            }
      function getPaintMode(value) {
            if (value < .1) return 1
            else if (value < .2) return 2
            else if (value < .3) return 3
            else if (value < .4) return 4
            else return 5
            }
      window.$fxhashFeatures = {
            "_paintMode": getPaintMode(fxrand()),
            "_R": getR(fxrand()),
            "_G": getG(fxrand()),
            "_B": getB(fxrand()),
            "_colorMode": getColorMode(fxrand()),
            "_thickness": getThickness(fxrand()),
            "_pallet_ind": getPallet(fxrand()),
            "_octaves": getOctaves(fxrand()),
            "_strength": getStrength(fxrand()),
            "_humanCount": getHumanCount(fxrand()),
            "_seed": getSeed(fxrand())
      }
let theShader, theShader2;
let pg, ww, wwg, _humanCount, objs=[], _paintMode, _pallet_ind;
let img;
let _colorMode, _R, _G, _B
function preload(){
  // img = loadImage("g1.jpg");
  theShader = loadShader('shader.vert', 'shader.frag');
  theShader2 = loadShader('shader.vert', 'flame.frag');
}

function setup() {
  _paintMode=window.$fxhashFeatures._paintMode  
  _R=window.$fxhashFeatures._R
  _G=window.$fxhashFeatures._G
  _B=window.$fxhashFeatures._B
  _colorMode=window.$fxhashFeatures._colorMode
  _thickness=window.$fxhashFeatures._thickness
  _pallet_ind=window.$fxhashFeatures._pallet_ind
  _strength=window.$fxhashFeatures._strength
  _octaves=window.$fxhashFeatures._octaves
  _seed=window.$fxhashFeatures._seed
  _humanCount=window.$fxhashFeatures._humanCount
  wwg=floor(800/(_thickness))
  colorMode(HSB)
  pixelDensity(.5)
  blendMode(ADD)
  ww = 800
  createCanvas(ww, ww, WEBGL);
  pg = createGraphics(wwg, wwg, WEBGL)
  pg.pixelDensity(.5)
  noStroke();
  noiseSeed(_seed);
  noiseDetail(_octaves, _strength);

  let fx=-380
  
  for (let f=1; f<=_humanCount; f++){
    fx += ww/(_humanCount) + map(noise(f),1 ,_humanCount, -10, 80)
    objs[f] = new human(fx, f, 1)
  }
  
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
  theShader.setUniform("u_wwg", wwg)  
  theShader.setUniform("u_r", _R)  
  theShader.setUniform("u_g", _G)  
  theShader.setUniform("u_b", _B)  

  theShader2.setUniform("u_resolution", [width, height])
  theShader2.setUniform("u_time", frameCount)
  theShader2.setUniform("u_mouse", [mouseX, mouseY])
  theShader2.setUniform("u_r", _R)
  theShader2.setUniform("u_g", _G)
  theShader2.setUniform("u_b", _B)

  cnt=1
  let x=0;
  let y=0;
    // for(let y=-400; y<=400; y+=wwg){
      push()
      theShader.setUniform("u_x", x/wwg)
      theShader.setUniform("u_y", y/wwg)      
      theShader.setUniform("u_cnt", cnt)
      pg.background(color(0,100,100))
      pg.rect(0,0,wwg,wwg);
      pg.shader(theShader2);
      translate(0, 0.)
      texture(pg)
      plane(ww,ww, 2)
      //box(ww,ww, ww)
      cnt+=1
      pop()
  // }
  //translate(0, -200, 0)
      for (let h in objs){
        if (objs[h].fx<(ww-300) || objs[h].fx>(ww-30))
          objs[h].drawHuman()
      }  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

class human{
      constructor(fx, f, type){
            this.fx=fx
            this.f=f
            this.type=type
            this.px
            this.py
            this.hx
            this.hy
            if (this.f % 3 == 0){
              this.tall=round(map(noise(this.f),1,_humanCount,ww/2,ww-300))
              this.level=7
            } 
            else if (this.f % 3 == 1){
              this.tall=round(map(noise(this.f),1,_humanCount,100,-100))
              this.level=2
            } 
            else{
              this.tall=round(map(noise(this.f),1,_humanCount,0,ww/2-150))
              this.level=1
            }
              
            this.ww=ww/2
      }
      drawHuman(){
            this.steam(1)
      }
      steam(type){
            if (type==1){
                  stroke(0)
                  fill(0)
                  strokeWeight(10)
                  beginShape()
                  curveVertex(this.fx, this.ww)
                  curveVertex(this.fx, this.ww)
                  let cnt=0, ly, yb
                  noFill()
                  for(yb=this.ww; yb>this.tall; yb-=150){
                        cnt++
                        this.px=this.fx+map(100*noise(this.f, cnt),0,100,-50,70)
                        if (abs(ly-yb)>120)
                              curveVertex(this.px, yb)
                        ly=yb
                  }
                  if (abs(ly-yb)>120)
                        ly=yb
                  else
                        ly=yb+100
                  curveVertex(this.fx, ly)
                  curveVertex(this.fx, ly)
                  endShape()
                  fill(0)
                  // beginShape()
                  //       curveVertex(this.fx, ly)
                  //       curveVertex(this.fx, ly)
                  //       curveVertex(this.fx-20, ly-map(noise(cnt, this.f),0,1,70,100))
                  //       curveVertex(this.fx, ly-map(noise(cnt, this.f),0,1,120,190))
                  //       curveVertex(this.fx+20, ly-map(noise(cnt, this.f),0,1,60,110))
                  //       curveVertex(this.fx, ly)
                  //       curveVertex(this.fx, ly)
                  // endShape()
              let scale = 1
              cnt=0
              noFill()
              strokeWeight(2)
              let delta = +map(noise(this.f),0,1,-100, 100)
              for(let r=0; r<(60*scale-delta/3); r+=12.5){
                  let dark=30 - map(r, 0, 55, 0, 30) -20
                  if(_paintMode==1)
                        fill(color(pallet[_pallet_ind][floor(abs(this.fx)%5)][0], pallet[_pallet_ind][floor(abs(this.fx)%5)][1],pallet[_pallet_ind][floor(abs(this.fx)%5)][2]-dark))
                  else if(_paintMode==2)
                        fill(color(pallet[_pallet_ind][this.f%5][0], pallet[_pallet_ind][this.f%5][1],pallet[_pallet_ind][this.f%5][2]-dark))
                  else if(_paintMode==3)
                        fill(color(pallet[_pallet_ind][floor(abs(this.fx+this.f)%5)][0], pallet[_pallet_ind][floor(abs(this.fx+this.f)%5)][1],pallet[_pallet_ind][floor(abs(this.fx+this.f)%5)][2]-dark))
                  else if(_paintMode==4)
                        fill(color(pallet[_pallet_ind][floor(abs(this.fx-this.f)%5)][0], pallet[_pallet_ind][floor(abs(this.fx-this.f)%5)][1],pallet[_pallet_ind][floor(abs(this.fx-this.f)%5)][2]-dark))
                  else if(_paintMode==5)
                        fill(color(pallet[_pallet_ind][cnt%5][0], pallet[_pallet_ind][cnt%5][1],pallet[_pallet_ind][cnt%5][2]-dark))
                
                        beginShape()
                        curveVertex(this.fx, ly+15)
                        curveVertex(this.fx, ly+15)
                        curveVertex(this.fx-cnt*r/3-delta+this.level*3, ly-map(noise(this.f),0,1,70,80+_paintMode) - r/3)
                        curveVertex(this.fx+delta, ly-map(noise(this.f),0,1,190,250)+this.level*10)
                        curveVertex(this.fx+r+delta-2*cnt-this.level*3, ly-map(noise(this.f),0,1,40+_octaves,70) + r/3)
                        curveVertex(this.fx, ly+15)
                        curveVertex(this.fx, ly+15)
                        endShape()
                cnt++
              }
              
            }

            
      }
}