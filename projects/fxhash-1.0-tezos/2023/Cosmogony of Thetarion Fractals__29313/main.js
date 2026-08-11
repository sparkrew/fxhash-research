const seed     = Math.floor(9999999 * $fx.rand());
const gen      = new Xorshift128(seed);
const title    = "Cosmogony of Thetarion Fractals";

let palette,back,scl,features,index,rotation;


console.log(`<a href="${location + "?fxhash=" + $fx.hash}" target="_blank">HASH</a>`)
console.log($fx.hash)

function setup(){restart()}

function restart(){
    noiseSeed(seed);

    
    f = setFormat(gen.randomElement(["Portrait A4","Landscape A4","Large square A3"]));
    createCanvas(f.w, f.h)

    if(gen.random() < .5){
        palette = gen.randomElement(pal);
        index   = pal.indexOf(palette);
        palette = arrayManage.shuffleArray(palette)
        back = "#F2E6DF"
    }else{
        palette = gen.randomElement(neon);
        index   = neon.indexOf(palette);
        palette = arrayManage.shuffleArray(palette)
        back = "#262626"
    }

    rotation = gen.randomElement(
        [
            [0,360],
            [-180,180],
            [0,180],
            [0,-180],
            [45,270],
            [0,0],
            [90,180]
        ]
    )

    pixelDensity(3)

    


    background(back);

    paperTexture(gen)

    features = {
        "Format":   f.name,
        "Theme":    back === "#F2E6DF" ? this.Theme = "Light" : this.Theme = "Dark",
        "Palette":  back === "#F2E6DF" ? this.Palette = namePal[index] : this.Palette = nameNeon[index],
        "Rotation": `${rotation[0]}° to ${rotation[1]}°` 
    }

    console.log(features)

    $fx.features(features);

    let x = height * 0.0;
    let y = height * 0.0;
    let step = height * 0.01;//0.014
    let h = height * gen.randomFloat(0.1, 0.54);//0.2
    scl = 1 / (height * gen.randomFloat(0.2,0.6))

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 180; j++) {
            let pos = [x, y];
            let n = noise(x * scl, y * scl)
            let id = int(map(n,0,1,0,palette.length-1))
            let lineC = palette[id];
            let angle = map(n, 0, 1, rotation[0], rotation[1]);
            if (n < 0.6) {
                h = map(n,0,0.6,height * 0.1,height *0.34)
                createCurve(pos, h, lineC, angle)
            }

            x += step;

        }
        x = height * 0.05;
        y += h + gen.randomElement([-1, 1]) * h * 0.02;
    }


    push()
    noFill();
    stroke(back);
    strokeWeight(height * 0.05)
    rect(0, 0, width, height)
    pop()



    $fx.preview();

    

    

}


function createCurve(pos,h,lineC,angle){
    let w = h * 0.23;
   
    let p1 = pos;
    let p4 = [ pos[0], pos[1] - h ];
    
    let p2 = Interpolate.interpolateLine(p4,p1,gen.randomFloat(0.1,0.4));//0.3
    p2[0] += w * gen.randomElement([-1,1]);
    
    
    let p3 = Interpolate.interpolateLine(p4,p1,gen.randomFloat(0.6,0.8));//0.6
    p3[0] += w *  gen.randomElement([-1,1]);
    
    let points = [p1,p2,p3,p4]
    
    points = Interpolate.interpoalteCurve(points,50)
    points = arrayManage.rotatePoints(points,angle)
    
    
    push()
    stroke(lineC)
    let sl = 1/(height * 0.6)
    points.forEach(p => {
        gen.random() < 0.34 ? fill(lineC):fill(back);
        circle(p[0],p[1],h * 0.02)
    })
    pop()
    
  }




function windowResized() {
    gen.reset();
    restart()
};

function keyPressed() {
    key === "s" || key === "S" ? saveCanvas(title, 'png') : null;
}
  

