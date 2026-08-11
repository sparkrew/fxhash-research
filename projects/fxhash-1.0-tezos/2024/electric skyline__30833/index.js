/* 
Created by Gwen K 2024
 *********************
Mathematic references:
utilizing Ken Perlin's perlin noise function
ƒ(x) = a[0] + smoothstep(x)*(a[1]-a[0]) for 0<=x<=1
 *********************
smoothstep formula: 
x<=0 s = 0
3x^2 - 2x^3  if x is between 0 and 1
 x=1 if s = 1
*/
let xh = 100;
let intensity = 10;
let scaler = 1;
let c = 1;
let startPos;
let population = 3;
let newPos;
let myStr = $fx.minter;
let myHsh = $fx.hash;
let lastCharNum = myStr.charCodeAt(myStr.length - 1); //get a numerical value of last char
let anotherCharNum = myStr.charCodeAt(myStr.length - 2);
let fourChar = $fx.hash.charCodeAt($fx.hash.length - 4);//myStr.charCodeAt(myStr.length - 4);
console.log(lastCharNum);
console.log($fx.hash); //log iteration hash
console.log($fx.hash.charCodeAt($fx.hash.length - 4));
//intialize multiple canvases
const myCanv = document.getElementById('test-canv');
const scrollCanv = document.getElementById('horizon');
const back = document.getElementById('fill');
const front = document.getElementById('circs');
//color palettes and color calculations
sky = [[6, 86, 120], [37, 21, 77], [0, 0, 0], [17, 0, 54], [79, 7, 33], [2, 0, 120], [0, 48, 48], [54, 4, 0], [0, 0, 0]];
twrC = [[253, 271, 76], [255, 133, 249], [110, 255, 74], [255, 181, 33], [186, 186, 186], [82, 151, 255], [255, 54, 137], [141, 54, 255], [255, 87, 54]];
squareC = [[255, 161, 117], [114, 191, 69], [255, 255, 255], [194, 255, 254], [219, 228, 255], [194, 255, 254]];
fogC = [[229, 89, 52], [114, 191, 69], [151, 194, 183], [207, 140, 155], [55, 128, 43], [138, 3, 61], [3, 14, 138], [153, 153, 153], [145, 158, 163], [235, 225, 174], [180, 224, 207], [255, 161, 117]];
pickSky = Math.floor(((lastCharNum * $fx.rand()) / $fx.rand()) / sky.length);
console.log("pick sky" + pickSky);
console.log("sky length" + sky.length);
if (pickSky >= sky.length) {
    do {
        pickSky = Math.floor(pickSky / sky.length);
        console.log("new pick sky" + pickSky);
    } while (pickSky >= sky.length)

}
let pickTwrC = Math.floor($fx.rand() * twrC.length);
let pickSQ = Math.floor($fx.rand() * squareC.length);
let pickHouseC;
if (pickTwrC > 0) {
    pickHouseC = pickTwrC - 1;
} else {
    pickHouseC = Math.floor($fx.rand() * twrC.length);
}
console.log("my four char" + fourChar);
let smoke = Math.floor(((fourChar * $fx.rand()) / $fx.rand()) / fogC.length);
console.log("smoke" + smoke);
console.log("fog C length" + fogC.length);
if (smoke >= fogC.length) {
    do {
        smoke = Math.floor(smoke / fogC.length);
        console.log("new smoke" + smoke);
    } while (smoke >= fogC.length)

}
//set sky color
document.getElementById('fill').style.backgroundColor = `rgb(${sky[pickSky][0]},${sky[pickSky][1]},${sky[pickSky][2]})`;
//set dimensions of canvases
back.width = window.innerWidth;
back.height = window.innerHeight;
scrollCanv.width = window.innerWidth * 4;
scrollCanv.height = window.innerHeight;
front.width = window.innerWidth * 4;
front.height = window.innerHeight;
myCanv.width = window.innerWidth * 2;
myCanv.height = window.innerHeight;
const ctxOk = myCanv.getContext('2d');
const ctxH = scrollCanv.getContext('2d');
const ctxF = front.getContext('2d');
console.log("im running!");

