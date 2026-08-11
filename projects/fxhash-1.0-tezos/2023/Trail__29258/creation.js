

class Leaf {
  static createLeave1(eje, w, h, angle, col, strokeW, lineC, pattern,  instance) {
    strokeWeight(strokeW);
    stroke(lineC);

    //Dez init
    let d1 = w * instance.randomFloat(0.6, 0.8);
    let d2 = h * instance.randomFloat(0.2, 0.8)
    let d3 = w * instance.randomFloat(0.6, 0.8);
    let d4 = h * instance.randomFloat(0.2, 0.8)


    let p1 = eje;
    let p2 = [abs(d1 + eje[0]),abs(d2 - eje[1])];
    let p3 = [eje[0], abs(eje[1] - h)];
    let p4 = [abs(d3 - eje[0]),abs(d4 - eje[1])];

    let controlPoints1 = [p1, p2, p3];
    let controlPoints2 = [p1, p4, p3];
    let numPoints = 10;

    let pointsR = Interpolate.interpoalteCurve(controlPoints1, numPoints);
    let pointsL = Interpolate.interpoalteCurve(controlPoints2, numPoints).reverse();

    let figurePoints = pointsR.concat(pointsL);



    figurePoints = arrayManage.rotatePoints(figurePoints, angle);




    //--Add noise
    let inc = 0.02;
    let dx = w * 0.06;

    for (let i = 0; i < figurePoints.length; i++) {
      figurePoints[i][0] = figurePoints[i][0] + (dx * noise(inc * i) * instance.randomElement([-1, 1]));
      inc += 0.03;
    }

    push();
    beginShape();
    fill(col);
    stroke(lineC);
    for (let i = 0; i < figurePoints.length; i++) {
      curveVertex(figurePoints[i][0], figurePoints[i][1]);
    }
    endShape(CLOSE);
    pop();

    //---Paterns
    if (pattern === true) {
      push();
      stroke(lineC);
      strokeWeight(strokeW * 0.7);
      line(
        figurePoints[0][0],
        figurePoints[0][1],
        figurePoints[Math.floor(figurePoints.length / 2)][0],
        figurePoints[Math.floor(figurePoints.length / 2)][1]
      );

      let p1_ = [figurePoints[0][0], figurePoints[0][1]];
      let p2_ = [
        figurePoints[Math.floor(figurePoints.length / 2)][0],
        figurePoints[Math.floor(figurePoints.length / 2)][1]
      ];
      let p_mid = [];

      for (let i = 0; i < 1; i += 1 / numPoints) {
        let p = Interpolate.interpolateLine(p1_, p2_, i);
        p_mid.push(p);
      }

      for (let i = 0; i < p_mid.length; i++) {
        let j = Math.floor(map(i, 0, p_mid.length, 0, numPoints / 2));
        line(figurePoints[i][0], figurePoints[i][1], p_mid[j][0], p_mid[j][1]);
      }

      for (let i = numPoints * 2; i > numPoints; i--) {
        let j = Math.floor(map(i, numPoints * 2, numPoints, 0, numPoints / 2));
        line(p_mid[j][0], p_mid[j][1], figurePoints[i][0], figurePoints[i][1]);
      }

      pop();

    }
  }


  static createLeave2(eje, w, h, angle, col, strokeW, lineC, pattern,vs, sig,  instance) {

    let p1 = eje;
    let correction = h * 0.5;

    sig === '+' ? eje[0] += correction : eje[0] += h * 0.35;




    let p2 = [eje[0], abs(h * instance.randomFloat(0.7, 1) - eje[1])];
    let p4 = [abs(eje[0] - w * instance.randomFloat(0.7, 1)), p2[1]];
    let midPoint_ = Interpolate.interpolateLine(p2, p4, 0.5);
    midPoint_[1] -= h * 0.3;
    let p3 = midPoint_;
    let p5 = [p4[0], eje[1]];


    let controlPoints1 = [p1, p2, p3];
    let controlPoints2 = [p3, p4, p5];
    let numPoints = 8;


    // push();
    // fill("red")
    // circle(p1[0], p1[1], 10)
    // circle(p2[0], p2[1], 10)
    // pop();


    let pointsR = Interpolate.interpoalteCurve(controlPoints1, numPoints);
    let pointsL = Interpolate.interpoalteCurve(controlPoints2, numPoints);

    let figurePoints = pointsR.concat(pointsL);

    let rotationPoint = Interpolate.interpolateLine([figurePoints[0][0], figurePoints[0][1]], [figurePoints[figurePoints.length - 1][0], figurePoints[figurePoints.length - 1][1]], 0.5);


    figurePoints = arrayManage.rotatePoints(figurePoints, angle, rotationPoint[0], rotationPoint[1]);



    //--Add noise
    let inc = 0.01;
    let dx = w * 0.02;

    for (let i = 0; i < figurePoints.length; i++) {
      figurePoints[i][0] = figurePoints[i][0] + (dx * noise(inc * i) * instance.randomElement([-1, 1]));
      inc += 0.08;
    }

    push();
    beginShape();
    fill(col);
    strokeWeight(strokeW);
    stroke(lineC);
    for (let i = 0; i < figurePoints.length; i++) {
      curveVertex(figurePoints[i][0], figurePoints[i][1]);
    }
    endShape(CLOSE);
    pop();

    //---Paterns

    let origen = Interpolate.interpolateLine([figurePoints[0][0], figurePoints[0][1]], [figurePoints[figurePoints.length - 1][0], figurePoints[figurePoints.length - 1][1]], 0.5);
    let end = [figurePoints[Math.floor(figurePoints.length / 2)][0], figurePoints[Math.floor(figurePoints.length / 2)][1]]

    // push();
    // stroke(lineC);
    // strokeWeight(strokeW * 0.7);
    // line(origen[0],origen[1],figurePoints[Math.floor(figurePoints.length / 2)][0],figurePoints[Math.floor(figurePoints.length / 2)][1]);
    // pop();

    if (pattern === "radial lines" && vs) {
      for (let i = 0; i < figurePoints.length / 2; i++) {
        push()
        stroke(lineC);
        strokeWeight(strokeW * 0.7);
        line(origen[0], origen[1], figurePoints[i][0], figurePoints[i][1])
        line(origen[0], origen[1], figurePoints[figurePoints.length / 2 + i][0], figurePoints[figurePoints.length / 2 + i][1])
        pop()
      }
    }

    if (pattern === "converging lines" && vs) {
      const MAX = instance.randomFloat(0.5, 1.0)
      for (let i = 0; i < figurePoints.length / 2; i++) {
        let c = Interpolate.interpolateLine(origen, end, map(i, 0, figurePoints.length / 2, 0, MAX))
        push()
        stroke(lineC);
        strokeWeight(strokeW * 0.7);
        instance.random() <= 0.7 ? line(c[0], c[1], figurePoints[i][0], figurePoints[i][1]) : null;
        instance.random() <= 0.7 ? line(figurePoints[figurePoints.length - 1 - i][0], figurePoints[figurePoints.length - 1 - i][1], c[0], c[1]) : null;
        pop()
      }
    }
  }



