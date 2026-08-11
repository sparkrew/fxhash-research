
function createBoundingQuadBounds(vertices) 
{
    const bounds = getPolygonBounds(vertices);
    const width = bounds.maxX - bounds.minX;
    const height = bounds.maxY - bounds.minY;
  
    const quadVertices = [
      [bounds.minX - width / 2, bounds.minY - height / 2],
      [bounds.maxX + width / 2, bounds.minY - height / 2],
      [bounds.maxX + width / 2, bounds.maxY + height / 2],
      [bounds.minX - width / 2, bounds.maxY + height / 2],
    ];
  
    return getPolygonBounds(quadVertices);
  }
  

function getPolygonBounds(vertices) {
    const xCoords = vertices.map(v => v[0]);
    const yCoords = vertices.map(v => v[1]);
  
    const maxX = Math.max(...xCoords);
    const maxY = Math.max(...yCoords);
    const minX = Math.min(...xCoords);
    const minY = Math.min(...yCoords);
  
    return { maxX, maxY, minX, minY };
  }
  

function isPointInsidePolygon(point, polygon) {
    let inside = false;
    const x = point[0], y = point[1];
  
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0], yi = polygon[i][1];
      const xj = polygon[j][0], yj = polygon[j][1];
  
      const intersect = ((yi > y) != (yj > y)) &&
        (x < ((xj - xi) * (y - yi) / (yj - yi)) + xi);
  
      if (intersect) inside = !inside;
    }
  
    return inside;
}




function hexToRgb(hex) 
{
  //hex = hex.replace('#', '');
  hex = hex.slice(1);
  
  let red = parseInt(hex.substring(0, 2), 16);
  let green = parseInt(hex.substring(2, 4), 16);
  let blue = parseInt(hex.substring(4, 6), 16);
  
  return {red: red, green: green, blue: blue};
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}