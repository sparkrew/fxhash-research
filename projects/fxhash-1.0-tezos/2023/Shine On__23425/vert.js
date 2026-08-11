const vertexShader = `
    attribute vec4 aVertexPosition;
    
    varying vec2 uv;
    
    void main() {
        gl_Position = aVertexPosition;
        uv = aVertexPosition.xy;
    }
`;