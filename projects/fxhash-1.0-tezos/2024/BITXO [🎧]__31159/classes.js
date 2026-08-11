class So {
	constructor(id,maxtype,delay,feedback,tipus){
		this.id=id;
		this.type=getRandomInt(0,maxtype);
		this.id_dl=delay;
		this.id_fb=feedback;
		this.tipus=tipus;
		console.log("type: "+this.type)
		this.createPatterns()
		this.numPatern=getRandomInt(0,numPaterns-1);
		this.lastPatern=this.numPatern;
		this.temps=temps*0.8; //temps delay feedback
		this.pgs=[];
		this.dibuixa=[];
		this.dibuixaDelay=[];
		this.cols=8
		this.rows=seqMax/this.cols;
		this.noisecols=200
		this.noiserows=200
		this.delay=getRandomInt(0,127);
		this.feedback=this.delay;
		this.glitchMaxDespX=getRandomInt(2,40);
		this.glitchMaxDespY=getRandomInt(0,20);
		this.glitchTeDespY=getRandomBool();
      	this.glitchMaxNum=getRandomInt(10,50)
      	this.glitchMulti=getRandomBool();
      	this.glitchType=[];
      	this.glDespX=[];
      	this.glDespY=[];
      	this.glSentitX=[];
      	this.glSentitY=[];
      	this.glVolaux=[];
      	this.glFreqaux=[];
      	this.glC=[];
      	this.glDespX3=[];
      	this.glDespY3=[];
      	this.glitchCont=0;
      	this.glN=[];
      	this.glSx=[];
      	this.glSy=[];
      	this.glSh=[];
      	this.glSw=[];
      	this.glDx=[];
      	this.glDy=[];
      	this.glSw3=[];
      	this.alphas=[];
      	this.tint=colorLinia;
      	this.tempsDelay=0;
      	this.maxDelayMov=0;
		if(this.tipus=='kick'){
			this.midax=canvasW;
			this.miday=canvasH;
		}else if(this.tipus=='hihat'){
			this.midax=canvasW/seqMax
			this.miday=canvasH
		}else if(this.tipus=='clic'){
			this.midax=canvasW
			this.miday=canvasH
		}else if(this.tipus=='beep'){
			this.midax=canvasW
			this.miday=(canvasH/seqMax)
		}else{
			this.midax=canvasW;
			this.miday=canvasH;
		}
		
		this.ordenat=getRandomBool()
		this.ordre=[]
		this.ordre2=[];
		for(let i=0;i<seqMax;i++){
    		this.ordre2.push(i);
  		}
  		if(this.ordenat){
  			this.ordre=this.ordre2;
  		}else{
  			this.ordre=randomize(this.ordre2)
  		}
  		
		for(let i=0;i<seqMax;i++){
			this.pgs.push(createGraphics(this.midax,this.miday))
			this.dibuixa.push(false);
			this.dibuixaDelay.push(false);
			this.alphas.push(255)
		}
		this.pg=createGraphics(canvasW,canvasH)
		
		this.creaPGS();
	}
	play(){

		if(this.paterns[this.numPatern][seqCont]==true){
			if( this.type!='bitxu'){
				sendMsgToWebPd(this.id,0,[this.type]);
				this.dibuixa[this.ordre[seqCont]]=true;
				this.dibuixaDelay[this.ordre[seqCont]]=false;

				var a=this.ordre[seqCont];
			    setTimeout(() => {
	              	this.dibuixa[a]=false
	              	if(this.delay>0){
	              		this.dibuixaDelay[a]=true;
	              		var b=a;
	              		this.alphas[a]=128;
	              		setTimeout(() => {
	              			this.dibuixaDelay[b]=false;
	              		}, this.temps*this.tempsDelay);
	              	}

	            }, this.temps);
			}else{
				sendMsgToWebPd(this.id,0,['bang']);
				this.dibuixa[this.ordre[seqCont]]=true;
				var a=this.ordre[seqCont];
				setTimeout(() => {
	            	this.dibuixa[a]=false
	          }, this.temps);
			}
			
		}
	}
	capture(){

		if(this.paterns[this.numPatern][seqCont]==true){
			if( this.type!='bitxu'){
				
				this.dibuixa[this.ordre[seqCont]]=true;
				var a=this.ordre[seqCont];
			    setTimeout(() => {
	              	this.dibuixa[a]=false
	            }, this.temps);
			}else{
				this.dibuixa[this.ordre[seqCont]]=true;
				var a=this.ordre[seqCont];
				setTimeout(() => {
	            	this.dibuixa[a]=false
	          }, this.temps);
			}
			
		}
	}
	creaPGS(){
		let nx=getRandomInt(0,canvasW);
		let ny=getRandomInt(0,canvasH);
		for(let i=0;i<seqMax;i++){
			
			
			if(this.tipus=='kick'){
				//this.pgs[i].stroke(colorLinia);
				//this.pgs[i].noFill()
				this.pgs[i].background(colorFons,0)
				this.pgs[i].rectMode(CENTER)
				//this.pgs[i].fill(colorLinia)
				this.pgs[i].noFill()
				this.pgs[i].stroke(colorLinia)
				this.pgs[i].strokeWeight(canvasW/20)
				var tx=(this.midax/seqMax)*(i+1)
				var ty=(this.miday/seqMax)*(i+1)
				this.pgs[i].rect(this.midax/2,this.miday/2,tx,ty)
			}else if(this.tipus=='hihat'){
				this.pgs[i].noStroke();
				this.pgs[i].fill(colorLinia)
				this.pgs[i].rect(0,0,this.midax,this.miday)
			}else if(this.tipus=='clic'){
				let rposx=getRandomInt(0,canvasW-(this.midax/this.cols));
				let rposy=getRandomInt(0,canvasH-(this.miday/this.rows));
				let rmidax=this.midax/(this.cols*2);
				let rmiday=this.miday/(this.rows*2);
				rposx=rposx+rmidax/2;
				rposy=rposy+rmiday/2;

				this.pgs[i].noFill();
				this.pgs[i].stroke(colorLinia)
				this.pgs[i].strokeWeight(3);
				this.pgs[i].line(0,0,rposx,rposy)
				//this.pgs[i].line(canvasW,0,rposx+rmidax,rposy)
				this.pgs[i].line(canvasW,0,rposx,rposy)
				//this.pgs[i].line(0,canvasH,rposx,rposy+rmiday)
				this.pgs[i].line(0,canvasH,rposx,rposy)
				//this.pgs[i].line(canvasW,canvasH,rposx+rmidax,rposy+rmiday)
				this.pgs[i].line(canvasW,canvasH,rposx,rposy)
				//this.pgs[i].rect(rposx,rposy,this.midax/(this.cols*2),this.miday/(this.rows*2))
			}else if(this.tipus=='beep'){
				this.pgs[i].fill(colorLinia)
				this.pgs[i].noStroke();
				this.pgs[i].rect(0,0,this.midax,this.miday*0.1)	
			}else if(this.tipus=='noise'){
				let nx=getRandomInt(0,canvasW);
				let ny=getRandomInt(0,canvasH);
				//nx=canvasW/2
				//ny=canvasH/2
				for(let k=0;k<this.noisecols;k++){

					for(let j=0;j<this.noiserows;j++){
						//let nx2=getRandomInt(0,canvasW);
						//let ny2=getRandomInt(0,canvasH);
						let nx2=k*(this.midax/this.noisecols)
						let ny2=j*(this.miday/this.noiserows)
						let d=dist(nx,ny,nx2,ny2);
						//console.log(d)
						let dst=int(mmap(d,0,canvasW,1,50))
						//console.log(dst)
						if(getRandomBoolN(dst)){
						//if(noise(k,j)<dst*0.5){
							this.pgs[i].fill(colorLinia)
							this.pgs[i].noStroke();
							//this.pgs[i].rect(k*(this.midax/this.noisecols),j*(this.miday/this.noiserows),this.midax/this.noisecols,this.miday/this.noiserows)
							this.pgs[i].rect(nx2,ny2,this.midax/this.noisecols,this.miday/this.noiserows)

						}
					}
				}
				
			}else if(this.tipus=='bitxu'){
				this.glDespX.push(getRandomInt(2,this.glitchMaxDespX))
				this.glDespY.push(getRandomInt(0,this.glitchMaxDespY))
				let sentitx=getRandomNegatiu()
				this.glSentitX.push(sentitx);
				let sentity=getRandomNegatiu()
				this.glSentitY.push(sentity);
				this.glitchType.push(getRandomInt(0,2));
				let vl=getRandomInt(0,100)*getRandomNegatiu()
				this.glVolaux.push(vl);
				this.glDespX3.push(getRandomInt(1,5));
				this.glDespY3.push(getRandomInt(0,5));
				let fr=getRandomInt(10,50)
				this.glFreqaux.push(getRandomInt(10,50));
				this.glC.push(getRandomInt(1, fr));
				let n=map(abs(vl),0,100,1,this.glitchMaxNum)
				this.glN.push(n)
				let sx=[];
				let sy=[];
				let sh=[];
				let sw=[];
				let dx=[];
				let dy=[];
				let sw3=[];
				for(let i=0; i<n; i++){
					let ssx=getRandomInt(0,pg.width*0.9)
					sx.push(ssx)
					let ssy=getRandomInt(0,pg.height*0.9)
					sy.push(ssy)
					let ssh=getRandomInt(10,pg.height/50)
					sh.push(ssh)
					let ssw=getRandomInt(10,pg.width/50)
					sw.push(ssw)
					dx.push(getRandomInt(ssx,ssx+ssw*2*sentitx))
					dy.push(getRandomInt(ssy,ssy+ssh*2*sentity))
					sw3.push(getRandomInt(pg.width/8,pg.width/4))
				}
				this.glSx.push(sx);
				this.glSy.push(sy);
				this.glSh.push(sh);
				this.glSw.push(sw);
				this.glDx.push(dx);
				this.glDy.push(dy);
				this.glSw3.push(sw3);

			}
		}
	}
	dibuixar(){
		this.pg.clear()
		if(this.tipus=='kick')this.pg.background(colorFons,80);
		for(let i=0;i<seqMax;i++){
			var x=this.ordre[i]
			if(this.dibuixa[x]){
				this.pg.tint(colorLinia, 255);

				if(this.tipus=='kick'){
					//this.pg.imageMode(CENTER)
					this.pg.image(this.pgs[x],0,0)
				}else if(this.tipus=='hihat'){
					this.pg.image(this.pgs[x],(this.midax)*x,0)	
				}else if(this.tipus=='clic'){
					var px=x%(seqMax/2 )
					var py=x%(seqMax/2)
					this.pg.image(this.pgs[x],0,0)
				}else if(this.tipus=='beep'){
					this.pg.image(this.pgs[x],0,(this.miday)*x)	
				}else if(this.tipus=='noise'){
					this.pg.image(this.pgs[x],0,0)
				}else if(this.tipus=='bitxu'){
					if(this.glitchType[x]==0){
						this.glitch_1(x)
					}else if(this.glitchType[x]==1){
						this.glitch_2(x);
					}else if(this.glitchType[x]==2){
						this.glitch_3(x);
					}
				}

			}
			
		}
		pg.image(this.pg,canvasW/2,canvasH/2)
	}
	dibuixar_delay(){
		//this.pg.clear()
		//if(this.tipus=='kick')this.pg.background(colorFons,80);
		for(let i=0;i<seqMax;i++){
			var x=this.ordre[i];
			this.alphas[x]=this.alphas[x]-1;
			var dx=getDRandomInt(0,this.maxDelayMov)*getDRandomNegatiu();
			var dy=getDRandomInt(0,this.maxDelayMov)*getDRandomNegatiu();
			if(this.alphas[x]<=0){
				this.dibuixaDelay[x]=false;
			}
			if(this.dibuixaDelay[x]){
				this.pg.tint(this.tint, this.alphas[x]);

				if(this.tipus=='kick'){
					//this.pg.imageMode(CENTER)
					this.pg.image(this.pgs[x],dx,dy)
				}else if(this.tipus=='hihat'){
					this.pg.image(this.pgs[x],(this.midax)*x+dx,dy)	
				}else if(this.tipus=='clic'){
					var px=x%(seqMax/2 )
					var py=x%(seqMax/2)
					this.pg.image(this.pgs[x],dx,dy)
				}else if(this.tipus=='beep'){
					this.pg.image(this.pgs[x],dx,(this.miday)*x+dy)	
				}else if(this.tipus=='noise'){
					this.pg.image(this.pgs[x],dx,dy)
				}else if(this.tipus=='bitxu'){
					if(this.glitchType[x]==0){
						this.glitch_1(x)
					}else if(this.glitchType[x]==1){
						this.glitch_2(x);
					}else if(this.glitchType[x]==2){
						this.glitch_3(x);
					}
				}

			}
			
		}
		pg.image(this.pg,canvasW/2,canvasH/2)
	}
	createPatterns(){
		this.paterns=[];
		for(let i=0;i<numPaterns;i++){
			var p=[];
			for(let j=0;j<seqMax;j++){
				if(i>0 && this.paterns[i-1][j]==true){
					p.push(true)
				}else{
					if(i==0){
						p.push(false)
					}else{
						p.push(getRandomBoolN(numPaterns-i))
					}
					
				}
				
			}
			this.paterns.push(p)
		}
	}
	paternUp(name){
		modeAuto=false;
		tocat=true;
		if(this.numPatern<numPaterns-1){
			this.numPatern+=1
		}
		console.log(name + "numPatern: "+this.numPatern)
	}
	paternDown(name){
		modeAuto=false;
		tocat=true;
		if(this.numPatern>0){
			this.numPatern-=1

		}
		console.log(name + "numPatern: "+this.numPatern)
	}
	paternUpAuto(name){
		if(this.numPatern<numPaterns-1){
			this.numPatern+=1
			this.lastPatern=this.numPatern
		}
		console.log(name + "numPatern: "+this.numPatern)
	}
	paternDownAuto(name){
		if(this.numPatern>0){
			this.numPatern-=1
			this.lastPatern=this.numPatern

		}
		console.log(name + "numPatern: "+this.numPatern)
	}
	paternChange(midiValue){
		modeAuto=false;
		tocat=true;
		this.numPatern=int(mmap(midiValue,0,127,0,numPaterns-1))
		console.log("new pattern: "+this.numPatern)
	}
	delayUp(){
		if(this.delay<maxDelay){
			this.delay+=1
			this.feedback+=1;
			this.tempsDelay=int(mmap(this.delay,0,maxDelay,0,seqMax-1))
			this.maxDelayMov=int(mmap(this.delay,0,maxDelay,0,10))

			sendMsgToWebPd(this.id_dl,0,[this.delay]);
			sendMsgToWebPd(this.id_fb,0,[this.feedback]);
		}
	}
	delayDown(){
		if(this.delay>0){
			this.feedback-=1;
			this.delay-=1;
			this.tempsDelay=int(mmap(this.delay,0,maxDelay,0,seqMax-1))
			this.maxDelayMov=int(mmap(this.delay,0,maxDelay,0,10))
			sendMsgToWebPd(this.id_dl,0,[this.delay]);
			sendMsgToWebPd(this.id_fb,0,[this.feedback]);
		}
	}
	delayUpAuto(name){
		if((this.delay+10)<maxDelay){
			this.lastDelay=this.delay;
			this.lastFeedback=this.feedback;

			this.delay+=10
			this.feedback+=10;
			this.tempsDelay=int(mmap(this.delay,0,maxDelay,0,seqMax-1))
			this.maxDelayMov=int(mmap(this.delay,0,maxDelay,0,10))
			console.log(name + "delay: "+this.delay)

			sendMsgToWebPd(this.id_dl,0,[this.delay]);
			sendMsgToWebPd(this.id_fb,0,[this.feedback]);
		}
	}
	delayDownAuto(name){
		if((this.delay-10)>0){
			this.lastDelay=this.delay;
			this.lastFeedback=this.feedback;
			this.feedback-=10;
			this.delay-=10;
			this.tempsDelay=int(mmap(this.delay,0,maxDelay,0,seqMax-1))
			this.maxDelayMov=int(mmap(this.delay,0,maxDelay,0,10))
			console.log(name + "delay: "+this.delay)
			sendMsgToWebPd(this.id_dl,0,[this.delay]);
			sendMsgToWebPd(this.id_fb,0,[this.feedback]);
		}
	}
	delayChange(midiValue){
		modeAuto=false;
		tocat=true;
		//this.delay=int(midiValue/2);
		//this.feedback=int(midiValue/2);
		this.delay=int(mmap(midiValue,0,127,0,maxDelay-1))
		this.feedback=int(mmap(midiValue,0,127,0,maxDelay-1))
		this.tempsDelay=int(mmap(this.delay,0,maxDelay,0,seqMax-1))
		this.maxDelayMov=int(mmap(this.delay,0,maxDelay,0,10))

		sendMsgToWebPd(this.id_dl,0,[this.delay]);
		sendMsgToWebPd(this.id_fb,0,[this.feedback]);
	}
	glitch_1(num){
      
      let desp=this.glDespX[num];
      let despy=this.glDespY[num]
      if(!this.glitchTeDespY) despy=0
      let sentit=this.glSentitX[num];
      let sentity=this.glSentitY[num];
      let volaux=this.glVolaux[num];
      let freqaux=this.glFreqaux[num];
      let threshold=2
      let n=this.glN[num]
      let c=this.glC[num];

      
        for(let i=0; i<n; i++){
          let sx=this.glSx[num][i];
          let sy=0
          let sw=this.glSw[num][i];
          let sh=pg.height
          let dx=this.glDx[num][i];
          let dy=canvasH/2
          let dw=sw;
          let dh=sh;
          image(pg,canvasW/2+dx,dy,dw,dh,sx,sy,sw)
          if(this.glitchMulti){    
            for(let j=0;j<c;j++){
              image(pg,dx+j*desp*sentit,dy+j*despy*sentity,dw,dh,sx,sy,sw)
            }
          }
        }
    }
    glitch_2(num){
      let despy=this.glDespX[num];
      let despx=this.glDespY[num];
      if(!this.glitchTeDespY) despx=0
      let sentit=this.glSentitX[num];
      let sentity=this.glSentitY[num];
      let volaux=this.glVolaux[num];
      let freqaux=this.glFreqaux[num];

      let threshold=2
		let n=this.glN[num]

	  let c=this.glC[num];
     
        for(let i=0; i<n; i++){
          let sy=this.glSy[num][i];
          let sx=0
          let sh=this.glSh[num][i];
          let sw=pg.width
          let dy=this.glDy[num][i];
          let dx=0
          let dw=sw;
          let dh=sh;
          image(pg,canvasW/2+dx,dy,dw,dh,sx,sy,sw)
          if(this.glitchMulti){    
            for(let j=0;j<c;j++){
              image(pg,dx+j*despx*sentit,dy+j*despy*sentity,dw,dh,sx,sy,sw)
            }
          }
        }
      
    }
    glitch_3(num){
    	if(this.glitchCont==0){
        pgGlitch.clear()
        pgGlitch.background(colorFons,0)
        let desp=this.glDespX3[num];
        let despy=this.glDespY3[num];
         let sentit=this.glSentitX[num];
      	let sentity=this.glSentitY[num];
      	let volaux=this.glVolaux[num];
        let freqaux=this.glFreqaux[num];
        let threshold=10
        let n=this.glN[num]

        let c=this.glC[num];
       
          for(let i=0; i<n; i++){
            let sx=this.glSx[num][i];
            let sy=0
            let sw=this.glSw3[num][i]
            let sh=pg.height
            let dx=sx
            let dy=0
            let dw=sw;
            let dh=sh;             
              for(let j=0;j<c;j++){
                pgGlitch.image(pg,dx+j*desp*sentit,dy+j*despy*sentity,dw,dh,sx,sy,sw)
              }
            
          }
        
        pg.image(pgGlitch,canvasW/2,canvasH/2)
        this.glitchCont+=1
      }else{
        pg.image(pgGlitch,canvasW/2,canvasH/2)
        this.glitchCont+=1
        if(this.glitchCont>5)this.glitchCont=0
      }
    }
}