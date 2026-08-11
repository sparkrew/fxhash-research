/*

 For the Boirds
 Generative art by thermo (tz1Qjz5VggR1C6ShiarAYVmEoSoVqLva78Km)

 https://twitter.com/MUTANtz_023
 https://www.fxhash.xyz/u/thermo
 https://objkt.com/profile/tz1Qjz5VggR1C6ShiarAYVmEoSoVqLva78Km/

*/

class palettes
{

	constructor()
	{
		this.palettes = [];

		let paletteLineArt =
			{
				name: "Line Art",
				palettes: [
					{ fillR:255,fillG:255,fillB: 255,lineR: 0,lineG: 0,lineB: 0, parent: "Line Art" }
					],
				background: [{R:255,G:255,B:255}]
			}

		this.palettes.push(paletteLineArt);

		let paletteLineArtDark =
			{
				name: "Line Art Dark",
				palettes: [
					{ fillR:0,fillG:0,fillB: 0,lineR: 255,lineG: 255,lineB: 255, parent: "Line Art Dark" }
					],
				background: [{R:0,G:0,B:0}]
			};

		this.palettes.push(paletteLineArtDark);

		let numColours = Math.floor(3.0 + fxrand()*10);

		let bgcolour = this.getRandomColor();
		let specdimmer = fxrand();
		//let specAmount = 255 - getMaxRGBValue(bgcolour);

		let paletteSpec = {
			name: "Spectrum",
			palettes: [],
			//background: [{R:bgcolour.r + specdimmer*64,G:bgcolour.g + specdimmer*64,B:bgcolour.b + specdimmer*64}]
			background: [{R:bgcolour.r + specdimmer/2.0,G:bgcolour.g + specdimmer/2.0,B:bgcolour.b + specdimmer/2.0}]
		};

		for (let i = 0; i < numColours; i++)
		{
			let newColour = this.getRandomColor();
			paletteSpec.palettes.push({fillR:newColour.r,fillG:newColour.g,fillB:newColour.b,lineR:0,lineG:0,lineB:0,parent:"Spectrum"});
		}

		this.palettes.push(paletteSpec);


		// True Colours Palette
		let numTrueColours = 100;
		let tempColour = this.getRandomColor();
		let dimmer = 1; //fxrand();

		let paletteTrueColours = {
			name: "True Colours",
			palettes: [],
			background: [{R:tempColour.r,G:tempColour.g,B:tempColour.b}]
		};

		for (let i = 0; i < numTrueColours; i++)
		{
			let newTrueColourFill = this.getRandomColor();
			let newTrueColourLine = this.getRandomColor();
			paletteTrueColours.palettes.push({fillR:newTrueColourFill.r,fillG:newTrueColourFill.g,fillB:newTrueColourFill.b,lineR:newTrueColourLine.r,lineG:newTrueColourLine.g,lineB:newTrueColourLine.b,parent:"True Colours"});
		}

		this.palettes.push(paletteTrueColours);

		let silBG = this.getRandomColor();
		let silhouettePalette =
			{
				name: "Silhouette",
				palettes: [
					{ fillR:0,fillG:0,fillB: 0,lineR: 255,lineG: 255,lineB: 255, parent: "Silhouette"},
				],
				//background: {R:(0.6+0.4*fxrand())*255,G:(0.6+0.4*fxrand())*255,B:(0.6+0.4*fxrand())*255}
				//background: {R:(fxrand())*255,G:(fxrand())*255,B:(fxrand())*255}
				background: [{R:silBG.r,G:silBG.g,B:silBG.b}]
			}

		this.palettes.push(silhouettePalette);

		let solidBG = this.getRandomColor();

		let solidColor = this.getRandomColor();
		while( this.getColourNameFromRGB(solidColor.r, solidColor.g, solidColor.b) == this.getColourNameFromRGB(solidBG.r, solidBG.g, solidBG.b) ){
			solidColor = this.getRandomColor();
		}

		let solidPalette =
			{
				name: "Solid",
				palettes: [
					{ fillR:solidColor.r,fillG:solidColor.g,fillB: solidColor.b,lineR: solidColor.r,lineG: solidColor.g,lineB: solidColor.b, parent: "Solid"},
				],

				background: [{R:solidBG.r,G:solidBG.g,B:solidBG.b}]
			}

		this.palettes.push(solidPalette);

		//Single Dark Palette
		let numR = fxrand();
		let numG = fxrand();
		let numB = fxrand();

		let color = this.getRandomColor();

		let singlePalette =
		{
			name: "Single Dark",
			palettes: [
				{ fillR:color.r*0.2,fillG:color.g*0.2,fillB:color.b*0.2,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark"},
				{ fillR:color.r*0.4,fillG:color.g*0.4,fillB:color.b*0.4,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark"},
				{ fillR:color.r*0.6,fillG:color.g*0.6,fillB:color.b*0.6,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark"},
				{ fillR:color.r*0.8,fillG:color.g*0.8,fillB:color.b*0.8,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark"},
				{ fillR:color.r*1.0,fillG:color.g*1.0,fillB:color.b*1.0,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark"},
				{ fillR:64,fillG:64,fillB: 64,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark" },
				{ fillR:32,fillG:32,fillB: 32,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark" },
				{ fillR:16,fillG:16,fillB: 16,lineR: 0,lineG: 0,lineB: 0, parent: "Single Dark" }
			],
			background: [
				{R:0,G:0,B:0},
				{R:255,G:255,B:255}
			]
		}

		this.palettes.push(singlePalette);

		//Duo Gradient Dark Palette
		let numRDuo = fxrand();
		let numGDuo = fxrand();
		let numBDuo = fxrand();

		let colorDuo = this.getRandomColor();

		let duoPalette =
		{
			name: "Duo Dark",
			palettes: [
				singlePalette.palettes[0],
				singlePalette.palettes[1],
				singlePalette.palettes[2],
				singlePalette.palettes[3],
				singlePalette.palettes[4],
				{ fillR:colorDuo.r*0.2,fillG:colorDuo.g*0.2,fillB:colorDuo.b*0.2,lineR: 0,lineG: 0,lineB: 0, parent: "Duo Dark"},
				{ fillR:colorDuo.r*0.4,fillG:colorDuo.g*0.4,fillB:colorDuo.b*0.4,lineR: 0,lineG: 0,lineB: 0, parent: "Duo Dark"},
				{ fillR:colorDuo.r*0.6,fillG:colorDuo.g*0.6,fillB:colorDuo.b*0.6,lineR: 0,lineG: 0,lineB: 0, parent: "Duo Dark"},
				{ fillR:colorDuo.r*0.8,fillG:colorDuo.g*0.8,fillB:colorDuo.b*0.8,lineR: 0,lineG: 0,lineB: 0, parent: "Duo Dark"},
				{ fillR:colorDuo.r*1.0,fillG:colorDuo.g*1.0,fillB:colorDuo.b*1.0,lineR: 0,lineG: 0,lineB: 0, parent: "Duo Dark"},
			],
			background: [
				{R:0,G:0,B:0},
				{R:255,G:255,B:255}
			]
		}

		this.palettes.push(duoPalette);

	}

	getPaletteByName(paletteName) {
		//console.log(paletteName);
		return this.palettes.find((e) => e.name === paletteName);
	}

	getMaxRGBValue(ourColor) {
		return Math.max(ourColor.r, ourColor.g, ourColor.b);
	}

	getRandomColor() {

		let isGrey = fxrand();
		if ( isGrey < 0.02 )
		{
			isGrey = fxrand();
			return {r:(isGrey*100.0 + 155),g:(isGrey*100.0 + 155),b:(isGrey*100.0 + 155)};
		}

		let isAlmostWhite = fxrand();
		if ( isAlmostWhite < 0.02 ) {
			isAlmostWhite = fxrand();
			return {r:(isAlmostWhite*10.0 + 245.0),g:(isAlmostWhite*10.0 + 245.0),b:(isAlmostWhite*10.0 + 245.0)};
		}


		let numR = fxrand();
		let numG = fxrand();
		let numB = fxrand();

		let ourColor = {r:0,g:0,b:0};

		if( numR > numG && numR > numB )
		{
			if( numG > numB)
				ourColor  = { r:255, g:255*fxrand(), b:0 };
			else
				ourColor  = { r:255, g:0, b:255*fxrand() };

		} else if ( numG > numR && numG > numB )
		{
			if( numR > numB)
				ourColor  = { r:255*fxrand(), g:255, b:0 };
			else
				ourColor  = { r:0, g:255, b:255*fxrand() };
		} else {
			if( numR > numG)
				ourColor  = { r:255*fxrand(), g:0, b:255 };
			else
				ourColor  = { r:0, g:255*fxrand(), b:255 };
		}

		return ourColor;
	}

	getColourNameFromRGB(r,g,b)
	{

		//console.log("R: ", r, "G: ", g,"B: ", b, );

		if (r == 0 && g == 0 && b == 0)
			return "Black";
		if (r == 255 && g == 255 && b == 255)
			return "White";

		let colourName = "";
		if( (r+b+g) < 64 )
			colourName = "Very Dark ";
		else if ( (r+b+g) < 184 )
			colourName = "Dark ";

		if ( r == g && g == b )
			return colourName + "Grey";

		if( r > g && r > b )
		{
			if (g < 0.25 * r && b < 0.25 * r)
				return colourName + "Red";
			if (g > 0.25 * r)
				if (g < r * 0.75) {
					if (r+b+g < 128)
						return "Dark Brown";
					else if (r+b+g < 255)
						return "Brown";
					else
						return "Orange";
				} else
				{
					if (r+b+g < 184)
						return "Dark Brown";
					else if (r+b+g < 384)
						return "Brown";
					else
						return "Yellow";
				}
			else
				return colourName + "Magenta";

		} else if ( g > r && g > b )
		{
			if(r<0.8*g && b < 0.8*g)
				return colourName + "Green";
			if( r > g*0.8 ){
				if (r+b+g < 184)
					return "Dark Brown 2";
				else if (r+b+g < 255)
					return "Brown 2";
				else
					return "Yellow";
			} else
				return colourName + "Cyan";
		} else {
			if(r<0.25*b && g < 0.8*b)
				return colourName + "Blue";
			if( r > 0.25*b && r < 0.75*b)
				return colourName + "Purple"
			else if (r > 0.75*b)
				return colourName + "Magenta";
			else
				return colourName + "Cyan";
		}

		return colourName;

	}

}