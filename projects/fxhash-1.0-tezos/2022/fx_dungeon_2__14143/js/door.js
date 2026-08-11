class Door {
    constructor(x, y, depth, axis) {
        this.posX = x
        this.posY = y
        this.depth = depth
        this.floorIndex = (this.depth +1)*-1
        this.axis = axis
        this.startingHealth = fxrand_arr([2,3])
        this.health = this.startingHealth
        
        this.tile = floors[this.floorIndex].floorMap[floors[this.floorIndex].findTileByCoords(this.posX,this.posY)]
    }

    show() {

        let x1, y1, x2, y2

        let w = tileWidth
        let x = this.posX * w
        let y = this.posY * w

        if (renderMode == 1) {
            w = pixelsPerTile
            x = ~~((renderW * w) / 2)
            y = ~~((renderW * w) / 2)

            x1 = this.posX - player.posX
            y1 = this.posY - player.posY

            x2 = (x1 * w) + x - renderOffsetX
            y2 = (y1 * w) + y - renderOffsetY
        }

        let texture = doorsImgs.get(
            doorsData[this.axis][this.health].x,
            doorsData[this.axis][this.health].y,
            doorsData[this.axis][this.health].w * pixelsPerTile,
            doorsData[this.axis][this.health].h * pixelsPerTile
        )



        let tH = doorsData[this.axis][this.health].h * w
        let tW = doorsData[this.axis][this.health].w * w


        if (renderMode == 0) {
            noSmooth()
            image(texture, x - w, y - w, tW, tH)
        } else {
            noSmooth()
            renderScreen.image(texture, x2 - tW / 2, y2 - tH / 2, tW, tH)
        }



    }
}