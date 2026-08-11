function noisePattern(inkColor,alpha)
{
    let len    = maxCanvas * .03; // 0.05
    let res    = 1/(maxCanvas * 0.8); //0.8
    let step  = maxCanvas * .015; //0.02
    let repeat = 100;
    let x = 0;
    let y = 0;

    inkColor = hexToRgb(inkColor);
    inkColor = [inkColor.red,inkColor.green,inkColor.blue, alpha]


    for(let i = 0; i < repeat; i++){
        for(let j = 0; j < repeat; j++){

            a = x;
            b = y;

            for(let k = 0;  k < 4; k++){
                let n = noise(a * res, b * res);
                let angle = n * TWO_PI;
                newX = sin(angle) * len +  a;
                newY = cos(angle) * len + b;
                stroke(inkColor)
                strokeWeight(maxCanvas * .002)
                line(a,b,newX,newY);
                a = newX;
                b = newY;
            }
            
            

            x+=step;
        }
        x = 0;
        y +=step;
    }
}


const circlePattern = (inkColor,alpha) =>
{
    let rep  = 100;
    let sp   = maxCanvas * .02;
    let size = maxCanvas * .02
    inkColor = hexToRgb(inkColor);
    inkColor = [inkColor.red,inkColor.green,inkColor.blue, alpha]



    for(let i = 0; i < rep; i++)
    {
        push()
        noFill()
        stroke(inkColor)
        circle(width/2,height/2,size)
        pop()
        size += sp;
    }
}


const pack = (ink) =>
{
    let rows = 40;
    let cols = 40;
    let x = 0;
    let y = 0;
    let sp = maxCanvas * .04;
    let scl = maxCanvas *.02;
    let points = [];

    angleMode(DEGREES)

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let p = createVector( x + random(-sp,sp), y + random(-sp,sp))
            points.push(p)
            x += sp;
        }
        x = 0;
        y +=sp;
    }

    

    points.forEach(pt =>{
        let n = noise(pt.x,pt.y)
        let angle = map(n,0,1,0,700);

        pt.add(createVector(cos(angle),sin(angle)));

        push()
        noFill()
        stroke(ink);
        circle(pt.x,pt.y,scl)
        pop()
    })


}


const wall = ()=>
{
    let nx = 50;
    let ny = 80;
    let h  = height * .02;
    let w  = height * .05;
    x = 0;
    y = 0;
    let sp = -height * .004;
    let move = height* .01

    let col = features.wallPal.hex
    let back = random(col)
    background(back)

    for(let i = 0; i < ny; i++){
        for(let j = 0; j < nx; j++){
            push()
            random() < 99 ? fill(random(col)):noFill();
            stroke(0,100)
            rect(x + random(-move,move),y,w,h)
            pop()
            x +=w+sp;
        }
        x = 0;
        y +=h;
    }


    return back;
}





const Patterns = 
[
    { name: "circles", id: 1 },
    { name: "waves"  , id: 2 }
]



//Master FN
const getPattern = (inkColor) => 
{
    features.pattern.id == 1 ? circlePattern(inkColor,40) :null;
    features.pattern.id == 2 ? noisePattern(inkColor,20)  :null;
}