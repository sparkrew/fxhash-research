
const kick0_play="n_0_1";
const hihat0_play="n_0_3";
const beep0_play="n_0_5";
const clic0_play="n_0_6";
const noise0_play="n_0_8";
const kick0_dl="n_0_16";
const kick0_fb="n_0_17";
const hihat0_dl="n_0_22";
const hihat0_fb="n_0_23";
const beep0_dl="n_0_28";
const beep0_fb="n_0_29";
const clic0_dl="n_0_34";
const clic0_fb="n_0_35";
const noise0_dl="n_0_40";
const noise0_fb="n_0_41";
const bitxu0_play="n_0_48"; //bang
const bitxu0_type="n_0_47"

const kickMax=5;
const hihatMax=4;
const beepMax=2;
const clicMax=15;
const noiseMax=7;
const bitxuMax=4;
const NUMSEQAUTO=5
const minTemps=50;
const maxTemps=500;
const maxDelay=100;


let bitxuOn=true;
let modeAuto=true;
let tocat=false;
let contNoTocat=0;
let pg,pgGlitch;
let pgTxt;
let midaX,midaY;
let canvasW,canvasH,pcanvasW,pcanvasH;
let ample=800;
let alt=800;
let vrandoms=[];
let drandoms=[];
let contvrand=0;
let contdrand=0;
let lastcontdrand=0;
let paused=false;
let blocat=false;
let preview=true;
let captured=false;
let draggedOn=false;
let carregat=false;
let colorLinia=0;
let colorFons=255
let temps=getRandomInt(2,4)*100;
let lastTemps=temps;
let seqMax=getRandomInt(2,4)*8;
let seqCont=0;
let numPaterns=16;

let kick0Type=0
let hihat0Type=0;
let beep0Type=0;
let clic0Type=0;
let noise0Type=0;
let bitxu0Type=0;
let kick0,hihat0,beep0,clic0,noise0,bitxu0;

let responsive=true
let gif=false;
let prev, next;
let darkMode=false;
let context,iter;
let infoButActive=0;
let info2Buton=0;
let nmenu=0;

//MIDI
var myInput
let teMidi=false;
let quinMidi="none";

//touch
let touchStart=false;
let touchStop=false;

function preload() {
  font = loadFont('./UbuntuMono-Regular.ttf');
}

function setup() {
  Math.random = vfxrand;
  noiseSeed($fx.rand());
  ompleVRandom();
  ompleDRandom();
 darkMode=getRandomBool()

  if(darkMode){
    colorFons=0
    colorLinia=255
  }else{
    colorLinia=0
    colorFons=255
  }


  createCanvas(windowWidth, windowHeight);
  background(colorFons);
  pixelDensity(1);
  Escalat();
  pg=createGraphics(pcanvasW, pcanvasH)
  pg.rectMode(CENTER);
  pg.imageMode(CENTER);
  pgGlitch=createGraphics(pcanvasW, pcanvasH);
  pgGlitch.background(colorFons,0);
  kick0=new So(kick0_play,kickMax,kick0_dl,kick0_fb,'kick');
  hihat0=new So(hihat0_play,hihatMax,hihat0_dl,hihat0_fb,'hihat');
  beep0=new So(beep0_play,beepMax,beep0_dl,beep0_fb,'beep');
  clic0=new So(clic0_play,clicMax,clic0_dl,clic0_fb,'clic');
  noise0=new So(noise0_play,noiseMax,noise0_dl,noise0_fb,'noise');
  bitxu0= new So(bitxu0_play,bitxuMax,0,0,'bitxu');
  pgTxt=createGraphics(pcanvasW,pcanvasH);
  imageMode(CENTER);
  angleMode(DEGREES);

  midaX=canvasH/(seqMax/2)
  midaY=canvasW/(seqMax/2)

  context=$fx.context
  iter=$fx.iteration;
  $fx.features ({
    "dark": darkMode,
    "kick": kick0.type,
    "hihat": hihat0.type,
    "beep": beep0.type,
    "clic": clic0.type,
    "noise": noise0.type,
    "seqMax": seqMax,
    "basePeriod": temps,
  })
  console.log("context-> "+context)
  console.log($fx.getFeatures())

  if(context=='standalone'){
    WebMidi
      .enable()
      .then(onEnabled)
      .catch(err => console.log(err));
  }


  setTimeout(() => {
    carregat=true;
  }, 200);
}


window.onclick = function(){
    if(carregat){
      if(engegat){
        if(paused){
          console.log("resume")
          paused=false;
          sequenciador();
          loop()
        }else{
          console.log("paused")
          //sendMsgToWebPd(volume_in,0,[0]);

          noLoop()
          paused=true;
        }
      }else{
          if(infoButActive==1 && nmenu==0){
            nmenu=1;
          }else if(nmenu==1 && info2Buton==0){
            nmenu=2;
          }else if(nmenu==1 && info2Buton==1){
            nmenu=3
          }else if(nmenu==1 && info2Buton==2){
            nmenu=0
          }else if(nmenu==2 || nmenu==3){
            nmenu=1
          }else{
            if(blocat==false){
              engegar();
              engegat=true
              preview=false;
            
            }else{
              console.log("blocat")
            }
          }
      }
    
    }else{
      console.log("wait..")
    }
  
}

