const seed     = Math.floor(9999999 * $fx.rand());
const gen      = new Xorshift128(seed);
const title    = "Medieval Village";

let palette,back,scl,features,index,rotation;
let pxl = 1;


console.log(`<a href="${location + "?fxhash=" + $fx.hash}" target="_blank">HASH</a>`)
console.log($fx.hash)

function setup(){restart()}

function restart(){
    noiseSeed(seed);

    
    //gen.randomElement(["Portrait A4","Landscape A4","Large square A3"])
    f = setFormat("Landscape A4");
    createCanvas(f.w, f.h)

    pixelDensity(pxl);

    back = gen.randomElement(["#ffffff","#D9899E","#98FB98","#BFEFFF","#F5DEB3"]);
    background(back);
    

    skyPattern("#000000")

    let center = [width * gen.randomFloat(0.3,0.7) , height * gen.randomFloat(0.15,0.25)]
    let radius = height * gen.randomFloat(0.08,0.2)
    let col = back;
    drawCircle(center,radius,col)

    let x = height * 0.02;
    let y = height * 0.5; //0.2
    let scl = 1/ (height * 0.2) //0.03

    for(let j = 0; j < 8; j++){
        for(let i  = 0;  i < 22; i++){
            let n = noise(x * scl, y *scl)
            let pos = [ x, y]
            let h = height * gen.randomFloat(0.08,0.27);
            let w = height * gen.randomFloat(0.03,0.1)

            if(n < .5){ 
                let type = gen.randomElement([1,2,3,4,5])

                type === 1 ? Build.tower(pos,h,w,back,0):null;
                type === 2 ? Build.house([pos[0],pos[1] - h* 0.12], h * gen.randomFloat(0.35,0.45), h * 0.3 * 0.8, back):null;
                type === 3 ? Build.towerRect(pos, h *.7, h * .3, col, 0):null;
                type === 4 ? Build.towerRectTop(pos, h *.7, h * .3, col, 0):null;
                type === 5 ? Build.windmill(pos, h *.7, h * .3, col, 0):null;

                

            }
          
           
            let a = x;
            let b = y;
            for(let i = 0; i < 14; i++){
                Plant.createPlant1([ a, b ], h * gen.randomFloat(0.3,0.4), height * 0.002, gen.randomElement(["L","R","wave"]), back, back, "#000000", 0, 2,false,  gen)
                a += w * 0.2;

                if(gen.random() < .3){
                    Plant.Flower2([ a, b ],h* gen.randomFloat(0.34,0.54),0,back,"#000000",gen)
                }
            }
            x+=w;
        }
        x = height * 0.08;;
        y += height * 0.13;
    }

    push()
    noFill();
    stroke(back);
    strokeWeight(height * 0.04)
    rect(0,0,width,height)
    pop()


    $fx.preview();


}