myCanv.addEventListener('click', function (event) { //tracking user cursor movement
    xPos = event.clientX; //user x pos
    yPos = event.clientY; //user y pos

    console.log("click at" + xPos);
    // let cor = "rgba(25, 2, 2,.1)"
    // small(cor);
    ctxOk.beginPath();
    ctxOk.fillStyle = "rgba(255,255,255,.2)";
    for (i = 0; i < intensity; i++) {
        holdX = perlin(nodeA, nodeB);
        if (holdX < .01) {
            holdX += .5;
        }
        nodeA.x = setPts[255 - i];
        nodeB.x = setPts[i];
        xClick = (holdX * 100) + xPos;
        yClick = (holdX + 10) + yPos;
        ctxOk.fillRect(xClick, yPos, 10, 10);
        ctxOk.fillRect((xClick - 10), yClick, 10, 10);
        ctxOk.fillRect((xClick - 10), yClick - 5, 10, 10);
    }
    ctxOk.closePath();

});
front.addEventListener('click', function (event) { //tracking user cursor movement
    xPos = event.clientX - k; //user x pos
    yPos = event.clientY; //user y pos

    console.log("click at" + xPos);
    // let cor = "rgba(25, 2, 2,.1)"
    // small(cor);
    ctxF.beginPath();
    ctxF.fillStyle = "rgba(255,255,255,.2)";
    for (i = 0; i < intensity; i++) {
        holdX = perlin(nodeA, nodeB);
        if (holdX < .01) {
            holdX += .5;
        }
        nodeA.x = setPts[255 - i];
        nodeB.x = setPts[i];
        xClick = (holdX * 100) + xPos;
        yClick = (holdX + 10) + yPos;
        ctxF.fillRect(xClick, yPos, 10, 10);
        ctxF.fillRect((xClick - 10), yClick, 10, 10);
        ctxF.fillRect((xClick - 10), yClick - 5, 10, 10);
    }
    ctxF.closePath();

});
let setPts = new Array(255);
for (m = 0; m < 255; m++) {
    setPts[m] = Math.random();
}
console.log("at 3 " + setPts[3]);
const nodeA = {
    x: 1
}
const nodeB = {
    x: .5
}

function go() {
    let randoPos = myCanv.width * $fx.rand();
    let randoP = myCanv.width * lastCharNum * $fx.rand();
    crack(randoPos, myCanv.height - (($fx.rand() * anotherCharNum) + (myCanv.height / 4)));
    crack(randoP, myCanv.height - (($fx.rand() * anotherCharNum) + (myCanv.height / 3)));
    small(`rgba(${fogC[smoke][0]},${fogC[smoke][1]},${fogC[smoke][2]},.1)`);
    tumbleweeds();
}

function mover() {
    xh = xh * 10;
    intensity = intensity * 2;
    scaler = scaler * 1.2;
    c = Math.floor($fx.rand() * 10);
}

