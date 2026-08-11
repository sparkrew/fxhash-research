let scl = 0.5;
let myPal;
let boff;
let mySeed;
let sceneFBO, blurXFBO, blurYFBO, thresholdFBO, tempFBO;
let reader;
let blurShader, thresholdShader;
let collector, collected, im;
let carvao = false;
let lines = true;

let pd = 2;
let skl = 1;

let th = [0.02,0.2,0.38,0.48,0.7];//a bit away from 0.5, or it seems to bug-pixelate
let allColors = [];
let dominant = [];
let latent = [];
let traces = [];

let directions = ['l','t','r','b'];
let direction, rotation;
let BKGbr;
let mixFinish;

let palName;
let fMetascot = [];
let fSurvey = [];
let fFiery = [];
let fallPals = [];

let bRnd = 0;
let finishing = '';
let isDay = true;
let resetMe = false;

let conta = 0;

let L;
// let canResize = false;
let cvs;

function setup() {
  mySeed = int(fxrand()*99999999999);
// mySeed = -1062791597;
print(mySeed);
  randomSeed(mySeed);
  noiseSeed(mySeed);
  frameRate(10);
  L = min(windowWidth, windowHeight, 1400);
  
  cvs = createCanvas(L, L);
  setAttributes({ alpha: true })
  pixelDensity(pd);
  collector = createGraphics(700,700,WEBGL);
  // collector.setAttributes({ alpha: true })
  reader = createGraphics(collector.width,collector.height);
  collected = createGraphics(1400,1400);

   options = { colorFormat: 'float', antialias: true }
  sceneFBO = collector.createFramebuffer(options);
  blurXFBO = collector.createFramebuffer(options);
  blurYFBO = collector.createFramebuffer(options);
  thresholdFBO = collector.createFramebuffer(options);//fix to clear it
 
  blurShader = new p5.Shader(this.renderer, vert, frag);
  thresholdShader = new p5.Shader(this.renderer, THvert, THfrag);


}

function windowResized() {
    L = min(windowWidth, windowHeight, 1400);
    p5x = (windowWidth - L) / 2;
    p5y = (windowHeight - L) / 2;
    resizeCanvas(L,L, false);
    blendMode(BLEND);
    background(255);
    blendMode(MULTIPLY);
    image(collected, 0,0, width, height);
}

function draw(){

  if(conta==1){
    setFeelings();
    setPalRotGroup();
  }
  else if(conta>1 && conta<6){
    doShaders();    
  }
  else if(conta==6){
    calcFrequencies();//must be BEFORE final render
  }
  else if(conta==7){
    saveImage();
  }
  else if(conta==8){
    displayImage();
    outputVariations();
    noLoop();
  }
  conta++;
  
}

function setPalRotGroup(){
th0 = 0.02;
th4 = 0.7;
th1 = random(th0+0.03, 0.2);
th2 = random(th1+0.03, th4-0.3);
th3 = random(th2+0.03, th4-0.1);

th = [th0,th1.toFixed(2),th2.toFixed(2),th3.toFixed(2),th4];//a bit away from 0.5, or it seems to bug-pixelate

    myPal = [];
    myPal = [...random([fallPals[0],fallPals[1],fallPals[2],fallPals[2]])];
    // myPal = [...fallPals[2]];
//---------------VARIATION: Palette    
    palName = myPal[0].palName;
    myPal = shuffle(myPal,false);
  
    if(myPal.length>6){
       myPal.splice(6,myPal.length-1);
    }

    allColors = [];
    for(let c=0; c<myPal.length; c++){
      myPal[c].chances = 0;
      r = (red(myPal[c].cor)/255  ).toFixed(2);
      g = (green(myPal[c].cor)/255).toFixed(2);
      b = (blue(myPal[c].cor)/255 ).toFixed(2);
      allColors.push(r,g,b,0.99);
    }

//-------------VARIATION: Bkg brightness    
    let cmin, cmax;
    bRnd = random();
    if(bRnd<0.33){
      cmin = 0.05;
      cmax = 0.15;
    } else if(bRnd>=0.33 && bRnd<=0.66){
      cmin = 0.35;
      cmax = 0.65;
    } else {
      cmin = 0.85;
      cmax = 0.9;
    }

    BKGbr = (cmin+" - "+cmax);

//-------------VARIATION: Finish
  finish = random(['Marbling', 'Sticky', 'Modernist'])    
  if(finish == 'Marbling'){
    mixFinish = 0.1;
  } else if(finish == 'Sticky'){
    mixFinish = 0.2;  
  } else if(finish == 'Modernist'){
    mixFinish = 0.3;
  }
    // mixFinish = 0.1;
//-----------------------END VARIATION

    allColors[0] =  map(allColors[8],0,1,cmin,cmax);
    allColors[1] =  map(allColors[9],0,1,cmin,cmax);
    allColors[2] = map(allColors[10],0,1,cmin,cmax);
    allColors[3] = 1.0;    
    
//-------------VARIATION: direction AND grouping    
    rr = floor(random(4));
    rotation = rr * PI/2;
    direction = directions[rr];
    grouping = random(['Packed','Spread','Packed','Spread','Split']);
    // grouping = 'Split'
    if(grouping == 'Packed'){skl = 0.8;}
    if(grouping == 'Spread'){skl = 0.7;}
    if(grouping == 'Split'){skl = 0.7;}
}

