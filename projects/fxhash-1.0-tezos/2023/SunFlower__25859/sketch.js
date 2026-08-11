//@2023 AItezoart All right reserved - no right to use this code 
function getFeatureString(e){return e<.1?" I ":e<.2&&e>=.1?" II ":e<.3&&e>=.2?" III ":e<.4&&e>=.3?" IV ":e<.5&&e>=.4?" V ":e<.6&&e>=.5?" VI ":e<.7&&e>=.6?" VII ":e<.8&&e>=.7?" VIII ":e<.9&&e>=.8?" IX ":" X "}
var nnn = 15;
var mmm = 250;
var flip = 1;
var repeat = 10;

window.addEventListener("load", (() => {
  let e = [],
    r = 0,
    t = [];
  for (let e = 0; e < nnn; e++) t[e] = "./images/" + e + ".jpg";
  var canvas = document.getElementById('AItezoart');
  canvas.width = 2000;
  canvas.height = 2000;
  var a = document.getElementById("AItezoart").getContext("2d");
  var context = document.getElementById("AItezoart").getContext("2d");
  var a = new layeredCanvas("AItezoart");

  let o1 = Math.floor(nnn * fxrand());
  let o2 = Math.floor(nnn * fxrand());
  let s = Math.floor(10 * fxrand())/10;
  for (let n = 0; n <= repeat*2; n++) {
  let o = 0;
    if (n % 2 == 0) {
	o=Math.floor(nnn * fxrand());
      a.addLayer({
        id: r++,
        render: function (r, a) {
          e[o] = new Image, e[o].src = t[o], e[o].onload = function () {
            a.save();
            a.scale(-1, 1.5+s);
            a.drawImage(e[o], (mmm * n * -1) - mmm, 0);
            a.restore();
          }
        }
      });
    } else {
	o=Math.floor(nnn * fxrand());
      a.addLayer({
        id: r++,
        render: function (r, a) {
          e[o] = new Image, e[o].src = t[o], e[o].onload = function () {
	    
            a.save();
            a.scale(1, 1.5);
	   a.drawImage(e[o],mmm*n,0);	
            a.restore();


          }
        }
      });
    }
    a.render();
  }
  const ctx = canvas.getContext('2d');
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(Math.PI / Math.floor(20 * fxrand()));
  ctx.translate(-canvas.width / 2 - 650, -canvas.height / 2 - 500);
  fxpreview();
}));
  var rarity=getFeatureString(fxrand());
  console.log("rarity = ",rarity),window.$fxhashFeatures={Rarity:rarity};