function pickCharacterClass() {
    let rollForClass = fxrand_float()
    let result

    if (rollForClass < .5) {
        result = 'Netrunner'
    } else if (rollForClass >= .5 && rollForClass < .85) {
        result = 'Street kid'
    } else {
        result = 'Samurai'
    }

    return result
}

class Character {
    constructor(characterType) {
        this.characterType = characterType
        this.isPlayer = false

        this.posX
        this.posY
        this.spawnX
        this.spawnY

        this.activated = false
        this.alertPlayed = false
        this.atkPlayed = false
        this.toggle = false

        this.speed = {
            'idle': globalSpeed,
            'walking': globalSpeed * 4,
            'attacking': globalSpeed * 6,
            'dying': globalSpeed * .25,
            'healing': globalSpeed * 4,
            'takingDmg': globalSpeed * 4,
            'dead': globalSpeed
        }

        switch (this.characterType) {
            case 'Netrunner':
                this.health = 100
                this.maxHealth = 100
                this.def = 4
                this.atk = 12
                this.atkSpeed = 0.03
                break
            case 'Samurai':
                this.health = 70
                this.maxHealth = 70
                this.def = 2
                this.atk = 20
                this.atkSpeed = 0.04
                break
            case 'Street kid':
                this.health = 130
                this.maxHealth = 130
                this.def = 6
                this.atk = 10
                this.atkSpeed = 0.02
                break
            case 'Rat':
                this.health = fxrand_int(15,35)
                this.maxHealth = this.health
                this.def = fxrand_int(0,2)
                this.atk = fxrand_int(1,5)
                this.atkSpeed = 0.05
                break
            case 'Skeleton':
                this.health = fxrand_int(35,55)
                this.maxHealth = this.health
                this.def = fxrand_int(2,4)
                this.atk = fxrand_int(3,8)
                this.atkSpeed = 0.03
                break
            case 'Imp':
                this.health = fxrand_int(55,75)
                this.maxHealth = this.health
                this.def = fxrand_int(3,5)
                this.atk = fxrand_int(5,10)
                this.atkSpeed = 0.04
                break
        }


        this.atkCounter = 0

        this.status = 'idle'
        this.facing = 'left'

        this.animations = charactersData.class[this.characterType] // change with actual character class
        this.animationindex = 0
        this.framesLeft = inBetweenFrames // how many steps

    }

    spawn(floorN) {
        let characterSpawned = false
        let spawnCellCandidate

        while (!characterSpawned) {

            let currentMap = floors[floorN].floorMap
            spawnCellCandidate = fxrand_arr(currentMap)

            if (!spawnCellCandidate.properties.isBlock && !spawnCellCandidate.properties.isProp && !spawnCellCandidate.properties.isDoor && !spawnCellCandidate.properties.isConsumable && !spawnCellCandidate.properties.isNotSpawnable) {
                characterSpawned = true
                spawnCellCandidate.properties.isNotSpawnable = true
                enemiesCount++
            }

        }

        this.posX = spawnCellCandidate.x
        this.posY = spawnCellCandidate.y
        this.spawnX = this.posX
        this.spawnY = this.posY

    }

    checkHealth() {
        if (this.health <= 0 && this.status != 'dead') {
            this.status = 'dying'
        }
    }