  static createLeave3(eje,w,h,angle,col,strokeW,lineC,pattern,instance){
    strokeWeight(strokeW)
    stroke(lineC);
    let p1 = eje;
    let p2 = [ abs(w * instance.randomFloat(0.3,1.6) + eje[0]) , abs(h *instance.randomFloat(0.3,0.8) - eje[1]) ]
    let p3 = [p1[0],abs(eje[1] - h)]
    let p4 = [ eje[0], abs(eje[1] - h) ]
  
    
  
    let p1_ = p1;
    let p2_ = [ abs(w *instance.randomFloat(0.3,1.5) - eje[0]), abs(h *instance.randomFloat(0.3,0.8) - eje[1]) ]
    let p3_ = [ p1_[0]  ,abs(eje[1] - h)]
    let p4_ = [p1_[0], abs(eje[1] - h)]
    
    
   
  
    let controlPoints1 = [p1,p2,p3,p4]
    let controlPoints2 = [p1_,p2_,p3_,p4_]
    
  
  
    let numPoints      = instance.randomInt(25,35)
    
  
    let pointsR = Interpolate.interpoalteCurve(controlPoints1,numPoints)
    let pointsL = Interpolate.interpoalteCurve(controlPoints2,numPoints).reverse()
    
    
   
    
    let figurePoints = pointsR.concat(pointsL);
    figurePoints = arrayManage.rotatePoints(figurePoints, angle);
    
    let inc = 0.02;
    let dx  = w*0.023;
    
     for(let i = 0; i < figurePoints.length; i++){
       figurePoints[i][0] = figurePoints[i][0] + (dx * noise(inc * i) * instance.randomElement([-1,1]))
       inc+=0.04;
     }
   
     push()
     beginShape();
     fill(col)
     stroke(lineC)
     for(let i = 0; i < figurePoints.length; i++){
      curveVertex(figurePoints[i][0],figurePoints[i][1])
      
     }
     endShape(CLOSE);
     pop()
    
    //--Pattern
    
    if(pattern === true){
      push()
      strokeWeight(strokeW *0.2);
      stroke(lineC);
      for(let i = 0; i < numPoints; i++){
        line(figurePoints[i][0],figurePoints[i][1],figurePoints[i + numPoints][0],figurePoints[i + numPoints][1])
      }
      pop()
    }
    
    
  
  }


  static createLeave4(eje,h,angle,col,lineC,instance){
  
    let w = h * instance.randomElement([0.6,0.7,0.8,0.9,1.1]);
    let strokeW = h * 0.0156;
    
    let p1 = eje;
    let p2 = [ p1[0] + w, p1[1] - h * 1.3 ];
    let p3 = [ p1[0], p1[1] - h * 0.8 ]
    let p4 = p3;
    let p5 = [ p1[0] - w, p1[1] - h * 1.3 ];
    let p6 = p1;
    
    
    let L = [ p1,p2,p3 ]
    let R = [ p4,p5,p6 ]
    
    let points  = Interpolate.interpoalteCurve(L.concat(R),150);
    
    points = arrayManage.rotatePoints(points,angle)
    
    push();
    strokeWeight(strokeW)
    stroke(lineC)
    fill(col);
    beginShape();
    points.map(p => vertex(p[0],p[1] - (w * 0.08) * noise(p[0],p[1])))
    endShape(CLOSE);
    pop();
    
    
  
    //fill("red")
    //circle(p1[0],p1[1],10)
    //circle(p2[0],p2[1],10)
    //circle(p3[0],p3[1],10)
    //circle(p5[0],p5[1],10)
    
    
  }


