// free copyright image: https://openclipart.org/detail/242046/hexagonal-tessellation-design-11
//License.txt

var imgxyfxx = 400 *2;
var imgxy_fxy = 500 *2;
var fxScale = 0.4;
var imgxy;

function preload() {
  imgxy = loadImage("ac11.png");
}

function setup() {
let seed=floor(999999*fxrand());
randomSeed(seed);
noiseSeed(seed);
 createCanvas(imgxyfxx, imgxy_fxy, WEBGL);
  imgxy.resize(imgxyfxx / fxScale, imgxy_fxy / fxScale);

  background(50);
  

  const bb_Width = 8;
  const bb_Height = 5;
  const bb_Depth = 195;
  const hh_Width = width * 1.35;
  const hh_Height = height * 1.35;
  const e = 112.21;

  for (let x = -hh_Width; x < width; x += bb_Width) {
    for (let y = -hh_Height; y < height; y += bb_Height) {
      push();
      translate(x, y);
         var col = imgxy.get(x+width/2, y+height/2);
  var br = (col[0] + col[1] + col[2]) / 4;
  var w = map(br, 0, 255, random(0.05),  random(2));
      var w1 = map(br, 255, 255, 255, 255);
  specularMaterial(col[0] , col[1] , col[2],255)
  shininess(190);
  lights(7.08);
      pointLight(255,255,0,width/2,height,-5700)
      noStroke();

      strokeWeight(w1)
  pointLight(255, 255, 255, 255, 255, 0);
     rotateY(noise(x * e, y * e) * TAU);
      rotateX(noise(x * e, y * e) * TAU);
      rotateZ(noise(x * e, y * e) * TAU);
       box(bb_Width*w, bb_Height*w,bb_Depth* w);
      sphere(bb_Width*w,224,124);
       
     pop();
    }
  }
}
