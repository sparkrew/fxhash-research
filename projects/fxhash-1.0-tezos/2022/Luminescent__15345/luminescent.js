
speed=Math.random()*.4
osc(10,-0.1,9)
.saturate( () => Math.sin(time) * 10 )
.mult(osc(Math.random()*10,0.5,1))
.diff(osc(Math.random()*20,0.5,5))
.posterize(5,1)
.kaleid(50)
.modulateKaleid(osc(Math.random()*15,0.5,0),50)
.out()
