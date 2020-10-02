class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let child = new BinarySearchTree(value);
    if (value > this.value) {
      this.right = child;
    }
    if (value < this.value) {
      this.left = child;
    }

    return this;
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
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
module.exports = BinarySearchTree;
