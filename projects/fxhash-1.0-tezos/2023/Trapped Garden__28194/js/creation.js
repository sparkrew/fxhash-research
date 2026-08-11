

function tallo(eje,alto,rot,stroke){

    let p1 = eje;
    let p2_temp = [-alto* sin(rot),alto * cos(rot)];
    let p2 = [eje[0]-p2_temp[0],eje[1]-p2_temp[1]]

    let pto=interpolateLine(p1,p2,3,[-alto/30,alto/30],true)
    let ptoCurve=interpolateCurve(pto,3)
    
    drawCurve(pto,stroke)

    return ptoCurve
}

function create_mata(eje,alto,rot,col,stroke_tallo,stroke_hojas,type){
    let puntos=tallo(eje,alto,rot,stroke_tallo);
    let finalPoint = puntos[puntos.length-1];

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.3){
            create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(50+rot,70+rot),col,stroke_hojas,type)  
        }
    }

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.3){
            create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(-70+rot,-50+rot),col,stroke_hojas,type)  
        }
    }

    return finalPoint;
}

function create_leave(eje,alto,rot,col,stroke,type){
    if(type==1){
        create_leave1(eje,alto,rot,col,stroke);
    }
    if(type==2){
        create_leave2(eje,alto,rot,col,stroke);
    }
    if(type==3){
        create_leave3(eje,alto,rot,col,stroke);
    }
    if(type==4){
        create_leave4(eje,alto,rot,col,stroke);
    }
    if(type==5){
        create_leave5(eje,alto,rot,col,stroke,random(2,5));
    }
}

function create_flower(eje,alto,col,n,stroke){
    let space = 360/n;
    let curves = random(2,5);
    for(let i=0;i<n;i++){
        create_leave1(eje,alto*random(0.7,1),space*i+random(-10,10),col,stroke,curves);
        create_leave1(eje,alto*random(0.7,1),-space*i+random(-10,10),col,stroke,curves);
    }
}

function create_brush(eje,alto,col,capas,n,stroke){
    let rot;
    for(let j=0;j<capas;j++){
        for(let i=0;i<n;i++){
            rot = random(-70,70);
            if(rot<0){
                create_leave6(eje,alto*random(0.7,1),rot,col,stroke,0)
            }
            if(rot>=0){
                create_leave6(eje,alto*random(0.7,1),rot,col,stroke,1)
            }
            
        }
    }
}

function create_flower_tallo(eje,alto,alto_flor,rot,col,stroke_tallo,stroke_flor){
    let puntos=tallo(eje,alto,rot,stroke_tallo);
    let finalPoint = puntos[puntos.length-1];
   
   
    for(let i = 4;i<puntos.length-4;i++){
        if(random()<0.1){
    
            create_leave([puntos[i][0],puntos[i][1]],alto/5,random(50+rot,70+rot),col,5)  
        }
    }

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.1){
            create_leave([puntos[i][0],puntos[i][1]],alto/5,random(-70+rot,-50+rot),col,stroke_flor,5)  
        }
    }
    create_flower(finalPoint,alto_flor,col,int(random(10,15)),stroke_flor)
}

function create_flower_tallo1(eje,alto,alto_flor,col,type,stroke_tallo,stroke_flor){
    
    let p2 = [eje[0],eje[1]-alto];
    push()
    strokeWeight(stroke_tallo)
    line(eje[0],eje[1],p2[0],p2[1]);
    pop()
    if(type==1){
        create_flower(p2,alto_flor,col,int(random(10,15)),stroke_flor)
    }
    if(type==2){
        create_brush(p2,alto_flor,col,3,3,stroke_flor)
    }
}

function create_stick(eje,alto,col,rot,stroke_tallo,stroke_hojas){
    push()

    let puntos=tallo(eje,alto,rot,stroke_tallo);
    let finalPoint = puntos[puntos.length-1];

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.2){
            create_leave([puntos[i][0],puntos[i][1]],alto/3,random(50+rot,70+rot),col,stroke_hojas,1)  
        }
    }

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.2){
            create_leave([puntos[i][0],puntos[i][1]],alto/3,random(-70+rot,-50+rot),col,stroke_hojas,1)  
        }
    }

    create_leave(finalPoint,alto/5,random(-70+rot,70+rot),col,stroke_hojas,1)

}

