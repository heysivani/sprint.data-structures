class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = this;
  }

  addChild(value) {
    let child = new Tree(value);
    this.children.push(child);
    return child;
  }

  contains(value) {
    let flag = false;

    let finder = (tree) => {
      if (tree.value === value) {
        flag = true;
        return;
      }
      if (tree.children.length !== 0) {
        for (let subTree of tree.children) {
          finder(subTree);
        }
      }
      return;
    };
    finder(this);
    return flag;
  }

  remove(value) {
    let result;

    let finder = (tree) => {
      if (tree.value === value) {
        let nodes = this.findParent();
        for (let child of nodes) {
          child.children = child.children.filter((tree) => {
            tree.value !== value;
          });
        }

        result = value;
        return;
      }
      if (tree.children.length !== 0) {
        for (let subTree of tree.children) {
          finder(subTree);
        }
      }
      return;
    };
    finder(this);
    return result;
  }

  findParent() {
    let parents = [];
    parents.push(this);
    let nodeFinder = (tree) => {
      if (tree.children.length !== 0) {
        for (let child of tree.children) {
          parents.push(child);
          nodeFinder(child);
        }
        return;
      }
      return;
    };
    nodeFinder(this);
    return parents;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
