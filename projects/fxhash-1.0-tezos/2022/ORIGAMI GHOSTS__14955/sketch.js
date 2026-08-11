A = ()=> innerHeight/innerWidth
AA = innerHeight/innerWidth


R1 = fxrand()*(.25-.15)+.15
R2 = fxrand()*(.5-.25)+.25
R3 = fxrand()*(75-10)+10
R4 = fxrand()*(1.5-.75)+.75

 AR5 = [.025,.05,.1,.25 ];
 R5 = AR5[Math.floor(fxrand() * AR5.length)]

 R6 = fxrand()*(.1)
 R7 = fxrand()*(10-2)+2

 AR8 = [1.25,2.5,5];
 R8 = AR8[Math.floor(fxrand() * AR8.length)]


 R13 = Math.round(fxrand())/2

 AR12 = [.25,.5];
 R12 = AR12[Math.floor(fxrand() * AR12.length)]

//if (R8 == 4) { R12 = AR12[Math.floor(fxrand() * AR12.length)] }
//else {R12 = 0, R13 = 0}

 AR9 = [0,.5];
 R9 = AR9[Math.floor(fxrand() * AR9.length)]

R10 = Math.round(fxrand()*(7-2)+2)

AR11 = [-.25,0,.25];
R11 = AR11[Math.floor(fxrand() * AR11.length)]

R14 = fxrand()*150 + 50
R15 = Math.min(innerWidth,innerHeight)/2





console.log('size solid',R1,R2,'osc',R3,'kaleid',R8,'scrollY',R9, 'kaleidscroll', R12, R13,'noise',R7, 'noisemask', R14, 'noisemaskpixelate', R10
)



src(o0)


  
  .layer(shape(4,[R1,R1,R2,R2].ease('easeInOutQuint'),0).color(1,.5,.7).hue(R11)

  .layer(
shape(2,.25,0).luma()
.mult(osc(R3,.05,7).hue(-.05).brightness(-.25))
     ).luma(.1,.5)


)

.scale(1.5,R4)



.rotate(R5)
.rotate([0,0,0,.25,.25,.25].ease('easeInOutQuart'))
.scrollY(R6)

.modulateScale(noise(R7,.1).mult(noise(R14,.1).thresh(.5).pixelate(R10,R10).luma()),1.2)



.out()






solid(0,0,0)

.layer(src(o0)
.scroll(R12) //R12
.kaleid(R8) //R8
.rotate(Math.PI/2)
.scrollX(R13)  //.5
.scrollY(R9) //R9




.saturate(1.5)
.add(noise(R15,0),.125)

.layer(solid(1,1,1).mult(shape(4,.95,0).invert().luma()))

.scale(1,A))

.out(o1)



render(o1)



setResolution(innerWidth*2,innerHeight*2)