function engegar(){
      if(engegat==false && blocat==false){
        //loop()
        blocat=true;
        startApp().then(() => {
          setTimeout(() => {
            engegat=true;
            console.log('engegat')
            paused=false;           
            blocat=false;
            sequenciador();
          }, 600);
        })  
      }
}
function draw() {
     if(context=='standalone' || context=='minting'){
      if(engegat==false){
        if(nmenu==0){
          menu_principal();
          
        }else if(nmenu==1){
          menu_info();
        }else if(nmenu==2){
          menu_keyboard();
        }else if(nmenu==3){
          menu_nanoKontrol();
        }
        image(pgTxt,canvasW/2,canvasH/2);

      }else{

        kick0.dibuixar();
        hihat0.dibuixar();
        beep0.dibuixar();
        clic0.dibuixar();
        noise0.dibuixar();
        kick0.dibuixar_delay();
        hihat0.dibuixar_delay();
        beep0.dibuixar_delay();
        clic0.dibuixar_delay();
        noise0.dibuixar_delay();
        image(pg,canvasW/2,canvasH/2)
        if(bitxuOn) bitxu0.dibuixar();
      }
      
    }else if(context=='capture'){
      if(engegat==false){ 
        engegat=true
        seqCont=seqMax-2
        kick0.temps=temps;
        hihat0.temps=temps;
        beep0.temps=temps;
        clic0.temps=temps;
        noise0.temps=temps;
        image(pg,canvasW/2,canvasH/2)
        bitxu0.temps=temps;
        sequenciador();
      }
      kick0.dibuixar();
      hihat0.dibuixar();
      beep0.dibuixar();
      clic0.dibuixar();
      noise0.dibuixar();
      image(pg,canvasW/2,canvasH/2)
      bitxu0.dibuixar();
      if(frameCount>=100){
          $fx.preview();
          console.log("Preview captured")
          noLoop()
        }
    }
     
    

}


function keyPressed() {
    "q" !== key || kick0.paternUp('kick0'),
    "a" !== key || kick0.paternDown('kick0'),
    "w" !== key || hihat0.paternUp('hihat0'),
    "s" !== key || hihat0.paternDown('hihat0'),
    "e" !== key || beep0.paternUp('beep0'),
    "d" !== key || beep0.paternDown('beep0'),
    "r" !== key || clic0.paternUp('clic0'),
    "f" !== key || clic0.paternDown('clic0'),
    "t" !== key || noise0.paternUp('noise0'),
    "g" !== key || noise0.paternDown('noise0'),
    "y" !== key || bitxu0.paternUp('bitxu0'),
    "h" !== key || bitxu0.paternDown('bitxu0'),
    "u" !== key || tempsUp(),
    "j" !== key || tempsDown(),
    "Q" !== key || kick0.delayUp(),
    "A" !== key || kick0.delayDown(),
    "W" !== key || hihat0.delayUp(),
    "S" !== key || hihat0.delayDown(),
    "E" !== key || beep0.delayUp(),
    "D" !== key || beep0.delayDown(),
    "R" !== key || clic0.delayUp(),
    "F" !== key || clic0.delayDown(),
    "T" !== key || noise0.delayUp(),
    "G" !== key || noise0.delayDown(),
    " " !== key || bitxuSwitch(),

    "p" !== key && "P" !== key || save("BITXU.png"),
    "m" !== key && "M" !== key || saveGif("BITXU-", 2);

}
function Escalat(){
    if(gif){
      canvasW=960;
      canvasH=1280;
    }else{
       if(responsive){
        canvasH=windowHeight*0.98;
        canvasW = windowWidth*0.98;
        pcanvasH=canvasH;
        pcanvasW=canvasW;
       }else{
        canvasH=min([windowWidth,windowHeight])
        canvasW=min([windowWidth,windowHeight])
      }
    }
   
    escalaW = canvasW/ample;
    escalaH = canvasH/alt;
    escalaTot = min(escalaW, escalaH);
    canvasMax=max([canvasW,canvasH])
    canvasMin=min([canvasW,canvasH])

    pgTxt=createGraphics(canvasW,canvasH);


    resizeCanvas(canvasW, canvasH);
    setTimeout(() => {
            calculat=true;
          }, 100);
    
}

function windowResized() {
  
    calculat=false
    Escalat()    
   
}

function bitxuSwitch(){
  bitxuOn=!bitxuOn
}
function bitxuPlay(){
  bitxuOn=true;
  console.log("bitxu on")
}
function bitxuStop(){
  bitxuOn=false;
  console.log("bitxu off")

}
function tempsChange(midiValue){
    modeAuto=false;
    tocat=true;
    temps=int(mmap(midiValue,0,127,minTemps,maxTemps-1))
    console.log("new temps: "+temps)
    /*kick0.temps=temps;
    hihat0.temps=temps;
    beep0.temps=temps;
    clic0.temps=temps;
    noise0.temps=temps;
    bitxu0.temps=temps;*/
}

