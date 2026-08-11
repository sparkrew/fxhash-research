
var color_sets = {
  "cool" : [
      "#77a9bd",
      "#285f88",
      "#b5d9ce",
      "#111b32",
      "#eeeeee",
      "#eb4034",
  ],
  "bright" : [
      "#ffbe0b",
      "#fb5607",
      "#ff006e",
      "#8338ec",
      "#3a86ff"
  ],
  "pastel" : [
      "#1a535c",
      "#4ecdc4",
      "#f7fff7",
      "#ff6b6b",
      "#ffe66d"
  ],
};

var backgrounds = {
  "cool" : "#eeeeee",
  "bright" : "#eeeeee",
  "pastel" : "#3477eb",
};

var shapes = [];
var Path = paper.Path;
var Point = paper.Point;

function circle_and_stripe(l, t, r, b) {
  var w = Math.abs(r-l);
  var h = Math.abs(b-t);
  var mwh = Math.min(w,h);
  var border = new Path.Rectangle(l, t, w, h);

  var cs = [];
  for (var i=0; i<8; i++) {
      cs.push( new Path.Circle( 
          fxrand() * w + l, 
          fxrand() * h + t, 
          mwh * fxrand() * .5) );
  }

  // rotate with something

  var unit = mwh / 12;
  for (var i=0; i<5; i++) {
      var x = fxrand() * w + l; 
      var y = fxrand() * h + t;
      var s = fxrand() * unit + unit*3;
      var u = new Path.Circle(x, y, s);

      var out = [];
      for (var j=0; j<cs.length; j++) {
          if (u.intersects(cs[j])) {
              var o = u.intersect(cs[j]);
              o.rotate( (fxrand()-0.5) * 80 );
              var v = cs[j].subtract(u);
              out.push(o);
              out.push(v);
          }
          else {
              out.push( cs[j] ); 
          }
          
      }
      cs = out;
  }

  for (var i=0; i<10; i++) {
      var y = fxrand() * h + t;
      var u = new Path.Rectangle(l, y, w, unit * 3 * (fxrand()*0.9 + 0.1));

      var out = [];
      for (var j=0; j<cs.length; j++) {
          if (u.intersects(cs[j])) {
              var o = u.intersect(cs[j]);
              //o.rotate( fxrand() * 360 );
              o.translate( (fxrand()-0.5) * unit );
              var v = cs[j].subtract(u);
              out.push(o);
              out.push(v);
          }
          else {
              out.push( cs[j] ); 
          }
          
      }
      cs = out;
  }

  var rr = fxrand() * 360;

  out = [];
  for (var i=0; i<cs.length; i++) {
      out.push( cs[i].rotate(rr, new Point(l+w/2,t+h/2)).intersect(border) );
  }
  return out;
}

function build() {
  
  fxrand = sfc32(...hashes);

  var width = paper.view.bounds.width;
  var height = paper.view.bounds.height;
  var mwh = Math.min(width, height);
  var left = width / 2 - mwh / 2;
  var top = height / 2 - mwh / 2;

  var back = new Path.Rectangle(left,top,mwh,mwh);
  back.fillColor = backgrounds[color_key];

  var k = 8;
  var uu = mwh / k;
  shapes = [];
  for (var i=0; i<10; i++) {
    var a = Math.floor(fxrand() * (k+1));
    var b = Math.floor(fxrand() * (k+1));
    var c = Math.floor(fxrand() * (k+1));
    var d = Math.floor(fxrand() * (k+1));
    shapes.push.apply(shapes,circle_and_stripe(
        left+Math.min(a,b)*uu,
        top+Math.min(c,d)*uu,
        left+Math.max(a,b)*uu,
        top+Math.max(c,d)*uu));
  }

  var colors = color_sets[color_key];
  for (var i=0; i<shapes.length; i++) {
    var c = colors[Math.floor(fxrand()*colors.length)];
    if (fxrand() < .5) {
      shapes[i].strokeColor = c;
    }
    else {
      shapes[i].strokeColor = "#000000";
      shapes[i].fillColor = c;
    }
  }

  
}


function drawCanvas() {


  var canvas = document.getElementById('myCanvas');
  canvas.width = window.innerHeight;
  canvas.height = window.innerHeight;

  paper.setup(canvas);
  paper.view.viewSize = new paper.Size(window.innerWidth, window.innerHeight);

  build();

  paper.view.update();
  paper.view.draw();
}

var prob = fxrand() * 1000;
var color_key;
if (prob < 50) {
  color_key = "pastel";
}
else if (prob < 400) {
  color_key = "bright";
}
else {
  color_key = "cool";
}

window.$fxhashFeatures = {
  "Color" : color_key
};

window.onload = drawCanvas;
window.onresize = drawCanvas;