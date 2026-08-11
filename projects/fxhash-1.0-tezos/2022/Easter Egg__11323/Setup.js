let maxDim = 800;
let thePallete =
  Object.keys(colorPalletes)[rndInt(0, Object.keys(colorPalletes).length - 1)];

let width = 2000;
let height = 2000;
let cnv = createCanvas(width, height);
let c = cnv.getContext("2d");
var paused = false;

let bg = createCanvas(width, height);
let cBg = bg.getContext("2d");

let grndCnv = createCanvas(width, height);
let cGround = grndCnv.getContext("2d");

let fgCnv = createCanvas(width, height);
let cforeGround = fgCnv.getContext("2d");

let armLegCnv = createCanvas(width, height);
let cArms = armLegCnv.getContext("2d");

let cont = document.createElement("div");
cont.appendChild(bg);
cont.appendChild(grndCnv);
cont.appendChild(cnv);
cont.appendChild(fgCnv);
cont.appendChild(armLegCnv);
cont.classList.add("canvasCont");
document.body.appendChild(cont);
