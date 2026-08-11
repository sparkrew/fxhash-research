function create_leave1(eje,alto,rot,col,stroke){
    let ancho = alto/4;

    let p1 = eje;
    let p2 = [eje[0],eje[1]-alto];

 

    let aI_=interpolateLine(p1,p2,2,[-ancho,-ancho/2],true);
    let aI =rotate_array(eje,aI_,rot);
 


    let aD_=interpolateLine(p1,p2,2,[ancho/2,ancho],true)
    let aD =rotate_array(eje,aD_,rot);
  
    
    drawCurve_close(aI,col,stroke)
    drawCurve_close(aD,col,stroke)
}

function create_leave2(eje,alto,rot,col,stroke){
    let ancho = alto/4;

    let p1 = eje;
    let p2 = [eje[0],eje[1]-alto];


    let aI_=interpolateLine(p1,p2,2,[-ancho,-ancho/2],true);
    let aI =rotate_array(eje,aI_,rot);


    let aD_=interpolateLine(p1,p2,2,[ancho/2,ancho],true)
    let aD =rotate_array(eje,aD_,rot);
    

    
    drawCurve_close(aI,col,stroke);
    drawCurve_close(aD,col,stroke);



    let lC_;

    if(random()<0.5){
        lC_ = interpolateLine(p1,p2,2,[-ancho/5,-ancho/5],true)
    }else{
        lC_ = interpolateLine(p1,p2,2,[ancho/5,ancho/5],true)
    }
    let lC=rotate_array(eje,lC_,rot);
    
    drawCurve(lC,stroke*0.7);
}

function create_leave3(eje,alto,rot,col,stroke){
    let ancho = alto/4;

    let p1 = eje;
    let p2 = [eje[0],eje[1]-alto];

 
    //Ala izquierda
    let aI_=interpolateLine(p1,p2,2,[-ancho,-ancho/2],true);
    let aI =rotate_array(eje,aI_,rot);
    let aIzquierda=interpolateCurve(aI,3); 

    //Ala Derecha
    let aD_=interpolateLine(p1,p2,2,[ancho/2,ancho],true)
    let aD =rotate_array(eje,aD_,rot);
    let aDerecha=interpolateCurve(aD,3) 

    
    drawCurve_close(aI,col,stroke);
    drawCurve_close(aD,col,stroke);


    let lC_;
  
    if(random()<0.5){
        lC_ = interpolateLine(p1,p2,2,[-ancho/5,-ancho/5],true)
    }else{
        lC_ = interpolateLine(p1,p2,2,[ancho/5,ancho/5],true)
    }
    let lC=rotate_array(eje,lC_,rot);
    let lCentral=interpolateCurve(lC,3)

    push()
    strokeWeight(stroke*0.5);
    for(let i=1;i<aIzquierda.length-1;i++){
        if(random()<1){
            line(aIzquierda[i][0],aIzquierda[i][1],lCentral[i+1][0],lCentral[i+1][1])
        }
    }
    for(let i=1;i<aDerecha.length-1;i++){
        if(random()<1){
            line(aDerecha[i][0],aDerecha[i][1],lCentral[i+1][0],lCentral[i+1][1])
        } 
    }
    pop()
    drawCurve(lC,stroke*0.7);
}

function create_leave4(eje,alto,rot,col,stroke){
    let ancho = alto/4;

    let p1 = eje;
    let p2 = [eje[0],eje[1]-alto];

 
    let aI_=interpolateLine(p1,p2,2,[-ancho,-ancho/2],true);
    let aI =rotate_array(eje,aI_,rot);
    let aIzquierda=interpolateCurve(aI,3); 

    let aD_=interpolateLine(p1,p2,2,[ancho/2,ancho],true)
    let aD =rotate_array(eje,aD_,rot);
    let aDerecha=interpolateCurve(aD,3) 

    
    drawCurve_close(aI,col,stroke)
    drawCurve_close(aD,col,stroke)


    let lC_;

    if(random()<0.5){
        lC_ = interpolateLine(p1,p2,2,[-ancho/5,-ancho/5],true)
    }else{
        lC_ = interpolateLine(p1,p2,2,[ancho/5,ancho/5],true)
    }
    let lC=rotate_array(eje,lC_,rot);
    let lCentral=interpolateCurve(lC,3)
    push()
    strokeWeight(stroke*0.5);
    for(let i=1;i<aIzquierda.length-1;i++){
        if(random()<0.2){
            line(aIzquierda[i][0],aIzquierda[i][1],lCentral[i+1][0],lCentral[i+1][1])
        }
    }
    for(let i=1;i<aDerecha.length-1;i++){
        if(random()<0.2){
            line(aDerecha[i][0],aDerecha[i][1],lCentral[i+1][0],lCentral[i+1][1])
        } 
    }
    pop()
    drawCurve(lC,stroke*0.7);
}

