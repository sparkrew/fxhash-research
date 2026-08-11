function pickConsoleConditions(){
    let rollForAmtOfFloors = fxrand_float()
    let result

    if (rollForAmtOfFloors < .5) {
        result = 'Neon'
    } else if (rollForAmtOfFloors >= .5 && rollForAmtOfFloors < .85) {
        result = 'Tech'
    } else {
        result = 'Circuitry'
    }

    return result
}