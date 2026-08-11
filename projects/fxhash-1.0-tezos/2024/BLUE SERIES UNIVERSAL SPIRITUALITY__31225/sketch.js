// a shader variable
let theShader;
const isMob = /Android|webOS|iPhone|iPad|IEMobile|Opera Mini/i.test(navigator.userAgent);

color1 =[
  ["0.4"],
  ["1.5"],
  ["2.5"],
  ["3.5"],
  ["4.1"],
  ["5.3"],
  ["6.9"],
  ["7.6"],
  ["8.5"],
  ["9.2"],
];

color2 =[
  ["0.4"],
  ["1.5"],
  ["2.5"],
  ["3.5"],
  ["4.1"],
  ["5.3"],
  ["6.9"],
  ["7.6"],
  ["8.5"],
  ["9.2"],
];

color3 =[
  ["0.4"],
  ["1.5"],
  ["2.5"],
  ["3.5"],
  ["4.1"],
  ["5.3"],
  ["6.9"],
  ["7.6"],
  ["8.5"],
  ["9.2"],
];

lungh =[
  ["1.0"],
  ["0.5"],
  ["1.5"],
  ["0.8"],
  ["1.3"],
];

lungh1 =[
  ["1.0"],
  ["0.5"],
  ["1.5"],
  ["0.8"],
  ["1.3"],
];

des =[
  ["0.69"],
  ["0.93"],
  ["0.72"],
  ["0.66"],
  ["0.81"],
  ["0.61"],
  ["0.82"],
  ["0.62"],
  ["0.77"], 
  ["0.86"],
  ["0.90"], 
];

visu =[
  ["0.4"],
  ["3.4"],
  ["1.2"],
  ["2.0"],
  ["5.0"],
  ["2.7"],
  ["4.2"],
  ["5.9"],
];

visu1 =[
  ["0.4"],
  ["3.4"],
  ["1.2"],
  ["2.0"],
  ["5.0"],
  ["2.7"],
  ["4.2"],
  ["5.9"],
];

visu2 =[
  ["0.4"],
  ["3.4"],
  ["1.2"],
  ["2.0"],
  ["5.0"],
  ["2.7"],
  ["4.2"],
  ["5.9"],
];

visu3 =[
  ["3.4"],
  ["1.6"],
  ["2.0"],
  ["3.7"],
  ["2.7"],
  ["4.3"],
  ["4.0"],
];

velRot =[
  ["1.4"],
  ["1.2"],
  ["2.0"],
  ["0.6"],
  ["1.0"],
  ["1.8"],
  ["2.4"],
];

velRot1 =[
  ["2.0"],
  ["1.4"],
  ["4.2"],
  ["2.7"],
  ["3.6"],
  ["1.0"],
  ["5.0"],
];

velRot2 =[
  ["2.0"],
  ["1.4"],
  ["4.2"],
  ["2.7"],
  ["3.6"],
  ["1.0"],
  ["5.0"],
];

luci1 =[
  ["0.0009"],
  ["0.001"],
  ["0.003"],
  ["0.007"],
  ["0.005"],
  ["0.009"],
];

luci2 =[
  ["0.0005"],
  ["0.00055"],
  ["0.0007"],
  ["0.0004"],
  ["0.0006"],
];

luci3 =[
  ["0.0009"],
  ["0.001"],
  ["0.003"],
  ["0.007"],
  ["0.005"],
  ["0.009"],
];

luci4 =[
  ["0.0005"],
  ["0.00055"],
  ["0.0007"],
  ["0.0004"],
  ["0.0006"],
];

luci5 =[
  ["0.0009"],
  ["0.001"],
  ["0.003"],
  ["0.007"],
  ["0.005"],
  ["0.009"],
];

luci6 =[
  ["0.0005"],
  ["0.00055"],
  ["0.0007"],
  ["0.0004"],
  ["0.0006"],
];

