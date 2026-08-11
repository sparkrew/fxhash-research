const seed     = Math.floor(9999999 * $fx.rand());
const gen      = new Xorshift128(seed);
let features;
console.log("Hash: " + $fx.hash)


let F;
let back;


function setup(){restart()}

function restart()
{
  noiseSeed(seed);

  let st = gen.randomElement(["Landscape A4","Large square"])
  let f = setFormat(st);
  createCanvas(f.w, f.h);
  pixelDensity(2)



  back = gen.randomElement(["#ffffff","#D9899E","#98FB98","#BFEFFF","#F5DEB3"]);
  
  background(back)


  skyPattern("#000000");

  let x  = 0;
  let y =  0; //0.4
  let col = back;
  let lineC = "#000000"; //"#0000FF" #98FB98
  let space = 0;


  let features = {
    "Format": st,
    "Canvas": (()=>{
      if(back === "#ffffff"){return "White"}
      if(back === "#D9899E"){return "Rosy Brown"}
      if(back === "#98FB98"){return "Pale Green"}
      if(back === "#BFEFFF"){return "Baby Blue Eyes"}
      if(back === "#F5DEB3"){return "Wheat"}
    })(),
    "Leaves": gen.randomElement(["Orbicular", "Acuminate"]),
    "LeafPattern": gen.randomElement([true,false])
  }

  $fx.features(features)

  console.log(features);


 let polygon = road(width * gen.randomFloat(0.1,0.8))

 let plantDensity = gen.randomFloat(0.1,0.6)
 let leafType = 0;
 features.Leaves === "Orbicular" ? leafType = 2: leafType = 1;
 console.log(leafType)


  for(let i = 0; i < 28; i++){
    for(let j = 0; j < 40; j++){
      let eje = [x,y];
      let h = map(y,0,height,height* 0.08, height * 0.32);
      space = map(h,height* 0.2, height * 0.6,height*0.04,height*0.06)
      let angle = gen.randomInt(-15,15);
    


      if(!arrayManage.rayCasting([x,y], polygon)){
        if(gen.random() > 0.08){
          if(gen.random() < plantDensity){//0.5
           Plant.createPlant1(eje,h *1.2,height * 0.002,gen.randomElement(['wave','L','R']),col,col,lineC,0,leafType,features.LeafPattern,gen);
          }
          else{
            if( i <= 24){
              Plant.createBush([eje[0],eje[1] - h * 0.5],h * gen.randomFloat(0.65,0.83),col,gen.randomInt(15,30),lineC,gen)
            }
            
          }
        }
        else{
          if(gen.random() < .5){
            Plant.Flower2([eje[0],eje[1] - h * 0.3],h,angle,col,lineC,gen);
          }else{
            Plant.Flower3([eje[0],eje[1] - h * 0.3],h * 0.8,angle,col,lineC,gen);
          }
        }

      }

    

  
      x+=space;
    }
    x = 0;
    y += space;
  }


  push();
  noFill();
  stroke(col);
  strokeWeight(height * 0.04);
  rect(0,0,width,height);
  pop();

  paperTexture(gen);



  $fx.preview();
  
}


function road(start){
  
 
  let end   = start + width * 0.2;

  let p1 = [start, 0]; //0.35
  let p2 = [end, 0]; //0/54
  let p3 = [ width *gen.randomFloat(0.6,0.85) ,height*2];
  let p4 = [ width *gen.randomFloat(0.1,0.3),height*2];


  let pot = gen.randomFloat(0.2,0.8)
  let p5 = Interpolate.interpolateLine(p1,p4,pot)
  let p6 = Interpolate.interpolateLine(p2,p3,pot)
  let dr = height * gen.randomFloat(0.08,0.14) * gen.randomElement([1,-1]);
  p5[0] += dr;
  p6[0] += dr;


  let L = Interpolate.interpoalteCurve([p1,p5,p4],200);
  let R = Interpolate.interpoalteCurve([p3,p6,p2],200);

  let polygon = L.concat(R);

  push()
  fill(back);
  strokeWeight(height * 0.003)
  beginShape()
  polygon.forEach(p => vertex(p[0],p[1]))
  endShape(CLOSE)
  pop()

  let r = R.reverse();


  for(let i = 0; i < L.length; i++){
    let p_init = Interpolate.interpolateLine(L[i],r[i],gen.randomFloat(0,1.0));
    let p_end  = Interpolate.interpolateLine(L[i],r[i],gen.randomFloat(0,1.0));
    push()
    stroke(0,160)
    
    line(p_init[0],p_init[1],p_end[0],p_end[1]);

    pop()
   
  }


  let type = gen.randomElement([1,2])


  for(let i = 0; i < L.length; i++){
    let p_init = Interpolate.interpolateLine(L[i],r[i],gen.randomFloat(0,1.0));
    push()
    stroke(0)
  
    if(gen.random() < .3){
      fill(back)
      strokeWeight(height * 0.002)
      let w =  map(i,0,L.length,height *0.02,height*0.06);
      type === 1 ? rect(p_init[0],p_init[1], w, w * 0.35):ellipse(p_init[0],p_init[1], w, w * 0.35);
    }

    pop()
   
  }


  


  return polygon;
}





function windowResized(){
  gen.reset();
  restart()
};

function keyPressed() { 
  if (key === 's' || key === 'S') {
    
    saveCanvas(`Trail #${$fx.iteration}.png`)
    
    
  }

};






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
































