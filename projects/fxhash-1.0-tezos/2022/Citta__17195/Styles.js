function MonoChrome() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = getWeightedfromArray([60, 40], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.02//random(0.01,0.03);
    let domainColorIndex =  IntRandRange(6,8)
    let coloringStyle = "Fixed"//getWeightedfromArray([10,90],["Mixed","Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.05);

    let transmitterColorStyle = "Fixed"
    let transmitterPaletteIndex = 5;
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = "Fixed"
    let fogStyleIndex = 6
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5],[0,1,2,3,4,5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])
    let hasRecursion = getWeightedfromArray([50, 50], [true, false])
    let recursionDepthColor = getWeightedfromArray([30, 70], [true, false])

    let xCount = IntRandRange(15,55);
    let yCount = xCount
    let spacing = IntRandRange(40,100)

    


    let grid = new IsoGrid(width / 2, height * 0.6, spacing * width / 1000, xCount, yCount)
    grid.divisor = 1.15;
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, IntRandRange(5,40), randomFromArray([10, 10, 0, 1, 2, 20, 30, 40]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 40]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = 1
        growth.grow();

        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(0, 0, 100, 0.9), color(0, 0, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = monoDomainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = monoDomainPalettes[IntRandRange(0, 1)]
            cellColorNames = "";
            for (let i = 0; i < 2; i++) {

                cellColorNames += monoDomainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }
if(hasRecursion){
           growth.cubes.forEach((element, index) => {
            if (index > growth.depth * 0) {
                let l2Growth = new Grower(element, 10, randomFromArray([10, 20, 30, 40, 0]))
                l2Growth.scalingStyle = "fromScaler"
                l2Growth.scaler = random(1, 0.8)
                l2Growth.scaleArray = [5, 10, 5, 10,20]
                l2Growth.grow()
                let l2Dec = new Decorator(l2Growth, undefined, undefined)
                l2Dec.colorByDomain(monoDomainPalettes[6], { enabled: true, probability: 1, palette: domainPalettes[2].triangle, blendMod: ADD })
                l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 8 });
               if(recursionDepthColor){ l2Dec.addDepth(random(0.01, 0.1), BLEND, 180, DepthColors[IntRandRange(0, DepthColors.length-1)])}
               else{
                l2Dec.addDepth(random(0.01, 0.1), BLEND, 180, DepthColors[6])
               }
            }
        })

    }
     
    }

    let features = {
        "Name": "MC-00001",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": hasRecursion,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}







function MonoBlocks() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = getWeightedfromArray([60, 40], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.02;
    let domainColorIndex =  IntRandRange(0,monoDomainPalettes.length);
    let coloringStyle = "Fixed";
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.05);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = "Fixed";
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5],[0,1,2,3,4,5]];
    let fogPair = randomFromArray(pairs);

    let hasBeacon = getWeightedfromArray([70, 30], [true, false]);
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false]);
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false]);


    let xCount = 35;
    let yCount = xCount
    let spacing = 60;

    let radialDepthSettings = RadialGradientPosSettings[2];
    radialGradient(radialDepthSettings.opacity, MULTIPLY, radialDepthSettings, radialDepthMaskColors[0]);


    let grid = new IsoGrid(width / 2, height * 0.6, spacing * width / 1000, xCount, yCount);
    grid.divisor = random(1.5,2.5);
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount;
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 20) * width / 1000, "up");

        ic.origin = "center";
        ic.init();
      
        let growth = new Grower(ic, random(20,40), randomFromArray([10, 10, 0, 1, 2, 20, 30, 40]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"]);
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle;
        growth.scaleArray = [30, 15, 5, 5, 40];
        growth.scaler = random(0.95, 1);
        growth.cubeProb = 1;
        growth.grow();

        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(0, 0, 100, 0.9), color(0, 0, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = monoDomainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = monoDomainPalettes[IntRandRange(0, 1)]
            cellColorNames = "";
            for (let i = 0; i < 2; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }
        
    }

    let features = {
        "Name": "MB-12245",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor.toFixed(2),
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength":(fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}




function Multimono() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = true//getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex = IntRandRange(0, monoDomainPalettes.length);
    let coloringStyle ="Mixed" //getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])
    let hasRecursion = false//getWeightedfromArray([20,80],[true,false]);
    let palStyle = IntRandRange(0,3); //recursive palette selector

    let xCount = 35//IntRandRange(15,35);
    let yCount = xCount
    let spacing = 40//IntRandRange(50,100)

    


    let grid = new IsoGrid(width / 2, height * 0.6, spacing * width / 1000, xCount, yCount)
    grid.divisor = 1.5//random(1.5,2);
    grid.calculatePoints();
  
    let pp = int(xCount * yCount / 2) + xCount//IntRandRange(30,50)
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, random(10,50), randomFromArray([10, 10, 20, 30, 40,0,1,2]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 40]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = getWeightedfromArray([5, 10, 25, 60], [0.1, 0.7, 0.9, 1])
        growth.grow();



        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = monoDomainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
            cellColorNames = "";
            for (let i = 0; i < monoDomainPalettes.length; i++) {

                cellColorNames += monoDomainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }


        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(palette.triangle.left, 40, 100, 0.9), color(palette.triangle.right, 100, 60, 0.9))
                blendMode(BLEND)

               
            }
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }

        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0) {
                    let l2Growth = new Grower(element, 8, randomFromArray([10, 20, 30, 40, 0, 1, 2]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1, 0.8)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    let pal1 = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
                    let pal2 = domainPalettes[IntRandRange(0, domainPalettes.length)]
                    let pal3 = getWeightedfromArray([50, 50], [pal1, pal2])
                    let pals = [pal1, pal2, pal3];

                    pal = pals[palStyle]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                  
                    l2Dec.addAntenna(0.05, { min: 3, max: 8 }, AntennaColors[IntRandRange(0, AntennaColors.length)], depth = false, style = getWeightedfromArray([30, 30, 40, 10], ["Atomic", "Chatra", "Circular", "Elliptic"]), ADD, 0.05,
                        { hasBeacon: getWeightedfromArray([1, 99], [true, false]), thickness: IntRandRange(5, 10) });

                }
            })
        }


    }

    let features = {
        "Name": "MM-42478",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "hasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength":(fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}









function FullRange() {
   
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex = IntRandRange(0, domainPalettes.length);
    let coloringStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([10,90],["Mixed","Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5],[1,2,3,4,5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])


    let xCount = 35//IntRandRange(15,35);
    let yCount = xCount
    let spacing = 40//IntRandRange(50,100)

    let radialDepthSettings = RadialGradientPosSettings[2];
    radialGradient(radialDepthSettings.opacity, MULTIPLY, radialDepthSettings, radialDepthMaskColors[0])


    let grid = new IsoGrid(width / 2, height * 0.6, spacing * width / 1000, xCount, yCount)
    grid.divisor = 1.5;
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount//IntRandRange(30,50)
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, 20, randomFromArray([10, 10, 0, 1, 2, 20, 30, 40]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 40]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = 1
        growth.grow();

        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(90, 40, 100, 0.9), color(90, 100, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = domainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = domainPalettes[IntRandRange(0, 2)]
            cellColorNames = "";
            for (let i = 0; i < 2; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }



        let radialDepthSettings = RadialGradientPosSettings[2];
        //radialGradient(radialDepthSettings.opacity, MULTIPLY, radialDepthSettings, radialDepthMaskColors[0])
        //  overlayDepthMask()

    }
    console.log(cellColorNames)
    let features = {
        "Name": "FR-1255",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "hasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength":(fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}




function RandomLand() {

  
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = getWeightedfromArray([80, 20], [true, false]);
    let fogRadius;
    let fogOpacity;


    let xCount = IntRandRange(25, 60);
    let yCount = xCount
    let initialSize = IntRandRange(20, 80)
    let grid = new IsoGrid(width / 2, height * 0.5, initialSize * width / 1000, xCount, yCount)
    grid.divisor = 1.5;
    grid.calculatePoints();
    let pp = int(xCount * yCount / 2) + xCount
    
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, getWeightedfromArray([60, 20, 10, 5, 5], [10, 20, 30, 40, 30]) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, randomFromArray([5, 10, 20, 30, 40]), randomFromArray([10, 10, 0, 1, 2, 20, 30, 40]));
        let scaleStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }
        growth.scalingStyle = scaleStyle;
        growth.scaleArray = [30, 15, 5, 5]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = 1
        growth.grow();




        if (hasPyramid) {

            if (i === pp) {
                let pyramidhue = IntRandRange(0, 360)
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(hue, 40, 100, 0.9), color(pyramidhue, 100, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
       
        if(random(0,1)<0.5){
            d.colorByDomain(domainPalettes[IntRandRange(0, 2)], { enabled: getWeightedfromArray([50, 50], [true, false]), probability: random(0, 1), palette: domainPalettes[IntRandRange(0, 2)].triangle, blendMod: BLEND })
        }else{
        
        d.colorByPosition(domainPalettes[IntRandRange(0, 2)], { enabled: getWeightedfromArray([50, 50], [true, false]), probability: random(0, 1), palette: domainPalettes[IntRandRange(0, 2)].triangle, blendMod: BLEND })
        }

        d.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 3, max: 15 });
        fogRadius = random(400, 800);
        fogOpacity = random(0.05, 0.1)
        d.addDepth(fogOpacity, BLEND, fogRadius, DepthColors[IntRandRange(0, 4)])
        d.addAntenna(0.05, { min: 15, max: 8 }, AntennaColors[IntRandRange(0, 3)], depth = false, style = getWeightedfromArray([20, 20, 40,20], ["Chatra", "Circular", "Atomic","Galactic"]), ADD, 0.1,
            { hasBeacon: getWeightedfromArray([10, 90], [true, false]), thickness: IntRandRange(5, 10) });

       
        
        



    }
    let features = {
        "Name": "RL-53488",
        "GridSize": xCount,
        "RamSize": initialSize,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "hasBeacons": true,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": "Random",
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, initialSize, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": "Mixed",
        "FogColors": "Mixed",
        "DirectionColors": "Mixed",
        "TransmitterColors": "Mixed"

    }
    return features;
}




function RandomLand2() {
    let radialDepthSettings = RadialGradientPosSettings[1];
    radialGradient(radialDepthSettings.opacity, BLEND, radialDepthSettings, radialDepthMaskColors[IntRandRange(0, radialDepthMaskColors.length)])

    let hasPyramid = getWeightedfromArray([80,20],[false,true])

    let xCount = IntRandRange(15, 60);
    let yCount = xCount
    let initialSize =  IntRandRange(20, 80);
    let polyp3 = new IsoGrid(width / 2, height * 0.5,initialSize * width / 1000, xCount, yCount)
    polyp3.divisor = 1;
    polyp3.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount

    for (let i = 0; i < polyp3.points.length; i++) {

        let ic = new Cube(polyp3.points[i].x, polyp3.points[i].y - 20 * height / 1080, getWeightedfromArray([60, 20, 10, 5, 5], [10, 20, 30, 40, 30]) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, randomFromArray([5, 10, 20, 30, 40]), randomFromArray([10, 10, 1, 2, 20, 30, 40]));
        growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
        growth.scaleArray = [30, 15, 5, 5]
        growth.scaler = random(0.9, 1)
        growth.cubeProb = getWeightedfromArray([10, 80, 10], [0.1, 1, 1])
        growth.grow();

if(hasPyramid){
        if (i === pp) {
            let hue = IntRandRange(0, 360)
            let p = new Pyramid(polyp3.points[i].x, polyp3.points[i].y, 400 * height / 1080, "up", "bottom");
            p.init()
            blendMode(BLEND)
            p.display(color(hue, 40, 100, 0.9), color(hue, 100, 60, 0.9))
            blendMode(BLEND)
        }
    }

        let d = new Decorator(growth, undefined, undefined);
        d.colorByDomain(domainPalettes[IntRandRange(0, domainPalettes.length)], { enabled: getWeightedfromArray([50, 50], [true, false]), probability: random(0, 1), palette: domainPalettes[IntRandRange(0, domainPalettes.length)].triangle, blendMod: BLEND })
       


        d.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 3, max: 15 });

        d.addDepth(random(0.01, 0.1), BLEND, 800, DepthColors[IntRandRange(0, DepthColors.length)])
        // d.addAntenna(0.05, { min: 15, max: 8 }, AntennaColors[IntRandRange(0,AntennaColors.length)], depth = false, style = getWeightedfromArray([30,30,40],["chatra","circles","dish"]), ADD, 0.1, 
        //   { hasBeacon: getWeightedfromArray([10,90],[true,false]), thickness: IntRandRange(5,10) });


        growth.cubes.forEach((element, index) => {
            if (index > growth.depth * 0.5) {
                let l2Growth = new Grower(element, 10, randomFromArray([10, 20, 30, 40, 0, 1, 2]))
                l2Growth.scalingStyle = "fromArray"
                l2Growth.scaler = random(1, 0.9)
                l2Growth.scaleArray = [5, 10, 5, 5, 1, 20]
                l2Growth.grow()
                let l2Dec = new Decorator(l2Growth, undefined, undefined)
                l2Dec.colorByDomain(domainPalettes[IntRandRange(0, domainPalettes.length)], { enabled: true, probability: 1, palette: domainPalettes[IntRandRange(0, domainPalettes.length)].triangle, blendMod: BLEND })
                l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                l2Dec.addDepth(random(0.01, 0.1), BLEND, 180, DepthColors[IntRandRange(0, DepthColors.length)])
                l2Dec.addAntenna(0.05, { min: 3, max: 8 }, AntennaColors[IntRandRange(0, AntennaColors.length)], depth = false, style = getWeightedfromArray([30, 30, 40, 10], ["Atomic", "Galactic", "Elliptic", "Circular"]), ADD, 0.05,
                    { hasBeacon: getWeightedfromArray([1, 99], [true, false]), thickness: IntRandRange(5, 10) });

            }
        })


       

    }
    let radialDepthSettings2 = RadialGradientPosSettings[IntRandRange(0, RadialGradientPosSettings.length)];
    radialGradient(radialDepthSettings2.opacity, MULTIPLY, radialDepthSettings2, radialDepthMaskColors[IntRandRange(0, radialDepthMaskColors.length)])
    let features = {
        "Name": "RLR-3331",
         "GridSize": xCount,
         "RamSize": initialSize,
        "Compression": polyp3.divisor,
         "Defragmentation": "HNS Error!",
         "Fragmentation": "HNS Error!",
         "HasBeacons": "HNS Error!",
         "FogStrength": "Not Enough Data!",
         "TransmitterStyle": "Random",
         "State": getMentalState(),
         "RecursiveGrowth": true,
         "HiveConstant": "Not Enough Data!",
         "CellColors": "Mixed",
         "FogColors": "Mixed",
         "DirectionColors": "Mixed",
         "TransmitterColors": "Mixed"

    }
    return features;
}




function PolygonCityMonoBlocks() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex = IntRandRange(0, monoDomainPalettes.length);
    let coloringStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([90, 10], ["Mixed", "Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])
    let hasRecursion = getWeightedfromArray([20,80],[true,false]);
    let palStyle = getWeightedfromArray([20,20,60],[0,1,2]); //recursive palette selector

    let growthCubeProb = getWeightedfromArray([30,70],[true,false])
    
    let xCount = 35//IntRandRange(15,35);
    let yCount = xCount
    let spacing = 80//IntRandRange(50,100)

    


    let grid = new PolygonPoints(createVector(width / 2, height * 0.6), IntRandRange(300,700) * width / 1000,IntRandRange(3,12),random(0,360),spacing)
    
    grid.calculatePoints();
   
    let pp = int(xCount * yCount / 2) + xCount
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, random(60,40), randomFromArray([1,2,10, 10, 20, 30, 40,0]));
        let scaleStyle = getWeightedfromArray([80, 20], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 20]
        growth.scaler = random(0.95, 1)
        
        growth.cubeProb = growthCubeProb===true?getWeightedfromArray([5, 10, 25, 60], [0.1, 0.7, 0.9,1]):1;
        growth.grow();



        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = monoDomainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
            cellColorNames = "";
            for (let i = 0; i < monoDomainPalettes.length; i++) {

                cellColorNames += monoDomainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }


        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(palette.triangle.left, 40, 100, 0.9), color(palette.triangle.right, 100, 60, 0.9))
                blendMode(BLEND)

                
            }
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }

        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 8, randomFromArray([10, 20, 30, 40, 0, 1, 2]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.05, 0.95)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    let pal1 = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
                    let pal2 = domainPalettes[IntRandRange(0, domainPalettes.length)]
                    let pal3 = getWeightedfromArray([50, 50], [pal1, pal2])
                    let pals = [pal1, pal2, pal3];

                    pal = pals[palStyle]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                  
                }
            })
        }


    }

    let features = {
        "Name": "PCMP-50501",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": (TWO_PI+random(0,100)).toFixed(2),
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "hasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": hasRecursion,
        "HiveConstant": getHiveConstant(xCount, spacing, TWO_PI, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}




function RandomLand4() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = false//getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex = IntRandRange(0, domainPalettes.length);
    let coloringStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([10,90],["Mixed","Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5],[0,1,2,3,4,5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])

    let hasRecursion = getWeightedfromArray([20, 80], [true, false]);
    

    let xCount = 45//IntRandRange(15,35);
    let yCount = xCount
    let spacing = 100//IntRandRange(50,100)

    let radialDepthSettings = RadialGradientPosSettings[2];
    radialGradient(radialDepthSettings.opacity, MULTIPLY, radialDepthSettings, radialDepthMaskColors[0])


    let grid = new IsoGrid(width / 2, height * 0.6, spacing * width / 1000, xCount, yCount)
    grid.divisor = 1.5;
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount//IntRandRange(30,50)
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
    
        let growth = new Grower(ic, 60, randomFromArray([10, 10, 0, 1, 2, 20, 30, 40]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 40]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = 1
        growth.grow();

        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(90, 40, 100, 0.9), color(90, 100, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = domainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = domainPalettes[IntRandRange(0, 2)]
            cellColorNames = "";
            for (let i = 0; i < 2; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }

        d.colorByPosition(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }
        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 8, randomFromArray([0, 1, 2,10,20,30,40]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.01, 0.95)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    
                    pal = domainPalettes[2]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                     l2Dec.addDepth(random(0.01, 0.1), BLEND, 380, DepthColors[IntRandRange(0, DepthColors.length)])
                   
                }
            })
        }


    
    }
    console.log(cellColorNames)
    let features = {
        "Name": "RL-4444",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}




