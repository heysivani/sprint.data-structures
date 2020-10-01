function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    this.list = [];
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
    if (headValue === undefined) {
      this.tail;
      this.head;
    }
  }

  appendToTail(value) {
    if (this.list.length === 0) {
      let newNode = new Node(value);
      this.list.push(newNode);
      this.tail = newNode;
      this.head = this.tail;
      return this.tail;
    }
    let newNode = new Node(value);
    this.list.push(newNode);

    this.tail = newNode;
    return this.tail;
  }

  removeHead() {
    let oldHead = this.head;
    let tempHead = this.head.next;
    this.list.shift();
    this.list.unshift(tempHead);
    this.head = tempHead;
    return oldHead;
  }

  findNode(value) {
    for (let object of this.list) {
      if (object.value === value) {
        return object;
      }
    }
    return null;
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
*/
