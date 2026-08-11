//ooNWNcmCSWx7bdGJFnKRoqMXK8CojUdAersLbTrKktFe5T3Hkdq




class PamiloManager{

	constructor(){
		this.cosos = [];
		this.name = "Pamilo";
		this.dir = "Pamilo";
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
           
            this.drawPFP(this.p5pfp,width/2,height/2); //CARGO EL DIBUJO EN EL 
            
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

        _ps.image(this.p5pfp,0,0,width,height);
        _ps.image(this.RM2.pgs[0],0,0,width,height);
    }

    update() {
       
    }

    generate4(_ps) {
      //_ps.background(0.0,0.0,0.0);
      // poly2(width/2,height/2,80,30,8);
      //_ps.fill(0);
      //_ps.rect(width/2,height/2,1800,1800);
      let cuadrada = height;

      let objs = []
      for(let i=0; i<1500;i++){
        let obj = {
          x:genR(width/2 -height/2, width/2 + height/2),
          y:genR(0,height),
          r:genR(20,400)
        };
        
        let overlap = false;
        for (let k=0; k<objs.length;k++){
          let other = obj;
          let d1 = objs[k];
          let d = dist(d1.x,d1.y,other.x,other.y);
          if(d < other.r + d1.r){
            //OVERLAP
            overlap = true;
            break;
          }
        }
        if(!overlap){
          objs.push(obj);
        }
      }
      
      //_ps.fill(255,255);
     // _ps.ellipse(objs[i].x,objs[i].y,objs[i].r*2.,objs[i].r*2.);
      for(let i=0; i<objs.length;i++){
       this.drawItem(_ps,objs[i].x,objs[i].y,objs[i].r*2.,floor(genR(3)));
      // console.log()
       // _ps.fill(255,255);
        //_ps.ellipse(objs[i].x,objs[i].y,objs[i].r*2.,objs[i].r*2.);
      }


      //OJOS CENTRALES : 
      /*
      let sepy = genR(-150,150);
      let s = genR(80,200);
      let sepx =s*genR(1.0,3.0);
      this.drawItem(_ps,width/2-sepx,height/2+sepy,s,3);
      this.drawItem(_ps,width/2+sepx,height/2+sepy,s,3);
      */
     //this.drawPFP(_ps,width/2,height/2);
    }


