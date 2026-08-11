function initPalette() {
    let palettes = [
        {
            backColor: "#efefe7",
            elementColors: ["#232221", "#d26b21", "#deaf15",
                "#da6a25", "#daa023"],
            outlineColor: "#14181e",
            name: "Autumn Blaze"
        },
        {
            backColor: "#e2e9ec",
            elementColors: ["#182128", "#393a73", "#c73b6f", "#5f93b7",
                "#798e9b", "#348ab6", "#629ac7", "#25689d"],
            outlineColor: "#14181e",
            name: "Storm"
        },
        {
            backColor: "#2567b9",
            elementColors: ["#e0d8d9", "#0d8f59", "#941b1d", "#eceae2",
                "#1c1f2c", "#0d9169", "#981428", "#d8e3e1",
                "#eceae4"],
            outlineColor: "#dde3ea",
            name: "Tidal Fury"
        },
        {
            backColor: "#eeebe7",
            elementColors: ["#232121", "#282525", "#6ca3bd", "#5a95b9",
                "#c45656", "#c44444", "#cea54e"],
            outlineColor: "#231f20",
            name: "Ocean Sunrise"
        },
        {
            backColor: "#e6ebec",
            elementColors: ["#231934",
                "#bd2343", "#bb2437", "#65c2d2", "#4eb3cb"],
            outlineColor: "#231f20",
            name: "Glassy Sky"
        },
        {
            backColor: "#efece6",
            elementColors: ["#234934", "#c21717", "#eabe0e",
                "#17559a", "#131c19"],
            outlineColor: "#231f20",
            name: "Classic"
        },
        {
            backColor: "#f1f0ec",
            elementColors: ["#c41e1e", "#b7c8d5", "#144794", "#e0b21e",
                "#c55a73", "#72bad0", "#b21414", "#d02222",
                "#342e2e", "#88a4c4"],
            outlineColor: "#231f20",
            name: "Lust"
        },
        {
            backColor: "#f1f0ec",
            elementColors: ["#d7c71b", "#5faad2", "#3e96c5", "#34312e",
                "#e3c815", "#d9c817", "#da7713", "#e0cf16"],
            outlineColor: "#231f20",
            name: "Mirage"
        },
        {
            backColor: "#f1e6da",
            elementColors: ["#d07315", "#165fb2", "#2c2925",
                "#962a2a", "#34a67f", "#1968c2"],
            outlineColor: "#231f20",
            name: "Canyon"
        },
        {
            backColor: "#f5efe9",
            elementColors: ["#bd1818", "#c51f24", "#1e1919",
                "#b71e1e", "#c2151a", "#1b2a54",
                "#1e191b", "#1f1a1a"],
            outlineColor: "#231f20",
            name: "Red Night"
        },
        {
            backColor: "#262525",
            elementColors: ["#e5a3b7", "#e5afbc", "#efe8e9",
                "#f1e9ea", "#ecd9df", "#93969d",
                "#d24d6c", "#d5405e"],
            outlineColor: "#eee7e9",
            name: "Cotton Candy"
        },
        {
            backColor: "#efede8",
            elementColors: ["#16491f", "#d7b116", "#d9bc13", "#d7a01f",
                "#1a4f26", "#1f1f1e", "#1a3a21"],
            outlineColor: "#1f2021",
            name: "Golden Garden"
        },
        {
            backColor: "#e8edef",
            elementColors: ["#1d1d1e", "#272728", "#b02b2b", "#cb1414",
                "#78b4cb", "#d0b637", "#799496"],
            outlineColor: "#1f2021",
            name: "Industrial"
        },
        {
            backColor: "#e8edef",
            elementColors: ["#e59216", "#daae14", "#2174d3", "#86445f",
                "#1a72cb", "#de8613", "#619fcc", "#dea924"],
            outlineColor: "#1f2021",
            name: "Sea & Sun"
        },
        {
            backColor: "#f3efe3",
            elementColors: ["#d7b015", "#dab914", "#5265cb", "#383538",
                "#445ac9", "#d5a715", "#d38e82", "#d79f17"],
            outlineColor: "#1f2021",
            name: "Anemone"
        },
        {
            backColor: "#1c1b1b",
            elementColors: ["#a91c1c", "#d3931c", "#e1d9bb", "#939293",
                "#d29b23", "#bd1515", "#ad1c1c", "#daa115"],
            outlineColor: "#f1eadb",
            name: "Ember"
        },
        {
            backColor: "#eae6d9",
            elementColors: ["#c92f1b", "#dab51f", "#cec39b", "#2d2321",
                "#b91a1a", "#a11313", "#50abab"],
            outlineColor: "#19191a",
            name: "Dragon"
        },
        {
            backColor: "#e9edef",
            elementColors: ["#25a5c2", "#543e8f", "#1c5ebd", "#2f363b",
                "#4fadd5", "#1c65b9", "#183054", "#1d63be"],
            outlineColor: "#19191a",
            name: "Winter Blue"
        },
        {
            backColor: "#1c1b1b",
            elementColors: ["#d5a919", "#debf16", "#d36e1a",
                "#949dad", "#da7917"],
            outlineColor: "#ede6ee",
            name: "Concrete Orange"
        },
        {
            backColor: "#203a75",
            elementColors: ["#a91010", "#dcab10", "#e7dcdf", "#be344e",
                "#e7e4dc"],
            outlineColor: "#ede6ee",
            name: "Last Thoughts"
        },
        {
            backColor: "#252322",
            elementColors: ["#45bba4", "#e7e4dc", "#e1a612", "#ece5e1",
                "#1f37bd"],
            outlineColor: "#e6e7ee",
            name: "Future"
        },
        {
            backColor: "#2d2129",
            elementColors: ["#a61919", "#dedacb", "#8f1010", "#e5e0d4",
                "#c48080"],
            outlineColor: "#d7d5cd",
            name: "Ending"
        }
    ];
    let paletteNumber = Math.floor(fxrand() * palettes.length);
    let paletteRand = palettes[paletteNumber];

    return {
        back: paletteRand.backColor,
        elementColors: paletteRand.elementColors,
        outlineColor: paletteRand.outlineColor,
        name: paletteRand.name
    };
}