const knn = function(tree, x, y, n, maxDistance, predicate) {

  const boxDist = function(x, y, box) {
    const axisDist = (k, min, max) =>
      k < min ? min - k : k <= max ? 0 : k - max;
    const dx = axisDist(x, box.minX, box.maxX);
    const dy = axisDist(y, box.minY, box.maxY);
    return dx * dx + dy * dy;
  }

  let node = tree.data;
  const result = [];
  const queue = new TinyQueue(undefined, (a, b) => a.dist - b.dist);

  while (node) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const dist = boxDist(x, y, node.leaf ? tree.toBBox(child) : child);
      if (!maxDistance || dist <= maxDistance * maxDistance) {
        queue.push({
          node: child,
          isItem: node.leaf,
          dist: dist
        });
      }
    }

    while (queue.length && queue.peek().isItem) {
      const candidate = queue.pop().node;
      if (!predicate || predicate(candidate))
        result.push(candidate);
      if (n && result.length === n) {
        return result;
      }
    }

    node = queue.pop();
    if (node) node = node.node;
  }

  return result;
}
