var colorPalletes = {
  orangeYellowGreen: ["#EA5C2B", "#FF7F3F", "#F6D860", "#95CD41"],
  redBlueShades: ["#FF5959", "#676FA3", "#CDDEFF", "#EEF2FF"],
  blassBlueShades: ["#1A374D", "#406882", "#6998AB", "#B1D0E0"],
  purpleBlueOrange: ["#370665", "#35589A", "#F14A16", "#FC9918"],
};
var accentColors = ["red", "orange", "blue", "green", "purple", "black"];
var colors = [
  "001219",
  "005f73",
  "0a9396",
  "94d2bd",
  "e9d8a6",
  "ee9b00",
  "ca6702",
  "bb3e03",
  "ae2012",
  "9b2226",
  "green",
  "black",
  "red",
  "rgba(100,250,50,1)",
  "rgba(100,250,250,1)",
  "rgba(250,0,150,1)",
  "rgba(50,0,150,1)",
  "rgba(50,0,120,1)",
  "rgba(150,0,120,1)",
  "rgba(150,150,120,1)",
  "rgba(50,150,20,1)",
  "rgba(150,250,20,1)",
  "rgba(10,150,120,1)",
  "rgba(10,250,220,1)",
  "rgba(150,150,220,1)",
  "rgba(10,50,50,1)",
  "rgba(10,50,50,1)",
  "#cd934a",
  "#ba4f14",
  "#f5d5a1",
  "#cf8b64",
];
let bodyNAccentCol = getRandomBodyAndAccent();
var theColorSet = {
  bodyMain: bodyNAccentCol.body,
  body2: bodyNAccentCol.body2,
  bodyAccent: bodyNAccentCol.accent,
  earInner: "rgba(255,255,255,0.5)",
};
function getRandomBodyColor() {
  return rndFloat() < 0.2
    ? rndFloat() < 0.5
      ? "black"
      : "white"
    : rndFloat() < 0.2
    ? getBodyAccentColor()
    : rndFloat() < 0.5
    ? getBodyColor2()
    : getBodyColor();
}
function getRandomBodyAndAccent() {
  let body = colors[rndInt(0, colors.length - 1)];
  let body2 = colors[rndInt(0, colors.length - 1)];
  let accent = accentColors[rndInt(0, colors.length - 1)];
  while (accent == body) {
    accent = accentColors[rndInt(0, colors.length - 1)];
  }
  return { body, body2, accent };
}

function getBodyColor() {
  return theColorSet.bodyMain;
}
function getBodyColor2() {
  return theColorSet.body2;
}
function getBodyAccentColor() {
  return theColorSet.bodyAccent;
}
function getEarInnerColor() {
  return theColorSet.earInner;
}
