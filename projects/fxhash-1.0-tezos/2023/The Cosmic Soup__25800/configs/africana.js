const colorPalette = {
    name: "Africana",
    colors: [
        { hex: "#D2452B", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#385D32", alpha: 0.28, weight: 1 },  // Showing defaults
        // { hex: "#392B24", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#FAB511", alpha: 0.28, weight: 1 },  // Showing defaults
        { hex: "#F9F0DE", alpha: 0.1, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 2.5,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "Low",  shapes: 36, iterations: 650 },
        ],

        density: [
            // { label: "High", value: 1.2 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.97 },
        ],

        energy: [
            "High", 
            "Low", 
        ],
        
        particles: { min: 1000, max: 3000 },

        gravity: 1.5,
        
        color: {
            backgrounds: [
                { label: "Void", color: "#000000" },
            ],
            mode: [  
                "Mono", 
                "Discreet", 
                // "Continuous"
            ],
            palette: colorPalette,
            loops: 1.618,
            gradientSpread: 0.2,
        },
    },
]