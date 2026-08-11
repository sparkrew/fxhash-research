var canvas1 = document.getElementById("canvas");

var ctx = canvas1.getContext("2d");
function random(min, max) {
  return Math.floor((fxrand() * (max - min + 1)) + min);
}

function randomFromList(items){
  return items[Math.floor(fxrand()*items.length)];
  }
  const colores1=["#ffe330","#ff760c","#75b09c","#ec4e20","#e661b2","#af3b6e","#af3b6e","#410099","#005277","#0a47ed","#00d1d9"]


  const colo1 = randomFromList(colores1)

  const colores2 = colores1.filter(color => color != colo1);
  const colo2 = randomFromList(colores2)
  const colores3 = colores1.filter(color => color != colo2);

  const colo3 = randomFromList(colores3)

function random(min, max) {
    return Math.floor((fxrand() * (max - min + 1)) + min);
  }

            
            // var x0 =random(300,800); var y0 = random(100,250)
            // var x1 =random(-1500,-900); var y1 = random(250,550)//random(0,500)
            // var x2 = 2000; var y2 = random(350,550);
            // //600
            // var x3 = random(50,150); var y3 = random(500,700);

            var x0 =random(0,800); var y0 = random(0,1200)
            var x1 =random(-1500,1900); var y1 = random(0,1200)//random(0,500)
            var x2 = random(-1500,2900); var y2 = random(-350,1550);
            //600
            var x3 = random(0,800); var y3 = random(500,700);


            var x02 =random(300,800); var y02 = random(100,250)
            var x12 =random(-1500,-900); var y12 = random(250,550)//random(0,500)
            var x22 = 2000; var y22 = random(350,550);
            //600
            var x32 = random(50,150); var y32 = random(500,700);


            
            var x03 =random(300,800); var y03 = random(100,250)
            var x13 =random(-1500,-900); var y13 = random(250,550)//random(0,500)
            var x23 = 2000; var y23 = random(350,550);
            //600
            var x33 = random(50,150); var y33 = random(500,700);


            
            // ctx.filter="blur(1px)"
            // var x1 = 0; var y1 = 400;
            // var x2 = 1830; var y2 = 100;
            // var x3 = 0; var y3 = 1000;
            var y5= random(50,250)
            var tam=random(30,100)
                                                                                                                                                            
            
            ctx.beginPath()
            ctx.fillStyle=colo2
            ctx.fillRect(0,0,800,1200)
            ctx.fill()
            ctx.beginPath()
            ctx.fillStyle=colo2
            ctx.fillRect(0,0,800,1200)
            ctx.fill()
            ctx.closePath()

            ctx.globalAlpha = 0.4
            
            ctx.beginPath();
            
            
            ctx.filter = 'blur(6px)';
            ctx.moveTo(x0,y0);
            ctx.bezierCurveTo(x1,y1,x2,y2,x3,y3);
            
            ctx.lineWidth = 1;
            ctx.strokeStyle =colo1;

            for (r = 0;r <= 1;r = r+0.0005){
                var t = r; // toma valores entre 0 - 1 
            var x = (1 - t) * (1 - t) *(1 - t) * x0 
              + 3 * (1 - t) * (1 - t) * t * x1
              + 3 * (1 - t) * t * t * x2 
                        + t * t * t * x3; 
            var y = (1 - t) * (1 - t) *(1 - t) * y0 
              + 3 * (1 - t) * (1 - t) * t * y1
              + 3 * (1 - t) * t * t * y2 
                       + t * t * t * y3;

yprueba=y+random(100,200)
y2=y+random(-20,20)
                       ctx.beginPath()
                       ctx.lineWidth = 1;
                       ctx.moveTo(x,y2)
                       ctx.lineTo(x,yprueba)
                       ctx.stroke()
                       ctx.lineWidth = 0.8;
                       ctx.lineTo(x-random(50,100),yprueba)
                       ctx.lineTo(x,y2)
                      //  ctx.lineTo(x2+random(50,100),yprueba)
                      //  ctx.lineTo(x,yprueba)
                       ctx.stroke()

            
          
            }


            /////////////////////



            ctx.moveTo(x02,y02);
            ctx.bezierCurveTo(x12,y12,x22,y22,x32,y32);

            ctx.strokeStyle =colo1;

            for (r = 0;r <= 1;r = r+0.0005){
                var t = r; // toma valores entre 0 - 1 
            var x = (1 - t) * (1 - t) *(1 - t) * x02 
              + 3 * (1 - t) * (1 - t) * t * x12
              + 3 * (1 - t) * t * t * x22 
                        + t * t * t * x32; 
            var y = (1 - t) * (1 - t) *(1 - t) * y02 
              + 3 * (1 - t) * (1 - t) * t * y12
              + 3 * (1 - t) * t * t * y22 
                       + t * t * t * y32;

yprueba=y+random(100,200)
y2=y+random(-20,20)
                       ctx.beginPath()
                       ctx.lineWidth = 1;
                       ctx.moveTo(x,y2)
                       ctx.lineTo(x,yprueba)
                       ctx.stroke()
                       ctx.lineWidth = 0.8;
                       ctx.lineTo(x-random(50,100),yprueba)
                       ctx.lineTo(x,y2)
                      //  ctx.lineTo(x2+random(50,100),yprueba)
                      //  ctx.lineTo(x,yprueba)
                       ctx.stroke()

            
          
            }

            /////////////////////////

            ctx.moveTo(x03,y03);
            ctx.bezierCurveTo(x13,y13,x23,y23,x03,y03);

            ctx.strokeStyle =colo1;

            for (r = 0;r <= 1;r = r+0.0005){
                var t = r; // toma valores entre 0 - 1 
            var x = (1 - t) * (1 - t) *(1 - t) * x03 
              + 3 * (1 - t) * (1 - t) * t * x13
              + 3 * (1 - t) * t * t * x23 
                        + t * t * t * x33; 
            var y = (1 - t) * (1 - t) *(1 - t) * y03 
              + 3 * (1 - t) * (1 - t) * t * y13
              + 3 * (1 - t) * t * t * y23 
                       + t * t * t * y33;

yprueba=y+random(100,200)
y2=y+random(-20,20)
                       ctx.beginPath()
                       ctx.lineWidth = 1;
                       ctx.moveTo(x,y2)
                       ctx.lineTo(x,yprueba)
                       ctx.stroke()
                       ctx.lineWidth = 0.8;
                       ctx.lineTo(x-random(50,100),yprueba)
                       ctx.lineTo(x,y2)
                       ctx.lineTo(x2+random(50,100),yprueba)
                       ctx.lineTo(x,yprueba)
                       ctx.stroke()

            
          
            }








          fxpreview()