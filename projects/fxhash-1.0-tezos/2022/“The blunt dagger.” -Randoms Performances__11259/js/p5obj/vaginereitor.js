//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class VaginereitorManager{
	//var cosos = [];

   

	constructor(){
		this.cosos = [];
		//maxpasadas = 9;
		this.name = "VaginaReitor";
		this.dir = "VaginaReitor";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
		
	}
	

	
    draw(_ps) {
		
		if(!this.loaded){				
			background(255,0,0);
			this.generate2(_ps);
			this.loaded = true;
			console.log("test");
		}
	}

	update(){
	
	}
	generate2(_ps){
	  let c1 = lerpColor(color(255,100,100),color(200,100,80),genR(1));
	  
	  
	  let c2 = color(20,0,0);
	  
	  background(c1);
	  let rdmseed= genR(10000);
	   
	  
	  let cnt = floor(genR(4,7));
	   for(let i=0; i<cnt; i++){
		let cf =lerpColor(c1,c2,map(i,0,cnt,0,1));
		fill(cf,genR(50,150));
		noStroke();
		
		let s = map(i,0,cnt-1,150,0);
	
		this.layer1(_ps,s);
	  }
	}
  
	layer1(_ps,amp){
	 let  rdmseed= genR(10000);
	  let pos = [];	 
	  let cnt = floor(genR(10,15));
	  
	  let rdm = genR(20,100);
	  for(let i =0;i< cnt; i++){

		let x =0;
		let a= map(i,0,cnt-1,0,PI);
		let index =map(i,0,cnt-1,0,1);
		x = width/2 - sin(a)*amp;
		if(i>0 && i<cnt-1){
		  x-=noise(index*4+rdmseed)*rdm;
		}
		pos.push(createVector(x,map(i,0,cnt-1,0,height)));
	  }
	  beginShape();
	  for(let i=0; i<cnt;i++){
			vertex(pos[i].x,pos[i].y);
	  }
	  endShape(CLOSE);
		
	  beginShape();
		for(let i=0; i<cnt;i++){
			vertex(width-pos[i].x,height-pos[i].y);
		}
		endShape(CLOSE);
		 
	  
	}
}