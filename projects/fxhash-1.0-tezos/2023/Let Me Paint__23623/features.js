function initFeatures(isDrawn=false) {
    shaderSeed = fl(random(40, 44));

    angleNoiseMult = fl(random(0.0005, 0.002));
    stMult = fl(random(2.2, 2.8));

    let mult = fl(random(12, 15));
    amplitudeMult = fl(random(0.6, 0.92));

    if (isDrawn) {
        mult = 2.5;
        amplitudeMult = 0.6;
    }

    uMult = mult * random([-1, 1]);
    vMult = mult * random([-1, 1]);
}