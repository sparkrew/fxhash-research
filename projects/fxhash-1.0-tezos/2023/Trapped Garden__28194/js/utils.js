function interpolateLine(p1,p2,n,rand,isCurve){
    let t = 1/(n+1);
    let x;
    let y;
    let points = [];
    points.push(p1);
    if(isCurve){
      points.push(p1);
    }
    for(let i=1;i<=n;i++){
      x=lerp(p1[0],p2[0],t*i)+random(rand[0],rand[1]);
      y=lerp(p1[1],p2[1],t*i);
      
      points.push([x,y]);
    }
    points.push(p2);
    if(isCurve){
      points.push(p2);
    }
    return points;
}
  
function interpolateCurve(points,n){
    let pto = [];
    let t = 1/(n+1)
    for(let i=0;i<points.length-3;i++){
      for(let j=0;j<=n;j++){
        let x = curvePoint(points[i][0],points[i+1][0],points[i+2][0],points[i+3][0],j*t)
        let y = curvePoint(points[i][1],points[i+1][1],points[i+2][1],points[i+3][1],j*t)
        pto.push([x,y])
        
      }
      
    }
    pto.push([points[points.length-1][0],points[points.length-1][1]]);
    return pto;
}

function drawPoint(pto){
    for(let i=0;i<pto.length;i++){
      ellipse(pto[i][0],pto[i][1],5,5)
    }
}
  
function drawCurve(pto,stroke){
    push()
    
    strokeWeight(stroke);
    beginShape()
    noFill()
    for(let i=0;i<pto.length;i++){
      curveVertex(pto[i][0],pto[i][1]);
    }
    endShape()
    pop()
}

function drawCurve_close(pto,col,stroke){
    push()
    strokeWeight(stroke);
    beginShape()
    fill(col)
    for(let i=0;i<pto.length;i++){
      curveVertex(pto[i][0],pto[i][1]);
    }
    endShape()
    pop()
}

function rotate_array(eje,array,rot){
    let out = [];
    let x_rel;
    let y_rel;

    let newX;
    let newY;


    for(let i=0;i<array.length;i++){
        x_rel = array[i][0]-eje[0];
        y_rel = array[i][1]-eje[1];

        newX = (x_rel* cos(rot) - y_rel * sin(rot));
        newY = (x_rel * sin(rot) + y_rel * cos(rot));

        out.push([newX+eje[0],newY+eje[1]])
    }

    return out;
}

function interpolateBrush_I(p1,p2,alto){
  let x;
  let y;
  let alas = [];
  let points = [];
  points.push(p1);
  points.push(p1);

  //Primer punto 
  x=lerp(p1[0],p2[0],0.3)-0.12*alto;
  y=lerp(p1[1],p2[1],0.3);
  points.push([x,y])
  
  //Segundo punto 
  x=lerp(p1[0],p2[0],0.8)-0.02*alto;
  y=lerp(p1[1],p2[1],0.8);
  points.push([x,y])

  points.push(p2)
  points.push(p2)

  alas.push(points)
  /////////////////////////////////////////////////////////////////////

  let points1 = [];
  points1.push(p1);
  points1.push(p1);

  //Primer punto 
  x=lerp(p1[0],p2[0],0.3)+0.1025*alto;
  y=lerp(p1[1],p2[1],0.3);
  points1.push([x,y])
  
  //Segundo punto 
  x=lerp(p1[0],p2[0],0.8)+0.06*alto;
  y=lerp(p1[1],p2[1],0.8);
  points1.push([x,y])

  points1.push(p2)
  points1.push(p2)


  alas.push(points1)
  
  return alas;
}

function interpolateBrush_D(p1,p2,alto){
  let x;
  let y;
  let alas = [];
  let points = [];
  points.push(p1);
  points.push(p1);

  //Primer punto 
  
  x=lerp(p1[0],p2[0],0.3)-0.1025*alto;
  y=lerp(p1[1],p2[1],0.3);
  points.push([x,y])
  
  //Segundo punto 
  x=lerp(p1[0],p2[0],0.8)-0.06*alto;
  y=lerp(p1[1],p2[1],0.8);
  points.push([x,y])

  points.push(p2)
  points.push(p2)

  alas.push(points)
  /////////////////////////////////////////////////////////////////////

  let points1 = [];
  points1.push(p1);
  points1.push(p1);

  //Primer punto 
  x=lerp(p1[0],p2[0],0.3)+0.12*alto;
  y=lerp(p1[1],p2[1],0.3);
  points1.push([x,y])
  
  //Segundo punto 
  x=lerp(p1[0],p2[0],0.8)+0.02*alto;
  y=lerp(p1[1],p2[1],0.8);
  points1.push([x,y])

  points1.push(p2)
  points1.push(p2)


  alas.push(points1)
  
  return alas;
}

