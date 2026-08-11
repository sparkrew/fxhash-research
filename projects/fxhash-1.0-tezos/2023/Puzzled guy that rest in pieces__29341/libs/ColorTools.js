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
}