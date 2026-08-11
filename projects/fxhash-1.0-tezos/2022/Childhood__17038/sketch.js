let pallet=[[9,23,92], [14,48,93], [6,37,95], [355,58,92], [335,100,100], 
[25,92,67], [48,96,100], [45,96,98], [28,95,100], [44,77,80], 
[71,100,98], [92,100,72], [356,79,87], [159,53,88], [163,88,99], 
[183,95,92], [284,71,51], [185,95,60], [192,100,81], [198,98,81], 
[97,71,60], [346,100,84], [120,60,38], [187,91,29]]
function getPallet(value) {
return value;
}
function getBalloons(value) {
if (value < 0.5) return 7
else return 7
}
function getRotate(value) {
if (value < 0.1) return 4
else if (value < 0.2) return 5
else if (value < 0.3) return 6
else if (value < 0.4) return 7
else return 50
}
function getC(value) {
return value
}
function getC1(value) {
return value
}
function getC2(value) {
return value
}
function getC3(value) {
return value
}
function getRotateDouble(value) {
if (value < 0.5) return 1
else return 2
}
window.$fxhashFeatures = {
"_pallet_ind": getPallet(fxrand()),
"_c": getC(fxrand()),
"_c1": getC1(fxrand()),
"_c2": getC2(fxrand()),
"_c3": getC3(fxrand()),
"_balloons": getBalloons(fxrand()),
"_rotated": getRotateDouble(fxrand()),
"_rotate": getRotate(fxrand())
}
let pg;
let ww, _balloons, _rotate, _rotated, _c1, _c2, _c3, _c;
let c1=0,c1d=1


let balloons=[]
function setup() {
_pallet_ind=map(window.$fxhashFeatures._c,0,1,0,24)
_c=map(window.$fxhashFeatures._c,0,1,0,360)
_c1=window.$fxhashFeatures._c1
_c2=window.$fxhashFeatures._c2
_c3=window.$fxhashFeatures._c3
_balloons=window.$fxhashFeatures._balloons  
_rotated=window.$fxhashFeatures._rotated   
_rotate=window.$fxhashFeatures._rotate    
colorMode(HSB)
pixelDensity(1.5)
frameRate(130)
ww = 800
createCanvas(ww, ww, WEBGL);
pg = createGraphics(200, 200, WEBGL)
pg.pixelDensity(1.5)

// //////////////
for(let i=0; i<_balloons; i++){
balloons[i] = new balloon(i, -300+i*100, map(noise(i),0,1,-150,-50), floor(i%2))
}
}


function mouseClicked() {
for(let b in balloons){
let bx = floor(abs(balloons[b].x - (mouseX-400)))
let by = floor(abs(balloons[b].y - (mouseY-400)))
console.log(mouseX, balloons[b].x, bx, by)
if (bx<=70 && by<=70){
balloons[b].release()
}
}
return false;
}

function draw() {
c1+=c1d
if (c1<=0 || c1>=360)
c1d*=-1
push()
//texture(pg)
let colr1 = pallet[(floor(_pallet_ind+_c1)%24)][0]
let colr2 = pallet[(floor(_pallet_ind+_c1)%24)][1]-50
let colr3 = pallet[(floor(_pallet_ind+_c1)%24)][2]+30
background(color(colr1,colr2,colr3))
pop()
if ((mouseX > 0) && (mouseX < 800) &&
(mouseY > 0) && (mouseY < 800)) {
rotateX((400-mouseX )/1500.)
rotateY((400-mouseY )/1500.)
}
else{
rotateX((mouseX )/1500.)
rotateY((mouseY )/1500.)

}
//rotateZ(frameCount/500)

// draw balloons
push()
let c=1
for(let b in balloons){
c++
push()
balloons[b].draw()
pop()
}
pop()

// ////////
push()
noFill()
curveTightness(-5)
noiseDetail(20, 0.75);
//translate(0,50,0)


// woods
for(let j=-30; j<=30; j+=10){
noiseSeed(_c+j);
push()
translate(0,j,0)
let cnt=0, cnt2=0, px, py
//one
stroke(map(j,-30,30,25,30), map(j,-30,30,40,60), map(j,-30,30,65,75))
strokeWeight(6)
beginShape()
curveVertex(-350, -5, 5)
curveVertex(-350, -5, 5)
for(let i=-350; i<=350; i+=70){
px = i + map(noise(cnt, 2*i),0,1,-25,25) 
py = map(noise(2*i, cnt,i),0,1,-15,5)
curveVertex(px, py, map(noise(cnt,i),0,1,-40,5))
cnt++
}
curveVertex(350, 5, 5)
endShape()
//two
stroke(map(j,-30,30,25,30), map(j,-30,30,40,60), map(j,-30,30,55,65))
strokeWeight(6.1)
beginShape()
curveVertex(-350, -5, 5)
curveVertex(-350, -5, 5)
for(let i=-350; i<=350; i+=70){
px = i + map(noise(cnt2, 2*i),0,1,-25,25) 
py = map(noise(2*i, cnt2,i),0,1,-15,5)
curveVertex(px, py, map(noise(cnt2,i),0,1,-40,5))
cnt2++
}
curveVertex(350, 5, 5)
endShape()
pop()
}
pop()

}

