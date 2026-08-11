class PolygonPoints{
    constructor(pos,radius,count,offsetAngle,pointDensity){
this.pos = pos;
this.radius = radius;
this.count = count;
this.offsetAngle =offsetAngle;
this.pointDensity = pointDensity;
this.points = [];
this.anchors =[];
this.debugMode = false;
    }

    calculateAnchors(){
        this.anchors=[]
        for(let i=0+this.offsetAngle;i<(360+this.offsetAngle);i+=360/this.count){
            let x = (this.pos.x + this.radius*cos(i));
            let y = (this.pos.y + this.radius*sin(i));
            this.anchors.push(createVector(x,y));
            if(this.debugMode){
            fill (255)
            circle(x,y,10,10);
            }
            
        }
        
    }

    calculatePoints(){
        this.calculateAnchors();
        this.points=[];
        let length =(this.anchors[1].dist(this.anchors[0]));
        let stepSize = Math.floor(length/this.pointDensity);
        
        for(let i=0;i<this.anchors.length;i++){
            let currentPoint = this.anchors[i];
            let nextPoint = this.anchors[(i+1)%this.anchors.length]
            let angle = (atan2(nextPoint.y-currentPoint.y,nextPoint.x-currentPoint.x));
            
            for(let j=0;j<length;j+=stepSize){
                let x = (currentPoint.x+j*cos(angle));
                let y = (currentPoint.y+j*sin(angle));
                this.points.push(createVector(x,y));
                if(this.debugMode){
                    fill (255)
                    circle(x,y,10,10);
                    }
            }
        }
    }
}

class SpiralPoints extends PolygonPoints{
    constructor(pos,radius,count,offsetAngle,pointDensity){
        super(pos,radius,count,offsetAngle,pointDensity);
        this.inc = 1.1
        this.turns = 3
    }
    calculatePoints(){
        for(let i =0+this.offsetAngle;i<this.turns*360+this.offsetAngle;i+= 360/this.pointDensity){
            let x = (this.pos.x + this.radius*cos(i));
            let y = (this.pos.y + this.radius*sin(i));
            this.points.push(createVector(x,y))
            this.radius-=this.inc*height/1080
        }
    }
}