    alert() {
        let curr = floors[currentFloor]
        let center = curr.floorMap[curr.findTileByCoords(this.posX, this.posY)]
        this.atkCounter += this.atkSpeed


        let x, y, w
        switch (renderMode) {
            case 0:
                switch (this.isPlayer) {
                    case true:
                        w = tileWidth
                        x = this.posX * w
                        y = (this.posY * w) - w / 4
                        break
                    case false:
                        break
                }
                break
            case 1:
                switch (this.isPlayer) {
                    case true:
                        w = pixelsPerTile
                        x = (renderW * w) / 2
                        y = (renderH * w) / 2 - w / 4
                        break
                    case false:
                        w = pixelsPerTile
                        x = ~~((renderW * w) / 2)
                        y = ~~((renderW * w) / 2)

                        let x1 = this.posX - player.posX
                        let y1 = this.posY - player.posY

                        x = (x1 * w) + x - renderOffsetX
                        y = (y1 * w) + y - renderOffsetY - w / 4
                        break
                }
                break
        }

        if (center.visibility.visible && this.status != 'dead') {
            this.activated = true
            if(!this.alertPlayed && bgMusic.isPlaying()) {
                alertSound.setVolume(0.5)
                alertSound.play()
                this.alertPlayed = true
            }
        }


        if (this.activated && this.status != 'dead') {
            noSmooth()
            if (renderMode == 0) {
                image(alertImg, x, y, w, w)
            } else {
                renderOverlay.image(alertImg, x, y - 13, pixelsPerTile, pixelsPerTile)
            }

            let isThereThePlayerNearby = this.isThePlayerNearby()

            if (isThereThePlayerNearby) {
                if (~~(this.atkCounter % 2) == 0 && this.status == 'idle' && this.toggle == false) {
                    this.attackPlayer()
                    this.toggle = true
                } else if (~~(this.atkCounter % 2) == 1) {
                    this.toggle = false
                }
            } else {
                if (~~(this.atkCounter % 2) == 0 && this.status == 'idle' && this.toggle == false) {
                    this.findPlayer()
                    this.toggle = true
                } else if (~~(this.atkCounter % 2) == 1) {
                    this.toggle = false
                }
            }
        }

    }

    moveTowardsPlayer(target) {
        for (let i = 0; i < 1; i++) {
            if (target.previous) {
                // current.previous.properties.isMarked = true
                if (target.previous.x > this.posX) { // move right
                    this.move('right')
                } else if (target.previous.x < this.posX) { // move left
                    this.move('left')
                } else if (target.previous.y > this.posY) { // move down
                    this.move('down')
                } else if (target.previous.y < this.posY) { // move up
                    this.move('up')
                }
            }
        }
    }

    findPlayer() {
        // find a path to the player. if any, move towards the next step


        let found = false

        let openSet = []
        let closedSet = []

        let currFlr = floors[currentFloor]
        let thisEnemy = currFlr.floorMap[currFlr.findTileByCoords(this.posX, this.posY)]
        let playerTile = currFlr.floorMap[currFlr.findTileByCoords(player.posX, player.posY)]

        openSet.push(thisEnemy)

        let winner = 0
        let current = thisEnemy

        while (!found) {

            if (openSet.length > 0) {
                for (let i = 0; i < openSet.length; i++) {
                    if (openSet[i].f < openSet[winner].f) {
                        winner = i
                    }
                }

                current = openSet[winner]


                if (current == playerTile) {
                    found = true
                    this.moveTowardsPlayer(current)
                    return
                }

                removeFromArray(openSet, current)
                closedSet.push(current)

                let neighbors = []

                let top = currFlr.floorMap[currFlr.findTileByCoords(current.x, current.y - 1)]
                let right = currFlr.floorMap[currFlr.findTileByCoords(current.x + 1, current.y)]
                let bottom = currFlr.floorMap[currFlr.findTileByCoords(current.x, current.y + 1)]
                let left = currFlr.floorMap[currFlr.findTileByCoords(current.x - 1, current.y)]

                // scan for enemies
                let enemyTop = currFlr.enemies.find(enemy => enemy.posX == top.x && enemy.posY == top.y)
                let enemyRight = currFlr.enemies.find(enemy => enemy.posX == right.x && enemy.posY == right.y)
                let enemyBottom = currFlr.enemies.find(enemy => enemy.posX == bottom.x && enemy.posY == bottom.y)
                let enemyLeft = currFlr.enemies.find(enemy => enemy.posX == left.x && enemy.posY == left.y)


                if (top && !top.properties.isBlock && (!top.properties.isProp || (top.properties.isProp && top.properties.propHealth == 0)) && !top.properties.isDoor && !enemyTop) {
                    neighbors.push(top)
                }
                if (right && !right.properties.isBlock && (!right.properties.isProp || (right.properties.isProp && right.properties.propHealth == 0)) && !right.properties.isDoor && !enemyRight) {
                    neighbors.push(right)
                }
                if (bottom && !bottom.properties.isBlock && (!bottom.properties.isProp || (bottom.properties.isProp && bottom.properties.propHealth == 0)) && !bottom.properties.isDoor && !enemyBottom) {
                    neighbors.push(bottom)
                }
                if (left && !left.properties.isBlock && (!left.properties.isProp || (left.properties.isProp && left.properties.propHealth == 0)) && !left.properties.isDoor && !enemyLeft) {
                    neighbors.push(left)
                }

                for (let i = 0; i < neighbors.length; i++) {
                    let neighbor = neighbors[i]

                    if (!closedSet.includes(neighbor)) {
                        let tempG = current.g + findHeuristic(neighbor, current)

                        let newPath = false
                        if (openSet.includes(neighbor)) {
                            if (tempG < neighbor.g) {
                                neighbor.g = tempG
                                newPath = true
                            }
                        } else {
                            neighbor.g = tempG
                            newPath = true
                            openSet.push(neighbor)
                        }

                        if (newPath) {
                            neighbor.h = findHeuristic(neighbor, playerTile)
                            neighbor.f = neighbor.g + neighbor.h
                            neighbor.previous = current
                        }

                    }
                }
            } else {
                return;
            }
        }

    }

