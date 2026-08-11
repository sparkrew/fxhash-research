let pixelsPerTile = 8

class Tile {
    constructor(x, y, depth) {
        this.x = x
        this.y = y

        //this.f = 0
        //this.g = 0
        //this.h = 0
        this.previous = undefined
        this.occupied = false

        this.depth = depth
        this.properties = {
            isBlock: false,
            isVisited: false,
            isRoom: false,
            isCorridor: false,
            isDoor: false,
            isProp: false,
            propTexture: '',
            propHealth: 1,
            isReachable: false,
            isStairsDown: false,
            isStairsUp: false,
            isConsumable: false,
            isNotSpawnable: false,
            isMarked: false // used for debugging, to highlight some tiles
        }
        this.consumableType = '',
            this.animationIndex = 0
        this.visibility = {
            visited: false,
            visible: false,
        }
        this.textures = []
        this.neighbors = [] // used for pathfinding later on
    }

    show() {

        this.animationIndex += 0.04

        let w = tileWidth
        let x = this.x * w
        let y = this.y * w

        if (renderMode == 1) {
            w = pixelsPerTile

            x = ((this.x - player.posX) * w) + (~~((renderW * w) / 2)) - renderOffsetX - pixelsPerTile / 2
            y = ((this.y - player.posY) * w) + (~~((renderW * w) / 2)) - renderOffsetY - pixelsPerTile / 2
        }

        if (this.properties.isProp) {
            let texture = propsImgs.get(
                propsData[this.properties.propTexture][this.properties.propHealth].x,
                propsData[this.properties.propTexture][this.properties.propHealth].y,
                pixelsPerTile,
                pixelsPerTile
            )
            noSmooth()
            if (renderMode == 0) {
                image(texture, x, y, w, w)
            } else if (renderMode == 1) {
                renderScreen.image(texture, x, y, w, w)
            }
        }

        if (this.properties.isMarked) {
            renderOverlay.fill(255, 0, 0, 100)
            renderOverlay.noStroke()
            renderOverlay.rect(x, y, w)
        }

        if (this.properties.isConsumable) {
            let texture = consumablesImgs.get(
                consumablesData[this.consumableType][~~(this.animationIndex % 2)].x,
                consumablesData[this.consumableType][~~(this.animationIndex % 2)].y,
                pixelsPerTile,
                pixelsPerTile
            )
            switch (renderMode) {
                case 0:
                    image(texture, x, y - 2, w, w)
                    break
                case 1:
                    renderScreen.image(texture, x, y - 2, w, w)
                    break
            }
        }

        if (!this.visibility.visited && !this.visibility.visible) {
            switch (renderMode) {
                case 0:
                    fill(48,50,52, 75)
                    noStroke()
                    rect(x, y, w)
                    break
                case 1:
                    renderScreen.fill(48,50,52, 255)
                    renderScreen.noStroke()
                    renderScreen.rect(x, y, w)
                    break
            }

        }

        if (this.visibility.visited && !this.visibility.visible) {
                switch (renderMode) {
                    case 0:
                        fill(48,50,52, 25)
                        noStroke()
                        rect(x, y, w)
                        break
                    case 1:
                        renderScreen.fill(48,50,52, 150)
                        renderScreen.noStroke()
                        renderScreen.rect(x, y, w)
                        break
                }
        }
    }
}