  static bush(eje, h, angle, col, lineC,instance) {
    let strokeW = h * 0.008;
    let w = h * 0.1;

    let p0 = eje;
    let p1 = [p0[0] + w, p0[1]];
    let p2 = [p1[0] + w * instance.randomFloat((-0.08, 0.08)), p1[1] - h * 0.5];
    let p3 = [Interpolate.interpolateLine(p0, p1, 0.5)[0], p1[1] - h];
    let p4 = [p0[0], p2[1]];

    p3 = arrayManage.rotatePoints([Interpolate.interpolateLine(p0, p1, 0.5), p3], angle)[1];

    let R = [p1, p2, p3];
    let L = [p3, p4, p0];

    R = Interpolate.interpoalteCurve(R, 50);
    L = Interpolate.interpoalteCurve(L, 50);

    let pts = concat(R, L);



    push();
    fill(col);
    stroke(lineC);
    strokeWeight(strokeW);
    beginShape()
    pts.map((p) => {
      vertex(p[0] + w * 0.1 * noise(p[0], p[1]) * instance.randomElement([-1, 1]), p[1]);
      // if (instance.random() < 0.04) {
      //   push();
      //   fill("red")
      //   circle(p[0], p[1], w * instance.randomFloat(0.2, 0.4));
      //   pop()
      // }
    })
    endShape(CLOSE)
    pop();

  }


  static createLeave5(eje,h,angle,angle2,col,lineC,instance){
  
    let w = h * instance.randomElement([0.6,0.7,0.8,0.9,1.1]);
    let strokeW = h * 0.03;
    
    let p1 = eje;
    let p2 = [ p1[0] + w, p1[1] - h * 1.3 ];
    let p3 = [ p1[0], p1[1] - h * 0.8 ]
    p3 = arrayManage.rotatePoints([ p1,p3 ],angle)[1]
    let p4 = p3;
    let p5 = [ p1[0] - w, p1[1] - h * 1.3 ];
    let p6 = p1;
    
    
    
    let L = [ p1,p2,p3 ]
    let R = [ p4,p5,p6 ]
    
    let points  = Interpolate.interpoalteCurve(L.concat(R),150);
    
    points = arrayManage.rotatePoints(points,angle2)
    
    push();
    strokeWeight(strokeW)
    stroke(lineC)
    fill(col);
    beginShape();
    points.map(p => vertex(p[0],p[1]))
    endShape(CLOSE);
    pop();
    
    
  
    //layer.fill("red")
    //layer.circle(p1[0],p1[1],10)
    //layer.circle(p2[0],p2[1],10)
    //layer.circle(p3[0],p3[1],10)
    //layer.circle(p5[0],p5[1],10)
    
    
  }

}



class Plant {

  static createPlant1(eje, h, strokeW, dir, color, colorLeaf, lineC, rot, leafType,pattern,  instance) {

    let w = h * 0.01;
    let multi = 0.8;
    let h_init = h * 1 / 4;
    let n = abs(Math.ceil(Math.log(h / h_init) / Math.log(multi)));
    let angle = 0;

    let h_ref = eje[1];

    let p = [eje, [eje[0], h_ref - h_init]]
    let l = [];
    let r = [];

    for (let j = 0; j < n; j++) {

      dir === "L" ? angle = instance.randomInt(-10, -55) : null;
      dir === "R" ? angle = instance.randomInt(10, 55) : null;
      dir === "wave" ? angle = instance.randomInt(-25, 25) : null;

      p = arrayManage.rotatePoints(p, angle);


      for (let i = 0; i < p.length; i++) {
        l.push([p[i][0], p[i][1]]);
        r.push([p[i][0] + w, p[i][1]]);
      }

      h_ref = l[l.length - 1][1]
      p[0] = p[1];
      p[1] = [p[0][0], h_ref - h_init]
      h_init *= multi;

    }


    let numPoints = 20;//180

    l = Interpolate.interpoalteCurve(l, numPoints);
    r = Interpolate.interpoalteCurve(r, numPoints);
    p = l.concat(r.reverse());


    p = arrayManage.rotatePoints(p, rot)

    //--Create leaves

    let t = instance.randomElement(["converging lines", "radial lines"]);


    for (let i = 0; i < p.length; i++) {
      let colorLeaf_ = colorLeaf;
      if(typeof(colorLeaf) === "object"){
        colorLeaf_ = instance.randomElement(colorLeaf);
        colorLeaf_ = colorsManage.hexToRgb(colorLeaf_);
        colorLeaf_ = [ colorLeaf_.red, colorLeaf_.green, colorLeaf_.blue, 255 ]
        
      }
      if (i >= 0 && i < p.length / 2 - 1) {
        if (instance.random() < 1) {
          let s = map(i, 0, (p.length / 2), h * .08, h * 0.03);
          if (leafType === 1) {
            Leaf.createLeave2([p[i][0], p[i][1]], s, s, -90, colorLeaf_, strokeW * 0.7, lineC, t,pattern, "+",  instance);
          }
          if (leafType === 2) {
            Leaf.createLeave1([p[i][0], p[i][1]], s, s, -90, colorLeaf_, strokeW * 0.7, lineC,pattern,  instance);
          }

        }
      }
      if (i > p.length / 2 && i < p.length) {
        if (instance.random() < 1) {
          let s = map(i, p.length / 2, p.length, h * .03, h * 0.08);
          if (leafType === 1) {
            Leaf.createLeave2([p[i][0], p[i][1]], s, s, 90, colorLeaf_, strokeW * 0.7, lineC, t,pattern, "-",  instance);
          }
          if (leafType === 2) {
            Leaf.createLeave1([p[i][0], p[i][1]], s, s, 90, colorLeaf_, strokeW * 0.7, lineC,pattern,  instance);
          }
        }
      }
    }

    push()
    strokeWeight(strokeW)
    beginShape()
    fill(color);
    for (let i = 0; i < p.length; i++) {
      curveVertex(p[i][0], p[i][1]);
    }
    endShape(CLOSE)
    pop()
  }



