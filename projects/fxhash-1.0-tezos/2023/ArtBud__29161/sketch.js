//Copyright AItezoart @2023 - do not use without permision 
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=9;
var mmm=0;
var repeat=1;
  var color=["rgb(255, 0, 0,1)","rgb(255,69,0,0.7)","rgb(178,34,34,0.5)","rgb(255,160,122,0.3)","rgb(219,112,147,0.3)"]
 var mode=["screen","lighter","multiply","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","source-over"];

function drawImageFrame(context, x, y, width, height, imagePath, angle) {
  var image = new Image();
  image.src = imagePath;
  var size = 200;
  image.onload = function() {
    context.save(); // Save the current context state
    context.translate(x + width / 2, y + height / 2); // Translate the context to the center of the image
    context.rotate((angle * Math.PI) / 180); // Rotate the context by the specified angle in degrees
    context.drawImage(image, 0 + Math.floor(3 * fxrand()) * size , Math.floor(3 * fxrand()) * size , size , size , -width / 2, -height / 2, width, height); // Draw the rotated image
    context.restore(); // Restore the context to its original state
  };
}



var imagePath = './images/brush.png'; 


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
var rep = Math.floor(200 * fxrand())+100;

for(let n=0;n<=repeat;n++){
let o=Math.floor(nnn*fxrand());
  a.addLayer({id:r++,render:function(r,a){e[o]=new Image,e[o].src=t[o],e[o].onload=function(){

	context.globalCompositeOperation =  mode[12];
    	a.drawImage(e[o],mmm*n,0);
	for(let m=0;m<=20;m++){
	var width = 400; 
	var height = width ;
	context.globalCompositeOperation =  mode[12];
	if(Math.floor(3*fxrand()) > 1) {
	drawImageFrame(context, Math.floor(1200*fxrand())+600, Math.floor(1200*fxrand())+300, width, height, imagePath,Math.floor(360*fxrand()));
	}

	}
}

  }})}a.render(),fxpreview()}));
  var rarity=getFeatureString(fxrand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};