    attackPlayer() {
        let curr = floors[currentFloor]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]

        if (
            (top && top.x == player.posX && top.y == player.posY)
        ) {
            this.facing = 'up'
            this.attack('up')
            this.status = 'attacking'
        } else if (
            (right && right.x == player.posX && right.y == player.posY)
        ) {
            this.facing = 'right'
            this.attack('right')
            this.status = 'attacking'
        } else if (
            (left && left.x == player.posX && left.y == player.posY)
        ) {
            this.facing = 'left'
            this.attack('left')
            this.status = 'attacking'
        } else if (
            (bottom && bottom.x == player.posX && bottom.y == player.posY)
        ) {
            this.facing = 'down'
            this.attack('down')
            this.status = 'attacking'
        } else {
            return
        }
    }

    isThePlayerNearby() {
        let curr = floors[currentFloor]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]

        if (
            (top && top.x == player.posX && top.y == player.posY) ||
            (right && right.x == player.posX && right.y == player.posY) ||
            (bottom && bottom.x == player.posX && bottom.y == player.posY) ||
            (left && left.x == player.posX && left.y == player.posY)
        ) {
            return true
        } else {
            return false
        }
    }

    show() {
        let x, y, w

        if(this.isPlayer){
            this.atkCounter += this.atkSpeed
            if(~~(this.atkCounter % 2) == 1){
                this.toggle = false
            }
        }

        switch (renderMode) {
            case 0:
                switch (this.isPlayer) {
                    case true:
                        w = tileWidth
                        x = this.posX * w
                        y = (this.posY * w) - w / 4
                        break
                    case false:
                        break
                }
                break
            case 1:
                switch (this.isPlayer) {
                    case true:
                        w = pixelsPerTile
                        x = (renderW * w) / 2
                        y = (renderH * w) / 2 - w / 4
                        break
                    case false:
                        w = pixelsPerTile
                        x = ~~((renderW * w) / 2)
                        y = ~~((renderW * w) / 2)

                        let x1 = this.posX - player.posX
                        let y1 = this.posY - player.posY

                        x = (x1 * w) + x - renderOffsetX
                        y = (y1 * w) + y - renderOffsetY - w / 4
                        break
                }
                break
        }

        if (this.spriteComp) this.spriteComp.remove()
        this.spriteComp = createGraphics(pixelsPerTile, pixelsPerTile)
        this.spriteComp.background(0, 0)
        let animationLength = this.animations[this.status][this.facing].length
        let index = Math.floor(this.animationindex) % animationLength
        let thisSprite = charactersImgs.get(this.animations[this.status][this.facing][index].x, this.animations[this.status][this.facing][index].y, pixelsPerTile, pixelsPerTile)


        switch (this.status) {
            case 'idle':
            case 'dead':
                this.spriteComp.image(thisSprite, 0, 0, pixelsPerTile, pixelsPerTile)
                noSmooth()
                if (renderMode == 0) {
                    image(this.spriteComp, x, y, w, w)
                } else {
                    renderScreen.image(this.spriteComp, x - 4, y - 4, pixelsPerTile, pixelsPerTile)
                }
                break
            case 'walking':
                if (this.framesLeft > 0) {
                    this.framesLeft--
                    this.spriteComp.image(thisSprite, 0, 0, pixelsPerTile, pixelsPerTile)

                    switch (this.facing) { // move the camera depending on direction
                        case 'left':
                            if (renderMode == 0) {
                                x += ((tileWidth / inBetweenFrames) * this.framesLeft)
                            } else {
                                if (this.isPlayer) renderOffsetX = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft)
                                if (!this.isPlayer) spriteOffsetX = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft)
                            }
                            break
                        case 'up':
                            if (renderMode == 0) {
                                y += ((tileWidth / inBetweenFrames) * this.framesLeft)
                            } else {
                                if (this.isPlayer) renderOffsetY = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft)
                                if (!this.isPlayer) spriteOffsetY = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft)
                            }
                            break
                        case 'right':
                            if (renderMode == 0) {
                                x -= ((tileWidth / inBetweenFrames) * this.framesLeft)
                            } else {
                                if (this.isPlayer) renderOffsetX = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft) * -1
                                if (!this.isPlayer) spriteOffsetX = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft) * -1
                            }
                            break
                        case 'down':
                            if (renderMode == 0) {
                                y -= ((tileWidth / inBetweenFrames) * this.framesLeft)
                            } else {
                                if (this.isPlayer) renderOffsetY = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft) * -1
                                if (!this.isPlayer) spriteOffsetY = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft) * -1
                            }
                            break
                    }

                    noSmooth()
                    if (renderMode == 0) {
                        image(this.spriteComp, x, y, w, w)
                    } else {
                        renderScreen.image(this.spriteComp, x - 4, y - 4, pixelsPerTile, pixelsPerTile)
                    }

                    if (this.framesLeft == 1) {
                        this.framesLeft = inBetweenFrames
                        this.status = 'idle'
                    }
                }
                break

            case 'attacking':
                if (this.framesLeft > 0) {
                    this.framesLeft--
                    this.spriteComp.image(thisSprite, 0, 0, pixelsPerTile, pixelsPerTile)

                    switch (this.facing) { // move the camera depending on direction
                        case 'left':
                            if (renderMode == 0) {
                                x -= ((tileWidth / inBetweenFrames) * this.framesLeft / 2)
                            } else {
                                renderOffsetX = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft / 2) * -1
                            }
                            break
                        case 'up':
                            if (renderMode == 0) {
                                y -= ((tileWidth / inBetweenFrames) * this.framesLeft / 2)
                            } else {
                                renderOffsetY = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft / 2) * -1
                            }
                            break
                        case 'right':
                            if (renderMode == 0) {
                                x += ((tileWidth / inBetweenFrames) * this.framesLeft / 2)
                            } else {
                                renderOffsetX = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft / 2)
                            }
                            break
                        case 'down':
                            if (renderMode == 0) {
                                y += ((tileWidth / inBetweenFrames) * this.framesLeft / 2)
                            } else {
                                renderOffsetY = ~~((pixelsPerTile / inBetweenFrames) * this.framesLeft / 2)
                            }
                            break
                    }

                    noSmooth()
                    if (renderMode == 0) {
                        image(this.spriteComp, x, y, w, w)
                    } else {
                        renderScreen.image(this.spriteComp, x - 4, y - 4, pixelsPerTile, pixelsPerTile)
                    }

                    if (this.framesLeft == 1) {
                        this.framesLeft = inBetweenFrames
                        renderOffsetX = 0
                        renderOffsetY = 0
                        this.status = 'idle'
                        this.atkPlayed = false
                    }
                }

                break
            case 'healing':
            case 'takingDmg':
                if (this.framesLeft > 0) {
                    this.framesLeft--
                    this.spriteComp.image(thisSprite, 0, 0, pixelsPerTile, pixelsPerTile)

                    noSmooth()
                    if (renderMode == 0) {
                        image(this.spriteComp, x, y, w, w)
                    } else {
                        renderScreen.image(this.spriteComp, x - 4, y - 4, pixelsPerTile, pixelsPerTile)
                    }

                    if (this.framesLeft == 1) {
                        this.framesLeft = inBetweenFrames
                        renderOffsetX = 0
                        renderOffsetY = 0
                        this.status = 'idle'
                    }
                }
                break
            case 'dying':
                if (this.framesLeft > 0) {
                    this.framesLeft--
                    this.spriteComp.image(thisSprite, 0, 0, pixelsPerTile, pixelsPerTile)

                    noSmooth()
                    if (renderMode == 0) {
                        image(this.spriteComp, x, y, w, w)
                    } else {
                        renderScreen.image(this.spriteComp, x - 4, y - 4, pixelsPerTile, pixelsPerTile)
                    }

                    if (this.framesLeft == 1) {
                        this.framesLeft = inBetweenFrames
                        if(bgMusic.isPlaying() && !deadSound.isPlaying()){
                            deadSound.setVolume(0.8)
                            deadSound.play()
                        }
                        this.status = 'dead'
                    }


                }

                break
        }

        this.animationindex += this.speed[this.status]

    }

    move(direction) {
        let curr = floors[currentFloor]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]
        let next



        switch (direction) {
            case 'up':
                next = top
                break
            case 'right':
                next = right
                break
            case 'down':
                next = bottom
                break
            case 'left':
                next = left
                break

        }

        let isThereADoorHere = next.properties.isDoor
        let isThereAPropHere = next.properties.isProp

        let enemy = curr.enemies.find(enemy => enemy.posX == next.x && enemy.posY == next.y)
        let isThereAnEnemyHere = false
        if (enemy != undefined && enemy.health > 0) isThereAnEnemyHere = true


        if (isThereADoorHere) {
            let doorObj
            doorObj = curr.doors.find(door => door.posX == next.x && door.posY == next.y)
            if (doorObj.health == 0) {
                isThereADoorHere = false
            }
        }

        if (isThereAPropHere) {
            if (next.properties.propHealth == 0) {
                isThereAPropHere = false
            }
        }

        if (next && !next.properties.isBlock && !isThereAPropHere && !isThereADoorHere && !isThereAnEnemyHere) {
            
            if (this.isPlayer) this.unrevealTiles()
            switch (direction) {
                case 'up':
                    if (this.isPlayer) renderOffsetY = pixelsPerTile
                    if (!this.isPlayer) spriteOffsetY = pixelsPerTile
                    this.posY -= 1
                    break
                case 'right':
                    if (this.isPlayer) renderOffsetX = -pixelsPerTile
                    if (!this.isPlayer) spriteOffsetX = -pixelsPerTile
                    this.posX += 1
                    break
                case 'down':
                    if (this.isPlayer) renderOffsetY = -pixelsPerTile
                    if (!this.isPlayer) spriteOffsetY = -pixelsPerTile
                    this.posY += 1
                    break
                case 'left':
                    if (this.isPlayer) renderOffsetX = pixelsPerTile
                    if (this.isPlayer) spriteOffsetX = pixelsPerTile
                    this.posX -= 1
                    break
            }
            this.status = 'walking'
            // if(bgMusic.isPlaying() && !walkingSound.isPlaying()) {
            //     walkingSound.setVolume(0.2)
            //     walkingSound.play()
            // }
            if (this.isPlayer) this.revealTiles()
        } else if (
            this.facing == direction && this.status == 'idle' && ~~(this.atkCounter % 2) == 0 && this.toggle == false && 
            (next.properties.isDoor || next.properties.isProp || ((isThereAnEnemyHere && this.isPlayer && !enemy.isPlayer) || (isThereAnEnemyHere && !this.isPlayer && enemy.isPlayer)))
            ) {
            this.status = 'attacking'
            this.attack(direction)
            this.toggle = true
        }

        this.facing = direction
    }

    attack(direction) {
        let curr = floors[currentFloor]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]
        let next

        if(!this.atkPlayed && bgMusic.isPlaying()) {
            attackSound.setVolume(0.8)
            attackSound.play()
            this.atkPlayed = true
        }

        switch (direction) {
            case 'up':
                next = top
                break
            case 'right':
                next = right
                break
            case 'down':
                next = bottom
                break
            case 'left':
                next = left
                break

        }

        let isThereADoorHere = next.properties.isDoor
        let isThereAPropHere = next.properties.isProp

        if (isThereAPropHere) {
            if (next.properties.propHealth == 0) {
                isThereAPropHere = false
            }
        }

        // assign a character to the defender var

        let defender
        if (!this.isPlayer) {
            defender = player
        } else {
            defender = curr.enemies.find(enemy => enemy.posX == next.x && enemy.posY == next.y)
        }


        if (isThereADoorHere) { // check if door
            let doorObj = curr.doors.find(door => door.posX == next.x && door.posY == next.y)
            if (doorObj.health > 0) {
                if(doorDmg - this.def > 0) {
                    player.health -= doorDmg - this.def
                } else {
                    player.health -= 1
                }
                doorObj.health--
                if (doorObj.health == 0) next.properties.isDoor = false
            }
        } else if (isThereAPropHere) { // check if prop
            if (next.properties.propHealth > 0) {
                if(propDmg - this.def > 0) {
                    player.health -= propDmg - this.def
                } else {
                    player.health -= 1
                }
                next.properties.propHealth--
            }
        } else { // must be an eneny
            if (defender.health > 0) {
                if (this.atk - defender.def > 0) {
                    defender.health -= this.atk - defender.def
                } else {
                    defender.health -= 1
                }
                defender.status = 'takingDmg'
                switch (direction) {
                    case 'up':
                        defender.facing = 'down'
                        break
                    case 'right':
                        defender.facing = 'left'
                        break
                    case 'down':
                        defender.facing = 'up'
                        break
                    case 'left':
                        defender.facing = 'right'
                        break
        
                }
                
            }
        }

    }

    doAction() {
        let curr = floors[currentFloor]
        let below = curr.floorMap[curr.findTileByCoords(this.posX, this.posY)]

        if (below.properties.isStairsDown) {
            this.descend()
        } else if (below.properties.isStairsUp) {
            this.ascend()
        } else if (below.properties.isConsumable) {
            below.properties.isConsumable = false
            this.status = 'healing'
            if(bgMusic.isPlaying() && !pickupSound.isPlaying()){
                    pickupSound.setVolume(0.5)
                    pickupSound.play()
            }
            if (below.consumableType == 'small_potion') {
                if (player.health < player.maxHealth - smallPot) {
                    player.health += smallPot
                } else if (player.health >= player.maxHealth - smallPot) {
                    player.health = player.maxHealth
                }
            } else if (below.consumableType == 'medium_potion') {
                if (player.health < player.maxHealth - midPot) {
                    player.health += midPot
                } else if (player.health >= player.maxHealth - midPot) {
                    player.health = player.maxHealth
                }
            } else if (below.consumableType == 'big_potion') {
                if (player.health < player.maxHealth - bigPot) {
                    player.health += bigPot
                } else if (player.health >= player.maxHealth - bigPot) {
                    player.health = player.maxHealth
                }
            }
        }
    }

    descend() {
        if(bgMusic.isPlaying() && !stairsSound.isPlaying()){
            stairsSound.setVolume(0.8)
            stairsSound.play()
        }
        currentFloor++ // replace with animations / functions here
        let newSpawn = floors[currentFloor].floorMap.find(t => t.properties.isStairsUp)
        this.posX = newSpawn.x
        this.posY = newSpawn.y
        player.revealTiles()
    }

    ascend() {
        if (currentFloor != 0) {
            if(bgMusic.isPlaying() && !stairsSound.isPlaying()){
                stairsSound.setVolume(0.8)
                stairsSound.play()
            }
            currentFloor--
            let newSpawn = floors[currentFloor].floorMap.find(t => t.properties.isStairsDown)
            this.posX = newSpawn.x
            this.posY = newSpawn.y
            player.revealTiles()
        } else if (currentFloor == 0) {
            if(bgMusic.isPlaying() && !victorySound.isPlaying()){
                victorySound.setVolume(0.8)
                victorySound.play()
              }
            dialogOpen = 'victory'
        }

    }
    
    visitTiles() {
        let curr = floors[currentFloor]
        let center = curr.floorMap[curr.findTileByCoords(this.posX, this.posY)]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let toptop = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 2)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let rightright = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let bottombottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 2)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]
        let topleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY - 1)]
        let topright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY - 1)]
        let bottomleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY + 1)]
        let bottomright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY + 1)]
        let leftleft = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY)]

        let toptopleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY - 2)]
        let toptopright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY - 2)]
        let rightrighttop = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY - 1)]
        let rightrightbottom = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY + 1)]
        let bottombottomright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY + 2)]
        let bottombottomleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY + 2)]
        let leftlefttop = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY - 1)]
        let leftleftbottom = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY + 1)]

        if (toptopleft) toptopleft.visibility.visited = true
        if (toptopright) toptopright.visibility.visited = true
        if (rightrighttop) rightrighttop.visibility.visited = true
        if (rightrightbottom) rightrightbottom.visibility.visited = true
        if (bottombottomright) bottombottomright.visibility.visited = true
        if (bottombottomleft) bottombottomleft.visibility.visited = true
        if (leftlefttop) leftlefttop.visibility.visited = true
        if (leftleftbottom) leftleftbottom.visibility.visited = true

        if (center) center.visibility.visited = true
        if (top) top.visibility.visited = true
        if (right) right.visibility.visited = true
        if (bottom) bottom.visibility.visited = true
        if (left) left.visibility.visited = true
        if (topleft) topleft.visibility.visited = true
        if (topright) topright.visibility.visited = true
        if (bottomleft) bottomleft.visibility.visited = true
        if (bottomright) bottomright.visibility.visited = true
        if (leftleft) leftleft.visibility.visited = true
        if (rightright) rightright.visibility.visited = true
        if (toptop) toptop.visibility.visited = true
        if (bottombottom) bottombottom.visibility.visited = true

    }

    revealTiles() {
        let curr = floors[currentFloor]
        let center = curr.floorMap[curr.findTileByCoords(this.posX, this.posY)]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let toptop = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 2)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let rightright = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let bottombottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 2)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]
        let topleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY - 1)]
        let topright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY - 1)]
        let bottomleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY + 1)]
        let bottomright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY + 1)]
        let leftleft = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY)]

        let toptopleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY - 2)]
        let toptopright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY - 2)]
        let rightrighttop = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY - 1)]
        let rightrightbottom = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY + 1)]
        let bottombottomright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY + 2)]
        let bottombottomleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY + 2)]
        let leftlefttop = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY - 1)]
        let leftleftbottom = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY + 1)]

        if (toptopleft) toptopleft.visibility.visible = true
        if (toptopright) toptopright.visibility.visible = true
        if (rightrighttop) rightrighttop.visibility.visible = true
        if (rightrightbottom) rightrightbottom.visibility.visible = true
        if (bottombottomright) bottombottomright.visibility.visible = true
        if (bottombottomleft) bottombottomleft.visibility.visible = true
        if (leftlefttop) leftlefttop.visibility.visible = true
        if (leftleftbottom) leftleftbottom.visibility.visible = true

        if (center) center.visibility.visible = true
        if (top) top.visibility.visible = true
        if (right) right.visibility.visible = true
        if (bottom) bottom.visibility.visible = true
        if (left) left.visibility.visible = true
        if (topleft) topleft.visibility.visible = true
        if (topright) topright.visibility.visible = true
        if (bottomleft) bottomleft.visibility.visible = true
        if (bottomright) bottomright.visibility.visible = true
        if (leftleft) leftleft.visibility.visible = true
        if (rightright) rightright.visibility.visible = true
        if (toptop) toptop.visibility.visible = true
        if (bottombottom) bottombottom.visibility.visible = true

    }

    unrevealTiles() {
        let curr = floors[currentFloor]
        let center = curr.floorMap[curr.findTileByCoords(this.posX, this.posY)]
        let top = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 1)]
        let toptop = curr.floorMap[curr.findTileByCoords(this.posX, this.posY - 2)]
        let right = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY)]
        let rightright = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY)]
        let bottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 1)]
        let bottombottom = curr.floorMap[curr.findTileByCoords(this.posX, this.posY + 2)]
        let left = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY)]
        let topleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY - 1)]
        let topright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY - 1)]
        let bottomleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY + 1)]
        let bottomright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY + 1)]
        let leftleft = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY)]

        let toptopleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY - 2)]
        let toptopright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY - 2)]
        let rightrighttop = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY - 1)]
        let rightrightbottom = curr.floorMap[curr.findTileByCoords(this.posX + 2, this.posY + 1)]
        let bottombottomright = curr.floorMap[curr.findTileByCoords(this.posX + 1, this.posY + 2)]
        let bottombottomleft = curr.floorMap[curr.findTileByCoords(this.posX - 1, this.posY + 2)]
        let leftlefttop = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY - 1)]
        let leftleftbottom = curr.floorMap[curr.findTileByCoords(this.posX - 2, this.posY + 1)]

        if (toptopleft) toptopleft.visibility.visible = false
        if (toptopright) toptopright.visibility.visible = false
        if (rightrighttop) rightrighttop.visibility.visible = false
        if (rightrightbottom) rightrightbottom.visibility.visible = false
        if (bottombottomright) bottombottomright.visibility.visible = false
        if (bottombottomleft) bottombottomleft.visibility.visible = false
        if (leftlefttop) leftlefttop.visibility.visible = false
        if (leftleftbottom) leftleftbottom.visibility.visible = false

        if (center) center.visibility.visible = false
        if (top) top.visibility.visible = false
        if (right) right.visibility.visible = false
        if (bottom) bottom.visibility.visible = false
        if (left) left.visibility.visible = false
        if (topleft) topleft.visibility.visible = false
        if (topright) topright.visibility.visible = false
        if (bottomleft) bottomleft.visibility.visible = false
        if (bottomright) bottomright.visibility.visible = false
        if (leftleft) leftleft.visibility.visible = false
        if (rightright) rightright.visibility.visible = false
        if (toptop) toptop.visibility.visible = false
        if (bottombottom) bottombottom.visibility.visible = false

    }
}