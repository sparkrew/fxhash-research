// Tools for colors
class ColorTools {

    static Darken(color0, factor) {
        if (color0.levels == null) {
            color0 = color(color0);
        }

        let result = color(
            lerp(color0.levels[0], 0, factor),
            lerp(color0.levels[1], 0, factor),
            lerp(color0.levels[2], 0, factor),
            // dont touch the alpha
            color[3]);
        return result;
    }

    static Lighten(color0, factor) {
        if (color0.levels == null) {
            color0 = color(color0);
        }

        let result = color(
            lerp(color0.levels[0], 255, factor),
            lerp(color0.levels[1], 255, factor),
            lerp(color0.levels[2], 255, factor),
            // dont touch the alpha
            color[3]);
        return result;
    }

    static DistanceRGB(color0, color1) {
        if (color0.levels == null) {
            color0 = color(color0);
        }

        if (color1.levels == null) {
            color0 = color(color0);
        }

        return createVector(color0.levels[0],color0.levels[1],color0.levels[2]).dist(
            createVector(color1.levels[0],color1.levels[1],color1.levels[2]));
    }

    static GenPalette(colors, paletteLength) {
        let result = [];
        for (let index = 0; index < paletteLength; index++) {
            let colorIndexF = (index / (paletteLength - 1)) * (colors.length - 1);
            let colorIndex = Math.floor(colorIndexF);
            let interpol = colorIndexF - colorIndex;

            let color0 = colors[colorIndex];
            let colorIndex2 = colorIndex + 1;
            if (colorIndex2 > colors.length - 1) {
                colorIndex2 = colors.length - 1;
            }

            let color1 = colors[colorIndex2];

            let colorGrad = lerpColor(color(color0), color(color1), interpol);
            result[index] = colorGrad;
        }

        return result;
    }

    static PaletteImage(colors, paletteLength) {

        let gradientImage = createImage(1, paletteLength);
        gradientImage.loadPixels();

        let palette = this.GenPalette(colors, paletteLength);

        for (let i = 0; i < gradientImage.height; i++) {
            for (let j = 0; j < gradientImage.width; j++) {

                gradientImage.set(j, i, palette[i]);
            }
        }

        gradientImage.updatePixels();
        return gradientImage;
    }

    static GradientImage(color1, color2, steps) {
        if (steps == null) {
            steps = 16;
        }

        let gradientImage = createImage(1, steps);
        gradientImage.loadPixels();

        for (let i = 0; i < gradientImage.height; i++) {
            for (let j = 0; j < gradientImage.width; j++) {
                let colorGrad = lerpColor(color(color1), color(color2), (i / gradientImage.height));
                gradientImage.set(j, i, colorGrad);
            }
        }

        gradientImage.updatePixels();
        return gradientImage;
    }

    // add alpha to a named color
    static ColorAlpha(color0, alpha) {
        if (color0.levels == null) {
            color0 = color(color0);
        }

        let result = color(
            color0.levels[0],
            color0.levels[1],
            color0.levels[2],
            alpha);
        return result;
    }

    static RgbToHsl(rgb) {
        let r = rgb[0];
        let g = rgb[1];
        let b = rgb[2];

        // Normalize RGB values
        const normalizedR = r / 255;
        const normalizedG = g / 255;
        const normalizedB = b / 255;
    
        // Find the maximum and minimum values among R, G, and B
        const max = Math.max(normalizedR, normalizedG, normalizedB);
        const min = Math.min(normalizedR, normalizedG, normalizedB);
    
        // Calculate the lightness
        const lightness = (max + min) / 2;
    
        // Calculate the saturation
        let saturation;
        if (max === min) {
            saturation = 0; // achromatic (grayscale)
        } else {
            saturation = lightness > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
        }
    
        // Calculate the hue
        let hue;
        if (max === min) {
            hue = 0; // achromatic (grayscale)
        } else {
            switch (max) {
                case normalizedR:
                    hue = ((normalizedG - normalizedB) / (max - min) + 6) % 6;
                    break;
                case normalizedG:
                    hue = (normalizedB - normalizedR) / (max - min) + 2;
                    break;
                case normalizedB:
                    hue = (normalizedR - normalizedG) / (max - min) + 4;
                    break;
            }
            hue *= 60;
        }
    
        return [Math.round(hue),Math.round(saturation * 100),Math.round(lightness * 100)];
    }

