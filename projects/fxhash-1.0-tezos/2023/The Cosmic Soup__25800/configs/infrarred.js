const colorPalette = {
    name: "Bacchus",
    colors: [
        { hex: "#d30b25", alpha: 0.40, },
    ],
}

export default [
    {
        active: true,
        chance: 0.7,

        mode: [ 
            // "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High",  shapes: 30, iterations: 550 },
        ],

        density: [
            { label: "High", value: 1.3 },
        ],

        energy: [
            "High", 
            "Low",
        ],

        gravity: 1,
        
        particles: { min: 1000, max: 4000 },
        
        color: {
            mode: [  
                "Mono", 
            ],
            palette: colorPalette,
            backgrounds: [
                { label: "Off-White", color: "#fecea8" },
            ],
        },
    },
]