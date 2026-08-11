// use this file to add assets specific to the project
const tilesImagePath = "./images/";

const assetManager = new AssetManager();

assetManager.AddTilesWithLayers(tilesImagePath + "single?_layer#.png", 1, 3, ["connect0"], 1, 2);
assetManager.AddTilesWithLayers(tilesImagePath + "line?_layer#.png", 1, 5, ["connect2line"], 1, 2);
assetManager.AddTilesWithLayers(tilesImagePath + "end?_layer#.png", 1, 6, ["connect1"], 1, 2);
assetManager.AddTilesWithLayers(tilesImagePath + "turn?_layer#.png", 1, 4, ["connect2turn"], 1, 2);
assetManager.AddTilesWithLayers(tilesImagePath + "connect3_?_layer#.png", 1, 6, ["connect3"], 1, 2);
assetManager.AddTilesWithLayers(tilesImagePath + "connect4_?_layer#.png", 1, 4, ["connect4"], 1, 2);

assetManager.AddTilesWithLayers(tilesImagePath + "reactor?_layer#.png", 1, 1, ["Reactor_connect3"], 1, 2);
assetManager.AddTilesWithLayers(tilesImagePath + "reactorTurn?_layer#.png", 1, 1, ["Reactor_connect2turn", "Reactor_connect2line"], 1, 2);

//assetManager.AddTile(tilesImagePath + "fruit_Yellowberry_grey.png", ["fruit", "Yellowberry"]);
