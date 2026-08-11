function pickAmtOfFloors() {
    let rollForAmtOfFloors = fxrand_float()
    let result
    if (rollForAmtOfFloors < .25) {
        result = minFloorsAmt + 0
    } else if (rollForAmtOfFloors >= .25 && rollForAmtOfFloors < .5) {
        result = minFloorsAmt + 1
    } else if (rollForAmtOfFloors >= .5 && rollForAmtOfFloors < .7) {
        result = minFloorsAmt + 2
    } else if (rollForAmtOfFloors >= .7 && rollForAmtOfFloors < .85) {
        result = minFloorsAmt + 3
    } else if (rollForAmtOfFloors >= .85 && rollForAmtOfFloors < .95) {
        result = minFloorsAmt + 4
    } else {
        result = minFloorsAmt + 5
    }
    return result
}

function generateMaps() {

    for (let i = 0; i < amtOfFloors; i++) {
        let floor = new Floor(-(i + 1), mapSize)
        floors.push(floor)
    }

    noiseGrids = []
    for (let i = 0; i < floors.length; i++) {

        noiseValues = {
            grass: {
                seed: fxrand_float(100),
                scale: noiseScale
            },
            thickGrass: {
                seed: fxrand_float(100),
                scale: noiseScale * 4
            },
            thickerGrass: {
                seed: fxrand_float(100),
                scale: noiseScale * 6
            },
            water: {
                seed: fxrand_float(100),
                scale: noiseScale * 2
            },
            debris: {
                seed: fxrand_float(100),
                scale: noiseScale * 6
            },
            overlay: {
                seed: fxrand_float(100),
                scale: noiseScale * 8
            }
        }

        noiseGrids[i] = Object.entries(noiseValues).reduce((grids, [key, {
            seed: seed,
            scale: scale
        }]) => {
            grids[key] = customNoiseGrid(seed, scale, mapSize * pixelsPerTile)
            return grids
        }, {})
    }



    floors.forEach(floor => {
        floor.generateTileMap() // initialize tilemap
        floor.generateAllRooms() // sprinkle rooms
        floor.generateCorridors() // run the maze algo
        floor.knockDownWalls() // knock down some walls between rooms
        floor.findDoors() // find doors and mark the tiles around them as untouchable
        floor.floodFill() // floodfill and delete unreachable tiles
        floor.removeDeadEnds() // remove dead ends
        floor.spawnProps() // sprinkle some obstacles
        floor.generateDoors()
        console.log(floor)
    });

    for (let i = 0; i < floors.length; i++) {

        floors[i].spawnStairsUp()

        if (i != floors.length - 1) {
            floors[i].spawnStairsDown()
        }
    }

    floors.forEach(floor => {
        floor.spawnEnemies()
        floor.spawnConsumables() // sprinkle some potions
        floor.assignTextures()
    });

    currentFloor = floors.length - 1
}

class Floor {
    constructor(depth, size) {
        this.depth = depth
        this.size = size
        this.floorMap = []
        this.rooms = 0
        this.background
        this.doors = []
        this.stairsDown
        this.stairsUp
        this.enemies = []
        this.walkableSurface = 0
    }

    generateTileMap() {

        for (let x = 0; x < this.size; x++) { // generate tilemap and set checkersboard
            for (let y = 0; y < this.size; y++) {
                let tile = new Tile(x, y, this.depth, tileWidth)
                if (x == 0 || y == 0 || x == this.size - 1 || y == this.size - 1) { // create checker board pattern to allow for maze walls of 1block width
                    tile.properties.isBlock = true
                } else if (x % 2 != 0 && y % 2 != 0) {
                    tile.properties.isBlock = false
                } else {
                    tile.properties.isBlock = true

                }
                this.floorMap.push(tile)

            }
        }
    }

    generateAllRooms() {

        let currentAttempts = 0
        while (currentAttempts < maxRoomCreationAttempts && this.rooms < maxRoomsCount) {
            this.generateRoom()
            currentAttempts++
        }

    }

    generateRoom() {
        let startingCornerSet = false
        let startingCorner

        while (!startingCornerSet) {
            this.floorMap.forEach(tile => {
                if (!startingCornerSet && !tile.properties.isBlock) {
                    let picker = fxrand_float() < 0.005
                    if (picker) {
                        startingCorner = tile
                        startingCornerSet = true
                    }
                }
            });
        }

        let roomSizeX = odd(fxrand_int(minRoomSize, maxRoomSize))
        let roomSizeY = odd(fxrand_int(minRoomSize, maxRoomSize))

        let check1 = this.isRoomInMap(startingCorner, roomSizeX, roomSizeY)

        let check2

        if (check1) {
            check2 = this.isRoomOverlapping(startingCorner, roomSizeX, roomSizeY)
        }

        if (check1 && !check2) {
            this.defineRoom(startingCorner, roomSizeX, roomSizeY)
            this.rooms++
        }
    }

    isRoomInMap(start, w, h) {
        if (start.y + h > mapSize - 1 ||
            start.x + w > mapSize - 1) {
            return false
        } else {
            return true
        }
    }

    isRoomOverlapping(start, w, h) {

        let value = 0

        this.floorMap.forEach(tile => {

            if ( // exclusion conditions
                tile.x >= start.x &&
                tile.x < start.x + w &&
                tile.y >= start.y &&
                tile.y < start.y + h
            ) {
                if (tile.properties.isRoom) {
                    value++
                }
            } else {
                // do nothing
            }
        })

        if (value > 0) {
            return true
        } else {
            return false
        }

    }

