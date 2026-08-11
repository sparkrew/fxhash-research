var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d");
context.lineCap = "round";
var width = 1024,
  height = 1024;
function getRandomInt(e) {
  return Math.floor(fxrand() * e) + 1;
}
function plusOrMinus() {
  return fxrand() < 0.5 ? -1 : 1;
}
for (
  var layers = [
      [
        "./image/01-Backgrounds/cage.png",
        "./image/01-Backgrounds/Cyangradient.png",
        "./image/01-Backgrounds/Desatdiag.png",
        "./image/01-Backgrounds/Hill.png",
        "./image/01-Backgrounds/waves.png",
      ],
      ["./image/02-Tree/Treebranch.png"],
      ["./image/03-Toes/Toes.png"],
      [
        "./image/04-Body/Blue.png",
        "./image/04-Body/bluegreen.png",
        "./image/04-Body/darkblue.png",
        "./image/04-Body/deeppurple.png",
        "./image/04-Body/Green.png",
        "./image/04-Body/Grey.png",
        "./image/04-Body/Orange.png",
        "./image/04-Body/pinkishorange.png",
        "./image/04-Body/Purple.png",
        "./image/04-Body/Redorange.png",
        "./image/04-Body/Yellow.png",
        "./image/04-Body/Yellowolive.png",
      ],
      ["./image/05-Beak/Beak.png"],
      [
        "./image/06-Nosejewel/Black.png",
        "./image/06-Nosejewel/Gold.png",
        "./image/06-Nosejewel/Grey.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
        "./image/06-Nosejewel/empty.png",
      ],
      [
        "./image/7-Eye/empty.png",
        "./image/7-Eye/HeartPink.png",
        "./image/7-Eye/Ovalblue.png",
        "./image/7-Eye/PirateBlack.png",
        "./image/7-Eye/squareorange.png",
        "./image/7-Eye/Starbluegreen.png",
        "./image/7-Eye/empty.png",
        "./image/7-Eye/empty.png",
        "./image/7-Eye/empty.png",
        "./image/7-Eye/empty.png",
        "./image/7-Eye/empty.png",
        "./image/7-Eye/empty.png",
        "./image/7-Eye/empty.png",
      ],
      [
        "./image/08-Neck/empty.png",
        "./image/08-Neck/GoldPendant.png",
        "./image/08-Neck/Purplescarf.png",
        "./image/08-Neck/ReTie.png",
        "./image/08-Neck/Yellowscarf.png",
        "./image/08-Neck/empty.png",
        "./image/08-Neck/empty.png",
        "./image/08-Neck/empty.png",
        "./image/08-Neck/empty.png",
        "./image/08-Neck/empty.png",
      ],
      [
        "./image/09-Head/Blackcap.png",
        "./image/09-Head/Blackretrohair.png",
        "./image/09-Head/Bluefunkyhair.png",
        "./image/09-Head/BluePirate.png",
        "./image/09-Head/BrownHat.png",
        "./image/09-Head/Crownking.png",
        "./image/09-Head/Crownqueen.png",
        "./image/09-Head/empty.png",
        "./image/09-Head/Orangewinter.png",
        "./image/09-Head/Pinkflower.png",
        "./image/09-Head/Readfeather.png",
        "./image/09-Head/empty.png",
        "./image/09-Head/empty.png",
        "./image/09-Head/empty.png",
        "./image/09-Head/empty.png",
        "./image/09-Head/empty.png",
        "./image/09-Head/empty.png",
      ],
      [
        "./image/10-VR/VRHeadset.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
        "./image/10-VR/empty.png",
      ],
    ],
    layersList = [
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
      { isLoaded: !1, layer: null, data: [] },
    ],
    i = 0;
  i < layersList.length;
  i++
) {
  var layer = new Image();
  (layer.crossOrigin = "Anonymous"),
    (layer.index = i),
    (layersList[i].layer = layer),
    (layer.onload = function (e) {
      layersList[e.currentTarget.index].isLoaded = !0;
    });
  var index = getRandomInt(layers[i].length) - 1;
  (layer.src = layers[i][index]), console.log(layers[i][index]);
}
var _render = !1,
  r = 300,
  off = 10,
  speed = 5,
  size = 10,
  runOnce = !1;
