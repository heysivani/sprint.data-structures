class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let newNode = new BinarySearchTree(value);

    let recurser = (tree) => {
      if (value < tree.value) {
        // if value is smaller, check if left is null
        if (tree.left !== null) {
          recurser(tree.left);
        } else {
          // if no left, insert new node here
          tree.left = newNode;
          return;
        }
      } else if (value > tree.value) {
        // if value is bigger, check if right is null
        if (tree.right !== null) {
          recurser(tree.right);
        } else {
          // if no right, insert new node here
          tree.right = newNode;
          return;
        }
      }
    };

    recurser(this);
    return this;
  }

  contains(value) {
    let flag = false;

    let finder = (tree) => {
      if (tree.value === value) {
        flag = true;
        return;
      }
      if (tree.value > value) {
        if (tree.left !== null) {
          finder(tree.left);
        }
      }
      if (tree.value < value) {
        if (tree.right !== null) {
          finder(tree.right);
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
