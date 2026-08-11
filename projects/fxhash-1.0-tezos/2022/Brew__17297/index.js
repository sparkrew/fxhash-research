window.addEventListener("resize", () => setTimeout(setup, '1000'));
document.addEventListener('keypress', (event) => {
 const keyName = event.key;
 if(keyName == 's'){
   var canvas = document.getElementById("defaultCanvas0");
 // Convert the canvas to data
 var image = canvas.toDataURL();
 // Create a link
 var aDownloadLink = document.createElement('a');
 // Add the name of the file to the link
 aDownloadLink.download = 'the Brew.png';
 // Attach the data to the link
 aDownloadLink.href = image;
 // Get the code to click the download link
 aDownloadLink.click();
 }
});

var palettes = [{
  colors: ["#800016","#a0001c","#c00021", "#407ba7","#004e89","#002962","#00043a"],
  name: 'Samurai',
  back: '#F2F6FF'
},
{
  colors: ["#c6c013","#ef8a17","#ef2917", "#008148"],
  name: 'Youth',
  back: "#00261A"
},
{
  colors: ["#9E0BAC","#ff0054","#ff5400","#ffbd00"],
  name: 'Priest',
  back: '#1D004E'
},
{
  colors: ['#2659D8', '#1C6FF3', '#5EBC4E', '#53A946', '#F24534'],
  name: 'Demon',
  back: '#EBEBEB'
},
{
  colors: ['#4A5FAB', '#609F5C', '#A27CBA', '#B85031'],
  name: 'Rebirth',
  back: '#F6F0DA'
},
{
  colors: ['#0A71B6', '#F9C40A', '#190506', '#EB5432'],
  name: 'Whirlpool',
  back: '#EAF2F0'
},
{
  colors: ["#298cfe","#bddeff","#3180e2", "#c6f2ff"],
  name: 'Mirror',
  back: '#000128'
},
{
  colors: ["#e970ca","#f98cc8", "#a347c3","#6c88d2"],
  name: 'Bungee',
  back: "#e5ecf4"

},
{
  colors: ["#d47428","#4a2c19", "#90897b","#399830","#d24220","#A58763","#4f5035"],
  name: 'Rock-Paper-Scissors',
  back: "#dcdae2"
},
{
  colors: ["#876659","#e67a4e","#3d3c41","#2e2e2c", "#876659","#e67a4e","#3d3c41","#2e2e2c", "#876659","#e67a4e","#3d3c41","#2e2e2c", '#5D8B57'],
  name: 'Crow',
  back: "#d9c9c9"

},
{
  colors: ["#c3332a","#f58017","#943bbd","#fa8963","#85516f","#652438"],
  name: 'Flute',
  back: "#362641"
},
{
  colors: ["#b81d24","#221f1f","#2e2c2c","#393838"],
  name: 'Entropy',
  back: "#f5f5f1"
},
{
  colors: ["#b01600","#bc302d","#fddbd9","#5d5d79","#353447","#0088dd","#0067be"],
  name: 'Ultra',
  back: "#fcfefc"
},
{
  colors: ["#f74835","#4e5b87", "#38383a","#55865A"],
  name: 'Hazard',
  back: "#c2c9d1"
},
{
  colors: ["#0a090c","#07393c","#2c666e","#90ddf0"],
  name: 'Warrior',
  back: "#f0edee"
},
{
  colors: ["#90fcf9","#63b4d1","#7699d4","#9448bc"],
  name: 'Revenge',
  back: "#480355"
},
{
  colors: ["#ffba49","#20a39e","#ef5b5b","#23001e"],
  name: 'Successor',
  back: "#EEF0F1"
},
{
  colors: ["#134611","#3e8914","#ffaa00","#ff5400"],
  name: 'Navigator',
  back: "ffc9b9",
},
{
  colors: ["#fffcf2",'#E6E1D6',"#ccc5b9",'#868179', "#403d39","#9E4B2A"],
  name: 'Name',
  back: "#252422"

},
{
  colors: ["#3d3b8f","#160e81","#b082a2","#f0d9fd","#d098eb","#703468","#41284f","#231d26","#0f0317"],
  name: 'Pumpkin',
  back: "#f5f4f6"
}
];


var pal = palettes[Math.floor(fxrand()*palettes.length)];
//var pal = palettes[(palettes.length-2)];
var BACK = pal.back;


var noiseTypes = [{name: 'Cells', check: true},
                  {name: 'Landscape', check: false}]
var maxcolors = Math.floor(Math.sqrt(fxrand())*(pal.colors.length))+1
var noiseType = noiseTypes[Math.floor(fxrand()*2)]

var scales = ['XS', 'S', 'M', 'L', 'XL', 'XXL']


var shapes = [
  {name: 'Squares',
  check: true},
  {name: 'Rectangles',
check: false}
]
var shape = shapes[Math.floor(fxrand()*2)]

var thicknessprob = fxrand()
var thickness = ((thicknessprob)*0.9+0.1)*3;

var detailsprob = fxrand()
var details = Math.pow(detailsprob, 2)*50*maxcolors/thickness

var mainNoise = Math.floor(99999999*fxrand())
var ab = {bool: [], info: []}
var bc = {bool: [], info: []}
var ca = {bool: [], info: []}
var nprob = fxrand()
var n = 10 + Math.floor(nprob*nprob*30);
construct(ab)
construct(bc)
construct(ca)


