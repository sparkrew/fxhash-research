//Copyright AItezoart @2023 - do not use without permision
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=8;
var mmm=800;
var flip=0;
var repeat=120;
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
      context.restore();
  }

  function drawCenteredRectangle(x, y, color, width, height, context, strokeWidth, strokeColor) {
      context.beginPath();
      context.rect(x , y , width, height);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = strokeWidth || 0;
      context.strokeStyle = strokeColor || 'transparent';
  }

  function drawImageFrame(context, x, y, width, height, imagePath, angle) {
    var image = new Image();
    image.src = imagePath;
    image.onload = function() {
      context.save();
      context.translate(x + width / 2, y + height / 2);
      context.rotate((angle * Math.PI) / 180);
      context.drawImage(image, x , y , width , height , -width / 2, -height / 2, width, height);
      context.restore();
    };
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

sss=1;

for (let n = 0; n <= repeat/sss; n++) {
  for (let m = 0; m <= repeat*2/sss; m++) {
    let o = Math.floor(nnn * $fx.rand());

    let image = new Image();
    image.src = t[o];
    drawImageFrame(context, n*600, m*2400, 600*sss, 2400*sss, t[o],0);

}}
	for (let j = 0; j <= 5; j++) {
	context.globalCompositeOperation =  mode[3];
	cl(Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), "white", Math.floor($fx.rand()*2400), context, 10, "red");
	}

	context.globalCompositeOperation =  mode[3];
drawTriangle(context, 0, 2400, 2400, 2400, Math.floor($fx.rand()*600), Math.floor($fx.rand()*1000)+1200, color[Math.floor($fx.rand()*4)], 0.5);
drawTriangle(context, 0, 0, 2400, 0, Math.floor($fx.rand()*2400)+1200, Math.floor($fx.rand()*1000), "blue", 0.5);
	context.globalCompositeOperation =  mode[3];
drawCenteredRectangle(Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), color[Math.floor($fx.rand()*4)], Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), context, 0, "black");
drawCenteredRectangle(Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), color[Math.floor($fx.rand()*4)], Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), context, 0, "black");
drawCenteredRectangle(Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), color[Math.floor($fx.rand()*4)], Math.floor($fx.rand()*2400), Math.floor($fx.rand()*2400), context, 0, "black");
  }));

  $fx.preview ()
  var rarity=getFeatureString($fx.rand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};
