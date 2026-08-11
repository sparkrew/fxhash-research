const colorPalette = {
    name: "Praslin Dawn",
    colors: [
        { hex: "#412147", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#7b2776", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#BB2A17", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#E94E23", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#F49700", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#BD8B5F", alpha: 0.3, weight: 1 },  // Showing defaults
        { hex: "#F9F0DE", alpha: 0.3, weight: 1 },  // Showing defaults
    ],
}

export default [
    {
        active: true,
        chance: 1,

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
                { label: "Void", color: "#0c0c0c" },
            ],
            mode: [  "Mono", "Discreet", "Continuous" ],
            palette: colorPalette,
            loops: 1.618,
            gradientSpread: 0.382,
        },
    },
]