function create_mata1(eje,alto,col,rot,stroke_tallo){
    push()
    let puntos=tallo(eje,alto,rot,stroke_tallo);
    let stick_alto;
    for(let i = 0;i<puntos.length;i++){
        if(random()<0.3){
            stick_alto = random(alto/9,alto/6);
            create_stick([puntos[i][0],puntos[i][1]],stick_alto,col,random(50+rot,70+rot),stroke_tallo/2,stroke_tallo/3)
             
        }
    }

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.3){
            stick_alto = random(alto/9,alto/6);
            create_stick([puntos[i][0],puntos[i][1]],stick_alto,col,random(-70+rot,-50+rot),stroke_tallo/2,stroke_tallo/3) 
        }
    }
    pop()
    

}

function create_cube(eje,alto,ancho,prof,rot){
    let p1  = [eje[0]-ancho/2,eje[1]];
    let p2  = [eje[0]+ancho/2,eje[1]];
    let p3  = [p2[0],p2[1]-alto];
    let p4  = [p1[0],p1[1]-alto];

    let p5  = [p1[0]+prof* sin(rot),p1[1]-prof * cos(rot)];
    let p6  = [p2[0]+prof* sin(rot),p2[1]-prof * cos(rot)];
    let p7  = [p6[0],p6[1]-alto];
    let p8  = [p5[0],p5[1]-alto];

    let cara1 = [p1,p2,p3,p4]; //Frontal
    let cara2 = [p2,p6,p7,p3]; //Derecha
    let cara3 = [p5,p6,p7,p8]; //Trasera
    let cara4 = [p1,p5,p8,p4]; //Izquierda
    let cara5 = [p1,p2,p6,p5]; //Piso
    let cara6 = [p4,p3,p7,p8]; //Techo

    let point1 = line_interpol(p1,p5,0.5);
    let point2 = line_interpol(p2,p6,0.5);
    let midPoint = line_interpol(point1,point2,0.5);

    let point3 = line_interpol(p4,p8,0.5);
    let point4 = line_interpol(p3,p7,0.5);
    let midPoint1 = line_interpol(point3,point4,0.5);
    let alto_flor = 0.7*(midPoint[1]-midPoint1[1])

    let a = getLimit([p1,p2,p3,p4,p5,p6,p7,p8])

    //ellipse(a.xmin,a.ymin,10,10)
    //ellipse(a.xmin,a.ymax,10,10)

    //ellipse(a.xmax,a.ymin,10,10)
    //ellipse(a.xmax,a.ymax,10,10)



    //ellipse(midPoint[0],midPoint[1],10,10)
    //ellipse(midPoint1[0],midPoint1[1],10,10)

    let boxColor = "#ffffff" + "4d"

    //draw_face(cara3, boxColor,maxCanvas*0.002,true)
    draw_face(cara5, boxColor,maxCanvas*0.002,true)
    
    draw_face(cara2, boxColor,maxCanvas*0.002,true)
    push()
    stroke(0)
    //create_flower_tallo(midPoint,alto_flor,alto_flor/2,0,random(features.flowerPal.hex),maxCanvas*0.002,maxCanvas*0.0005)
    create_tree(midPoint,alto_flor)
    pop()
    draw_face(cara4, boxColor,maxCanvas*0.002,true)
    
    draw_face(cara6, boxColor,maxCanvas*0.002,true)
    draw_face(cara1, boxColor,maxCanvas*0.007,false)

    
    push()
    //fill("#000000")
    //ellipse(p1[0],p1[1],10,10)
    //ellipse(p2[0],p2[1],10,10)
    //ellipse(p3[0],p3[1],10,10)
    //ellipse(p4[0],p4[1],10,10)

    //ellipse(p5[0],p5[1],10,10)
    //ellipse(p6[0],p6[1],10,10)
    //ellipse(p7[0],p7[1],10,10)
    //ellipse(p8[0],p8[1],10,10)
    pop()
    return cara1
}


