//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq


let strkw ;
let cntp ;
let cira ; 
let es ; 
class CirlineManager{

	constructor(){
		this.cosos = [];
		this.name = "Cirline";
		this.dir = "Cirline"; 
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
    
       // console.log(u_fxhash.hilos);
        strkw = genR(1,2.);
        cntp = u_fxhash.hilos;
        cira = genR(30,255);
        es = genR(2,7); //ellipse size.
    }

    setup() {
        this.cosos = [];
        let cnt = u_fxhash.nodos; 
        this.gc1  = color(genR(255), genR(255), genR(255));
        this.gc2  = color(genR(255), genR(255), genR(255));

        let r1 = genR(width*.01,width*.1);
        let rdm = 120;
        let xr = random(-rdm,rdm);
        let yr = random(-rdm,rdm);

        let x1 = width/2+xr;
        let y1 = height/2+yr;

        for (let i=0; i<cnt; i++){
            let amp = height*0.35;
            let idx =map(i,0,cnt-1,0,1);
            let a =map(i,0,cnt,0,TWO_PI);
            let xx = width/2 + sin(a)*amp;
            let yy = height/2 + cos(a)*amp;
            let r2 = genR(20,100);
            this.cosos.push(new Coso(this.gc1,this.gc2,x1,y1,xx,yy,r1,r2)); 


            this.gc3  = color(genR(255), genR(255), genR(255));
      //      this.cosos.push(new Coso(this.gc1,this.gc3,random(width),random(height),xx,yy,genR(20),r1)); 


        }
        this.c1 = color(genR(255), genR(255), genR(255));
        document.getElementById("loading").style.visibility = "hidden";
    }

    draw(_ps) {		
        _ps.background(0);



        //checkear si hay uno agarrado : 
        let agarrado = false;
        for(let i=0; i<this.cosos.length; i++){
            if(this.cosos[i].grab2 ){
                agarrado = true;
            }
        }


        for (let i=0; i<this.cosos.length; i++){
            
            this.cosos[i].draw(_ps); 
            this.cosos[i].update(); 

            if(!agarrado){
                /*if(dist(mouseX,mouseY,this.cosos[i].x1,this.cosos[i].y1) < this.cosos[i].r1*2. && mouseIsPressed){
                    this.cosos[i].grab1 = true;
                }*/
                
               if(dist(mouseX,mouseY,this.cosos[i].x2,this.cosos[i].y2) < this.cosos[i].r2*2. && mouseIsPressed){
                    this.cosos[i].grab2 = true;
                    agarrado = true;
                }
            }

        }

        if(!mouseIsPressed){
            for (let i=0; i<this.cosos.length; i++){
             //   this.cosos[i].grab1 = false;
                this.cosos[i].grab2 = false;
            }
        }


    }

    update() {

    }

    generate2(_ps) {
       ellipse(20,20,mouseX,mouseY);
       
       this.fff(width/2,height/2,10);
    }
  
    fff(_x, _y,cnt2){
        this.gc1 = color(random(255),random(255),random(255));
        this.gc2 = color(random(255),random(255),random(255));
       
        let cnt = floor(random(4,20));
        let r1 = random(30,300);
        let r2 = random(10,120);
        
        let rdm = 120;
        let xr = random(-rdm,rdm);
        let yr = random(-rdm,rdm);

        

        for(let i =0; i<cnt ; i++){
          let amp = 400;
          let idx =map(i,0,cnt-1,0,1);
          let a =map(i,0,cnt,0,TWO_PI);
          let xx = _x + sin(a)*amp;
          let yy = _y + cos(a)*amp;
          
          
          this.ff(_x+xr,_y+yr,
              xx,yy,r1,r2);
        }
        
      }
      ff( _x,
       _y,
       _x2,
       _y2,
       _r1,
       _r2){
        
        let cnt =30;
        let amp  = _r1;
        let amp2  = _r2;
        let c1 = color(random(255),random(255),random(255));
        let c2 = color(random(255),random(255),random(255));
        
        c1 = color(random(100,255),random(30,120),random(50,100));
        c2 = color(random(10,250),random(20,40),random(120,255));
        
        c1 = lerpColor(this.gc1,c1,random(1));
        c2 = lerpColor(this.gc2,c2,random(1));
        let fase = 0;
        let fase2 = random(PI);
        for(let i =0; i<cnt; i++){
          let idx = map(i,0,cnt-1,0,TWO_PI);
          let xx = _x + sin(idx+fase)*amp;
          let yy = _y + cos(idx+fase)*amp;
          
          let xx2 = _x2 + sin(idx+fase2)*amp2;
          let yy2 = _y2 + cos(idx+fase2)*amp2;
          
          if(u_fxhash.specialshape){
            xx = _x + sin(idx+fase)*amp*amp2;
            yy = _y + cos(idx+fase)*amp*amp2;
          }



          fill(255,125);
          ellipse(xx,yy,5,5);  
          fill(255,125);
          ellipse(xx2,yy2,5,5);
          strokeWeight(2);
          
          let c3 = lerpColor(c1,c2,sin(idx)*.5+.5);
          stroke(c3,150);
          line(xx,yy,xx2,yy2);
        }
      }
    runAudio(){

    }
}


