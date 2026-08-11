let pallet=[[349,99,81 ], [334,99 ,79 ], [41,97 ,96 ], [13,34 ,89 ], [327,83 ,89 ], [165,73 ,70 ], [27,44,98 ], [48,98 ,97 ], [212,95 ,83 ], [333,100 ,94 ], [39,97 ,100 ], [257,96 ,84 ], [171,93 ,77 ], [55,77 ,96 ], [31,82 ,97 ]]
function getPallet(value) {
      if      (value < .08) return 1
      else if (value < .16) return 2
      else if (value < .24) return 3
      else if (value < .32) return 4
      else if (value < .4) return 5
      else if (value < .48) return 6
      else if (value < .56) return 7
      else if (value < .64) return 8
      else return 9

      }

let pg, objs=[];
let ww, _mode, _colorMode, _rotated, _c;
let c1=0,c1d=1, _shape

function getMode(value) {
      if (value < .33) return 1
      else if (value < .66) return 2
      else  return 3
      }
function getColorMode(value) {
      if (value < .77) return 1
      else return 3
      }
function getC(value) {
      return value
      }
function getRotateDouble(value) {
      if (value < .5) return 1
      else return 2
      }
function getShapes(value) {
      if (value < .2) return 1
      if (value < .4) return 2
      if (value < .6) return 3
      if (value < .8) return 4
      else return 5
      }

window.$fxhashFeatures = {
      "_shape": getShapes(fxrand()),
      "_pallet_ind": getPallet(fxrand()),
      "_c": getC(fxrand()),
      "_mode": getMode(fxrand()),
      "_rotated": getRotateDouble(fxrand()),
      "_colorMode": getColorMode(fxrand())
}
function setup() {
_shape=window.$fxhashFeatures._shape
_pallet_ind=window.$fxhashFeatures._pallet_ind
_c=map(window.$fxhashFeatures._c,0,1,0,360)
_mode=window.$fxhashFeatures._mode  
_rotated=window.$fxhashFeatures._rotated   
_colorMode=window.$fxhashFeatures._colorMode    
console.log(_mode, _colorMode)
colorMode(HSB)
pixelDensity(1.5)
frameRate(100)
blendMode(BLEND)
frameRate(20)
ww = 800
createCanvas(ww, ww, WEBGL);
pg = createGraphics(ww, ww)
pg.pixelDensity(1.5)
let x=0,y=0,cnt=0, z=0

for(let i=0; i<pos.length; i++){
if (_shape<=4)
  objs[cnt] = new obj(cnt, _shape)
else
  objs[cnt] = new obj(cnt, floor(_shape+i+_pallet_ind)%4)
cnt++
}
background(0)  
}
let zoom =1.2, zoom2 =1.4, fx=75,fy=-80,fz=0
let pos = [[0,0,0,        -1.1,11,9,           140, 100   ,5], //1
     [70,-70,-20,   2.2,-2,-20,           110, 80   ,5],   //2
     [120,-140,-90, 1.2,-2,20,           50, 40     ,5],      //3
     [-10,-160,-20,   0.97,-1,30,         90, 60    ,5],    //4 
     [-80,-150,-20,   1.2,-1.1,-3.5,     30, 30      ,5], //5
     [20,-218,-90,   0.97,1.8,-5.3,     90, 70      ,5],    //6
     [-90,80,-100,    -1.25,-5.2,5,       160, 100   ,5], //7
     [40,70,120,     -1.25,-2.5,3,       80, 60     ,5], //8
     [-130,80,80,    -1.25,-2.5,3,       60, 50     ,5], //9
     [-150,0,-190,    -1.25,-1.5,4,       130, 80     ,5], //10
     [-250,-40,-240,    -1.35,-2.5,10,       90, 80     ,5], //11
     [-200,40,60,    -1.35,-1.9,8,      60, 50     ,5], //12
     [-80,150,80,    -1.25,-1.7,16.7,       80, 70   ,5], //13
     [10,270,-80,    -1.25,-1.7,1.7,       80, 70   ,5], //14
     [10,270,80,     -1.25,-6.5,6,       60, 40     ,5], //15           
    ]