  static createFlower(eje,h,angle,col,col2,strokeW,lineC,pattern,instance){
  
    stroke(lineC);
    let w = h * 0.3;
    let p1 = eje;
    let p2 = [ abs(w * instance.randomFloat(0.2,0.8) + eje[0]) , abs(h *instance.randomFloat(0.2,0.8) - eje[1]) ]
    let p3 = [ eje[0], abs(eje[1] - h) ]
    
    let points    = [p1,p2,p3]
    let numPoints = 150;
    let move = h * 0.025;
    
    //---tallo
    let tallo1   = Interpolate.interpoalteCurve(points,numPoints);
    let rotated1 = arrayManage.rotatePoints(tallo1, angle)
    
    points[0][0] +=move;
    points[1][0] +=move;
    points[2][0] +=move;
    let tallo2   = Interpolate.interpoalteCurve(points,numPoints)
    let rotated2 = arrayManage.rotatePoints(tallo2, angle)
    
    let Tallo = rotated1.reverse().concat(rotated2)
    
    let rotated = rotated1;
    
    push()
    beginShape();
    fill(col2)
    stroke(lineC)
    strokeWeight(strokeW * 0.7)
    for(let i = 0; i < Tallo.length; i++){
      vertex(Tallo[i][0],Tallo[i][1])
    }
    
    endShape(CLOSE);
    
    
    rotated1.reverse()
    
    let pxO = 0.02;
    let s_ = colorsManage.hexToRgb(lineC);
    
    for(let i = 0; i < rotated1.length; i++){
      stroke([s_.red, s_.green, s_.blue, 255 - 80 * noise(pxO)] )
      line(rotated1[i][0],rotated1[i][1],rotated2[i][0] - move*instance.randomFloat(0.3,0.8),rotated2[i][1])
      pxO +=0.03;
    }
    
    
    pop()
    
    
    let label = instance.randomInt(25,40)
    let col_ = col;

    
    if (typeof (col) === "object") {
      col_ = instance.randomElement(col);
      col_ = colorsManage.hexToRgb(col_);
      col_ = [col_.red, col_.green, col_.blue, 255]
    }



    for (let ang = 0; ang < 360; ang += label) {
      let h_ = h * 0.3;
      let w_ = w * 0.45;
      let eje_ = [rotated[rotated.length - 1][0], rotated[rotated.length - 1][1]];
      Leaf.createLeave3(eje_, w_, h_, ang, col_, strokeW, lineC, pattern,  instance);
    }

    push()
    stroke(lineC);
    strokeWeight(strokeW);
    fill(lineC)
    circle(rotated[rotated.length - 1][0], rotated[rotated.length - 1][1],w * 0.2)
    pop()

  }

  static Flower(eje,h_,angle,col,lineC,pattern,instance){

    let col_ = col;

    if(typeof(col) === "object"){
      col_ = instance.randomElement(col);
      col = instance.randomElement(col.filter(c => c != col_));
    }
  
    let strokeW = h_ * 0.007;
    let h = h_ * 0.5;
    let w = h * 0.5;
  
  
    let p1 = [eje[0],eje[1] - h_];
    let p2 = [ p1[0] + w * instance.randomFloat(0.3,0.5), p1[1] - h * 0.2 ];
    let p3 = [ p2[0] - w * 0.2, p2[1] - h * 0.3 ];
    let p4 = [ p2[0], p3[1] - h * 0.25];
    let p5 = [ p1[0], p4[1] + h * instance.randomFloat(0.1,0.17) ];
    
    
  
  
    let p8 = [  p1[0] - w * instance.randomFloat(0.3,0.6), p1[1] - h * 0.2 ]
    let p7 = [ p8[0] + w * 0.2, p8[1] - h * 0.3 ]
    let p6 = [ p8[0], p4[1]]
    
    let extra1 = Interpolate.interpolateLine(p1,p8,0.7)
    let extra2 = Interpolate.interpolateLine(p1,p2,0.7);
    extra1[1] += w *0.2;
    extra2[1] += w *0.2
    
    
    //---Top
    let P1 = p4;
    let P2 = [ p5[0], p5[1]  - w * instance.randomFloat(0.3,0.5)];
    let P3 = p6;
    let P4 = p5
    
    let top = [P1,P2,P3,P4]
    
   
    
    let points = [p1,extra2,p2,p3,p4,p5,p6,p7,p8,extra1];
    points = points.concat(top)
    points     = arrayManage.rotatePoints(points,angle, eje[0],eje[1]);
    
    p5 = points[5];
    
    let body = [ points[0],points[1],points[2],points[3],points[4],points[5],points[6],points[7],points[8],points[9]]
    
    top = [points[10],points[11],points[12],points[13]]
    
    
    
    push();
    strokeWeight(strokeW)
    stroke(lineC)
    fill(col);
    beginShape();
    top.map(p => curveVertex(p[0],p[1]))
    endShape(CLOSE)
    pop();
    
    
    let tallo = [ eje, [ eje[0],eje[1] - h_]  ];
    tallo = arrayManage.rotatePoints(tallo,angle)
    
    push()
    strokeWeight(strokeW * 3)
    stroke(lineC)
    line(tallo[0][0],tallo[0][1],tallo[1][0],tallo[1][1])
    pop()
  
  
  
    
    //=Body
    push();
    stroke(lineC)
    strokeWeight(strokeW)
    beginShape();
    fill(col);
    body.map( p => curveVertex(p[0],p[1]))
    endShape(CLOSE)
    pop();
    
    
    //---leaves
    let start = [tallo[0][0],tallo[0][1]];
    let end   = [tallo[1][0],tallo[1][1]];
    
    let p = Interpolate.interpolateLine(start,end,0.95);



   
    Leaf.createLeave1(p, w * 0.6, w * 0.6, 45, col_, strokeW, lineC, pattern,  instance);
    Leaf.createLeave1(p, w * 0.6, w * 0.6, -45, col_, strokeW, lineC, pattern,  instance);
    Leaf.createLeave1(p, w * 0.6, w * 0.6, 0, col_, strokeW, lineC, pattern,  instance);
    
    for(let i = 0; i < 4; i++){
      let p = Interpolate.interpolateLine(start,end,instance.randomFloat(0.1,0.5));
      p[0] += w * 0.05
      Leaf.createLeave1(p, w * 0.6, w * 0.6, instance.randomElement([45,-45]), col_, strokeW, lineC, pattern,  instance);
      
    }
    
    
    
    //extras
    push();
    let pts = [ p5, [p5[0],p5[1] - w*0.1], ]
    strokeWeight(strokeW * 0.7)
    stroke(lineC)
    fill("#BF0404")
    circle(pts[1][0],pts[1][1],w * instance.randomFloat(0.1,0.14))
    circle(pts[1][0],pts[1][1] - w * 0.12,w * 0.14)
    circle(pts[1][0] - w*0.07,pts[1][1] - w*0.07,w * instance.randomFloat(0.1,0.14))
    circle(pts[1][0] + w*0.07,pts[1][1] - w*0.07,w * instance.randomFloat(0.1,0.14))
    pop()
    
    
    
    
  }