window.$fxhashFeatures = {
  'Palette': pal.name,
  'Color Distrubution': noiseType.name,
  'Shapes': shape.name,
  'Max colors per cell': maxcolors,
  'Texture scale': scales[Math.floor(detailsprob*6)],
  'Grid scale': scales[Math.floor((nprob*6))],
  'Brush thickness': scales[Math.floor((thicknessprob*6))]
}

console.log(window.$fxhashFeatures)

var alph = 50;
var sw;
var bc;
var sf;

function setup() {
	createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight));
  sw = width/200
  sf = details/width;
  for(let i = 0; i < pal.colors.length; i++){
    pal.colors[i] = color(pal.colors[i])
    pal.colors[i].setAlpha(alph)
  }

  bcol = color(BACK)
  bcol.setAlpha(alph)
  translate(width/2, height/2)
  scale(1, -1)
  let a, b, c;
  let stop = true;
  let f = width/2.3/n;
  a = createVector(1, 0);
  a.mult(f);
  a.rotate(PI/6);
  b = a.copy();
  b.rotate(2*PI/3);
  c = b.copy();
  b.rotate(2*PI/3)
  rectMode(CENTER)

  background(BACK);
  build(ab.info, a, b)
  build(bc.info, b, c)
  build(ca.info, c, a)

  noLoop()
  fxpreview()

}




	function add(x, y){
		return createVector(x.x + y.x, y.y + x.y);
	}

	function mult(x, a){
		return createVector(x.x*a, x.y*a);
	}


  function build(info, a, b){
    for(let block of info){
      drawblock(block, a, b)
   }
  }

function drawblock(block, a, b){
  randomSeed(block.seed)
  noiseSeed(block.seed)

  let p1, p2, p3, p4;
  p1 = add( mult(a, block.start.i), mult(b, block.start.j) )
  p2 = add( mult(a, block.end.i), mult(b, block.start.j) )
  p3 = add( mult(a, block.end.i), mult(b, block.end.j) )
  p4 = add( mult(a, block.start.i), mult(b, block.end.j) )


  let col;
  let p01, p02;
  let u1, u2, p, trans;
  let ns;
  let nc;
  let pts;
  let arr;
  let cols;

  p01 = mult(a, block.sx)
  p02 = mult(b, block.sy)
  if(noiseType.check){
    cols = [];
    pts = [];
    for(let i = 0; i < max(block.sx, block.sy)*details/10; i++){
      pts.push(createVector(random(), random()))
      cols.push(pal.colors[block.colors[i%maxcolors]])
    }
  } else {
    cols = [];
    for(let i = 0; i<maxcolors; i++){
      cols.push(pal.colors[block.colors[i]]);
    }
  }

  noStroke()
  for(let i = 0; i < 20000*(block.sx)*(block.sy)/n/n; i++){
    u1 = random()
    u2 = random()
    p = createVector(p1.x + p01.x * u1 + p02.x * u2, p1.y + p01.y * u1 + p02.y * u2)

    if(noiseType.check){
      arr = worley(u1, u2, pts)
      ns = sqrt(arr[0])
      col = cols[arr[1]]
    } else {
      ns = noise(p.x*sf+10000, p.y*sf+10000)
      col = cols[Math.floor(ns*maxcolors)];
      ns = ((fract(ns*maxcolors)))

    }

    nc = lerpColor(col, bcol, ns)
    fill(nc)
    push();
    translate(p.x, p.y);
    rotate(ns*TAU)
    rect(0, 0, sw*5, sw*thickness)
    pop();
    }

    stroke(BACK)
    noFill()
    strokeWeight(sw)
    beginShape();
    vertex(p1.x, p1.y);
    vertex(p2.x, p2.y);
    vertex(p3.x, p3.y);
    vertex(p4.x, p4.y);
    endShape(CLOSE);
}

  function construct(arr){


    for(let i = 0; i < n; i++){
    	arr.bool.push([]);
    	for(let j = 0; j < n; j++){
    		arr.bool[i].push(true);
    	}
    }


    for(let i = 0; i < n; i++){
    	for(let j = 0; j < n; j++){
    		if(arr.bool[i][j]){
    			let fits = false;
          let sx, sy;
    			while(!fits){
    				fits = true
    				sx = Math.floor(Math.sqrt(fxrand())*10)+1
            if(shape.check){
              sy = sx
            } else {
              sy = Math.floor(Math.sqrt(fxrand())*10)+1
            }
    				if(i+sx > n || j + sy > n){
    					fits = false
    				} else {
    					for(let ki = i; ki < i+sx && fits; ki++){
    						for(let kj = j; kj < j+sy && fits; kj++){
    							fits = arr.bool[ki][kj]
    						}
    					}
    				}
    			}
            for(let ki = i; ki < i+sx; ki++){
              for(let kj = j; kj < j+sy; kj++){
                arr.bool[ki][kj] = false;
              }
          }

          let colors = []
          for(let c = 0; c < maxcolors; c++){
            colors.push(Math.floor(fxrand()*pal.colors.length))
          }
          arr.info.push({start: {i: i, j: j}, end: {i: i+sx, j: j+sy}, seed: fxrand()*9999999, sx: sx, sy: sy, colors: colors})

    		}
    	}
    }

    arr.info = shuffle(arr.info)
  }

  function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(fxrand() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function wow(x, y){
  return sin(x)
}

function worley(x, y, pts){
  let i = 0;
  let p = pts[0];
  let md = dist(x, y, p.x, p.y);
  let d;
  for(let j = 1; j < pts.length; j++){
    d = dist(x, y, pts[j].x, pts[j].y)
    if( d < md ){
      md = d;
      i = j;
      p = pts[j]
    }
  }
  return [md/1.4142135623, i];
}
