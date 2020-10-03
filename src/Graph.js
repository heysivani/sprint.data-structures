class Graph {
  constructor(value) {
    this.value = value;
    this.nodes = {}; // Adjacency List
  }

  addNode(value) {
    this.nodes[value] = [];
    return undefined;
  }

  removeNode(value) {
    this.nodes[value] = undefined;
    return undefined;
  }

  contains(value) {
    if (this.nodes[value] !== undefined) {
      return true;
    }
    return false;
  }

  addEdge(v1, v2) {
    if (this.contains(v1) && this.contains(v2)) {
      if (!this.nodes[v1].includes(v2)) {
        this.nodes[v1].push(v2);
      }
      if (!this.nodes[v2].includes(v1)) {
        this.nodes[v2].push(v1);
      }
      return undefined;
    }

    return "Invalid node value";
  }
  hasEdge() {}
}
module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
