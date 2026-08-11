
let color_fons=0;
let color_linia=255;
let color_mode='white';
let sloop;
let numTimeSteps = 8;
let linia_posy;
let distancia;
let sons1 = [];
let synth1;
let minFreq1=60;
let maxFreq1=2500;
let minAttack1=0.0001;
let maxAttack1=0.01;
let minDecay1=0.0001;
let maxDecay1=0.001;
let offset;
let endofCicle=false;
let freqRange='all';
let gruix_linia=1;

let primerclic=false;
let preview=true;
let preview_done=false;
let resetsorolls=false;
let minWidth,maxWidth;
let minHeight,maxHeight;
let margex=4;
let margey=4;

let xmin, xmax, ymin, ymax;
let xlim=8;
let ylim=5;

function setup() {
  createCanvas(1024 , 1024);
  getAudioContext().suspend();
  
  getrandomColorMode();
  getrandomGruix();

  xlim=getRandomInt(3,24)
  ylim=getRandomInt(3,24)
  margex=getRandomInt(3,12);
  margey=getRandomInt(3,12);

  xmin=width/xlim;
  xmax=width-xmin;

  ymin=height/ylim;
  ymax=height-ymin;

  minWidth=xmax/margex;
  maxWidth=xmax-minWidth;
  minHeight=height/margey;
  maxHeight=height - minHeight;

  freqRange=getRandomFreqRange();
  numTimeSteps=getRandomNumSteps();

  
  linia_posy = -2;
  distancia=(maxHeight-minHeight)/numTimeSteps;
  offset=minHeight;

  for (let i = 0; i < numTimeSteps; i++) {
    sons1.push(new So(i));
     if(i>0){
          sons1[i].noves_coord(sons1[i-1].posx2,sons1[i-1].posy2)
    }
  }


  window.$fxhashFeatures = {
    "num_steps": numTimeSteps,
    "color_mode": color_mode,
    "line_thikness": gruix_linia,
    "frequency_range": freqRange,
    "steps_has_effects": getPercentEffects(),
    "x_internal_margin": xInternalMargin(),
    "y_internal_margin": yInternalMargin(),
    "x_external_margin": externalMargin(margex),
    "y_external_margin": externalMargin(margey),
  };
  print("fxhashFeatures:");
  print(window.$fxhashFeatures);


}

function draw() {
  background(color_fons);
  stroke(color_linia);
  //////PREVIEW
  if(preview==true){
    let contador=0
    for (let i = 0; i < sons1.length; i++) {
        let posy1=i*distancia+offset;
        sons1[i].dibuixar_preview(posy1);
        contador=i
    }

    if(preview_done==false && contador==(sons1.length-1)){
      fxpreview();
      preview_done=true;
    }


  }else{
  //LOOP
    //centre
    for (let i = 0; i < sons1.length; i++) {
      if(sons1[i].enabled){
        if(sons1[i].active==false){
          sons1[i].play(0);
          sons1[i].active=true
        }
        sons1[i].dibuixar();
        if(sons1[i].final){
          if(i< (sons1.length-1)){
            sons1[i+1].enabled=true;
          }else{
            finalCicle();

          }
        }
      }

    }
  }

}


