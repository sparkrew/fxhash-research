let seed = fxrand() * 9e15;

inv = fxrand();

INV1 = inv > 0.9 ? 1 : 0

g = fxrand();

GRA = g > 0.85 ? 30 : g > 0.5 ? 20 : 10;

fioA = fxrand();

fio = fioA > 0.75 ? 0 : fioA > 0.4 ? 1 : 2;

ouriA = fxrand();

ouri1 = ouriA > 0.9 ? 3 : ouriA > 0.6 ? 2 : ouriA > 0.3 ? 1 : 0

form = fxrand();

form2 = form > 0.8 ? 8 : form > 0.6 ? 7 : form > 0.4 ? 6 : form > 0.2 ? 5 : form > 0.1 ? 4 : 3;

pig1 = [
  "#f72585",  "#b5179e",  "#7209b7",  "#560bad",  "#480ca8",  "#3a0ca3",  "#3f37c9",  "#4361ee",  "#4895ef",  "#4cc9f0",  "#f72585",  "#b5179e",  "#7209b7",  "#560bad",  "#480ca8",  "#3a0ca3",  "#3f37c9",  "#4361ee",];
//SENA
pig2 = [
  "#999999",  "#566069",  "#242525",  "#314650",  "#122833",  "#999999",  "#566069",  "#242525",  "#314650",  "#122833",  "#707070",  "#566069",  "#242525",  "#314650",  "#122833",  "#999999",  "#566069",  "#314650", ]; //GRAY

pig3 = [
  "#333d29",  "#333d29",  "#656d4a",  "#848D45",  "#8F8259",  "#967447",  "#936639",  "#7f4f24",  "#582f0e",  "#333d29",  "#333d29",  "#656d4a",  "#7B8537",  "#7E6F41",  "#a68a64",  "#936639",  "#7f4f24",  "#582f0e", ]; //SOLDIER

pig4 = [
  "#F44336",  "#E91E63",  "#9C27B0",  "#673AB7",  "#3F51B5",  "#2196F3",  "#03A9F4",  "#00BCD4",  "#009688",  "#4CAF50",  "#8BC34A",  "#CDDC39",  "#FFC107",  "#FF9800",  "#FF5722",  "#795548",  "#9E9E9E",  "#607D8B",];
//VENEZA
pig5 = [
  "#03071e",  "#370617",  "#6a040f",  "#9d0208",  "#d00000",  "#dc2f02",  "#e85d04",  "#f48c06",  "#faa307",  "#ffba08",  "#6a040f",  "#9d0208",  "#d00000",  "#dc2f02",  "#e85d04",  "#f48c06",  "#faa307",  "#ffba08", ];
//PETRA
pig6 = [  "#8B9C4F",  "#6E9B47",  "#559947",  "#42945F",  "#38947A",  "#25898D",  "#168aad",  "#1a759f",  "#1e6091",  "#184e77",  "#839448",  "#78A84E",  "#4E9B3F",  "#429C62",  "#319679",  "#34a0a4",  "#168aad",  "#1a759f", ];
//CHATEAU
pig7 = [
  "#9b2226",  "#ae2012",  "#bb3e03",  "#ca6702",  "#ee9b00",  "#e9d8a6",  "#94d2bd",  "#0a9396",  "#005f73",  "#001219",  "#9b2226",  "#ae2012",  "#bb3e03",  "#ca6702",  "#ee9b00",  "#e9d8a6",  "#94d2bd",  "#0a9396", ];
// LAC
pig8 = [
  "#DF3136",  "#D3A321",  "#8ED819",  "#148BD6",  "#611CC0",  "#DF3136",  "#D3A321",  "#8ED819",  "#148BD6",  "#611CC0",  "#DF3136",  "#D3A321",  "#8ED819",  "#148BD6",  "#611CC0",  "#DF3136",  "#D3A321",  "#8ED819",  "#148BD6"]; // NEON