function doShaders() {
    background(255);
    collector.clear()

  sceneFBO.draw(() => {
    collector.clear();
    collector.push();
    collector.scale(skl);
    collector.background(0);
    collector.ambientLight(100, 100, 100);
    collector.pointLight(255, 255, 255, 1000/2, 1000/2, 1000);
    
    drawIt(grouping);
        
    collector.pop();
  })

  blurXFBO.draw(() => {
    collector.clear();
    collector.push();
    collector.shader(blurShader);
    blurShader.setUniform('u_resolution', [collector.width*pd*2, collector.height*pd*2]);
    blurShader.setUniform('dir', [0.0, 1.0]);
    blurShader.setUniform('originalImg', sceneFBO.color);
    collector.rect(-collector.width/2, -collector.height/2,collector.width, collector.height);
    collector.pop()
  })
  
  blurYFBO.draw(() => {
    collector.clear();
    collector.push();
    collector.shader(blurShader)
    blurShader.setUniform('u_resolution', [collector.width*pd*2, collector.height*pd*2]);
    blurShader.setUniform('dir', [1.0, 0.0]);
    blurShader.setUniform('originalImg', blurXFBO.color);
    collector.rect(-collector.width/2, -collector.height/2,collector.width, collector.height);
    collector.pop();
  })

  thresholdFBO.draw(() => {
    collector.clear()
    collector.push();
    
    collector.shader(thresholdShader)
  
    thresholdShader.setUniform('palLength', myPal.length);
    thresholdShader.setUniform('thLength', th.length);
    thresholdShader.setUniform('myPal', allColors);
    thresholdShader.setUniform('th', th);
    thresholdShader.setUniform('mixFinish', mixFinish);
    
    thresholdShader.setUniform('u_resolution', [collector.width, collector.height]);
    thresholdShader.setUniform('u_time', (random(0.1,1)).toFixed(5));//original, vertical
    thresholdShader.setUniform('originalImg', blurYFBO.color);
    collector.rect(-collector.width/2, -collector.height/2,collector.width,collector.height);
    collector.pop();
  })  
}

