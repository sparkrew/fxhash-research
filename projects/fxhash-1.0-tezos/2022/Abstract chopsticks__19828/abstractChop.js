

function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
}

// let w,h


function setup(){
    createCanvas(windowHeight, windowHeight)
   
    background(215)
 
    amarillo= color(245, 182, 87)
    rojo= color(244, 84, 84)
    azul= color(1, 71, 166)


    function random(min, max) {
        return Math.floor((fxrand() * (max - min + 1)) + min);
    }
    
    //lineas
    a= (random(10,30))
    w = random((width/2)-40,(width/2)+40)
    x1=(w)
    y1=(random(50,height/4))
    x2= x1
    y2=(random(height*0.66,height-35))

    

    //elipse
    
    // centrox =(random(50,width-100))
    // centrox =(random(x1-40,x1+60))
    // centroY=(y1+random(50,height-200))
    // tamaño =(random(70,200))

    centrox =(random(40,width/2))
    centroY=(y1+random(50,height-200))
    tamaño =(random(70,200))


    //media

    tamañoM =(random(200,250))
    centroxM =Math.floor(random(width/3,width*2/3))
    centroYM =Math.floor(random(height/3,height*2/3))
    radiansA =Math.floor(random(0,180))
    radian =radiansA+180

    //media2
    tamañoM2 =(random(20,140))
    centroxM2 =Math.floor(random(width/3,width*2/3))
    centroYM2 =Math.floor(random(height/3,height*2/3))
    radiansA2 =Math.floor(random(0,180))
    radian2 =radiansA2+180

    //puntos ramdom

    xr =(random(width/6,width/3))
    yr =(random(height/6,height/3))


    xr2 =(random(width*5/6,width*2/3))
    yr2 =(random(height*5/6,height*2/3))


    xr3 =(random(width/6,width/3))
    yr3 =(random(height/6,height/3))


    xr4 =(random(width*5/6,width*2/3))
    yr4 =(random(height*5/6,height*2/3))

    rxr=(random(width/8,width/3))
    ryr=(random(height/8,height/3))

    tamx =(random(250,500))
    tamy =(random(250,500))


    ex =(random(50,width-50))
    ey =(random(50,height-50))
    tame =(random(20,90))

    cx =(random(50,width-50))
    cy =(random(50,height-50))
    tamx2 =(random(20,90))
  

    tam  = (random(100,400))
    tam2  = (random(20,200))
    tam3  = (random(10,30))


  
    fxpreview()

}
// Esto corre enucle hacia el infinito
function draw(){

    
    const uno = fxrand() > 0.1
    const dos = fxrand() > 0.2
    const tres = fxrand() > 0.3
    const cuatro = fxrand() > 0.4
    const cinco = fxrand() > 0.5
    const seis = fxrand() > 0.6
    const siete = fxrand() > 0.7
    const ocho = fxrand() > 0.8
    const nueve=fxrand() > 0.9

    fill(amarillo)
    noStroke()
    rect(rxr,ryr,tamx,tamy)


    strokeWeight(4)
    stroke(0)
    line(width/2,0,width/2,height)
    line(xr,yr,xr2,yr2)

    line(xr3,yr3,xr4,yr4)


   
    noStroke()
    fill(rojo)
    arc(centroxM,centroYM,tamañoM,tamañoM,radians(radiansA),radians(radian))
    
    
    noStroke()
    fill(azul)
    arc(centroxM2,centroYM2,tamañoM2,tamañoM2,radians(radiansA2),radians(radian2))

    ellipse(ex,ey,tame,tame)
    fill(rojo)
    rect(cx,cy,tamx2,tamx2)
    

    
   
    
    
        
    
       
    
       
       
    
       
    
        
    
   
        

    

   
}