class Coso{

    constructor(gc1,gc2,_x1,_y1,_x2,_y2,_r1,_r2){
        
        
        let c1 = color(random(255),random(255),random(255));
        let c2 = color(random(255),random(255),random(255));
        
        this.c1 = color(random(100,255),random(30,120),random(50,100));
        this.c2 = color(random(10,250),random(20,40),random(120,255));
        
        this.c1 = lerpColor(gc1,c1,random(1));
        this.c2 = lerpColor(gc2,c2,random(1));

        this.r =_r1;
        this.r2 = _r2;

        this.x1 = _x1;
        this.x2 = _x2;
        this.y1 = _y1;
        this.y2 = _y2;

        this.fase = 0;
        this.fase2 = random(PI);
        this.cnt2 = cntp;

        this.fase3 = random(TWO_PI);
        this.t =0;

        this.grab1 = false;
        this.grab2 = false;

        this.amp1 = 20;

        this.estre = floor(genR(1,10));
    }

    draw(_ps){

        let cnt2 =this.cnt2;
        let amp  = sin(millis()*0.00001)*this.r/2+this.r;
        let amp2  = sin(millis()*0.0001+this.fase3)*this.r2/2.+this.r2;
    
        for(let i =0; i<cnt2; i++){
        
          let idx = map(i,0,cnt2-1,0,TWO_PI);
          let amp3 = sin(idx*this.estre+this.t)*0.2+0.8;
          let xx = this.x1 + sin(idx+this.fase+this.t)*amp;
          let yy = this.y1 + cos(idx+this.fase+this.t)*amp;
          
          let xx2 = this.x2 + sin(idx+this.fase2+this.t)*amp2;
          let yy2 = this.y2 + cos(idx+this.fase2+this.t)*amp2;
         // u_fxhash.specialshape = true;
          if(u_fxhash.specialshape){
            xx2 = this.x2 + sin(idx+this.fase2+this.t)*amp2*amp3;
            yy2 = this.y2 + cos(idx+this.fase2+this.t)*amp2*amp3;
            
          }

          _ps.fill(255,125);
          _ps.ellipse(xx,yy,es,es);  
          _ps.fill(255,125);
          _ps.ellipse(xx2,yy2,es,es);
          _ps.strokeWeight(strkw);
          
          let c3 = lerpColor(this.c1,this.c2,sin(idx)*.5+.5);
          c3.setAlpha(cira);
          _ps.stroke(c3);
          _ps.line(xx,yy,xx2,yy2);
        }

    }
    update(){
        this.t = millis()*0.0001;
        
        if(this.grab1){
            this.x1 = mouseX;
            this.y1 = mouseY;
        }
        if(this.grab2){
            this.x2 = mouseX;
            this.y2 = mouseY;
        }

        if(dist(mouseX,mouseY,this.x1,this.y1) < 100 && mouseIsPressed){
            this.x1 = mouseX;
            this.y1 = mouseY;
        }
        /*
        if(dist(mouseX,mouseY,this.x2,this.y2) < 100 && mouseIsPressed){
            this.x2 = mouseX;
            this.y2 = mouseY;
        }*/
    }
   
}