function render() {
  if (!1 === runOnce) {
    for (var e = !0, a = 0; a < layersList.length; a++)
      if (!1 === layersList[a].isLoaded) {
        console.log(e), (e = !1);
        break;
      }
    if (!0 === e) {
      console.log("All True", layersList);
      for (var n = 0; n < layersList.length; n++)
        if (!1 === layersList[n].layer.currentSrc.includes("empty")) {
          context.clearRect(0, 0, 1024, 1024),
            context.drawImage(layersList[n].layer, 0, 0);
          for (
            var g = context.getImageData(0, 0, canvas.width, canvas.height)
                .data,
              t = ((a = 0), []),
              i = 0;
            i < 1024;
            i++
          )
            for (var l = 0; l < 1024; l++)
              t.push({
                row: l,
                column: i,
                clist: [g[a], g[a + 1], g[a + 2], g[a + 3]],
                color:
                  "rgba(" +
                  g[a] +
                  "," +
                  g[a + 1] +
                  "," +
                  g[a + 2] +
                  "," +
                  g[a + 3] +
                  ")",
              }),
                (a += 4);
          var p = [];
          if (plusOrMinus() < 0)
            for (a = 0; a < t.length; a++)
              "rgba(0,0,0,0)" !== t[a].color &&
                ((t[a].color =
                  "rgba(" +
                  (255 - parseInt(t[a].clist[0])) +
                  "," +
                  (255 - parseInt(t[a].clist[1])) +
                  "," +
                  (255 - parseInt(t[a].clist[2])) +
                  "," +
                  parseInt(t[a].clist[3]) +
                  ")"),
                (t[a].clist = null),
                p.push(t[a]));
          else
            for (a = 0; a < t.length; a++)
              "rgba(0,0,0,0)" !== t[a].color &&
                ((t[a].clist = null), p.push(t[a]));
          layersList[n].data = p;
        }
      context.clearRect(0, 0, 1024, 1024), (_render = !0), (runOnce = !0);
    }
  }
  if (!0 === _render) {
    if (
      ((context.fillStyle = "black"),
      context.fillRect(0, 0, 1024, 1024),
      speed > 0)
    )
      for (n = 1; n < layersList.length - 1; n++)
        for (t = layersList[n].data, a = 1; a < t.length; a += off)
          (context.fillStyle = t[a].color),
            (x = t[a].row),
            (y = t[a].column),
            (x += fxrand() * r * Math.cos(a)),
            (y += fxrand() * r * Math.cos(a)),
            (context.globalAlpha = 0.3),
            context.fillRect(x, y, size, size);
    else {
      context.globalAlpha = 1;
      for (n = 1; n < layersList.length - 1; n++)
        for (t = layersList[n].data, a = 1; a < t.length; a++)
          (context.fillStyle = t[a].color),
            (x = t[a].row),
            (y = t[a].column),
            context.fillRect(x, y, size, size);
    }
    (r -= speed) % 50 == 0 && r > 0 && (size -= 0.5),
      r < 0 &&
        off > 1 &&
        ((speed = 0), (r = 0), (off = 1), (size = 1), fxpreview());
  }
}
var fps,
  fpsInterval,
  startTime,
  now,
  then,
  elapsed,
  stop = !1,
  frameCount = 0;
function startAnimating(e) {
  (fpsInterval = 1e3 / e), (then = Date.now()), (startTime = then), animate();
}
function animate() {
  requestAnimationFrame(animate),
    (now = Date.now()),
    (elapsed = now - then) > fpsInterval &&
      ((then = now - (elapsed % fpsInterval)), render());
}
startAnimating(120);
