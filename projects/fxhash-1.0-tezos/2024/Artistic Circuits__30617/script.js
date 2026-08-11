
let palette = ["#4b3832", "#854442", "#fff4e6", "#3c2f2f", "#be9b7b", "#0c343d", "#c56706", "#101010", "#BFA2DB", "#151515", "#F8F6F4"]
let backg = ["#e2e7dc", "#202020", "#fffceb", "#ff9e66", "#404040"]
const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);

function preload() {
  const seed = Math.round($fx.rand() * 2e9);
  randomSeed(seed);
  noiseSeed(seed);
  brush.seed(seed);
}

function setup() {
  (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);
   createCanvas(1600,2048, WEBGL);
   angleMode(DEGREES);
   background(random(backg));
}

function draw() {
   brush.scaleBrushes(3);
   translate(-width/2,-height/2)
   brush.field("truncated")
   let available_brushes = ["marker2", "marker", "2H", "HB", "charcoal", "cpencil", "pen"];
   
   for (let j = 0; j < random(50,100); j++) {
   brush.stroke(random(palette));
   brush.set(random(available_brushes), random(palette), random(0.2,5));
   brush.clip([40,40,1560,2008]);
   brush.strokeWeight(0.2);

 let l1 = Math.floor(random(width));
 let l2 = Math.floor(random(height));
 let l3 = Math.floor(random(width));
 let l4 = Math.floor(random(height));
 let l5 = Math.floor(random(width));
 let l6 = Math.floor(random(height));

   for (let i = 0; i < random(height); i++) {

   brush.rect(i, l6, i, l3);
   brush.rect(l4, l1, l6, i);
   brush.rect(l1, l2, i, l4);
   brush.rect(l5, i, l2, i);

      }
noLoop();
   }
}