function draw() {
background(0)
orbitControl()
for(let o in objs){
objs[o].draw()
}

}

class obj{
constructor(no, type){
this.no = no
this.x = fx + pos[this.no][0] * zoom
this.y = fy + pos[this.no][1] * zoom
this.z = fz + pos[this.no][2] * zoom
this.x0=0
this.y0=0
this.z0=0
this.deltacx=1
this.deltacy=1
this.deltacz=1
this.rx =  pos[this.no][3]
this.ry =  pos[this.no][4]
this.rz =  pos[this.no][5]
this.d =   pos[this.no][6] * zoom2
this.h =   pos[this.no][7] * zoom2
this.dim = pos[this.no][8]
this.type = type
this.moveStep = 0.05
}
draw(){
push()
if (abs(this.x - this.x0) > 5){
  if (this.x>0)
    this.x0 = lerp(this.x0, this.x, this.deltacx*this.moveStep)
  else
    this.x0 = lerp(this.x, this.x0, this.deltacx*this.moveStep)
  this.deltacx += 1
}
if (abs(this.y - this.y0) > 5){
  if (this.y>0)
    this.y0 = lerp(this.y0, this.y, this.deltacy*this.moveStep)
  else
    this.y0 = lerp(this.y, this.y0, this.deltacy*this.moveStep)
  this.deltacy += 1
}
if (abs(this.z - this.z0) > 5){
  if (this.z>0)
    this.z0 = lerp(this.z0, this.z, this.deltacz*this.moveStep)
  else
    this.z0 = lerp(this.z, this.z0, this.deltacz*this.moveStep)
  this.deltacz += 1
}
translate(this.x0, this.y0, this.z0)
rotateX(PI/this.rx)
rotateY(PI/this.ry)
rotateZ(PI/this.rz)
if (this.type == 1)
  this.draw_pyramid()
else if (this.type == 2)
  this.draw_box()
else if (this.type == 3)
  this.draw_sphere()
else if (this.type == 4)
  this.draw_cylinder()

pop()
}
draw_pyramid() {
push()
shininess(100)
ambientLight(90)
specularMaterial(pallet[this.no])
stroke(pallet[this.no][0], pallet[this.no][1], pallet[this.no][2] +5)
pointLight(pallet[this.no], this.x, this.y, this.z + 200)
pointLight(pallet[this.no], this.x, this.y-200, this.z + 500)
directionalLight(_c,100, 20, this.x+200, this.y+500, this.z + 2200)
cone(this.h, this.d, this.dim, 0, true)
pop()
}
draw_box() {
push()
shininess(100)
ambientLight(90)
specularMaterial(pallet[this.no])
stroke(pallet[this.no][0], pallet[this.no][1], pallet[this.no][2] +5)
pointLight(pallet[this.no], this.x, this.y, this.z + 200)
pointLight(pallet[this.no], this.x, this.y-200, this.z + 500)
directionalLight(_c,100, 20, this.x+200, this.y+500, this.z + 2200)
box(this.h, this.h, this.h)
pop()
}
draw_sphere() {
push()
noStroke()
shininess(100)
ambientLight(90)
specularMaterial(pallet[this.no])
pointLight(pallet[this.no], this.x, this.y, this.z + 200)
pointLight(pallet[this.no], this.x, this.y-200, this.z + 500)
directionalLight(_c,100, 20, this.x+200, this.y+500, this.z + 2200)
sphere(2*this.h/3)
pop()
}
draw_cylinder() {
push()
noStroke()
shininess(100)
ambientLight(90)
specularMaterial(pallet[this.no])
pointLight(pallet[this.no], this.x, this.y, this.z + 200)
pointLight(pallet[this.no], this.x, this.y-200, this.z + 500)
directionalLight(_c,100, 20, this.x+200, this.y+500, this.z + 2200)
cylinder(2*this.h/3, 2*this.d/2)
pop()
}
}