//////////////////////////////////////////////////
// GENESIS PROJECT ON FXHASH
// Collection: CANTABILE
// Filename: sakura.js
// Project Author: Neverfamousartists, Jan Studio 
// Twitter: @nfamousartists, @jan_studio8
// Date: 1 April 2023
//////////////////////////////////////////////////

let minSize=3;
class SAKURA{
    constructor(c,x,y,rad_range){
        this.fColor=c;
        this.x=x;
        this.y=y;
        this.petalRadiusRange=rad_range;
        this.coreColor=color(hue(c),min(saturation(c)+20,100),max(brightness(c)-20,0),min(alpha(c)+20,100));
    }
    show(){
        // create flower core, 5 petals and filaments
        this.createPatch(this.coreColor,this.x,this.y,this.petalRadiusRange); //flower core
        push()
        this.createPatch(color(0,0,100,100),this.x,this.y,[this.petalRadiusRange[0]*0.2,this.petalRadiusRange[1]*0.2]);
        pop()
        
        // flower petals, filaments and anthers
        let relativeXY=[0,-this.petalRadiusRange[1]*1.3];
        let pColor;
        for(let i=0; i<5; i++){ // 5 petals

            // petal
            push()
            translate(relativeXY[0],relativeXY[1])
            pColor=color(max(hue(this.fColor)-1,0),saturation(this.fColor)*random(0.7,1.2),brightness(this.fColor)*random(0.9,1.2),alpha(this.fColor));
            this.createPatch(pColor,this.x,this.y,this.petalRadiusRange); // flower petal
            pop()

//            // filament
//            stroke(255) 
//            strokeWeight(0.1) // faint line
//            let v=createVector(relativeXY[0],relativeXY[1]);
//            let fLength=random(0.7,1.2)
//            line(this.x,this.y,this.x+v.x*fLength,this.y+v.y*fLength) // filament
            relativeXY=this.rotatePoint(relativeXY,360/5)

//            // anther
//            push()
//            this.createPatch(color(0,0,100,100),this.x+v.x*fLength,this.y+v.y*fLength,[this.petalRadiusRange[0]*0.02,this.petalRadiusRange[1]*0.05]);
//            pop()
        }
        
        // filaments and anthers
        let nFilaments=random(5,15);
        let v; let fLength;
        for(let i=0; i<nFilaments;i++){
            v=createVector(relativeXY[0],relativeXY[1]);
            fLength=random(0.7,1.1)
            stroke(255)
            strokeWeight(0.3)
            line(this.x,this.y,this.x+v.x*fLength,this.y+v.y*fLength) // filament
            
            relativeXY=this.rotatePoint(relativeXY,360/nFilaments)
            push()
            fill(0,0,100,100)
            circle(this.x+v.x*fLength,this.y+v.y*fLength,this.petalRadiusRange[1]*0.05) //anther
            pop()
        }
        
        
    }
    createPatch(c,x,y,petalRadiusRange){
        for(let i=0;i<4;i++){
            fill(hue(c)-i,saturation(c)*0.9^i,brightness(c),alpha(c)*random(0.8,1.2))
            noStroke();
            push();
            translate(x, y);
            rotate(random(360));
            beginShape();
            for (let m = 0; m < 360; m += 10) {
                let r = random(petalRadiusRange[0], petalRadiusRange[1]);
                let x = cos(m) * r;
                let y = sin(m) * r;
                vertex(x, y);
            }
            endShape(CLOSE);
            pop();   
        }  
    }
    rotatePoint(xy,angle){
        let newX=xy[0]*cos(angle)-xy[1]*sin(angle);
        let newY=xy[0]*sin(angle)+xy[1]*cos(angle);
        return [newX,newY]
    }
}
function createWcPatch(c,x,y,petalRadiusRange){
    for(let i=0;i<4;i++){
        fill(hue(c)-i,saturation(c)*0.9^i,brightness(c),alpha(c)*random(0.8,1.2))
        noStroke();
        push();
        translate(x, y);
        rotate(random(360));
        beginShape();
        for (let m = 0; m < 360; m += 10) {
            let r = random(petalRadiusRange[0], petalRadiusRange[1]);
            let x = cos(m) * r;
            let y = sin(m) * r;
            vertex(x, y);
        }
        endShape(CLOSE);
        pop();   
    }  
}