const colorPalette = {
    name: "Untitled",
    colors: [
        { hex: "#031300", alpha: 0.24, },
        { hex: "#ecdbc7", alpha: 0.12, },
        { hex: "#b1976f", alpha: 0.24, },
        { hex: "#bbb87b", alpha: 0.24, },
        { hex: "#0a6357", alpha: 0.16, },
    ],
}

export default [
    {
        active: false,
        chance: 0,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High",  shapes: 45, iterations: 650 },
        ],

        density: [
            { label: "High", value: 1.11 },
        ],

        energy: [
            "High", 
            "Medium",
            "Low", 
        ],
        
        particles: { min: 1000, max: 2000 },
        
        color: {
            mode: [  
                "Mono", 
                "Discreet",
            ],
            palette: colorPalette,
            loops: 1,
            backgrounds: [
                { label: "Mustard", color: "#f1ae10" },
            ],
        },
    },
]