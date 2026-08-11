var r1=fxrand()
var r2=fxrand()
var r3=fxrand()
var r4=fxrand()
var r5=fxrand()
var r6=fxrand()
var r7=fxrand()
var r8=fxrand()
var r9=fxrand()
var r10=fxrand()
var r11=fxrand()
var r12=fxrand()


var sz=580

var backgrounddd=[]
var armtatto=[]
var eye=[]
var Fur=[]
var hat=[]
var horn=[]
var necktattoo=[]
var headtatto=[]
var theet=[]
var tongue=[]
var crown
var punkyhair=[]
var hair=[]
var unicornhorn=[]

function preload(){
  
  for(let i=1;i<18;i++){
    backgrounddd[i-1]=loadImage("./BACKGROUND"+i+".png")
  }
  
   for(let i=1;i<12;i++){
    armtatto[i-1]=loadImage("./armtatto"+i+".png")
  }
  
  for(let i=1;i<19;i++){
    eye[i-1]=loadImage("./eyes"+i+".png")
  }
  
  for(let i=1;i<17;i++){
    Fur[i-1]=loadImage("./Fur"+i+".png")
  }
  
  
  
  for(let i=1;i<14;i++){
    horn[i-1]=loadImage("./Horns"+i+".png")
  }
  
  
  for(let i=1;i<15;i++){
    necktattoo[i-1]=loadImage("./necktatto"+i+".png")
  }
  
  for(let i=1;i<17;i++){
    headtatto[i-1]=loadImage("./headtatto"+i+".png")
  }
  
  for(let i=1;i<5;i++){
    theet[i-1]=loadImage("./teeths"+i+".png")
  }
  
  for(let i=1;i<10;i++){
    hair[i-1]=loadImage("./hair"+i+".png")
  }
  
  tongue[0]=loadImage("./tongue1.png")
  tongue[1]=loadImage("./tongue2.png")
  
  punkyhair[0]=loadImage("./punkyhair1.png")
  punkyhair[1]=loadImage("./punkyhair2.png")
  
  crown=loadImage("./crown.png")
  
  unicornhorn[0]=loadImage("./unicornhorn1.png")
  unicornhorn[1]=loadImage("./unicornhorn2.png")
  
}

function setup() {
  createCanvas(sz,sz);
	imageMode(CENTER);
 noLoop()
}