class So {
  constructor(id){
    this.id=id;
    this.synth1 = new p5.MonoSynth();
    this.freq=getRandomInt(minFreq1,maxFreq1);
    this.enabled=true;
    this.active=false;
    this.dibuixa=false;
    this.attack=map(fxrand(), 0,1, minAttack1,maxAttack1);
    this.decay=map(fxrand(),0,1, minDecay1, maxDecay1);
    this.effect=getrandomFx()
    this.tefx=false;

    this.synth1.setADSR(this.attack,this.decay);
    this.sust=map(fxrand(),0,1,.03,.13);
    this.velocity=1;
    this.fx_on=false;
    this.fx_nlines=5;
    this.fx_linessep=5;
    this.fx_lerp_dist=0;
    this.lerp_percent=0.2-this.sust
    this.grup= this.id % 4;
    this.final=false;

    if(this.id==0){
      this.enabled=true
    }else{
      this.enabled=false
    }

    switch(this.grup){
        case 0: //ESQUERRA
          this.x=xmin;
          this.y=map(this.freq,minFreq1,maxFreq1,minHeight,maxHeight);
          this.lerpy=this.y;
          this.lerpx=this.x;
          this.posx2=map(this.freq,minFreq1,maxFreq1,minWidth,maxWidth);
          this.posy2=ymax;
          break;

      case 1: //BAIX
          this.x=0; 
          this.y=0
          this.lerpy=this.y;
          this.lerpx=this.x;
          this.posx2=xmax;
          this.posy2=map(this.freq,minFreq1,maxFreq1,minHeight,maxHeight);
          break;

      case 2: //DRETA
          this.x=0;
          this.y=0;
          this.lerpy=this.y;
          this.lerpx=this.x;
          this.posx2=map(this.freq,minFreq1,maxFreq1,minWidth,maxWidth);
          this.posy2=ymin;
          break;

      case 3: //DALT
          this.x=0;
          this.y=0
          this.lerpy=this.y;
          this.lerpx=this.x;
          this.posx2=xmin;
          this.posy2=map(this.freq,minFreq1,maxFreq1,minHeight,maxHeight);
          break;
    }

    if(this.effect=='delay'){
      this.fx= new p5.Delay();
      this.delayTime=getRandomInt(0,5); //delay time in seconds.
      this.delayFeedback=map(fxrand(),0,1, 0.2, 1.0); 
      this.tefx=true;
      this.fx_nlines=getRandomInt(8,12);
      this.fx_linessep=getRandomInt(5,15);
    }
    if(this.effect=='reverb'){
      this.reverbSeconds=getRandomInt(1,5);
      this.reverbDecay=getRandomInt(0,100);
      this.reverbReverse=getRandomBool();
      this.fx= new p5.Reverb();
      this.tefx=true;
      this.fx_nlines=getRandomInt(8,20);
      this.fx_linessep=getRandomInt(3,10);
    }

  }
  resetSons(){
    this.active=false;
    this.dibuixa=false;
    this.lerpx=this.x;
    this.lerpy=this.y;
    this.fx_on=false;
    this.fx_lerp_dist=0;
    this.final=false;
    if(this.id==0){
      this.enabled=true;
    }else{
      this.enabled=false
    }
  }
  play(){
    this.synth1.play(this.freq, this.velocity, 0,this.sust);
    if(this.tefx){
      if(this.effect=='delay'){
        this.fx.process(this.synth1, 0.12, .7, 3000);
        this.fx_on=true;
      }else{
        this.fx.process(this.synth1);
        this.fx_on=true;
      }
    }
  }
  dibuixar(){
    this.lerpx=lerp(this.lerpx,this.posx2,this.lerp_percent);
    this.lerpy=lerp(this.lerpy,this.posy2,this.lerp_percent)
    push();
    strokeWeight(gruix_linia);
    line(this.x,this.y,this.lerpx,this.lerpy);
    pop();
    this.esfinal()
    if(this.fx_on){
      push();
      stroke(color_linia,150);
      let dist=this.fx_linessep
      this.fx_lerp_dist=lerp(this.fx_lerp_dist,dist,0.01)
      for(let i=0; i< this.fx_nlines;i++){
        if(this.effect=='delay'){
          line(this.x,this.y-this.fx_lerp_dist*(i+1), this.lerpx-this.fx_lerp_dist*(i+1),this.lerpy);
        }else{
          line(this.x,this.y+this.fx_lerp_dist*(i+1), this.lerpx,this.lerpy+this.fx_lerp_dist*(i+1));
        }
      }  
      pop();
    }

  }
  dibuixar_preview(){
    //this.lerpx=lerp(this.lerpx,this.posx2,this.lerp_percent);
    //this.lerpy=lerp(this.lerpy,this.posy2,this.lerp_percent);
    this.lerpx=this.posx2;
    this.lerpy=this.posy2;    
    push();
    strokeWeight(gruix_linia);
    line(this.x,this.y,this.lerpx,this.lerpy);
    pop();
    if(this.tefx){
      push();
      stroke(color_linia,150);
      let dist=this.fx_linessep
      //this.fx_lerp_dist=lerp(this.fx_lerp_dist,dist,0.01)
      this.fx_lerp_dist=dist;
      for(let i=0; i< this.fx_nlines;i++){
        if(this.effect=='delay'){
          line(this.x,this.y-this.fx_lerp_dist*(i+1), this.lerpx-this.fx_lerp_dist*(i+1),this.lerpy);
        }else{
          line(this.x,this.y+this.fx_lerp_dist*(i+1), this.lerpx,this.lerpy+this.fx_lerp_dist*(i+1));
        }
      }  
      pop();
    }

  }
  noves_coord(newx,newy){
     switch(this.grup){
        case 0: //ESQUERRA
          this.x=xmin;
          this.y=newy
          this.lerpy=this.y;
          this.lerpx=this.x;
          
          break;

      case 1: //BAIX
          this.x=newx; 
          this.y=ymax;
          this.lerpy=this.y;
          this.lerpx=this.x;
        
          break;

      case 2: //DRETA
          this.x=xmax;
          this.y=newy;
          this.lerpy=this.y;
          this.lerpx=this.x;
         
          break;

      case 3: //DALT
          this.x=newx;
          this.y=ymin;
          this.lerpy=this.y;
          this.lerpx=this.x;
          
          break;
    }
  }
  esfinal(){
      switch(this.grup){
        case 0: //ESQUERRA
          if(this.lerpy>=(ymax-1)){
            this.final=true;
          }else{
            this.final=false;
          }
          break;

      case 1: //BAIX
          if(this.lerpx>=(xmax-1)){
            this.final=true;
          }else{
            this.final=false;
          }
          break;

      case 2: //DRETA
          if(this.lerpy<=(ymin+1)){
            this.final=true;
          }else{
            this.final=false;
          }
         
          break;

      case 3: //DALT
          if(this.lerpx<=(xmin+1)){
            this.final=true;
          }else{
            this.final=false;
          }
          
          break;
    }
  }

}