    defineRoom(start, w, h) {
        this.floorMap.forEach(tile => {

            if (tile.x >= start.x &&
                tile.x <= start.x + (w - 1) &&
                tile.y >= start.y &&
                tile.y <= start.y + (h - 1)) {
                tile.properties.isRoom = true
                tile.properties.isBlock = false


            }

        })
    }

    generateCorridors() {

        let resultFound = false

        let currentTile
        currentTile = fxrand_arr(this.floorMap)

        while (!resultFound) {
            if (currentTile.properties.isBlock || currentTile.properties.isRoom) {
                currentTile = fxrand_arr(this.floorMap)
            } else {
                resultFound = true
            }
        }

        this.generateMazeFrom(currentTile)

    }

    generateMazeFrom(a) {
        let tilesToBacktrack = [] // used for maze generation backtracking
        let done = false
        while (!done) {
            for (let i = 0; i < 6; i++) {
                a.properties.isVisited = true
                a.properties.isCorridor = true

                let b = this.findNextTiles(a)

                if (b) {

                    b.properties.isVisited = true
                    b.properties.isCorridor = true

                    tilesToBacktrack.push(a)

                    let c = this.getMiddleBlock(a, b)
                    c.properties.isBlock = false
                    c.properties.isCorridor = true
                    c.properties.isVisited = true

                    a = b


                } else if (tilesToBacktrack.length > 0) {

                    a = tilesToBacktrack.pop()

                } else {

                    done = true

                }
            }
        }

    }

    findNextTiles(curr) {
        let nextTiles = []

        let x = curr.x
        let y = curr.y

        let top = this.floorMap[this.findTileByCoords(x, y - 2)]
        let right = this.floorMap[this.findTileByCoords(x + 2, y)]
        let bottom = this.floorMap[this.findTileByCoords(x, y + 2)]
        let left = this.floorMap[this.findTileByCoords(x - 2, y)]

        if (top &&
            !top.properties.isVisited &&
            !top.properties.isBlock &&
            !top.properties.isRoom) {
            nextTiles.push(top)
        }
        if (right &&
            !right.properties.isVisited &&
            !right.properties.isBlock &&
            !right.properties.isRoom) {
            nextTiles.push(right)
        }
        if (bottom &&
            !bottom.properties.isVisited &&
            !bottom.properties.isBlock &&
            !bottom.properties.isRoom) {
            nextTiles.push(bottom)
        }
        if (left &&
            !left.properties.isVisited &&
            !left.properties.isBlock &&
            !left.properties.isRoom) {
            nextTiles.push(left)
        }
        let r = fxrand_arr(nextTiles)
        if (nextTiles.length > 0) {
            return r
        } else {
            return undefined
        }
    }

    findTileByCoords(x, y) {
        if (x < 0 || y < 0 || x > mapSize - 1 || y > mapSize - 1) {
            return null
        }
        return y + x * mapSize
    }

    getMiddleBlock(a, b) {

        let top = this.floorMap[this.findTileByCoords(a.x, a.y - 1)]
        let right = this.floorMap[this.findTileByCoords(a.x + 1, a.y)]
        let bottom = this.floorMap[this.findTileByCoords(a.x, a.y + 1)]
        let left = this.floorMap[this.findTileByCoords(a.x - 1, a.y)]

        if (a.x > b.x) { // left
            return left
        } else if (a.x < b.x) { // right 
            return right
        } else if (a.y > b.y) { // up 
            return top
        } else if (a.y < b.y) { // down
            return bottom
        } else {
            return undefined
        }

    }

    knockDownWalls() {
        this.floorMap.forEach(tile => {
            let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
            let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

            let roll = fxrand_float() < knockDownWallsRate

            if (roll && top && top.properties.isRoom && bottom && bottom.properties.isRoom && tile.properties.isBlock) {
                tile.properties.isRoom = true
                tile.properties.isBlock = false
            }
            if (roll && left && left.properties.isRoom && right && right.properties.isRoom && tile.properties.isBlock) {
                tile.properties.isRoom = true
                tile.properties.isBlock = false
            }
        })
    }

    findDoors() {
        this.floorMap.forEach(tile => {
            let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
            let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

            let roll = fxrand_float() < doorsSpawnRate

            if (
                tile.properties.isBlock && roll && (tile.x % 2 == 0) && (tile.y % 2 == 0) &&
                ((
                        top && top.properties.isRoom && bottom && bottom.properties.isCorridor
                    ) ||
                    (
                        top && top.properties.isCorridor && bottom && bottom.properties.isRoom
                    ) ||
                    (
                        right && right.properties.isCorridor && left && left.properties.isRoom
                    ) ||
                    (
                        right && right.properties.isRoom && left && left.properties.isCorridor
                    ))
            ) {
                tile.properties.isDoor = true
                tile.properties.isBlock = false
            }

        })
    }

    spawnProps() {
        this.floorMap.forEach(tile => {
            let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
            let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

            let roll = fxrand_float() < propsSpawnRate

            if (
                top && bottom && left && right &&
                !top.properties.isDoor &&
                !right.properties.isDoor &&
                !left.properties.isDoor &&
                !bottom.properties.isDoor &&
                !tile.properties.isBlock &&
                !tile.properties.isDoor
            ) {
                if (roll) tile.properties.isProp = true
                if (!roll) this.walkableSurface++
            }
        })
    }