function crack(xPos, yPos) {

    ctxOk.beginPath();
    ctxOk.moveTo(xPos, yPos);
    ctxOk.lineWidth = 1;
    ctxOk.strokeStyle = "white";
    for (i = 0; i < (lastCharNum); i++) {
        ctxOk.fillRect(xPos * Math.random() + xPos, yPos, 10, 10);
        // ctxOk.fillRect(nodeA.x*(500*$fx.rand()),nodeB.x*(i*10),10,10);
        let xHold = xPos + ((nodeA.x * c * 20) * Math.random());
        let yHold = yPos + ((nodeA.x * c * 20) + yPos * Math.random());
        // ctxOk.lineTo(xHold,yHold);
        // ctxOk.moveTo(xHold,yHold);

        ctxOk.lineTo(xHold, yHold);
        ctxOk.stroke();
        ctxOk.moveTo(xHold, yHold);

        // ctxOk.fillRect(xPos,nodeA.x*(myCanv.height*$fx.rand()),30,30);
        holdX = perlin(nodeA, nodeB);
        if (holdX < .01) {
            holdX += .5;
        }
        nodeA.x = setPts[245 - (i - c)];
        nodeB.x = setPts[i - c];
    }
    for (i = 0; i < 25; i++) {
        ctxOk.fillRect(xPos * $fx.rand() + xPos, yPos, 10, 10);
        // ctxOk.fillRect(nodeA.x*(500*$fx.rand()),nodeB.x*(i*10),10,10);
        let xHold = xPos + ((nodeA.x * c * 20) * Math.random());
        let yHold = yPos + ((nodeA.x * c * 20) + yPos * Math.random());
        // ctxOk.lineTo(xHold,yHold);
        // ctxOk.moveTo(xHold,yHold);

        ctxOk.lineTo(xHold, yHold);
        ctxOk.stroke();
        ctxOk.moveTo(xHold, yHold);

        // ctxOk.fillRect(xPos,nodeA.x*(myCanv.height*$fx.rand()),30,30);
        holdX = perlin(nodeA, nodeB);
        if (holdX < .01) {
            holdX += .5;
        }
        nodeA.x = setPts[245 - (i - c)];
        nodeB.x = setPts[i - c];
    }

    ctxOk.closePath();
    cir(xPos, yPos + (lastCharNum * 10 * $fx.rand()));
    cir(xPos, yPos + (lastCharNum * 10 * $fx.rand()));
    cir(xPos, yPos + (lastCharNum * 10 * $fx.rand()));
}
function cir(xPos, yPos) {
    ctxOk.lineWidth = 2;
    ctxOk.strokeStyle = "white";
    ctxOk.beginPath();
    ctxOk.arc(xPos, yPos, $fx.rand() * (anotherCharNum / 4), 0, 2 * Math.PI);
    ctxOk.stroke();
    ctxOk.closePath();
}


function small(colorS) {
    ctxOk.beginPath();
    ctxOk.fillStyle = colorS;
    for (i = 0; i < intensity; i++) {
        holdX = perlin(nodeA, nodeB);
        if (holdX < .01) {
            holdX += .5;
        }
        nodeA.x = setPts[255 - i];
        nodeB.x = setPts[i];
    }
    ctxOk.closePath();
}

function twr() {
    ctxH.strokeStyle = `rgb(${twrC[pickTwrC][0]},${twrC[pickTwrC][1]},${twrC[pickTwrC][2]})`;
    ctxH.lineWidth = 2;
    ctxH.beginPath();
    let towers = Math.ceil($fx.rand() * 10);
    for (let i = 0; i <= towers; i++) {
        let rectX = (scrollCanv.width * $fx.rand()); //starting pos x
        let rectY = scrollCanv.height - ($fx.rand() * 500) + ($fx.rand() * 300); //starting pos y
        let wR = ($fx.rand() * 20) + 10;
        let hR = scrollCanv.height - 200;
        for (let i = 0; i < 1; i++) {
            ctxH.beginPath();
            ctxH.moveTo(rectX, rectY);
            ctxH.strokeRect(rectX, rectY, wR, hR);
        }
    }
    ctxH.closePath();
}
const elementToMove = document.getElementById('horizon');
startPos = elementToMove.style.left;
const ele = document.getElementById('circs');
ele.style.left = "100px";
let startP = ele.style.left;
let maxW = front.width / 4;
document.addEventListener("DOMContentLoaded", () => {
    console.log("i am loaded");
    ctxH.fillStyle = "green";
    ctxH.fillRect(0, 0, 400, 400);

    for (let i = 0; i < 20; i++) {
        twr();
        go();
    }
    setInterval(pan(), 10);
    setInterval(reversePan(), 20);
});