    static  HslToRgb(hsl) {
        let h = hsl[0];
        let s = hsl[1];
        let l = hsl[2];

        // Normalize HSL values
        const normalizedH = h / 360;
        const normalizedS = s / 100;
        const normalizedL = l / 100;
    
        // Calculate RGB values
        let r, g, b;
    
        if (s === 0) {
            // achromatic (grayscale)
            r = g = b = normalizedL;
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
    
            const q = normalizedL < 0.5 ? normalizedL * (1 + normalizedS) : normalizedL + normalizedS - normalizedL * normalizedS;
            const p = 2 * normalizedL - q;
    
            r = hue2rgb(p, q, normalizedH + 1 / 3);
            g = hue2rgb(p, q, normalizedH);
            b = hue2rgb(p, q, normalizedH - 1 / 3);
        }
    
        // Convert RGB values to 0-255 range
        return [Math.round(r * 255),Math.round(g * 255),Math.round(b * 255)];
    }

    static GetColorNameFromHue(hue){
        if(this.sortedTable.length == 0){
            this.BuildSortedTable()-1;
        }

        for (let index = 0; index < this.sortedTable.length; index++) {
            const element = this.sortedTable[index];
            if(hue <= this.sortedTable[index].hue &&
                this.sortedTable[index].saturation > 95 &&
                this.sortedTable[index].luminance > 50 && 
                !this.sortedTable[index].color.toLowerCase().includes("white") &&
                !this.sortedTable[index].color.toLowerCase().includes("blanched") &&
                !this.sortedTable[index].color.toLowerCase().includes("light")){
                return element.color.replace("Dark","");
            }
        }

        return "Red";
    }
    
    static BuildSortedTable(){
        for (let index = 0; index < this.names.length; index++) {
            const element = this.names[index];
            let color0 = color(element.color);
            let hsl = this.RgbToHsl(color0.levels);
            element.hue = hsl[0];
            element.saturation = hsl[1];
            element.luminance = hsl[2];
        }

        ColorTools.sortedTable = [...ColorTools.names];
        ColorTools.sortedTable.sort(function(a, b) {
            return a.hue - b.hue;
        });
    }

    static sortedTable = [];

