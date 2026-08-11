
var canvas = document.getElementById("canvas");
var text = document.getElementById("text1");
var ctx = canvas.getContext("2d");
//ctx.globalCompositeOperation="source-over";

canvas.width= document.body.clientWidth;
canvas.height= document.body.clientHeight;
var particleArray=[];
 var imageObj = new Image();
   imageObj.src = 'smoke.png';
var gravity=0.98;
var blur=100;

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function( callback ){
          window.setTimeout(callback, 1000 / 60);
          };
})();

update();
function update(){
  requestAnimFrame(update);
  move();   
}

function move (){
 trail(0.80);
  var particle = {x: canvas.width/2-200,y:400,
                  xSpeed:randomRange(-20,20),
                  ySpeed:randomRange(-20,-5),
                  size:200,
                  h: 10,alpha:1,
                  s:randomRange(0,255),
                  l:randomRange(0,255) };
  particleArray.push(particle);
 //ctx.clearRect(0,0,1000,300);   
    ctx.shadowBlur=1;
    ctx.shadowColor='hsla(' + particle.h + ', 50%, 90%,' + particle.alpha +')'; 
  
  for (var i=0;i<particleArray.length;i++){
    
    particle= particleArray[i];   
    
   ctx.drawImage(imageObj, particle.x, particle.y,particle.size,particle.size); 

     ctx.fillStyle='hsla(' + particle.h + ', 100%, 50%,' + particle.alpha +')';
   
    
    particle.x+=particle.xSpeed;
    particle.y+=particle.ySpeed/gravity;
    particle.size*=1.0314;
    particle.ySpeed*=0.96*gravity;
    particle.xSpeed;
    particle.h+=5;
    particle.alpha*=0.96;
   
    if (particleArray.length>60){
      particleArray.shift();
    }
  }  
 text.innerHTML=document.body.clientWidth;//particleArray.length;     
 
 
}

function randomRange (min, max) {
    return Math.random() * (max - min) + min;
}

function trail(tail){
ctx.shadowBlur=0;
ctx.fillStyle="rgba(00,00,10,"+tail+")";
ctx.fillRect(0,0,canvas.width,canvas.height);
}