    spawnConsumables() {
        this.floorMap.forEach(tile => {
            let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
            let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

            let roll = fxrand_float() < consumablesSpawnRate

            if (
                roll && top && bottom && left && right &&
                !top.properties.isDoor &&
                !right.properties.isDoor &&
                !left.properties.isDoor &&
                !bottom.properties.isDoor &&
                !tile.properties.isBlock &&
                !tile.properties.isDoor &&
                !tile.properties.isProp &&
                !tile.properties.isStairsDown &&
                !tile.properties.isStairsUp
            ) {
                this.walkableSurface--
                tile.properties.isConsumable = true
                let picker = fxrand_float()
                if (picker < 0.5) {
                    tile.consumableType = 'small_potion'
                    smallPotCount++
                } else if (picker >= 0.5 && picker < 0.8) {
                    tile.consumableType = 'medium_potion'
                    midPotCount++
                } else {
                    tile.consumableType = 'big_potion'
                    bigPotCount++
                }

            }



        })
    }

    floodFill() {
        let startingTile
        let startingTileLegal = false

        while (!startingTileLegal) {
            startingTile = fxrand_arr(this.floorMap)

            if (startingTile.properties.isRoom && !startingTile.properties.isBlock && !startingTile.properties.isDoor) {
                startingTileLegal = true
            }
        }



        this.advanceFlood(startingTile)


    }

    advanceFlood(inputTile) {
        inputTile.properties.isReachable = true

        let top = this.floorMap[this.findTileByCoords(inputTile.x, inputTile.y - 1)]
        let right = this.floorMap[this.findTileByCoords(inputTile.x + 1, inputTile.y)]
        let bottom = this.floorMap[this.findTileByCoords(inputTile.x, inputTile.y + 1)]
        let left = this.floorMap[this.findTileByCoords(inputTile.x - 1, inputTile.y)]

        if (top && !top.properties.isBlock && !top.properties.isReachable) {
            this.advanceFlood(top)
        }

        if (right && !right.properties.isBlock && !right.properties.isReachable) {
            this.advanceFlood(right)
        }

        if (bottom && !bottom.properties.isBlock && !bottom.properties.isReachable) {
            this.advanceFlood(bottom)
        }

        if (left && !left.properties.isBlock && !left.properties.isReachable) {
            this.advanceFlood(left)
        }

    }

    removeDeadEnds() {
        for (let i = 0; i < removeDeadEndsTreshold; i++) {
            this.floorMap.forEach(tile => {

                let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
                let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
                let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
                let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

                let amtOfBlocks = 0

                if (top && top.properties.isBlock) {
                    amtOfBlocks++
                }
                if (right && right.properties.isBlock) {
                    amtOfBlocks++
                }
                if (bottom && bottom.properties.isBlock) {
                    amtOfBlocks++
                }
                if (left && left.properties.isBlock) {
                    amtOfBlocks++
                }

                if (
                    amtOfBlocks == 3 &&
                    tile.properties.isCorridor &&
                    !top.properties.isDoor &&
                    !right.properties.isDoor &&
                    !bottom.properties.isDoor &&
                    !left.properties.isDoor
                ) {
                    tile.properties.isBlock = true
                    tile.properties.isCorridor = false
                    tile.properties.isReachable = false
                }
            })
        }

        this.floorMap.forEach(tile => {
            if (!tile.properties.isReachable && !tile.properties.isProp) {
                tile.properties.isBlock = true
                tile.properties.isDoor = false
                tile.properties.isCorridor = false
                tile.properties.isRoom = false
            }
        })
    }

