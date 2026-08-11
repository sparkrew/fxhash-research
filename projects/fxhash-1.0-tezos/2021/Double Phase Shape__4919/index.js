function rnd_btw(min, max) {return fxrand() * (max - min) + min;}
function rnd_btwexp(min, max) {return fxrand()**2 * (max - min) + min;}
function rnd_int(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(fxrand() * (max - min + 1)) + min;}

//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b


a= rnd_int(10, 100)
b= fxrand(0.2, 1)
c= rnd_int(3, 5)
d= rnd_int(1, 3)
e= rnd_int(0,10)
f=rnd_btw(0, 2.3)
g=rnd_btw(0,2)
h=rnd_btw(0.01,0.06)
i=rnd_btw(0,0.3)
j=rnd_int(0,1)
k=rnd_btw(0,0.1)
l=rnd_int(0,2)
m=rnd_int(0,2)
n=rnd_int(0,2)
o= rnd_int(10, 100)
p= rnd_int(10, 100)
q=rnd_btw(0.1,2)
r=rnd_btw(0.1,2)
s=rnd_btwexp(0,5)
t=rnd_btw(0, 0.6)
u=rnd_int(119000, 120000)
v=rnd_int(0, 7)



voronoi(rnd_int(1,2),0,rnd_int(3,5))
  .color(l,m,n)
              
.mult (voronoi(0,0))


.diff (shape( () => {
  if( u > 119750 ){
      return 100;
  } else {
      return c;
  }
},
0.2, 0).color(g,q,r).brightness(    () => {
        if( mouse.x > 550 ){
            return -0.7;
        } else {
            return 0;
        }
    },
    1)   

//.modulatePixelate(noise(a,o),u)
)  


.add (shape(2,0.04,t).color(m,n,l).modulate (osc(rnd_int(1,10),0,1).saturate( ({time}) => Math.cos(time) * e )).repeatY(() => {
  if (u>119750) {
    return 0; 
   
    
  } else {
    return e;
    
  }},1
  

)) 



  .out()     
