// Abstract Dandelion - by ArtLife
// ArtLife on fxhash: https://www.fxhash.xyz/u/ArtLife
// instagram: https://www.instagram.com/generativeartlife/
// ArtLife Twitter: https://twitter.com/iamPraveenIN
// Credit to p5js: https://p5js.org/
// Credit to p5.pattern: https://github.com/SYM380/p5.pattern
// Credit to kgolid chromotome: https://github.com/kgolid/chromotome

c = [{
        name: "winter-night",
        colors: ["#122438", "#dd672e", "#87c7ca", "#ebebeb"],
        background: "#ebebeb"
    }, {
        name: "lemon_citrus",
        colors: ["#e2d574", "#f1f4f7", "#69c5ab"],
        stroke: "#463231",
        background: "#f79eac"
    }, {
        name: "moir",
        colors: ["#a49f4f", "#d4501e", "#f7c558", "#ebbaa6"],
        stroke: "#161716",
        background: "#f7f4ef"
    }, {
        name: "animo",
        colors: ["#f6c103", "#f6f6f6", "#d1cdc7", "#e7e6e5"],
        stroke: "#010001",
        background: "#f5f5f5"
    }, {
        name: "book",
        colors: ["#be1c24", "#d1a082", "#037b68", "#d8b1a5", "#1c2738", "#c95a3f"],
        stroke: "#0e0f27",
        background: "#f5b28a"
    }, {
        name: "ludo",
        colors: ["#df302f", "#e5a320", "#0466b3", "#0f7963"],
        stroke: "#272621",
        background: "#dedccd"
    }, {
        name: "rag-taj",
        colors: ["#ce565e", "#8e1752", "#f8a100", "#3ac1a6"],
        background: "#efdea2"
    }, {
        name: "retro-washedout",
        colors: ["#878a87", "#cbdbc8", "#e8e0d4", "#b29e91", "#9f736c", "#b76254", "#dfa372"]
    }, {
        name: "tundra2",
        colors: ["#5f9e93", "#3d3638", "#733632", "#b66239", "#b0a1a4", "#e3dad2"]
    }, {
        name: "cc234",
        colors: ["#ffce49", "#ede8dc", "#ff5736", "#ff99b4"],
        background: "#f7f4ed"
    }, {
        name: "rohlfs_2",
        colors: ["#4d3d9a", "#f76975", "#ffffff", "#eff0dd"],
        stroke: "#211029",
        background: "#58bdbc"
    }, {
        name: "rohlfs_4",
        colors: ["#fde500", "#2f2043", "#f76975", "#eff0dd"],
        stroke: "#211029",
        background: "#fbbeca"
    }, {
        name: "ducci_b",
        colors: ["#ecddc5", "#79b27b", "#000000", "#ac6548"],
        stroke: "#ac6548",
        background: "#d5c08e"
    }, {
        name: "iiso_zeitung",
        colors: ["#ee8067", "#f3df76", "#00a9c0", "#f7ab76"],
        stroke: "#111a17",
        background: "#f5efcb"
    }, {
        name: "iiso_airlines",
        colors: ["#fe765a", "#ffb468", "#4b588f", "#faf1e0"],
        stroke: "#1c1616",
        background: "#fae5c8"
    }, {
        name: "kov_03",
        colors: ["#e3937b", "#d93f1d", "#090d15", "#e6cca7"],
        stroke: "#090d15",
        background: "#558947"
    }, {
        name: "kov_06",
        colors: ["#a87c2a", "#bdc9b1", "#f14616", "#ecbfaf", "#017724", "#0e2733", "#2b9ae9"],
        stroke: "#292319",
        background: "#dfd4c1"
    }, {
        name: "tsu_harutan",
        colors: ["#75974a", "#c83e3c", "#f39140", "#e4ded2", "#f8c5a4", "#434f55"],
        stroke: "#251c12",
        background: "#cfc7b9"
    }, {
        name: "dt01",
        colors: ["#172a89", "#f7f7f3"],
        stroke: "#172a89",
        background: "#f3abb0"
    }, {
        name: "dt02",
        colors: ["#302956", "#f3c507"],
        stroke: "#302956",
        background: "#eee3d3"
    }, {
        name: "dt04",
        colors: ["#50978e", "#f7f0df"],
        stroke: "#000000",
        background: "#f7f0df"
    }, {
        name: "dt05",
        colors: ["#ee5d65", "#f0e5cb"],
        stroke: "#080708",
        background: "#f0e5cb"
    }, {
        name: "dt07",
        colors: ["#6a98a5", "#d24c18"],
        stroke: "#efebda",
        background: "#efebda"
    }, {
        name: "hilda01",
        colors: ["#ec5526", "#f4ac12", "#9ebbc1", "#f7f4e2"],
        stroke: "#1e1b1e",
        background: "#e7e8d4"
    }, {
        name: "hilda03",
        colors: ["#e95145", "#f8b917", "#b8bdc1", "#ffb2a2"],
        stroke: "#010101",
        background: "#6b7752"
    }, {
        name: "hilda04",
        colors: ["#e95145", "#f6bf7a", "#589da1", "#f5d9bc"],
        stroke: "#000001",
        background: "#f5ede1"
    }, {
        name: "spatial01",
        colors: ["#ff5937", "#f6f6f4", "#4169ff"],
        stroke: "#ff5937",
        background: "#f6f6f4"
    }, {
        name: "spatial03i",
        colors: ["#f6f6f4", "#4169ff", "#4169ff"],
        stroke: "#f6f6f4",
        background: "#4169ff"
    }, {
        name: "jung_croc",
        colors: ["#f13274", "#eed03e", "#405e7f", "#19a198"],
        stroke: "#000000",
        background: "#ffffff"
    }, {
        name: "system.#01",
        colors: ["#ff4242", "#fec101", "#1841fe", "#fcbdcc", "#82e9b5"],
        stroke: "#000",
        background: "#fff"
    }, {
        name: "system.#06",
        colors: ["#e5475c", "#95b394", "#28343b", "#f7c6a3", "#eb8078"],
        stroke: "#000",
        background: "#fff"
    }, {
        name: "system.#07",
        colors: ["#d75c49", "#f0efea", "#509da4"],
        stroke: "#000",
        background: "#fff"
    }, {
        name: "empusa",
        colors: ["#c92a28", "#e69301", "#1f8793", "#13652b", "#e7d8b0", "#48233b", "#e3b3ac"],
        stroke: "#1a1a1a",
        background: "#f0f0f2"
    }, {
        name: "mably",
        colors: ["#13477b", "#2f1b10", "#d18529", "#d72a25", "#e42184", "#138898", "#9d2787", "#7f311b"],
        stroke: "#2a1f1d",
        background: "#dfc792"
    }, {
        name: "nowak",
        colors: ["#e85b30", "#ef9e28", "#c6ac71", "#e0c191", "#3f6279", "#ee854e", "#180305"],
        stroke: "#180305",
        background: "#ede4cb"
    }, {
        name: "jupiter",
        colors: ["#c03a53", "#edd09e", "#aab5af", "#023629", "#eba735", "#8e9380", "#6c4127"],
        stroke: "#12110f",
        background: "#e6e2d6"
    }, {
        name: "hersche",
        colors: ["#df9f00", "#1f6f50", "#8e6d7f", "#da0607", "#a4a5a7", "#d3d1c3", "#42064f", "#25393a"],
        stroke: "#0a0a0a",
        background: "#f0f5f6"
    }, {
        name: "harvest",
        colors: ["#313a42", "#9aad2e", "#f0ae3c", "#df4822", "#8eac9b", "#cc3d3f", "#ec8b1c", "#1b9268"],
        stroke: "#463930",
        background: "#e5e2cf"
    }, {
        name: "honey",
        colors: ["#f14d42", "#f4fdec", "#4fbe5d", "#265487", "#f6e916", "#f9a087", "#2e99d6"],
        stroke: "#141414",
        background: "#f4fdec"
    }, {
        name: "dale_night",
        colors: ["#ae5d9d", "#f1e8bc", "#ef8fa3", "#f7c047", "#58c9ed", "#f77150"],
        stroke: "#000000",
        background: "#00ae83"
    }, {
        name: "dale_cat",
        colors: ["#f77656", "#f7f7f7", "#efc545", "#dfe0e2", "#3c70bd", "#66bee4"],
        stroke: "#000000",
        background: "#f6e0b8"
    }]