function calcFrequencies(){

  collector.clear();
  collector.push();
  collector.scale(1,-1,1);collector.texture(blurYFBO.color);
  collector.noStroke();
  collector.plane(collector.width, collector.height);
  collector.pop();

  reader.clear();
  reader.image(collector,0,0,width,height);


//now read pixels
let r, t, val;
  reader.loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (reader.width * 1) * (reader.height * 1);
  for (let i = 0; i < halfImage; i += 32) {
    r = reader.pixels[i]/255;
    t = 0;
    while(r>th[t]){
      t++;
    }
    myPal[t].chances++;
  }
  
 myPal.splice(0,1);
  nonBkgPixels = myPal[0].chances+myPal[1].chances+myPal[2].chances+myPal[3].chances+myPal[4].chances
  
  let partialPixels = " ";
  for(let c=0; c<5; c++){
    partialPixels+= myPal[c].chances+"--"
    myPal[c].chances = (myPal[c].chances/nonBkgPixels*100).toFixed(1);
  }
  myPal.sort((a, b) => parseFloat(b.chances) - parseFloat(a.chances));
//-------------VARIATION: Dominant, latent, traces   
dominant = [];
latent = [];
traces = [];

dominant.push(myPal[0]);
for (let c=1; c<myPal.length-1; c++){
  if(myPal[c].chances>28){
    if(dominant.length<=1){
      dominant.push(myPal[c]);
    } else {
      latent.push(myPal[c]);      
    }
  } else if(myPal[c].chances<=28 && myPal[c].chances>=3){
    latent.push(myPal[c]);
  } else if(myPal[c].chances<3){
    traces.push(myPal[c]);
  }
}
traces.push(myPal[4]);//push the tiniest at the end

dom = "";
for(let c=0; c<dominant.length; c++){if(c>0){dom+=", ";} dom+=dominant[c].mood;}
lat = "";
for(let c=0; c<latent.length; c++){if(c>0){lat+=", ";} lat+=latent[c].mood;}
tra = "";
for(let c=0; c<traces.length; c++){if(c>0){tra+=", ";} tra+=traces[c].mood;}

}

function saveImage() {
  collector.push();
  collector.texture(thresholdFBO.color);
  // collector.scale(1,-1,1);collector.texture(blurYFBO.color);
  collector.noStroke();
  collector.plane(collector.width, collector.height);
  collector.pop();

  //To Download
  collected.blendMode(BLEND);
  collected.background(255);
  collected.blendMode(MULTIPLY);
  collected.image(collector, 0,0,collected.width,collected.height);
  collected.image(collector, 0,0,collected.width,collected.height);
}


function displayImage() {background(255)  
  image(collected, 0,0, width, height);
  image(collected, 0,0, width, height);
  
  $fx.preview();
}

function outputVariations(){
  
$fx.features({
  "Grouping": grouping,
  "Canvas": BKGbr,
  "Finish": finish,
  "Palette": palName,
  "Dominant": dom,
  "Latent": lat,
  "Traces": tra
})
  
}

function keyPressed() {
    if (key === 's') {
      save(collected, mySeed+".png");
    }
    if (key === 'n') {
      // skl-=0.1;
      blendMode(BLEND);
      background(255);
      doAll();
    }
}


function setFeelings(){
  let feelings = [];

//-----------------Metascot
feelings = [];
info = {
  palName: 'Hscot',
  cor: '#c6ca8b',
  mood: 'Balance',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#c80003',
  mood: 'Desire',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#8e6f44',
  mood: 'Doubt',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#005441',
  mood: 'Magic',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#500d01',
  mood: 'Wisdom',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#fceeee',
  mood: 'Flair',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#668866',
  mood: 'Remorse',
  chances: 0
};
feelings.push(info);


fHscot = feelings;

//-----------------Solar
  feelings = [];
info = {
  palName: 'Solar',
  cor: '#e9d8a6',
  mood: 'Comfort',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#FFCC66',
  mood: 'Frustration',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#FFB535',
  mood: 'Inspiration',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#FF9505',
  mood: 'Excitement',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#c80003',
  mood: 'Passion',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#CC8000',
  mood: 'Anger',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#000000',
  mood: 'Power',
  chances: 0
};
feelings.push(info);

fSolar = feelings;
  
//-----------------Survey
  feelings = [];
info = {
  palName: 'Survey',
  cor: '#e9d8a6',
  mood: 'Boredom',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#005f73',
  mood: 'Logic',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#0a9396',
  mood: 'Optimism',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#94d2bd',
  mood: 'Calm',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#ee9b00',
  mood: 'Empathy',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#ca6702',
  mood: 'Laziness',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#bb3e03',
  mood: 'Haste',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#ae2012',
  mood: 'Love',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#9b2226',
  mood: 'Drama',
  chances: 0
};
feelings.push(info);

info = {
  cor: '#001219',
  mood: 'Mystery',
  chances: 0
};
feelings.push(info);

fSurvey = feelings;

fallPals.push(fHscot,fSolar,fSurvey);
}
