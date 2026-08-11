let number;

let n = 12;
let maxFrame = 100000;
let c0, c1;
let palette;
let rotz = 0;
let z = -200;
let rotx = 0,roty=0;
let x = 0;
let speed = 0.2;

let zstop = 0;
let rotstop = 0;
let sat, b;
let k,kk;
let stepsize = 20;
let rotyspeed = 0;
let cnt = 0;
let rot0 = 0;
let capture;
let gg, gk;

let colmult, colmod, colcenter, backsat;
let xcenter, ycenter;
let dark=true;


let config;
let doSave = false;
let fxp = false;
let alpha=0.5;
let mScale=1;

let mWidth,mHeight;
let shouldResize = false;
let canvas;
let takeImage = true;
let visualize = false;
let showPalette = false;
let darkmult;
let rama = 0;
let ramaangle, ramasize, ramasat;

let autosave = false;
let linediv = 0;

function gmap(i, lin0, lin1, exp0, exp1) {
    return exp0 * Math.pow(exp1/exp0, i/n);
}


let sizes = [{w:1080, h:1080}, {w:2000, h:2000}, {w:4000,h:6000}]


function init() {
    if (fxrand() < 0.1)
        linediv = int(fxrand()*100);
    else
        linediv = 0;    

    darkmult = 1;
    rotz = 0;
    z = -200;
    rotx = 0;
    roty=0;
    x = 0;
    speed = 0.2;

    zstop = 0;
    rotstop = 0;
    sat, b;
    k,kk;
    stepsize = 20;
    rotyspeed = 0;
    cnt = 0;
    rot0 = 0;

    k = [];
    kk = [];
    cnt=0;
    x=0;

    ramaangle = fxrand()*360;
    ramasize = 1/(30*fxrand());
    ramasat = 150+fxrand()*45;


    number = fxrand();
    clear();
    colorMode(HSB,360,255,255,1);
    mWidth = 800;
    mHeight = 800;
    mScale =(window.innerHeight / mHeight)*3;

    let eyeZ = ((gg.height/2) / Math.tan(Math.PI/6))
    gg.perspective(Math.PI/3, gg.width/gg.height, eyeZ/10, eyeZ*10);
 

    zstop = fxrand()*mWidth/2 + mWidth/4;
    rotstop = int(fxrand()*3)*180 + 90 + fxrand()*10 - 5;


    for(let i = 0; i<2000; i++)
        if (fxrand() > 0.9)
        {
            k[i] = fxrand();
            kk.push(i);
        }
        else    
            k[i] = 0;

    sat = 100*fxrand() + 150;
    b = 200*fxrand() + 55;

    rot0 = fxrand();
    if (fxrand() < 0.5) rotyspeed = fxrand();
    
    colmult = fxrand()*120;
    colmod = int(fxrand()*100+60);
    colcenter = int(fxrand() * 360);

    xcenter = fxrand() * mWidth/4 - mWidth/8;
    ycenter = fxrand() * mHeight/4 - mHeight/8;

    rama = int(fxrand() * 3500);

    if (fxrand() < 0.2) {
        gg.background(colcenter, backsat, 30, 1);
        if (fxrand() < 1/4) 
            darkmult = fxrand()*0.2;

        dark = true;
        backsat = fxrand() * 30;
    } else {
        backsat = fxrand() * 255/5;
        gg.background(colcenter, backsat, 230, 1);
        dark = false;
    }

    let plen = int(fxrand() * 20)+3;
    palette = [];

    let b0, b1;
    let s0, s1;
    let h0, h1;


    for(let i = 0; i<100; i++) 
    {
        b0 = fxrand()*155+100;
        b1 = fxrand()*155+100;
        s0 = fxrand()*128+128;
        s1 = fxrand()*40+215;
        h0 = fxrand()*360;
        h1 = h0+fxrand()*240;

        if (fxrand() < 0.5) {
            let z = s0;
            s0 = s1;
            s1 = z;
        }
        let hd = Math.abs(h1-h0);
        let sd = Math.abs(s1-s0);
        let md = max(hd, sd);
        
        if (md > 80) break;

    }
   
    console.log(h0,h1,b0,b1, s0,s1);
    colcenter = h0;
    let a0 = 0.3, ab=0.9, aw=0.6, a1=0.8;

    if (dark) {
        aw = 0.9;
        ab = 0.6;
    }

    for(let i = 0; i<plen; i++) {
        let mmap = (a,b) => map(i, 0, plen-1, a, b);
        let pmap = (a,b) => a*Math.pow(b/a, i/(plen-1));
        let amod = 1;
        
        if (fxrand() < 1/2) amod = int(fxrand() * 5 + 2)
    
        let p;
        let r = fxrand();
        if (r < 0.1)
            p=({hue: mmap(h0, h1)%360, sat: pmap(s0, s1)/50, b: pmap(b0, b1)*0.1, a:ab});
        else if (r < 0.2)
            p =({hue: mmap(h0, h1)%360, sat: pmap(s0, s1)/50, b: pmap(b0, b1)*0.1 + 255*0.9, a:aw });
        else if (r < 0.3) {
            p = ({hue: mmap(h0, h1)%360, sat: pmap(s0, s1), b: pmap(b0, b1), a:a1 });
        } else {
            p =({hue: mmap(h0, h1)%360, sat: (pmap(s0, s1)+255)/2, b: pmap(b0, b1), a:a0 });
        }

        p.amod = amod;
        if (darkmult < 1) {
            p.a0 = p.a;
            p.a1 = p.a*3/2;
            p.a2 = p.a/2;
            p.a3 = p.a * darkmult;
        } else {
            p.a0 = p.a;
            p.a1 = p.a/2;
            p.a2 = (2+p.a)/3;
            p.a3 = (7+p.a)/8;    
        }
        if (p.sat < 0.1) p.a1 = (p.a+1)/2;
        palette.push(p);
    }

    for(let i = 0; i < plen/6; i++) {
        let p = palette[int(fxrand() * plen)];
        p.a2 = p.a1*2;
        p.a3 = 0.95;
        p.b = (255*2+p.b)/3;
        p.sat = 255/2 + p.sat/2;
    }

    config = {
        backsat,
        linediv,
        ramasat,
        ramaangle,
        ramasize,
        rama,
        darkmult,
        dark,
        xcenter,
        ycenter,
        colcenter,
        colmod,
        colmult,
        rot0,
        b,
        sat,
        rotstop,
        zstop,
        number,
        x,
        z,
        rotx,
        roty,
        rotz,
        speed,
        stepsize,
        rotyspeed

    }

}


