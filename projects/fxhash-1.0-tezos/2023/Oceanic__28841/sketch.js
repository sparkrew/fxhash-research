//Copyright AItezoart @2023 - do not use without permision 
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=8;
var mmm=Math.floor(2400*fxrand());
var flip=0;
var repeat=Math.floor(3*fxrand());
  var color=["rgb(255, 0, 0,0.2)","rgb(100, 255, 0,0.2)","rgb(100, 0, 255,0.3)","rgb(255, 255, 100,0.3)","rgb(100, 255, 255,0.3)"]
 var mode=["screen","lighter","multiply","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference"];
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
let o=Math.floor(nnn*fxrand());
  a.addLayer({id:r++,render:function(r,a){e[o]=new Image,e[o].src=t[o],e[o].onload=function(){
if (flip){
  if(n == 0 || n==2) {
      a.save();
      a.scale(-1, 1);
    a.drawImage(e[o],(mmm*n*-1)-mmm,0);
    a.restore();
}
else {
    a.drawImage(e[o],mmm*n,0);}}
else 
{
a.drawImage(e[o],mmm*n,0);
}
	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation = mode[1];
    	triangleColor = color[Math.floor(Math.floor(5*fxrand()))];
    	drawTriangle(context, 0, 0, 2400, 0, 0, 2400, triangleColor, 0);
	}


	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation =  mode[2];
    	triangleColor = color[Math.floor(Math.floor(5*fxrand()))];
    	drawTriangle(context, 2400, 0, 0,2400, 2400, 2400, triangleColor, 0);
}

	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation =  mode[Math.floor(11*fxrand())];
  	cl(Math.floor(fxrand()*1200), Math.floor(fxrand()*1200), color [Math.floor(fxrand()*5)],  Math.floor(fxrand()*50)+50, context , Math.floor(55*fxrand())+10,color[Math.floor(5*fxrand())]);
}
	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation =  mode[Math.floor(11*fxrand())];
  	cl(Math.floor(fxrand()*1200), Math.floor(fxrand()*1200), color [Math.floor(fxrand()*5)],  Math.floor(fxrand()*150)+150, context , Math.floor(55*fxrand())+10,color[Math.floor(5*fxrand())]);
}
	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation =  mode[Math.floor(11*fxrand())];
  	cl(Math.floor(fxrand()*1200), Math.floor(fxrand()*1200), color [Math.floor(fxrand()*5)],  Math.floor(fxrand()*250)+250, context , Math.floor(55*fxrand())+10,color[Math.floor(5*fxrand())]);
}
	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation =  mode[Math.floor(11*fxrand())];
  	cl(Math.floor(fxrand()*1200), Math.floor(fxrand()*1200), color [Math.floor(fxrand()*5)],  Math.floor(fxrand()*450)+450, context , Math.floor(55*fxrand())+10,color[Math.floor(5*fxrand())]);
}
	if(Math.floor(5*fxrand())>1){
	context.globalCompositeOperation =  mode[Math.floor(11*fxrand())];
  	cl(Math.floor(fxrand()*1200), Math.floor(fxrand()*1200) , color [Math.floor(fxrand()*5)],  Math.floor(fxrand()*400)+800, context , Math.floor(55*fxrand())+10,color[Math.floor(5*fxrand())]);
}
  }}})}a.render(),fxpreview()}));
  var rarity=getFeatureString(fxrand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};