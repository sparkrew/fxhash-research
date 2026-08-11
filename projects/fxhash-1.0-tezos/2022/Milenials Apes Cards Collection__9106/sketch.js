function rnd_int(min,max){min=Math.ceil(min);max=Math.floor(max);return Math.floor(fxrand()*(max-min+1))+min}
asax=rnd_int(1,7);bananax=rnd_int(1,9);basex=rnd_int(1,8);basedesx=rnd_int(1,4);cbcx=rnd_int(1,9);
descripx=rnd_int(1,9);ffx=rnd_int(1,6);fundox=rnd_int(1,7);mmx=rnd_int(1,9);
function preload(){asa=loadImage(`img/asa (${asax}).png`);banana=loadImage(`img/banana (${bananax}).png`);base=loadImage(`img/base (${basex}).png`);basedes=loadImage(`img/basedes (${basedesx}).png`);cbc=loadImage(`img/cbc (${cbcx}).png`);descrip=loadImage(`img/descrip (${descripx}).png`);ff=loadImage(`img/ff (${ffx}).png`);fundo=loadImage(`img/fundo (${fundox}).png`);mm=loadImage(`img/mm (${mmx}).png`)}
function setup(){if(windowHeight<windowWidth){macaco=windowHeight}else{macaco=windowWidth}
createCanvas(macaco,macaco)}
function draw(){image(fundo,0,0,macaco,macaco);image(base,0,0,macaco,macaco);image(basedes,0,0,macaco,macaco);
image(banana,0,0,macaco,macaco);image(ff,0,0,macaco,macaco);image(cbc,0,0,macaco,macaco);
image(asa,0,0,macaco,macaco);image(mm,0,0,macaco,macaco);image(descrip,0,0,macaco,macaco)}