function RandomLand5() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = false//getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 600;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex =IntRandRange(0, domainPalettes.length);
    let coloringStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.03);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([10,90],["Mixed","Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5],[0,1,2,3,4,5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])

    let hasRecursion = false//getWeightedfromArray([20, 80], [true, false]);
    

    let xCount = 95//IntRandRange(15,35);
    let yCount = xCount
    let spacing = 30//IntRandRange(50,100)

    

    let grid = new IsoGrid(width / 2, height * 0.6, spacing * width / 1000, xCount, yCount)
    grid.divisor = 1.5;
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount//IntRandRange(30,50)
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
    
        let growth = new Grower(ic, 20, randomFromArray([10, 10, 0, 1, 2, 20, 30, 40]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 40]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = 1
        growth.grow();

        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(90, 40, 100, 0.9), color(90, 100, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = domainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = domainPalettes[IntRandRange(0, 2)]
            cellColorNames = "";
            for (let i = 0; i < 2; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }
        if(random(0,1)<0.5){
            d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        }else{
            d.colorByPosition(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        }
        
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 1, max: 5 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }
        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 8, randomFromArray([0, 1, 2,10,20,30,40]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.01, 0.95)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    
                    pal = domainPalettes[2]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                     l2Dec.addDepth(random(0.01, 0.1), BLEND, 380, DepthColors[IntRandRange(0, DepthColors.length)])
                    

                }
            })
        }


    }
    console.log(cellColorNames)
    let features = {
        "Name": "DH-1177",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}

