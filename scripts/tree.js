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

  levelOrder(callback) {
    if (this.root === null) {
      return [];
    }

    const queue = [structuredClone(this.root)];
    const returnArray = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      const { left } = currentNode;
      const { right } = currentNode;

      if (left !== null) {
        queue.push(left);
      }

      if (right !== null) {
        queue.push(right);
      }

      if (callback) {
        callback(currentNode);
      } else {
        returnArray.push(currentNode.value);
      }
    }

    if (returnArray.length > 0) {
      return returnArray;
    }
  }

  inOrder(callback, node = structuredClone(this.root)) {
    if (node === null) {
      if (callback) {
        return;
      }
      return [];
    }

    const returnArray = [];
    if (callback) {
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    } else {
      const firstHalf = this.inOrder(callback, node.left);
      const secondHalf = this.inOrder(callback, node.right);

      returnArray.push(...firstHalf);
      returnArray.push(node.value);
      returnArray.push(...secondHalf);
    }

    if (!callback) {
      return returnArray;
    }
  }

  preOrder(callback, node = structuredClone(this.root)) {
    if (node === null) {
      if (callback) {
        return;
      }
      return [];
    }

    const returnArray = [];
    if (callback) {
      callback(node);
      this.preOrder(callback, node.left);
      this.preOrder(callback, node.right);
    } else {
      const firstHalf = this.preOrder(callback, node.left);
      const secondHalf = this.preOrder(callback, node.right);

      returnArray.push(node.value);
      returnArray.push(...firstHalf);
      returnArray.push(...secondHalf);
    }

    if (!callback) {
      return returnArray;
    }
  }

  postOrder(callback, node = structuredClone(this.root)) {
    if (node === null) {
      if (callback) {
        return;
      }
      return [];
    }

    const returnArray = [];
    if (callback) {
      this.postOrder(callback, node.left);
      this.postOrder(callback, node.right);
      callback(node);
    } else {
      const firstHalf = this.postOrder(callback, node.left);
      const secondHalf = this.postOrder(callback, node.right);

      returnArray.push(...firstHalf);
      returnArray.push(...secondHalf);
      returnArray.push(node.value);
    }

    if (!callback) {
      return returnArray;
    }
  }

  height(node = this.root) {
    if (node === null) {
      return -1;
    }
    let leftHeight = 1;
    let rightHeight = 1;

    if (Object.hasOwn(node, 'left')) {
      leftHeight += this.height(node.left);
    }
    if (Object.hasOwn(node, 'right')) {
      rightHeight += this.height(node.right);
    }

    return leftHeight > rightHeight ? leftHeight : rightHeight;
  }

  depth(node = null) {
    if (node === null) {
      return this.height();
    }

    const searchValue = node.value;
    let currentNode = this.root;
    let depth = 0;
    while (currentNode !== null && currentNode.value !== searchValue) {
      const currentValue = currentNode.value;

      if (searchValue > currentValue) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
      depth += 1;
    }

    if (currentNode !== null) {
      return depth;
    }
    return -1;
  }

  isBalanced() {
    let balanced = true;
    const returnValue = this.inOrder((element) => {
      const heightLeft = this.height(element.left);
      const heightRight = this.height(element.right);

      const diff = Math.abs(heightLeft - heightRight);

      if (diff > 1) {
        balanced = false;
      }
    });
    return balanced;
  }

  rebalance() {
    if (!this.isBalanced()) {
      const sortedValues = this.inOrder();
      this.root = buildTree(sortedValues);
    }
  }
}

// TODO: Add levelOrder with recursion

export default Tree;
