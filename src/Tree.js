class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
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