  static Flower2(eje,h,angle,col,lineC,instance){

    if(typeof(col) === "object"){
      col = instance.randomElement(col);
    }
  
    let h_flower = h * 0.23;
    let strokeW  = h * 0.003;
    
    let start = eje;
    let end   = [eje[0], eje[1] - h]
    
    let points = arrayManage.rotatePoints([start,end],angle);
    start = points[0];
    end   = points[1];
    
    
    push()
    strokeWeight(strokeW * 6);
    stroke(lineC);
    line(start[0],start[1],end[0],end[1])
    pop()
    
    
    let Off = 0.02;
    for(let i = 0; i < 360; i+=60){ //60
      if(i >=0 && i <= 90 || i > 275 && i <=360){
        Leaf.createLeave4(end,h_flower * map(noise(Off),0,1,0.6,0.9),i,col,lineC,instance);
      }
      if(i >90 && i <= 275){
        Leaf.createLeave4([end[0],end[1] - h * 0.02],h_flower * map(noise(Off),0,1,0.6,0.8),i,col,lineC,instance);
      }
      
      Off +=0.2;
    }
    
    push()
    stroke(lineC);
    fill(lineC)
    strokeWeight(strokeW);
    circle(end[0],end[1],h * 0.07)
    pop()
    
    
  }


  static createBush(eje, h, col, n, lineC, instance) {
    for (let angle = -160; angle < 160; angle += n) {
      Leaf.bush(eje, h * instance.randomFloat(0.5, 0.8), angle, col, lineC, instance);
    }
  }

  static Flower3(eje, h, angle, col, lineC,instance) {

    let h_flower = h * 0.3;
    let strokeW = h * 0.003;

    let start = eje;
    let end = [eje[0], eje[1] - h]

    let points = arrayManage.rotatePoints([start, end], angle);
    start = points[0];
    end = points[1];


    push()
    strokeWeight(strokeW * 6);
    stroke(lineC);
    line(start[0], start[1], end[0], end[1])
    pop()

    let stp = gen.randomElement([30,40,50,60,70])

    for (let i = 0; i < 350; i += stp) {
      Leaf.createLeave5(end, h_flower, i,angle, col, lineC,instance)
    }

  }
  


  
}