function calculate_cube(eje,alto,ancho,prof,rot){
    let p1  = [eje[0]-ancho/2,eje[1]];
    let p2  = [eje[0]+ancho/2,eje[1]];
    let p3  = [p2[0],p2[1]-alto];
    let p4  = [p1[0],p1[1]-alto];

    let p5  = [p1[0]+prof* sin(rot),p1[1]-prof * cos(rot)];
    let p6  = [p2[0]+prof* sin(rot),p2[1]-prof * cos(rot)];
    let p7  = [p6[0],p6[1]-alto];
    let p8  = [p5[0],p5[1]-alto];

    let limits = getLimit([p1,p2,p3,p4,p5,p6,p7,p8])

    return limits
}   


function main_branch(eje,alto,ancho,interpol,curvy,col){

    let p1 = [eje[0]-ancho/2,eje[1]]; 
    let top1=line_interpol(p1,eje,random(0.2,0.6));
    let p2 = [top1[0],eje[1]-alto]; 



    let pto=interpolateLine(p1,p2,interpol,[-curvy*ancho,curvy*ancho],true)
    let ptoCurve=interpolateCurve(pto,5)
    let ptoCurve2=add_grosor(ptoCurve,ancho,ancho/5)
    let ptoMed=line_interpol(ptoCurve[ptoCurve.length-3],ptoCurve2[ptoCurve2.length-3],0.5);
    let rama = ptoCurve.concat(ptoCurve2.reverse());
    
    rama.push(ptoCurve[0])
    rama.push(ptoCurve[1])

    drawCurve_close(rama,col,maxCanvas*0.002)

    return ptoMed
}

function branch(eje,alto,ancho,rot,curvy){
    let p1 = eje;
    let p2_temp = [-alto* sin(rot),alto * cos(rot)];
    let p2 = [eje[0]-p2_temp[0],eje[1]-p2_temp[1]]

    let pto=interpolateLine(p1,p2,3,[-curvy*ancho,curvy*ancho],true);
    let ptoCurve1=interpolateCurve(pto,5);
    let ptoCurve2=add_grosor(ptoCurve1,ancho,0); 

    

    

    for(let i =10; i<ptoCurve1.length;i++){
        if(random()<0.1){
           
            leave_branch(ptoCurve1[i],alto/1.5,random(50+rot,70+rot),0.6)

        }
    }
    for(let i =10; i<ptoCurve2.length;i++){
        if(random()<0.1){
          
            leave_branch(ptoCurve2[i],alto/1.2,random(-70+rot,50+rot),0.6)
        }
    }


    let rama = ptoCurve1.concat(ptoCurve2.reverse());
    
    rama.push(ptoCurve1[0])
    rama.push(ptoCurve1[1])
    drawCurve_close(rama,"#000000",maxCanvas*0.002)

}

function leave_branch(eje,alto,rot,curvy){
    let p1 = eje;
    let p2_temp = [-alto* sin(rot),alto * cos(rot)];
    let p2 = [eje[0]-p2_temp[0],eje[1]-p2_temp[1]]

    let pto=interpolateLine(p1,p2,3,[-curvy*alto,curvy*alto],true);
    let puntos=interpolateCurve(pto,3);
    drawCurve(pto,maxCanvas*0.002)


    for(let i = 0;i<puntos.length;i++){
        if(random()<0.3){


            create_leave([puntos[i][0],puntos[i][1]],alto/2,random(50+rot,70+rot),actualColor,maxCanvas*0.002,1)
            //create_leave([puntos[i][0],puntos[i][1]],alto/2,random(50+rot,70+rot),random(features.bushPalette.hex),maxCanvas*0.002,2)  
        }
    }

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.3){
    
            create_leave([puntos[i][0],puntos[i][1]],alto/2,random(-70+rot,-50+rot),actualColor,maxCanvas*0.002,1) 
            //create_leave([puntos[i][0],puntos[i][1]],alto/2,random(-70+rot,-50+rot),random(features.bushPalette.hex),maxCanvas*0.002,2)  
        }
    }
}

