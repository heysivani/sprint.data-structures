function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    this.head = headValue !== undefined ? new Node(headValue) : undefined;
    this.tail = headValue !== undefined ? this.head : undefined;
  }

  appendToTail(value) {
    let newNode = new Node(value);

    // if there is an initial value
    if (this.head !== undefined) {
      let oldTail = this.tail;
      this.tail = newNode;
      oldTail.next = newNode;
    } else {
      // if no initial value
      this.head = newNode;
      this.tail = newNode;
    }
    return this.tail;
  }

  removeHead() {
    let removedHead = this.head;
    this.head = this.head.next;
    return removedHead;
  }

  findNode(value) {
    let foundNode = null;

    let finder = (node) => {
      if (node.value === value) {
        foundNode = node;
        return;
      } else if (node.next === null) {
        return;
      } else {
        finder(node.next);
      }
    };

    finder(this.head);
    return foundNode;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Node: constant
constructor: constant
appendToTail: constant
removeHead: constant
findNode: linear

*/
