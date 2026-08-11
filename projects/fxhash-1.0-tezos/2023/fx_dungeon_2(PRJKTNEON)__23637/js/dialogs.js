function displayResetDialog() {
    renderOverlay.fill(51, 150)
    renderOverlay.noStroke()
    renderOverlay.rect(0, 0, renderW * pixelsPerTile)
    renderOverlay.fill(255)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.text("Are you sure you want to restart? Y / N", 8, 8, renderW * pixelsPerTile - 8, realPixelsWidth - 8)
}

function resetGame() {
    print("Restarting game..")
    clear();
    deathA = 25
    redrawCanvas = true
    
    deadPrompt = false

    // reset all important variables here
    // reset player position

    floors.forEach(floor => {
        floor.doors.forEach(door => {
            door.health = door.startingHealth
            
            // find the tile the door was standing on, and set it back to block or door

            let doorTile = floor.floorMap[floor.findTileByCoords(door.posX, door.posY)]
            doorTile.properties.isDoor = true

        })
        floor.floorMap.forEach(tile => {
            tile.visibility.visible = false
            tile.visibility.visited = false
            if (tile.properties.isProp) {
                tile.properties.propHealth = 1
            }
        })

        floor.enemies.forEach(enemy => {
            enemy.status = 'idle'
            enemy.activated = false
            enemy.health = enemy.maxHealth
            enemy.posX = enemy.spawnX
            enemy.posY = enemy.spawnY
        })

        // make enemies near player dead
        let lastFloor = floors.length - 1
        floors[lastFloor].enemies.forEach(enemy => {
            let distFromPlayer = dist(enemy.posX, enemy.posY, player.posX, player.posY)
            if (distFromPlayer < 8) {
                enemy.status = 'dead'
                enemy.health = 0
            }
        })
    })

    player.posX = player.spawnX
    player.posY = player.spawnY
    player.health = player.maxHealth
    player.status = 'idle'

    currentFloor = floors.length - 1
    player.revealTiles()

    if(bgMusic.isPlaying() && !stairsSound.isPlaying()){
        stairsSound.setVolume(0.8)
        stairsSound.play()
}
}

function displayDeathDialog() {
    renderOverlay.noStroke()
    renderOverlay.fill(128, 54, 54, deathA)
    renderOverlay.rect(0, 0, renderW * pixelsPerTile)
    if(deathA<125){
        deathA++
    }
    
    renderOverlay.rect(0, 0, renderW * pixelsPerTile)
    renderOverlay.fill(255)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.text("GAME OVER! Press R to restart the game", 8, 8, renderW * pixelsPerTile - 8, realPixelsWidth - 8)
}

function displayVictoryDialog() {
    renderOverlay.noStroke()
    renderOverlay.fill(252, 186, 3, 150)
    renderOverlay.rect(0, 0, renderW * pixelsPerTile)
    renderOverlay.fill(51, deathA)
    deathA++
    renderOverlay.rect(0, 0, renderW * pixelsPerTile)
    renderOverlay.fill(255)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.text("YOU WON! Press R to restart the game", 8, 8, renderW * pixelsPerTile - 8, realPixelsWidth - 8)
}

function displayCharacterDialog() {
    renderOverlay.noStroke()
    renderOverlay.fill(51, 75)
    renderOverlay.rect(0, 0, realPixelsWidth)

    showHPs()

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 7, 33, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 6, 33, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#8cce3b")



    let n1 = player.health
    let n2 = player.maxHealth
    n1  = String(n1).padStart(3, "0")
    n2 = String(n2).padStart(3, "0")


    renderOverlay.text(n1 + "/" + n2, 2, 13)

    let w
    switch (player.characterType) {
        case 'Netrunner':
            w = 31+5+11
            break
        case 'Samurai':
            w = 38-1
            break
        case 'Street kid':
            w = 43+6
            break
    }

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 17, w, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 16, w, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#8cce3b")
    let currentClass = player.characterType
    renderOverlay.text(currentClass.toUpperCase(), 2, 23)

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 27, 39, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 26, 39, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#8cce3b")
    let currentDepth = "Floor: " + floors[currentFloor].depth
    renderOverlay.text(currentDepth.toUpperCase(), 2, 33)

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 37, 64, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 36, 64, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#8cce3b")
    let aliveEnemies = 0
    floors.forEach(floor => {
        floor.enemies.forEach(enemy => {
            if(enemy.health > 0) {
                aliveEnemies ++
            }
        })
    })
    let currentEnemies = "Enemies: " + String(aliveEnemies).padStart(2, "0")+ "/" +String(enemiesCount-1).padStart(2, "0")
    renderOverlay.text(currentEnemies.toUpperCase(), 2, 43)
}