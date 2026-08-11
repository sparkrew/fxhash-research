//Copyright AItezoart @2023 - do not use without permision 
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=11;
var mmm=800;
var flip=0;
var repeat=3;
  var color=["rgb(0, 0, 0,255.2)","rgb(50, 255,255,0.2)","rgb(0, 200, 255,0.2)","rgb(255, 0, 255,0.3)","rgb(255, 50, 255,0.3)"]
 var mode=["screen","lighter","lighten","hard-light","soft-light","multiply","overlay","darken","color-dodge","color-burn","difference"];
function drawTriangle(context, x1, y1, x2, y2, x3, y3, color, transparency) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();

    context.fillStyle = color;
    context.fill();
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

function drawRotatedSquare(x, y, color, sideLength, angle, context, strokeWidth, strokeColor) {
    context.save(); 
    context.translate(x, y); 
    context.rotate((angle * Math.PI) / 180); 
    context.beginPath();
    context.rect(-sideLength / 2, -sideLength / 2, sideLength, sideLength);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = strokeWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
    context.restore(); // Restore the previous transformation matrix
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
for(let n=0;n<=repeat;n++){
let o=Math.floor(nnn*$fx.rand());
  a.addLayer({id:r++,render:function(r,a){e[o]=new Image,e[o].src=t[o],e[o].onload=function(){

	context.globalCompositeOperation = mode[6];
	if (n==0) {a.drawImage(e[o],mmm*n,0);}
	else {
	if(Math.floor(5*$fx.rand())<1){	
	a.drawImage(e[o],0,0);}
	}

	if(Math.floor(5*$fx.rand())<2){
	context.globalCompositeOperation = mode[0];
	drawRotatedSquare(1200, 1200, color[Math.floor(Math.floor(5*$fx.rand()))], 2400, 0, context, 0, "black");
	}
	if(Math.floor(5*$fx.rand())>1){
	context.globalCompositeOperation = mode[1];
    	triangleColor = color[Math.floor(Math.floor(5*$fx.rand()))];
    	drawTriangle(context, 0, 0, Math.floor($fx.rand()*2400), 0, 0, 2400, triangleColor, 0);
	}


	if(Math.floor(5*$fx.rand())<1){
	context.globalCompositeOperation =  mode[2];
    	triangleColor = color[Math.floor(Math.floor(5*$fx.rand()))];
    	drawTriangle(context, Math.floor($fx.rand()*2400), 0, 0,2400, 2400, 2400, triangleColor, 0);
}



  }}})}a.render(),$fx.preview ()}));
  var rarity=getFeatureString($fx.rand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};