class Structure{
  static createPillar(eje, h, angle, colBody, lineC,  instance) {


    if(typeof(colBody) === "object"){
      colBody = instance.randomElement(colBody);
    }

    let saveColor = lineC;

    let w = h * 0.2;

    let strokeW = height * 0.003;
    let p1 = eje;
    let p2 = [p1[0] + w, p1[1]];
    let p3 = [p2[0], p2[1] - h];
    let p4 = [p1[0], p3[1]];

    let extraP = Interpolate.interpolateLine(p4, p3, 0.5);
    extraP[1] -= w * 0.2;
    extraP = [p4, extraP, p3]
    extraP = Interpolate.interpoalteCurve(extraP, 50).reverse()



    let limit = [p1, p2, p3, p4];

    let limit_ = [p1, p2];

    for (let i = 0; i < extraP.length; i++) {
      limit_.push(extraP[i])
    }

    limit_ = arrayManage.rotatePoints(limit_, angle)
    limit = arrayManage.rotatePoints(limit, angle);

    p1 = limit[0];
    p2 = limit[1];
    p3 = limit[2];
    p4 = limit[3];


    push()
    fill(colBody)
    stroke(lineC);
    strokeWeight(strokeW)
    beginShape()
    for (let i = 0; i < limit_.length; i++) {
      vertex(limit_[i][0], limit_[i][1])
    }
    endShape(CLOSE)
    pop()

    if(lineC === "#ffffff"){
      lineC  = lerpColor(color(lineC), color("#000000"), 0.3)
    }else{
      lineC  = lerpColor(color(lineC), color("#ffffff"), 0.3)
    }

    
    let density = instance.randomFloat(0.05, 0.12);
    let nOff = 0.02;

    for (let i = 0; i <= 1; i += density) {
      let p = Interpolate.interpolateLine(p4, p3, i)
      let end = Interpolate.interpolateLine(p1, p2, i)
      let n = map(noise(nOff), 0, 1, 0.6, 1);
      let variation = Interpolate.interpolateLine(end, p, n)


      push()
      let s = map(n, 0, 1, strokeW * 0.2, strokeW * 1.2)
      strokeWeight(s)
      stroke(lineC);
      line(end[0], end[1], variation[0], variation[1])
      pop()
      nOff += 0.03;

    }



    //Pattern
    //lineC  = lerpColor(color(lineC), color("#ffffff"), 0.8)
    density = instance.randomFloat(0.02, 0.2);


    for (let i = 0; i < 1; i += density) {
      let p_init = Interpolate.interpolateLine(p4, p1, i);
      let p_end = Interpolate.interpolateLine(p3, p2, i)
      let mid = Interpolate.interpolateLine(p_init, p_end, 0.5)
      mid[1] += w * 0.2;
      let array = [p_init, mid, p_end];
      let points = Interpolate.interpoalteCurve(array, 50);


      push()
      noFill();
      stroke(lineC);
      strokeWeight(strokeW * 0.7)
      beginShape()
      for (let j = 0; j < points.length; j++) {
        vertex(points[j][0], points[j][1])
      }
      endShape()
      pop()
    }

    //---Body Shadows
    density = 0.008;
    nOff = 0.02;


    for (let i = 0.03; i < 1; i += density) {
      let n = noise(nOff);
      let p = Interpolate.interpolateLine(p4, p1, i);
      let end = Interpolate.interpolateLine(p3, p2, i)
      let variation = Interpolate.interpolateLine(p, end, map(n, 0, 1, 0.5, 1))

      let o = map(n, 0, 1, 160, 255)

      push()
      //let s = colorsManage.hexToRgb(lineC);
      stroke(lineC)
      strokeWeight(strokeW * 0.8 * n)
      line(p[0], p[1], variation[0], variation[1])
      pop()

      nOff += 0.03;
    }


    lineC = saveColor;

    push()
    noFill();
    stroke(lineC);
    strokeWeight(strokeW)
    beginShape()
    for (let i = 0; i < limit_.length; i++) {
      vertex(limit_[i][0], limit_[i][1])
    }
    endShape(CLOSE)
    pop()

  }

  static createStone(eje, radius, numPoints,col,lineC,instance) {

    if(typeof(col) === "object"){
      col = instance.randomElement(col);
    }

    let x  = eje[0], y = eje[1];
    push()
    fill(col)
    stroke(lineC);
    strokeWeight(radius * 0.007)
    beginShape();
    
    let points = [];
    let dm     = radius * 0.1;
    let off    = 0.01;
    
    for (let i = 0; i < numPoints; i++) {
      let angle = map(i, 0, numPoints, 180, 360); // Mapear el índice al rango de ángulos
      let n = noise(off);
      let xPos = (x + radius * cos(radians(angle))  ) //+ dm * n * instance.randomElement([-1,1]); // Calcular la coordenada x
      let yPos = ( y + radius * sin(radians(angle)) ) + dm * n * instance.randomElement([-1,1]); // Calcular la coordenada y
      
      curveVertex(xPos, yPos); // Agregar el vértice al círculo
      points.push([xPos,yPos])
      
      off+=0.01;
    }
    
    endShape(CLOSE);
 
    pop()
    
  }