pig9 = [
  "#00296b",  "#ffee32",  "#00509d",  "#BC960E",  "#BEA522",  "#00296b",  "#ffee32",  "#00509d",  "#BEA522",  "#ffd500",  "#00296b",  "#ffee32",  "#00509d",  "#BC960E",  "#BEA522",  "#00296b",  "#ffee32",  "#00509d",  "#BEA522",];

pig10 = [
  "#007f5f",  "#2b9348",  "#55a630",  "#80b918",  "#87BB44",  "#bfd200",  "#06B903",  "#00AF6C",  "#C9CA16",  "#87BB44",  "#007f5f",  "#2b9348",  "#55a630",  "#80b918",  "#87BB44",  "#bfd200",  "#06B903",  "#00AF6C",  "#C9CA16"]; //LEMON

pig11 = [
  "#03045e",  "#2948AA",  "#2398AF",  "#3D64C7",  "#0FB2FC",  "#03045e",  "#0077b6",  "#00b4d8",  "#90e0ef",  "#709097",  "#03045e",  "#2948AA",  "#2398AF",  "#3D64C7",  "#0FB2FC",  "#03045e",  "#0077b6",  "#00b4d8",  "#90e0ef"]; //BLUE SKY 

pig12 = [
  "#5f0f40", "#9a031e", "#fb8b24", "#e36414", "#0f4c5c", "#5f0f40", "#9a031e", "#fb8b24", "#e36414", "#0f4c5c", "#5f0f40", "#9a031e", "#fb8b24", "#e36414", "#0f4c5c", "#5f0f40", "#9a031e", "#fb8b24", "#e36414"]; //

pig13 = [
  "#011627",  "#7A7A7A",  "#2ec4b6",  "#e71d36",  "#ff9f1c",  "#011627",  "#7A7A7A",  "#2ec4b6",  "#e71d36",  "#ff9f1c",  "#011627",  "#7A7A7A",  "#2ec4b6",  "#e71d36",  "#ff9f1c",  "#011627",  "#7A7A7A",  "#2ec4b6",  "#e71d36"]; //

pig14 = [
  "#9e0031",  "#8e0045",  "#770058",  "#600047",  "#44001a",  "#9e0031",  "#8e0045",  "#770058",  "#600047",  "#44001a",  "#9e0031",  "#8e0045",  "#770058",  "#600047",  "#44001a",  "#9e0031",  "#8e0045",  "#770058",  "#600047"]; //VAMP

pig15 = [
  "#132a13",  "#31572c",  "#4f772d",  "#90a955",  "#959C43",  "#132a13",  "#31572c",  "#4f772d", "#7E9C39", "#939B33",  "#132a13",  "#31572c",  "#4f772d",  "#90a955",  "#A0A836",  "#132a13",  "#31572c",  "#4f772d",  "#6E882F",]; //GREEN SOLDIER

pig = [  pig1,  pig2,  pig3,  pig4,  pig5,  pig6,  pig7,  pig8,  pig9,  pig10,  pig11,  pig12,  pig13,  pig14,  pig15,];

// coolorN = 5

corn = fxrand()

coolorN = corn > 0.95 ? 0 : corn > 0.9 ? 1 : corn > 0.85 ? 2 : corn > 0.75 ? 3 : corn > 0.65 ? 4 : corn > 0.6 ? 5 : corn > 0.5 ? 6 : corn > 0.4 ? 7 : corn > 0.35 ? 8 : corn > 0.3 ? 9 : corn > 0.25 ? 10 : corn > 0.15 ? 11 : corn > 0.1 ? 12 : corn > 0.05 ? 13 : 14;         

coolor = pig[coolorN];

coolor1 = rnd_int(0, 17);
coolor2 = rnd_int(0, 17);
coolor3 = rnd_int(0, 17);
coolor4 = rnd_int(0, 17);

