bgCols = [
  "#FFF5EE", //seashell
  "#fbf6e3", //canvas
  "#E6E0D4", //white coffee
  "#FDDEBD", //butter white
  "#F6FCFA", //white rose
  "#ECECEE", //christmas white
  "#1F201F", //retro black
  "#212122", //ink black
  "#1B1B1B", //eerie black
  "#242124", //raisin black
];

bgNames = [
  "SeaShell",
  "Canvas",
  "White Coffee",
  "Butter White",
  "White Rose",
  "Christmas White",
  "Retro Black",
  "Ink Black",
  "Eerie Black",
  "Raisin Black",
];
//Background color parameters
bgNum = randomInt(0, 9);
bgc = bgCols[bgNum];
bgName = bgNames[bgNum];

//Make a color that always contrasts bgc
calcBgLum = chroma(bgc).luminance();
if (calcBgLum > 0.5) {
  frameCol = 'black'; //black
} else if( calcBgLum < 0.5) {
  frameCol = 'white'; //white
}

//Palettes
//Always include frameCol instead of black or white so our colors don't blend into bgc
const source = [
  "#A6C8CA",
  "#097857",
  "#F1E8D9",
  "#E3CE61",
  "#E35A7E",
  frameCol,
  "#EE692A",
  "#BFCCD4",
  "#217F96",
  "#EBD5D7",
];

const shepard = ["#3D5A80", "#98C1D9", "#E0FBFC", "#FF4D21", "#293241", frameCol];

const toyBlocks = ["#EBB701", "#EA3F23", "#00A2C8", frameCol, "#EAEAEA"];

const soft = [
  "#F94144",
  "#F3722C",
  "#F8961E",
  "#F9844A",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#4D908E",
  "#577590",
  "#277DA1",
  frameCol,
  "white",
];

const jazzy = [
  frameCol,
  "#005f73",
  "#0a9396",
  "#94d2bd",
  "#e9d8a6",
  "#ee9b00",
  "#ca6702",
  "#bb3e03",
  "#ae2012",
  "#9b2226",
];

const ceramic = [
  "#5B476C",
  "#3581AA",
  "#A54B49",
  "#CED8D3",
  "#72BC9C",
  "#D49B8A",
  "#0096C7",
  frameCol,
];



const gorge = [
'#4EA459',
'#47BC89',
'#38928A',
'#E2A48E',
'#C35548',
'#33778A',
'#8BD6E8',
frameCol,
]

const taffy = [
'#4A6978',
'#D5778D',
'#FED786',
'#FDE9C8',
'#FC9FB9',
'#F2B7CB',
'#A4DBD6',
frameCol,
'#57405D',
]

const jetSet = [
'#EE8928',
'#FCD360',
'#DD5253',
'#AA3F6E',
'#70607F',
'#1B91B0',
'#D0A0AA',
frameCol,
'#BD7B96',
'#5E8E9C',
]

const terra = [
'#606c38',
'#283618',
'#fefae0',
'#dda15e',
'#bc6c25',
]

 const seaFoam = [
 "#22577a", "#38a3a5", "#57cc99", "#80ed99", "#c7f9cc", "#f2f9e8", "#f9f9f9"
] //credit Wouter Missler

const pals = [
  source,
  shepard,
  toyBlocks,
  soft,
  jazzy,
  ceramic,
  jetSet,
  taffy,
  gorge,
  terra,
  seaFoam
];

const palNames = [
  "Source",
  "Commander Shepard",
  "Toy Blocks",
  "Soft",
  "Jazzy",
  "Ceramic",
  "Jet Set",
  "Taffy",
  "Gorge",
  "Terra",
  "Sea Foam"
];

//Palette parameters
palNum = randomInt(0, pals.length-1);
pal = pals[palNum];
palName = palNames[palNum];


//Combine palettes and shuffle that full palette
fullPal = [].concat(pal);
truePal = shuff(fullPal);

//Pass our palette back to the CSS spinner
let root = document.documentElement;
root.style.setProperty("--c1", truePal[0]);
root.style.setProperty("--c2", truePal[1]);
root.style.setProperty("--c3", truePal[2]);
root.style.setProperty("--c4", truePal[3]);
