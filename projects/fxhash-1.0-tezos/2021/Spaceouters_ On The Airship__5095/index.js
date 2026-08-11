const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const width = canvas.width;
const height = canvas.height;

function getColor(){
    var rand = fxrand();
    if(rand < 0.04) {
        return new Array('#c51111', '#7a0838');
    } else if(rand < 0.08) {
        return new Array('#132ed1', '#09158e');
    } else if(rand < 0.12) {
        return new Array('#117f2d', '#0a4d2e');
    } else if(rand < 0.16) {
        return new Array('#ed54ba', '#ab2bad');
    } else if(rand < 0.20) {
        return new Array('#ef7d0d', '#b33e15');
    } else if(rand < 0.24) {
        return new Array('#f5f557', '#c28722');
    } else if(rand < 0.28) {
        return new Array('#3f474e', '#1e1f26');
    } else if(rand < 0.32) {
        return new Array('#d6e0f0', '#8394bf');
    } else if(rand < 0.36) {
        return new Array('#6b2fbb', '#3b177c');
    } else if(rand < 0.40) {
        return new Array('#71491e', '#5e2615');
    } else if(rand < 0.44) {
        return new Array('#38fedc', '#24a8be');
    } else if(rand < 0.48) { //last og color
        return new Array('#50ef39', '#15a742');
    } else {
        return randomColors();
    }
}

function randomColors() {
    cr = Math.floor(fxrand()*255);
    cg = Math.floor(fxrand()*255);
    cb = Math.floor(fxrand()*255);
    crh = cr.toString(16);
    cgh = cg.toString(16);
    cbh = cb.toString(16);

    var color = '#' + crh + cgh + cbh;
    while(color.length < 7){
        color += 0;
    }
    
    srh = Math.abs(cr - 50).toString(16);
    sgh = Math.abs(cg - 50).toString(16);
    sbh = Math.abs(cb - 50).toString(16);
    var shade = '#' + srh + sgh + sbh;
    while(shade.length < 7){
        shade += 0;
    }

    return new Array(color, shade);
}

if(width < height){
    var sc = width/300;
} else {
    var sc = height/300;
}
ctx.scale(sc,sc);
ctx.lineWidth = 10;

//background
ctx.fillStyle = '#2C2C2C';
ctx.fillRect(0,0,300,300);

ctx.fillStyle = '#AA9347';
for(var y = 0; y < 298; y++) {
    for(var x = 0; x < 298; x++) {
        if(fxrand() < 0.01){
            ctx.fillRect(x, y, 2, 2);
        }
    }
}

ctx.fillStyle = '#808080';
ctx.fillRect(0, 240, 300, 60);

ctx.fillStyle = 'rgb(0, 185, 255, 0.1)';
ctx.fillRect(10, 40, 280, 160);


ctx.lineWidth = 1;

ctx.fillStyle = '#505050';
ctx.strokeStyle = '#505050';
ctx.fillRect(0, 0, 300, 40);
ctx.fillRect(0, 199, 300, 41);
ctx.fillRect(0, 30, 11, 170);
ctx.fillRect(290, 30, 10, 170);

ctx.beginPath();
ctx.moveTo(10, 70);
ctx.lineTo(60, 40);
ctx.lineTo(10, 40);
ctx.lineTo(10, 50);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(10, 170);
ctx.lineTo(60, 200);
ctx.lineTo(10, 200);
ctx.lineTo(10, 170);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(290, 170);
ctx.lineTo(240, 200);
ctx.lineTo(290, 200);
ctx.lineTo(290, 170);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(240, 40);
ctx.lineTo(290, 70);
ctx.lineTo(290, 40);
ctx.lineTo(240, 40);
ctx.stroke();
ctx.fill();

ctx.lineWidth = 3;
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.beginPath();
ctx.moveTo(0, 240);
ctx.lineTo(300, 240);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(10, 69);
ctx.lineTo(10, 170);
ctx.lineTo(60, 200);
ctx.lineTo(240, 200);
ctx.lineTo(290, 170);
ctx.lineTo(290, 70);
ctx.lineTo(240, 40);
ctx.lineTo(60, 40);
ctx.lineTo(9.5, 70.2);
ctx.stroke();


ctx.lineWidth = 10;
var colors = getColor();
ctx.fillStyle = colors[0];

ctx.fillRect(75,25,150,200); //body
ctx.fillRect(75,225,60,50); //left leg
ctx.fillRect(165,225,60,50); //right leg
ctx.fillRect(25,85,50,125); //backpack

