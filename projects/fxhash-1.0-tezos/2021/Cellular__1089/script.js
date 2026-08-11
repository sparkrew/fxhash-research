


var particles_a = [];
var particles_b = [];
var angle_scale = -.25;
var points = [];
var clr, pX, nums, grid_resolution, sqr;
var x_grid_step;
var y_grid_step;
var cnt;
var clrs;
var colors;


function setup(){
	
    createCanvas(windowWidth, windowHeight, P2D);
	
	background(0);
	//colorMode(HSB, 255);
	windowResized();
    
}

function to_idx(x_idx, y_idx) {
	return x_idx + y_idx * grid_resolution; 
  }

  let nrIts = 0;
let maxNrIts = 1000;
let doFill = false;
let divideBy = 1000;


function getFill(value) {
    let retVal = "No Fill";
    if(value > 1.0)
    {
        doFill = true;
        retVal = "Fill";
    }
    return retVal;
}

function getColor(value)
{
	var n = "";
	if (value < 0.2)
	{
		colors = "5ed928-fae43f-ffce0f-42ae3b-61e3ff".split("-").map(a=> "#"+a);
		n = "Brazil";
	} else if (value < 0.4)
	{
		colors = "8fb83e-005b89-28b8c8-6b2f85-b03e8d".split("-").map(a=> "#"+a);
	} else if (value < 0.6)
	{
		colors = "590033-7a0028-cc200c-e8fb4b-8cfb4b".split("-").map(a=> "#"+a);
		n = "Autumn";
	} else if (value < 0.8)
	{
		colors = "337171-6b8370-a6986f-d2ae75-f7c178".split("-").map(a=> "#"+a);
		n = "WinterSun";
	} else if (value < 1.1)
	{
		colors = "d20076-ff0076-ff6b58-ff4373-ff005a".split("-").map(a=> "#"+a);
		n = "Peachy";
	} 
	return n;
}

function getCells(number)
{
    let n = 1;
    if(number < 0.3)
    {
        grid_resolution = 4;
    }
    else if(number < 0.6)
    {
        grid_resolution = 5;
    }
    else 
    {
        grid_resolution = 6;
    }
    n = grid_resolution * grid_resolution;
    return n;
}

function getIntensity(number)
{
    let n = "Normal";
    if(number < 0.2)
    {
        n = 'Bright';
        divideBy = 900;
    }
    else if (number < 0.4)
    {
        n = 'Dark';
        divideBy = 1100;
    }
    else 
    {
        divideBy = 1000;
    }

    return n;
}


window.$fxhashFeatures = {
	"Color": getColor(fxrand()),
	"Cells": getCells(fxrand()),
	"Intensity" : getIntensity(fxrand())
  }


function windowResized()
{

    resizeCanvas(windowWidth, windowHeight, P2D);
    background(0);
    cnt = 0;
    clrs = [];
    for(let ci=0;ci< grid_resolution * grid_resolution / colors.length; ci++)
    {
        for(let cj=0;cj<colors.length;cj++)
            clrs.push(colors[parseInt(random(0,colors.length-1))]);
    }

    x_grid_step = width / grid_resolution;
    y_grid_step = height / grid_resolution;
    maxNrIts = Math.floor(width * height  / divideBy);
    let pidx = 0;
    for(var i = 0; i < grid_resolution; i++){
        for(var j = 0; j < grid_resolution; j++){
          var idx = to_idx(i, j);
          points[idx] = [x_grid_step * (i + random(0, 1)), y_grid_step * (j + random(0, 1)), pidx];
          pidx ++;
        }
    }
}

function draw()
{
    
	smooth();    
    blendMode(ADD);
    if(nrIts == maxNrIts)
    {
        //filter(BLUR, 2);
    }
    if(nrIts > maxNrIts)
    {
        return;
    }
    
    if(!doFill)
    {
        noFill();
    }

    nrIts++;
    for(let ci=0;ci<200;ci++)
    {
        let rx = random(0, width);
        let ry = random(0, height);
        let clidx = getClosestPoint(rx,ry);        
        let clr = color(clrs[clidx[0]]);
        let radius = 15;
        if(clidx[1] < 0.05)
        {
            clr.setAlpha(140);
            radius = 3;
        }
        else
        {
            clr.setAlpha(10 - clidx[1] * 10);
            radius = 10 + fxrand() * 10;
        }
        //clr.setAlpha(clidx[1] * 20);
        if(doFill)
        {
            fill(clr);
        }
        else
        {
            stroke(clr);
            strokeWeight(3);
        }
        
        //fill(clr);
        //ellipse(rx,ry,radius,radius);
        arc(rx,ry,radius,radius, fxrand() * Math.PI * 2,fxrand() * Math.PI * 2);
    }
}

function getClosestPoint(x, y) {
    let minDist = 10000000;
    let minClosestDist = 10000000;
    let closestIdx = -1;
    let refClosIdx = -1;
    for(let pidx in points)
    {   
        var dToPt = dist(points[pidx][0], points[pidx][1], x , y);
        if(dToPt < minDist)
        {
            minClosestDist = minDist;
            minDist = dToPt;
            closestIdx = parseInt(points[pidx][2]);
            refClosIdx = parseInt(pidx);
        }
    }
    if(minClosestDist == 10000000)
    {
        minClosestDist = dist(points[refClosIdx][0], points[refClosIdx][1], points[refClosIdx + 1][0], points[refClosIdx + 1][1]);
    }
    let distFact = Math.abs((minClosestDist - minDist) / max(minClosestDist, minDist));
    return [closestIdx, distFact];
}


function generateColor (s) {
    let c = HSVtoRGB(s, 0.8, 0.9);
    c.r *= 255;
    c.g *= 255;
    c.b *= 255;
    return c;
}

function HSVtoRGB (h, s, v) {
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return {
        r,
        g,
        b
    };
}

