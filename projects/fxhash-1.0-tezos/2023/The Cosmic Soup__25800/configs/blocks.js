const colorPalette = {
    name: "Chalk",
    colors: [
        { hex: "#f8b22e", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#fb8530", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#99d0b2", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#12ac84", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#6ca6ce", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#317eb6", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#966198", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#ec95a5", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#e05362", alpha: 0.30, weight: 1 },  // Showing defaults
        { hex: "#cc2828", alpha: 0.30, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 1,

        mode: [ 
            "Poster", 
            "Cinematic",
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            { label: "Low",  shapes: 32, iterations: 650 },
        ],

        density: [
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            "Low",
        ],
        
        particles: { min: 500, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#1d1d1b" },
                // { label: "Off-White", color: "#f3eee8" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            loops: 1,
            gradientSpread: 0.618,
        },
    },
]