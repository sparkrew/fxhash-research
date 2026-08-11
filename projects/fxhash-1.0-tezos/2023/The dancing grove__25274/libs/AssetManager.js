class Tile {
    imagesFiles = [];
    imagesLoaded = [];
    attributes = [];
    manager;
    indexOfTile;

    // the main image file for compatibility
    imageFile;

    rotation = 0;

    // -1 for flip
    scaleFlip = [1, 1]

    // make a copy of the tile
    Copy() {
        let newTile = new Tile();
        newTile.imagesFiles = [...this.imagesFiles];
        newTile.attributes = [...this.attributes];
        newTile.manager = this.manager;
        newTile.indexOfTile = this.indexOfTile;
        newTile.imageFile = this.imageFile;

        return newTile;
    }

    // wait for the setup to load it
    LoadFile() {
        for (let j = 0; j < this.imagesFiles.length; j++) {
            let currentImage = this.imagesFiles[j];

            if (this.manager.imageCache[currentImage] == null) {
                this.manager.imageCache[currentImage] = loadImage(currentImage);
            }

            this.imagesLoaded[j] = this.manager.imageCache[currentImage];
        }

        this.imageFile = this.imagesFiles[0];
        this.imageLoaded = this.imagesLoaded[0];
    }

    Match(attributes) {

        let ok = true;
        for (let j = 0; j < attributes.length; j++) {
            if (!this.attributes.includes(attributes[j])) {
                ok = false;
                break;
            }
        }

        return ok;
    }
}

class AssetManager {
    tileList = [];

    // cache to avoir loading image 2 times
    imageCache = {};

    // shallow copy of the asset manager
    Copy(){
        let result = new AssetManager();

        // will allow the copy to have it's own list
        result.tileList = [...this.tileList];

        // we want the same
        result.imageCache = this.imageCache;

        return result;
    }

    GetMatchingTiles(attributes) {
        let result = [];
        for (let i = 0; i < this.tileList.length; i++) {


            if (this.tileList[i].Match(attributes)) {
                // use a clone
                // image ref will be in the cache and not copied
                result.push(this.tileList[i]);
            }
        }
        return result;
    }

    AddTile(filename, attrib) {
        let tile = new Tile();
        tile.imagesFiles[0] = filename;
        tile.attributes = attrib;
        tile.manager = this;
        this.tileList.push(tile);
    }

    AddTileWithLayers(filename, attrib, start, count) {
        let tile = new Tile();
        tile.attributes = attrib;
        tile.manager = this;

        for (let i = start; i <= count; i++) {
            tile.imagesFiles.push(filename.replace("#", i));
        }

        this.tileList.push(tile);
    }

    AddTiles(filename, start, end, attrib) {
        for (let i = start; i <= end; i++) {
            this.AddTile(filename.replace("?", i), attrib);
        }
    }

    AddTilesWithLayers(filename, start, end, attrib, startLayer, layerCount) {
        for (let i = start; i <= end; i++) {
            this.AddTileWithLayers(filename.replace("?", i), attrib, startLayer, layerCount);
        }
    }
}