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
    for (let element in this.nodes) {
      if (this.nodes[element].includes(value)) {
        let integer = parseInt(element);
        this.removeEdge(integer, value);
      }
    }
    delete this.nodes[value];
    return undefined;
  }

  contains(value) {
    if (this.nodes[value] !== undefined) {
      return true;
    }
    return false;
  }

  removeEdge(v1, v2) {
    for (let i = 0; i < this.nodes[v1].length; i++) {
      if (this.nodes[v1][i] === v2) {
        this.nodes[v1].splice(i, 1);
      }
      for (let i = 0; i < this.nodes[v2].length; i++) {
        if (this.nodes[v2][i] === v1) {
          this.nodes[v2].splice(i, 1);
        }
      }
      return undefined;
    }
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

  hasEdge(v1, v2) {
    if (this.nodes[v1].includes(v2)) {
      return true;
    }
    if (this.nodes[v2].includes(v1)) {
      return true;
    }
    return false;
  }
}
module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

constructor: constant
addNode: constant
removeNode: quartic
contains: constant
addEdge: constant
removeEdge: quadratic
hasEdge: linear
*/
