class Astro {
    constructor(X_, Y_, R_, backgroundColor_, strokeColor_, deltaY_, noiseXOffset_) {
        this.backGroundColor=backgroundColor_;
        this.strokeColor=strokeColor_;

        this.X=X_
        this.Y=Y_;
        this.R=R_;
        this.deltaY = deltaY_;
        
        this.noiseXOffset=noiseXOffset_;
        this.offsetX=rrnd(0,1000);

        this.noiseYOffset=rrnd(0.0001,0.0001);
        this.offsetY=rrnd(0,1000);
    }


    draw() {
        
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = imageSize[1]/15;
        drawingContext.shadowColor = hex2Color(this.backGroundColor);

        fill(hex2Color(this.backGroundColor, 160));
        stroke(hex2Color(this.strokeColor, 60));
        strokeWeight(0.5);
        circle(this.X, calculateY(this.Y), this.R)

        noStroke();

        for (let i=1;i<=50;i++) {
            fill(hex2Color(this.backGroundColor, 255/i));
            noStroke();
            circle(this.X, calculateY(this.Y), this.R/50*i)
        }

        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = '';

    }

}


class MountainClass {
    constructor(backgroundColor_, strokeColor_, i, Y_, deltaY_, increasingY_, decreasingY_, noiseXOffset_, mountainClass_, sky_=false) {
        this.backGroundColor=backgroundColor_;
        this.strokeColor=strokeColor_;
        
        // Steps on X
        this.stepsX=(imageSize[0])/(i*8);

        // Y = Height - deltaY_ = Variation in Pixels 
        this.Y=Y_;
        this.deltaY = deltaY_;
        this.increasingY= increasingY_;
        if (this.increasingY>0)decreasingY_=0;

        this.decreasingX=0;
        this.decreasingY = decreasingY_;
        if (this.decreasingY>0) {
            this.decreasingX=rrnd(imageSize[0]/4,imageSize[0]*3/4);
        }
        
        this.noiseXOffset=noiseXOffset_;
        this.offsetX=rrnd(0,1000);

        this.noiseYOffset=rrnd(0.0001,0.0001);
        this.offsetY=rrnd(0,1000);

        this.sky = sky_;

        this.mountainClass=mountainClass_;
    }


    draw() {
        let strokeC=hex2Color(this.strokeColor);
        let backgroundC=hex2Color(this.backGroundColor)


        if (!this.sky) {
            drawingContext.shadowOffsetX = 0;
            drawingContext.shadowOffsetY = rrnd(-.02, -0.05)*imageSize[1];
            drawingContext.shadowBlur = imageSize[1]/2;
            drawingContext.shadowColor = strokeC;
        }

        if (this.backGroundColor=="") noFill();
        else fill(backgroundC);

        this.drawStroke(hex2Color(this.strokeColor), backgroundC, 0);

    }

    drawStroke(strokeC, backgroundC, strokeWeight_=0.5,yOff_=0) {
        if (strokeC=="") noStroke;
        else {
            stroke(strokeC);
            strokeWeight(strokeWeight_);
        }

        if (backgroundC=="") noFill();
        else fill(backgroundC);

        let noiseY1=this.offsetY;
        let noiseX1=this.offsetX;

        beginShape()
            
            let dt=0;let it=0;
            let pX=-this.stepsX;let pY=imageSize[1]+yOff_;
            vertex(pX,calculateY(pY));
            for (let x=pX+this.stepsX;x<=imageSize[0]+this.stepsX;x+=this.stepsX) {
                let decreasingY=0;
                if (x>this.decreasingX) {
                    decreasingY=this.decreasingY*dt;
                    decreasingY=0;
                    dt++;
                }

                let yOriginal=this.Y;
                let deltaY=this.deltaY;
                if (this.increasingY>0) {
                    yOriginal=imageSize[1]-noise(noiseX1, noiseY1)*it*this.increasingY;
                    if (yOriginal<this.Y) yOriginal=this.Y;
                    it++;
                }
                let y=yOriginal+noise(noiseX1, noiseY1)*(deltaY+decreasingY);

                if  (noiseX1==this.offsetX || mixedMountains)
                    vertex(x,calculateY(y))
                else
                    bezierVertex(x,calculateY(pY)*this.mountainClass,pX,calculateY(y)*this.mountainClass, x, calculateY(y));

                pX=x; pY=y;
                
                if (this.sky) {
                    for (let i = yOriginal-15; i <= y; i++) {
                        let inter = map(i, yOriginal-15, y, 0, 1);
                        // console.log(inter, x, x+this.stepsX);
                        let c = lerpColor(strokeC, backgroundC, inter);
                        strokeWeight(1);
                        stroke(c);
                        line(x, calculateY(i), x+this.stepsX, calculateY(i));
                    }
                }
                

                noiseX1+=this.noiseXOffset;
            }
            vertex(imageSize[0],calculateY(imageSize[1]));
        endShape()
    }

}