    spawnStairsUp() {
        let stairsUpTile
        let stairsUpTileLegal = false

        while (!stairsUpTileLegal) {
            stairsUpTile = fxrand_arr(this.floorMap)

            let top = this.floorMap[this.findTileByCoords(stairsUpTile.x, stairsUpTile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(stairsUpTile.x + 1, stairsUpTile.y)]
            let bottom = this.floorMap[this.findTileByCoords(stairsUpTile.x, stairsUpTile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(stairsUpTile.x - 1, stairsUpTile.y)]

            if ((stairsUpTile.properties.isRoom || stairsUpTile.properties.isCorridor) &&
                !stairsUpTile.properties.isBlock &&
                !stairsUpTile.properties.isDoor &&
                !stairsUpTile.properties.isStairsDown &&
                !stairsUpTile.properties.isProp &&
                ((
                        top && !top.properties.isDoor
                    ) ||
                    (
                        right && !right.properties.isDoor
                    ) ||
                    (
                        bottom && !bottom.properties.isDoor
                    ) ||
                    (
                        left && !left.properties.isDoor
                    ))
            ) {
                stairsUpTileLegal = true
                stairsUpTile.properties.isStairsUp = true
                this.stairsUp = stairsUpTile
            }
        }
    }

    spawnStairsDown() {
        let stairsDownTile
        let stairsDownTileLegal = false

        while (!stairsDownTileLegal) {
            stairsDownTile = fxrand_arr(this.floorMap)

            let top = this.floorMap[this.findTileByCoords(stairsDownTile.x, stairsDownTile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(stairsDownTile.x + 1, stairsDownTile.y)]
            let bottom = this.floorMap[this.findTileByCoords(stairsDownTile.x, stairsDownTile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(stairsDownTile.x - 1, stairsDownTile.y)]

            if ((stairsDownTile.properties.isRoom || stairsDownTile.properties.isCorridor) &&
                !stairsDownTile.properties.isBlock &&
                !stairsDownTile.properties.isDoor &&
                !stairsDownTile.properties.isStairsUp &&
                !stairsDownTile.properties.isProp &&
                ((
                        top && !top.properties.isDoor
                    ) ||
                    (
                        right && !right.properties.isDoor
                    ) ||
                    (
                        bottom && !bottom.properties.isDoor
                    ) ||
                    (
                        left && !left.properties.isDoor
                    ))
            ) {
                stairsDownTileLegal = true
                stairsDownTile.properties.isStairsDown = true
                this.stairsDown = stairsDownTile
            }
        }
    }

    assignTextures() {

        let bigBgComp = createGraphics(pixelsPerTile * mapSize, pixelsPerTile * mapSize)
        let bgImgCandidates = ['floor0', 'floor90', 'floor180', 'floor270', 'floor_v5', 'floor_v6', 'floor_v7', 'floor_v8', 'floor_v9', 'floor_v10', 'floor_v11', 'floor_v12', 'floor_v13', 'floor_v14']

        for (let x = 0; x < mapSize; x++) {
            for (let y = 0; y < mapSize; y++) {
                let bgImgCandidate = fxrand_arr(bgImgCandidates)
                let bgImg = spritesImgs.get(spritesData[bgImgCandidate].x, spritesData[bgImgCandidate].y, pixelsPerTile, pixelsPerTile)
                bigBgComp.image(bgImg, x * pixelsPerTile, y * pixelsPerTile, pixelsPerTile, pixelsPerTile)
            }
        }

        let floorIndex = (this.depth + 1) * -1

        for (let x = 0; x < pixelsPerTile * mapSize; x++) {
            for (let y = 0; y < pixelsPerTile * mapSize; y++) {
                let waterTrs = 30 * noiseGrids[floorIndex].water[x][y]
                let grassTrs = 30 * noiseGrids[floorIndex].grass[x][y]
                let thickGrassTrs = 30 * noiseGrids[floorIndex].thickGrass[x][y]
                let thickerGrassTrs = 30 * noiseGrids[floorIndex].thickerGrass[x][y]
                let debrisTrs = 30 * noiseGrids[floorIndex].debris[x][y]
                let overlayValue = 40 * noiseGrids[floorIndex].overlay[x][y]

                if (overlayValue > 20) {
                    bigBgComp.fill(toRgb(overlayColor, overlayValue))
                    bigBgComp.noStroke()
                    bigBgComp.rect(x, y, 1, 1);
                }

                if (waterTrs > 18) {
                    let a = map(waterTrs, 0, 30, 0, 175)
                    bigBgComp.fill(toRgb(waterColor, a))
                    bigBgComp.noStroke()
                    bigBgComp.rect(x, y, 1, 1);
                }

                if (grassTrs > 15 && waterTrs <= 15) {
                    let a = map(grassTrs, 0, 30, 0, 120)
                    bigBgComp.fill(toRgb(grassColor, a))
                    bigBgComp.noStroke()
                    bigBgComp.rect(x, y, 1, 1);
                }

                if (thickGrassTrs > 18 && waterTrs <= 15) {
                    let a = map(thickGrassTrs, 0, 30, 0, 120)
                    bigBgComp.fill(toRgb(thickGrassColor, a))
                    bigBgComp.noStroke()
                    bigBgComp.rect(x, y, 1, 1);
                }

                if (thickerGrassTrs > 22 && waterTrs <= 15) {
                    let a = map(thickerGrassTrs, 0, 30, 0, 80)
                    bigBgComp.fill(toRgb(thickerGrassColor, a))
                    bigBgComp.noStroke()
                    bigBgComp.rect(x, y, 1, 1);
                }

                if (debrisTrs > 22) {
                    let a = map(debrisTrs, 0, 30, 0, 150)
                    bigBgComp.fill(toRgb(debrisColor, a))
                    bigBgComp.noStroke()
                    bigBgComp.rect(x, y, 1, 1);
                }
            }
        }



        this.floorMap.forEach(tile => {
            let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
            let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

            let bot_right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y + 1)]
            let top_right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y - 1)]
            let bot_left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y + 1)]
            let top_left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y - 1)]

            /* -------------------------------------------------------------------------- */
            /*                            assign door textures                            */
            /* -------------------------------------------------------------------------- */

            // if (tile.properties.isDoor) {
            //     if (
            //         top && !top.properties.isBlock &&
            //         bottom && !bottom.properties.isBlock
            //     ) {
            //         tile.textures.push('door_closed_h')
            //     }

            //     if (
            //         left && !left.properties.isBlock &&
            //         right && !right.properties.isBlock
            //     ) {
            //         tile.textures.push('door_closed_v')
            //     }
            // }

            /* -------------------------------------------------------------------------- */
            /*                            assign props textures                           */
            /* -------------------------------------------------------------------------- */

            if (tile.properties.isProp) {

                let props = ['basic_crate', 'barrel', 'broken_crate', 'altar', 'broken_crate_2', 'broken_crate_3', 'skull', 'rubble', 'trunk', 'boulder', 'barrel_2', 'thorns', 'thorns_2']

                tile.properties.propTexture = (fxrand_arr(props))

                // add props rarities here

            }



            /* -------------------------------------------------------------------------- */
            /*                            assign walls textures                           */
            /* -------------------------------------------------------------------------- */

            if (tile.properties.isBlock) {
                if (
                    (top && top.properties.isBlock &&
                        bottom && bottom.properties.isBlock &&
                        left && left.properties.isBlock &&
                        right && right.properties.isBlock &&
                        top_left && top_left.properties.isBlock &&
                        top_right && top_right.properties.isBlock &&
                        bot_left && bot_left.properties.isBlock &&
                        bot_right && bot_right.properties.isBlock)
                ) {
                    tile.textures.push('void')
                } else if (
                    (!bottom && top.properties.isBlock && top_left && top_left.properties.isBlock && top_right && top_right.properties.isBlock) ||
                    (!top && bottom.properties.isBlock && bot_left && bot_left.properties.isBlock && bot_right && bot_right.properties.isBlock) ||
                    (!left && right.properties.isBlock && top_right && top_right.properties.isBlock && bot_right && bot_right.properties.isBlock) ||
                    (!right && left.properties.isBlock && top_left && top_left.properties.isBlock && bot_left && bot_left.properties.isBlock) ||
                    (!top && !left && bot_right && bot_right.properties.isBlock) ||
                    (!top && !right && bot_left && bot_left.properties.isBlock) ||
                    (!bottom && !left && top_right && top_right.properties.isBlock) ||
                    (!bottom && !right && top_left && top_left.properties.isBlock)
                ) {
                    tile.textures.push('void')
                } else if (
                    top && !top.properties.isBlock && !top.properties.isDoor &&
                    bottom && !bottom.properties.isBlock && !bottom.properties.isDoor &&
                    left && !left.properties.isBlock && !left.properties.isDoor &&
                    right && !right.properties.isBlock && !right.properties.isDoor
                ) {
                    tile.textures.push('column')

                } else if (

                    // catch all the other conditions here!!

                    left && left.properties.isBlock &&
                    right && right.properties.isBlock &&
                    top && !top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock &&
                    bot_left && bot_left.properties.isBlock



                ) {
                    tile.textures.push('middle_left_corner_full_t')

                } else if (

                    // catch all the other conditions here!!

                    right && right.properties.isBlock &&
                    left && left.properties.isBlock &&
                    top && !top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock &&
                    bot_right && bot_right.properties.isBlock



                ) {
                    tile.textures.push('middle_right_corner_full_t')


                } else if (

                    // catch all the other conditions here!!

                    !left && top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    right && right.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock



                ) {
                    tile.textures.push('middle_left_corner_full')


                } else if (

                    // catch all the other conditions here!!

                    !right && top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    left && left.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock



                ) {
                    tile.textures.push('middle_right_corner_full')


                } else if (

                    // catch all the other conditions here!!

                    top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    left && left.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock &&
                    bot_left && bot_left.properties.isBlock


                ) {
                    // tile.properties.isMarked = true
                    tile.textures.push('corner_wall_top_left')


                } else if (

                    // catch all the other conditions here!!

                    top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    right && right.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock &&
                    bot_right && bot_right.properties.isBlock


                ) {
                    //tile.properties.isMarked = true
                    tile.textures.push('corner_wall_top_right')


                } else if (

                    // catch all the other conditions here!!

                    top && !top.properties.isBlock &&
                    left && left.properties.isBlock &&
                    right && right.properties.isDoor &&
                    bottom && bottom.properties.isBlock


                ) {
                    // tile.properties.isMarked = true
                    tile.textures.push('angle_next_door_right')

                } else if (

                    // catch all the other conditions here!!

                    top && !top.properties.isBlock &&
                    right && right.properties.isBlock &&
                    left && left.properties.isDoor &&
                    bottom && bottom.properties.isBlock


                ) {
                    // tile.properties.isMarked = true
                    tile.textures.push('angle_next_door_left')

                } else if (

                    // catch all the other conditions here!!

                    top && top.properties.isBlock &&
                    right && right.properties.isBlock &&
                    left && !left.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock


                ) {
                    // tile.properties.isMarked = true
                    tile.textures.push('middle_left_corner_thin')

                } else if (

                    // catch all the other conditions here!!

                    top && top.properties.isBlock &&
                    left && left.properties.isBlock &&
                    right && !right.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock


                ) {
                    // tile.properties.isMarked = true
                    tile.textures.push('middle_right_corner_thin')

                } else if (

                    // catch all the other conditions here!!

                    top && top.properties.isBlock &&
                    left && left.properties.isBlock &&
                    right && right.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    top_right && top_right.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    bot_right && bot_right.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock


                ) {
                    // tile.properties.isMarked = true
                    tile.textures.push('top_right_outer_corner_full')

                } else if (
                    bot_right && !bot_right.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    right && right.properties.isBlock &&
                    (
                        (!top && !left) ||
                        (!top && bot_left && bot_left.properties.isBlock) ||
                        (!left && top_right && top_right.properties.isBlock) ||
                        (!top && left && left.properties.isBlock && bot_left && bot_left.properties.isBlock) ||
                        (!left && top.properties.isBlock && top_right && top_right.properties.isBlock) ||
                        (top && left && top.properties.isBlock && left.properties.isBlock && top_right && top_right.properties.isBlock && bot_left && bot_left.properties.isBlock)
                    )
                ) {
                    tile.textures.push('top_left_corner_full')
                } else if (
                    bot_left && !bot_left.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    left && left.properties.isBlock &&
                    (
                        (!right && !top) ||
                        (!top && bot_right && bot_right.properties.isBlock) ||
                        (!top && right && right.properties.isBlock && bot_right && bot_right.properties.isBlock) ||
                        (!right && top_left && top_left.properties.isBlock) ||
                        (!right && top.properties.isBlock && top_left && top_left.properties.isBlock) ||
                        (top && right && top.properties.isBlock && right.properties.isBlock && top_left && top_left.properties.isBlock && bot_right && bot_right.properties.isBlock)
                    )
                ) {
                    tile.textures.push('top_right_corner_full')

                } else if (
                    bottom && !bottom.properties.isBlock && !bottom.properties.isDoor &&
                    bot_left && !bot_left.properties.isBlock &&
                    left && !left.properties.isBlock && !left.properties.isDoor &&
                    right && right.properties.isBlock
                ) {
                    tile.textures.push('front_wall_corner_left')

                } else if (
                    bottom && !bottom.properties.isBlock && !bottom.properties.isDoor &&
                    bot_right && !bot_right.properties.isBlock &&
                    right && !right.properties.isBlock && !right.properties.isDoor &&
                    left && left.properties.isBlock
                ) {
                    tile.textures.push('front_wall_corner_right')

                    // I need the bottom full corners here

                } else if (
                    top_right && !top_right.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    right && right.properties.isBlock &&
                    left && left.properties.isBlock &&
                    top && top.properties.isBlock &&
                    ((!bottom) || (bottom && bottom.properties.isBlock))
                ) {
                    tile.textures.push('bottom_wall')

                } else if (
                    top_right && !top_right.properties.isBlock &&
                    top && top.properties.isBlock &&
                    (
                        (!bottom) ||
                        (bottom && bottom.properties.isBlock && right && right.properties.isBlock && bot_right && bot_right.properties.isBlock)
                    )
                ) {
                    tile.textures.push('bottom_left_corner_full')

                } else if (
                    top_left && !top_left.properties.isBlock &&
                    top && top.properties.isBlock &&
                    (
                        (!bottom) ||
                        (bottom && bottom.properties.isBlock && left && left.properties.isBlock && bot_left && bot_left.properties.isBlock)
                    )
                ) {
                    tile.textures.push('bottom_right_corner_full')

                } else if (
                    right && right.properties.isBlock &&
                    left && left.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock
                ) {
                    tile.textures.push('t_section_top')

                } else if (
                    top && !top.properties.isBlock &&
                    left && left.properties.isBlock &&
                    right && right.properties.isBlock &&
                    (
                        (bottom && bottom.properties.isBlock) ||
                        (!bottom)
                    )
                ) {
                    tile.textures.push('bottom_wall')

                } else if (
                    right && !right.properties.isBlock &&
                    top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    (
                        (!left) ||
                        (left && left.properties.isBlock)
                    )
                ) {
                    tile.textures.push('left_wall')

                } else if (
                    left && !left.properties.isBlock &&
                    top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    (
                        (!right) ||
                        (right && right.properties.isBlock)
                    )
                ) {
                    tile.textures.push('right_wall')

                } else if (
                    right && !right.properties.isBlock &&
                    left && !left.properties.isBlock &&
                    bottom && !bottom.properties.isBlock && !top.properties.isDoor &&
                    !left.properties.isDoor && !right.properties.isDoor
                ) {
                    tile.textures.push('mid_wall_bottom')

                } else if (
                    left && !left.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    top && !top.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock &&
                    right && right.properties.isBlock &&
                    bottom && bottom.properties.isBlock
                ) {
                    tile.textures.push('top_left_corner_thin')

                } else if (
                    right && !right.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    top && !top.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock &&
                    left && left.properties.isBlock &&
                    bottom && bottom.properties.isBlock
                ) {
                    tile.textures.push('top_right_corner_thin')

                } else if (
                    right && !right.properties.isBlock &&
                    left && !left.properties.isBlock &&
                    top && !top.properties.isBlock &&
                    !left.properties.isDoor && !right.properties.isDoor
                ) {
                    tile.textures.push('mid_wall_top')

                } else if (
                    right && !right.properties.isBlock &&
                    left && !left.properties.isBlock &&
                    top &&
                    bottom &&
                    (
                        (bottom.properties.isBlock || bottom.properties.isDoor) ||
                        (top.properties.isBlock || top.properties.isDoor)
                    )
                ) {
                    tile.textures.push('mid_wall')

                } else if (
                    top_right && !top_right.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    left && left.properties.isBlock &&
                    bot_left && bot_left.properties.isBlock &&
                    right && !right.properties.isBlock
                ) {
                    tile.textures.push('top_left_inner_corner_full')

                } else if (
                    top_left && !top_left.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    right && right.properties.isBlock &&
                    bot_right && bot_right.properties.isBlock &&
                    left && !left.properties.isBlock
                ) {
                    tile.textures.push('top_right_inner_corner_full')

                } else if (
                    bottom && !bottom.properties.isBlock &&
                    (
                        (left && left.properties.isBlock) ||
                        (right && right.properties.isBlock) ||
                        (right && right.properties.isDoor)
                    )
                ) {

                    let frontWallCandidates = ['front_wall', 'front_wall_v2', 'front_wall_v3', 'front_wall_v4', 'front_wall_v5', 'front_wall_v6', 'front_wall_v7', 'front_wall_v8', 'front_wall_v9', 'front_wall_v10', 'front_wall_v11', 'front_wall_v12', 'front_wall_v13', 'front_wall_v14', 'front_wall_v15', 'front_wall_v16', 'front_wall_v17', 'front_wall_v18', 'front_wall_v19', 'front_wall_v19', 'front_wall_v20', 'front_wall_v21']
                    tile.textures.push(fxrand_arr(frontWallCandidates))
                }

                if (
                    top && top.properties.isBlock &&
                    left && left.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    right && right.properties.isBlock &&
                    bot_left && bot_left.properties.isBlock &&
                    top_left && top_left.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock &&
                    top_right && !top_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('top_left_outer_corner_full')
                } else if (
                    bottom && bottom.properties.isDoor &&
                    right && !right.properties.isBlock &&
                    left && left.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_right_corner_thin')
                } else if (
                    bottom && bottom.properties.isDoor &&
                    left && !left.properties.isBlock &&
                    right && right.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_left_corner_thin')
                } else if (
                    bot_left && bot_right && top_left && top_right &&
                    bot_left.properties.isBlock && !bot_right.properties.isBlock &&
                    !top_left.properties.isBlock && top_right.properties.isBlock &&
                    bottom && right && top && left &&
                    bottom.properties.isBlock && top.properties.isBlock && left.properties.isBlock && right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('triple_junction_right')
                } else if (
                    bot_left && bot_right && top_left && top_right &&
                    !bot_left.properties.isBlock && bot_right.properties.isBlock &&
                    top_left.properties.isBlock && !top_right.properties.isBlock &&
                    bottom && right && top && left &&
                    bottom.properties.isBlock && top.properties.isBlock && left.properties.isBlock && right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('triple_junction_left')
                }

                if (
                    right && !right.properties.isBlock &&
                    left && left.properties.isBlock &&
                    top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    bot_left && !bot_left.properties.isBlock &&
                    top_right && top_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('top_right_outer_corner_full')
                }

                if (
                    right && right.properties.isBlock &&
                    left && !left.properties.isBlock &&
                    top && top.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    bot_right && !bot_right.properties.isBlock &&
                    top_left && top_left.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('top_left_outer_corner_full')
                }

                if (
                    top && bottom && left && right && top_left && top_right && bot_left && bot_right &&
                    top.properties.isBlock && bottom.properties.isBlock && left.properties.isBlock && right.properties.isBlock &&
                    !top_left.properties.isBlock && !top_right.properties.isBlock && !bot_left.properties.isBlock && !bot_right.properties.isBlock
                ) {
                    tile.textures = []
                    tile.textures.push('t_section_top')
                    // tile.properties.isMarked = true

                }

                if (
                    top && bottom && left && right && top_left && top_right && bot_left && bot_right &&
                    top.properties.isBlock && bottom.properties.isBlock && left.properties.isBlock && !right.properties.isBlock &&
                    !top_left.properties.isBlock && top_right.properties.isBlock && bot_left.properties.isBlock && !bot_right.properties.isBlock
                ) {
                    tile.textures = []
                    tile.textures.push('middle_junction_right')
                    // tile.properties.isMarked = true

                }

                if (
                    top && bottom && left && right && top_left && top_right && bot_left && bot_right &&
                    top.properties.isBlock && bottom.properties.isBlock && left.properties.isBlock && !right.properties.isBlock &&
                    top_left.properties.isBlock && top_right.properties.isBlock && !bot_left.properties.isBlock && !bot_right.properties.isBlock
                ) {
                    tile.textures = []
                    tile.textures.push('middle_right_corner_thin')
                    //tile.properties.isMarked = true

                }

                if (
                    top && top.properties.isBlock &&
                    left && left.properties.isBlock &&
                    right && !right.properties.isBlock &&
                    bottom && bottom.properties.isBlock &&
                    top_right && !top_right.properties.isBlock &&
                    top_left && !top_left.properties.isBlock &&
                    bot_left && bot_left.properties.isBlock &&
                    bot_right && bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_empty_junction_right')
                }

                if (
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&
                    top.properties.isBlock && bottom.properties.isBlock && left.properties.isBlock && right.properties.isBlock && !bot_left.properties.isBlock && !top_left.properties.isBlock && !top_right.properties.isBlock && bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_right_corner_full_t')
                }

                if (
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    top.properties.isBlock && bottom.properties.isBlock && right.properties.isBlock && left.properties.isBlock && !bot_right.properties.isBlock && !top_right.properties.isBlock && !top_left.properties.isBlock && bot_left.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_left_corner_full_t')
                }

                if (
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !left.properties.isBlock && right.properties.isBlock &&
                    top.properties.isBlock && bottom.properties.isBlock &&
                    !top_right.properties.isBlock && !bot_left.properties.isBlock &&
                    top_left.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_empty_junction_left')
                }

                if ( // white
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    top_left.properties.isBlock && !top.properties.isBlock && !top_right.properties.isBlock &&
                    left.properties.isBlock && right.properties.isBlock &&
                    !bot_left.properties.isBlock && bottom.properties.isBlock && bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('angle_next_door_left')
                }

                if ( // red
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    top_right.properties.isBlock &&
                    !left.properties.isBlock &&
                    right.properties.isBlock &&
                    !bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_left_corner_thin')
                }

                if ( // green
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    !top_right.properties.isBlock &&
                    !left.properties.isBlock &&
                    right.properties.isBlock &&
                    bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_left_corner_thin')
                }

                if ( // blue
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    !top_right.properties.isBlock &&
                    !left.properties.isBlock &&
                    right.properties.isBlock &&
                    bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_empty_junction_left')
                }

                if ( // yellow
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    !top.properties.isBlock &&
                    top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    right.properties.isBlock &&
                    !bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_right_corner_full_t')
                }

                if ( // violet
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    top_left.properties.isBlock &&
                    !top.properties.isBlock &&
                    !top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    right.properties.isBlock &&
                    bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_left_corner_full_t')
                }

                if ( // yellow / white
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    top_left.properties.isBlock &&
                    !top.properties.isBlock &&
                    !top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    right.properties.isBlock &&
                    !bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                }

                if ( // new one
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    !top.properties.isBlock &&
                    top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    right.properties.isBlock &&
                    bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('angle_next_door_right')
                }

                if ( // new new
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    !right.properties.isBlock &&
                    !bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_right_corner_thin')
                }

                if ( // new new new
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    top_right.properties.isBlock &&
                    !left.properties.isBlock &&
                    right.properties.isBlock &&
                    bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_left_corner_thin')
                }

                if ( // new new new new
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    !top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    !right.properties.isBlock &&
                    bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    !bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_empty_junction_right')
                }

                if ( // n5
                    top && right && bottom && left &&
                    top_left && top_right && bot_right && bot_left &&

                    top_left.properties.isBlock &&
                    top.properties.isBlock &&
                    !top_right.properties.isBlock &&
                    left.properties.isBlock &&
                    !right.properties.isBlock &&
                    !bot_left.properties.isBlock &&
                    bottom.properties.isBlock &&
                    bot_right.properties.isBlock
                ) {
                    // tile.properties.isMarked = true
                    tile.textures = []
                    tile.textures.push('middle_right_corner_thin')
                }





            }


            if (tile.properties.isStairsDown) {
                tile.textures.push('stairs_down')


            }

            if (tile.properties.isStairsUp) {
                tile.textures.push('stairs_up')


            }

        })

        let wallsComp = createGraphics(pixelsPerTile * mapSize, pixelsPerTile * mapSize)
        wallsComp.background(0, 0)

        this.floorMap.forEach(tile => {

            tile.textures.forEach(texture => {
                let w = pixelsPerTile
                let x = tile.x * pixelsPerTile
                let y = tile.y * pixelsPerTile
                let txtr = spritesImgs.get(spritesData[texture].x, spritesData[texture].y, pixelsPerTile, pixelsPerTile)
                wallsComp.image(txtr, x, y, w, w)
            })

        })

        bigBgComp.image(wallsComp, 0, 0, pixelsPerTile * mapSize, pixelsPerTile * mapSize)

        this.background = bigBgComp.get(0, 0, pixelsPerTile * mapSize, pixelsPerTile * mapSize)




    }

    generateDoors() {
        this.floorMap.forEach(tile => {

            let top = this.floorMap[this.findTileByCoords(tile.x, tile.y - 1)]
            let right = this.floorMap[this.findTileByCoords(tile.x + 1, tile.y)]
            let bottom = this.floorMap[this.findTileByCoords(tile.x, tile.y + 1)]
            let left = this.floorMap[this.findTileByCoords(tile.x - 1, tile.y)]

            if (tile.properties.isDoor) {
                let door
                if (top.properties.isBlock && bottom.properties.isBlock) {
                    door = new Door(tile.x, tile.y, this.depth, 'vertical')
                }

                if (left.properties.isBlock && right.properties.isBlock) {
                    door = new Door(tile.x, tile.y, this.depth, 'horizontal')
                }
                this.doors.push(door)
            }
        })


    }

    spawnEnemies() {

        let howManyEnemies = this.walkableSurface / enemyTrs

        for (let i = 0; i < howManyEnemies; i++) {
            let picker = fxrand_float()
            let picked
            if (picker < 0.6) {
                picked = 'Rat'
                ratsCount++
            } else if (picker >= 0.6 && picker < 0.9) {
                picked = 'Skeleton'
                skeletonsCount++
            } else {
                picked = 'Imp'
                impCount++
            }
            let enemy = new Character(picked)
            this.enemies.push(enemy)
        }


        this.enemies.forEach(enemy => {
            enemy.spawn((this.depth + 1) * -1)
        })
    }

    clearEnemies() {
        this.enemies.forEach(enemy => {
            let distFromPlayer = dist(enemy.posX, enemy.posY, player.posX, player.posY)
            if (distFromPlayer < 8) {

                enemiesCount--

                enemy.status = 'dead'
                enemy.health = 0

                // console.log('Removed',enemy)

                switch (enemy.characterType) {
                    case 'Rat':
                        ratsCount--
                        break
                    case 'Skeleton':
                        skeletonsCount--
                        break
                    case 'Imp':
                        impCount--
                        break
                }
            }
        })
    }


}