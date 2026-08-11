//////////////////////COLOR////////////////////////
let palette1 = ["Lofoten flower", "#f1faee", "#e63946", "#e63946"];
let palette2 = ["Athen marbles", "#FFE4D6", "#6d6875", "#e5989b"];
let palette3 = ["Miami drugs", "#94b1ba", "#333442", "#480ca8"];
let palette4 = ["Torino whitches", "#edf2f4", "#2b2d42", "#2b2d42"];
let palette5 = ["Marrakesh smoke", "#d6cbb8", "#414141", "#414141"];
let palette6 = ["Siena pavment", "#2b1113", "#fdf0d5", "#fdf0d5"];
let palette7 = ["Tallin old movie", "#e9ecef", "#6c757d", "#6c757d"];
let palette8 = ["Île de la Cité candies", "#241d2e", "#94b7ad", "#ffffff"];
let palette9 = ["Tokio dripping", "#fdfffc", "#4B4C4B", "#4B4C4B"];
let palette10 = ["São Paulo corner", "#575A5E", "#ffffff", "#ffffff"];

//let colorPalettes = [palette10];
let colorPalettes = [palette1, palette2, palette3, palette4, palette5, palette6, palette7, palette8, palette9, palette10];


let styleNames = [
  "ortho pleausure",
"half pi - half bi" ,
"dozen but for ten",
"30 iso",
"standard-standard",
"g spot",
"hei!"
];


function setColorPalette(palette) {
  let index = Math.floor(palette * colorPalettes.length);
  let currPalette = colorPalettes[index];
  bkgCol = currPalette[1];
  mainCol.push(currPalette[2]);
  borderCol = currPalette[3];
  return currPalette[0];
}

///////////////////////////////////////////////////


function initialSetup(ran) {
  let i = floor( map(ran, 0, 1, 0, 3) );
  switch (i) {
    case 0:
      initialSetup_singleCenter();
      return "center";
      break;
    case 1:
      initialSetup_totalRandom();
      return "total random";
      break;
    case 2:
      initialSetup_singleColumn()
      return "single column";
      break;
    default:
    initialSetup_singleCenter();
    return "center";
      break;
  }
}


function initialSetup_singleCenter() {
  tmpStart = createVector(width * 0.5, height * 0.5);
  let id = myLines.length;
  let r = new Drawer(tmpStart, MIN_LENGHT, STYLE, null, borderStyle.style, id);
  myLines.push(r);

};

function initialSetup_singleColumn() {
  if(borderStyle.style =="square"){

  let NUM_SEEDS = (theSize / MIN_LENGHT) ;
  for (let i = 0; i < NUM_SEEDS; i++) {
    let posY = map(i, 0, NUM_SEEDS, border, height - border);
    tmpStart = createVector(width * 0.5, posY);
    let id = myLines.length;
    let r = new Drawer(tmpStart, MIN_LENGHT, STYLE, null, borderStyle.style, id);
    myLines.push(r);
  }
} else{
  let NUM_SEEDS = (theSize / MIN_LENGHT) ;
  for (let i = 0; i < NUM_SEEDS; i++) {
    let posY = map(i, 0, NUM_SEEDS, height - maxDistCircularBorder, maxDistCircularBorder);
    tmpStart = createVector(width * 0.5, posY);
    let id = myLines.length;
    let r = new Drawer(tmpStart, MIN_LENGHT, STYLE, null, borderStyle.style, id);
    myLines.push(r);
  }
}
};

function initialSetup_totalRandom() {
  for (let i = 0; i < 20; i++) {
    let x = map(fxrand() * width, 0, width, border, width - border);
    let y = map(fxrand() * height, 0, height, border, height - border);
    tmpStart = createVector(x, y);
    let id = myLines.length;
    let r = new Drawer(tmpStart, MIN_LENGHT, STYLE, null, borderStyle.style, id);
    myLines.push(r);
  }
};
