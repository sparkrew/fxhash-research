const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//ctx.globalCompositeOperation = 'destination-over';
let W = canvas.width;
let H = canvas.height;


let n = Math.floor(fxrand()*7+5);
let m = 3*n+1;
let h = 0.8 * H;
let l = h / 2 / n;
let delta_X = l * Math.cos(1 / 6 * Math.PI); 
let delta_Y = l * Math.sin(1 / 6 * Math.PI); 

let number = 0;

//color
let hue_0= 0;
let hue = new Array(m);
for (var i = 0; i < m; i++){
    hue[i] = hue_0;
};

let sat = new Array(m);
for (var i = 0; i<m; i++){
    sat[i] = 0//fxrand()*5;
};

let light = new Array(m);
for (var i = 0; i<m; i++){
    light[i] = fxrand()*7;
};

hue_0 += fxrand()*360;

let hue_signal = new Array(n*n)
for (var i = 0; i<n*n; i++){
    hue_signal[i] = fxrand()*49 + hue_0;
};
let sat_signal = 100
let light_signal = 50

// points
function Point(x,y) {
    this.x = x;
    this.y = y;
};

var points = [];

points.push(new Point(W / 2, H / 2));
for (var i = 1; i <= n; i++) {
    points.push(new Point(W / 2, H / 2 - i * l));
    points.push(new Point(W / 2 + i * delta_X, H / 2 - i * (l - delta_Y)));
    points.push(new Point(W / 2 + i * delta_X, H / 2 + i * delta_Y));
    points.push(new Point(W / 2, H / 2 + i * l));
    points.push(new Point(W / 2 - i * delta_X, H / 2 + i * delta_Y));
    points.push(new Point(W / 2 - i * delta_X, H / 2 - i * (l - delta_Y)));
};

let angle = new Array(m);
let speed = new Array(m);

for (var i = 0; i<m; i++){
    speed[i] = fxrand()*0.07; //speed
};


function DrawCube(){
    for (var i = 0; i<m; i++){
        angle[i] = number*speed[i]; //speed
        light[i] += 0.07*Math.sin(angle[i]); //range
    };
    ctx.fillStyle = 'hsl('+ hue[0] +', ' + sat[0] +'%, ' + light[0] +'%)';  
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.lineTo(points[2].x, points[2].y);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'hsl('+ hue[1] +', ' + sat[1] +'%, ' + light[1] +'%)';  
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[3].x, points[3].y);
    ctx.lineTo(points[4].x, points[4].y);
    ctx.lineTo(points[5].x, points[5].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = 'hsl('+ hue[2] +', ' + sat[2] +'%, ' + light[2] +'%)';
    ctx.strokeStyle = ctx.fillStyle;  
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.lineTo(points[5].x, points[5].y);
    ctx.lineTo(points[6].x, points[6].y);
    ctx.lineTo(points[1].x, points[1].y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();



    for (var r = 0; r < n -1; r++) {
        for (var i = 1; i <= 5; i += 2){
            var col = r*3 + i/2-0.5 + 4;


            if (light[col] < 11){
                ctx.fillStyle = 'hsl('+ hue[col] +', ' + sat[col] +'%, ' + light[col] +'%)';
            } else {
                ctx.fillStyle = 'hsl('+ hue_signal[col] +', ' + sat_signal +'%, ' + light_signal +'%)';
            };
            ctx.strokeStyle = ctx.fillStyle;  

            ctx.beginPath();
            var point = r * 6 + i;
            ctx.moveTo(points[point].x, points[point].y);
            point += 1;
            ctx.lineTo(points[point].x, points[point].y);
            point += 6;
            ctx.lineTo(points[point].x, points[point].y);
            point -= 1;
            ctx.lineTo(points[point].x, points[point].y);
            if (i != 1) {
                point -= 1;    
            }  else {
                point += 5;
            };
            ctx.lineTo(points[point].x, points[point].y);
            point -= 6;
            ctx.lineTo(points[point].x, points[point].y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        };
    };
    number++;
};

//animate
function animate() {
     //ctx.clearRect(0,0,canvas.width,canvas.height);
     ctx.fillStyle = 'rgba(0,0,0,0.0007)';
     DrawCube();
     requestAnimationFrame(animate);
};
animate();

window.addEventListener('resize', function drawflower(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});