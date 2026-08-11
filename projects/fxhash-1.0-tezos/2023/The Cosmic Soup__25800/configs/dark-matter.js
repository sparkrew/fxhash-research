const colorPalette = {
    name: "Dark Matter",
    colors: [
        { hex: "#000005", alpha: 0.35, },
        { hex: "#000500", alpha: 0.35, },
        { hex: "#050000", alpha: 0.35, },
    ],
}

export default [
    {
        active: true,
        chance: 0.35,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High",  shapes: 64, iterations: 700 },
        ],

        density: [
            { label: "High", value: 1.11 },
        ],

        energy: [
            "High", 
            // "Medium",
        ],
        
        particles: { min: 2000, max: 3000 },
        
        color: {
            mode: [  "Mono" ],
            palette: colorPalette,
            backgrounds: [
                { label: "Off-White", color: "#eee8d4" },
            ],
        },
    },
    {
        active: true,
        chance: 0.35,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High",  shapes: 32, iterations: 550 },
        ],

        gravity: 2.5,

        density: [
            { label: "Low", value: 2 },
        ],

        energy: [
            "High", 
            // "Medium",
        ],
        
        particles: { min: 2000, max: 4000 },
        
        color: {
            mode: [  "Mono" ],
            palette: colorPalette,
            backgrounds: [
                { label: "Off-White", color: "#eee8d4" },
            ],
        },
    },
]