function RandomLand6() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = false//getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 600;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex =IntRandRange(0, domainPalettes.length-1);
    let coloringStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.03);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([10,90],["Mixed","Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5],[0,1,2,3,4,5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])

    let hasRecursion = false
    

    let xCount = 40
    let yCount = xCount
    let spacing = 50
   

    let grid = new IsoGrid(width / 2, height * 0.4, spacing * width / 1000, xCount, yCount)
    grid.divisor = 1.5;
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount//IntRandRange(30,50)
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
    
        let growth = new Grower(ic, 10, randomFromArray([20, 30, 40,1,2,10]));
        let scaleStyle = getWeightedfromArray([90, 5], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 40]
        growth.scaler = random(0.95, 1)
        growth.cubeProb = random(0.8,1)
        growth.grow();

        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(90, 40, 100, 0.9), color(90, 100, 60, 0.9))
                blendMode(BLEND)
            }
        }

        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = domainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = domainPalettes[IntRandRange(0, 2)]
            cellColorNames = "";
            for (let i = 0; i < 2; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }
        if(random(0,1)<0.5){
            d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        }else{
            d.colorByPosition(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        }
        
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 1, max: 5 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }
        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 18, randomFromArray([0, 1, 2,10,20,30,40]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.01, 0.8)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    
                    pal = domainPalettes[2]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                     l2Dec.addDepth(random(0.01, 0.1), BLEND, 380, DepthColors[IntRandRange(0, DepthColors.length)])
                    

                }
            })
        }


      

    }
    console.log(cellColorNames)
    let features = {
        "Name": "DH-2258/A",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": grid.divisor,
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": false,
        "HiveConstant": getHiveConstant(xCount, spacing, grid.divisor, numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}



function SpiralCityMonoBlocks() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = false
    let fogRadius = 800;
    let fogOpacity = 0.05
    let domainColorIndex = IntRandRange(0, monoDomainPalettes.length);
    let coloringStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([90, 10], ["Mixed", "Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])
    let hasRecursion = false
    let palStyle = getWeightedfromArray([20,20,60],[0,1,2]);

    let growthCubeProb = getWeightedfromArray([30,70],[true,false])
    
    let xCount = 35
    let yCount = xCount
    let spacing = 40

  


    let grid = new SpiralPoints(createVector(width / 2, height * 0.5), 400 * width / 1000,12,random(0,360),IntRandRange(200,700))
    grid.inc = random(1,2)
    grid.turns = 8
    grid.calculatePoints();
   
    let pp = int(xCount * yCount / 2) + xCount
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");
        
        ic.origin = "center"
        ic.init()
        
        let growth = new Grower(ic, 20, randomFromArray([0,10]));
        let scaleStyle = getWeightedfromArray([80, 20], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 20]
        growth.scaler = random(0.95, 1)
        
        growth.cubeProb = growthCubeProb===true?getWeightedfromArray([5, 10, 25, 60], [0.1, 0.7, 0.9,1]):1;
        growth.grow();



        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = monoDomainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
            cellColorNames = "";
            for (let i = 0; i < monoDomainPalettes.length; i++) {

                cellColorNames += monoDomainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }


        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(palette.triangle.left, 40, 100, 0.9), color(palette.triangle.right, 100, 60, 0.9))
                blendMode(BLEND)

                
            }
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 1 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }

        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 8, randomFromArray([10, 20, 30, 40, 0, 1, 2]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.05, 0.95)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    let pal1 = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
                    let pal2 = domainPalettes[IntRandRange(0, domainPalettes.length)]
                    let pal3 = getWeightedfromArray([50, 50], [pal1, pal2])
                    let pals = [pal1, pal2, pal3];

                    pal = pals[palStyle]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                  
                }
            })
        }


    }

    let features = {
        "Name": "SCMB-1",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": (TWO_PI*1.618).toFixed(2),
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": hasRecursion,
        "HiveConstant": getHiveConstant(xCount, spacing, random(10,20), numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}

function SpiralCityColorBlocks() {
    //---------------------FEATURE SETTINGS-------------------
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = false//getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex = IntRandRange(0, domainPalettes.length);
    let coloringStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([90, 10], ["Mixed", "Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])
    let hasRecursion = false
    let palStyle = getWeightedfromArray([20,20,60],[0,1,2]); 

    let growthCubeProb = getWeightedfromArray([30,70],[true,false])
    
    let xCount = 35
    let yCount = xCount
    let spacing = 40

   

    let grid = new SpiralPoints(createVector(width / 2, height * 0.5), 400 * width / 1000,12,random(0,360),300)
    grid.inc = random(1,2)
    grid.turns = 8
    grid.calculatePoints();
    
    let pp = int(xCount * yCount / 2) + xCount
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");
        
        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, 20, randomFromArray([0,10]));
        let scaleStyle = getWeightedfromArray([80, 20], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 20]
        growth.scaler = random(0.95, 1)
        
        growth.cubeProb = growthCubeProb===true?getWeightedfromArray([5, 10, 25, 60], [0.1, 0.7, 0.9,1]):1;
        growth.grow();



        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = domainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = domainPalettes[IntRandRange(0, domainPalettes.length)]
            cellColorNames = "";
            for (let i = 0; i < domainPalettes.length; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }


        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(palette.triangle.left, 40, 100, 0.9), color(palette.triangle.right, 100, 60, 0.9))
                blendMode(BLEND)

                
            }
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 1 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }

        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 8, randomFromArray([1, 2]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.05, 0.95)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    let pal1 = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
                    let pal2 = domainPalettes[IntRandRange(0, domainPalettes.length)]
                    let pal3 = getWeightedfromArray([50, 50], [pal1, pal2])
                    let pals = [pal1, pal2, pal3];

                    pal = pals[palStyle]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                    
                    

                }
            })
        }


    }

    let features = {
        "Name": "SCCB-0359",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": ((TWO_PI*1.618)+random(0,5)).toFixed(2),
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "HasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": hasRecursion,
        "HiveConstant": getHiveConstant(xCount, spacing, random(0.1,50), numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}

function PolygonCityColorBlocks() {
   
    let numberOfBeads = 0;
    let numberOfConstant = 0;
    let hasPyramid = getWeightedfromArray([80, 20], [true, false]);
    let fogRadius = 800;
    let fogOpacity = 0.05//random(0.01,0.03);
    let domainColorIndex = IntRandRange(0, domainPalettes.length);
    let coloringStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let cellColorNames;
    let transmitterStyle = getWeightedfromArray([30, 70], ["Mixed", "Fixed"])
    let transmitterStyleIndex = IntRandRange(0, transmitterStyles.length);
    let transmitterName;
    let transmitterFeature;
    let transmitterDensity = random(0.01, 0.1);

    let transmitterColorStyle = getWeightedfromArray([10, 90], ["Mixed", "Fixed"])
    let transmitterPaletteIndex = IntRandRange(0, AntennaColors.length);
    let transmitterPalette;
    let transmitterPaletteName;
    let fogStyle = getWeightedfromArray([90, 10], ["Mixed", "Fixed"])
    let fogStyleIndex = IntRandRange(0, DepthColors.length);
    let fogColor;
    let fogColorName;
    let pairs = [[3, 4], [4, 5], [2, 3], [2, 4], [5, 1], [2, 5], [3, 4, 5]]
    let fogPair = randomFromArray(pairs)

    let hasBeacon = getWeightedfromArray([70, 30], [true, false])
    let hasSpikyEnds = getWeightedfromArray([80, 20], [true, false])
    let hasTransmitter = getWeightedfromArray([80, 20], [true, false])
    let hasRecursion = getWeightedfromArray([20,80],[true,false]);
    let palStyle = getWeightedfromArray([20,20,60],[0,1,2]); //recursive palette selector

    let growthCubeProb = getWeightedfromArray([30,70],[true,false])
    
    let xCount = 35//IntRandRange(15,35);
    let yCount = xCount
    let spacing = 40//IntRandRange(50,100)

   


    let grid = new PolygonPoints(createVector(width / 2, height * 0.6), IntRandRange(300,700) * width / 1000,IntRandRange(3,15),random(0,360),80)
    
    grid.calculatePoints();
  
    let pp = int(xCount * yCount / 2) + xCount
    for (let i = 0; i < grid.points.length; i++) {

        let ic = new Cube(grid.points[i].x, grid.points[i].y - 20 * height / 1080, random(10, 30) * width / 1000, "up");

        ic.origin = "center"
        ic.init()
        //ic.display()
        let growth = new Grower(ic, random(60,20), randomFromArray([1,2,10, 10, 20, 30, 40,0]));
        let scaleStyle = getWeightedfromArray([80, 20], ["fromScaler", "fromArray"])
        if (scaleStyle === "fromScaler") {
            numberOfConstant++;
        }
        if (scaleStyle === "fromArray") {
            numberOfBeads++;
        }

        growth.scalingStyle = scaleStyle
        growth.scaleArray = [30, 15, 5, 5, 20]
        growth.scaler = random(0.95, 1)
        
        growth.cubeProb = growthCubeProb===true?getWeightedfromArray([5, 10, 25, 60], [0.1, 0.7, 0.9,1]):1;
        growth.grow();



        let d = new Decorator(growth, undefined, undefined);
        let palette;

        if (coloringStyle === "Fixed") {
            palette = domainPalettes[domainColorIndex]
            cellColorNames = palette.name
        } else {
            palette = monoDomainPalettes[IntRandRange(0, domainPalettes.length)]
            cellColorNames = "";
            for (let i = 0; i < domainPalettes.length; i++) {

                cellColorNames += domainPalettes[i].name + "+"
            }
            cellColorNames = cellColorNames.substring(0, cellColorNames.length - 1)
        }
        if (transmitterStyle === "Fixed") {
            transmitterName = transmitterStyles[transmitterStyleIndex]
            transmitterFeature = transmitterName
        } else {
            transmitterName = randomFromArray(transmitterStyles);
            transmitterFeature = "";
            for (let i = 0; i < transmitterStyles.length; i++) {

                transmitterFeature += transmitterStyles[i] + "+"
            }
            transmitterFeature = transmitterFeature.substring(0, transmitterFeature.length - 1)
        }
        if (transmitterColorStyle === "Fixed") {
            transmitterPalette = AntennaColors[transmitterPaletteIndex]
            transmitterPaletteName = transmitterPalette.name;
        } else {
            transmitterPalette = AntennaColors[IntRandRange(0, AntennaColors.length)]
            transmitterPaletteName = "Mixed"
        }


        if (hasPyramid) {
            if (i === pp) {
                let p = new Pyramid(grid.points[i].x, grid.points[i].y, 400 * height / 1080, "up", "bottom");
                p.init()
                blendMode(BLEND)
                p.display(color(palette.triangle.left, 40, 100, 0.9), color(palette.triangle.right, 100, 60, 0.9))
                blendMode(BLEND)

                
            }
        }

        d.colorByDomain(palette, { enabled: getWeightedfromArray([80, 20], [true, false]), probability: random(0, 1), palette: palette.triangle, blendMod: BLEND })
        if (hasSpikyEnds) {
            d.addPyramid(random(0, 1), getWeightedfromArray([20, 80], [true, false]), { min: 3, max: 8 });
        }
        if (fogStyle === "Fixed") {
            fogColor = DepthColors[fogStyleIndex]
            fogColorName = fogColor.name;
        } else {

            fogColor = DepthColors[randomFromArray(fogPair)]
            fogColorName = "Mixed"
        }

        d.addDepth(fogOpacity, BLEND, fogRadius, fogColor)

        if (hasTransmitter) {
            d.addAntenna(0.2, { min: 15, max: 8 }, transmitterPalette, depth = false, style = transmitterName, ADD, transmitterDensity, { hasBeacon: hasBeacon, thickness: 6 });

        }

        if (hasRecursion) {
            growth.cubes.forEach((element, index) => {
                if (index > growth.depth * 0.5) {
                    let l2Growth = new Grower(element, 8, randomFromArray([10, 20, 30, 40, 0, 1, 2]))
                    l2Growth.scalingStyle = getWeightedfromArray([50, 50], ["fromScaler", "fromArray"])
                    l2Growth.scaler = random(1.05, 0.95)
                    l2Growth.scaleArray = [5, 10, 5, 5, 1, 10]
                    l2Growth.grow()
                    let l2Dec = new Decorator(l2Growth, undefined, undefined)
                    let pal1 = monoDomainPalettes[IntRandRange(0, monoDomainPalettes.length)]
                    let pal2 = domainPalettes[IntRandRange(0, domainPalettes.length)]
                    let pal3 = getWeightedfromArray([50, 50], [pal1, pal2])
                    let pals = [pal1, pal2, pal3];

                    pal = pals[palStyle]
                    l2Dec.colorByDomain(pal, { enabled: true, probability: random(0, 1), palette: pal.triangle, blendMod: ADD })
                    l2Dec.addPyramid(random(0, 1), getWeightedfromArray([10, 90], [true, false]), { min: 1, max: 5 });
                  

                }
            })
        }


    }

    let features = {
        "Name": "PC-R535",
        "GridSize": xCount,
        "RamSize": spacing,
        "Compression": ((TWO_PI*1.618)+random(20,60)).toFixed(2),
        "Defragmentation": numberOfBeads,
        "Fragmentation": numberOfConstant,
        "hasBeacons": hasTransmitter === true ? hasBeacon : false,
        "FogStrength": (fogOpacity * fogRadius).toFixed(2),
        "TransmitterStyle": transmitterFeature,
        "State": getMentalState(),
        "RecursiveGrowth": hasRecursion,
        "HiveConstant": getHiveConstant(xCount, spacing, random(0.1,50), numberOfBeads, numberOfConstant, fogOpacity * fogRadius),
        "CellColors": cellColorNames,
        "FogColors": fogColorName,
        "DirectionColors": coloringStyle,
        "TransmitterColors": hasTransmitter === true ? transmitterPaletteName : "None"

    }
    return features;

}

