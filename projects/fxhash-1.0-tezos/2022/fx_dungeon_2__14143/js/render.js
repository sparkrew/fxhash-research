function renderGame(mode, curr) {
    switch (mode) {
        case 0:
            renderEntireMap(curr)
            break
        case 1:
            renderPlaying(curr)
            break
    }

}

function renderEntireMap(curr) {


    noSmooth()
    image(floors[curr].background, 0, 0, canvasSize, canvasSize)

    floors[curr].doors.forEach(door => {
        door.show()
    })

    floors[curr].floorMap.forEach(tile => {
        tile.show()
    });

    floors[curr].enemies.forEach(enemy => {
        enemy.show()
    });

    player.show()


    redrawCanvas = false

}



function renderPlaying(curr) {

    let x = (((player.posX * pixelsPerTile) + renderOffsetX) - ((renderW * pixelsPerTile) / 2))
    let y = (((player.posY * pixelsPerTile) + renderOffsetY) - ((renderH * pixelsPerTile) / 2))



    gameScreen.image(consoleImg, 0, 0, realPixelsWidth, realPixelsWidth)


    let bgImg = floors[curr].background.get(x + 4, y + 4, renderW * pixelsPerTile, renderH * pixelsPerTile)
    renderScreen.background('#303234')
    renderOverlay.clear()
    renderScreen.image(bgImg, 0, 0)

    floors[curr].doors.forEach(door => {
        if(
            door.posX > player.posX - renderW/2 -1 &&
            door.posY > player.posY - renderH/2 -1 &&
            door.posX < player.posX + renderW/2 +1 &&
            door.posY < player.posY + renderH/2 +1
            ) {
            door.show()
        }
    })

    floors[curr].enemies.forEach(enemy => {
        if(
            enemy.posX > player.posX - renderW/2 -1 &&
            enemy.posY > player.posY - renderH/2 -1 &&
            enemy.posX < player.posX + renderW/2 +1 &&
            enemy.posY < player.posY + renderH/2 +1
            ) {
            enemy.show()
            enemy.checkHealth()
            enemy.alert()
        }
    });

    floors[curr].floorMap.forEach(tile => {
        if(
            tile.x > player.posX - renderW/2 -1 &&
            tile.y > player.posY - renderH/2 -1 &&
            tile.x < player.posX + renderW/2 +1 &&
            tile.y < player.posY + renderH/2 +1
            ) {
            tile.show()
        }
    });



    player.show()
    player.visitTiles()

    renderScreen.image(fovs[~~(fovIndex % fovs.length)],0,0)
    fovIndex += 0.05

    player.checkHealth()
    showHPs()

    switch (dialogOpen) {
        case 'character':
            displayCharacterDialog()
            break
        case 'reset':
            displayResetDialog()
            break
        case 'death':
            displayDeathDialog()
            break
        case 'victory':
            displayVictoryDialog()
            break
    }

    gameScreen.image(renderScreen, offsetX, offsetY)
    gameScreen.image(renderOverlay, offsetX, offsetY)

    noSmooth()
    image(gameScreen, 0, 0, canvasSize, canvasSize)

    redrawCanvas = false

}

function showHPs() {

    let hp = ~~map(player.health, 0, player.maxHealth, 0, 61, true)

    renderOverlay.image(hpbar, 0, 0)
    renderOverlay.push()
    renderOverlay.noStroke()

    renderOverlay.fill('#825555')
    renderOverlay.rect(9, 2, 61, 3)

    if (player.health > 0) {
        renderOverlay.fill('#738447')
        renderOverlay.rect(9, 2, hp, 3)

        renderOverlay.fill('#94ad50')
        renderOverlay.rect(9, 2, hp - 1, 2)
    }

    renderOverlay.pop()
}

/* -------------------------------------------------------------------------- */
/*                                   events                                   */
/* -------------------------------------------------------------------------- */

function windowResized() {
    canvasSize = getCanvasSize()
    tileWidth = (canvasSize / mapSize)
    resizeCanvas(canvasSize, canvasSize)
    clear()
    console.log("Redrawing..")
    redrawCanvas = true
}