  static createCrystal(eje,h,angle,bodyColor,lineC,instance){

    if(typeof(bodyColor) === "object"){
      bodyColor = instance.randomElement(bodyColor);
    }
  
    let w = h * 0.18;
    let strokeW = height * 0.003;

    
    let pattern_ = instance.randomElement([1,2]);
    
    //-Cara frontal
    let p1  = eje;
    let p2  = [ eje[0] + w, p1[1] ];
    let p3  = [ p2[0], (p2[1] - h) + instance.randomFloat(-w*0.3,w*0.3)];
    let p5_ = [ p1[0], (p1[1] - h) + instance.randomFloat(-w*0.3,w*0.3) ];
    let p4  = Interpolate.interpolateLine(p5_,p3,0.5)
    p4 = [p4[0] + instance.randomFloat(-w*0.12,w*0.12),p4[1] - instance.randomFloat(w*0.7,w)]
    
    let frontPoints = [p1,p2,p3,p4,p5_]

    
    
    
    //-Segunda cara
    let w_ = w * 0.5;
    let P1 = p4;
    let P2 = p3;
    let P3 = p2;
    let P4 = [ P3[0] + w_, P3[1]  ];
    let P5 = [ P2[0] + w_, P2[1]  ];
    let P6 = P1;
    
    let points = [P1,P2,P3,P4,P5,P6];
    
    let rotated = frontPoints.concat(points);
    rotated = arrayManage.rotatePoints(rotated,angle)
    
    frontPoints = [ rotated[0],rotated[1],rotated[2],rotated[3],rotated[4] ];
    points      = [ rotated[5],rotated[6],rotated[7],rotated[8],rotated[9],rotated[10]]
    
    //==Asignar valores rotados
    p1  = rotated[0];
    p2  = rotated[1];
    p3  = rotated[2];
    p4  = rotated[3];
    p5_ = rotated[4];
    
    P1  = rotated[5];
    P2  = rotated[6];
    P3  = rotated[7];
    P4  = rotated[8];
    P5  = rotated[9];
    P6  = rotated[10];
    
   
    
                
    //==1ra 
    push()
    fill(bodyColor)
    stroke(lineC)
    strokeWeight(strokeW)
    beginShape()
    for(let i = 0; i < frontPoints.length; i++){
      vertex(frontPoints[i][0],frontPoints[i][1])
    }
    endShape(CLOSE)
    pop()
    
    //---Segunda 
    push()
    fill(bodyColor)
    stroke(lineC)
    strokeWeight(strokeW)
    beginShape()
    for(let i = 0; i < points.length; i++){
      vertex(points[i][0],points[i][1])
    }
    endShape(CLOSE)
    pop()
    
    
    push()
    stroke(lineC)
    strokeWeight(strokeW)
    line(p5_[0],p5_[1],p3[0],p3[1])
    line(P2[0],P2[1],P5[0],P5[1])
    pop()
    
    
    //====Pattern
    
    //--Primera cara
    if(pattern_ === 1){
      let density = 0.01;
      let Off     = 0.02;
  
      for(let i = 0; i < 1; i+=density){
        let n      = noise(Off);
        let p_init = Interpolate.interpolateLine(p5_,p1,i);
        let p_end  = Interpolate.interpolateLine(p3,p2,i);
        let variation = Interpolate.interpolateLine(p_init,p_end,map(n,0,1,0.25,1))
  
  
        push()
        stroke(lineC);
        strokeWeight( map(n,0,1,strokeW * 0.5, strokeW) )
        line(p_init[0],p_init[1],variation[0],variation[1]);
        pop()
  
        Off += 0.02;
      }
  
      //Cupula primera cara
      Off = 0.02;
      density = 0.05
      for(let i = 0; i < 1; i+=density){
        let n      = noise(Off);
        let p_init = Interpolate.interpolateLine(p4,p5_,i);
        let p_end  = Interpolate.interpolateLine(p4,p3,i);
        let variation = Interpolate.interpolateLine(p_init,p_end,map(n,0,1,0.25,1))
  
        push()
        stroke(lineC);
        strokeWeight( map(n,0,1,strokeW * 0.5, strokeW) )
        line(p_init[0],p_init[1],variation[0],variation[1]);
        pop()
  
        Off+=0.02;
      }
    }
    
    if(pattern_ === 2){
      let density = 0.01;
      let Off     = 0.02;
  
      for(let i = 0; i < 1; i+=density){
        let n      = noise(Off);
        let p_init = Interpolate.interpolateLine(p5_,p1,i);
        let p_end  = Interpolate.interpolateLine(p3,p2,i);
        let variation = Interpolate.interpolateLine(p_init,p_end,map(n,0,1,0.25,1))
  
  
        push()
        let s = colorsManage.hexToRgb(lineC);
        s = [ s.red, s.green, s.blue, map(n,0,1,100,150) ]
        stroke(s);
        strokeWeight( map(n,0,1,strokeW * 0.5, strokeW) )
        line(p_init[0],p_init[1],variation[0],variation[1]);
        pop()
  
        Off += 0.02;
      }
      
      //Cupula primera cara
      Off = 0.02;
      density = 0.05
      for(let i = 0; i < 1; i+=density){
        let n      = noise(Off);
        let p_init = Interpolate.interpolateLine(p4,p5_,i);
        let p_end  = Interpolate.interpolateLine(p4,p3,i);
        let variation = Interpolate.interpolateLine(p_init,p_end,map(n,0,1,0.25,1))
  
        push()
        stroke(lineC);
        strokeWeight( map(n,0,1,strokeW * 0.5, strokeW) )
        line(p_init[0],p_init[1],variation[0],variation[1]);
        pop()
  
        Off+=0.02;
      }
      
      
      
      density = 0.05;
  
      for(let i = 0.05; i < 1; i+=density){
        let Off = 0.02;
        let p_init    = Interpolate.interpolateLine(p5_,p1,i);
        let p_end     = Interpolate.interpolateLine(p3,p2,i);
        let variation = [];
        variation.push(p_init)
        
        for(let j = 0.1; j < 0.9; j+=0.02){
          let n         = noise(Off);
          let v = Interpolate.interpolateLine( p_init,p_end,j)
          v[1] += w * 0.125 * n * instance.randomElement([-1,1]);
          variation.push(v)
          Off += 0.02;
        }
        
        variation.push(p_end)
        
        push()
        noFill();
        stroke(lineC);
        strokeWeight(strokeW);
        beginShape();
        for(let a = 0; a < variation.length; a++){
          curveVertex(variation[a][0],variation[a][1])
        }
        endShape();
        pop()
      
      }
  
    }
    
  }