function setup()
{
    setAttributes('depth', false);
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    
    gg = createGraphics(window.innerWidth, window.innerHeight, WEBGL); 
    gk = createGraphics(window.innerWidth, window.innerHeight);
    gg.setAttributes('depth', false);
   
  

    gg.colorMode(HSB, 360,255,255,1);
    console.log(gg.width, gg.height);
    init();
}

function windowResized()
{
    shouldResize = true;
    
    //reset();
}

function v(t,i, j, r) {
    let h = mHeight/50;
    let a = i * Math.PI/180;
   
    t.vertex(Math.cos(a) * r,  j * h, Math.sin(a) * r);
    
}

function applyFilter() {
    console.log("filter");
    image(gg, 0, 0, width, height);
    loadPixels();

    let minr=255, minb=255, ming=255;
    let maxr=0, maxb=0, maxg =0;

    for(let i = 0; i<gg.pixels.length; i+=4) {
        let r = pixels[i];
        let g = pixels[i+1];
        let b = pixels[i+2];
        if (r < minr) minr = r;
        if (r > maxr) maxr = r;
        if (g < ming) ming = g;
        if (g > maxg) maxg = g;
        if (b < minb) minb = b;
        if (b > maxb) maxb = b;
    }

    for(let i = 0; i<gg.pixels.length; i+=4) {
        pixels[i] = map(pixels[i], minr, maxr, 0, 255);
        pixels[i+1] = map(pixels[i+1], ming, maxb, 0, 255);
        pixels[i+2] = map(pixels[i+2], ming, maxb, 0, 255);
    }

    updatePixels();
    gg.image(canvas, -width/2, -height/2);
}

