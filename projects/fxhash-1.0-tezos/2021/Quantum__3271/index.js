console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.fxrand()  ["f4f1de","e07a5f","3d405b","81b29a","f2cc8f"]

A = ()=> window.innerHeight/window.innerWidth

noise(22*fxrand(),.05)
.mult( osc(19*fxrand(),0, ()=>Math.sin(time/.5)+2 ) )
.mult(
    noise(13*fxrand(),.03).brightness(1.2).contrast(2)
    .mult( osc(19,0, ()=>Math.sin(time/3)+13 ) )
)

.scale( ()=>Math.sin(time/6.2)*.12+.15 )
.modulateScale(
    osc(1*fxrand(),0,0).mult( osc(2*fxrand(),0,0).rotate(3.14/2*fxrand()) )
    .rotate( ()=>time/25 ).scale(.39).scale(1,.6,1).invert()
    , ()=>Math.sin(time/5.3)*1.5+3  )
.rotate( ()=>time/22 )
//.mult( shape(100,.9,.01).scale(1,.6,1) )
.out()