ctx.strokeStyle = colors[1];
ctx.fillStyle = colors[1];

//bodyShadow
ctx.beginPath();
ctx.moveTo(80, 25);
ctx.lineTo(80, 270);
ctx.lineTo(140, 270);
ctx.lineTo(140, 220);
ctx.lineTo(165, 220);
ctx.lineTo(165, 270);
ctx.lineTo(225, 270);
ctx.lineTo(225, 130);
ctx.bezierCurveTo(220, 200, 100, 220, 80, 30);
ctx.stroke();
ctx.fill();

//backpackShadow
ctx.beginPath();
ctx.moveTo(30, 210);
ctx.lineTo(75, 210);
ctx.lineTo(75, 120);
ctx.bezierCurveTo(75, 110, 30, 110, 30, 120);
ctx.lineTo(30, 210);
ctx.stroke();
ctx.fill();

//backpack Outerline
ctx.strokeStyle = 'rgb(0,0,0)';
ctx.strokeRect(25, 85, 50, 130);

//body Outerline
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.lineTo(75, 272);
ctx.lineTo(141, 272);
ctx.lineTo(141, 221);
ctx.lineTo(165, 221);
ctx.lineTo(165, 272);
ctx.lineTo(225, 272);
ctx.lineTo(225, 28);
ctx.lineTo(70, 28);
ctx.stroke();

//glass + outer line
ctx.fillStyle = '#96cadd';
ctx.fillRect(120,60,125,60);
ctx.strokeRect(120, 60, 125, 60);

//glass shadow
ctx.strokeStyle = '#49636d';
ctx.fillStyle = '#49636d';
ctx.beginPath();
ctx.moveTo(120, 60);
ctx.quadraticCurveTo(120, 130, 245, 100);
ctx.lineTo(245, 120);
ctx.lineTo(120, 120);
ctx.lineTo(120, 60);
ctx.stroke();
ctx.fill();

ctx.strokeStyle = 'rgb(0,0,0)';
ctx.strokeRect(120, 60, 125, 60);

ctx.lineWidth = 1;
ctx.strokeStyle = 'rgb(255,255,255)';
ctx.fillStyle = 'rgb(255,255,255)';
ctx.beginPath();
ctx.moveTo(185, 70);
ctx.quadraticCurveTo(160, 78, 185, 85);
ctx.lineTo(210, 85);
ctx.quadraticCurveTo(235, 78, 210, 70);
ctx.lineTo(185, 70);
ctx.stroke();
ctx.fill();

//crown

ctx.fillStyle = '#D1C623';
ctx.fillRect(60, 10, 30, 35);
ctx.fillRect(110, 10, 30, 35);
ctx.fillRect(160, 10, 30, 35);
ctx.fillRect(210, 10, 30, 35);
ctx.fillRect(60, 25, 180, 20);

ctx.strokeStyle = 'rgb(0,0,0)';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(60, 9);
ctx.lineTo(60, 45);
ctx.lineTo(240, 45);
ctx.lineTo(240, 10);
ctx.lineTo(210, 10);
ctx.lineTo(210, 25);
ctx.lineTo(190, 25);
ctx.lineTo(190, 10);
ctx.lineTo(160, 10);
ctx.lineTo(160, 25);
ctx.lineTo(140, 25);
ctx.lineTo(140, 10);
ctx.lineTo(110, 10);
ctx.lineTo(110, 25);
ctx.lineTo(90, 25);
ctx.lineTo(90, 10);
ctx.lineTo(59, 10);
ctx.stroke();
var xyz = fxrand();
if(xyz < 0.33) {
    var col1 = '#FF2C2C';
    var col2 = '#FFDADA';
} else if(xyz < 0.66) {
    var col1 = '#209600';
    var col2 = '#B4D8AB';
} else {
    var col1 = '#002CFF';
    var col2 = '#BBC7FF';
}
ctx.fillStyle = col1;
ctx.fillRect(70, 20, 10, 10);
ctx.fillRect(120, 20, 10, 10);
ctx.fillRect(170, 20, 10, 10);
ctx.fillRect(220, 20, 10, 10);
ctx.fillStyle = col2;
ctx.fillRect(74, 24, 2, 2);
ctx.fillRect(124, 24, 2, 2);
ctx.fillRect(174, 24, 2, 2);
ctx.fillRect(224, 24, 2, 2);