let keep = 0;
let sep;
let k = 0;
let sepL;
let newP;
function pan() {

    const maxWidth = scrollCanv.width / 4;
    let drawPara = setInterval(function () {
        r(elementToMove, maxWidth, startPos);

    }, 1000);

}
function reversePan() {

    const maxWidth = front.width / 4;
    let drawTumbs = setInterval(function () {

        l(ele, maxW, startPos);

    }, 1000);
}
function r(elementToMove, maxWidth, startPos) {
    let strL = elementToMove.style.right.length;
    let old = elementToMove.style.right;
    if (keep < maxWidth) {
        if (strL == 4) {
            sep = old.split("px");
            console.log("old split");
            console.log(sep[0]);
            keep = sep[0];
            keep = parseInt(sep[0], 10);
            console.log("keep" + keep);
        }
        if (strL == 5) {
            sep = old.split("px");
            console.log("old split");
            console.log(sep[0]);
            keep = sep[0];
            keep = parseInt(sep[0], 10);
            console.log("keep" + keep);
        }
        if (strL == 6) {
            sep = old.split("px");
            console.log("old split");
            console.log(sep[0]);
            keep = sep[0];
            keep = parseInt(sep[0], 10);
            console.log("keep" + keep);
        }
        console.log(elementToMove.style.right);
        console.log("string length" + strL);

        newPos = keep + 10;
        console.log("new pos" + newPos);
        elementToMove.style.right = `${newPos}px`;
        startPos = newPos;
        console.log("new pos = " + elementToMove.style.right);
        console.log(elementToMove);

    } else {
        keep = 0;
        newPos = 0;
        elementToMove.style.right = `${newPos}px`;
        console.log("reset");
    }

}
function l(ele, maxW, startP) {
    let strLength = ele.style.left.length;
    let oldL = ele.style.left;

    if (k < maxW) {
        if (strLength == 4) {
            sepL = oldL.split("px");
            console.log("old split");
            console.log(sepL[0]);
            k = sepL[0];
            k = parseInt(sepL[0], 10);
            console.log("keepk" + k);
        }
        if (strLength == 5) {
            sepL = oldL.split("px");
            console.log("old split");
            console.log(sepL[0]);
            k = sepL[0];
            k = parseInt(sepL[0], 10);
            console.log("keepk" + k);
        }
        if (strLength == 6) {
            sepL = oldL.split("px");
            console.log("old split");
            console.log(sepL[0]);
            k = sepL[0];
            k = parseInt(sepL[0], 10);
            console.log("keepk" + k);
        }
        console.log(ele.style.left);
        console.log("string length" + strLength);

        newP = k + 10;
        console.log("new pos" + newP);
        ele.style.left = `${newP}px`;
        startP = newP;
        console.log("new pos = " + ele.style.left);
        console.log(ele);

    } else {
        k = 0;
        newP = 0;
        ele.style.left = `${newP}px`;
        console.log("reset");
    }

}
function perlin(node0, node1) {
    let p = node0.x + sstep(node1.x) * node1.x - node0.x;
    return p;
}

function tumbleweeds() {
    ctxF.strokeStyle = `rgb(${squareC[pickSQ][0]},${squareC[pickSQ][1]},${squareC[pickSQ][2]}`;
    ctxF.beginPath();
    let x = (front.height * $fx.rand()) + 100;
    let y = front.width * $fx.rand() + 100;
    ctxF.strokeRect(x, y, anotherCharNum, anotherCharNum);
    ctxF.closePath();
    ctxF.fillStyle = `rgb(${twrC[pickHouseC][0]},${twrC[pickHouseC][1]},${twrC[pickHouseC][2]})`;
    ctxF.beginPath();
    let houses = Math.ceil($fx.rand() * 4);
    for (let i = 0; i <= houses; i++) {
        let rectX = (front.width * $fx.rand()); //starting pos x
        let rectY = front.height - ($fx.rand() * 500) + ($fx.rand() * (front.height / 3)); //starting pos y
        let wR = ($fx.rand() * 20) + 10;
        let hR = front.height - 200;
        for (let i = 0; i < 1; i++) {
            ctxF.beginPath();
            ctxF.moveTo(rectX, rectY);
            ctxF.fillRect(rectX, rectY, wR, hR);
        }
    }
    ctxF.closePath();
}

function sstep(xVal) {
    let s;
    if (xVal <= 0) {
        s = 0;
    } else if (xVal < 1 && xVal > 0) {
        s = (3 * Math.pow(xVal, 2)) - (2 * Math.pow(xVal, 3))
    } else {
        s = 1
    }
    return s;

}