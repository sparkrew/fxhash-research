
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation = 'destnination-over'
hue = fxrand () * 360
xz = Math.floor(fxrand()* 200) +1;

let number = Math.floor(fxrand()* 2) +0.3;
let scale = 8.5;
function drawFlower(){
    let angle = number * xz
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let postionY = radius * Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'hsl('+ hue + ', 100%, 50%)';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 0.9;
    ctx.beginPath();
    ctx.arc(positionX, postionY, 20 , 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue+=0.3
}

function animate(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    //draw each frame


    drawFlower();
    if ( number > 700) return;

requestAnimationFrame(animate);
}
animate();

