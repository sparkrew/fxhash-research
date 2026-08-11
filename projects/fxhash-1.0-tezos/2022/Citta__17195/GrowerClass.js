class Grower{
    constructor(initalCube,depth,faceIndex,counter=undefined){
      this.initialCube = initalCube;
      this.depth = depth;
      this.faceIndex = faceIndex;
      this.counter = counter;
      this.scaler =1;
      this.cubes = [];
      this.scaleArray =[];
      this.scalingStyle = "fromScaler"
      this.cubeProb = 1
    }
    
    grow(){
      
      this.initialCube.origin = "bottom";
      this.initialCube.init();
      this.initialSize = this.initialCube.size;
      
      let currentCube = this.initialCube;
      //this.cubes.push(this.initialCube);

      
      let fi;
      for(let i =0;i<this.depth;i++){
      
        if(this.faceIndex===10){
          fi = randomFromArray([0,1,2])
        }
        else if(this.faceIndex===20){
          fi = randomFromArray([0,1]);
        }
        else if(this.faceIndex===30){
          fi = randomFromArray([0,2]);
        }else if(this.faceIndex===40){
          fi = randomFromArray([2,1]);
        }
        else fi =  this.faceIndex
        
        let f = currentCube.faces[fi]
        currentCube.childDir = f.orientation;
        //console.log(currentCube.childDir)
        //console.log("Selected face: "+f.orientation)
        let cc;
        if(this.scalingStyle==="fromScaler"){
          if(random(0,1)<this.cubeProb){
            cc = new Cube(f.midPoint.x,f.midPoint.y,currentCube.size*this.scaler,"up",setOriginFromFace(f))
            cc.type = "cube"
          }else{
            cc = new Pyramid(f.midPoint.x,f.midPoint.y,currentCube.size*this.scaler,"up",setOriginFromFace(f))
            cc.type = "pyramid"
          }
          

        }
        if(this.scalingStyle==="fromArray"){
          if(random(0,1)<this.cubeProb){
          cc = new Cube(f.midPoint.x,f.midPoint.y,randomFromArray(this.scaleArray)*height/1080,"up",setOriginFromFace(f))
          cc.type = "cube"
          }else{
            cc = new Pyramid(f.midPoint.x,f.midPoint.y,currentCube.size*this.scaler,"up",setOriginFromFace(f))
            cc.type = "pyramid"
          }
        }
        
        //let cc = new IsoCube(f.midPoint.x,f.midPoint.y,randomFromArray([20,40,20,20,20,10])*height/1080,"up",setOriginFromFace(f))
         //let cc = new IsoCube(f.midPoint.x,f.midPoint.y,map(sin(f.midPoint.x),-1,1,0.2,0.6)*40*width/1000,"up");
       
        //cc.origin = setOriginFromFace(f); 
        cc.init();
      //  this.cubes.splice(0,1)
        // for(let i=0;i<this.cubes.length;i++){
        //   //if(this.cubes[i].x === cc.position.x  || this.cubes[i].y === cc.position.y){
            
            
        //   //}
        // }
        this.cubes.push(cc);
        currentCube = cc;
      }
    }

  }
  