  static monolith(eje,h,angle,bodyColor,lineC,instance){

    if(typeof(bodyColor) === "object"){
      bodyColor = instance.randomElement(bodyColor);
    }

    let saveColor = lineC;
  
    let w = h * 0.15;
    let strokeW = height * 0.003;
    
    
    //==Primera cara
    let p1 = eje;
    let p2 = [ eje[0] + w, eje[1] ];
    let p3 = [ p2[0] , p2[1] - h ];
    let p4 = [ p1[0]  - w * 0.5, p1[1] - h * 1.2]
    
    let frontPoints = [p1,p2,p3,p4]
    
    //==Segunda cara
    let P1 = p2;
    let P2 = [ P1[0] + w, P1[1]];
    let P3 = [ p2[0] + w * 1.3, p4[1] ];
    let P4 = p3;
    
    let nextPoints = [P1,P2,P3,P4];
    
    //====Top
    let p_1 = p4;
    let p_2 = [p3[0],p3[1] - w*1.9];
    let p_3 = P3;
    let p_4 = p3
    
    
    let topPoints = [p_1,p_2,p_3,p_4]
    
    let rotated = frontPoints.concat(nextPoints,topPoints)
    
    rotated = arrayManage.rotatePoints(rotated,angle);
   
    
    //===reasignar todos los valores
    
    //--Primera cara;
    p1 = rotated[0];
    p2 = rotated[1];
    p3 = rotated[2];
    p4 = rotated[3];
    
    frontPoints = [p1,p2,p3,p4];
    
  
  
    //====reasignar segunda cara
    P1 = rotated[4];
    P2 = rotated[5];
    P3 = rotated[6];
    P4 = rotated[7];
    
    nextPoints = [P1,P2,P3,P4]
    
    //====Reasignar Top;
    p_1 = rotated[8]
    p_2 = rotated[9]
    p_3 = rotated[10]
    p_4 = rotated[11]
    
    topPoints = [p_1,p_2,p_3,p_4]
    
    
    //---Dibujar Primera Cara
    push()
    fill(bodyColor);
    stroke(lineC);
    strokeWeight(strokeW);
    
    beginShape();
    for(let i= 0; i < frontPoints.length;i++){
      vertex(frontPoints[i][0],frontPoints[i][1])
    }
    endShape(CLOSE);
    pop()

   
    
    //---Dibujar Segunda Cara
    push()
    fill(bodyColor);
    stroke(lineC);
    strokeWeight(strokeW);
    
    beginShape();
    for(let i= 0; i < nextPoints.length;i++){
      vertex(nextPoints[i][0],nextPoints[i][1])
    }
    endShape(CLOSE);
    pop()
    
    
    //---Dibujar Top;
    
    push()
    fill(bodyColor);
    stroke(lineC);
    strokeWeight(strokeW);
    
    beginShape();
    for(let i= 0; i < topPoints.length;i++){
      vertex(topPoints[i][0],topPoints[i][1])
    }
    endShape(CLOSE);
    pop()
        
        
    //Pattern

    if(lineC === "#ffffff"){
      lineC  = lerpColor(color(lineC), color("#000000"), 0.5)
    }else{
      lineC  = lerpColor(color(lineC), color("#ffffff"), 0.5)
    }

    let density = 0.015;
    let Off     = 0.02;
    
    
    for(let i = 0; i < 1; i+=density){
      let n      = noise(Off);
      let p_init = Interpolate.interpolateLine(p1,p4,i);
      let p_end  = Interpolate.interpolateLine(p2,p3,i);
      let variation = Interpolate.interpolateLine(p_init,p_end,n);
      
      push()
      stroke(lineC);
      strokeWeight(map(n,0,1,strokeW * 0.5,strokeW));
      line(p_init[0],p_init[1],variation[0],variation[1])
      pop()
      
      Off += 0.03
      
    }
    
    
    //top
    density = 0.04;
    Off     = 0.02;
    
    for(let i = 0; i < 1; i+= density){
      let        n = noise(Off);
      let p_init = Interpolate.interpolateLine(p_1,p_4,i);
      let p_end  = Interpolate.interpolateLine(p_2,p_3,i);
      let variation = Interpolate.interpolateLine(p_init,p_end,n);
      
      push()
      stroke(lineC);
      strokeWeight(map(n,0,1,strokeW * 0.5,strokeW));
      line(p_init[0],p_init[1],variation[0],variation[1])
      pop()
      
      Off += 0.08;
    }   


    lineC = saveColor;

    //---Dibujar Primera Cara
    push()
    noFill();
    stroke(lineC);
    strokeWeight(strokeW);

    beginShape();
    for (let i = 0; i < frontPoints.length; i++) {
      vertex(frontPoints[i][0], frontPoints[i][1])
    }
    endShape(CLOSE);
    pop()



    //---Dibujar Segunda Cara
    push()
    noFill();
    stroke(lineC);
    strokeWeight(strokeW);

    beginShape();
    for (let i = 0; i < nextPoints.length; i++) {
      vertex(nextPoints[i][0], nextPoints[i][1])
    }
    endShape(CLOSE);
    pop()


    //---Dibujar Top;

    push()
    noFill();
    stroke(lineC);
    strokeWeight(strokeW);

    beginShape();
    for (let i = 0; i < topPoints.length; i++) {
      vertex(topPoints[i][0], topPoints[i][1])
    }
    endShape(CLOSE);
    pop()
  }




  
  



}