function create_leave5(eje,alto,rot,col,stroke,curves){
    let ancho = alto/4;

    let p1 = eje;
    let p2 = [eje[0],eje[1]-alto];

 
    //Ala izquierda
    let aI_=interpolateLine(p1,p2,2,[-ancho,-ancho/2],true);
    let aI =rotate_array(eje,aI_,rot);

    let aD_=interpolateLine(p1,p2,2,[ancho/2,ancho],true)
    let aD =rotate_array(eje,aD_,rot);


    drawCurve_close(aI,col,stroke)
    drawCurve_close(aD,col,stroke)



    let lC_;
    //Linea central
    if(random()<0.5){
        lC_ = interpolateLine(p1,p2,2,[-ancho/5,-ancho/5],true)
    }else{
        lC_ = interpolateLine(p1,p2,2,[ancho/5,ancho/5],true)
    }
    let lC=rotate_array(eje,lC_,rot);
   
    
   // let curves = random(2,5);
    let t  = 1/(curves+1);
    let p3x;
    let p3y;
    let p4x;
    let p4y;

    for(let i =1;i<curves;i++){
        p3x = lerp(aI[2][0],lC[2][0],t*i);
        p3y = lerp(aI[2][1],lC[2][1],t*i);

        p4x = lerp(aI[3][0],lC[3][0],t*i);
        p4y = lerp(aI[3][1],lC[3][1],t*i);

        push()
        strokeWeight(maxCanvas*0.0015)
        beginShape()
        noFill()

        curveVertex(aI[0][0],aI[0][1])
        curveVertex(aI[0][0],aI[0][1])

        curveVertex(p3x,p3y);
        curveVertex(p4x,p4y);

        curveVertex(aI[aI.length-1][0],aI[aI.length-1][1])
        curveVertex(aI[aI.length-1][0],aI[aI.length-1][1])
        endShape()
        pop()
    }


    for(let i =1;i<curves;i++){
        p3x = lerp(lC[2][0],aD[2][0],t*i);
        p3y = lerp(lC[2][1],aD[2][1],t*i);

        p4x = lerp(lC[3][0],aD[3][0],t*i);
        p4y = lerp(lC[3][1],aD[3][1],t*i);

        push()
        strokeWeight(maxCanvas*0.0015)
        beginShape()
        noFill()

        curveVertex(aD[0][0],aD[0][1])
        curveVertex(aD[0][0],aD[0][1])

        curveVertex(p3x,p3y);
        curveVertex(p4x,p4y);

        curveVertex(aD[aI.length-1][0],aD[aI.length-1][1])
        curveVertex(aD[aI.length-1][0],aD[aI.length-1][1])
        endShape()
        pop()
    }
    drawCurve(lC,stroke*0.7)
}

function create_leave6(eje,alto,rot,col,stroke,direccion){
   

    let p1 = eje;
    let p2 = [eje[0],eje[1]-alto];
    let points;

    let aI;
    let aD;
   

    if(direccion==0){
        points=interpolateBrush_I(p1,p2,alto);
        aI= rotate_array(eje,points[0],rot); 
        aD= rotate_array(eje,points[1],rot); 
    }

    if(direccion==1){
        points=interpolateBrush_D(p1,p2,alto);
        aI= rotate_array(eje,points[0],rot); 
        aD= rotate_array(eje,points[1],rot); 
    }
   
    drawCurve_close(aI,col,stroke);
    drawCurve_close(aD,col,stroke);
    
    
}