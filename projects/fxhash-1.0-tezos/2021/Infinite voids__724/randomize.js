function setupRndm() {

    shapeW = getWeightedOption([
        [Math.round(fxrandRange(w16, w4, 2)), 15],
        [w16, 1],
        [w4, 1],
    ])

    shapeH = getWeightedOption([
        [fxrandRange(w16, w4, 5), 15],
        [w16, 1],
        [w4, 1],
    ])

    shape = getWeightedOption([
        ["Rounded", 50],
        ["Squared", 20],
    ])

    speed = getWeightedOption([
        [0.2, 10],
        [0.1, 20],
        [0.4, 8],
        [0.5, 6],
        [0.05, 1],
        [0.8, 1],

    ])
    sided = getWeightedOption([
        [false, 50],
        [true, 1],

    ])

    inc = getWeightedOption([

        [2, 1],
        [3, 2],
        [4, 2],
        [5, 6],
        [9, 4],
        [12, 3],
        [20, 1],
    ])

    divisions = getWeightedOption([
        [1, 5],
        [-2.5, 4],
        [12, 4],
        [-6, 5],
        [4, 3],
        [6, 2],
        [2.5, 2],
        [-4, 3],
        [-8.5, 3],
        [8.5, 2],
        [-1, 5],
        [-12, 2]
    ]);

    colorIndex = getWeightedOption([
        [0, 20],
        [1, 20],
        [2, 5],
        [3, 5],
        [4, 5],
        [5, 5],
        [6, 2],
        [7, 2],
        [8, 1],

    ]);

    strokeSizes = getWeightedOption([
        [6, 1],
        [2, 10],
    ]);


}