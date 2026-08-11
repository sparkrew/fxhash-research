class Type {
	constructor(element, name, order) {
		this.base = element;
		this.element = element;
		this.name = name;
		this.order = order;
	}
	
	AddAlternate(element, name) {
		// don't use name for now
		this.alternate = element;
		this.alternate.style.display = 'none';
	}	
	
	RandomColor(element, col) {
		if(element==undefined) { // if called without argument
			if(this.alternate!=undefined)
				this.RandomColor(this.alternate, col); // make sure alternate gets updated too
			
			element = this.element;
		}
		
		//if(col==undefined) col = [1,1,1];
		
		var msg = "";
		var id = element.id;
		var parts = id.split("-");
		
		// if it has a color id, update drawing color
		if(parts.length==2) {
			var key = parts[0];
			if(chimp.colorids[key] != undefined) {
				col = chimp.colorids[key].slice(0);
				//col[0] /= 255; col[1] /= 255; col[2] /= 255;
			}
		}
		
		// if the element has a fill property, then fill with updated color
		var style = element.style;
		var fill = style.fill;
		if(col!=undefined && fill!="") {
			var gray = style.gray.split(",");
			
			if(HSL_COLORS) {
				var g = 100*gray[2]/255;
				style.fill = "hsl("+col[0]+","+col[1]+"%,"+g+"%)";
			} else {
				var r = col[0]*parseFloat(gray[0]);
				var g = col[1]*parseFloat(gray[1]);
				var b = col[2]*parseFloat(gray[2]);
			
				style.fill = "rgb("+r+","+g+","+b+")";
			}
		}
		
		for(var i=0; i<element.children.length; i++) {
			this.RandomColor(element.children[i], col);
		}
	}
	
	Show(visible) {
		this.element.style.display = visible ? 'block' : 'none';			
	}
	
	ShowAlternate(visible) {
		if(this.alternate==undefined) return;
		
		if(visible) {
			this.element = this.alternate;
			this.element.style.display = visible ? 'block' : 'none';
			this.base.style.display = !visible ? 'block' : 'none';
		} else {
			this.element = this.base;
			this.element.style.display = !visible ? 'block' : 'none';
			this.alternate.style.display = visible ? 'block' : 'none';
		}
	}
}

class Category {
	constructor(name) {
		this.name = name;
		this.types = [];
		this.activeType = {};
	}
	
	AddAlternate(element, name) {
		var altAdded = false;
		for(var i=0; i<this.types.length; i++) {
			var type = this.types[i];
			
			if(type.name==name) {
				type.AddAlternate(element, name);
				altAdded = true;
				break;
			}	
		}
		if(!altAdded)
			console.log("Coudn't add alternate '"+id+"' because basetype could not be found. Be sure to specify base types first!");
	}
	
	AddType(element, name, order) {
		var type = new Type(element, name, order);
		this.types.push(type);
	}
	
	ShowAlternate(visible) {
		this.activeType.ShowAlternate(visible);
	}
	
	InitGrayscale() {
		// saves initial grayscale values
		
		function saveGray(element) {
			var id = element.id;
			
			for(var i=0; i<element.children.length; i++) {
				saveGray(element.children[i]);
			}
			
			var gray = element.style.fill.slice(4,-1);
			gray = gray.replace(/\s/g, '');
			
			element.style.gray = gray;
		}
		
		for(var i=0; i<this.types.length; i++) {
			saveGray(this.types[i].element);
			if(this.types[i].alternate!=undefined)
				saveGray(this.types[i].alternate);
		}
	}

	ShowRandom() {
		// shows a random part based on fxrand()
		var index = ~~(fxrand()*this.types.length);
		this.activeType = this.types[index];
		this.activeType.RandomColor();
		
		for(var i=0; i<this.types.length; i++) {
			this.types[i].Show(i==index);
		}
	}	
}