function draw() {
    let count;
    if (x > maxFrame) {
        if (takeImage) {
            applyFilter();

            if (autosave) {
                gg.save(fxhash+".png");
                rehash();

                init();
                
                return;
            }
            
            
            takeImage = false;

        }
        if (doSave) {
            gg.save("cylinder.png");
            doSave = false;
        }
 
        if (!fxp && isFxpreview) {
            fxpreview();
            fxp = true;
        }
    }

    

    if (visualize || cnt < 8*60) {
      count = 1;
    } else
    {
        count = 16;
    }
    if (takeImage) {
        gg.reset();
        gg.clear();
        gg.colorMode(HSB, 360, 255, 255, 1);
    
        gg.image(gk, -width/2, -height/2, width, height);
        let gl = gg._renderer.GL;
        gl.clear(gl.DEPTH_BUFFER_BIT); 
    
        for(let i = 0; i<count; i++) 
            mdraw();    
    }
    

  
    image(gg, 0, 0, width, height);
    gk.image(gg, 0, 0, width, height);   
    
    if (showPalette) {

        let pw = canvas.width / palette.length;
        let ph = canvas.height / 10;

        noStroke();
        if (dark) {
            fill(colcenter, backsat, 30, 1);
        } else
        {
            fill(colcenter, backsat, 230, 1);
        }
        rect(0, 0, canvas.width, ph );
        for(let i = 0; i<palette.length; i++) {
            let c = palette[i];
            fill(c.hue, c.sat, c.b,c.a);
            rect(i*pw, 0, pw, ph);
        }
    } 

    if (x < maxFrame) {
        textSize(canvas.height/20);
        textAlign(CENTER,BOTTOM);
        let mode = "" ;
        let pp = int(msg_perc);
        if (x > maxFrame) pp = 101;
        
        let msg = mode+msg_phase + ((pp > 0)? ": "+ pp + "%":"");
        let tw = textWidth(msg)*1.1;

        if (msg_perc >= 100) {
            msg = "";
        } 

        let msg_h = height/40;
        let msg_w = width/4;
        
        fill(180);
        rect(width/2-msg_w/2, height - msg_h, msg_w, msg_h - 4);
        fill(50);
        if (pp>0)
            rect(width/2 - msg_w / 2 + 2, height - msg_h + 2, map(pp, 0, 100, 0, msg_w - 4), msg_h - 8);
    }
}

function fillBackground(x) {
    if (dark) {
        x.background(colcenter, backsat, 30, 1);
    } else
    {
        x.background(colcenter, backsat, 230, 1);
    }
}

