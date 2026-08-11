class Decorator {
    constructor(growth, gradientColors, domainColors) {
        this.growth = growth;

        this.gradientColors = gradientColors;
        this.domainColors = domainColors;
        this.otherShapeProb=1
    }

    colorByDomain(colorObject,dirSettings) {


        this.growth.cubes.forEach((element, index) => {
            //element.faces.forEach((face) => {
            // randomSeed(seed)
            element.display(
                color(map(index, 0, this.growth.depth, colorObject.top.hue1, colorObject.top.hue2),
                    map(index, 0, this.growth.depth, colorObject.top.satMin, colorObject.top.satMax),
                    map(index, 0, this.growth.depth, colorObject.top.brightMin, colorObject.top.brightMax)),
                color(map(index, 0, this.growth.depth, colorObject.right.hue1, colorObject.right.hue2),
                    map(index, 0, this.growth.depth, colorObject.right.satMin, colorObject.right.satMax),
                    map(index, 0, this.growth.depth, colorObject.right.brightMin, colorObject.right.brightMax)),
                color(map(index, 0, this.growth.depth, colorObject.left.hue1, colorObject.left.hue2),
                    map(index, 0, this.growth.depth, colorObject.left.satMin, colorObject.left.satMax),
                    map(index, 0, this.growth.depth, colorObject.left.brightMin, colorObject.left.brightMax)));

                  if(dirSettings.enabled===true && element.type !=="pyramid"){
                  if(random(0,1)<dirSettings.probability){
                    element.displayDir(element.origin,dirSettings.palette,dirSettings.blendMod)
                    
                  }
                //  if(random(0,1)<0.3){
                //     element.displaySymbol()
                //  }
                  
                  }
            
        });

    }

    addAntenna(opacity, size ,colorParams,depth,style,bm,probability,beaconSettings) {
        this.growth.cubes.forEach((element, index) => {
            if (index === this.growth.cubes.length - 1 && random(0, 1) < probability && element.type !=="pyramid") {
                element.addAntenna(opacity, IntRandRange(size.min, size.max),colorParams,depth,style,bm,beaconSettings);
            }
        });

    }

    addDepth(opacity, blendType, size, colorParams,prob = 0.2) {
        this.growth.cubes.forEach((element, index) => {
            //element.faces.forEach((face) => {

                if (index === this.growth.cubes.length - 1 && random(0, 1) < prob) {
                    element.addDepth(opacity, blendType, size, colorParams);
                }
                //  if(element.position.x>width*0.3 && element.position.x<width*0.75  ){
                //     face.addDepth(opacity,SCREEN,1200);
                // }

          //  })

        });

    }

    

    colorByPosition(colorObject,dirSettings) {


        this.growth.cubes.forEach((element, index) => {
            //element.faces.forEach((face) => {

                element.display(
                    color(map(element.position.y, 0, width, colorObject.top.hue1, colorObject.top.hue2),
                        map(element.position.y, 0, width, colorObject.top.satMin, colorObject.top.satMax),
                        map(element.position.y, 0, width, colorObject.top.brightMin, colorObject.top.brightMax)),
                    color(map(element.position.y, 0, height, colorObject.right.hue1, colorObject.right.hue2),
                        map(element.position.y, 0, height, colorObject.right.satMin, colorObject.right.satMax),
                        map(element.position.x, 0, width, colorObject.right.brightMin, colorObject.top.brightMax)),
                    color(map(element.position.y, 0, height, colorObject.left.hue1, colorObject.left.hue2),
                        map(element.position.y, 0, height, colorObject.left.satMin, colorObject.left.satMax),
                        map(element.position.x, 0, width, colorObject.left.brightMin, colorObject.top.brightMax)), "color");

                        if(dirSettings.enabled===true && element.type !=="pyramid"){
                            if(random(0,1)<dirSettings.probability){
                                element.displayDir(element.origin,dirSettings.palette,dirSettings.blendMod)
                            }
                        }

           // })

        });

    }

    addPyramid(prob,invtop = false,heightSettings) {
        this.growth.cubes.forEach((element, index) => {
            element.faces.forEach((face) => {
                if (element.childDir === undefined && random(0, 1) < prob && element.type!=="pyramid")
                    face.addPyramid(element.faces[1].color, element.faces[2].color,invtop,heightSettings);

            })
        });
    }


    colorByGradient(colorObject) {
        // console.log(colorObject)
        this.growth.cubes.forEach((element, index) => {
            element.faces.forEach((face) => {
                face.display(colorObject.top, colorObject.right, colorObject.left, "gradient")
                //face.displayCenter();
                face.displayDirection(element.origin, colorObject.top, colorObject.right, colorObject.left, "gradient");
            })
        });

    }
    colorDefault() {
        this.growth.cubes.forEach((element, index) => {
            element.faces.forEach((face) => {

                face.display();

            })
        });
    }

    displayDirection(colorObject) {
        this.growth.cubes.forEach((element, index) => {
            // element.faces.forEach((face) => {
            //     // face.display(colorObject.top, colorObject.right, colorObject.left, "gradient")
            //     //face.displayCenter();
            //     face.displayDirection(element.origin);
            // })
            element.displayDir()
        });
    }

    drawFace(face) {
        for (let i = 0; i < face.points.length; i++) {

            vertex(face.points[i].x, face.points[i].y)
            //vertex(this.points[i].x+10,this.points[i].y+10)
        }
        endShape(CLOSE);
    }

    displaySymbol(){
        this.growth.cubes.forEach((element, index) => {
           
if(element.childDir===undefined || element.childDir !=="top")
                element.faces.forEach(x=>{
                    x.addDroid()
                })

            
        });
    }
}