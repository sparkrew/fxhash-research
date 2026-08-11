class MainObject extends SceneItem {

    startPoints = [];

    constructor(x, y, width, height) {
        super(x, y, width, height);

        // gets the params
        $fx.params(this.GetParams());

        this.automaton = new ExperimentalCellular(x, y, width, height);
        this.automaton.resolution = $fx.getParam("cellSize");
        this.automaton.coherence = $fx.getParam("coherence");

        this.enableAnimation = true;
        if (isPreview()) {
            this.enableAnimation = false;
        }

        // attribute moved in setup to get color
    }

    Preload() {
    }

    Setup() {

        // set the attributes
        $fx.features(this.GetAttributes())

        angleMode(DEGREES);
        this.automaton.Setup();
        this.space = 8;
        this.seedCount = $fx.getParam("seedCount");

        for (let y = 0; y < this.automaton.rows; y++) {
            for (let x = 0; x < this.automaton.cols; x++) {
                this.automaton.grid[x][y].state = 0;
            }
        }

        for (let index = 0; index < this.seedCount; index++) {
            let seedPosX = fxrandIntMax(this.automaton.rows);
            let seedPosY = fxrandIntMax(this.automaton.cols);
                        
            while(this.automaton.grid[seedPosX][seedPosY].state != 0){
                seedPosX = fxrandIntMax(this.automaton.rows);
                seedPosY = fxrandIntMax(this.automaton.cols);
            }

            let seed = this.automaton.grid[seedPosX][seedPosY];

            seed.state = 100;
            let color = $fx.getParam("color" + index);
            let hsl = ColorTools.RgbToHsl(color.arr.rgb);
            seed.hue = hsl[0];
        }

        this.currentFrame = 0;

        this.pulseEnable = true;
        if (isPreview()) {
            for (let index = 0; index < 750; index++) {
                this.Next()
            }
        }
    }

    OnClick(position) {
        if (this.pulseEnable) {
            //return;
        }

        let gridX = (position.x / this.width) * this.automaton.cols;
        let gridY = (position.y / this.height) * this.automaton.rows;
        gridX = Math.floor(gridX);
        gridY = Math.floor(gridY);

        let cols0 = this.automaton.grid[gridX];
        if (cols0 != null) {
            let cell0 = cols0[gridY];
            if (cell0 != null && cell0.state == 3) {
                console.debug("Cell click " + gridX + "," + gridY);
                cell0.state = 1;
            }
        }
    }

    GetAttributes() {


        let params = this.GetParams();
        let result = {
        }

        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            let obj = $fx.getParam(element.id);

            // for colors
            if (obj.hex != null) {
                let hsl = ColorTools.RgbToHsl(obj.arr.rgb);
                obj = hsl[0]
            }

            result[element.name] = obj;
        }

        return result;
    }

    GetParams() {

        let result = [
            {
                id: "cellSize",
                name: "Cell Size",
                type: "number",
                options: {
                    min: 8,
                    max: 16,
                    step: 2,
                }
            },
            {
                id: "coherence",
                name: "Freedom",
                type: "number",
                options: {
                    min: 8,
                    max: 32,
                    step: 1,
                }
            },
            {
                id: "seedCount",
                name: "Seeds",
                type: "number",
                options: {
                    min: 1,
                    max: 7,
                    step: 1,
                }
            },
            {
                id: "invertSaturation",
                name: "InvertSaturation",
                type: "boolean",
                default: false
            },
            {
                id: "color0",
                name: "Seed 1",
                type: "color",
            },
            {
                id: "color1",
                name: "Seed 2",
                type: "color",
            },
            {
                id: "color2",
                name: "Seed 3",
                type: "color",
            },
            {
                id: "color3",
                name: "Seed 4",
                type: "color",
            },
            {
                id: "color4",
                name: "Seed 5",
                type: "color",
            },
            {
                id: "color5",
                name: "Seed 6",
                type: "color",
            },
            {
                id: "color6",
                name: "Seed 7",
                type: "color",
            },
        ];

        return result;
    }

    Next() {

        this.automaton.Next();

        this.needRefresh = true;

        this.currentFrame++;
    }

    Draw(renderer) {
        this.automaton.Draw(renderer);

        if (!isPreview()) {
            this.Next();
        }
    }
}
