function pickConsoleConditions(){
    let rollForAmtOfFloors = fxrand_float()
    let result

    if (rollForAmtOfFloors < .5) {
        result = 'Poor'
    } else if (rollForAmtOfFloors >= .5 && rollForAmtOfFloors < .85) {
        result = 'Average'
    } else {
        result = 'New'
    }

    return result
}