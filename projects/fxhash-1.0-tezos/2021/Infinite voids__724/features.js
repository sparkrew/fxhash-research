function myfeatures() {
    if (bg == 0) {
        colorFeature = features.colorFeatures[0];
        if (fill == 0) {
            colorFeature = features.colorFeatures[2];
        }
    }
    if (bg == 255) {
        colorFeature = features.colorFeatures[1];
        if (fill == 255) {
            colorFeature = features.colorFeatures[3];
        }
    }
    if (bg == 200) {
        colorFeature = features.colorFeatures[4];
    }

    if (strokeC == "none") {
        strokeFeature = features.strokeFeatures[0];

    } else {
        if (strokeSizes == 2) {
            strokeFeature = features.strokeFeatures[1];
        }
        if (strokeSizes == 6) {
            strokeFeature = features.strokeFeatures[2];
        }
    }
    shapeSizeFeature = features.shapeSizeFeatures[0];
    if (shapeW + shapeH > (w4 * 0.8) * 2) {
        shapeSizeFeature = features.shapeSizeFeatures[1];
    }
    if (shapeW + shapeH < (w9) * 2) {
        shapeSizeFeature = features.shapeSizeFeatures[2];
    }
    if (shapeW == w4 && shapeH == w16) {
        shapeSizeFeature = features.shapeSizeFeatures[3];
    }
    if (shapeH == w4 && shapeW == w16) {
        shapeSizeFeature = features.shapeSizeFeatures[3];
    }
    if (shapeH == shapeW) {
        if (shapeH == w4) {
            shapeSizeFeature = features.shapeSizeFeatures[4];
        } else {
            if (shapeH == w16)
                shapeSizeFeature = features.shapeSizeFeatures[5];
            else {
                shapeSizeFeature = features.shapeSizeFeatures[6];
            }
        }
    }
    if (sided) {
        reversedFeature = features.reversedFeatures[1];
    } else {
        reversedFeature = features.reversedFeatures[0];
    }
}