/// <reference path="./p5.global-mode.d.ts" />

const happy = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51']
const earth = ['#ede0d4', '#e6ccb2', '#ddb892', '#b08968', '#7f5539', '#9c6644']
const pinkTones = ['#ffcdb2', '#ffb4a2', '#e5989b', '#b5838d', '#6d6875']
const grays = ['#aaa', '#888', '#555']

const colors = choose([happy,earth,pinkTones,grays])
const bgColor = '#dedabd'
let l1,l2,l3

function setup() {
    angleMode(DEGREES)

    canvas = createCanvas(min(windowWidth, windowHeight), min(windowWidth, windowHeight), WEBGL);
    // canvas.drawingContext.disable(canvas.drawingContext.DEPTH_TEST);
    ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 2000);
    noStroke()
    
    if (random()<0.5){
        lamps = [new Lamp(createVector(0,random(-350,100),0),round_random(3,10))]
    } else {
        lamps = [
            new Lamp(createVector(-width/6,random(-350,100),0),round_random(3,10)),
            new Lamp(createVector(width/6,random(-350,100),-500),round_random(3,10)),
        ]
    }
    // if (random()<1.0) {
    //     const l = choose(lamps)
    //     const newLamp = new Lamp(l.pos.add(0,150,0),l.sections)
    //     newLamp.rotationSpeed = l.rotationSpeed
    //     lamps.push(newLamp)
    // }
    lamps.sort((a,b)=>a.pos.y + a.shape.vertices[a.shape.vertices.length-1].y>b.pos.y+b.shape.vertices[b.shape.vertices.length-1].y ? -1 : 1)
    if (upsidedown) lamps.reverse()
    bgColors = Array(4).fill(0).map(a=>choose(colors))

    makeBG()
    makeFG()
}


function draw() {
    setup3D()
    background(0)
    translate(0,0,-800)
    texture(bg)
    plane(width)
    image(fg,-width/2,-height/2,width,height)
    translate(0,0,800)

    
    lamps.forEach(l=>l.draw())
}

function makeBG(){
    bg = createGraphics(width,height,WEBGL)
    bg.beginShape();
    bg.fill(bgColors[0]);
    bg.vertex(-width/2, -height/2);
    bg.fill(bgColors[1]);
    bg.vertex(width/2, -height/2);
    bg.fill(bgColors[2]);
    bg.vertex(width/2, height/2);
    bg.fill(bgColors[3]);
    bg.vertex(-width/2,height/2);
    bg.endShape(CLOSE);
}

function makeFG(){
    fg = createGraphics(width,height)
    fg.noFill()
    fg.stroke(255)
    const b = random(50,150)
    fg.rect(b,b,width-b-b,height-b-b,random(100))
}

function setup3D(){
    ambientLight(100)
    directionalLight(250, 250, 250, -0,0, -1);
    shininess(50);
}