a1 = rnd_btw(0.1, 0.2);
a2 = rnd_btw(0.1, 0.2);
a3 = rnd_btw(0.1, 0.2);
a4 = rnd_btw(0.1, 0.2);
a5 = rnd_btw(0.95, 1);
a6 = 1;


  A = form <= 0.4 ? rnd_int(5, 6) : rnd_int(6, 10);
  B = form <= 0.4 ? rnd_int(5, 6) : rnd_int(6, 10);

  c = fxrand()
  C = c > 0.5 ? 2.5 : 5
  d = fxrand()
  D = d > 0.5 ? 15 : 10
  e = fxrand()
  E = e > 0.5 ? 2 : 4
  f = fxrand()
  F = f > 0.7 ? 3.5 : f > 0.4 ? 5 : 7.5
  g = fxrand()
  G = g > 0.5 ? 5 : 10
  h = fxrand()
  H = h > 0.5 ? 2.5 : 5
  k = fxrand()
  K = k > 0.5 ? 2.5 : 5
  l = fxrand()
  L = k > 0.5 ? 2.5 : 5
  m = fxrand()
  M = m > 0.5 ? 500 : 0
  N = rnd_int(1,8)
  O = rnd_int(1,6)
  P = rnd_int(1,6)

function setup() {
  let canvas = createCanvas(
    windowWidth > windowHeight ? windowHeight : windowWidth,
    windowHeight < windowWidth ? windowHeight : windowWidth
  );
  xW = width;
  yH = height;
  colorMode(RGB, 255);
  randomSeed(seed);

}

function draw() {
  background("#ECE9DE");
  rectMode(CENTER);
  shuffle(coolor, true);

  el1();
  filter(BLUR, 5);
  granulate(GRA);

  translate(xW / 2, yH / 2);

  switch (fio) {
        case 0:
      fio1();
      break;
    case 1:
      fio2();
      break;
          case 2:
      fio3();
      break;
    default:
  }

  ouri();

  push();
  noFill();
  strokeWeight(xW / 15);
  stroke("#ECE9DE");
  rect(0, 0, xW, yH);
  pop();

  if (inv > 0.9) {
    filter(INVERT)
  }
  
  noLoop();
  fxpreview();
}

window.$fxhashFeatures = {MOTIF:getMOTIF(form2),FIL:getFIL(fio),COULEUR:getPIG(coolorN),BATTERIE:getEL(ouri1),  GRAIN:getGRAIN(GRA), INVERT:getINVERT(INV1) }

function getMOTIF(form2) {
  if (form2 == 8) return "OCTO";
  if (form2 == 7) return "HEPTA";
  if (form2 == 6) return "HEXA";
  if (form2 == 5) return "PENTA";
  if (form2 == 4) return "TETRA";
  if (form2 == 3) return "TRI";
}

function getFIL(fio) {
  if (fio == 0) return "LINGE";
  if (fio == 1) return "TAPIS";
  if (fio == 2) return "RIDEAU";
}

function getPIG(coolorN) {
  if (coolorN == 0) return "I";
  if (coolorN == 1) return "II";
  if (coolorN == 2) return "III";
  if (coolorN == 3) return "IV";
  if (coolorN == 4) return "V";
  if (coolorN == 5) return "VI";
  if (coolorN == 6) return "VII";
  if (coolorN == 7) return "VIII";
  if (coolorN == 8) return "IX";
  if (coolorN == 9) return "X";
  if (coolorN == 10) return "XI";
  if (coolorN == 11) return "XII";  
  if (coolorN == 12) return "XIII";
  if (coolorN == 13) return "XIV";
  if (coolorN == 14) return "XV";
}

function getEL(ouri1) {
  if (ouri1 == 0) return "I";
  if (ouri1 == 1) return "II";
  if (ouri1 == 2) return "III";
  if (ouri1 == 3) return "MINI";
}

function getGRAIN(GRA) {
  if (GRA == 30) return "+++";
  if (GRA == 20) return "++";
  if (GRA == 10) return "+";
}

function getINVERT(INV1) {
  if (INV1 == 1) return "TRUE";
  if (INV1 == 0) return "NOPS";

}






//.....................................................................................................................

function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}

function rnd_btwexp(min, max) {
  return fxrand() ** 2 * (max - min) + min;
}

function rnd_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}