class balloon{
constructor(no, x, y, type){
this.no = no
this.x = x
if ( this.no % 2 == 0)
this.y = y + sin(this.no)*30
else
this.y = y + cos(this.no)*30
this.stringLength = map(noise(no, x, y), 0, 1, 100, 160)
this.type = type
this.zoom = 1.3
this.mode=0
}
// /////// draw
// /////// draw
// /////// draw
release(){
this.mode=1

}
draw(){

if (this.no%3 == 0)
this.y +=  sin(frameCount/(1.5*this.no+40))*.4
else if (this.no%3 == 1)
this.y -=  cos(frameCount/(1.5*this.no+30))*.3
else
this.y +=  cos(frameCount/(1.5*this.no+30))*.3
this.head()
this.string()

}
// /////// head
// /////// head
// /////// head
head(){
shininess(100)
ambientLight(90)
//lights()
push()
if (this.mode == 1)
this.y -= 2
translate(this.x, this.y - 60 * this.zoom,0)
if (this.type == 0){
noStroke()
// if (floor((_c3*10 + _c2*10 + _c1*10) * this.no) % 2 == 0){
let colr1 = pallet[(floor(_pallet_ind+this.no)%24)][0]
let colr2 = pallet[(floor(_pallet_ind+this.no)%24)][1]
let colr3 = pallet[(floor(_pallet_ind+this.no)%24)][2]
fill(color(colr1,colr2,colr3))
specularMaterial(color(colr1,colr2,colr3), this.x, this.y - 60 * this.zoom, 400)
pointLight(color(colr1,colr2,colr3), this.x, this.y - 60 * this.zoom, 9990)
sphere(40 * this.zoom)
translate(0,45 * this.zoom,0)
cone(32 * this.zoom, 40 * this.zoom)
}
else{
strokeWeight(1)
push()
shininess(90)
ambientLight(60)
rotateY(this.no*PI/40)
translate(0, -50, 0)//top
for(let i=30; i>=0; i-=3){
let colr1 = pallet[(floor(_pallet_ind+this.no)%24)][0]
let colr2 = pallet[(floor(_pallet_ind+this.no)%24)][1]
let colr3 = pallet[(floor(_pallet_ind+this.no)%24)][2]
fill(color(colr1, colr2, colr3-i))
stroke(color(colr1, colr2, colr3-i-10))
push()
translate(0, i*2.1, 0)
cylinder(i, 1, 4)
pop()
}
translate(0, 70, 0)//bottom
for(let i=0; i<=30; i+=3){
let colr1 = pallet[(floor(_pallet_ind+this.no)%24)][0]
let colr2 = pallet[(floor(_pallet_ind+this.no)%24)][1]
let colr3 = pallet[(floor(_pallet_ind+this.no)%24)][2]
fill(color(colr1, colr2, colr3-i))
stroke(color(colr1, colr2, colr3-i-10))
push()
translate(0, i*2.1, 0)
cylinder(30-i, 1 ,4)
pop()
}
// ///////////
push()//right
rotateZ(PI/2)
translate(0, -70, 0)
for(let i=30; i>=0; i-=4){
let colr1 = pallet[(floor(_pallet_ind+this.no)%24)][0]
let colr2 = pallet[(floor(_pallet_ind+this.no)%24)][1]
let colr3 = pallet[(floor(_pallet_ind+this.no)%24)][2]
fill(color(colr1, colr2, colr3-i))
stroke(color(colr1, colr2, colr3-i-10))
push()
translate(0, i*2.1, 0)
cylinder(i, 1, 4)
pop()
}
pop()
push()//left
rotateZ(-PI/2)
translate(0, -70, 0)
for(let i=30; i>=0; i-=4){
let colr1 = pallet[(floor(_pallet_ind+this.no)%24)][0]
let colr2 = pallet[(floor(_pallet_ind+this.no)%24)][1]
let colr3 = pallet[(floor(_pallet_ind+this.no)%24)][2]
fill(color(colr1, colr2, colr3-i))
stroke(color(colr1, colr2, colr3-i-10))
push()
translate(0, i*2.1, 0)
cylinder(i, 1, 4)
pop()
}
pop()
pop()
}
pop()
}
string(){
push()
translate(this.x, this.y, 0)
for(let i=0; i<=this.stringLength; i++){
if (this.no%2 == 0)
translate(.1*sin(frameCount/(this.no*3+50)+.05*i)*5, 2, 0)
else
translate(.1*cos(.05*i)*5, 2, 0)
sphere(2, 4)
}
pop()

}
}