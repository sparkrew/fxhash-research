function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn=10;
var mmm=512;
var flip=0;
var repeat=2;
window.addEventListener("load",(()=>{let e=[],r=0,t=[];for(let e=0;e<nnn;e++)t[e]="./images/"+e+".jpg";
var canvas = document.getElementById('AItezoart');
canvas.width = 1536;
canvas.height = 1536;
document.getElementById("AItezoart").getContext("2d");
var a=new layeredCanvas("AItezoart");
for(let n=0;n<=repeat;n++){
let o=Math.floor(nnn*fxrand());
  a.addLayer({id:r++,render:function(r,a){e[o]=new Image,e[o].src=t[o],e[o].onload=function(){
if (flip){
  if(n % 2 == 0) {
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
  }}})}a.render(),fxpreview()}));
  var rarity=getFeatureString(fxrand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};
