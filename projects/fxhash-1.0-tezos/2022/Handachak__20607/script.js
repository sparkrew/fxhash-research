var palette1 = [];
var palette2 = ["#000000","#000000","#000000","#000000",
                "#000000","#000000","#000000","#000000",
                "#eed6b0","#eed6b0",]
var palette3 = ["#d0b0a5", "#fdf2cf","#eed6b0","#eed6b0","#eed6b0","#a8875a"];
var palette4 = [
              "#000000","#000000","#000000","#000000",
                "#000000","#000000","#000000","#000000",
   "#000000","#000000","#000000","#000000",
         ];
         var doonrect = [
"#404040",
 "#1c67a0",
  "#418d81",
  "#d99300",
  "#b16950",
  "#fdf2cf",
   "#de9c9e",
   "#a8875a",
   ];
var st = 1500
function setup() {
w=4000
  createCanvas(w, w);
  Math.random = fxrand;
  randomSeed(fxrand() * 999999);
  noiseSeed(fxrand() * 999999);
  
  var redch = floor(random(1,2.99))
  if(redch==1){doonrect.push("#c65b57")}
  
  let maxthisc = random(random(5,10), random(15,random(25,30)));
  let numcolor2 = floor(random(random(1,3), maxthisc));
  for (let i = 0; i < numcolor2; i++) {
    var colorvari = floor(random(0, doonrect.length));
    palette1.push(doonrect[colorvari]);
   palette2.push(doonrect[colorvari]);
    palette4.push(doonrect[colorvari]);}
  var cp4 = random(random(random(1,4),16),random(16,random(32,40)))
  for(i=0;i<cp4;i++){
palette4.push("#eed6b0");}
   var cp1 = random(random(0,3),random(3,random(5,random(6,8))))
  for(i=1;i<cp1;i++){
palette1.push("#eed6b0");}
noLoop()}
function draw() {
  background("#eed6b0");
var z1 = w*(3/16)
geo(z1)
var z2 = (w + 4*z1)/6
geo(z2)
var z3 = (w + 4*z2)/6
geo(z3)
var z4 = (w + 4*z3)/6
geo(z4)
var z5 = (w + 4*z4)/6
geo(z5)
pood()
noLoop()}
function geo(x){
var k = w - 2*x
var y = x
var dis = w/20
var kkmax = random(1.25,random(1.15,random(1.5,random(1.5,2))))
var kkmin = random(random(2,5),random(10,15)) 
var p1= random(k/kkmin,k/kkmax)
var h1= k/5
var x1= random(x + dis,w-x-p1-dis)
var y1 = y - h1/2
  var p3 = random(k/kkmin,k/kkmax)
var h3 =  k/5
var x3 = random(x + dis,w-x-p3-dis)
var y3 = w- y - h3/2
   var p2 = k/5
var h2 =  random(k/kkmin,k/kkmax)
var x2 =  w- x - p2/2
var y2 = random(y + dis,w-y-h2-dis)
   var p4 = k/5
var h4 =  random(k/kkmin,k/kkmax)
var x4 = x - p4/2
var y4 = random(y + dis,w-y-h4-dis)
var  minkh = 10
var maxkh = random(random(10,20),random(30,random(50,100)));
var f1 = x - (k/10)
var pp = w - 2*f1
fill(palette1[floor(random(0, palette1.length))])
  stroke(0)
  strokeWeight(w/st)
rect(f1 , f1,pp,pp)
fill(palette1[floor(random(0, palette1.length))])
noStroke()
rect(x,x,k,k)
var d11 = floor(w/random(minkh,maxkh))
var seg11 = floor(p1/d11)
d11 = p1/seg11
var i = 1
var j = 1
var c11 = floor(random(1,2.9999))
if(c11 ==1 ){bb1(x1,y1,p1,h1/2)} 
if(c11 ==2 ){ 
  hv1(x1,y1,p1,h1/2,d11,seg11)
 stroke(0)
  strokeWeight(w/st)
  for( i =1 ; i<seg11 ; i++){
line(x1 + d11*i , y1,x1 + d11*i,y)}}
  var d12 = floor(w/random(minkh,maxkh))
var seg12 = floor(p1/d12)
d12 = p1/seg12
var c12 = floor(random(1,2.9999))
if(c12==1){bb1(x1,y,p1,h1/2)}
if(c12==2){
    hv1(x1,y,p1,h1/2,d12,seg12)
  stroke(0)
  strokeWeight(w/st)
  for( i =1 ; i<seg12 ; i++){
line(x1 + d12*i , y,x1 + d12*i,y+h1/2)}}
  var d21 = floor(w/random(minkh,maxkh))
var seg21 = floor(h2/d21)
d21 = h2/seg21
var c21 = floor(random(1,2.9999))
if(c21==1){bb2(x2,y2,p2/2,h2)}
if(c21==2){
      hv2(x2,y2,p2/2,h2,d21,seg21)
  stroke(0) 
  strokeWeight(w/st)
  for(i=1 ; i<seg21 ; i++){
line(x2, y2 + d21*i ,w-x, y2 + d21*i)}}  
  var d22 = floor(w/random(minkh,maxkh))
var seg22 = floor(h2/d22)
d22 = h2/seg22
var c22 = floor(random(1,2.9999))
  if(c22==1){bb2(w-x,y2,p2/2,h2)}
if(c22==2){
        hv2(w-x,y2,p2/2,h2,d22,seg22)
  stroke(0)
  strokeWeight(w/st)
  for(i=1 ; i<seg22 ; i++){
line(w-x, y2 + d22*i ,w-x+p2/2, y2 + d22*i)}}  
   var d31 = floor(w/random(minkh,maxkh))
var seg31 = floor(p3/d31)
d31 = p3/seg31
var c31 = floor(random(1,2.9999))
  if(c31==1){bb1(x3,y3,p3,h3/2)}  
  if(c31==2){
            hv1(x3,y3,p3,h3/2,d31,seg31)
stroke(0)
    strokeWeight(w/st)
    for( i =1 ; i<seg31 ; i++){
line(x3 + d31*i , y3,x3 + d31*i,w-y)}}  
var d32 = floor(w/random(minkh,maxkh))
var seg32 = floor(p3/d32)
d32 = p3/seg32
  var c32 = floor(random(1,2.9999))
    if(c32==1){bb1(x3,w-y,p3,h3/2)} 
if(c32==2){
    hv1(x3,w-y,p3,h3/2,d32,seg32)
stroke(0)
  strokeWeight(w/st)
  for( i =1 ; i<seg32 ; i++){
line(x3 + d32*i , w-y,x3 + d32*i,w-y + h3/2)}}  
  var d41 = floor(w/random(minkh,maxkh))
var seg41 = floor(h4/d41)
d41 = h4/seg41
    var c41 = floor(random(1,2.9999))
    if(c41==1){bb2(x4,y4,p4/2,h4)}
    if(c41==2){
      hv2(x4,y4,p4/2,h4,d41,seg41)
stroke(0)
      strokeWeight(w/st)
      for(i=1 ; i<seg41 ; i++){
line(x4, y4 + d41*i ,x, y4 + d41*i)}}  
 var d42 = floor(w/random(minkh,maxkh))
var seg42 = floor(h4/d42)
d42 = h4/seg42
   var c42 = floor(random(1,2.9999))
       if(c42==1){bb2(x,y4,p4/2,h4)} 
 if(c42==2){
     hv2(x,y4,p4/2,h4,d42,seg42)
stroke(0)
   strokeWeight(w/st)
   for(i=1 ; i<seg42 ; i++){
line(x, y4 + d42*i ,x+p4/2, y4 + d42*i)}}  
noFill()
stroke(0)
strokeWeight(w/st)
    rect(x1,y1,p1,h1)
  rect(x2,y2,p2,h2)    
rect(x3,y3,p3,h3)    
rect(x4,y4,p4,h4)    
  strokeWeight(w/st)
  rect(x,y,k) }