function draw_face(cara,col,grosor_linea,filling){
  push()
    stroke("#000000")
    if(filling==true){
      fill(col);
    }else{
      noFill()
    }
    strokeWeight(grosor_linea)

    beginShape()
      for(let j =0;j<cara.length;j++){
        vertex(cara[j][0],cara[j][1]);
      }
    endShape(CLOSE)
    pop()
}

function line_interpol(p1,p2,t){
  let x = lerp(p1[0],p2[0],t);
  let y = lerp(p1[1],p2[1],t);
  let point = [x,y];
  return(point)
}

function getLimit(array) {
  let xCoords = array.map(punto => punto[0]);
  let yCoords = array.map(punto => punto[1]);

  let xmin = min(xCoords);
  let xmax = max(xCoords);
  let ymin = min(yCoords);
  let ymax = max(yCoords);

  return { xmin, xmax, ymin, ymax };
}

function insideBox(x, y, limit) {
  let xmin = limit.xmin;
  let xmax = limit.xmax;
  let ymin = limit.ymin;
  let ymax = limit.ymax;

  return x >= xmin && x <= xmax && y >= ymin && y <= ymax;
}

function overlapping(limit,limites){
  let lim;
  let xmin = limit.xmin;
  let xmax = limit.xmax;
  let ymin = limit.ymin;
  let ymax = limit.ymax;

  let xmin1; 
  let xmax1;
  let ymin1;
  let ymax1;

  let p1;
  let p2;
  let p3;
  let p4;

  let flag = true;

  for(let i=0;i<limites.length;i++){
    lim = limites[i];
    
    xmin1 = lim.xmin;
    xmax1 = lim.xmax;
    ymin1 = lim.ymin;
    ymax1 = lim.ymax;


    p1=insideBox(xmin, ymin, lim)
    p2=insideBox(xmin, ymax, lim)
    p3=insideBox(xmax, ymin, lim)
    p4=insideBox(xmax, ymax, lim)

    p5=insideBox(xmin1, ymin1, limit)
    p6=insideBox(xmin1, ymax1, limit)
    p7=insideBox(xmax1, ymin1, limit)
    p8=insideBox(xmax1, ymax1, limit)

    if(p1==true || p2==true || p3==true || p4==true || 
      p5==true || p6==true || p7==true || p8==true){
      flag = false;
      break;
    }
  }

  return flag 
}

function seSolapan(limit1, limit2) {

  let xmin1 = limit1.xmin;
  let xmax1 = limit1.xmax;
  let ymin1 = limit1.ymin;
  let ymax1 = limit1.ymax;

  let xmin2 = limit2.xmin;
  let xmax2 = limit2.xmax;
  let ymin2 = limit2.ymin;
  let ymax2 = limit2.ymax;

  // Verificar si hay solapamiento en los ejes x y y
  if (
    xmin1 <= xmax2 &&
    xmax1 >= xmin2 &&
    ymin1 <= ymax2 &&
    ymax1 >= ymin2
  ) {
    return true; // Hay solapamiento
  } else {
    return false; // No hay solapamiento
  }
}


function overlapping1(limit,limites){
 
  let flag = true;

  for(let i=0;i<limites.length;i++){
    lim = limites[i];
    if(seSolapan(limit, lim)==true){
      flag = false;
      break
    }
  }

  return flag 
}

function add_grosor(curve,ancho_base,ancho_top){
  let new_curve = [];
  let x;
  let y;
  let new_x;
  let ancho_new;

  
  for(let i = 0;i<curve.length;i++){
      ancho_new = map(i,0,curve.length,ancho_base,ancho_top)
      x = curve[i][0];
      y = curve[i][1];
      new_x = x+ancho_new;
      
      new_curve.push([new_x,y]);
  }
  
  return new_curve;

}

function pointInRectangle(x, y, vertices) {
  let minX = min(vertices[0][0], vertices[1][0], vertices[2][0], vertices[3][0]);
  let maxX = max(vertices[0][0], vertices[1][0], vertices[2][0], vertices[3][0]);
  let minY = min(vertices[0][1], vertices[1][1], vertices[2][1], vertices[3][1]);
  let maxY = max(vertices[0][1], vertices[1][1], vertices[2][1], vertices[3][1]);

  return (x >= minX && x <= maxX && y >= minY && y <= maxY);
}

function pointInBox(x,y,vertices){
  let flag = false;
  let test;
  for(let i=0;i<vertices.length;i++){
    test = pointInRectangle(x, y, vertices[i])
    if(test==true){
      flag = true;
      break
    }
  }
  return flag;
}