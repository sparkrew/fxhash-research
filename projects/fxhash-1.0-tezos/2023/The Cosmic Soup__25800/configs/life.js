const colorPalette = {
    name: "Life",
    colors: [
        { hex: "#f4e5ce", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#ac9aca", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#92cdb7", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#aaa560", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#7bba8b", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#2e7bc1", alpha: 0.35, weight: 1 },  // Showing defaults
        { hex: "#69276e", alpha: 0.35, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: false,
        chance: 3,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 350 },
            // { label: "Low",  shapes: 32, iterations: 500 },
        ],

        density: [
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            // "High",
            "Medium",
            "Low", 
        ],
        
        particles: { min: 1000, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#120e25" },
            ],
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            loops: 0.3,
            gradientSpread: 0.3,
        },
    },
]