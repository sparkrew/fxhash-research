const colorPalette = {
    name: "The Starry Night",
    colors: [
        { hex: "#78cec9", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#0c88d5", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#ffc323", alpha: 0.26, weight: 1 },  // Showing defaults
        { hex: "#049dd9", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#fcf7a7", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#0468bf", alpha: 0.2, weight: 1 },  // Showing defaults
        { hex: "#0a2740", alpha: 0.2, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 3,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            // { label: "Low",  shapes: 32, iterations: 600 },
        ],

        density: [
            // { label: "High", value: 1.4 },
            { label: "Medium", value: 1.7 },
            { label: "Low", value: 2 },
        ],

        energy: [
            "High",
            "Low",
            // "Low", 
        ],
        
        particles: { min: 500, max: 3000 },

        gravity: 1.5,
        
        color: {
            mode: [  
                "Mono", 
                "Discreet",
                "Continuous",
            ],
            palette: colorPalette,
            gradientSpread: 0.3,
            loops: 1.68,
            backgrounds: [
                { label: "Void", color: "#000000" },
            ],
        },
    },
]