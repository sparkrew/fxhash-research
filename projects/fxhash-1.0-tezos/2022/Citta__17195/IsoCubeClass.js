class IsoCube{
    constructor(x,y,size,dir,origin="bottom"){
      this.x = x ;
      this.y=y;
      this.origin = origin
      this.position;//= createVector(x,y-size/2);
      this.dir = dir;
      this.size = size;
      this.faces = [];
      this.childDir=undefined;
      this.type = undefined;
    }
  
  init(){
  
    if(this.origin==="center"){
      this.position = createVector(this.x,this.y);
    }
    if(this.origin==="bottom"){
      this.position = createVector(this.x,this.y-this.size/2);
    }
    if(this.origin==="rightBack"){
      this.position = getPoints(this.x,this.y,30,this.size/2)
    }
    if(this.origin==="leftBack"){
      this.position = getPoints(this.x,this.y,150,this.size/2)
    }
    // if(this.origin==="rightFront"){
    //   this.position = getPoints(this.x,this.y,210,this.size/2)
    // }
    // if(this.origin==="leftFront"){
    //   this.position = getPoints(this.x,this.y,330,this.size/2)
    // }
    // if(this.origin==="top"){
    //   this.position = createVector(this.x,this.y+this.size/2);
    // }
    if(this.origin==="bottom"  || this.origin==="rightBack" || this.origin==="leftBack" || this.origin==="center"  ){
     
      let topFace = new Face(this.position,this.size,"top",this.dir)
      topFace.createFace();
      let rightFace = new Face(this.position,this.size,"right",this.dir)
      rightFace.createFace();
      let leftFace = new Face(this.position,this.size,"left",this.dir)
      leftFace.createFace();
      
      this.faces = [topFace,rightFace,leftFace]
    }
    
  }
  
  display(c1,c2,c3){
   // randomSeed(seed)
    //this.init();
   for(let i=0;i<this.faces.length;i++){
    this.faces[i].display(c1,c2,c3,"color")
   }
  }

  displayDir(origin,palette,bm){
    //this.init();
   for(let i=0;i<this.faces.length;i++){
    this.faces[i].displayDirection(origin,palette,bm)
   }
  }

  displaySymbol(l){
    
    this.faces[0].addDroid(l)
    
  }

  displayAntenna(){
    //this.init();
  
    this.faces[0].addAntenna()
   
  }
  displayCorners(){
    //this.init();
   for(let i=0;i<this.faces.length;i++){
    this.faces[i].displayCorners()
    this.faces[i].displayDirection()
   }
  }
  }

  class IsoGrid{
    constructor(x,y,tileWidth,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.tileWidth = tileWidth;
        this.points = [];
        this.divisor = 1.15;
        this.cubes = [];
    }
  
    calculatePoints(){
        for(let x=0;x<this.w;x++){
            for(let y=0;y<this.h;y++){
                let sx = x*this.tileWidth/this.divisor-y*this.tileWidth/this.divisor;
                let sy = x*this.tileWidth/2+y*this.tileWidth/2;
                this.points.push(createVector(sx+this.x,sy+this.y-this.tileWidth*this.w/2));
            }
        }
  }
        display(s){
            // this.points.forEach((element,index)=>{
            //     push()
            //     translate(element.x,element.y);
            //     // fill(255,0,100);
            //     // rectMode(CENTER);
            //     // rotate(45);
            //     // rect(0,0,this.tileWidth/2,this.tileWidth/2)
            //    let f =  new Face(createVector(0,0),this.tileWidth/2,"top","up")
            //    f.createFace()
            //   f.display("#fffa","#0faa","#1f1","color")
            //   stroke(0,100,100)
            //   text(index,0,0)
            //     pop()
                
            // });
            
            // blendMode(BLEND)
            for(let i =0;i<this.points.length;i++){
              if((i-IntRandRange(1,10))%IntRandRange(1,5)){
              let ic = new Cube(this.points[i].x,this.points[i].y,this.tileWidth*s*width/1000,"up");
              
              ic.origin = "bottom"
              ic.init()
              this.cubes.push(ic);
              //ic.display()
              }
            }
          }
       
    }


    