function resetAllSons(){
  for (let i = 0; i < sons1.length; i++) {
      sons1[i].resetSons();
  }
}


function finalCicle(){
  //sloop.pause();
  endofCicle=true;
}


function mousePressed() {
  if(primerclic==true){
    if(endofCicle==true){
      endofCicle=false;
      resetAllSons();

    }
    userStartAudio();
    toggleLoop()
  }else{
    preview=false;
    primerclic=true;
    endofCicle=false;
    resetAllSons();
    userStartAudio();
  }
}


function toggleLoop(){
    if (isLooping()) {
      noLoop();  
    }else{
      loop();
    }
}

function getRandomInt(min,max) {
    return int(map(fxrand(), 0,1, min,max));
}



function getRandomBool() {
    let v=getRandomInt(0,2)
    //print("rand: "+v)
    if(v==1){
      return true;
    }else{
      return false;
    }
}

function getrandomFx(){
  switch(getRandomInt(0,8)){
    case 2: 
      return 'delay';
      break;

    case 1:
      return 'reverb';
      break;

    default:
      return 'none';
  }
}

function getRandomFreqRange(){
    switch(getRandomInt(0,10)){
    case 2: 
      minFreq1=1000;
      maxFreq1=2500;
      return 'high';
      break;

    case 1:
      minFreq1=60;
      maxFreq1=200;
      return 'low';
      break;

    default:
      minFreq1=60;
      maxFreq1=2500;
      return 'all';
  }
}

function getRandomNumSteps(){
  switch(getRandomInt(0,20)){
    case 3: 
      return 128;
      break;

    case 2: 
      return 96;
      break;

    case 1:
      return 96;
      break;

    case 4:
      return 48;
      break;

    case 5:
      return 48;
      break;

    case 6:
      return 32;
      break;

    default:
      return 64;
  }
}


function getrandomColorMode(){
  if(getRandomInt(0,10)<=1){
    color_fons=0;
    color_linia=255;
    color_mode='black';
  }else{
    color_fons=255;
    color_linia=0;
    color_mode='white';
  }
}

function getrandomGruix(){
  if(getRandomInt(0,15)<=1){
    gruix_linia=2;
    
  }else{
    gruix_linia=1;
  }
}


function xInternalMargin(){
  if(margex<6){
    return '3-5'
  }else{
    if(xlim< 9){
      return '6-8'
    }else{
      return '9-11'
    }
  }
}
function yInternalMargin(){
  if(margey<6){
    return '3-5'
  }else{
    if(xlim< 9){
      return '6-8'
    }else{
      return '9-11'
    }
  }
}

function externalMargin(margee){
  if(margee<10){
    return '3-9'
  }else{
    if(xlim< 17){
      return '10-16'
    }else{
      return '17-23'
    }
  }
}


function getPercentEffects() {
  let cont=0
  let enab=0
  for (let i = 0; i < sons1.length; i++) {
      enab++;
      if(sons1[i].effect=='reverb' || sons1[i].effect=='delay'){
        cont++;
      }
  }
  let total=round((cont/enab)*100);
   if(total<=10){
    return '0-10%';
  }else{
    if(total<=15){
      return '10-15%';
    }else{
      if(total<=20){
        return '15-20%';
      }else{
        if(total<=25){
          return '20-25%';
        }else{
          if(total<=30){
            return '25-30%';
          }else{
            if(total<=35){
              return '30-35%';
            }else{
              if(total<=40){
                return '35-40%';
              }else{
                if(total<=45){
                  return '40-45%';
                }else{
                  if(total <=50){
                    return '45-50%';
                  }else{
                    if(total <=55){
                      return '50-55%'
                    }else{
                      if(total <=60){
                        return '55-60%';
                      }else{
                        if(total<=65){
                          return '60-65%';
                        }else{
                          if(total<=70){
                            return '65-70%';
                          }else{
                            if(total<=75){
                              return '70-75%'
                            }else{
                              return '75-100%'
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}