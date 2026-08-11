//Copyright AItezoart @2023 - do not use without permision 
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=11;
var mmm=Math.floor(800*fxrand());
var flip=0;
var repeat=Math.floor(3*fxrand());
  var color=["rgb(255, 0, 0,0.5 )","rgb(255, 127, 80, 0.5 )","rgb(255, 69, 0, 0.5 )","rgb(255, 255, 255, 0.5 )","rgb(255, 165, 0, 0.5 )"]
 var mode=["screen","lighter","multiply","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference"];

function dc(context, x, y, width, height, diameter, fillColor, lineWidth, borderColor) {
    const semiCircleRadius = diameter ;

    // Draw the rectangle
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = fillColor;
    context.lineWidth = lineWidth;
    context.strokeStyle = borderColor;
    context.fill();
 //   context.stroke();

    // Draw the semi-circle
    context.beginPath();
    context.arc(x + width / 2, y + height+diameter , semiCircleRadius, 2 * Math.PI, 0);
    context.fillStyle = fillColor;
    context.fill();
//    context.stroke();
}

  function cl(x, y, color, radius, context, strokeWidth, strokeColor) {

    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;

    context.fill();
    context.lineWidth = strokeWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
  }


window.addEventListener("load",(()=>{let e=[],r=0,t=[];
for(let e=0;e<nnn;e++){
if (e<10){t[e]="./images/0000"+e+".jpg";}
else {t[e]="./images/000"+e+".jpg";}}
console.log(t[e]);
var canvas = document.getElementById('AItezoart');
canvas.width = 2400;
canvas.height = 2400;
context=document.getElementById("AItezoart").getContext("2d");
var a=new layeredCanvas("AItezoart");
var rep = Math.floor(20 * fxrand())+20;

for(let n=0;n<=repeat;n++){
let o=Math.floor(nnn*fxrand());
  a.addLayer({id:r++,render:function(r,a){e[o]=new Image,e[o].src=t[o],e[o].onload=function(){
if (flip){
  if(n == 0 || n==2) {
      a.save();
      a.scale(-1, 1);
	context.globalCompositeOperation =  mode[0];
    a.drawImage(e[o],(mmm*n*-1)-mmm,0);
    a.restore();
}
else {
	context.globalCompositeOperation =  mode[0];
    a.drawImage(e[o],mmm*n,0);}}
else 
{
	context.globalCompositeOperation =  mode[0];
a.drawImage(e[o],mmm*n,0);
}

context.globalCompositeOperation =  mode[Math.floor(5 * fxrand())];

if(Math.floor(10*fxrand())>1){
for(let m=0; m<=rep; m++){
var xCoordinate = 0+m*(2400/rep); 
var yCoordinate = 0; 
var rectangleWidth = (2400/rep); 
var rectangleHeight = Math.floor(2200 * fxrand()); 
var diameter = (2400/rep)-20; 
var fillColor = color[Math.floor(5 * fxrand())]; 
var lineWidth = 0; 
var borderColor = "black"; 

	if(Math.floor(3*fxrand())>1){
	dc(context, xCoordinate, yCoordinate, rectangleWidth, rectangleHeight, diameter, fillColor, lineWidth, borderColor);
	}
}
}

  }}})}a.render(),fxpreview()}));
  var rarity=getFeatureString(fxrand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};