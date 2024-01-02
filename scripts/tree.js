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

      if (currentNode.value === value) {
        return;
      }

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

  delete(searchValue) {
    if (this.root === null) {
      return;
    }

    let previousNode = this.root;
    let currentNode = this.root;
    while (currentNode !== null && currentNode.value !== searchValue) {
      previousNode = currentNode;
      if (searchValue > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    if (currentNode === null) {
      return;
    }

    let previousSide = 'right';
    if (previousNode.left === currentNode) {
      previousSide = 'left';
    }

    const hasLeft = currentNode.left !== null;
    const hasRight = currentNode.right !== null;
    const hasBoth = hasLeft && hasRight;

    if (hasBoth) {
      let preSuccesorNode = currentNode;
      let successorNode = currentNode.right;
      let preSuccesorSide = 'right';

      while (successorNode.left !== null) {
        preSuccesorSide = 'left';
        preSuccesorNode = successorNode;
        successorNode = successorNode.left;
      }

      let succesorValue = successorNode.value;
      preSuccesorNode[preSuccesorSide] = successorNode.right;

      currentNode.value = succesorValue;
    } else if (hasLeft) {
      previousNode[previousSide] = currentNode.left;
    } else if (hasRight) {
      previousNode[previousSide] = currentNode.right;
    } else {
      previousNode[previousSide] = null;
    }
  }

  find(searchValue) {
    if (this.root === null) {
      return null;
    }

    let currentNode = this.root;
    while (currentNode !== null && currentNode.value !== searchValue) {
      if (searchValue > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return currentNode;
  }
}

export default Tree;
