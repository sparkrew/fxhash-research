// in this sketch we're going to create a feedback effect by repeatedly sending the same image back to the shader and performing a slight modification
// click the mouse to get things started

// the shader variable
let camShader;

// the camera variable
let cam;

let startTime=10000*fxrand();
let time=startTime;

// we will need at least two layers for this effect
let shaderLayer;
let copyLayer;
let shapeLayer;
let rand=[
  fxrand(),
  fxrand(),
  fxrand(),
  fxrand()
];
let rand2=[
  fxrand(),
  fxrand(),
  fxrand(),
  fxrand()
];

let colors=[
  ["#F67A41","#8438AC","#C52C9F","#FDBC57","#F78F31","#CC2A94","#E93E5A","#FDBB51","#C8C8C8","#F8742A","#C8C8C8","#D82B7F","#FFFFFF","#FFFFFF","#FFFFFF","#9F359A","#C8C8C8","#7F3AB0","#C72B9E","#CE2A97","#F05045","#CB2B98","#E63660","#FCB357","#D52A7A","#DB2A78","#D92C84","#C8C8C8","#C32CA1","#FCB349","#C8C8C8","#C44274","#AD31AF","#A132B3","#BB308B","#CA2B94","#D92B7F","#8438AD","#FFFFFF","#E03A63"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C2A891","#DACBB8","#D2C1AD","#B2ACB6","#DED0C5","#333A44","#F2EFE8","#9E9B96","#9A5545","#5B4A43","#E4DFD9","#0E2223","#D4C9C5","#2D3A5D","#C9B09C","#FFFEFF","#D3BFA7","#551F13","#95523F","#D7C7B7","#DBCBBC","#BA826B","#C4B095","#EDE8E2","#556A6D","#EDE2E0","#DDCDBE","#FFFFFA","#7D5B59","#372531","#F5F4F0","#F3EEF2","#5F433F","#1E2C46"], 
  ["#FEF61E","#A9429C","#EC5DA1","#01AFAB","#FFFFFF","#AF0F23","#463D9D","#E5E602","#FFF203","#BFBDBC","#FFFDFE","#FFFFFF","#0880C5","#FFFABC","#F4F1F2","#4E4769","#F39FC5","#EDA2C7","#06BDEF","#A8CB3B","#1C1A1B","#FEFFED","#F09FC2","#F20014","#AD845B","#FFFEFF","#04BEEF","#070506","#FFFEFF","#F585B1","#8B8AAC","#FFFFFF","#FFFFFE","#FFFFFF","#D8ECF3","#AA3E9B","#FBF9F7","#0F3E6C","#FEFDF7","#FFFDED"],
  ["#175190","#1C3146","#DAFFFF","#69597E","#00519D","#B8B6C1","#5FC2EC","#0B2933","#FFFFFD","#D6F1FF","#003C79","#0B573D","#F4E2D6","#F3E0D2","#3C5B92","#455660","#14649F","#FFF6FA","#91A29A","#417A97","#696F87","#E3D960","#FAFEFF","#FFFAFD","#FFF7FC","#F7F4FD","#020F17","#E1E5FF","#C3CBE0","#0C0C14","#668484","#0A0A22","#000F2D","#CCB0AD","#9EC2D0","#6792B4","#A0E7FF","#000D21","#60A3C0","#142131"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#B2A97A","#5D3900","#FB934D","#FFEB00","#F7F198","#FFED05","#DBDCD7","#EFEFEF","#F6E80B","#FFE405","#FFE700","#FFEA00","#3E1700","#685600","#D5CB71","#FAEE1C","#766800","#FFE103","#01BEEB","#FEDD92","#E0EAF2","#FF1A67","#4E3B00","#FFEB04","#D9E0A5","#FFEC15","#FFDF05","#FFEE2E","#2A1D00","#DFDDDB","#5C2A49","#FBB32E","#FFF7E2","#F2EA00"],
  ["#eeeeee","#eeeeee","#eeeeee","#7696AF","#F20048","#D0E9D7","#F3F4F1","#FEDE00","#F3F4F1","#EE4B0E","#01A9E7","#F2F3EE","#F2F3F0","#402F8E","#03A6E5","#F3F1EF","#F4CEDB","#FB89B4","#F3F4F1","#F1F2ED","#03A8E7","#00A1E1","#F1F2ED","#503817","#EEEFE7","#E1BFA4","#F3F4F1","#F5DF09","#06ADEB","#00A3E2","#E72967","#00A6E4","#05B2EC","#05ACEA","#F3F4F1","#F2F3F0","#EDD675","#F3F9FE","#F1F2ED","#F1F2EB"],
  ["#7E72F8","#C696DD","#FFFDFE","#7064EA","#9C7FDF","#F8C2FB","#FFFEF8","#EDA5F2","#E39FEF","#F7C0FA","#FFE1FF","#1C97FD","#F3BBFB","#E0FFFF","#847AEF","#F3B9FA","#8276F5","#F9B7FD","#ECA6F4","#1EA6FC","#A27DF0","#ECA4F3","#E39FEF","#1C76F9","#866DE9","#8B7BF9","#1CBFFA","#33FAFF","#9C7DE9","#C490EF","#EEA9F2","#30FFFF","#20DEFE","#8073F7","#7B69E7","#938FEE","#EDA7F3","#FFFFFF","#FEFBFF","#22A8FA"],
  ["#A1D7FF","#8D8791","#3D7492","#EF483F","#FF237D","#7A487D","#F9E5DA","#D2B3C2","#B31523","#D41213","#6559AB","#F1B9D6","#F3DEEF","#659CD5","#D8B1C3","#2B1B36","#F72D1F","#DEBBD1","#FE64A4","#CC094D","#D7333C","#A96B6E","#FFF9FA","#B4BBD7","#B8AD6D","#F1CCD4","#24001C","#EDE9DD","#E861A3","#E03234","#6F3B6C","#EADCD3","#EEDDCB","#EECDD8","#8E5B4A","#FFE9E0","#E3DBCE","#5696B9","#7A6B70","#DFCEC7"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#328A71","#00A6D2","#00A6D0","#029078","#FAF503","#00A4D1","#00A5D5","#00A6D0","#A2A973","#BBC83A","#00A6D0","#95994F","#038C78","#01957D","#008870","#018A78","#99AE4F","#FDF003","#FEF102","#008774","#86985E","#00947E","#008874","#00A5D3","#028772","#00A5D3","#008874","#00A5CF","#D5DC2C","#00987C","#00A6D0","#008876","#00937B"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#EA69C3","#1596D8","#FF8CD7","#0B487E","#B2ACCE","#745783","#FE76CA","#FFC9F0","#DB6FD4","#0095AB","#F574C4","#E575D7","#FE96D5","#10F1C9","#9985CD","#FB7CCD","#0077A0","#F59FDC","#FBC3EA","#FFB9EF","#E27DD9","#F0CBED","#FFC2ED","#05B3B2","#FF98E4","#FFAEDF","#F9C2EA","#ECD5F2","#588CBE","#FE9AD8","#005357","#044D84","#FF8CD6"]
];
let cIdx = Math.floor(fxrand()*colors.length);

console.log(cIdx);

window.$fxhashFeatures = {
	"Color":cIdx
}

let stageWidth=1024;
let stageHeight=1024;

function preload(){
  // load the shader
  camShader = loadShader('effect.vert', 'effect.frag');
}

function setup() {
  
  stageWidth=windowWidth;
  stageHeight=windowHeight;
  frameRate(30);

  // shaders require WEBGL mode to work
  createCanvas(stageWidth, stageHeight);
  imageSmoothingEnabled=false;

  noStroke();

  //canvas#defaultCanvas0

  shaderLayer = createGraphics(stageWidth, stageHeight, WEBGL);
  shaderLayer.imageSmoothingEnabled=false;
  shaderLayer.setAttributes('preserveDrawingBuffer', true);

  copyLayer = createGraphics(stageWidth, stageHeight);
  copyLayer.imageSmoothingEnabled=false;

  shapeLayer = createGraphics(stageWidth, stageHeight);
  shapeLayer.imageSmoothingEnabled=false;

  shaderLayer.background(255);
  copyLayer.background(255);
  shapeLayer.background(255);

}




function draw() {  

  if(mouseIsPressed){
    return;
  }
  
  if(time-startTime>2){
    fxpreview();
  }

  shapeLayer.clear();
  shapeLayer.noStroke();

  let cols = colors[cIdx];
  shapeLayer.fill(cols[Math.floor(cols.length*fxrand())]);
  let w = 10;

  shapeLayer.rect(0,0,w,stageHeight);
  shapeLayer.rect(stageWidth-w,0,w,stageHeight);
  shapeLayer.rect(0,0,stageWidth,w);
  shapeLayer.rect(0,stageHeight-w,stageWidth,w);
       

  // shader() sets the active shader with our shader
  shaderLayer.shader(camShader);

  camShader.setUniform("stgW",windowWidth);
  camShader.setUniform("stgH",windowHeight);
  

  // lets just send the cam to our shader as a uniform
  camShader.setUniform('tex0', shapeLayer);

  // also send the copy layer to the shader as a uniform
  camShader.setUniform('tex1', copyLayer);//過去データ

  // send mouseIsPressed to the shader as a int (either 0 or 1)
  camShader.setUniform('mouseDown', int(mouseIsPressed));

  camShader.setUniform('time', time);
  camShader.setUniform('rand', rand);
  camShader.setUniform('rand2', rand2);
  
  time += 0.01;
  

  // rect gives us some geometry on the screen
  shaderLayer.rect(0,0,width, height);

  // draw the shaderlayer into the copy layer
  //copyLayer.fill(255,0,0);
  //copyLayer.rect(200+frameCount,200,100,100);
  copyLayer.image(shaderLayer, 0,0,width, height);

  // render the shaderlayer to the screen
  image(shaderLayer, 0,0,width, height);
  
 


  //textSize(24);
  //text("Click to bring in new frames", 50,50);
}

function windowResized(){
  
  stageWidth=windowWidth;
  stageHeight=windowHeight;

  resizeCanvas(stageWidth, stageHeight);

  

  shaderLayer.resizeCanvas(stageWidth, stageHeight);
  copyLayer.resizeCanvas(stageWidth, stageHeight);
  shapeLayer.resizeCanvas(stageWidth, stageHeight);
  shaderLayer.background(255);
  copyLayer.background(255);
  shapeLayer.background(255);
  
}