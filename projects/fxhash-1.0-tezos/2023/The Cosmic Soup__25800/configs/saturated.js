const colorPalette = {
    name: "Flamingo",
    colors: [
        { hex: "#31c9ee", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#f55c39", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#ffa836", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#eddae6", alpha: 0.2, weight: 1 },  // Showing defaults
        { hex: "#549c2c", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#c5428d", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#6f4cb8", alpha: 0.4, weight: 1 },  // Showing defaults
        { hex: "#850a10", alpha: 0.2, weight: 1 },  // Showing defaults
        { hex: "#1c1c1c", alpha: 0.2, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 0.3,

        mode: [ 
            "Poster", 
            "Cinematic" 
        ],

        mass: [ 
            { label: "High", shapes: 64, iterations: 400 },
            { label: "Low",  shapes: 32, iterations: 650 },
        ],

        density: [
            { label: "High", value: 1.11 },
            { label: "Medium", value: 1.5 },
            { label: "Low", value: 1.77 },
        ],

        energy: [
            "High", 
            "Low",
            // "Low", 
        ],
        
        particles: { min: 0, max: 3000 },
        
        color: {
            backgrounds: [
                { label: "Pink", color: "#f34f7e" },
            ],
            mode: [  "Mono", "Discreet" ],
            palette: colorPalette,
            loops: 1,
        },
    },
]