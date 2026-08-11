//Copyright AItezoart @2023 - do not use without permision 
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=9;
var mmm=0;
var flip=0;
var repeat=Math.floor(3*$fx.rand());
  var color=["rgb(255, 0, 0,1)","rgb(255, 50, 0,1)","rgb(255, 150, 50,0.7)","rgb(255, 255, 255,0.5)","rgb(255, 255, 255,0.5)"]
 var mode=["screen","lighter","lighten","multiply","overlay","darken","color-dodge","color-burn","hard-light","soft-light","difference"];

function drawTriangle(context, x1, y1, x2, y2, x3, y3, color, transparency) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();

    context.fillStyle = color;
    context.fill();
}

function drawLine(centerX, centerY, length, angle, color, thickness, context, alpha) {
  const startX = centerX - (length / 2) * Math.cos(angle);
  const startY = centerY - (length / 2) * Math.sin(angle);
  const endX = centerX + (length / 2) * Math.cos(angle);
  const endY = centerY + (length / 2) * Math.sin(angle);

  context.globalAlpha = alpha;
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = thickness;
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.stroke();
  context.closePath();
  context.globalAlpha = 1;
}

function drawEllipses(centerX, centerY, strokeWidth , size, context, colors,div) {

    const color = colors[Math.floor($fx.rand() * colors.length)];
    const ellipseWidth =  size ;
    const ellipseHeight =  size /div ;

    context.fillStyle = "transparent";
    context.strokeStyle = color;
    context.lineWidth = strokeWidth;

    context.beginPath();
    context.ellipse(centerX, centerY, ellipseWidth, ellipseHeight, 0, 0, Math.PI*2);
    context.stroke();


}

  function cl(x, y, color, radius, context, strokeWidth, strokeColor) {
	context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = color;

    context.fill();
    context.lineWidth = strokeWidth;
    context.strokeStyle = strokeColor;
    context.stroke();
context.restore();
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



	context.globalCompositeOperation = mode[0];
    	a.drawImage(e[o],mmm*n,0);

}


context.globalCompositeOperation = mode[2];
var bbb = 100
for (let i = 0; i < bbb; i++) {
  drawLine(canvas.width / 2-1200+i*(bbb/4), canvas.height / 2, 2400, Math.PI /2, "red", Math.floor($fx.rand()*2), context,$fx.rand()*1);
  drawLine(canvas.width / 2+900+i*(bbb/4), canvas.height / 2, 2400, Math.PI /2, "red", Math.floor($fx.rand()*2), context,$fx.rand()*1);

}

  }})}a.render(),$fx.preview ()}));
  var rarity=getFeatureString($fx.rand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};