/*
const capturer = new CCapture({
    framerate: 5,
    format: "png",
    name: "video_color",
    quality: 100,
    verbose: true,
});
*/

var canvas;
var palette = {
    "citrus" : [
      [21, 96, 100], [0, 196, 154], [248, 225, 108], [255, 194, 180], [251, 143, 103]
    ]
}
  
var limit;
  
function setup() {
    var mwh = min(window.innerWidth, window.innerHeight);
    canvas = createCanvas(mwh, mwh);

    var limfac = getWeightedOption([[18,45],[9,50],[36,5]]);
    //var limfac = getWeightedOption([[18,50],[9,50],[36,50]]);
    limit = width/limfac;

    var style = "large";
    if (limfac == 18) {
        style = "medium";
    }
    if (limfac == 36) {
        style = "small";
    }

    window.$fxhashFeatures = {
        "Size" : style
    };
}
  
function draw() {
    
    // Redraw the background each frame
    background(240);

    margin = width/18;
    split_rect(margin,margin,width-2*margin,height-2*margin);
    
    /*
    if (frameCount === 1) capturer.start();
    capturer.capture(canvas.canvas);
    if (frameCount === 30) {
        noLoop();
        capturer.stop();
        capturer.save();
    }
    */
    
    noLoop();
}
  
function split_rect(x,y,w,h) {
    if ((w < limit) || (h < limit)) {
        drawn_rect(x,y,w,h,4,width/1800);
        return;
    }
    var s = fxrand()*0.5 + 0.25;
    if (fxrand() < 0.5) {
        split_rect(x,y,s*w,h);
        split_rect(x+s*w,y,(1-s)*w,h);
    }
    else {
        split_rect(x,y,w,s*h);
        split_rect(x,y+s*h,w,(1-s)*h);
    }
  }
  
function drawn_line(x1,y1, x2,y2, n, amount) {
    var angle = atan2(y2-y1, x2-x1) + 0.5*PI;
    beginShape();
    noFill();
    curveVertex(x1,y1);
    for (let i = 0; i < n+1; i++) {
        var w = i/n;
        var xp = w*x2 + (1.-w)*x1;
        var yp = w*y2 + (1.-w)*y1;
        var mag = (fxrand()-0.5) * 2 * amount;
        curveVertex(xp + cos(angle)*mag, yp + sin(angle)*mag); 
    }
    curveVertex(x2,y2);
    endShape();
}
  
function drawn_rect(x,y,w,h, n, a) {
    var colorKey = "citrus";
    var color = palette[colorKey][randint(0,palette[colorKey].length)];
    stroke(...color,220);
    drawn_line(x,y,x+w,y, n, a);
    drawn_line(x+w,y,x+w,y+h, n, a);
    drawn_line(x+w,y+h,x,y+h, n, a);
    drawn_line(x,y+h,x,y, n, a);

    var k = randint(5,100);
    if (w>h) {
        for (var i=0; i<k; i++) {
            drawn_line(x+(i/k)*w, y, x+(i/k)*w, y+h, n, a);
        }
    }
    else {
        for (var i=0; i<k; i++) {
            drawn_line(x, y+(i/k)*h, x+w, y+(i/k)*h, n, a);
        }
    }
}

const pick = (arr) => arr[(fxrand() * arr.length) | 0];
function getWeightedOption(options) {
    let choices = [];
    for (let i in options)
        choices = choices.concat(new Array(options[i][1]).fill(options[i][0]));
    return pick(choices);
};

function randint(min,max) {
    return Math.floor(min + ((max-0.00001) - min) * fxrand());
}