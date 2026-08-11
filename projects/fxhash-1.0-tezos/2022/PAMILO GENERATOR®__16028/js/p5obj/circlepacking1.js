//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq

/*Concept:
What happens once you die ? Does your existence just vanishes from the universe or do you became part itself of the universe? Is your consciousness something that relates just your being or is it just an ilussion made by a cultural heritage? Where does the conception of yourself and the rest of the existence begin and end? After all we are just. Dust in the wind. Energy Spheres moving into the forces of the cosmos.

Technical Information :

Technical information :
-P5 buffer that uses a circle packing algorithm.
-Image processing scale displacement.
-Image processing bloom.

Interaction :
-Press 1,2 or 3 to change the active render.
-Press letter D to show sliders, move them to change parameters.*/


class CirclePackingMaster{

	constructor(){
		this.cosos = [];
		this.name = "Circle Packing Master";
		this.dir = "Circle Packing Master";
		this.duration = 300;
		this.lasttime = 0;
		this.localUniformsNames = [];
		this.localUniformsValues = [];
        this.loaded = false;
        this.generate = true;
        

        this.colores = [];
        this.bgcolor  = color(255,234,200);

        this.colores = [color(230,145,144),
            color(22,159,41),
            color(223,48,16),
            color(237,178,14),
           color(40,130,186),
           color(20,20,20)]
        
        this.RM = new RenderManager();
        this.RM.addShader('shaders/generative/papel2.frag', 0, "papel2.frag");

        this.RM2 = new RenderManager();
        this.RM2.addShader('shaders/generative/noisify1.frag', 0, "noisify.frag");
        

        this.p5pfp = createGraphics(windowWidth,windowHeight);
        this.p5pg = createGraphics(windowWidth, windowHeight);
        
    }

    setup() {

    }
    draw(_ps) {		
		  if(!this.loaded){				
            
            this,RM.update();
            this.RM.updateDrawOnBuffers();
            _ps.image(this.RM.pgs[0],0,0,width,height);
           
            //this.drawPFP(this.p5pfp,width/2,height/2); //CARGO EL DIBUJO EN EL 
            
            this.generate4(this.p5pg);
            this.loaded = true;
            document.getElementById("loading").style.visibility = "hidden";
        }
        this.RM.update();
        this.RM.updateDrawOnBuffers();
        this.RM2.update();
        this.RM2.updateDrawOnBuffers();

        _ps.image(this.RM.pgs[0],0,0,width,height);
        _ps.image(this.p5pg,0,0,width,height);
        //_ps.image(this.p5pfp,0,0,width,height);
        _ps.image(this.RM2.pgs[0],0,0,width,height);
    }

    update() {
       
    }

    generate4(_ps) {
        _ps.background(0);
        let c1 = color(genR(255),genR(255),genR(255));
        let c2 = color(genR(255),genR(255),genR(255));
        _ps.noStroke();
        this.drawCircle(_ps,width/2,height/2,c1,c2,300,0);
     /* c1 = color(genR(255),genR(255),genR(255));
        c2 = color(genR(255),genR(255),genR(255));
        this.drawCircle(_ps,width/2,height/2,c1,c2);*/


    }

    drawCircle(_ps,_x,_y,_c1,_c2,_r,_ite){
        let cuadrada = height;
        let objs = []
       // console.log(_r);
        for(let i=0; i<5000; i++){
          let a = genR(TWO_PI);

          let xx = _x+sin(a)*genR(_r/2);
          
          let yy = _y+cos(a)*genR(_r/2);
          
          if(_ite == 0){
            xx = width/2+genR(-height/2,height/2);
            yy = height/2+genR(-height/2,height/2);
          }
            
          let obj = {
            x:xx,
            y:yy,
            r:genR(_r)
          };
          let overlap = false;
          for (let k=0; k<objs.length;k++){
            let other = obj;
            let d1 = objs[k];
            let d = dist(d1.x,d1.y,other.x,other.y);
            if(d < other.r + d1.r){
              overlap = true;
              break;
            }
          }
          if(!overlap){
            objs.push(obj);
          }
        }


        for(let i=0; i<objs.length;i++){
           let c3 = lerpColor(_c1,_c2,map(i,0,objs.length-1,0,1));
         // _ps.fill(c3);
         // _ps.ellipse(objs[i].x,objs[i].y,objs[i].r*2.,objs[i].r*2.);

          

           if(_ite  < 2  && objs[i].r > 10){
            let c3 = lerpColor(_c1,_c2,genR(1));
           // c3 = color(255,0,0);
            this.drawE(_ps,objs[i].x,objs[i].y,objs[i].r*2.,c3);
            let c1 = lerpColor(_c1,color(genR(255),genR(255),genR(255)),genR(0.5,1)); 
            let c2 = lerpColor(_c2,color(genR(255),genR(255),genR(255)),genR(0.5,1)); 

            


            this.drawCircle(_ps,objs[i].x,objs[i].y,c1,c2,objs[i].r,_ite+1);
           }
        }
    }

    drawE(_ps,_x,_y,_r,_c){
        
        let cnt = 50;
        let c = _c;
        for(let i=0; i<cnt; i++){
            let sr = map(i,0,cnt,_r*1.5,_r);
            if(i == cnt-1){
              c.setAlpha(255);
              _ps.fill(c);
              _ps.ellipse(_x,_y,sr,sr);
            }else{
              c.setAlpha(10);
              _ps.fill(c);
              _ps.ellipse(_x,_y,sr,sr);
            }
        }
    }

    drawShape(_ps,_x,_y,_r){
        //_ps.fill(c);
        //_ps.ellipse(_x,_y,sr,sr);

        let cnt = 50;
        let c = _c;
        for(let i=0; i<cnt; i++){
            let sr = map(i,0,cnt,_r*1.5,_r);
            if(i == cnt-1){
              c.setAlpha(255);
              _ps.fill(c);
              _ps.ellipse(_x,_y,sr,sr);
            }else{
              c.setAlpha(10);
              _ps.fill(c);
              _ps.ellipse(_x,_y,sr,sr);
            }
        }


    }




}