palette1 = color1[Math.floor($fx.rand()*color1.length)];
palette2 = color2[Math.floor($fx.rand()*color2.length)];
palette3 = color3[Math.floor($fx.rand()*color3.length)];
lunghezza = lungh[Math.floor($fx.rand()*lungh.length)];
lunghezza1 = lungh1[Math.floor($fx.rand()*lungh1.length)];
design1 = des[Math.floor($fx.rand()*des.length)];
visuale1 = visu[Math.floor($fx.rand()*visu.length)];
visuale2 = visu1[Math.floor($fx.rand()*visu1.length)];
visuale3 = visu2[Math.floor($fx.rand()*visu2.length)];
visuale4 = visu3[Math.floor($fx.rand()*visu3.length)];
speed = velRot[Math.floor($fx.rand()*velRot.length)];
speed1 = velRot1[Math.floor($fx.rand()*velRot1.length)];
speed2 = velRot2[Math.floor($fx.rand()*velRot2.length)];
light1 = luci1[Math.floor($fx.rand()*luci1.length)];
light2 = luci2[Math.floor($fx.rand()*luci2.length)];
light3= luci3[Math.floor($fx.rand()*luci3.length)];
light4 = luci4[Math.floor($fx.rand()*luci4.length)];
light5 = luci5[Math.floor($fx.rand()*luci5.length)];
light6 = luci6[Math.floor($fx.rand()*luci6.length)];



function randf(min, max){
  return Math.round($fx.rand() * (max-min) + min);
}

function preload(){
  // load the shader
  theShader = loadShader('example.vert', 'example.frag');
  img = loadImage('texture.png')
}

function setup() {
  randomSeed(randf(0,1000));
  noiseSeed(randf(0,1000));
  // shaders require WEBGL mode to work
  createCanvas(windowWidth, windowHeight, WEBGL);

  (isMob) ? pixelDensity(1): pixelDensity(min(window.devicePixelRatio), 2);
  noStroke();
}

function draw() { 
  
  // shader() sets the active shader with our shader
  shader(theShader);

  let pal1 = palette1[Math.floor($fx.rand()*palette1.length)];
  let pal2 = palette2[Math.floor($fx.rand()*palette2.length)];
  let pal3 = palette3[Math.floor($fx.rand()*palette3.length)];
  let lun1 = lunghezza[Math.floor($fx.rand()*lunghezza.length)];
  let lun2 = lunghezza1[Math.floor($fx.rand()*lunghezza1.length)];
  let des1 = design1[Math.floor($fx.rand()*design1.length)];
  let vis1 = visuale1[Math.floor($fx.rand()*visuale1.length)];
  let vis2 = visuale2[Math.floor($fx.rand()*visuale2.length)];
  let vis3 = visuale3[Math.floor($fx.rand()*visuale3.length)];
  let vis4 = visuale4[Math.floor($fx.rand()*visuale4.length)];
  let spd1 = speed[Math.floor($fx.rand()*speed.length)];
  let spd2 = speed1[Math.floor($fx.rand()*speed1.length)];
  let spd3 = speed2[Math.floor($fx.rand()*speed2.length)];
  let lgh1 = light1[Math.floor($fx.rand()*light1.length)];
  let lgh2 = light2[Math.floor($fx.rand()*light2.length)];
  let lgh3 = light3[Math.floor($fx.rand()*light3.length)];
  let lgh4 = light4[Math.floor($fx.rand()*light4.length)];
  let lgh5 = light5[Math.floor($fx.rand()*light5.length)];
  let lgh6 = light6[Math.floor($fx.rand()*light6.length)];


  theShader.setUniform("iResolution", [width, height]);
  theShader.setUniform("iTime", millis() / 1000.0);
  theShader.setUniform("uPal1", pal1);
  theShader.setUniform("uPal2", pal2);
  theShader.setUniform("uPal3", pal3);
  theShader.setUniform("uLun1", lun1);
  theShader.setUniform("uLun2", lun2);
  theShader.setUniform("uDes1", des1);
  theShader.setUniform("uVis1", vis1);
  theShader.setUniform("uVis2", vis2);
  theShader.setUniform("uVis3", vis3);
  theShader.setUniform("uVis4", vis4);
  theShader.setUniform("uSpeed1", spd1);
  theShader.setUniform("uSpeed2", spd2);
  theShader.setUniform("uSpeed3", spd3);
  theShader.setUniform("uLgh1", lgh1);
  theShader.setUniform("uLgh2", lgh2);
  theShader.setUniform("uLgh3", lgh3);
  theShader.setUniform("uLgh4", lgh4);
  theShader.setUniform("uLgh5", lgh5);
  theShader.setUniform("uLgh6", lgh6);
  theShader.setUniform("tex0", img);
  
  // Set the texture mode.
  textureMode(NORMAL);

  // Set the texture wrapping.
  // Note: CLAMP is the default mode.
  textureWrap(REPEAT);

  // Apply the image as a texture.
  texture(img);

  // Style the shape.
  noStroke();
  
  rect(0,0,width,height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}