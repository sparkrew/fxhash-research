class BaseColor {
    r = 0;
    g = 0;
    b = 0;
    a = 255;

    constructor(r0, g0, b0) {
        this.r = r0;
        this.g = g0;
        this.b = b0;
    }

    // call p5js fill with current color
    Fill() {
        fill(this.r, this.g, this.b, this.a);
    }

    toString() {
        return "(" + this.r + "," + this.g + "," + this.b + ")"
    }
}

class SceneItem {
    // bounding box of the item
    x;
    y;
    width;
    height;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // only work in Setup or after
    CenterPoint() {
        return createVector(this.x + this.width / 2, this.y + this.height / 2);
    }

    // bounding box hitTest
    HitTest(position) {
        //console.log("MousePos" + position.x.toFixed(0) + "," + position.y.toFixed(0));
        //console.log(
        //    "bBox" + this.x.toFixed(0) +
        //    "," + this.y.toFixed(0) +
        //    "," + this.width.toFixed(0) +
        //    "," + this.height.toFixed(0));

        return (position.x >= this.x &&
            position.y >= this.y &&
            position.x <= this.x + this.width &&
            position.y <= this.y + this.height);
    }

    // need override
    Draw(renderer) {
        renderer.background("magenta");
        renderer.text("Draw not implemented", this.x + this.width / 2, this.y + this.height / 2);
    }
}

// version with an image
class ImageItem extends SceneItem {
    color1 = null;
    image1 = null;
    zoom = 1;

    constructor(x, y, image1) {
        super(x, y, 1, 1);

        this.image1 = image1;

        if (this.image1 != null) {
            this.width = this.image1.width;
            this.height = this.image1.height
        }
    }

    Draw(renderer) {
        renderer.push();
        renderer.translate(this.x, this.y);
        if (this.color1 != null) {
            renderer.tint(this.color1);
        }

        renderer.scale(this.zoom, this.zoom);
        renderer.image(this.image1, 0, 0);
        renderer.pop();
    }
}

// need to be declared after p5 library
class DisplayEngine2d {
    canvas;

    zoomBy = 1;
    xOffset = 0;
    yOffset = 0;
    currentFrameRate = 30;
    witdh;
    height;

    scaleToCanvas = true;

    viewportScaleX;
    viewportScaleY;

    // items must inherit SceneItem
    items = [];

    needRefresh = true;

    constructor() {
    }

    CreateCanvas(width, height, mode) {

        this.witdh = width;
        this.height = height;

        this.canvas = createCanvas(width, height);

        // not working
        //this.canvas.elt.getContext("2d", {willReadFrequently: true})        
        //this.canvas.elt.willReadFrequently = true;
        if (mode != null) {
            this.renderer = createGraphics(width, height, WEBGL);
        }
        else {
            this.renderer = createGraphics(width, height);
        }

        // need to be done in each renderer
        this.renderer.angleMode(DEGREES);

        frameRate(this.currentFrameRate);
        this.OnWindowResized();
    }

    OnWindowResized() {
        if (!this.scaleToCanvas) {
            resizeCanvas(this.witdh, this.height);
            return;
        }

        let ratio = windowWidth / windowHeight;

        if (ratio < 1) {
            resizeCanvas(windowWidth, windowWidth);
        }
        else {
            resizeCanvas(windowHeight, windowHeight);
        }
    }

    GetMousePixelPosition() {

        const vector = createVector();
        vector.x = mouseX / this.viewportScaleX;

        // seems offsetTop not needed
        vector.y = mouseY / this.viewportScaleY;

        return vector;
    }

    // call this function if any changes have been made
    Refresh() {
        this.needRefresh = true;
    }

    // draw all the items calling their draw method
    DrawItems() {

        if (this.needRefresh) {
            // recompute the objects

            // test mire
            if (this.items.length == 0) {
                this.renderer.background("magenta");
                this.renderer.ellipse(this.witdh / 2, this.height / 2, this.witdh / 4, this.height / 4);
            }

            // draw unscalled in the renderer
            for (let i = 0; i < this.items.length; i++) {
                this.renderer.push();
                this.items[i].Draw(this.renderer);
                this.renderer.pop();
            }

            this.needRefresh = false;
        }

        this.viewportScaleX = width / this.witdh;
        this.viewportScaleY = height / this.height;
        push();
        // scale the renderer
        scale(this.viewportScaleX, this.viewportScaleY);
        image(this.renderer, 0, 0, this.witdh, this.height);
        pop();
    }

    // pick item at current hit box
    PickItem() {
        let vector = this.GetMousePixelPosition();
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].HitTest(vector)) {
                return this.items[i];
            }
        }

        return null;
    }
}