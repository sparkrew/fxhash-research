// Chimps

window.onerror = function(msg, url, lineno) {
   console.log(url + '(' + lineno + '): ' + msg);
}

document.addEventListener('mousemove', (event) => {
	chimp.mouse[0] = event.clientX/chimp.container.offsetWidth;
	chimp.mouse[1] = 1-event.clientY/chimp.container.offsetHeight;
});

document.addEventListener('mousedown', (event) => {chimp.mouse[2]=1});
document.addEventListener('mouseup', (event) => {chimp.mouse[2]=0});



// ================= Utility Functions ====================
function x2(x) {return x*x;}
function x3(x) {return x*x*x;}
function x4(x) {return x*x*x*x;}
function x8(x) {return x4(x)*x4(x);}
function smoothstep(t1, t2, x) {
	x=Math.max(0, Math.min(1, (x-t1)/(t2-t1)));
	return x*x*(3-2*x);
}
function hslToRgb(hsl){
	// hsl [360,100,100] to rgb [255,255,255]
	var h = hsl[0]/360;
	var s = hsl[1]/100;
	var l = hsl[2]/100;
	
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// =======================================================
var HSL_COLORS = true;

var chimp = {};
chimp.container = document.getElementById('container');
chimp.svg = chimp.container.children[2];
chimp.mouse = [0,0,0,0];
chimp.categories = {};
chimp.bgColors = {
	spiral1:		[[0,100,100], [0,100,90],[241,55,75],[48,80,58],[169,14,85], [283,8,17]], 
	spiral2:		[[0,100,  0], [0,100,35],[255,80,20], [115,48,48],[204,22,58],[98,71,67]], 
};
chimp.colorids = {
	skin1:			[[116,5,255], [234, 36, 100], [78, 37, 100],[21,44,100], [321,50,100]], 
	skin2:			[[27,50,255], [27,10,255]], 
	cap:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	capBadge:		[[44,100,54]], 
	surgicalMask:	[[255,0,255]], 
	chickenHead:	[[255,0,255]], 
	shadesFrame:	[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	sucker:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	sexyLips:		[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	sombrerohat1:	[[117,59,255],[0,100,100]], 
	sombrerohat2:	[[0,100,100],[62,100,54]], 
	sombrerohat3:	[[62,100,54], [117,59,255]], 
	bruceSuit:		[[44,100,54]], 
	wifeB:			[[255,255,255], [24,100,67], [349,100,90], [185,28,76]], 
	bsuit:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	tie:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	gdress:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	gbracelet:		[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	poncho:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	regalFabric:	[[0,100,100],[123,55,100],[229,55,100]], 
	SuperCape:		[[0,0,255]], 
	SuperSuit:		[[0,90,100],[234, 40, 100]], 
	shirt:			[[321,76,10], [51,58,58], [35,100,92], [349,88,87]], 
	laser:			[[0,100,100],[206,100,100]], 
	milHelmet:		[[68,35,100],[46,35,100]], 
	hair:			[[0,46,255], [234, 36, 100]], 
	ribbon:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]], 
	dots:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]],
	bikini:			[[255,255,255], [255,0,0], [0,255,0], [0,0,255]]
};

chimp.showAlternate = false;
chimp.squintFactor = fxrand();
chimp.time = 0;
chimp.AnimateEyes = function() {
	chimp.time += 0.1*chimp.squintFactor;
	var t = chimp.time;
	
	var y = Math.sin(t)*Math.sin(t*3)*Math.sin(t*5);
	
	var vis = chimp.showAlternate;
	vis = y>Math.sin(t*.1);
	if(chimp.mouse[2]>0) vis = !vis;
	chimp.categories.Eyes.ShowAlternate(vis);
	chimp.showAlternate = vis;
}

function InitSVG() {
	var parts = chimp.svg.children;
	for(var i=0; i<parts.length; i++){
		var element = parts[i];
		var id = element.id;
		var idParts = id.split("_");
		
		if(idParts.length==2){ // add part
			var category = idParts[0];
			var name = idParts[1];
			
			if(chimp.categories[category]==undefined)
				chimp.categories[category] = new Category(category);
				
			chimp.categories[category].AddType(element, name, i);
		} else if(idParts.length==3) { // add alternate to existing part
			console.log("Adding alternate '"+id+"'");
			
			var category = idParts[0];
			var name = idParts[1];
			var alternate = idParts[2];
			
			if(chimp.categories[category]==undefined)
				console.log("Category '"+category+"' is undefined. Make sure you specify base types first!");
			else {
				chimp.categories[category].AddAlternate(element, name);
			}
		}	
	}
	
	// pick random colors for each color id
	// this changes chimp.colorids from a list of arrays to a list of colors
	for(key in chimp.colorids) {
		chimp.colorids[key] = chimp.colorids[key][ ~~(chimp.colorids[key].length*fxrand()) ];		 
	}
	
	var bgIndex = ~~(chimp.bgColors.spiral1.length*fxrand());
	chimp.bgCol1 = hslToRgb(chimp.bgColors.spiral1[bgIndex]);
	chimp.bgCol2 = hslToRgb(chimp.bgColors.spiral2[bgIndex]);
	
	for(cat in chimp.categories) {
		chimp.categories[cat].InitGrayscale();
		chimp.categories[cat].ShowRandom();
	}
	
	if(chimp.categories.Eyes.activeType.alternate!=undefined) {
		setInterval(chimp.AnimateEyes, 100);
	}
}

// ================ shader stuff ===================================

InitSVG();

var shaderCode = document.getElementById('fshader').textContent;
chimp.bg = new ShaderCanvas("bgCanvas", shaderCode);
chimp.bg.Run();


window.$fxhashFeatures = {
}