function bb1(x,y,p,h){
var ss1 = random(10,random(30,100))
var d1 = floor(w/ss1)
var seg1 = floor(p/d1)
  d1 = p/seg1
for(var o = 0 ; o<seg1 ; o++){
fill(palette1[floor(random(0, palette1.length))])
noStroke()
rect(x+d1*o , y, d1 , h)  
  stroke(0)
  strokeWeight(w/st) 
var od = w/random(random(50,150),random(200,250))
var sgod = floor(h/od)
od = h/sgod
  var cod = floor(random(1,random(2.5,5)))
    if(cod==1){for(var io=0; io<sgod ; io++){
   line(x+d1*o,y+od*io,x+d1*(o+1),y+od*io)}} }  
strokeWeight(w/st)  
for( o = 1 ; o<seg1 ; o++){
line(x+d1*o , y, x + d1*o , y+h)}
noLoop()}
function bb2(x,y,p,h){
var ss2 = random(10,random(30,100))
 var  d2 = floor(w/ss2)
var seg2 = floor(h/d2)
  d2 = h/seg2
for(var v = 0 ; v<seg2 ; v++){
fill(palette1[floor(random(0, palette1.length))])
noStroke()
rect(x , y+d2*v, p , d2)
 stroke(0)
  strokeWeight(w/st) 
var vd = w/random(random(50,150),random(200,250))
var sgov = floor(p/vd)
vd = p/sgov
  var cov = floor(random(1,random(2.5,5)))
    if(cov==1){for(var iv=0; iv<sgov ; iv++){
   line(x+vd*iv,y+d2*v,x+vd*iv,y+d2*(v+1))}}}
  stroke(0)
strokeWeight(w/st)  
  for( v = 1 ; v<seg2 ; v++){
line(x , y + d2*v, x+p ,y + d2*v )}
noLoop()}
function hv1(x,y,p,h,d,s){
var i = 0
var j = 1
var cs1
var ccs1
  for(i =0 ; i<s ; i++){
var dh = w/random(random(10,50),random(100,200))
var sgh = floor(h/dh)
dh = h/sgh 
  for(j =0 ; j<sgh ; j++){
         ccs1 = floor(random(1,2.9999))
 noStroke()
   fill(palette1[floor(random(0, palette1.length))])
    if(ccs1==2) {cs1 = 1}
    if(ccs1==1) {cs1 = floor(random(1,random(2,random(3,random(5,10)))))}
    if(cs1==1){ rect(x+d*i,y+dh*j,d,dh)}}
    stroke(palette4[floor(random(0, palette4.length))])
    strokeWeight(w/st)  
  for(j =1 ; j<sgh ; j++){
  line(x + d*i , y+dh*j,x+d*(i+1),y+dh*j)}}noLoop()} 
