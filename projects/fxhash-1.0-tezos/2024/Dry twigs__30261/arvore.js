function arvore(rot, tam) {
    push() // arvore teste
      //ARVORE
   //   rotate(random( 0.5))
   // var rot = int(random(2))
   var exp = random(0.01, 0.05)
      for(var i = 0; i< 5; i++){
        cb = 10
        cb2 = 1
        cc = 0
        var xoff2 = 0
        var xoff1 = 0
          translate(-width/700, 0)
        for (var x = width/20; x < width/tam; x++){
           cb2 += 0.09
         // strokeWeight(width/random(300, 200))
          var y = noise(xoff1)*height/10
          if(rot == 0){xoff1+= 0.0005}else{xoff1-= 0.01}
          cb -= 0.01
          
          strokeWeight(width/400 + cc)
          var rdt = int(random(15))
          if(rdt == 0){stroke(50, 100, 0)}else{stroke(50, 100, 7-i*2)}
          point(y, x-width/5)
          cc += exp
          noStroke()
          fill(50, 200, cb-3)
          var rd1 = random(30,370)
          var rd2 = random(30,370)
        if(x <= width/1.8){
         noFill()
          stroke(random(150,100), 100, 1)
         // ellipse(y+random(-rd1,rd2), x+random(-10,10), random(50), random(10))
        }
      
        if(x <= width/4){
          if(rot == 0){xoff1 += 0.001}else{xoff1 -= 0.01}
        }
         
        }  
      }
      pop()
  
  }

  function arvore2(rot, tam) {
    push() // arvore teste
      //ARVORE
   //   rotate(random( 0.5))
   // var rot = int(random(2))
   var exp = random(0.01, 0.05)
      for(var i = 0; i< 5; i++){
        cb = 0
        cb2 = 1
        cc = 0
        var xoff2 = 0
        var xoff1 = 0
          translate(-width/700, 0)
        for (var x = width/20; x < width/tam; x++){
           cb2 += 0.09
         // strokeWeight(width/random(300, 200))
          var y = noise(xoff1)*height/10
          if(rot == 0){xoff1+= 0.005}else{xoff1-= 0.01}
          cb -= 0.01
          
          strokeWeight(width/400 + cc)
          var rdt = int(random(15))
          if(rdt == 0){stroke(50, 100, 0)}else{stroke(50, 100, 2.3-i*0.5)}
          point(y, x-width/5)
          cc += exp
          noStroke()
          fill(50, 200, 4)
          var rd1 = random(30,370)
          var rd2 = random(30,370)
        if(x <= width/1.8){
         noFill()
          stroke(random(150,100), 100, 1)
         // ellipse(y+random(-rd1,rd2), x+random(-10,10), random(50), random(10))
        }
      
        if(x <= width/4){
          if(rot == 0){xoff1 += 0.01}else{xoff1 -= 0.01}
        }
         
        }  
      }
      pop()
  
  }

  function arvore3(rot, tam) {
    push() // arvore teste
      //ARVORE
   //   rotate(random( 0.5))
   // var rot = int(random(2))
   var exp = random(0.01, 0.05)
      for(var i = 0; i< 5; i++){
        cb = 10
        cb2 = 1
        cc = 0
        var xoff2 = 0
        var xoff1 = 0
          translate(-width/700, 0)
        for (var x = width/20; x < width/tam; x++){
           cb2 += 0.09
         // strokeWeight(width/random(300, 200))
          var y = noise(xoff1)*height/10
          if(rot == 0){xoff1+= 0.0005}else{xoff1-= 0.01}
          cb -= 0.01
          
          strokeWeight(width/400 + cc)
          var rdt = int(random(15))
          if(rdt == 0){stroke(50, 100, 0)}else{stroke(50, 100, 2-i*0.5)}
          point(y, x-width/5)
          cc += exp
          noStroke()
          fill(50, 200, cb-3)
          var rd1 = random(30,370)
          var rd2 = random(30,370)
        if(x <= width/1.8){
         noFill()
          stroke(random(150,100), 100, 1)
         // ellipse(y+random(-rd1,rd2), x+random(-10,10), random(50), random(10))
        }
      
        if(x <= width/4){
          if(rot == 0){xoff1 += 0.001}else{xoff1 -= 0.01}
        }
         
        }  
      }
      pop()
  
  }