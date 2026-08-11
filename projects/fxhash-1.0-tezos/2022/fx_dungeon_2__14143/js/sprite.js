class Sprite {
    constructor(animation, x, y, speed) {
        this.animation = animation
        this.x = x
        this.y = y
        this.speed = speed
        this.len = this.animation.length
        this.index = 0
        this.w = this.animation[0].width
    }

    show() {
        let index = floor(this.index) % this.len
        image(this.animation[index], this.x, this.y)
    }

    move() {
        this.index += this.speed
        this.x += this.speed * 5

        if(this.x > width){
            this.x = -this.w
        }
    }
}