function create_tree(eje,alto){

    //Create main branch 
    let alto_main = 0.6*alto
    let ancho_main = alto_main/3;
    let col_main =  "#000000"
    pto_med = main_branch(eje,alto_main,ancho_main,2,0.5,col_main)

    //Create secondary branch
    let alto_branch = alto*0.4;
    let ancho_branch = alto_branch/12;


    let num_branches = 10;

    //============================RosbelDev=================

    //leavesColorsTree = random(colorFlowers.filter(c => c.name != features.bushPalette.name));

    actualColor = random(leavesColorsTree.hex);
    
   
    //================End===================================

    for(let i =0;i<num_branches;i++){
        branch(pto_med,random(alto*0.4,alto_branch),ancho_branch,random(-60,60),1.4)
    }

    for(let i =0;i<num_branches;i++){
        branch(pto_med,random(alto*0.4,alto_branch),ancho_branch,random(-60,60),1.5)
    }
    
    
}

function create_mata_flower(eje,alto,rot,col,stroke_tallo,stroke_hojas,type,filtro){
    let puntos=tallo(eje,alto,rot,stroke_tallo);
    let finalPoint = puntos[puntos.length-1];
    let x;
    let y;

    let probFlower = random(0,0.1)
    for(let i = 0;i<puntos.length;i++){

        if(random()<probFlower){
            x = puntos[i][0]
            y = puntos[i][1]
            if(pointInBox(x,y,filtro)==false){
                create_flower([puntos[i][0],puntos[i][1]],alto/5,"#ffffff",random(3,14),maxCanvas*0.002)
                push()
                stroke("#000000")
                fill("#000000")
                ellipse(x,y,alto/18,alto/18)
                pop()
            }
            
        }
        if(random()<0.3){
            x = puntos[i][0]
            y = puntos[i][1]
            if(pointInBox(x,y,filtro)==false){
                create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(50+rot,70+rot),col,stroke_hojas,type)
            }

              
        }
    }

    for(let i = 0;i<puntos.length;i++){
        if(random()<0.001){
            create_flower([puntos[i][0],puntos[i][1]],alto/5,"#ffffff",random(3,14),maxCanvas*0.002)
        }

        if(random()<0.3){
            x = puntos[i][0]
            y = puntos[i][1]
            
            if(pointInBox(x,y,filtro)==false){
                create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(-70+rot,-50+rot),col,stroke_hojas,type) 
            } 
        }
    }

    return finalPoint;
}




function create_mata_filtrada(eje,alto,rot,col,stroke_tallo,stroke_hojas,type,filtro,isBack){
    let puntos=tallo(eje,alto,rot,stroke_tallo);
    let finalPoint = puntos[puntos.length-1];
    let x;
    let y;


    for(let i = 0;i<puntos.length;i++){

       
        if(random()<0.3){
            x = puntos[i][0]
            y = puntos[i][1]
            if(pointInBox(x,y,filtro)==false){
                create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(50+rot,70+rot),col,stroke_hojas,type)
            }

            if(isBack==true && pointInBox(x,y,filtro)==false){
                create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(50+rot,70+rot),col,stroke_hojas,type)
            }
              
        }
    }

    for(let i = 0;i<puntos.length;i++){
      

        if(random()<0.3){
            x = puntos[i][0]
            y = puntos[i][1]
            
            if(pointInBox(x,y,filtro)==false){
                create_leave([puntos[i][0],puntos[i][1]],random(alto/7,alto/5),random(-70+rot,-50+rot),col,stroke_hojas,type) 
            } 
        }
    }

    return finalPoint;
}


function create_cube_back(eje,alto,ancho,prof,rot){
    let p1  = [eje[0]-ancho/2,eje[1]];
    let p2  = [eje[0]+ancho/2,eje[1]];
    let p3  = [p2[0],p2[1]-alto];
    let p4  = [p1[0],p1[1]-alto];

    let p5  = [p1[0]+prof* sin(rot),p1[1]-prof * cos(rot)];
    let p6  = [p2[0]+prof* sin(rot),p2[1]-prof * cos(rot)];
    let p7  = [p6[0],p6[1]-alto];
    let p8  = [p5[0],p5[1]-alto];


    let cara3 = [p5,p6,p7,p8]; //Trasera

    return cara3
}