function mdraw() {
    let mult = 1;

    cnt++;

    gg.push();
    gg.noStroke();
   
   
    gg.scale(mScale);
    gg.translate(xcenter, ycenter, 0);
   
    if (z < zstop) { // 1
        msg_phase = "phase I ";
        msg_perc = map(z, -200, zstop, 0, 100/3);
        z+=speed;
        rotx -= rot0/1000;
        if (stepsize > 1) stepsize *= 0.995;
        alpha = 0.5;

        base_rot = rotx;
    }
    else
    {
        if (stepsize < 5) 
        {
            stepsize *= 1.003;
        }  
        if (rotx < rotstop)
        { // 2
            msg_phase = "phase II";
            msg_perc = map(rotx, base_rot, rotstop, 100/3, 200/3);

            xcenter = xcenter * 0.99;
            alpha = 0.2;
             rotx+=speed;
             if (dark) {
                if (b > 128) b = b * 0.995;
             } else {
                if (b < 190) b = b * 1.005; 
             }
        }
        else { // 3
            msg_phase = "phase III";
            msg_perc = map(x, 0, maxFrame,  200/3, 100);

            
            xcenter = (xcenter*0.99 + -config.xcenter*0.01);
            ycenter = (ycenter*0.99 + -config.ycenter*0.01);
            alpha = 0.5 ;
            x+= speed;
            speed *= 1.01;
            sat = sat * 0.999 +  255 * 0.001;
            if (sat > 255) sat = 255;
           
            if (dark) {
                if (b < 220) b = b + 0.2;
             } else {
                if (b > 80) b = b - 0.2; 
             }

            roty += rotyspeed;
            if (x > mHeight) rotx += 0.4;
        }
    }

    if (visualize || cnt < 8*60) {
        msg_phase = "Preparing drawing";
        msg_perc = -1;

        fillBackground(gg);   
    }

    gg.translate(0, 0, z);
    gg.rotateZ(roty/100);
    gg.rotateX(rotx*Math.PI/180);
    gg.rotateY((rotz++)/30);
    gg.translate(0, x, 0);


    let wx = mWidth/(n+1);
    let wy = mHeight/(n+1);

    let r = mWidth/4;

    //gg.fill(0, 255, 255);
    
    for(let i of kk)
    {
        let aa = alpha;

        if (i % 5 == 0) {
            if (cnt % 5 == 0) 
                aa *= 2;
            else
                aa = aa*0.9;
        } 
        if (i % 4 == 3) {
            if (cnt % 3 == 0) 
                aa *= 1.5;
            else
                aa /= 3;
        } 
        
        if (k[i]==0) continue;
        let pal = palette[i%palette.length];

        let pala = pal.a3;
        if (msg_perc < 100/3)
            pala = map(msg_perc, 0, 100/3, pal.a0, pal.a1);
        else if (msg_perc < 200/3)
            pala = map(msg_perc, 100/3, 200/3, pal.a1, pal.a2);
        else if (msg_perc < 300/3)
            pala = map(msg_perc, 200/3, 300/3, pal.a2, pal.a3);
        
        if (cnt % pala.moda != 0) pala /= 4;


        gg.fill(pal.hue, pal.sat, pal.b, pala);
        
        gg.beginShape();
        v(gg,i*10, i/2-180,r*k[i]);
        v(gg,i*10+10, i/2-180, r*k[i]);
        v(gg,i*10+10, i/2-180, r*k[i]-stepsize);
        v(gg,i*10, i/2-180,r*k[i]-stepsize);
    
        gg.endShape(CLOSE);
    }       

    if (visualize || cnt == rama || cnt < 5*60) {

        if (cnt == rama && !visualize) {
            gg.push();
            gg.rotate(ramaangle * Math.PI/180);
            gg.scale(ramasize);
        }

        
        for(let i = 0; i<360; i+=10)
        {
            let bb, shadow;
            shadow = Math.cos(i*Math.PI/180);

            if (darkmult < 1) {
                if (shadow < 0) bb = 0;
                else 
                    bb = 128+128*shadow;

            } else
            {
                if (shadow < 0) bb = 0;
                else 
                    bb = 200+55*shadow;
            }
            
            gg.fill(colcenter, ramasat, bb,0.7);

            gg.beginShape();
            v(gg,i, -50, r);
            v(gg,i+10, -50, r);
            v(gg,i+10, 50, r);
            v(gg,i, 50, r);
            gg.endShape(CLOSE);
        }

        if (cnt == rama && !visualize) {
            gg.pop();
        }  
    }

    
    gg.pop();
    
}

function reset() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 360, 255, 255, 1);
    gg = createGraphics(window.innerWidth, window.innerHeight, WEBGL); 
    gk = createGraphics(window.innerWidth, window.innerHeight); 
    gg.setAttributes('depth', false);
    gg.colorMode(HSB, 360,255,255,1);
    takeImage = true;
    cnt = 0;
    backsat = config.backsat;
    linediv = config.linediv;
    ramasat = config.ramasat;
    ramaangle = config.ramaangle,
    ramasize = config.ramasize,
    rama = config.rama;
    darkmult = config.darkmult;
    dark = config.dark;
    xcenter = config.xcenter;
    ycenter = config.ycenter;
    colcenter = config.colcenter;
    colmod = config.colmod;
    colmult = config.colmult;
    rot0 = config.rot0;
    b = config.b;
    sat = config.sat;
    rotstop = config.rotstop;
    zstop = config.zstop;
    number = config.number;
    x = config.x;
    z = config.z;
    rotx = config.rotx;
    roty = config.roty;
    rotz = config.rotz;
    speed = config.speed;
    stepsize = config.stepsize;
    rotyspeed = config.rotyspeed;
    alpha = 0.5;


    mScale =(window.innerHeight / mHeight)*3;
    fillBackground(canvas);
}

function keyPressed() {
    if (key == 'r') {
        reset();
    }
    if (key == '1') {
        pixelDensity(1);
        reset();
    }
    if (key == '2') {
        pixelDensity(2);
        reset();
    }
    if (key == '3') {
        pixelDensity(3);
        reset();
    }
    if (key == '4') {
        pixelDensity(4);
        reset();
    }
    if (key == 's') {
        doSave = true;
    }

    if (key == 'v') {
        visualize = !visualize;
        reset();
    }
    if (key == 'p') {
        showPalette = !showPalette;
    }
    
    
}