// lighning effect (to improve)
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