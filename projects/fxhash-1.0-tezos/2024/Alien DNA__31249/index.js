function rnd_btw(min, max) { return $fx.rand() * (max - min) + min; }
function rnd_btwexp(min, max) { return $fx.rand() ** 2 * (max - min) + min; }
function rnd_int(min, max) { min = Math.ceil(min); max = Math.floor(max); return Math.floor($fx.rand() * (max - min + 1)) + min; }

v1=rnd_btw(1,3)
v2=rnd_btw(1,3)
v3=rnd_btw(1,3)
v4=rnd_btw(-1,1)
v5=rnd_btw(0.1,0.2)
v6=rnd_btw(0.4,0.65)
v7=rnd_int(40,60)
v8=rnd_btw(0.1,3)
v9=rnd_btw(0.1,3)
v10=rnd_btw(0.1,3)
v11=rnd_btw(-0.5,-0.1)



speed=0.25

noise(v1,0.005)
.pixelate(5,5)
.scrollX(-0.01,-0.01)
.contrast(v8)

.diff(
  noise(v2,0.005)
  .pixelate(10,10)
  .scrollX(0.01,0.01)
  .color(1.25,0,0)
  .contrast(v9)
)

.add(
  noise(v3,0.005)
  .pixelate(20,20)
  .scrollX(-0.007,-0.007)
  .color(0,0,1)
  .contrast(v10)
)

.modulate(noise(v5,-0.00333))
.pixelate(v7,v7)
.colorama(()=>Math.sin(time/333)+v4)
.scale(3)
.diff(src(o0).scale(v6))
.colorama(v11)

.out()



document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.key === 's' || event.key === 'S') {
            screencap();
        }
    });
});

setTimeout(function() {
    $fx.preview();
  }, 10000);

$fx.features({
    Palindrome: str,
    StringConfig: strCfg,
    DistortionConfig: dstCfg,
    TextBaseColor: baseColor,
    Font: fontType,
    RGB: `(${colora},${colorb},${colorc})`,
});