function hv2(x,y,p,h,d,s){var ii = 0
var jj = 1
var cs2;
var ccs2;
for(ii =0 ; ii<s ; ii++){ var dv = w/random(random(10,50),random(100,200))
var sgv = floor(p/dv)
dv = p/sgv
   for(jj =0 ; jj<sgv ; jj++){ccs2 = floor(random(1,2.999))  
 noStroke()
   fill(palette1[floor(random(0, palette1.length))])
    if(ccs2==2){ cs2 = 1}
     if(ccs2==1) { cs2 = floor(random(1,random(2,random(3,random(5,10)))))}   
    if(cs2==1){rect(x+dv*jj,y+d*ii,dv,d)}}
  stroke(palette4[floor(random(0, palette4.length))])
  strokeWeight(w/st)  
for(jj =1 ; jj<sgv ; jj++){
  line(x+dv*jj,y+d*ii,x+dv*jj,y+d*(ii+1))}}noLoop()}  
  function pood() {var numi = 12*1000*sqrt(w);
 var xp;
  var yp; 
strokeWeight(sqrt(w)/50)
  for (var i = 0; i < numi; i++) {stroke(palette3[floor(random(0, palette3.length))])
    xp = random(width);
    yp = random(height);
  point(xp,yp)}
  noLoop();}