function tempsUp(){
    modeAuto=false;
    tocat=true;
    if(temps<maxTemps-10){
      temps+=10
    }
    console.log("temps up: "+temps)
}

function tempsDown(){
    modeAuto=false;
    tocat=true;
    if(temps>minTemps+10){
      temps-=10
    }
    console.log("temps down: "+temps)
}

function tempsUpAuto(){
    if(temps<maxTemps-10){
      temps+=10
    }
    console.log("temps up: "+temps)
}

function tempsDownAuto(){
    if(temps>minTemps+10){
      temps-=10
    }
    console.log("temps down: "+temps)
}

// Function triggered when WEBMIDI.js is ready
  function onEnabled() {

    // Display available MIDI input devices
    if (WebMidi.inputs.length < 1) {
      console.log("No device detected.");
    } else {
      for(let i=0;i<WebMidi.inputs.length;i++){
        console.log(WebMidi.inputs[i].name)
        if(WebMidi.inputs[i].name.includes('nanoKONTROL2')){
          teMidi=true;
          quinMidi="korg nanoKONTROL2"
          console.log("ES NANO2")
          WebMidi.inputs[i].addListener("controlchange", e => {
            //console.log('CTL-> number: '+e.controller.number+' value: '+e.rawValue)
            if(e.controller.number==0 ){ //slice 1 -> kick
              kick0.paternChange(e.rawValue);
            }else if(e.controller.number==1){ //slice 2 ->hihat)
              hihat0.paternChange(e.rawValue)
            }else if(e.controller.number==2){ //slice 3 ->beep)
              beep0.paternChange(e.rawValue)
            }else if(e.controller.number==3){ //slice 4 ->clic)
              clic0.paternChange(e.rawValue)
            }else if(e.controller.number==4){ //slice 5 ->noise)
              noise0.paternChange(e.rawValue)
            }else if(e.controller.number==5){ //slice 6 ->bitxu)
              bitxu0.paternChange(e.rawValue)
            }else if(e.controller.number==6){ //slice 7 ->temps)
              tempsChange(e.rawValue)
            }else if(e.controller.number==16){
              kick0.delayChange(e.rawValue);
            }else if(e.controller.number==17){
              hihat0.delayChange(e.rawValue);
            }else if(e.controller.number==18){
              beep0.delayChange(e.rawValue);
            }else if(e.controller.number==19){
              clic0.delayChange(e.rawValue);
            }else if(e.controller.number==20){
              noise0.delayChange(e.rawValue);
            }else if(e.controller.number==41 && e.rawValue==127){
              bitxuPlay();
            }else if(e.controller.number==42 && e.rawValue==127){
              bitxuStop();
            }else if(e.controller.number==45 && e.rawValue==127){
              saveGif("BITXU", 2);
            }else if(e.controller.number==44 && e.rawValue==127){
              save("BITXU.png");
            }
          });
        }else if(WebMidi.inputs[i].name.includes('nanoKONTROL')){
          console.log("ES NANO");
          teMidi=true;
          quinMidi="korg nanoKONTROL"
          WebMidi.inputs[i].addListener("controlchange", e => {
            //console.log(`Received 'controlchange' message:`,e);
            //console.log('CTL-> number: '+e.controller.number+' value: '+e.rawValue)
            if(e.controller.number==2){ //slice 1 -> kick
              kick0.paternChange(e.rawValue);
            }else if(e.controller.number==3){ //slice 2 ->hihat)
              hihat0.paternChange(e.rawValue)
            }else if(e.controller.number==4){ //slice 3 ->beep)
              beep0.paternChange(e.rawValue)
            }else if(e.controller.number==5){ //slice 4 ->clic)
              clic0.paternChange(e.rawValue)
            }else if(e.controller.number==6){ //slice 5 ->noise)
              noise0.paternChange(e.rawValue)
            }else if(e.controller.number==8){ //slice 6 ->bitxu)
              bitxu0.paternChange(e.rawValue)
            }else if(e.controller.number==9){ //slice 7 ->temps)
              tempsChange(e.rawValue)
            }else if(e.controller.number==14){
              kick0.delayChange(e.rawValue);
            }else if(e.controller.number==15){
              hihat0.delayChange(e.rawValue);
            }else if(e.controller.number==16){
              beep0.delayChange(e.rawValue);
            }else if(e.controller.number==17){
              clic0.delayChange(e.rawValue);
            }else if(e.controller.number==18){
              noise0.delayChange(e.rawValue);
            }else if(e.controller.number==45 && e.rawValue==127){
              bitxuPlay();
            }else if(e.controller.number==46 && e.rawValue==127){
              bitxuStop();
            }else if(e.controller.number==44 && e.rawValue==127){
              saveGif("BITXU-", 2);
            }else if(e.controller.number==48 && e.rawValue==127){
              save("BITXU.png");
            }

          });
        }
      }
      
    }
  }


