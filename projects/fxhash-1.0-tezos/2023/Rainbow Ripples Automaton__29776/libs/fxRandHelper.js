function fxrand() {
    return $fx.rand();
}

function fxrandInt() {
    return Math.round(fxrand() * 64000);
}

function fxrandIntMax(max) {
    return fxrandInt() % max;
}

function fxrandBool(){
    return fxrandIntMax(2) == 0;
}