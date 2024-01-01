import buildTree from './buildTree.js';
import Node from './node.js';

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }

  insert(value) {
    const insertionNode = new Node(value);
    let currentNode = this.root;

    if (!Number.isInteger(value)) {
      return;
    }

    if (currentNode === null) {
      this.root = insertionNode;
      return;
    }

    let previousNode;
    while (currentNode !== null) {
      previousNode = currentNode;

      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    if (value > previousNode.value) {
      previousNode.right = insertionNode;
    } else {
      previousNode.left = insertionNode;
    }
  }
}

export default Tree;
