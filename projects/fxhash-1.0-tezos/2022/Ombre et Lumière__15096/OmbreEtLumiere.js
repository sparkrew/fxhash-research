/*/////////////////////////////////////////////
     //[ Ombre et Lumière  by DigibitArt - 2022 ] //
/////////////////////////////////////////////*/
///  p5.min.js =>license_p5.txt



let fx = fxrand();
let fxWeight= 0.2+ (fx*7);
let fxWeight2 = 0.5+ (fx*3);
let fxStroke = (1+( Math.floor(fxrand()*8)))/10;
let fxTile =1+( Math.floor(fxrand()*9));
let fxTile2 = 1+(Math.floor(fxTile*fxrand()));
let fxDecal = Math.floor(fxrand()*1500)+50;
let fxDecal2 = 1000- Math.floor(fxrand()*2500)+50;
let fxDecalDisplay =  Math.floor(fxDecal2 / 100);
let tileCountX = fxTile;
let tileCountY = fxTile;
let fxMath = Math.floor(fx);
let palette = ["#F49D37", "#3F88C5", "#A09CB0", "#FE3FA2", "#987D7C", "#A3B9C9", "#FFC15E", "#F7B05B", "#F7934C", "#CC5803", "#B9D6F2", "#0353A4", "#006DAA", "#EEFCCE", "#F1DB4B", "#EDFF71", "#28AFB0", "#F4D35E", "#EE964B", "#F3B884", "#F1DEDE", "#D496A7", "#6CD4FF", "#FE938C", "#E9FAE3", "#DEE8D5", "#D5C7BC", "#AC92A6", "#DDA3B2", "#FFADC6", "#E3C5BB", "#F15BB5", "#DFE2CF", "#B7F0AD", "#EDFF7A", "#9B5DE5", "#00BBF9", "#F7E733", "#00F5D4", "#E0CA3C", "#FFB86F", "#CE4257", "#FF7F51", "#E86A92", "#E0E2DB", "#D2D4C8", "#D3EFBD", "#F7931B","#81171B", "#C75146", "#EA8C55", "#540804", "#81171B", "#D9ED92", "#168AAD", "#184E77", "#FFC300", "#5E548E", "#0A9396", "#94D2BD", "#F28482", "#669BBC", "#14213D", "#3A5A40", "#A3B18A", "#E5E5E5", "#0096C7", "#C8B6FF", "#B0C4B1", "#BFDBF7", "#00B4D8", "#598392", "#9C89B8", "#25CED1", "#A5A58D", "#EF8354", "#BEE3DB", "#4F5D75", "#80CED7", "#DDE7C7", "#8E9AAF", "#8AA29E"  ,"#fb8500" ,"#ffd166" ,"#ff006e" ,"#a8dadc" ,"#457b9d" ,"#ccd5ae" ,"#2a9d8f" ,"#e9c46a" ,"#ffc8dd" ,"#bde0fe" ,"#be95c4" ,"#5e548e" ,"#e5989b" ,"#d00000" ,"#ffc300" ,"#eaf4f4" ,"#6b9080" ,"#d9d9d9" ,"#284b63" ,"#b9fbc0" ,"#9a8c98" ,"#e56b6f" ,"#6d597a" ,"#ff99c8" ,"#e4c1f9" ,"#dddf00" ,"#468faf" ,"#a9d6e5" ,"#f5dd90" ,"#b33f62"];
 
let palette1 = palette[Math.floor(fx*(palette.length))];
let paletteC = invertColor(palette1);
let palette2 = paletteC.toUpperCase();
console.log (Math.floor(fx*(palette.length)));
console.log((Math.floor(fxWeight*10))/10);
console.log((Math.floor(fxWeight2*10))/10);

console.log(fxTile2);
console.log(fxDecal);
console.log(fxDecal2);

function setup() {
createCanvas(1200,1200).parent("screen");

}

function draw() {

	console.log (palette1);
	console.log (palette2);
background(0);
//stroke(palette2);
count = fxDecal / 20 + 5;
let decal = fxDecal2 / height - 0.5;
let tileWidth = width / fxTile;
let tileHeight = height / fxTile2;
for (let gridY = 0; gridY <= tileCountY; gridY++) {
for (let gridX = 0; gridX <= tileCountX; gridX++) {
let posX = tileWidth * gridX + tileWidth / 2;
let posY = tileHeight * gridY + tileHeight / 2;
push();
translate(posX, posY);
for (let i = 0; i <= count; i++) {
	squareColor = color(palette1); 
  squareColor.setAlpha( 128+128 * sin(millis() / 2000));	
  squareColor2 = color(palette2);
  squareColor2.setAlpha( 128+128 * sin(millis() / 3000));
	
	
stroke(squareColor);strokeWeight(fxWeight2);
line(decal * tileWidth, decal * tileHeight, tileWidth / 2, (i / count - 0.5) * tileHeight);
line(decal * tileWidth, decal * tileHeight, -tileWidth / 2, (i / count - 0.5) * tileHeight);
stroke(squareColor2);strokeWeight(fxWeight);
line(decal * tileWidth, decal * tileHeight, (i / count - 0.5) * tileWidth, tileHeight / 2);
line(decal * tileWidth, decal * tileHeight, (i / count - 0.5) * tileWidth, -tileHeight / 2);
        }
 pop();
// noLoop();
 }
  }
  
}

///////// invert color https://stackoverflow.com/questions/35969656 // https://github.com/onury/invert-color MIT license//////////////
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
///////////////////////////// END ///////////////

function pause() { noLoop();}
function launch() { loop();}
function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas('DigibitART_Ombre-et-Lumiere.png');
  if (key == 'p' || key == 'P') pause();
  if (key == 'l' || key == 'L') launch();
}

window.$fxhashFeatures = {
	"Color": palette1,
	"Complement": palette2,
	"Columns": fxTile,
    "Verticale": fxTile2,
    "Finesse": fxStroke*10,
    "Décalage": fxDecalDisplay
 }


fxpreview();