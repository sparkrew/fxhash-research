const colorPalette = {
    name: "Circulatory System",
    colors: [
        { hex: "#0f40b8", alpha: 0.22, weight: 1 },  // Showing defaults
        { hex: "#da2719", alpha: 0.22, },
    ],
}

export default [
    {
        active: true,
        chance: 0.4,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "Low",  shapes: 32, iterations: 600 },
        ],

        density: [
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            // { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            "Low",
        ],
        
        particles: { min: 0, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Void", color: "#000000" },
                { label: "Off-White", color: "#d3d1ba" },
            ],
            backgroundsWeights: [ 1, 2 ],
            mode: [  
                "Mono", 
                "Discreet",
                // "Continuous",
            ],
            palette: colorPalette,
            loops: 1,
        },
    },
]