function draw() {
  
  if(r1<0.5){
  a1=int(map(fxrand(),0,1,0,13))
  image(backgrounddd[a1],width/2,height/2,sz,sz)
}else if(r1<0.9){
   a1=int(map(fxrand(),0,1,13,15))
  image(backgrounddd[a1],width/2,height/2,sz,sz)
}else{
   a1=int(map(fxrand(),0,1,15,17))
  image(backgrounddd[a1],width/2,height/2,sz,sz)
}
  
  if(r4<0.5){
  a4=int(map(fxrand(),0,1,0,8))
  image(Fur[a4],width/2,height/2,sz,sz)
}else if(r4<0.9){
   a4=int(map(fxrand(),0,1,8,13))
  image(Fur[a4],width/2,height/2,sz,sz)
}else{
   a4=int(map(fxrand(),0,1,13,16))
  image(Fur[a4],width/2,height/2,sz,sz)
}
  
  
  
   if(r2<0.5){
  a2=int(map(fxrand(),0,1,0,5))
  image(armtatto[a2],width/2,height/2,sz,sz)
}else if(r2<0.9){
   a2=int(map(fxrand(),0,1,5,8))
  image(armtatto[a2],width/2,height/2,sz,sz)
}else{
   a2=int(map(fxrand(),0,1,8,11))
  image(armtatto[a2],width/2,height/2,sz,sz)
}
  
  if(r11<0.5){
  a11=int(map(fxrand(),0,1,0,6))
  image(hair[a11],width/2,height/2,sz,sz)
}else if(r11<0.9){
   a11=int(map(fxrand(),0,1,6,8))
  image(hair[a11],width/2,height/2,sz,sz)
}else{
   a11=8
  image(hair[a11],width/2,height/2,sz,sz)
}
   
  
   if(r5<0.5){
  a5=int(map(fxrand(),0,1,0,8))
  image(horn[a5],width/2,height/2,sz,sz)
}else if(r5<0.9){
   a5=int(map(fxrand(),0,1,8,11))
  image(horn[a5],width/2,height/2,sz,sz)
}else{
   a5=int(map(fxrand(),0,1,11,13))
  image(horn[9],width/2,height/2,sz,sz)
}
    
  
   if(r6<0.5){
  a6=int(map(fxrand(),0,1,0,6))
  image(necktattoo[a6],width/2,height/2,sz,sz)
}else if(r6<0.9){
   a6=int(map(fxrand(),0,1,6,11))
  image(necktattoo[a6],width/2,height/2,sz,sz)
}else{
   a6=int(map(fxrand(),0,1,11,14))
  image(necktattoo[a6],width/2,height/2,sz,sz)
}
  
   if(r7<0.5){
  a7=int(map(fxrand(),0,1,0,9))
  image(headtatto[a7],width/2,height/2,sz,sz)
}else if(r7<0.9){
   a7=int(map(fxrand(),0,1,9,12))
  image(headtatto[a7],width/2,height/2,sz,sz)
}else{
   a7=int(map(fxrand(),0,1,12,16))
  image(headtatto[a7],width/2,height/2,sz,sz)
}
  
   if(r8<0.5){
 
}else if(r8<0.9){
   a8=int(map(fxrand(),0,1,0,3))
  image(theet[a8],width/2,height/2,sz,sz)
}else{
   a8=3
  image(theet[a8],width/2,height/2,sz,sz)
}
  
  if(r3<0.5){
  a3=int(map(fxrand(),0,1,0,9))
  image(eye[a3],width/2,height/2,sz,sz)
}else if(r3<0.9){
   a3=int(map(fxrand(),0,1,9,13))
  image(eye[a3],width/2,height/2,sz,sz)
}else{
   a3=int(map(fxrand(),0,1,13,18))
  image(eye[a3],width/2,height/2,sz,sz)
}
  
  if(r9>0.9){
    a9=int(map(fxrand(),0,1,0,2))
    image(tongue[a9],width/2,height/2,sz,sz)
  }
  
  if(r10<0.15){
    image(crown,width/2,height/2,sz,sz)
  }
 
  if(r10>0.85){
     a10=int(map(fxrand(),0,1,0,2))
    image(punkyhair[a10],width/2,height/2,sz,sz)
  }
  
  if(r12>0.9){
    a12=int(map(fxrand(),0,1,0,2))
    image(unicornhorn[a12],width/2,height/2,sz,sz)
  }
  
}

function getFeatureString(value) {
  if (value < 0.5) return "Common"
  if (value < 0.9) return "Rare"
  else return "Legendary"
}

function getFeatureStringtongue(value) {
  if (value < 0.5) return "None"
  if (value < 0.9) return "Rare"
  else return "Legendary"
}

function getFeatureStringyesno(value) {
  if (value < 0.9){
    return "None"
  }else{
    return "Legendary"
  }
 
}

function getFeatureStringhat(value) {
  
  if (value < 0.15) return "Crown"
  if (value > 0.85) return "Punkyhair"
  else return "None"
  
 
}




window.$fxhashFeatures = {
  
  "Background" : getFeatureString(r1),
  "Arm tattoo" : getFeatureString(r2),
  "Eyes" : getFeatureString(r3),
  "Fur" : getFeatureString(r4),
  "Horn" : getFeatureString(r5),
  "Neck tattoo" : getFeatureString(r6),
  "Head tattoo" : getFeatureString(r7),
  "Mouth" : getFeatureStringtongue(r8),
  "Hat" : getFeatureStringhat(r10),
  "Hair" : getFeatureString(r11),
  "Tongue" : getFeatureStringyesno(r9),
  "Unicorn horn" : getFeatureStringyesno(r12)
}