    static names = [
        {
            "color": "AliceBlue",
            "hex": "#F0F8FF"
        },
        {
            "color": "AntiqueWhite",
            "hex": "#FAEBD7"
        },
        {
            "color": "Aqua",
            "hex": "#00FFFF"
        },
        {
            "color": "Aquamarine",
            "hex": "#7FFFD4"
        },
        {
            "color": "Azure",
            "hex": "#F0FFFF"
        },
        {
            "color": "Beige",
            "hex": "#F5F5DC"
        },
        {
            "color": "Bisque",
            "hex": "#FFE4C4"
        },
        {
            "color": "Black",
            "hex": "#000000"
        },
        {
            "color": "BlanchedAlmond",
            "hex": "#FFEBCD"
        },
        {
            "color": "Blue",
            "hex": "#0000FF"
        },
        {
            "color": "BlueViolet",
            "hex": "#8A2BE2"
        },
        {
            "color": "Brown",
            "hex": "#A52A2A"
        },
        {
            "color": "BurlyWood",
            "hex": "#DEB887"
        },
        {
            "color": "CadetBlue",
            "hex": "#5F9EA0"
        },
        {
            "color": "Chartreuse",
            "hex": "#7FFF00"
        },
        {
            "color": "Chocolate",
            "hex": "#D2691E"
        },
        {
            "color": "Coral",
            "hex": "#FF7F50"
        },
        {
            "color": "CornflowerBlue",
            "hex": "#6495ED"
        },
        {
            "color": "Cornsilk",
            "hex": "#FFF8DC"
        },
        {
            "color": "Crimson",
            "hex": "#DC143C"
        },
        {
            "color": "Cyan",
            "hex": "#00FFFF"
        },
        {
            "color": "DarkBlue",
            "hex": "#00008B"
        },
        {
            "color": "DarkCyan",
            "hex": "#008B8B"
        },
        {
            "color": "DarkGoldenRod",
            "hex": "#B8860B"
        },
        {
            "color": "DarkGray",
            "hex": "#A9A9A9"
        },
        {
            "color": "DarkGreen",
            "hex": "#006400"
        },
        {
            "color": "DarkKhaki",
            "hex": "#BDB76B"
        },
        {
            "color": "DarkMagenta",
            "hex": "#8B008B"
        },
        {
            "color": "DarkOliveGreen",
            "hex": "#556B2F"
        },
        {
            "color": "DarkOrange",
            "hex": "#FF8C00"
        },
        {
            "color": "DarkOrchid",
            "hex": "#9932CC"
        },
        {
            "color": "DarkRed",
            "hex": "#8B0000"
        },
        {
            "color": "DarkSalmon",
            "hex": "#E9967A"
        },
        {
            "color": "DarkSeaGreen",
            "hex": "#8FBC8F"
        },
        {
            "color": "DarkSlateBlue",
            "hex": "#483D8B"
        },
        {
            "color": "DarkSlateGray",
            "hex": "#2F4F4F"
        },
        {
            "color": "DarkTurquoise",
            "hex": "#00CED1"
        },
        {
            "color": "DarkViolet",
            "hex": "#9400D3"
        },
        {
            "color": "DeepPink",
            "hex": "#FF1493"
        },
        {
            "color": "DeepSkyBlue",
            "hex": "#00BFFF"
        },
        {
            "color": "DimGray",
            "hex": "#696969"
        },
        {
            "color": "DodgerBlue",
            "hex": "#1E90FF"
        },
        {
            "color": "FireBrick",
            "hex": "#B22222"
        },
        {
            "color": "FloralWhite",
            "hex": "#FFFAF0"
        },
        {
            "color": "ForestGreen",
            "hex": "#228B22"
        },
        {
            "color": "Fuchsia",
            "hex": "#FF00FF"
        },
        {
            "color": "Gainsboro",
            "hex": "#DCDCDC"
        },
        {
            "color": "GhostWhite",
            "hex": "#F8F8FF"
        },
        {
            "color": "Gold",
            "hex": "#FFD700"
        },
        {
            "color": "GoldenRod",
            "hex": "#DAA520"
        },
        {
            "color": "Gray",
            "hex": "#808080"
        },
        {
            "color": "Green",
            "hex": "#008000"
        },
        {
            "color": "GreenYellow",
            "hex": "#ADFF2F"
        },
        {
            "color": "HoneyDew",
            "hex": "#F0FFF0"
        },
        {
            "color": "HotPink",
            "hex": "#FF69B4"
        },
        {
            "color": "IndianRed ",
            "hex": "#CD5C5C"
        },
        {
            "color": "Indigo ",
            "hex": "#4B0082"
        },
        {
            "color": "Ivory",
            "hex": "#FFFFF0"
        },
        {
            "color": "Khaki",
            "hex": "#F0E68C"
        },
        {
            "color": "Lavender",
            "hex": "#E6E6FA"
        },
        {
            "color": "LavenderBlush",
            "hex": "#FFF0F5"
        },
        {
            "color": "LawnGreen",
            "hex": "#7CFC00"
        },
        {
            "color": "LemonChiffon",
            "hex": "#FFFACD"
        },
        {
            "color": "LightBlue",
            "hex": "#ADD8E6"
        },
        {
            "color": "LightCoral",
            "hex": "#F08080"
        },
        {
            "color": "LightCyan",
            "hex": "#E0FFFF"
        },
        {
            "color": "LightGoldenRodYellow",
            "hex": "#FAFAD2"
        },
        {
            "color": "LightGray",
            "hex": "#D3D3D3"
        },
        {
            "color": "LightGreen",
            "hex": "#90EE90"
        },
        {
            "color": "LightPink",
            "hex": "#FFB6C1"
        },
        {
            "color": "LightSalmon",
            "hex": "#FFA07A"
        },
        {
            "color": "LightSeaGreen",
            "hex": "#20B2AA"
        },
        {
            "color": "LightSkyBlue",
            "hex": "#87CEFA"
        },
        {
            "color": "LightSlateGray",
            "hex": "#778899"
        },
        {
            "color": "LightSteelBlue",
            "hex": "#B0C4DE"
        },
        {
            "color": "LightYellow",
            "hex": "#FFFFE0"
        },
        {
            "color": "Lime",
            "hex": "#00FF00"
        },
        {
            "color": "LimeGreen",
            "hex": "#32CD32"
        },
        {
            "color": "Linen",
            "hex": "#FAF0E6"
        },
        {
            "color": "Magenta",
            "hex": "#FF00FF"
        },
        {
            "color": "Maroon",
            "hex": "#800000"
        },
        {
            "color": "MediumAquaMarine",
            "hex": "#66CDAA"
        },
        {
            "color": "MediumBlue",
            "hex": "#0000CD"
        },
        {
            "color": "MediumOrchid",
            "hex": "#BA55D3"
        },
        {
            "color": "MediumPurple",
            "hex": "#9370DB"
        },
        {
            "color": "MediumSeaGreen",
            "hex": "#3CB371"
        },
        {
            "color": "MediumSlateBlue",
            "hex": "#7B68EE"
        },
        {
            "color": "MediumSpringGreen",
            "hex": "#00FA9A"
        },
        {
            "color": "MediumTurquoise",
            "hex": "#48D1CC"
        },
        {
            "color": "MediumVioletRed",
            "hex": "#C71585"
        },
        {
            "color": "MidnightBlue",
            "hex": "#191970"
        },
        {
            "color": "MintCream",
            "hex": "#F5FFFA"
        },
        {
            "color": "MistyRose",
            "hex": "#FFE4E1"
        },
        {
            "color": "Moccasin",
            "hex": "#FFE4B5"
        },
        {
            "color": "NavajoWhite",
            "hex": "#FFDEAD"
        },
        {
            "color": "Navy",
            "hex": "#000080"
        },
        {
            "color": "OldLace",
            "hex": "#FDF5E6"
        },
        {
            "color": "Olive",
            "hex": "#808000"
        },
        {
            "color": "OliveDrab",
            "hex": "#6B8E23"
        },
        {
            "color": "Orange",
            "hex": "#FFA500"
        },
        {
            "color": "OrangeRed",
            "hex": "#FF4500"
        },
        {
            "color": "Orchid",
            "hex": "#DA70D6"
        },
        {
            "color": "PaleGoldenRod",
            "hex": "#EEE8AA"
        },
        {
            "color": "PaleGreen",
            "hex": "#98FB98"
        },
        {
            "color": "PaleTurquoise",
            "hex": "#AFEEEE"
        },
        {
            "color": "PaleVioletRed",
            "hex": "#DB7093"
        },
        {
            "color": "PapayaWhip",
            "hex": "#FFEFD5"
        },
        {
            "color": "PeachPuff",
            "hex": "#FFDAB9"
        },
        {
            "color": "Peru",
            "hex": "#CD853F"
        },
        {
            "color": "Pink",
            "hex": "#FFC0CB"
        },
        {
            "color": "Plum",
            "hex": "#DDA0DD"
        },
        {
            "color": "PowderBlue",
            "hex": "#B0E0E6"
        },
        {
            "color": "Purple",
            "hex": "#800080"
        },
        {
            "color": "Red",
            "hex": "#FF0000"
        },
        {
            "color": "RosyBrown",
            "hex": "#BC8F8F"
        },
        {
            "color": "RoyalBlue",
            "hex": "#4169E1"
        },
        {
            "color": "SaddleBrown",
            "hex": "#8B4513"
        },
        {
            "color": "Salmon",
            "hex": "#FA8072"
        },
        {
            "color": "SandyBrown",
            "hex": "#F4A460"
        },
        {
            "color": "SeaGreen",
            "hex": "#2E8B57"
        },
        {
            "color": "SeaShell",
            "hex": "#FFF5EE"
        },
        {
            "color": "Sienna",
            "hex": "#A0522D"
        },
        {
            "color": "Silver",
            "hex": "#C0C0C0"
        },
        {
            "color": "SkyBlue",
            "hex": "#87CEEB"
        },
        {
            "color": "SlateBlue",
            "hex": "#6A5ACD"
        },
        {
            "color": "SlateGray",
            "hex": "#708090"
        },
        {
            "color": "Snow",
            "hex": "#FFFAFA"
        },
        {
            "color": "SpringGreen",
            "hex": "#00FF7F"
        },
        {
            "color": "SteelBlue",
            "hex": "#4682B4"
        },
        {
            "color": "Tan",
            "hex": "#D2B48C"
        },
        {
            "color": "Teal",
            "hex": "#008080"
        },
        {
            "color": "Thistle",
            "hex": "#D8BFD8"
        },
        {
            "color": "Tomato",
            "hex": "#FF6347"
        },
        {
            "color": "Turquoise",
            "hex": "#40E0D0"
        },
        {
            "color": "Violet",
            "hex": "#EE82EE"
        },
        {
            "color": "Wheat",
            "hex": "#F5DEB3"
        },
        {
            "color": "White",
            "hex": "#FFFFFF"
        },
        {
            "color": "WhiteSmoke",
            "hex": "#F5F5F5"
        },
        {
            "color": "Yellow",
            "hex": "#FFFF00"
        },
        {
            "color": "YellowGreen",
            "hex": "#9ACD32"
        }
    ]
}