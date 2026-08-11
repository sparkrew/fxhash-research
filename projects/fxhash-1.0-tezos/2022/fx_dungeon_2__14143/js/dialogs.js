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

    // reset all important variables here
    // reset player position

    floors.forEach(floor => {
        floor.doors.forEach(door => {
            door.health = door.startingHealth
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
    renderOverlay.fill("#e8d2a8")



    let n1 = player.health
    let n2 = player.maxHealth
    n1  = String(n1).padStart(3, "0")
    n2 = String(n2).padStart(3, "0")


    renderOverlay.text(n1 + "/" + n2, 2, 13)

    let w
    switch (player.characterType) {
        case 'Warrior':
            w = 31+5
            break
        case 'Assassin':
            w = 38+2
            break
        case 'Berserker':
            w = 43+3
            break
    }

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 17, w, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 16, w, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#e8d2a8")
    let currentClass = player.characterType
    renderOverlay.text(currentClass.toUpperCase(), 2, 23)

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 27, 39, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 26, 39, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#e8d2a8")
    let currentDepth = "Floor: " + floors[currentFloor].depth
    renderOverlay.text(currentDepth.toUpperCase(), 2, 33)

    renderOverlay.fill(51, 65)
    renderOverlay.rect(2, 37, 64, 8)
    renderOverlay.fill(51)
    renderOverlay.rect(1, 36, 64, 8)
    renderOverlay.textFont(fontFamily);
    renderOverlay.textSize(8)
    renderOverlay.fill("#e8d2a8")
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