c = document.getElementById('canv');
$ = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
$.fillStyle = 'hsla(0,0%,95%,1)';
$.fillRect(0,0,c.width,c.height);

function draw() {
  if (!window.t) {
    t = 0, fr = 0;
    $.translate(c.width/2, c.height / 2);
    str = [{x: 0, y: 0, a: 0, ab: 0, w: 8, p: [], l: 9.6e1*7e1}];
  }
  d = Date.now();
  t = Math.random()*d;
  fr++
  window.requestAnimationFrame(draw);
  str = str.filter(s => s.l--);
  str.forEach(s => {
    var dx = Math.cos(s.a) * s.w;
    var dy = Math.sin(s.a) * s.w;
    s.x += dx;
    s.y += dy;
    s.a += s.ab / s.w;
    s.p.splice(0, s.p.length - 3e1);
    s.p.push({x: s.x, y: s.y, dx: dx, dy: dy});
    if (fr % 3e1 == 0) {
      s.ab = fxrand() - 5e-1;
      s.ab *= 6;
    }
    if (s.w > 1 && fxrand() < s.l / 1.6834e4 - 2.6e-2) {
      str.push({x: s.x, y: s.y, a: s.a, ab: s.ab, w: s.w,
        p: [], l: Math.min * s.w | s.w * 3.2e1 * (1 + fxrand())});
    }
  });
  str.forEach(s => {
    $.strokeStyle = 'hsla(0,0%,' + (fxrand()*2e1) + '%, .03)';
    $.beginPath();
    l = s.p.length - 1;
    for(i = l; p = s.p[i]; i -= 8){
      e = i / l * 8;
      $.moveTo(p.x, p.y);
      $.lineTo(p.x - e * p.dx, p.y - e * p.dy);
    }
    $.stroke();
  });
}
draw();

/*___Not Counted Stuff___*/

/*___Lazy Reset___*/
window.addEventListener('mousedown',function(e){
  document.location.href = document.location.href;
},false);

window.addEventListener('touchstart',function(e){
  e.preventDefault();
  document.location.href = document.location.href;
},false);

/*___Resize___*/
window.addEventListener('resize',function(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}, false);