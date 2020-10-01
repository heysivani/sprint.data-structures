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

  contains(root = this, value) {
    /* if (root.children === null){
      return false;
    }
    if (root.children.includes(value))

  }
*/

    let finder = (tree) => {
      for (let child in tree) {
        if (value === value) {
          return true;
        }
        if (child.children !== undefined) {
          finder(tree.children);
        }
      }
      console.log("return");
      return false;
    };
    let result = finder(this);
    return result;
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