    drawItem2(_ps,_x,_y,_s){
      
      _ps.fill(this.getColorPalete(_ps));
      _ps.noStroke();
      _ps.ellipse(_x,_y,_s,_s);
    }
    drawItem(_ps,_x,_y,_s,_type){
          _ps.fill(this.getColorPalete(_ps));
          _ps.noStroke();
          let type = _type;
          //type = 0;
          if(type == 0){
            let p1 = floor(genR(150))
            let p2 = p1*floor(genR(8));
            this.poly3(_ps,_x,_y,genR(_s));
          }
          if(type == 1){
            this.caja(_ps,_x,_y,_s);
          }
          if(type == 2){
           
            this.drawBandera(_ps,_x,_y,_s);
          }
          if(type == 3){
            _ps.push();
            _ps.translate(_x,_y);
            _ps.rotate(genR(TWO_PI));
            this.ojo(_ps,0,0,_s)
            this.rayos(_ps,0,0,_s);
            _ps.pop();
          }
    }
    drawPFP(_ps,_x,_y){
      _ps.noStroke();
      _ps.rectMode(CENTER);
     /* let sepy = genR(-150,150);
      let s = genR(80,200);
      let sepx =s*genR(1.0,3.0);
      this.drawItem(_ps,width/2-sepx,height/2+sepy,s,3);
      this.drawItem(_ps,width/2+sepx,height/2+sepy,s,3);
      */
      let xp = genR(width);
      let yp = genR(height);


      let yojos = _y-40;

      let _s = genR(40,100);
      let sepx = genR(30,60);
      let sepyboca = 80;
      let a = atan2(yp-yojos,xp-_x-sepx)+PI/2;
      let a2  = atan2(yp-yojos,xp-_x+sepx)+PI/2;
      

      a = genR(-PI,0);
      a2 = a;
      //this.drawItem(_ps,_x,_y,_s*8.,0);

      let anchopatas = genR(10,40);
      let altopatas = genR(250,350);
      let sepxpatas = 40;

      let sepysombrero = -150;

      _ps.fill(this.getColorPalete(_ps));

      let a4 =genR(PI/2-PI/4,PI/2+PI/4);
      let a5 =genR(-PI/2-PI/4,-PI/2+PI/4);
      let s = genR(1.5,2.5);
      this.drawBrazos(_ps,_x,_y,a4,s);
      this.drawBrazos(_ps,_x,_y,a5,s);


      //for(let i=0; i<cnt; i++){
       // if(i > 1){
       // _ps.strokeWeight(10);
        //_ps.stroke(0);
         // _ps.line(_x,_y,_x+200,_y+200);
          //_ps.line(_x,_y,_x-200,_y+200);
        //}
      //}

      
      _ps.rect(_x,_y,anchopatas,altopatas);
      


      
      _ps.fill(this.getColorPalete(_ps));
      _ps.rect(_x-sepxpatas,_y+altopatas/2,anchopatas,altopatas);
      _ps.rect(_x+sepxpatas,_y+altopatas/2,anchopatas,altopatas);
      _ps.fill(this.getColorPalete(_ps));


      let offsetx1 = genR(30,100);
      let offsety1 = genR(0);
      this.drawBota2(_ps,_x-sepxpatas,_y+altopatas,100,offsetx1,offsety1)
      this.drawBota1(_ps,_x+sepxpatas,_y+altopatas,100,offsetx1,offsety1);

      

      _ps.fill(this.getColorPalete(_ps));
      this.poly2(_ps,_x,_y,_s*genR(2.0,2.5),floor(genR(10,60)),floor(genR(10,60)))
    //  _ps.ellipse(_x,_y,400,400);


      _ps.push();
      _ps.translate(_x-sepx,yojos);
      _ps.rotate(a);
      this.ojo(_ps,0,0,_s)
      _ps.pop();

      _ps.push();
      _ps.translate(_x+sepx,yojos);
      _ps.rotate(a2);
      this.ojo(_ps,0,0,_s)
      _ps.pop();

      _ps.push();
      _ps.translate(_x-sepx,yojos);
      _ps.rotate(a);
      this.rayos(_ps,0,0,_s);
      _ps.pop();

      _ps.push();
      _ps.translate(_x+sepx,yojos);
      _ps.rotate(a2);
      //this.ojo(_ps,0,0,_s)
      this.rayos(_ps,0,0,_s);
      _ps.pop();
      

      _ps.fill(this.getColorPalete(_ps));
      _ps.ellipse(_x,_y,_s*0.5,_s*0.5);

     // _ps.fill(this.bgcolor);
      //this.poly2(_ps,_x,_y+30,_s*0.1,floor(genR(5,100)),floor(genR(10,100)))
      _ps.fill(this.bgcolor);
      this.drawBoca(_ps,_x,_y+sepyboca,_s);
      //_ps.ellipse(_x,_y+sepyboca,_s,_s*genR(0.2,1));


      _ps.push();
      _ps.translate(_x,_y);
      _ps.rotate(genR(-PI/3,PI/3));
      this.drawSombrero(_ps,0,0+sepysombrero,_s*.5);
      _ps.pop();
    }
    drawBrazos(_ps,_x,_y,_a,_s){
        /*FIN DE BRAZOS*/
        _ps.beginShape();
        
        let cnt = 15;
        let a3 =_a;
        let amp1 = 320;
        let px1 = _x;
        let py1 = _y;
        let px2 = px1+sin(a3)*amp1;
        let py2 = py1+cos(a3)*amp1;

        let xfinal = 0.0;
        let yfinal = 0.0;
        for(let i=0; i<cnt; i++){
       
          let rdm = 50;
          let idx = map(i,0,cnt-1,0,1);
          let px3 = lerp(px1,px2,idx);
          let py3 = lerp(py1,py2,idx);
          px3+=genR(-rdm,rdm);
          py3+=genR(-rdm,rdm);

          _ps.stroke(0);
          _ps.noFill();
          _ps.strokeWeight(10);
          _ps.curveVertex(px3,py3);
          _ps.ellipse()
      
          if(i == cnt-2){
            xfinal = px3;
            yfinal = py3;
          }
        }
        _ps.endShape(LINES);
        _ps.noStroke();

        let _h =1;
        _ps.push();
        _ps.translate(xfinal,yfinal);
        _ps.rotate(_a-PI/2);
        _ps.fill(this.colores[floor(genR(this.colores.length))]);
        this.drawMano(_ps,0,0,_s,_h,_a);
        _ps.rotate(-PI/4);
        this.drawMano(_ps,0,0,_s,_h,_a);
        _ps.rotate(PI/2);
        this.drawMano(_ps,0,0,_s,_a);
       
        _ps.pop();

        _ps.push();
        _ps.translate(xfinal,yfinal);
        _ps.rotate(PI/2+_a);
        _ps.fill(this.colores[floor(genR(this.colores.length))]);
        _ps.ellipse(0,0,60,80);
        _ps.pop();
        
      
    }
    drawMano(_ps,_x,_y,_s,_h,_a){

      let amp1 = 400;
      let px1 = _x;
      let py1 = _y;
      let px2 = _x+sin(_a-PI/2)*amp1;
      let py2 = _y+cos(_a-PI/2)*amp1;

      let px3 = _x+sin(_a+PI/2)*amp1;
      let py3 = _y+cos(_a+PI/2)*amp1;

      let px4 = px1+sin(genR(1000))*amp1;
      let py4 = py1+cos(genR(1000))*amp1;

      let rdm = 120;
      //_push();
      //_ps.fill(this.colores[floor(genR(this.colores.length))]);
      _ps.beginShape();
      _ps.curveVertex(_x,_y-4*_s);
      _ps.curveVertex(_x,_y+4*_s);
      _ps.curveVertex(_x+30*_s,_y+8*_s);
      _ps.curveVertex(_x+30*_s,_y-8*_s);
      _ps.endShape(CLOSE);


    }
    drawSombrero(_ps,_x,_y,_s){
      
      let y3 = genR(_s/2,_s*1.5);
      _ps.fill(0);
      _ps.rect(_x,_y,_s*6.,_s/2);
      _ps.fill(255);
      _ps.rect(_x,_y-_s/2,_s*4.,_s/2);
      _ps.fill(0);
      _ps.rect(_x,_y-y3,_s*4.,y3);
      _ps.fill(this.getColorPalete(_ps));


      let cnt = floor(genR(2,5));
      let cnt2 = floor(genR(1,4));

      //FLOR
      let c1 = this.getColorPalete(_ps);
      let c2 = this.getColorPalete(_ps);
      for (let i = 0; i < cnt; i++) {
        let idx = map(i, 0, cnt - 1, 0, TWO_PI );
        let amp2 = 0;
        let xx = _x-_s*2. + sin(idx) * amp2;
        let yy = _y + cos(idx) * amp2;
        let ampf = map(i, 0, cnt - 1, _s*.5, 0);
        let f = map(i, 0, cnt-1 , 0, TWO_PI);
        let cf = lerpColor(c1, c2, map(i,0,cnt,0,1));
        _ps.fill(cf);
       // this.pol1(_ps, xx, yy, ampf * 1, f, this.x, this.y, this.pet);
        this.flor1(_ps,xx,yy,10.,f,_x-_s*2.,_y,8);
     }



     






    }
    drawBota1(_ps,_x,_y,_s,_offsetx,_offsety){
      
      let ancho1 = 50;
      let altobota = 50;
     // _ps.ellipse(_x,_y,20,20);

     let offsetx = _offsetx;
     let offsety = _offsety;
      _ps.beginShape();
      _ps.vertex(_x-ancho1/2,_y);
      _ps.vertex(_x-ancho1/2,_y+altobota);
      _ps.vertex(_x,_y+altobota);
      _ps.vertex(_x,_y+altobota/2);
      _ps.curveVertex(_x+ancho1/2+offsetx,_y+altobota+offsety);
      _ps.vertex(_x+ancho1/2,_y);
      _ps.endShape(CLOSE);

    }
    drawBota2(_ps,_x,_y,_s,_offsetx,_offsety){
      
      let ancho1 = 50;
      let altobota = 50;
     // _ps.ellipse(_x,_y,20,20);

     let offsetx = _offsetx;
     let offsety = _offsety;
      _ps.beginShape();
      _ps.vertex(_x+ancho1/2,_y);
      _ps.vertex(_x+ancho1/2,_y+altobota);
      _ps.vertex(_x,_y+altobota);
      _ps.vertex(_x,_y+altobota/2);
      _ps.curveVertex(_x-ancho1/2-offsetx,_y+altobota+offsety);
      _ps.vertex(_x-ancho1/2,_y);
      _ps.endShape(CLOSE);

    }
    drawBoca(_ps,_x,_y,_s){

        let h = genR(20,30);
        let w = genR(40,70);
        let labiosup = genR(2,3.5)
        let labioinf = genR(2,3.5)
        _ps.beginShape();
        _ps.curveVertex(_x,_y+h/2);
        _ps.curveVertex(_x-w/labioinf,_y+h/labioinf);
        _ps.curveVertex(_x-w/2,_y);
        _ps.curveVertex(_x-w/labiosup,_y-h/labiosup);
        _ps.curveVertex(_x,_y-h/2);
        _ps.curveVertex(_x+w/labiosup,_y-h/labiosup);
        _ps.curveVertex(_x+w/2,_y);
        _ps.curveVertex(_x+w/labioinf,_y+h/labioinf);
        _ps.endShape(CLOSE);

        fill(this.bgcolor,255);
        this.drawPucho(_ps,_x,_y);
    }
    drawPucho(_ps,_x,_y){

      let w = genR(30,60);
      let h = genR(5,10);

      _ps.push();
      _ps.translate(_x,_y);
      _ps.rotate(genR(-PI/8,PI+PI/8));
      _ps.translate(genR(40,60),0);
      _ps.fill(255,255);
      _ps.rect(0,0,w,h);
      _ps.fill(this.colores[2]);
      _ps.rect(0-w/2-w/4,0,w/2,h);
      _ps.pop();


    }
    drawBandera(_ps,_x,_y,_s){
      let h = _s;
      let w = h*.45;
    
      let cntc = floor(genR(5,10));
      if(cntc % 2 == 1){
        cntc+=1;
      }
      _ps.push();
      _ps.translate(_x,_y);

      /*if(genR(1) > .5){
        _ps.rotate(PI/2);
      }else{
        _ps.rotate(0);
      }*/
  
      _ps.rotate(genR(TWO_PI));
      this.bandera(_ps,0,0,w,h,cntc);
      _ps.pop();
    }
    caja(_ps,_x,_y,_s){
        let cnt = floor(genR(15));
        
        
        let w = genR(_s);
        let h = genR(_s);
        let fr = 10;
        for(let i=0; i<cnt; i++){
          
          let w2 = map(i,0,cnt-1,w+genR(-fr,fr),0);
          let h2 = map(i,0,cnt-1,h+genR(-fr,fr),0);
          _ps.fill(this.getColorPalete(_ps));
          _ps.rectMode(CENTER);
          _ps.rect(_x,_y,w2,h2);
        }
        
    }
    ojo(_ps,_x,_y,_s){
      
      let s = _s;
      _ps.fill(this.getColorPalete(_ps));
      _ps.ellipse(_x,_y,s,s);
      _ps.fill(255);
      _ps.ellipse(_x,_y,s*0.5,s*0.5);
      _ps.fill(0);
      _ps.ellipse(_x+s*0.05,_y,s*0.25,s*0.25);
      
    }
    rayos(_ps,_x,_y,_amp){
      
      
      let cnt = 10;
      
      
      let x2a = _x+genR(_amp/2.,_amp*2.);
      let y2a = genR(width);
      
      let s = 10;
      let hf = genR(_amp*.2,_amp*.7);
      for(let i=0; i<cnt; i++){
        
        if(i%2 == 0){
          _ps.fill(this.bgcolor);
        }else {
          _ps.fill(this.getColorPalete(_ps));
        }
        
        let x1 = _x;
        let y1 = _y;
        
          
        let x2 = x2a;
        let y2 = map(i,0,cnt-1,_y-hf-s,_y+hf-s);
        
        
        let x3 = x2a;
        let y3 = map(i,0,cnt-1,_y-hf+s,_y+hf+s);
          
        _ps.triangle(x1,y1,x2,y2,x3,y3);
      }
    }
    poly2(_ps,_x,_y,_size,_puntas,_puntas2){
      let fr = 60; //FUERZA genR
      _ps.beginShape();
      for(let i=0; i<_puntas; i++){
        let angulo = map(i,0,_puntas-1,0,TWO_PI);
        let idx = map(i,0,_puntas-1.,0,1);

        let ampmult = sin(angulo-PI/2)*.5+.5;
        let ampnoise = map(noise(idx*10.),0.0,1.0,-20.0,150)*ampmult;
        let amp2 = _size+sin(angulo*_puntas2)*30+ampnoise;
        let x = _x + sin(angulo)*amp2;
        let y = _y + cos(angulo)*amp2;
        _ps.vertex(x,y);
      } 
      _ps.endShape(CLOSE);
    }
    flor1(_ps,
      x,
      y,
      amp,
      fase,
      x2,
      y2,
      _pet) {

      let cnt = 150;
      // letx = width/2;
      // lety = height/2;
      // letamp = 180;
      // fill(255,200,200);
      let t = frameCount * .002;
      _ps.beginShape();
      for (let i = 0; i < cnt; i++) {
          let a = map(i, 0, cnt, 0, TWO_PI);
          let amp2 = amp+sin(a+t);
          let xx = x + sin(a + t + fase) * amp;
          let yy = y + cos(a + t + fase) * amp;
          let idx = sin(t + a * _pet+fase) * .5 + .5;
          let xxx = lerp(xx, x2, idx);
          let yyy = lerp(yy, y2, idx);
          _ps.vertex(xxx, yyy);
      }
      _ps.endShape();
    }
    poly3(_ps,_x,_y,_size){
      let _puntas = floor(genR(4,100));
      let _puntas2 = floor(genR(4,8));
      let fr = 2; //FUERZA genR
      _ps.beginShape();
      let framp = genR(5,30);
      for(let i=0; i<_puntas; i++){
        let angulo = map(i,0,_puntas-1,0,TWO_PI);
        let amp2 = _size+sin(angulo*_puntas2)*framp;
        let x = _x + sin(angulo)*amp2;
        let y = _y + cos(angulo)*amp2;
        _ps.vertex(x,y);
      } 
      _ps.endShape(CLOSE);

    }
    poly(_ps,_x,_y,_size,_puntas){
      let fr = 60; //FUERZA genR
      _ps.beginShape();
      for(let i=0; i<_puntas; i++){
        let angulo = map(i,0,_puntas-1,0,TWO_PI);
        let x = _x + sin(angulo)*_size+genR(-fr,fr);
        let y = _y + cos(angulo)*_size+genR(-fr,fr);
        _ps.vertex(x,y);
      } 
      _ps.endShape(CLOSE);
    }
    bandera(_ps,_x,_y,_w,_h,_rows){


      //_w = 50;
      //_h = 150;
      
      
      let padding = genR(0.1,0.4);
      _ps.fill(this.getColorPalete(_ps));
      
      let xx = _x;
      let yy = _y;
      let ww = _w;
      let hh = _h;
      //_ps.rect(xx,yy,ww,hh);
      this.cuadradito(_ps,xx,yy,ww+padding*ww,hh+padding*hh*2.,8);
      _ps.fill(this.bgcolor);
      let cnt = 15;
      let h2 = _h/_rows;
      for(let i=0; i<_rows; i++){
        let y2 = map(i,0,_rows-1,_y,_y+_h)-_h/2;
        if(i%2==0){
          
          this.cuadradito(_ps,_x-_w*.3,y2,_w/3,_w/3,2);
          this.cuadradito(_ps,_x+_w*.3,y2,_w/3,_w/3,2);
        }else{
          this.cuadradito(_ps,_x,y2,_w/3,_w/3,2);
          // this.cuadradito(_ps,_x-_w/2+_w/3*1.,y2,_w/3,_w/3,2);
        }
      }
    }
    cuadradito(_ps,_x,_y,_w,_h,_fr){
      _w*=.5;
      _h*=.5;

      let fr = _fr;
      _ps.beginShape();
      _ps.vertex(_x-_w +genR(-fr,fr),_y-_h +genR(-fr,fr));
      _ps.vertex(_x+_w +genR(-fr,fr),_y-_h+genR(-fr,fr));
      _ps.vertex(_x+_w +genR(-fr,fr),_y+_h+genR(-fr,fr));
      _ps.vertex(_x-_w +genR(-fr,fr),_y+_h+genR(-fr,fr));
      
      _ps.endShape();
    }
    getColorPalete(_ps){



      let col = this.colores[floor(genR(this.colores.length))]; 
      return col;
    }
}
