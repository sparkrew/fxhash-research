const colorGrass = 
[
    { name: "Golden Meadow",    hex: ["#2C4001", "#5A7302", "#D2D904", "#B9BF04", "#A0A603"] },
    { name: "Olive Forest",     hex: ["#91A325", "#586316", "#A8BC2A", "#CBE333"] },
    { name: "Lemon Grass",      hex: ["#5A7302", "#D2D904", "#B9BF04", "#A0A603"] },
    { name: "Mossy Woods",      hex: ["#5C7345", "#A4BF69", "#C0D966", "#E0F2A0"] },
    { name: "Golden Autumn",    hex: ["#DBA61C", "#F2C830", "#EEE16C", "#B3AC3D"] },
    { name: "Luminous Spring",  hex: ["#84BF04", "#4F7302", "#83A603", "#D6D98B", "#D9D3B8"] },
    { name: "Enchanted Forest", hex: ["#A3BFB2", "#3C5949", "#6D8C7B", "#32593C", "#142617"] },
    { name: "Golden Blossom",      hex: ["#F2E41B", "#F2D43D", "#F2A516", "#F28F16", "#A64812"] },
    { name: "Wildflower Bouquet",  hex: ["#59161C", "#8C2639", "#AAB5BF", "#374031"] },
    { name: "Hydrangea Garden",    hex: ["#506CBF", "#8BA5D9", "#D9A918", "#BF8211"] },
    { name: "Turquoise Sea",    hex: ["#A3BFB2", "#3C5949", "#6D8C7B", "#32593C", "#142617"] },
    { name: "Toasted Brown",    hex: ["#F2D091", "#D9B68B", "#8C6542", "#401E12"] },
    { name: "Forest Sunset",    hex: ["#BFA004", "#8C6A03", "#593B02", "#F2AD94", "#D9644A"] },
    { name: "Morning Mist",     hex: ["#C7D4D9", "#B0BBBF", "#593939", "#8C6868", "#BF9F9F"] },
    { name: "Forest Sunset",    hex: ["#BF6A1F", "#BF5B21", "#BF4226", "#D9B0A7", "#BF2A2A"] },
    { name: "Shadowy Woods",    hex: ["#5D7373", "#2D403E", "#BF9484", "#8C5042"] },
    { name: "Forest Fire",      hex: ["#D9A74A", "#D9863D", "#D95829", "#A60808", "#590505"] },
    { name: "Cherry Blossom",      hex: ["#F2295F", "#F23D7F", "#F2B705", "#F28705", "#F2F2F2"] }
];



const colorFlowers = 
[
    { name: "Plum Blossom",        hex: ["#8C5866", "#8C3B70", "#D904A0", "#A63387", "#F205CB"] },
    { name: "Rose Garden",         hex: ["#B73849", "#F78D8D", "#F8A6A5", "#F9CFCD"] },
    { name: "Spring Sky",          hex: ["#048ABF", "#30A9D9", "#7ED1F2", "#C2E5F2", "#77DCF2"] },
    { name: "Candy Floss",         hex: ["#E86DC8", "#FF78CC", "#FF85EE", "#EA6DE8", "#F778FF"] },
    { name: "Tulip Fields",        hex: ["#F24957", "#F27C38", "#F2A999", "#D93223", "#F26F63"] },
    { name: "Sunflower Garden",    hex: ["#F2C12E", "#F28F16", "#F2762E", "#F25430"] },
    { name: "Autumn Bloom",        hex: ["#F07A2A", "#F09400", "#EC6F17", "#F24405", "#E79511"] },
    { name: "Wild Orchid",         hex: ["#805262", "#FF5792", "#FFA3C3", "#800731", "#CC839C"] },
    { name: "Ocean Breeze",        hex: ["#056CF2", "#0583F2", "#0C9AF2", "#1DB6F2", "#05F2F2"] },
    { name: "Spring Sunrise",      hex: ["#BF0436", "#F2508B", "#4F8C11", "#BF9004", "#F2762E"] },
    { name: "Crimson Petals",      hex: ["#F21313", "#F24B4B", "#F29191", "#F2BBBB", "#F2F2F2"] },
    { name: "Lavender Fields",     hex: ["#BF6F76", "#BF5E93", "#BF63B9", "#552973", "#291940"] },
    { name: "Meadow Flowers",      hex: ["#F2C2D8", "#5D732F", "#F2A922", "#F28705", "#F2F1F0"] }
  ];


const colorInk_ = 
[
    { name: "Shadow Black", hex: "#2c2b2b" },
    { name: "Jet Black",    hex: "#000000" }
];


const colorCanvas = 
[
  { name: "Mint Cream",        hex: "#F5FFFA" },
  { name: "Pale Goldenrod",    hex: "#EEE8AA" },
  { name: "Celadon Green",     hex: "#C8E6C9" },
  { name: "Pink Bubblegum",    hex: "#FFC0CB" },
  { name: "Champagne Pink",    hex: "#F8D9B9" },
  { name: "Light Grey",        hex: "#DCDCDC" },
  { name: "Wheat",             hex: "#F5DEB3" },
  { name: "Baby Blue Eyes",    hex: "#BFEFFF" },
  { name: "White",             hex: "#FFFFFF" },
  { name: "Lavender Mist",     hex: "#E6E6FA" },
  { name: "Vivid Tangerine",   hex: "#F4C2C2" },
  { name: "Light Pink",        hex: "#FFB6C1" },
  { name: "Pale Green",        hex: "#98FB98" },
  { name: "Peach Pink",        hex: "#F2ACB9" },
  { name: "Rosy Brown",        hex: "#D9899E" },
  { name: "Sonic Silver",      hex: "#BFB6AE" },
  { name: "Floral White",      hex: "#F2B4AE" },
  { name: "Chantilly Lace",    hex: "#F2D8D5" }
];




const format = 
[
    { name:"Large",     id: 1 },
    { name:"Square",    id: 2 },
    { name:"Landscape", id: 3 },
    { name:"Portrait",  id: 4 }
]


const leafType = 
[
    { name: "Smooth" ,                 id: 1},
    { name: "Mid Line" ,               id: 2},
    { name: "Classical" ,              id: 3},
    { name: "Classical Interspersed" , id: 4},
    { name: "Compact" ,                id: 5}
]



const wallColors = [
    ["#F2C094", "#D9946C", "#26140E", "#A65A3F", "#593122"],
    ["#D9D9D9", "#BFBFBF", "#A6A6A6", "#8C8C8C", "#595959"],
    ["#BFB2A3", "#594F42", "#403426", "#A69485", "#8C7968"],
    ["#A67458", "#BF533B", "#59271C", "#8C3027", "#401612"],
]


const wallPalette = 
[
    { name: "Antique Bricks",   hex: ["#F2C094", "#D9946C", "#26140E", "#A65A3F", "#593122"] },
    { name: "Gray Scale",       hex: ["#D9D9D9", "#BFBFBF", "#A6A6A6", "#8C8C8C", "#595959"] },
    { name: "Earthy Tones",     hex: ["#BFB2A3", "#594F42", "#403426", "#A69485", "#8C7968"] },
    { name: "Rustic Reds",      hex: ["#A67458", "#BF533B", "#59271C", "#8C3027", "#401612"] },
];