class Ball {
    constructor(x, y, radius, color, time, binding, blackhole) {
        this.x = x || 0;
        this.y = y || 0;
        this.originalX = x || 0;
        this.originalY = y || 0;
        this.vx = 0;
        this.vy = 0;
        this.radius = radius;
        this.color = color;
        this.friction = 0.9;
        this.springFactor = 0.005;
        this.index = 1;
        this.indexY = 1;
        this.binding = binding;
        this.blackhole = blackhole || false;
    }
    setPos(x, y) {
        this.x = x;
        this.y = y;
    }
    think(mouse) {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        if (this.blackhole === true) {
            if (dist < 60) {
                let angle = Math.atan2(dy, dx);
                let tx = mouse.x + Math.cos(angle) * 10;
                let ty = mouse.y + Math.sin(angle) * 10;
                this.vx += tx - this.x;
                this.vy += ty - this.y;
            }
        } else {
            if (dist < 30) {
                let angle = Math.atan2(dy, dx);
                let tx = mouse.x + Math.cos(angle) * 30;
                let ty = mouse.y + Math.sin(angle) * 30;
                this.vx += tx - this.x;
                this.vy += ty - this.y;
            }
        }
        if (this.binding === false) {
            let dx1 = -(this.x - this.originalX);
            let dy1 = -(this.y - this.originalY);
            this.vx += dx1 * this.springFactor;
            this.vy += dy1 * this.springFactor;
        };

        this.vx *= this.friction;
        this.vy *= this.friction;
        if (this.x > 5 && this.x < 800 - 5) {
            this.x += this.vx * this.index;
        }
        if (this.x <= 5) {
            this.x += 2;
            this.index = -this.index;
            this.x += this.vx * this.index;
        }
        if (this.x >= 800 - 5) {
            this.x -= 2;
            this.index = -this.index;
            this.x += this.vx * this.index;
        }

        if (this.y > 2 && this.y < 800 - 5) {
            this.y += this.vy * this.indexY;
        }
        if (this.y <= 5) {
            this.y += 2;
            this.indexY = -this.indexY;
            this.y += this.vy * this.indexY;
        }
        if (this.y >= 800 - 5) {
            this.y -= 2;
            this.indexY = -this.indexY;
            this.y += this.vy * this.indexY;
        }
    }
    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}