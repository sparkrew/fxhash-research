function sequenciador(){
  if(context=='capture'){
    kick0.capture();
    hihat0.capture();
    beep0.capture();
    clic0.capture();
    noise0.capture();
    bitxu0.capture();
  }else{
    kick0.play();
    hihat0.play();
    beep0.play();
    clic0.play();
    noise0.play();
    if(bitxuOn) bitxu0.play();
      seqCont++

  }
  
  if(seqCont==seqMax){
    seqCont=0;
    if(tocat){
      contNoTocat=0;
    }else{
      contNoTocat+=1
    }
    tocat=false;
    if(contNoTocat>NUMSEQAUTO && !modeAuto){
      modeAuto=true;
      kick0.numPatern=kick0.lastPatern;
      hihat0.numPatern=hihat0.lastPatern;
      beep0.numPatern=beep0.lastPatern;
      clic0.numPatern=clic0.lastPatern;
      noise0.numPatern=noise0.lastPatern;
      bitxu0.numPatern=bitxu0.lastPatern;
      
      kick0.delay=kick0.lastDelay;
      hihat0.delay=hihat0.lastDelay;
      beep0.delay=beep0.lastDelay;
      clic0.delay=clic0.lastDelay;
      noise0.delay=noise0.lastDelay;

      kick0.feedback=kick0.lastFeedback;
      hihat0.feedback=hihat0.lastFeedback;
      beep0.feedback=beep0.lastFeedback;
      clic0.feedback=clic0.lastFeedback;
      noise0.feedback=noise0.lastFeedback;

      kick0.tempsDelay=int(mmap(kick0.delay,0,maxDelay,0,seqMax-1))
      kick0.maxDelayMov=int(mmap(kick0.delay,0,maxDelay,0,10))

      hihat0.tempsDelay=int(mmap(hihat0.delay,0,maxDelay,0,seqMax-1))
      hihat0.maxDelayMov=int(mmap(hihat0.delay,0,maxDelay,0,10))

      beep0.tempsDelay=int(mmap(beep0.delay,0,maxDelay,0,seqMax-1))
      beep0.maxDelayMov=int(mmap(beep0.delay,0,maxDelay,0,10))

      clic0.tempsDelay=int(mmap(clic0.delay,0,maxDelay,0,seqMax-1))
      clic0.maxDelayMov=int(mmap(clic0.delay,0,maxDelay,0,10))

      noise0.tempsDelay=int(mmap(noise0.delay,0,maxDelay,0,seqMax-1))
      noise0.maxDelayMov=int(mmap(noise0.delay,0,maxDelay,0,10))

      
      temps=lastTemps;
      contdrand=lastcontdrand;
    }
    if(modeAuto){
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          kick0.paternUpAuto('kick0')
        }else{
          kick0.paternDownAuto('kick0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          hihat0.paternUpAuto('hihat0')
        }else{
          hihat0.paternDownAuto('hihat0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          beep0.paternUpAuto('beep0')
        }else{
          beep0.paternDownAuto('beep0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          clic0.paternUpAuto('clic0')
        }else{
          clic0.paternDownAuto('clic0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          noise0.paternUpAuto('noise0')
        }else{
          noise0.paternDownAuto('noise0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          kick0.delayUpAuto('kick0')
        }else{
          kick0.delayDownAuto('kick0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          hihat0.delayUpAuto('hihat0')
        }else{
          hihat0.delayDownAuto('hihat0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          beep0.delayUpAuto('beep0')
        }else{
          beep0.delayDownAuto('beep0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          clic0.delayUpAuto('clic0')
        }else{
          clic0.delayDownAuto('clic0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(2)){
          noise0.delayUpAuto('noise0')
        }else{
          noise0.delayDownAuto('noise0')
        }
      }
      if(getVRandomBoolN(2)){
        if(getVRandomBoolN(3)){
          bitxu0.paternUpAuto('bitxu0')
        }else{
          bitxu0.paternDownAuto('bitxu0')
        }
      }
      if(getVRandomBoolN(2)){
        lastTemps=temps;
        if(getVRandomBoolN(2)){
          tempsUpAuto();
        }else{
          tempsDownAuto();
        }
      }
      if(getVRandomBoolN(2)){
        bitxuOn=true;
      }else{
        bitxuOn=false;
      }
      lastcontdrand=contdrand;
    }
    if(!modeAuto && bitxu0.numPatern==0){
      console.log("Bitxu 0");
      if(getVRandomBoolN(2)){
        bitxu0.numPatern=bitxu0.lastPatern;
      }
    }

    
  }
  if((engegat && !paused)){
    setTimeout(sequenciador, temps);
  }
}

