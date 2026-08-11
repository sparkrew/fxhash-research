A = window.innerHeight/window.innerWidth
AA = ()=> window.innerHeight/window.innerWidth
G = innerWidth/(fxrand()*(5000-3000)+3000)
R1 = Math.round(fxrand()*(5-3)+3)
R2 = fxrand()*(500-20)+20
R3 = fxrand()*(100-1)+1

R7 = fxrand()*(8-1)+1, R8 = fxrand()*(8-1)+1, R9 = fxrand()*(8-1)+1
R10 = fxrand()*(8-3)+3, R11 = fxrand()*(8-3)+3, R12 = fxrand()*(8-3)+3

AR1 = [1,-1];
NEG1 = AR1[Math.floor(Math.random() * AR1.length)]
NEG2 = AR1[Math.floor(Math.random() * AR1.length)]
NEG3 = AR1[Math.floor(Math.random() * AR1.length)]


SCRL1 = Math.round(fxrand())
if (SCRL1 == 0) {SY1 = ()=>Math.sin(time/R7*NEG1)/R10, SX1 = .3 }
else {SY1 = .3, SX1 = ()=>Math.sin(time/R7*NEG1)/R10}

SCRL2 = Math.round(fxrand())
if (SCRL2 == 0) {SY2 = ()=>Math.sin(time/R8*NEG2)/R11, SX2 = -.3}
  else {SY2 = -.3, SX2 = ()=>Math.sin(time/R8*NEG2)/R11}
  
SCRL3 = Math.round(fxrand())
  if (SCRL3 == 0) {SY3 = ()=>Math.sin(time/R9*NEG3)/R12, SX3 = 0}
    else {SY3 = 0, SX3 = ()=>Math.sin(time/R9*NEG3)/R12}
    




osc(()=>innerWidth/4,.0025).thresh().rotate(Math.PI/2)

.modulateScale(noise(R3,0).pixelate(()=>innerWidth/100,innerWidth/R2),2)
.mult(shape(4,1).scale(1,.925,.725).thresh().repeat(1,R1))

.mult(osc(10,-.01,8).kaleid(100))

.add(noise(innerWidth),.2)

.modulateScale(shape(100,.125,G).scale(1,AA,1).scrollY(SY1).scrollX(SX1),-1)
.modulateScale(shape(100,.125,G).scale(1,AA,1).scrollY(SY2).scrollX(SX2),-1)
.modulateScale(shape(100,.125,G).scale(1,AA,1).scrollY(SY3).scrollX(SX3),-1)


.out()



