class MainObject extends SceneItem {

    resolution = 8;
    enableAnimation = false;
    zoom = 1;
    zoomCenter;

    itemTypes = new Set();

    constructor(x, y, width, height) {
        super(x, y, width, height);

        // gets the params
        $fx.params(this.GetParams());

        this.resolution = $fx.getParam("resolutionX");

        this.mainMatrix = new WaveFunctionMatrix(x, y, width, height, this.MakeAssetManager());

        this.Restart();

        this.PreProcess();

        let bigTry = 0;
        while (!this.mainMatrix.Run(100)) {
            console.warn("Backtrack failure. Start from scratch");
            this.Restart();

            bigTry++;
            if (bigTry > 100) {
                break;
            }
        }

        this.PostProcess();

        // set the attributes
        $fx.features(this.GetAttributes())
    }

    MakeAssetManager() {
        let tilesImagePath = "./images/";
        let assetManager = new AssetManager();

        let featuresUnlocked = 0;
        if ($fx.getParam("hasEyes")) {
            this.itemTypes.add("eye");
            assetManager.AddTiles(tilesImagePath + "eye?.png", 1, 26, ["AAAAAAAA", "eye", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasEyes") && $fx.getParam("hasCyborg")) {
            this.itemTypes.add("eye");
            this.itemTypes.add("circuit");
            assetManager.AddTiles(tilesImagePath + "eyeCamera?.png", 1, 14, ["AAAAAAAA", "eye", "circuit", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasNoses")) {
            this.itemTypes.add("nose");
            assetManager.AddTiles(tilesImagePath + "nose?.png", 1, 19, ["AAAAAAAA", "nose", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasNoses") && $fx.getParam("hasEyes")) {
            this.itemTypes.add("nose");
            this.itemTypes.add("eye");
            assetManager.AddTiles(tilesImagePath + "noseEye?.png", 1, 7, ["AAnnAAAA", "nose", "eye", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasNoses") && $fx.getParam("hasEyes") && $fx.getParam("hasCyborg")) {
            this.itemTypes.add("nose");
            this.itemTypes.add("eye");
            this.itemTypes.add("circuit");
            assetManager.AddTiles(tilesImagePath + "noseEyeCamera?.png", 1, 5, ["AAnnAAAA", "eye", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasEars")) {
            this.itemTypes.add("ear");
            assetManager.AddTiles(tilesImagePath + "ear?.png", 1, 9, ["AAAAAAAA", "ear", "flipH"]);
            //assetManager.AddTiles(tilesImagePath + "/2/earL?.png", 1, 1, ["AAAAAAAA"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasMouth")) {
            this.itemTypes.add("mouth");
            assetManager.AddTiles(tilesImagePath + "moutHEnd?.png", 1, 25, ["AABBAAAA", "mouth", "flipH"]);
            assetManager.AddTiles(tilesImagePath + "lipsEnd?.png", 1, 8, ["AAllAAAA", "mouth", "flipH"]);
            assetManager.AddTiles(tilesImagePath + "lips?.png", 1, 5, ["AAAAAAAA", "mouth", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasBrain")) {
            this.itemTypes.add("brain");
            assetManager.AddTiles(tilesImagePath + "brain?.png", 1, 14, ["AAccAAAA", "brain", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasTattoo")) {
            this.itemTypes.add("tattoo");
            assetManager.AddTiles(tilesImagePath + "tattoo?.png", 1, 43, ["AAAAAAAA", "tattoo", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasArm")) {
            this.itemTypes.add("arm");
            assetManager.AddTiles(tilesImagePath + "arm?.png", 1, 5, ["AAAAAAAA", "arm", "flipH"]);
            featuresUnlocked++;
        }

        if ($fx.getParam("hasCyborg")) {
            this.itemTypes.add("circuit");
            assetManager.AddTiles(tilesImagePath + "circuit?.png", 1, 11, ["AAAAAAAA", "circuit"]);
            featuresUnlocked++;
        }

        this.features = featuresUnlocked;

        assetManager.AddTiles(tilesImagePath + "skin?.png", 1, 20, ["AAAAAAAA", "flipH", "flipV"]);

        if (featuresUnlocked <= 1) {
            // only use if there is not to many features
            assetManager.AddTiles(tilesImagePath + "skinAsymH?.png", 1, 8, ["AAaaAAAA", "flipH"]);
            assetManager.AddTiles(tilesImagePath + "skinAsymV?.png", 1, 10, ["aaAAAAAA", "flipV"]);
        }

        return assetManager;
    }

    PreProcess() {

        // will garantie checked attrib are there
        let types = Array.from(this.itemTypes);
        for (let index = 0; index < types.length; index++) {
            const element = types[index];            
        
            let r = fxrandIntMax(this.mainMatrix.rows);
            let c = fxrandIntMax(this.mainMatrix.columns);

            if(this.mainMatrix.matrix[r] == null){
                console.debug(this.mainMatrix);
                console.debug(r + " " + c);
            }

            // only if not already set by somebody else
            if (this.mainMatrix.matrix[r][c].attribAssign == null) {
                // create this property we can't rely on the attrib list
                this.mainMatrix.matrix[r][c].attribAssign = true;

                // don't allow an object on either side
                if (c > 0) {
                    this.mainMatrix.matrix[r][c - 1].attribAssign = true;
                }

                if (c < this.mainMatrix.columns - 1) {
                    this.mainMatrix.matrix[r][c + 1].attribAssign = true;
                }

                this.mainMatrix.CollapseToAttrib(r, c, element);
                console.debug("Mandatory " + element + " added to " + r + "," + c);
            }
            else {

                // find the next available
                let found =false;
                for (let r2 = 0; r2 < this.mainMatrix.rows; r2++) {
                    for (let c2 = 0; c2 < this.mainMatrix.columns; c2++) {
                        if (!this.mainMatrix.matrix[r2][c2].attribAssign) {
                            // create this property we can't rely on the attrib list
                            this.mainMatrix.matrix[r2][c2].attribAssign = true;

                            // don't allow an object on either side
                            if (c2 > 0) {
                                this.mainMatrix.matrix[r2][c2 - 1].attribAssign = true;
                            }

                            if (c2 < this.mainMatrix.columns - 1) {
                                this.mainMatrix.matrix[r2][c2 + 1].attribAssign = true;
                            }

                            this.mainMatrix.CollapseToAttrib(r2, c2, element);
                            console.debug("Mandatory " + element + " added to " + r + "," + c + " first location failed");
                            found = true;
                            break;
                        }
                    }

                    if(found)
                        break;
                }
            }
        };
    }

    PostProcess() {
        this.mainMatrix.ApplyToAllBlock(this.PostProcessBlock);
    }

    PostProcessBlock(block) {
    }

    Restart() {
        this.mainMatrix.Generate(this.resolution, this.resolution);
    }

    Preload() {
        this.mainMatrix.Preload();
    }

    Setup() {
        angleMode(DEGREES);

        this.isGrayscale = $fx.getParam("grayscale_id");
        //this.isErode = $fx.getParam("erode_id");                
    }

    GetAttributes() {

        let result = {
            //"Tries": this.mainMatrix.backTackCount,
            "Resolution": this.resolution,
            "Features Unlocked": this.features,
        }

        return result;
    }

    GetParams() {

        let result = [{
            id: "resolutionX",
            name: "resolution",
            type: "number",
            default: 8,
            options: {
                min: 8,
                max: 16,
                step: 8,
            },
        },
        {
            id: "grayscale_id",
            name: "Grayscale",
            default: false,
            type: "boolean",
        },
        {
            id: "hasEyes",
            name: "Eyes",
            default: true,
            type: "boolean",
        },
        {
            id: "hasMouth",
            name: "Mouths",
            default: true,
            type: "boolean",
        },
        {
            id: "hasCyborg",
            name: "Circuits",
            default: true,
            type: "boolean",
        },
        {
            id: "hasNoses",
            name: "Noses",
            default: true,
            type: "boolean",
        },
        {
            id: "hasEars",
            name: "Ears",
            default: true,
            type: "boolean",
        },
        {
            id: "hasTattoo",
            name: "Tattoos",
            default: true,
            type: "boolean",
        },
        {
            id: "hasBrain",
            name: "Brain",
            default: true,
            type: "boolean",
        },
        ];

        return result;
    }

    Draw(renderer) {
        //renderer.pixelDensity(16);        
        renderer.background("green");
        //
        // if (this.mainMatrix.rows < 24) {
        //     renderer.noSmooth();
        // }
        renderer.push();
        if (this.zoomCenter != null) {
            renderer.translate(this.zoomCenter.x, this.zoomCenter.y);
            renderer.scale(this.zoom);
            renderer.translate(-this.zoomCenter.x, -this.zoomCenter.y);
        }

        this.mainMatrix.Draw(renderer);
        if (this.isGrayscale) {
            renderer.filter(GRAY);
        }

        //if (this.isErode) {
        //renderer.filter(DILATE,1);
        //}

        renderer.pop();
    }
}