function drawCircle(center,radius,col){

    let points = [];
    let vector = [ center, [center[0], center[1] - radius] ]

    for(let angle = 0; angle < 360; angle+=2.5){
        let pts = arrayManage.rotatePoints(vector,angle)
        points.push(pts[1])
    }


    push()
    strokeWeight(radius * 0.03)
    fill(col)
    beginShape()
    points.forEach(p => vertex(p[0], p[1]))
    endShape(CLOSE)
    pop()


    let L = [];
    let R = [];


    for(let i = 0; i < points.length/2; i++){
        R.push(points[i]);
    }

    for(let i = points.length/2; i < points.length; i++){
        L.push(points[i]);
    }

    L.reverse();

   
    //Patterns
    let shadow = gen.randomElement([1,2,3]);
    shadow = 1;

    if (shadow === 1) {
      //---Shadow horizontal Left
      let XOff = 0.02;
      for (let i = 0; i < L.length; i++) {
        let n = noise(XOff);
        let p_init = [L[i][0], L[i][1]];
        let p_end = Interpolate.interpolateLine(
          [R[i][0], R[i][1]],
          [L[i][0], L[i][1]],
          n
        );
        push();
        stroke(0, map(n, 0, 1, 20, 255));
        strokeWeight(map(n, 0, 1, radius * 0.009, radius * 0.012));
        line(p_init[0], p_init[1], p_end[0], p_end[1]);
        pop();
        XOff += 0.03;
      }

      //---Vertical left

      let topL = [];
      let topB = [];
      XOff = 0.02;
      for (let i = 0; i < L.length / 2; i++) {
        topL.push([L[i][0], L[i][1]]);
      }
      for (let i = L.length / 2; i < L.length; i++) {
        topB.push([L[i][0], L[i][1]]);
      }
      topB.reverse();

      for (let i = 0; i < topL.length; i++) {
        let n = noise(XOff);
        let p_end = Interpolate.interpolateLine(
          [topL[i][0], topL[i][1]],
          [topB[i][0], topB[i][1]],
          n
        );

        push();
        stroke(0, map(n, 0, 1, 20, 255));
        strokeWeight(map(n, 0, 1, radius * 0.009, radius * 0.012));
        line(topL[i][0], topL[i][1], p_end[0], p_end[1]);
        pop();

        XOff += 0.03;
      }
    }

    if(shadow === 2){
        //---Shadow horizontal Left
        let XOff = 0.02;
        for (let i = 0; i < L.length; i++) {
            let n = noise(XOff);
            let p_init = [L[i][0], L[i][1]];
            let p_end = Interpolate.interpolateLine(
            [R[i][0], R[i][1]],
            [L[i][0], L[i][1]],
            n
            );
            push();
            stroke(0, map(n, 0, 1, 20, 255));
            strokeWeight(map(n, 0, 1, radius * 0.009, radius * 0.012));
            line(p_init[0], p_init[1], p_end[0], p_end[1]);
            pop();
            XOff += 0.03;
        }
    }

    if(shadow === 3){
        //---Vertical left

        let topL = [];
        let topB = [];
        let XOff = 0.02;
        for (let i = 0; i < L.length / 2; i++) {
            topL.push([L[i][0], L[i][1]]);
        }
        for (let i = L.length / 2; i < L.length; i++) {
            topB.push([L[i][0], L[i][1]]);
        }
        topB.reverse();

        for (let i = 0; i < topL.length; i++) {
            let n = noise(XOff);
            let p_end = Interpolate.interpolateLine(
            [topL[i][0], topL[i][1]],
            [topB[i][0], topB[i][1]],
            n
            );

            push();
            stroke(0, map(n, 0, 1, 20, 255));
            strokeWeight(map(n, 0, 1, radius * 0.009, radius * 0.012));
            line(topL[i][0], topL[i][1], p_end[0], p_end[1]);
            pop();

            XOff += 0.03;
        }
    }

    



 

 

   



    //Patterns


}

function skyPattern(col) {
    let step = height * 0.008;
    let number = 160
    let y = 0;
  
    col = colorsManage.hexToRgb(col);
  
    for (let i = 0; i < number; i++) {
      let xOff = 0.02;
      let dy = height * 0.06;
      let p = [];
      for (let j = 0; j <= 1; j += 0.1) {
        let p1 = [0, y];
        let p2 = [width, y]
        let v = Interpolate.interpolateLine(p1, p2, j);
  
        v[1] += dy * noise(xOff) * gen.randomElement([-1, 1])
  
  
        p.push(v)
  
      }
  
      xOff += 0.01;
  
      p = Interpolate.interpoalteCurve(p, 200)
  
      push()
      noFill()
  
      stroke([col.red,col.green,col.blue,190])
      beginShape()
      for (let l = 0; l < p.length; l++) {
        vertex(p[l][0], p[l][1])
      }
      endShape()
      pop()
  
      y += step;
    }
}

function windowResized() {
    gen.reset();
    restart()
};

function keyPressed() {
    if(key === "s" || key === "S"){
        pxl = 3;
        gen.reset();
        restart();
        saveCanvas(title, 'png');
    }

    
}
  

